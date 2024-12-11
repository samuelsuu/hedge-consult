import * as prismic from "@prismicio/client";

export const repositoryName = "https://hedgeconsult.cdn.prismic.io/api/v2"; // Replace with your Prismic repository name

export const client = prismic.createClient(repositoryName, {
  accessToken: "", // Add your access token if your repository is private
});
