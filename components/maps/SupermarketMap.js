import React from "react";

import { useRouter } from "next/router";

import Modal from "@material-ui/core/Modal";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { useContextualRouting } from "next-use-contextual-routing";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import styles_map from "../../styles/map.module.css";
import styles from "./ExampleSvg.module.css";

import Image from "next/image";
import TooltipLabel from "./Labels/TooltipLabel";

export default function SupermarketMap({ artifactModels, openArtifact }) {
  const { makeContextualHref, returnHref } = useContextualRouting();
  const router = useRouter();
  console.log(openArtifact);
  console.log(artifactModels);
  const [show, setShow] = React.useState(false);
  const [currentArtifact, setCurrentDisplayedArtifact] = React.useState(null);

  const handleClose = () => {
    setCurrentArtifact(null);
    setShow(false);
    if (openArtifact == null) {
      router.push(returnHref, undefined, { shallow: true });
    } else {
      router.push("/museum", undefined, { shallow: true });
    }
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
      setIsClicked(true);
      setShow(true);
    }
  };

  const setCurrentArtifact = (slug) => {
    let artifactModelId = -1;
    console.log(artifactModels);
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
              <h1 className="heading">{currentArtifact.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: currentArtifact.artifactContent.text,
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

  const [isImageReady, setIsImageReady] = React.useState(false);

  const onLoadCallBack = (e) => {
    setIsImageReady(true);
    console.log("ready");
    typeof onLoad === "function" && onLoad(e);
  };

  const handleLoad = () => {
    setIsImageReady(true);
    console.log("ready");
    typeof onLoad === "function" && onLoad(e);
  };

  React.useEffect(() => {
    if (image.current.complete) {
      console.log("ready");
      setIsImageReady(true);
    }
  }, []);

  const image = React.useRef();

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
                ref={image}
                className={styles_map.mapImage}
                src="/supermarket/supermarket_1.png"
                onLoad={handleLoad}
              />
              <div className={styles_map.allTooltips}>
                <div className={styles_map.tooltip}>
                  {/*stand z pocztowkami*/}
                  <TooltipLabel
                    artifactTitle={"stand z pocztówkami"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"39.2%"}
                    yLocation={"73.5%"}
                  />
                  {/*lampa*/}
                  <TooltipLabel
                    artifactTitle={"lampa"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"51.6%"}
                    yLocation={"32.6%"}
                  />
                  {/*okno*/}
                  <TooltipLabel
                    artifactTitle={"okno"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"88.7%"}
                    yLocation={"24.2%"}
                  />
                  {/*stand z gazetkami*/}
                  <TooltipLabel
                    artifactTitle={"stand z gazetkami"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"58.1%"}
                    yLocation={"92%"}
                  />
                  {/*smietniki*/}
                  <TooltipLabel
                    artifactTitle={"śmietniki"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"95.3%"}
                    yLocation={"24.2%"}
                  />
                  {/*stand z ksiazkami*/}
                  <TooltipLabel
                    artifactTitle={"stand z ksiązkami"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"16.8%"}
                    yLocation={"62.5%"}
                  />
                  {/*nasiona do kupienia*/}
                  <TooltipLabel
                    artifactTitle={"nasiona do kupienia"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"11.2%"}
                    yLocation={"48.5%"}
                  />
                  {/*jablka*/}
                  <TooltipLabel
                    artifactTitle={"jablka"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"76.2%"}
                    yLocation={"72.5%"}
                  />
                  {/*wozki*/}
                  <TooltipLabel
                    artifactTitle={"wózki sklepowe"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"68.3%"}
                    yLocation={"92%"}
                  />
                  {/*stand z warzywami*/}
                  <TooltipLabel
                    artifactTitle={"superdisconnect"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"85.2%"}
                    yLocation={"66.8%"}
                  />
                  {/*kasa samoobslugowa*/}
                  <TooltipLabel
                    artifactTitle={"kasa samoobslugowa"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"36.2%"}
                    yLocation={"75.6%"}
                  />
                  {/*lustro*/}
                  <TooltipLabel
                    artifactTitle={"lustro"}
                    artifactSlug={"supermarket-vr"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"39.2%"}
                    yLocation={"50.6%"}
                  />
                  {/*clothes*/}
                  <TooltipLabel
                    artifactTitle={"lustro"}
                    artifactSlug={"ghostly-individuality"}
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
