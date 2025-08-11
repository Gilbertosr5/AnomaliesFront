import { Home } from "lucide-react";
import "./style.css"; // vamos criar isso

export function HomeButton() {
  return (
    <button className="home-button">
      <Home size={20} className="home-icon" />
      <span className="home-label">Início</span>
    </button>
  );
}