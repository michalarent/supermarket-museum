import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import ExampleSvg from "../components/maps/ExampleSvg";

import { GraphQLClient } from "graphql-request";
import { getAllArtifacts } from "../api/graphcms";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckoe0mb581l8v01yz0e6l6axp/master"
);

export async function getStaticProps({ params }) {
  const { artifactModels } = await getAllArtifacts();
  console.log(artifactModels);

  return {
    props: { artifactModels },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    width: "90vw",
    margin: "120px",
  },
}));

function MuseumMainPage({ artifactModels }) {
  console.log(artifactModels);
  return (
    <>
      {/* <Fade in={true} timeout={500}> */}
      <div>
        <SideDrawer />
        <div className="museum-page">
          <ExampleSvg artifactModels={artifactModels} openArtifact={null} />
        </div>
      </div>
      {/* </Fade> */}
    </>
  );
}

export default MuseumMainPage;
