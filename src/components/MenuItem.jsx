export default function MenuItem ({menuName, setMenuName}) {
	return (
		<button 
			onClick={()=>{setMenuName(menuName)}}> {menuName}
		</button>
	)
}