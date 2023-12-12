import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

const Disclaimer = () => {
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
            The trademark names showcased on this website belong to their respective trademark holders. We make no assertions of affiliation or connection with any product manufacturer or trademark holder. The products bearing brand names are crafted by the respective trademark holders. Our website distinctly identifies and displays the manufacturer of each product we offer, including clear mentions and images (if available) that prominently feature the manufacturer's name. If we present brand-name products, we explicitly denote and advertise them accordingly.
            </div>

            <div className="card-body">
            The trademarks, brands, and service marks featured on this website are the property of their respective owners.
            </div>

            <div className="card-body">
            The information provided on www.Applepharmed.com serves informational purposes exclusively and should not replace professional medical advice, diagnosis, or treatment. We do not offer medical guidance and recommend consulting your healthcare provider for inquiries regarding any medical condition. The content on the website does not cover all aspects of medication use, including uses, directions, drug interactions, precautions, or potential side effects. It's a general resource and should not be solely relied upon. It does not contain specific instructions for individual patients. We disclaim any responsibility for the accuracy or reliability of this information and any resulting consequences, such as damage or adverse effects on individuals or property, regardless of how these damages or consequences occur. No explicit or implicit warranties are made concerning this information.
            </div>

           
            <div className="card-body">
            The content on our website, www.Applepharmed.com, is presented on an “as is,” “as available” basis, without any express or implied representations or warranties. Apple Pharmed completely disclaims any representations or warranties, including, but not limited to, warranties of title, merchantability, or fitness for a specific purpose concerning any merchandise offered through this site. This disclaimer does not affect any product warranty provided by the item's manufacturer.
            </div>

            <div className="card-body">
            By utilizing this site, you acknowledge that we are not liable for determining the suitability of any prescription for you or any adverse consequences resulting from the use of any medication. We do not guarantee, verbally or in writing, any medical advice or prescription provided or any services or information obtained through this site. Given the frequent changes in information, we do not take responsibility for the accuracy or validity of the content on www.Applepharmed.com or for the uninterrupted or error-free operation of the site.
            </div>

            <div className="card-body">
            Under no circumstances shall Apple Pharmed, its affiliates, employees, vendors, or suppliers be liable for direct, indirect, punitive, incidental, special, or consequential damages linked to the use of this site, its content, delays in site use, or other connections to this site, whether based on contract, negligence, or other actions, even if an authorized representative of www.Applepharmed.com was made aware of such possible damages. In jurisdictions where the exclusion or limitation of liability for incidental or consequential damages is not allowed, these limitations do not apply. Your use of www.Applepharmed.com is solely at your own risk. If you are dissatisfied with the site, its content, or these terms and conditions, your only recourse is to cease using Applepharmed.com.
            </div>

            <div className="card-body">
            All matters are subject to the jurisdiction of Delhi.
            </div>

          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Disclaimer;