import { paginationModel } from "../../models/pagination.model";
import React, { Component } from "react";


export class Pagination extends Component<any, {}> {

    state: any = {
        pages: 1
    }


    componentDidMount() {
        this.setState({
            pages: this.props.totalItems/this.props.limit
        })
    }

    render() {
        return(
            <div>
                {/* {
                    new Array(this.state.pages).map((_, index) => {
                        return <div className={`paginate__item ${this.props.page === index? 'active' : ''}`} >{index}</div>
                    })
                } */}
            </div>
        );
    }
}