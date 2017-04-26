import React, { Component } from 'react';

// Components
import Buttons from './Buttons';

// Email Url
const mailTo = "mailto:?";
const emailSubject = "subject=".concat("look at this website");
const emailBody = "body=".concat("Hi, I found this website and thought you might like it http://www.geocities.com/wowhtml/");
const emailUrl = mailTo + emailSubject + "&" + emailBody;

const buttons = [
  // Finished Step
  {title: "complete", icon: 'fa fa-eye', action: 'View', url: 'https://food.ee/'},
  // Watch Our Video
  {title: "video", icon: 'fa fa-play-circle-o', action: 'Watch', url: 'https://vimeo.com/204566011'},
  // Download Our White Paper
  {title: "paper", icon: 'fa fa-file-text-o', action: 'Read', url: 'https://cdn2.hubspot.net/hubfs/2116999/mark_simonson_-_proxima_nova_alt_regular-webfont.woff2'},
  // Share via Facebook
  {title: "facebook", icon: 'fa fa-facebook', action: 'Share', url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffood.ee%2F&amp;src=sdkpreparse'},
  // Share via LinkedIn
  {title: "linkedin", icon: 'fa fa-linkedin', action: 'Share', url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A//food.ee/&title=Foodee&summary=&source='},
  // Share via Email
  {title: "email", icon: 'fa fa-envelope-o', action: 'Email', url: emailUrl}
];

class ShareButtons extends Component {
  renderButtons = () => {
    const { handleClick } = this.props;

    return buttons.map((button, index) => {
      const { title, icon, action, url } = button;
      return <Buttons
              key={index}
              title={title}
              number={index}
              icon={icon}
              button={action}
              url={url}
              handleClick={handleClick} />;
    });
  }
  render() {
    return (
      <div className="row">
        <div className="small-12 columns text-center">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

export default ShareButtons;
