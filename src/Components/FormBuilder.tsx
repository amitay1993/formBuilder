import React from "react";
import { CustomForm, MainForm } from "../Styles/FormStyles";
import Row from "./Row";

const generateInput = (props: any): JSX.Element => {
  const { data: fields, values } = props;
  console.log(fields);
  console.log(values);
  return fields.map((element: any, idx: number) => {
    const { type, children } = element;
    //TODO: why no need for interface here.
    return <Row key={idx} value={type} children={children} />;
  });
};

const FormBuilder: React.FC = (props: any) => {
  return (
    <div className={"container"}>
      <MainForm>{generateInput(props)}</MainForm>
    </div>
  );
};
export default FormBuilder;
