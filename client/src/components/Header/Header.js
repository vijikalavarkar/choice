import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/choice.png'
import CountryDropdown from '../CounrtyDropdown/CountryDropdown'
import Searchbar from '../Searchbar/Searchbar'
import Carting from '../Carting/Carting'
import Navbar from '../Navbar/Navbar'



const Header = () => {
    return(
        <>
            <header className='header_wrapper'>
                {/* Top Strip */}
                <div className='top-strip bg_blue'>
                    <div className='container'>
                        <p className='mt-0 mb-0 text-center'>Due to <b>COVID-19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                {/* header */}
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                            </div>

                            <div className="rightcontentWrapper d-flex align-items-center col-sm-10">
                                <CountryDropdown />
                                <Searchbar />
                                <Carting />
                            </div>
                        </div>
                    </div>
                </div>


            </header>


            {/* Navbar section */}
            <Navbar />

            

        </>
    )
}
export default Header