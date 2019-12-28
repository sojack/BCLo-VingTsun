import React from 'react'
import SEO from "../components/seo"
import {Link} from "gatsby"

import logo from "../images/bclo-logo.png"

const Gallery = () => {

	return(
	<div className="trainingSetsContainer">
			<SEO title="Training Sets" />

		<div className="galleryHomeLink">
			<Link to="/"><img src={logo} alt=""/></Link>
		</div>
		<h1>Training Sets</h1>
		<table className="trainingSets">
		  <tr className="blue_01">
			<td>The Little Idea Training set</td>
			<td>The first form of Ving Tsun “Siu Lim Tau” covers the basic hand techniques and principles, focusing on the development of self concentration and internal energy.</td>
		  </tr>
		  <tr className="blue_01">
			<td>The Bridge Searching Training set</td>
			<td>The next form in Ving Tsun is “Chum Kiu”. Chum kiu is roughly translated as “seeking the bridge”. The bridge means the path to the opponent. It can be better explained by how we can best “fight” the way to the opponent.</td>
		  </tr>
		  <tr className="blue_01">
			<td>The Thrusting Finger Training set</td>
			<td>The third form of Ving Tsun is Bil Jee and it goes against a lot of the principles of the ones laid out before. It can be described as how one can make the best of a bad situation.</td>
		  </tr>
		  <tr className="blue_02">
			<td>Power Endurance Training</td>
			<td>
			  Wall punching bag and ceiling hanged punching bag are the basic power training that allow students to practice the concepts of center line and other physic related theories such as action and reaction. <br />
			  Wooden dummy is the essence of the three sets of Ving Tsun training sets, and is also the key to training your ability in Ving Tsun techniques.<br />
			  The weapons of Ving Tsun: the Ving Tsun choppers (eight chopping knives) and the six and half point long pole (Shaolin)
			</td>
		  </tr>
		  <tr className="blue_03">
			<td>Application – Sticky Hand Training</td>
			<td>
			  Single sticky hand – basic form of hand coordination and it is the initial training of your perception (feeling) through hand contact.<br />
			  Double sticky hand – through basic hands rotation, together with your perception student begins the formation of the gate of defense and attack, and to feel the balance of force from the hands engagement with your opponent.
			</td>
		  </tr>
		</table>

		<table className="trainingSets">
			<tr className="blue_01">
				<td>拳套 (Training Sets)</td>
			</tr>

			<tr className="blue_01">
				<td>i) 小念頭 - 包含詠春拳最主要的基本手法和心法，以及鍛鍊學者的 “意”和“氣”及專注力。</td>
			</tr>
			<tr className="blue_01">
				<td>ii) 尋橋 - 是尋找對方橋手的練習, 通過馬步上落和變化去達到防守及進攻的目的。</td>
			</tr>
			<tr className="blue_01">
				<td>iii) 標指 - 是練習一些獨特手法, 縱使在不利的環境下, 可以作出兩害相衡取其輕的最佳反應, 以圖敗 中求勝。</td>
			</tr>
			<tr className="blue_02">
				<td>拳功 (Power Endurance Training)</td>
			</tr>
			<tr className="blue_02">
				<td>- 牆包和吊包是最基本的”力道的訓練”, 在練習過程中能令學者領悟到中線理論和其他的力學原理。</td>
			</tr>
			<tr className="blue_02">
				<td>- 木人樁是另一種拳功的練習，而且加入了馬步的上落使到學者得以將拳套的招式運用於其中。</td>
			</tr>
			<tr className="blue_02">
				<td>- 詠春的八斬刀法和少林的六點半棍法也是練習拳功的另一種鍛鍊渠道。</td>
			</tr>
			<tr className="blue_03">
				<td>黐手練習 (Sticky Hand Training)</td>
			</tr>
			<tr className="blue_03">
				<td>i) 單黐手 - 練習基本手法的配合，通過有規式的轉動而達到感應及反應的兩種感覺！</td>
			</tr>
			<tr className="blue_03">
				<td>ii) 雙黐手 – 鍛練雙手的基本手法而達致左右兼顧和力道平衡的效果。學者能利用手部 “觸感“來 找尋對方的空隙，從而在交互轉動下而形成的攻防通道上， 達到 防守和進攻的目的，也能領悟 到“來留去送”、“甩手直衝”的心法！</td>
			</tr>
		</table>
	  </div>

	)
}


export default Gallery