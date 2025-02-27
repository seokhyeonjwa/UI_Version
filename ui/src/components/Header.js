import React, {useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App";
import "./Header.css";

function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  // 외부 클릭 감지 로직 추가
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-modal") && !event.target.closest(".profile-button")) {
        setShowProfile(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="logo-section" onClick={() => navigate("/")}>
        <img
          src="/logo.png" // 여기에 로고 파일 경로 입력
          alt="HongFolio Logo"
          className="logo-image"
        />
        <h1 className="clickable-title">HongFolio</h1>
      </div>
      <div className="nav-links">
        
          <div>
            <Link to="/login" className="nav-button">로그인</Link>
            <Link to="/signup" className="nav-button">회원가입</Link>
          </div>
         
          <div className="profile-section">
            {/* 버튼 클릭 시 모달 표시 */}
            <button
              className="profile-button"
              onClick={(e) => {
                e.stopPropagation(); // 버튼 클릭 시 이벤트 전파 방지
                setShowProfile(!showProfile);
              }}
            >
              
            </button>

            {/* 프로필 모달 */}
            {showProfile && (
              <div className="profile-modal">
                <p><strong>아이디:</strong> id</p>
                <p><strong>닉네임:</strong> nickname</p>
                <p><strong>E-mail:</strong> email</p>
                <button className="logout-button">
                  로그아웃
                </button>
              </div>
            )}
          </div>
        
      </div>
    </header>
  );
}

export default Header;
