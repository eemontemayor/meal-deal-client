import styled, { css } from 'styled-components'
import React,{Component} from 'react'


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;
const Container = styled.div`
  text-align: center;
`

export  const StyledButton = (props) => {


    return (
        <Container>
        <Button primary>{props.children}</Button>
        {/* <Button primary>{props.children}</Button> */}
    </Container>
    )
}
// export const SecondaryButton = (props) => {
//   return (
//     <Container>
 
//     <Button >{props.children}</Button>
// </Container>
// )
// }


 