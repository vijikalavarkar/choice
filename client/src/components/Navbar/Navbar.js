import './Navbar.css'
import Button from '@mui/material/Button';
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
    return(
        <>
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='navpart1 col-sm-3'>
                            <Button className='allCatTab align-items-center'>
                                <span className='Cat_menu mr-4'><FaBars /></span>
                                <span className='Cat_text'>All Categories</span>
                                <span className='Cat_angle ml-4'><FaAngleDown /></span>
                            </Button>
                        </div>
                        <div className='navpart2 col-sm-9'>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar