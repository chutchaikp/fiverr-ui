import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// pages
import Home from './pages/home/Home.jsx'
import Gigs from './pages/gigs/Gigs.jsx'
import Gig from './pages/gig/Gig.jsx'
import MyGigs from './pages/mygigs/MyGigs.jsx'
import Orders from './pages/orders/Orders.jsx'
import Messages from './pages/messages/Messages.jsx'
import Message from './pages/message/Message.jsx'

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
      path: '/gigs',
      element: <Gigs />
    }, {
      path: '/gig/:id',
      element: <Gig></Gig>
    }, {
      path: '/mygigs',
      element: <MyGigs />
    }, {
      path: '/orders',
      element: <Orders />
    }, {
      path: '/messages',
      element: <Messages />
    }, {
      path: '/message/:id',
      element: <Message />
    }, {
      path: '/add',
      element: <Add />
    }
    ]
  }, {
    path: '/sandbox',
    element: <Sandbox />
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
