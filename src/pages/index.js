import React from "react"
import "../components/styles.css"
import logo from "../images/bclo-logo.png"
import photo_01 from "../images/BL-bw.jpg"
import photo_02 from "../images/BL--6.jpg"
const IndexPage = () => (
  <div class="container">
      <div class="item item_001"><img class="bclo-logo" src={logo} /></div>
      <div class="item item_002"><a href="#">About Us</a></div>
      <div class="item item_003"></div>
      <div class="item item_004"><a href="#">Contact Us</a></div>
      <div class="item item_005">
        <p>Sifu Benny Lo</p>
        <img src={photo_01} alt="Sifu Benny Lo" title="Sifu Benny Lo" />
      </div>
      <div class="item item_006"><a href="#">Gallery</a></div>
      <div class="item item_007"><img src={photo_02} /></div>
      <div class="item item_008"></div>
      <div class="item item_009"><a href="#">Training Sets</a></div>
      <div class="item item_010"></div>
      <div class="item item_011"></div>
      <div class="item item_012"></div>
      <div class="item item_013"></div>
      <div class="item item_014"></div>
  </div>
)

export default IndexPage
