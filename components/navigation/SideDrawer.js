import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";

import styles from "./SideDrawer.module.css";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    backgroundColor: "#f4d688",
  },
  menuButton: {
    position: "absolute",
    right: 20,
  },
  listItemText: {
    fontSize: "34px",
  },
  menuText: {
    fontFamily: "Aleo-Bold",
    color: "black",
    marginTop: "1vh",
    marginBottom: "1vh",
    color: "#3a3738",
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.drawer}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        size="medium"
        onClick={handleDrawerOpen}
        id={styles.menuButton}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} color="inherit">
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon fontSize="large" />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Home"}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.menuText} variant="h6">
                  {"Home"}
                </Typography>
              }
            />
          </ListItem>
          <Link href="/museum/manifesto">
            <ListItem button key={"Manifesto"}>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.menuText} variant="h6">
                    {"Manifesto"}
                  </Typography>
                }
              />
            </ListItem>
          </Link>
          <ListItem button key={"Supermarket Museum"}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.menuText} variant="h6">
                  {"Supermarket Museum"}
                </Typography>
              }
            />
          </ListItem>
          <ListItem button key={"About"}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.menuText} variant="h6">
                  {"About"}
                </Typography>
              }
            />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
