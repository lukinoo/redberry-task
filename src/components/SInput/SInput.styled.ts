import styled from "styled-components"

interface SInputProps {
  isError?: boolean
}

export const SInput = styled.input<SInputProps>`
border: ${props => {
    if(props.isError){
      return "2px solid #E52F2F !important"
    }
    return "1px solid #8ac0e2"
  }};
  width: 100%;
  padding: 1.1rem;
  font-family: inherit;
  font-size: 1.1rem;
  border-radius: 5px;
  margin: 0.5rem 0;
  outline: none;
`