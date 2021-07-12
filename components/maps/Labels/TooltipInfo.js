import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Label from "../../Label";
import LabelNoLink from "../../LabelNoLink";
import InfoLabel from "../../InfoLabel";

import styles_map from "../../../styles/map.module.css";
import { useRouter } from "next/router";
import LabelContext from "../../LabelContext";
import ShowLabelContext from "../../ShowLabelContext";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import InfoIcon from "@material-ui/icons/Info";
import HelpIcon from "@material-ui/icons/Help";

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

  const router = useRouter();
  return (
    <>
      <Tooltip
        interactive
        enterTouchDelay={50}
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
          className={
            router.pathname.includes("garden")
              ? styles_map.pinInfoGarden
              : styles_map.pinInfo
          }
          style={{
            top: yLocation,
            left: xLocation,
            color: borderColor,
          }}
        >
          <HelpIcon style={{}} />{" "}
        </div>
      </Tooltip>
    </>
  );
}
