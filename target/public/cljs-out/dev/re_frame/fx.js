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
var _STAR_current_trace_STAR__orig_val__25841 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25842 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25842);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5457__auto___25875 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5457__auto___25875)){
var new_db_25876 = temp__5457__auto___25875;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_25876);
} else {
}

var seq__25843 = cljs.core.seq.call(null,effects_without_db);
var chunk__25844 = null;
var count__25845 = (0);
var i__25846 = (0);
while(true){
if((i__25846 < count__25845)){
var vec__25853 = cljs.core._nth.call(null,chunk__25844,i__25846);
var effect_key = cljs.core.nth.call(null,vec__25853,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25853,(1),null);
var temp__5455__auto___25877 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25877)){
var effect_fn_25878 = temp__5455__auto___25877;
effect_fn_25878.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25879 = seq__25843;
var G__25880 = chunk__25844;
var G__25881 = count__25845;
var G__25882 = (i__25846 + (1));
seq__25843 = G__25879;
chunk__25844 = G__25880;
count__25845 = G__25881;
i__25846 = G__25882;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25843);
if(temp__5457__auto__){
var seq__25843__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25843__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__25843__$1);
var G__25883 = cljs.core.chunk_rest.call(null,seq__25843__$1);
var G__25884 = c__4591__auto__;
var G__25885 = cljs.core.count.call(null,c__4591__auto__);
var G__25886 = (0);
seq__25843 = G__25883;
chunk__25844 = G__25884;
count__25845 = G__25885;
i__25846 = G__25886;
continue;
} else {
var vec__25856 = cljs.core.first.call(null,seq__25843__$1);
var effect_key = cljs.core.nth.call(null,vec__25856,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25856,(1),null);
var temp__5455__auto___25887 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25887)){
var effect_fn_25888 = temp__5455__auto___25887;
effect_fn_25888.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25889 = cljs.core.next.call(null,seq__25843__$1);
var G__25890 = null;
var G__25891 = (0);
var G__25892 = (0);
seq__25843 = G__25889;
chunk__25844 = G__25890;
count__25845 = G__25891;
i__25846 = G__25892;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__15879__auto___25893 = re_frame.interop.now.call(null);
var duration__15880__auto___25894 = (end__15879__auto___25893 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15880__auto___25894,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__15879__auto___25893);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25841);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5457__auto___25895 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5457__auto___25895)){
var new_db_25896 = temp__5457__auto___25895;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_25896);
} else {
}

var seq__25859 = cljs.core.seq.call(null,effects_without_db);
var chunk__25860 = null;
var count__25861 = (0);
var i__25862 = (0);
while(true){
if((i__25862 < count__25861)){
var vec__25869 = cljs.core._nth.call(null,chunk__25860,i__25862);
var effect_key = cljs.core.nth.call(null,vec__25869,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25869,(1),null);
var temp__5455__auto___25897 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25897)){
var effect_fn_25898 = temp__5455__auto___25897;
effect_fn_25898.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25899 = seq__25859;
var G__25900 = chunk__25860;
var G__25901 = count__25861;
var G__25902 = (i__25862 + (1));
seq__25859 = G__25899;
chunk__25860 = G__25900;
count__25861 = G__25901;
i__25862 = G__25902;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25859);
if(temp__5457__auto__){
var seq__25859__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25859__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__25859__$1);
var G__25903 = cljs.core.chunk_rest.call(null,seq__25859__$1);
var G__25904 = c__4591__auto__;
var G__25905 = cljs.core.count.call(null,c__4591__auto__);
var G__25906 = (0);
seq__25859 = G__25903;
chunk__25860 = G__25904;
count__25861 = G__25905;
i__25862 = G__25906;
continue;
} else {
var vec__25872 = cljs.core.first.call(null,seq__25859__$1);
var effect_key = cljs.core.nth.call(null,vec__25872,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25872,(1),null);
var temp__5455__auto___25907 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25907)){
var effect_fn_25908 = temp__5455__auto___25907;
effect_fn_25908.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25909 = cljs.core.next.call(null,seq__25859__$1);
var G__25910 = null;
var G__25911 = (0);
var G__25912 = (0);
seq__25859 = G__25909;
chunk__25860 = G__25910;
count__25861 = G__25911;
i__25862 = G__25912;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__25913){
var map__25914 = p__25913;
var map__25914__$1 = cljs.core.__destructure_map.call(null,map__25914);
var effect = map__25914__$1;
var ms = cljs.core.get.call(null,map__25914__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25914__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__25915 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25916 = null;
var count__25917 = (0);
var i__25918 = (0);
while(true){
if((i__25918 < count__25917)){
var effect = cljs.core._nth.call(null,chunk__25916,i__25918);
re_frame.fx.dispatch_later.call(null,effect);


var G__25919 = seq__25915;
var G__25920 = chunk__25916;
var G__25921 = count__25917;
var G__25922 = (i__25918 + (1));
seq__25915 = G__25919;
chunk__25916 = G__25920;
count__25917 = G__25921;
i__25918 = G__25922;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25915);
if(temp__5457__auto__){
var seq__25915__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25915__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__25915__$1);
var G__25923 = cljs.core.chunk_rest.call(null,seq__25915__$1);
var G__25924 = c__4591__auto__;
var G__25925 = cljs.core.count.call(null,c__4591__auto__);
var G__25926 = (0);
seq__25915 = G__25923;
chunk__25916 = G__25924;
count__25917 = G__25925;
i__25918 = G__25926;
continue;
} else {
var effect = cljs.core.first.call(null,seq__25915__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__25927 = cljs.core.next.call(null,seq__25915__$1);
var G__25928 = null;
var G__25929 = (0);
var G__25930 = (0);
seq__25915 = G__25927;
chunk__25916 = G__25928;
count__25917 = G__25929;
i__25918 = G__25930;
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
var seq__25931 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__25932 = null;
var count__25933 = (0);
var i__25934 = (0);
while(true){
if((i__25934 < count__25933)){
var vec__25941 = cljs.core._nth.call(null,chunk__25932,i__25934);
var effect_key = cljs.core.nth.call(null,vec__25941,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25941,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5455__auto___25947 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25947)){
var effect_fn_25948 = temp__5455__auto___25947;
effect_fn_25948.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__25949 = seq__25931;
var G__25950 = chunk__25932;
var G__25951 = count__25933;
var G__25952 = (i__25934 + (1));
seq__25931 = G__25949;
chunk__25932 = G__25950;
count__25933 = G__25951;
i__25934 = G__25952;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25931);
if(temp__5457__auto__){
var seq__25931__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25931__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__25931__$1);
var G__25953 = cljs.core.chunk_rest.call(null,seq__25931__$1);
var G__25954 = c__4591__auto__;
var G__25955 = cljs.core.count.call(null,c__4591__auto__);
var G__25956 = (0);
seq__25931 = G__25953;
chunk__25932 = G__25954;
count__25933 = G__25955;
i__25934 = G__25956;
continue;
} else {
var vec__25944 = cljs.core.first.call(null,seq__25931__$1);
var effect_key = cljs.core.nth.call(null,vec__25944,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25944,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5455__auto___25957 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25957)){
var effect_fn_25958 = temp__5455__auto___25957;
effect_fn_25958.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__25959 = cljs.core.next.call(null,seq__25931__$1);
var G__25960 = null;
var G__25961 = (0);
var G__25962 = (0);
seq__25931 = G__25959;
chunk__25932 = G__25960;
count__25933 = G__25961;
i__25934 = G__25962;
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
var seq__25963 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25964 = null;
var count__25965 = (0);
var i__25966 = (0);
while(true){
if((i__25966 < count__25965)){
var event = cljs.core._nth.call(null,chunk__25964,i__25966);
re_frame.router.dispatch.call(null,event);


var G__25967 = seq__25963;
var G__25968 = chunk__25964;
var G__25969 = count__25965;
var G__25970 = (i__25966 + (1));
seq__25963 = G__25967;
chunk__25964 = G__25968;
count__25965 = G__25969;
i__25966 = G__25970;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25963);
if(temp__5457__auto__){
var seq__25963__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25963__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__25963__$1);
var G__25971 = cljs.core.chunk_rest.call(null,seq__25963__$1);
var G__25972 = c__4591__auto__;
var G__25973 = cljs.core.count.call(null,c__4591__auto__);
var G__25974 = (0);
seq__25963 = G__25971;
chunk__25964 = G__25972;
count__25965 = G__25973;
i__25966 = G__25974;
continue;
} else {
var event = cljs.core.first.call(null,seq__25963__$1);
re_frame.router.dispatch.call(null,event);


var G__25975 = cljs.core.next.call(null,seq__25963__$1);
var G__25976 = null;
var G__25977 = (0);
var G__25978 = (0);
seq__25963 = G__25975;
chunk__25964 = G__25976;
count__25965 = G__25977;
i__25966 = G__25978;
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
var seq__25979 = cljs.core.seq.call(null,value);
var chunk__25980 = null;
var count__25981 = (0);
var i__25982 = (0);
while(true){
if((i__25982 < count__25981)){
var event = cljs.core._nth.call(null,chunk__25980,i__25982);
clear_event.call(null,event);


var G__25983 = seq__25979;
var G__25984 = chunk__25980;
var G__25985 = count__25981;
var G__25986 = (i__25982 + (1));
seq__25979 = G__25983;
chunk__25980 = G__25984;
count__25981 = G__25985;
i__25982 = G__25986;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25979);
if(temp__5457__auto__){
var seq__25979__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25979__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__25979__$1);
var G__25987 = cljs.core.chunk_rest.call(null,seq__25979__$1);
var G__25988 = c__4591__auto__;
var G__25989 = cljs.core.count.call(null,c__4591__auto__);
var G__25990 = (0);
seq__25979 = G__25987;
chunk__25980 = G__25988;
count__25981 = G__25989;
i__25982 = G__25990;
continue;
} else {
var event = cljs.core.first.call(null,seq__25979__$1);
clear_event.call(null,event);


var G__25991 = cljs.core.next.call(null,seq__25979__$1);
var G__25992 = null;
var G__25993 = (0);
var G__25994 = (0);
seq__25979 = G__25991;
chunk__25980 = G__25992;
count__25981 = G__25993;
i__25982 = G__25994;
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
