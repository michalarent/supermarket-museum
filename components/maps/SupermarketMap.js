import React from "react";

import { useRouter } from "next/router";

import Modal from "@material-ui/core/Modal";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { useContextualRouting } from "next-use-contextual-routing";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import styles_map from "../../styles/map.module.css";
import styles from "./ExampleSvg.module.css";

import Image from "next/image";
import TooltipLabel from "./Labels/TooltipLabel";
import TooltipInfo from "./Labels/TooltipInfo";
import TooltipLabelSynthesizer from "./Labels/TooltipLabelSynthesizer";
import Synthesizer from "../../pages/museum/artifacts/synthesizer";
import UkraineArtifact from "../../pages/museum/artifacts/ukraine";
import Recollections from "../artifacts/ukraine/recollections";
import AudioPlayer from "../audio-player/AudioPlayer";
import PhotoCarousel from "../image-gallery/PhotoCarousel";

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

  const tasteOfTropicsImags = [
    {
      original: "/photo_gallery/taste-of-tropics/1.png",
    },
    {
      original: "/photo_gallery/taste-of-tropics/2.png",
    },
    {
      original: "/photo_gallery/taste-of-tropics/3.png",
    },
    {
      original: "/photo_gallery/taste-of-tropics/4.png",
    },
    {
      original: "/photo_gallery/taste-of-tropics/5.png",
    },
    {
      original: "/photo_gallery/taste-of-tropics/6.png",
    },
    {
      original: "/photo_gallery/taste-of-tropics/7.png",
    },
  ];

  const irrationalRemaindersImages = [
    {
      original: "/photo_gallery/irrational-remainders/1.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/2.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/3.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/4.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/5.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/6.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/7.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/8.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/9.jpg",
    },
    {
      original: "/photo_gallery/irrational-remainders/10.jpg",
    },
  ];

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
    } else if (slug == "the-lives-we-live-by") {
      setCurrentArtifact(slug);
      const url = "museum/artifacts/" + "the-lives-we-live-by";
      router.push(makeContextualHref(), url, {
        shallow: true,
      });
    } else if (slug == "who-am-i") {
      setCurrentArtifact(slug);
      const url = "museum/artifacts/" + "who-am-i";
      router.push(makeContextualHref(), url, {
        shallow: true,
      });
    } else if (slug == "invisible-supermarket") {
      setCurrentArtifact(slug);
      const url = "museum/artifacts/" + "invisible-supermarket";
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
                <div
                  className="text-3xl"
                  dangerouslySetInnerHTML={{
                    __html: currentArtifact.authors.html,
                  }}
                />
                {currentArtifact.slug == "who-am-i" ? (
                  <>
                    <AudioPlayer url={"/audio-player/who-am-i.m4a"} />
                  </>
                ) : null}
                {currentArtifact.slug == "invisible-supermarket" ? (
                  <>
                    <AudioPlayer
                      url={"/audio-player/invisible-supermarket.mp3"}
                    />
                  </>
                ) : null}
                {currentArtifact.slug == "the-taste-of-the-tropics" ? (
                  <>
                    <AudioPlayer url={"/audio-player/taste-of-tropics.mp3"} />
                    <div style={{ height: "5vh" }} />
                    <PhotoCarousel images={tasteOfTropicsImags} />
                  </>
                ) : null}
                {currentArtifact.slug == "irrational-remainders" ? (
                  <>
                    <PhotoCarousel images={irrationalRemaindersImages} />
                  </>
                ) : null}
                {currentArtifact.slug == "the-lives-we-live-by" ? (
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
                  {currentArtifact?.videoIFrame?.text.length > 5 ? (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: currentArtifact.videoIFrame.text,
                        }}
                      />
                    </>
                  ) : (
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={12} lg={12}>
                        <div
                          className={"artifactDescription"}
                          dangerouslySetInnerHTML={{
                            __html: currentArtifact.artifactContent.html,
                          }}
                        />
                      </Grid>
                    </Grid>
                  )}
                </>
                <Grid container spacing={5}>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"artifactDescription"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.descriptionEn?.html,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"artifactDescription"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.descriptionOriginal?.html,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={5}
                  className={"technicalInformationContainer"}
                >
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"technicalInformation"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.technicalInformation?.html,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"technicalInformation"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.youMayAlsoLike?.html,
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

  // React.useEffect(() => {
  //   if (image.current.complete) {
  //     console.log("ready");
  //     setIsImageReady(true);
  //   }
  // }, []);

  const image = React.useRef();

  function getLabelContentBySlug() {
    var dict = {};

    if (labels == undefined) return;
    for (var i = 0; i < Object.values(labels)?.length; i++) {
      console.log(labels[i]);
      dict[labels[i].slug] = labels[i];
    }

    return dict;
  }

  var labelsDict = getLabelContentBySlug();

  return (
    <>
      <TransformWrapper
        wheel={{ step: 100 }}
        options={{ limitToBounds: true, minScale: 0.5, maxScale: 2 }}
        alignmentAnimation={{
          disabled: true,
        }}
        initialScale={1}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className={styles_map.tools}>
              <Button variant="contained" onClick={zoomIn}>
                +
              </Button>
              <br />
              <Button variant="contained" onClick={zoomOut}>
                -
              </Button>
              <br />
              <Button variant="contained" onClick={resetTransform}>
                x
              </Button>
            </div>
            <TransformComponent className={styles_map.TransformComponent}>
              <Fade in={true} timeout={800}>
                <div className={styles_map.mapWrapper}>
                  <img
                    ref={image}
                    className={styles_map.mapImage}
                    src="/supermarket/supermarket_1_smaller-min.png"
                    // onLoad={handleLoad}
                  />
                  <Fade in={true} timeout={1000}>
                    <div className={styles_map.allTooltips}>
                      <div className={styles_map.tooltip}>
                        {/*stand z pocztowkami*/}
                        <TooltipInfo
                          artifactSlug={"info-artifact-example"}
                          artifactTitle={labelsDict["sensory-marketing"].title}
                          category={labelsDict["sensory-marketing"].subtitle}
                          content={labelsDict["sensory-marketing"].content.html}
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
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
                        {/*stand z kawą*/}
                        <TooltipLabel
                          artifactTitle={"Taste of Tropics"}
                          artifactSlug={"the-taste-of-the-tropics"}
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"61.2%"}
                          yLocation={"29.5%"}
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
                          artifactTitle={"The Lives We Live By"}
                          artifactSlug={"the-lives-we-live-by"}
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          setShowSynthesizer={setShowRecollections}
                          xLocation={"65.2%"}
                          yLocation={"90.5%"}
                        />
                        {/*lampa*/}
                        <TooltipLabel
                          artifactTitle={"Invisible Supermarket"}
                          artifactSlug={"invisible-supermarket"}
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"51.6%"}
                          yLocation={"32.6%"}
                        />
                        {/*okno*/}
                        <TooltipLabel
                          artifactTitle={"Irrational Remainders"}
                          artifactSlug={"irrational-remainders"}
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
                          artifactSlug={"sacrifice-offering"}
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
                        {/*cukinie / papryki*/}
                        <TooltipLabel
                          artifactTitle={"Disconnect"}
                          artifactSlug={"disconnect"}
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"85.2%"}
                          yLocation={"66.8%"}
                        />

                        {/*kasa samoobslugowa*/}
                        <TooltipLabel
                          artifactTitle={"Who Am I"}
                          artifactSlug={"who-am-i"}
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
                          artifactTitle={"Ghostly Individuality"}
                          artifactSlug={"ghostly-individuality"}
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"44.2%"}
                          yLocation={"49.6%"}
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
      <Modal open={openArtifact == null ? show : true}>
        <>{body}</>
      </Modal>
    </>
  );
}
