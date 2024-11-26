import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="videosbackground">
          <video autoPlay muted loop>
            <source src="/itachi.mp4" type=" video/mp4" />
          </video>
        </div>
        <div className="logo">Trang web của Tôi</div>
        <nav className="nav">
          <a href="#Trang Chủ">Trang Chủ</a>
          <a href="#Chúng Tôi">Chúng Tôi</a>
          <a href="#Dịch Vụ">Dịch Vụ</a>
          <a href="#Liên Hệ">Liên Hệ</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
