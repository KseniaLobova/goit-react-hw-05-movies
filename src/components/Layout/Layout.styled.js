import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
padding: 30px;
`
export const Navigation = styled.nav`
display:flex;
gap:60px;
align-items: center;

`
export const Link = styled(NavLink)`
font-weight: 800;
font-size: 30px;
color:rgb(159, 164, 166);

text-decoration:none;
  &.active {
    color: rgb(59, 144, 235);
  }
`

export const Header = styled.header`
display: flex;
    margin-bottom: 16px;
align-items: center;
padding: 10px 0px 12px 20px;
    height: 60px;
    border-bottom: 1px solid rgb(59, 144, 235);
    box-shadow: rgb(59, 144, 235) 10px 10px 5px 0px;`