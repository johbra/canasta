// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__16475 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16476 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16476);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5457__auto___16509 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5457__auto___16509)){
var new_db_16510 = temp__5457__auto___16509;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16510);
} else {
}

var seq__16477 = cljs.core.seq.call(null,effects_without_db);
var chunk__16478 = null;
var count__16479 = (0);
var i__16480 = (0);
while(true){
if((i__16480 < count__16479)){
var vec__16487 = cljs.core._nth.call(null,chunk__16478,i__16480);
var effect_key = cljs.core.nth.call(null,vec__16487,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16487,(1),null);
var temp__5455__auto___16511 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16511)){
var effect_fn_16512 = temp__5455__auto___16511;
effect_fn_16512.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16513 = seq__16477;
var G__16514 = chunk__16478;
var G__16515 = count__16479;
var G__16516 = (i__16480 + (1));
seq__16477 = G__16513;
chunk__16478 = G__16514;
count__16479 = G__16515;
i__16480 = G__16516;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16477);
if(temp__5457__auto__){
var seq__16477__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16477__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__16477__$1);
var G__16517 = cljs.core.chunk_rest.call(null,seq__16477__$1);
var G__16518 = c__4591__auto__;
var G__16519 = cljs.core.count.call(null,c__4591__auto__);
var G__16520 = (0);
seq__16477 = G__16517;
chunk__16478 = G__16518;
count__16479 = G__16519;
i__16480 = G__16520;
continue;
} else {
var vec__16490 = cljs.core.first.call(null,seq__16477__$1);
var effect_key = cljs.core.nth.call(null,vec__16490,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16490,(1),null);
var temp__5455__auto___16521 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16521)){
var effect_fn_16522 = temp__5455__auto___16521;
effect_fn_16522.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16523 = cljs.core.next.call(null,seq__16477__$1);
var G__16524 = null;
var G__16525 = (0);
var G__16526 = (0);
seq__16477 = G__16523;
chunk__16478 = G__16524;
count__16479 = G__16525;
i__16480 = G__16526;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16273__auto___16527 = re_frame.interop.now.call(null);
var duration__16274__auto___16528 = (end__16273__auto___16527 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16274__auto___16528,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16273__auto___16527);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16475);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5457__auto___16529 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5457__auto___16529)){
var new_db_16530 = temp__5457__auto___16529;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16530);
} else {
}

var seq__16493 = cljs.core.seq.call(null,effects_without_db);
var chunk__16494 = null;
var count__16495 = (0);
var i__16496 = (0);
while(true){
if((i__16496 < count__16495)){
var vec__16503 = cljs.core._nth.call(null,chunk__16494,i__16496);
var effect_key = cljs.core.nth.call(null,vec__16503,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16503,(1),null);
var temp__5455__auto___16531 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16531)){
var effect_fn_16532 = temp__5455__auto___16531;
effect_fn_16532.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16533 = seq__16493;
var G__16534 = chunk__16494;
var G__16535 = count__16495;
var G__16536 = (i__16496 + (1));
seq__16493 = G__16533;
chunk__16494 = G__16534;
count__16495 = G__16535;
i__16496 = G__16536;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16493);
if(temp__5457__auto__){
var seq__16493__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16493__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__16493__$1);
var G__16537 = cljs.core.chunk_rest.call(null,seq__16493__$1);
var G__16538 = c__4591__auto__;
var G__16539 = cljs.core.count.call(null,c__4591__auto__);
var G__16540 = (0);
seq__16493 = G__16537;
chunk__16494 = G__16538;
count__16495 = G__16539;
i__16496 = G__16540;
continue;
} else {
var vec__16506 = cljs.core.first.call(null,seq__16493__$1);
var effect_key = cljs.core.nth.call(null,vec__16506,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16506,(1),null);
var temp__5455__auto___16541 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16541)){
var effect_fn_16542 = temp__5455__auto___16541;
effect_fn_16542.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16543 = cljs.core.next.call(null,seq__16493__$1);
var G__16544 = null;
var G__16545 = (0);
var G__16546 = (0);
seq__16493 = G__16543;
chunk__16494 = G__16544;
count__16495 = G__16545;
i__16496 = G__16546;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16547){
var map__16548 = p__16547;
var map__16548__$1 = cljs.core.__destructure_map.call(null,map__16548);
var effect = map__16548__$1;
var ms = cljs.core.get.call(null,map__16548__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16548__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__16549 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16550 = null;
var count__16551 = (0);
var i__16552 = (0);
while(true){
if((i__16552 < count__16551)){
var effect = cljs.core._nth.call(null,chunk__16550,i__16552);
re_frame.fx.dispatch_later.call(null,effect);


var G__16553 = seq__16549;
var G__16554 = chunk__16550;
var G__16555 = count__16551;
var G__16556 = (i__16552 + (1));
seq__16549 = G__16553;
chunk__16550 = G__16554;
count__16551 = G__16555;
i__16552 = G__16556;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16549);
if(temp__5457__auto__){
var seq__16549__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16549__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__16549__$1);
var G__16557 = cljs.core.chunk_rest.call(null,seq__16549__$1);
var G__16558 = c__4591__auto__;
var G__16559 = cljs.core.count.call(null,c__4591__auto__);
var G__16560 = (0);
seq__16549 = G__16557;
chunk__16550 = G__16558;
count__16551 = G__16559;
i__16552 = G__16560;
continue;
} else {
var effect = cljs.core.first.call(null,seq__16549__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__16561 = cljs.core.next.call(null,seq__16549__$1);
var G__16562 = null;
var G__16563 = (0);
var G__16564 = (0);
seq__16549 = G__16561;
chunk__16550 = G__16562;
count__16551 = G__16563;
i__16552 = G__16564;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__16565 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16566 = null;
var count__16567 = (0);
var i__16568 = (0);
while(true){
if((i__16568 < count__16567)){
var vec__16575 = cljs.core._nth.call(null,chunk__16566,i__16568);
var effect_key = cljs.core.nth.call(null,vec__16575,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16575,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5455__auto___16581 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16581)){
var effect_fn_16582 = temp__5455__auto___16581;
effect_fn_16582.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16583 = seq__16565;
var G__16584 = chunk__16566;
var G__16585 = count__16567;
var G__16586 = (i__16568 + (1));
seq__16565 = G__16583;
chunk__16566 = G__16584;
count__16567 = G__16585;
i__16568 = G__16586;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16565);
if(temp__5457__auto__){
var seq__16565__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16565__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__16565__$1);
var G__16587 = cljs.core.chunk_rest.call(null,seq__16565__$1);
var G__16588 = c__4591__auto__;
var G__16589 = cljs.core.count.call(null,c__4591__auto__);
var G__16590 = (0);
seq__16565 = G__16587;
chunk__16566 = G__16588;
count__16567 = G__16589;
i__16568 = G__16590;
continue;
} else {
var vec__16578 = cljs.core.first.call(null,seq__16565__$1);
var effect_key = cljs.core.nth.call(null,vec__16578,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16578,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5455__auto___16591 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16591)){
var effect_fn_16592 = temp__5455__auto___16591;
effect_fn_16592.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16593 = cljs.core.next.call(null,seq__16565__$1);
var G__16594 = null;
var G__16595 = (0);
var G__16596 = (0);
seq__16565 = G__16593;
chunk__16566 = G__16594;
count__16567 = G__16595;
i__16568 = G__16596;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__16597 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16598 = null;
var count__16599 = (0);
var i__16600 = (0);
while(true){
if((i__16600 < count__16599)){
var event = cljs.core._nth.call(null,chunk__16598,i__16600);
re_frame.router.dispatch.call(null,event);


var G__16601 = seq__16597;
var G__16602 = chunk__16598;
var G__16603 = count__16599;
var G__16604 = (i__16600 + (1));
seq__16597 = G__16601;
chunk__16598 = G__16602;
count__16599 = G__16603;
i__16600 = G__16604;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16597);
if(temp__5457__auto__){
var seq__16597__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16597__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__16597__$1);
var G__16605 = cljs.core.chunk_rest.call(null,seq__16597__$1);
var G__16606 = c__4591__auto__;
var G__16607 = cljs.core.count.call(null,c__4591__auto__);
var G__16608 = (0);
seq__16597 = G__16605;
chunk__16598 = G__16606;
count__16599 = G__16607;
i__16600 = G__16608;
continue;
} else {
var event = cljs.core.first.call(null,seq__16597__$1);
re_frame.router.dispatch.call(null,event);


var G__16609 = cljs.core.next.call(null,seq__16597__$1);
var G__16610 = null;
var G__16611 = (0);
var G__16612 = (0);
seq__16597 = G__16609;
chunk__16598 = G__16610;
count__16599 = G__16611;
i__16600 = G__16612;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__16613 = cljs.core.seq.call(null,value);
var chunk__16614 = null;
var count__16615 = (0);
var i__16616 = (0);
while(true){
if((i__16616 < count__16615)){
var event = cljs.core._nth.call(null,chunk__16614,i__16616);
clear_event.call(null,event);


var G__16617 = seq__16613;
var G__16618 = chunk__16614;
var G__16619 = count__16615;
var G__16620 = (i__16616 + (1));
seq__16613 = G__16617;
chunk__16614 = G__16618;
count__16615 = G__16619;
i__16616 = G__16620;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16613);
if(temp__5457__auto__){
var seq__16613__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16613__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__16613__$1);
var G__16621 = cljs.core.chunk_rest.call(null,seq__16613__$1);
var G__16622 = c__4591__auto__;
var G__16623 = cljs.core.count.call(null,c__4591__auto__);
var G__16624 = (0);
seq__16613 = G__16621;
chunk__16614 = G__16622;
count__16615 = G__16623;
i__16616 = G__16624;
continue;
} else {
var event = cljs.core.first.call(null,seq__16613__$1);
clear_event.call(null,event);


var G__16625 = cljs.core.next.call(null,seq__16613__$1);
var G__16626 = null;
var G__16627 = (0);
var G__16628 = (0);
seq__16613 = G__16625;
chunk__16614 = G__16626;
count__16615 = G__16627;
i__16616 = G__16628;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
