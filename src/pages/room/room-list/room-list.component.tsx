import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb.component";
import { RoomCard } from "../../../components/room/room-card/room-card.component";
import { BreadcrumbModel } from "../../../models/breadcrumb.model";
import { httpPayload } from "../../../models/http-payload.model";
import { makeAPIrequest, METHODS } from "../../../utils/http.util";
import "./room-list.component.css"

type RoomProps = {
	message: string;
};

export const RoomList = (props: RoomProps) => {

	let breadcrumbData: Array<BreadcrumbModel> = [];

	breadcrumbData = [{
		label: "Rooms"
	}, {
		label: "Details"
	}]

	let [rooms, updateRooms] = useState([]);

	useEffect(() => {
		getRoomData();
	}, [])

	const getRoomData = async () => { 
    let payload: httpPayload = {
      path: "room",
      method: METHODS.GET,
			local: true
    }

    try {
      let result = await makeAPIrequest(payload);
      updateRooms(result.data);
    } catch(err) {
      // console.error(err, "Error in getting users data");
      updateRooms([]);
    }
  }

	return (
		<>
			<div className="breadcrumb__section">
				<Breadcrumb breadcrumbItems={breadcrumbData} />
			</div>
			<div className="room-lisr__section">
				{
					rooms.map((room: any) => {
						return <RoomCard {...room}></RoomCard>
					})
				}
			</div>
			{/* <Paginator first={this.state.first} totalRecords={120} rows={this.state.rows} onPageChange={(e) => this.setState({ first: e.first })}></Paginator> */}
		</>
	);
}