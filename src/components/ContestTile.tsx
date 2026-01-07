"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface ContestTileProps {
  title: string;
  date: string;
  description: string;
  result?: string;
  image?: string;
  link?: string;
}

const ContestTile: React.FC<ContestTileProps> = ({
  title,
  date,
  description,
  result,
  image,
  link,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Image Section */}
        {image && (
          <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative rounded-lg overflow-hidden bg-white/5">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{date}</p>
            </div>
            {result && (
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                {result}
              </span>
            )}
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
            {description}
          </p>

          {link && (
            <div className="mt-auto pt-2">
              <Link
                href={link}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Details <FiExternalLink />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestTile;
