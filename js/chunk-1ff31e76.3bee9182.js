(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ff31e76"],{"6bae":function(t,e,r){"use strict";var n,o=r("42c0"),i=r("1a55"),a=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(t){function e(e){var r=this,n=e||{},o=void 0===n.imageSmoothing||n.imageSmoothing;void 0!==n.interpolate&&(o=n.interpolate);var a=void 0!==n.projection?n.projection:"EPSG:3857",c=void 0!==n.tileGrid?n.tileGrid:Object(i.a)({extent:Object(i.b)(a),maxResolution:n.maxResolution,maxZoom:n.maxZoom,minZoom:n.minZoom,tileSize:n.tileSize});return(r=t.call(this,{attributions:n.attributions,cacheSize:n.cacheSize,crossOrigin:n.crossOrigin,interpolate:o,opaque:n.opaque,projection:a,reprojectionErrorThreshold:n.reprojectionErrorThreshold,tileGrid:c,tileLoadFunction:n.tileLoadFunction,tilePixelRatio:n.tilePixelRatio,tileUrlFunction:n.tileUrlFunction,url:n.url,urls:n.urls,wrapX:void 0===n.wrapX||n.wrapX,transition:n.transition,attributionsCollapsible:n.attributionsCollapsible,zDirection:n.zDirection})||this).gutter_=void 0!==n.gutter?n.gutter:0,r}return a(e,t),e.prototype.getGutter=function(){return this.gutter_},e}(o.a);e.a=c},b95a:function(t,e,r){"use strict";var n,o=r("2cc0"),i=r("3959"),a=r("140e"),c=r("584b"),u=r("0f99"),s=r("84f2"),l=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),f=function(t){function e(e){var r=this,n=u.a.IDLE;return(r=t.call(this,e.tileCoord,n,{transition:e.transition,interpolate:e.interpolate})||this).loader_=e.loader,r.data_=null,r.error_=null,r.size_=e.size||[256,256],r}return l(e,t),e.prototype.getSize=function(){return this.size_},e.prototype.getData=function(){return this.data_},e.prototype.getError=function(){return this.error_},e.prototype.load=function(){if(this.state===u.a.IDLE||this.state===u.a.ERROR){this.state=u.a.LOADING,this.changed();var t=this;this.loader_().then((function(e){t.data_=e,t.state=u.a.LOADED,t.changed()})).catch((function(e){t.error_=e,t.state=u.a.ERROR,t.changed()}))}},e}(s.a),h=r("fe1f"),p=r("06f9"),g=r("6e85"),d=r("94c7"),v=r("d256"),_=r("8897"),m=r("9a0e"),T=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();function y(t,e,r){var n=r?t.LINEAR:t.NEAREST;t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n)}function E(t,e,r,n,o,i){var a,c,u=t.getGL();r instanceof Float32Array?(a=u.FLOAT,t.getExtension("OES_texture_float"),c=null!==t.getExtension("OES_texture_float_linear")):(a=u.UNSIGNED_BYTE,c=!0);y(u,e,i&&c);var s,l=r.byteLength/n[1],f=1;switch(l%8==0?f=8:l%4==0?f=4:l%2==0&&(f=2),o){case 1:s=u.LUMINANCE;break;case 2:s=u.LUMINANCE_ALPHA;break;case 3:s=u.RGB;break;case 4:s=u.RGBA;break;default:throw new Error("Unsupported number of bands: ".concat(o))}var h=u.getParameter(u.UNPACK_ALIGNMENT);u.pixelStorei(u.UNPACK_ALIGNMENT,f),u.texImage2D(u.TEXTURE_2D,0,s,n[0],n[1],0,s,a,r),u.pixelStorei(u.UNPACK_ALIGNMENT,h)}var R=null;var x=function(t){function e(e){var r=t.call(this)||this;r.tile,r.textures=[],r.handleTileChange_=r.handleTileChange_.bind(r),r.renderSize_=Object(m.c)(e.grid.getTileSize(e.tile.tileCoord[0])),r.gutter_=e.gutter||0,r.bandCount=NaN,r.helper_=e.helper;var n=new v.a(_.a,_.e);return n.fromArray([0,1,1,1,1,0,0,0]),r.helper_.flushBufferData(n),r.coords=n,r.setTile(e.tile),r}return T(e,t),e.prototype.setTile=function(t){if(t!==this.tile)if(this.tile&&this.tile.removeEventListener(p.a.CHANGE,this.handleTileChange_),this.tile=t,this.textures.length=0,this.loaded=t.getState()===u.a.LOADED,this.loaded)this.uploadTile_();else{if(t instanceof g.a){var e=t.getImage();e instanceof Image&&!e.crossOrigin&&(e.crossOrigin="anonymous")}t.addEventListener(p.a.CHANGE,this.handleTileChange_)}},e.prototype.uploadTile_=function(){var t=this.helper_,e=t.getGL(),r=this.tile;if(r instanceof g.a||r instanceof d.a){var n=e.createTexture();return this.textures.push(n),this.bandCount=4,void function(t,e,r,n){y(t,e,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)}(e,n,r.getImage(),r.interpolate)}var o=r.getSize(),i=[o[0]+2*this.gutter_,o[1]+2*this.gutter_],a=r.getData(),c=a instanceof Float32Array,u=i[0]*i[1],s=c?Float32Array:Uint8Array,l=s.BYTES_PER_ELEMENT,f=a.byteLength/i[1];this.bandCount=Math.floor(f/l/i[0]);var h=Math.ceil(this.bandCount/4);if(1===h){n=e.createTexture();return this.textures.push(n),void E(t,n,a,i,this.bandCount,r.interpolate)}for(var p=new Array(h),v=0;v<h;++v){n=e.createTexture();this.textures.push(n);var _=v<h-1?4:this.bandCount%4;p[v]=new s(u*_)}for(var m=0,T=0,R=i[0]*this.bandCount,x=0;x<i[1];++x){for(var b=0;b<R;++b){var O=a[T+b],S=Math.floor(m/this.bandCount),w=b%this.bandCount;(N=p[v=Math.floor(w/4)])[S*(_=N.length/u)+w%4]=O,++m}T+=f/l}for(v=0;v<h;++v){var N;E(t,n=this.textures[v],N=p[v],i,_=N.length/u,r.interpolate)}},e.prototype.handleTileChange_=function(){this.tile.getState()===u.a.LOADED&&(this.loaded=!0,this.uploadTile_(),this.dispatchEvent(p.a.CHANGE))},e.prototype.disposeInternal=function(){var t=this.helper_.getGL();this.helper_.deleteBuffer(this.coords);for(var e=0;e<this.textures.length;++e)t.deleteTexture(this.textures[e]);this.tile.removeEventListener(p.a.CHANGE,this.handleTileChange_)},e.prototype.getPixelData=function(t,e){if(!this.loaded)return null;var r,n=this.renderSize_[0],o=this.renderSize_[1],i=this.gutter_;if(this.tile instanceof f){var a=this.tile.getSize(),c=a[0],u=a[1],s=c+2*i,l=u+2*i,h=i+Math.floor(c*(t/n)),p=i+Math.floor(u*(e/o)),g=this.tile.getData();if(g instanceof DataView){var d=g.byteLength/(s*l),v=d*(p*s+h),_=g.buffer.slice(v,v+d);return new DataView(_)}var m=this.bandCount*(p*s+h);return g.slice(m,m+this.bandCount)}R||((r=document.createElement("canvas")).width=1,r.height=1,R=r.getContext("2d")),R.clearRect(0,0,1,1);var T,y=this.tile.getImage(),E=y.width-2*i,x=y.height-2*i,b=i+Math.floor(E*(t/n)),O=i+Math.floor(x*(e/o));try{R.drawImage(y,b,O,1,1,0,0,1,1),T=R.getImageData(0,0,1,1).data}catch(t){return R=null,null}return T},e}(h.a),b=r("5b2e"),O=r("8a62"),S=r("bdff"),w=r("5c82"),N=r("dfda"),A=r("3b77"),C=r("7c6d"),U=r("f555"),G=r("0780"),j=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),L="u_tileTextures",M="u_tileTransform",B="u_transitionAlpha",D="u_depth",P="u_texturePixelWidth",F="u_texturePixelHeight",I="u_textureResolution",z="u_textureOriginX",X="u_textureOriginY",Y="u_renderExtent",V="u_resolution",k="u_zoom",Z="a_textureCoord",J=[{name:Z,size:2,type:O.a.FLOAT}],H={};function K(t){return 2*(1-1/(t+1))-1}function W(t,e,r){r in t||(t[r]=[]),t[r].push(e)}function q(t,e){var r=t.layerStatesArray[t.layerIndex];r.extent&&(e=Object(w.B)(e,Object(C.l)(r.extent,t.viewState.projection)));var n=r.layer.getRenderSource();if(!n.getWrapX()){var o=n.getTileGridForProjection(t.viewState.projection).getExtent();o&&(e=Object(w.B)(e,o))}return e}function Q(t,e){return"".concat(t.getKey(),",").concat(Object(A.c)(e))}var $=function(t){function e(e,r){var n=t.call(this,e,{uniforms:r.uniforms})||this;n.renderComplete=!1,n.tileTransform_=Object(S.c)(),n.tempMat4_=Object(N.a)(),n.tempTileRange_=new c.b(0,0,0,0),n.tempTileCoord_=Object(A.a)(0,0,0),n.tempSize_=[0,0],n.program_,n.vertexShader_=r.vertexShader,n.fragmentShader_=r.fragmentShader,n.indices_=new v.a(_.c,_.e),n.indices_.fromArray([0,1,3,1,2,3]);var o=void 0!==r.cacheSize?r.cacheSize:512;return n.tileTextureCache_=new a.a(o),n.paletteTextures_=r.paletteTextures||[],n.frameState_=null,n}return j(e,t),e.prototype.reset=function(e){t.prototype.reset.call(this,{uniforms:e.uniforms}),this.vertexShader_=e.vertexShader,this.fragmentShader_=e.fragmentShader,this.paletteTextures_=e.paletteTextures||[],this.helper&&(this.program_=this.helper.getProgram(this.fragmentShader_,this.vertexShader_))},e.prototype.afterHelperCreated=function(){this.program_=this.helper.getProgram(this.fragmentShader_,this.vertexShader_),this.helper.flushBufferData(this.indices_)},e.prototype.isDrawableTile_=function(t){var e=this.getLayer(),r=t.getState(),n=e.getUseInterimTilesOnError();return r==u.a.LOADED||r==u.a.EMPTY||r==u.a.ERROR&&!n},e.prototype.prepareFrameInternal=function(t){var e=this.getLayer().getRenderSource();return!!e&&(!Object(w.I)(q(t,t.extent))&&"ready"===e.getState())},e.prototype.enqueueTiles=function(t,e,r,n){var o=t.viewState,i=this.getLayer(),a=i.getRenderSource(),c=a.getTileGridForProjection(o.projection),s=a.getGutterForProjection(o.projection),l=Object(U.c)(a);l in t.wantedTiles||(t.wantedTiles[l]={});for(var f=t.wantedTiles[l],h=this.tileTextureCache_,p=Math.max(r-i.getPreload(),c.getMinZoom(),i.getMinZoom()),g=r;g>=p;--g)for(var d=c.getTileRangeForExtentAndZ(e,g,this.tempTileRange_),v=c.getResolution(g),_=d.minX;_<=d.maxX;++_)for(var m=d.minY;m<=d.maxY;++m){var T=Object(A.a)(g,_,m,this.tempTileCoord_),y=Q(a,T),E=void 0,R=void 0;if(h.containsKey(y)&&(R=(E=h.get(y)).tile),!E||E.tile.key!==a.getKey())if(R=a.getTile(g,_,m,t.pixelRatio,o.projection),E)if(this.isDrawableTile_(R))E.setTile(R);else{var b=R.getInterimTile();E.setTile(b)}else E=new x({tile:R,grid:c,helper:this.helper,gutter:s}),h.set(y,E);W(n,E,g);var O=R.getKey();f[O]=!0,R.getState()===u.a.IDLE&&(t.tileQueue.isKeyQueued(O)||t.tileQueue.enqueue([R,l,c.getTileCoordCenter(T),v]))}},e.prototype.renderFrame=function(t){this.frameState_=t,this.renderComplete=!0;var e=this.helper.getGL();this.preRender(e,t);var r=t.viewState,n=this.getLayer().getRenderSource(),o=n.getTileGridForProjection(r.projection),i=n.getGutterForProjection(r.projection),a=q(t,t.extent),c=o.getZForResolution(r.resolution,n.zDirection),u={};if(t.nextExtent){var s=o.getZForResolution(r.nextResolution,n.zDirection),l=q(t,t.nextExtent);this.enqueueTiles(t,l,s,u)}this.enqueueTiles(t,a,c,u);for(var f={},h=Object(U.c)(this),p=t.time,g=!1,d=u[c],v=0,_=d.length;v<_;++v){var T=(ct=(Et=d[v]).tile).tileCoord;if(Et.loaded){if(1===(ut=ct.getAlpha(h,p))){ct.endTransition(h);continue}g=!0,f[st=Object(A.c)(T)]=ut}if(this.renderComplete=!1,!this.findAltTiles_(o,T,c+1,u))for(var y=o.getMinZoom(),E=c-1;E>=y;--E){if(this.findAltTiles_(o,T,E,u))break}}this.helper.useProgram(this.program_),this.helper.prepareDraw(t,!g);for(var R=Object.keys(u).map(Number).sort(G.g),x=r.center[0],b=r.center[1],O=0,C=R.length;O<C;++O){var j=R[O],Z=o.getResolution(j),W=Object(m.c)(o.getTileSize(j),this.tempSize_),Q=o.getOrigin(j),$=W[0]+2*i,tt=W[1]+2*i,et=$/tt,rt=(x-Q[0])/(W[0]*Z),nt=(Q[1]-b)/(W[1]*Z),ot=r.resolution/Z,it=K(j),at=u[j];for(v=0,_=at.length;v<_;++v){if((Et=at[v]).loaded){T=(ct=Et.tile).tileCoord;var ct,ut,st=Object(A.c)(T),lt=T[1],ft=T[2];Object(S.g)(this.tileTransform_),Object(S.i)(this.tileTransform_,2/(t.size[0]*ot/$),-2/(t.size[1]*ot/$)),Object(S.h)(this.tileTransform_,r.rotation),Object(S.i)(this.tileTransform_,1,1/et),Object(S.l)(this.tileTransform_,(W[0]*(lt-rt)-i)/$,(W[1]*(ft-nt)-i)/tt),this.helper.setUniformMatrixValue(M,Object(N.b)(this.tempMat4_,this.tileTransform_)),this.helper.bindBuffer(Et.coords),this.helper.bindBuffer(this.indices_),this.helper.enableAttributes(J);for(var ht=0;ht<Et.textures.length;){var pt="TEXTURE"+ht,gt="".concat(L,"[").concat(ht,"]");e.activeTexture(e[pt]),e.bindTexture(e.TEXTURE_2D,Et.textures[ht]),e.uniform1i(this.helper.getUniformLocation(gt),ht),++ht}for(var dt=0;dt<this.paletteTextures_.length;++dt){var vt=this.paletteTextures_[dt];e.activeTexture(e["TEXTURE"+ht]);var _t=vt.getTexture(e);e.bindTexture(e.TEXTURE_2D,_t),e.uniform1i(this.helper.getUniformLocation(vt.name),ht),++ht}(ut=st in f?f[st]:1)<1&&(t.animate=!0),this.helper.setUniformFloatValue(B,ut),this.helper.setUniformFloatValue(D,it),this.helper.setUniformFloatValue(P,$),this.helper.setUniformFloatValue(F,tt),this.helper.setUniformFloatValue(I,Z),this.helper.setUniformFloatValue(z,Q[0]+lt*W[0]*Z-i*Z),this.helper.setUniformFloatValue(X,Q[1]-ft*W[1]*Z+i*Z);var mt=a;i>0&&(mt=o.getTileCoordExtent(T),Object(w.B)(mt,a,mt)),this.helper.setUniformFloatVec4(Y,mt),this.helper.setUniformFloatValue(V,r.resolution),this.helper.setUniformFloatValue(k,r.zoom),this.helper.drawElements(0,this.indices_.getSize())}}}this.helper.finalizeDraw(t,this.dispatchPreComposeEvent,this.dispatchPostComposeEvent);for(var Tt=this.helper.getCanvas(),yt=this.tileTextureCache_;yt.canExpireCache();){var Et;(Et=yt.pop()).dispose()}return t.postRenderFunctions.push((function(t,e){n.expireCache(e.viewState.projection,H)})),this.postRender(e,t),Tt},e.prototype.getData=function(t){if(!this.helper.getGL())return null;var e=this.frameState_;if(!e)return null;var r=this.getLayer(),n=Object(S.a)(e.pixelToCoordinateTransform,t.slice()),o=e.viewState,i=r.getExtent();if(i&&!Object(w.g)(Object(C.l)(i,o.projection),n))return null;var a,c,u,s=r.getSources(Object(w.c)([n]),o.resolution);for(a=s.length-1;a>=0;--a)if("ready"===(c=s[a]).getState()){if(u=c.getTileGridForProjection(o.projection),c.getWrapX())break;var l=u.getExtent();if(!l||Object(w.g)(l,n))break}if(a<0)return null;for(var f=this.tileTextureCache_,h=u.getZForResolution(o.resolution);h>=u.getMinZoom();--h){var p=u.getTileCoordForCoordAndZ(n,h),g=Q(c,p);if(f.containsKey(g)){var d=f.get(g);if(d.loaded){var v=u.getOrigin(h),_=Object(m.c)(u.getTileSize(h)),T=u.getResolution(h),y=(n[0]-v[0])/T-p[1]*_[0],E=(v[1]-n[1])/T-p[2]*_[1];return d.getPixelData(y,E)}}}return null},e.prototype.findAltTiles_=function(t,e,r,n){var o=t.getTileRangeForTileCoordAndZ(e,r,this.tempTileRange_);if(!o)return!1;for(var i=!0,a=this.tileTextureCache_,c=this.getLayer().getRenderSource(),u=o.minX;u<=o.maxX;++u)for(var s=o.minY;s<=o.maxY;++s){var l=Q(c,[r,u,s]),f=!1;if(a.containsKey(l)){var h=a.get(l);h.loaded&&(W(n,h,r),f=!0)}f||(i=!1)}return i},e.prototype.removeHelper=function(){if(this.helper){var e=this.tileTextureCache_;e.forEach((function(t){return t.dispose()})),e.clear()}t.prototype.removeHelper.call(this)},e.prototype.disposeInternal=function(){var e=this.helper;e&&(e.getGL().deleteProgram(this.program_),delete this.program_,e.deleteBuffer(this.indices_));t.prototype.disposeInternal.call(this),delete this.indices_,delete this.tileTextureCache_,delete this.frameState_},e}(b.d),tt=function(){function t(t,e){this.name=t,this.data=e,this.texture_=null}return t.prototype.getTexture=function(t){if(!this.texture_){var e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.data.length/4,1,0,t.RGBA,t.UNSIGNED_BYTE,this.data),this.texture_=e}return this.texture_},t}(),et=r("7e97"),rt=r("92a2"),nt={NUMBER:1,STRING:2,COLOR:4,BOOLEAN:8,NUMBER_ARRAY:16,ANY:31,NONE:0},ot={};function it(t){if("number"==typeof t)return nt.NUMBER;if("boolean"==typeof t)return nt.BOOLEAN;if("string"==typeof t)return Object(et.d)(t)?nt.COLOR|nt.STRING:nt.STRING;if(!Array.isArray(t))throw new Error("Unhandled value type: ".concat(JSON.stringify(t)));var e=t;if(e.every((function(t){return"number"==typeof t})))return 3===e.length||4===e.length?nt.COLOR|nt.NUMBER_ARRAY:nt.NUMBER_ARRAY;if("string"!=typeof e[0])throw new Error("Expected an expression operator but received: ".concat(JSON.stringify(e)));var r=ot[e[0]];if(void 0===r)throw new Error("Unrecognized expression operator: ".concat(JSON.stringify(e)));return r.getReturnType(e.slice(1))}function at(t){var e=t.toString();return-1===e.indexOf(".")?e+".0":e}function ct(t){if(t.length<2||t.length>4)throw new Error("`formatArray` can only output `vec2`, `vec3` or `vec4` arrays.");return"vec".concat(t.length,"(").concat(t.map(at).join(", "),")")}function ut(t,e){return void 0===t.stringLiteralsMap[e]&&(t.stringLiteralsMap[e]=Object.keys(t.stringLiteralsMap).length),t.stringLiteralsMap[e]}function st(t,e,r){if(Array.isArray(e)&&"string"==typeof e[0]){var n=ot[e[0]];if(void 0===n)throw new Error("Unrecognized expression operator: ".concat(JSON.stringify(e)));return n.toGlsl(t,e.slice(1),r)}var o,i,a=it(e);if((a&nt.NUMBER)>0)return at(e);if((a&nt.BOOLEAN)>0)return e.toString();if((a&nt.STRING)>0&&(void 0===r||r==nt.STRING))return function(t,e){return at(ut(t,e))}(t,e.toString());if((a&nt.COLOR)>0&&(void 0===r||r==nt.COLOR))return o=e,(i=Object(et.a)(o).slice()).length<4&&i.push(1),ct(i.map((function(t,e){return e<3?t/255:t})));if((a&nt.NUMBER_ARRAY)>0)return ct(e);throw new Error("Unexpected expression ".concat(e," (expected type ").concat(r,")"))}function lt(t){if(!(it(t)&nt.NUMBER))throw new Error("A numeric value was expected, got ".concat(JSON.stringify(t)," instead"))}function ft(t){for(var e=0;e<t.length;e++)lt(t[e])}function ht(t){if(!(it(t)&nt.STRING))throw new Error("A string value was expected, got ".concat(JSON.stringify(t)," instead"))}function pt(t){if(!(it(t)&nt.BOOLEAN))throw new Error("A boolean value was expected, got ".concat(JSON.stringify(t)," instead"))}function gt(t,e){if(t.length!==e)throw new Error("Exactly ".concat(e," arguments were expected, got ").concat(t.length," instead"))}function dt(t,e){if(t.length<e)throw new Error("At least ".concat(e," arguments were expected, got ").concat(t.length," instead"))}function vt(t,e){if(t.length>e)throw new Error("At most ".concat(e," arguments were expected, got ").concat(t.length," instead"))}function _t(t){if(t.length%2!=0)throw new Error("An even amount of arguments was expected, got ".concat(t," instead"))}function mt(t,e){if(r=e,Object(rt.f)(r)%1!=0)throw new Error("Could not infer only one type from the following expression: ".concat(JSON.stringify(t)));var r}function Tt(t){return"u_var_"+t}ot.get={getReturnType:function(t){return nt.ANY},toGlsl:function(t,e){gt(e,1),ht(e[0]);var r=e[0].toString();return-1===t.attributes.indexOf(r)&&t.attributes.push(r),(t.inFragmentShader?"v_":"a_")+r}},ot.var={getReturnType:function(t){return nt.ANY},toGlsl:function(t,e){gt(e,1),ht(e[0]);var r=e[0].toString();return-1===t.variables.indexOf(r)&&t.variables.push(r),Tt(r)}};var yt="u_paletteTextures";ot.palette={getReturnType:function(t){return nt.COLOR},toGlsl:function(t,e){gt(e,2),lt(e[0]);var r=st(t,e[0]),n=e[1];if(!Array.isArray(n))throw new Error("The second argument of palette must be an array");for(var o=n.length,i=new Uint8Array(4*o),a=0;a<o;a++){var c=n[a],u=void 0;if("string"==typeof c)u=Object(et.c)(c);else{if(!Array.isArray(c))throw new Error("The second argument of palette must be an array of strings or colors");var s=c.length;if(4===s)u=c;else{if(3!==s)throw new Error("Expected palette color to have 3 or 4 values, got ".concat(s));u=[c[0],c[1],c[2],1]}}var l=4*a;i[l]=u[0],i[l+1]=u[1],i[l+2]=u[2],i[l+3]=255*u[3]}t.paletteTextures||(t.paletteTextures=[]);var f="".concat(yt,"[").concat(t.paletteTextures.length,"]"),h=new tt(f,i);return t.paletteTextures.push(h),"texture2D(".concat(f,", vec2((").concat(r," + 0.5) / ").concat(o,".0, 0.5))")}};var Et="getBandValue";function Rt(t){return{getReturnType:function(t){return nt.BOOLEAN},toGlsl:function(e,r){gt(r,2);for(var n=nt.ANY,o=0;o<r.length;o++)n&=it(r[o]);if(n===nt.NONE)throw new Error("All arguments should be of compatible type, got ".concat(JSON.stringify(r)," instead"));return n&=~nt.COLOR,"(".concat(st(e,r[0],n)," ").concat(t," ").concat(st(e,r[1],n),")")}}}function xt(t){return{getReturnType:function(t){return nt.BOOLEAN},toGlsl:function(e,r){dt(r,2);for(var n=0;n<r.length;n++)pt(r[n]);var o="";return o=r.map((function(t){return st(e,t)})).join(" ".concat(t," ")),o="(".concat(o,")")}}}ot.band={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){dt(e,1),vt(e,3);var r=e[0];if(!(Et in t.functions)){for(var n="",o=t.bandCount||1,i=0;i<o;i++){var a=Math.floor(i/4),c=i%4;c===o-1&&1===c&&(c=3);var u="".concat(L,"[").concat(a,"]");n+="\n          if (band == ".concat(i+1,".0) {\n            return texture2D(").concat(u,", v_textureCoord + vec2(dx, dy))[").concat(c,"];\n          }\n        ")}t.functions[Et]="\n        float getBandValue(float band, float xOffset, float yOffset) {\n          float dx = xOffset / ".concat(P,";\n          float dy = yOffset / ").concat(F,";\n          ").concat(n,"\n        }\n      ")}var s=st(t,r),l=st(t,e[1]||0),f=st(t,e[2]||0);return"".concat(Et,"(").concat(s,", ").concat(l,", ").concat(f,")")}},ot.time={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,0),"u_time"}},ot.zoom={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,0),"u_zoom"}},ot.resolution={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,0),"u_resolution"}},ot["*"]={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,2),ft(e),"(".concat(st(t,e[0])," * ").concat(st(t,e[1]),")")}},ot["/"]={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,2),ft(e),"(".concat(st(t,e[0])," / ").concat(st(t,e[1]),")")}},ot["+"]={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,2),ft(e),"(".concat(st(t,e[0])," + ").concat(st(t,e[1]),")")}},ot["-"]={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,2),ft(e),"(".concat(st(t,e[0])," - ").concat(st(t,e[1]),")")}},ot.clamp={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){gt(e,3),ft(e);var r=st(t,e[1]),n=st(t,e[2]);return"clamp(".concat(st(t,e[0]),", ").concat(r,", ").concat(n,")")}},ot["%"]={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,2),ft(e),"mod(".concat(st(t,e[0]),", ").concat(st(t,e[1]),")")}},ot["^"]={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,2),ft(e),"pow(".concat(st(t,e[0]),", ").concat(st(t,e[1]),")")}},ot.abs={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,1),ft(e),"abs(".concat(st(t,e[0]),")")}},ot.floor={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,1),ft(e),"floor(".concat(st(t,e[0]),")")}},ot.round={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,1),ft(e),"floor(".concat(st(t,e[0])," + 0.5)")}},ot.ceil={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,1),ft(e),"ceil(".concat(st(t,e[0]),")")}},ot.sin={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,1),ft(e),"sin(".concat(st(t,e[0]),")")}},ot.cos={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return gt(e,1),ft(e),"cos(".concat(st(t,e[0]),")")}},ot.atan={getReturnType:function(t){return nt.NUMBER},toGlsl:function(t,e){return dt(e,1),vt(e,2),ft(e),2===e.length?"atan(".concat(st(t,e[0]),", ").concat(st(t,e[1]),")"):"atan(".concat(st(t,e[0]),")")}},ot[">"]={getReturnType:function(t){return nt.BOOLEAN},toGlsl:function(t,e){return gt(e,2),ft(e),"(".concat(st(t,e[0])," > ").concat(st(t,e[1]),")")}},ot[">="]={getReturnType:function(t){return nt.BOOLEAN},toGlsl:function(t,e){return gt(e,2),ft(e),"(".concat(st(t,e[0])," >= ").concat(st(t,e[1]),")")}},ot["<"]={getReturnType:function(t){return nt.BOOLEAN},toGlsl:function(t,e){return gt(e,2),ft(e),"(".concat(st(t,e[0])," < ").concat(st(t,e[1]),")")}},ot["<="]={getReturnType:function(t){return nt.BOOLEAN},toGlsl:function(t,e){return gt(e,2),ft(e),"(".concat(st(t,e[0])," <= ").concat(st(t,e[1]),")")}},ot["=="]=Rt("=="),ot["!="]=Rt("!="),ot["!"]={getReturnType:function(t){return nt.BOOLEAN},toGlsl:function(t,e){return gt(e,1),pt(e[0]),"(!".concat(st(t,e[0]),")")}},ot.all=xt("&&"),ot.any=xt("||"),ot.between={getReturnType:function(t){return nt.BOOLEAN},toGlsl:function(t,e){gt(e,3),ft(e);var r=st(t,e[1]),n=st(t,e[2]),o=st(t,e[0]);return"(".concat(o," >= ").concat(r," && ").concat(o," <= ").concat(n,")")}},ot.array={getReturnType:function(t){return nt.NUMBER_ARRAY},toGlsl:function(t,e){dt(e,2),vt(e,4),ft(e);var r=e.map((function(e){return st(t,e,nt.NUMBER)}));return"vec".concat(e.length,"(").concat(r.join(", "),")")}},ot.color={getReturnType:function(t){return nt.COLOR},toGlsl:function(t,e){dt(e,3),vt(e,4),ft(e);var r=e;3===e.length&&r.push(1);var n=e.map((function(e,r){return st(t,e,nt.NUMBER)+(r<3?" / 255.0":"")}));return"vec".concat(e.length,"(").concat(n.join(", "),")")}},ot.interpolate={getReturnType:function(t){for(var e=nt.COLOR|nt.NUMBER,r=3;r<t.length;r+=2)e&=it(t[r]);return e},toGlsl:function(t,e,r){_t(e),dt(e,6);var n,o=e[0];switch(o[0]){case"linear":n=1;break;case"exponential":n=o[1];break;default:n=null}if(!n)throw new Error('Invalid interpolation type for "interpolate" operator, received: '.concat(JSON.stringify(o)));var i=void 0!==r?r:nt.ANY,a=ot.interpolate.getReturnType(e)&i;mt(e,a);for(var c=st(t,e[1]),u=at(n),s="",l=2;l<e.length-2;l+=2){var f=st(t,e[l]),h=s||st(t,e[l+1],a),p=st(t,e[l+2]),g=st(t,e[l+3],a);s="mix(".concat(h,", ").concat(g,", pow(clamp((").concat(c," - ").concat(f,") / (").concat(p," - ").concat(f,"), 0.0, 1.0), ").concat(u,"))")}return s}},ot.match={getReturnType:function(t){for(var e=nt.ANY,r=2;r<t.length;r+=2)e&=it(t[r]);return e&=it(t[t.length-1])},toGlsl:function(t,e,r){_t(e),dt(e,4);var n=void 0!==r?r:nt.ANY,o=ot.match.getReturnType(e)&n;mt(e,o);for(var i=st(t,e[0]),a=st(t,e[e.length-1],o),c=null,u=e.length-3;u>=1;u-=2){var s=st(t,e[u]),l=st(t,e[u+1],o);c="(".concat(i," == ").concat(s," ? ").concat(l," : ").concat(c||a,")")}return c}},ot.case={getReturnType:function(t){for(var e=nt.ANY,r=1;r<t.length;r+=2)e&=it(t[r]);return e&=it(t[t.length-1])},toGlsl:function(t,e,r){!function(t){if(t.length%2==0)throw new Error("An odd amount of arguments was expected, got ".concat(t," instead"))}(e),dt(e,3);var n=void 0!==r?r:nt.ANY,o=ot.case.getReturnType(e)&n;mt(e,o);for(var i=0;i<e.length-1;i+=2)pt(e[i]);var a=st(t,e[e.length-1],o),c=null;for(i=e.length-3;i>=0;i-=2){var u=st(t,e[i]),s=st(t,e[i+1],o);c="(".concat(u," ? ").concat(s," : ").concat(c||a,")")}return c}};var bt=r("32a2"),Ot=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();function St(t,e){var r="\n    attribute vec2 ".concat(Z,";\n    uniform mat4 ").concat(M,";\n    uniform float ").concat(P,";\n    uniform float ").concat(F,";\n    uniform float ").concat(I,";\n    uniform float ").concat(z,";\n    uniform float ").concat(X,";\n    uniform float ").concat(D,";\n\n    varying vec2 v_textureCoord;\n    varying vec2 v_mapCoord;\n\n    void main() {\n      v_textureCoord = ").concat(Z,";\n      v_mapCoord = vec2(\n        ").concat(z," + ").concat(I," * ").concat(P," * v_textureCoord[0],\n        ").concat(X," - ").concat(I," * ").concat(F," * v_textureCoord[1]\n      );\n      gl_Position = ").concat(M," * vec4(").concat(Z,", ").concat(D,", 1.0);\n    }\n  "),n={inFragmentShader:!0,variables:[],attributes:[],stringLiteralsMap:{},functions:{},bandCount:e},o=[];if(void 0!==t.color){var i=st(n,t.color,nt.COLOR);o.push("color = ".concat(i,";"))}if(void 0!==t.contrast){var a=st(n,t.contrast,nt.NUMBER);o.push("color.rgb = clamp((".concat(a," + 1.0) * color.rgb - (").concat(a," / 2.0), vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));"))}if(void 0!==t.exposure){var c=st(n,t.exposure,nt.NUMBER);o.push("color.rgb = clamp((".concat(c," + 1.0) * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));"))}if(void 0!==t.saturation){var u=st(n,t.saturation,nt.NUMBER);o.push("\n      float saturation = ".concat(u," + 1.0;\n      float sr = (1.0 - saturation) * 0.2126;\n      float sg = (1.0 - saturation) * 0.7152;\n      float sb = (1.0 - saturation) * 0.0722;\n      mat3 saturationMatrix = mat3(\n        sr + saturation, sr, sr,\n        sg, sg + saturation, sg,\n        sb, sb, sb + saturation\n      );\n      color.rgb = clamp(saturationMatrix * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));\n    "))}if(void 0!==t.gamma){var s=st(n,t.gamma,nt.NUMBER);o.push("color.rgb = pow(color.rgb, vec3(1.0 / ".concat(s,"));"))}if(void 0!==t.brightness){var l=st(n,t.brightness,nt.NUMBER);o.push("color.rgb = clamp(color.rgb + ".concat(l,", vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));"))}var f={},h=n.variables.length;if(h>1&&!t.variables)throw new Error("Missing variables in style (expected ".concat(n.variables,")"));for(var p=function(e){var r=n.variables[e];if(!(r in t.variables))throw new Error("Missing '".concat(r,"' in style variables"));var o=Tt(r);f[o]=function(){var e=t.variables[r];return"string"==typeof e&&(e=ut(n,e)),void 0!==e?e:-9999999}},g=0;g<h;++g)p(g);var d=Object.keys(f).map((function(t){return"uniform float ".concat(t,";")})),v=Math.ceil(e/4);d.push("uniform sampler2D ".concat(L,"[").concat(v,"];")),n.paletteTextures&&d.push("uniform sampler2D ".concat(yt,"[").concat(n.paletteTextures.length,"];"));var _=Object.keys(n.functions).map((function(t){return n.functions[t]}));return{vertexShader:r,fragmentShader:"\n    #ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    #else\n    precision mediump float;\n    #endif\n\n    varying vec2 v_textureCoord;\n    varying vec2 v_mapCoord;\n    uniform vec4 ".concat(Y,";\n    uniform float ").concat(B,";\n    uniform float ").concat(P,";\n    uniform float ").concat(F,";\n    uniform float ").concat(V,";\n    uniform float ").concat(k,";\n\n    ").concat(d.join("\n"),"\n\n    ").concat(_.join("\n"),"\n\n    void main() {\n      if (\n        v_mapCoord[0] < ").concat(Y,"[0] ||\n        v_mapCoord[1] < ").concat(Y,"[1] ||\n        v_mapCoord[0] > ").concat(Y,"[2] ||\n        v_mapCoord[1] > ").concat(Y,"[3]\n      ) {\n        discard;\n      }\n\n      vec4 color = texture2D(").concat(L,"[0],  v_textureCoord);\n\n      ").concat(o.join("\n"),"\n\n      if (color.a == 0.0) {\n        discard;\n      }\n\n      gl_FragColor = color;\n      gl_FragColor.rgb *= gl_FragColor.a;\n      gl_FragColor *= ").concat(B,";\n    }"),uniforms:f,paletteTextures:n.paletteTextures}}var wt=function(t){function e(e){var r=this,n=e?Object(bt.a)({},e):{},o=n.style||{};delete n.style;var a=n.cacheSize;return delete n.cacheSize,(r=t.call(this,n)||this).sources_=n.sources,r.renderedSource_=null,r.renderedResolution_=NaN,r.style_=o,r.cacheSize_=a,r.styleVariables_=r.style_.variables||{},r.addChangeListener(i.a.SOURCE,r.handleSourceUpdate_),r}return Ot(e,t),e.prototype.getSources=function(t,e){var r=this.getSource();return this.sources_?"function"==typeof this.sources_?this.sources_(t,e):this.sources_:r?[r]:[]},e.prototype.getRenderSource=function(){return this.renderedSource_||this.getSource()},e.prototype.getSourceState=function(){var t=this.getRenderSource();return t?t.getState():"undefined"},e.prototype.handleSourceUpdate_=function(){this.getSource()&&this.setStyle(this.style_)},e.prototype.getSourceBandCount_=function(){var t=Number.MAX_SAFE_INTEGER,e=this.getSources([-t,-t,t,t],t);return e&&e.length&&"bandCount"in e[0]?e[0].bandCount:4},e.prototype.createRenderer=function(){var t=St(this.style_,this.getSourceBandCount_());return new $(this,{vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,uniforms:t.uniforms,cacheSize:this.cacheSize_,paletteTextures:t.paletteTextures})},e.prototype.renderSources=function(t,e){for(var r,n=this.getRenderer(),o=0,i=e.length;o<i;++o)this.renderedSource_=e[o],n.prepareFrame(t)&&(r=n.renderFrame(t));return r},e.prototype.render=function(t,e){var r=this;this.rendered=!0;for(var n=t.viewState,o=this.getSources(t.extent,n.resolution),i=!0,a=function(t,e){var n=o[t],a=n.getState();if("loading"==a){var c=function(){"ready"==n.getState()&&(n.removeEventListener("change",c),r.changed())};n.addEventListener("change",c)}i=i&&"ready"==a},c=0,u=o.length;c<u;++c)a(c);var s=this.renderSources(t,o);if(this.getRenderer().renderComplete&&i)return this.renderedResolution_=n.resolution,s;if(this.renderedResolution_>.5*n.resolution){var l=this.getSources(t.extent,this.renderedResolution_).filter((function(t){return!o.includes(t)}));if(l.length>0)return this.renderSources(t,l)}return s},e.prototype.setStyle=function(t){this.styleVariables_=t.variables||{},this.style_=t;var e=St(this.style_,this.getSourceBandCount_());this.getRenderer().reset({vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms,paletteTextures:e.paletteTextures}),this.changed()},e.prototype.updateStyleVariables=function(t){Object(bt.a)(this.styleVariables_,t),this.changed()},e}(o.a);wt.prototype.dispose;e.a=wt}}]);
//# sourceMappingURL=chunk-1ff31e76.3bee9182.js.map