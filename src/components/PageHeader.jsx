import React from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomIcon from "./CustomIcon";
import theme from "../common/theme/theme";
import CustomAvatar from "./CustomAvatar";
import CustomButton from "./CustomButton";

const PageHeader = () => {
  const classes = useStyle();
  return (
    <Box component="div" className={classes.container}>
      <Grid container>
        <Grid item md="6">
          <Box className={classes.column}>
            <Typography
              variant="h3"
              sx={{ mb: 0, fontSize: 22, fontWeight: 600 }}
            >
              Workflow
            </Typography>
            <Stack direction="row" spacing={2} sx={{ ml: 2 }}>
              <CustomIcon
                bgColor={theme.palette.background.lightBlue}
                borderRadius="50%"
                iconProps={{ icon: "bell", color: "#fff", size: "xs" }}
              />
              <CustomIcon
                bgColor="#BABBC1"
                borderRadius="50%"
                iconProps={{
                  icon: "code",
                  color: "#444344",
                  size: "xs",
                }}
              />
              <CustomIcon
                bgColor="#BABBC1"
                borderRadius="50%"
                iconProps={{ icon: "bell", color: "#444344", size: "xs" }}
              />
              <CustomIcon
                bgColor="#BABBC1"
                borderRadius="50%"
                iconProps={{ icon: "bell", color: "#444344", size: "xs" }}
              />
            </Stack>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ ml: 1.5, height: 30 }}
            />
            <Stack direction="row" spacing={0.5} sx={{ ml: 1 }}>
              <CustomAvatar size={30} />
              <CustomAvatar size={30} />
              <CustomAvatar size={30} />
              <CustomAvatar size={30} />
            </Stack>
          </Box>
        </Grid>
        <Grid item md="6" className={classes.colRight}>
          <Stack direction="row" spacing={2}>
            <CustomIcon
              boxShadow
              iconProps={{
                icon: "thumb-tack",
                color: "#FAAD14",
                size: "xs",
              }}
            />
            <CustomIcon
              boxShadow
              iconProps={{
                icon: "clone",
                size: "xs",
              }}
            />
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={
                <CustomIcon
                  iconProps={{
                    icon: "floppy-disk",
                  }}
                />
              }
            >
              Views
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={
                <CustomIcon
                  iconProps={{
                    icon: "bars-staggered",
                  }}
                />
              }
            >
              Filter
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={
                <CustomIcon
                  iconProps={{
                    icon: "arrow-down-wide-short",
                  }}
                />
              }
            >
              Sort
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageHeader;
const useStyle = makeStyles((theme) => ({
  container: {
    // padding: "10px 0",
    height: 60,
    display: "flex",
    alignItems: "center",
  },
  column: {
    display: "flex",
    alignItems: "center",
  },
  colRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: 600,
    height: 40,
    color: "GrayText",
  },
}));
