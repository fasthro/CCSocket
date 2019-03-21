/*
 * @Author: fasthro
 * @Description: 网络层
 * @Date: 2019-03-21 11:39:54
 */

import Socket from "./Socket";

const { ccclass, property } = cc._decorator;

// 是否输出日志
const LOG_ENABLED:boolean = true;

@ccclass
export class Network {

    // 单例
    private static _inst: Network;
    public static get inst() {
        if (Network._inst == null || Network._inst == undefined) {
            Network._inst = new Network();
        }
        return Network._inst;
    }

    // socket
    private m_socket: Socket;
    // ip
    private m_ip: string;
    // port
    private m_port: number;

    // 连接超时时间
    private readonly timeout: number;

    constructor() {
        this.m_socket = null;
        this.timeout = 12000;
    }

    /**
     * 建立连接
     * @param ip ip
     * @param port port
     */
    public connect(ip: string, port: number) {
        this.m_ip = ip;
        this.m_port = port;
        
        if (this.connectState == -1 || this.connectState == WebSocket.CLOSED) {
            if (this.m_socket == null || this.m_socket == undefined) {
                this.m_socket = new Socket(this, this.onConnect, this.onClose, this.onMessage, this.onError, this.onTimeout);
            }
            this.m_socket.connect(ip, port, this.timeout);
        }
    }

    public reConnect() {

    }

    public send() {

    }

    private onConnect(e: Event) {
        if(LOG_ENABLED) console.log(`network -> onConnect succeed! ip:${this.m_ip} port:${this.m_port}`);
    }

    private onClose(e: CloseEvent) {
        if(LOG_ENABLED) console.log("network -> onClose!");
    }

    private onMessage(e: MessageEvent) {
        if(LOG_ENABLED) console.log(`network -> onMessage! data:${e.data}`);
    }

    private onError(e: Event) {
        if(LOG_ENABLED) console.log(`network -> onError! error:${e}`);
    }

    private onTimeout() {
        if(LOG_ENABLED) console.log("network -> onTimeout!");
    }

    // 
    public get connectState() {
        if (this.m_socket != null && this.m_socket != undefined) {
            return this.m_socket.state;
        }
        return -1;
    }
}

export var CNet = Network.inst;