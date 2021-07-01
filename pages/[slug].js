import { useRouter } from "next/router";
import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { IconButton, Box, Grid } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import {
  getAllAgroPermaLabInfo,
  getAgroPermaLabInfoBySlug,
  getArtifactBySlug,
} from "../api/graphcms";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Label from "../components/Label";
import LabelNoLink from "../components/LabelNoLink";

export async function getStaticPaths() {
  const { infoPages } = await getAllAgroPermaLabInfo();
  var paths = [];
  for (var j = 0; j <= Object.keys(infoPages).length - 1; j++) {
    console.log(infoPages[j].slug);
    paths.push({
      params: {
        slug: infoPages[j].slug,
      },
    });
  }
  paths.push({
    params: {
      slug: "one-of-all",
    },
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("Slugs:", params.slug);
  const infoPage = await getAgroPermaLabInfoBySlug(params.slug);
  const oneOfAll = await getArtifactBySlug("one-of-all");
  const currentInfoPage = infoPage.infoPage;
  console.log("*****");

  return {
    props: {
      currentInfoPage,
      oneOfAll,
    },
  };
}

export default function OpenArtifactPage({ currentInfoPage, oneOfAll }) {
  React.useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/");
  }, []);

  const [showOneOfAll, setShowOneOfAll] = React.useState(false);
  const [showInfoPage, setShowInfoPage] = React.useState(true);

  React.useEffect(() => {
    if (slug == "one-of-all") {
      setShowInfoPage(false);
      setShowOneOfAll(true);
    }
  });

  const currentArtifact = oneOfAll.artifactModel;

  console.log(currentArtifact);

  const body = (
    <>
      {currentArtifact != null ? (
        <div className="modalCanvas">
          <div className="closeIcon">
            <IconButton onClick={() => router.push("/")}>
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

  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  return (
    <>
      <Fade in={true} timeout={500}>
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
                  header="ENTER THE SUPERMARKET MUSEUM"
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
              <LabelNoLink
                slug={"one-of-all"}
                header={"ONE OF ALL"}
                author="Somebody"
                showButton={true}
                onClick={() => handleTransitionArtifact()}
              />
            </div>
            {console.log(currentInfoPage)}
          </main>
          <Modal open={showInfoPage}>
            <>
              <>
                {currentInfoPage != null ? (
                  <>
                    <div className="modalCanvas">
                      <div className="closeIcon">
                        <IconButton onClick={() => router.push("/")}>
                          <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
                        </IconButton>
                      </div>
                      <Box p={(2, 4)} className="modalBoxContainer">
                        <Grid item xs={12} md={12}>
                          <div className="modalContentAdjusted">
                            <h1 className="heading">{currentInfoPage.title}</h1>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={12} lg={12}>
                                <div
                                  className={"artifactDescription"}
                                  dangerouslySetInnerHTML={{
                                    __html: currentInfoPage.content.html,
                                  }}
                                ></div>
                              </Grid>
                            </Grid>

                            <Grid
                              container
                              spacing={5}
                              className={"technicalInformationContainer"}
                            >
                              <Grid item xs={12} md={12} lg={6}>
                                <div className={"technicalInformation"} />
                              </Grid>
                              <Grid item xs={12} md={12} lg={6}>
                                <div className={"technicalInformation"} />
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                      </Box>
                    </div>
                  </>
                ) : null}
              </>
            </>
          </Modal>
          <Modal open={showOneOfAll}>{body}</Modal>
        </>
      </Fade>
    </>
  );
}
