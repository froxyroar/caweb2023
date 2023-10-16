import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => (
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
