import React from "react"
import { PageContainer } from "../commons/index"
import * as styles from "./front_page_component.module.scss"
import { Container, Row, Col } from "react-grid-system"
import CodingSvg from "./coding_svg"

export default function FrontPageComponent() {
  return (
    <PageContainer>
      <div className={styles[`front-page`]}>
        <Container style={{ height: "100%", padding: "0" }} fluid>
          <Row style={{ height: "100%" }} nogutter>
            <Col xs={4}>
              <div className={styles[`brief-info`]}>
                <Container style={{ padding: "0" }}>
                  <Row nogutter>
                    <Col xs={1.5}></Col>
                    <Col xs={10.5}>
                      <h3 className={styles[`name`]}>
                        <span className={styles[`domain-name`]}>huythac</span>
                        .com
                      </h3>
                      <div className={styles[`hero-text`]}>
                        <h1>Web developer</h1>
                        <h4>
                          Specialized in full-stack technologies using Node.js
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col xs={7}>
              <div className={styles[`middle`]}>
                <div className={styles[`coding-svg-container`]}>
                  <div className={styles[`svg`]}>
                    <CodingSvg />
                  </div>
                </div>
                <div className={styles[`extra`]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tortor.consectetur adipiscing elit. consectetur adipiscing
                    elit. consectetur adipiscing elit
                  </p>
                  <button className={styles[`button`]}>Learn more</button>
                </div>
              </div>
            </Col>
            <Col xs={1}>
              <div className={styles[`nav`]}>
                <div className={styles[`icon--menu`]}></div>
                <ul className={styles[`navs`]}>
                  <li
                    className={`${styles[`nav-item`]} ${
                      styles[`nav-item--active`]
                    }`}
                  >
                    Home
                  </li>
                  <li className={`${styles[`nav-item`]} `}>Education</li>
                  <li className={`${styles[`nav-item`]}`}>Skills</li>
                  <li className={`${styles[`nav-item`]}`}>Projects</li>
                  <div className={`${styles[`nav-item`]}`}>Contact</div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </PageContainer>
  )
}
