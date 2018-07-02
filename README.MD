# Neth-omation-client
A frontend for the raspberry pi [automation server](https://github.com/Netherium/neth-omation-server) that handles remotely GPIO control.
Made with [Angular 6](https://github.com/angular/angular), [Socket.io](https://github.com/socketio/socket.io) and [Wired-Elements](https://github.com/wiredjs/wired-elements)

<img src="https://raw.githubusercontent.com/Netherium/neth-omation-client/master/images/preview.png">

## Quick start
1. Clone this repo: `git clone https://github.com/Netherium/neth-omation-client.git`
2. Change directory  `cd neth-omation-client`
3. Install dependencies `npm install`
4. Set ip and port of the raspberry pi backend server in `gpio.service.ts` i.e. `SERVER_URL=http://192.168.0.21:8080`
5. Run `ng serve --host=127.0.0.1` 

## Authors
**Netherium**

## Copyright and license
Code released under [the MIT license](https://github.com/Netherium/neth-omation-client/blob/master/LICENSE)
