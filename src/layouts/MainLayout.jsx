import { Box, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Heading from "../components/Heading";
import PageHeader from "../components/PageHeader";

const MainLayout = () => {
  const classes = useStyle();
  return (
    <Box className={classes.constainer} component="div">
      <Heading />
      <Divider />
      <PageHeader />
      <Divider />
    </Box>
  );
};

export default MainLayout;
const useStyle = makeStyles((theme) => ({
  constainer: {
    margin: "0 10px",
  },
}));
