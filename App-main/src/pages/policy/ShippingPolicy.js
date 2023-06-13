import React from 'react';

function ShippingPolicy(props) {
    return (
    <div className='bg-slate-100'>
        <div className='max-w-[1100px] mx-auto bg-white p-20'>
            <div className='indent-16'>
                <h2 className='text-5xl font-family: ui-sans-serif font-semibold pt-10 text-center'>Chính sách vận chuyển</h2>
                <div className=' m-16 mb-0 font-family: ui-sans-serif text-2xl font-semibold pt-3' >
                    <ul className='flex-auto'>
                        1. Các phương thức giao hàng
                        <p className='pl-16 py-5 indent-0 text-left text-xl leading-normal font-thin'> 
                            Chúng tôi sử dụng 2 phương thức giao hàng:
                            <br></br>                     
                            - Khách hàng mua trực tiếp tại cửa hàng.
                            <br></br>
                            - Ship hàng.
                        </p>
                    </ul>
                    <ul>
                        2. Thời hạn ước tính cho việc giao hàng 
                        <p className='pl-16 py-5 indent-0 text-left text-xl leading-normal font-thin'>
                        Thông thường sau khi nhận được thông tin đặt hàng chúng tôi sẽ xử lý đơn hàng trong vòng 24h và phản hồi lại thông tin cho khách hàng về việc thanh toán và giao nhận.
                        <br></br>
                        Thời gian giao hàng thường trong khoảng từ 3-5 ngày kể từ ngày chốt đơn hàng hoặc theo thỏa thuận với khách khi đặt hàng. 
                        <br></br>
                        Tuy nhiên, cũng có trường hợp việc giao hàng kéo dài hơn nhưng chỉ xảy ra trong những tình huống bất khả kháng như sau:
                        <br></br>
                        - Nhân viên chúng tôi liên lạc với khách hàng qua điện thoại không được nên không thể giao hàng.
                        <br></br>
                        - Địa chỉ giao hàng bạn cung cấp không chính xác hoặc khó tìm.
                        <br></br>
                        - Số lượng đơn hàng tăng đột biến khiến việc xử lý đơn hàng bị chậm.
                        <br></br>
                        - Đối tác cung cấp hàng chậm hơn dự kiến khiến việc giao hàng bị chậm lại hoặc đối tác vận chuyển giao hàng bị chậm
                        Về phí vận chuyển, chúng tôi sử dụng dịch vụ vận chuyển ngoài nên cước phí vận chuyển sẽ được tính theo phí của các đơn vị vận chuyển tùy vào vị trí và khối lượng của đơn hàng, khi liên hệ lại xác nhận đơn hàng với khách sẽ báo mức phí cụ thể cho khách hàng
                        </p>
                    </ul>
                    <ul>
                        3. Các giới hạn về mặt địa lý cho việc giao hàng
                        <p className='pl-16 py-5 indent-0 text-left text-xl leading-normal font-thin'>
                        Riêng khách tỉnh có nhu cầu mua số lượng lớn hoặc khách buôn sỉ nếu có nhu cầu mua sản phẩm , chúng tôi sẽ nhờ dịch vụ giao nhận của các công ty vận chuyển và phí sẽ được tính theo phí của các đơn vị cung cấp dịch vụ vận chuyển hoặc theo thoản thuận hợp đồng giữa 2 bên.
                        </p>

                    </ul>
                    <ul>
                        4.  Phân định trách nhiệm của thương nhân, tổ chức cung ứng dịch vụ logistics về cung cấp chứng từ hàng hóa trong quá trình giao nhận.

                        <p className='pl-16 py-5 indent-0 text-left text-xl leading-9 font-thin'>
                        Tất cả các đơn hàng đều được đóng gói sẵn sàng trước khi vận chuyển, được niêm phong bởi Baotuyetmobile.vn. 
                        Đơn vị vận chuyển sẽ chỉ chịu trách nhiệm vận chuyển hàng hóa theo nguyên tắc “nguyên đai, nguyên kiện
                        <br></br>
                        Trên bao bì tất cả các đơn hàng đều có thông tin:
                        <br></br>
                        Thông tin Người nhận, bao gồm: Tên người nhận, số điện thoại và địa chỉ người nhận
                        <br></br>
                        Mã vận đơn của đơn hàng
                        <br></br>
                        Để đảm bảo an toàn cho hàng hóa, Baotuyetmobile.vn sẽ gửi kèm hóa đơn tài chính hoặc phiếu xuất kho hợp lệ của sản phẩm trong bưu kiện (nếu có).
                        <br></br>
                        Hóa đơn tài chính hoặc phiếu xuất kho là căn cứ hỗ trợ quá trình xử lý khiếu nại như: xác định giá trị thị trường của hàng hóa, đảm bảo hàng hóa lưu thông hợp lệ v.v..
                        </p>
                    </ul>

                    <ul className=''>
                        5.  Trách nhiệm về trường hợp hàng bị hư hỏng do quá trình vận chuyển
                    
                        <p className='pl-16 py-5 indent-0 text-left text-xl leading-9 font-thin'>
                        Về việc cung cấp chứng từ hàng hóa trong quá trình giao nhận.
                        <br></br>
                        Đối với hàng hóa bị hư hỏng do quá trình vận chuyển dù là đơn hàng do chính cửa hàng vận chuyển hay do bên thứ 3 vận chuyển thì chúng tôi sẽ là bên đứng ra chịu trách nhiệm giải quyết vấn đề cho khách hàng.
                        <br></br>
                        Khách hàng có quyền từ chối nhận sản phẩm và yêu cầu đổi trả theo quy định “ đổi trả hoàn phí” còn mọi vấn đề phát sinh chúng tôi sẽ làm việc lại với đối tác vận chuyển để giải quyết đền bù cho đơn hàng theo thỏa thuận hợp tác giữa công ty với đối tác thứ 3 cung cấp dịch vụ vận chuyển.
                        </p>
                    </ul>

                    <p className='pl-16 py-5 indent-0 text-left text-xl leading-9 font-thin'>
                    <span className='font-semibold text-2xl'> Lưu ý:</span> Trường hợp phát sinh chậm trễ trong việc giao hàng chúng tôi sẽ thông tin kịp thời cho khách hàng và khách hàng có thể lựa chọn giữa việc Hủy hoặc tiếp tục chờ hàng.
                    </p>

                </div>
            </div>
        </div>
    </div>

    );
}

export default ShippingPolicy;