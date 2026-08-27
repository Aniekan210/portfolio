import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

export function RichText({ content }: { content: Document }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-black prose-a:underline">
      {documentToReactComponents(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { url, title, width, height } = node.data.target.fields.file
              ? {
                  url: `https:${node.data.target.fields.file.url}`,
                  title: node.data.target.fields.title,
                  width:
                    node.data.target.fields.file.details.image?.width || 1200,
                  height:
                    node.data.target.fields.file.details.image?.height || 800,
                }
              : { url: "", title: "", width: 1200, height: 800 };
            if (!url) return null;
            return (
              <Image
                src={url}
                alt={title || ""}
                width={width}
                height={height}
                className="rounded-lg my-6"
              />
            );
          },
          [INLINES.HYPERLINK]: (node, children) => (
            <Link
              href={node.data.uri}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </Link>
          ),
        },
      })}
    </div>
  );
}
