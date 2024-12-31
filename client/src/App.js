import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Home from './Pages/Home';
import Header from './components/Header/Header';
import { createContext, useEffect, useState } from 'react';
//import Footer from './components/Footer/Footer';
import axios from 'axios'

const MyContext = createContext();





function App() {

  //get country list
  const [ countryList, setCountryList ] = useState([])

  

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  })


  const getCountry = async (url) =>{
    const response = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
    })
  }

  const values = {
    countryList,
  }

  return (
    <>
      <BrowserRouter>

        <MyContext.Provider value={values}>
          <Header />

          <Routes>
            <Route path="/" exact={true} element={""} />
          </Routes>

          {/* <Footer /> */}
        </MyContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;

export { MyContext };
