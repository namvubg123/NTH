import React from 'react';

function ReturnPolicy(props) {
    return (
        <div className='bg-slate-100'>
        <div className='max-w-[1100px] mx-auto bg-white pt-20 pb-60'>
            <div className='indent-16 '>
                <h2 className='text-5xl font-family: ui-sans-serif font-semibold pt-10 text-center'>Chính sách đổi trả</h2>
                <div className='mb-0 m-16 font-family: ui-sans-serif text-2xl font-semibold pt-3'>
                    <ul className='flex-auto'>
                         1. Điều kiện đổi trả
                        <p className='pl-16 py-5 indent-0 text-left text-xl leading-normal font-thin'> 
                            Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:
                            <br></br>
                            Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.
                            <br></br>
                            Không đủ số lượng, không đủ bộ như trong đơn hàng.
                            <br></br>
                            Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…
                            <br></br>
                            Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.  
                        </p>
                    </ul>
                    <ul>
                        2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả
                        <p className='pl-16 py-5 indent-0 text-left text-xl leading-normal font-thin'>
                            Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.
                            <br></br>
                            Thời gian gửi chuyển trả sản phẩm: trong vòng 14 ngày kể từ khi nhận sản phẩm.
                            <br></br>
                            Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.
                            <br></br>
                            Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.
                        </p>
                    </ul>
                    <ul>
                        3. Hình thức đổi trả
                        <p className='pl-16 py-5 indent-0 text-left text-xl leading-normal font-thin'>
                        - Chúng tôi thực hiện đổi hàng hóa đúng loại sản phẩm mà khách hàng đặt đối với sản phẩm giao sai hàng/ sai số lượng hoặc khi phát sinh sản phẩm không đạt cam kết.
                        <br></br>
                        - Đổi sản phẩm khác có giá trị tương đương cho khách hàng trong trường hợp sản phẩm khách hàng đã đặt hết hàng nếu khách hàng đồng ý. 
                        <br></br>
                        Trường hợp khách hàng không còn nhu cầu nữa do lỗi hàng hóa hoặc không đồng ý với hàng hóa được đổi lại công ty sẽ hoàn phí cho khách hàng bằng hình thức chuyển khoản hoặc theo phương thức thỏa thuận với khách hàng trong vòng 07 ngày làm việc kể từ ngày nhận được yêu cầu.
                        </p>

                    </ul>
                </div>
            </div>          
        </div>
    </div>
    );
}

export default ReturnPolicy;