import { useState } from 'react'
import './App.css'
// import { CONTENT_INFO } from '../public/assets/data/content'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Menu from './components/Menu'


function App() {
	// const [count, setCount] = useState(0)
	const [isOpen,setOpen] = useState(false)//🧭控制侧导航的开启与关闭
	const [menuName, setMenuName] = useState('island')//控制左侧显示什么视频

	return (
	<div className="App">
		{/* 🔥🔥根据是否 open 来判断要显示哪个类名！！ 👇*/}
		<section className={isOpen ? "main-structure active" : "main-structure"}>
			<Header isOpen={isOpen} setOpen={setOpen}/>
			<Content menuName={menuName}/>
			<Footer />
			<Menu setMenuName={setMenuName}/>{/*🌟props 可以传递方法！把 setMenuName 的这个方法传作为属性递给 Menu 组件！*/}
		</section>
	</div>
	)
}

export default App
