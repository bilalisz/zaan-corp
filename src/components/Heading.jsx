import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, ButtonGroup, Divider, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import theme from "../common/theme/theme";
import CustomAvatar from "./CustomAvatar";
import CustomBadge from "./CustomBadge";
import CustomButton from "./CustomButton";
import CustomIcon from "./CustomIcon";
import CustomIconButton from "./CustomIconButton";
import CustomTextField from "./CustomTextField";

const Heading = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Grid container spacing={1}>
        <Grid item md="3">
          <Box className={classes.chaneelUser}>
            <ButtonGroup
              sx={{ p: 1, backgroundColor: "#F0F1F2", borderRadius: 2 }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomAvatar src="https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg" />
                <CustomBadge backgroundColor="#FAAD14" />
              </Box>
              <Divider orientation="vertical" component="hr" />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomAvatar src="https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg" />
                <CustomBadge backgroundColor="#B0A1DF" />
              </Box>
            </ButtonGroup>
            <CustomIcon
              border="grayText"
              iconProps={{ icon: "lightbulb", size: "xl" }}
            />

            <CustomIcon
              bgColor={theme.palette.background.lightBlue}
              iconProps={{ icon: "plus", color: "#fff", size: "xl" }}
            />
          </Box>
        </Grid>
        <Grid item md="7">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomTextField
              placeholder="search"
              InputProps={{
                startAdornment: (
                  <CustomIcon iconProps={{ icon: "search", size: "x2" }} />
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item md="2">
          <Stack direction="row" spacing={2}>
            <CustomIcon border="grayText" iconProps={{ icon: "bell" }} />
            <CustomIcon border="grayText" iconProps={{ icon: "calendar" }} />
            <CustomIcon border="grayText" iconProps={{ icon: "message" }} />

            <CustomAvatar src="https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg" />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Heading;
const useStyle = makeStyles((theme) => ({
  container: {
    height: 50,
    padding: "20px 10px",
  },
  chaneelUser: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  groupAvaters: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F0F1F2",
    borderRadius: 8,
  },
}));
