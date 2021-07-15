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

export default function SusanneMap({ artifactModels, openArtifact, labels }) {
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
                  ) : null}
                </>
                <div
                  className={"artifactDescription"}
                  dangerouslySetInnerHTML={{
                    __html: currentArtifact.artifactContent?.html,
                  }}
                />
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
                    src="/supermarket/susanne_drawing.png"
                    // onLoad={handleLoad}
                  />
                  <Fade in={true} timeout={1000}>
                    <div className={styles_map.allTooltips}>
                      
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-1-objectives-expectations"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-1-objectives-expectations"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-1-objectives-expectations"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"26.2%"}
                        yLocation={"58.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-1-fostering-participants-abilities"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-1-fostering-participants-abilities"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-1-fostering-participants-abilities"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"29.2%"}
                        yLocation={"61.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-2-visualising-expertise"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-2-visualising-expertise"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-2-visualising-expertise"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"25.2%"}
                        yLocation={"47.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-2-prior-knowledge"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-2-prior-knowledge"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-2-prior-knowledge"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"32.2%"}
                        yLocation={"46.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-3-learning-framework"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-3-learning-framework"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-3-learning-framework"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"35.2%"}
                        yLocation={"31.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-3-workshop-programme"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-3-workshop-programme"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-3-workshop-programme"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"40.2%"}
                        yLocation={"25.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-3-drawing-different-stages"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-3-drawing-different-stages"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-3-drawing-different-stages"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"62.2%"}
                        yLocation={"21.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-3-digging-deeper"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-3-digging-deeper"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-3-digging-deeper"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"67.2%"}
                        yLocation={"31.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-4-living-values"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-4-living-values"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-4-living-values"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"55.2%"}
                        yLocation={"63.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-5-understanding-cycles"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-5-understanding-cycles"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-5-understanding-cycles"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"66.2%"}
                        yLocation={"25.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict["learning-the-natural-way-5-group-work"]
                            ?.title
                        }
                        artifactSlug={"learning-the-natural-way-5-group-work"}
                        artifactAuthor={
                          artifactsDict["learning-the-natural-way-5-group-work"]
                            ?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"64.2%"}
                        yLocation={"40.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-5-collecting-questions"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-5-collecting-questions"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-5-collecting-questions"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"62.2%"}
                        yLocation={"36.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-6-on-farm-practice"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-6-on-farm-practice"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-6-on-farm-practice"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"70.2%"}
                        yLocation={"53.5%"}
                        color={"#e3f393"}
                      />
                      <TooltipLabel
                        artifactTitle={
                          artifactsDict[
                            "learning-the-natural-way-6-own-garden-plots"
                          ]?.title
                        }
                        artifactSlug={
                          "learning-the-natural-way-6-own-garden-plots"
                        }
                        artifactAuthor={
                          artifactsDict[
                            "learning-the-natural-way-6-own-garden-plots"
                          ]?.authors?.html
                        }
                        isClicked={isClicked}
                        showTooltip={showTooltip}
                        handleShow={handleShow}
                        xLocation={"42.2%"}
                        yLocation={"53.5%"}
                        color={"#e3f393"}
                      />
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
