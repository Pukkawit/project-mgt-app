import { useState } from "react";
import LandingPage from "./pages/Landingpage/LandingPage";
import Header from "./AppHeader";
import Footer from "./Footer";
import Profile from "./pages/Profile/Profile";

const Application = () => {
  const [isLogin /* setIsLogin */] = useState(true);
  return (
    <div className="max-container">
      {!isLogin ? (
        <>
          <Header />
          <LandingPage />
          <Footer />
        </>
      ) : (
        <Profile />
      )}
    </div>
  );
};

export default Application;
