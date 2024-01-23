import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainLayout from './components/layouts/MainLayout';
import LoginScreen from './components/screens/login/LoginScreen';
import ProductsScreen from './components/screens/products/ProductsScreen';
import { AppRoutes } from './utils/AppRoutes';
import {
  Routes,
  Route,
} from "react-router-dom";

const getMainLayout = () => {
  return (<MainLayout>
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<LoginScreen />} />
      <Route path={AppRoutes.PRODUCTS} element={<ProductsScreen />} />
      <Route path={AppRoutes.ANY} element={<LoginScreen />} />
    </Routes>
  </MainLayout>)

}

function App() {
  return (
    <>
      {getMainLayout()}
    </>
  );
}

export default App;
