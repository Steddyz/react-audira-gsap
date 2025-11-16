const Products = () => {
  return (
    <section>
      <div id="section5">
        <h2 className="heading">Top Picks</h2>
        <div className="product-section">
          <div className="product">
            <img src="./images/black.png" alt="headphones" />
            <div className="name">Audira Max Pro</div>
            <div className="price">₹11,699</div>
          </div>
          <div className="product">
            <div className="name">Audira Plus</div>
            <div className="price">₹7,499</div>
          </div>
          <div className="product">
            <img src="./images/green.png" alt="headphones" />
            <div className="name">Audira One</div>
            <div className="price">₹4,499</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
