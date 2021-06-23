import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LabelContext from "./LabelContext";
import styles from "./Label.module.css";

const LabelNoLink = (props) => {
  const showButton = true;

  const length = props.header.length;
  return (
    <LabelContext.Consumer>
      {(isClicked) => (
        <div className={styles.labelContainer}>
          <div className={styles.shadow}>
            <div
              className={styles.label}
              style={{
                background: `radial-gradient(circle at 80% 50%, transparent 7%, ${props.color == null ? "#f4d588" : props.color} 7%)`,
              }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  marginLeft: "1vw",
                }}
              >
                <Grid item md={8}>
                  <div className={styles.labelContent}>
                    <h1>{props.header}</h1>
                    <h2>{props.author}</h2>
                    {true ? (
                      <Button
                        id={styles.buttonLabel}
                        classes={{ label: styles.buttonLabel }}
                        className={styles.button}
                        variant="contained"
                        onClick={props.onClick}
                      >
                        Buy
                      </Button>
                    ) : null}
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      )}
    </LabelContext.Consumer>
  );
};

export default LabelNoLink;
