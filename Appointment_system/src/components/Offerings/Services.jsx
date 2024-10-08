import ServicesCard from './ServicesCard';

const servicesList = [
  {
    name: 'Dentist',
    desc: 'Come meet qualifed and gentle denstist for your pearly whites',
  },

  {
    name: 'Surgery',
    desc: 'All major surgeries including open-heart, kidney transplant',
  },

  {
    name: 'Therapy',
    desc: 'Book a session with our resident therapists qualified in marriage counselling, addictions',
  },
  {
    name: 'Cancer Care',
    desc: 'Intensive care for cancer patients we offer chemo, surgery, and rehabilitation',
  },

  {
    name: 'Labor & Delivery',
    desc: 'Gentle care during labor and safe delivery to nursing the newborn and mother',
  },

  {
    name: 'Assisted Living',
    desc: 'Our nursing home is a sanctuary for your loved one thanks to qualified nurses',
  },
];

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Medical Services</h2>
          <p className="text_para text-center">
            We offer the following services:
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
    lg:mt-[55px]"
        >
          {servicesList.map((item, index) => (
            <ServicesCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

<section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center">Our Medical Services</h2>
      <p className="text_para text-center">We offer the following services:</p>
    </div>
    <Services />
  </div>
</section>;
