import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </StrictMode>,
)
