
import './assets/styles/App.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import BootstrapCarousel from './components/BootstrapCarousel';
import ItemListContainer from './components/ItemListContainer';






function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BootstrapCarousel></BootstrapCarousel>
      <ItemListContainer greeting= {"Bienvenido, solo por hoy tenes un -15%!!"}></ItemListContainer>
    
    </div>
  );
}

export default App;
