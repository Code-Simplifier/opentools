import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="p-20">{children}</div>
    </div>
  );
}

export default Layout;
