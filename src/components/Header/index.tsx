import Logo from '../../assets/logo.svg'
import { HeaderContainer } from './style'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <span>
          <img src={Logo} alt="" />
        </span>
        <nav>
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>
          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </div>
  )
}
