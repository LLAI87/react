import './Menu.css'
import { useState } from 'react'

function Menu_teacher() {
  const [activeText, setActiveText] = useState('')
  const menuItems = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li key={i}>
              <a
                href="#/"
                onClick={() => {
                  setActiveText(v)
                }}
                className={`${activeText === v ? 'active' : ''}`}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>
      {/* <li>
          <a
            href="#/"
            onClick={() => {
              setActiveText('首頁')
            }}
            className={`${activeText === '首頁' ? 'active' : ''}`}
          >
            首頁
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              setActiveText('關於我們')
            }}
            className={`${activeText === '關於我們' ? 'active' : ''}`}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              setActiveText('產品')
            }}
            className={`${activeText === '產品' ? 'active' : ''}`}
          >
            產品
          </a>
        </li>
      </ul> */}
    </>
  )
}

export default Menu_teacher
