import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Layout from '../components/Layout';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Home/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="about" element={<About />} />
            </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;