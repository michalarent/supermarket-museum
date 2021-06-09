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
}) {
  function handleShowSynthesizer() {
    setShowSynthesizer(true);
    handleShow(artifactSlug);
  }
  return (
    <Tooltip
      interactive
      enterTouchDelay="0"
      placement="right"
      onOpen={() => showTooltip(artifactSlug)}
      leaveDelay={100}
      className={styles.tooltip}
      title={
        <>
          <LabelContext.Provider value={isClicked}>
            {!isClicked ? (
              <LabelNoLink
                slug={artifactSlug}
                header={artifactTitle}
                author={artifactSlug}
                showButton={true}
                onClick={() => handleShowSynthesizer()}
              />
            ) : null}
          </LabelContext.Provider>
        </>
      }
    >
      <div
        className={styles_map.pin}
        onMouseEnter={console.log}
        style={{ top: yLocation, left: xLocation, color: borderColor }}
      />
    </Tooltip>
  );
}
