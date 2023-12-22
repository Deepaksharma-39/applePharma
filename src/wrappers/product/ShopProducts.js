import PropTypes from "prop-types";
import clsx from "clsx";
import ProductGridList from "./ProductGridList";

const ShopProducts = ({ products, layout,setModalShow }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={clsx("row", layout)}>
        <ProductGridList products={products} setModalShow={setModalShow} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array,
  setModalShow:PropTypes.func
};

export default ShopProducts;
