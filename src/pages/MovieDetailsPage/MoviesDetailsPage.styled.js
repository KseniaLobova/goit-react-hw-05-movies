import {  NavLink } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  padding: 7px 10px;
  margin-top: 20px;
  margin-left: 16px;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: rgb(59, 144, 235);
  border: transparent;
  border-radius: 6px;
  font-weight: 600;
  background-color: rgb(245, 236, 115);
  box-shadow: rgb(59, 144, 235) 0px 0px 13px 3px;
  transition: color 300ms linear 0s, box-shadow 300ms linear 0s;
`;

export const Subtitle = styled.h4`
font-weight: 800;
font-size: 25px;
color:rgb(59, 144, 235);`


export const List = styled.ul`
display:flex;
flex-direction:column;
gap: 15px;`
export const Items = styled.li`
list-style: none;

`

export const  LinkItem = styled(NavLink)`
text-decoration:none;
color: rgb(159, 164, 166);
font-size: 20px;
&.active{
    color:rgb(59, 144, 235);
}
`