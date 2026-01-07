"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

interface ContestTileProps {
  title: string;
  date: string;
  description: string;
  result?: string;
  link?: string;
  image?: string;
}

const ContestTile: React.FC<ContestTileProps> = ({
  title,
  date,
  description,
  result,
  link,
  image,
}) => {
  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:bg-zinc-800 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
      {/* Image */}
      {image && (
        <div className="relative w-full aspect-video overflow-hidden border-b border-white/5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        {/* Header */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-bold text-gray-100 group-hover:text-blue-400 transition-colors leading-tight tracking-tight">
              {title}
            </h3>
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              {date}
            </span>
          </div>

          {result && (
            <span className="shrink-0 inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-300 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              {result}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Footer */}
        {link && (
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between group/link">
            <Link
              href={link}
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-blue-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Details
              <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestTile;
