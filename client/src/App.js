import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Home from './Pages/Home';
import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" exact={true} element={""}/>
        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>
    </>
  );
}

export default App;
