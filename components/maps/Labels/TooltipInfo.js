import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Label from "../../Label";
import LabelNoLink from "../../LabelNoLink";
import InfoLabel from "../../InfoLabel";

import styles_map from "../../../styles/map.module.css";

import LabelContext from "../../LabelContext";
import ShowLabelContext from "../../ShowLabelContext";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

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

  const handleOpenArtifact = () => {
    handleShow(artifactSlug);
    setShowThisTooltip(false);
  };

  return (
    <>
      <Tooltip
        interactive
        placement="auto"
        enterTouchDelay={0}
        onOpen={() => showTooltip(artifactSlug)}
        title={
          <>
            {showThisTooltip ? (
              <InfoLabel
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
          onTouchStart={() => setShowThisTooltip(true)}
          className={styles_map.pinInfo}
          style={{ top: yLocation, left: xLocation, color: borderColor, color: color }}
        >
          <LiveHelpIcon style={{}} />{" "}
        </div>
      </Tooltip>
    </>
  );
}
