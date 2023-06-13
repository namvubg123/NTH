import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../api/products';

function ProductsDetails() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (productId) getProductById(productId).then((response) => setProduct(response.data.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productId]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="w-3/4 mx-auto my-[50px] h-[100vh]">
      <h2 className="text-[22px] mb-6 font-semibold">{product.name}</h2>
      <div className="grid grid-cols-[650px_minmax(100px,_1fr)] gap-10">
        <div className="border-[2px] border-gray-100 rounded-3xl w-full h-[395px]">
          <img src={product.productIMG} alt="/" className="h-[80%] mt-[40px] ml-[25%] mb-[50px]" />
          <div>
            <div className="font-medium">
              <h3 className="text-red-500 text-[14px] font-semibold mb-2">{product.description}</h3>
              <div className="grid grid-cols-[20px_minmax(100px,_1fr)] gap-5">
                <div>
                  <i class="fa-solid fa-mobile"></i>
                </div>
                <p>Mới, đầy đủ phụ kiện từ nhà sản xuất</p>
              </div>
              <div className="grid grid-cols-[20px_minmax(100px,_1fr)] gap-5">
                <div>
                  <i class="fa-sharp fa-solid fa-box-open"></i>
                </div>
                <div>
                  <p>Điện thoại</p>
                  <p>Bộ chuyển đổi</p>
                  <p>Cáp USB Type-C</p>
                  <p>Công cụ đẩy SIM</p>
                  <p>Hướng dẫn bắt đầu nhanh</p>
                  <p>Thẻ bảo hành</p>
                  <p>Vỏ bảo vệ</p>
                </div>
              </div>
              <div className="grid grid-cols-[20px_minmax(100px,_1fr)] gap-5">
                <div>
                  <i class="fa-solid fa-shield"></i>
                </div>
                <ul>
                  <li>Bảo hành 12 tháng phần cứng + lỗi 1 đổi 1 trong 30 ngày đầu.</li>
                  <li>Phần mềm: Hỗ trợ trọn đời sản phẩm.</li>
                </ul>
              </div>
              <div className="grid grid-cols-[20px_minmax(100px,_1fr)] gap-3">
                <div>
                  <i class="fa-solid fa-money-bill"></i>
                </div>
                <p>Giá sản phẩm đã bao gồm VAT</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[24px] text-red-600 font-semibold">{product.price} VND</h3>
          <div className="border-2 border-gray-200 rounded-xl py-2 px-5 my-5">
            <p className="font-semibold mb-3">Thông số kỹ thuật</p>
            <div className="col-span-2 h-[300px] overflow-scroll font-medium">
              <table className="table-auto w-full">
                <tr>
                  <td>Kích thước màn hình:</td>
                  <td>6.6 inches</td>
                </tr>
                <tr>
                  <td>Hệ điều hành:</td>
                  <td>Android</td>
                </tr>
                <tr>
                  <td>Công nghệ màn hình:</td>
                  <td>Dynamic AMOLED 2X</td>
                </tr>
                <tr>
                  <td>Camera trước:</td>
                  <td>12MP F2.2 (Dual Pixel AF)</td>
                </tr>
                <tr>
                  <td>Camera sau:</td>
                  <td>
                    Siêu rộng: 12MP F2.2 (Dual Pixel AF) Chính: 200MP F1.7 OIS ±3° (Super Quad Pixel AF) Tele 1: 10MP
                    F4.9 (10X, Dual Pixel AF) OIS, Tele 2: 10MP F2.4 (3X, Dual Pixel AF) OIS Thu phóng chuẩn không gian
                    100X
                  </td>
                </tr>
                <tr>
                  <td>Dung lượng RAM:</td>
                  <td>8 GB</td>
                </tr>
                <tr>
                  <td>Bộ nhớ trong:</td>
                  <td>256 GB</td>
                </tr>
                <tr>
                  <td>Thẻ SIM:</td>
                  <td>2 Nano SIM hoặc 1 Nano + 1 eSIM</td>
                </tr>
                <tr>
                  <td>Tính năng màn hình:</td>
                  <td>120Hz, HDR10+, 1750 nits, Gorilla Glass Victus 2</td>
                </tr>
                <tr>
                  <td>Pin:</td>
                  <td>5.000mAh</td>
                </tr>
                <tr>
                  <td>Công nghệ sạc:</td>
                  <td>Sạc có dây: 45W có dây Sạc không dây: 15W (Qi/PMA) Chia sẻ pin không dây</td>
                </tr>
                <tr>
                  <td>Cổng sạc:</td>
                  <td>USB Type-C</td>
                </tr>
                <tr>
                  <td>Cảm biến vân tay:</td>
                  <td>Cảm biến vân tay trong màn hình</td>
                </tr>
                <tr>
                  <td>Chipset:</td>
                  <td>Snapdragon 8 Gen 2 (4 nm)</td>
                </tr>
                <tr>
                  <td>CPU:</td>
                  <td>1x3.36 GHz Cortex-X3 & 2x2.8 GHz Cortex-A715 & 2x2.8 GHz Cortex-A710 & 3x2.0 GHz Cortex-A510</td>
                </tr>
                <tr>
                  <td>GPU:</td>
                  <td>Adreno 740</td>
                </tr>
                <tr>
                  <td>Kích thước:</td>
                  <td>163.4 x 78.1 x 8.9 mm</td>
                </tr>
                <tr>
                  <td>Trọng lượng:</td>
                  <td>523g</td>
                </tr>
              </table>
            </div>
          </div>
          <Link to="/cart">
            <p className="uppercase text-[18px] font-semibold text-red-600 text-center border-2 border-red-600 rounded-2xl py-[10px] my-[10px]">
              Thêm vào giỏ hàng
            </p>
          </Link>
          <Link to="/payment">
            <p className="uppercase text-[18px] font-semibold text-white text-center bg-red-600 border-2 border-red-600 rounded-2xl py-[10px]">
              Mua ngay
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
