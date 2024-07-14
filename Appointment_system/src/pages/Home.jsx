import Herosection from '../components/Hero/Herosection';
import About from '../components/About';
import Services from '../components/Offerings/Services';
import Medcare from '../components/Preview/Medcare';
import Questions from '../components/Faq/Questions';
import Guide from '../components/Explainer/Guide';



const Home = () => {
    
  return (
    <>
      <section className="hero_section 2xl:h-[800px]">
        {/*Hero section */}
        <div className="container">
          <div className=" w-full">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              
             <Herosection/>
            </div>
          </div>
        </div>
      </section>

      <Medcare/>

      <About />

      <Services/>

      <Guide/>

      <Questions/>
    </>
  );
}

export default Home;