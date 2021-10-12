
import './assets/styles/App.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import BootstrapCarousel from './components/BootstrapCarousel';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CartContextProvider from './context/CartContext';
import CheckOutConteiner from './components/CheckOutConteiner';
import CartConteiner from './components/CartConteiner';




function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>

        <div className="App">


          <NavBar />

          <Switch>
            <Route exact path='/'>
              <BootstrapCarousel />
              <ItemListContainer />
            </Route>
            <Route exact path='/categoria/:category'>
              <ItemListContainer />
            </Route>
            <Route exact path='/detalle/:id'>
              <ItemDetailConteiner />
            </Route>
            <Route exact path='/cart'>
              <CartConteiner></CartConteiner>
            </Route>
            <Route exact path='/checkout'>
              <CheckOutConteiner></CheckOutConteiner>
            </Route>
          </Switch>


        </div>

      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
