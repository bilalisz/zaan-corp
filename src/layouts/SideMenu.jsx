import React from "react";

import {
  Badge,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Circle from "../components/Circle";
import theme from "../common/theme/theme";
import { company, getSideMenuList } from "../common/data/sidemenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideMenuList = getSideMenuList();
const SideMenu = () => {
  const classes = useStyle();

  return (
    <Box className={classes.container}>
      <Box sx={{ m: 1 }}>
        <Drawer
          sx={{
            // width: 250,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 257,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Circle size="x" color={theme.palette.background.lightGreen1} />

              <Typography className={classes.heading} variant="h6">
                Zaan-Corp
              </Typography>
            </Box>
          </Toolbar>
          <Divider />

          <List className={classes.listing}>
            {SideMenuList.map((list) => (
              <ListItem key={list.id}>
                <ListItemButton>
                  <Box className={classes.listBox}>
                    <FontAwesomeIcon icon={list.icon} size="xl" color="gray" />
                    <Typography sx={{ ml: 2, fontSize: 15, color: "GrayText" }}>
                      {list.label}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className={classes.listing}>
            {company.map((list) => (
              <ListItem key={list.id}>
                <ListItemButton>
                  <Box className={classes.listBox}>
                    <FontAwesomeIcon icon={list.icon} size="xl" color="gray" />
                    <Typography sx={{ ml: 2, fontSize: 15, color: "GrayText" }}>
                      {list.label}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideMenu;
const useStyle = makeStyles((theme) => ({
  container: {
    "& .MuiListItem-root": {
      paddingTop: 0,
      paddingButtom: 0,
    },
  },
  heading: {
    fontSize: 18,
    fontWeight: "600 !important",
    textAlign: "center",
    margin: "10px !important",
  },
  listing: {
    paddingTop: 0,
    paddingButtom: 0,
  },

  listBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
