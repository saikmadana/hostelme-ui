import React, { useState, useEffect } from "react";
import { UserCardModel } from "../../../models/user.model";
import UserCard from "../../../components/user-card/user-card.component";
import { BreadcrumbModel } from "../../../models/breadcrumb.model";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb.component";
import "./user-list.component.css";
import { makeAPIrequest, METHODS } from "../../../utils/http.util";
import { httpPayload } from "../../../models/http-payload.model";
import { paginationModel } from "../../../models/pagination.model";
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface IUserListState {
  users: UserCardModel[];
  first: number;
  rows: number;
  totalItems: number;
};

export const UserList = () => {


  const initialUserState = {
    users: [],
    first: 0,
    rows: 0,
    totalItems: 0
  };

  const [userList, setUserList] = useState<IUserListState>(initialUserState);

  const breadcrumbData: Array<BreadcrumbModel> = [{ label: "Users" }];

  let paginationData: paginationModel = {
    page: 1,
    limit: 10,
    totalItems: 10
  }

  useEffect(() => {
    fetchUserList({
      page: 1,
      limit: 10
    })
  }, []);

  const fetchUserList = async (data: any) => {
    let payload: httpPayload = {
      path: "user",
      method: METHODS.POST,
      body: data
    }

    try {
      let result = await makeAPIrequest(payload);
      setUserList({
        users: result.data.users,
        totalItems: result.data.pagination.total,
        rows: result.data.pagination.limit,
        first: result.data.pagination.page * (result.data.pagination.limit - 1)
      });
    } catch (err) {
      console.error(err, "Error in getting users data");
      setUserList(initialUserState);
    }
  }

  const pageChange = (e: any) => {
    fetchUserList({
      page: (e.page) + 1,
      limit: 10
    })
  }

  return (
    <>
      <div className="breadcrumb__section">
        <Breadcrumb breadcrumbItems={breadcrumbData} />
      </div>
      <main className="main__section restrict-width-inner">
        <div>
          {
            userList.users.map((user, index) => {
              return <UserCard key={index} {...user} />
            })
          }
        </div>
        {
          (userList.users && userList.users.length > 0) &&
          <Paginator first={userList.first} totalRecords={userList.totalItems} rows={userList.rows} onPageChange={(event) => pageChange(event)}></Paginator>
        }
      </main>
    </>
  );
}