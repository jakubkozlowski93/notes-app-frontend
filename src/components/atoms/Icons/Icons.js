import styled from 'styled-components'
import { FaServer, FaRegStickyNote, FaPen, FaQuestionCircle, FaDiceD20, FaSearch } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiWorld } from 'react-icons/bi'
import { MdOutlineArrowDropDown, MdLogin } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

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

export const Logo = styled(FaDiceD20)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: violet;
  display: block;
`
export const SearchIcon = styled(FaSearch)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: inherit;
  margin: 0px 7px;
  color: ${({ theme }) => theme.header.searchInputColor};
`
export const Message = styled(AiOutlineMail)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.header.searchInputColor};
  margin: 0px 10px;
  cursor: pointer;
  position: relative;
  display: inline-block;
`

export const Notifications = styled(IoMdNotificationsOutline)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.header.searchInputColor};
  margin: 0px 10px;
  cursor: pointer;
`

export const ArrowDown = styled(MdOutlineArrowDropDown)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: darkGrey;
`

export const ArrowRight = styled(MdLogin)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: darkGrey;
`

export const HamburgerIcon = styled(GiHamburgerMenu)`
  cursor: pointer;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xl};
`

export const Close = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: white;
`
