import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css"; // 기존 메인 페이지 스타일 활용

function CategorySelectionPage() {
  const navigate = useNavigate();

  const categories = [
    { name: "블로그 개발 일지", path: "/postlist", icon: "📝" },
    { name: "Youtube Data API 활용 개발 일지", path: "/portfolio/graduation", icon: "🎓" },
    { name: "다음 프로젝트 준비중 ...", path: "/portfolio/projects", icon: "🔧" },
  ];

  return (
    <div className="main-page">
      <h2>포트폴리오</h2>
      <div className="section-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="section-card"
            onClick={() => navigate(category.path)}
          >
            <div className="icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <p>더 알아보기</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySelectionPage;
