import Image from "next/image";
import React from "react";

type SkillT = {
  title: string;
  iconProps: {
    name: string;
    path: string;
  }[];
};

const Skill = ({ iconProps, title }: SkillT) => {
  return (
    <div>
      <p className="text-xl sm:text-2xl md:text-3xl">{title}</p>
      <div className="grid grid-cols-2 justify-items-center mb-4 sm:grid-cols-3 md:grid-cols-4">
        {iconProps.map(
          (
            iconProp: {
              name: string;
              path: string;
            },
            idx: number
          ) => (
            <div
              className="w-[120px] h-[120px] bg-section-background rounded-lg flex flex-col justify-between mt-4 rounded-br-lg border-2 border-iconic-green"
              key={idx}
            >
              <p className="pl-4 font-[300] pt-1 text-text-color text-base sm:text-xl md:text-xl">
                {iconProp.name}
              </p>
              <div className="flex justify-end">
                <div className="bg-text-color w-[80px] h-[80px] mr-1 mb-1 rounded-sm">
                  <Image
                    src={iconProp.path}
                    alt={iconProp.name}
                    width={80}
                    height={80}
                    className="p-2"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Skill;
