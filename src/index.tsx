import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './components/main-page/MainPage';
import { Course } from './components/coursePage/Course';
import { Contacts } from './components/contactsPage/Contacts';
import { MyWorks } from './components/PortfolioPage/MyWorks';
import { Header } from './components/common/header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/course",
    element: <Course/>,
  },
  {
    path: "/contacts",
    element: <Contacts/>,
  },
  {
    path: "/works",
    element: <MyWorks/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </React.StrictMode>
);

