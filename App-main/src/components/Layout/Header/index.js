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
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
import styles from './Header.module.scss';
import Cookies from 'js-cookie';
import { getProductById, getProducts } from '../../api/products';

const cx = classNames.bind(styles);
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const UserName = sessionStorage.getItem('User');
  const SetUserName = JSON.parse(UserName);
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setShowProducts(searchTerm !== '');
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error('Error getting products:', error);
      });
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const classes = cx('wrapper');

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
              <Input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
                className={cx('input-search')}
                onChange={handleSearchChange}
              />

              <button className={cx('btn-search')}>
                <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
              </button>
              {showProducts && (
                <div className={cx('products')}>
                  <ul>
                    {searchResults.slice(0, 7).map((product) => (
                      <Link to={`/${product._id}`} key={product._id}>
                        <li>{product.name}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
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
              <Link to={isLoggedIn ? `/user/${SetUserName?._id}` : '/login'} className={cx('menu')}>
                <i className={cx('phone')}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <p className={cx('title')}>{isLoggedIn && SetUserName ? SetUserName.lastName : 'Đăng nhập'}</p>
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
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productIds = cartItems.map((item) => item.productId);
    const fetchProductData = async () => {
      let cartItemsWithProductData = [];
      for (const productId of productIds) {
        const response = await getProductById(productId);
        const cartItem = cartItems.find((item) => item.productId === productId);
        const total = cartItem.quantity * response.data.data.price;
        cartItemsWithProductData.push({
          ...cartItem,
          productName: response.data.data.name,
          price: response.data.data.price,
          total: total,
        });
      }
      setCartItems(cartItemsWithProductData);
    };
    fetchProductData();
  }, []);
  const productNumber = cartItems.length;
  // const productNumber = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleDeleteCartItem = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.productId !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const onConfirmOrder = (values) => {
    console.log({ values });
    setCartDrawerOpen(false);
    setCheckoutDrawerOpen(false);
    message.success('Đặt hàng thành công, mời bạn tiếp tục Shopping');
    localStorage.removeItem('cartItems');
    setCartItems([]);
  };

  return (
    <div>
      <Badge
        onClick={() => {
          setCartDrawerOpen(true);
        }}
        count={productNumber}
        offset={[-70, 1]}
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
                return value ? (
                  <span>
                    {`${value.toLocaleString('vi-VN', {
                      currency: 'VND',
                    })}`}
                    đ
                  </span>
                ) : null;
              },
            },
            {
              title: 'Số lượng',
              dataIndex: 'quantity',
            },
            {
              title: 'Xóa sản phẩm',
              dataIndex: 'productId',
              render: (productId) => (
                <Button type="danger" onClick={() => handleDeleteCartItem(productId)}>
                  Xóa
                </Button>
              ),
            },
            {
              title: 'Tổng',
              dataIndex: 'total',
              render: (value) => {
                console.log(value);
                return value ? (
                  <span>
                    {`${value.toLocaleString('vi-VN', {
                      currency: 'VND',
                    })}`}
                    đ
                  </span>
                ) : null;
              },
            },
          ]}
          summary={(data) => {
            const total = data.reduce((pre, current) => {
              return pre + current.total;
            }, 0);
            return (
              <span>
                Tổng :{'  '}
                {`${total.toLocaleString('vi-VN', {
                  currency: 'VND',
                })}`}
                đ
              </span>
            );
          }}
        />
        <Button
          className=""
          onClick={() => {
            setCheckoutDrawerOpen(true);
          }}
          type="primary"
          danger
        >
          Thanh toán
        </Button>
      </Drawer>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => {
          setCheckoutDrawerOpen(false);
        }}
        title="Đặt hàng"
      >
        <Form onFinish={onConfirmOrder}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Nhập tên người nhận hàng',
              },
            ]}
            label="Họ và tên"
            name="full_name"
          >
            <Input placeholder="Họ và tên" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Nhập email',
              },
            ]}
            label="Email"
            name="your_name"
          >
            <Input placeholder="Nhập email của bạn" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Nhập số điện thoại ',
              },
            ]}
            label="Số điện thoại"
            name="your_number"
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Nhập địa chỉ nhận hàng',
              },
            ]}
            label="Địa chỉ"
            name="your_address"
          >
            <Input placeholder="Nhập địa chỉ nhận hàng" />
          </Form.Item>
          <Form.Item>
            <Checkbox defaultChecked disabled>
              Thanh toán khi nhận hàng
            </Checkbox>
          </Form.Item>
          <Typography.Paragraph type="secondary">Nhớ xem kỹ lại thông tin trước khi đặt hàng nhé</Typography.Paragraph>
          <Button type="primary" danger htmlType="submit">
            {' '}
            Đặt hàng
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}

export default Header;
