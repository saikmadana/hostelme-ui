import React, { Component } from 'react';
import { StyledMenu } from './header-menu.styles';
import { Link } from 'react-router-dom';

interface HeaderMenuProps {
	closeMenu: () => void;
}

class Menu extends Component<HeaderMenuProps, {}> {

	// history = useHistory();

	navItems = [
		{
			name: "Home",
			id: "home"
		},
		{
			name: "Rooms",
			id: "rooms"
		},
		{
			name: "Users",
			id: "users"
		},
	];

	render() {
		return (
			<StyledMenu>
				{
					this.navItems.map((item) => {
						return <div key={item.id} className="nav__item">
							<span onClick={this.props.closeMenu}>
								<Link to={`/${item.id}`} >{item.name}</Link>
							</span>
						</div>
					})
				}
			</StyledMenu>
		)
	}
}
export default Menu;