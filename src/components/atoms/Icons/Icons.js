import styled from 'styled-components'

import { FaServer, FaRegStickyNote, FaPen, FaQuestionCircle, FaSignOutAlt, FaDiceD20, FaSearch } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiWorld } from 'react-icons/bi'

export const DashboardIcon = styled(FaServer)`
  font-size: ${({ theme }) => theme.fontSize.l};
  display: block;
  margin: 0px 20px;
`

export const NotesIcon = styled(FaRegStickyNote)`
  font-size: ${({ theme }) => theme.fontSize.l};
  display: block;
  margin: 0px 20px;
`

export const AddNoteIcon = styled(FaPen)`
  font-size: ${({ theme }) => theme.fontSize.l};
  display: block;
  margin: 0px 20px;
`

export const News = styled(BiWorld)`
  font-size: ${({ theme }) => theme.fontSize.l};
  display: block;
  margin: 0px 20px;
`

export const FAQIcon = styled(FaQuestionCircle)`
  font-size: ${({ theme }) => theme.fontSize.l};
  display: block;
  margin: 0px 20px;
`

export const LogoutIcon = styled(FaSignOutAlt)`
  font-size: ${({ theme }) => theme.fontSize.l};
  display: block;
  margin: 0px 20px;
`

export const Logo = styled(FaDiceD20)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: violet;
  display: block;
  margin: 0px 15px;
`
export const SearchIcon = styled(FaSearch)`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0px 7px;
`
export const Message = styled(AiOutlineMail)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0px 10px;
  cursor: pointer;
  position: relative;
  display: inline-block;
`

export const Notifications = styled(IoMdNotificationsOutline)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0px 10px;
  cursor: pointer;
`
