import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Label from "../../Label";
import LabelNoLink from "../../LabelNoLink";
import InfoLabel from "../../InfoLabel";

import styles_map from "../../../styles/map.module.css";
import styles from "../ExampleSvg.module.css";
import LabelContext from "../../LabelContext";
import ShowLabelContext from "../../ShowLabelContext";

export default function TooltipInfo({
  xLocation,
  yLocation,
  artifactSlug,
  borderColor,
  artifactTitle,
  category,
  content,
}) {
  var text = content;

  return (
    <>
      <Tooltip
        interactive
        placement="right"
        enterTouchDelay={0}
        leaveDelay={100}
        className={styles.tooltip}
        title={
          <>
            <InfoLabel
              slug={artifactSlug}
              header={artifactTitle}
              category={category}
              content={text}
            />
          </>
        }
      >
        <div
          className={styles_map.pin}
          style={{ top: yLocation, left: xLocation, color: borderColor }}
        />
      </Tooltip>
    </>
  );
}
