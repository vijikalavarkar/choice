import { Button } from '@mui/material'
import { MdClose } from "react-icons/md";
import Dialog from '@mui/material/Dialog';
import './Test.css'
import { useState } from 'react';

const Test = () => {

    const [isOpenModel, setIsOpenModel] = useState(false)

    return(
        <>
            <h4 className='text-center mt-5'>Test</h4>

            <div className='simple-parant'>
                <Button className='buttonopen' onClick={()=>setIsOpenModel(true)}>Click to open</Button>
            </div>

            <Dialog open={isOpenModel}>
                <div className='main_paranet'>
                    <p>Hi How are you doing today ...</p>
                    <Button onClick={()=>setIsOpenModel(false)}><MdClose /></Button>
                </div>

            </Dialog>

        </>
    )
}
export default Test