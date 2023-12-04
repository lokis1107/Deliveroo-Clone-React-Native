import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "Implementing your project id",
  dataset: "Implementing your project dataset",
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
