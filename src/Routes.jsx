import {createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import MyProperty from './Pages/MyProperty';
import Order from './Pages/Order';
import Sell from './Pages/Sell';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path='myproperty' element={<MyProperty />} />
            <Route path='order' element={<Order />} />
            <Route path='sell' element={<Sell />} />
        </Route>
    )
);

export default router;