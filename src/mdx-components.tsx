import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, ...props }) => {
      // This makes internal links use Next.js's Link component
      // Check if it's an internal link
      if (href?.startsWith("/") || href?.startsWith("#")) {
        return <Link href={href} {...props} />;
      }
      // External links
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
      );
    },
    h1: (props) => (
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <h2 className="text-2xl font-semibold tracking-tight text-foreground after:mt-0.5 after:block after:h-[3px] after:w-10 after:bg-primary after:content-['']">
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="text-xl font-semibold tracking-tight text-foreground after:mt-0.5 after:block after:h-0.5 after:w-8 after:bg-primary after:content-['']">
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4 className="text-lg font-medium tracking-tight text-foreground">
        {props.children}
      </h4>
    ),
    img: (props) => (
      <img className="w-full h-auto rounded-lg border border-border" {...props} />
    ),
    p: (props) => <p className="leading-relaxed text-foreground" {...props} />,
  };
}
