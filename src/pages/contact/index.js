import React, { useState} from "react"

import { useForm } from "react-hook-form";

import Layout from  '../../components/Layout'
import SEO from '../../components/Seo'
import Modal from  '../../components/Modal'

import { SectionContactStyle } from './styles'

import IlustraContact from '../../assets/ilustra-contact.png'
import IconEnvelope from '../../assets/icon-envelope.svg'
import IconEnvelopeError from '../../assets/envelope-error.svg'

export default function Home() {
  const [modalSuccess, setModalSuccess] = useState(false)
  const [modalError, setModalError] = useState(false)
  const [select, setSelect] = useState('')
 

  const { register, handleSubmit, errors } = useForm()

  function handleCloseModal() {
    setModalSuccess(false)
    setModalError(false)
  }

  function onSubmit(data) {
    setModalSuccess(true);
    
    fetch('https://mail.updatehub.io/contact', {
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name" : `${data.name}`,
        "email" : `${data.email}`,
        "extra_fields" : { 
          "subject" : `${data.subjectMatter}`,
          "device_number"  : `${data.numberDevice}`
        },
        "message" : `${data.message}`
      })
    })
    .then(res => res.json())
    .then((json) => {
      setModalSuccess(true)
    })
    .catch (function (error) {
        setModalError(true)
        console.log('Request failed', error);
    });
  }

  return <Layout>
    <SEO title="Get in touch" description="Please provide us with your information and how we can help you, and our team will get back to you with the information your need." lang="en" />
    <SectionContactStyle>
      <div className="container">
        <div className="left">
          <div className="text">
            <h1>Get in touch</h1>
            <p>Please provide us with your information and how we can help you, and our team will get back to you with the information your need.</p>
          </div>
          <img src={IlustraContact} className="image" alt="Contact"/>
        </div>
        <div className="box-form">
          <h2>Looking for further information or any help?</h2>
          <p>You can use the form below to contact us.</p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="full-name">Full name</label>
              <input 
                type="text" 
                placeholder="Your name"
                name="name"
                ref={register({ required : true, minLength: 2 })}
              />
              { 
                errors.name && errors.name.type === "required" && <p className="error">Name is required</p> 
              }
              { 
                errors.name && errors.name.type === "minLength" && <p className="error">This is field required min lenght of 2</p> 
              }
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                name="email"
                placeholder="Type your e-mail"
                ref={register({ required : true, pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g })}
              />
              { 
                errors.email && errors.email.type === "required" && <p className="error">E-mail is required</p> 
              }
              { 
                errors.email && errors.email.type === "pattern" && <p className="error">E-mail is invalid</p> 
              }
            </div>
            <div className="form-group">
              <label htmlFor="subject-matter">Subject matter</label>
              <select 
                name="subjectMatter"
                ref={register({ required : true })}
                onBlur={({target}) => setSelect(target.value)}
                
              >
                <option value="">Please select the desired topic</option>
                <option value="Plan">Plan</option>
                <option value="Support">Support</option>
                <option value="Get a quote">Get a quote</option>
              </select>
              { errors.subjectMatter && <p className="error">Select an option</p> }
              
              {
                select === "Get a quote" && (
                  <>
                    <input 
                      type="text" 
                      name="numberDevice"
                      placeholder="Inform the number of devices and plan of interest" 
                      className="input-interest"
                      ref={register({ required : true })}
                    />
                    { errors.numberDevice && <p className="error">Number of device is required</p> }
                  </>
                )
              }
              
            </div>
            <div className="form-group">
              <textarea 
                placeholder="How can we help you:"
                name="message"
                ref={register({ required : true })}
              ></textarea>
              { errors.message && <p className="error">Message is required</p> }
            </div>
            <div className="form-group">
              <input type="submit" value="Send Message"/>
            </div>
          </form>
        </div>
      </div>
    </SectionContactStyle>

    {
      modalSuccess && 
      <Modal
        icon={<IconEnvelope/>}
        title="Message sent successfully"
        text="Thank you for your contact, soon we will contact you"
        click={handleCloseModal}
      />
    }

    {
      modalError &&   
      <Modal
        icon={<IconEnvelopeError/>}
        title="Couldn't send message"
        text="There was an error and it was not possible to send your message."
        click={handleCloseModal}
      />
    }
    
  </Layout>
}
