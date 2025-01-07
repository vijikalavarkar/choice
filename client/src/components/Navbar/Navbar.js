import './Navbar.css'
import Button from '@mui/material/Button';
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [isopenSlidebarvalue, setisopenSlidebarvalue ] = useState(true)

    

    return (
        <>
            <nav>
                <div className='container'>
                    <div className='row'>

                        {/* all categories button */}
                        <div className='navpart1 col-sm-3'>
                            <div className='allcatWrapper'>
                                <Button className='allCatTab align-items-center' onClick={()=>setisopenSlidebarvalue(!isopenSlidebarvalue)}>
                                    <span className='Cat_menu mr-4'><FaBars /></span>
                                    <span className='Cat_text'>All Categories</span>
                                    <span className='Cat_angle ml-4'><FaAngleDown /></span>
                                </Button>

                                <div className={`slidebarnav ${isopenSlidebarvalue === true ? 'open' : ''} `}>
                                    <ul>
                                        <li><Link to={'/'} ><Button>Item1</Button></Link></li>
                                        <li><Link to={'/'} ><Button>Item2</Button></Link></li>
                                        <li><Link to={'/'} ><Button>Item3</Button></Link></li>
                                        <li><Link to={'/'} ><Button>Item4</Button></Link></li>
                                        <li><Link to={'/'} ><Button>Item5</Button></Link></li>
                                        <li><Link to={'/'} ><Button>Item6</Button></Link></li>
                                        <li><Link to={'/'} ><Button>Item6</Button></Link></li>
                                        <li><Link to={'/'} ><Button>Item6</Button></Link></li>
                                        <li><Link to={'/'} ><Button>Item6</Button></Link></li>
                                      
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* List [ menus ] */}
                        <div className='navpart2 col-sm-9 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Home</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to={'/'} ><Button>Item1</Button></Link>
                                        <Link to={'/'} ><Button>Item2</Button></Link>
                                        <Link to={'/'} ><Button>Item3</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Milk</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to={'/'} ><Button>Item1</Button></Link>
                                        <Link to={'/'} ><Button>Item2</Button></Link>
                                        <Link to={'/'} ><Button>Item3</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Chocolates</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to={'/'} ><Button>Item1</Button></Link>
                                        <Link to={'/'} ><Button>Item2</Button></Link>
                                        <Link to={'/'} ><Button>Item3</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Cup Noodles</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to={'/'} ><Button>Item1</Button></Link>
                                        <Link to={'/'} ><Button>Item2</Button></Link>
                                        <Link to={'/'} ><Button>Item3</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Eggs</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to={'/'} ><Button>Item1</Button></Link>
                                        <Link to={'/'} ><Button>Item2</Button></Link>
                                        <Link to={'/'} ><Button>Item3</Button></Link>
                                        <Link to={'/'} ><Button>Item4</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to={'/'} ><Button>Honey</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to={'/'} ><Button>Item1</Button></Link>
                                        <Link to={'/'} ><Button>Item2</Button></Link>
                                        <Link to={'/'} ><Button>Item3</Button></Link>
                                        <Link to={'/'} ><Button>Item4</Button></Link>
                                        <Link to={'/'} ><Button>Item5</Button></Link>
                                    </div>
                                </li>
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