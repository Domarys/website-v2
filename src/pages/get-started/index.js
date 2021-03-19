import React from "react"
import { Link } from 'gatsby'
import Layout from  '../../components/Layout'
import SEO from '../../components/Seo'

import Icon from '../../components/Icon'

import { SectionGetStartedStyle } from './styles'

/* eslint-disable-next-line */
import Arrow from '../../assets/arrow-md.svg'
import IconEdition from '../../assets/icon-edition.svg'
import IconCloud from '../../assets/icon-cloud.svg'

export default function Home() {
  return <Layout>
    <SEO title="Get started" description="How do you want to get started?" lang="en" />
    <SectionGetStartedStyle>
      <div className="container">
        <div className="title">
          <h1>Get started</h1>
          <h2>How do you want to get started?</h2>
        </div>
        <div className="all">
          <div className="card">
            <div className="title-card">
              <Icon url={<IconEdition/>}/>
              <h3>Community Edition</h3>
              <p>A fully open-source version to access remote devices.</p>
            </div>
            <p>Host your own instance of ShellHub and count on the freedom to adapt it to your needs. </p>
            <span>Check the ShellHub installation guide and start right now!</span>
            <a  href="https://docs.shellhub.io/" target="_blank" rel="noreferrer" >Get started</a>
          </div>
          <div className="card">
            <div className="title-card">
              <Icon url={<IconCloud/>}/>
              <h3>Cloud</h3>
              <p>The simplicity of a hosted and managed cloud service.</p>
            </div>
            <p>Access all benefits of ShellHub on a cloud-hosted service for your convenience.</p>
            <span>Register yourself and start it for free.</span>
            <a  href="https://www.shellhub.io/register" target="_blank" rel="noreferrer" >Try cloud preview for free</a>
          </div>
          <div className="card">
            <div className="title-card">
              <Icon url={<IconCloud/>}/>
              <h3>Enterprise Edition </h3>
              <p>The ShellHub's control in your hands.</p>
            </div>
            <p>Get a quote tailored for your business. </p>
            <span>Have all ShellHub infrastructure running into your own server.</span>
            <Link  to="/contact">Contact us</Link>
          </div>
        </div>
      </div>
    </SectionGetStartedStyle>
  </Layout>
}
