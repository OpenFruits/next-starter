import clsx from "clsx";
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type SelectProps = InputHTMLAttributes<HTMLSelectElement> &
  Omit<UseFormRegisterReturn, "ref" | "onChange" | "onBlur"> & {
    name: string;
    label?: string;
    prefix?: string;
    error?: string;
  };

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div className="block">
      <label htmlFor={rest.name}>
        {rest.label ? <div className="block ml-2 text-sm font-bold text-gray-500">{rest.label}</div> : null}
        <div className="relative">
          {rest.prefix ? (
            <span className="flex absolute left-4 items-center h-full font-bold">{rest.prefix}</span>
          ) : null}
          <select
            type="text"
            id={rest.name}
            className={clsx(
              "px-5 mt-0.5 w-full h-10 rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-400",
              rest.prefix ? "pl-10" : "pl-5",
              className
            )}
            autoComplete={rest.autoComplete || "off"}
            ref={ref}
            {...rest}
          >
            {rest.children}
          </select>
        </div>
      </label>
      {rest.error ? <p className="mt-0.5 ml-2 text-sm text-red-500">{rest.error}</p> : null}
    </div>
  );
});

Select.displayName === "Select";
