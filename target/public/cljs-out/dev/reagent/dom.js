// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22708 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22709 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22709);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__22710 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22711 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22711);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22710);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22708);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22713 = arguments.length;
switch (G__22713) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__22714 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__22714,(0),null);
var callback = cljs.core.nth.call(null,vec__22714,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__22718_22734 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__22719_22735 = null;
var count__22720_22736 = (0);
var i__22721_22737 = (0);
while(true){
if((i__22721_22737 < count__22720_22736)){
var vec__22728_22738 = cljs.core._nth.call(null,chunk__22719_22735,i__22721_22737);
var container_22739 = cljs.core.nth.call(null,vec__22728_22738,(0),null);
var comp_22740 = cljs.core.nth.call(null,vec__22728_22738,(1),null);
reagent.dom.re_render_component.call(null,comp_22740,container_22739);


var G__22741 = seq__22718_22734;
var G__22742 = chunk__22719_22735;
var G__22743 = count__22720_22736;
var G__22744 = (i__22721_22737 + (1));
seq__22718_22734 = G__22741;
chunk__22719_22735 = G__22742;
count__22720_22736 = G__22743;
i__22721_22737 = G__22744;
continue;
} else {
var temp__5457__auto___22745 = cljs.core.seq.call(null,seq__22718_22734);
if(temp__5457__auto___22745){
var seq__22718_22746__$1 = temp__5457__auto___22745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22718_22746__$1)){
var c__4591__auto___22747 = cljs.core.chunk_first.call(null,seq__22718_22746__$1);
var G__22748 = cljs.core.chunk_rest.call(null,seq__22718_22746__$1);
var G__22749 = c__4591__auto___22747;
var G__22750 = cljs.core.count.call(null,c__4591__auto___22747);
var G__22751 = (0);
seq__22718_22734 = G__22748;
chunk__22719_22735 = G__22749;
count__22720_22736 = G__22750;
i__22721_22737 = G__22751;
continue;
} else {
var vec__22731_22752 = cljs.core.first.call(null,seq__22718_22746__$1);
var container_22753 = cljs.core.nth.call(null,vec__22731_22752,(0),null);
var comp_22754 = cljs.core.nth.call(null,vec__22731_22752,(1),null);
reagent.dom.re_render_component.call(null,comp_22754,container_22753);


var G__22755 = cljs.core.next.call(null,seq__22718_22746__$1);
var G__22756 = null;
var G__22757 = (0);
var G__22758 = (0);
seq__22718_22734 = G__22755;
chunk__22719_22735 = G__22756;
count__22720_22736 = G__22757;
i__22721_22737 = G__22758;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
