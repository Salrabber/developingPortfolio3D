import "../scss/lama.scss";
import { MapChart } from "../components/libs";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CanvasScene, Cube, Development, Illustration, MySphere, ProductDesign, Socials, ThreeLogo, WebDesign } from "../components/Canvas";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="wrapper">
          <nav className="menu">
            <a href="/">
              <img className="lama-logo" src="./lamaImages/logo.png" />
            </a>
            <ul className="menu__list">
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Home
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Studio
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="/developingPortfolio3D/matrix">
                  Cubes
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="navbar-box">
            <img className="search__img" src="./lamaImages/search.png" />
            <button className="search__btn">Hire now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Navbar />
        <div className="hero__inner">
          <div className="hero__info">
            <h2 className="hero__title">Think. Make. Solve.</h2>
            <div className="hero__sub">
              <img className="hero__line" src="./lamaImages/line.png" />
              <h2 className="hero__sub-text">What we do</h2>
            </div>
            <p className="hero__text">
              we enjoy creating delightful, human-centered digital experiences.
            </p>
            <button className="hero__btn">Learn More</button>
          </div>
          <div className="hero__visual">
            <MySphere />
            <img className="hero__visual-img" src="./lamaImages/moon.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Who = () => {
  return (
    <section className="who">
      <div className="container">
        <div className="hero__inner who__inner">
          <div className="hero__visual">
            <CanvasScene item={<Cube />} />
          </div>
          <div className="hero__info">
            <h2 className="hero__title">Think outside the square space</h2>
            <div className="hero__sub">
              <img className="hero__line" src="./lamaImages/line.png" />
              <h2 className="hero__sub-text">Who we are</h2>
            </div>
            <p className="hero__text">
              a creative group of designers and developers with a passion for
              the arts
            </p>
            <button className="hero__btn who__btn">See our works</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Works = () => {

  const [work, setWork] = useState('');

  const sw = (item) =>{
    switch(item){
      case 'Web Design':
        return <WebDesign />
      break
      case 'Development':
        return <Development />
      break
      case 'illustration':
        return <Illustration />
      break
      case 'Product Design':
        return <ProductDesign />
      break
      case 'Social Media':
        return <Socials />
      break

      default:
        return <ThreeLogo />
    }
  }

  return (
    <section className="works">
      <div className="container">
        <div className="works__inner">
          <div className="works__info">
            <ul className="works__list">
              <li className="works__list-item" onClick={() => setWork('Web Design')}>Web Design</li>
              <li className="works__list-item" onClick={() => setWork('Development')}>Development</li>
              <li className="works__list-item" onClick={() => setWork('illustration')}>illustration</li>
              <li className="works__list-item" onClick={() => setWork('Product Design')}>Product Design</li>
              <li className="works__list-item" onClick={() => setWork('Social Media')}>Social Media</li>
            </ul>
          </div>
          <div className="works__model">
            {sw(work)}
          </div>
        </div>
      </div>
    </section>
  );
};
export const Contact = () => {
  const [success, setSucces] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    text: "",
  });

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qvkz3xa",
        "template_tz8sd95",
        ref.current,
        "r34EfAAtZoO8pRes4"
      )
      .then((res) => {
        console.log(res.text);
        setSucces(true);
        setInputValue({
          name: "",
          email: "",
          text: "",
        });
      }),
      (err) => {
        console.log(err.text);
        setSucces(false);
      };
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__box">
            <form className="contact__form" ref={ref} onSubmit={handleSubmit}>
              <h2 className="contact__form-title">Contact Us</h2>
              <input
                className="contact__form-input"
                placeholder="Name"
                name="name"
                autoComplete="off"
                value={inputValue.name}
                onChange={(e) =>
                  setInputValue({...inputValue, name: e.target.value})
                }
              />
              <input
                className="contact__form-input"
                placeholder="Email"
                name="email"
                autoComplete="off"
                value={inputValue.email}
                onChange={(e) => setInputValue({...inputValue, email: e.target.value})}
              />
              <textarea
                className="contact__form-text"
                placeholder="Write your message"
                name="message"
                rows={10}
                autoComplete="off"
                value={inputValue.text}
                onChange={(e) => setInputValue({...inputValue, text: e.target.value})}
              />
              <button className="contact__form-btn" type="submit">
                Send
              </button>
              {success && <p>Succeed</p>}
            </form>
          </div>
          <div className="map">
            <MapChart />
          </div>
        </div>
      </div>
    </section>
  );
};
