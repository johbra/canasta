// Compiled by ClojureScript 1.10.844 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__29527_SHARP_){
var k = f.call(null,p1__29527_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29528){
var vec__29529 = p__29528;
var k = cljs.core.nth.call(null,vec__29529,(0),null);
var v = cljs.core.nth.call(null,vec__29529,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29533 = arguments.length;
var i__4772__auto___29534 = (0);
while(true){
if((i__4772__auto___29534 < len__4771__auto___29533)){
args__4777__auto__.push((arguments[i__4772__auto___29534]));

var G__29535 = (i__4772__auto___29534 + (1));
i__4772__auto___29534 = G__29535;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq29532){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29532));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__29538){
var map__29539 = p__29538;
var map__29539__$1 = cljs.core.__destructure_map.call(null,map__29539);
var message = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__29537_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29537_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__29536_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__29536_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__29541){
var map__29542 = p__29541;
var map__29542__$1 = cljs.core.__destructure_map.call(null,map__29542);
var message_data = map__29542__$1;
var message = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__29543 = file_excerpt;
var map__29543__$1 = cljs.core.__destructure_map.call(null,map__29543);
var start_line = cljs.core.get.call(null,map__29543__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__29543__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__29543__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__29544 = cljs.core.split_with.call(null,(function (p1__29540_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__29540_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__29544,(0),null);
var end = cljs.core.nth.call(null,vec__29544,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__29547){
var map__29548 = p__29547;
var map__29548__$1 = cljs.core.__destructure_map.call(null,map__29548);
var file = cljs.core.get.call(null,map__29548__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29548__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29548__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29549 = "";
var G__29549__$1 = (cljs.core.truth_(file)?[G__29549,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29549);
var G__29549__$2 = (cljs.core.truth_(line)?[G__29549__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29549__$1);
if(cljs.core.truth_((function (){var and__4149__auto__ = line;
if(cljs.core.truth_(and__4149__auto__)){
return column;
} else {
return and__4149__auto__;
}
})())){
return [G__29549__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29549__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_29607 = (new goog.debug.Console());
var G__29556_29608 = c_29607.getFormatter();
goog.object.set(G__29556_29608,"showAbsoluteTime",false);

goog.object.set(G__29556_29608,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_29607);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__29557 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__29557,"data",(function (){var or__4160__auto__ = data;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__29557;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5455__auto__ = e.event_;
if(cljs.core.truth_(temp__5455__auto__)){
var e__$1 = temp__5455__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4149__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4149__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4149__auto__;
}
});

var last_reload_timestamp_29609 = cljs.core.atom.call(null,(0));
var promise_chain_29610 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_29609) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ts = temp__5455__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_29609,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_29610.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__29558 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__29559 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__29559);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__29560 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__29561 = null;
var count__29562 = (0);
var i__29563 = (0);
while(true){
if((i__29563 < count__29562)){
var w = cljs.core._nth.call(null,chunk__29561,i__29563);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__29611 = seq__29560;
var G__29612 = chunk__29561;
var G__29613 = count__29562;
var G__29614 = (i__29563 + (1));
seq__29560 = G__29611;
chunk__29561 = G__29612;
count__29562 = G__29613;
i__29563 = G__29614;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29560);
if(temp__5457__auto__){
var seq__29560__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29560__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29560__$1);
var G__29615 = cljs.core.chunk_rest.call(null,seq__29560__$1);
var G__29616 = c__4591__auto__;
var G__29617 = cljs.core.count.call(null,c__4591__auto__);
var G__29618 = (0);
seq__29560 = G__29615;
chunk__29561 = G__29616;
count__29562 = G__29617;
i__29563 = G__29618;
continue;
} else {
var w = cljs.core.first.call(null,seq__29560__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__29619 = cljs.core.next.call(null,seq__29560__$1);
var G__29620 = null;
var G__29621 = (0);
var G__29622 = (0);
seq__29560 = G__29619;
chunk__29561 = G__29620;
count__29562 = G__29621;
i__29563 = G__29622;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__29558);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_29610.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__29564 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__29565 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__29565);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__29564);
}}));
} else {
return promise_chain_29610.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4160__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4160__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29623 = arguments.length;
var i__4772__auto___29624 = (0);
while(true){
if((i__4772__auto___29624 < len__4771__auto___29623)){
args__4777__auto__.push((arguments[i__4772__auto___29624]));

var G__29625 = (i__4772__auto___29624 + (1));
i__4772__auto___29624 = G__29625;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__29568){
var vec__29569 = p__29568;
var n = cljs.core.nth.call(null,vec__29569,(0),null);
var mdata = cljs.core.nth.call(null,vec__29569,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__29572 = cljs.core.seq.call(null,hooks);
var chunk__29573 = null;
var count__29574 = (0);
var i__29575 = (0);
while(true){
if((i__29575 < count__29574)){
var vec__29584 = cljs.core._nth.call(null,chunk__29573,i__29575);
var n = cljs.core.nth.call(null,vec__29584,(0),null);
var f = cljs.core.nth.call(null,vec__29584,(1),null);
var temp__5455__auto___29626 = cljs.core.reduce.call(null,((function (seq__29572,chunk__29573,count__29574,i__29575,vec__29584,n,f,hooks){
return (function (p1__29550_SHARP_,p2__29551_SHARP_){
if(cljs.core.truth_(p1__29550_SHARP_)){
return goog.object.get(p1__29550_SHARP_,p2__29551_SHARP_);
} else {
return null;
}
});})(seq__29572,chunk__29573,count__29574,i__29575,vec__29584,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___29626)){
var hook_29627 = temp__5455__auto___29626;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_29627,args);
}catch (e29587){if((e29587 instanceof Error)){
var e_29628 = e29587;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_29628);
} else {
throw e29587;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__29629 = seq__29572;
var G__29630 = chunk__29573;
var G__29631 = count__29574;
var G__29632 = (i__29575 + (1));
seq__29572 = G__29629;
chunk__29573 = G__29630;
count__29574 = G__29631;
i__29575 = G__29632;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29572);
if(temp__5457__auto__){
var seq__29572__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29572__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29572__$1);
var G__29633 = cljs.core.chunk_rest.call(null,seq__29572__$1);
var G__29634 = c__4591__auto__;
var G__29635 = cljs.core.count.call(null,c__4591__auto__);
var G__29636 = (0);
seq__29572 = G__29633;
chunk__29573 = G__29634;
count__29574 = G__29635;
i__29575 = G__29636;
continue;
} else {
var vec__29588 = cljs.core.first.call(null,seq__29572__$1);
var n = cljs.core.nth.call(null,vec__29588,(0),null);
var f = cljs.core.nth.call(null,vec__29588,(1),null);
var temp__5455__auto___29637 = cljs.core.reduce.call(null,((function (seq__29572,chunk__29573,count__29574,i__29575,vec__29588,n,f,seq__29572__$1,temp__5457__auto__,hooks){
return (function (p1__29550_SHARP_,p2__29551_SHARP_){
if(cljs.core.truth_(p1__29550_SHARP_)){
return goog.object.get(p1__29550_SHARP_,p2__29551_SHARP_);
} else {
return null;
}
});})(seq__29572,chunk__29573,count__29574,i__29575,vec__29588,n,f,seq__29572__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___29637)){
var hook_29638 = temp__5455__auto___29637;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_29638,args);
}catch (e29591){if((e29591 instanceof Error)){
var e_29639 = e29591;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_29639);
} else {
throw e29591;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__29640 = cljs.core.next.call(null,seq__29572__$1);
var G__29641 = null;
var G__29642 = (0);
var G__29643 = (0);
seq__29572 = G__29640;
chunk__29573 = G__29641;
count__29574 = G__29642;
i__29575 = G__29643;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq29566){
var G__29567 = cljs.core.first.call(null,seq29566);
var seq29566__$1 = cljs.core.next.call(null,seq29566);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29567,seq29566__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29592){
var vec__29593 = p__29592;
var k = cljs.core.nth.call(null,vec__29593,(0),null);
var v = cljs.core.nth.call(null,vec__29593,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__29552_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__29552_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__29552_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__29553_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__29553_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__29554_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__29554_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__29596_29644 = cljs.core.seq.call(null,to_reload);
var chunk__29597_29645 = null;
var count__29598_29646 = (0);
var i__29599_29647 = (0);
while(true){
if((i__29599_29647 < count__29598_29646)){
var ns_29648 = cljs.core._nth.call(null,chunk__29597_29645,i__29599_29647);
goog.require(cljs.core.name.call(null,ns_29648),true);


var G__29649 = seq__29596_29644;
var G__29650 = chunk__29597_29645;
var G__29651 = count__29598_29646;
var G__29652 = (i__29599_29647 + (1));
seq__29596_29644 = G__29649;
chunk__29597_29645 = G__29650;
count__29598_29646 = G__29651;
i__29599_29647 = G__29652;
continue;
} else {
var temp__5457__auto___29653 = cljs.core.seq.call(null,seq__29596_29644);
if(temp__5457__auto___29653){
var seq__29596_29654__$1 = temp__5457__auto___29653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29596_29654__$1)){
var c__4591__auto___29655 = cljs.core.chunk_first.call(null,seq__29596_29654__$1);
var G__29656 = cljs.core.chunk_rest.call(null,seq__29596_29654__$1);
var G__29657 = c__4591__auto___29655;
var G__29658 = cljs.core.count.call(null,c__4591__auto___29655);
var G__29659 = (0);
seq__29596_29644 = G__29656;
chunk__29597_29645 = G__29657;
count__29598_29646 = G__29658;
i__29599_29647 = G__29659;
continue;
} else {
var ns_29660 = cljs.core.first.call(null,seq__29596_29654__$1);
goog.require(cljs.core.name.call(null,ns_29660),true);


var G__29661 = cljs.core.next.call(null,seq__29596_29654__$1);
var G__29662 = null;
var G__29663 = (0);
var G__29664 = (0);
seq__29596_29644 = G__29661;
chunk__29597_29645 = G__29662;
count__29598_29646 = G__29663;
i__29599_29647 = G__29664;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_29665 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var not_loaded = temp__5457__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_29665);
} else {
setTimeout(after_reload_fn_29665,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__29600 = cljs.core.seq.call(null,warnings);
var chunk__29601 = null;
var count__29602 = (0);
var i__29603 = (0);
while(true){
if((i__29603 < count__29602)){
var warning = cljs.core._nth.call(null,chunk__29601,i__29603);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__29666 = seq__29600;
var G__29667 = chunk__29601;
var G__29668 = count__29602;
var G__29669 = (i__29603 + (1));
seq__29600 = G__29666;
chunk__29601 = G__29667;
count__29602 = G__29668;
i__29603 = G__29669;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29600);
if(temp__5457__auto__){
var seq__29600__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29600__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__29600__$1);
var G__29670 = cljs.core.chunk_rest.call(null,seq__29600__$1);
var G__29671 = c__4591__auto__;
var G__29672 = cljs.core.count.call(null,c__4591__auto__);
var G__29673 = (0);
seq__29600 = G__29670;
chunk__29601 = G__29671;
count__29602 = G__29672;
i__29603 = G__29673;
continue;
} else {
var warning = cljs.core.first.call(null,seq__29600__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__29674 = cljs.core.next.call(null,seq__29600__$1);
var G__29675 = null;
var G__29676 = (0);
var G__29677 = (0);
seq__29600 = G__29674;
chunk__29601 = G__29675;
count__29602 = G__29676;
i__29603 = G__29677;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__29604){
var map__29605 = p__29604;
var map__29605__$1 = cljs.core.__destructure_map.call(null,map__29605);
var exception_data = map__29605__$1;
var file = cljs.core.get.call(null,map__29605__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__29605__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29605__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__29555_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__29555_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__29606 = "Compile Exception - ";
var G__29606__$1 = (cljs.core.truth_((function (){var or__4160__auto__ = type;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return message;
}
})())?[G__29606,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__29606);
if(cljs.core.truth_(file)){
return [G__29606__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__29606__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
