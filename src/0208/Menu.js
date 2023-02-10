// import react from 'eslint-plugin-import/config/react'
import './Menu.css'
import { useState } from 'react'

function Menu() {
  const [activeMenu, setActiveMenu] = useState('')
  const menuItems = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li key={i}>
              <a
                href="#/"
                className={activeMenu === v ? 'active' : ''}
                onClick={() => {
                  setActiveMenu(v)
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default Menu
