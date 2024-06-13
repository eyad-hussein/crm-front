"use client";
import Link from "next/link";

interface FlatButtonProps {
  text: string;
  type?: "link" | "button";
  href?: string;
  buttonType?: "submit" | "reset" | "button" | undefined;
  classes?: string;
  handleOnClick?: (e: any) => void;
}

export default function FlatButton({
  text,
  type = "link",
  href,
  buttonType = "button",
  classes = "",
  handleOnClick,
}: FlatButtonProps) {
  return type === "link" ? (
    <Link
      href={href ?? ""}
      className={`flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-36 text-sm ${classes}`}>
      {text}
    </Link>
  ) : (
    <button
      onClick={handleOnClick}
      type={buttonType}
      className={`flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-36 text-sm ${classes}`}>
      {text}
    </button>
  );
}
