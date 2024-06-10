import {Link} from 'react-router-dom';
import heroimage3 from '../assets/images/hero-img03.png';
import heroimage4 from '../assets/images/feature-img.png';
import feature from '../assets/images/medicalfeat.jpg';
import featuredoc from '../assets/images/herodoctor1.jpg';
import xrayfeature from '../assets/images/xrayfeat.jpg';
import surgery from '../assets/images/surgery.jpg';
import faqimg from '../assets/images/faqImg.webp';
import {BsArrowRight} from 'react-icons/bs';
import About from '../components/About';
import Services from '../components/Offerings/Services';
import FaqItem from '../components/Faq';



const Home = () => {
    
  return (
    <>
      <section className="hero_section 2xl:h-[800px]">
        {/*Hero section */}
        <div className="container">
          <div className=" w-full">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* hero content */}

              <div className="">
                <div className="">
                  <h1
                    className="text-[36px] leading-[36px]
                     text-gray-800  md:text-[60px] font-[600] md:leading-[70px]"
                  >
                    We help patients lead a healthy, happy life
                  </h1>
                  <p className="text_para ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eius, obcaecati minus aliquid aliquam facere accusantium
                    atque doloribus? Numquam at temporibus ipsum voluptate
                    architecto! Quam veniam q uas fugiat repellat laudantium
                    tempore?
                  </p>
                  <Link to="/doctors">
                    <button className="btn border-4 border-black hover:bg-blue-500">
                    Book an Appointment
                  </button>
                  </Link>
                  
                </div>
                <div className="mt-[25px] flex flex-col lg:flex-row lg:items-center lg:mt-[20px] gap-5 lg:gap-30px">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-gray-800">
                      30+
                    </h2>
                    <span className="block h-2 w-[100px] bg-yellow-300 rounded-full mt-[-12px]"></span>
                    <p className="text_para">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[50px] font-[700] text-gray-800">
                      10+
                    </h2>
                    <span className="block h-2 w-[100px] bg-purple-600 rounded-full mt-[-12px]"></span>
                    <p className="text_para">Locations</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-gray-800">
                      100%
                    </h2>
                    <span className="block h-2 w-[150px] bg-teal-700 rounded-full mt-[-12px]"></span>
                    <p className="text_para">Guaranteed Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* hero images */}
              <div className="flex gap-[30px] justify-end">
                <div className="flex-grow">
                  <img src={heroimage4} alt="doctor" className="w-full" />
                </div>
                <div className="mt-[30px]">
                  <img
                    src={heroimage3}
                    alt="doctor"
                    className="w-full mb-[30px]"
                  />
                  <img
                    src={heroimage4}
                    alt="doctor"
                    className="w-full mb-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text_para text-center">
              We offer the following services:
            </p>
          </div>
          <Services />
        </div>
      </section>

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

      <section>
        <div className="container pb-8">
          <div className="xl:w-570px mx-auto">
            <h2 className="heading text-center">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:gap-2 gap-[50px]">
            <div className="w-full lg:w-1/2 pb-3">
              <img src={faqimg} alt="faq" className="rounded-2xl" />
            </div>
            <div className="pl-5 lg:mt-[30px] w-full">
              <div className="w-full">

                <div className='my-5'>
                    <FaqItem
                  question="Which method of payment do you accept?"
                  answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                />
                </div>
                
                <div className='my-4'>
                    <FaqItem
                  question="How can I reschedule an appointment?"
                  answer="To improve your FAQ section, you can..."
                />
                </div>
                
                <div className='my-4'>
                    <FaqItem
                  question="Can I set an reminder to my appointment?"
                  answer="To improve your FAQ section, you can..."
                />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;