import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
 
ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}> 
   <AuthProvider>
    <Router>
        <App />
    </Router>
    </AuthProvider>
    </Provider>
 )
