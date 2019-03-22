import { CNet } from "../network/Network";
import { CEvent } from "../event/Event";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Smaple extends cc.Component {
    start() {
        // Network
        // CNet.connect("192.168.1.48", 8080);
        // setInterval(() => {
        //     CNet.send(1, "ayue");
        // }, 3000);

        // Event
        CEvent.on("fire", () => {
            console.log("fire event");
        }, this);

        CEvent.once("once fire", () => {
            console.log("fire event");
        }, this);
    }
}
