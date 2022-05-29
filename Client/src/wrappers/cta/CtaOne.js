import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { formatter } from "../../helpers/product";
const CtaOne = ({ spaceTopClass, backgroundImage }) => {
  const [product, setProduct] = useState();
  const fetchData = async () => {
        let results = await axios.get('http://localhost:5000/');
        results = results.data;
        setProduct(results.new);            
  };
  React.useEffect(() => {
    fetchData();
  },[]);
  return (
    <div className={`save-money-area ${spaceTopClass ? spaceTopClass : ""}`}>
      <div className="container">
        { product && 
          <div
            className="bg-img pt-100 pb-100"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`
            }}
          >
            {/* <div className="save-money-content">
              <h2>{product[0].name}</h2>
              <div className="save-money-btn">
                <Link to={"/products/"+product[0]._id}>
                  {formatter.format(product[0].price)}
                </Link>
              </div>
            </div> */}
          </div>
        }
      </div>
    </div>
  );
};

CtaOne.propTypes = {
  backgroundImage: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CtaOne;
