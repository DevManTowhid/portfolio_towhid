"use client";
import React from "react";
import { useState } from "react";
import Select, { components, MultiValue, MultiValueRemoveProps } from "react-select";
import { SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiArduino, SiGit, SiGithub } from "react-icons/si";
import { FaCode } from "react-icons/fa";

// Define option type
type TechOption = {
    value: string;
    label: string;
    icon: React.ReactNode; // Change JSX.Element to React.ReactNode
  };
  

// Define tech options
const techOptions: TechOption[] = [
  { value: "Python", label: "Python", icon: <SiPython className="text-blue-500" /> },
  { value: "C++", label: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { value: "HTML", label: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { value: "CSS", label: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  { value: "JavaScript", label: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { value: "Arduino", label: "Arduino", icon: <SiArduino className="text-green-600" /> },
  { value: "MATLAB", label: "MATLAB", icon: <FaCode className="text-red-600" /> },
  { value: "Git", label: "Git", icon: <SiGit className="text-red-500" /> },
  { value: "GitHub", label: "GitHub", icon: <SiGithub className="text-black" /> },
];

const CustomSingleValue = ({ data }: { data: TechOption }) => (
    <div className="flex items-center gap-2 text-gray-800"> 
      {data.icon} <span className="text-red-500">{data.label}</span> 
    </div>
  );
  
  const CustomOption = (props: any) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div 
        ref={innerRef} 
        {...innerProps} 
        className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
      >
        {data.icon} <span className="text-black">{data.label}</span>
      </div>
    );
  };
// Custom multi-value component (for selected values)
const CustomMultiValue = (props: MultiValueRemoveProps<TechOption>) => {
    const { data, removeProps } = props;
  
    return (
      <div className="flex items-center gap-2 bg-gray-200 text-black px-2 py-1 rounded-md">
        {data.icon}
        <span>{data.label}</span>
        <button 
          {...removeProps} 
          className="ml-2 text-red-500 hover:text-red-700"
        >
          ❌
        </button>
      </div>
    );
  };

  

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState<TechOption[]>([]);

  return (
    <div className="w-80 mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-2">Select Your Tech Tools</h2>
      <Select
        isMulti
        options={techOptions}
        components={{ Option: CustomOption, SingleValue: CustomSingleValue,  MultiValue: CustomMultiValue }}
        className="basic-multi-select text-black-500 "
        classNamePrefix="select"
        onChange={(selected) => setSelectedOptions(selected as TechOption[])}

      />
      {selectedOptions.length > 0 && (
        <div className="mt-4 p-2 border border-gray-300 rounded">
          <h3 className="font-medium">Selected Tools:</h3>
          <ul className="list-disc pl-4">
            {selectedOptions.map((tool) => (
              <li key={tool.value} className="flex items-center gap-2">
                {tool.icon} {tool.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
