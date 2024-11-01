'use client';

import React, { useState } from "react";
import { Select } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";


const { Option } = Select;

interface CustomSelectProps {
  listOptions: { value: string; label: string }[];
} 

export const CustomSelect: React.FC<CustomSelectProps> = ({ listOptions }) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>();
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
  const handleDropdownVisibleChange = (open: boolean) => {
    setIsDropdownOpen(open);
  };
    return (
      <div className="relative">
        <p className="absolute -top-6 left-0 "> Platform</p>

        <Select
          className="w-full h-[45px]"
          placeholder="Select an option"
          onChange={handleChange}
          value={selectedValue}
          onDropdownVisibleChange={handleDropdownVisibleChange}
          suffixIcon={
            <IoIosArrowDown
              className={classNames(" transition-transform duration-300", {
                "rotate-180": isDropdownOpen,
              })}
            />
          }
        >
          {listOptions &&
            listOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {selectedValue === option.value ? (
                  <span className="flex items-center justify-between" >
                    {option.label}{" "}
                    {isDropdownOpen && <CheckOutlined className=" text-successColor" />}
                  </span>
                ) : (
                  option.label
                )}
              </Option>
            ))}
        </Select>
      </div>
    );
};

// export default CustomSelect;

// import React, { useState } from "react";
// import { Select } from "antd";
// import { CheckOutlined } from "@ant-design/icons";

// const { Option } = Select;

// interface CustomSelectProps {
//   options: { value: string; label: string }[];
// }

// const CustomSelect: React.FC<CustomSelectProps> = ({ options }) => {
//   const [selectedValue, setSelectedValue] = useState<string | undefined>();

//   const handleChange = (value: string) => {
//     setSelectedValue(value);
//   };

//   return (
//     <Select
//       style={{ width: 200 }}
//       placeholder="Select an option"
//       onChange={handleChange}
//       value={selectedValue}
//     >
//       {options.map((option) => (
//         <Option key={option.value} value={option.value}>
//           {selectedValue === option.value ? (
//             <>
//               {option.label} <CheckOutlined />
//             </>
//           ) : (
//             option.label
//           )}
//         </Option>
//       ))}
//     </Select>
//   );
// };

// export default CustomSelect;
