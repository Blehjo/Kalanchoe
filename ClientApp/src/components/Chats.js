import { Fragment } from "react";
import Pubnub from "./Pubnub";

const Chats = () => {
    return(
        <div style={{ position: 'relative', height: '90vh' }}>
            <h1>Artoo</h1>
            <div style={{ background: 'black',position: 'absolute', width: '90vw', bottom: '0px' }}>
            <Pubnub/>
            </div>
        </div >
    );
}

export default Chats;
