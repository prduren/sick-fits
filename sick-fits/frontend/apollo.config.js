module.exports = {
  client: {
    addTypename: false,
    includes: ["./src/**/*.js"],
    service: {
      name: "github",
      url: "http://localhost:4444/",
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
    tagName: "gql",
  },
};
