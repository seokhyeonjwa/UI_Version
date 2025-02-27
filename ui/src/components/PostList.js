import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./MainPage.css";
import "./PostList.css";

function PortfolioPage() {
  
  
  const navigate = useNavigate();

  

  return (
    <div className="main-page">
      <main className="post-section">
        <h2>블로그 개발 포트폴리오</h2>
        
          <div className="post-list">
            <ul>
              <li>게시물1</li>
              <li>게시물2</li>
              <li>게시물3</li>
              <li>게시물4</li>
              <li>게시물5</li>
              <li>게시물6</li>
              <li>게시물7</li>
              <li>게시물8</li>
            </ul>
          </div>
        
        <div>
          <button onClick={() => navigate("/createpost", )}>
            글 작성하기
            </button>
        </div>
      </main>
    </div>
  );
}

export default PortfolioPage;
