import { FaRedhat, FaShirt } from 'react-icons/fa6';
import { BsSunglasses } from 'react-icons/bs';
import { GiSleevelessJacket, GiRunningShoe } from 'react-icons/gi';
import { PiPantsFill } from 'react-icons/pi';
import { IoMdWatch } from 'react-icons/io';

import '../ProductPage.css';

export default function ProductImage({
  productType,
}: {
  productType: string | undefined;
}) {
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
    <div className='product-image-container'>
      <span className='product-image'>
        {productType && getProductImage(productType.toLowerCase().trim())}
      </span>
    </div>
  );
}
