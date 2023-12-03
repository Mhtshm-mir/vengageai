import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import AppRouter from "./router/appRouter"
ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <AppRouter/>
 </Provider>
)
