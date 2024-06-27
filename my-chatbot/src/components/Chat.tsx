import React from "react"
import Messages from "./Messages"

const Chat = () => {
    return(
        <div className="chat">
            <div className="chatInfo">
                <span> ChatBot Friend</span>
                <div className="chatIcons">
                </div>
                <Messages/>
            </div>
        </div>
    )
}

export default Chat