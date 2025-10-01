import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../_context/cart/cartSlice';
import type { RootState } from '../../_context/store';

import { FaRedhat, FaShirt } from 'react-icons/fa6';
import { BsSunglasses } from 'react-icons/bs';
import { GiSleevelessJacket, GiRunningShoe } from 'react-icons/gi';
import { PiPantsFill } from 'react-icons/pi';
import { IoMdWatch } from 'react-icons/io';

import './CartBody.css';

export default function CartBody() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const getProductImage = (type: string) => {
    switch (type.toLowerCase().trim()) {
      case 'hat':
        return <FaRedhat />;
      case 'shirt':
        return <FaShirt />;
      case 'sunglasses':
        return <BsSunglasses />;
      case 'jacket':
        return <GiSleevelessJacket />;
      case 'shoes':
        return <GiRunningShoe />;
      case 'pants':
        return <PiPantsFill />;
      case 'watch':
        return <IoMdWatch />;
      default:
        return 'No image was found for this product type...';
    }
  };

  return (
    <div className='cart-body-container'>
      {cartItems.length > 0 ? (
        <React.Fragment>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className='cart-body-row'
            >
              <div className='cart-body-image-container'>
                <span className='cart-body-product-image'>
                  {getProductImage(item.type.toLowerCase().trim())}
                </span>
              </div>

              <div className='cart-body-details-container'>
                <p className='cart-body-product-name'>
                  {item.name}&nbsp;
                  <span className='cart-body-product-type'>({item.type})</span>
                </p>

                <p className='cart-body-product-id'>ID: {item.id}</p>

                <div
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <p className='cart-body-product-color'>
                    Color: {item.color} |
                  </p>

                  <p className='cart-body-product-status'>
                    Status:
                    <span
                      className={`cart-body-product-status-tag ${
                        item.status === 'In stock'
                          ? 'cart-body-product-status-stock'
                          : item.status === 'Not in stock'
                          ? 'cart-body-product-status-no-stock'
                          : 'cart-body-product-status-stock-on-the-way'
                      }`}
                    >
                      {item.status}
                    </span>
                  </p>
                </div>
              </div>

              <div className='cart-body-quantity-container'>
                <button
                  type='button'
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className='cart-body-quantity-decrease'
                >
                  -
                </button>

                <span className='cart-body-quantity-tag'>{item.quantity}</span>

                <button
                  type='button'
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className='cart-body-quantity-increase'
                >
                  +
                </button>
              </div>

              <p className='cart-body-product-price-tag'>
                $ {item.price_per_quantity}
              </p>

              <button
                type='button'
                onClick={() => dispatch(removeFromCart(item.id))}
                className='cart-body-remove-product'
              >
                Remove Item
              </button>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <div
          style={{
            justifyContent: 'center',
          }}
          className='cart-body-row'
        >
          <p className='cart-body-empty-msg'>The cart is currently empty</p>
        </div>
      )}
    </div>
  );
}
