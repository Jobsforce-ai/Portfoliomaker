import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NotFound from "./page/NotFound";

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
    return <NotFound />;
  }

  // If authorized, render the children components
  return children;
};

export default AuthWrapper;
