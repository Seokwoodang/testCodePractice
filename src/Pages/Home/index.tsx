import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => navigate(`/calculator`)}>Calculator</button>
    </div>
  );
};

export default Home;
