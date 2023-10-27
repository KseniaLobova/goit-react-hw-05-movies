import styled from "styled-components";
import { Form, Field } from 'formik';
// export const Seachbar = styled.header`
// top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: #3f51b5;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);`

export const Container = styled.div`
margin-top:30px;`


export const Searchform = styled (Form) `
 display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border:3px solid rgb(59, 144, 235);
  border-radius: 10px;
  overflow: hidden;
   background-color: rgb(245, 236, 115);
  /* box-shadow: rgb(59, 144, 235) 0px 0px 13px 3px; */
  transition: color 300ms linear 0s, box-shadow 300ms linear 0s
`
export const Btn = styled.button`
 display: inline-block;
  width: 48px;
  height: 48px;
  background-color:rgb(245, 236, 115) ;
  /* border-left: 3px solid rgb(59, 144, 235); */
  /* opacity: 0.6; */
  border:0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;`

export const Input = styled(Field)`
 display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color:rgb(245, 236, 115);`

