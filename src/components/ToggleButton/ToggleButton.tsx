import React from 'react'
import { IconMenu, IconX } from '@tabler/icons-react';
import logo from '../../assets/react.svg'
import './ToggleButton.css'

interface ToggleButtonType {
  status: boolean
  changeStatus: (status: boolean) => void
}

const ToggleButton: React.FC<ToggleButtonType> = ({status, changeStatus}) => {
  return (
    <>
    <section className='icon-section'>
      {status 
        ? <IconX onClick={() => changeStatus(!status)} /> 
        : <IconMenu onClick={() => changeStatus(!status)} /> 
      }
    </section>
    {
      status && (

    <aside className='aside-nav'>
      <section className='logo-section'>
        <img src={logo} alt="" className='logo' />
      </section>
      <nav className='navigation'>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </nav>
    </aside>
      )
    }
    </>
  )
}

export default ToggleButton