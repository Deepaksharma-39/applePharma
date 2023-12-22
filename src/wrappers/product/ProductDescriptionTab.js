import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDescriptionTab = ({
  spaceBottomClass,
  productFullDesc,
  product,
}) => {
  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                Description
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Benefits</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Precautions</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                <h3>Action</h3>
                <ul>
                  {product.fullDescription.map((action, index) => (
                    <>
                      <li key={index}>{action}</li>
                    </>
                  ))}
                </ul>
                <br />

                <h3>Working</h3>
                <ul>
                {product.working.map((action, index) => (
                  <>
                    <li key={index}>{action}</li>
                  </>
                ))}
                </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">

                <h3>Benefits</h3>
                <ul>
                {product.benefits.map((action, index) => (
                  <>
                    <li key={index}>{action}</li>
                  </>
                ))}
                </ul>
                <br/>
                <br />
              </Tab.Pane>
                <Tab.Pane eventKey="productReviews">
                <br/>
                <h3>Side Effects</h3>
                  <ul>
                    {product.sideEffects.map((action, index) => (
                      <>
                        <li key={index}>{action}</li>
                      </>
                    ))}
                  </ul>
                  <br />
              
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductDescriptionTab;
