import React, { Component } from "react";
import { BreadcrumbModel } from "../../models/breadcrumb.model";
import "./breadcrumb.component.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

interface BreadcrumbInterface {
    breadcrumbItems: Array<BreadcrumbModel>
}

export default class Breadcrumb extends Component<BreadcrumbInterface, {}> {

    render() {
        return (
            <div className="breadcrumb__wrapper restrict-width-inner">
            {
                this.props.breadcrumbItems.map((item, index) => {
                    return <div key={index} className="breadcrumb__item">
                        <div className="label">
                            {item.label}
                        </div>
                        <div className="icon">
                            {(index !== this.props.breadcrumbItems.length-1) && <span><FontAwesomeIcon icon={faAngleRight}/></span>}
                        </div>
                    </div>
                })
            }
            </div>
        );
    }

}