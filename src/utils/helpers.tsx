import { JSX } from "react";

export const formatDescription = (
  description: string | null | undefined
): JSX.Element[] | JSX.Element => {
  if (!description) return <p>No description provided.</p>;
  return description.split("\n").map((line, index) => (
    <p key={index} className={index > 0 ? "mt-1" : ""}>
      {line || "—"}
    </p>
  ));
};
