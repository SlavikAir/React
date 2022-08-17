import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import basketReducer from './reducers/basketReducer';
import cashReducer from './reducers/cashReducer';
import customerReducer from './reducers/customerReducer';
import drinksReducer from './reducers/drinksReducer';
import firstCoursesReducer from './reducers/firstCoursesReducer';
import fishReducer from './reducers/fishReducer';
import loginReducer from './reducers/loginReducer';
import meatReducer from './reducers/meatReducer';
import saladsReducer from './reducers/saladsReducer';
import sauceReducer from './reducers/sauceReducer';
import saidDishesReducer from './reducers/sideDishesReducer';

// npm i redux react-redux  
// npm install --save redux-devtools-extension  // инструмент разроботчика


const rootReducer = combineReducers( { // комбайн редусер принемает в себя обект состоящий из редусеров
    cash:cashReducer,                   // каждый редусер под своим ключем
    firstCourses:firstCoursesReducer,   // каждый ключь это место в стейте 
    salads:saladsReducer,   
    meat:meatReducer,
    fish:fishReducer,
    side:saidDishesReducer,
    sauce:sauceReducer,
    drinks:drinksReducer,
    customer:customerReducer,
    login:loginReducer,
    basket:basketReducer,
                                          
})



export const store = createStore(rootReducer,composeWithDevTools())  // создаем переменную store composeWithDevTools()-длбавит в f12 вкладку redux

console.log(store.getState()) // выводим в консоль хронилище

