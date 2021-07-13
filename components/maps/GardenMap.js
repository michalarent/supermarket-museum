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

import Image from "next/image";
import TooltipLabel from "./Labels/TooltipLabel";
import TooltipInfo from "./Labels/TooltipInfo";
import TooltipLabelSynthesizer from "./Labels/TooltipLabelSynthesizer";
import Synthesizer from "../../pages/museum/artifacts/synthesizer";
import UkraineArtifact from "../../pages/museum/artifacts/ukraine";
import Recollections from "../artifacts/ukraine/recollections";
import AudioPlayer from "../audio-player/AudioPlayer";
import PhotoCarousel from "../image-gallery/PhotoCarousel";
import SusanneMap from "./SusanneMap";

export default function GardenMap({ artifactModels, openArtifact, labels }) {
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
      router.push("/garden", undefined, { shallow: true });
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

  router.prefetch("/susanne");

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
        <div className="modalCanvas" style={{ background: "#e3f393dd" }}>
          <div className="closeIcon">
            <IconButton onClick={() => handleClose()}>
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
                    __html: currentArtifact.authors?.html,
                  }}
                />

                {currentArtifact.slug == "learning-the-natural-way" ? (
                  <></>
                ) : null}
                {currentArtifact.slug == "invisible-supermarket" ? (
                  <>
                    <AudioPlayer
                      url={"/audio-player/invisible-supermarket.mp3"}
                    />
                  </>
                ) : null}
                {currentArtifact.slug == "learning-the-natural-way" ? (
                  <>
                    <Button
                      onClick={() => router.push("/susanne")}
                      variant="outlined"
                      style={{ width: "100%", height: "10vh" }}
                    >
                      Click to Explore
                    </Button>
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
                  ) : null}
                </>
                <div
                  className={"artifactDescription"}
                  dangerouslySetInnerHTML={{
                    __html: currentArtifact?.artifactContent?.html,
                  }}
                />
                {currentArtifact?.descriptionEn?.html.length > 10 ? (
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={6}>
                      <div
                        className={"artifactDescription"}
                        dangerouslySetInnerHTML={{
                          __html: currentArtifact?.descriptionEn?.html,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                      <div
                        className={"artifactDescription"}
                        dangerouslySetInnerHTML={{
                          __html: currentArtifact?.descriptionOriginal?.html,
                        }}
                      />
                    </Grid>
                  </Grid>
                ) : null}

                <Grid
                  container
                  spacing={5}
                  className={"technicalInformationContainer"}
                >
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"technicalInformation"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact?.technicalInformation?.html,
                      }}
                    />
                  </Grid>
                  {currentArtifact?.technicalInformation?.html.length > 10 ? (
                    <Grid item xs={12} md={12} lg={6}>
                      <div
                        className={"technicalInformation"}
                        dangerouslySetInnerHTML={{
                          __html: currentArtifact?.youMayAlsoLike?.html,
                        }}
                      />
                    </Grid>
                  ) : (
                    <Grid item xs={12} md={12} lg={12}>
                      <div
                        className={"technicalInformation"}
                        dangerouslySetInnerHTML={{
                          __html: currentArtifact?.youMayAlsoLike?.html,
                        }}
                      />
                    </Grid>
                  )}
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
    <>
      <TransformWrapper
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
                <div className={styles_map.mapWrapper}>
                  <img
                    ref={image}
                    className={styles_map.mapImage}
                    src="/supermarket/gardenGrubszy.png"
                    // onLoad={handleLoad}
                  />
                  <Fade in={true} timeout={1000}>
                    <div className={styles_map.allTooltips}>
                      <div className={styles_map.tooltip}>
                        {/*market stand*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["migrations-and-food-growing"]?.title
                          }
                          artifactSlug={"migrations-and-food-growing"}
                          artifactAuthor={
                            artifactsDict["migrations-and-food-growing"].authors
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"25.2%"}
                          yLocation={"89.5%"}
                          color={"#e3f393"}
                        />
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["small-permaculture-farm"]?.title
                          }
                          artifactSlug={"small-permaculture-farm"}
                          artifactAuthor={
                            artifactsDict["small-permaculture-farm"].authors
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"58.5%"}
                          yLocation={"41%"}
                          color={"#e3f393"}
                        />

                        {/*woman middle*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["eightfinity-lessons-on-growing-food"]
                              ?.title
                          }
                          artifactSlug={"eightfinity-lessons-on-growing-food"}
                          artifactAuthor={
                            artifactsDict["eightfinity-lessons-on-growing-food"]
                              .authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"54.2%"}
                          yLocation={"78.5%"}
                          color={"#e3f393"}
                        />
                        {/*dream garden*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["create-your-dream-garden"].title
                          }
                          artifactSlug={"create-your-dream-garden"}
                          artifactAuthor={
                            artifactsDict["create-your-dream-garden"].authors
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"70.2%"}
                          yLocation={"46.5%"}
                          color={"#e3f393"}
                        />
                        {/*person lying on rock*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict[
                              "ecosystemic-intelligence-and-permaculture"
                            ]?.title
                          }
                          artifactSlug={
                            "ecosystemic-intelligence-and-permaculture"
                          }
                          artifactAuthor={
                            artifactsDict[
                              "ecosystemic-intelligence-and-permaculture"
                            ]?.authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"55.2%"}
                          yLocation={"52.5%"}
                          color={"#e3f393"}
                        />
                        {/*a person meditating*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["positive-garden-psychology"].title
                          }
                          artifactSlug={"positive-garden-psychology"}
                          artifactAuthor={
                            artifactsDict["positive-garden-psychology"].authors
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"10.2%"}
                          yLocation={"75.5%"}
                          color={"#e3f393"}
                        />
                        {/*herb spiral*/}
                        <TooltipLabel
                          artifactTitle={
                            artifactsDict["learning-the-natural-way"].title
                          }
                          artifactSlug={"learning-the-natural-way"}
                          artifactAuthor={
                            artifactsDict["learning-the-natural-way"].authors
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          xLocation={"40.2%"}
                          yLocation={"75.5%"}
                          color={"#e3f393"}
                        />
                        {/*compost bins*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-edible-city-composting"
                          }
                          artifactTitle={
                            labelsDict["category-edible-city-composting"].title
                          }
                          category={
                            labelsDict["category-edible-city-composting"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-edible-city-composting"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"31.2%"}
                          yLocation={"30.5%"}
                        />
                        {/*toilet*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-earth-care-compost-toilet"
                          }
                          artifactTitle={
                            labelsDict["category-earth-care-compost-toilet"]
                              .title
                          }
                          category={
                            labelsDict["category-earth-care-compost-toilet"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-earth-care-compost-toilet"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"44.2%"}
                          yLocation={"24.5%"}
                        />
                        {/*pond*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-earth-care-water-in-agriculture"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-earth-care-water-in-agriculture"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-earth-care-water-in-agriculture"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-earth-care-water-in-agriculture"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"60.2%"}
                          yLocation={"53.5%"}
                        />
                        {/*planet*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-earth-care-planetary-boundaries"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-earth-care-planetary-boundaries"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-earth-care-planetary-boundaries"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-earth-care-planetary-boundaries"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"79.2%"}
                          yLocation={"0.5%"}
                        />
                        {/*chicken*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-earth-care-ecological-footprint"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-earth-care-ecological-footprint"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-earth-care-ecological-footprint"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-earth-care-ecological-footprint"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"43.2%"}
                          yLocation={"30.5%"}
                        />
                        {/*grządka ząbki*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-earth-care-soil-health"
                          }
                          artifactTitle={
                            labelsDict["category-earth-care-soil-health"].title
                          }
                          category={
                            labelsDict["category-earth-care-soil-health"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-earth-care-soil-health"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"45.2%"}
                          yLocation={"16.5%"}
                        />
                        {/*farm building*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-learn-food-growing-newentrants-to-farming"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-learn-food-growing-newentrants-to-farming"
                            ]?.title
                          }
                          category={
                            labelsDict[
                              "category-learn-food-growing-newentrants-to-farming"
                            ]?.subtitle
                          }
                          content={
                            labelsDict[
                              "category-learn-food-growing-newentrants-to-farming"
                            ]?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"48.2%"}
                          yLocation={"12.5%"}
                        />
                        {/*building*/}
                        <TooltipInfo
                          artifactSlug={"corresponding-category-edible-city"}
                          artifactTitle={
                            labelsDict["category-edible-city"].title
                          }
                          category={labelsDict["category-edible-city"].subtitle}
                          content={
                            labelsDict["category-edible-city"].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"68.2%"}
                          yLocation={"21.5%"}
                        />
                        {/*krzak*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-edible-city-food-forests"
                          }
                          artifactTitle={
                            labelsDict["category-edible-city-food-forests"]
                              .title
                          }
                          category={
                            labelsDict["category-edible-city-food-forests"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-edible-city-food-forests"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          color={"#e3f393"}
                          xLocation={"80.2%"}
                          yLocation={"53.5%"}
                        />
                        {/*building*/}
                        <TooltipInfo
                          artifactSlug={"corresponding-category-edible-city"}
                          artifactTitle={
                            labelsDict["category-edible-city"].title
                          }
                          category={labelsDict["category-edible-city"].subtitle}
                          content={
                            labelsDict["category-edible-city"].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"68.2%"}
                          yLocation={"21.5%"}
                        />
                        {/*syrenka*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-edible-cities-warsaw"
                          }
                          artifactTitle={
                            labelsDict["category-edible-cities-warsaw"].title
                          }
                          category={
                            labelsDict["category-edible-cities-warsaw"].subtitle
                          }
                          content={
                            labelsDict["category-edible-cities-warsaw"].content
                              .html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          color={"#e3f393"}
                          xLocation={"82.2%"}
                          yLocation={"20.5%"}
                        />
                        {/*pnącza*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-edible-city-vertical-gardens"
                          }
                          artifactTitle={
                            labelsDict["category-edible-city-vertical-gardens"]
                              .title
                          }
                          category={
                            labelsDict["category-edible-city-vertical-gardens"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-edible-city-vertical-gardens"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"63.2%"}
                          yLocation={"11.5%"}
                        />
                        {/*people protesting*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-solidarity-food-sovereignty"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-food-solidarity-food-sovereignty"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-food-solidarity-food-sovereignty"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-food-solidarity-food-sovereignty"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"93%"}
                          yLocation={"97%"}
                        />
                        {/*woman with hoe*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-solidarity-women-in-farming"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-food-solidarity-women-in-farming"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-food-solidarity-women-in-farming"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-food-solidarity-women-in-farming"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"59%"}
                          yLocation={"75%"}
                        />
                        {/*table*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-solidarity-foodsharing"
                          }
                          artifactTitle={
                            labelsDict["category-food-solidarity-foodsharing"]
                              .title
                          }
                          category={
                            labelsDict["category-food-solidarity-foodsharing"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-food-solidarity-foodsharing"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"56%"}
                          yLocation={"60%"}
                        />
                        {/*bicycle*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-solidarity-farmhack"
                          }
                          artifactTitle={
                            labelsDict["category-food-solidarity-farmhack"]
                              .title
                          }
                          category={
                            labelsDict["category-food-solidarity-farmhack"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-food-solidarity-farmhack"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"24%"}
                          yLocation={"43%"}
                        />
                        {/*man teaching*/}
                        <TooltipLabel
                          artifactSlug={
                            "permaculture-in-commercial-agriculture"
                          }
                          artifactTitle={
                            artifactsDict[
                              "permaculture-in-commercial-agriculture"
                            ].title
                          }
                          artifactAuthor={
                            artifactsDict[
                              "permaculture-in-commercial-agriculture"
                            ].authors.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"10%"}
                          yLocation={"43%"}
                        />
                        {/*carrot*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-solidarity-farmhack"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-learn-food-growing-pandemic-food-growing"
                            ]?.title
                          }
                          category={
                            labelsDict[
                              "category-learn-food-growing-pandemic-food-growing"
                            ]?.subtitle
                          }
                          content={
                            labelsDict[
                              "category-learn-food-growing-pandemic-food-growing"
                            ]?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          color={"#e3f393"}
                          xLocation={"15%"}
                          yLocation={"33%"}
                        />
                        {/*stall*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-solidarity-community-supported-agriculture"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-food-solidarity-community-supported-agriculture"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-food-solidarity-community-supported-agriculture"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-food-solidarity-community-supported-agriculture"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"38%"}
                          yLocation={"90%"}
                        />
                        {/*goat*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-learn-food-growing-agroecology-movement"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-learn-food-growing-agroecology-movement"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-learn-food-growing-agroecology-movement"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-learn-food-growing-agroecology-movement"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"20%"}
                          yLocation={"88%"}
                        />
                        {/*stoisko z parasolem*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-grow-community-food-cooperatives"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-grow-community-food-cooperatives"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-grow-community-food-cooperatives"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-grow-community-food-cooperatives"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"44%"}
                          yLocation={"90%"}
                        />
                        {/*girl with seeds*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-solidarity-community-seed-banks"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-food-solidarity-community-seed-banks"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-food-solidarity-community-seed-banks"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-food-solidarity-community-seed-banks"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"80.2%"}
                          yLocation={"63.5%"}
                        />
                        {/*kosz na smieci po prawej*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-systems-food-waste"
                          }
                          artifactTitle={
                            labelsDict["category-food-systems-food-waste"].title
                          }
                          category={
                            labelsDict["category-food-systems-food-waste"]
                              .subtitle
                          }
                          content={
                            labelsDict["category-food-systems-food-waste"]
                              .content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"76.2%"}
                          yLocation={"30.5%"}
                        />
                        {/*people with mattocks*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-learn-food-growing-wwoof"
                          }
                          artifactTitle={
                            labelsDict["category-learn-food-growing-wwoof"]
                              ?.title
                          }
                          category={
                            labelsDict["category-learn-food-growing-wwoof"]
                              ?.subtitle
                          }
                          content={
                            labelsDict["category-learn-food-growing-wwoof"]
                              ?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"35%"}
                          yLocation={"60%"}
                        />
                        {/*children leaning*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-systems-congress"
                          }
                          artifactTitle={
                            labelsDict["category-food-systems-congress"]?.title
                          }
                          category={
                            labelsDict["category-food-systems-congress"]
                              ?.subtitle
                          }
                          content={
                            labelsDict["category-food-systems-congress"]
                              ?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"60%"}
                          yLocation={"35%"}
                        />
                        {/*landscape*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-systems-access-to-land"
                          }
                          artifactTitle={
                            labelsDict["category-food-systems-access-to-land"]
                              ?.title
                          }
                          category={
                            labelsDict["category-food-systems-access-to-land"]
                              ?.subtitle
                          }
                          content={
                            labelsDict["category-food-systems-access-to-land"]
                              ?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"40%"}
                          yLocation={"15%"}
                        />
                        {/*stand z ksiazkami*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-food-systems-postgraduate-courses"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-food-systems-postgraduate-courses"
                            ].title
                          }
                          category={
                            labelsDict[
                              "category-food-systems-postgraduate-courses"
                            ].subtitle
                          }
                          content={
                            labelsDict[
                              "category-food-systems-postgraduate-courses"
                            ].content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"57%"}
                          yLocation={"90%"}
                        />
                        {/*stand z ksiazkami 2*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-learn-food-growing-green-books"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-learn-food-growing-green-books"
                            ]?.title
                          }
                          category={
                            labelsDict[
                              "category-learn-food-growing-green-books"
                            ]?.subtitle
                          }
                          content={
                            labelsDict[
                              "category-learn-food-growing-green-books"
                            ]?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"56%"}
                          yLocation={"83%"}
                        />
                        {/*notice board*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-grow-community-mapping-permaculture"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-grow-community-mapping-permaculture"
                            ]?.title
                          }
                          category={
                            labelsDict[
                              "category-grow-community-mapping-permaculture"
                            ]?.subtitle
                          }
                          content={
                            labelsDict[
                              "category-grow-community-mapping-permaculture"
                            ]?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"51%"}
                          yLocation={"84%"}
                        />
                        {/*notice board 2*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-learn-food-growing-permaculture-courses"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-learn-food-growing-permaculture-courses"
                            ]?.title
                          }
                          category={
                            labelsDict[
                              "category-learn-food-growing-permaculture-courses"
                            ]?.subtitle
                          }
                          content={
                            labelsDict[
                              "category-learn-food-growing-permaculture-courses"
                            ]?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"53%"}
                          yLocation={"87%"}
                        />
                        {/*domek na drzewie*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-grow-community-ecovillage"
                          }
                          artifactTitle={
                            labelsDict["category-grow-community-ecovillage"]
                              ?.title
                          }
                          category={
                            labelsDict["category-grow-community-ecovillage"]
                              ?.subtitle
                          }
                          content={
                            labelsDict["category-grow-community-ecovillage"]
                              ?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"25.2%"}
                          yLocation={"20.5%"}
                        />
                        {/*three people*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-grow-community-gardening"
                          }
                          artifactTitle={
                            labelsDict["category-grow-community-gardening"]
                              ?.title
                          }
                          category={
                            labelsDict["category-grow-community-gardening"]
                              ?.subtitle
                          }
                          content={
                            labelsDict["category-grow-community-gardening"]
                              ?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"34%"}
                          yLocation={"51%"}
                        />
                        {/*three people*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-learn-food-growing-educators-toolshed"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-learn-food-growing-educators-toolshed"
                            ]?.title
                          }
                          category={
                            labelsDict[
                              "category-learn-food-growing-educators-toolshed"
                            ]?.subtitle
                          }
                          content={
                            labelsDict[
                              "category-learn-food-growing-educators-toolshed"
                            ]?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={true}
                          color={"#e3f393"}
                          xLocation={"35%"}
                          yLocation={"35%"}
                        />
                        {/*insect hotel*/}
                        <TooltipInfo
                          artifactSlug={
                            "category-grow-community-dragon-dreaming"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-grow-community-dragon-dreaming"
                            ]?.title
                          }
                          category={
                            labelsDict[
                              "category-grow-community-dragon-dreaming"
                            ]?.subtitle
                          }
                          content={
                            labelsDict[
                              "category-grow-community-dragon-dreaming"
                            ]?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          color={"#e3f393"}
                          xLocation={"46%"}
                          yLocation={"33%"}
                        />
                        {/*tree*/}
                        <TooltipInfo
                          artifactSlug={
                            "corresponding-category-grow-community-work-that-reconnects"
                          }
                          artifactTitle={
                            labelsDict[
                              "category-grow-community-work-that-reconnects"
                            ]?.title
                          }
                          category={
                            labelsDict[
                              "category-grow-community-work-that-reconnects"
                            ]?.subtitle
                          }
                          content={
                            labelsDict[
                              "category-grow-community-work-that-reconnects"
                            ]?.content.html
                          }
                          isClicked={isClicked}
                          showTooltip={showTooltip}
                          handleShow={handleShow}
                          modal={false}
                          color={"#e3f393"}
                          xLocation={"10%"}
                          yLocation={"60%"}
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
