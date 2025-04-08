import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex gap-10">
        <Link
          className="bg-emerald-100 p-3 rounded-lg"
          to="/portfolio/template-1"
        >
          Checkout Template 1
        </Link>
        <Link
          className="bg-gray-950 p-3 rounded-lg text-white"
          to="/portfolio/template-2"
        >
          Checkout Template 2
        </Link>
      </div>
    </div>
  );
};

export default Home;
