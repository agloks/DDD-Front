import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>Decentralized Donation Dao</h1>
        <p>
          Apoie projetos sociais de maneira descentralizada{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul className="safadin">
        <li>
          <button
            onClick={() => {
              window.open("https://xd.adobe.com/view/00066e6a-f9dc-4c07-a8a2-cdec6affaed0-5555/?fullscreen","_self")
            }}
          >
            Protótipo
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.open("https://client.aragon.org/#/ddd/","_self")
            }}
          >
            Aplicação
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.open("https://mumbai.polygonscan.com/address/0x78e944FbEc04169cBFfbFAc2178b41ac78EaADE1","_self")
            }}
          >
            Token
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.open("https://github.com/agloks/DDD-Blockchain", "_self")
            }}
          >
            Github
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
