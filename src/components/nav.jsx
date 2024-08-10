import react from 'React';
import Logo from '../assets/images/logo.svg';

function Nav() {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'></div>
      <ul className='list-styled'>
        <li>
        <img src={Logo} alt="Apple" />
        </li>
        <li>
          <a className='link-styled'>Store</a>
        </li>
        <li>
          <a className='link-styled'>Mac</a>
        </li>
        <li>
          <a className='link-styled'>iPad</a>
        </li>
        <li>
          <a className='link-styled'>iPhone</a>
        </li>
        <li>
          <a className='link-styled'>Watch</a>
        </li>
        <li>
          <a className='link-styled'>Airpods</a>
        </li>
        <li>
          <a className='link-styled'>Tv & Home</a>
        </li>
        <li>
          <a className='link-styled'>Entertainment</a>
        </li>
        <li>
          <a className='link-styled'>Accessories</a>
        </li>
        <li>
          <a className='link-styled'>Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
