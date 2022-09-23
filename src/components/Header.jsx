import { useEffect } from "react"

export default function Header({isOpen, setOpen}) {
	useEffect(()=>{
		console.log(isOpen);
	})

	return (
		<header>
			{/* 🧩 顶部的 Travel 标题 */}
			<a href="#">
				<div className="logo">Travel</div>
			</a>

			{/* 顶部更多菜单,🔥点击后取反,改变左侧视频的构图 */}
			{/* 如果是开启状态，则展示 ❌ 关闭按钮 */}
			<div 
				className={open ? "menu-logo active" : "menu-logo"} 
				onClick={
					()=>{setOpen(!isOpen)}
					}></div>
		</header>
	)
}