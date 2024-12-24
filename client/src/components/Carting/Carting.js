import './Carting.css'
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";

const Carting = () => {
    return(
        <>
            <div className='carting d-flex align-items-center ml-auto'>
                <Button className='profile mr-3'><FiUser /></Button>
                <div className='cartTab ml-auto d-flex align-items-center'>
                    <span className='price'>$ 9.78</span>
                    <div className='position-relative ml-2'>
                        <Button className='profile'><IoBagOutline /></Button>
                        <span className='count d-flex justify-content-center align-items-center'>1</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Carting