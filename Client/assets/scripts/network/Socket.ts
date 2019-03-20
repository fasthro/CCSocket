/*
 * @Author: fasthro
 * @Description: socket 对 web socket 的封装, 用于建立socket连接
 * @Date: 2019-03-20 17:40:17
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class Socket {

    // websocket
    private m_ws: WebSocket;

    // 用于指定连接成功后的回调函数
    private m_onopen: Function;
    // 用于指定连接关闭后的回调函数
    private m_onclose: Function;
    // 用于指定当从服务器接受到信息时的回调函数
    private m_onmessage: Function;
    // 用于指定连接失败后的回调函数
    private m_onerror: Function;

    /**
     * 构造函数
     * @param onopen 
     * @param onclose 
     * @param onmessage 
     * @param onerror 
     */
    constructor(onopen: Function, onclose: Function, onmessage: Function, onerror: Function) {
        this.m_onopen = onopen;
        this.m_onclose = onclose;
        this.m_onmessage = onmessage;
        this.m_onerror = onerror;
    }

    /**
     * 建立连接
     * @param url ws://ip:port
     */
    public connect(url: string) {
        if (this.m_ws == null) {
            this.m_ws = new WebSocket(url);
            
            // 绑定回调函数
            this.m_ws.onopen = this.onopen.bind(this);
            this.m_ws.onclose = this.onclose.bind(this);
            this.m_ws.onmessage = this.onmessage.bind(this);
            this.m_ws.onerror = this.onerror.bind(this);
        }

    }

    public send() {

    }

    public close() {

    }

    private onopen(e: Event) {
        
    }

    private onclose(e: CloseEvent) {

    }

    private onmessage(e: MessageEvent) {

    }

    private onerror(e: Event) {

    }

}
