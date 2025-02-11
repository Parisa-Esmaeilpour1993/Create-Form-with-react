import React from "react";

export default function Button({
  type = "button",
  label,
  className,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
