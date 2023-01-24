import { ReactNode } from "react";

type DaysProps = {
    title: string
    description?: string
    children: ReactNode
}

export function Days({title, description, children}: DaysProps) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className="h-[50px]"
          fill="#fff"
        >
          {children}
        </svg>
        <span className="text-5xl mb-6 text-white font-bold">{title}</span>
      </div>
      <span className="text-[#08336d] text-xl font-semibold">
        {description}
      </span>
    </div>
  );
}
