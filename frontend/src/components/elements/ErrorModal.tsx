'use client'
import classnames from "classnames";

type Props = {
  message: string;
  closeError: () => void;
};

export const ErrorModal = ({ message, closeError }: Props) => {

  return (
    <div className="bg-red-500 absolute flex gap-x-4 rounded-lg px-4 py-5 w-80 top-12 right-12 z-10">
      <p>icon</p>
      <p className="bold">{message}</p>
      <p className="text-2xl cursor-pointer" onClick={closeError}>✖</p>
    </div>
  );
};