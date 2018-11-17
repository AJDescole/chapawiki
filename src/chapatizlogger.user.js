// ==UserScript==
// @name Chapatiz Logger
// @namespace https://www.chapatiz.com/ Azran/
// @run-at document-start
// @version 1.0
// @author Azran Descole
// @description Intercept messages of Chapatiz.com websocket
// @match https://www.chapatiz.com/tchat/new/
// ==/UserScript== 

class LoggerWebSocket {
	constructor(url) {
		this.ws = new unsafeWindow._WebSocket(url);
		console.log("== CHAPATIZ WEBSOCKET LOGGER INSTANTIATED ==");
		let _th = this;

		// defining default callbacks
		this.onopen = function(e) {};
		this.onclose = function(e) {};
		this.onmessage = function(e) {};
		this.onerror = function(e) {};

		// implementing WebSocket callbacks
		this.ws.onopen = function(e) { _th.onopen(e); };
		this.ws.onclose = function(e) { _th.onclose(e); };
		this.ws.onerror = function(e) { _th.onerror(e); };
		this.ws.onmessage = function(e) { console.log({message: e.data}); _th.onmessage(e); };
		this.send = function(e) { console.log({message: e}); _th.ws.send(e); };


	}
};

unsafeWindow._WebSocket = window.WebSocket;
unsafeWindow.WebSocket = LoggerWebSocket; // placing our websocket logger instead of WebSocket standard class
