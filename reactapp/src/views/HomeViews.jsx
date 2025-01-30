// import CategoriesCard from "../components/PopularCategories";
// import ProductCard from "../components/ProductCard";
import { VendorsList } from "../helpers/vendorlist.js";
// import { NewArrivals, popularCategories } from "../helpers/ProductsList";
import VendorsCard from "../component/Vendor.jsx";
import "../styles/HomeView.css";

export default function HomeView() {
  return (
    <div className="home-contentents-container">
      <div className="contents">
        <div className="categories">
          <ul>
            <li>Electronics</li>
            <li>Computer Gadget</li>
            <li>Fashion</li>
            <li>Body Lotion</li>
            <li>Sports</li>
            <li>Women Clothes</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
          <div className="home-content-heading">
            <p>Explore our latest and greatest electronics</p>
            <button className="shop-button">SHOP NOW</button>
          </div>
        </div>
        <div className="products-contents">
          <div className="product-sections">
            {/* <div className="popular-categories">
              <h2>Popular Categories</h2>
              <div className="popular-product">
                {popularCategories.map((product) => (
                  <CategoriesCard
                    key={product.id}
                    pic={product.image}
                    productName={product.name}
                  />
                ))}
              </div>
            </div> */}
            {/* <div className="new-arrival-products">
              <h2> New Arrival Products</h2>
              <div className="arrival-list">
                {NewArrivals.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    pic={product.image}
                    price={product.price}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div> */}
            <div className="vendors-list">
              <h2>Our Vendors</h2>
              <div className="vendors-container">
                {VendorsList.map((vendor) => (
                  <VendorsCard
                    key={vendor.id}
                    pic={vendor.image}
                    name={vendor.name}
                    city={vendor.city}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="choose-us">
            <h2>Why People Choose Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
}