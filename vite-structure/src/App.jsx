import { Sai } from "./components";
import { Navbar, Component1, Component2 } from "./components";
const App = () => {
  return (
    <div className="App bg-slate-500">
      <div className="">
        <Navbar />
      </div>

      <div className=" flex p-2 w-screen h-screen">
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
};

export default App;
