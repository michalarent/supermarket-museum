import { useRouter } from "next/router";
import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

import {
  getAllAgroPermaLabInfo,
  getAgroPermaLabInfoBySlug,
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
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("Slugs:", params.slug);
  const data = await getAgroPermaLabInfoBySlug(params.slug);
  console.log(data);
  console.log("*****");
  const { infoPages } = await getAllAgroPermaLabInfo();
  return {
    props: {
      data,
      infoPages,
    },
  };
}

export default function OpenArtifactPage({ infoPages }) {
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
              <SideDrawer openInfoPage={slug} infoPages={infoPages} currentPage="" />
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
          </main>
        </>
      </Fade>
    </>
  );
}