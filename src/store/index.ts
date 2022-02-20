import {  createStore, combineReducers, applyMiddleware } from 'redux';
import  Calculator  from "./modules/calculator/reducer";
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import thunk from 'redux-thunk'



export const reducers = combineReducers({
    productReducer: Calculator,
});

export const calculadora = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof calculadora.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default calculadora;
