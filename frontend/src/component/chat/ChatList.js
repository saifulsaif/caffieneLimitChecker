import React from "react";

const ChatList = (props) => {
  return (
    <div class="d-flex p-2">
      <input
        class="avatar avatar-sm rounded-circle"
        type="image"
        alt="photo"
        src={props.chat.avatar}
      />
      <div class="ms-3">
        <h6 class="mb-0">{props.chat.name}</h6>
        <p class="text-muted text-xs mb-2">{props.chat.last_seen}</p>
        <span class="text-muted text-sm col-11 p-0 text-truncate d-block">
          {props.chat.last_message}
        </span>
      </div>
    </div>
  );
};

export default ChatList;
