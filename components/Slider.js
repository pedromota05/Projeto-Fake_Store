import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from 'next/image';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = ({teste_carousel}) => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div lang="pt-br" className="row no-gutters">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <h3 className="text-center">
          <span className="heading float-left w-100">Featured Products</span>
        </h3>
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {teste_carousel && teste_carousel.length > 0
              ? teste_carousel.map((user) => {
                  return (
                    <div key={user.id}>
                      <div id="featuredProducts" className="item float-left w-100">
                        <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                            <a className="product float-left">
                              <span className="image text-center d-flex justify-content-center align-itemns-center">
                                <Image id={"img" + user.id} src={user.image} alt={user.title} title={user.title} width={350} height={250} style={{width: '150px'}} priority/>
                              </span>
                              <span className="w-100 text-center mt-1">
                                <h5 className="brand text-capitalize float-left">
                                  {user.category}
                                </h5>
                                <span className="name">{user.title}</span>
                                <strong className="itemPrice p-0">
                                  Price: ${user.price}
                                </strong>
                              </span>
                            </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default Slider;