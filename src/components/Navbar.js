import React, {useState, useEffect} from "react"
import './Navbar.css'
import {IonIcon} from "react-ion-icon";

const NavbarLink = (props) =>{
    const {item, changeData} = props
    const {active, link, title, icon, id} = item
    
    
    return (
        <li className={(active) ? "active" : ""} onClick={() => changeData(id)}>
            <b></b> 
            <b></b> 
            <a href={link}>
                <span className="icon">
                    <IonIcon name={icon} id="icon" />
                </span>
                <span className="title">{title}</span>
            </a>
        </li>
    )
}
const Navbar = () => {


    const [navbarData , setNavbarData] = useState([])
    const [toggle , setToggle] = useState(false)
    const [navWidth , setNavWidth] = useState("300px")

    const changeData = (id) => {
        console.log("active" + " @ " + id)
        for (let index = 0; index < navbarData.length; index++) {
            if (index !== id ){
                navbarData[index].active = false
                setNavbarData([...navbarData])
            } else {
                navbarData[index].active = true
                setNavbarData([...navbarData])
            }
            
        }
    }
    useEffect(() => {
        setNavbarData([
            {  id:0 , link : "#" , icon : "home-outline" , title: "Home",  },
            {  id:1 , link : "#" , icon : "person-outline" , title: "Profile",   },
            {  id:2 , link : "#" , icon : "chatbubble-outline" , title: "Messages",  },
            {  id:3 , link : "#" , icon : "lock-closed-outline" , title: "Setting",  },
            {  id:4 , link : "#" , icon : "help-outline" , title: "Help",  },
            {  id:5 , link : "#" , icon : "lock-closed-outline" , title: "Password",  },
            {  id:6 , link : "#" , icon : "exit-outline" , title: "Logout", },
        ])
    }, [])
    
        
        const handleShow = () => {
            setToggle(!toggle);
            if(!toggle){
                setNavWidth("66px")
            }else{
                setNavWidth("300px")
            }
        }
    return (
        <>
        <div className="navigation" style={{width : `${navWidth}`}} >
            <ul className="list">
                {
                    navbarData.map(item => <NavbarLink item={item} changeData={changeData}/>)
                }
            </ul>
        </div>
        <div className="toggle" onClick={handleShow}>
            {(toggle) ? <IonIcon name="menu-outline" /> :<IonIcon name="close-outline" />}
        </div>
        </>
    )
}

export default Navbar