import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
margin-top: 50px;
`
export const Items = styled.li`
margin-bottom: 15px;
list-style: none;
display:flex;
align-items: center;
gap:10px;`

export const LinkItem = styled(Link)`
font-size:20px;
font-weight:500;
color: rgb(59, 144, 235);
text-decoration:none;
&:hover {
    color: rgb(159, 164, 166);
  }`