import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import { useDispatch } from "react-redux";
import * as actions from "../store/modules/calculator/actions";
import styled from "styled-components";

const CaculaDenis: React.FC = () => {
  const dispatch = useDispatch();

  const input = useSelector((state: RootState) => state.productReducer);

  function handleInserDigit(e: string) {
    dispatch(actions.addNumber(e, dispatch));
  }
  console.log(input);

  function handleResult() {
    if (input !== "") {
      dispatch(actions.getResult(input.input, dispatch));
    }
  }

  function handleClear() {
    dispatch(actions.cleanInput(dispatch));
  }

  return (
    <>
      <Container>
        <Table>
          <thead>
            <Resultado>
              <Input>{input.input}</Input>
              <ResultText>{input.result}</ResultText>
            </Resultado>
          </thead>
          <tbody>
            <tr>
              <BotaoResultado onClick={() => handleClear()}>C</BotaoResultado>
              <BotaoCalc onClick={() => handleInserDigit("+")}>+</BotaoCalc>
              <BotaoCalc onClick={() => handleInserDigit("-")}>-</BotaoCalc>
            </tr>
            <tr>
              <BotaoCalc onClick={() => handleInserDigit("/")}>/</BotaoCalc>
              <BotaoCalc onClick={() => handleInserDigit("*")}>x</BotaoCalc>
              <BotaoCalc onClick={() => handleInserDigit("%")}>%</BotaoCalc>
              <tr>
                <BotaoVerde onClick={() => handleInserDigit("1")}>1</BotaoVerde>
                <BotaoVerde onClick={() => handleInserDigit("2")}>2</BotaoVerde>
                <BotaoVerde onClick={() => handleInserDigit("3")}>3</BotaoVerde>
              </tr>
            </tr>
            <tr>
              <BotaoVermelho onClick={() => handleInserDigit("4")}>
                4
              </BotaoVermelho>
              <BotaoVermelho onClick={() => handleInserDigit("5")}>
                5
              </BotaoVermelho>
              <BotaoVermelho onClick={() => handleInserDigit("6")}>
                6
              </BotaoVermelho>
            </tr>
            <tr>
              <BotaoAzul onClick={() => handleInserDigit("7")}>7</BotaoAzul>
              <BotaoAzul onClick={() => handleInserDigit("8")}>8</BotaoAzul>
              <BotaoAzul onClick={() => handleInserDigit("9")}>9</BotaoAzul>
            </tr>
            <tr>
              <BotaoCalc onClick={() => handleInserDigit("0")}>0</BotaoCalc>
              <BotaoCalc onClick={() => handleInserDigit(".")}>.</BotaoCalc>
              <BotaoResultado onClick={() => handleResult()}>
                {" "}
                ={" "}
              </BotaoResultado>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default CaculaDenis;

const Table = styled.table`
  background-color: rgb(80, 53, 155);
  border-radius: 8px;
  border: 5px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const BotaoAzul = styled.button`
  background: #0099ff;
  border: 2px solid #8cb5d1;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 60px;
  height: 45px;
  transition: background-color 0.5s linear;

  &:hover {
    background-color: #061e25c2;
  }
`;

const BotaoResultado = styled.button`
  background: #f7e331;
  border: 2px solid #8cb5d1;
  color: #080404;
  font-size: 1.2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 60px;
  height: 45px;
  transition: background-color 0.5s linear;

  &:hover {
    background-color: #c93535c2;
  }
`;

const BotaoVermelho = styled.button`
  background: #811515;
  border: 2px solid #f56147;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 60px;
  height: 45px;
  transition: background-color 0.5s linear;

  &:hover {
    background-color: #061e25c2;
  }
`;

const BotaoVerde = styled.button`
  background: #498115;
  border: 2px solid #d1eba0;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 60px;
  height: 45px;
  transition: background-color 0.5s linear;

  &:hover {
    background-color: #061e25c2;
  }
`;

const BotaoCalc = styled.button`
  background: #31a5b4;
  border: 2px solid #dae7eb;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 60px;
  height: 45px;
  transition: background-color 0.5s linear;

  &:hover {
    background-color: #061e25c2;
  }
`;

const Resultado = styled.div`
  background: #6d69a1;
  border: 2px solid #dae7eb;
  border-radius: 3px;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
`;

const Input = styled.p`
  font-size: 22px;
  font-weight: bolder;
  color: #fdfdfd;
`;

const ResultText = styled.p`
  font-size: 22px;
  font-weight: bolder;
  color: #34a534;
`;
