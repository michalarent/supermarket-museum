import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Label from "../../Label";
import LabelNoLink from "../../LabelNoLink";

import styles_map from "../../../styles/map.module.css";
import styles from "../ExampleSvg.module.css";
import LabelContext from "../../LabelContext";
import ShowLabelContext from "../../ShowLabelContext";

export default function TooltipLabel({
  isClicked,
  showTooltip,
  handleShow,
  xLocation,
  yLocation,
  artifactSlug,
  borderColor,
  artifactTitle,
}) {
  const [showThisTooltip, setShowThisTooltip] = React.useState(false);

  const handleOpenArtifact = () => {
    handleShow(artifactSlug);
    setShowThisTooltip(false);
  };
  return (
    <>
      <Tooltip
        interactive
        enterTouchDelay="0"
        placement="center"
        onOpen={() => showTooltip(artifactSlug)}
        className={styles.tooltip}
        title={
          <>
            {showThisTooltip ? (
              <LabelNoLink
                slug={artifactSlug}
                header={artifactTitle}
                author="Somebody"
                showButton={true}
                onClick={handleOpenArtifact}
              />
            ) : null}
          </>
        }
      >
        <div
          onMouseEnter={() => setShowThisTooltip(true)}
          onTouchStart={() => setShowThisTooltip(true)}
          onTouchStart={() => setShowThisTooltip(true)}
          className={styles_map.pin}
          style={{ top: yLocation, left: xLocation, color: borderColor }}
        />
      </Tooltip>
    </>
  );
}
