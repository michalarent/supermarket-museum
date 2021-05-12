async function fetchAPI(query) {
  const res = await fetch(
    "https://api-eu-central-1.graphcms.com/v2/ckoe0mb581l8v01yz0e6l6axp/master",
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
            artifactAuthor
            artifactContent {
                html
            }
            artifactTitle
            createdAt
            id
            publishedAt
            slug
            }
      }
    `);
  return data;
}

export async function getArtifactById(id) {
  const data = await fetchAPI(
    `
    query MyQuery {
        artifactModel(where: {id: "$id"}) {
          artifactAuthor
          artifactTitle
          createdAt
          id
          slug
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
        artifactModels(where: {slug_contains: "example_artifact"}) {
          id
          artifactTitle
          artifactContent {
            html
          }
          artifactAuthor
        }
      }
      
      
      `
    );
    return data;
  }
