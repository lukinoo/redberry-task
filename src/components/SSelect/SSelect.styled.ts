import styled from "styled-components"

interface SSelectProps {
  isError?: boolean
}


export const SSelect = styled.select<SSelectProps>`
  border: ${props => {
    if(props.isError){
      return "2px solid #E52F2F"
    }
    return "none"
  }};
  width: 100%;
  height: 3.7rem;
  background: #ebebeb;
  outline: none;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 500;
`