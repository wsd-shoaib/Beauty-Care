import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-area" id="home">
      <div className="hero-left">
        <h2>Start your journey & Feel Beautiful Every Day</h2>
        <p>
          Welcome to Beauty Care your destination for beauty, elegance, and
          care. Book your appointment now and get the look you love!
        </p>
        <div>
          <a href="#booknow">
            <button className="button">Get Started</button>
          </a>
          <a href="#service">
            <button className="button">View Services</button>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img src="/banner.png" alt="Banner" />
      </div>
    </section>
  );
};

export default Hero;
