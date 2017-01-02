'use strict';

import React from 'react';
import { Image } from 'react-bootstrap';
require('./homepage.scss');

const bioInfo = [
  {
    level: 2,
    header: "Front End Developer at Sharper Image",
    text: "Breathing some usability, modern javascript and css into a j2ee/jsp ecommerce " +
    "platform using react.js and a whole lot of love."
  },
  {
    level: 3,
    header: "Full-stack JavaScript aficionado",
    text: "Building fun projects using react, node, express and optimism."
  },
  {
    level: 3,
    header: "Autism Daddy",
    text: "fighting silence with Play Project techniques"
  },
  {
    level: 3,
    header: "Infrequent Wargamer",
    text: "When I can, I play Warmachine and Hordes"
  },
  {
    level: 3,
    header: "Occasional Rocker and Roller",
    text: "I can sometimes be found in the diviest of dives, playing tunes with my oldest friends"
  }
];

const socialMediaIcons = [
  {
    name: 'Twitter',
    fa: 'twitter',
    url: 'https://twitter.com/ingusmat'
  },
  {
    name: 'LinkedIn',
    fa: 'linkedin',
    url: 'https://www.linkedin.com/in/matthewburleson'
  },
  {
    name: 'Instagram',
    fa: 'instagram',
    url: 'https://www.instagram.com/ingusmat/'
  },
  {
    name: 'Reddit',
    fa: 'reddit-alien',
    url: 'https://www.reddit.com/user/ingusmat'
  },
];

export default class Homepage extends React.Component {
  render() {
    return (
      <div class="homepage">
          <div className="bio-strata row">
            <div className="opposite-bio col-sm-6">
              <Image className="bio-pic" responsive src="/img/ingus-el-coz.jpg" />
            </div>
            <div className="bio col-sm-6 col-md-5 col-lg-5">
              <h1>Ingus Mat Burleson</h1>
              {bioInfo.map((item) =>
                  <div className="bio-item">
                    {item.level === 2 && <h2>{item.header}</h2>}
                    {item.level === 3 && <h3>{item.header}</h3>}
                    <p>{item.text}</p>
                  </div>
              )}
              <ul className="social-media-links horizontal row">
                {socialMediaIcons.map((link) =>
                  <li><a href={link.url}><i className={"fa fa-" + link.fa} aria-hidden="true"></i></a></li>
                )}
              </ul>
            </div>
          </div>
          <div className="project-strata row">
            <p classname="col-xs-12">howdy</p>
          </div>
      </div>
    );
  }
}
