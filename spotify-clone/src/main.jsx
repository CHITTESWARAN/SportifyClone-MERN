import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import PlayerContestProvider from './context/PlayerContest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContestProvider>
    <App />
    </PlayerContestProvider>
    </BrowserRouter>
  </StrictMode>,
)
