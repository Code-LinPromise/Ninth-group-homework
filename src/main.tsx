import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from "./Routes";
import './index.css'
import "./assets/Iconfont/iconfont.css"
import {
    RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
