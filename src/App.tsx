// import './App.css' 
// import WebApp from '@twa-dev/sdk'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

function App() {

  // console.log('WebApp.themeParams.bg_color', WebApp.themeParams.bg_color);

  return (
    <>
      <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="" element={<Home/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="about" element={<About />} />
            </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App