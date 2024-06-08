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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16295){
var map__16296 = p__16295;
var map__16296__$1 = cljs.core.__destructure_map.call(null,map__16296);
var operation = cljs.core.get.call(null,map__16296__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__16296__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__16296__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__16296__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__16297_16317 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__16298_16318 = null;
var count__16299_16319 = (0);
var i__16300_16320 = (0);
while(true){
if((i__16300_16320 < count__16299_16319)){
var vec__16309_16321 = cljs.core._nth.call(null,chunk__16298_16318,i__16300_16320);
var k_16322 = cljs.core.nth.call(null,vec__16309_16321,(0),null);
var cb_16323 = cljs.core.nth.call(null,vec__16309_16321,(1),null);
try{cb_16323.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e16312){var e_16324 = e16312;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_16322,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_16324);
}

var G__16325 = seq__16297_16317;
var G__16326 = chunk__16298_16318;
var G__16327 = count__16299_16319;
var G__16328 = (i__16300_16320 + (1));
seq__16297_16317 = G__16325;
chunk__16298_16318 = G__16326;
count__16299_16319 = G__16327;
i__16300_16320 = G__16328;
continue;
} else {
var temp__5457__auto___16329 = cljs.core.seq.call(null,seq__16297_16317);
if(temp__5457__auto___16329){
var seq__16297_16330__$1 = temp__5457__auto___16329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16297_16330__$1)){
var c__4591__auto___16331 = cljs.core.chunk_first.call(null,seq__16297_16330__$1);
var G__16332 = cljs.core.chunk_rest.call(null,seq__16297_16330__$1);
var G__16333 = c__4591__auto___16331;
var G__16334 = cljs.core.count.call(null,c__4591__auto___16331);
var G__16335 = (0);
seq__16297_16317 = G__16332;
chunk__16298_16318 = G__16333;
count__16299_16319 = G__16334;
i__16300_16320 = G__16335;
continue;
} else {
var vec__16313_16336 = cljs.core.first.call(null,seq__16297_16330__$1);
var k_16337 = cljs.core.nth.call(null,vec__16313_16336,(0),null);
var cb_16338 = cljs.core.nth.call(null,vec__16313_16336,(1),null);
try{cb_16338.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e16316){var e_16339 = e16316;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_16337,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_16339);
}

var G__16340 = cljs.core.next.call(null,seq__16297_16330__$1);
var G__16341 = null;
var G__16342 = (0);
var G__16343 = (0);
seq__16297_16317 = G__16340;
chunk__16298_16318 = G__16341;
count__16299_16319 = G__16342;
i__16300_16320 = G__16343;
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
