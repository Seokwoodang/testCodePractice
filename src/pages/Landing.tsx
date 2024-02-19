import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      여기는 LandingPage 입니다.
      <div>
        <button
          onClick={() => {
            navigate(`/login`);
          }}
        >
          loginPage
        </button>
        <button
          onClick={() => {
            navigate(`/signup`);
          }}
        >
          signUpPage
        </button>
      </div>
    </div>
  );
};

export default Landing;
