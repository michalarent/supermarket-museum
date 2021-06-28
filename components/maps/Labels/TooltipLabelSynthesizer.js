import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Label from "../../Label";
import LabelNoLink from "../../LabelNoLink";

import styles_map from "../../../styles/map.module.css";
import styles from "../ExampleSvg.module.css";
import LabelContext from "../../LabelContext";

export default function TooltipLabelSynthesizer({
  isClicked,
  showTooltip,
  handleShow,
  xLocation,
  yLocation,
  artifactSlug,
  borderColor,
  artifactTitle,
  setShowSynthesizer,
  artifactAuthor,
}) {
  const [showThisTooltip, setShowThisTooltip] = React.useState(false);

  function handleShowSynthesizer() {
    setShowThisTooltip(false);
    setShowSynthesizer(true);
    handleShow(artifactSlug);
  }
  return (
    <Tooltip
      interactive
      enterTouchDelay="0"
      placement="right"
      onOpen={() => showTooltip(artifactSlug)}
      className={styles.tooltip}
      title={
        <>
          {showThisTooltip ? (
            <LabelNoLink
              slug={artifactSlug}
              header={artifactTitle}
              author={artifactAuthor}
              showButton={true}
              onClick={handleShowSynthesizer}
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
  );
}
