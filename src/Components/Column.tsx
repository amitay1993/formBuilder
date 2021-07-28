import React from "react";
import { inputTypes } from "../Interfaces/interfaces";

interface Props {
  attributes: any;
}

const Column: React.FC<Props> = ({ attributes }) => {
  const { type, children } = attributes;
  console.log(type, children);

  return (
    <div className={attributes.type}>
      {children.map((child: any) => {
        const { label, type, attributes } = child;
        console.log(type, attributes);
        return (
          <>
            <label htmlFor={attributes.id}>{label}</label>
            <input type={type} {...attributes} />
          </>
        );
      })}
    </div>
  );
};

export default Column;
