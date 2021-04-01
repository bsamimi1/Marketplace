import Header from "./header/header";
import Login from "./components/login/login";
import productArr from "./dummyData/productsArray";

function App() {
  return (
    <>
      <Header />
      <div className="grid">
        <main>
          <div className="row center">
            {productArr.products.map((product) => (
              <div key={product.id} className="card">
                <a href={`/product/${product.id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i classNameName="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div>
                    <h1 className="price">${product.price}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </>
  );
}

export default App;
