import React from 'react';
import { Link,useNavigate } from 'react-router-dom';



const Services = () => {

    const navigate=useNavigate()
    const services = [
        {
        id: 1,
        title: 'Refrigerator Repair',
        description: 'We repair refrigerant leaks, faulty compressors, thermostat issues, and more to keep your food fresh and safe.',
        repairs: ['Cooling system fixes', 'Door seal replacements', 'Defrost system repairs'],
        image: 'fridge-repair.jpg', // Replace with your actual image path
        servicePage:'/refrigerators'
        },
        {
        id: 2,
        title: 'Blender & Food Processor Repair',
        description: 'We fix blade assemblies, motor issues, and electrical faults to get your blending appliances running smoothly again.',
        repairs: ['Motor replacements', 'Blade sharpening/fixing', 'Power switch repairs'],
        image: 'blender-repair.jpg',
        servicePage:'/blenders'
        },
        {
        id: 3,
        title: 'Washing Machine & Dryer Repair',
        description: 'From leaks to spin cycle problems, we handle all laundry machine issues to ensure your clothes come out clean every time.',
        repairs: ['Drum and belt fixes', 'Water pump replacements', 'Control panel repairs'],
        image: 'washing-machine-repair.jpg',
        servicePage:'/laundryMachines'
        },
        {
        id: 4,
        title: 'Microwave & Oven Repair',
        description: 'We fix heating elements, control boards, and door seals to ensure safe and efficient cooking.',
        repairs: ['Magnetron replacements', 'Thermostat calibration', 'Door latch fixes'],
        image: 'microwave-repair.jpg',
        servicePage:'/microwaves&ovens'
        },
        {
        id: 5,
        title: 'Cooker & Stove Repair',
        description: 'Whether gas or electric, we repair faulty burners, ignition issues, and temperature control problems.',
        repairs: ['Burner replacements', 'Ignition system fixes', 'Wiring and switch repairs'],
        image: 'cooker-repair.jpg',
        servicePage:'/cookers&stoves'
        },
        {
        id: 6,
        title: 'Vacuum Cleaner Repair',
        description: 'We fix motor issues, blockages, and brush roll problems to restore your vacuum\'s cleaning power.',
        repairs: ['Motor replacements', 'Hose and filter cleaning', 'Power cord fixes'],
        image: 'vacuum-repair.jpg',
        servicePage:'/vacuumCleaners'
        },
        {
        id: 7,
        title: 'Electric Kettle & Toaster Repair',
        description: 'We repair heating elements, switches, and wiring to get your small kitchen appliances working again.',
        repairs: ['Heating element replacement', 'Thermostat adjustments', 'Power base repairs'],
        image: 'kettle-repair.jpg',
        servicePage:'/smallAppliances'
        }
    ];




  
    const handleclickPage=(servicePage)=>{
        navigate(`${servicePage}`)

    }

  return (
    <div className="services-page">
      <header className="services-header">
        <h1>DEX Repairs - Professional Appliance Services</h1>
        <p>Expert repairs for all your household appliances. Fast, reliable service with guaranteed results.</p>
      </header>

      <section className="services-container">
        {services.map(service => (
          <div key={service.id} className="service-card" onClick={()=>handleclickPage(service.servicePage)}>
            <div className="service-image">
              {/* Replace with your actual image component or img tag */}
              <div className="image-placeholder">{service.title}</div>
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="repairs-list">
                {service.repairs.map((repair, index) => (
                  <li key={index}>{repair}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="why-choose-us">
        <h2>Why Choose DEX Repairs?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Expert Technicians</h3>
            <p>Certified professionals with years of experience</p>
          </div>
          <div className="benefit">
            <h3>Fast & Reliable</h3>
            <p>Same-day repairs available for most appliances</p>
          </div>
          <div className="benefit">
            <h3>Affordable Pricing</h3>
            <p>Competitive rates with no hidden fees</p>
          </div>
          <div className="benefit">
            <h3>Warranty on Repairs</h3>
            <p>Peace of mind with guaranteed service</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;