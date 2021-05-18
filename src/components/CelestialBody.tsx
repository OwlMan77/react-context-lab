import React from 'react'
import { ThemeContextConsumer } from '../providers/ThemeProvider'
import './CelestialBody.css'

const CelestialBody: React.FC = () => { 
    return (
     <ThemeContextConsumer>
        {context => (
          <div className={`${context.theme} image`} onClick={context.toggleTheme}>
            <div className={`${context.theme} ball`} />
          </div>
        )}
      </ThemeContextConsumer>
    )
}

export default CelestialBody