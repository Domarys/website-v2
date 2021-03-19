/* using de disable command to stop the warning about the variable not used - the use of this import is necessary to JSX*/
/* eslint-disable-next-line */
import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'

import { PageNotFoundStyle } from '../styles/404'

import Icon from '../components/Icon'

import IconSmile from '../assets/smile.svg'
import Logo from '../assets/logo.svg'

export default function page404() {
  return (
    <>
      <Helmet title="ShellHub | Pagina não encontrada"></Helmet>
      <PageNotFoundStyle>
        <div className="cont">
          <div className="left">
            <Icon url={<IconSmile/>} />
            <h1>404</h1>
            <h2>Page not foud</h2>
            <p>The page you were looking for cannot be found or does not exist.</p>
          </div>
          <div className="right">
            <Logo/>
            <Link to="/">Go back to home page</Link>
          </div>
        </div>
      </PageNotFoundStyle>
    </>
  )
}
