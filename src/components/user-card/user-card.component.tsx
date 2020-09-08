import React, { Component } from "react";
import { UserCardModel } from "../../models/user.model";
import "./user-card.component.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faBan } from '@fortawesome/free-solid-svg-icons'

export default class UserCard extends Component<UserCardModel, {}> {



    render() {
        return (
            <div className="user__card">
                <div className="card__item user__card--picture">
                    <div className="picture"><img src={this.props.picture} alt="user_picture"></img></div>
                </div>
                <div className="card__item user__card--info">
                    <div>
                        {this.props.name}, {this.props.designation}
                    </div>
                    <div>
                        {this.props.city}
                    </div>
                </div>
                <div className="card__item user__card--contact">
                    <div>{this.props.mobile}</div>
                    <div>{this.props.email}</div>
                </div>
                <div className="card__item user__card--room">
                    <div className="">{this.props.room}</div>
                    <div className="">{this.props.joinedDate}</div>
                </div>
                <div className="card__item user__card--action">
                    <div className="action edit"><FontAwesomeIcon icon={faPencilAlt} /></div>
                    <div className="action block"><FontAwesomeIcon icon={faBan} /></div>
                </div>
            </div>
        );
    }
}