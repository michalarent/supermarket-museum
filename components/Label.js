import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LabelContext from "./LabelContext";
import styles from "./Label.module.css";

const Label = (props) => {
  const showButton = true;

  return (
    <LabelContext.Consumer>
      {(isClicked) => (
        <div className={styles.labelContainer}>
          <div className={styles.shadow}>
            <div
              className={styles.label}
              onMouseDown={props.onClick}
              style={props.hideButton ? { cursor: "pointer" } : null}
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

                    {!props.hideButton ? (
                      <Button
                        id={styles.buttonLabel}
                        classes={{ label: styles.buttonLabel }}
                        className={styles.button}
                        variant="contained"
                        onClick={props.onClick}
                        as="artifacts"
                        shallow
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

export default Label;
