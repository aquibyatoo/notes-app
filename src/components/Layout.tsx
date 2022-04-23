import { Box } from "@mui/system";
import * as React from "react";
import Header from "./Header";

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <Box sx={{ maxWidth: "60rem", margin: "auto" }}>
      <Header />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
