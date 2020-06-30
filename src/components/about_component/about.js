import React from "react"
import * as styles from "./about.module.scss"
import { useSpring, animated, useTransition } from "react-spring"
import { Spring } from "react-spring/renderprops"
import { useState } from "react"
import { withNavigationContext } from "react-awesome-slider/dist/navigation"

const About = withNavigationContext((data) => {
  console.log(data)

  return (
    <div className={styles[`container`]}>
      <Spring
        delay="800"
        from={{ opacity: 0, marginTop: -100 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ mass: 2.5, tension: 180, friction: 12 }}
      >
        {(props) => (
          <div style={props} className={styles[`main-content`]}>
            <h1>Welcome to my page</h1>
          </div>
        )}
      </Spring>
    </div>
  )
})

export default About
