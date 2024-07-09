import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="productItem">
        <div className="thumbnail">
          <Link to="#" className="thumbnailLink">
            <img src={product.thumnailImageUrl} alt="productImage" />
          </Link>
          <div className="buttonBox">
            <span className="cart" />
          </div>
        </div>
        <div className="description">
          <div className="name">
            <Link to="" className="itemLink">
              <span className="itemName">{product.productName}</span>
            </Link>
          </div>
          <ul className="spec">
            <div className="discountRate">{product.discountRate}%</div>
            <li className="salePrice">
              <span>
                <span>{product.discountPrice.toLocaleString()}원</span>
              </span>
            </li>
            <li className="productSummary">
              <span>
                <span>92.5 SILVER</span>
              </span>
            </li>
            <li className="originalPrice">
              <span>
                <span>{product.price.toLocaleString()}원</span>
              </span>
            </li>
            <li className="color">
              <span className="itemColorSpan">
                <div className="itemColor">
                  <span className="colorChips" />
                </div>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Item;
