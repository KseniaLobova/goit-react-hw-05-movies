import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
padding: 30px;
`
export const Navigation = styled.nav`
display:flex;
gap:30px;
`
export const Link = styled(NavLink)`
text-decoration:none;`