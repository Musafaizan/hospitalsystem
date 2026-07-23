import './style.css';
import { clientLogos, clientContent } from '../../data/data';

const ClientsMarquee = () => {
 
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="clients-marquee-section">
      <div className="clients-marquee-heading">
        <h2>
          {clientContent.title}<span>{clientContent.titleAccent}</span>
        </h2>
        <p className="clients-marquee-subheading">
          {clientContent.subheading}
        </p>
      </div>

      <div className="clients-marquee-wrapper">
        <div className="clients-marquee-track">
          {logos.map((logo, index) => (
            <div className="clients-marquee-item" key={index}>
              <img
                src={logo}
                alt={`Client logo ${(index % clientLogos.length) + 1}`}
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
