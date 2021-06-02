import React from "react";

import { useRouter } from "next/router";

import Modal from "@material-ui/core/Modal";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useContextualRouting } from "next-use-contextual-routing";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import styles_map from "../../styles/map.module.css";
import styles from "./ExampleSvg.module.css";
import { IconButton } from "@material-ui/core";

import Image from "next/image";
import TooltipLabel from "./Labels/TooltipLabel";

export default function SupermarketMap({ artifactModels, openArtifact }) {
  const { makeContextualHref, returnHref } = useContextualRouting();
  const router = useRouter();
  console.log(openArtifact);
  const [show, setShow] = React.useState(false);
  const [currentArtifact, setCurrentDisplayedArtifact] = React.useState(null);

  const handleClose = () => {
    setCurrentArtifact(null);
    if (openArtifact == null) {
      router.push(returnHref, undefined, { shallow: true });
    } else {
      router.push(returnHref, undefined, { shallow: true });
    }

    setShow(false);
  };

  const handleShow = (slug) => {
    if (openArtifact != null) {
      setCurrentArtifact(openArtifact);
      setIsClicked(true);
      setShow(true);
    } else {
      const url = "museum/artifacts/" + slug;
      router.push(makeContextualHref(), url, {
        shallow: true,
      });
    }
    setIsClicked(true);
    setShow(true);
  };

  const setCurrentArtifact = (slug) => {
    let artifactModelId = -1;
    if (openArtifact == null) {
      for (var i = 0; i < artifactModels.length; i++) {
        // look for the entry with a matching `code` value
        if (artifactModels[i].slug === slug) {
          artifactModelId = i;
        }
      }
    } else {
      for (var i = 0; i < artifactModels.length; i++) {
        // look for the entry with a matching `code` value
        if (artifactModels[i].slug === slug) {
          artifactModelId = i;
        }
      }
    }
    const artifactModel = artifactModels[artifactModelId];
    setCurrentDisplayedArtifact(artifactModel);
  };

  const body = (
    <>
      {currentArtifact != null ? (
        <div className="modalCanvas">
          <div className="closeIcon">
            <IconButton onClick={handleClose}>
              <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
            </IconButton>
          </div>
          <Box p={(2, 4)} className="boxContainer">
            <Grid item xs={12} md={12}>
              <h1 className="heading">{currentArtifact.artifactTitle}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: currentArtifact.artifactContent.html,
                }}
              />
            </Grid>
          </Box>
        </div>
      ) : null}
    </>
  );

  const [isClicked, setIsClicked] = React.useState(false);

  const hideTooltip = () => {
    handleShow();
    setIsClicked(true);
  };

  const showTooltip = (slug) => {
    setCurrentArtifact(slug);
    setIsClicked(false);
  };

  React.useEffect(() => {
    if (openArtifact != null) {
      handleShow(openArtifact);
    }
  }, []);

  return (
    <>
      <TransformWrapper options={{ limitToBounds: false, minScale: 0.3 }}>
        {({
          zoomIn,
          zoomOut,
          resetTransform,
          setPositionX,
          setPositionY,
          ...rest
        }) => (
          <TransformComponent className={styles_map.TransformComponent}>
            <div className={styles_map.mapWrapper}>
              <img
                className={styles_map.mapImage}
                src="/supermarket/supermarket.png"
              />

              <div className={styles_map.allTooltips}>
                <div className={styles_map.tooltip}>
                  {/*stand z pocztowkami*/}
                  <TooltipLabel
                    artifactTitle={"stand z pocztówkami"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"39.2%"}
                    yLocation={"73.5%"}
                  />
                  {/*lampa*/}
                  <TooltipLabel
                    artifactTitle={"lampa"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"51.6%"}
                    yLocation={"32.6%"}
                  />
                  {/*okno*/}
                  <TooltipLabel
                    artifactTitle={"okno"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"88.7%"}
                    yLocation={"24.2%"}
                  />
                  {/*stand z gazetkami*/}
                  <TooltipLabel
                    artifactTitle={"stand z gazetkami"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"58.1%"}
                    yLocation={"92%"}
                  />
                  {/*smietniki*/}
                  <TooltipLabel
                    artifactTitle={"śmietniki"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"95.3%"}
                    yLocation={"24.2%"}
                  />
                  {/*stand z ksiazkami*/}
                  <TooltipLabel
                    artifactTitle={"stand z ksiązkami"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"16.8%"}
                    yLocation={"62.5%"}
                  />
                  {/*nasiona do kupienia*/}
                  <TooltipLabel
                    artifactTitle={"nasiona do kupienia"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"11.2%"}
                    yLocation={"48.5%"}
                  />
                  {/*jablka*/}
                  <TooltipLabel
                    artifactTitle={"jablka"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"76.2%"}
                    yLocation={"72.5%"}
                  />
                  {/*wozki*/}
                  <TooltipLabel
                    artifactTitle={"wózki sklepowe"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"68.3%"}
                    yLocation={"92%"}
                  />
                  {/*stand z warzywami*/}
                  <TooltipLabel
                    artifactTitle={"superdisconnect"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"85.2%"}
                    yLocation={"66.8%"}
                  />
                  {/*kasa samoobslugowa*/}
                  <TooltipLabel
                    artifactTitle={"kasa samoobslugowa"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"36.2%"}
                    yLocation={"75.6%"}
                  />
                  {/*lustro*/}
                  <TooltipLabel
                    artifactTitle={"lustro"}
                    artifactSlug={"example-artifact"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"39.2%"}
                    yLocation={"50.6%"}
                  />
                </div>
              </div>
            </div>
          </TransformComponent>
        )}
      </TransformWrapper>
      <Modal open={openArtifact == null ? show : true}>{body}</Modal>
    </>
  );
}
