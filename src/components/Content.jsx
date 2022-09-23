import { useEffect } from 'react'
import { CONTENT_INFO } from '/public/assets/data/content'  


export default function Content({menuName}) {

	// useEffect(()=>{
	// 	console.log(CONTENT_INFO[itemName].src);
	// },[])
	return(
		<div className="content">
			{/* 🌟 className="active" 则会自动播放视频 autoPlay */}
			{/* <video className={menuName==="island" ? 'active' : ''}  src="/public/assets/videos/Island.mp4" autoPlay muted loop></video>
			<video className={menuName==="spring" ? 'active' : ''}  src="/public/assets/videos/spring.mp4"  autoPlay muted loop></video>
			<video className={menuName==="summer" ? 'active' : ''}  src="/public/assets/videos/summer.mp4"  autoPlay muted loop></video>
			<video className={menuName==="autumn" ? 'active' : ''}  src="/public/assets/videos/autumn.mp4"  autoPlay muted loop></video>
			<video className={menuName==="winter" ? 'active' : ''}  src="/public/assets/videos/winter.mp4"  autoPlay muted loop></video> */}
			{/* 🔵⚡️ 抽象出列表的方法 */}
			{Object.keys(CONTENT_INFO).map((itemName,index) => {
		
				return (
					<video 
						//⚡️itemName 就是实际的 spring、summer 等字符串了！
						className={menuName===itemName ? 'active' : ''}  
						src={CONTENT_INFO[itemName].src}  //通过对象的 key（itemName） 来获取对应的 value（src）
						key={index}
						autoPlay 
						muted 
						loop
					></video>
				)
			})}

		{/* 📺⚡️ 视频的背景色，会根据当前 video 来改变切换时的背景色 */}
		<div className={`video-overlay  video-overlay-${menuName}`}></div>

		<section className="text-description">
			{/* 🔥拿到数据内的值 */}
			<h1>{CONTENT_INFO[menuName].h1}</h1>
			<h2>{CONTENT_INFO[menuName].h2}</h2>
			<p>{CONTENT_INFO[menuName].p}</p>
			<a href="#"></a>
		</section>
	</div>
	)
}