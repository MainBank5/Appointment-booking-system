
const Home = () => {
  return (
    <section className="hero_section">
        {/*Hero section */}
       <div className="container pt-[30px] pb-[15px]">
          
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
            <div>
                <div className="lg:w-[550px]">
                    <h1 className="text-[36px] leading-[46px] font-[800] md:text-[60px] md:leading-[70px]
                     text-gray-800">We help patients lead a healthy, happy life</h1>
                    <p className="text_para">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus modi
                        perspiciatis assumenda quis in obcaecati libero fugit, voluptates
                        ipsam eius! Sed tempore porro, obcaecati maiores veritatis enim accusamus
                        et ipsum.
                    </p>

                    <button className="btn">Book an Appointment</button>
                </div>

                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center
                lg:gap-[30px] gap-5">
                    <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                        font-[700] text-gray-800">30+</h2>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                        font-[700] text-gray-800">52+</h2>
                    </div>
                </div>
                
            </div>
        </div>

       </div>
    </section>
  )
}

export default Home;