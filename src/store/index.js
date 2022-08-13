import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cashReducer from './reducers/cashReducer';
import firstCoursesReducer from './reducers/firstCoursesReducer';
import meatReducer from './reducers/meatReducer';
import saladsReducer from './reducers/saladsReducer';

// npm i redux react-redux  
// npm install --save redux-devtools-extension  // инструмент разроботчика


const rootReducer = combineReducers( { // комбайн редусер принемает в себя обект состоящий из редусеров
    cash:cashReducer,                   // каждый редусер под своим ключем
    firstCourses:firstCoursesReducer,   // каждый ключь это место в стейте 
    salads:saladsReducer,   
    meat:meatReducer,                                       
})



export const store = createStore(rootReducer,composeWithDevTools())  // создаем переменную store composeWithDevTools()-длбавит в f12 вкладку redux

console.log(store.getState()) // выводим в консоль хронилище

