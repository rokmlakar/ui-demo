"use client";

import React from "react";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { AnimatedModalDemo } from "./AnimatedModal";

// Define the expected type for the props
type PlaceholdersAndVanishInputDemoProps = {
  setInput: React.Dispatch<React.SetStateAction<string>>; // Type for `setInput`
};

// Component with proper type annotation
export function PlaceholdersAndVanishInputDemo({
  setInput,
}: PlaceholdersAndVanishInputDemoProps) {
  const placeholders = ["eg. Programming", "eg. Design", "eg. Business", "eg. Marketing"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // TypeScript now knows this is valid
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
