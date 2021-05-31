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
import ImageHotspots from "react-image-hotspots";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Spinner from "react-bootstrap/Spinner";

import styles_map from "../../styles/map.module.css";
import styles from "./ExampleSvg.module.css";
import { IconButton } from "@material-ui/core";
import dynamic from "next/dynamic";
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
        <TransformComponent className={styles_map.TransformComponent}>
          <div className={styles_map.mapWrapper}>
            <div className={styles_map.mapImage}>
              <Image
                src="/supermarket/supermarket.png"
                layout="fill"
                priority="high"
              />
            </div>
            <div className={styles_map.allTooltips}>
              <div className={styles_map.tooltip}>
                <TooltipLabel
                  artifactSlug={"example-artifact"}
                  isClicked={isClicked}
                  showTooltip={showTooltip}
                  handleShow={handleShow}
                  xLocation={"50%"}
                  yLocation={"30%"}
                />
                <TooltipLabel
                  artifactSlug={"example-artifact"}
                  isClicked={isClicked}
                  showTooltip={showTooltip}
                  handleShow={handleShow}
                  xLocation={"20%"}
                  yLocation={"30%"}
                />
                <TooltipLabel
                  artifactSlug={"example-artifact"}
                  isClicked={isClicked}
                  showTooltip={showTooltip}
                  handleShow={handleShow}
                  xLocation={"25%"}
                  yLocation={"40%"}
                />
              </div>
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
      <Modal open={openArtifact == null ? show : true}>{body}</Modal>
    </>
  );
}
