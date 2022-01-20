// import logo from './logo.svg';
import './App.css';
import './variable.css';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import RoutesPath from './components/routers/routes';
import Footer from './components/footer/Footer';
// import InputOtp from './components/helper/otpinput/InputOtp';

function App() {
  return (
    <BrowserRouter>
    <Header />
    {/* <InputOtp /> */}
    <RoutesPath />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
