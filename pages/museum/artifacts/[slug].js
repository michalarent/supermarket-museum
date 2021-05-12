import { useRouter } from "next/router";
import React from "react";
import SideDrawer from "../../../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import ExampleSvg from "../../../components/maps/ExampleSvg";
import {
  getAllArtifacts,
  getArtifactById,
  getArtifactBySlug,
} from "../../../api/graphcms.js";

import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckoe0mb581l8v01yz0e6l6axp/master"
);

export async function getStaticPaths() {
  const artifactModels = await getAllArtifacts();
  var paths = [];
  for (var i = 0; i <= Object.keys(artifactModels).length; i++) {
    paths.push({
      params: {
        slug: artifactModels.artifactModels[i].slug,
      },
    });
  }
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  console.log("Slugs:", params.slug);
  const data = await getArtifactBySlug(params.slug);
  return {
    props: {
      artifactModels: data.artifactModels,
    },
  };
}

export default function OpenArtifactPage({artifactModels}) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(artifactModels);
  return (
    <>
      <Fade in={true} timeout={500}>
        <div>
          <SideDrawer />
          <div className="museum-page">
            <ExampleSvg artifactModels={artifactModels} openArtifact={slug} />
          </div>
        </div>
      </Fade>
    </>
  );
}
