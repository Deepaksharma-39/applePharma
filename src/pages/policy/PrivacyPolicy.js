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
            <h4><b>WHO WE ARE</b></h4>
            Our website's URL is https://www.applepharmed.com.<br/>
            Please carefully review the privacy policy of Applepharmed.com. By accessing or using the website, you agree to adhere to the terms outlined herein and all terms referenced within. If you do not agree to comply with the privacy policy, please discontinue viewing, reading, and/or using our website immediately. Violation of the privacy policy will result in the automatic termination of your permission to use this website. Apple Pharmed reserves the right to modify its privacy policy at any time without prior notice. By continuing to use our website after any changes to its privacy policy, you agree to accept these modifications.
            </div>

            <div className="card-body">
            <h4><b>USE</b></h4>
            Applepharmed.com is exclusively intended for the use of Apple Pharmed’s Pharmaceutical Customers and should not be utilized by any other individuals, including the general public, for any alternate purposes. In the event of any conflict between this privacy policy and the current terms regulating Apple Pharmed’s association with its customers, the prevailing terms will take precedence.
            </div>

            <div className="card-body">
            <h4><b>PERSONAL INFORMATION AND ONLINE PRIVACY PROTECTION</b></h4>
            Personal information encompasses all identifiable data you furnish to us via this website. Apple Pharmed will restrict the dissemination of this information, refraining from disclosing it to third parties. Apple Pharmed exclusively uses your personal information for internal purposes. Moreover, access to your personal information within Apple Pharmed is confined to employees responsible for processing and reviewing your order. Unless mandated by law or upon receiving your explicit written consent, Apple Pharmed will refrain from sharing personal information with third parties for their individual use.
            </div>
           
            <div className="card-body">
            <b>Inventory and Product Availability:</b> Apple Pharmed does not ensure the availability of specific quantities for any item listed on this site. All orders are processed, verified, and dispatched in compliance with Apple Pharmed’s standard Privacy Policy. For inquiries regarding Apple Pharmed’s standard privacy policy, please reach out to an Apple Pharmed Customer Service Representative.
            </div>

            <div className="card-body">
            The section of Applepharmed.com dedicated to product inventory and ordering operates as a dynamic, real-time interface to Apple Pharmed’s inventory. Consequently, the information presented in this segment of Applepharmed.com may fluctuate based on received orders, delivery commitments, and the accuracy of internal records. By utilizing this section of Applepharmed.com, you acknowledge that the information and data provided, processed, and delivered by our servers are subject to constant changes. Apple Pharmed cannot assure the specified quantity of items and therefore cannot guarantee the fulfillment and dispatch of an order within a defined timeframe. Some items may be discontinued without prior notification.
            </div>

            <div className="card-body">
            <h4><b>COMMENTS</b></h4>
            When visitors post comments on the site, we gather the information displayed in the comments form, along with the visitor’s IP address and browser user agent string, aiding in spam detection. <br/>
            Furthermore, an anonymized string generated from your email address (commonly known as a hash) may be shared with the Gravatar service to determine if you use it. Upon approval of your comment, your profile picture becomes visible to the public within the context of your comment.

            </div>

            <div className="card-body">
            <h4><b>MEDIA</b></h4>
            If you upload images on the website, it's advisable to refrain from including embedded location data (EXIF GPS) in these images. Visitors browsing the website can download and extract location data from the images available on the site.
            </div>

            <div className="card-body">
            <h4><b>COOKIES</b></h4>
            When you leave a comment on our site, you have the option to consent to save your name, email address, and website in cookies. These cookies are designed for your convenience, eliminating the need to re-enter your details each time you leave a comment. They will remain active for a year. <br/>
            Upon visiting our login page, a temporary cookie is set to determine if your browser supports cookies. This cookie doesn't contain personal data and is deleted when you close your browser. <br/>
            Upon logging in, several cookies are established to retain your login information and screen display preferences. Login cookies last for two days, while screen options cookies persist for a year. If you choose “Remember Me”, your login will remain active for two weeks. Logging out of your account removes the login cookies.<br/> 
            When you edit or publish an article, an extra cookie is stored in your browser. This cookie contains no personal data; it simply denotes the article's post ID that you recently edited. It expires after 1 day.
            </div>

            <div className="card-body">
            <h4><b>EMBEDDED CONTENT FROM OTHER WEBSITES</b></h4>
            The articles published on this website may contain embedded content, like videos, images, or articles, sourced from external websites. This embedded content functions similarly to a visitor directly accessing the external website. <br/>
            These external sites may gather information about your activities, utilize cookies, integrate additional third-party tracking, and monitor your engagement with the embedded content. This monitoring encompasses tracking your interactions, particularly if you have an account and are logged in to the external website.
            </div>

            <div className="card-body">
            <h4><b>WHO WE SHARE YOUR DATA WITH</b></h4>
            When you request a password reset, your IP address will be included in the email for the reset process.
            </div>

            <div className="card-body">
           <h4><b>HOW LONG WE RETAIN YOUR DATA</b></h4>
           If you leave a comment, the comment along with its details will be kept indefinitely. This is done to facilitate the automatic recognition and approval of subsequent comments rather than keeping them in a moderation queue.<br/>
          For users who register on our website, their provided personal information is stored in their user profile. All users can view, modify, or delete their personal information at any point (except for changing their username). Additionally, website administrators have access to view and modify this information.
            </div>

            <div className="card-body">
            <h4><b>WHAT RIGHTS DO YOU HAVE OVER YOUR DATA</b></h4>
            If you're a registered user or have posted comments, you have the option to request an exported file containing the personal data we have stored about you, encompassing the information you've shared with us. Additionally, you can ask us to delete any personal data we have on record about you. However, this does not apply to any data that we are required to retain for administrative, legal, or security reasons.
            </div>

            <div className="card-body">
           <h4><b>WHERE DO WE SEND YOUR DATA</b></h4>
           Comments from visitors might undergo scrutiny via an automated service designed to detect and filter out spam.
            </div>

          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ReturnPolicy;
