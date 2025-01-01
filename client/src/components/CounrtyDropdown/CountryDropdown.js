import Button from '@mui/material/Button';
import "./CountryDropdown.css";
import { FaAngleDown } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MyContext } from '../../App';


const CountryDropdown = () => {

    

    // country state
    const [isOpenModel, setIsOpenModel] = useState(false)

    // to know which contry selected
    const [selectedTab, setSelectedTab] = useState(null)

    const [countryList, setCountryList] = useState([])

    const context = useContext(MyContext)

    const selectedCountry = (index, country) => {
        setSelectedTab(index);
        setIsOpenModel(false);
        context.SetSelectedTabCountry(country)
    }

    useEffect(()=>{
        setCountryList(context.countryList);
    },[])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if(keyword !== ""){

            const list = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword);
            })
            setCountryList(list);

        }else{

            setCountryList(context.countryList);
            
        }

        

        
    }

    return (
        <>
            <Button className="country_drop_down" onClick={()=>setIsOpenModel(true)}> 
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='cname'>{context.selectedTabCountry !== "" ? context.selectedTabCountry.length>10 ? context.selectedTabCountry?.substr(0,10)+'...' : context.selectedTabCountry : 'Select Location'}</span>
                </div>
                <span className='ml-auto angle'><FaAngleDown /></span>
            </Button>

            {/* Location Model */}
            <Dialog open={isOpenModel} onClose={()=>setIsOpenModel(false)} className='locationModel'>

                <h4>Choose your Delivery Location</h4>
                <p className='locationdesc'>Enter the address and we will specify the offer for your area</p>
                <Button className='close_' onClick={()=>setIsOpenModel(false)}><MdClose /></Button>

                <div className='headerSearch w-100'>
                    <input type="text" placeholder='Search your area ...' onChange={filterList}/>
                    <Button><IoSearch /></Button>
                </div>

                <ul className='countryList mt-3'> 
                    {
                        countryList?.length !== 0 && countryList?.map((item, index)=>{
                            return(
                                <li key={index}><Button onClick={()=>selectedCountry(index, item.country)} className={`${selectedTab === index ? 'active' : ''}`}>{item.country}</Button></li>
                            )
                        })
                    }
                    
                    
                </ul>

            </Dialog>
           

        </>
    );
};
export default CountryDropdown;
