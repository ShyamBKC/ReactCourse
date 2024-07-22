import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
 
ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}> 
   <PersistGate loading={null} persistor={persistor}>
   <AuthProvider>
    <Router>
        <App />
    </Router>
    </AuthProvider>
    </PersistGate>
    </Provider>
 )
