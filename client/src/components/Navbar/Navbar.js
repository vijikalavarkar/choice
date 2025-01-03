import './Navbar.css'
import Button from '@mui/material/Button';
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <nav>
                <div className='container'>
                    <div className='row'>

                        {/* all categories button */}
                        <div className='navpart1 col-sm-3'>
                            <Button className='allCatTab align-items-center'>
                                <span className='Cat_menu mr-4'><FaBars /></span>
                                <span className='Cat_text'>All Categories</span>
                                <span className='Cat_angle ml-4'><FaAngleDown /></span>
                            </Button>
                        </div>

                        {/* List [ menus ] */}
                        <div className='navpart2 col-sm-9 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Home</Button></Link></li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Milk</Button></Link></li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Chocolates</Button></Link></li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Cup Noodles</Button></Link></li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Eggs</Button></Link></li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Honey</Button></Link></li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Honey</Button></Link></li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>About</Button></Link></li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar