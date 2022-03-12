import clsx from "clsx";
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Omit<UseFormRegisterReturn, "ref" | "onChange" | "onBlur"> & {
    name: string;
    label?: string;
    prefix?: string;
    error?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div className="block">
      <label htmlFor={rest.name}>
        {rest.label ? <div className="block ml-4 text-sm font-bold text-gray-500">{rest.label}</div> : null}
        <div className="relative">
          {rest.prefix ? (
            <span className="flex absolute left-5 items-center h-full font-bold">{rest.prefix}</span>
          ) : null}
          <input
            type="text"
            id={rest.name}
            className={clsx(
              "py-3 px-5 mt-0.5 w-full h-10 rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-400",
              rest.prefix ? "pl-10" : "pl-5",
              className
            )}
            autoComplete="off"
            ref={ref}
            {...rest}
          />
        </div>
      </label>
      {rest.error ? <p className="mt-0.5 ml-4 text-sm text-red-500">{rest.error}</p> : null}
    </div>
  );
});

Input.displayName === "Input";
