import React from 'react'
import { FaGithub, FaGitter, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'gatsby'
import  { FooterStyle, FlashMenuStyle } from './styles'

import Icon from  '../Icon'

import IconDocumentation from '../../assets/icon-documentation.svg'
import IconArticle from '../../assets/icon-article.svg'
import Logo from '../../assets/logo.svg'
import Insany from '../../assets/insany.svg'

function Footer() {
  return (
    <>
      <FlashMenuStyle>
        <div className="container">
          <div className="main">
            <a href="https://docs.shellhub.io/" target="_blank" rel="noreferrer" className="item">
              <Icon  url={<IconDocumentation/>}/>
              <div className="txt">
                <h3>Documentation</h3>
                <p>Follow our getting started guide and learn the inner workings of ShellHub</p>
              </div>
            </a>
            <Link to="/articles" className="item">
              <Icon url={<IconArticle/>}/>
              <div className="txt">
                <h3>Article</h3>
                <p>Meet the freedom of Open Source technologies</p>
              </div>
            </Link>
          </div>
        </div>
      </FlashMenuStyle>
      <FooterStyle>
        <div className="container">
          <div className="main">
            <div className="left">
              <Logo/>
              <ul>
                <li><a aria-label="Github" href="https://github.com/shellhub-io" target="_blank" rel="noreferrer"><FaGithub/></a></li>
                <li><a aria-label="Gitter" href="https://gitter.im/shellhub-io/community?at=5e30882a6f9d3d3498f5989d" target="_blank" rel="noreferrer"><FaGitter/></a></li>
                <li><a aria-label="Facebook" href="https://www.facebook.com/ossystems/" target="_blank" rel="noreferrer"><FaFacebookF/></a></li>
                <li><a aria-label="Twitter" href="https://twitter.com/os_systems?lang=en" target="_blank" rel="noreferrer"><FaTwitter/></a></li>
                <li><a aria-label="LinkedIn" href="https://www.linkedin.com/company/ossystems/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a></li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li><Link to="/get-started">Get started</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><a href="https://docs.shellhub.io/" target="_blank" rel="noreferrer">Documentation</a></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
              <div className="text">
                <h3>Get seamless remote access to any Linux device</h3>
                <Link to="/get-started">Get Started</Link>
              </div>
            </div>
          </div>
          <div className="copy">
            <p>©{new Date().getFullYear()} Shellhub - All rights reserved</p>
            <div className="made">
              <span>Design by:</span>
              <a href="https://insanydesign.com/" target="_blank" rel="noreferrer">
                <Insany/>
              </a>
            </div>
          </div>
        </div>
      </FooterStyle>
    </>
    
  )
}

export default Footer
