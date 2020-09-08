import React, { Component } from "react";
import { UserCardModel } from "../../../models/user.model";
import UserCard from "../../../components/user-card/user-card.component";
import { BreadcrumbModel } from "../../../models/breadcrumb.model";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb.component";
import "./user-list.component.css";

interface UserListState {
  users: Array<UserCardModel>
};

export default class UserList extends Component<{}, UserListState> {

  constructor(props: any) {
    super(props);
    this.prepareBreadcrumbData();
  }

  state: UserListState = {
    users: []
  }
  breadcrumbData: Array<BreadcrumbModel> = [];

  prepareBreadcrumbData() {
    this.breadcrumbData = [{
      label: "Users"
    }, {
      label: "Details"
    }]
  }

  componentDidMount() {
    fetch("json/users.json")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            users: result.data.users
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            users: []
          });
        }
      );
  }

  render() {
    return (
      <>
      <div className="breadcrumb__section">
        <Breadcrumb breadcrumbItems={this.breadcrumbData}/>
      </div>
      <div>
        {
          this.state.users.map((user) => {
            return <UserCard {...user} />
          })
        }
      </div>
      </>
    );
  }
}