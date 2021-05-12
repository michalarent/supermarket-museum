import React from "react";
import Link, { useRouter } from "next/link";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import LabelContext from "./LabelContext";
import styles from "./Label.module.css";
import { useContextualRouting } from "next-use-contextual-routing";
import { Modal } from "react-bootstrap";

const LabelNoLink = (props) => {
  const showButton = true;

  const { makeContextualHref, returnHref } = useContextualRouting();

  return (
    <LabelContext.Consumer>
      {(isClicked) => (
        <div className={styles.labelContainer}>
          <div className={styles.shadow}>
            <div className={styles.label}>
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
                <Grid item md={2}>
                  <div className={styles.circle}></div>
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
