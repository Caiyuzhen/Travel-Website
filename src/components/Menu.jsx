import { useEffect } from "react"
import MenuItem from "./MenuItem"
import { CONTENT_INFO } from '/public/assets/data/content'  


export default function Menu ({setMenuName}){ //🌟把 setMenuName 的这个方法传作为属性递给 Menu 组件

	useEffect(()=>{
		console.log(CONTENT_INFO);
	})
	return (
		<section className="aside-menu">
			{/* 🔥点击后就设置为对应的类名, 小白写法 */}
			{/* <button onClick={()=>{setMenuName('island')}}>Island</button>
			<button onClick={()=>{setMenuName('spring')}}>Spring</button>
			<button onClick={()=>{setMenuName('summer')}}>Summer</button>
			<button onClick={()=>{setMenuName('autumn')}}>Autumn</button>
			<button onClick={()=>{setMenuName('winter')}}>Winter</button> */}

			{/* 🔰做进一步的抽象 */}
			{/* <MenuItem menuName='island' setMenuName={setMenuName}/>
			<MenuItem menuName='spring' setMenuName={setMenuName}/>
			<MenuItem menuName='summer' setMenuName={setMenuName}/>
			<MenuItem menuName='autumn' setMenuName={setMenuName}/>
			<MenuItem menuName='winter' setMenuName={setMenuName}/> */}

			{/* 🔵引入数据, Object.keys 表示返回一个对象的所有【键】 */}
			{Object.keys(CONTENT_INFO).map((item) => {
				return ( //⚡️记得写 return ！
					<MenuItem menuName={item} setMenuName={setMenuName}/>
				)
			})}
			
		</section>
	)
}