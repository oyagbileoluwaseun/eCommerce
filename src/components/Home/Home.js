import React from 'react';
import { Link } from "react-router-dom";
import image from '../../assets/images/image.gif';
import './Home.css';

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="zoom-right col-xl-6 col-lg-6 col-md-5 col-sm-11 col-xs-11">
          <p className="end-to-end-text">
            End-to-end E-commerce <br/>
            Processes Management.</p>
          <p className="fs-4 ecommerce-text">Click on the Products button or Cart button to
            access the E-commerce portal</p>
          <div className="container-fluid d-flex">
            <Link to='/products'>
              <button type="button" className="btn btn-outline-primary product-btn">Products</button>
            </Link>
            <Link to='/cart'>
              <button type="button" className="btn btn-outline-primary cart-btn">Cart <i class="fa fa-shopping-cart" aria-hidden="true"/></button>
            </Link>
          </div>
        </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-11">
            <img className="ecommerce-image text-center" src={image} alt=" " />
          </div>
      </div>
    </div>
  );
}

export default Home;
