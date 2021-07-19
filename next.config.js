const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");

module.exports = {
  images: {
    domains: ["picsum.photos"],
  },
  async getRedirectStatus() {
    return [
      {
        source: "*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
