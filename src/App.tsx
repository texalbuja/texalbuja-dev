import { useState, useEffect } from "react";
import { Layout, LandingPage } from "./components";
import HowToInstallTerraform from "./pages/labs/how-to-install-terraform";
import "./App.css";

function App() {
  const [currentRoute, setCurrentRoute] = useState<string>("");

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.hash || "/");
    };

    handleRouteChange();
    window.addEventListener("hashchange", handleRouteChange);

    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case "#labs/how-to-install-terraform":
        return <HowToInstallTerraform />;
      default:
        return <LandingPage />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
}

export default App;
