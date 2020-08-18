import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB406900867_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="AmazonBasics Reusable, Silicone, Non-Stick Baking Cups Liners - Pack of 12"
          price={7.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71kRlcrwKDL._AC_UL320_.jpg"
        />
        <Product
          id="12321347"
          title="AmazonBasics Grip Kit for Nintendo Switch Joy-Con Controllers - Red"
          price={11.25}
          rating={5}
          image="https://m.media-amazon.com/images/I/61l1BXNnl+L._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321349"
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD"
          price={1199.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
        />
        <Product
          id="12321387"
          title="Apple iPad 9.7 inches with WiFi 32GB- Space Gray (2017 Model) 5th Generation"
          price={235.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71iCsEpE-xL._AC_UY218_.jpg"
        />
        <Product
          id="12321340"
          title="DJI Mavic Mini - Drone FlyCam Quadcopter UAV with 2.7K Camera 3-Axis Gimbal GPS 30min Flight Time"
          price={399.0}
          rating={2}
          image="https://m.media-amazon.com/images/I/71Rl8Rfd8vL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321897"
          title="Garmin Forerunner 235, GPS Running Watch, Black/Gray"
          price={149.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
