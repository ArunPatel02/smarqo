// import logo from './logo.svg';
import './App.css';
import './variable.css';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import RoutesPath from './components/routers/routes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <RoutesPath />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
