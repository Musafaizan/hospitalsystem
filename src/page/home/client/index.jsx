import './style.css';
import hp1 from '../../../assets/hp1.png';
import hp2 from '../../../assets/hp2.png';
import hp3 from '../../../assets/hp3.png';
import hp4 from '../../../assets/hp4.png';
import hp5 from '../../../assets/hp5.png';

const clientLogos = [hp1, hp2, hp3, hp4, hp5];

const ClientsMarquee = () => {
  // Duplicate the list once so translateX(-50%) loops seamlessly
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="clients-marquee-section">
      <div className="clients-marquee-heading">
        <h2>
          Brands We've <span>Worked With</span>
        </h2>
        <p className="clients-marquee-subheading">
          A few of the companies we've partnered with to bring their ideas to life.
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