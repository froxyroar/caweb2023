import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Link = ({ href, children }) => (
  <ScrollLink
    activeClass="active"
    to={href}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    {children}
  </ScrollLink>
);

export default Link;