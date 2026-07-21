import Image from "next/image";
import { FileText } from "lucide-react";
import type { BlogPost } from "@/components/data/blog";

// Renders the real image when a post has one. When it doesn't (or the
// path is wrong), falls back to a themed gradient block with an icon
// instead of a broken <Image>, since a missing file would otherwise 404
// silently in production.
export default function PostThumbnail({
  post,
  className = "",
}: {
  post: BlogPost & { image?: string };
  className?: string;
}) {
  if (post.image) {
    return (
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
      style={{ background: "linear-gradient(135deg, rgba(27,84,199,0.18), rgba(122,193,66,0.18))" }}
    >
      <FileText className="h-8 w-8 text-signal/50" strokeWidth={1.5} />
    </div>
  );
}