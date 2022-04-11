import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartShopping ,faUser } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { NavLink } from "react-router-dom"

class TaskBar extends React.Component {
    render() {
        return (
            <nav className="taskbar-box">
                <div className="taskbar-box__container">

                    <NavLink to="mini-store" className={(navData) => "task-bar-item " + (navData.isActive ? "task-bar-item--active" : "")} >
                        <FontAwesomeIcon className="task-bar-item__icon" icon={faHome} />
                        <h1 className="task-bar-item__title">Home</h1>
                    </NavLink>


                    <NavLink to="mini-store/cart" className={(navData) => "task-bar-item " + (navData.isActive ? "task-bar-item--active" : "")} >
                        <FontAwesomeIcon className="task-bar-item__icon" icon={faCartShopping} />
                        <h1 className="task-bar-item__title">Cart</h1>
                    </NavLink>

                    <NavLink to="mini-store/info" id="nav-Info" className={(navData) => "task-bar-item " + (navData.isActive ? "task-bar-item--active" : "")} >
                        <FontAwesomeIcon className="task-bar-item__icon" icon={faUser} />
                        <h1 className="task-bar-item__title">Infomation</h1>
                    </NavLink>



                </div>

            </nav>
        )
    }
}

export default TaskBar