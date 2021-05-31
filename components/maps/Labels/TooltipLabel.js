import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Label from "../../Label";
import LabelNoLink from "../../LabelNoLink";

import styles_map from "../../../styles/map.module.css";
import styles from "../ExampleSvg.module.css";
import LabelContext from "../../LabelContext";

export default function TooltipLabel({
  isClicked,
  showTooltip,
  handleShow,
  xLocation,
  yLocation,
  artifactSlug,
}) {
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
                artifactId="ckoe0xaq8l5pi0c54bympu5z5"
                slug={artifactSlug}
                header="Misterium"
                author="Somebody"
                showButton={true}
                onClick={() => handleShow(artifactSlug)}
              />
            ) : null}
          </LabelContext.Provider>
        </>
      }
    >
      <div
        className={styles_map.pin}
        onMouseEnter={console.log}
        style={{ top: yLocation, left: xLocation }}
      />
    </Tooltip>
  );
}
