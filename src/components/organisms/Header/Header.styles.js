import styled from 'styled-components'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  grid-row: 1/2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 30px;
  box-shadow: 0 10px 20px -7px rgb(160 44 219 / 7%);
  border-bottom: 1px solid ${({ theme }) => theme.header.borderBottom};
  background: ${({ theme }) => theme.header.background};
  transition: 0.3s ease-in;

  @media ${device.medium} {
    grid-column: 2/3;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

export const MessageIconCounter = styled.span`
  position: relative;

  &::before {
    position: absolute;
    content: '3';
    background: green;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    top: -10px;
    right: -3px;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`

export const NotificationsIconCounter = styled.span`
  position: relative;
  &::before {
    position: absolute;
    content: '5';
    background: fuchsia;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    top: -10px;
    right: 3px;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`
export const UserLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 10px 0 20px;
  }

  h3 {
    color: darkGrey;
  }
`
export const WrapperList = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  right: 0;
  top: 59px;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  background: ${({ theme }) => theme.header.background};
  border: 1px solid ${({ theme }) => theme.header.borderBottom};
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  color: darkGrey;
  border-radius: 2px;
  z-index: 999;

  ${UserLogin}:hover & {
    visibility: visible;
  }
`
