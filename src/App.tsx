import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { options } from "./MockData/jsonData";
import FormBuilder from "./Components/FormBuilder";

interface Values {
  username: string;
  firstname: string;
}

const values: Values = {
  username: "user1",
  firstname: "sharon",
};

function App() {
  // @ts-ignore
  return <FormBuilder data={options} values={values} />;
}

export default App;
