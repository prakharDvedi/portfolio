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
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-white/[0.08] hover:border-blue-400/50 hover:shadow-[0_12px_24px_rgba(59,130,246,0.2)] hover:-translate-y-1">
      {/* Image */}
      {image && (
        <div className="relative w-full aspect-video overflow-hidden rounded-t-xl -m-[2px] mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="px-6 pb-6">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-lg font-bold text-gray-100 group-hover:text-blue-400 transition-colors leading-tight">
              {title}
            </h3>
            <span className="text-xs font-mono text-zinc-500 whitespace-nowrap mt-1">
              {date}
            </span>
          </div>

          {result && (
            <div className="flex">
              <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                {result}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Footer */}
        {link && (
          <div className="mt-auto border-t border-white/5 pt-4">
            <Link
              href={link}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-blue-400 transition-colors group/link"
              onClick={(e) => e.stopPropagation()}
            >
              View Details
              <FiExternalLink className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestTile;
