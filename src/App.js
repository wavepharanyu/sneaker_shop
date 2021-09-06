import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./containers/Home";
import ProductDetail from './containers/Product/ProductDetail';
import Cart from './containers/Cart';
import Orders from './containers/Orders';
import Products from './containers/Product/Products';
import About from './containers/About';
import NotFound from './containers/NotFound';
import ProductEdit from './containers/Product/ProductEdit';
import  {CartProvider} from './contexts/cart';


function App() {

  const renderRouter = () => {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products-detail/:productId" component={ProductDetail}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/orders" component={Orders}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/products/add" component={ProductEdit}/>
          <Route exact path="/products/edit/:productId" component={ProductEdit}/>
          <Route exact path="/about" component={About}/>

          <Route component={NotFound} />
        </Switch>
      )
  }

  return (
    <CartProvider>
      <BrowserRouter>
      <Header/>
        {renderRouter()}
      <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
