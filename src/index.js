import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'; // Провайдер нужен для того чтобы свезать наши компонент с state
                                        // Оборачиваем все приложение в него


const root = ReactDOM.createRoot(document.getElementById('root'));
                 // пораметром в Provider передаем store он будит в кампоненты прокидывать неше состояние

root.render(
  <Provider store={store}>      
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
