import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { StrictMode } from 'react'
import './style/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App/>
    </StrictMode>
  </BrowserRouter>
)
