This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project demonstrates a type-safe approach to working with Contentful CMS data in Next.js applications. It showcases:

- Type-safe content models using Zod schemas to validate Contentful responses
- Strongly-typed queries and content fetching
- Runtime validation of CMS data
- Clean separation between content models and UI components
- Example UI implementation showing the full data flow

The goal is to provide a maintainable pattern for integrating Contentful with full type safety and runtime validation.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [How to use Contentful with Next.js and Zod](https://dev.to/jussinevavuori/using-contentful-with-nextjs-part-1-2i0a) - an article by the author that inspired this project
- [Rich text and images with Contentful, Next.js and Zod](https://dev.to/jussinevavuori/rich-text-and-images-with-contentful-nextjs-and-zod-5684) - Part 2 of the article

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
