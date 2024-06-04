import { useState } from 'react';
import {BsCaretDown, BsCaretUp} from 'react-icons/bs'

const FaqItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false); // Maintain state for each FAQ item

    const handleFaq = () => {
        setOpen(!open); // Toggle the state for the specific FAQ item
    };

    return (
        <div className='flex w-full rounded-md items-center justify-between flex-col border-2 border-solid'>
            <div className=' mb-1 flex justify-between items-center font-semibold '>
                {question}
                <div onClick={handleFaq}>
                    {open ? <BsCaretDown size={20} className='text-blue-500 cursor-pointer'/> : <BsCaretUp size={20} className='text-blue-600 cursor-pointer'/>}
                </div>
            </div>
            {open && (<p className='block'>{answer}</p>)}
        </div>
    );
};

export default FaqItem;