import Button from '@mui/material/Button';
import "./CountryDropdown.css";
import { FaAngleDown } from "react-icons/fa";

const CountryDropdown = () => {
    return (
        <>
            <Button className="country_drop_down">
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='cname'>India</span>
                </div>
                <span className='ml-auto angle'><FaAngleDown /></span>
            </Button>
        </>
    );
};
export default CountryDropdown;
