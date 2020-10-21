import styled, { keyframes, css } from 'styled-components'

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.background.primary};
  display: flex;
  overflow: hidden;
  padding: 50px 10px;
  @media (min-width: 576px) {
    padding: 50px 15px;
  }
  @media (min-width: 768px) {
    padding: 50px 20px;
  }
  @media (min-width: 992px) {
    padding: 50px 40px;
  }
  @media (min-width: 1200px) {
    padding: 50px 80px;
  }

`

const bounceInLeft = keyframes`
  0%,60%,75%,90%,to {
    animation-timing-function:cubic-bezier(.215,.61,.355,1)
  }
  0% {
    opacity:0;
    transform:translate3d(-3000px,0,0) scaleX(3)
  }
  60% {
    opacity:1;
    transform:translate3d(25px,0,0) scaleX(1)
  }
  75% {
    transform:translate3d(-10px,0,0) scaleX(.98)
  }
  90% {
    transform:translate3d(5px,0,0) scaleX(.995)
  }
  to {
    transform:translateZ(0)
  }
`
const showNav = keyframes`
  0%,60%,75%,90%,to {
    animation-timing-function:cubic-bezier(.215,.61,.355,1)
  }
  0% {
    transform:translate3d(-3000px,0,0) scaleX(3)
  }
  90% {
    transform:translate3d(0px,0,0) scaleX(1)
  }
  to {
    transform:translateZ(0)
  }
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 0;
  padding: 0;
  max-height: 45px;
  @media screen and (max-width: 768px) {
    display: none;
    ${props => props.expanded && css`
        display: flex!important;
        animation: ${showNav} .1s;
        background-color: ${props => props.theme.colors.button.navbar};
        border-radius: 0px 10px 10px 0px;
        padding: 20px 15px;
        width: 75%;
      `
    }
  }
  @media screen and (max-width: 576px) {
    ${props => props.expanded && css`
        padding: 20px 7px;
      `
    }
  }
`

export const NavItem = styled.li`
`

export const NavLink = styled.a`
  position: relative;
  display: block;
  color: white;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 7px;
  letter-spacing: 2px;
  @media (min-width: 576px) {
    font-size: 9px;
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 992px) {
    font-size: 15px;
  }
  &::after {
    position: absolute;
    bottom: -3px;
    right: 3px;
    width: 100%;
    height: 2px;
    content: '';
    opacity: 0;
    display: block;
    transition: opacity 700ms linear;
    background-image: linear-gradient(270deg, white 0%, transparent 85%);
  }
  &:hover:after {
    display: block;
    opacity: 1;
    animation: ${bounceInLeft} 700ms;
    background-image: linear-gradient(270deg, white 0%, transparent 85%);
  }

`
export const Span = styled.span`
  background: white;
  transition: all 0.2s ease-in-out;
  height: 1px;
  border: 2px solid white;
  margin-bottom: 6px;
  display: block;
  border-radius: 2px;
  width: 15px;
  @media screen and (min-width: 576px) {
    width: 26px;
  }

`

export const Button = styled.button`
  display: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 10px 4px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.button.navbar};
  max-height: 45px;
  @media screen and (max-width: 768px) {
    display: block;
  }

  ${props => props.expanded && css`
      border-radius: 10px 0px 0px 10px;
      span:nth-child(1) {
        transform: translate(0px, 10px) rotate(45deg);
      }
      span:nth-child(2) {
        transform: scaleX(0);
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translate(0px, -10px) rotate(-45deg);
      }
    `
  }
`



