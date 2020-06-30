import React from "react"
import * as styles from "./page_container.module.scss"

const PageContainer = ({ children }) => {
  return <div className={styles[`page-container`]}>{children}</div>
}

export default PageContainer
