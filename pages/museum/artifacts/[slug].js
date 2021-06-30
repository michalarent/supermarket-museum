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
  getAllLabels,
  getAllGardenLabels,
  getAllGardenArtifacts,
  getGardenArtifactBySlug,
} from "../../../api/graphcms.js";
import SupermarketMap from "../../../components/maps/SupermarketMap";
import GardenMap from "../../../components/maps/GardenMap";

export async function getStaticPaths() {
  const { artifactModels } = await getAllArtifacts();
  const { gardenArtifactModels } = await getAllGardenArtifacts();

  
  var paths = [];
  for (var i = 0; i <= Object.keys(artifactModels).length - 1; i++) {
    
    paths.push({
      params: {
        slug: artifactModels[i].slug,
      },
    });
  }
  for (var j = 0; j <= Object.keys(gardenArtifactModels).length - 1; j++) {
    
    paths.push({
      params: {
        slug: gardenArtifactModels[j].slug,
      },
    });
  }
  
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  
  const data = await getArtifactBySlug(params.slug);

  if (data.artifactModel == null || data.artifactModel == undefined) {
    const dataGarden = await getGardenArtifactBySlug(params.slug);
  
    const { gardenLabels } = await getAllGardenLabels();
    const gardenArtifactModels = await getAllGardenArtifacts();
    return {
      props: {
        dataGarden,
        gardenArtifactModels,
        gardenLabels,
      },
    };
  }
  const { labels } = await getAllLabels();
  const artifactModels = await getAllArtifacts();
  return {
    props: {
      data,
      artifactModels,
      labels,
    },
  };
}

export default function OpenArtifactPage({
  artifactModels,
  data,
  labels,
  gardenArtifactModels,
  gardenLabels,
  dataGarden,
}) {
  const router = useRouter();
  const { slug } = router.query;
  

  return (
    <>
      <Fade in={true} timeout={500}>
        {(data == null) | (data == undefined) ? (
          <GardenMap
            artifactModels={gardenArtifactModels.gardenArtifactModels}
            openArtifact={slug}
            labels={gardenLabels}
          />
        ) : (
          <SupermarketMap
            artifactModels={artifactModels.artifactModels}
            openArtifact={slug}
            labels={labels}
          />
        )}
      </Fade>
    </>
  );
}
