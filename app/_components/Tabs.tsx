"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import { AppleCardsCarouselDemo } from "./AppleCards";
import { ImagesSliderDemo } from "./ImagesSlider";

export function TabsDemo() {
  const images1 = [
    "https://i.postimg.cc/sX6qfK1y/sf1.png",
    "https://i.postimg.cc/rygxm385/sf2.png",
    "https://i.postimg.cc/Wb3rJ83C/sf3.png",
  ];
  const images2 = [
    "https://i.postimg.cc/15nXQj4m/cr1.png",
    "https://i.postimg.cc/rw5pdRS7/cr2.png",
    "https://i.postimg.cc/PrgxrQ8m/cr3.png",
    "https://i.postimg.cc/rpcw5yjs/cr4.png",
  ];
  const images3 = [
    "https://i.postimg.cc/yNPYjqpP/about.png",
    "https://i.postimg.cc/sXgf0ntR/category-Management.png",
  ];
  const images4 = [
    "https://i.postimg.cc/7hCHq5Hs/sun1.png",
    "https://i.postimg.cc/VsTsDWg3/sun2.png",
    "https://i.postimg.cc/MHhWHzXW/sun3.png",
  ];
  const images5 = [
    "https://i.postimg.cc/htRDq4Hs/sk1.png",
    "https://i.postimg.cc/3xjKr5hT/skill2.png",
  ];

  const tabs = [
    {
      title: "Main",
      value: "main",
      content: (
        <>
          <div className="h-auto w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
            <p>Main dashboard</p>
            <ImagesSliderDemo images={images1} />
            {/* <img
              src="https://i.postimg.cc/VshTnHCB/sfr1.png"
              alt="fff"
              //   width={1000}
              height={2000}
              className=" py-4 h-auto rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
            {/* <AppleCardsCarouselDemo /> */}
          </div>
        </>
      ),
    },
    {
      title: "Create",
      value: "create",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>Create new Framework modal</p>
          <ImagesSliderDemo images={images2} />
          {/* <img
            src="https://i.postimg.cc/BQ1zgc5W/sfr4.png"
            alt="fff"
            //   width={1000}
            height={2000}
            className=" py-4 h-auto rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      ),
    },
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>About framework page</p>
          <ImagesSliderDemo images={images2} />
          {/* <img
            src="https://i.postimg.cc/HkwhGYPB/sfr5.png"
            alt="fff"
            //   width={1000}
            height={2000}
            className=" py-4 h-auto rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      ),
    },
    {
      title: "Sunburst",
      value: "sunburst",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>Sunburst chart</p>
          <ImagesSliderDemo images={images2} />
          {/* <img
            src="https://i.postimg.cc/g04tJMph/sfr6.png"
            alt="fff"
            //   width={1000}
            height={2000}
            className=" py-4 h-auto rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      ),
    },
    {
      title: "Add skill",
      value: "add-skills",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>Add skills page</p>
          <ImagesSliderDemo images={images2} />
          {/* <img
            src="https://i.postimg.cc/VLt2qqds/sfr.png"
            alt="fff"
            //   width={1000}
            height={2000}
            className=" py-4 h-auto rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      ),
    },
    // {
    //   title: "Skills",
    //   value: "skills",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
    //       <p>Skill overview page</p>

    //       <img
    //         src="https://i.postimg.cc/9MM8qGXn/sfr7.png"
    //         alt="fff"
    //         //   width={1000}
    //         height={2000}
    //         className=" py-4 h-auto rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //       />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 mt-[30px]">
      <h3 className="text-2xl md:text-4xl font-bold mb-5">Skill framework</h3>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image src="/linear.webp" alt="dummy image" width="1000" height="1000" className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
  );
};
