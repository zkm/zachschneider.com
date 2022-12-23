import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from 'styled-system';

const IconContainer = styled.svg`
  ${color};
  fill: currentcolor;
`;

IconContainer.displayName = 'IconContainer';

const IconComponent = ({ content, iconName, viewBox, size, ...props }) => (
  <IconContainer width={size} height={size} viewBox={viewBox} {...props}>
    <span className="screen-reader-text">{iconName}</span>
    {content}
  </IconContainer>
);

IconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  content: PropTypes.node,
  iconName: PropTypes.node,
  viewBox: PropTypes.string,
};

IconComponent.defaultProps = {
  size: 24,
};

export default IconComponent;
