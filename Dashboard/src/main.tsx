
import "antd/dist/reset.css"

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from "antd"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     {/* This component is used to globally configure the behavior and presentation of Ant Design components within an application */}
    <ConfigProvider theme={{
      token:{
        colorPrimary: "#2123bf"
      },
    }}>
    <App />
    </ConfigProvider>
  </React.StrictMode>,
)
