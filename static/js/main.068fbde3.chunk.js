(this.webpackJsonpreact_tic_tac_toe=this.webpackJsonpreact_tic_tac_toe||[]).push([[0],{28:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e(9),a=e.n(c),o=(e(28),e(2)),u=e(3),s=e(4),l={1:1,0:0,2:-1},f="not_started",d="in_progress",p="over",h={mudah:"mudah",sedang:"sedang",susah:"susah"},b=e(17),j=function n(t){var e=this;Object(b.a)(this,n),this.makeMove=function(n,t){null===e.grid[n]&&(e.grid[n]=t)},this.getEmptySquares=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid,t=[];return n.forEach((function(n,e){null===n&&t.push(e)})),t},this.isEmpty=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid;return e.getEmptySquares(n).length===Math.pow(3,2)},this.getWinner=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=null;return t.forEach((function(t,i){null!==n[t[0]]&&n[t[0]]===n[t[1]]&&n[t[0]]===n[t[2]]?(r=n[t[0]],e.winningIndex=i):null===r&&0===e.getEmptySquares(n).length&&(r=0,e.winningIndex=null)})),r},this.getStrikethroughStyles=function(){var n=285;switch(e.winningIndex){case 0:return"\n          transform: none;\n          top: 41px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 1:return"\n          transform: none;\n          top: 140px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 2:return"\n          transform: none;\n          top: 242px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 3:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: -86px;\n          width: ".concat(n,"px;\n        ");case 4:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 5:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 115px;\n          width: ".concat(n,"px;\n        ");case 6:return"\n          transform: rotate(45deg);\n          top: 145px;\n          left: -44px;\n          width: ".concat(400,"px;\n        ");case 7:return"\n          transform: rotate(-45deg);\n          top: 145px;\n          left: -46px;\n          width: ".concat(400,"px;\n        ");default:return null}},this.clone=function(){return new n(e.grid.concat())},this.grid=t||new Array(Math.pow(3,2)).fill(null),this.winningIndex=null},x=function(n){return 1===n?2:1},g=function(n,t){return n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n},m=e(18),O=function n(t,e){var r,i=l[String(e)],c=-1,a=null;if(null!==t.getWinner())return[l[t.getWinner()],0];var o,u=Object(m.a)(t.getEmptySquares());try{for(u.s();!(o=u.n()).done;){var s=o.value,f=t.clone();f.makeMove(s,e),(r=i*n(f,x(e))[0])>=c&&(c=r,a=s)}}catch(d){u.e(d)}finally{u.f()}return[i*c,a]},v=e(5),w=e.n(v);function y(){var n=Object(o.a)(["\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n"]);return y=function(){return n},n}var k=Object(u.a)(y());function S(){var n=Object(o.a)(["\n  font-size: 16px;\n"]);return S=function(){return n},n}function E(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  width: 100%;\n"]);return E=function(){return n},n}function M(){var n=Object(o.a)(["\n  flex: 1 1 auto;\n  text-align: center;\n"]);return M=function(){return n},n}function C(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return C=function(){return n},n}function q(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: rgb(26, 23, 23);\n  max-height: 100%;\n  height: 100%;\n  align-items: center;\n  backface-visibility: hidden;\n  padding: 1.25rem;\n  ",";\n"]);return q=function(){return n},n}function _(){var n=Object(o.a)(["\n  height: 300px;\n  position: relative;\n  margin: 0 auto;\n  top: 10%;\n  right: auto;\n  bottom: auto;\n  width: 320px;\n  outline: none;\n  display: flex;\n  flex-direction: column;\n"]);return _=function(){return n},n}var T={overlay:{backgroundColor:"rgba(0,0,0, 0.6)"}},W=function(n){var t=n.isOpen,e=n.close,i=n.startNewGame,c=n.winner;return Object(r.jsx)(A,{isOpen:t,onRequestClose:e,style:T,ariaHideApp:!1,children:Object(r.jsxs)(I,{children:[Object(r.jsx)(N,{children:"Permainan Selesai"}),Object(r.jsx)(z,{children:c}),Object(r.jsxs)(B,{children:[Object(r.jsx)(G,{onClick:e,children:"Stop"}),Object(r.jsx)(G,{onClick:i,children:"Main Lagi"})]})]})})},A=Object(u.b)(w.a)(_()),I=u.b.div(q(),k),N=u.b.p(C()),z=u.b.p(M());z.displayName="ModalContent";var B=u.b.div(E()),G=u.b.button(S());function K(){var n=Object(o.a)(["\n  position: absolute;\n  ","\n  background-color: white;\n  height: 5px;\n  width: ",";\n"]);return K=function(){return n},n}function L(){var n=Object(o.a)([""]);return L=function(){return n},n}function P(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n"]);return P=function(){return n},n}function X(){var n=Object(o.a)([""]);return X=function(){return n},n}function J(){var n=Object(o.a)(["\n  display: flex;\n  width: 150px;\n  justify-content: space-between;\n"]);return J=function(){return n},n}function R(){var n=Object(o.a)(["\n  font-size: 68px;\n"]);return R=function(){return n},n}function F(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return F=function(){return n},n}function H(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  width: ",";\n  flex-flow: wrap;\n  position: relative;\n"]);return H=function(){return n},n}var $=new Array(Math.pow(3,2)).fill(null),D=new j,Q=u.b.div(H(),(function(n){var t=n.dims;return"".concat(105*t,"px")})),U=u.b.div(F(),100,100,k);U.displayName="Square";var V=u.b.p(R()),Y=u.b.div(J()),Z=u.b.div(X()),nn=u.b.div(P()),tn=u.b.p(L()),en=u.b.div(K(),(function(n){return n.styles}),(function(n){return!n.styles&&"0px"})),rn=function(n){var t=n.squares,e=void 0===t?$:t,c=Object(i.useState)({human:null,computer:null}),a=Object(s.a)(c,2),o=a[0],u=a[1],l=Object(i.useState)(f),b=Object(s.a)(l,2),m=b[0],v=b[1],w=Object(i.useState)(e),y=Object(s.a)(w,2),k=y[0],S=y[1],E=Object(i.useState)(null),M=Object(s.a)(E,2),C=M[0],q=M[1],_=Object(i.useState)(null),T=Object(s.a)(_,2),A=T[0],I=T[1],N=Object(i.useState)(!1),z=Object(s.a)(N,2),B=z[0],G=z[1],K=Object(i.useState)(h.sedang),L=Object(s.a)(K,2),P=L[0],X=L[1];Object(i.useEffect)((function(){var n=D.getWinner(k);null!==n&&m!==p&&function(n){var t;switch(n){case 1:t="Karakter X menang!";break;case 2:t="Karakter O menang!";break;case 0:default:t="Tidak ada yang menang dan kalah"}v(p),q(t),setTimeout((function(){return G(!0)}),300)}(n)}),[m,k,A]);var J=Object(i.useCallback)((function(n,t){t&&m===d&&S((function(e){var r=e.concat();return r[n]=t,r}))}),[m]),R=Object(i.useCallback)((function(){var n,t=new j(k.concat()),e=t.getEmptySquares(k);switch(P){case h.mudah:do{n=g(0,8)}while(!e.includes(n));break;case h.sedang:if(!t.isEmpty(k)&&Math.random()<.5)n=O(t,o.computer)[1];else do{n=g(0,8)}while(!e.includes(n));break;case h.susah:default:n=t.isEmpty(k)?g(0,8):O(t,o.computer)[1]}k[n]||(J(n,o.computer),I(o.human))}),[J,k,o,P]);Object(i.useEffect)((function(){var n;return null!==A&&A===o.computer&&m!==p&&(n=setTimeout((function(){R()}),500)),function(){return n&&clearTimeout(n)}}),[A,R,o.computer,m]);var F=function(n){u({human:n,computer:x(n)}),v(d),I(1)};return m===f?Object(r.jsxs)(Z,{children:[Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{children:"Pilih Level"}),Object(r.jsx)("select",{onChange:function(n){X(n.target.value)},value:P,children:Object.keys(h).map((function(n){var t=h[n];return Object(r.jsx)("option",{value:t,children:n},t)}))})]}),Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{children:"Pilih Karakter"}),Object(r.jsxs)(Y,{children:[Object(r.jsx)("button",{onClick:function(){return F(1)},children:"X"}),Object(r.jsx)("p",{children:"Atau"}),Object(r.jsx)("button",{onClick:function(){return F(2)},children:"O"})]})]})]}):Object(r.jsxs)(Q,{dims:3,children:[k.map((function(n,t){var e=null!==n;return Object(r.jsx)(U,{"data-testid":"square_".concat(t),onClick:function(){return function(n){k[n]||A!==o.human||(J(n,o.human),I(o.computer))}(t)},children:e&&Object(r.jsx)(V,{children:1===n?"X":"O"})},t)})),Object(r.jsx)(en,{styles:m===p&&D.getStrikethroughStyles()}),Object(r.jsx)(W,{isOpen:B,winner:C,close:function(){return G(!1)},startNewGame:function(){v(f),S($),G(!1)}})]})};e(42);function cn(){var n=Object(o.a)(["\n  padding: 16px 0;\n"]);return cn=function(){return n},n}function an(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex: 0 0 auto;\n"]);return an=function(){return n},n}function on(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1 0 auto;\n"]);return on=function(){return n},n}var un=u.b.main(on()),sn=u.b.footer(an()),ln=u.b.div(cn()),fn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(un,{children:Object(r.jsx)(rn,{})}),Object(r.jsx)(sn,{children:Object(r.jsxs)(ln,{children:["Bagus ganteng ( 1119101747 )"," ",Object(r.jsx)("a",{href:"https://github.com/nurindah-0907/TicTacToeReact",children:"Link Github"})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.setAppElement("#root"),a.a.render(Object(r.jsx)(fn,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.068fbde3.chunk.js.map