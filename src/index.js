import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EmployeeList from './pages/EmployeeList';
import CreatEmployee from './pages/CreateEmployee';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/Login'
import { Provider } from 'react-redux';
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list" element={<EmployeeList />} />
        <Route path='/create' element={<CreatEmployee />} />
      </Routes>
      </Provider>
    </BrowserRouter>
    
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
