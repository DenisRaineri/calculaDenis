import { Reducer } from "redux";
import { Operacao } from "./types";
import * as types from "./types";

const INITIAL_STATE: Operacao = {
  input: "",
  result: "",
};


const Calculator: Reducer = (state: Operacao = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case types.RESULT: {
      let { input } = action;

    let regexMultDiv = /(\d+\.?\d*)([\/\*\%])(\d+\.?\d*)/.exec(input);
      while (regexMultDiv) {
        if (regexMultDiv[2] === "/") {
          let divisao = Number(regexMultDiv[1]) / Number(regexMultDiv[3]);

          input = input.replace(regexMultDiv[0], divisao.toString());
        } else if (regexMultDiv[2] === "*") {
          let multiplicacao =
            Number(regexMultDiv[1]) * Number(regexMultDiv[3]);
          input = input.replace(regexMultDiv[0], multiplicacao.toString());
        }
         else if (regexMultDiv[2] === "%") {
          let porcentagem =
            Number(regexMultDiv[1]) * Number(regexMultDiv[3]);
            porcentagem = porcentagem / 100;
          input = input.replace(regexMultDiv[0], porcentagem.toString());
        }

        regexMultDiv = /(\d+\.?\d*)([\/\*\%])(\d+\.?\d*)/.exec(input);
     
      }

      let regexSomaSub = /(\d+\.?\d*)([\-\+])(\d+\.?\d*)/.exec(input);
      
      while (regexSomaSub) {
        
        if (regexSomaSub[2] === "+") {
          let soma =
            Number(regexSomaSub[1]) + Number(regexSomaSub[3]);
          input = input.replace(regexSomaSub[0], soma.toString());
        } else if (regexSomaSub[2] === "-") {
          const subtracao =
            Number(regexSomaSub[1]) - Number(regexSomaSub[3]);
          input = input.replace(regexSomaSub[0], subtracao.toString());
        }
        regexSomaSub = /(\d+\.?\d*)([\-\+])(\d+\.?\d*)/.exec(input);
      }
      state.result = input
      
      return {
        ...state, 
      };
    }

    case types.ADD_NUMBER: {
      let { input } = action;

      return {
        ...state,
        input: state.input + input,
      };
    }

    case types.CLEAR: {
      return {
        ...state,
        input: '',
        result: '',
      };
    }

    default:
      return state;
  }
};

export default Calculator;