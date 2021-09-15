
import './assets/styles/App.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import BootstrapCarousel from './components/BootstrapCarousel';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemDetailConteiner from './components/ItemDetailConteiner';






function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BootstrapCarousel></BootstrapCarousel>
      <ItemListContainer></ItemListContainer>
      <ItemDetailConteiner></ItemDetailConteiner>
    
    </div>
  );
}

export default App;
