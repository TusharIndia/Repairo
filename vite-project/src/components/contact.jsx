import React from "react";
import "../styles/contact.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Footer from "./child_components/footer";
import Header from "./child_components/header";


const Contact = () => {
  return (
    <>
      <div
        className="envato_tk_templates-template envato_tk_templates-template-elementor_header_footer single single-envato_tk_templates postid-112 qodef-qi--no-touch qi-addons-for-elementor-1.7.8 elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-112 e--ua-blink e--ua-chrome e--ua-webkit"
        data-elementor-device-mode="desktop"
      >
        <Header/>
        <div
          data-elementor-type="wp-post"
          data-elementor-id="112"
          className="elementor elementor-112"
          data-elementor-post-type="envato_tk_templates"
        >
          {/* section 1 */}

          <section className="elementor-section elementor-top-section elementor-element elementor-element-3aec792 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0da404f">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-3154c6a elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h1 className="elementor-heading-title elementor-size-default">
                        Contact Us
                      </h1>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-7c8da46 elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">
                        Start the conversation to establish good relationship
                        and business
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c2f7587">
                <div className="elementor-widget-wrap">
                  {/* Additional content can go here */}
                </div>
              </div>
            </div>
          </section>

          {/* section 2 */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-10a293b elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-68db40c">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-ea23b26 elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Let's Talk</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-f592882 elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</p>
              </div>
            </div>
            <div className="elementor-element elementor-element-040e20c elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-af95726 elementor-button-align-stretch elementor-widget elementor-widget-form">
              <div className="elementor-widget-container">
                <form className="elementor-form" method="post" name="New Form">
                  <input type="hidden" name="post_id" value="112" />
                  <input type="hidden" name="form_id" value="af95726" />
                  <input type="hidden" name="referer_title" value="Contact Us" />
                  <input type="hidden" name="queried_id" value="112" />

                  <div className="elementor-form-fields-wrapper elementor-labels-above">
                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50">
                      <label htmlFor="form-field-name" className="elementor-field-label">Name</label>
                      <input size="1" type="text" name="form_fields[name]" id="form-field-name" className="elementor-field elementor-size-lg elementor-field-textual" placeholder="Name" />
                    </div>
                    <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_f73cfdb elementor-col-50">
                      <label htmlFor="form-field-field_f73cfdb" className="elementor-field-label">Phone</label>
                      <input size="1" type="tel" name="form_fields[field_f73cfdb]" id="form-field-field_f73cfdb" className="elementor-field elementor-size-lg elementor-field-textual" placeholder="Phone" pattern="[0-9()#&amp;+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." />
                    </div>
                    <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                      <label htmlFor="form-field-email" className="elementor-field-label">Email</label>
                      <input size="1" type="email" name="form_fields[email]" id="form-field-email" className="elementor-field elementor-size-lg elementor-field-textual" placeholder="Email" required="required" aria-required="true" />
                    </div>
                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_a66be50 elementor-col-100 elementor-field-required">
                      <label htmlFor="form-field-field_a66be50" className="elementor-field-label">Subject</label>
                      <input size="1" type="text" name="form_fields[field_a66be50]" id="form-field-field_a66be50" className="elementor-field elementor-size-lg elementor-field-textual" placeholder="Subject" required="required" aria-required="true" />
                    </div>
                    <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                      <label htmlFor="form-field-message" className="elementor-field-label">Message</label>
                      <textarea className="elementor-field-textual elementor-field elementor-size-lg" name="form_fields[message]" id="form-field-message" rows="4" placeholder="Message"></textarea>
                    </div>
                    <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                      <button type="submit" className="elementor-button elementor-size-lg">
                        <span>
                          <span className="elementor-button-icon"></span>
                          <span className="elementor-button-text">Submit</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-87fbb00">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-766d526 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-infobox text-center text-icon-top-align elementor-animation-">
                    <div className="elementskit-box-header elementor-animation-">
                      <div className="elementskit-info-box-icon">
                        <i aria-hidden="true" className="elementkit-infobox-icon icon icon-customer-support-2"></i>
                      </div>
                    </div>
                    <div className="box-body">
                      <div className="elementskit-info-box-title">Sales Support</div>
                      <p>Quisque eu nec aenean gravida vestibulum dui convallis amet fermentum</p>
                      <div className="box-footer disable_hover_button">
                        <div className="btn-wraper">
                          <a href="#" target="_self" rel="" className="elementskit-btn whitespace--normal elementor-animation-">Chat Now!</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-16a07c7 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-infobox text-center text-icon-top-align elementor-animation-">
                    <div className="elementskit-box-header elementor-animation-">
                      <div className="elementskit-info-box-icon">
                        <i aria-hidden="true" className="elementkit-infobox-icon icon icon-Support-2"></i>
                      </div>
                    </div>
                    <div className="box-body">
                      <div className="elementskit-info-box-title">Help Center</div>
                      <p>Quisque eu nec aenean gravida vestibulum dui convallis amet fermentum</p>
                      <div className="box-footer disable_hover_button">
                        <div className="btn-wraper">
                          <a href="#" target="_self" rel="" className="elementskit-btn whitespace--normal elementor-animation-">Find Answer</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
          {/* section 3 */}


          {/* section 4 */}

          <section className="elementor-section elementor-top-section elementor-element elementor-element-4ac1e15 elementor-section-full_width elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3f4a721">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-f0cb612 elementor-widget elementor-widget-google_maps">
                    <div className="elementor-widget-container">
                      <div className="elementor-custom-embed">
                        <iframe
                          loading="lazy"
                          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=12&output=embed&iwloc=near"
                          title="London Eye, London, United Kingdom"
                          aria-label="London Eye, London, United Kingdom"
                          style={{ width: "100%", height: "500px", border: 0 }}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* section 5 */}

          <section className="elementor-section elementor-top-section elementor-element elementor-element-cc92501 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cc92501" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-75c82dc" data-id="75c82dc" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-0e0b5ae elementor-widget elementor-widget-heading" data-id="0e0b5ae" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">Follow our social media</h3>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-772d8a6 elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="772d8a6" data-element_type="widget" data-widget_type="social-icons.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-social-icons-wrapper elementor-grid">
                                    <span className="elementor-grid-item">
                                        <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-animation-float" target="_blank" rel="noopener noreferrer">
                                            <span className="elementor-screen-only">Facebook-f</span>
                                            <FaFacebookF />
                                        </a>
                                    </span>
                                    <span className="elementor-grid-item">
                                        <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-float" target="_blank" rel="noopener noreferrer">
                                            <span className="elementor-screen-only">Instagram</span>
                                            <FaInstagram />
                                        </a>
                                    </span>
                                    <span className="elementor-grid-item">
                                        <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-float" target="_blank" rel="noopener noreferrer">
                                            <span className="elementor-screen-only">Twitter</span>
                                            <FaTwitter />
                                        </a>
                                    </span>
                                    <span className="elementor-grid-item">
                                        <a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-float" target="_blank" rel="noopener noreferrer">
                                            <span className="elementor-screen-only">Youtube</span>
                                            <FaYoutube />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Contact;