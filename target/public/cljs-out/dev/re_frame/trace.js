// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22267){
var map__22268 = p__22267;
var map__22268__$1 = cljs.core.__destructure_map.call(null,map__22268);
var operation = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__22268__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4160__auto__ = child_of;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__22269_22289 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__22270_22290 = null;
var count__22271_22291 = (0);
var i__22272_22292 = (0);
while(true){
if((i__22272_22292 < count__22271_22291)){
var vec__22281_22293 = cljs.core._nth.call(null,chunk__22270_22290,i__22272_22292);
var k_22294 = cljs.core.nth.call(null,vec__22281_22293,(0),null);
var cb_22295 = cljs.core.nth.call(null,vec__22281_22293,(1),null);
try{cb_22295.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22284){var e_22296 = e22284;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22294,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22296);
}

var G__22297 = seq__22269_22289;
var G__22298 = chunk__22270_22290;
var G__22299 = count__22271_22291;
var G__22300 = (i__22272_22292 + (1));
seq__22269_22289 = G__22297;
chunk__22270_22290 = G__22298;
count__22271_22291 = G__22299;
i__22272_22292 = G__22300;
continue;
} else {
var temp__5457__auto___22301 = cljs.core.seq.call(null,seq__22269_22289);
if(temp__5457__auto___22301){
var seq__22269_22302__$1 = temp__5457__auto___22301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22269_22302__$1)){
var c__4591__auto___22303 = cljs.core.chunk_first.call(null,seq__22269_22302__$1);
var G__22304 = cljs.core.chunk_rest.call(null,seq__22269_22302__$1);
var G__22305 = c__4591__auto___22303;
var G__22306 = cljs.core.count.call(null,c__4591__auto___22303);
var G__22307 = (0);
seq__22269_22289 = G__22304;
chunk__22270_22290 = G__22305;
count__22271_22291 = G__22306;
i__22272_22292 = G__22307;
continue;
} else {
var vec__22285_22308 = cljs.core.first.call(null,seq__22269_22302__$1);
var k_22309 = cljs.core.nth.call(null,vec__22285_22308,(0),null);
var cb_22310 = cljs.core.nth.call(null,vec__22285_22308,(1),null);
try{cb_22310.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22288){var e_22311 = e22288;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22309,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22311);
}

var G__22312 = cljs.core.next.call(null,seq__22269_22302__$1);
var G__22313 = null;
var G__22314 = (0);
var G__22315 = (0);
seq__22269_22289 = G__22312;
chunk__22270_22290 = G__22313;
count__22271_22291 = G__22314;
i__22272_22292 = G__22315;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
