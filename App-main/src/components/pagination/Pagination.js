import React from "react";

function Paginations() {
    return(
        <nav className="text-center mt-[50px] mb-[50px]">
            <ul className="inline-flex">   
                <li className="border-2 border-gray-200 px-[10px] py-[5px]"><i class="fa-solid fa-angles-left"></i></li>
                <li className="border-2 border-gray-200 px-[10px] py-[5px]">1</li>
                <li className="border-2 border-gray-200 px-[10px] py-[5px]">2</li>
                <li className="border-2 border-gray-200 px-[10px] py-[5px]">3</li>
                <li className="border-2 border-gray-200 px-[10px] py-[5px]"><i class="fa-solid fa-angles-right"></i></li>
            </ul>
        </nav>
    )
}

export default Paginations