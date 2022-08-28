import styled from "styled-components"
import { Link } from "react-router-dom"

export const SRecordCard = styled.div`
  background: #EAFAFF;
  width: 100%;
  border: 1px solid #AED1EA;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 205px;
  gap: 28px;
  padding: 14px;
`

export const SRecordCardImageContainer = styled.div`
  width: 266px;
  min-width: 266px;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
`

export const SRecordCardImage = styled.img`
  height: 100%;
`

export const SRecordCardInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
`

export const SRecordCardFullName = styled.span`
  font-weight: 500;
  font-size: 18px;
`

export const SRecordCardLaptopName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`

export const SRecordCardLink = styled(Link)`
  color: #4386A9;
  margin-top: 40px;
`