import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import ListAccessories from './components/accessories/ListAccessories';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';
import ListOld from './components/old/ListOld';
import ListPhone from './components/phone/ListPhone';
import ListLaptop from './components/laptop/ListLaptop';
import PayForm from './components/pay/PayForm';
// import Cart from './components/cart/Cart';
import ProductsDetails from './components/productDetails/Products';
import Account from './components/user/userPage/Account';
import CustomerSupport from './components/user/userPage/CustomerSupport';
import PurchaseHistory from './components/user/userPage/PurchaseHistory';
import Offer from './components/user/userPage/Offer';
import User from './components/user/User';
import DefaultLayoutAdmin from './admin/components/DefaultLayoutAdmin';
import AdminProducts from './admin/page/Products';
import AdminUsers from './admin/page/Users';
import AdminCategory from './admin/page/Category';
import PrivacyPolicy from './pages/policy/PrivacyPolicy';
import ReturnPolicy from './pages/policy/ReturnPolicy';
import ShippingPolicy from './pages/policy/ShippingPolicy';
import WarrantyPolicy from './pages/policy/WarrantyPolicy';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'accessories',
        element: <ListAccessories />,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'register',
        element: <RegisterForm />,
      },
      {
        path: 'old',
        element: <ListOld />,
      },
      {
        path: 'phone',
        element: <ListPhone />,
      },
      {
        path: 'laptop',
        element: <ListLaptop />,
      },
      // {
      //   path: 'cart',
      //   element: <Cart />,
      // },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'support',
        element: <CustomerSupport />,
      },
      {
        path: 'history',
        element: <PurchaseHistory />,
      },
      {
        path: 'offer',
        element: <Offer />,
      },
      {
        path: 'user',
        element: <User />,
      },
      {
        path: ':productId',
        element: <ProductsDetails />,
      },
      {
        path: '/policy',
        children: [
          {
            path: 'privacy',
            element: <PrivacyPolicy />,
          },
          {
            path: 'return',
            element: <ReturnPolicy />,
          },
          {
            path: 'shipping',
            element: <ShippingPolicy />,
          },
          {
            path: 'warranty',
            element: <WarrantyPolicy />,
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: <DefaultLayoutAdmin />,
    children: [
      {
        path: 'products',
        element: <AdminProducts />,
      },
      {
        path: 'users',
        element: <AdminUsers />,
      },
      {
        path: 'category',
        element: <AdminCategory />,
      },
    ],
  },
  {
    path: '/auth/admin',
  },
  {
    path: '/payment',
    element: <PayForm />,
  },
]);
