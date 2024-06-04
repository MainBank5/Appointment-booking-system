import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServicesCard = ({ item, index}) => {
  const { name, desc } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className=" text-[26px] leading-9 text-gray-900 font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-gray-800 mt-2">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/doctors"
          className="w-[40px] h-[40px] rounded-full border 
            border-solid border-gray-900  flex items-center justify-center group hover:bg-blue-600"
          >
          <BsArrowRight className="group-hover:text-white h-5 w-6" />
        </Link>
        <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] 
        font-[600] leading-[30px] bg-purple-400/95 text-yellow-300 rounded-md' style = {{
        }}> 
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
