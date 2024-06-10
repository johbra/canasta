// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23089 = arguments.length;
switch (G__23089) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23090 = (function (f,blockable,meta23091){
this.f = f;
this.blockable = blockable;
this.meta23091 = meta23091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23092,meta23091__$1){
var self__ = this;
var _23092__$1 = this;
return (new cljs.core.async.t_cljs$core$async23090(self__.f,self__.blockable,meta23091__$1));
}));

(cljs.core.async.t_cljs$core$async23090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23092){
var self__ = this;
var _23092__$1 = this;
return self__.meta23091;
}));

(cljs.core.async.t_cljs$core$async23090.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23091","meta23091",-1438951093,null)], null);
}));

(cljs.core.async.t_cljs$core$async23090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23090");

(cljs.core.async.t_cljs$core$async23090.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async23090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23090.
 */
cljs.core.async.__GT_t_cljs$core$async23090 = (function cljs$core$async$__GT_t_cljs$core$async23090(f__$1,blockable__$1,meta23091){
return (new cljs.core.async.t_cljs$core$async23090(f__$1,blockable__$1,meta23091));
});

}

return (new cljs.core.async.t_cljs$core$async23090(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23096 = arguments.length;
switch (G__23096) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23099 = arguments.length;
switch (G__23099) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23102 = arguments.length;
switch (G__23102) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23104 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23104);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_23104);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23106 = arguments.length;
switch (G__23106) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___23108 = n;
var x_23109 = (0);
while(true){
if((x_23109 < n__4648__auto___23108)){
(a[x_23109] = x_23109);

var G__23110 = (x_23109 + (1));
x_23109 = G__23110;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23111 = (function (flag,meta23112){
this.flag = flag;
this.meta23112 = meta23112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23113,meta23112__$1){
var self__ = this;
var _23113__$1 = this;
return (new cljs.core.async.t_cljs$core$async23111(self__.flag,meta23112__$1));
}));

(cljs.core.async.t_cljs$core$async23111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23113){
var self__ = this;
var _23113__$1 = this;
return self__.meta23112;
}));

(cljs.core.async.t_cljs$core$async23111.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23111.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23112","meta23112",1194814830,null)], null);
}));

(cljs.core.async.t_cljs$core$async23111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23111");

(cljs.core.async.t_cljs$core$async23111.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async23111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23111.
 */
cljs.core.async.__GT_t_cljs$core$async23111 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23111(flag__$1,meta23112){
return (new cljs.core.async.t_cljs$core$async23111(flag__$1,meta23112));
});

}

return (new cljs.core.async.t_cljs$core$async23111(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23114 = (function (flag,cb,meta23115){
this.flag = flag;
this.cb = cb;
this.meta23115 = meta23115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23116,meta23115__$1){
var self__ = this;
var _23116__$1 = this;
return (new cljs.core.async.t_cljs$core$async23114(self__.flag,self__.cb,meta23115__$1));
}));

(cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23116){
var self__ = this;
var _23116__$1 = this;
return self__.meta23115;
}));

(cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23115","meta23115",1586996523,null)], null);
}));

(cljs.core.async.t_cljs$core$async23114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23114");

(cljs.core.async.t_cljs$core$async23114.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async23114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23114.
 */
cljs.core.async.__GT_t_cljs$core$async23114 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23114(flag__$1,cb__$1,meta23115){
return (new cljs.core.async.t_cljs$core$async23114(flag__$1,cb__$1,meta23115));
});

}

return (new cljs.core.async.t_cljs$core$async23114(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23117_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23117_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23118_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23118_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23119 = (i + (1));
i = G__23119;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___23124 = arguments.length;
var i__4772__auto___23125 = (0);
while(true){
if((i__4772__auto___23125 < len__4771__auto___23124)){
args__4777__auto__.push((arguments[i__4772__auto___23125]));

var G__23126 = (i__4772__auto___23125 + (1));
i__4772__auto___23125 = G__23126;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23122){
var map__23123 = p__23122;
var map__23123__$1 = cljs.core.__destructure_map.call(null,map__23123);
var opts = map__23123__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23120){
var G__23121 = cljs.core.first.call(null,seq23120);
var seq23120__$1 = cljs.core.next.call(null,seq23120);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23121,seq23120__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23128 = arguments.length;
switch (G__23128) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17971__auto___23175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23152){
var state_val_23153 = (state_23152[(1)]);
if((state_val_23153 === (7))){
var inst_23148 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
var statearr_23154_23176 = state_23152__$1;
(statearr_23154_23176[(2)] = inst_23148);

(statearr_23154_23176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (1))){
var state_23152__$1 = state_23152;
var statearr_23155_23177 = state_23152__$1;
(statearr_23155_23177[(2)] = null);

(statearr_23155_23177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (4))){
var inst_23131 = (state_23152[(7)]);
var inst_23131__$1 = (state_23152[(2)]);
var inst_23132 = (inst_23131__$1 == null);
var state_23152__$1 = (function (){var statearr_23156 = state_23152;
(statearr_23156[(7)] = inst_23131__$1);

return statearr_23156;
})();
if(cljs.core.truth_(inst_23132)){
var statearr_23157_23178 = state_23152__$1;
(statearr_23157_23178[(1)] = (5));

} else {
var statearr_23158_23179 = state_23152__$1;
(statearr_23158_23179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (13))){
var state_23152__$1 = state_23152;
var statearr_23159_23180 = state_23152__$1;
(statearr_23159_23180[(2)] = null);

(statearr_23159_23180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (6))){
var inst_23131 = (state_23152[(7)]);
var state_23152__$1 = state_23152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23152__$1,(11),to,inst_23131);
} else {
if((state_val_23153 === (3))){
var inst_23150 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23152__$1,inst_23150);
} else {
if((state_val_23153 === (12))){
var state_23152__$1 = state_23152;
var statearr_23160_23181 = state_23152__$1;
(statearr_23160_23181[(2)] = null);

(statearr_23160_23181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (2))){
var state_23152__$1 = state_23152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23152__$1,(4),from);
} else {
if((state_val_23153 === (11))){
var inst_23141 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
if(cljs.core.truth_(inst_23141)){
var statearr_23161_23182 = state_23152__$1;
(statearr_23161_23182[(1)] = (12));

} else {
var statearr_23162_23183 = state_23152__$1;
(statearr_23162_23183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (9))){
var state_23152__$1 = state_23152;
var statearr_23163_23184 = state_23152__$1;
(statearr_23163_23184[(2)] = null);

(statearr_23163_23184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (5))){
var state_23152__$1 = state_23152;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23164_23185 = state_23152__$1;
(statearr_23164_23185[(1)] = (8));

} else {
var statearr_23165_23186 = state_23152__$1;
(statearr_23165_23186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (14))){
var inst_23146 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
var statearr_23166_23187 = state_23152__$1;
(statearr_23166_23187[(2)] = inst_23146);

(statearr_23166_23187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (10))){
var inst_23138 = (state_23152[(2)]);
var state_23152__$1 = state_23152;
var statearr_23167_23188 = state_23152__$1;
(statearr_23167_23188[(2)] = inst_23138);

(statearr_23167_23188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23153 === (8))){
var inst_23135 = cljs.core.async.close_BANG_.call(null,to);
var state_23152__$1 = state_23152;
var statearr_23168_23189 = state_23152__$1;
(statearr_23168_23189[(2)] = inst_23135);

(statearr_23168_23189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_23169 = [null,null,null,null,null,null,null,null];
(statearr_23169[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_23169[(1)] = (1));

return statearr_23169;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_23152){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23170){var ex__17952__auto__ = e23170;
var statearr_23171_23190 = state_23152;
(statearr_23171_23190[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23152[(4)]))){
var statearr_23172_23191 = state_23152;
(statearr_23172_23191[(1)] = cljs.core.first.call(null,(state_23152[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23192 = state_23152;
state_23152 = G__23192;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_23152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_23152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23173 = f__17972__auto__.call(null);
(statearr_23173[(6)] = c__17971__auto___23175);

return statearr_23173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__23193){
var vec__23194 = p__23193;
var v = cljs.core.nth.call(null,vec__23194,(0),null);
var p = cljs.core.nth.call(null,vec__23194,(1),null);
var job = vec__23194;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17971__auto___23370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23201){
var state_val_23202 = (state_23201[(1)]);
if((state_val_23202 === (1))){
var state_23201__$1 = state_23201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23201__$1,(2),res,v);
} else {
if((state_val_23202 === (2))){
var inst_23198 = (state_23201[(2)]);
var inst_23199 = cljs.core.async.close_BANG_.call(null,res);
var state_23201__$1 = (function (){var statearr_23203 = state_23201;
(statearr_23203[(7)] = inst_23198);

return statearr_23203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23201__$1,inst_23199);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0 = (function (){
var statearr_23204 = [null,null,null,null,null,null,null,null];
(statearr_23204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__);

(statearr_23204[(1)] = (1));

return statearr_23204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1 = (function (state_23201){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23205){var ex__17952__auto__ = e23205;
var statearr_23206_23371 = state_23201;
(statearr_23206_23371[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23201[(4)]))){
var statearr_23207_23372 = state_23201;
(statearr_23207_23372[(1)] = cljs.core.first.call(null,(state_23201[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23373 = state_23201;
state_23201 = G__23373;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = function(state_23201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1.call(this,state_23201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23208 = f__17972__auto__.call(null);
(statearr_23208[(6)] = c__17971__auto___23370);

return statearr_23208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23209){
var vec__23210 = p__23209;
var v = cljs.core.nth.call(null,vec__23210,(0),null);
var p = cljs.core.nth.call(null,vec__23210,(1),null);
var job = vec__23210;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4648__auto___23374 = n;
var __23375 = (0);
while(true){
if((__23375 < n__4648__auto___23374)){
var G__23213_23376 = type;
var G__23213_23377__$1 = (((G__23213_23376 instanceof cljs.core.Keyword))?G__23213_23376.fqn:null);
switch (G__23213_23377__$1) {
case "compute":
var c__17971__auto___23379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23375,c__17971__auto___23379,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async){
return (function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = ((function (__23375,c__17971__auto___23379,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async){
return (function (state_23226){
var state_val_23227 = (state_23226[(1)]);
if((state_val_23227 === (1))){
var state_23226__$1 = state_23226;
var statearr_23228_23380 = state_23226__$1;
(statearr_23228_23380[(2)] = null);

(statearr_23228_23380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23227 === (2))){
var state_23226__$1 = state_23226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23226__$1,(4),jobs);
} else {
if((state_val_23227 === (3))){
var inst_23224 = (state_23226[(2)]);
var state_23226__$1 = state_23226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23226__$1,inst_23224);
} else {
if((state_val_23227 === (4))){
var inst_23216 = (state_23226[(2)]);
var inst_23217 = process.call(null,inst_23216);
var state_23226__$1 = state_23226;
if(cljs.core.truth_(inst_23217)){
var statearr_23229_23381 = state_23226__$1;
(statearr_23229_23381[(1)] = (5));

} else {
var statearr_23230_23382 = state_23226__$1;
(statearr_23230_23382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23227 === (5))){
var state_23226__$1 = state_23226;
var statearr_23231_23383 = state_23226__$1;
(statearr_23231_23383[(2)] = null);

(statearr_23231_23383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23227 === (6))){
var state_23226__$1 = state_23226;
var statearr_23232_23384 = state_23226__$1;
(statearr_23232_23384[(2)] = null);

(statearr_23232_23384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23227 === (7))){
var inst_23222 = (state_23226[(2)]);
var state_23226__$1 = state_23226;
var statearr_23233_23385 = state_23226__$1;
(statearr_23233_23385[(2)] = inst_23222);

(statearr_23233_23385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23375,c__17971__auto___23379,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async))
;
return ((function (__23375,switch__17948__auto__,c__17971__auto___23379,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0 = (function (){
var statearr_23234 = [null,null,null,null,null,null,null];
(statearr_23234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__);

(statearr_23234[(1)] = (1));

return statearr_23234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1 = (function (state_23226){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23235){var ex__17952__auto__ = e23235;
var statearr_23236_23386 = state_23226;
(statearr_23236_23386[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23226[(4)]))){
var statearr_23237_23387 = state_23226;
(statearr_23237_23387[(1)] = cljs.core.first.call(null,(state_23226[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23388 = state_23226;
state_23226 = G__23388;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = function(state_23226){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1.call(this,state_23226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__;
})()
;})(__23375,switch__17948__auto__,c__17971__auto___23379,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async))
})();
var state__17973__auto__ = (function (){var statearr_23238 = f__17972__auto__.call(null);
(statearr_23238[(6)] = c__17971__auto___23379);

return statearr_23238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
});})(__23375,c__17971__auto___23379,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async))
);


break;
case "async":
var c__17971__auto___23389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23375,c__17971__auto___23389,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async){
return (function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = ((function (__23375,c__17971__auto___23389,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async){
return (function (state_23251){
var state_val_23252 = (state_23251[(1)]);
if((state_val_23252 === (1))){
var state_23251__$1 = state_23251;
var statearr_23253_23390 = state_23251__$1;
(statearr_23253_23390[(2)] = null);

(statearr_23253_23390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23252 === (2))){
var state_23251__$1 = state_23251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23251__$1,(4),jobs);
} else {
if((state_val_23252 === (3))){
var inst_23249 = (state_23251[(2)]);
var state_23251__$1 = state_23251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23251__$1,inst_23249);
} else {
if((state_val_23252 === (4))){
var inst_23241 = (state_23251[(2)]);
var inst_23242 = async.call(null,inst_23241);
var state_23251__$1 = state_23251;
if(cljs.core.truth_(inst_23242)){
var statearr_23254_23391 = state_23251__$1;
(statearr_23254_23391[(1)] = (5));

} else {
var statearr_23255_23392 = state_23251__$1;
(statearr_23255_23392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23252 === (5))){
var state_23251__$1 = state_23251;
var statearr_23256_23393 = state_23251__$1;
(statearr_23256_23393[(2)] = null);

(statearr_23256_23393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23252 === (6))){
var state_23251__$1 = state_23251;
var statearr_23257_23394 = state_23251__$1;
(statearr_23257_23394[(2)] = null);

(statearr_23257_23394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23252 === (7))){
var inst_23247 = (state_23251[(2)]);
var state_23251__$1 = state_23251;
var statearr_23258_23395 = state_23251__$1;
(statearr_23258_23395[(2)] = inst_23247);

(statearr_23258_23395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23375,c__17971__auto___23389,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async))
;
return ((function (__23375,switch__17948__auto__,c__17971__auto___23389,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0 = (function (){
var statearr_23259 = [null,null,null,null,null,null,null];
(statearr_23259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__);

(statearr_23259[(1)] = (1));

return statearr_23259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1 = (function (state_23251){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23260){var ex__17952__auto__ = e23260;
var statearr_23261_23396 = state_23251;
(statearr_23261_23396[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23251[(4)]))){
var statearr_23262_23397 = state_23251;
(statearr_23262_23397[(1)] = cljs.core.first.call(null,(state_23251[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23398 = state_23251;
state_23251 = G__23398;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = function(state_23251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1.call(this,state_23251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__;
})()
;})(__23375,switch__17948__auto__,c__17971__auto___23389,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async))
})();
var state__17973__auto__ = (function (){var statearr_23263 = f__17972__auto__.call(null);
(statearr_23263[(6)] = c__17971__auto___23389);

return statearr_23263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
});})(__23375,c__17971__auto___23389,G__23213_23376,G__23213_23377__$1,n__4648__auto___23374,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23213_23377__$1)].join('')));

}

var G__23399 = (__23375 + (1));
__23375 = G__23399;
continue;
} else {
}
break;
}

var c__17971__auto___23400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23285){
var state_val_23286 = (state_23285[(1)]);
if((state_val_23286 === (1))){
var state_23285__$1 = state_23285;
var statearr_23287_23401 = state_23285__$1;
(statearr_23287_23401[(2)] = null);

(statearr_23287_23401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (2))){
var state_23285__$1 = state_23285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23285__$1,(4),from);
} else {
if((state_val_23286 === (3))){
var inst_23283 = (state_23285[(2)]);
var state_23285__$1 = state_23285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23285__$1,inst_23283);
} else {
if((state_val_23286 === (4))){
var inst_23266 = (state_23285[(7)]);
var inst_23266__$1 = (state_23285[(2)]);
var inst_23267 = (inst_23266__$1 == null);
var state_23285__$1 = (function (){var statearr_23288 = state_23285;
(statearr_23288[(7)] = inst_23266__$1);

return statearr_23288;
})();
if(cljs.core.truth_(inst_23267)){
var statearr_23289_23402 = state_23285__$1;
(statearr_23289_23402[(1)] = (5));

} else {
var statearr_23290_23403 = state_23285__$1;
(statearr_23290_23403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (5))){
var inst_23269 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23285__$1 = state_23285;
var statearr_23291_23404 = state_23285__$1;
(statearr_23291_23404[(2)] = inst_23269);

(statearr_23291_23404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (6))){
var inst_23266 = (state_23285[(7)]);
var inst_23271 = (state_23285[(8)]);
var inst_23271__$1 = cljs.core.async.chan.call(null,(1));
var inst_23272 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23273 = [inst_23266,inst_23271__$1];
var inst_23274 = (new cljs.core.PersistentVector(null,2,(5),inst_23272,inst_23273,null));
var state_23285__$1 = (function (){var statearr_23292 = state_23285;
(statearr_23292[(8)] = inst_23271__$1);

return statearr_23292;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23285__$1,(8),jobs,inst_23274);
} else {
if((state_val_23286 === (7))){
var inst_23281 = (state_23285[(2)]);
var state_23285__$1 = state_23285;
var statearr_23293_23405 = state_23285__$1;
(statearr_23293_23405[(2)] = inst_23281);

(statearr_23293_23405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (8))){
var inst_23271 = (state_23285[(8)]);
var inst_23276 = (state_23285[(2)]);
var state_23285__$1 = (function (){var statearr_23294 = state_23285;
(statearr_23294[(9)] = inst_23276);

return statearr_23294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23285__$1,(9),results,inst_23271);
} else {
if((state_val_23286 === (9))){
var inst_23278 = (state_23285[(2)]);
var state_23285__$1 = (function (){var statearr_23295 = state_23285;
(statearr_23295[(10)] = inst_23278);

return statearr_23295;
})();
var statearr_23296_23406 = state_23285__$1;
(statearr_23296_23406[(2)] = null);

(statearr_23296_23406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0 = (function (){
var statearr_23297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__);

(statearr_23297[(1)] = (1));

return statearr_23297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1 = (function (state_23285){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23298){var ex__17952__auto__ = e23298;
var statearr_23299_23407 = state_23285;
(statearr_23299_23407[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23285[(4)]))){
var statearr_23300_23408 = state_23285;
(statearr_23300_23408[(1)] = cljs.core.first.call(null,(state_23285[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23409 = state_23285;
state_23285 = G__23409;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = function(state_23285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1.call(this,state_23285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23301 = f__17972__auto__.call(null);
(statearr_23301[(6)] = c__17971__auto___23400);

return statearr_23301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


var c__17971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23339){
var state_val_23340 = (state_23339[(1)]);
if((state_val_23340 === (7))){
var inst_23335 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23341_23410 = state_23339__$1;
(statearr_23341_23410[(2)] = inst_23335);

(statearr_23341_23410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (20))){
var state_23339__$1 = state_23339;
var statearr_23342_23411 = state_23339__$1;
(statearr_23342_23411[(2)] = null);

(statearr_23342_23411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (1))){
var state_23339__$1 = state_23339;
var statearr_23343_23412 = state_23339__$1;
(statearr_23343_23412[(2)] = null);

(statearr_23343_23412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (4))){
var inst_23304 = (state_23339[(7)]);
var inst_23304__$1 = (state_23339[(2)]);
var inst_23305 = (inst_23304__$1 == null);
var state_23339__$1 = (function (){var statearr_23344 = state_23339;
(statearr_23344[(7)] = inst_23304__$1);

return statearr_23344;
})();
if(cljs.core.truth_(inst_23305)){
var statearr_23345_23413 = state_23339__$1;
(statearr_23345_23413[(1)] = (5));

} else {
var statearr_23346_23414 = state_23339__$1;
(statearr_23346_23414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (15))){
var inst_23317 = (state_23339[(8)]);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23339__$1,(18),to,inst_23317);
} else {
if((state_val_23340 === (21))){
var inst_23330 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23347_23415 = state_23339__$1;
(statearr_23347_23415[(2)] = inst_23330);

(statearr_23347_23415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (13))){
var inst_23332 = (state_23339[(2)]);
var state_23339__$1 = (function (){var statearr_23348 = state_23339;
(statearr_23348[(9)] = inst_23332);

return statearr_23348;
})();
var statearr_23349_23416 = state_23339__$1;
(statearr_23349_23416[(2)] = null);

(statearr_23349_23416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (6))){
var inst_23304 = (state_23339[(7)]);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23339__$1,(11),inst_23304);
} else {
if((state_val_23340 === (17))){
var inst_23325 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
if(cljs.core.truth_(inst_23325)){
var statearr_23350_23417 = state_23339__$1;
(statearr_23350_23417[(1)] = (19));

} else {
var statearr_23351_23418 = state_23339__$1;
(statearr_23351_23418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (3))){
var inst_23337 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23339__$1,inst_23337);
} else {
if((state_val_23340 === (12))){
var inst_23314 = (state_23339[(10)]);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23339__$1,(14),inst_23314);
} else {
if((state_val_23340 === (2))){
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23339__$1,(4),results);
} else {
if((state_val_23340 === (19))){
var state_23339__$1 = state_23339;
var statearr_23352_23419 = state_23339__$1;
(statearr_23352_23419[(2)] = null);

(statearr_23352_23419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (11))){
var inst_23314 = (state_23339[(2)]);
var state_23339__$1 = (function (){var statearr_23353 = state_23339;
(statearr_23353[(10)] = inst_23314);

return statearr_23353;
})();
var statearr_23354_23420 = state_23339__$1;
(statearr_23354_23420[(2)] = null);

(statearr_23354_23420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (9))){
var state_23339__$1 = state_23339;
var statearr_23355_23421 = state_23339__$1;
(statearr_23355_23421[(2)] = null);

(statearr_23355_23421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (5))){
var state_23339__$1 = state_23339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23356_23422 = state_23339__$1;
(statearr_23356_23422[(1)] = (8));

} else {
var statearr_23357_23423 = state_23339__$1;
(statearr_23357_23423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (14))){
var inst_23317 = (state_23339[(8)]);
var inst_23317__$1 = (state_23339[(2)]);
var inst_23318 = (inst_23317__$1 == null);
var inst_23319 = cljs.core.not.call(null,inst_23318);
var state_23339__$1 = (function (){var statearr_23358 = state_23339;
(statearr_23358[(8)] = inst_23317__$1);

return statearr_23358;
})();
if(inst_23319){
var statearr_23359_23424 = state_23339__$1;
(statearr_23359_23424[(1)] = (15));

} else {
var statearr_23360_23425 = state_23339__$1;
(statearr_23360_23425[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (16))){
var state_23339__$1 = state_23339;
var statearr_23361_23426 = state_23339__$1;
(statearr_23361_23426[(2)] = false);

(statearr_23361_23426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (10))){
var inst_23311 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23362_23427 = state_23339__$1;
(statearr_23362_23427[(2)] = inst_23311);

(statearr_23362_23427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (18))){
var inst_23322 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23363_23428 = state_23339__$1;
(statearr_23363_23428[(2)] = inst_23322);

(statearr_23363_23428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (8))){
var inst_23308 = cljs.core.async.close_BANG_.call(null,to);
var state_23339__$1 = state_23339;
var statearr_23364_23429 = state_23339__$1;
(statearr_23364_23429[(2)] = inst_23308);

(statearr_23364_23429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0 = (function (){
var statearr_23365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__);

(statearr_23365[(1)] = (1));

return statearr_23365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1 = (function (state_23339){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23366){var ex__17952__auto__ = e23366;
var statearr_23367_23430 = state_23339;
(statearr_23367_23430[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23339[(4)]))){
var statearr_23368_23431 = state_23339;
(statearr_23368_23431[(1)] = cljs.core.first.call(null,(state_23339[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23432 = state_23339;
state_23339 = G__23432;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__ = function(state_23339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1.call(this,state_23339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23369 = f__17972__auto__.call(null);
(statearr_23369[(6)] = c__17971__auto__);

return statearr_23369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));

return c__17971__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23434 = arguments.length;
switch (G__23434) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23437 = arguments.length;
switch (G__23437) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23440 = arguments.length;
switch (G__23440) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17971__auto___23490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23466){
var state_val_23467 = (state_23466[(1)]);
if((state_val_23467 === (7))){
var inst_23462 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
var statearr_23468_23491 = state_23466__$1;
(statearr_23468_23491[(2)] = inst_23462);

(statearr_23468_23491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (1))){
var state_23466__$1 = state_23466;
var statearr_23469_23492 = state_23466__$1;
(statearr_23469_23492[(2)] = null);

(statearr_23469_23492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (4))){
var inst_23443 = (state_23466[(7)]);
var inst_23443__$1 = (state_23466[(2)]);
var inst_23444 = (inst_23443__$1 == null);
var state_23466__$1 = (function (){var statearr_23470 = state_23466;
(statearr_23470[(7)] = inst_23443__$1);

return statearr_23470;
})();
if(cljs.core.truth_(inst_23444)){
var statearr_23471_23493 = state_23466__$1;
(statearr_23471_23493[(1)] = (5));

} else {
var statearr_23472_23494 = state_23466__$1;
(statearr_23472_23494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (13))){
var state_23466__$1 = state_23466;
var statearr_23473_23495 = state_23466__$1;
(statearr_23473_23495[(2)] = null);

(statearr_23473_23495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (6))){
var inst_23443 = (state_23466[(7)]);
var inst_23449 = p.call(null,inst_23443);
var state_23466__$1 = state_23466;
if(cljs.core.truth_(inst_23449)){
var statearr_23474_23496 = state_23466__$1;
(statearr_23474_23496[(1)] = (9));

} else {
var statearr_23475_23497 = state_23466__$1;
(statearr_23475_23497[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (3))){
var inst_23464 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23466__$1,inst_23464);
} else {
if((state_val_23467 === (12))){
var state_23466__$1 = state_23466;
var statearr_23476_23498 = state_23466__$1;
(statearr_23476_23498[(2)] = null);

(statearr_23476_23498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (2))){
var state_23466__$1 = state_23466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23466__$1,(4),ch);
} else {
if((state_val_23467 === (11))){
var inst_23443 = (state_23466[(7)]);
var inst_23453 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23466__$1,(8),inst_23453,inst_23443);
} else {
if((state_val_23467 === (9))){
var state_23466__$1 = state_23466;
var statearr_23477_23499 = state_23466__$1;
(statearr_23477_23499[(2)] = tc);

(statearr_23477_23499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (5))){
var inst_23446 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23447 = cljs.core.async.close_BANG_.call(null,fc);
var state_23466__$1 = (function (){var statearr_23478 = state_23466;
(statearr_23478[(8)] = inst_23446);

return statearr_23478;
})();
var statearr_23479_23500 = state_23466__$1;
(statearr_23479_23500[(2)] = inst_23447);

(statearr_23479_23500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (14))){
var inst_23460 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
var statearr_23480_23501 = state_23466__$1;
(statearr_23480_23501[(2)] = inst_23460);

(statearr_23480_23501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (10))){
var state_23466__$1 = state_23466;
var statearr_23481_23502 = state_23466__$1;
(statearr_23481_23502[(2)] = fc);

(statearr_23481_23502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (8))){
var inst_23455 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
if(cljs.core.truth_(inst_23455)){
var statearr_23482_23503 = state_23466__$1;
(statearr_23482_23503[(1)] = (12));

} else {
var statearr_23483_23504 = state_23466__$1;
(statearr_23483_23504[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_23484 = [null,null,null,null,null,null,null,null,null];
(statearr_23484[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_23484[(1)] = (1));

return statearr_23484;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_23466){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23485){var ex__17952__auto__ = e23485;
var statearr_23486_23505 = state_23466;
(statearr_23486_23505[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23466[(4)]))){
var statearr_23487_23506 = state_23466;
(statearr_23487_23506[(1)] = cljs.core.first.call(null,(state_23466[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23507 = state_23466;
state_23466 = G__23507;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_23466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_23466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23488 = f__17972__auto__.call(null);
(statearr_23488[(6)] = c__17971__auto___23490);

return statearr_23488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23529){
var state_val_23530 = (state_23529[(1)]);
if((state_val_23530 === (7))){
var inst_23525 = (state_23529[(2)]);
var state_23529__$1 = state_23529;
var statearr_23531_23550 = state_23529__$1;
(statearr_23531_23550[(2)] = inst_23525);

(statearr_23531_23550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (1))){
var inst_23508 = init;
var inst_23509 = inst_23508;
var state_23529__$1 = (function (){var statearr_23532 = state_23529;
(statearr_23532[(7)] = inst_23509);

return statearr_23532;
})();
var statearr_23533_23551 = state_23529__$1;
(statearr_23533_23551[(2)] = null);

(statearr_23533_23551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (4))){
var inst_23512 = (state_23529[(8)]);
var inst_23512__$1 = (state_23529[(2)]);
var inst_23513 = (inst_23512__$1 == null);
var state_23529__$1 = (function (){var statearr_23534 = state_23529;
(statearr_23534[(8)] = inst_23512__$1);

return statearr_23534;
})();
if(cljs.core.truth_(inst_23513)){
var statearr_23535_23552 = state_23529__$1;
(statearr_23535_23552[(1)] = (5));

} else {
var statearr_23536_23553 = state_23529__$1;
(statearr_23536_23553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (6))){
var inst_23512 = (state_23529[(8)]);
var inst_23509 = (state_23529[(7)]);
var inst_23516 = (state_23529[(9)]);
var inst_23516__$1 = f.call(null,inst_23509,inst_23512);
var inst_23517 = cljs.core.reduced_QMARK_.call(null,inst_23516__$1);
var state_23529__$1 = (function (){var statearr_23537 = state_23529;
(statearr_23537[(9)] = inst_23516__$1);

return statearr_23537;
})();
if(inst_23517){
var statearr_23538_23554 = state_23529__$1;
(statearr_23538_23554[(1)] = (8));

} else {
var statearr_23539_23555 = state_23529__$1;
(statearr_23539_23555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (3))){
var inst_23527 = (state_23529[(2)]);
var state_23529__$1 = state_23529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23529__$1,inst_23527);
} else {
if((state_val_23530 === (2))){
var state_23529__$1 = state_23529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23529__$1,(4),ch);
} else {
if((state_val_23530 === (9))){
var inst_23516 = (state_23529[(9)]);
var inst_23509 = inst_23516;
var state_23529__$1 = (function (){var statearr_23540 = state_23529;
(statearr_23540[(7)] = inst_23509);

return statearr_23540;
})();
var statearr_23541_23556 = state_23529__$1;
(statearr_23541_23556[(2)] = null);

(statearr_23541_23556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (5))){
var inst_23509 = (state_23529[(7)]);
var state_23529__$1 = state_23529;
var statearr_23542_23557 = state_23529__$1;
(statearr_23542_23557[(2)] = inst_23509);

(statearr_23542_23557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (10))){
var inst_23523 = (state_23529[(2)]);
var state_23529__$1 = state_23529;
var statearr_23543_23558 = state_23529__$1;
(statearr_23543_23558[(2)] = inst_23523);

(statearr_23543_23558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23530 === (8))){
var inst_23516 = (state_23529[(9)]);
var inst_23519 = cljs.core.deref.call(null,inst_23516);
var state_23529__$1 = state_23529;
var statearr_23544_23559 = state_23529__$1;
(statearr_23544_23559[(2)] = inst_23519);

(statearr_23544_23559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17949__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17949__auto____0 = (function (){
var statearr_23545 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23545[(0)] = cljs$core$async$reduce_$_state_machine__17949__auto__);

(statearr_23545[(1)] = (1));

return statearr_23545;
});
var cljs$core$async$reduce_$_state_machine__17949__auto____1 = (function (state_23529){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23546){var ex__17952__auto__ = e23546;
var statearr_23547_23560 = state_23529;
(statearr_23547_23560[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23529[(4)]))){
var statearr_23548_23561 = state_23529;
(statearr_23548_23561[(1)] = cljs.core.first.call(null,(state_23529[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23562 = state_23529;
state_23529 = G__23562;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17949__auto__ = function(state_23529){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17949__auto____1.call(this,state_23529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17949__auto____0;
cljs$core$async$reduce_$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17949__auto____1;
return cljs$core$async$reduce_$_state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23549 = f__17972__auto__.call(null);
(statearr_23549[(6)] = c__17971__auto__);

return statearr_23549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));

return c__17971__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23568){
var state_val_23569 = (state_23568[(1)]);
if((state_val_23569 === (1))){
var inst_23563 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23568__$1 = state_23568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23568__$1,(2),inst_23563);
} else {
if((state_val_23569 === (2))){
var inst_23565 = (state_23568[(2)]);
var inst_23566 = f__$1.call(null,inst_23565);
var state_23568__$1 = state_23568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23568__$1,inst_23566);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17949__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17949__auto____0 = (function (){
var statearr_23570 = [null,null,null,null,null,null,null];
(statearr_23570[(0)] = cljs$core$async$transduce_$_state_machine__17949__auto__);

(statearr_23570[(1)] = (1));

return statearr_23570;
});
var cljs$core$async$transduce_$_state_machine__17949__auto____1 = (function (state_23568){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23571){var ex__17952__auto__ = e23571;
var statearr_23572_23575 = state_23568;
(statearr_23572_23575[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23568[(4)]))){
var statearr_23573_23576 = state_23568;
(statearr_23573_23576[(1)] = cljs.core.first.call(null,(state_23568[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23577 = state_23568;
state_23568 = G__23577;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17949__auto__ = function(state_23568){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17949__auto____1.call(this,state_23568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17949__auto____0;
cljs$core$async$transduce_$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17949__auto____1;
return cljs$core$async$transduce_$_state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23574 = f__17972__auto__.call(null);
(statearr_23574[(6)] = c__17971__auto__);

return statearr_23574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));

return c__17971__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__23579 = arguments.length;
switch (G__23579) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23604){
var state_val_23605 = (state_23604[(1)]);
if((state_val_23605 === (7))){
var inst_23586 = (state_23604[(2)]);
var state_23604__$1 = state_23604;
var statearr_23606_23628 = state_23604__$1;
(statearr_23606_23628[(2)] = inst_23586);

(statearr_23606_23628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (1))){
var inst_23580 = cljs.core.seq.call(null,coll);
var inst_23581 = inst_23580;
var state_23604__$1 = (function (){var statearr_23607 = state_23604;
(statearr_23607[(7)] = inst_23581);

return statearr_23607;
})();
var statearr_23608_23629 = state_23604__$1;
(statearr_23608_23629[(2)] = null);

(statearr_23608_23629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (4))){
var inst_23581 = (state_23604[(7)]);
var inst_23584 = cljs.core.first.call(null,inst_23581);
var state_23604__$1 = state_23604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23604__$1,(7),ch,inst_23584);
} else {
if((state_val_23605 === (13))){
var inst_23598 = (state_23604[(2)]);
var state_23604__$1 = state_23604;
var statearr_23609_23630 = state_23604__$1;
(statearr_23609_23630[(2)] = inst_23598);

(statearr_23609_23630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (6))){
var inst_23589 = (state_23604[(2)]);
var state_23604__$1 = state_23604;
if(cljs.core.truth_(inst_23589)){
var statearr_23610_23631 = state_23604__$1;
(statearr_23610_23631[(1)] = (8));

} else {
var statearr_23611_23632 = state_23604__$1;
(statearr_23611_23632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (3))){
var inst_23602 = (state_23604[(2)]);
var state_23604__$1 = state_23604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23604__$1,inst_23602);
} else {
if((state_val_23605 === (12))){
var state_23604__$1 = state_23604;
var statearr_23612_23633 = state_23604__$1;
(statearr_23612_23633[(2)] = null);

(statearr_23612_23633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (2))){
var inst_23581 = (state_23604[(7)]);
var state_23604__$1 = state_23604;
if(cljs.core.truth_(inst_23581)){
var statearr_23613_23634 = state_23604__$1;
(statearr_23613_23634[(1)] = (4));

} else {
var statearr_23614_23635 = state_23604__$1;
(statearr_23614_23635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (11))){
var inst_23595 = cljs.core.async.close_BANG_.call(null,ch);
var state_23604__$1 = state_23604;
var statearr_23615_23636 = state_23604__$1;
(statearr_23615_23636[(2)] = inst_23595);

(statearr_23615_23636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (9))){
var state_23604__$1 = state_23604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23616_23637 = state_23604__$1;
(statearr_23616_23637[(1)] = (11));

} else {
var statearr_23617_23638 = state_23604__$1;
(statearr_23617_23638[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (5))){
var inst_23581 = (state_23604[(7)]);
var state_23604__$1 = state_23604;
var statearr_23618_23639 = state_23604__$1;
(statearr_23618_23639[(2)] = inst_23581);

(statearr_23618_23639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (10))){
var inst_23600 = (state_23604[(2)]);
var state_23604__$1 = state_23604;
var statearr_23619_23640 = state_23604__$1;
(statearr_23619_23640[(2)] = inst_23600);

(statearr_23619_23640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23605 === (8))){
var inst_23581 = (state_23604[(7)]);
var inst_23591 = cljs.core.next.call(null,inst_23581);
var inst_23581__$1 = inst_23591;
var state_23604__$1 = (function (){var statearr_23620 = state_23604;
(statearr_23620[(7)] = inst_23581__$1);

return statearr_23620;
})();
var statearr_23621_23641 = state_23604__$1;
(statearr_23621_23641[(2)] = null);

(statearr_23621_23641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_23622 = [null,null,null,null,null,null,null,null];
(statearr_23622[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_23622[(1)] = (1));

return statearr_23622;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_23604){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23623){var ex__17952__auto__ = e23623;
var statearr_23624_23642 = state_23604;
(statearr_23624_23642[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23604[(4)]))){
var statearr_23625_23643 = state_23604;
(statearr_23625_23643[(1)] = cljs.core.first.call(null,(state_23604[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23644 = state_23604;
state_23604 = G__23644;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_23604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_23604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23626 = f__17972__auto__.call(null);
(statearr_23626[(6)] = c__17971__auto__);

return statearr_23626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));

return c__17971__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23646 = arguments.length;
switch (G__23646) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23648 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,_);
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23648.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23649 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23649.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23650 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23650.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23651 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23651.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23652 = (function (ch,cs,meta23653){
this.ch = ch;
this.cs = cs;
this.meta23653 = meta23653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23654,meta23653__$1){
var self__ = this;
var _23654__$1 = this;
return (new cljs.core.async.t_cljs$core$async23652(self__.ch,self__.cs,meta23653__$1));
}));

(cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23654){
var self__ = this;
var _23654__$1 = this;
return self__.meta23653;
}));

(cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23653","meta23653",-1780449435,null)], null);
}));

(cljs.core.async.t_cljs$core$async23652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23652");

(cljs.core.async.t_cljs$core$async23652.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async23652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23652.
 */
cljs.core.async.__GT_t_cljs$core$async23652 = (function cljs$core$async$mult_$___GT_t_cljs$core$async23652(ch__$1,cs__$1,meta23653){
return (new cljs.core.async.t_cljs$core$async23652(ch__$1,cs__$1,meta23653));
});

}

return (new cljs.core.async.t_cljs$core$async23652(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__17971__auto___23871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_23787){
var state_val_23788 = (state_23787[(1)]);
if((state_val_23788 === (7))){
var inst_23783 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23789_23872 = state_23787__$1;
(statearr_23789_23872[(2)] = inst_23783);

(statearr_23789_23872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (20))){
var inst_23688 = (state_23787[(7)]);
var inst_23700 = cljs.core.first.call(null,inst_23688);
var inst_23701 = cljs.core.nth.call(null,inst_23700,(0),null);
var inst_23702 = cljs.core.nth.call(null,inst_23700,(1),null);
var state_23787__$1 = (function (){var statearr_23790 = state_23787;
(statearr_23790[(8)] = inst_23701);

return statearr_23790;
})();
if(cljs.core.truth_(inst_23702)){
var statearr_23791_23873 = state_23787__$1;
(statearr_23791_23873[(1)] = (22));

} else {
var statearr_23792_23874 = state_23787__$1;
(statearr_23792_23874[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (27))){
var inst_23657 = (state_23787[(9)]);
var inst_23732 = (state_23787[(10)]);
var inst_23737 = (state_23787[(11)]);
var inst_23730 = (state_23787[(12)]);
var inst_23737__$1 = cljs.core._nth.call(null,inst_23730,inst_23732);
var inst_23738 = cljs.core.async.put_BANG_.call(null,inst_23737__$1,inst_23657,done);
var state_23787__$1 = (function (){var statearr_23793 = state_23787;
(statearr_23793[(11)] = inst_23737__$1);

return statearr_23793;
})();
if(cljs.core.truth_(inst_23738)){
var statearr_23794_23875 = state_23787__$1;
(statearr_23794_23875[(1)] = (30));

} else {
var statearr_23795_23876 = state_23787__$1;
(statearr_23795_23876[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (1))){
var state_23787__$1 = state_23787;
var statearr_23796_23877 = state_23787__$1;
(statearr_23796_23877[(2)] = null);

(statearr_23796_23877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (24))){
var inst_23688 = (state_23787[(7)]);
var inst_23707 = (state_23787[(2)]);
var inst_23708 = cljs.core.next.call(null,inst_23688);
var inst_23666 = inst_23708;
var inst_23667 = null;
var inst_23668 = (0);
var inst_23669 = (0);
var state_23787__$1 = (function (){var statearr_23797 = state_23787;
(statearr_23797[(13)] = inst_23669);

(statearr_23797[(14)] = inst_23668);

(statearr_23797[(15)] = inst_23666);

(statearr_23797[(16)] = inst_23667);

(statearr_23797[(17)] = inst_23707);

return statearr_23797;
})();
var statearr_23798_23878 = state_23787__$1;
(statearr_23798_23878[(2)] = null);

(statearr_23798_23878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (39))){
var state_23787__$1 = state_23787;
var statearr_23802_23879 = state_23787__$1;
(statearr_23802_23879[(2)] = null);

(statearr_23802_23879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (4))){
var inst_23657 = (state_23787[(9)]);
var inst_23657__$1 = (state_23787[(2)]);
var inst_23658 = (inst_23657__$1 == null);
var state_23787__$1 = (function (){var statearr_23803 = state_23787;
(statearr_23803[(9)] = inst_23657__$1);

return statearr_23803;
})();
if(cljs.core.truth_(inst_23658)){
var statearr_23804_23880 = state_23787__$1;
(statearr_23804_23880[(1)] = (5));

} else {
var statearr_23805_23881 = state_23787__$1;
(statearr_23805_23881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (15))){
var inst_23669 = (state_23787[(13)]);
var inst_23668 = (state_23787[(14)]);
var inst_23666 = (state_23787[(15)]);
var inst_23667 = (state_23787[(16)]);
var inst_23684 = (state_23787[(2)]);
var inst_23685 = (inst_23669 + (1));
var tmp23799 = inst_23668;
var tmp23800 = inst_23666;
var tmp23801 = inst_23667;
var inst_23666__$1 = tmp23800;
var inst_23667__$1 = tmp23801;
var inst_23668__$1 = tmp23799;
var inst_23669__$1 = inst_23685;
var state_23787__$1 = (function (){var statearr_23806 = state_23787;
(statearr_23806[(13)] = inst_23669__$1);

(statearr_23806[(18)] = inst_23684);

(statearr_23806[(14)] = inst_23668__$1);

(statearr_23806[(15)] = inst_23666__$1);

(statearr_23806[(16)] = inst_23667__$1);

return statearr_23806;
})();
var statearr_23807_23882 = state_23787__$1;
(statearr_23807_23882[(2)] = null);

(statearr_23807_23882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (21))){
var inst_23711 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23811_23883 = state_23787__$1;
(statearr_23811_23883[(2)] = inst_23711);

(statearr_23811_23883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (31))){
var inst_23737 = (state_23787[(11)]);
var inst_23741 = cljs.core.async.untap_STAR_.call(null,m,inst_23737);
var state_23787__$1 = state_23787;
var statearr_23812_23884 = state_23787__$1;
(statearr_23812_23884[(2)] = inst_23741);

(statearr_23812_23884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (32))){
var inst_23729 = (state_23787[(19)]);
var inst_23732 = (state_23787[(10)]);
var inst_23731 = (state_23787[(20)]);
var inst_23730 = (state_23787[(12)]);
var inst_23743 = (state_23787[(2)]);
var inst_23744 = (inst_23732 + (1));
var tmp23808 = inst_23729;
var tmp23809 = inst_23731;
var tmp23810 = inst_23730;
var inst_23729__$1 = tmp23808;
var inst_23730__$1 = tmp23810;
var inst_23731__$1 = tmp23809;
var inst_23732__$1 = inst_23744;
var state_23787__$1 = (function (){var statearr_23813 = state_23787;
(statearr_23813[(19)] = inst_23729__$1);

(statearr_23813[(10)] = inst_23732__$1);

(statearr_23813[(20)] = inst_23731__$1);

(statearr_23813[(21)] = inst_23743);

(statearr_23813[(12)] = inst_23730__$1);

return statearr_23813;
})();
var statearr_23814_23885 = state_23787__$1;
(statearr_23814_23885[(2)] = null);

(statearr_23814_23885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (40))){
var inst_23756 = (state_23787[(22)]);
var inst_23760 = cljs.core.async.untap_STAR_.call(null,m,inst_23756);
var state_23787__$1 = state_23787;
var statearr_23815_23886 = state_23787__$1;
(statearr_23815_23886[(2)] = inst_23760);

(statearr_23815_23886[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (33))){
var inst_23747 = (state_23787[(23)]);
var inst_23749 = cljs.core.chunked_seq_QMARK_.call(null,inst_23747);
var state_23787__$1 = state_23787;
if(inst_23749){
var statearr_23816_23887 = state_23787__$1;
(statearr_23816_23887[(1)] = (36));

} else {
var statearr_23817_23888 = state_23787__$1;
(statearr_23817_23888[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (13))){
var inst_23678 = (state_23787[(24)]);
var inst_23681 = cljs.core.async.close_BANG_.call(null,inst_23678);
var state_23787__$1 = state_23787;
var statearr_23818_23889 = state_23787__$1;
(statearr_23818_23889[(2)] = inst_23681);

(statearr_23818_23889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (22))){
var inst_23701 = (state_23787[(8)]);
var inst_23704 = cljs.core.async.close_BANG_.call(null,inst_23701);
var state_23787__$1 = state_23787;
var statearr_23819_23890 = state_23787__$1;
(statearr_23819_23890[(2)] = inst_23704);

(statearr_23819_23890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (36))){
var inst_23747 = (state_23787[(23)]);
var inst_23751 = cljs.core.chunk_first.call(null,inst_23747);
var inst_23752 = cljs.core.chunk_rest.call(null,inst_23747);
var inst_23753 = cljs.core.count.call(null,inst_23751);
var inst_23729 = inst_23752;
var inst_23730 = inst_23751;
var inst_23731 = inst_23753;
var inst_23732 = (0);
var state_23787__$1 = (function (){var statearr_23820 = state_23787;
(statearr_23820[(19)] = inst_23729);

(statearr_23820[(10)] = inst_23732);

(statearr_23820[(20)] = inst_23731);

(statearr_23820[(12)] = inst_23730);

return statearr_23820;
})();
var statearr_23821_23891 = state_23787__$1;
(statearr_23821_23891[(2)] = null);

(statearr_23821_23891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (41))){
var inst_23747 = (state_23787[(23)]);
var inst_23762 = (state_23787[(2)]);
var inst_23763 = cljs.core.next.call(null,inst_23747);
var inst_23729 = inst_23763;
var inst_23730 = null;
var inst_23731 = (0);
var inst_23732 = (0);
var state_23787__$1 = (function (){var statearr_23822 = state_23787;
(statearr_23822[(19)] = inst_23729);

(statearr_23822[(10)] = inst_23732);

(statearr_23822[(20)] = inst_23731);

(statearr_23822[(25)] = inst_23762);

(statearr_23822[(12)] = inst_23730);

return statearr_23822;
})();
var statearr_23823_23892 = state_23787__$1;
(statearr_23823_23892[(2)] = null);

(statearr_23823_23892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (43))){
var state_23787__$1 = state_23787;
var statearr_23824_23893 = state_23787__$1;
(statearr_23824_23893[(2)] = null);

(statearr_23824_23893[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (29))){
var inst_23771 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23825_23894 = state_23787__$1;
(statearr_23825_23894[(2)] = inst_23771);

(statearr_23825_23894[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (44))){
var inst_23780 = (state_23787[(2)]);
var state_23787__$1 = (function (){var statearr_23826 = state_23787;
(statearr_23826[(26)] = inst_23780);

return statearr_23826;
})();
var statearr_23827_23895 = state_23787__$1;
(statearr_23827_23895[(2)] = null);

(statearr_23827_23895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (6))){
var inst_23721 = (state_23787[(27)]);
var inst_23720 = cljs.core.deref.call(null,cs);
var inst_23721__$1 = cljs.core.keys.call(null,inst_23720);
var inst_23722 = cljs.core.count.call(null,inst_23721__$1);
var inst_23723 = cljs.core.reset_BANG_.call(null,dctr,inst_23722);
var inst_23728 = cljs.core.seq.call(null,inst_23721__$1);
var inst_23729 = inst_23728;
var inst_23730 = null;
var inst_23731 = (0);
var inst_23732 = (0);
var state_23787__$1 = (function (){var statearr_23828 = state_23787;
(statearr_23828[(19)] = inst_23729);

(statearr_23828[(27)] = inst_23721__$1);

(statearr_23828[(10)] = inst_23732);

(statearr_23828[(28)] = inst_23723);

(statearr_23828[(20)] = inst_23731);

(statearr_23828[(12)] = inst_23730);

return statearr_23828;
})();
var statearr_23829_23896 = state_23787__$1;
(statearr_23829_23896[(2)] = null);

(statearr_23829_23896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (28))){
var inst_23729 = (state_23787[(19)]);
var inst_23747 = (state_23787[(23)]);
var inst_23747__$1 = cljs.core.seq.call(null,inst_23729);
var state_23787__$1 = (function (){var statearr_23830 = state_23787;
(statearr_23830[(23)] = inst_23747__$1);

return statearr_23830;
})();
if(inst_23747__$1){
var statearr_23831_23897 = state_23787__$1;
(statearr_23831_23897[(1)] = (33));

} else {
var statearr_23832_23898 = state_23787__$1;
(statearr_23832_23898[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (25))){
var inst_23732 = (state_23787[(10)]);
var inst_23731 = (state_23787[(20)]);
var inst_23734 = (inst_23732 < inst_23731);
var inst_23735 = inst_23734;
var state_23787__$1 = state_23787;
if(cljs.core.truth_(inst_23735)){
var statearr_23833_23899 = state_23787__$1;
(statearr_23833_23899[(1)] = (27));

} else {
var statearr_23834_23900 = state_23787__$1;
(statearr_23834_23900[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (34))){
var state_23787__$1 = state_23787;
var statearr_23835_23901 = state_23787__$1;
(statearr_23835_23901[(2)] = null);

(statearr_23835_23901[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (17))){
var state_23787__$1 = state_23787;
var statearr_23836_23902 = state_23787__$1;
(statearr_23836_23902[(2)] = null);

(statearr_23836_23902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (3))){
var inst_23785 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23787__$1,inst_23785);
} else {
if((state_val_23788 === (12))){
var inst_23716 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23837_23903 = state_23787__$1;
(statearr_23837_23903[(2)] = inst_23716);

(statearr_23837_23903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (2))){
var state_23787__$1 = state_23787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23787__$1,(4),ch);
} else {
if((state_val_23788 === (23))){
var state_23787__$1 = state_23787;
var statearr_23838_23904 = state_23787__$1;
(statearr_23838_23904[(2)] = null);

(statearr_23838_23904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (35))){
var inst_23769 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23839_23905 = state_23787__$1;
(statearr_23839_23905[(2)] = inst_23769);

(statearr_23839_23905[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (19))){
var inst_23688 = (state_23787[(7)]);
var inst_23692 = cljs.core.chunk_first.call(null,inst_23688);
var inst_23693 = cljs.core.chunk_rest.call(null,inst_23688);
var inst_23694 = cljs.core.count.call(null,inst_23692);
var inst_23666 = inst_23693;
var inst_23667 = inst_23692;
var inst_23668 = inst_23694;
var inst_23669 = (0);
var state_23787__$1 = (function (){var statearr_23840 = state_23787;
(statearr_23840[(13)] = inst_23669);

(statearr_23840[(14)] = inst_23668);

(statearr_23840[(15)] = inst_23666);

(statearr_23840[(16)] = inst_23667);

return statearr_23840;
})();
var statearr_23841_23906 = state_23787__$1;
(statearr_23841_23906[(2)] = null);

(statearr_23841_23906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (11))){
var inst_23688 = (state_23787[(7)]);
var inst_23666 = (state_23787[(15)]);
var inst_23688__$1 = cljs.core.seq.call(null,inst_23666);
var state_23787__$1 = (function (){var statearr_23842 = state_23787;
(statearr_23842[(7)] = inst_23688__$1);

return statearr_23842;
})();
if(inst_23688__$1){
var statearr_23843_23907 = state_23787__$1;
(statearr_23843_23907[(1)] = (16));

} else {
var statearr_23844_23908 = state_23787__$1;
(statearr_23844_23908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (9))){
var inst_23718 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23845_23909 = state_23787__$1;
(statearr_23845_23909[(2)] = inst_23718);

(statearr_23845_23909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (5))){
var inst_23664 = cljs.core.deref.call(null,cs);
var inst_23665 = cljs.core.seq.call(null,inst_23664);
var inst_23666 = inst_23665;
var inst_23667 = null;
var inst_23668 = (0);
var inst_23669 = (0);
var state_23787__$1 = (function (){var statearr_23846 = state_23787;
(statearr_23846[(13)] = inst_23669);

(statearr_23846[(14)] = inst_23668);

(statearr_23846[(15)] = inst_23666);

(statearr_23846[(16)] = inst_23667);

return statearr_23846;
})();
var statearr_23847_23910 = state_23787__$1;
(statearr_23847_23910[(2)] = null);

(statearr_23847_23910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (14))){
var state_23787__$1 = state_23787;
var statearr_23848_23911 = state_23787__$1;
(statearr_23848_23911[(2)] = null);

(statearr_23848_23911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (45))){
var inst_23777 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23849_23912 = state_23787__$1;
(statearr_23849_23912[(2)] = inst_23777);

(statearr_23849_23912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (26))){
var inst_23721 = (state_23787[(27)]);
var inst_23773 = (state_23787[(2)]);
var inst_23774 = cljs.core.seq.call(null,inst_23721);
var state_23787__$1 = (function (){var statearr_23850 = state_23787;
(statearr_23850[(29)] = inst_23773);

return statearr_23850;
})();
if(inst_23774){
var statearr_23851_23913 = state_23787__$1;
(statearr_23851_23913[(1)] = (42));

} else {
var statearr_23852_23914 = state_23787__$1;
(statearr_23852_23914[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (16))){
var inst_23688 = (state_23787[(7)]);
var inst_23690 = cljs.core.chunked_seq_QMARK_.call(null,inst_23688);
var state_23787__$1 = state_23787;
if(inst_23690){
var statearr_23853_23915 = state_23787__$1;
(statearr_23853_23915[(1)] = (19));

} else {
var statearr_23854_23916 = state_23787__$1;
(statearr_23854_23916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (38))){
var inst_23766 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23855_23917 = state_23787__$1;
(statearr_23855_23917[(2)] = inst_23766);

(statearr_23855_23917[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (30))){
var state_23787__$1 = state_23787;
var statearr_23856_23918 = state_23787__$1;
(statearr_23856_23918[(2)] = null);

(statearr_23856_23918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (10))){
var inst_23669 = (state_23787[(13)]);
var inst_23667 = (state_23787[(16)]);
var inst_23677 = cljs.core._nth.call(null,inst_23667,inst_23669);
var inst_23678 = cljs.core.nth.call(null,inst_23677,(0),null);
var inst_23679 = cljs.core.nth.call(null,inst_23677,(1),null);
var state_23787__$1 = (function (){var statearr_23857 = state_23787;
(statearr_23857[(24)] = inst_23678);

return statearr_23857;
})();
if(cljs.core.truth_(inst_23679)){
var statearr_23858_23919 = state_23787__$1;
(statearr_23858_23919[(1)] = (13));

} else {
var statearr_23859_23920 = state_23787__$1;
(statearr_23859_23920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (18))){
var inst_23714 = (state_23787[(2)]);
var state_23787__$1 = state_23787;
var statearr_23860_23921 = state_23787__$1;
(statearr_23860_23921[(2)] = inst_23714);

(statearr_23860_23921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (42))){
var state_23787__$1 = state_23787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23787__$1,(45),dchan);
} else {
if((state_val_23788 === (37))){
var inst_23756 = (state_23787[(22)]);
var inst_23747 = (state_23787[(23)]);
var inst_23657 = (state_23787[(9)]);
var inst_23756__$1 = cljs.core.first.call(null,inst_23747);
var inst_23757 = cljs.core.async.put_BANG_.call(null,inst_23756__$1,inst_23657,done);
var state_23787__$1 = (function (){var statearr_23861 = state_23787;
(statearr_23861[(22)] = inst_23756__$1);

return statearr_23861;
})();
if(cljs.core.truth_(inst_23757)){
var statearr_23862_23922 = state_23787__$1;
(statearr_23862_23922[(1)] = (39));

} else {
var statearr_23863_23923 = state_23787__$1;
(statearr_23863_23923[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23788 === (8))){
var inst_23669 = (state_23787[(13)]);
var inst_23668 = (state_23787[(14)]);
var inst_23671 = (inst_23669 < inst_23668);
var inst_23672 = inst_23671;
var state_23787__$1 = state_23787;
if(cljs.core.truth_(inst_23672)){
var statearr_23864_23924 = state_23787__$1;
(statearr_23864_23924[(1)] = (10));

} else {
var statearr_23865_23925 = state_23787__$1;
(statearr_23865_23925[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17949__auto__ = null;
var cljs$core$async$mult_$_state_machine__17949__auto____0 = (function (){
var statearr_23866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23866[(0)] = cljs$core$async$mult_$_state_machine__17949__auto__);

(statearr_23866[(1)] = (1));

return statearr_23866;
});
var cljs$core$async$mult_$_state_machine__17949__auto____1 = (function (state_23787){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_23787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e23867){var ex__17952__auto__ = e23867;
var statearr_23868_23926 = state_23787;
(statearr_23868_23926[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_23787[(4)]))){
var statearr_23869_23927 = state_23787;
(statearr_23869_23927[(1)] = cljs.core.first.call(null,(state_23787[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23928 = state_23787;
state_23787 = G__23928;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17949__auto__ = function(state_23787){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17949__auto____1.call(this,state_23787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17949__auto____0;
cljs$core$async$mult_$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17949__auto____1;
return cljs$core$async$mult_$_state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_23870 = f__17972__auto__.call(null);
(statearr_23870[(6)] = c__17971__auto___23871);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23930 = arguments.length;
switch (G__23930) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23932 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23932.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23933 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23933.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23934 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23934.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23935 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,state_map);
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23935.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23936 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,mode);
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23936.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___23946 = arguments.length;
var i__4772__auto___23947 = (0);
while(true){
if((i__4772__auto___23947 < len__4771__auto___23946)){
args__4777__auto__.push((arguments[i__4772__auto___23947]));

var G__23948 = (i__4772__auto___23947 + (1));
i__4772__auto___23947 = G__23948;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23941){
var map__23942 = p__23941;
var map__23942__$1 = cljs.core.__destructure_map.call(null,map__23942);
var opts = map__23942__$1;
var statearr_23943_23949 = state;
(statearr_23943_23949[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_23944_23950 = state;
(statearr_23944_23950[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_23945_23951 = state;
(statearr_23945_23951[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23937){
var G__23938 = cljs.core.first.call(null,seq23937);
var seq23937__$1 = cljs.core.next.call(null,seq23937);
var G__23939 = cljs.core.first.call(null,seq23937__$1);
var seq23937__$2 = cljs.core.next.call(null,seq23937__$1);
var G__23940 = cljs.core.first.call(null,seq23937__$2);
var seq23937__$3 = cljs.core.next.call(null,seq23937__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23938,G__23939,G__23940,seq23937__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23952 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23953){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23953 = meta23953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23954,meta23953__$1){
var self__ = this;
var _23954__$1 = this;
return (new cljs.core.async.t_cljs$core$async23952(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23953__$1));
}));

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23954){
var self__ = this;
var _23954__$1 = this;
return self__.meta23953;
}));

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23952.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta23953","meta23953",1765024141,null)], null);
}));

(cljs.core.async.t_cljs$core$async23952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23952");

(cljs.core.async.t_cljs$core$async23952.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async23952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23952.
 */
cljs.core.async.__GT_t_cljs$core$async23952 = (function cljs$core$async$mix_$___GT_t_cljs$core$async23952(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23953){
return (new cljs.core.async.t_cljs$core$async23952(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23953));
});

}

return (new cljs.core.async.t_cljs$core$async23952(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17971__auto___24052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24016){
var state_val_24017 = (state_24016[(1)]);
if((state_val_24017 === (7))){
var inst_24012 = (state_24016[(2)]);
var state_24016__$1 = state_24016;
var statearr_24018_24053 = state_24016__$1;
(statearr_24018_24053[(2)] = inst_24012);

(statearr_24018_24053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (20))){
var inst_24006 = (state_24016[(2)]);
var state_24016__$1 = state_24016;
var statearr_24019_24054 = state_24016__$1;
(statearr_24019_24054[(2)] = inst_24006);

(statearr_24019_24054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (1))){
var inst_23958 = calc_state.call(null);
var inst_23959 = cljs.core.__destructure_map.call(null,inst_23958);
var inst_23960 = cljs.core.get.call(null,inst_23959,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23961 = cljs.core.get.call(null,inst_23959,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23962 = cljs.core.get.call(null,inst_23959,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23963 = inst_23958;
var state_24016__$1 = (function (){var statearr_24020 = state_24016;
(statearr_24020[(7)] = inst_23963);

(statearr_24020[(8)] = inst_23960);

(statearr_24020[(9)] = inst_23961);

(statearr_24020[(10)] = inst_23962);

return statearr_24020;
})();
var statearr_24021_24055 = state_24016__$1;
(statearr_24021_24055[(2)] = null);

(statearr_24021_24055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (4))){
var inst_23975 = (state_24016[(11)]);
var inst_23976 = (state_24016[(12)]);
var inst_23974 = (state_24016[(2)]);
var inst_23975__$1 = cljs.core.nth.call(null,inst_23974,(0),null);
var inst_23976__$1 = cljs.core.nth.call(null,inst_23974,(1),null);
var inst_23977 = (inst_23975__$1 == null);
var inst_23978 = cljs.core._EQ_.call(null,inst_23976__$1,change);
var inst_23979 = ((inst_23977) || (inst_23978));
var state_24016__$1 = (function (){var statearr_24022 = state_24016;
(statearr_24022[(11)] = inst_23975__$1);

(statearr_24022[(12)] = inst_23976__$1);

return statearr_24022;
})();
if(cljs.core.truth_(inst_23979)){
var statearr_24023_24056 = state_24016__$1;
(statearr_24023_24056[(1)] = (5));

} else {
var statearr_24024_24057 = state_24016__$1;
(statearr_24024_24057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (15))){
var inst_23966 = (state_24016[(13)]);
var inst_23963 = inst_23966;
var state_24016__$1 = (function (){var statearr_24025 = state_24016;
(statearr_24025[(7)] = inst_23963);

return statearr_24025;
})();
var statearr_24026_24058 = state_24016__$1;
(statearr_24026_24058[(2)] = null);

(statearr_24026_24058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (13))){
var inst_23998 = (state_24016[(2)]);
var state_24016__$1 = state_24016;
if(cljs.core.truth_(inst_23998)){
var statearr_24027_24059 = state_24016__$1;
(statearr_24027_24059[(1)] = (14));

} else {
var statearr_24028_24060 = state_24016__$1;
(statearr_24028_24060[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (6))){
var inst_23990 = (state_24016[(14)]);
var inst_23976 = (state_24016[(12)]);
var inst_23967 = (state_24016[(15)]);
var inst_23990__$1 = inst_23967.call(null,inst_23976);
var state_24016__$1 = (function (){var statearr_24029 = state_24016;
(statearr_24029[(14)] = inst_23990__$1);

return statearr_24029;
})();
if(cljs.core.truth_(inst_23990__$1)){
var statearr_24030_24061 = state_24016__$1;
(statearr_24030_24061[(1)] = (11));

} else {
var statearr_24031_24062 = state_24016__$1;
(statearr_24031_24062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (17))){
var inst_24001 = (state_24016[(2)]);
var state_24016__$1 = state_24016;
if(cljs.core.truth_(inst_24001)){
var statearr_24032_24063 = state_24016__$1;
(statearr_24032_24063[(1)] = (18));

} else {
var statearr_24033_24064 = state_24016__$1;
(statearr_24033_24064[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (3))){
var inst_24014 = (state_24016[(2)]);
var state_24016__$1 = state_24016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24016__$1,inst_24014);
} else {
if((state_val_24017 === (12))){
var inst_23976 = (state_24016[(12)]);
var inst_23967 = (state_24016[(15)]);
var inst_23968 = (state_24016[(16)]);
var inst_23993 = cljs.core.empty_QMARK_.call(null,inst_23967);
var inst_23994 = inst_23968.call(null,inst_23976);
var inst_23995 = cljs.core.not.call(null,inst_23994);
var inst_23996 = ((inst_23993) && (inst_23995));
var state_24016__$1 = state_24016;
var statearr_24034_24065 = state_24016__$1;
(statearr_24034_24065[(2)] = inst_23996);

(statearr_24034_24065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (2))){
var inst_23963 = (state_24016[(7)]);
var inst_23966 = (state_24016[(13)]);
var inst_23966__$1 = cljs.core.__destructure_map.call(null,inst_23963);
var inst_23967 = cljs.core.get.call(null,inst_23966__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23968 = cljs.core.get.call(null,inst_23966__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23969 = cljs.core.get.call(null,inst_23966__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24016__$1 = (function (){var statearr_24035 = state_24016;
(statearr_24035[(13)] = inst_23966__$1);

(statearr_24035[(15)] = inst_23967);

(statearr_24035[(16)] = inst_23968);

return statearr_24035;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24016__$1,(4),inst_23969);
} else {
if((state_val_24017 === (19))){
var state_24016__$1 = state_24016;
var statearr_24036_24066 = state_24016__$1;
(statearr_24036_24066[(2)] = null);

(statearr_24036_24066[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (11))){
var inst_23990 = (state_24016[(14)]);
var state_24016__$1 = state_24016;
var statearr_24037_24067 = state_24016__$1;
(statearr_24037_24067[(2)] = inst_23990);

(statearr_24037_24067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (9))){
var state_24016__$1 = state_24016;
var statearr_24038_24068 = state_24016__$1;
(statearr_24038_24068[(2)] = null);

(statearr_24038_24068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (5))){
var inst_23975 = (state_24016[(11)]);
var inst_23981 = (inst_23975 == null);
var state_24016__$1 = state_24016;
if(cljs.core.truth_(inst_23981)){
var statearr_24039_24069 = state_24016__$1;
(statearr_24039_24069[(1)] = (8));

} else {
var statearr_24040_24070 = state_24016__$1;
(statearr_24040_24070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (14))){
var inst_23975 = (state_24016[(11)]);
var state_24016__$1 = state_24016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24016__$1,(17),out,inst_23975);
} else {
if((state_val_24017 === (16))){
var inst_24010 = (state_24016[(2)]);
var state_24016__$1 = state_24016;
var statearr_24041_24071 = state_24016__$1;
(statearr_24041_24071[(2)] = inst_24010);

(statearr_24041_24071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (10))){
var inst_23986 = (state_24016[(2)]);
var inst_23987 = calc_state.call(null);
var inst_23963 = inst_23987;
var state_24016__$1 = (function (){var statearr_24042 = state_24016;
(statearr_24042[(17)] = inst_23986);

(statearr_24042[(7)] = inst_23963);

return statearr_24042;
})();
var statearr_24043_24072 = state_24016__$1;
(statearr_24043_24072[(2)] = null);

(statearr_24043_24072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (18))){
var inst_23966 = (state_24016[(13)]);
var inst_23963 = inst_23966;
var state_24016__$1 = (function (){var statearr_24044 = state_24016;
(statearr_24044[(7)] = inst_23963);

return statearr_24044;
})();
var statearr_24045_24073 = state_24016__$1;
(statearr_24045_24073[(2)] = null);

(statearr_24045_24073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24017 === (8))){
var inst_23976 = (state_24016[(12)]);
var inst_23983 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23976);
var state_24016__$1 = state_24016;
var statearr_24046_24074 = state_24016__$1;
(statearr_24046_24074[(2)] = inst_23983);

(statearr_24046_24074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17949__auto__ = null;
var cljs$core$async$mix_$_state_machine__17949__auto____0 = (function (){
var statearr_24047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24047[(0)] = cljs$core$async$mix_$_state_machine__17949__auto__);

(statearr_24047[(1)] = (1));

return statearr_24047;
});
var cljs$core$async$mix_$_state_machine__17949__auto____1 = (function (state_24016){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24048){var ex__17952__auto__ = e24048;
var statearr_24049_24075 = state_24016;
(statearr_24049_24075[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24016[(4)]))){
var statearr_24050_24076 = state_24016;
(statearr_24050_24076[(1)] = cljs.core.first.call(null,(state_24016[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24077 = state_24016;
state_24016 = G__24077;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17949__auto__ = function(state_24016){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17949__auto____1.call(this,state_24016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17949__auto____0;
cljs$core$async$mix_$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17949__auto____1;
return cljs$core$async$mix_$_state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24051 = f__17972__auto__.call(null);
(statearr_24051[(6)] = c__17971__auto___24052);

return statearr_24051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_24080 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_24080.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24081 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_24081.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24082 = (function() {
var G__24083 = null;
var G__24083__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__24083__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__24083 = function(p,v){
switch(arguments.length){
case 1:
return G__24083__1.call(this,p);
case 2:
return G__24083__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24083.cljs$core$IFn$_invoke$arity$1 = G__24083__1;
G__24083.cljs$core$IFn$_invoke$arity$2 = G__24083__2;
return G__24083;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24079 = arguments.length;
switch (G__24079) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24082.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24082.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24087 = arguments.length;
switch (G__24087) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__24085_SHARP_){
if(cljs.core.truth_(p1__24085_SHARP_.call(null,topic))){
return p1__24085_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24085_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24088 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24089){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24089 = meta24089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24090,meta24089__$1){
var self__ = this;
var _24090__$1 = this;
return (new cljs.core.async.t_cljs$core$async24088(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24089__$1));
}));

(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24090){
var self__ = this;
var _24090__$1 = this;
return self__.meta24089;
}));

(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24089","meta24089",1721810909,null)], null);
}));

(cljs.core.async.t_cljs$core$async24088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24088");

(cljs.core.async.t_cljs$core$async24088.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24088.
 */
cljs.core.async.__GT_t_cljs$core$async24088 = (function cljs$core$async$__GT_t_cljs$core$async24088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24089){
return (new cljs.core.async.t_cljs$core$async24088(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24089));
});

}

return (new cljs.core.async.t_cljs$core$async24088(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17971__auto___24209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24162){
var state_val_24163 = (state_24162[(1)]);
if((state_val_24163 === (7))){
var inst_24158 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24164_24210 = state_24162__$1;
(statearr_24164_24210[(2)] = inst_24158);

(statearr_24164_24210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (20))){
var state_24162__$1 = state_24162;
var statearr_24165_24211 = state_24162__$1;
(statearr_24165_24211[(2)] = null);

(statearr_24165_24211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (1))){
var state_24162__$1 = state_24162;
var statearr_24166_24212 = state_24162__$1;
(statearr_24166_24212[(2)] = null);

(statearr_24166_24212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (24))){
var inst_24141 = (state_24162[(7)]);
var inst_24150 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24141);
var state_24162__$1 = state_24162;
var statearr_24167_24213 = state_24162__$1;
(statearr_24167_24213[(2)] = inst_24150);

(statearr_24167_24213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (4))){
var inst_24093 = (state_24162[(8)]);
var inst_24093__$1 = (state_24162[(2)]);
var inst_24094 = (inst_24093__$1 == null);
var state_24162__$1 = (function (){var statearr_24168 = state_24162;
(statearr_24168[(8)] = inst_24093__$1);

return statearr_24168;
})();
if(cljs.core.truth_(inst_24094)){
var statearr_24169_24214 = state_24162__$1;
(statearr_24169_24214[(1)] = (5));

} else {
var statearr_24170_24215 = state_24162__$1;
(statearr_24170_24215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (15))){
var inst_24135 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24171_24216 = state_24162__$1;
(statearr_24171_24216[(2)] = inst_24135);

(statearr_24171_24216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (21))){
var inst_24155 = (state_24162[(2)]);
var state_24162__$1 = (function (){var statearr_24172 = state_24162;
(statearr_24172[(9)] = inst_24155);

return statearr_24172;
})();
var statearr_24173_24217 = state_24162__$1;
(statearr_24173_24217[(2)] = null);

(statearr_24173_24217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (13))){
var inst_24117 = (state_24162[(10)]);
var inst_24119 = cljs.core.chunked_seq_QMARK_.call(null,inst_24117);
var state_24162__$1 = state_24162;
if(inst_24119){
var statearr_24174_24218 = state_24162__$1;
(statearr_24174_24218[(1)] = (16));

} else {
var statearr_24175_24219 = state_24162__$1;
(statearr_24175_24219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (22))){
var inst_24147 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
if(cljs.core.truth_(inst_24147)){
var statearr_24176_24220 = state_24162__$1;
(statearr_24176_24220[(1)] = (23));

} else {
var statearr_24177_24221 = state_24162__$1;
(statearr_24177_24221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (6))){
var inst_24093 = (state_24162[(8)]);
var inst_24141 = (state_24162[(7)]);
var inst_24143 = (state_24162[(11)]);
var inst_24141__$1 = topic_fn.call(null,inst_24093);
var inst_24142 = cljs.core.deref.call(null,mults);
var inst_24143__$1 = cljs.core.get.call(null,inst_24142,inst_24141__$1);
var state_24162__$1 = (function (){var statearr_24178 = state_24162;
(statearr_24178[(7)] = inst_24141__$1);

(statearr_24178[(11)] = inst_24143__$1);

return statearr_24178;
})();
if(cljs.core.truth_(inst_24143__$1)){
var statearr_24179_24222 = state_24162__$1;
(statearr_24179_24222[(1)] = (19));

} else {
var statearr_24180_24223 = state_24162__$1;
(statearr_24180_24223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (25))){
var inst_24152 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24181_24224 = state_24162__$1;
(statearr_24181_24224[(2)] = inst_24152);

(statearr_24181_24224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (17))){
var inst_24117 = (state_24162[(10)]);
var inst_24126 = cljs.core.first.call(null,inst_24117);
var inst_24127 = cljs.core.async.muxch_STAR_.call(null,inst_24126);
var inst_24128 = cljs.core.async.close_BANG_.call(null,inst_24127);
var inst_24129 = cljs.core.next.call(null,inst_24117);
var inst_24103 = inst_24129;
var inst_24104 = null;
var inst_24105 = (0);
var inst_24106 = (0);
var state_24162__$1 = (function (){var statearr_24182 = state_24162;
(statearr_24182[(12)] = inst_24103);

(statearr_24182[(13)] = inst_24105);

(statearr_24182[(14)] = inst_24128);

(statearr_24182[(15)] = inst_24106);

(statearr_24182[(16)] = inst_24104);

return statearr_24182;
})();
var statearr_24183_24225 = state_24162__$1;
(statearr_24183_24225[(2)] = null);

(statearr_24183_24225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (3))){
var inst_24160 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24162__$1,inst_24160);
} else {
if((state_val_24163 === (12))){
var inst_24137 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24184_24226 = state_24162__$1;
(statearr_24184_24226[(2)] = inst_24137);

(statearr_24184_24226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (2))){
var state_24162__$1 = state_24162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24162__$1,(4),ch);
} else {
if((state_val_24163 === (23))){
var state_24162__$1 = state_24162;
var statearr_24185_24227 = state_24162__$1;
(statearr_24185_24227[(2)] = null);

(statearr_24185_24227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (19))){
var inst_24093 = (state_24162[(8)]);
var inst_24143 = (state_24162[(11)]);
var inst_24145 = cljs.core.async.muxch_STAR_.call(null,inst_24143);
var state_24162__$1 = state_24162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24162__$1,(22),inst_24145,inst_24093);
} else {
if((state_val_24163 === (11))){
var inst_24103 = (state_24162[(12)]);
var inst_24117 = (state_24162[(10)]);
var inst_24117__$1 = cljs.core.seq.call(null,inst_24103);
var state_24162__$1 = (function (){var statearr_24186 = state_24162;
(statearr_24186[(10)] = inst_24117__$1);

return statearr_24186;
})();
if(inst_24117__$1){
var statearr_24187_24228 = state_24162__$1;
(statearr_24187_24228[(1)] = (13));

} else {
var statearr_24188_24229 = state_24162__$1;
(statearr_24188_24229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (9))){
var inst_24139 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24189_24230 = state_24162__$1;
(statearr_24189_24230[(2)] = inst_24139);

(statearr_24189_24230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (5))){
var inst_24100 = cljs.core.deref.call(null,mults);
var inst_24101 = cljs.core.vals.call(null,inst_24100);
var inst_24102 = cljs.core.seq.call(null,inst_24101);
var inst_24103 = inst_24102;
var inst_24104 = null;
var inst_24105 = (0);
var inst_24106 = (0);
var state_24162__$1 = (function (){var statearr_24190 = state_24162;
(statearr_24190[(12)] = inst_24103);

(statearr_24190[(13)] = inst_24105);

(statearr_24190[(15)] = inst_24106);

(statearr_24190[(16)] = inst_24104);

return statearr_24190;
})();
var statearr_24191_24231 = state_24162__$1;
(statearr_24191_24231[(2)] = null);

(statearr_24191_24231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (14))){
var state_24162__$1 = state_24162;
var statearr_24195_24232 = state_24162__$1;
(statearr_24195_24232[(2)] = null);

(statearr_24195_24232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (16))){
var inst_24117 = (state_24162[(10)]);
var inst_24121 = cljs.core.chunk_first.call(null,inst_24117);
var inst_24122 = cljs.core.chunk_rest.call(null,inst_24117);
var inst_24123 = cljs.core.count.call(null,inst_24121);
var inst_24103 = inst_24122;
var inst_24104 = inst_24121;
var inst_24105 = inst_24123;
var inst_24106 = (0);
var state_24162__$1 = (function (){var statearr_24196 = state_24162;
(statearr_24196[(12)] = inst_24103);

(statearr_24196[(13)] = inst_24105);

(statearr_24196[(15)] = inst_24106);

(statearr_24196[(16)] = inst_24104);

return statearr_24196;
})();
var statearr_24197_24233 = state_24162__$1;
(statearr_24197_24233[(2)] = null);

(statearr_24197_24233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (10))){
var inst_24103 = (state_24162[(12)]);
var inst_24105 = (state_24162[(13)]);
var inst_24106 = (state_24162[(15)]);
var inst_24104 = (state_24162[(16)]);
var inst_24111 = cljs.core._nth.call(null,inst_24104,inst_24106);
var inst_24112 = cljs.core.async.muxch_STAR_.call(null,inst_24111);
var inst_24113 = cljs.core.async.close_BANG_.call(null,inst_24112);
var inst_24114 = (inst_24106 + (1));
var tmp24192 = inst_24103;
var tmp24193 = inst_24105;
var tmp24194 = inst_24104;
var inst_24103__$1 = tmp24192;
var inst_24104__$1 = tmp24194;
var inst_24105__$1 = tmp24193;
var inst_24106__$1 = inst_24114;
var state_24162__$1 = (function (){var statearr_24198 = state_24162;
(statearr_24198[(12)] = inst_24103__$1);

(statearr_24198[(13)] = inst_24105__$1);

(statearr_24198[(15)] = inst_24106__$1);

(statearr_24198[(17)] = inst_24113);

(statearr_24198[(16)] = inst_24104__$1);

return statearr_24198;
})();
var statearr_24199_24234 = state_24162__$1;
(statearr_24199_24234[(2)] = null);

(statearr_24199_24234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (18))){
var inst_24132 = (state_24162[(2)]);
var state_24162__$1 = state_24162;
var statearr_24200_24235 = state_24162__$1;
(statearr_24200_24235[(2)] = inst_24132);

(statearr_24200_24235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (8))){
var inst_24105 = (state_24162[(13)]);
var inst_24106 = (state_24162[(15)]);
var inst_24108 = (inst_24106 < inst_24105);
var inst_24109 = inst_24108;
var state_24162__$1 = state_24162;
if(cljs.core.truth_(inst_24109)){
var statearr_24201_24236 = state_24162__$1;
(statearr_24201_24236[(1)] = (10));

} else {
var statearr_24202_24237 = state_24162__$1;
(statearr_24202_24237[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_24203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24203[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_24203[(1)] = (1));

return statearr_24203;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_24162){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24204){var ex__17952__auto__ = e24204;
var statearr_24205_24238 = state_24162;
(statearr_24205_24238[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24162[(4)]))){
var statearr_24206_24239 = state_24162;
(statearr_24206_24239[(1)] = cljs.core.first.call(null,(state_24162[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24240 = state_24162;
state_24162 = G__24240;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_24162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_24162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24207 = f__17972__auto__.call(null);
(statearr_24207[(6)] = c__17971__auto___24209);

return statearr_24207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24242 = arguments.length;
switch (G__24242) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24245 = arguments.length;
switch (G__24245) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24248 = arguments.length;
switch (G__24248) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__17971__auto___24326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24291){
var state_val_24292 = (state_24291[(1)]);
if((state_val_24292 === (7))){
var state_24291__$1 = state_24291;
var statearr_24293_24327 = state_24291__$1;
(statearr_24293_24327[(2)] = null);

(statearr_24293_24327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (1))){
var state_24291__$1 = state_24291;
var statearr_24294_24328 = state_24291__$1;
(statearr_24294_24328[(2)] = null);

(statearr_24294_24328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (4))){
var inst_24252 = (state_24291[(7)]);
var inst_24251 = (state_24291[(8)]);
var inst_24254 = (inst_24252 < inst_24251);
var state_24291__$1 = state_24291;
if(cljs.core.truth_(inst_24254)){
var statearr_24295_24329 = state_24291__$1;
(statearr_24295_24329[(1)] = (6));

} else {
var statearr_24296_24330 = state_24291__$1;
(statearr_24296_24330[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (15))){
var inst_24277 = (state_24291[(9)]);
var inst_24282 = cljs.core.apply.call(null,f,inst_24277);
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24291__$1,(17),out,inst_24282);
} else {
if((state_val_24292 === (13))){
var inst_24277 = (state_24291[(9)]);
var inst_24277__$1 = (state_24291[(2)]);
var inst_24278 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24277__$1);
var state_24291__$1 = (function (){var statearr_24297 = state_24291;
(statearr_24297[(9)] = inst_24277__$1);

return statearr_24297;
})();
if(cljs.core.truth_(inst_24278)){
var statearr_24298_24331 = state_24291__$1;
(statearr_24298_24331[(1)] = (14));

} else {
var statearr_24299_24332 = state_24291__$1;
(statearr_24299_24332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (6))){
var state_24291__$1 = state_24291;
var statearr_24300_24333 = state_24291__$1;
(statearr_24300_24333[(2)] = null);

(statearr_24300_24333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (17))){
var inst_24284 = (state_24291[(2)]);
var state_24291__$1 = (function (){var statearr_24302 = state_24291;
(statearr_24302[(10)] = inst_24284);

return statearr_24302;
})();
var statearr_24303_24334 = state_24291__$1;
(statearr_24303_24334[(2)] = null);

(statearr_24303_24334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (3))){
var inst_24289 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24291__$1,inst_24289);
} else {
if((state_val_24292 === (12))){
var _ = (function (){var statearr_24304 = state_24291;
(statearr_24304[(4)] = cljs.core.rest.call(null,(state_24291[(4)])));

return statearr_24304;
})();
var state_24291__$1 = state_24291;
var ex24301 = (state_24291__$1[(2)]);
var statearr_24305_24335 = state_24291__$1;
(statearr_24305_24335[(5)] = ex24301);


if((ex24301 instanceof Object)){
var statearr_24306_24336 = state_24291__$1;
(statearr_24306_24336[(1)] = (11));

(statearr_24306_24336[(5)] = null);

} else {
throw ex24301;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (2))){
var inst_24250 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24251 = cnt;
var inst_24252 = (0);
var state_24291__$1 = (function (){var statearr_24307 = state_24291;
(statearr_24307[(7)] = inst_24252);

(statearr_24307[(11)] = inst_24250);

(statearr_24307[(8)] = inst_24251);

return statearr_24307;
})();
var statearr_24308_24337 = state_24291__$1;
(statearr_24308_24337[(2)] = null);

(statearr_24308_24337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (11))){
var inst_24256 = (state_24291[(2)]);
var inst_24257 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24291__$1 = (function (){var statearr_24309 = state_24291;
(statearr_24309[(12)] = inst_24256);

return statearr_24309;
})();
var statearr_24310_24338 = state_24291__$1;
(statearr_24310_24338[(2)] = inst_24257);

(statearr_24310_24338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (9))){
var inst_24252 = (state_24291[(7)]);
var _ = (function (){var statearr_24311 = state_24291;
(statearr_24311[(4)] = cljs.core.cons.call(null,(12),(state_24291[(4)])));

return statearr_24311;
})();
var inst_24263 = chs__$1.call(null,inst_24252);
var inst_24264 = done.call(null,inst_24252);
var inst_24265 = cljs.core.async.take_BANG_.call(null,inst_24263,inst_24264);
var ___$1 = (function (){var statearr_24312 = state_24291;
(statearr_24312[(4)] = cljs.core.rest.call(null,(state_24291[(4)])));

return statearr_24312;
})();
var state_24291__$1 = state_24291;
var statearr_24313_24339 = state_24291__$1;
(statearr_24313_24339[(2)] = inst_24265);

(statearr_24313_24339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (5))){
var inst_24275 = (state_24291[(2)]);
var state_24291__$1 = (function (){var statearr_24314 = state_24291;
(statearr_24314[(13)] = inst_24275);

return statearr_24314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24291__$1,(13),dchan);
} else {
if((state_val_24292 === (14))){
var inst_24280 = cljs.core.async.close_BANG_.call(null,out);
var state_24291__$1 = state_24291;
var statearr_24315_24340 = state_24291__$1;
(statearr_24315_24340[(2)] = inst_24280);

(statearr_24315_24340[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (16))){
var inst_24287 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
var statearr_24316_24341 = state_24291__$1;
(statearr_24316_24341[(2)] = inst_24287);

(statearr_24316_24341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (10))){
var inst_24252 = (state_24291[(7)]);
var inst_24268 = (state_24291[(2)]);
var inst_24269 = (inst_24252 + (1));
var inst_24252__$1 = inst_24269;
var state_24291__$1 = (function (){var statearr_24317 = state_24291;
(statearr_24317[(7)] = inst_24252__$1);

(statearr_24317[(14)] = inst_24268);

return statearr_24317;
})();
var statearr_24318_24342 = state_24291__$1;
(statearr_24318_24342[(2)] = null);

(statearr_24318_24342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (8))){
var inst_24273 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
var statearr_24319_24343 = state_24291__$1;
(statearr_24319_24343[(2)] = inst_24273);

(statearr_24319_24343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_24320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24320[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_24320[(1)] = (1));

return statearr_24320;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_24291){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24321){var ex__17952__auto__ = e24321;
var statearr_24322_24344 = state_24291;
(statearr_24322_24344[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24291[(4)]))){
var statearr_24323_24345 = state_24291;
(statearr_24323_24345[(1)] = cljs.core.first.call(null,(state_24291[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24346 = state_24291;
state_24291 = G__24346;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_24291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_24291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24324 = f__17972__auto__.call(null);
(statearr_24324[(6)] = c__17971__auto___24326);

return statearr_24324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24349 = arguments.length;
switch (G__24349) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17971__auto___24404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24381){
var state_val_24382 = (state_24381[(1)]);
if((state_val_24382 === (7))){
var inst_24360 = (state_24381[(7)]);
var inst_24361 = (state_24381[(8)]);
var inst_24360__$1 = (state_24381[(2)]);
var inst_24361__$1 = cljs.core.nth.call(null,inst_24360__$1,(0),null);
var inst_24362 = cljs.core.nth.call(null,inst_24360__$1,(1),null);
var inst_24363 = (inst_24361__$1 == null);
var state_24381__$1 = (function (){var statearr_24383 = state_24381;
(statearr_24383[(7)] = inst_24360__$1);

(statearr_24383[(8)] = inst_24361__$1);

(statearr_24383[(9)] = inst_24362);

return statearr_24383;
})();
if(cljs.core.truth_(inst_24363)){
var statearr_24384_24405 = state_24381__$1;
(statearr_24384_24405[(1)] = (8));

} else {
var statearr_24385_24406 = state_24381__$1;
(statearr_24385_24406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (1))){
var inst_24350 = cljs.core.vec.call(null,chs);
var inst_24351 = inst_24350;
var state_24381__$1 = (function (){var statearr_24386 = state_24381;
(statearr_24386[(10)] = inst_24351);

return statearr_24386;
})();
var statearr_24387_24407 = state_24381__$1;
(statearr_24387_24407[(2)] = null);

(statearr_24387_24407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (4))){
var inst_24351 = (state_24381[(10)]);
var state_24381__$1 = state_24381;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24381__$1,(7),inst_24351);
} else {
if((state_val_24382 === (6))){
var inst_24377 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24388_24408 = state_24381__$1;
(statearr_24388_24408[(2)] = inst_24377);

(statearr_24388_24408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (3))){
var inst_24379 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24381__$1,inst_24379);
} else {
if((state_val_24382 === (2))){
var inst_24351 = (state_24381[(10)]);
var inst_24353 = cljs.core.count.call(null,inst_24351);
var inst_24354 = (inst_24353 > (0));
var state_24381__$1 = state_24381;
if(cljs.core.truth_(inst_24354)){
var statearr_24390_24409 = state_24381__$1;
(statearr_24390_24409[(1)] = (4));

} else {
var statearr_24391_24410 = state_24381__$1;
(statearr_24391_24410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (11))){
var inst_24351 = (state_24381[(10)]);
var inst_24370 = (state_24381[(2)]);
var tmp24389 = inst_24351;
var inst_24351__$1 = tmp24389;
var state_24381__$1 = (function (){var statearr_24392 = state_24381;
(statearr_24392[(11)] = inst_24370);

(statearr_24392[(10)] = inst_24351__$1);

return statearr_24392;
})();
var statearr_24393_24411 = state_24381__$1;
(statearr_24393_24411[(2)] = null);

(statearr_24393_24411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (9))){
var inst_24361 = (state_24381[(8)]);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24381__$1,(11),out,inst_24361);
} else {
if((state_val_24382 === (5))){
var inst_24375 = cljs.core.async.close_BANG_.call(null,out);
var state_24381__$1 = state_24381;
var statearr_24394_24412 = state_24381__$1;
(statearr_24394_24412[(2)] = inst_24375);

(statearr_24394_24412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (10))){
var inst_24373 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24395_24413 = state_24381__$1;
(statearr_24395_24413[(2)] = inst_24373);

(statearr_24395_24413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (8))){
var inst_24360 = (state_24381[(7)]);
var inst_24361 = (state_24381[(8)]);
var inst_24362 = (state_24381[(9)]);
var inst_24351 = (state_24381[(10)]);
var inst_24365 = (function (){var cs = inst_24351;
var vec__24356 = inst_24360;
var v = inst_24361;
var c = inst_24362;
return (function (p1__24347_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24347_SHARP_);
});
})();
var inst_24366 = cljs.core.filterv.call(null,inst_24365,inst_24351);
var inst_24351__$1 = inst_24366;
var state_24381__$1 = (function (){var statearr_24396 = state_24381;
(statearr_24396[(10)] = inst_24351__$1);

return statearr_24396;
})();
var statearr_24397_24414 = state_24381__$1;
(statearr_24397_24414[(2)] = null);

(statearr_24397_24414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_24398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24398[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_24398[(1)] = (1));

return statearr_24398;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_24381){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24399){var ex__17952__auto__ = e24399;
var statearr_24400_24415 = state_24381;
(statearr_24400_24415[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24381[(4)]))){
var statearr_24401_24416 = state_24381;
(statearr_24401_24416[(1)] = cljs.core.first.call(null,(state_24381[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24417 = state_24381;
state_24381 = G__24417;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_24381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_24381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24402 = f__17972__auto__.call(null);
(statearr_24402[(6)] = c__17971__auto___24404);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24419 = arguments.length;
switch (G__24419) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17971__auto___24465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24443){
var state_val_24444 = (state_24443[(1)]);
if((state_val_24444 === (7))){
var inst_24425 = (state_24443[(7)]);
var inst_24425__$1 = (state_24443[(2)]);
var inst_24426 = (inst_24425__$1 == null);
var inst_24427 = cljs.core.not.call(null,inst_24426);
var state_24443__$1 = (function (){var statearr_24445 = state_24443;
(statearr_24445[(7)] = inst_24425__$1);

return statearr_24445;
})();
if(inst_24427){
var statearr_24446_24466 = state_24443__$1;
(statearr_24446_24466[(1)] = (8));

} else {
var statearr_24447_24467 = state_24443__$1;
(statearr_24447_24467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (1))){
var inst_24420 = (0);
var state_24443__$1 = (function (){var statearr_24448 = state_24443;
(statearr_24448[(8)] = inst_24420);

return statearr_24448;
})();
var statearr_24449_24468 = state_24443__$1;
(statearr_24449_24468[(2)] = null);

(statearr_24449_24468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (4))){
var state_24443__$1 = state_24443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24443__$1,(7),ch);
} else {
if((state_val_24444 === (6))){
var inst_24438 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
var statearr_24450_24469 = state_24443__$1;
(statearr_24450_24469[(2)] = inst_24438);

(statearr_24450_24469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (3))){
var inst_24440 = (state_24443[(2)]);
var inst_24441 = cljs.core.async.close_BANG_.call(null,out);
var state_24443__$1 = (function (){var statearr_24451 = state_24443;
(statearr_24451[(9)] = inst_24440);

return statearr_24451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24443__$1,inst_24441);
} else {
if((state_val_24444 === (2))){
var inst_24420 = (state_24443[(8)]);
var inst_24422 = (inst_24420 < n);
var state_24443__$1 = state_24443;
if(cljs.core.truth_(inst_24422)){
var statearr_24452_24470 = state_24443__$1;
(statearr_24452_24470[(1)] = (4));

} else {
var statearr_24453_24471 = state_24443__$1;
(statearr_24453_24471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (11))){
var inst_24420 = (state_24443[(8)]);
var inst_24430 = (state_24443[(2)]);
var inst_24431 = (inst_24420 + (1));
var inst_24420__$1 = inst_24431;
var state_24443__$1 = (function (){var statearr_24454 = state_24443;
(statearr_24454[(8)] = inst_24420__$1);

(statearr_24454[(10)] = inst_24430);

return statearr_24454;
})();
var statearr_24455_24472 = state_24443__$1;
(statearr_24455_24472[(2)] = null);

(statearr_24455_24472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (9))){
var state_24443__$1 = state_24443;
var statearr_24456_24473 = state_24443__$1;
(statearr_24456_24473[(2)] = null);

(statearr_24456_24473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (5))){
var state_24443__$1 = state_24443;
var statearr_24457_24474 = state_24443__$1;
(statearr_24457_24474[(2)] = null);

(statearr_24457_24474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (10))){
var inst_24435 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
var statearr_24458_24475 = state_24443__$1;
(statearr_24458_24475[(2)] = inst_24435);

(statearr_24458_24475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (8))){
var inst_24425 = (state_24443[(7)]);
var state_24443__$1 = state_24443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24443__$1,(11),out,inst_24425);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_24459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24459[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_24459[(1)] = (1));

return statearr_24459;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_24443){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24460){var ex__17952__auto__ = e24460;
var statearr_24461_24476 = state_24443;
(statearr_24461_24476[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24443[(4)]))){
var statearr_24462_24477 = state_24443;
(statearr_24462_24477[(1)] = cljs.core.first.call(null,(state_24443[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24478 = state_24443;
state_24443 = G__24478;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_24443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_24443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24463 = f__17972__auto__.call(null);
(statearr_24463[(6)] = c__17971__auto___24465);

return statearr_24463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24480 = (function (f,ch,meta24481){
this.f = f;
this.ch = ch;
this.meta24481 = meta24481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24482,meta24481__$1){
var self__ = this;
var _24482__$1 = this;
return (new cljs.core.async.t_cljs$core$async24480(self__.f,self__.ch,meta24481__$1));
}));

(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24482){
var self__ = this;
var _24482__$1 = this;
return self__.meta24481;
}));

(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24483 = (function (f,ch,meta24481,_,fn1,meta24484){
this.f = f;
this.ch = ch;
this.meta24481 = meta24481;
this._ = _;
this.fn1 = fn1;
this.meta24484 = meta24484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24485,meta24484__$1){
var self__ = this;
var _24485__$1 = this;
return (new cljs.core.async.t_cljs$core$async24483(self__.f,self__.ch,self__.meta24481,self__._,self__.fn1,meta24484__$1));
}));

(cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24485){
var self__ = this;
var _24485__$1 = this;
return self__.meta24484;
}));

(cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__24479_SHARP_){
return f1.call(null,(((p1__24479_SHARP_ == null))?null:self__.f.call(null,p1__24479_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async24483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24481","meta24481",-30208107,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24480","cljs.core.async/t_cljs$core$async24480",1676628122,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24484","meta24484",1160227628,null)], null);
}));

(cljs.core.async.t_cljs$core$async24483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24483");

(cljs.core.async.t_cljs$core$async24483.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24483.
 */
cljs.core.async.__GT_t_cljs$core$async24483 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24483(f__$1,ch__$1,meta24481__$1,___$2,fn1__$1,meta24484){
return (new cljs.core.async.t_cljs$core$async24483(f__$1,ch__$1,meta24481__$1,___$2,fn1__$1,meta24484));
});

}

return (new cljs.core.async.t_cljs$core$async24483(self__.f,self__.ch,self__.meta24481,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24481","meta24481",-30208107,null)], null);
}));

(cljs.core.async.t_cljs$core$async24480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24480");

(cljs.core.async.t_cljs$core$async24480.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24480.
 */
cljs.core.async.__GT_t_cljs$core$async24480 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24480(f__$1,ch__$1,meta24481){
return (new cljs.core.async.t_cljs$core$async24480(f__$1,ch__$1,meta24481));
});

}

return (new cljs.core.async.t_cljs$core$async24480(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24486 = (function (f,ch,meta24487){
this.f = f;
this.ch = ch;
this.meta24487 = meta24487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24488,meta24487__$1){
var self__ = this;
var _24488__$1 = this;
return (new cljs.core.async.t_cljs$core$async24486(self__.f,self__.ch,meta24487__$1));
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24488){
var self__ = this;
var _24488__$1 = this;
return self__.meta24487;
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async24486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24487","meta24487",-480921984,null)], null);
}));

(cljs.core.async.t_cljs$core$async24486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24486");

(cljs.core.async.t_cljs$core$async24486.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24486.
 */
cljs.core.async.__GT_t_cljs$core$async24486 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24486(f__$1,ch__$1,meta24487){
return (new cljs.core.async.t_cljs$core$async24486(f__$1,ch__$1,meta24487));
});

}

return (new cljs.core.async.t_cljs$core$async24486(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24489 = (function (p,ch,meta24490){
this.p = p;
this.ch = ch;
this.meta24490 = meta24490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24491,meta24490__$1){
var self__ = this;
var _24491__$1 = this;
return (new cljs.core.async.t_cljs$core$async24489(self__.p,self__.ch,meta24490__$1));
}));

(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24491){
var self__ = this;
var _24491__$1 = this;
return self__.meta24490;
}));

(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24490","meta24490",-1918624213,null)], null);
}));

(cljs.core.async.t_cljs$core$async24489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24489");

(cljs.core.async.t_cljs$core$async24489.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24489.
 */
cljs.core.async.__GT_t_cljs$core$async24489 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24489(p__$1,ch__$1,meta24490){
return (new cljs.core.async.t_cljs$core$async24489(p__$1,ch__$1,meta24490));
});

}

return (new cljs.core.async.t_cljs$core$async24489(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24493 = arguments.length;
switch (G__24493) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17971__auto___24534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24514){
var state_val_24515 = (state_24514[(1)]);
if((state_val_24515 === (7))){
var inst_24510 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24516_24535 = state_24514__$1;
(statearr_24516_24535[(2)] = inst_24510);

(statearr_24516_24535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (1))){
var state_24514__$1 = state_24514;
var statearr_24517_24536 = state_24514__$1;
(statearr_24517_24536[(2)] = null);

(statearr_24517_24536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (4))){
var inst_24496 = (state_24514[(7)]);
var inst_24496__$1 = (state_24514[(2)]);
var inst_24497 = (inst_24496__$1 == null);
var state_24514__$1 = (function (){var statearr_24518 = state_24514;
(statearr_24518[(7)] = inst_24496__$1);

return statearr_24518;
})();
if(cljs.core.truth_(inst_24497)){
var statearr_24519_24537 = state_24514__$1;
(statearr_24519_24537[(1)] = (5));

} else {
var statearr_24520_24538 = state_24514__$1;
(statearr_24520_24538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (6))){
var inst_24496 = (state_24514[(7)]);
var inst_24501 = p.call(null,inst_24496);
var state_24514__$1 = state_24514;
if(cljs.core.truth_(inst_24501)){
var statearr_24521_24539 = state_24514__$1;
(statearr_24521_24539[(1)] = (8));

} else {
var statearr_24522_24540 = state_24514__$1;
(statearr_24522_24540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (3))){
var inst_24512 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24514__$1,inst_24512);
} else {
if((state_val_24515 === (2))){
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24514__$1,(4),ch);
} else {
if((state_val_24515 === (11))){
var inst_24504 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24523_24541 = state_24514__$1;
(statearr_24523_24541[(2)] = inst_24504);

(statearr_24523_24541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (9))){
var state_24514__$1 = state_24514;
var statearr_24524_24542 = state_24514__$1;
(statearr_24524_24542[(2)] = null);

(statearr_24524_24542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (5))){
var inst_24499 = cljs.core.async.close_BANG_.call(null,out);
var state_24514__$1 = state_24514;
var statearr_24525_24543 = state_24514__$1;
(statearr_24525_24543[(2)] = inst_24499);

(statearr_24525_24543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (10))){
var inst_24507 = (state_24514[(2)]);
var state_24514__$1 = (function (){var statearr_24526 = state_24514;
(statearr_24526[(8)] = inst_24507);

return statearr_24526;
})();
var statearr_24527_24544 = state_24514__$1;
(statearr_24527_24544[(2)] = null);

(statearr_24527_24544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (8))){
var inst_24496 = (state_24514[(7)]);
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24514__$1,(11),out,inst_24496);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_24528 = [null,null,null,null,null,null,null,null,null];
(statearr_24528[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_24528[(1)] = (1));

return statearr_24528;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_24514){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24529){var ex__17952__auto__ = e24529;
var statearr_24530_24545 = state_24514;
(statearr_24530_24545[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24514[(4)]))){
var statearr_24531_24546 = state_24514;
(statearr_24531_24546[(1)] = cljs.core.first.call(null,(state_24514[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24547 = state_24514;
state_24514 = G__24547;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_24514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_24514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24532 = f__17972__auto__.call(null);
(statearr_24532[(6)] = c__17971__auto___24534);

return statearr_24532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24549 = arguments.length;
switch (G__24549) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24612){
var state_val_24613 = (state_24612[(1)]);
if((state_val_24613 === (7))){
var inst_24608 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24614_24653 = state_24612__$1;
(statearr_24614_24653[(2)] = inst_24608);

(statearr_24614_24653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (20))){
var inst_24578 = (state_24612[(7)]);
var inst_24589 = (state_24612[(2)]);
var inst_24590 = cljs.core.next.call(null,inst_24578);
var inst_24564 = inst_24590;
var inst_24565 = null;
var inst_24566 = (0);
var inst_24567 = (0);
var state_24612__$1 = (function (){var statearr_24615 = state_24612;
(statearr_24615[(8)] = inst_24589);

(statearr_24615[(9)] = inst_24564);

(statearr_24615[(10)] = inst_24567);

(statearr_24615[(11)] = inst_24565);

(statearr_24615[(12)] = inst_24566);

return statearr_24615;
})();
var statearr_24616_24654 = state_24612__$1;
(statearr_24616_24654[(2)] = null);

(statearr_24616_24654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (1))){
var state_24612__$1 = state_24612;
var statearr_24617_24655 = state_24612__$1;
(statearr_24617_24655[(2)] = null);

(statearr_24617_24655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (4))){
var inst_24553 = (state_24612[(13)]);
var inst_24553__$1 = (state_24612[(2)]);
var inst_24554 = (inst_24553__$1 == null);
var state_24612__$1 = (function (){var statearr_24618 = state_24612;
(statearr_24618[(13)] = inst_24553__$1);

return statearr_24618;
})();
if(cljs.core.truth_(inst_24554)){
var statearr_24619_24656 = state_24612__$1;
(statearr_24619_24656[(1)] = (5));

} else {
var statearr_24620_24657 = state_24612__$1;
(statearr_24620_24657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (15))){
var state_24612__$1 = state_24612;
var statearr_24624_24658 = state_24612__$1;
(statearr_24624_24658[(2)] = null);

(statearr_24624_24658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (21))){
var state_24612__$1 = state_24612;
var statearr_24625_24659 = state_24612__$1;
(statearr_24625_24659[(2)] = null);

(statearr_24625_24659[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (13))){
var inst_24564 = (state_24612[(9)]);
var inst_24567 = (state_24612[(10)]);
var inst_24565 = (state_24612[(11)]);
var inst_24566 = (state_24612[(12)]);
var inst_24574 = (state_24612[(2)]);
var inst_24575 = (inst_24567 + (1));
var tmp24621 = inst_24564;
var tmp24622 = inst_24565;
var tmp24623 = inst_24566;
var inst_24564__$1 = tmp24621;
var inst_24565__$1 = tmp24622;
var inst_24566__$1 = tmp24623;
var inst_24567__$1 = inst_24575;
var state_24612__$1 = (function (){var statearr_24626 = state_24612;
(statearr_24626[(9)] = inst_24564__$1);

(statearr_24626[(10)] = inst_24567__$1);

(statearr_24626[(11)] = inst_24565__$1);

(statearr_24626[(14)] = inst_24574);

(statearr_24626[(12)] = inst_24566__$1);

return statearr_24626;
})();
var statearr_24627_24660 = state_24612__$1;
(statearr_24627_24660[(2)] = null);

(statearr_24627_24660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (22))){
var state_24612__$1 = state_24612;
var statearr_24628_24661 = state_24612__$1;
(statearr_24628_24661[(2)] = null);

(statearr_24628_24661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (6))){
var inst_24553 = (state_24612[(13)]);
var inst_24562 = f.call(null,inst_24553);
var inst_24563 = cljs.core.seq.call(null,inst_24562);
var inst_24564 = inst_24563;
var inst_24565 = null;
var inst_24566 = (0);
var inst_24567 = (0);
var state_24612__$1 = (function (){var statearr_24629 = state_24612;
(statearr_24629[(9)] = inst_24564);

(statearr_24629[(10)] = inst_24567);

(statearr_24629[(11)] = inst_24565);

(statearr_24629[(12)] = inst_24566);

return statearr_24629;
})();
var statearr_24630_24662 = state_24612__$1;
(statearr_24630_24662[(2)] = null);

(statearr_24630_24662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (17))){
var inst_24578 = (state_24612[(7)]);
var inst_24582 = cljs.core.chunk_first.call(null,inst_24578);
var inst_24583 = cljs.core.chunk_rest.call(null,inst_24578);
var inst_24584 = cljs.core.count.call(null,inst_24582);
var inst_24564 = inst_24583;
var inst_24565 = inst_24582;
var inst_24566 = inst_24584;
var inst_24567 = (0);
var state_24612__$1 = (function (){var statearr_24631 = state_24612;
(statearr_24631[(9)] = inst_24564);

(statearr_24631[(10)] = inst_24567);

(statearr_24631[(11)] = inst_24565);

(statearr_24631[(12)] = inst_24566);

return statearr_24631;
})();
var statearr_24632_24663 = state_24612__$1;
(statearr_24632_24663[(2)] = null);

(statearr_24632_24663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (3))){
var inst_24610 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else {
if((state_val_24613 === (12))){
var inst_24598 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24633_24664 = state_24612__$1;
(statearr_24633_24664[(2)] = inst_24598);

(statearr_24633_24664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (2))){
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(4),in$);
} else {
if((state_val_24613 === (23))){
var inst_24606 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24634_24665 = state_24612__$1;
(statearr_24634_24665[(2)] = inst_24606);

(statearr_24634_24665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (19))){
var inst_24593 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24635_24666 = state_24612__$1;
(statearr_24635_24666[(2)] = inst_24593);

(statearr_24635_24666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (11))){
var inst_24564 = (state_24612[(9)]);
var inst_24578 = (state_24612[(7)]);
var inst_24578__$1 = cljs.core.seq.call(null,inst_24564);
var state_24612__$1 = (function (){var statearr_24636 = state_24612;
(statearr_24636[(7)] = inst_24578__$1);

return statearr_24636;
})();
if(inst_24578__$1){
var statearr_24637_24667 = state_24612__$1;
(statearr_24637_24667[(1)] = (14));

} else {
var statearr_24638_24668 = state_24612__$1;
(statearr_24638_24668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (9))){
var inst_24600 = (state_24612[(2)]);
var inst_24601 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24612__$1 = (function (){var statearr_24639 = state_24612;
(statearr_24639[(15)] = inst_24600);

return statearr_24639;
})();
if(cljs.core.truth_(inst_24601)){
var statearr_24640_24669 = state_24612__$1;
(statearr_24640_24669[(1)] = (21));

} else {
var statearr_24641_24670 = state_24612__$1;
(statearr_24641_24670[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (5))){
var inst_24556 = cljs.core.async.close_BANG_.call(null,out);
var state_24612__$1 = state_24612;
var statearr_24642_24671 = state_24612__$1;
(statearr_24642_24671[(2)] = inst_24556);

(statearr_24642_24671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (14))){
var inst_24578 = (state_24612[(7)]);
var inst_24580 = cljs.core.chunked_seq_QMARK_.call(null,inst_24578);
var state_24612__$1 = state_24612;
if(inst_24580){
var statearr_24643_24672 = state_24612__$1;
(statearr_24643_24672[(1)] = (17));

} else {
var statearr_24644_24673 = state_24612__$1;
(statearr_24644_24673[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (16))){
var inst_24596 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24645_24674 = state_24612__$1;
(statearr_24645_24674[(2)] = inst_24596);

(statearr_24645_24674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (10))){
var inst_24567 = (state_24612[(10)]);
var inst_24565 = (state_24612[(11)]);
var inst_24572 = cljs.core._nth.call(null,inst_24565,inst_24567);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24612__$1,(13),out,inst_24572);
} else {
if((state_val_24613 === (18))){
var inst_24578 = (state_24612[(7)]);
var inst_24587 = cljs.core.first.call(null,inst_24578);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24612__$1,(20),out,inst_24587);
} else {
if((state_val_24613 === (8))){
var inst_24567 = (state_24612[(10)]);
var inst_24566 = (state_24612[(12)]);
var inst_24569 = (inst_24567 < inst_24566);
var inst_24570 = inst_24569;
var state_24612__$1 = state_24612;
if(cljs.core.truth_(inst_24570)){
var statearr_24646_24675 = state_24612__$1;
(statearr_24646_24675[(1)] = (10));

} else {
var statearr_24647_24676 = state_24612__$1;
(statearr_24647_24676[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17949__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17949__auto____0 = (function (){
var statearr_24648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24648[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17949__auto__);

(statearr_24648[(1)] = (1));

return statearr_24648;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17949__auto____1 = (function (state_24612){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24649){var ex__17952__auto__ = e24649;
var statearr_24650_24677 = state_24612;
(statearr_24650_24677[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24612[(4)]))){
var statearr_24651_24678 = state_24612;
(statearr_24651_24678[(1)] = cljs.core.first.call(null,(state_24612[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24679 = state_24612;
state_24612 = G__24679;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17949__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17949__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17949__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17949__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24652 = f__17972__auto__.call(null);
(statearr_24652[(6)] = c__17971__auto__);

return statearr_24652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));

return c__17971__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24681 = arguments.length;
switch (G__24681) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24684 = arguments.length;
switch (G__24684) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24687 = arguments.length;
switch (G__24687) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17971__auto___24735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24711){
var state_val_24712 = (state_24711[(1)]);
if((state_val_24712 === (7))){
var inst_24706 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24713_24736 = state_24711__$1;
(statearr_24713_24736[(2)] = inst_24706);

(statearr_24713_24736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (1))){
var inst_24688 = null;
var state_24711__$1 = (function (){var statearr_24714 = state_24711;
(statearr_24714[(7)] = inst_24688);

return statearr_24714;
})();
var statearr_24715_24737 = state_24711__$1;
(statearr_24715_24737[(2)] = null);

(statearr_24715_24737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (4))){
var inst_24691 = (state_24711[(8)]);
var inst_24691__$1 = (state_24711[(2)]);
var inst_24692 = (inst_24691__$1 == null);
var inst_24693 = cljs.core.not.call(null,inst_24692);
var state_24711__$1 = (function (){var statearr_24716 = state_24711;
(statearr_24716[(8)] = inst_24691__$1);

return statearr_24716;
})();
if(inst_24693){
var statearr_24717_24738 = state_24711__$1;
(statearr_24717_24738[(1)] = (5));

} else {
var statearr_24718_24739 = state_24711__$1;
(statearr_24718_24739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (6))){
var state_24711__$1 = state_24711;
var statearr_24719_24740 = state_24711__$1;
(statearr_24719_24740[(2)] = null);

(statearr_24719_24740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (3))){
var inst_24708 = (state_24711[(2)]);
var inst_24709 = cljs.core.async.close_BANG_.call(null,out);
var state_24711__$1 = (function (){var statearr_24720 = state_24711;
(statearr_24720[(9)] = inst_24708);

return statearr_24720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24711__$1,inst_24709);
} else {
if((state_val_24712 === (2))){
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24711__$1,(4),ch);
} else {
if((state_val_24712 === (11))){
var inst_24691 = (state_24711[(8)]);
var inst_24700 = (state_24711[(2)]);
var inst_24688 = inst_24691;
var state_24711__$1 = (function (){var statearr_24721 = state_24711;
(statearr_24721[(7)] = inst_24688);

(statearr_24721[(10)] = inst_24700);

return statearr_24721;
})();
var statearr_24722_24741 = state_24711__$1;
(statearr_24722_24741[(2)] = null);

(statearr_24722_24741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (9))){
var inst_24691 = (state_24711[(8)]);
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24711__$1,(11),out,inst_24691);
} else {
if((state_val_24712 === (5))){
var inst_24691 = (state_24711[(8)]);
var inst_24688 = (state_24711[(7)]);
var inst_24695 = cljs.core._EQ_.call(null,inst_24691,inst_24688);
var state_24711__$1 = state_24711;
if(inst_24695){
var statearr_24724_24742 = state_24711__$1;
(statearr_24724_24742[(1)] = (8));

} else {
var statearr_24725_24743 = state_24711__$1;
(statearr_24725_24743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (10))){
var inst_24703 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24726_24744 = state_24711__$1;
(statearr_24726_24744[(2)] = inst_24703);

(statearr_24726_24744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (8))){
var inst_24688 = (state_24711[(7)]);
var tmp24723 = inst_24688;
var inst_24688__$1 = tmp24723;
var state_24711__$1 = (function (){var statearr_24727 = state_24711;
(statearr_24727[(7)] = inst_24688__$1);

return statearr_24727;
})();
var statearr_24728_24745 = state_24711__$1;
(statearr_24728_24745[(2)] = null);

(statearr_24728_24745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_24729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24729[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_24729[(1)] = (1));

return statearr_24729;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_24711){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24730){var ex__17952__auto__ = e24730;
var statearr_24731_24746 = state_24711;
(statearr_24731_24746[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24711[(4)]))){
var statearr_24732_24747 = state_24711;
(statearr_24732_24747[(1)] = cljs.core.first.call(null,(state_24711[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24748 = state_24711;
state_24711 = G__24748;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_24711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_24711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24733 = f__17972__auto__.call(null);
(statearr_24733[(6)] = c__17971__auto___24735);

return statearr_24733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24750 = arguments.length;
switch (G__24750) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17971__auto___24817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (7))){
var inst_24784 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24790_24818 = state_24788__$1;
(statearr_24790_24818[(2)] = inst_24784);

(statearr_24790_24818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (1))){
var inst_24751 = (new Array(n));
var inst_24752 = inst_24751;
var inst_24753 = (0);
var state_24788__$1 = (function (){var statearr_24791 = state_24788;
(statearr_24791[(7)] = inst_24753);

(statearr_24791[(8)] = inst_24752);

return statearr_24791;
})();
var statearr_24792_24819 = state_24788__$1;
(statearr_24792_24819[(2)] = null);

(statearr_24792_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (4))){
var inst_24756 = (state_24788[(9)]);
var inst_24756__$1 = (state_24788[(2)]);
var inst_24757 = (inst_24756__$1 == null);
var inst_24758 = cljs.core.not.call(null,inst_24757);
var state_24788__$1 = (function (){var statearr_24793 = state_24788;
(statearr_24793[(9)] = inst_24756__$1);

return statearr_24793;
})();
if(inst_24758){
var statearr_24794_24820 = state_24788__$1;
(statearr_24794_24820[(1)] = (5));

} else {
var statearr_24795_24821 = state_24788__$1;
(statearr_24795_24821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (15))){
var inst_24778 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24796_24822 = state_24788__$1;
(statearr_24796_24822[(2)] = inst_24778);

(statearr_24796_24822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (13))){
var state_24788__$1 = state_24788;
var statearr_24797_24823 = state_24788__$1;
(statearr_24797_24823[(2)] = null);

(statearr_24797_24823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (6))){
var inst_24753 = (state_24788[(7)]);
var inst_24774 = (inst_24753 > (0));
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24774)){
var statearr_24798_24824 = state_24788__$1;
(statearr_24798_24824[(1)] = (12));

} else {
var statearr_24799_24825 = state_24788__$1;
(statearr_24799_24825[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (3))){
var inst_24786 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (12))){
var inst_24752 = (state_24788[(8)]);
var inst_24776 = cljs.core.vec.call(null,inst_24752);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24788__$1,(15),out,inst_24776);
} else {
if((state_val_24789 === (2))){
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24788__$1,(4),ch);
} else {
if((state_val_24789 === (11))){
var inst_24768 = (state_24788[(2)]);
var inst_24769 = (new Array(n));
var inst_24752 = inst_24769;
var inst_24753 = (0);
var state_24788__$1 = (function (){var statearr_24800 = state_24788;
(statearr_24800[(10)] = inst_24768);

(statearr_24800[(7)] = inst_24753);

(statearr_24800[(8)] = inst_24752);

return statearr_24800;
})();
var statearr_24801_24826 = state_24788__$1;
(statearr_24801_24826[(2)] = null);

(statearr_24801_24826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (9))){
var inst_24752 = (state_24788[(8)]);
var inst_24766 = cljs.core.vec.call(null,inst_24752);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24788__$1,(11),out,inst_24766);
} else {
if((state_val_24789 === (5))){
var inst_24756 = (state_24788[(9)]);
var inst_24753 = (state_24788[(7)]);
var inst_24752 = (state_24788[(8)]);
var inst_24761 = (state_24788[(11)]);
var inst_24760 = (inst_24752[inst_24753] = inst_24756);
var inst_24761__$1 = (inst_24753 + (1));
var inst_24762 = (inst_24761__$1 < n);
var state_24788__$1 = (function (){var statearr_24802 = state_24788;
(statearr_24802[(12)] = inst_24760);

(statearr_24802[(11)] = inst_24761__$1);

return statearr_24802;
})();
if(cljs.core.truth_(inst_24762)){
var statearr_24803_24827 = state_24788__$1;
(statearr_24803_24827[(1)] = (8));

} else {
var statearr_24804_24828 = state_24788__$1;
(statearr_24804_24828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (14))){
var inst_24781 = (state_24788[(2)]);
var inst_24782 = cljs.core.async.close_BANG_.call(null,out);
var state_24788__$1 = (function (){var statearr_24806 = state_24788;
(statearr_24806[(13)] = inst_24781);

return statearr_24806;
})();
var statearr_24807_24829 = state_24788__$1;
(statearr_24807_24829[(2)] = inst_24782);

(statearr_24807_24829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (10))){
var inst_24772 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24808_24830 = state_24788__$1;
(statearr_24808_24830[(2)] = inst_24772);

(statearr_24808_24830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (8))){
var inst_24752 = (state_24788[(8)]);
var inst_24761 = (state_24788[(11)]);
var tmp24805 = inst_24752;
var inst_24752__$1 = tmp24805;
var inst_24753 = inst_24761;
var state_24788__$1 = (function (){var statearr_24809 = state_24788;
(statearr_24809[(7)] = inst_24753);

(statearr_24809[(8)] = inst_24752__$1);

return statearr_24809;
})();
var statearr_24810_24831 = state_24788__$1;
(statearr_24810_24831[(2)] = null);

(statearr_24810_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_24811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24811[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_24811[(1)] = (1));

return statearr_24811;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_24788){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24812){var ex__17952__auto__ = e24812;
var statearr_24813_24832 = state_24788;
(statearr_24813_24832[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24788[(4)]))){
var statearr_24814_24833 = state_24788;
(statearr_24814_24833[(1)] = cljs.core.first.call(null,(state_24788[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24834 = state_24788;
state_24788 = G__24834;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24815 = f__17972__auto__.call(null);
(statearr_24815[(6)] = c__17971__auto___24817);

return statearr_24815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24836 = arguments.length;
switch (G__24836) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17971__auto___24907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17972__auto__ = (function (){var switch__17948__auto__ = (function (state_24878){
var state_val_24879 = (state_24878[(1)]);
if((state_val_24879 === (7))){
var inst_24874 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
var statearr_24880_24908 = state_24878__$1;
(statearr_24880_24908[(2)] = inst_24874);

(statearr_24880_24908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (1))){
var inst_24837 = [];
var inst_24838 = inst_24837;
var inst_24839 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24878__$1 = (function (){var statearr_24881 = state_24878;
(statearr_24881[(7)] = inst_24839);

(statearr_24881[(8)] = inst_24838);

return statearr_24881;
})();
var statearr_24882_24909 = state_24878__$1;
(statearr_24882_24909[(2)] = null);

(statearr_24882_24909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (4))){
var inst_24842 = (state_24878[(9)]);
var inst_24842__$1 = (state_24878[(2)]);
var inst_24843 = (inst_24842__$1 == null);
var inst_24844 = cljs.core.not.call(null,inst_24843);
var state_24878__$1 = (function (){var statearr_24883 = state_24878;
(statearr_24883[(9)] = inst_24842__$1);

return statearr_24883;
})();
if(inst_24844){
var statearr_24884_24910 = state_24878__$1;
(statearr_24884_24910[(1)] = (5));

} else {
var statearr_24885_24911 = state_24878__$1;
(statearr_24885_24911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (15))){
var inst_24868 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
var statearr_24886_24912 = state_24878__$1;
(statearr_24886_24912[(2)] = inst_24868);

(statearr_24886_24912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (13))){
var state_24878__$1 = state_24878;
var statearr_24887_24913 = state_24878__$1;
(statearr_24887_24913[(2)] = null);

(statearr_24887_24913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (6))){
var inst_24838 = (state_24878[(8)]);
var inst_24863 = inst_24838.length;
var inst_24864 = (inst_24863 > (0));
var state_24878__$1 = state_24878;
if(cljs.core.truth_(inst_24864)){
var statearr_24888_24914 = state_24878__$1;
(statearr_24888_24914[(1)] = (12));

} else {
var statearr_24889_24915 = state_24878__$1;
(statearr_24889_24915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (3))){
var inst_24876 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24878__$1,inst_24876);
} else {
if((state_val_24879 === (12))){
var inst_24838 = (state_24878[(8)]);
var inst_24866 = cljs.core.vec.call(null,inst_24838);
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24878__$1,(15),out,inst_24866);
} else {
if((state_val_24879 === (2))){
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24878__$1,(4),ch);
} else {
if((state_val_24879 === (11))){
var inst_24842 = (state_24878[(9)]);
var inst_24846 = (state_24878[(10)]);
var inst_24856 = (state_24878[(2)]);
var inst_24857 = [];
var inst_24858 = inst_24857.push(inst_24842);
var inst_24838 = inst_24857;
var inst_24839 = inst_24846;
var state_24878__$1 = (function (){var statearr_24890 = state_24878;
(statearr_24890[(7)] = inst_24839);

(statearr_24890[(11)] = inst_24858);

(statearr_24890[(12)] = inst_24856);

(statearr_24890[(8)] = inst_24838);

return statearr_24890;
})();
var statearr_24891_24916 = state_24878__$1;
(statearr_24891_24916[(2)] = null);

(statearr_24891_24916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (9))){
var inst_24838 = (state_24878[(8)]);
var inst_24854 = cljs.core.vec.call(null,inst_24838);
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24878__$1,(11),out,inst_24854);
} else {
if((state_val_24879 === (5))){
var inst_24839 = (state_24878[(7)]);
var inst_24842 = (state_24878[(9)]);
var inst_24846 = (state_24878[(10)]);
var inst_24846__$1 = f.call(null,inst_24842);
var inst_24847 = cljs.core._EQ_.call(null,inst_24846__$1,inst_24839);
var inst_24848 = cljs.core.keyword_identical_QMARK_.call(null,inst_24839,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24849 = ((inst_24847) || (inst_24848));
var state_24878__$1 = (function (){var statearr_24892 = state_24878;
(statearr_24892[(10)] = inst_24846__$1);

return statearr_24892;
})();
if(cljs.core.truth_(inst_24849)){
var statearr_24893_24917 = state_24878__$1;
(statearr_24893_24917[(1)] = (8));

} else {
var statearr_24894_24918 = state_24878__$1;
(statearr_24894_24918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (14))){
var inst_24871 = (state_24878[(2)]);
var inst_24872 = cljs.core.async.close_BANG_.call(null,out);
var state_24878__$1 = (function (){var statearr_24896 = state_24878;
(statearr_24896[(13)] = inst_24871);

return statearr_24896;
})();
var statearr_24897_24919 = state_24878__$1;
(statearr_24897_24919[(2)] = inst_24872);

(statearr_24897_24919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (10))){
var inst_24861 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
var statearr_24898_24920 = state_24878__$1;
(statearr_24898_24920[(2)] = inst_24861);

(statearr_24898_24920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (8))){
var inst_24842 = (state_24878[(9)]);
var inst_24846 = (state_24878[(10)]);
var inst_24838 = (state_24878[(8)]);
var inst_24851 = inst_24838.push(inst_24842);
var tmp24895 = inst_24838;
var inst_24838__$1 = tmp24895;
var inst_24839 = inst_24846;
var state_24878__$1 = (function (){var statearr_24899 = state_24878;
(statearr_24899[(7)] = inst_24839);

(statearr_24899[(14)] = inst_24851);

(statearr_24899[(8)] = inst_24838__$1);

return statearr_24899;
})();
var statearr_24900_24921 = state_24878__$1;
(statearr_24900_24921[(2)] = null);

(statearr_24900_24921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17949__auto__ = null;
var cljs$core$async$state_machine__17949__auto____0 = (function (){
var statearr_24901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24901[(0)] = cljs$core$async$state_machine__17949__auto__);

(statearr_24901[(1)] = (1));

return statearr_24901;
});
var cljs$core$async$state_machine__17949__auto____1 = (function (state_24878){
while(true){
var ret_value__17950__auto__ = (function (){try{while(true){
var result__17951__auto__ = switch__17948__auto__.call(null,state_24878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17951__auto__;
}
break;
}
}catch (e24902){var ex__17952__auto__ = e24902;
var statearr_24903_24922 = state_24878;
(statearr_24903_24922[(2)] = ex__17952__auto__);


if(cljs.core.seq.call(null,(state_24878[(4)]))){
var statearr_24904_24923 = state_24878;
(statearr_24904_24923[(1)] = cljs.core.first.call(null,(state_24878[(4)])));

} else {
throw ex__17952__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24924 = state_24878;
state_24878 = G__24924;
continue;
} else {
return ret_value__17950__auto__;
}
break;
}
});
cljs$core$async$state_machine__17949__auto__ = function(state_24878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17949__auto____1.call(this,state_24878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17949__auto____0;
cljs$core$async$state_machine__17949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17949__auto____1;
return cljs$core$async$state_machine__17949__auto__;
})()
})();
var state__17973__auto__ = (function (){var statearr_24905 = f__17972__auto__.call(null);
(statearr_24905[(6)] = c__17971__auto___24907);

return statearr_24905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17973__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
