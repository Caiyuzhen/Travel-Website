import { useState } from 'react'
import './App.css'

function App() {

	//🧭控制侧导航的开启与关闭
	const [isOpen,setOpen] = useState(false)

  	const [count, setCount] = useState(0)

	
	return (
	<div className="App">
		{/* 🔥🔥根据是否 open 来判断要显示哪个类名！！ 👇*/}
		<section className={isOpen ? "main-structure active" : "main-structure"}>
			<header>
				<a href="#">
					<div className="logo">Travel</div>
				</a>
				{/* 顶部更多菜单,🔥点击后取反 */}
				<div className="menu-logo" onClick={()=>{setOpen(!isOpen)}}></div>
			</header>
			<div className="content">
					{/* 自动播放视频 autoPlay */}
					<video className="active" src="/public/assets/videos/Island.mp4" autoPlay muted loop></video>
					<video  src="/public/assets/videos/spring.mp4" autoPlay muted loop></video>
					<video  src="/public/assets/videos/summer.mp4" autoPlay muted loop></video>
					<video  src="/public/assets/videos/autumn.mp4" autoPlay muted loop></video>
					<video  src="/public/assets/videos/winter.mp4" autoPlay muted loop></video>
				<div className="video-overlay"></div>
				<section className="text-description">
					<h1></h1>
					<h2></h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus dolores sunt minima id dolorum placeat nemo atque, porro accusamus tempora praesentium! In modi voluptate magni laboriosam est, eveniet molestiae!</p>
					<a href="#"></a>
				</section>
			</div>
			<footer>
				<a href="#"><img src="/assets/icons/facebook.svg" alt="facebook"/></a>
				<a href="#"><img src="/assets/icons/instagram.svg" alt="instagram"/></a>
				<a href="#"><img src="/assets/icons/twitter.svg" alt="twitter"/></a>
			</footer>

		</section>
		<section className="aside-menu">
			<a href="#">Island</a>
			<a href="#">Spring</a>
			<a href="#">Summer</a>
			<a href="#">Autumn</a>
			<a href="#">Winter</a>
		</section>
	</div>
	)
}

export default App
