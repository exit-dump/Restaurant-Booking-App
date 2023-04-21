import type { FC } from 'react'
import Login from '../components/Login'

const login: FC = () => {
  console.log('login component on the outside is running i guess')
  return (
    <Login />
  )
}

export default login
