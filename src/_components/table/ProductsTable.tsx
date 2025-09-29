import { memo } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../src/_data/products';

import {
  FaHashtag,
  FaTag,
  FaPalette,
  FaDollarSign,
  FaBox,
  FaClipboardList,
} from 'react-icons/fa';

import './ProductsTable.css';

interface ComponentProps {
  products: Product[];
}

function ProductsTable({ products }: ComponentProps) {
  return (
    <div className='table'>
      <div className='table-heading'>
        <div className='table-heading-cell'>
          <span className='table-heading-cell-icon'>
            <FaHashtag />
          </span>

          <p className='table-heading-cell-value'>ID</p>
        </div>

        <div className='table-heading-cell'>
          <span className='table-heading-cell-icon'>
            <FaTag />
          </span>

          <p className='table-heading-cell-value'>Name</p>
        </div>

        <div className='table-heading-cell'>
          <span className='table-heading-cell-icon'>
            <FaBox />
          </span>

          <p className='table-heading-cell-value'>Type</p>
        </div>

        <div className='table-heading-cell'>
          <span className='table-heading-cell-icon'>
            <FaClipboardList />
          </span>

          <p className='table-heading-cell-value'>Status</p>
        </div>

        <div className='table-heading-cell'>
          <span className='table-heading-cell-icon'>
            <FaPalette />
          </span>

          <p className='table-heading-cell-value'>Color</p>
        </div>

        <div className='table-heading-cell'>
          <span className='table-heading-cell-icon'>
            <FaDollarSign />
          </span>

          <p className='table-heading-cell-value'>Price</p>
        </div>
      </div>

      <div className='table-content'>
        {products?.map((product) => (
          <div
            key={product.id}
            className='table-content-row'
          >
            <p className='row-id row-cell'>{product.id}</p>

            <Link
              to={`/products/${product.name}`}
              className='row-name row-cell'
            >
              {product.name}
            </Link>

            <p className='row-type row-cell'>{product.type}</p>

            <p
              className={`row-status row-cell ${
                product.status === 'In stock'
                  ? 'row-status-stock'
                  : product.status === 'Not in stock'
                  ? 'row-status-no-stock'
                  : 'row-status-stock-on-the-way'
              }`}
            >
              {product.status}
            </p>

            <p className='row-color row-cell'>{product.color}</p>

            <p className='row-price row-cell'>
              ${product.price_per_quantity} / item
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ProductsTable);
