import styled from "styled-components";

export const Container = styled.div`
display:flex;
gap:50px;`

export const Title = styled.h1`
 
  font-size: 50px;
  font-weight: 500;
  color: rgb(59, 144, 235) ;

  letter-spacing: 5px;
  text-shadow: 3px 3px 20px rgb(159, 164, 166),
    -2px 1px 30px rgb(159, 164, 166);`

export const Subtitle = styled.h2`
    color:rgb(59, 144, 235);`

export const List = styled.ul`
display: flex;
flex-direction: row;
gap: 15px;`


export const Items = styled.li`
    list-style:none`