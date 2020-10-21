import { Nav, NavItem, NavList, NavLink, Button, Span } from './style'
import { useState } from 'react';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Nav>
      <Button expanded={expanded} onClick={() => setExpanded(!expanded)}>
        <Span />
        <Span />
        <Span />
      </Button>
      <NavList expanded={expanded}>
        <NavItem>
          <NavLink>Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Posts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Habilidades</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Contato</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  )
}

export default Navbar
