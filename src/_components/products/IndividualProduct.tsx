import { useParams } from 'react-router-dom';

export default function IndividualProduct() {
  const { productName } = useParams();

  return <div>IndividualProduct code name: {productName}</div>;
}
