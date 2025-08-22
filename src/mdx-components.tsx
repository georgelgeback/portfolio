import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		a: ({ href, ...props }) => {
			// This makes internal links use Next.js's Link component
			// Check if it's an internal link
			if (href?.startsWith("/") || href?.startsWith("#")) {
				return (
					<Link
						href={href}
						{...props}
					/>
				);
			}
			// External links
			return (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					{...props}
				/>
			);
		},
        h1: (props) => <div className="font-black text-5xl underline text-center">{props.children}</div>,
        h2: (props) => <div className="font-bold text-4xl underline text-center">{props.children}</div>,
        h3: (props) => <div className="font-semibold text-3xl underline text-center">{props.children}</div>,
        h4: (props) => <div className="font-medium text-2xl underline text-center">{props.children}</div>,
        img: (props) => <img className="w-full h-auto rounded-lg shadow-md" {...props} />,
        p: (props) => <p className="leading-relaxed" {...props} />,
	};
}