import React from "react"
import { Link } from 'gatsby'

import Layout from  '../components/Layout'
import SEO from '../components/Seo'
import Icon from '../components/Icon'

import { SectionHeroStyle, SectionWhatStyle, TitleStyle, SectionFeaturesStyle, SectionSuccessStyle } from '../styles/home'

import IlustraHero from '../assets/ilustra-hero.png'
import TxtButton from '../assets/txt-button.png'
import ButtonPlay from '../assets/button-play.png'
import IconClock from '../assets/icon-clock.svg'
import IconSecure from '../assets/icon-secure.svg'
import IconPlethora from '../assets/icon-plethora.svg'
import IconAutomation from '../assets/icon-automation.svg'
import IconProtection from '../assets/icon-protection.svg'
import IconDocumentation from '../assets/icon-documentation.svg'
import IlustraSuccess from '../assets/ilustra-success.png'
import Github from '../assets/github.svg'
import ArrowBlue from '../assets/arrow-right-blue.svg'

export default function Home() {
  return <Layout>
    <SEO title="Home" description="ShellHub is a modern SSH server for remotely accessing Linux devices via command line (using any SSH client) or web-based user interface. Register now." lang="en" />

    <SectionHeroStyle>
      <div className="container">
        <div className="text">
          <TitleStyle>21st century SSH</TitleStyle>
          <h1>Get seamless remote access to any Linux device</h1>
          <p>Centralized SSH for the edge and cloud computing</p>
          <Link to="/get-started">Get Started</Link>
        </div>
        <img src={IlustraHero} className='hero' alt="Ilustration Hero"/>
      </div>
    </SectionHeroStyle>

    <SectionWhatStyle>
      <div className="container">
        <button className="video">
          <div className="play">
            <img src={ButtonPlay} className="icon" alt="Icon play"/>
            <img src={TxtButton} className="txt-label" alt="Text button whats"/>
          </div>
        </button>
        <div className="text">
          <TitleStyle>What is ShellHub?</TitleStyle>
          <p>ShellHub is a modern SSH server for remotely accessing Linux devices via the command line (using any SSH client) or a web-based user interface.</p>
        </div>
      </div>
    </SectionWhatStyle>
    
    <SectionFeaturesStyle>
      <div className="container">
        <h2>Features</h2>
        <div className="all">
          <div className="card">
            <Icon url={<IconClock/>} />
            <h3>Easy and Quick to Set Up</h3>
            <p>ShellHub incorporates the use of Docker containers to facilitate the integration of new devices into the platform, simplifying configuration.</p>
          </div>
          <div className="card">
            <Icon url={<IconSecure/>} />
            <h3>Secure Remote Communication</h3>
            <p>ShellHub uses the SSH communication protocol to allow data exchange with the guarantee of privacy and integrity.</p>
          </div>
          <div className="card">
            <Icon url={<IconPlethora/>} />
            <h3>A plethora of Devices, Connectable Right Away</h3>
            <p>Support multiple devices connected at the same time, different networks, and integration with architectures, including ARM (32 and 64 bits), which is used in most embedded devices, like Raspberry Pi, and i.MX6.</p>
          </div>
          <div className="card">
            <Icon url={<IconAutomation/>} />
            <h3>Automation Scripts</h3>
            <p>Make the processes more efficient by automating many tasks. ShellHub allows the user to execute the scripts remotely.</p>
          </div>
          <div className="card">
            <Icon url={<IconProtection/>} />
            <h3>Protection Against DDoS Attacks</h3>
            <p>Sniffing and DDoS attacks require direct access to the device's port. ShellHub works without using the regular SSH ports and allows access by the authorized agents, only.</p>
          </div>
          <div className="card">
            <Icon url={<IconDocumentation/>} />
            <h3>Documentation and Technical Support</h3>
            <p>Provide the documentation, technical support to get you started as quickly as possible to integrate the devices in ShellHub.</p>
          </div>
        </div>
      </div>
    </SectionFeaturesStyle>

    <SectionSuccessStyle>
      <div className="container">
        <img src={IlustraSuccess} className="image" alt="Ilustration success"/>
        <div className="text">
          <p>Every  successful software is adapted to its users needs. The best way to adapt the software forits users needs is allowing its users to directly influence its development and direction, thusopen-sourcing ShellHub was the obvious choice.</p>
          <p>We believe the future is Open Source and wecount on you to join us in this journey.</p>

          <a href="https://github.com/shellhub-io/shellhub" target="_blank" rel="noreferrer">
            <div className="txt">
              <Github/>
              <strong>Join thousands of developers who are creating the best remote access platform.</strong>
            </div>
            <ArrowBlue/>
          </a>
        </div>
      </div>
    </SectionSuccessStyle>
    
  </Layout>
}
