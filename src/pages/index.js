import React, {useRef} from "react"
import {Link} from "gatsby"
import SEO from "../components/seo"
import "../components/styles.css"

// import Modal from "../components/modal"
import logo from "../images/bclo-logo.png"
import waver from "../images/BCLO_Waiver.pdf"

function IndexPage() {
  
  const about_modal = useRef()
  const contact_modal = useRef()
  const gallery_modal = useRef()
  const history_modal = useRef()


  const event_about_open = (e)=>{ 
    e.preventDefault();
    about_modal.current.style.display = "block"
  }
  const event_contact_open = (e)=>{ 
    e.preventDefault();
    contact_modal.current.style.display = "block"
  }
  const event_history_open = (e)=>{ 
    e.preventDefault();
    history_modal.current.style.display = "block"
  }

  const event_modal_close = (e)=>{ 
    e.preventDefault();
    about_modal.current.style.display = "none";
    contact_modal.current.style.display = "none";
    history_modal.current.style.display = "none";
  }

  return(
    <div className="container">
      <SEO title="Home" keywords={[`Ving Tsun`, `academy`]} />
      <div className="item item_001 link"><img className="bclo-logo" src={logo} alt="BCLo-VingTsun Logo"/></div>
      <div className="item item_002 link"><a href="/" onClick={event_about_open}>About Us</a></div>
      <div className="item item_003"></div>
      <div className="item item_004 link"><a href="/" onClick={event_contact_open}>Contact Us</a></div>
      <div className="item item_005"> <h1 class='photoLabel'><em>Sifu</em> Benny Lo</h1>   </div>
      <div className="item item_006 link"><Link to="/gallery">Gallery</Link></div>
      <div className="item item_007"><h1 class='photoLabel'><em>Sifu</em> Benny’s family and Master S. Fung</h1> </div>
      <div className="item item_008 main_txt">
        {/* <h1 className="highlight">🎉 Open House 🎉</h1>
        <p><strong >Jan. 20, 2020, 7-10&nbsp;pm</strong> </p>
        <p><strong >Jan. 27, 2020, 7-10&nbsp;pm</strong> </p> */}
        <h1>2020 Class Schedule:</h1>
        <p><em>Every Monday night from 7 – 10 pm</em></p>
        <p><strong>January:</strong> 20, 27</p>
        <p><strong>February:</strong> 3, 10, 24</p>
        <p><strong>March:</strong> 2, 9, 23, 30 </p>
        <p><strong>April:</strong> 6, 20, 27</p>
      </div>
      <div className="item item_009 link"><Link to="/trainingSets">Training Sets</Link></div>
      <div className="item item_010 main_txt"></div>
      <div className="item item_011 link"><a href="/" onClick={event_history_open}>History</a></div>
      <div className="item item_014 main_txt">
        <h1>FROM FORM TO NO FORM</h1>
          <p>Ving Tsun’s emphasis on close contact combat technique lends itself to the training of <strong>reflexes</strong>.  Many of the unique features of Ving Tsun can be found from its famous <em>“Sticky Hand”</em> practice, the three training sets, and the <em>wooden dummy</em>. </p>
          <p>The development of reflexes must start with form-based training, such as the <em>training sets</em> and <em>wooden dummy</em> techniques.  This will all over time build a <strong>natural reflex</strong> that can be used in the <em>“Sticky Hand”</em> practice.</p>
          <p>The <em>“Sticky Hand”</em> practice models real fight scenarios, but with rules.  Students will be able to apply their form-learning techniques within this model, and eventually those forms will become “no form” over time as their reflexes develop.</p>
        <h1>從形至無形</h1>
          <p>詠春拳是一種近距離的搏鬥拳術，其主要訓練目的就是能夠達到出於本能反應、不花思考的應對能力！</p>
          <p>從有形的模式訓練-詠春的三套拳術（小念頭、尋橋和標指）再加上七節木人樁法，這全都是一種有形態的鍛鍊！然後再運用於黐手的訓練中, 時日一久就能夠產生自然反應的本能, 這就是形的誕生！</p>
          <p>詠春的黐手練習是一種模擬真實搏鬥但有規限方式的鍛鍊！學生將所學的拳套和木人樁法所謂有形態的技巧運用其中，長期的訓練下就會產生自然反應的感覺直至達到無形的境界！正所謂學之於有形、用之於無形，不加思索的應對能力才是練武的最高境界！</p>
      </div>

      <div className="item_footer">
        <p><a href={waver}>WAIVER</a>: Every student must read and understand this <a href={waver}>waiver</a> before participating in Ving Tsun activities.</p>
        <p className="copyright">&copy; {new Date().getFullYear()}, BCLo-VingTsun</p>

      </div>

      <div ref={about_modal} className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={event_modal_close}>&times;</span>
          <h1 className="txt_left">A brief introduction of <em>Sifu</em> Benny Lo:</h1>
          <p className="txt_left">Sifu Benny is a big fan of Chinese martial arts who studied Ving Tsun under Master Stewart H. Fung, a former student of Grand Master Yip Man in Hong Kong.  Benny started to learn Ving Tsun in 1990 and graduated from Master Fung in 1994.  His entire family are also students of Master Fung for many years, and his wife was the founder of the Ving Tsun Club at R.H. King Academy, TDSB where she has taught for over 10 years.  Benny and his wife are still active members of Master Fung’s Ving Tsun Research Class and  he has been teaching Ving Tsun on a part-time basis for many years.</p>
          <h1 className="txt_left">羅樹強師父簡介:</h1>
          <p className="txt_left">師承詠春派馮漢師父門下, 師公乃佛山派宗師葉問。自一九九Ｏ年開始學習詠春至今, 其家人均亦先後跟隨馮漢師父門下學習詠春拳多年，他太太更在其執教的中學內(R.H.King Academy-TDSB)創立了課餘詠春班超逾十年多，他們亦經常參與馮漢師父的詠春班及研究班, 多年來並以業餘性質開班授徒。</p>
        </div>
      </div>

      <div ref={contact_modal} className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={event_modal_close}>&times;</span>
          <h1>Contact Us</h1>
          <p>
            Cecilia Lo – <a href="tel:416-523-1978">(416) 523-1978</a><br/>
            Email: <a href="mailto:cecilo@rogers.com">cecilo@rogers.com</a>
          </p>
          <p><strong>Location:</strong><br />
          All Saints’ Church – 1100 Denison St., Markham, Ont.  L3R 0Z4  (NE of Denison/Warden)
          </p>
          <p><strong>Class Schedule:</strong><br />
          Every Monday night from 7 – 10 pm (2 sessions available 7 – 9 pm / 8 – 10 pm)
          </p>
        </div>
      </div>

      <div ref={gallery_modal} className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={event_modal_close}>&times;</span>
          <h1>Gallery</h1>
        </div>
      </div>

      <div ref={history_modal} className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={event_modal_close}>&times;</span>
          <h1>Origin of Ving Tsun: </h1>
          <p className="txt_left">Ving-Tsun originated from Shaolin Temple – the Chinese Buddhist temple which is the source of many modern day martial arts. Ving-Tsun does not have as long a history as Tai Chi or Karate. It was founded by a female named Yim, Ving-Tsun about 400 years ago.  Since its creation, it has become one of the most famous martial arts in the southern part of China.  Ving-Tsun was then brought by Master Yip, Man from the province of Canton (China) to Hong Kong in 1949. The art of “Ving-Tsun” blossomed and quickly spread throughout the world by his students. The late movie star, Bruce Lee was among them.</p>
          <p className="txt_left">詠春拳源於少林寺 – 該寺亦是很多現今武術的發源地！詠春拳沒有像其他武術如太極、空手道一般具有很長遠的歷史，它是由一位名嚴詠春的女士在約四百年前所始創。詠春拳自誕生以來便成為了中國南方其中一種最負盛名 的拳術，然後在1949年由一代宗師葉問師父將拳術從中國佛山帶到香港。 自此之後，詠春拳術在香港的發展一日千里，葉問宗師更是桃李滿門！他的眾多學生 -包括已故武打明星李小龍 – 並將詠春拳傳遍世界各地！</p>
        </div>
      </div>
      
    </div>
  )

}

export default IndexPage
