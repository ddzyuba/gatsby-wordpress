import React from 'react';
import PropTypes from 'prop-types';

import {
  SocialMediaContainer,
  SocialMediaLink,
  SocialMediaIcon,
  HoverIcon
} from './SocialMediaStyles';
import { socialMediaCollection } from './utils';

const SocialMedia = ({ className, section }) => {
  const socialMedia = socialMediaCollection.map(item => (
    <SocialMediaLink
      target="_blank"
      rel="noopener"
      href={item.address}
      key={item.id}
    >
      <HoverIcon
        src={item.icons.hover}
        alt={`${item.name} icon hover`}
      />
      <SocialMediaIcon
        src={item.icons[section]}
        alt={`${item.name} icon`}
      />
    </SocialMediaLink>
  ));
  return (
    <SocialMediaContainer className={className}>
      {socialMedia}
    </SocialMediaContainer>
  );
};

export default SocialMedia;

SocialMedia.propTypes = {
  className: PropTypes.string,
  section: PropTypes.string.isRequired
};
