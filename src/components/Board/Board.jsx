/* eslint-disable react/prop-types */
import Card from "../TicketCard/TicketCard";
import "./Board.css";
import profile from "../../images/profile.png";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiAperture } from "react-icons/bi";

function Board({ tickets, header }) {
  return (
    <div className="board-container">
      <div className="board-header">
        <div>
          <div className="flex-gap">
            <BiAperture className="bg-color-status-icon" />
            <p>{header}</p>
            <span>{tickets.length}</span>
          </div>
        </div>

        <div className="flex-gap">
          <AiOutlinePlus className="bg-color-icon" />
          <BiDotsHorizontalRounded className="bg-color-icon" />
        </div>
      </div>

      <div className="board-hero">
        {tickets.map((ticket) => {
          return (
            <Card
              key={ticket.id}
              id={ticket.id}
              profileURL={profile}
              status={ticket.status}
              title={ticket.title}
              tag={ticket.tag[0]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Board;
