import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/inter';
import '@fontsource/roboto';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import '@fontsource/bebas-neue';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
