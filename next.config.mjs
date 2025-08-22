import nextMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined,
  // Configure `pageExtensions` to include MDX files
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = nextMdx({
	extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);