import { Link } from "gatsby"
import React from "react"

const Menu = () => {
  const items = [
    'Intervenciones',
    'Proyectos',
    'Acciones',
    'Palabras',
    'Bio'
  ]
  return (
  <nav>
    {items.map(item => (
      <Link 
        key={item}
        to={`/${item.toLowerCase()}`}
        activeClassName="active"
        style={{
          display: 'inline-block',
          marginRight: '20px',
          textDecoration: 'none'
        }}
      >
        {item}
      </Link>
    ))}
  </nav>
  )
}

export default Menu
