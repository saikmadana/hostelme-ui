import React from "react";
import "./room-card.component.css";

type RoomCardProps = {
    id: number;
    pic: string;
    rent: number;
    type: string;
    sharing: number;
    desc: string;
};

export const RoomCard = (props: RoomCardProps) => {
    return (
        <div className="room-card--section">
            <div className="room-card">
                <div className="room-card--img">
                    <img className="room-card--img-val" src={props.pic} alt="room"/>
                </div>
                <div className="room-card--content">
                    <div className="room-card--prop">
                        <span className="room-prop--name">Room Number: </span>
                        <span className="room-prop--value">{props.id}</span>
                    </div>
                    <div className="room-card--prop">
                        <span className="room-prop--name">Rent: </span>
                        <span className="room-prop--value">{props.rent}</span>
                    </div>
                    <div className="room-card--prop">
                        <span className="room-prop--name">Room Type: </span>
                        <span className="room-prop--value">{props.type}</span>
                    </div>
                    <div className="room-card--prop">
                        <span className="room-prop--name">Sharing: </span>
                        <span className="room-prop--value">{props.sharing}</span>
                    </div>
                    <div className="room-card--prop">
                        <span className="room-prop--name">Description: </span>
                        <span className="room-prop--value">{props.desc}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}