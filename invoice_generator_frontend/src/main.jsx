import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App/>
  </AppContextProvider>
)
