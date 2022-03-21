import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "kqt8rwbz",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});
