"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { trivia } from "@/data/trivia";
import styles from "./HomeTrivia.module.css";

// Correct answer is options[0] in the data; rotate so it isn't always first.
function displayOrder(qIndex: number, count: number) {
  return Array.from({ length: count }, (_, i) => (i + qIndex) % count);
}

export default function HomeTrivia() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);

  const done = index >= trivia.length;
  const answered = index + (picked === null ? 0 : 1);

  function pick(option: number) {
    if (picked !== null) return;
    setPicked(option);
    if (option === 0) setScore((s) => s + 1);
  }

  function next() {
    setPicked(null);
    setIndex((i) => i + 1);
  }

  function restart() {
    setPicked(null);
    setIndex(0);
    setScore(0);
  }

  return (
    <motion.aside
      className={styles.note}
      initial={{ opacity: 0, y: -30, rotate: -6 }}
      animate={{ opacity: 1, y: 0, rotate: -2.5 }}
      transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
      aria-label="Backend and AI trivia"
    >
      <span className={styles.pin} aria-hidden />

      <header className={styles.header}>
        <h2 className={styles.title}>Backend or bust?</h2>
        <motion.span
          key={score}
          className={styles.tally}
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          aria-live="polite"
        >
          {score}/{answered}
        </motion.span>
      </header>

      {done ? (
        <div className={styles.body}>
          <p className={styles.question}>
            You got {score} of {trivia.length}.
          </p>
          <p className={styles.scribble}>
            {score >= 40
              ? "Ship it. You'd pass my code review."
              : score >= 25
                ? "Solid. A few more postmortems and you're there."
                : "Hey, everyone starts somewhere. Run it back?"}
          </p>
          <button className={styles.next} onClick={restart}>
            Play again ↺
          </button>
        </div>
      ) : (
        <Question
          key={index}
          qIndex={index}
          picked={picked}
          onPick={pick}
          onNext={next}
        />
      )}
    </motion.aside>
  );
}

type QuestionProps = {
  qIndex: number;
  picked: number | null;
  onPick: (option: number) => void;
  onNext: () => void;
};

function Question({ qIndex, picked, onPick, onNext }: QuestionProps) {
  const { topic, q, options, why } = trivia[qIndex];

  return (
    <motion.div
      className={styles.body}
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.meta}>
        <span className={styles.topic}>{topic}</span>
        <span>
          Q{qIndex + 1} of {trivia.length}
        </span>
      </div>

      <p className={styles.question}>{q}</p>

      <div className={styles.options}>
        {displayOrder(qIndex, options.length).map((o) => {
          const state =
            picked === null
              ? ""
              : o === 0
                ? styles.correct
                : o === picked
                  ? styles.wrong
                  : styles.faded;
          return (
            <button
              key={o}
              className={`${styles.option} ${state}`}
              onClick={() => onPick(o)}
              disabled={picked !== null}
            >
              {options[o]}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <motion.div
          className={styles.reveal}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <p className={styles.scribble}>
            {picked === 0 ? "Yep! " : "Nope. "}
            {why}
          </p>
          <button className={styles.next} onClick={onNext} autoFocus>
            Next →
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
