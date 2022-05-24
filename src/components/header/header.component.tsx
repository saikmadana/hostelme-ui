import React, { useRef } from 'react';
import "./header.component.css";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu } from 'primereact/menu';
import { useHistory } from 'react-router-dom';

interface HeaderProps {
	message: string
};


export const Header = ({ message = 'Hello There!' }: HeaderProps) => {

	let menu: any = useRef(null);
	const history = useHistory();

	const HOME_PATH = "/";

	const items = [
		{ label: 'Users', icon: '', command: () => history.push("/users") },
		{ label: 'Rooms', icon: '', command: () => history.push("/rooms") }
	];

	const showMenuCon = (event: any) => {
		menu.current.toggle(event);
	}

	const navigateToHome = () => {
		if(history.location.pathname !== HOME_PATH) {
			history.push(HOME_PATH);
		}
	}

	return (
		<section className='header-wrapper'>
			<div className="header-content restrict-width-inner">
				<div className="logo" onClick={navigateToHome}>
					<img src={logo} alt="logo" />
				</div>

				<div>{message}</div>
				
				<div className="actions">
					<div className="action search">
						<FontAwesomeIcon icon={faSearch} />
					</div>
					<div className="action notifications">
						<span>
							<FontAwesomeIcon icon={faBell} />
						</span>
					</div>
					<div className="action menu">
						<span aria-controls="popup_menu" aria-haspopup onClick={(event) => showMenuCon(event)} >
							<FontAwesomeIcon icon={faBars} />
						</span>
						<Menu model={items} popup ref={menu} id="popup_menu"/>
					</div>
				</div>
			</div>
		</section>
	);

}