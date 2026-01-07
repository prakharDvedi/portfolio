import React from "react";
import { motion } from "framer-motion";

interface TechCardProps {
  cardInfo: {
    name: string;
    description: string;
    icon: React.ReactNode;
    bgColor: string;
  };
}

const TechCard = ({ cardInfo }: TechCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 h-full"
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cardInfo.bgColor} blur-2xl -z-10`}
      />

      <div className="flex flex-col items-start gap-4 h-full">
        <div className="p-3 rounded-lg bg-white/5 text-2xl group-hover:scale-110 transition-transform duration-300">
          {cardInfo.icon}
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
            {cardInfo.name}
          </h3>
          <p className="text-sm text-gray-400 mt-1 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {cardInfo.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TechCard;
