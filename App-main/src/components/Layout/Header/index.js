import { Badge, Button, Checkbox, Drawer, Form, Input, message, Table, Typography } from 'antd';

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
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
import styles from './Header.module.scss';
import Cookies from 'js-cookie';
import { getCart } from '../../api/cart';

const cx = classNames.bind(styles);
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollstyle, setScrollstyle] = useState('');
  const UserName = sessionStorage.getItem('User');
  const SetUserName = JSON.parse(UserName);

  // const handleScroll = () => {
  //   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
  //     setScrollstyle('scrollstyle');
  //   } else {
  //     setScrollstyle('');
  //   }
  // };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    // window.onscroll = handleScroll;
    // return () => {
    //   window.onscroll = null;
    // };
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
              <AppCart />
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

function AppCart() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      getCart(token).then((res) => {
        console.log(res);
        setCartItems(res.data.data.items);
      });
    }
  }, []);
  const onConfirmOrder = (values) => {
    console.log({ values });
    setCartDrawerOpen(false);
    setCheckoutDrawerOpen(false);
    message.success('Your order has been placed successfully.');
  };

  return (
    <div>
      <Badge
        onClick={() => {
          setCartDrawerOpen(true);
        }}
        className={cx('soppingCartIcon')}
      >
        <FontAwesomeIcon className={cx('icon-Cart')} icon={faCartShopping} />
        <p className={cx('title')}>Giỏ hàng</p>
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
        title="Giỏ hàng của bạn"
        contentWrapperStyle={{ width: 500 }}
      >
        <Table
          pagination={false}
          rowKey="id"
          dataSource={cartItems}
          columns={[
            {
              title: 'Tên sản phẩm',
              dataIndex: 'productName',
            },
            {
              title: 'Giá',
              dataIndex: 'price',
              render: (value) => {
                return (
                  <span>
                    {`${value.toLocaleString('vi-VN', {
                      currency: 'VND',
                    })}`}
                    đ
                  </span>
                );
              },
            },
            {
              title: 'Số lượng',
              dataIndex: 'quantity',
            },
            {
              title: 'Tổng',
              dataIndex: 'total',
              render: (value) => {
                return (
                  <span>
                    {`${value.toLocaleString('vi-VN', {
                      currency: 'VND',
                    })}`}
                    đ
                  </span>
                );
              },
            },
          ]}
          summary={(data) => {
            const total = data.reduce((pre, current) => {
              return pre + current.total;
            }, 0);
            return (
              <span>
                Tổng thiệt hại:{'  '}
                {`${total.toLocaleString('vi-VN', {
                  currency: 'VND',
                })}`}
                đ
              </span>
            );
          }}
        />
        <Button
          onClick={() => {
            setCheckoutDrawerOpen(true);
          }}
          type="primary"
        >
          Thanh toán
        </Button>
      </Drawer>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => {
          setCheckoutDrawerOpen(false);
        }}
        title="Confirm Order"
      >
        <Form onFinish={onConfirmOrder}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter your full name',
              },
            ]}
            label="Full Name"
            name="full_name"
          >
            <Input placeholder="Enter your full name.." />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
            label="Email"
            name="your_name"
          >
            <Input placeholder="Enter your email.." />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter your address',
              },
            ]}
            label="Address"
            name="your_address"
          >
            <Input placeholder="Enter your full address.." />
          </Form.Item>
          <Form.Item>
            <Checkbox defaultChecked disabled>
              Cash on Delivery
            </Checkbox>
          </Form.Item>
          <Typography.Paragraph type="secondary">More methods coming soon</Typography.Paragraph>
          <Button type="primary" htmlType="submit">
            {' '}
            Confirm Order
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}

export default Header;
