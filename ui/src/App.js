import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProfilePage from "./components/ProfilePage";
import PostList from "./components/PostList";
import CategorySelectionPage from "./components/CategorySelectionPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/categoryselect" element={<CategorySelectionPage />} />
        <Route path="/postlist" element={<PostList />} />
      </Routes>
    </Router>
  );
}

export default App;
