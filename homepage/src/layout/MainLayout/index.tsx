import { type FC } from "react";
import Head from "next/head";
import { Box } from "@mui/material";

import Header from "./Header";

interface IProps {
  redirect?: string;
  children?: React.ReactNode;
}
const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>长亭牧云主机管理助手</title>
        <meta
          name="description"
          content="长亭牧云主机管理助手"
        />
        <meta name="keywords" content="长亭,牧云,主机管理,堡垒机,跳板机" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/collie.png" />
      </Head>

      <Box
        sx={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
