"use client";

import React from "react";
import styles from "./ContestTile.module.css";

interface ContestTileProps {
  title: string;
  date: string;
  result: string;
  description: string;
}

const ContestTile: React.FC<ContestTileProps> = ({
  title,
  date,
  result,
  description,
}) => {
  return (
    <div className={styles.tile}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.result}>{result}</div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ContestTile;
