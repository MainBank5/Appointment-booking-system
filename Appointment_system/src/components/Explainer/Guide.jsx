import {Link} from 'react-router-dom';
import featuredoc from '../../assets/images/herodoctor1.jpg';

const Guide = () => {
  return (
    <>
       <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row pb-8 lg:pb-[55px]">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Book an appointment
                <br /> the easy way
              </h2>
              <ul className="pl-4">
                <li className="text_para">1.Browse our list of doctors</li>
                <li className="text_para">2. Choose your preferred doctor</li>
                <li className="text_para">
                  3. Schedule at your most convenient time
                </li>
                <li className="text_para">4. Leave a review of the doctor</li>
              </ul>
              <Link to="/doctors">
                <button className="btn hover:bg-blue-500">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featuredoc}  alt="featuredoc" className="rounded-3xl lg:w-4/5" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Guide;