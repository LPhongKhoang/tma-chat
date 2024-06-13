// import './App.css' 
// import WebApp from '@twa-dev/sdk'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import About from './pages/About';
// import MyChat from './pages/MyChat';
import MyCounterEff from './pages/MyCounterEff';

function App() {

  // console.log('WebApp.themeParams.bg_color', WebApp.themeParams.bg_color);

  return (
    <>
      {/* <BrowserRouter basename='/tma-chat'>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="" element={<Home/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="about" element={<About />} />
                <Route path="chat" element={<MyChat />} />
            </Route>
            </Routes>
        </BrowserRouter> */}
        <MyCounterEff />
    </>
  )
}

export default App