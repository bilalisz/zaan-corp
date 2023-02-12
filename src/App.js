import logo from "./logo.svg";
import "./App.css";
import { Box, Grid, Paper } from "@mui/material";
import SideMenu from "./layouts/SideMenu";
import MainLayout from "./layouts/MainLayout";
import "./common/fontAwesome";

function App() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item md="2">
          <SideMenu />
        </Grid>
        <Grid item md="10">
          <MainLayout />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
