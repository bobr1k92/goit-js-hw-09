!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},n={intervalId:null,isActive:!1,start:function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){document.body.style.backgroundColor=t(),console.log(t)}),1e3))},stop:function(){clearInterval(this.intervalId),this.isActive=!1}};t.startBtn.addEventListener("click",(function(){n.start()})),t.stopBtn.addEventListener("click",(function(){n.stop()}))}();
//# sourceMappingURL=01-color-switcher.32e29457.js.map
