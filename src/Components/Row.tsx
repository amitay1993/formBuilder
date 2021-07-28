import React from "react";
import Column from "./Column";

interface Props {
  value: any;
  children: any;
}

const Row: React.FC<Props> = ({ value, children }) => {
  return (
    <div className={value}>
      {children.map((element: any, idx: number) => (
        <Column key={idx} attributes={element} />
      ))}
    </div>
  );
};
export default Row;
