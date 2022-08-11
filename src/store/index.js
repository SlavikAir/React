import { createStore, combineReducers } from 'redux';
import cashReducer from './redusers/cashReduser';
import customerReducer from './redusers/ccustomerReduser';
import { composeWithDevTools } from 'redux-devtools-extension';

// npm i redux react-redux  
// npm install --save redux-devtools-extension  // инструмент разроботчика


const rootReducer = combineReducers( { // комбайн редусер принемает в себя обект состоящий из редусеров
    cash:cashReducer,                   // каждый редусер под своим ключем
    customer:customerReducer,           // каждый ключь это место в стейте 
})



export const store = createStore(rootReducer,composeWithDevTools())  // создаем переменную store composeWithDevTools()-длбавит в f12 вкладку redux

console.log(store.getState()) // выводим в консоль хронилище

