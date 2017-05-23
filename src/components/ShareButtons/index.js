import React, { Component } from 'react';

// Components
import Buttons from './Buttons';

// Email Url
const mailTo = "mailto:?";
const bccTo = "bcc=order@food.ee";
const emailSubject = "subject=".concat("Awesome corporate catering service - Foodee");
const emailBody = "body=".concat("Hey, have you heard of Foodee?%0A%0AThey’re giving out Amazon gift cards with every order until the end of the month! All you have to do is share a post on social media. Offer ends May 31st, so get it while you can!%0A%0ACheck them out here: http://try.food.ee/share-n-earn");
const emailUrl = mailTo + emailSubject + "&" + bccTo + "&" + emailBody;

const buttons = [
  // Finished Step
  {title: "complete", icon: 'fa fa-eye', action: 'View', url: 'https://food.ee/'},
  // Share via Facebook
  {title: "facebook", icon: 'fa fa-facebook', action: 'Share', url: 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ftry.food.ee%2Fshare-n-earn%3Futm_campaign%3DFoodee%2BSocial%2BLocker%26utm_medium%26utm_source%3Demail%26utm_content%3Dsocial_locker%26utm_term&amp;src=sdkpreparse'},
  // Watch Our Video
  {title: "video", icon: 'fa fa-play-circle-o', action: 'Watch', url: 'https://help.food.ee/customer/en/portal/articles/2721494-how-does-foodee-work-#ryan-video'},
  // Download Our White Paper
  {title: "paper", icon: 'fa fa-file-text-o', action: 'Read', url: 'https://www.food.ee/blog/corporate-catering-six-steps-organizing-perfect-work-event/'},
  // Share via LinkedIn
  {title: "linkedin", icon: 'fa fa-linkedin', action: 'Share', url: 'https://www.linkedin.com/shareArticle?mini=true&url=http%3A//try.food.ee/share-n-earn&title=Foodee&summary=&source='},
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
