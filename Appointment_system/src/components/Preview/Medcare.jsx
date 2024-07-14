import xrayfeature from '../../assets/images/xrayfeat.jpg';
import surgery from '../../assets/images/surgery.jpg';
import feature from '../../assets/images/medicalfeat.jpg';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';

const Medcare = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="lg:w-[480px] mx-auto pt-10">
            <h2 className="heading text-center">
              Providing the best medical care
            </h2>
            <p className="text_para text-center">
              Unmatched world-class medical care for everyone. We&apos;re a
              large family of experienced medical staff
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={feature} alt="icon" className="rounded-2xl" />
              </div>

              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-gray-900 
                        font-[700] text-center"
                >
                  Find a doctor
                </h2>
                <p className="text-[16px] leading-7 text-gray-800 font-[400] text-center mt-4">
                  World class healthcare for everyone. Our staff consists of
                  medical experts from around the world.
                </p>

                <Link
                  to="/doctors"
                  className="w-[40px] h-[40px] rounded-full border 
                        border-solid border-gray-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600"
                >
                  <BsArrowRight className="group-hover:text-white h-5 w-6" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={xrayfeature} alt="icon" className="rounded-2xl" />
              </div>

              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-gray-900 
                        font-[700] text-center"
                >
                  Leading experts
                </h2>
                <p className="text-[16px] leading-7 text-gray-800 font-[400] text-center mt-4">
                  World class healthcare for everyone. Our staff consists of
                  medical experts from around the world.
                </p>

                <Link
                  to="/doctors"
                  className="w-[40px] h-[40px] rounded-full border 
                        border-solid border-gray-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600"
                >
                  <BsArrowRight className="group-hover:text-white h-5 w-6" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={surgery} alt="icon" className="rounded-2xl" />
              </div>

              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-gray-900 
                        font-[700] text-center"
                >
                  Experienced staff
                </h2>
                <p className="text-[16px] leading-7 text-gray-800 font-[400] text-center mt-4">
                  World class healthcare for everyone. Our staff consists of
                  medical experts from around the world.
                </p>

                <Link
                  to="/doctors"
                  className="w-[40px] h-[40px] rounded-full border 
                        border-solid border-gray-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600"
                >
                  <BsArrowRight className="group-hover:text-white h-5 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Medcare;