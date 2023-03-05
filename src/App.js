import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// pages
import Home from './pages/home/Home.jsx'
// import Products from './pages/products/Products.jsx'
// import Product from './pages/product/Product.jsx'
import Sandbox from './pages/sandbox/Sandbox.jsx'
import Add from './pages/add/Add.jsx'

import './app.scss'
// import { Provider } from "react-redux";
// import { store, persistor, } from './redux/store'
// import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>,
    children: [{
      path: '/',
      element: <Home />
    }, {
      path: '/products',
      element: <></>
    }, {
      path: '/products/:categoryId',
      element: <></>
    }, {
      path: '/product/:id',
      element: <></>
    }
    ]
  }, {
    path: '/sandbox',
    element: <Sandbox />
  }, {
    path: '/add',
    element: <Add />
  }
])

function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor} >
    <RouterProvider router={router} />
    //   </PersistGate>
    // </Provider>
  );
}

export default App;
