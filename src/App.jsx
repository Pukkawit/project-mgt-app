import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <main className="grow ">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
