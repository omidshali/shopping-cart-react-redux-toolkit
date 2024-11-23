import { Navbar } from "./components/navbar";
import { ProductList } from "./components/product-list";

function App() {
  return (
    <div className="flex flex-col items-center bg-backGround-color min-h-[100vh] text-white">
      <div className="max-w-[80%] w-full">
        <Navbar />
        <div className="mt-[70px]">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
