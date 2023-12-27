import React from 'react'
import {HashRouter  } from "react-router-dom"
import 'antd/dist/reset.css';
import Router from "./routes"
// import AuthRouter from './routes/utils/AuthRouter';
export default function App() {
  
  return (
    <div id='main' style={{width:'100%',height:"100%"}}>
         <HashRouter >
          {/* <AuthRouter> */}
          <Router />
          {/* </AuthRouter> */}
      </HashRouter >
    </div>
  )
}
