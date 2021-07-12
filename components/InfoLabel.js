import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LabelContext from "./LabelContext";
import styles from "./Label.module.css";
import Divider from "@material-ui/core/Divider";

const InfoLabel = (props) => {
  const showButton = true;
  console.log(props.content);

  return (
    <LabelContext.Consumer>
      {(isClicked) => (
        <div className={styles.labelContainer}>
          {console.log(props.color)}
          <div className={styles.shadow}>
            <div
              className={styles.infoLabel}
              style={{
                background: `${props.color == null ? null : "#e3f393"}`,
              }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  marginLeft: "1vw",
                }}
              >
                <Grid item>
                  <div className={styles.labelContent}>
                    <h1>{props.header}</h1>
                    <h2>{props.category}</h2>
                    <Divider className={styles.divider} />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props.content,
                      }}
                    />
                    {props.modal == true ? (
                      <p className={styles.link} onClick={props.onClick}>
                        To read further...
                      </p>
                    ) : null}
                  </div>
                </Grid>
                <Grid item md={2}></Grid>
              </Grid>
            </div>
          </div>
        </div>
      )}
    </LabelContext.Consumer>
  );
};

export default InfoLabel;
