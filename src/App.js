import React from "react"
import * as styles from "./App.module.scss"
import { FrontPageComponent } from "./components/index"
import { Cursor } from "./components/commons/index"

//Config grid system
import { setConfiguration } from "react-grid-system"
setConfiguration({ defaultScreenClass: "lg", gridColumns: 12 })

function App() {
  const handleMouseMove = (e) => {
    const cursor = document.getElementById("cursor")
    cursor.style.left = `${e.pageX - 10}px`
    cursor.style.top = `${e.pageY - 10}px`
  }

  return (
    <div onMouseMove={(e) => handleMouseMove(e)} className={styles[`app`]}>
      <FrontPageComponent />
      <Cursor />
    </div>
  )
}

export default App
