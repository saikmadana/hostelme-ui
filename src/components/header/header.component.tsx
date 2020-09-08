import React, { Component } from 'react';
import "./header.component.css";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Menu from "../header-menu/header-menu";


interface HeaderProps {
	message: string
};

interface HeaderState {
	showMenu: boolean
};


export default class Header extends Component<HeaderProps, HeaderState> {

	constructor(props: HeaderProps) {
		super(props);
	}

	static defaultProps = {
		message: 'Hello everyone!'
	}

	state: HeaderState = {
		showMenu: false
	};


	showMenu() {
		this.setState({
			showMenu: (!this.state.showMenu)
		});
	}

	render() {
		return (
			<section className="header">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
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
						<span onClick={() => this.showMenu()}>
							{this.state.showMenu && <FontAwesomeIcon icon={faTimes} />}
							{!this.state.showMenu && <FontAwesomeIcon icon={faBars} />}
						</span>
						{this.state.showMenu &&
							<div>
								<Menu closeMenu={() => this.showMenu()}/>
							</div>
						}
					</div>
				</div>
			</section>
		);
	}

}