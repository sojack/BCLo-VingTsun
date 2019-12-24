import React from "react"
import SEO from "../components/seo"
import "../components/styles.css"

import logo from "../images/bclo-logo.png"
// import photo_01 from "../images/BL-bw.jpg"
// import photo_02 from "../images/BL--6.jpg"

const IndexPage = () => (
  <div class="container">
    <SEO title="Home" keywords={[`Ving Tsun`, `academy`]} />
    <div class="item item_001 link"><img class="bclo-logo" src={logo} alt="BCLo-VingTsun Logo"/></div>
    <div class="item item_002 link"><a href="#">About Us</a></div>
    <div class="item item_003"></div>
    <div class="item item_004 link"><a href="#">Contact Us</a></div>
    <div class="item item_005">
      {/* <p>Sifu Benny Lo</p>
      <img src={photo_01} alt="Sifu Benny Lo" title="Sifu Benny Lo" /> */}
    </div>
    <div class="item item_006 link"><a href="#">Gallery</a></div>
    {/* <div class="item item_007"><img src={photo_02} /></div> */}
    <div class="item item_007"></div>
    <div class="item item_008 main_txt">
      <h1><em>Sifu</em> Benny Lo</h1>
      <p>A big fan of Chinese martial arts who learned Ving Tsun under Master Stewart H. Fung, a former student of Grand Master Yip Man in Hong Kong.  Benny started to learn Ving Tsun in 1990, graduated from Master Fung in 1994 and he is still an active member of Master Fung’s Ving Tsun Research Class.  He also teaches Ving Tsun on a part-time basis.</p>
      <h1>羅樹強師父簡介:</h1>
      <p>師承詠春派馮漢師父門下, 師公乃佛山派宗師葉問。自一九九Ｏ年開始學習詠春至今, 並經常參與馮漢師父的詠春班及研究班, 亦以業餘性質開班授徒。</p>
    </div>
    <div class="item item_009 link"><a href="#">Training Sets</a></div>
    <div class="item item_010 main_txt">

    </div>
    <div class="item item_011"></div>
    {/* <div class="item item_012">12</div> */}
    <div class="item item_013"></div>
    <div class="item item_014 main_txt">
    <h1>FROM FORM TO NO FORM</h1>
      <ul>
        <li>Ving Tsun’s emphasis on close contact combat technique lends itself to the training of reflexes.  Many of the unique features of Ving Tsun are to be found from its famous “Sticky Hand” practice, the three training sets and the wooden dummy. </li>
        <li>The development of reflexes must be starting with the form-based training, such as the training sets and the wooden dummy techniques.  All of these over time will become a natural reflex that can be used in the “Sticky Hand” practice.</li>
        <li>The “Sticky Hand” practice models the real fight scenarios, but with rules.  So students will be able to apply their form-learning techniques within this model and eventually those forms will become “no form” over time as their reflexes develop.</li>
      </ul>
      <h1>從形至無形</h1>
      <ul>
        <li>詠春拳是一種近距離的搏鬥拳術，其主要訓練目的就是達到有本能反應、不花思考的應對能力！</li>
        <li>從有形的模式訓練-詠春的三套拳術（小念頭、尋橋和標指）再加上七節木人樁法，這全是一種有形態的段練！然後再運用於黐手的訓練中,時日以久就能夠產生自然反應的本能, 這就是形的誕生！</li>
        <li>詠春的黐手練習是一種模擬真實搏鬥但有規限方式的段練！學生將所學的拳套和木人樁法所謂有形態的技巧運用其中，長期的訓練下就會產生自然反應的感覺直至達到無形的境界！</li>
      </ul>
    </div>
  </div>
)

export default IndexPage
