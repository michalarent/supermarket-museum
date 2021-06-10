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
import TooltipInfo from "./Labels/TooltipInfo";
import TooltipLabelSynthesizer from "./Labels/TooltipLabelSynthesizer";
import Synthesizer from "../../pages/museum/artifacts/synthesizer";
import UkraineArtifact from "../../pages/museum/artifacts/ukraine";

export default function SupermarketMap({
  artifactModels,
  openArtifact,
  labels,
}) {
  const { makeContextualHref, returnHref } = useContextualRouting();
  const router = useRouter();
  console.log(labels);
  const [show, setShow] = React.useState(false);
  const [currentArtifact, setCurrentDisplayedArtifact] = React.useState({
    descriptionEn: { html: " " },
    descriptionOriginal: { html: " " },
    technicalInformation: { html: " " },
    descriptionOriginal: { html: " " },
    title: " ",
    artifactContent: { html: " " },
    authors: { html: " " },
    slug: " ",
    youMayAlsoLike: " ",
    videoIFrame: { html: " ", raw: " ", text: " " },
  });
  const [showSynthesizer, setShowSynthesizer] = React.useState(false);
  const [showRecollections, setShowRecollections] = React.useState(false);
  const synthRef = React.useRef();
  synthRef.current = showSynthesizer;

  React.useEffect(() => {
    if (show == true) {
      document.title = currentArtifact.title;
    } else {
      document.title = "The Supermarket Museum";
    }
  }, [show]);

  const handleClose = () => {
    setCurrentArtifact(null);
    setShowSynthesizer(false);
    setShowLabel(true);
    setIsClicked(false);
    setShow(false);
    if (openArtifact == null) {
      router.push(returnHref, undefined, { shallow: true });
    } else {
      router.push("/museum", undefined, { shallow: true });
    }
  };

  const handleShow = (slug) => {
    hideTooltip();
    setIsClicked(true);
    if (openArtifact != null) {
      setCurrentArtifact(openArtifact);
    } else if (slug == "supermarket-synthesizer") {
      setCurrentArtifact(slug);
      const url = "museum/artifacts/" + "supermarket-synthesizer";
      router.push(makeContextualHref(), url, {
        shallow: true,
      });
    } else if (slug == "recollections") {
      setCurrentArtifact(slug);
      const url = "museum/artifacts/" + "recollections";
      router.push(makeContextualHref(), url, {
        shallow: true,
      });
    } else {
      setCurrentArtifact(slug);
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
    console.log(currentArtifact);
  };
  {
    console.log(currentArtifact);
  }
  const body = (
    <>
      {currentArtifact != null ? (
        <div className="modalCanvas">
          <div className="closeIcon">
            <IconButton onClick={handleClose}>
              <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
            </IconButton>
          </div>
          <Box p={(2, 4)} className="modalBoxContainer">
            <Grid item xs={12} md={12}>
              <div className="modalContentAdjusted">
                <h1 className="heading">{currentArtifact.title}</h1>
                <div className="text-3xl"
                  dangerouslySetInnerHTML={{
                    __html: currentArtifact.authors.html,
                  }}
                />
                {currentArtifact.slug == "recollections" ? (
                  <>
                    <UkraineArtifact />
                  </>
                ) : null}
                {currentArtifact.slug == "supermarket-synthesizer" ? (
                  <>
                    <Synthesizer />
                  </>
                ) : null}
                <>
                  {currentArtifact.videoIFrame.text.length > 5 ? (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: currentArtifact.videoIFrame.text,
                        }}
                      />
                    </>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.artifactContent.text,
                      }}
                    />
                  )}
                </>
                <Grid container spacing={5}>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"artifactDescription"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.descriptionEn.html,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"artifactDescription"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.descriptionOriginal.html,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={5} className={"technicalInformationContainer"}>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"technicalInformation"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.technicalInformation.html,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"technicalInformation"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.youMayAlsoLike.html,
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Box>
        </div>
      ) : null}
    </>
  );

  const [isClicked, setIsClicked] = React.useState(false);
  const [showLabel, setShowLabel] = React.useState(true);

  const hideTooltip = () => {
    setIsClicked(true);
  };

  const showTooltip = (slug) => {
    setIsClicked(false);
  };

  React.useEffect(() => {
    if (openArtifact != null) {
      handleShow(openArtifact);
    }
  }, []);

  const [isImageReady, setIsImageReady] = React.useState(false);

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

  function getLabelContentBySlug() {
    var dict = {};

    for (var i = 0; i < Object.values(labels).length; i++) {
      console.log(labels[i]);
      dict[labels[i].slug] = labels[i];
    }

    return dict;
  }

  var labelsDict = getLabelContentBySlug();
  console.log(labelsDict["sensory-marketing"].content.html);

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
                  <TooltipInfo
                    artifactSlug={"postcards-from-the-supermarket-museum"}
                    artifactTitle={labelsDict["sensory-marketing"].title}
                    category={labelsDict["sensory-marketing"].subtitle}
                    content={labelsDict["sensory-marketing"].content.html}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    xLocation={"43.2%"}
                    yLocation={"73.5%"}
                  />

                  {/*stand z pocztowkami*/}
                  <TooltipLabel
                    artifactTitle={"stand z pocztówkami"}
                    artifactSlug={"postcards-from-the-supermarket-museum"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"39.2%"}
                    yLocation={"73.5%"}
                  />
                  {/*salata*/}
                  <TooltipLabel
                    artifactTitle={"Unobvious Difference"}
                    artifactSlug={"unobvious-difference"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    xLocation={"79.2%"}
                    yLocation={"54.5%"}
                  />
                  {/*dzial muzyczny*/}
                  <TooltipLabelSynthesizer
                    artifactTitle={"Supermarket Synthesizer"}
                    artifactSlug={"supermarket-synthesizer"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    setShowSynthesizer={setShowSynthesizer}
                    xLocation={"81.2%"}
                    yLocation={"46.5%"}
                  />
                  {/*lockers*/}
                  <TooltipLabelSynthesizer
                    artifactTitle={"Recollections Game"}
                    artifactSlug={"recollections"}
                    isClicked={isClicked}
                    showTooltip={showTooltip}
                    handleShow={handleShow}
                    setShowSynthesizer={setShowRecollections}
                    xLocation={"65.2%"}
                    yLocation={"90.5%"}
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
      <Modal open={openArtifact == null ? show : true}>
        <>{body}</>
      </Modal>
    </>
  );
}
