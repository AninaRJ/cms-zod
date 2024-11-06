import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: 'h4hrqjr8n9ag', //process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: 'NOy4RuBq4VeIOY3bl373dxxFm5aSDY5-76d5WDMSNAg', //process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});