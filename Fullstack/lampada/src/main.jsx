import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lampada from './componets/Lampada'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lampada />
  </StrictMode>,
)
