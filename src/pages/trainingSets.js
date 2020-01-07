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
			<td>THE FIRST FORM OF VING TSUN "SIU LIM TAU" COVERS THE BASIC HAND TECHNIQUES AND PRINCIPLES, FOCUSING ON THE DEVELOPMENT OF SELF CONCENTRATION AND INTERNAL ENERGY.</td>
		  </tr>
		  <tr className="blue_01">
			<td>The Bridge Searching Training set</td>
			<td>THE NEXT FORM IN VING TSUN IS "CHUM KIU". CHUM KIU IS ROUGHLY TRANSLATED AS "SEEKING THE BRIDGE". THE BRIDGE MEANS THE PATH TO THE OPPONENT. IT CAN BE BETTER EXPLAINED BY HOW WE CAN BEST "FIGHT" THE WAY TO THE OPPONENT.</td>
		  </tr>
		  <tr className="blue_01">
			<td>The Thrusting Finger Training set</td>
			<td>THE THIRD FORM OF VING TSUN IS BIL JEE AND IT GOES AGAINST A LOT OF THE PRINCIPLES OF THE ONES LAID OUT BEFORE. IT CAN BE DESCRIBED AS HOW ONE CAN MAKE THE BEST OF A BAD SITUATION.</td>
		  </tr>
		  <tr className="blue_02">
			<td>Power Endurance Training</td>
			<td>
			  <p>WALL PUNCHING BAG AND CEILING HANGED PUNCHING BAG ARE THE BASIC POWER TRAINING THAT ALLOW STUDENTS TO PRACTICE THE CONCEPTS OF CENTER LINE AND OTHER PHYSICS RELATED THEORIES SUCH AS ACTION AND REACTION.</p>
			  <p>PRACTICE WITH THE WOODEN DUMMY IS THE ESSENCE OF THE THREE SETS OF VING TSUN TRAINING SETS, AND IS ALSO THE KEY TO TRAINING THE STUDENT’S ABILITY IN VING TSUN TECHNIQUES.</p>
			  <p>THE WEAPONS OF VING TSUN ARE: THE VING TSUN CHOPPERS (EIGHT CHOPPING KNIVES) AND THE SIX AND HALF POINT LONG POLE (SHAOLIN)</p>
			</td>
		  </tr>
		  <tr className="blue_03">
			<td>Application – Sticky Hand Training</td>
			<td>
			  <p>SINGLE STICKY HAND – A BASIC FORM OF HAND COORDINATION AND IT IS THE INITIAL TRAINING OF THE STUDENT’S PERCEPTION (FEELING) THROUGH HAND CONTACT.</p>
			  <p>DOUBLE STICKY HAND – THROUGH BASIC HANDS ROTATION AND TOGETHER WITH PERCEPTION, THE STUDENT BEGINS THE FORMATION OF THE GATE OF DEFENSE AND ATTACK, AND TO FEEL THE BALANCE OF FORCE FROM THE HANDS ENGAGEMENT WITH AN OPPONENT. </p>
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
				<td>ii) 雙黐手 – 鍛鍊雙手的基本手法而達致左右兼顧和力道平衡的效果。學者能利用手部“觸感”來找尋 對方的空隙以便在互相轉動下而產生的攻防通道上， 達到 “來留去送” 、 “甩手直衝”的心法！</td>
			</tr>
		</table>
	  </div>

	)
}


export default Gallery