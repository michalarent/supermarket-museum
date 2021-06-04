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
import SupermarketMap from "../../../components/maps/SupermarketMap";
import Museum from "../../museum";

export async function getStaticPaths() {
  const { artifactModels } = await getAllArtifacts();

  var paths = [];
  console.log(artifactModels[1]);
  console.log("Up");
  for (var i = 0; i < Object.keys(artifactModels).length - 1; i++) {
    console.log(Object.keys(artifactModels).length);
    paths.push({
      params: {
        slug: artifactModels[i].slug,
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
  const data = await getArtifactBySlug(params.slug);
  const artifactModels = await getAllArtifacts();
  return {
    props: {
      data,
      artifactModels,
    },
  };
}

export default function OpenArtifactPage({ artifactModels, data }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(data);
  return (
    <>
      <Fade in={true} timeout={500}>
        <SupermarketMap artifactModels={artifactModels.artifactModels} openArtifact={slug} />
      </Fade>
    </>
  );
}
