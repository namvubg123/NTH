import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faBox,
  faCartShopping,
  faHeadphones,
  faLaptop,
  faPhone,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
import styles from './Header.module.scss';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollstyle, setScrollstyle] = useState('');
  const UserName = sessionStorage.getItem('User');
  const SetUserName = JSON.parse(UserName);

  const handleScroll = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      setScrollstyle('scrollstyle');
    } else {
      setScrollstyle('');
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, [isLoggedIn]);

  const classes = cx('wrapper', { scrollstyle });

  return (
    <div className={classes}>
      <div className={cx('cps-container')}>
        <div className={cx('header')}>
          <div className={cx('logo')}>
            <Link to="/">
              <img src={logo} alt="" className={cx('img-logo')} />
            </Link>
            <div className={cx('text')}>
              <h3>NTH MOBILE</h3>
            </div>
          </div>
          <div className={cx('nav')}>
            <div className={cx('search')}>
              <input type="text" placeholder="Search" className={cx('input-search')} />
              <button className={cx('btn-search')}>
                <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
              </button>
            </div>
            <div className={cx('nav-menu')}>
              <Link to="/phone" className={cx('menu')}>
                <i className={cx('phone')}>
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                <p className={cx('title')}>Điện thoại</p>
              </Link>
              <Link to="/laptop" className={cx('menu')}>
                <i className={cx('phone')}>
                  <FontAwesomeIcon icon={faLaptop} />
                </i>
                <p className={cx('title')}>Laptop</p>
              </Link>
              <Link to="/accessories" className={cx('menu')}>
                <i className={cx('phone')}>
                  <FontAwesomeIcon icon={faHeadphones} />
                </i>
                <p className={cx('title')}>Phụ kiện</p>
              </Link>
              <Link to="/old" className={cx('menu')}>
                <i className={cx('phone')}>
                  <FontAwesomeIcon icon={faBox} />
                </i>
                <p className={cx('title')}>Hàng cũ</p>
              </Link>
              <Link to="/cart" className={cx('menu')}>
                <i className={cx('phone')}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </i>
                <p className={cx('title')}>Giỏ hàng</p>
              </Link>
              <Link to={isLoggedIn ? '/user' : '/login'} className={cx('menu')}>
                <i className={cx('phone')}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <p className={cx('title')}>{isLoggedIn && SetUserName ? SetUserName.username : 'Đăng nhập'}</p>
              </Link>
            </div>
          </div>
          <div className={cx('contact')}>
            <button className={cx('btn-contact')}>
              <FontAwesomeIcon className={cx('icon-contact')} icon={faFacebook} />
            </button>
            <button className={cx('btn-contact')}>
              <FontAwesomeIcon className={cx('icon-contact')} icon={faTwitter} />
            </button>
            <button className={cx('btn-contact')}>
              <FontAwesomeIcon className={cx('icon-contact')} icon={faGoogle} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
