function BannerHeader() {
    return (
        <div className="w-3/4 mr-auto ml-auto mt-[40px] mb-[40px]">
            <div className="grid grid-cols-3 gap-[100px]">
                <div className="flex cursor-pointer hover:scale-125">
                    <div className="pt-[50px]">
                        <p className=" text-3xl font-semibold">Iphone</p>
                        <span className="text-[20px] font-thin text-gray-500">Leather Case</span>
                    </div>
                    <img src="https://halostore.vn/store/wp-content/uploads/2020/11/iphone-12-pro-max-graphite.png" alt=""
                        className="w-[200px] h-[200px]"
                    />
                </div>
                <div className="cursor-pointer hover:scale-125">
                    <div className="text-center">
                        <p className="text-3xl font-semibold">Airpods</p>
                        <span className="text-[20px] font-thin text-gray-500">Wireless Effortless Magical</span>
                    </div>
                    <img src="https://www.apple.com/v/airpods-2nd-generation/e/images/meta/og__bz8g5g9sbyoi_overview.png?202212142121" alt=""
                        className="w-[313px] h-[200px]"
                    />
                </div>
                <div className="flex cursor-pointer hover:scale-125">
                    <img src="https://multimedia.bbycastatic.ca/multimedia/products/300x300/156/15691/15691262_3.jpeg" alt=""
                            className="w-[200px] h-[200px]"
                    />
                    <div className="pt-[30px]">
                        <span className="text-[20px] font-thin text-gray-500">Only the best</span>
                        <p className="text-3xl font-semibold">Laptop</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BannerHeader