import React, { useState, useEffect } from "react";
import { PageLayout, NavList, Heading, Header, Avatar } from "@primer/react";
import logo from "../assets/logo.svg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>("");

  useEffect(() => {
    const getCurrentRoute = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;
      // For hash-based navigation, use the hash, otherwise use pathname
      return hash || pathname || "/";
    };

    // Set initial route
    setCurrentRoute(getCurrentRoute());

    // Listen for hash changes (for SPA navigation)
    const handleHashChange = () => {
      setCurrentRoute(getCurrentRoute());
    };

    // Listen for popstate events (for browser back/forward)
    const handlePopState = () => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <PageLayout style={{ padding: "0px"}} containerWidth="full">
      <PageLayout.Header>
        <Header>
          <Header.Item>
            <Header.Link href="#">
              <img src={logo} alt="Logo" style={{ height: "32px" }} />
            </Header.Link>
          </Header.Item>
        </Header>
      </PageLayout.Header>
      <PageLayout.Pane position="start" width="large">
        <div style={{ padding: "1rem" }}>
          <NavList>
            <NavList.Item
              href="#tld"
              aria-current={currentRoute === "#tld" ? "page" : undefined}
            >
              Technical Leadership
            </NavList.Item>
            <NavList.Item
              href="#aws-academy"
              aria-current={
                currentRoute === "#aws-academy" ? "page" : undefined
              }
            >
              AWS Academy
            </NavList.Item>
            <NavList.Item
              href="#about-me"
              aria-current={currentRoute === "#about-me" ? "page" : undefined}
            >
              About Me
            </NavList.Item>
          </NavList>
        </div>
      </PageLayout.Pane>
      <PageLayout.Content>{children}</PageLayout.Content>
    </PageLayout>
  );
};

export default Layout;
