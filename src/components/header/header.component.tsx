import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
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
	wrapperRef: any;
	setWrapperRef: any;
	constructor(props: HeaderProps) {
		super(props);

		// setTimeout(() => {
			this.wrapperRef = React.createRef()
		// }, 2000)
        // this.setWrapperRef = this.setWrapperRef.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidUpdate() {}

	componentDidMount(){
		document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

	/**
     * Alert if clicked on outside of element
     */
	 handleClickOutside(event: any) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            alert('You clicked outside of me!');
        }
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
			<section className="header common-body-padding">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="actions">
					<div className="action search">
						<FontAwesomeIcon size='1x' icon={faSearch} />
					</div>
					<div className="action notifications">
						<span>
							<FontAwesomeIcon size='1x' icon={faBell} />
						</span>
					</div>
					<div className="action menu">
						<span ref={this.wrapperRef} onClick={() => this.showMenu()}>
							{this.state.showMenu && <FontAwesomeIcon size='1x' icon={faTimes} />}
							{!this.state.showMenu && <FontAwesomeIcon size='1x' icon={faBars} />}
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