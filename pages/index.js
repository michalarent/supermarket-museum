import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles_map from "../styles/map.module.css";
import Label from "../components/Label";
import LabelNoLink from "../components/LabelNoLink";
import SideDrawer from "../components/navigation/SideDrawer";
import { getAllAgroPermaLabInfo, getArtifactBySlug } from "../api/graphcms";
import TooltipLabel from "../components/maps/Labels/TooltipLabel";
import { IconButton, Grid, Box } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Tooltip from "@material-ui/core/Tooltip";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export async function getStaticProps() {
  const { infoPages } = await getAllAgroPermaLabInfo();
  const oneOfAll = await getArtifactBySlug("one-of-all");

  return {
    props: { infoPages, oneOfAll },
  };
}

export default function Home({ infoPages, oneOfAll }) {
  const [showTransition, setShowTransition] = React.useState(false);
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const router = useRouter();

  async function handleTransition() {
    setShowTransition(true);
    await timeout(1000);
    router.push("/choose");
  }

  const [isClicked, setIsClicked] = React.useState(true);

  const showTooltip = (slug) => {
    setIsClicked(false);
  };

  function handleTransitionArtifact() {
    setShowOneOfAll(true);
  }

  const currentArtifact = oneOfAll.artifactModel;

  const [showOneOfAll, setShowOneOfAll] = React.useState(false);

  console.log(currentArtifact);

  const body = (
    <>
      {currentArtifact != null ? (
        <div className="modalCanvas">
          <div className="closeIcon">
            <IconButton onClick={() => setShowOneOfAll(false)}>
              <HighlightOffIcon />
            </IconButton>
          </div>
          <Box p={(2, 4)} className="modalBoxContainer">
            <Grid item xs={12} md={12}>
              <div className="modalContentAdjusted">
                <h1 className="heading">{currentArtifact.title}</h1>
                <div
                  className="text-3xl"
                  dangerouslySetInnerHTML={{
                    __html: currentArtifact.authors.html,
                  }}
                />
                <>
                  {currentArtifact?.videoIFrame?.text.length > 5 ? (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: currentArtifact.videoIFrame.text,
                        }}
                      />
                    </>
                  ) : (
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={12} lg={12}>
                        <div
                          className={"artifactDescription"}
                          dangerouslySetInnerHTML={{
                            __html: currentArtifact.artifactContent.html,
                          }}
                        />
                      </Grid>
                    </Grid>
                  )}
                </>
                <Grid container spacing={5}>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"artifactDescription"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.descriptionEn?.html,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"artifactDescription"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.descriptionOriginal?.html,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={5}
                  className={"technicalInformationContainer"}
                >
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"technicalInformation"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.technicalInformation?.html,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <div
                      className={"technicalInformation"}
                      dangerouslySetInnerHTML={{
                        __html: currentArtifact.youMayAlsoLike?.html,
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Box>
        </div>
      ) : null}
    </>
  );

  const [showThisTooltip, setShowThisTooltip] = React.useState(false);

  const handleOpenArtifact = () => {
    handleTransitionArtifact();
    setShowThisTooltip(false);
  };

  return (
    <>
      <Head>
        <title>Supermarket Museum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="frontPageBackground">
          <div className={styles.frontPageLabel}>
            <Label
              header={
                <h1>
                  ENTER
                  <br />
                  THE SUPERMARKET MUSEUM
                </h1>
              }
              author=""
              onClick={() => {
                handleTransition();
              }}
              style={{ backgroundColor: "red" }}
              hideButton={true}
            />
          </div>
        </div>
        <div className={styles.centeredLabel}>
          <Tooltip
            interactive
            enterTouchDelay="0"
            placement="auto"
            // onOpen={() => showTooltip(artifactSlug)}
            title={
              <>
                {showThisTooltip ? (
                  <LabelNoLink
                    slug={"one-of-all"}
                    header={"One Of All"}
                    author={"Clemens Büntig"}
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
              className={styles.centerClickField}
            ></div>
          </Tooltip>
        </div>
      </main>
      <Modal open={showOneOfAll}>{body}</Modal>
      {/* <div className={showTransition ? styles.transitionOpening : ""}>
        <div className={styles.bgLayer}></div>
      </div> */}
    </>
  );
}
