import React, { useEffect, useState } from 'react'
import "./Style_Contact.css"
import ReCAPTCHA from "react-custom-google-recaptcha";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

function Contact_Page2() {
  const [loading, setLoading] = useState(false);
  const customId = "contact-id";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error('Please enter your full name.', { autoClose: 3000 },{ toastId: customId });
      return;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error('Please enter a valid email address.', { autoClose: 3000 },{ toastId: customId });
      return;
    }

    if (!formData.query.trim()) {
      toast.error('Please enter your query.', { autoClose: 3000 },{ toastId: customId });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('https://main-backend-39e3.onrender.com/submit-form', formData);
      setLoading(false)
      console.log(response.data); // You can handle the response as needed
      toast.success('Form submitted successfully!', { autoClose: 3000 });
      // Clear form fields after successful submission
      setFormData({
        fullName: '',
        email: '',
        query: '',
      });

    } catch (error) {
      setLoading(false);
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form.', { autoClose: 3000 }, { toastId: customId });

    }
  };


  return (
    <>
      <section className="section_2" id="sec2" data-snap-point data-index="2">
        <div className="tec2" >
          <h1> ENQUIRY </h1>
        </div>
        {/* <h1 className="section_2_text"> CONTACT US </h1> */}
        <h1 className=" section_2_title" data-aos="zoom-in" data-aos-duration="1100"> I'M INTERESTED IN </h1>
        <div className="section_2_tabs">
          <a className='my_link' href='#'>General Enquiry</a>
          <a className='my_link' href=''>Buisenesses</a>
          <a className='my_link' href=''>Investor</a>
          <a className='my_link' href=''>Media</a>
        </div>

        <div className="section_2_form ">
          <h3 style={{ textAlign: "center" }}> THANKS FOR YOUR INTEREST IN REDPHANTOM</h3>
          <p style={{ textAlign: "center" }}> Please provide your most valuable information, so we can help you better.</p>
          <div className="form_content ">
            <form method='post' onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Fulll Name" />
                    <input type="email" name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control" id="exampleFormControlInput1" placeholder="Email Id" />
                    <p> Confirm you are not robot </p>
                    <div className="d-lg-flex justify-content-between align-items-center">

                      <div className="section_2_captcha">
                        <ReCAPTCHA
                          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                          hl="en"
                        />
                      </div>

                    </div>
                    <p> Your information is secured under our privacy policy </p>

                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-12 ">
                  <textarea name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className="form-control" id="exampleFormControlTextarea1"
                    rows="14" placeholder="Query">
                  </textarea>
                </div>
                <div className="submit"> <button type="submit"> Submit </button> </div>
              </div>
              {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                  <Loader />
                </div>
              )}
              <ToastContainer position='top-right' autoClose={4000} limit={1} style={{ zIndex: 99999, position: "fixed", top: "10%" }} closeButton />
            </form>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact_Page2