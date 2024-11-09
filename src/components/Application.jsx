import { useState } from "react";
import LandingPage from "./pages/Landingpage/LandingPage";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./pages/Profile/Dashboard";

const Application = () => {
  const [isLogin /* setIsLogin */] = useState(false);
  return (
    <div className="max-container">
      {!isLogin ? (
        <>
          <Header />
          <LandingPage />
          <Footer />
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Application;
