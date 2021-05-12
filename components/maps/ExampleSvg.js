import React from "react";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_AUTO } from "react-svg-pan-zoom";
import { useWindowSize } from "@react-hook/window-size";
import Tooltip from "@material-ui/core/Tooltip";
import Label from "../../components/Label";
import Link from "next/link";
import { useRouter } from "next/router";
import LabelNoLink from "../LabelNoLink";
import LabelContext from "../LabelContext";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useContextualRouting } from "next-use-contextual-routing";

import styles from "./ExampleSvg.module.css";
import { IconButton } from "@material-ui/core";

//   const artifactModel = artifactModels.find(
//     (model) => (model.artifactTitle = "Let's take a look")
//   );

export default function ExampleSvg({ artifactModels, openArtifact }) {
  const { makeContextualHref, returnHref } = useContextualRouting();
  const router = useRouter();
  console.log(openArtifact);
  const [show, setShow] = React.useState(false);
  const [currentArtifact, setCurrentDisplayedArtifact] = React.useState(null);
  const [showGallery, setShowGallery] = React.useState(false);

  const handleShowGallery = () => {
    setShowGallery(true);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  const handleClose = () => {
    setCurrentArtifact(null);
    if (openArtifact == null) {
      router.push(returnHref, undefined, { shallow: true });
    } else {
      router.push("/museum");
    }

    setShow(false);
  };

  const handleShow = (artifactId, slug) => {
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

  const setCurrentArtifact = (artifactId, slug) => {
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

  const Viewer = React.useRef(null);
  const [tool, setTool] = React.useState(TOOL_AUTO);
  const [value, setValue] = React.useState(INITIAL_VALUE);
  const [width, height] = useWindowSize({
    initialWidth: "100vw",
    initialHeight: "100vh",
  });

  React.useLayoutEffect(() => {
    Viewer.current.fitToViewer();
    Viewer.current.pan(width - width / 1.5, height - height / 1.25);
    Viewer.current.zoom(-(width - width / 1.25), -(height - height / 1.1), 2.0);
  }, []);

  const [isClicked, setIsClicked] = React.useState(false);

  const hideTooltip = () => {
    handleShow();
    setIsClicked(true);
  };

  const showTooltip = (artifactId, slug) => {
    setCurrentArtifact(artifactId, slug);
    setIsClicked(false);
  };

  React.useEffect(() => {
    if (openArtifact != null) {
      handleShow(openArtifact);
    }
  }, []);

  return (
    <>
      <ReactSVGPanZoom
        className={styles.svgContainer}
        background="transparent"
        tool={tool}
        onChangeTool={setTool}
        value={value}
        onChangeValue={setValue}
        width={width}
        height={height}
        ref={Viewer}
        detectAutoPan={false}
        scaleFactorOnWheel={1.008}
        disableDoubleClickZoomWithToolAuto={false}
        toolbarProps={{
          position: "left",
        }}
        miniatureProps={{
          height: 0,
          width: 0,
        }}
      >
        <div>
          <svg className={styles.svgMap}>
            <Tooltip
              interactive
              enterTouchDelay="0"
              placement="right"
              onOpen={() =>
                showTooltip("ckojzeyo0b6ot0c62lb0wfdgq", "example-artifact")
              }
              leaveDelay={100}
              className={styles.tooltip}
              title={
                <>
                  <LabelContext.Provider value={isClicked}>
                    {!isClicked ? (
                      <LabelNoLink
                        artifactId="ckoe0xaq8l5pi0c54bympu5z5"
                        slug="example-artifact"
                        header="Misterium"
                        author="Somebody"
                        showButton={true}
                        onClick={() =>
                          handleShow(
                            "ckoe0xaq8l5pi0c54bympu5z5",
                            "example-artifact"
                          )
                        }
                      />
                    ) : null}
                  </LabelContext.Provider>
                </>
              }
            >
              <path
                className="pm"
                d="m 255.10601,0.2519458 22.84,13.6100002 9.27,8.47 -0.74,3.58 -6.45,-9.89 -17.22,-10.7300002 -1.71,6.1700002 4.71,3.71 -0.1,6.56 2.89,-0.88 -0.19,3.28 3.25,6.22 -1.2,1.38 -2.56,-0.86 3.28,1.51 0.32,8.05 3.81,4.16 5.99,0.86 -2.08,0.64 2.63,2.59 9.97,2.94 2.77,-2.08 3.63,2.26 12.67,-0.89 13.08,-3.12 13.69,-6.93 -14.48,8.71 -11.38,3.15 2.12,2.41 0.2,4.05 0,0 3.71,6.59 -4.4,3.62 1.31,2.21 -3.06,8.78 4.45,2.02 -1.14,1.74 1.15,1.85 1.94,-0.94 5.3,2.75 -1.62,3.08 1.48,3.18 11.07,-2.41 -2.99,7.53 0,0 0,0.33 0,0 -4.04,7.100004 1.26,1.07 -1.07,2.95 -2.14,-3.21 -5.66,-1.46 -2.21,1.21 -0.98,6.62 -4.71,5.03 -0.16,5.17 -2.29,0.15 -2.92,3.39 0.45,2.92 0,0 -9.22,-1.2 -5.48,1.93 0.17,-1.83 -8.36,-1.09 -1.84,-3.84 1.82,-5.83 -2.33,1.62 -4.72,-1.14 -1.55,2.21 -3.19,-0.38 0.5,1.85 -1.91,0.44 -2.39,-2.61 0.25,-2.46 -2.75,0.2 -0.71,1.66 -11.98,-1.53 0.25,-4.36 -4.16,-0.14 0,0 0,-1.09 0,0 -1.93,1.28 -1.09,-2.42 -2.43,0.84 -2.34,-2.48 -4.25,6.08 -3.58,-3.4 -5.3,-0.53 1.95,5.15 -4.5,2.56 -4.47,-0.44 -2.33,5.97 1.01,2.99 -3.92,0.18 0.92,2.94 -3.89,-2.65 -2.05,1.88 -3.03,-0.69 -0.85,-3.63 -5.46,4.04 -1.83,9.57 0,0 -3.31,-1.18 0,0 -0.24,-0.09 0,0 -1.78,-2.67 -3.85,-0.56 0,0 -1.32,0.06 0,0 -3.49,0.7 -4.06,-1.63 -2.63,2.55 -3.2,0.02 0.02,-3.3 -3.11,0.58 -3.44,-11.61 0,0 -2.17,-9.18 5.27,-5.36 -4.44,-3.3 0.03,-3.76 1.34,-1.29 4.65,0.73 0.81,-3.420004 -6.46,-3.65 -0.13,-3.64 -2.04,-2.34 -1.54,-0.81 -0.76,2.57 0,0 -0.71,0.06 0,0 -0.35,-4.92 0,0 0.42,-0.51 0,0 1.23,-4.1 -1.89,-2.77 1.32,-1.79 -5.46,-10.1 0.96,-2.11 7.53,-2.85 0.67,-2.34 -3.07,-3.61 -0.48,-4.96 2.7,-0.69 -0.42,-7.69 -1.44,-3.33 -2.93,-1.21 -2.81,-8.19 0,0 10.51,-2.71 8.99,-7.85 13.07,-6.8 42.29,-10.2100002 20.95,-0.59 z"
                title="Pomorskie"
                id="PL-PM"
              />
            </Tooltip>
            <Tooltip
              interactive
              enterTouchDelay="0"
              placement="right"
              onOpen={() =>
                showTooltip("ckojzeyo0b6ot0c62lb0wfdgq", "image-gallery")
              }
              leaveDelay={100}
              className={styles.tooltip}
              title={
                <>
                  <LabelContext.Provider value={isClicked}>
                    {!isClicked ? (
                      <Label
                        artifactId="ckoe0xaq8l5pi0c54bympu5z5"
                        slug="example-artifact"
                        header="Misterium"
                        author="Somebody"
                        showButton={true}
                        pathname={"/museum/artifacts/image-gallery"}
                        onClick={handleShowGallery}
                      />
                    ) : null}
                  </LabelContext.Provider>
                </>
              }
            >
              <path
                className="kp"
                d="m 199.87601,140.08195 1.83,-9.57 5.46,-4.05 0.85,3.64 3.03,0.68 2.05,-1.87 3.9,2.64 -0.92,-2.94 3.92,-0.19 -1.01,-2.98 2.33,-5.97 4.47,0.44 4.5,-2.56 -1.95,-5.15 5.3,0.52 3.58,3.4 4.24,-6.08 2.35,2.49 2.43,-0.85 1.08,2.42 1.93,-1.27 0,0 0,1.09 0,0 4.17,0.14 -0.25,4.37 11.97,1.53 0.72,-1.66 2.74,-0.19 -0.25,2.46 2.4,2.61 1.91,-0.44 -0.5,-1.86 3.18,0.39 1.55,-2.22 4.72,1.15 2.33,-1.62 -1.82,5.83 1.84,3.84 8.36,1.09 -0.17,1.82 5.48,-1.92 9.22,1.2 0,0 3.42,1.53 0.28,5.8 4.19,10.88 1.9,1.37 0.83,-2.1 4.3,-0.39 3.84,3.26 -0.16,1.82 3.93,-0.77 1.43,3.71 9.13,-0.77 2.7,7.66 -2.77,1.38 0.29,2.41 3.16,0.74 0.09,2.4 0,0 -0.32,0 0,0 1.48,5.21 0,0 -4.22,3.12 0,0 -0.45,-0.15 0,0 -1.11,1.69 -1.89,-0.54 1.07,7.46 2.27,1.7 -1.61,3.42 1.01,3.19 -7.65,-3.48 1.35,3.04 -2.97,2.43 -5.12,-0.99 4.13,8.54 -2.49,-0.21 -2.91,4.85 4.89,4.66 -0.46,2.02 1.61,-0.07 -1.48,1.76 1.61,2.67 -5.15,-1.79 0.58,5.09 -2.17,0.17 -2.86,4.6 3.21,2.54 -3.48,3.17 0,0 -0.81,0.01 0,0 -0.04,4.17 -1.7,-0.24 4.41,1.75 -4.7,6.35 -3.15,0.02 1.51,1.72 0,0 0.35,0.57 0,0 -0.36,2.69 0,0 -4.88,3.23 0.63,2.24 -1.23,-1.7 -9.39,2.67 0,0 -4.71,-2.34 0.38,-1.91 -3.27,-2.46 -0.58,3.36 -9.64,3.32 -2.37,-6.42 -2.19,-0.22 0.22,-2.84 -1.61,0.63 -0.5,-2.83 -3.43,-1.75 -1.99,0.55 -2.27,-3.59 -2.02,-0.55 -1.61,2.8 -4.62,0.62 -1.24,-7.26 -6.52,6.11 -3.45,-0.19 -0.49,-2.18 -6.33,-1.47 0.19,-3.36 -6.57,0.94 0.48,-3.47 -1.32,1.09 -1.97,-2.95 -1.19,1.01 -2.85,-5.62 -2.3,0.55 -2.78,-2.16 -1.38,2.32 -0.41,-2.3 -5.16,5.62 0.17,-4.76 -3.14,-0.43 0.09,-5.63 -3.23,0.43 -3.4,3.25 -3.18,-0.86 0.96,-4.72 -5.05,-2.8 0.33,-2.92 5.78,-0.32 0.9,-14.06 -7.48,-5.57 -4.81,0.91 -0.9,-2.18 1.48,-2.16 0,0 0.3,-0.06 0,0 -0.44,-5.92 2.35,-1.44 -0.65,-3.96 2.39,-1.2 -3.22,-1.31 0.64,-4.69 -1.64,-1.48 5.51,-1.26 1.48,-4.09 -6.04,-8.07 -3.49,-1.17 -0.9,1.44 -1.19,-3.46 z"
                title="Kujawsko-Pomorskie"
                id="PL-KP"
              />
            </Tooltip>
            <Tooltip
              interactive
              enterTouchDelay="0"
              placement="right"
              onOpen={() => showTooltip("ckojzeyo0b6ot0c62lb0wfdgq", "video")}
              leaveDelay={100}
              className={styles.tooltip}
              title={
                <>
                  <LabelContext.Provider value={isClicked}>
                    {!isClicked ? (
                      <Label
                        artifactId="ckoe0xaq8l5pi0c54bympu5z5"
                        slug="example-artifact"
                        header="Misterium"
                        author="Somebody"
                        showButton={true}
                        pathname={"/museum/artifacts/video"}
                      />
                    ) : null}
                  </LabelContext.Provider>
                </>
              }
            >
              <path
                className="ld"
                d="m 315.78601,250.51195 3.94,4.72 6.65,-0.82 2.87,1.52 -0.23,1.81 7.31,2.92 2.55,3.47 2.55,-1.99 2.86,1.32 3.69,-2.05 2.77,0.47 2.56,-3.17 4.13,2.61 0.57,2.52 3.18,-1.22 3.26,3.31 -0.49,4.82 2.26,3.84 3.6,0.15 1.63,2.81 4.61,1.35 -0.76,4.71 -3.43,2.73 3.34,1.72 1.26,2.84 0.3,1.69 -2.92,2.86 4.27,-0.08 0.47,2.42 6.81,-2.88 3.52,2.33 1.09,2.92 3.7,0.19 3.22,7.31 -3.81,0.33 1.45,0.7 0.12,6.15 4.6,2.23 0.01,2.82 -2.31,3.88 -6.18,-1.32 -3.23,-2.86 -4.62,3.78 2.61,8.5 2.14,1.57 -1.07,5.22 5,-0.89 0.53,2.18 -2.46,6.05 -4.01,4.17 -0.42,3.54 0,0 -0.86,3.01 -2.62,0.97 1.29,3.99 -1.37,3.19 -2.38,-2.01 -1.72,1.63 -2.68,-1.75 -1.09,0.34 1.37,4 -1.44,0.99 -3.7,-0.35 -1.59,1.72 -6.12,-2.44 -2.87,1.24 1.31,3.06 -2.52,2.32 0.1,6.09 4.67,1.46 -1.79,9.23 -4.2,-2.17 -5.25,-6.14 -2.9,7.07 0.88,4.34 0,0 0,0.97 0,0 -0.85,1.4 0,0 -0.09,-0.01 0,0 -1.03,1.08 0,0 -0.47,0.35 0,0 -1.04,0.12 0,0 0.08,0.24 0,0 -2.44,3.36 0,0 -4.57,1.09 -0.37,-3 -4.86,-2.51 -5.58,1.98 -1.1,-5.22 -4.06,-5.92 -1.29,-0.84 -2.4,1.91 -2.43,-2.97 0.52,-2.22 -3.89,1.28 0.41,2.73 -2.69,1.64 -3.63,-2.94 -1.73,0.77 -2.06,-3.24 -2.02,0.58 -7.17,-6.17 -1.98,0.33 -2.18,3.72 -1.56,-1.57 -11.66,2.08 0,0 -5,-2.85 -2.15,-5.46 -1.74,0.23 -1.84,4.53 -1.49,-2.78 -9.74,-1.43 -8.89,-3.93 0,0 1.47,-9.43 -4.28,0.57 -1.86,-8.75 2.76,-0.51 1.08,-2.78 3.43,-0.38 0.77,-2.92 -1.44,-1.97 2.8,-0.79 5.41,3.16 3.35,-5.51 -1.46,-5.68 1.25,-6.02 -1.76,-0.68 2.03,-4.95 -1.71,-0.74 3.53,-4.5 -0.43,-4 1.63,-1.67 -1.16,-2.54 1.89,-1.29 -0.29,-2.15 1.91,0.46 0.19,-3.06 1.84,-0.61 0.76,2.23 4.83,-1.17 5.7,2.14 0.56,-3.98 5.68,-6.71 -4.06,-3.75 -0.82,-9.57 1.92,-1.18 5.19,1.77 0.87,-2.7 5.27,-0.13 1.01,-3.89 -2.17,-2 1.21,-5.72 3.96,-1.58 5.84,1.63 -1.06,-2.12 2.03,-1.37 -0.29,-2.44 -4.26,-0.55 0.99,-6.05 0,0 9.39,-2.67 1.23,1.7 -0.63,-2.24 z"
                title="Łódzkie"
                id="PL-LD"
              />
            </Tooltip>
          </svg>
        </div>
      </ReactSVGPanZoom>

      <Modal open={openArtifact == null ? show : true}>{body}</Modal>
    </>
  );
}
