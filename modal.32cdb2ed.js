parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
!function(){var e={oneopenModalBtn:document.querySelector("[ddata-modal-open]"),ccloseModalBtn:document.querySelector("[ddata-modal-close]"),mmodal:document.querySelector("[ddata-modal]")};function o(){e.mmodal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.oneopenModalBtn.addEventListener("click",o),e.ccloseModalBtn.addEventListener("click",o)}(),function(){var e={twoopenModalBtn:document.querySelector("[data-modal-open-two]"),twocloseModalBtn:document.querySelector("[data-modal-close-two]"),twomodal:document.querySelector("[data-modal-two]")};function o(){e.twomodal.classList.toggle("is-hidden")}e.twoopenModalBtn.addEventListener("click",o),e.twocloseModalBtn.addEventListener("click",o)}(),function(){var e={threeopenModalBtn:document.querySelector("[data-modal-open-three]"),threecloseModalBtn:document.querySelector("[data-modal-close-three]"),threemodal:document.querySelector("[data-modal-three]")};function o(){e.threemodal.classList.toggle("is-hidden")}e.threeopenModalBtn.addEventListener("click",o),e.threecloseModalBtn.addEventListener("click",o)}();
},{}]},{},["RSqK"], null)
//# sourceMappingURL=/IceCream/modal.32cdb2ed.js.map