import Header from "./components/header/header";
import productArr from "./dummyData/productsArray";
import Product from "./components/Product/product";

function App() {
  return (
    <>
      <Header className="header" />
      <div className="grid">
        <main>
          <div className="row center">
            {productArr.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </>
  );
}

export default App;
