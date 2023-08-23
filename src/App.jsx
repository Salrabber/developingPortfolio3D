import "./scss/app.scss";
import { Hero, Works, Who, Contact } from "./pages/LamaPage";
import Matrix from "./pages/Cubes";

export default function App() {
  return (
    <div className="page">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}
