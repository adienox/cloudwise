import { UilExclamationOctagon, UilSpinner } from "@iconscout/react-unicons";
import React from "react";

interface Props {
  children: string;
}

const ErrorCard = ({ children }: Props) => {
  return (
    <div className="flex flex-row justify-center py-8 font-medium text-red-200">
      <UilExclamationOctagon />
      <span className="ml-3">{children}</span>
    </div>
  );
};

const LoadingCard = ({ children }: Props) => {
  return (
    <div className="flex flex-row justify-center py-8 font-medium text-blue-300">
      <UilSpinner />
      <span className="ml-3">{children}</span>
    </div>
  );
};

export { ErrorCard, LoadingCard };
