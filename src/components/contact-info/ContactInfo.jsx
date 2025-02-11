import React from "react";

export default function ContactInfo({ label, value }) {
  return (
    <p>
      <span className="font-semibold">{label}:</span>{" "}
      <span className="break-words">{value}</span>
    </p>
  );
}
