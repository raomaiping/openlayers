(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6d792748"],{"04b1":function(e,t,r){"use strict";var i=r("15a3");t.a=(...e)=>{const t=document.querySelector(".el-aside .menu .el-scrollbar__view"),r=new MutationObserver((function(t){for(let r of t)if("childList"===r.type);else if("attributes"===r.type&&"style"===r.attributeName)for(let t=0;t<e.length;t++)e[t].updateSize()}));r.observe(t,{attributes:!0,childList:!0,subtree:!0}),Object(i.onBeforeUnmount)((()=>{r.disconnect()}))}},"0e6b":function(e,t,r){"use strict";r.r(t);var i=r("15a3"),n=(r("16fa"),r("a147")),o=r("d0a2"),a=r("80bc"),s=r("8e03"),c=r("76f7"),u=r("ce84"),l=r("6bae"),h=r("701f"),d=r("495d"),f=r("b9ca"),g=r("a29c"),p=r("bb5d"),_=r("1bfd"),y=r("e7b8"),v=r("f5c2"),m=r("1c1c"),b=r("5a50"),O=r("04b1");const x=e=>(Object(i.pushScopeId)("data-v-471ab784"),e=e(),Object(i.popScopeId)(),e),C=x((()=>Object(i.createElementVNode)("div",{id:"menu"}," 修改几何图形：请用鼠标选择修改要素，选中后再修改其几何信息 ",-1))),j=x((()=>Object(i.createElementVNode)("div",{id:"map"},null,-1)));var S={__name:"index",setup(e){const t=new n.a(new y.a([114.1947,30.5255])),r=new n.a(new v.a([[114.2218,30.5695],[114.2829,30.4912]])),x=new n.a(new m.a([[[114.2757,30.5822],[114.3526,30.5879],[114.3608,30.5367],[114.3234,30.5187],[114.2826,30.553]]])),S=new u.a({features:[t,r,x]}),F=new s.a({source:S,style:new h.c({fill:new d.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new f.a({color:"#ff0000",width:2}),image:new g.a({radius:7,fill:new d.a({color:"#ff0000"})})})});let w=null;const E=new c.a({source:new l.a({attributions:b.a,url:b.e,maxZoom:20})}),M={init:function(){this.select=new p.a,w.addInteraction(this.select),this.modify=new _.a({features:this.select.getFeatures()}),w.addInteraction(this.modify),this.setEvents()},setEvents:function(){const e=this.select.getFeatures();this.select.on("change:active",(()=>{e.forEach(e.remove,e)}))},setActive:function(e){this.select.setActive(e),this.modify.setActive(e)}};return Object(i.onMounted)((()=>{w=new o.a({target:"map",layers:[E],view:new a.a({projection:"EPSG:4326",center:[114.2905,30.5607],zoom:12})}),Object(O.a)(w),w.addLayer(F),M.init(),M.setActive(!0)})),(e,t)=>(Object(i.openBlock)(),Object(i.createElementBlock)(i.Fragment,null,[C,j],64))}},F=(r("4c66"),r("1b82"));const w=r.n(F)()(S,[["__scopeId","data-v-471ab784"]]);t.default=w},"1bfd":function(e,t,r){"use strict";var i,n=r("9363"),o=r("278c"),a=r("adb7"),s=r("06f9"),c=r("a147"),u=r("251c"),l=r("e7b8"),h=r("0fef"),d=r("f9ee"),f=r("f32b"),g=r("8e03"),p=r("ce84"),_=r("0d54"),y=r("5c82"),v=r("b2ce"),m=r("701f"),b=r("0780"),O=r("1c1c"),x=r("7c6d"),C=r("f555"),j=(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),S=[0,0,0,0],F=[],w="modifystart",E="modifyend",M=function(e){function t(t,r,i){var n=e.call(this,t)||this;return n.features=r,n.mapBrowserEvent=i,n}return j(t,e),t}(a.a),P=function(e){function t(t){var r,i,a=e.call(this,t)||this;if(a.on,a.once,a.un,a.boundHandleFeatureChange_=a.handleFeatureChange_.bind(a),a.condition_=t.condition?t.condition:_.j,a.defaultDeleteCondition_=function(e){return Object(_.b)(e)&&Object(_.l)(e)},a.deleteCondition_=t.deleteCondition?t.deleteCondition:a.defaultDeleteCondition_,a.insertVertexCondition_=t.insertVertexCondition?t.insertVertexCondition:_.d,a.vertexFeature_=null,a.vertexSegments_=null,a.lastPixel_=[0,0],a.ignoreNextSingleClick_=!1,a.featuresBeingModified_=null,a.rBush_=new d.a,a.pixelTolerance_=void 0!==t.pixelTolerance?t.pixelTolerance:10,a.snappedToVertex_=!1,a.changingFeature_=!1,a.dragSegments_=[],a.overlay_=new g.a({source:new p.a({useSpatialIndex:!1,wrapX:!!t.wrapX}),style:t.style?t.style:(r=Object(m.b)(),function(e,t){return r.Point}),updateWhileAnimating:!0,updateWhileInteracting:!0}),a.SEGMENT_WRITERS_={Point:a.writePointGeometry_.bind(a),LineString:a.writeLineStringGeometry_.bind(a),LinearRing:a.writeLineStringGeometry_.bind(a),Polygon:a.writePolygonGeometry_.bind(a),MultiPoint:a.writeMultiPointGeometry_.bind(a),MultiLineString:a.writeMultiLineStringGeometry_.bind(a),MultiPolygon:a.writeMultiPolygonGeometry_.bind(a),Circle:a.writeCircleGeometry_.bind(a),GeometryCollection:a.writeGeometryCollectionGeometry_.bind(a)},a.source_=null,a.hitDetection_=null,t.features?i=t.features:t.source&&(a.source_=t.source,i=new n.a(a.source_.getFeatures()),a.source_.addEventListener(f.a.ADDFEATURE,a.handleSourceAdd_.bind(a)),a.source_.addEventListener(f.a.REMOVEFEATURE,a.handleSourceRemove_.bind(a))),!i)throw new Error("The modify interaction requires features, a source or a layer");return t.hitDetection&&(a.hitDetection_=t.hitDetection),a.features_=i,a.features_.forEach(a.addFeature_.bind(a)),a.features_.addEventListener(o.a.ADD,a.handleFeatureAdd_.bind(a)),a.features_.addEventListener(o.a.REMOVE,a.handleFeatureRemove_.bind(a)),a.lastPointerEvent_=null,a.delta_=[0,0],a.snapToPointer_=void 0===t.snapToPointer?!a.hitDetection_:t.snapToPointer,a}return j(t,e),t.prototype.addFeature_=function(e){var t=e.getGeometry();if(t){var r=this.SEGMENT_WRITERS_[t.getType()];r&&r(e,t)}var i=this.getMap();i&&i.isRendered()&&this.getActive()&&this.handlePointerAtPixel_(this.lastPixel_,i),e.addEventListener(s.a.CHANGE,this.boundHandleFeatureChange_)},t.prototype.willModifyFeatures_=function(e,t){if(!this.featuresBeingModified_){this.featuresBeingModified_=new n.a;for(var r=this.featuresBeingModified_.getArray(),i=0,o=t.length;i<o;++i)for(var a=t[i],s=0,c=a.length;s<c;++s){var u=a[s].feature;u&&-1===r.indexOf(u)&&this.featuresBeingModified_.push(u)}0===this.featuresBeingModified_.getLength()?this.featuresBeingModified_=null:this.dispatchEvent(new M(w,this.featuresBeingModified_,e))}},t.prototype.removeFeature_=function(e){this.removeFeatureSegmentData_(e),this.vertexFeature_&&0===this.features_.getLength()&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),e.removeEventListener(s.a.CHANGE,this.boundHandleFeatureChange_)},t.prototype.removeFeatureSegmentData_=function(e){var t=this.rBush_,r=[];t.forEach((function(t){e===t.feature&&r.push(t)}));for(var i=r.length-1;i>=0;--i){for(var n=r[i],o=this.dragSegments_.length-1;o>=0;--o)this.dragSegments_[o][0]===n&&this.dragSegments_.splice(o,1);t.remove(n)}},t.prototype.setActive=function(t){this.vertexFeature_&&!t&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),e.prototype.setActive.call(this,t)},t.prototype.setMap=function(t){this.overlay_.setMap(t),e.prototype.setMap.call(this,t)},t.prototype.getOverlay=function(){return this.overlay_},t.prototype.handleSourceAdd_=function(e){e.feature&&this.features_.push(e.feature)},t.prototype.handleSourceRemove_=function(e){e.feature&&this.features_.remove(e.feature)},t.prototype.handleFeatureAdd_=function(e){this.addFeature_(e.element)},t.prototype.handleFeatureChange_=function(e){if(!this.changingFeature_){var t=e.target;this.removeFeature_(t),this.addFeature_(t)}},t.prototype.handleFeatureRemove_=function(e){var t=e.element;this.removeFeature_(t)},t.prototype.writePointGeometry_=function(e,t){var r=t.getCoordinates(),i={feature:e,geometry:t,segment:[r,r]};this.rBush_.insert(t.getExtent(),i)},t.prototype.writeMultiPointGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length;i<n;++i){var o=r[i],a={feature:e,geometry:t,depth:[i],index:i,segment:[o,o]};this.rBush_.insert(t.getExtent(),a)}},t.prototype.writeLineStringGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length-1;i<n;++i){var o=r.slice(i,i+2),a={feature:e,geometry:t,index:i,segment:o};this.rBush_.insert(Object(y.c)(o),a)}},t.prototype.writeMultiLineStringGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length;i<n;++i)for(var o=r[i],a=0,s=o.length-1;a<s;++a){var c=o.slice(a,a+2),u={feature:e,geometry:t,depth:[i],index:a,segment:c};this.rBush_.insert(Object(y.c)(c),u)}},t.prototype.writePolygonGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length;i<n;++i)for(var o=r[i],a=0,s=o.length-1;a<s;++a){var c=o.slice(a,a+2),u={feature:e,geometry:t,depth:[i],index:a,segment:c};this.rBush_.insert(Object(y.c)(c),u)}},t.prototype.writeMultiPolygonGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length;i<n;++i)for(var o=r[i],a=0,s=o.length;a<s;++a)for(var c=o[a],u=0,l=c.length-1;u<l;++u){var h=c.slice(u,u+2),d={feature:e,geometry:t,depth:[a,i],index:u,segment:h};this.rBush_.insert(Object(y.c)(h),d)}},t.prototype.writeCircleGeometry_=function(e,t){var r=t.getCenter(),i={feature:e,geometry:t,index:0,segment:[r,r]},n={feature:e,geometry:t,index:1,segment:[r,r]},o=[i,n];i.featureSegments=o,n.featureSegments=o,this.rBush_.insert(Object(y.n)(r),i);var a=t,s=Object(x.r)();if(s&&this.getMap()){var c=this.getMap().getView().getProjection();a=a.clone().transform(s,c),a=Object(O.b)(a).transform(c,s)}this.rBush_.insert(a.getExtent(),n)},t.prototype.writeGeometryCollectionGeometry_=function(e,t){for(var r=t.getGeometriesArray(),i=0;i<r.length;++i){var n=r[i];(0,this.SEGMENT_WRITERS_[n.getType()])(e,n)}},t.prototype.createOrUpdateVertexFeature_=function(e,t,r){var i=this.vertexFeature_;i?i.getGeometry().setCoordinates(e):(i=new c.a(new l.a(e)),this.vertexFeature_=i,this.overlay_.getSource().addFeature(i));return i.set("features",t),i.set("geometries",r),i},t.prototype.handleEvent=function(t){return!t.originalEvent||(this.lastPointerEvent_=t,t.map.getView().getInteracting()||t.type!=u.a.POINTERMOVE||this.handlingDownUpSequence||this.handlePointerMove_(t),this.vertexFeature_&&this.deleteCondition_(t)&&(r=!(t.type!=u.a.SINGLECLICK||!this.ignoreNextSingleClick_)||this.removePoint()),t.type==u.a.SINGLECLICK&&(this.ignoreNextSingleClick_=!1),e.prototype.handleEvent.call(this,t)&&!r);var r},t.prototype.handleDragEvent=function(e){this.ignoreNextSingleClick_=!1,this.willModifyFeatures_(e,this.dragSegments_);for(var t=[e.coordinate[0]+this.delta_[0],e.coordinate[1]+this.delta_[1]],r=[],i=[],n=0,o=this.dragSegments_.length;n<o;++n){var a=this.dragSegments_[n],s=a[0],c=s.feature;-1===r.indexOf(c)&&r.push(c);var u=s.geometry;-1===i.indexOf(u)&&i.push(u);for(var l=s.depth,h=void 0,d=s.segment,f=a[1];t.length<u.getStride();)t.push(d[f][t.length]);switch(u.getType()){case"Point":h=t,d[0]=t,d[1]=t;break;case"MultiPoint":(h=u.getCoordinates())[s.index]=t,d[0]=t,d[1]=t;break;case"LineString":(h=u.getCoordinates())[s.index+f]=t,d[f]=t;break;case"MultiLineString":case"Polygon":(h=u.getCoordinates())[l[0]][s.index+f]=t,d[f]=t;break;case"MultiPolygon":(h=u.getCoordinates())[l[1]][l[0]][s.index+f]=t,d[f]=t;break;case"Circle":if(d[0]=t,d[1]=t,0===s.index)this.changingFeature_=!0,u.setCenter(t),this.changingFeature_=!1;else{this.changingFeature_=!0;var g=e.map.getView().getProjection(),p=Object(v.e)(Object(x.k)(u.getCenter(),g),Object(x.k)(t,g)),_=Object(x.r)();if(_){var y=u.clone().transform(_,g);y.setRadius(p),p=y.transform(g,_).getRadius()}u.setRadius(p),this.changingFeature_=!1}}h&&this.setGeometryCoordinates_(u,h)}this.createOrUpdateVertexFeature_(t,r,i)},t.prototype.handleDownEvent=function(e){if(!this.condition_(e))return!1;var t=e.coordinate;this.handlePointerAtPixel_(e.pixel,e.map,t),this.dragSegments_.length=0,this.featuresBeingModified_=null;var r=this.vertexFeature_;if(r){var i=e.map.getView().getProjection(),n=[],o=r.getGeometry().getCoordinates(),a=Object(y.c)([o]),s=this.rBush_.getInExtent(a),c={};s.sort(A);for(var u=0,l=s.length;u<l;++u){var h=s[u],d=h.segment,f=Object(C.c)(h.geometry),g=h.depth;if(g&&(f+="-"+g.join("-")),c[f]||(c[f]=new Array(2)),"Circle"!==h.geometry.getType()||1!==h.index)if(!Object(v.f)(d[0],o)||c[f][0])if(!Object(v.f)(d[1],o)||c[f][1])Object(C.c)(d)in this.vertexSegments_&&!c[f][0]&&!c[f][1]&&this.insertVertexCondition_(e)&&n.push(h);else{if(c[f][0]&&0===c[f][0].index){var p=h.geometry.getCoordinates();switch(h.geometry.getType()){case"LineString":case"MultiLineString":continue;case"MultiPolygon":p=p[g[1]];case"Polygon":if(h.index!==p[g[0]].length-2)continue}}this.dragSegments_.push([h,1]),c[f][1]=h}else this.dragSegments_.push([h,0]),c[f][0]=h;else{var _=T(t,h,i);Object(v.f)(_,o)&&!c[f][0]&&(this.dragSegments_.push([h,0]),c[f][0]=h)}}n.length&&this.willModifyFeatures_(e,[n]);for(var m=n.length-1;m>=0;--m)this.insertVertex_(n[m],o)}return!!this.vertexFeature_},t.prototype.handleUpEvent=function(e){for(var t=this.dragSegments_.length-1;t>=0;--t){var r=this.dragSegments_[t][0],i=r.geometry;if("Circle"===i.getType()){var n=i.getCenter(),o=r.featureSegments[0],a=r.featureSegments[1];o.segment[0]=n,o.segment[1]=n,a.segment[0]=n,a.segment[1]=n,this.rBush_.update(Object(y.n)(n),o);var s=i,c=Object(x.r)();if(c){var u=e.map.getView().getProjection();s=s.clone().transform(c,u),s=Object(O.b)(s).transform(u,c)}this.rBush_.update(s.getExtent(),a)}else this.rBush_.update(Object(y.c)(r.segment),r)}return this.featuresBeingModified_&&(this.dispatchEvent(new M(E,this.featuresBeingModified_,e)),this.featuresBeingModified_=null),!1},t.prototype.handlePointerMove_=function(e){this.lastPixel_=e.pixel,this.handlePointerAtPixel_(e.pixel,e.map,e.coordinate)},t.prototype.handlePointerAtPixel_=function(e,t,r){var i,n,o=this,a=r||t.getCoordinateFromPixel(e),s=t.getView().getProjection();if(this.hitDetection_){var c="object"==typeof this.hitDetection_?function(e){return e===o.hitDetection_}:void 0;t.forEachFeatureAtPixel(e,(function(e,t,r){if("Point"===(r=r||e.getGeometry()).getType()&&Object(b.d)(o.features_.getArray(),e)){n=r;var a=r.getFlatCoordinates().slice(0,2);i=[{feature:e,geometry:r,segment:[a,a]}]}return!0}),{layerFilter:c})}if(!i){var u=Object(x.l)(Object(y.n)(a,S),s),l=t.getView().getResolution()*this.pixelTolerance_,h=Object(x.u)(Object(y.d)(u,l,S),s);i=this.rBush_.getInExtent(h)}if(i&&i.length>0){var d=i.sort((function(e,t){return L(a,e,s)-L(a,t,s)}))[0],f=d.segment,g=T(a,d,s),p=t.getPixelFromCoordinate(g),_=Object(v.e)(e,p);if(n||_<=this.pixelTolerance_){var m={};if(m[Object(C.c)(f)]=!0,this.snapToPointer_||(this.delta_[0]=g[0]-a[0],this.delta_[1]=g[1]-a[1]),"Circle"===d.geometry.getType()&&1===d.index)this.snappedToVertex_=!0,this.createOrUpdateVertexFeature_(g,[d.feature],[d.geometry]);else{var O=t.getPixelFromCoordinate(f[0]),j=t.getPixelFromCoordinate(f[1]),F=Object(v.j)(p,O),w=Object(v.j)(p,j);_=Math.sqrt(Math.min(F,w)),this.snappedToVertex_=_<=this.pixelTolerance_,this.snappedToVertex_&&(g=F>w?f[1]:f[0]),this.createOrUpdateVertexFeature_(g,[d.feature],[d.geometry]);var E={};E[Object(C.c)(d.geometry)]=!0;for(var M=1,P=i.length;M<P;++M){var A=i[M].segment;if(!(Object(v.f)(f[0],A[0])&&Object(v.f)(f[1],A[1])||Object(v.f)(f[0],A[1])&&Object(v.f)(f[1],A[0])))break;var G=Object(C.c)(i[M].geometry);G in E||(E[G]=!0,m[Object(C.c)(A)]=!0)}}return void(this.vertexSegments_=m)}}this.vertexFeature_&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null)},t.prototype.insertVertex_=function(e,t){for(var r,i=e.segment,n=e.feature,o=e.geometry,a=e.depth,s=e.index;t.length<o.getStride();)t.push(0);switch(o.getType()){case"MultiLineString":case"Polygon":(r=o.getCoordinates())[a[0]].splice(s+1,0,t);break;case"MultiPolygon":(r=o.getCoordinates())[a[1]][a[0]].splice(s+1,0,t);break;case"LineString":(r=o.getCoordinates()).splice(s+1,0,t);break;default:return}this.setGeometryCoordinates_(o,r);var c=this.rBush_;c.remove(e),this.updateSegmentIndices_(o,s,a,1);var u={segment:[i[0],t],feature:n,geometry:o,depth:a,index:s};c.insert(Object(y.c)(u.segment),u),this.dragSegments_.push([u,1]);var l={segment:[t,i[1]],feature:n,geometry:o,depth:a,index:s+1};c.insert(Object(y.c)(l.segment),l),this.dragSegments_.push([l,0]),this.ignoreNextSingleClick_=!0},t.prototype.removePoint=function(){if(this.lastPointerEvent_&&this.lastPointerEvent_.type!=u.a.POINTERDRAG){var e=this.lastPointerEvent_;this.willModifyFeatures_(e,this.dragSegments_);var t=this.removeVertex_();return this.featuresBeingModified_&&this.dispatchEvent(new M(E,this.featuresBeingModified_,e)),this.featuresBeingModified_=null,t}return!1},t.prototype.removeVertex_=function(){var e,t,r,i,n,o,a,s,c,u,l,h=this.dragSegments_,d={},f=!1;for(n=h.length-1;n>=0;--n)u=(r=h[n])[0],l=Object(C.c)(u.feature),u.depth&&(l+="-"+u.depth.join("-")),l in d||(d[l]={}),0===r[1]?(d[l].right=u,d[l].index=u.index):1==r[1]&&(d[l].left=u,d[l].index=u.index+1);for(l in d){switch(c=d[l].right,a=d[l].left,(s=(o=d[l].index)-1)<0&&(s=0),e=t=(i=(u=void 0!==a?a:c).geometry).getCoordinates(),f=!1,i.getType()){case"MultiLineString":t[u.depth[0]].length>2&&(t[u.depth[0]].splice(o,1),f=!0);break;case"LineString":t.length>2&&(t.splice(o,1),f=!0);break;case"MultiPolygon":e=e[u.depth[1]];case"Polygon":(e=e[u.depth[0]]).length>4&&(o==e.length-1&&(o=0),e.splice(o,1),f=!0,0===o&&(e.pop(),e.push(e[0]),s=e.length-1))}if(f){this.setGeometryCoordinates_(i,t);var g=[];if(void 0!==a&&(this.rBush_.remove(a),g.push(a.segment[0])),void 0!==c&&(this.rBush_.remove(c),g.push(c.segment[1])),void 0!==a&&void 0!==c){var p={depth:u.depth,feature:u.feature,geometry:u.geometry,index:s,segment:g};this.rBush_.insert(Object(y.c)(p.segment),p)}this.updateSegmentIndices_(i,o,u.depth,-1),this.vertexFeature_&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),h.length=0}}return f},t.prototype.setGeometryCoordinates_=function(e,t){this.changingFeature_=!0,e.setCoordinates(t),this.changingFeature_=!1},t.prototype.updateSegmentIndices_=function(e,t,r,i){this.rBush_.forEachInExtent(e.getExtent(),(function(n){n.geometry===e&&(void 0===r||void 0===n.depth||Object(b.b)(n.depth,r))&&n.index>t&&(n.index+=i)}))},t}(h.b);function A(e,t){return e.index-t.index}function L(e,t,r){var i=t.geometry;if("Circle"===i.getType()){var n=i;if(1===t.index){var o=Object(x.r)();o&&(n=n.clone().transform(o,r));var a=Object(v.j)(n.getCenter(),Object(x.k)(e,r)),s=Math.sqrt(a)-n.getRadius();return s*s}}var c=Object(x.k)(e,r);return F[0]=Object(x.k)(t.segment[0],r),F[1]=Object(x.k)(t.segment[1],r),Object(v.k)(c,F)}function T(e,t,r){var i=t.geometry;if("Circle"===i.getType()&&1===t.index){var n=i,o=Object(x.r)();return o&&(n=n.clone().transform(o,r)),Object(x.t)(n.getClosestPoint(Object(x.k)(e,r)),r)}var a=Object(x.k)(e,r);return F[0]=Object(x.k)(t.segment[0],r),F[1]=Object(x.k)(t.segment[1],r),Object(x.t)(Object(v.b)(a,F),r)}t.a=P},2822:function(e,t,r){},"4c66":function(e,t,r){"use strict";r("2822")},ac8a:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s}));var i=r("0780"),n=r("92a2");function o(e,t,r,o,a,s,c){var u,l,h=(r-t)/o;if(1===h)u=t;else if(2===h)u=t,l=a;else if(0!==h){for(var d=e[t],f=e[t+1],g=0,p=[0],_=t+o;_<r;_+=o){var y=e[_],v=e[_+1];g+=Math.sqrt((y-d)*(y-d)+(v-f)*(v-f)),p.push(g),d=y,f=v}var m=a*g,b=Object(i.a)(p,m);b<0?(l=(m-p[-b-2])/(p[-b-1]-p[-b-2]),u=t+(-b-2)*o):u=t+b*o}var O=c>1?c:2,x=s||new Array(O);for(_=0;_<O;++_)x[_]=void 0===u?NaN:void 0===l?e[u+_]:Object(n.e)(e[u+_],e[u+o+_],l);return x}function a(e,t,r,i,o,a){if(r==t)return null;var s;if(o<e[t+i-1])return a?((s=e.slice(t,t+i))[i-1]=o,s):null;if(e[r-1]<o)return a?((s=e.slice(r-i,r))[i-1]=o,s):null;if(o==e[t+i-1])return e.slice(t,t+i);for(var c=t/i,u=r/i;c<u;){var l=c+u>>1;o<e[(l+1)*i-1]?u=l:c=l+1}var h=e[c*i-1];if(o==h)return e.slice((c-1)*i,(c-1)*i+i);var d=(o-h)/(e[(c+1)*i-1]-h);s=[];for(var f=0;f<i-1;++f)s.push(Object(n.e)(e[(c-1)*i+f],e[c*i+f],d));return s.push(o),s}function s(e,t,r,i,n,o,s){if(s)return a(e,t,r[r.length-1],i,n,o);var c;if(n<e[i-1])return o?((c=e.slice(0,i))[i-1]=n,c):null;if(e[e.length-1]<n)return o?((c=e.slice(e.length-i))[i-1]=n,c):null;for(var u=0,l=r.length;u<l;++u){var h=r[u];if(t!=h){if(n<e[t+i-1])return null;if(n<=e[h-1])return a(e,t,h,i,n,!1);t=h}}return null}},bb5d:function(e,t,r){"use strict";var i,n=r("9363"),o=r("278c"),a=r("adb7"),s=r("9edc"),c=r("8e03"),u=r("abc6"),l=r("32a2"),h=r("701f"),d=r("0780"),f=r("f555"),g=r("0d54"),p=(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),_="select",y=function(e){function t(t,r,i,n){var o=e.call(this,t)||this;return o.selected=r,o.deselected=i,o.mapBrowserEvent=n,o}return p(t,e),t}(a.a),v={},m=function(e){function t(t){var r=e.call(this)||this;r.on,r.once,r.un;var i,o,a=t||{};if(r.boundAddFeature_=r.addFeature_.bind(r),r.boundRemoveFeature_=r.removeFeature_.bind(r),r.condition_=a.condition?a.condition:g.l,r.addCondition_=a.addCondition?a.addCondition:g.h,r.removeCondition_=a.removeCondition?a.removeCondition:g.h,r.toggleCondition_=a.toggleCondition?a.toggleCondition:g.k,r.multi_=!!a.multi&&a.multi,r.filter_=a.filter?a.filter:u.b,r.hitTolerance_=a.hitTolerance?a.hitTolerance:0,r.style_=void 0!==a.style?a.style:(i=Object(h.b)(),Object(d.c)(i.Polygon,i.LineString),Object(d.c)(i.GeometryCollection,i.LineString),function(e){return e.getGeometry()?i[e.getGeometry().getType()]:null}),r.features_=a.features||new n.a,a.layers)if("function"==typeof a.layers)o=a.layers;else{var s=a.layers;o=function(e){return Object(d.d)(s,e)}}else o=u.b;return r.layerFilter_=o,r.featureLayerAssociation_={},r}return p(t,e),t.prototype.addFeatureLayerAssociation_=function(e,t){this.featureLayerAssociation_[Object(f.c)(e)]=t},t.prototype.getFeatures=function(){return this.features_},t.prototype.getHitTolerance=function(){return this.hitTolerance_},t.prototype.getLayer=function(e){return this.featureLayerAssociation_[Object(f.c)(e)]},t.prototype.setHitTolerance=function(e){this.hitTolerance_=e},t.prototype.setMap=function(t){this.getMap()&&this.style_&&this.features_.forEach(this.restorePreviousStyle_.bind(this)),e.prototype.setMap.call(this,t),t?(this.features_.addEventListener(o.a.ADD,this.boundAddFeature_),this.features_.addEventListener(o.a.REMOVE,this.boundRemoveFeature_),this.style_&&this.features_.forEach(this.applySelectedStyle_.bind(this))):(this.features_.removeEventListener(o.a.ADD,this.boundAddFeature_),this.features_.removeEventListener(o.a.REMOVE,this.boundRemoveFeature_))},t.prototype.addFeature_=function(e){var t=e.element;if(this.style_&&this.applySelectedStyle_(t),!this.getLayer(t)){var r=this.getMap().getAllLayers().find((function(e){if(e instanceof c.a&&e.getSource()&&e.getSource().hasFeature(t))return e}));r&&this.addFeatureLayerAssociation_(t,r)}},t.prototype.removeFeature_=function(e){var t=e.element;this.style_&&this.restorePreviousStyle_(t)},t.prototype.getStyle=function(){return this.style_},t.prototype.applySelectedStyle_=function(e){var t=Object(f.c)(e);t in v||(v[t]=e.getStyle()),e.setStyle(this.style_)},t.prototype.restorePreviousStyle_=function(e){for(var r=this.getMap().getInteractions().getArray(),i=r.length-1;i>=0;--i){var n=r[i];if(n!==this&&n instanceof t&&n.getStyle()&&-1!==n.getFeatures().getArray().lastIndexOf(e))return void e.setStyle(n.getStyle())}var o=Object(f.c)(e);e.setStyle(v[o]),delete v[o]},t.prototype.removeFeatureLayerAssociation_=function(e){delete this.featureLayerAssociation_[Object(f.c)(e)]},t.prototype.handleEvent=function(e){if(!this.condition_(e))return!0;var t=this.addCondition_(e),r=this.removeCondition_(e),i=this.toggleCondition_(e),n=!t&&!r&&!i,o=e.map,a=this.getFeatures(),s=[],c=[];if(n){Object(l.b)(this.featureLayerAssociation_),o.forEachFeatureAtPixel(e.pixel,function(e,t){if(this.filter_(e,t))return this.addFeatureLayerAssociation_(e,t),c.push(e),!this.multi_}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(var u=a.getLength()-1;u>=0;--u){var h=a.item(u),f=c.indexOf(h);f>-1?c.splice(f,1):(a.remove(h),s.push(h))}0!==c.length&&a.extend(c)}else{o.forEachFeatureAtPixel(e.pixel,function(e,n){if(this.filter_(e,n))return!t&&!i||Object(d.d)(a.getArray(),e)?(r||i)&&Object(d.d)(a.getArray(),e)&&(s.push(e),this.removeFeatureLayerAssociation_(e)):(this.addFeatureLayerAssociation_(e,n),c.push(e)),!this.multi_}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(var g=s.length-1;g>=0;--g)a.remove(s[g]);a.extend(c)}return(c.length>0||s.length>0)&&this.dispatchEvent(new y(_,c,s,e)),!0},t}(s.a);t.a=m},f5c2:function(e,t,r){"use strict";var i,n=r("39a6"),o=r("ab98"),a=r("6c55"),s=r("5c82"),c=r("a836"),u=r("04db"),l=r("0780"),h=r("774d"),d=r("298c"),f=r("ac8a"),g=r("21b2"),p=r("4726"),_=(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),y=function(e){function t(t,r){var i=e.call(this)||this;return i.flatMidpoint_=null,i.flatMidpointRevision_=-1,i.maxDelta_=-1,i.maxDeltaRevision_=-1,void 0===r||Array.isArray(t[0])?i.setCoordinates(t,r):i.setFlatCoordinates(r,t),i}return _(t,e),t.prototype.appendCoordinate=function(e){this.flatCoordinates?Object(l.c)(this.flatCoordinates,e):this.flatCoordinates=e.slice(),this.changed()},t.prototype.clone=function(){var e=new t(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e},t.prototype.closestPointXY=function(e,t,r,i){return i<Object(s.f)(this.getExtent(),e,t)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Object(a.e)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Object(a.d)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,e,t,r,i))},t.prototype.forEachSegment=function(e){return Object(h.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)},t.prototype.getCoordinateAtM=function(e,t){if(this.layout!=n.a.XYM&&this.layout!=n.a.XYZM)return null;var r=void 0!==t&&t;return Object(f.b)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,r)},t.prototype.getCoordinates=function(){return Object(d.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},t.prototype.getCoordinateAt=function(e,t){return Object(f.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,this.stride)},t.prototype.getLength=function(){return Object(p.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},t.prototype.getFlatMidpoint=function(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_},t.prototype.getSimplifiedGeometryInternal=function(e){var r=[];return r.length=Object(u.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,r,0),new t(r,n.a.XY)},t.prototype.getType=function(){return"LineString"},t.prototype.intersectsExtent=function(e){return Object(g.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)},t.prototype.setCoordinates=function(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Object(c.b)(this.flatCoordinates,0,e,this.stride),this.changed()},t}(o.a);t.a=y}}]);
//# sourceMappingURL=chunk-6d792748.0b7735aa.js.map