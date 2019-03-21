import { CNet } from "../network/Network";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Smaple extends cc.Component {
    start () {
        CNet.connect("192.168.1.48", 8080);
    }
}
