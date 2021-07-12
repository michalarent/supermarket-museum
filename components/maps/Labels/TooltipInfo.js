import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Label from "../../Label";
import LabelNoLink from "../../LabelNoLink";
import InfoLabel from "../../InfoLabel";

import styles_map from "../../../styles/map.module.css";

import LabelContext from "../../LabelContext";
import ShowLabelContext from "../../ShowLabelContext";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import useMobileDetect from "./useMobileDetect";

export default function TooltipInfo({
  xLocation,
  yLocation,
  artifactSlug,
  borderColor,
  artifactTitle,
  category,
  content,
  handleShow,
  showTooltip,
  modal,
  color,
  href,
}) {
  var text = content;
  const [showThisTooltip, setShowThisTooltip] = React.useState(false);

  function setMobile() {
    return useMobileDetect().isMobile();
  }

  const isMobile = setMobile();

  const handleOpenArtifact = () => {
    handleShow(artifactSlug);
    setShowThisTooltip(false);
  };

  return (
    <>
      <Tooltip
        interactive
        placement="auto"
        enterTouchDelay={50}
        leaveDelay={isMobile ? 5000 : 0}
        onOpen={() => showTooltip(artifactSlug)}
        title={
          <>
            {showThisTooltip ? (
              <InfoLabel
                isMobile={isMobile}
                handleClose={setShowThisTooltip}
                slug={artifactSlug}
                header={artifactTitle}
                category={category}
                content={text}
                onClick={handleOpenArtifact}
                modal={modal}
                color={color}
              />
            ) : null}
          </>
        }
      >
        <div
          onMouseEnter={() => setShowThisTooltip(true)}
          onTouchStart={() => setShowThisTooltip(true)}
          className={styles_map.pinInfoGarden}
          style={{
            top: yLocation,
            left: xLocation,
            color: borderColor,
            color: color,
          }}
        >
          <LiveHelpIcon style={{}} />{" "}
        </div>
      </Tooltip>
    </>
  );
}
