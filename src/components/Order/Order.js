import React, { useState, useEffect } from 'react';

function Order() {
    
  const [prodData, setProdData] = useState({});
  const [prodItems, setProdItems] = useState([]);
  
  const fetchObj = async () => {
    const response = await fetch(`https://indapi.kumba.io/webdev/assignment`);
    const data = await response.json();
    setProdData(data);
    setProdItems(data.items);
  }
    
    useEffect(() => {
       fetchObj()
    }, []);

  return (
    <div className="bg-light">
      <h3 className="container border-bottom fw-bold">Ecommerce Products Order Page</h3>
      <p className="container mt-3 fw-bold">PRODUCT DETAILS</p>
      <h6 className="container"><span className="fw-bold">Order Id :</span> {prodData.order_id}</h6>
      <h6 className="container"><span className="fw-bold">Order Date :</span> {prodData.createdAt}</h6>
      <h3 className="fw-bold container mt-4">Products</h3>

      {
        prodItems.map((i, idx) => {
        return(
          <div className="container">
            <div className="col-md-5 mb-4">
              <div className="card border-secondary" key={idx}>
                <div className="card-body">
                  <h5 className="card-title border-bottom border-primary bg-light fw-bold">{i.name}</h5>
                  <p className="card-text"><span className="text-primary fw-bold">Category: </span>{i.category}</p>
                  <div className="d-flex ">
                    <h6 className="col-7"><span className="text-primary fw-bold">Price: </span>{i.currency} <span>{i.price}</span></h6>
                    <h6><span className="text-primary fw-bold">Product Tax: </span>{i.tax_pct} %</h6>
                  </div>
                  <button type="button" className="btn btn-outline-primary">
                  Quantity <span className="badge bg-secondary">{i.quantity}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }
      <div className="container mb-3"><button type="button" className="btn btn-primary">CheckOut Page</button></div>
    </div>
  );
}

export default Order;
