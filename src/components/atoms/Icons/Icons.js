import styled from 'styled-components'

import { FaServer, FaRegStickyNote, FaPen, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa'

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
