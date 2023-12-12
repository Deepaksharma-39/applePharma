import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

const ReturnPolicy = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Medical Equipment Home"
        description="Medical Equipment home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        <div>
          <div className="card">
            <div className="card-body">
            <h4><b>OVERVIEW</b></h4>
            Our refund and return policy has a duration of 30 days. If more than 30 days have transpired since your purchase, regrettably, we cannot provide a complete refund or exchange.<br/>
            For a return to be eligible, the item must remain unused and in the same condition as when received, and it should be in its original packaging.<br/>
            Certain categories of items (intimate) cannot be returned. 
            </div>

            <div className="card-body">
            More items that cannot be returned include:<br/>
            •	Gift cards<br/>
            •	Certain healthcare items<br/>
            To process your return, a receipt or proof of purchase is necessary.<br/>
            Please refrain from sending your purchase back to the manufacturer.<br/>
            In certain circumstances, partial refunds may be granted:<br/>
            </div>

            <div className="card-body">
            <h4><b>REFUNDS</b></h4>
            Upon receipt and inspection of your return, we will send you an email confirming the arrival of your returned item. You will also be informed whether your refund has been approved or declined.<br/>
            If approved, the refund will be processed and automatically credited to your original method of payment, such as your credit card, within a specific number of days.
            </div>

           
            <div className="card-body">
            <h4><b>LATE OR MISSING REFUNDS</b></h4>
            If you have not received your refund yet, please take these steps:<br/>
            1.	Check your bank account once more.<br/>
            2.	Reach out to your credit card company, as it might take some time for the refund to be officially processed and posted.<br/>
            3.	Contact your bank, as there might be a processing period before the refund appears.<br/>
            If you've completed these steps and haven't received your refund, please contact us at PROP NO. 1526, F/F, PVT. NO 122, SHRINATHJI MARKET, BHAGIRATH PALACE, CHANDNI CHOWK, DELHI 110006.
            </div>

            <div className="card-body">
            <h4><b>SALE ITEMS</b></h4>
            We can only issue refunds for regular-priced items. Unfortunately, sale items are not eligible for refunds.
            </div>

            <div className="card-body">
            <h4><b>EXCHANGES</b></h4>
            We offer replacements solely for defective or damaged items. If you need to exchange it for the same item, please email us and send the item to: PROP NO. 1526, F/F, PVT. NO 122, SHRINATHJI MARKET, BHAGIRATH PALACE, CHANDNI CHOWK, DELHI 110006.
            </div>

            <div className="card-body">
            <h4><b>SHIPPING RETURNS</b></h4>
            To return your product, please send it to: PROP NO. 1526, F/F, PVT. NO 122, SHRINATHJI MARKET, BHAGIRATH PALACE, CHANDNI CHOWK, DELHI 110006.<br/>
            You'll need to cover the shipping expenses for returning your item, and these costs are non-refundable. In case of a refund, the return shipping cost will be deducted from your refund.<br/>
            The duration for your exchanged product to reach you may vary depending on your location.<br/>
            For higher-value items, it's advisable to use a trackable shipping service or opt for shipping insurance when returning. Please note that we cannot guarantee receipt of your returned item.
            </div>

            <div className="card-body">
            <h4><b>NEED HELP?</b></h4>
            For inquiries regarding refunds and returns, please reach out to us at PROP NO. 1526, F/F, PVT. NO 122, SHRINATHJI MARKET, BHAGIRATH PALACE, CHANDNI CHOWK, DELHI 110006.
            </div>

          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ReturnPolicy;
