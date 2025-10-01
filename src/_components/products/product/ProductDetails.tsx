import { useState } from 'react';
import type { Product } from '../../../_data/products';

import { addToCart } from '../../../_context/cart/cartSlice';
import { useDispatch } from 'react-redux';

import '../ProductPage.css';

const sizes = [
  {
    id: 'extra-small',
    value: 'extra-small',
    label: 'Extra Small',
  },
  {
    id: 'small',
    value: 'small',
    label: 'Small',
  },
  {
    id: 'medium',
    value: 'medium',
    label: 'Medium',
  },
  {
    id: 'large',
    value: 'large',
    label: 'Large',
  },
  {
    id: 'extra-large',
    value: 'extra-large',
    label: 'Extra Larga',
  },
];

export default function ProductDetails({
  currentProduct,
}: {
  currentProduct: Product | undefined;
}) {
  const [activeSizeBtn, setActiveSizeBtn] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleActiveSizeBtn = (value: string) => {
    setActiveSizeBtn(value);
  };

  return (
    <div className='product-details-container'>
      <span className='product-details-type'>{currentProduct?.type}</span>

      <div
        style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
        }}
      >
        <h3 className='product-details-name'>{currentProduct?.name}</h3>

        <span
          className={`product-details-status ${
            currentProduct?.status === 'In stock'
              ? 'product-details-status-stock'
              : currentProduct?.status === 'Not in stock'
              ? 'product-details-status-no-stock'
              : 'product-details-status-stock-on-the-way'
          }`}
        >
          {currentProduct?.status}
        </span>
      </div>

      <span className='product-details-price'>
        ${currentProduct?.price_per_quantity}
      </span>

      <p className='product-details-about'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        dignissimos temporibus, quo dolorem voluptate non ullam tenetur dolor,
        quia repellendus necessitatibus, adipisci nesciunt consectetur assumenda
        aliquam sapiente vero autem aspernatur pariatur fugiat ea dicta
        laudantium quae. Illo esse illum facilis quidem iste expedita
        consequuntur tempora! Voluptatum reiciendis culpa incidunt? Ipsa.
      </p>

      <div
        style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <p className='product-details-sizes'>Sizes</p>

        <div className='sizes-container'>
          {sizes.map((btn) => (
            <button
              type='button'
              key={btn.id}
              value={btn.value}
              onClick={() => handleActiveSizeBtn(btn.value)}
              className={`size-btn ${
                btn.value === activeSizeBtn ? 'size-btn-active' : ''
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type='button'
        onClick={() => {
          if (currentProduct) {
            dispatch(addToCart(currentProduct));
            alert(
              `The product with the id ${currentProduct?.id} and the name ${currentProduct?.name} was successfully added to the cart!`
            );
          } else {
            alert('No product for submission!');
          }
        }}
        className='add-to-cart-btn'
      >
        Add to Cart
      </button>
    </div>
  );
}
