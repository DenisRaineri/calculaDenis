export const CLEAR = "CLEAR";
export const ADD_NUMBER = "ADD_NUMBER";
export const RESULT = "RESULT";

export interface Operacao  {
    input: string;
    result: string;
}

export interface Action  {
  type: string;
  clear: string;
  input: string;
}
