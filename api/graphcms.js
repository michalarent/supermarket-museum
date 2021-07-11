async function fetchAPI(query) {
  const res = await fetch(
    "https://api-eu-central-1.graphcms.com/v2/ckpfg6n0kk6w701z53y7h7d0n/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    }
  );
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllArtifacts() {
  const data = await fetchAPI(`
      {
        artifactModels {
          descriptionEn {
            html
          }
          descriptionOriginal {
            html
          }
          technicalInformation {
            html
          }
          title
          artifactContent {
            html
            raw
            text
          }
          authors {
            html
          }
          videoIFrame {
            text
          }
          youMayAlsoLike {
            html
          }
          slug
        }
      }
    `);
  return data;
}

export async function getAllAgroPermaLabInfo() {
  const data = await fetchAPI(`
      {
        infoPages {
          slug
          title
          content {
            html
          }
        }
      }
    `);
  return data;
}

export async function getAgroPermaLabInfoBySlug(slug) {
  const data = await fetchAPI(`
      {
        infoPage(where: {slug: "${slug}"}) {
          content {
            html
          }
          title
        }
      }
    `);
  return data;
}

export async function getAllGardenArtifacts() {
  const data = await fetchAPI(`
      {
        gardenArtifactModels {
          descriptionEn {
            html
          }
          descriptionOriginal {
            html
          }
          technicalInformation {
            html
          }
          title
          artifactContent {
            html
          }
          authors {
            html
          }
          slug
          videoIFrame {
            text
          }
          youMayAlsoLike {
            html
          }
        }
      }
    `);
  return data;
}

export async function getAllLabels() {
  const data = await fetchAPI(`
    query MyQuery {
      labels {
        slug
        subtitle
        title
        content {
          html
          text
        }
      }
    }
  `);
  return data;
}

export async function getAllGardenLabels() {
  const data = await fetchAPI(`
    query MyQuery {
      gardenLabels {
        slug
        subTitle
        title
        content {
          html
          text
        }
      }
    }
  `);
  return data;
}

export async function getArtifactById(slug) {
  const data = await fetchAPI(
    `
    query MyQuery {
      artifactModel(where: {slug: ""}) {
        artifactContent {
          html
          raw
          text
        }
        authors {
          html
        }
        descriptionEn {
          html
        }
        descriptionOriginal {
          html
        }
        title
        youMayAlsoLike {
          html
        }
        slug
        videoIFrame {
          text
        }
      }
    }    
    `
  );
  return data;
}

export async function getArtifactBySlug(slug) {
  const data = await fetchAPI(
    `
      query MyQuery {
        artifactModel(where: {slug: "${slug}"}) {
          artifactContent {
            html
            raw
            text
          }
          authors {
            html
          }
          descriptionEn {
            html
          }
          descriptionOriginal {
            html
          }
          title
          youMayAlsoLike {
            html
          }
          slug
          videoIFrame {
            text
          }
          technicalInformation {
            html
          }
        }
      }      
      `
  );
  return data;
}

export async function getGardenArtifactBySlug(slug) {
  const data = await fetchAPI(
    `
      query MyQuery {
        gardenArtifactModel(where: {slug: ""}) {
          artifactContent {
            html
            raw
            text
          }
          authors {
            html
          }
          descriptionEn {
            html
          }
          descriptionOriginal {
            html
          }
          title
          youMayAlsoLike {
            html
          }
          slug
          videoIFrame {
            text
          }
        }
      }      
      `
  );
  return data;
}
