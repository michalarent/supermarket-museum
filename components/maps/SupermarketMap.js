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
import Postcards from "../artifacts/postcards/Postcards";

export default function SupermarketMap({
  artifactModels,
  openArtifact,
  labels,
}) {
  const { makeContextualHref, returnHref } = useContextualRouting();
  const router = useRouter();

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

  React.useEffect(() => {
    // Prefetch the museum page
    router.prefetch("/museum");
  }, []);

  const handleClose = () => {
    setCurrentArtifact(null);
    setShowSynthesizer(false);
    setBlackBackground(false);
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
    } else if (slug == "postcards-from-the-supermarket-museum") {
      setCurrentArtifact(slug);
      const url = "museum/artifacts/" + "postcards-from-the-supermarket-museum";
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

  const [blackBackground, setBlackBackground] = React.useState(false);

  const handleShowLamp = (slug) => {
    hideTooltip();
    setIsClicked(true);
    setBlackBackground(true);

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
  {
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
                {currentArtifact.slug ==
                "postcards-from-the-supermarket-museum" ? (
                  <>
                    <Postcards />
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

    typeof onLoad === "function" && onLoad(e);
  };

  // React.useEffect(() => {
  //   if (image.current.complete) {

  //     setIsImageReady(true);
  //   }
  // }, []);

  const image = React.useRef();

  function getLabelContentBySlug() {
    var dict = {};

    if (labels == undefined) return;
    for (var i = 0; i < Object.values(labels)?.length; i++) {
      dict[labels[i].slug] = labels[i];
    }

    return dict;
  }

  function getArtifactAuthorBySlug() {
    var dict = {};

    if (artifactModels == undefined) return;
    for (var i = 0; i < Object.values(artifactModels)?.length; i++) {
      dict[artifactModels[i].slug] = artifactModels[i];
    }

    return dict;
  }

  var artifactsDict = getArtifactAuthorBySlug();
  var labelsDict = getLabelContentBySlug();

  return (
    <div>
      <TransformWrapper
        // initialScale={0.5}
        options={{
          limitToBounds: false,
          minScale: 0.3,
          maxScale: 3,
        }}
        wheel={{ step: 100 }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className={styles_map.tools}>
              <Button onClick={zoomIn}>+</Button>
              <br />
              <Button onClick={zoomOut}>-</Button>
              <br />
              <Button onClick={resetTransform}>x</Button>
            </div>
            <TransformComponent className={styles_map.TransformComponent}>
              <Fade in={true} timeout={800}>
                <div>
                  <img
                    ref={image}
                    className={styles_map.mapImage}
                    src="/supermarket/supermarket-final.png"
                    // onLoad={handleLoad}
                  />
                  <Fade in={true} timeout={1000}>
                    <div className={styles_map.allTooltips} >
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
                        {/*sensations, tool design // on top of sketch*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-supermarket-sensations-design"
                          }
                          artifactTitle={
                            labelsDict["category-supermarket-sensations-design"]
                              .title
                          }
                          category={
                            labelsDict["category-supermarket-sensations-design"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-supermarket-sensations-design"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"50%"}
                          yLocation={"0%"}
                        />
                        {/*sensations, tool color // walls*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-supermarket-sensations-color"
                          }
                          artifactTitle={
                            labelsDict["category-supermarket-sensations-color"]
                              .title
                          }
                          category={
                            labelsDict["category-supermarket-sensations-color"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-supermarket-sensations-color"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"0%"}
                          yLocation={"0.5%"}
                        />
                        {/*sensations, tool lighting // floor */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-supermarket-sensations-lighting"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-supermarket-sensations-lighting"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-supermarket-sensations-lighting"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-supermarket-sensations-lighting"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"20.2%"}
                          yLocation={"30.5%"}
                        />
                        {/*sensations, tool smell // entrance */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-supermarket-sensations-smell"
                          }
                          artifactTitle={
                            labelsDict["category-supermarket-sensations-smell"]
                              .title
                          }
                          category={
                            labelsDict["category-supermarket-sensations-smell"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-supermarket-sensations-smell"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"64.3%"}
                          yLocation={"97%"}
                        />
                        {/*sensations, tool sound // speaker on wall */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-supermarket-sensations-sound"
                          }
                          artifactTitle={
                            labelsDict["category-supermarket-sensations-sound"]
                              .title
                          }
                          category={
                            labelsDict["category-supermarket-sensations-sound"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-supermarket-sensations-sound"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"87.3%"}
                          yLocation={"22%"}
                        />
                        {/*sensations, tool taste // cheese stand */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-supermarket-sensations-taste"
                          }
                          artifactTitle={
                            labelsDict["category-supermarket-sensations-taste"]
                              .title
                          }
                          category={
                            labelsDict["category-supermarket-sensations-taste"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-supermarket-sensations-taste"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"40.3%"}
                          yLocation={"15%"}
                        />
                        {/*sensations, tool touch // fruits veggies */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-supermarket-sensations-touch"
                          }
                          artifactTitle={
                            labelsDict["category-supermarket-sensations-touch"]
                              .title
                          }
                          category={
                            labelsDict["category-supermarket-sensations-touch"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-supermarket-sensations-touch"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"70.2%"}
                          yLocation={"66.8%"}
                        />
                        {/*location, goods // at front */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-location-of-products"
                          }
                          artifactTitle={
                            labelsDict["category-location-of-products"].title
                          }
                          category={
                            labelsDict["category-location-of-products"].subtitle
                          }
                          content={
                            labelsDict["category-location-of-products"].content
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"55.3%"}
                          yLocation={"100%"}
                        />
                        {/*location, goods // at exit */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-location-of-products-essentials"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-location-of-products-essentials"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-location-of-products-essentials"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-location-of-products-essentials"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"35.3%"}
                          yLocation={"100%"}
                        />

                        {/*location, goods // przy kasie */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-location-of-products-till"
                          }
                          artifactTitle={
                            labelsDict["category-location-of-products-till"]
                              .title
                          }
                          category={
                            labelsDict["category-location-of-products-till"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-location-of-products-till"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"35.3%"}
                          yLocation={"90%"}
                        />
                        {/*location, goods // mięso */}
                        <TooltipInfo
                          artifactSlug={"info-artifact-example"}
                          artifactTitle={
                            labelsDict["category-location-of-products-meat"]
                              .title
                          }
                          category={
                            labelsDict["category-location-of-products-meat"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-location-of-products-meat"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          xLocation={"46.3%"}
                          yLocation={"17%"}
                        />
                        {/*location, goods // fish */}
                        <TooltipInfo
                          artifactSlug={"info-artifact-example"}
                          artifactTitle={
                            labelsDict["category-location-of-products-fish"]
                              .title
                          }
                          category={
                            labelsDict["category-location-of-products-fish"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-location-of-products-fish"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          xLocation={"68.3%"}
                          yLocation={"28%"}
                        />
                        {/*location, goods // bread */}
                        <TooltipInfo
                          artifactSlug={"info-artifact-example"}
                          artifactTitle={
                            labelsDict["category-location-of-products-bread"]
                              .title
                          }
                          category={
                            labelsDict["category-location-of-products-bread"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-location-of-products-bread"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          xLocation={"41.3%"}
                          yLocation={"12%"}
                        />
                        {/*location, goods // trading hall entrance */}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-location-of-products-departments"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-location-of-products-departments"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-location-of-products-departments"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-location-of-products-departments"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          xLocation={"46.3%"}
                          yLocation={"21%"}
                        />
                        {/*location, goods // promotion */}
                        <TooltipInfo
                          artifactSlug={"info-artifact-example"}
                          artifactTitle={
                            labelsDict["category-pricing-strategies-aisle-ends"]
                              .title
                          }
                          category={
                            labelsDict["category-pricing-strategies-aisle-ends"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-pricing-strategies-aisle-ends"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          xLocation={"38.2%"}
                          yLocation={"72.5%"}
                        />
                        {/*pricing strategies // trading hall entrance */}
                        <TooltipInfo
                          artifactSlug={"info-artifact-example"}
                          artifactTitle={
                            labelsDict["category-pricing-strategies-multi-buy"]
                              .title
                          }
                          category={
                            labelsDict["category-pricing-strategies-multi-buy"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-pricing-strategies-multi-buy"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          xLocation={"20.2%"}
                          yLocation={"72.5%"}
                        />
                        {/*pricing strategies // trading hall entrance */}
                        <TooltipInfo
                          artifactSlug={"info-artifact-example"}
                          artifactTitle={
                            labelsDict[
                              "category-pricing-strategies-known-value-items"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-pricing-strategies-known-value-items"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-pricing-strategies-known-value-items"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          xLocation={"20.2%"}
                          yLocation={"80.5%"}
                        />
                        {/*pricing strategies // trading hall entrance */}
                        <TooltipInfo
                          artifactSlug={"info-artifact-example"}
                          artifactTitle={
                            labelsDict["category-pricing-strategies-cards"]
                              .title
                          }
                          category={
                            labelsDict["category-pricing-strategies-cards"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-pricing-strategies-cards"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          xLocation={"26.2%"}
                          yLocation={"80.5%"}
                        />
                        {/*stand z pocztowkami*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict[
                              "postcards-from-the-supermarket-museum"
                            ].title
                          }
                          artifactSlug={"postcards-from-the-supermarket-museum"}
                          artifactAuthor={
                            artifactsDict[
                              "postcards-from-the-supermarket-museum"
                            ].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"54.2%"}
                          yLocation={"80.5%"}
                        />
                        {/*nabiał*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["the-origin-of-the-end"].title
                          }
                          artifactSlug={"the-origin-of-the-end"}
                          artifactAuthor={
                            artifactsDict["the-origin-of-the-end"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"71.2%"}
                          yLocation={"49.5%"}
                        />

                        {/*stand z kawą*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["the-taste-of-the-tropics"].title
                          }
                          artifactSlug={"the-taste-of-the-tropics"}
                          artifactAuthor={
                            artifactsDict["the-taste-of-the-tropics"].authors
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"61.2%"}
                          yLocation={"29.5%"}
                        />
                        {/*salata*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["unobvious-difference"].title
                          }
                          artifactSlug={"unobvious-difference"}
                          artifactAuthor={
                            artifactsDict["unobvious-difference"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"79.2%"}
                          yLocation={"54.5%"}
                        />
                        {/*dzial muzyczny*/}
                        <TooltipLabelSynthesizer
                          artifactTitle={
                            artifactsDict["supermarket-synthesizer"].title
                          }
                          artifactSlug={"supermarket-synthesizer"}
                          artifactAuthor={
                            artifactsDict["supermarket-synthesizer"].authors
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          setShowSynthesizer={setShowSynthesizer}
                          xLocation={"81.2%"}
                          yLocation={"46.5%"}
                        />
                        {/*lockers*/}
                        <TooltipLabelSynthesizer
                          artifactTitle={
                            artifactsDict["the-lives-we-live-by"].title
                          }
                          artifactSlug={"the-lives-we-live-by"}
                          artifactAuthor={
                            artifactsDict["the-lives-we-live-by"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          setShowSynthesizer={setShowRecollections}
                          xLocation={"65.2%"}
                          yLocation={"90.5%"}
                        />
                        {/*lampa*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["invisible-supermarket"].title
                          }
                          artifactSlug={"invisible-supermarket"}
                          artifactAuthor={
                            artifactsDict["invisible-supermarket"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShowLamp}
                          xLocation={"54.6%"}
                          yLocation={"34.6%"}
                        />
                        {/*okno*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["irrational-remainders"].title
                          }
                          artifactSlug={"irrational-remainders"}
                          artifactAuthor={
                            artifactsDict["irrational-remainders"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"88.7%"}
                          yLocation={"24.2%"}
                        />
                        {/*stand z gazetkami*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["best-value-discount-sale"].title
                          }
                          artifactSlug={"best-value-discount-sale"}
                          artifactAuthor={
                            artifactsDict["best-value-discount-sale"].authors
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"58.1%"}
                          yLocation={"92%"}
                        />
                        {/*smietniki*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["sacrifice-offering"].title
                          }
                          artifactSlug={"sacrifice-offering"}
                          artifactAuthor={
                            artifactsDict["sacrifice-offering"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"95.3%"}
                          yLocation={"24.2%"}
                        />
                        {/*wolne warzywa*/}
                        <TooltipLabel
                          artifactTitle={artifactsDict["permaculture"].title}
                          artifactSlug={"permaculture"}
                          artifactAuthor={
                            artifactsDict["permaculture"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"91.2%"}
                          yLocation={"57.8%"}
                        />
                        {/*stand z ksiazkami*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["the-taste-of-the-past"].title
                          }
                          artifactSlug={"the-taste-of-the-past"}
                          artifactAuthor={
                            artifactsDict["the-taste-of-the-past"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"16.8%"}
                          yLocation={"62.5%"}
                        />
                        {/*ksiazka dla dzieci*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["all-on-the-ground"].title
                          }
                          artifactSlug={"all-on-the-ground"}
                          artifactAuthor={
                            artifactsDict["all-on-the-ground"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"10.8%"}
                          yLocation={"57.5%"}
                        />
                        {/*nasiona do kupienia*/}
                        <TooltipLabel
                          artifactTitle={artifactsDict["seeds"].title}
                          artifactSlug={"seeds"}
                          artifactAuthor={artifactsDict["seeds"].authors.html}
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"11.2%"}
                          yLocation={"48.5%"}
                        />
                        {/*jablka*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["the-rotting-apple"].title
                          }
                          artifactSlug={"the-rotting-apple"}
                          artifactAuthor={
                            artifactsDict["the-rotting-apple"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"76.2%"}
                          yLocation={"72.5%"}
                        />
                        {/*wozki*/}
                        <TooltipLabel
                          artifactTitle={artifactsDict["supermarket-vr"].title}
                          artifactSlug={"supermarket-vr"}
                          artifactAuthor={
                            artifactsDict["supermarket-vr"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"68.3%"}
                          yLocation={"92%"}
                        />
                        {/*cukinie / papryki*/}
                        <TooltipLabel
                          artifactTitle={artifactsDict["disconnect"].title}
                          artifactSlug={"disconnect"}
                          artifactAuthor={
                            artifactsDict["disconnect"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"85.2%"}
                          yLocation={"66.8%"}
                        />

                        {/*kasa samoobslugowa*/}
                        <TooltipLabel
                          artifactTitle={artifactsDict["who-am-i"].title}
                          artifactSlug={"who-am-i"}
                          artifactAuthor={
                            artifactsDict["who-am-i"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"36.2%"}
                          yLocation={"75.6%"}
                        />
                        {/*lustro*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["seeing-them-there"].title
                          }
                          artifactSlug={"seeing-them-there"}
                          artifactAuthor={
                            artifactsDict["seeing-them-there"].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"42.2%"}
                          yLocation={"52.6%"}
                        />
                        {/*clothes*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["ghostly-individuality"].title
                          }
                          artifactSlug={"ghostly-individuality"}
                          artifactAuthor={
                            artifactsDict["ghostly-individuality"].authors.html
                          }
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
    </div>
  );
}
