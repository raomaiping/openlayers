(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-72af40b1"],{"04b1":function(e,t,n){"use strict";var o=n("15a3");t.a=(...e)=>{const t=document.querySelector(".el-aside .menu .el-scrollbar__view"),n=new MutationObserver((function(t){for(let n of t)if("childList"===n.type);else if("attributes"===n.type&&"style"===n.attributeName)for(let t=0;t<e.length;t++)e[t].updateSize()}));n.observe(t,{attributes:!0,childList:!0,subtree:!0}),Object(o.onBeforeUnmount)((()=>{n.disconnect()}))}},"0967":function(e,t,n){"use strict";n.r(t);var o=n("15a3"),i=(n("16fa"),n("d0a2")),s=n("80bc"),r=n("a147"),a=n("fb1a"),l=n("76f7"),c=n("8e03"),u=n("fa69"),p=n("f4fc"),d=n("6bae"),h=n("ce84"),f=n("e7b8"),g=n("5a50"),m=n("cb30"),A=n("701f"),y=n("5e28"),b=n("f04d"),v=n("495d"),w=n("b9ca");const C=e=>new A.c({image:new y.a({anchor:[.5,60],anchorOrigin:"top-right",anchorXUnits:"fraction",anchorYUnits:"pixels",offsetOrigin:"top-right",scale:.4,opacity:.75,src:n("64ed")}),text:new b.a({textAlign:"center",textBaseline:"middle",font:"normal 14px 微软雅黑",text:e.get("name"),fill:new v.a({color:"#aa3300"}),stroke:new w.a({color:"#ffcc33",width:2})})});var O=n("04b1");const F=e=>(Object(o.pushScopeId)("data-v-f880b6ce"),e=e(),Object(o.popScopeId)(),e),P={id:"top"},_=F((()=>Object(o.createElementVNode)("div",{id:"label",style:{display:"none"}},[Object(o.createElementVNode)("div",{id:"marker",class:"marker",title:"Marker"},[Object(o.createElementVNode)("a",{class:"address",id:"address",target:"_blank",href:"https://juejin.cn/user/588993965598407"},"标注点")])],-1))),x=F((()=>Object(o.createElementVNode)("div",{id:"map"},null,-1)));var E={__name:"index",setup(e){const t=Object(o.reactive)({map:null,vectorSource:null,type:""}),n=new l.a({source:new d.a({attributions:g.a,url:g.e,maxZoom:20})});return Object(o.onMounted)((()=>{(()=>{t.map=new i.a({target:"map",layers:[n],view:new s.a({projection:"EPSG:4326",center:g.g,zoom:5}),controls:Object(u.a)().extend([new p.a])}),Object(O.a)(t.map);const e=new r.a({geometry:new f.a(g.g),name:"深圳市"});e.setStyle(C(e)),t.vectorSource=new h.a({features:[e]});const o=new c.a({source:t.vectorSource});t.map.addLayer(o);const l=new a.a({position:g.f,positioning:"center-center",element:document.getElementById("marker"),stopEvent:!1});t.map.addOverlay(l),l.getElement().title="南昌市";var d=new a.a({position:g.f,element:document.getElementById("address")});t.map.addOverlay(d),d.getElement().innerText=l.getElement().title})(),t.map.on("click",(e=>{if(!t.type)return void Object(m.a)({message:"请先选择标注类型后用鼠标在地图上点击添加标注",type:"warning"});const n=e.coordinate;"vector"===t.type&&(({coordinate:e,vectorSource:t})=>{var n=new r.a({geometry:new f.a(e),name:"标注点"});n.setStyle(C(n)),t.addFeature(n)})({coordinate:n,vectorSource:t.vectorSource}),"overlay"===t.type&&(({coordinate:e,map:t})=>{const n=document.createElement("div");n.className="marker",n.title="标注点",document.getElementById("label").appendChild(n);const o=document.createElement("a");var i,s;o.className="address",o.href="#",i=o,s=n.title,"string"==typeof i.textContent?i.textContent=s:i.innerText=s,n.appendChild(o);const r=new a.a({position:e,positioning:"center-center",element:n,stopEvent:!1});t.addOverlay(r);const l=new a.a({position:e,element:o});t.addOverlay(l)})({coordinate:n,map:t.map})}))})),(e,n)=>{const i=Object(o.resolveComponent)("el-radio"),s=Object(o.resolveComponent)("el-radio-group");return Object(o.openBlock)(),Object(o.createElementBlock)(o.Fragment,null,[Object(o.createElementVNode)("div",P,[Object(o.createTextVNode)(" 选择标注类型后用鼠标在地图上点击添加标注： "),Object(o.createVNode)(s,{modelValue:t.type,"onUpdate:modelValue":n[0]||(n[0]=e=>t.type=e)},{default:Object(o.withCtx)((()=>[Object(o.createVNode)(i,{label:"vector",size:"large"},{default:Object(o.withCtx)((()=>[Object(o.createTextVNode)("Vector Labels")])),_:1}),Object(o.createVNode)(i,{label:"overlay",size:"large"},{default:Object(o.withCtx)((()=>[Object(o.createTextVNode)("Overlay Labels")])),_:1})])),_:1},8,["modelValue"])]),_,x],64)}}},N=(n("8081"),n("1b82"));const k=n.n(N)()(E,[["__scopeId","data-v-f880b6ce"]]);t.default=k},"64ed":function(e,t){e.exports="data:image/png;base64,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"},8081:function(e,t,n){"use strict";n("e976")},e976:function(e,t,n){},f04d:function(e,t,n){"use strict";var o=n("495d"),i=n("7da9"),s=n("9a0e"),r=function(){function e(e){var t=e||{};this.font_=t.font,this.rotation_=t.rotation,this.rotateWithView_=t.rotateWithView,this.scale_=t.scale,this.scaleArray_=Object(s.c)(void 0!==t.scale?t.scale:1),this.text_=t.text,this.textAlign_=t.textAlign,this.justify_=t.justify,this.textBaseline_=t.textBaseline,this.fill_=void 0!==t.fill?t.fill:new o.a({color:"#333"}),this.maxAngle_=void 0!==t.maxAngle?t.maxAngle:Math.PI/4,this.placement_=void 0!==t.placement?t.placement:i.a.POINT,this.overflow_=!!t.overflow,this.stroke_=void 0!==t.stroke?t.stroke:null,this.offsetX_=void 0!==t.offsetX?t.offsetX:0,this.offsetY_=void 0!==t.offsetY?t.offsetY:0,this.backgroundFill_=t.backgroundFill?t.backgroundFill:null,this.backgroundStroke_=t.backgroundStroke?t.backgroundStroke:null,this.padding_=void 0===t.padding?null:t.padding}return e.prototype.clone=function(){var t=this.getScale();return new e({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0})},e.prototype.getOverflow=function(){return this.overflow_},e.prototype.getFont=function(){return this.font_},e.prototype.getMaxAngle=function(){return this.maxAngle_},e.prototype.getPlacement=function(){return this.placement_},e.prototype.getOffsetX=function(){return this.offsetX_},e.prototype.getOffsetY=function(){return this.offsetY_},e.prototype.getFill=function(){return this.fill_},e.prototype.getRotateWithView=function(){return this.rotateWithView_},e.prototype.getRotation=function(){return this.rotation_},e.prototype.getScale=function(){return this.scale_},e.prototype.getScaleArray=function(){return this.scaleArray_},e.prototype.getStroke=function(){return this.stroke_},e.prototype.getText=function(){return this.text_},e.prototype.getTextAlign=function(){return this.textAlign_},e.prototype.getJustify=function(){return this.justify_},e.prototype.getTextBaseline=function(){return this.textBaseline_},e.prototype.getBackgroundFill=function(){return this.backgroundFill_},e.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},e.prototype.getPadding=function(){return this.padding_},e.prototype.setOverflow=function(e){this.overflow_=e},e.prototype.setFont=function(e){this.font_=e},e.prototype.setMaxAngle=function(e){this.maxAngle_=e},e.prototype.setOffsetX=function(e){this.offsetX_=e},e.prototype.setOffsetY=function(e){this.offsetY_=e},e.prototype.setPlacement=function(e){this.placement_=e},e.prototype.setRotateWithView=function(e){this.rotateWithView_=e},e.prototype.setFill=function(e){this.fill_=e},e.prototype.setRotation=function(e){this.rotation_=e},e.prototype.setScale=function(e){this.scale_=e,this.scaleArray_=Object(s.c)(void 0!==e?e:1)},e.prototype.setStroke=function(e){this.stroke_=e},e.prototype.setText=function(e){this.text_=e},e.prototype.setTextAlign=function(e){this.textAlign_=e},e.prototype.setJustify=function(e){this.justify_=e},e.prototype.setTextBaseline=function(e){this.textBaseline_=e},e.prototype.setBackgroundFill=function(e){this.backgroundFill_=e},e.prototype.setBackgroundStroke=function(e){this.backgroundStroke_=e},e.prototype.setPadding=function(e){this.padding_=e},e}();t.a=r},f4fc:function(e,t,n){"use strict";var o,i=n("61f0"),s=n("06f9"),r=n("f520"),a=n("bd40"),l=n("81a0"),c=n("3d7a"),u=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],d="enterfullscreen",h="leavefullscreen",f=function(e){function t(t){var n=this,o=t||{};(n=e.call(this,{element:document.createElement("div"),target:o.target})||this).on,n.once,n.un,n.keys_=void 0!==o.keys&&o.keys,n.source_=o.source,n.isInFullscreen_=!1,n.boundHandleMapTargetChange_=n.handleMapTargetChange_.bind(n),n.cssClassName_=void 0!==o.className?o.className:"ol-full-screen",n.documentListeners_=[],n.activeClassName_=void 0!==o.activeClassName?o.activeClassName.split(" "):[n.cssClassName_+"-true"],n.inactiveClassName_=void 0!==o.inactiveClassName?o.inactiveClassName.split(" "):[n.cssClassName_+"-false"];var i=void 0!==o.label?o.label:"⤢";n.labelNode_="string"==typeof i?document.createTextNode(i):i;var r=void 0!==o.labelActive?o.labelActive:"×";n.labelActiveNode_="string"==typeof r?document.createTextNode(r):r;var l=o.tipLabel?o.tipLabel:"Toggle full-screen";return n.button_=document.createElement("button"),n.button_.title=l,n.button_.setAttribute("type","button"),n.button_.appendChild(n.labelNode_),n.button_.addEventListener(s.a.CLICK,n.handleClick_.bind(n),!1),n.setClassName_(n.button_,n.isInFullscreen_),n.element.className="".concat(n.cssClassName_," ").concat(a.e," ").concat(a.b),n.element.appendChild(n.button_),n}return u(t,e),t.prototype.handleClick_=function(e){e.preventDefault(),this.handleFullScreen_()},t.prototype.handleFullScreen_=function(){var e=this.getMap();if(e){var t=e.getOwnerDocument();if(g(t))if(m(t))!function(e){e.exitFullscreen?e.exitFullscreen():e.msExitFullscreen?e.msExitFullscreen():e.webkitExitFullscreen&&e.webkitExitFullscreen()}(t);else{var n=void 0;n=this.source_?"string"==typeof this.source_?t.getElementById(this.source_):this.source_:e.getTargetElement(),this.keys_?function(e){e.webkitRequestFullscreen?e.webkitRequestFullscreen():A(e)}(n):A(n)}}},t.prototype.handleFullScreenChange_=function(){var e=this.getMap();if(e){var t=this.isInFullscreen_;this.isInFullscreen_=m(e.getOwnerDocument()),t!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(Object(c.h)(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(d)):(Object(c.h)(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(h)),e.updateSize())}},t.prototype.setClassName_=function(e,t){var n,o,i,s;t?((n=e.classList).remove.apply(n,this.inactiveClassName_),(o=e.classList).add.apply(o,this.activeClassName_)):((i=e.classList).remove.apply(i,this.activeClassName_),(s=e.classList).add.apply(s,this.inactiveClassName_))},t.prototype.setMap=function(t){var n=this.getMap();n&&n.removeChangeListener(r.a.TARGET,this.boundHandleMapTargetChange_),e.prototype.setMap.call(this,t),this.handleMapTargetChange_(),t&&t.addChangeListener(r.a.TARGET,this.boundHandleMapTargetChange_)},t.prototype.handleMapTargetChange_=function(){for(var e=this.documentListeners_,t=0,n=e.length;t<n;++t)Object(l.c)(e[t]);e.length=0;var o=this.getMap();if(o){var i=o.getOwnerDocument();g(i)?this.element.classList.remove(a.f):this.element.classList.add(a.f);for(t=0,n=p.length;t<n;++t)e.push(Object(l.a)(i,p[t],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}},t}(i.a);function g(e){var t=e.body;return!!(t.webkitRequestFullscreen||t.msRequestFullscreen&&e.msFullscreenEnabled||t.requestFullscreen&&e.fullscreenEnabled)}function m(e){return!!(e.webkitIsFullScreen||e.msFullscreenElement||e.fullscreenElement)}function A(e){e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}t.a=f},fb1a:function(e,t,n){"use strict";var o,i=n("79e4"),s=n("88b5"),r=n("bd40"),a=n("5c82"),l=n("81a0"),c=n("3d7a"),u=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p="element",d="map",h="offset",f="position",g="positioning",m=function(e){function t(t){var n=e.call(this)||this;n.on,n.once,n.un,n.options=t,n.id=t.id,n.insertFirst=void 0===t.insertFirst||t.insertFirst,n.stopEvent=void 0===t.stopEvent||t.stopEvent,n.element=document.createElement("div"),n.element.className=void 0!==t.className?t.className:"ol-overlay-container "+r.d,n.element.style.position="absolute",n.element.style.pointerEvents="auto";var o=t.autoPan;return o&&"object"!=typeof o&&(o={animation:t.autoPanAnimation,margin:t.autoPanMargin}),n.autoPan=o||!1,n.rendered={transform_:"",visible:!0},n.mapPostrenderListenerKey=null,n.addChangeListener(p,n.handleElementChanged),n.addChangeListener(d,n.handleMapChanged),n.addChangeListener(h,n.handleOffsetChanged),n.addChangeListener(f,n.handlePositionChanged),n.addChangeListener(g,n.handlePositioningChanged),void 0!==t.element&&n.setElement(t.element),n.setOffset(void 0!==t.offset?t.offset:[0,0]),n.setPositioning(t.positioning||"top-left"),void 0!==t.position&&n.setPosition(t.position),n}return u(t,e),t.prototype.getElement=function(){return this.get(p)},t.prototype.getId=function(){return this.id},t.prototype.getMap=function(){return this.get(d)||null},t.prototype.getOffset=function(){return this.get(h)},t.prototype.getPosition=function(){return this.get(f)},t.prototype.getPositioning=function(){return this.get(g)},t.prototype.handleElementChanged=function(){Object(c.e)(this.element);var e=this.getElement();e&&this.element.appendChild(e)},t.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&(Object(c.f)(this.element),Object(l.c)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var e=this.getMap();if(e){this.mapPostrenderListenerKey=Object(l.a)(e,s.a.POSTRENDER,this.render,this),this.updatePixelPosition();var t=this.stopEvent?e.getOverlayContainerStopEvent():e.getOverlayContainer();this.insertFirst?t.insertBefore(this.element,t.childNodes[0]||null):t.appendChild(this.element),this.performAutoPan()}},t.prototype.render=function(){this.updatePixelPosition()},t.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},t.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.performAutoPan()},t.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},t.prototype.setElement=function(e){this.set(p,e)},t.prototype.setMap=function(e){this.set(d,e)},t.prototype.setOffset=function(e){this.set(h,e)},t.prototype.setPosition=function(e){this.set(f,e)},t.prototype.performAutoPan=function(){this.autoPan&&this.panIntoView(this.autoPan)},t.prototype.panIntoView=function(e){var t=this.getMap();if(t&&t.getTargetElement()&&this.get(f)){var n=this.getRect(t.getTargetElement(),t.getSize()),o=this.getElement(),i=this.getRect(o,[Object(c.c)(o),Object(c.b)(o)]),s=e||{},r=void 0===s.margin?20:s.margin;if(!Object(a.h)(n,i)){var l=i[0]-n[0],u=n[2]-i[2],p=i[1]-n[1],d=n[3]-i[3],h=[0,0];if(l<0?h[0]=l-r:u<0&&(h[0]=Math.abs(u)+r),p<0?h[1]=p-r:d<0&&(h[1]=Math.abs(d)+r),0!==h[0]||0!==h[1]){var g=t.getView().getCenterInternal(),m=t.getPixelFromCoordinateInternal(g);if(!m)return;var A=[m[0]+h[0],m[1]+h[1]],y=s.animation||{};t.getView().animateInternal({center:t.getCoordinateFromPixelInternal(A),duration:y.duration,easing:y.easing})}}}},t.prototype.getRect=function(e,t){var n=e.getBoundingClientRect(),o=n.left+window.pageXOffset,i=n.top+window.pageYOffset;return[o,i,o+t[0],i+t[1]]},t.prototype.setPositioning=function(e){this.set(g,e)},t.prototype.setVisible=function(e){this.rendered.visible!==e&&(this.element.style.display=e?"":"none",this.rendered.visible=e)},t.prototype.updatePixelPosition=function(){var e=this.getMap(),t=this.getPosition();if(e&&e.isRendered()&&t){var n=e.getPixelFromCoordinate(t),o=e.getSize();this.updateRenderedPosition(n,o)}else this.setVisible(!1)},t.prototype.updateRenderedPosition=function(e,t){var n=this.element.style,o=this.getOffset(),i=this.getPositioning();this.setVisible(!0);var s=Math.round(e[0]+o[0])+"px",r=Math.round(e[1]+o[1])+"px",a="0%",l="0%";"bottom-right"==i||"center-right"==i||"top-right"==i?a="-100%":"bottom-center"!=i&&"center-center"!=i&&"top-center"!=i||(a="-50%"),"bottom-left"==i||"bottom-center"==i||"bottom-right"==i?l="-100%":"center-left"!=i&&"center-center"!=i&&"center-right"!=i||(l="-50%");var c="translate(".concat(a,", ").concat(l,") translate(").concat(s,", ").concat(r,")");this.rendered.transform_!=c&&(this.rendered.transform_=c,n.transform=c,n.msTransform=c)},t.prototype.getOptions=function(){return this.options},t}(i.a);t.a=m}}]);
//# sourceMappingURL=chunk-72af40b1.ed45d04e.js.map