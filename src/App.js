
import './assets/styles/App.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import BootstrapCarousel from './components/BootstrapCarousel';






function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BootstrapCarousel></BootstrapCarousel>
    
    </div>
  );
}

export default App;
