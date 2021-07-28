export interface TypeOfItem {
  type: string;
  children: columnsProps[];
}

interface columnsProps {
  type: string;
  children: Array<LabelAndType & inputAttributes>;
}

interface LabelAndType {
  label: string;
  type: string;
}

interface inputAttributes {
  id: string;
  name: string;
  required?: boolean;
  value?: string | number;
  min?: number;
  max?: number;
  options?: string[];
  rows?: string;
  cols: string;
}

export type inputTypes = "text" | "password" | "radio" | "number" | "email";
