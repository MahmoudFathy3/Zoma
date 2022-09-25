import React, { useEffect } from "react";
import "./About.css";

const About = ({ HandlerFooter }) => {
  useEffect(() => {
    return HandlerFooter(true);
  }, [HandlerFooter]);

  return (
    <div className="about">
      <div className="container">
        <div className="about-title">
          <h3>Welcome to Gaming Shop</h3>
          <span>the gamer's marketplace</span>
        </div>

        <div className="about-info">
          <div className="about-left">
            <h4>Hey There!</h4>
            <p>
              GamingShop.ca is a Canadian initiative, based in Montreal that
              facilitates access to new and used top-quality gaming gear.
            </p>
          </div>
          <div className="about-right">
            <img src="img/Ab1.webp" alt="" />
          </div>
        </div>

        <div className="about-info info-reverse">
          <div className="about-left">
            <h4>Let's Rock!</h4>
            <p>
              Do you really want to shop your gaming stuff on the same website
              your mom uses to buy her fancy socks? We're passionate about
              gaming, just as you are! Join our alliance and let's win this
              game!
            </p>
          </div>
          <div className="about-right">
            <img src="img/Ab2.webp" alt="" />
          </div>
        </div>

        <div className="about-info" style={{ backgroundColor: "black" }}>
          <div className="about-left" style={{ width: "400px" }}>
            <h4 style={{ color: "white" }}>
              The latest, greatest and hard to find
            </h4>
            <p style={{ color: "white" }}>
              Our team is constantly on the lookout for, not only the latest
              games and consoles, but specifically the ones that are hard to
              find. We do the hard work so you don't have to. Get us on your
              team, you’ll be sure to find everything your next game needs!
            </p>
          </div>
          <div className="about-right">
            <img src="img/Ab3.webp" alt="" />
          </div>
        </div>

        <div className="about-info info-reverse">
          <div className="about-left">
            <h4>Tied to your old equipement?</h4>
            <p>
              If your old console prevents you from playing online with your
              friends, sell it. If you played that game over and over and saw
              all the possible endings, sell it. If it can be resold at a fair
              price to our customers, we will get it off your hands!
            </p>
          </div>
          <div className="about-right">
            <img src="img/Ab4.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
