# Logger

## Read websocket frames

Since Chapatiz now runs under a websocket protocol (now that Flash has been finally discontinued), we can now easily intercept messages that server and clients send to each other. 

- Install a userscript module, such as [Tampermonkey](https://tampermonkey.net/) (or old Greasemonkey or whatever)
- Install [this script](https://github.com/AJDescole/chapawiki/raw/master/src/chapatizlogger.user.js)
- Go to [Chapatiz tchat](https://www.chapatiz.com/tchat/new/)
- Open the developper console ( F12 on Firefox and Google Chrome )
- Go to the *console* tab
- You can now see websocket frames. 

Those raw messages are serialized (using [Haxe Serializer](https://haxe.org/manual/std-serialization.html)). We will provide a tool to unserialize them soon. Note that : 

- Messages sent by server are prefixed with `wy13:ServerMessage`
- Messages sent by client are prefixed with `wy13:ClientMessage`

So far, there is no known exploit to use with this protocol. However, the purpose of this userscript is to analyze the behavior of both server et client, so we can write our own client implementation for the Bostonius project. 
