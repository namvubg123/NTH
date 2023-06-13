import React, { useEffect, useState } from 'react';

function Scroll() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }

      // setShowGoToTop(window.scrollY >=200) - danh cho nguoi da su dung quen
    };

    window.addEventListener('scroll', handleScroll);

    //Cleanup function để tránh leak memory-rò rỉ bộ nhớ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {showGoToTop && (
        <button className=" fixed right-5 bottom-5 bg-red-400 text-white p-[5px] rounded-xl" onClick={goToTop}>
          <div className=" text-[15px]">
            <i className="fa-solid fa-angle-up"></i>
          </div>
          <p className=" text-[10px]">Lên đầu</p>
        </button>
      )}
    </div>
  );
}

export default Scroll;
