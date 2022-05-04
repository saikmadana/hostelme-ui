import React, { Component } from "react";
import { UserCardModel } from "../../../models/user.model";
import UserCard from "../../../components/user-card/user-card.component";
import { BreadcrumbModel } from "../../../models/breadcrumb.model";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb.component";
import "./user-list.component.css";
import { makeAPIrequest, METHODS } from "../../../services/http.service";
import { httpPayload } from "../../../models/http-payload.model";
import { paginationModel } from "../../../models/pagination.model";
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface UserListState {
  users: Array<UserCardModel>;
  first: number;
  rows: number;
  totalItems: number;
};

export default class UserList extends Component<{}, UserListState> {

  constructor(props: any) {
    super(props);
    this.prepareBreadcrumbData();
  }

  state: UserListState = {
    users: [],
    first: 0,
    rows: 0,
    totalItems: 0
  }
  breadcrumbData: Array<BreadcrumbModel> = [];

  paginationData: paginationModel = {
    page: 1,
    limit: 10,
    totalItems: 10
  }

  prepareBreadcrumbData() {
    this.breadcrumbData = [{
      label: "Users"
    }]
  }

  async componentDidMount() { 
    let payload: httpPayload = {
      path: "user",
      method: METHODS.GET
    }

    try {
      let result = await makeAPIrequest(payload);
      this.setState({
        users: result.data.users,
        totalItems: result.data.pagination.total,
        rows: result.data.pagination.limit
      });
    } catch(err) {
      console.error(err, "Error in getting users data");
      this.setState({
        users: []
      });
    }
  }

  render() {
    return (
      <>
      <div className="breadcrumb__section">
        <Breadcrumb breadcrumbItems={this.breadcrumbData}/>
      </div>
      <div>
        {
          this.state.users.map((user, index) => {
            return <UserCard key={index} {...user} />
          })
        }
      </div>
      <Paginator first={this.state.first} totalRecords={this.state.totalItems} rows={this.state.rows} onPageChange={(e) => this.setState({first: e.first})}></Paginator>
      </>
    );
  }
}