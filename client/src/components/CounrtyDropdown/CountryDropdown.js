import Button from '@mui/material/Button';
import "./CountryDropdown.css";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';
import { MdClose } from "react-icons/md";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";


const CountryDropdown = () => {

    

    // country state
    const [isOpenModel, setIsOpenModel] = useState(false)

    return (
        <>
            <Button className="country_drop_down" onClick={()=>setIsOpenModel(true)}> 
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='cname'>India</span>
                </div>
                <span className='ml-auto angle'><FaAngleDown /></span>
            </Button>

            {/* Location Model */}
            <Dialog open={isOpenModel} onClose={()=>setIsOpenModel(false)} className='locationModel'>

                <h4>Choose your Delivery Location</h4>
                <p className='locationdesc'>Enter the address and we will specify the offer for your area</p>
                <Button className='close_' onClick={()=>setIsOpenModel(false)}><MdClose /></Button>

                <div className='headerSearch w-100'>
                    <input type="text" placeholder='Search your area ...'/>
                    <Button><IoSearch /></Button>
                </div>

                <ul className='countryList mt-3'> 
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>  
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>India</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Shri Lanka</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Pakistan</Button></li>
                </ul>

            </Dialog>
           

        </>
    );
};
export default CountryDropdown;
