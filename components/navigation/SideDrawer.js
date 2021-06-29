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

import { useContextualRouting } from "next-use-contextual-routing";
import { useRouter } from "next/router";
import Modal from "@material-ui/core/Modal";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Box, Grid } from "@material-ui/core";
import { NoSsr } from "@material-ui/core";

import { getAllAgroPermaLabInfo } from "../../api/graphcms";

import styles from "./SideDrawer.module.css";

// const useStyles = makeStyles((theme) => ({
//   drawerPaper: {
//     backgroundColor: "#f4d688",
//   },
//   menuButton: {
//     position: "absolute",
//     right: 20,
//   },
//   listItemText: {
//     fontSize: "34px",
//   },
//   menuText: {
//     fontFamily: "Aleo-Bold",
//     color: "black",
//     marginTop: "1vh",
//     marginBottom: "1vh",
//     color: "#3a3738",
//   },
// }));

export default function PersistentDrawerRight({
  infoPages,
  openInfoPage,
  currentPage,
}) {
  // const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { makeContextualHref, returnHref } = useContextualRouting();
  const router = useRouter();
  const [showManifesto, setShowManifesto] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [currentInfoPage, setCurrentInfoPage] = React.useState(null);

  const handleShow = (slug) => {
    console.log(openInfoPage);
    if (openInfoPage != null) {
      setCurrentDisplayedInfoPage(openInfoPage);
    } else {
      setCurrentDisplayedInfoPage(slug);
      const url = "/" + slug;
      router.push(makeContextualHref(), url, {
        shallow: true,
      });
    }
    setShow(true);
  };

  const setCurrentDisplayedInfoPage = (slug) => {
    let infoPageId = -1;

    for (var i = 0; i < infoPages.length; i++) {
      // look for the entry with a matching `code` value
      if (infoPages[i].slug === slug) {
        infoPageId = i;
      }
    }
    const infoPage = infoPages[infoPageId];
    setCurrentInfoPage(infoPage);
    console.log(infoPage);
  };

  React.useEffect(() => {
    setShow(false);
    if (openInfoPage != null) {
      handleShow(openInfoPage);
    }
  }, []);

  const handleShowManifesto = () => {
    router.push(makeContextualHref(), "/manifesto", {
      shallow: "true",
    });
    setShowManifesto(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setShow(false);
    console.log(currentPage);
    router.push(`/${currentPage}`, undefined, {
      shallow: "true",
    });
  };

  const body = (
    <>
      {currentInfoPage != null ? (
        <>
          <div className="modalCanvas">
            <div className="closeIcon">
              <IconButton onClick={handleClose}>
                <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
              </IconButton>
            </div>
            <Box p={(2, 4)} className="modalBoxContainer">
              <Grid item xs={12} md={12}>
                <div className="modalContentAdjusted">
                  <h1 className="heading">{currentInfoPage.title}</h1>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12}>
                      <div
                        className={"artifactDescription"}
                        dangerouslySetInnerHTML={{
                          __html: currentInfoPage.content.html,
                        }}
                      ></div>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={5}
                    className={"technicalInformationContainer"}
                  >
                    <Grid item xs={12} md={12} lg={6}>
                      <div className={"technicalInformation"} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                      <div className={"technicalInformation"} />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Box>
          </div>
        </>
      ) : null}
    </>
  );

  return (
    <NoSsr>
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

        <Drawer variant="persistent" anchor="right" open={open}>
          <div>
            <IconButton onClick={handleDrawerClose} color="inherit">
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />

          <List className={styles.listItems}>
            <ListItem button key={"Home"} onClick={() => router.push("/")}>
              <ListItemText
                disableTypography
                primary={<Typography variant="h6">{"Home"}</Typography>}
              />
            </ListItem>

            <ListItem
              button
              key={"Supermarket Museum"}
              onClick={() => router.push("/museum")}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography variant="h6">{"Supermarket Museum"}</Typography>
                }
              />
            </ListItem>

            <ListItem button key={"Garden"}>
              <ListItemText
                disableTypography
                primary={<Typography variant="h6">{"Garden"}</Typography>}
              />
            </ListItem>

            <ListItem
              button
              key={"Manifesto"}
              onClick={() => handleShow("manifesto")}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="h6">{"Manifesto"}</Typography>}
              />
            </ListItem>
            <ListItem
              button
              key={"Manifesto"}
              onClick={() => handleShow("about")}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="h6">{"About"}</Typography>}
              />
            </ListItem>

            <ListItem
              button
              key={"Manifesto"}
              onClick={() => handleShow("contact")}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="h6">{"Contact"}</Typography>}
              />
            </ListItem>
            <ListItem
              button
              key={"Manifesto"}
              onClick={() => handleShow("materials")}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="h6">{"Materials"}</Typography>}
              />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Modal open={show}>
          <>{body}</>
        </Modal>
      </div>
    </NoSsr>
  );
}
