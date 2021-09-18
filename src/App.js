
import './assets/styles/App.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import BootstrapCarousel from './components/BootstrapCarousel';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import { BrowserRouter, Switch, Route } from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>

      <div className="App">


        <NavBar />

        <Switch>
          <Route exact path='/'>
            <BootstrapCarousel />
            <ItemListContainer />
          </Route>
          <Route exact path='/categoria/:categoriaId'>
            <ItemListContainer />
          </Route>
          <Route exact path='/detalle/:id'>
            <ItemDetailConteiner />
          </Route>
        </Switch>


      </div>

    </BrowserRouter>
  );
}

export default App;
