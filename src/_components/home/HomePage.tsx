import './HomePage.css';

export default function HomePage() {
  return (
    <div className='home-page-container'>
      <div className='home-page-hero-background-container'>
        <img
          src='./home-hero-background-edited.jpg'
          alt=''
          loading='lazy'
          className='home-page-hero-background'
        />
      </div>

      <div className='home-page-content-container'>
        <h1 className='home-page-content-heading'>
          Your&nbsp;<span>One-Stop Shop</span>&nbsp;for Everything You Need
        </h1>
      </div>
    </div>
  );
}
