import React from 'react';

const dataTable = [
  {
    loai: 'iPhone,iPad, Samsung cũ',
    goi: 'Mặc đinh',
    doi: '10 ngày - Đổi không cần lý do',
    bh: '0 tháng',
  },
  {
    loai: 'iPhone,iPad, Samsung cũ',
    goi: '+200.000đ',
    doi: '15 ngày nếu máy gặp lỗi tự thân',
    bh: '3 tháng',
  },
  {
    loai: 'iPhone,iPad, Samsung cũ',
    goi: '+400.000đ',
    doi: '30 ngày nếu máy gặp lỗi tự thân',
    bh: '12 tháng',
  },
  {
    loai: 'iPhone,iPad, Apple Watch, Earpods mới',
    goi: '+400.000đ',
    doi: '30 ngày - Bảo hành toàn cầu theo chính sách của hãng',
    bh: '12 tháng',
  },
  {
    loai: 'Samsung công ty mới',
    goi: 'Mặc định',
    doi: 'Bảo hành theo chính sách của hãng',
    bh: '12 tháng',
  },
  {
    loai: 'Oppo, Xiaomi, Vsmart, Realme công ty mới',
    goi: 'Mặc định',
    doi: '30 ngày - Bảo hành chính hãng',
    bh: '12 tháng',
  },
];

function WarrantyPolicy(props) {
  return (
    <div className="bg-slate-100">
      <div className="max-w-[1100px] mx-auto bg-white p-20">
        <p className="text-base m-16">
          Chào mừng Quý khách !<br></br>
          Dưới đây là chi tiết thông tin bảo hành các sản phẩm, NTHmobile luôn nỗ lực để Quý khách hài lòng và tin tưởng
          khi mua hàng.
          <br></br>
          Chân thành cảm ơn và mong được phục vụ Quý khách!
        </p>
        <div>
          <h3 className="text-5xl font-sans font-semibold pt-10 text-center">Chính sách bảo hành</h3>
          <h2 className="mb-0 m-16 font-semibold text-2xl">A.Quy định bảo hành</h2>
          <div className="mb-0 m-16 font-family: ui-sans-serif text-2xl pt-3">
            <strong>1. Nội dung bảo hành</strong>
            <table className=" mt-16 border-collapse border-spacing-2 border border-slate-500 w-full mb-16">
              <thead>
                <tr>
                  <td className="border border-slate-600 p-3 font-semibold tracking-wide text-center text-2xl">
                    Loại sản phẩm
                  </td>
                  <td className="border border-slate-600 p-3 font-semibold tracking-wide text-center text-2xl">
                    Gói bảo hành
                  </td>
                  <td className="border border-slate-600 p-3 font-semibold tracking-wide text-center text-2xl">
                    Thời gian 1:Đổi:1
                  </td>
                  <td className="border border-slate-600 p-3 font-semibold tracking-wide text-center text-2xl">
                    Thời gian bảo hành
                  </td>
                </tr>
              </thead>
              <tbody>
                {dataTable &&
                  dataTable.map((item) => {
                    return (
                      <tr>
                        <td className="border border-slate-600 text-xl font-semibold tracking-wide text-left p-3">
                          {item.loai}
                        </td>
                        <td className="border border-slate-600 text-xl font-semibold tracking-wide text-left p-3">
                          {item.doi}
                        </td>
                        <td className="border border-slate-600 text-xl font-semibold tracking-wide text-center p-3">
                          {item.goi}
                        </td>
                        <td className="border border-slate-600 text-xl font-semibold tracking-wide text-center p-3">
                          {item.bh}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <p className="text-xl font-sans pb-6">
              Thiết bị được bảo hành nếu gặp lỗi tự thân, do nhà sản xuất và đủ điều kiện bảo hành theo quy định.
              <br></br>
              Thiết bị mới được đổi là tương đương với thiết bị cũ (hoặc sang một thiết bị gần nhất nếu sản phẩm bị lỗi
              không có hàng hoặc đã tạm ngừng kinh doanh - xem thêm phần 4. Thông tin bổ sung).
              <br></br>
              Thời hạn bảo hành của thiết bị mới là thời hạn bảo hành còn lại của thiết bị cũ, nếu ít hơn 15 ngày sẽ
              được gia hạn làm tròn thành 15 ngày.
              <br></br>
              NTHmobibile không thể biết được quá trình sử dụng của quý khách diễn ra như thế nào, shop căn cứ điều kiện
              bảo hành theo những bằng chứng quan sát được thực tế ở trên máy - được quy định dưới đây. Kính mong quý
              khách hàng hiểu và đồng cảm.
            </p>
            <div className="font-sans leading-11">
              <strong>2. Điều kiện bảo hành</strong>
              <p className="py-5 indent-0 text-left  leading-normal">
                Tất cả các điều kiện bảo hành dưới đây phù hợp với các kiến thức kỹ thuật đã biết, với thông lệ của các
                nhà sản xuất, làm rõ quyền lợi bảo hành của quý khách hàng, được áp dụng chính thức tại Bảo Tuyết Mobile
                <br></br>- Đối với iPhone: Thiết bị còn ít nhất 01 tem bảo hành của cửa hàng, hình thức tem nhận diện
                được, thể hiện thiết bị chưa bị tháo mở. Bảo Tuyết Mobile có quyền từ chối bảo hành nếu thiết bị mất tem
                với bất kỳ lý do gì. (*1)
                <br></br>- Thiết bị không bị rơi vào nước, có chất lỏng lọt vào.
                <br></br>- Thiết bị không bị rơi, va chạm gây trầy xước, móp vỏ, nứt vỡ linh kiện. (*2)
                <br></br>- Thiết bị không bị tác động ngoại lực làm cong vỏ.
                <br></br>- Thiết bị không bị loang mực, sọc màn hình. (*3)
                <br></br>- Thiết bị không bị lỗi chân sim, mắc dị vật vào khe sim.
                <br></br>- Thiết bị phải được đăng xuất tài khoản iCloud. (*4)
                <br></br>- Thiết bị không mất hoàn toàn nguồn điện, hoặc chập nguồn. (*5)
                <br></br>- Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin qua trang web của chúng tôi theo yêu cầu
                của bạn
                <br></br>- Chúng tôi có thể sẽ gửi thông tin sản phẩm, dịch vụ mới, thông tin về các sự kiện sắp tới
                hoặc thông tin tuyển dụng nếu quý khách đăng kí nhận email thông báo.
                <br></br>- Ngoài ra, chúng tôi sẽ sử dụng thông tin bạn cung cấp để hỗ trợ quản lý tài khoản khách hàng;
                xác nhận và thực hiện các giao dịch tài chính liên quan đến các khoản thanh toán trực tuyến của bạn
              </p>

              <text className="m-5px leading-normal">
                <p>
                  (*1): Tem bảo hành là phương pháp tốt nhất hiện tại để xác định thiết bị đã bị tự ý tháo mở hay chưa,
                  được phần lớn các nhà sản xuất áp dụng. Cửa hàng sử dụng loại decan vỡ tốt nhất trên thị trường để sản
                  xuất tem bảo hành và dán đồng thời 2 tem khác nhau. Phần lớn các trường hợp mất tem được xác định do
                  khách hàng tự ý tháo mở; độ vỏ, thay vỏ do đánh rơi, va chạm; gặp nước gây bong tróc tem hoặc đôi khi
                  chỉ là tò mò tháo ra xem - sai thao tác có thể dẫn đến hỏng máy… Do vậy, cửa hàng từ chối bảo hành với
                  các trường hợp không còn tem. Kính mong quý khách hàng thấu hiểu cho sự khó khăn này của chúng tôi.
                </p>
                <br></br>
                <p>
                  (*2): Việc quý khách sơ ý đánh rơi, hoặc va chạm thiết bị có thể gây tác động đến hoạt động của sản
                  phẩm. Do vậy, tất cả các nhà sản xuất đều từ chối bảo hành đối với trường hợp này
                </p>
                <br></br>
                <p>
                  (*3): Loang mực, sọc màn hình là nhóm lỗi đã được xác định nguyên nhân do gặp tác động ngoại lực trong
                  quá trình sử dụng (thường gặp do vô tình tì đè). Mặc dù bề mặt màn hình bên ngoài hoàn toàn nguyên vẹn
                  nhưng trên tấm panel hoặc cáp kết nối bị hư hại cơ học bên trong (đứt đường, nứt rạn). Đây là nhóm lỗi
                  đã được các kỹ thuật viên phân tích rất kỹ. Do vậy, cửa hàng từ chối bảo hành trường hợp này, kính
                  mong quý khách hàng thông cảm.
                </p>
                <br></br>
                <p>
                  (*4): Trong quá trình khắc phục lỗi, nhiều trường hợp phải nạp lại phần mềm iOS, điều này yêu cầu tài
                  khoản iCloud phải được đăng xuất. Cửa hàng không chịu trách nhiệm với các trường hợp quý khách quên
                  mật khẩu trên thiết bị của mình khi mang đến bảo hành.
                </p>
                <br></br>
                <p>
                  (*5): Thiết bị không được bảo hành trong trường hợp mất hoàn toàn nguồn điện hoặc chập nguồn. Đây là
                  lỗi liên quan đến quá trình sử dụng điện của thiết bị. Ví dụ chập điện, sử dụng nguồn điện không ổn
                  định, phụ kiện không phù hợp... Đối với những thiết bị không đủ điều kiện bảo hành, quý khách hàng
                  được hỗ trợ sửa chữa tính phí ưu đãi nếu có nhu cầu, trong khả năng của cửa hàng.
                </p>
              </text>
            </div>
            <div>
              <strong>3.Những lỗi không làm mất điều kiện bảo hành của thiết bị - nhưng không được bảo hành:</strong>
              <div className="py-5 indent-0 text-left text-xl leading-normal">
                <p className="mb-2 leading-normal">1.Bụi lọt vào màn hình trong quá trình sử dụng.</p>
                <p className="mb-2 leading-normal">2. Bong tróc lớp sơn mạ bên ngoài.</p>
                <p className="mb-2 leading-normal">
                  3. Các đặc điểm do sự già hoá tự nhiên của linh kiện mà không làm linh kiện mất khả năng sử dụng: Cảm
                  giác về độ nảy cơ học trên các phím cứng, Màn hình bị thâm mờ ở sát góc, màn hồng...{' '}
                </p>
                <p className="mb-2 leading-normal">4.Màn hình có trên 3 điểm chết mới được coi là lỗi được bảo hành.</p>
                <p className="mb-2 leading-normal">5.Lỗi đến từ phiên bản phần mềm iOS hiện tại của Apple.</p>
                <p className="mb-2 leading-normal">
                  6.Touch ID (cảm biến vân tay) là công nghệ sinh trắc học không hoàn hảo, và có thể khó hoặc không nhận
                  vân tay trong một số trường hợp: bị sẹo, bẩn, mồ hôi nhiều hoặc vân tay không rõ ràng tùy cơ địa người
                  sử dụng. Nếu Touch ID vẫn thiết lập được trên hầu hết các ngón tay nhưng không nhận 1 (hoặc số ít)
                  ngón tay nhất định nào đó thì không được coi là lỗi.
                </p>
                <p className="mb-2 leading-normal">
                  7.Cáp Touch ID bên trong máy bị đứt ngầm - Do tì đè, bấm mạnh nút home.
                </p>
                <p className="mb-2 leading-normal">
                  8. Pin chai sau một quá trình sử dụng (đặc điểm tự nhiên của pin Li-Ion).{' '}
                </p>
                <p className="mb-2 leading-normal">
                  9.Lỗi camera chụp ảnh có đốm mờ đã được xác định do điều kiện môi trường ẩm (mốc) gây nên (che phủ
                  lens), sẽ áp dụng bảo hành có tính phí.
                </p>
              </div>
            </div>
            <div>
              <strong>4.Thông tin bổ sung</strong>
              <div className="py-5 indent-0 text-left text-xl leading-normal">
                <p className="mb-2 leading-normal">
                  - Sản phẩm đang có sẵn luôn thay đổi, shop không cam kết sản phẩm đổi bảo hành sẽ giống 100% mọi yếu
                  tố với thiết bị của quý khách, ví dụ phiên bản iOS, thị trường phân phối, nhà mạng phân phối, thời hạn
                  bảo hành trên hệ thống Apple, hoặc hình thức, dung lượng pin của sản phẩm cũ…
                </p>
                <p className="mb-2 leading-normal">
                  - Trong trường hợp sản phẩm cần đổi bảo hành đang hết hàng (tối đa 15 ngày) hoặc đã ngừng kinh doanh,
                  shop sẽ đổi sang một thiết bị gần nhất với thiết bị của quý khách tùy theo thỏa thuận, hoặc quý khách
                  có thể lên đời máy và hai bên sẽ bù trừ chi phí tùy theo giá bán, tình trạng của hai máy.
                </p>
                <p className="mb-2 leading-normal">
                  - Quý khách hàng có trách nhiệm sao lưu và bảo quản dữ liệu cá nhân của mình. Quá trình bảo hành có
                  thể phải nạp lại phần mềm iOS, điều này sẽ xóa dữ liệu trên máy. Bảo Tuyết Mobile rất ý thức được tầm
                  quan trọng và tính riêng tư của dữ liệu, và chúng tôi từ chối trách nhiệm đối với bất kỳ mất mát dữ
                  liệu nào trên máy được bảo hành{' '}
                </p>
                <p className="mb-2 leading-normal">
                  - Đối với sản phẩm cũ, Bảo Tuyết Mobile luôn kiểm tra tình trạng khóa kích hoạt (activation lock) của
                  mỗi thiết bị và chặn khóa kích hoạt bằng mật khẩu giới hạn. Mật khẩu giới hạn này chỉ được mở khi xuất
                  bán sản phẩm. Do vậy, bên shop từ chối trách nhiệm đối với các cáo buộc của quý khách về thiết bị đã
                  có sẵn tài khoản iCloud trên máy sau khi quý khách đã sử dụng sản phẩm.
                </p>
              </div>
            </div>
          </div>
          <h2 className="mb-0 m-16  font-semibold font-sans text-2xl">
            B. ĐỔI MÁY, LÊN ĐỜI MIỄN PHÍ TRONG 30 NGÀY ĐẦU
          </h2>
          <div className="mb-0 m-16 font-sans font-family: ui-sans-serif text-2xl pt-3">
            <p className="mb-5 ">Chính sách này hiện tại chỉ áp dụng với iPhone cũ.</p>
            <strong>Yêu cầu:</strong>
            <p className="text-xl font-sans pb-6">
              1. Thiết bị đủ điều kiện bảo hành (trong phần A. Quy định bảo hành).
              <br></br>
              2. Thiết bị không bị trầy xước.
              <br></br>
              3. Không đổi quá 2 lần và không đổi sang sản phẩm có giá bán thấp hơn.
              <br></br>
              4. Thời gian bảo hành/đổi của thiết bị mới là thời gian còn lại của thiết bị cũ. Nếu ít hơn 5 ngày sẽ được
              gia hạn làm tròn thành 5 ngày.
            </p>
          </div>

          <h2 className="mb-0 m-16  font-semibold font-sans text-2xl">C. BẢO HÀNH RƠI VỠ MÀN HÌNH</h2>
          <div className="mb-0 m-16 font-sans font-family: ui-sans-serif text-2xl pt-3">
            <p className="mb-5 ">
              <strong>Lưu ý:</strong> Gói bảo hành này không đi kèm mặc định theo sản phẩm.
            </p>
            <p className="text-xl font-sans pb-6">
              Trong quá trình sử dụng, nếu quý khách đánh rơi điện thoại hoặc tì đè vào màn hình gây nứt vỡ lớp kính màn
              hình (rất thường gặp) - nếu vẫn hiển thị và cảm ứng được bình thường thì sẽ được Bảo Tuyết Mobile khôi
              phục về trạng thái ban đầu (1 lần) miễn phí. Không áp dụng nếu màn hình đã hỏng hiển thị hoặc hỏng cảm
              ứng.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarrantyPolicy;
