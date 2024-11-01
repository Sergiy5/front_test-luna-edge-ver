"use client";

import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { IRegisterUser } from "../auth/Register";

interface CustomInputProps {
  label?: string;
  onInput?: (value: string) => void;
  placeholder?: string;
  autocomplete?: string;
  id: string;
  type: string;
  defaultValue?: string;
  register: UseFormReturn<IRegisterUser>["register"];
  errors: UseFormReturn["formState"]["errors"];
  isSubmitted?: boolean;
  validation?: {
    required?: boolean;
    validate?: (value: string) => string | boolean;
  };
  autofocus?: boolean;
  onBlur?: ((e: React.FocusEvent<HTMLInputElement>) => void) | undefined;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  id,
  type,
  register,
  errors,
  validation,
  autocomplete,
  defaultValue,
  placeholder,
  //   onInput,
  autofocus,
  isSubmitted,
  onBlur,
}) => {
  const [hasValue, setHasValue] = useState(!!defaultValue);
  const [passwordVisible, setPasswordVisible] = useState("text");

  const [isBlured, setIsBlured] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (hasValue && onBlur) {
      setIsBlured(true);
      onBlur(e);
    }
  };

  const togglePasswordVisibility = () => {
    if (passwordVisible === "text") setPasswordVisible("password");
    if (passwordVisible === "password") setPasswordVisible("text");
  };

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // onInput && onInput(value);
    setHasValue(!!value.length);
  };

  return (
    <div className="relative">
      {label && (
        <label
          className={`absolute -top-6 left-0 text-xs text-labelInputColor`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={id === "password" ? passwordVisible : type}
        onInput={onInputHandler}
        placeholder={placeholder}
        autoComplete={autocomplete}
        defaultValue={defaultValue}
        autoFocus={autofocus}
        {...register(id as "password" | "email" | "name", {
          ...validation,
          onBlur: handleBlur,
        })}
        className={`flex-grow w-full font-medium h-[45px] text-base bg-inputColor placeholder:text-placeHolder
           rounded pl-[17px] py-2.5 pr-2.5 focus:outline-none focus:border-bgMainBtn focus:border  transition-all duration-200 ease-in-out
            outline-none
          ${!errors[id] && !hasValue && "border-transparent"},
            
              ${
                (isSubmitted || (hasValue && onBlur && isBlured)) && errors[id]
                  ? "border border-red-500 "
                  : "border-transparent"
              }
            
              ${
                (isSubmitted || (onBlur && hasValue && isBlured)) &&
                !errors[id] &&
                hasValue &&
                "border"
              }
        `}
      />
      {["password"].includes(id) && (
        <span
          id="show-password"
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          {passwordVisible ? (
            <LuEyeOff
              onClick={togglePasswordVisibility}
              className={`w-4 h-auto ${
                isSubmitted && errors[id] && "text-error"
              }`}
            />
          ) : (
            <LuEye
              onClick={togglePasswordVisibility}
              className={`w-4 h-auto ${
                isSubmitted && errors[id] && "text-error"
              }`}
            />
          )}
        </span>
      )}
    </div>
  );
};
