"use client";
import React, { useState, useEffect } from "react";
import { IconArrowLeft, IconBrandTabler, IconKeyframeAlignVerticalFilled, IconSettings, IconUser, IconUserBolt } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { FileUploadDemo } from "./Fileupload";
import { FlipWordsDemo } from "./FlipWords";
import { ExpandableCardDemo } from "./ExpandableCard";
import { ExpandableCardGridDemo } from "./ExpandableCardGrid";
import { PlaceholdersAndVanishInputDemo } from "./PlaceholdersAndVanishInput";
import { TimelineDemo } from "./Timeline";
import { TabsDemo } from "./Tabs";

export function SidebarDemo() {
  const links = [
    {
      label: "SkillFinder",
      href: "#",
      icon: <IconKeyframeAlignVerticalFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "SkillFramework",
      href: "#",
      icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Pathfinder",
      href: "#",
      icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    // {
    //   label: "Logout",
    //   href: "#",
    //   icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    // },
  ];

  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("skillfinder");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Set initial theme

  useEffect(() => {
    // Set the theme in localStorage and toggle the body class
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row w-full flex-1 max-w-full mx-auto border overflow-hidden",
        theme === "light" ? "bg-gray-100" : "bg-neutral-800", // Apply background based on the theme
        "h-[100vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className={theme === "light" ? "bg-white" : "bg-neutral-900"}>
          {" "}
          {/* Sidebar body bg */}
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div key={idx} onClick={() => setLink(link.label.toLocaleLowerCase())}>
                  <SidebarLink key={idx} link={link} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Rok Mlakar",
                href: "#",
                icon: <IconUser className="h-7 w-7 flex-shrink-0 rounded-full" width={50} height={50} alt="Avatar" />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {link === "skillfinder" && <SkillFinder />}
      {link === "pathfinder" && <Pathfinder />}
      {link === "skillframework" && <SkillFramework />}
    </div>
  );
}

export const Logo = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20">
      <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium whitespace-pre">
        {/* LOGO */}
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20">
      <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

const SkillFramework = () => {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 overflow-auto">
      <TabsDemo />
    </div>
  );
};

const SkillFinder = () => {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 overflow-auto">
      <TimelineDemo />
    </div>
  );
};

const Pathfinder = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [viewMode, setViewMode] = useState("card"); // "card" or "grid"
  const [apiResponse, setApiResponse] = useState(null);
  const [files, setFiles] = useState<File[]>([]);
  const [input, setInput] = useState("");

  const handleFileUpload = async () => {
    console.log(files, input);
    setFileUploaded(!fileUploaded);

    if (!fileUploaded) {
      try {
        // Create FormData object to handle the file and string data
        const formData = new FormData();
        formData.append("file", files[0]); // Assuming `files` is an array
        formData.append("desired_job_description", input); // Assuming `input` is the string

        // Make the API request
        const response = await fetch("https://knowledgeinnovation-dev0.kamaruladha.dev/get_courses", {
          method: "POST",
          body: formData,
        });

        // Check for response status
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setApiResponse(data);
        console.log("API Response:", data);
      } catch (error) {
        console.error("API Call Failed:", error);
      }
    } else {
      setApiResponse(null);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 overflow-auto">
      <div className="flex flex-1 p-4 md:p-10 rounded-tl-2xl overflow-auto">
        <div className="flex flex-col gap-4 w-full justify-start">
          <FlipWordsDemo />
          {!fileUploaded && (
            <>
              <div className="flex justify-center">
                <PlaceholdersAndVanishInputDemo setInput={setInput} />
              </div>
              <FileUploadDemo setFiles={setFiles} />
              <div className="flex justify-center">
                <button className="p-[3px] relative flex" onClick={handleFileUpload}>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">Submit</div>
                </button>
              </div>
            </>
          )}
          {fileUploaded && (
            <div>
              <div className="flex justify-center">
                <button className="p-[3px] relative flex" onClick={handleFileUpload}>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">Reset</div>
                </button>
              </div>
              <div className="flex justify-end items-center mb-4">
                <button className="p-[3px] relative flex" onClick={() => setViewMode(viewMode === "card" ? "grid" : "card")}>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                    Switch to {viewMode === "card" ? "Grid View" : "Card View"}
                  </div>
                </button>
              </div>
              {viewMode === "card" ? <ExpandableCardDemo apiResponse={apiResponse} /> : <ExpandableCardGridDemo apiResponse={apiResponse} />}
            </div>
          )}
          <div className="mt-4">
            {/* <button onClick={toggleTheme} className="p-[3px] relative flex">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Toggle Theme
            </div>
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
