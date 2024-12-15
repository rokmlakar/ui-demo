import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["jobs", "carrers", "experience"];

  return (
    <div className="w-full flex justify-center items-center p-10">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Find
        <FlipWords words={words} />
        with pathfinder
      </div>
    </div>
  );
}
