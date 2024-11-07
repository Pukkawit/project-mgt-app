import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeadNav from "./components/HeadNav";

function App() {
  return (
    <div>
      <HeadNav />
      <main className="grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
