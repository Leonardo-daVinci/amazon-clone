import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__containerImg"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          {/* Product Component*/}
          <Product
            id="1234321"
            title="The Lean Startup"
            price={29.99}
            image="https://th.bing.com/th/id/R.9de82ef2da08008a74aa3afbec9f3cf9?rik=zaas85eGaea9BQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-T-d3JPMr-Uk%2fUPshLuidy6I%2fAAAAAAAAFbU%2fvOiHd0qgnC4%2fs1600%2flean-startup_book-cover.jpeg&ehk=O90jlIAsVo0HEm3VJD7I%2b0%2fbWRp8HxsmQwJdugopPLU%3d&risl=&pid=ImgRaw&r=0"
            rating={4}
          />
          <Product
            id="48926816"
            title="Samsung Curved LED monitor"
            price={199.99}
            rating={5}
            image="https://image-us.samsung.com/SamsungUS/pim/migration/computing/monitors/curved/lc27f398fwnxza/Pdpdefault-lc27f398fwnxza-600x600-C1-052016.jpg?$product-details-jpg$"
          />
          <Product
            id="97986213"
            title="Amazon Echo Smart Speaker with Alexa, Charcoal fabric"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SX425_.jpg"
          />
        </div>

        <div className="home__row">
          {/* <Product />
          <Product /> */}
        </div>

        <div className="home__row">{/* Product Component*/}</div>
      </div>
    </div>
  );
}

export default Home;
