import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        // Extract the userId from params
        const userId = params.userid || "";

        // Extract the theme from the current path
        // The path format is like "/template-1/userid" where "template-1" is the theme
        const pathParts = location.pathname.split("/");
        const theme = pathParts[1]; // This will get "template-1", "template-2", etc.

        // Make the API call to check authorization
        const response = await fetch(
          `https://api.jobsforce.ai/api/portfolio/${theme}/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Authorization failed with status: ${response.status}`
          );
        }

        const data = await response.json();

        // Check if the user is authorized based on API response
        if (data.profileData) setIsAuthorized(true);
      } catch (err: any) {
        console.error("Authorization check failed:", err);
        setError(err.message);
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthorization();
  }, [params.userid]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
          <p className="text-gray-500 mt-2">
            Please wait while we verify your access.
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-8 max-w-md bg-white rounded-lg shadow-md">
          <div className="text-red-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Access Denied
          </h1>
          <p className="text-gray-600 mb-6">
            {error || "You don't have permission to view this portfolio."}
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // If authorized, render the children components
  return children;
};

export default AuthWrapper;
