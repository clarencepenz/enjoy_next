/* eslint-disable @next/next/no-img-element */
import React from "react";

const Product = () => {
  return (
    <div className="product_wrapper" id="product">
      <br />
      <br />
      <img
        src="/img/product-shape1.png"
        className="img-fluid product_shape1"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product_heading">
              <h2 className="title">Products</h2>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt_50">
            <div
              className="product_box"
              data-aos="fade-right"
              style={{ backgroundImage: `url(img/product-bg.png)` }}
            >
              <div className="product_img">
                <img
                  src="/img/product-icon1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="product_content">
                <h4>Product 01</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sed nulla dui bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt_50">
            <div
              className="product_box"
              data-aos="fade-down"
              style={{ backgroundImage: `url(img/product-bg.png)` }}
            >
              <div className="product_img">
                <img
                  src="/img/product-icon1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="product_content">
                <h4>Product 01</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sed nulla dui bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt_50">
            <div
              className="product_box"
              data-aos="fade-left"
              style={{ backgroundImage: `url(img/product-bg.png)` }}
            >
              <div className="product_img">
                <img
                  src="/img/product-icon1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="product_content">
                <h4>Product 01</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sed nulla dui bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt_50">
            <div
              className="product_box"
              data-aos="fade-right"
              style={{ backgroundImage: `url(img/product-bg.png)` }}
            >
              <div className="product_img">
                <img
                  src="/img/product-icon1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="product_content">
                <h4>Product 01</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sed nulla dui bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt_50">
            <div
              className="product_box"
              data-aos="fade-down"
              style={{ backgroundImage: `url(img/product-bg.png)` }}
            >
              <div className="product_img">
                <img
                  src="/img/product-icon1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="product_content">
                <h4>Product 01</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sed nulla dui bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt_50">
            <div
              className="product_box"
              data-aos="fade-left"
              style={{ backgroundImage: `url(img/product-bg.png)` }}
            >
              <div className="product_img">
                <img
                  src="/img/product-icon1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="product_content">
                <h4>Product 01</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sed nulla dui bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
