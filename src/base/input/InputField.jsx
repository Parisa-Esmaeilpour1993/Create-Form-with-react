import React from "react";

export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  isDarkMode,
}) {
  return (
    <div className="mb-2">
      <label className="block font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
          error ? "border-red-500" : "border-gray-300"
        } ${isDarkMode ? "bg-gray-400 text-white" : "bg-white text-black"}`}
        required
        autoComplete="off"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
