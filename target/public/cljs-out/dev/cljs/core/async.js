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
var G__18842 = arguments.length;
switch (G__18842) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18843 = (function (f,blockable,meta18844){
this.f = f;
this.blockable = blockable;
this.meta18844 = meta18844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18845,meta18844__$1){
var self__ = this;
var _18845__$1 = this;
return (new cljs.core.async.t_cljs$core$async18843(self__.f,self__.blockable,meta18844__$1));
}));

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18845){
var self__ = this;
var _18845__$1 = this;
return self__.meta18844;
}));

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18844","meta18844",-317508697,null)], null);
}));

(cljs.core.async.t_cljs$core$async18843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18843");

(cljs.core.async.t_cljs$core$async18843.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async18843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18843.
 */
cljs.core.async.__GT_t_cljs$core$async18843 = (function cljs$core$async$__GT_t_cljs$core$async18843(f__$1,blockable__$1,meta18844){
return (new cljs.core.async.t_cljs$core$async18843(f__$1,blockable__$1,meta18844));
});

}

return (new cljs.core.async.t_cljs$core$async18843(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18849 = arguments.length;
switch (G__18849) {
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
var G__18852 = arguments.length;
switch (G__18852) {
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
var G__18855 = arguments.length;
switch (G__18855) {
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
var val_18857 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18857);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_18857);
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
var G__18859 = arguments.length;
switch (G__18859) {
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
var n__4648__auto___18861 = n;
var x_18862 = (0);
while(true){
if((x_18862 < n__4648__auto___18861)){
(a[x_18862] = x_18862);

var G__18863 = (x_18862 + (1));
x_18862 = G__18863;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18864 = (function (flag,meta18865){
this.flag = flag;
this.meta18865 = meta18865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18866,meta18865__$1){
var self__ = this;
var _18866__$1 = this;
return (new cljs.core.async.t_cljs$core$async18864(self__.flag,meta18865__$1));
}));

(cljs.core.async.t_cljs$core$async18864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18866){
var self__ = this;
var _18866__$1 = this;
return self__.meta18865;
}));

(cljs.core.async.t_cljs$core$async18864.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18864.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18865","meta18865",196858140,null)], null);
}));

(cljs.core.async.t_cljs$core$async18864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18864");

(cljs.core.async.t_cljs$core$async18864.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async18864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18864.
 */
cljs.core.async.__GT_t_cljs$core$async18864 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18864(flag__$1,meta18865){
return (new cljs.core.async.t_cljs$core$async18864(flag__$1,meta18865));
});

}

return (new cljs.core.async.t_cljs$core$async18864(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18867 = (function (flag,cb,meta18868){
this.flag = flag;
this.cb = cb;
this.meta18868 = meta18868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18869,meta18868__$1){
var self__ = this;
var _18869__$1 = this;
return (new cljs.core.async.t_cljs$core$async18867(self__.flag,self__.cb,meta18868__$1));
}));

(cljs.core.async.t_cljs$core$async18867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18869){
var self__ = this;
var _18869__$1 = this;
return self__.meta18868;
}));

(cljs.core.async.t_cljs$core$async18867.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18867.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18868","meta18868",-639446591,null)], null);
}));

(cljs.core.async.t_cljs$core$async18867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18867");

(cljs.core.async.t_cljs$core$async18867.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async18867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18867.
 */
cljs.core.async.__GT_t_cljs$core$async18867 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18867(flag__$1,cb__$1,meta18868){
return (new cljs.core.async.t_cljs$core$async18867(flag__$1,cb__$1,meta18868));
});

}

return (new cljs.core.async.t_cljs$core$async18867(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18870_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18870_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18871_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18871_SHARP_,port], null));
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
var G__18872 = (i + (1));
i = G__18872;
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
var len__4771__auto___18877 = arguments.length;
var i__4772__auto___18878 = (0);
while(true){
if((i__4772__auto___18878 < len__4771__auto___18877)){
args__4777__auto__.push((arguments[i__4772__auto___18878]));

var G__18879 = (i__4772__auto___18878 + (1));
i__4772__auto___18878 = G__18879;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18875){
var map__18876 = p__18875;
var map__18876__$1 = cljs.core.__destructure_map.call(null,map__18876);
var opts = map__18876__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18873){
var G__18874 = cljs.core.first.call(null,seq18873);
var seq18873__$1 = cljs.core.next.call(null,seq18873);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18874,seq18873__$1);
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
var G__18881 = arguments.length;
switch (G__18881) {
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
var c__18782__auto___18928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_18905){
var state_val_18906 = (state_18905[(1)]);
if((state_val_18906 === (7))){
var inst_18901 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18907_18929 = state_18905__$1;
(statearr_18907_18929[(2)] = inst_18901);

(statearr_18907_18929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (1))){
var state_18905__$1 = state_18905;
var statearr_18908_18930 = state_18905__$1;
(statearr_18908_18930[(2)] = null);

(statearr_18908_18930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (4))){
var inst_18884 = (state_18905[(7)]);
var inst_18884__$1 = (state_18905[(2)]);
var inst_18885 = (inst_18884__$1 == null);
var state_18905__$1 = (function (){var statearr_18909 = state_18905;
(statearr_18909[(7)] = inst_18884__$1);

return statearr_18909;
})();
if(cljs.core.truth_(inst_18885)){
var statearr_18910_18931 = state_18905__$1;
(statearr_18910_18931[(1)] = (5));

} else {
var statearr_18911_18932 = state_18905__$1;
(statearr_18911_18932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (13))){
var state_18905__$1 = state_18905;
var statearr_18912_18933 = state_18905__$1;
(statearr_18912_18933[(2)] = null);

(statearr_18912_18933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (6))){
var inst_18884 = (state_18905[(7)]);
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18905__$1,(11),to,inst_18884);
} else {
if((state_val_18906 === (3))){
var inst_18903 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18905__$1,inst_18903);
} else {
if((state_val_18906 === (12))){
var state_18905__$1 = state_18905;
var statearr_18913_18934 = state_18905__$1;
(statearr_18913_18934[(2)] = null);

(statearr_18913_18934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (2))){
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18905__$1,(4),from);
} else {
if((state_val_18906 === (11))){
var inst_18894 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
if(cljs.core.truth_(inst_18894)){
var statearr_18914_18935 = state_18905__$1;
(statearr_18914_18935[(1)] = (12));

} else {
var statearr_18915_18936 = state_18905__$1;
(statearr_18915_18936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (9))){
var state_18905__$1 = state_18905;
var statearr_18916_18937 = state_18905__$1;
(statearr_18916_18937[(2)] = null);

(statearr_18916_18937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (5))){
var state_18905__$1 = state_18905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18917_18938 = state_18905__$1;
(statearr_18917_18938[(1)] = (8));

} else {
var statearr_18918_18939 = state_18905__$1;
(statearr_18918_18939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (14))){
var inst_18899 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18919_18940 = state_18905__$1;
(statearr_18919_18940[(2)] = inst_18899);

(statearr_18919_18940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (10))){
var inst_18891 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18920_18941 = state_18905__$1;
(statearr_18920_18941[(2)] = inst_18891);

(statearr_18920_18941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (8))){
var inst_18888 = cljs.core.async.close_BANG_.call(null,to);
var state_18905__$1 = state_18905;
var statearr_18921_18942 = state_18905__$1;
(statearr_18921_18942[(2)] = inst_18888);

(statearr_18921_18942[(1)] = (10));


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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_18922 = [null,null,null,null,null,null,null,null];
(statearr_18922[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_18922[(1)] = (1));

return statearr_18922;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_18905){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_18905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e18923){var ex__18712__auto__ = e18923;
var statearr_18924_18943 = state_18905;
(statearr_18924_18943[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_18905[(4)]))){
var statearr_18925_18944 = state_18905;
(statearr_18925_18944[(1)] = cljs.core.first.call(null,(state_18905[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18945 = state_18905;
state_18905 = G__18945;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_18905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_18905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_18926 = f__18783__auto__.call(null);
(statearr_18926[(6)] = c__18782__auto___18928);

return statearr_18926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
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
var process = (function (p__18946){
var vec__18947 = p__18946;
var v = cljs.core.nth.call(null,vec__18947,(0),null);
var p = cljs.core.nth.call(null,vec__18947,(1),null);
var job = vec__18947;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18782__auto___19123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_18954){
var state_val_18955 = (state_18954[(1)]);
if((state_val_18955 === (1))){
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18954__$1,(2),res,v);
} else {
if((state_val_18955 === (2))){
var inst_18951 = (state_18954[(2)]);
var inst_18952 = cljs.core.async.close_BANG_.call(null,res);
var state_18954__$1 = (function (){var statearr_18956 = state_18954;
(statearr_18956[(7)] = inst_18951);

return statearr_18956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18954__$1,inst_18952);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0 = (function (){
var statearr_18957 = [null,null,null,null,null,null,null,null];
(statearr_18957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__);

(statearr_18957[(1)] = (1));

return statearr_18957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1 = (function (state_18954){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_18954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e18958){var ex__18712__auto__ = e18958;
var statearr_18959_19124 = state_18954;
(statearr_18959_19124[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_18954[(4)]))){
var statearr_18960_19125 = state_18954;
(statearr_18960_19125[(1)] = cljs.core.first.call(null,(state_18954[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19126 = state_18954;
state_18954 = G__19126;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = function(state_18954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1.call(this,state_18954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_18961 = f__18783__auto__.call(null);
(statearr_18961[(6)] = c__18782__auto___19123);

return statearr_18961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__18962){
var vec__18963 = p__18962;
var v = cljs.core.nth.call(null,vec__18963,(0),null);
var p = cljs.core.nth.call(null,vec__18963,(1),null);
var job = vec__18963;
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
var n__4648__auto___19127 = n;
var __19128 = (0);
while(true){
if((__19128 < n__4648__auto___19127)){
var G__18966_19129 = type;
var G__18966_19130__$1 = (((G__18966_19129 instanceof cljs.core.Keyword))?G__18966_19129.fqn:null);
switch (G__18966_19130__$1) {
case "compute":
var c__18782__auto___19132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19128,c__18782__auto___19132,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async){
return (function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = ((function (__19128,c__18782__auto___19132,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async){
return (function (state_18979){
var state_val_18980 = (state_18979[(1)]);
if((state_val_18980 === (1))){
var state_18979__$1 = state_18979;
var statearr_18981_19133 = state_18979__$1;
(statearr_18981_19133[(2)] = null);

(statearr_18981_19133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18980 === (2))){
var state_18979__$1 = state_18979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18979__$1,(4),jobs);
} else {
if((state_val_18980 === (3))){
var inst_18977 = (state_18979[(2)]);
var state_18979__$1 = state_18979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18979__$1,inst_18977);
} else {
if((state_val_18980 === (4))){
var inst_18969 = (state_18979[(2)]);
var inst_18970 = process.call(null,inst_18969);
var state_18979__$1 = state_18979;
if(cljs.core.truth_(inst_18970)){
var statearr_18982_19134 = state_18979__$1;
(statearr_18982_19134[(1)] = (5));

} else {
var statearr_18983_19135 = state_18979__$1;
(statearr_18983_19135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18980 === (5))){
var state_18979__$1 = state_18979;
var statearr_18984_19136 = state_18979__$1;
(statearr_18984_19136[(2)] = null);

(statearr_18984_19136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18980 === (6))){
var state_18979__$1 = state_18979;
var statearr_18985_19137 = state_18979__$1;
(statearr_18985_19137[(2)] = null);

(statearr_18985_19137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18980 === (7))){
var inst_18975 = (state_18979[(2)]);
var state_18979__$1 = state_18979;
var statearr_18986_19138 = state_18979__$1;
(statearr_18986_19138[(2)] = inst_18975);

(statearr_18986_19138[(1)] = (3));


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
});})(__19128,c__18782__auto___19132,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async))
;
return ((function (__19128,switch__18708__auto__,c__18782__auto___19132,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0 = (function (){
var statearr_18987 = [null,null,null,null,null,null,null];
(statearr_18987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__);

(statearr_18987[(1)] = (1));

return statearr_18987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1 = (function (state_18979){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_18979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e18988){var ex__18712__auto__ = e18988;
var statearr_18989_19139 = state_18979;
(statearr_18989_19139[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_18979[(4)]))){
var statearr_18990_19140 = state_18979;
(statearr_18990_19140[(1)] = cljs.core.first.call(null,(state_18979[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19141 = state_18979;
state_18979 = G__19141;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = function(state_18979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1.call(this,state_18979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__;
})()
;})(__19128,switch__18708__auto__,c__18782__auto___19132,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async))
})();
var state__18784__auto__ = (function (){var statearr_18991 = f__18783__auto__.call(null);
(statearr_18991[(6)] = c__18782__auto___19132);

return statearr_18991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
});})(__19128,c__18782__auto___19132,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async))
);


break;
case "async":
var c__18782__auto___19142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19128,c__18782__auto___19142,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async){
return (function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = ((function (__19128,c__18782__auto___19142,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async){
return (function (state_19004){
var state_val_19005 = (state_19004[(1)]);
if((state_val_19005 === (1))){
var state_19004__$1 = state_19004;
var statearr_19006_19143 = state_19004__$1;
(statearr_19006_19143[(2)] = null);

(statearr_19006_19143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19005 === (2))){
var state_19004__$1 = state_19004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19004__$1,(4),jobs);
} else {
if((state_val_19005 === (3))){
var inst_19002 = (state_19004[(2)]);
var state_19004__$1 = state_19004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19004__$1,inst_19002);
} else {
if((state_val_19005 === (4))){
var inst_18994 = (state_19004[(2)]);
var inst_18995 = async.call(null,inst_18994);
var state_19004__$1 = state_19004;
if(cljs.core.truth_(inst_18995)){
var statearr_19007_19144 = state_19004__$1;
(statearr_19007_19144[(1)] = (5));

} else {
var statearr_19008_19145 = state_19004__$1;
(statearr_19008_19145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19005 === (5))){
var state_19004__$1 = state_19004;
var statearr_19009_19146 = state_19004__$1;
(statearr_19009_19146[(2)] = null);

(statearr_19009_19146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19005 === (6))){
var state_19004__$1 = state_19004;
var statearr_19010_19147 = state_19004__$1;
(statearr_19010_19147[(2)] = null);

(statearr_19010_19147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19005 === (7))){
var inst_19000 = (state_19004[(2)]);
var state_19004__$1 = state_19004;
var statearr_19011_19148 = state_19004__$1;
(statearr_19011_19148[(2)] = inst_19000);

(statearr_19011_19148[(1)] = (3));


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
});})(__19128,c__18782__auto___19142,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async))
;
return ((function (__19128,switch__18708__auto__,c__18782__auto___19142,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0 = (function (){
var statearr_19012 = [null,null,null,null,null,null,null];
(statearr_19012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__);

(statearr_19012[(1)] = (1));

return statearr_19012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1 = (function (state_19004){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19013){var ex__18712__auto__ = e19013;
var statearr_19014_19149 = state_19004;
(statearr_19014_19149[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19004[(4)]))){
var statearr_19015_19150 = state_19004;
(statearr_19015_19150[(1)] = cljs.core.first.call(null,(state_19004[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19151 = state_19004;
state_19004 = G__19151;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = function(state_19004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1.call(this,state_19004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__;
})()
;})(__19128,switch__18708__auto__,c__18782__auto___19142,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async))
})();
var state__18784__auto__ = (function (){var statearr_19016 = f__18783__auto__.call(null);
(statearr_19016[(6)] = c__18782__auto___19142);

return statearr_19016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
});})(__19128,c__18782__auto___19142,G__18966_19129,G__18966_19130__$1,n__4648__auto___19127,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18966_19130__$1)].join('')));

}

var G__19152 = (__19128 + (1));
__19128 = G__19152;
continue;
} else {
}
break;
}

var c__18782__auto___19153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19038){
var state_val_19039 = (state_19038[(1)]);
if((state_val_19039 === (1))){
var state_19038__$1 = state_19038;
var statearr_19040_19154 = state_19038__$1;
(statearr_19040_19154[(2)] = null);

(statearr_19040_19154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (2))){
var state_19038__$1 = state_19038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19038__$1,(4),from);
} else {
if((state_val_19039 === (3))){
var inst_19036 = (state_19038[(2)]);
var state_19038__$1 = state_19038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19038__$1,inst_19036);
} else {
if((state_val_19039 === (4))){
var inst_19019 = (state_19038[(7)]);
var inst_19019__$1 = (state_19038[(2)]);
var inst_19020 = (inst_19019__$1 == null);
var state_19038__$1 = (function (){var statearr_19041 = state_19038;
(statearr_19041[(7)] = inst_19019__$1);

return statearr_19041;
})();
if(cljs.core.truth_(inst_19020)){
var statearr_19042_19155 = state_19038__$1;
(statearr_19042_19155[(1)] = (5));

} else {
var statearr_19043_19156 = state_19038__$1;
(statearr_19043_19156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (5))){
var inst_19022 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19038__$1 = state_19038;
var statearr_19044_19157 = state_19038__$1;
(statearr_19044_19157[(2)] = inst_19022);

(statearr_19044_19157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (6))){
var inst_19019 = (state_19038[(7)]);
var inst_19024 = (state_19038[(8)]);
var inst_19024__$1 = cljs.core.async.chan.call(null,(1));
var inst_19025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19026 = [inst_19019,inst_19024__$1];
var inst_19027 = (new cljs.core.PersistentVector(null,2,(5),inst_19025,inst_19026,null));
var state_19038__$1 = (function (){var statearr_19045 = state_19038;
(statearr_19045[(8)] = inst_19024__$1);

return statearr_19045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19038__$1,(8),jobs,inst_19027);
} else {
if((state_val_19039 === (7))){
var inst_19034 = (state_19038[(2)]);
var state_19038__$1 = state_19038;
var statearr_19046_19158 = state_19038__$1;
(statearr_19046_19158[(2)] = inst_19034);

(statearr_19046_19158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19039 === (8))){
var inst_19024 = (state_19038[(8)]);
var inst_19029 = (state_19038[(2)]);
var state_19038__$1 = (function (){var statearr_19047 = state_19038;
(statearr_19047[(9)] = inst_19029);

return statearr_19047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19038__$1,(9),results,inst_19024);
} else {
if((state_val_19039 === (9))){
var inst_19031 = (state_19038[(2)]);
var state_19038__$1 = (function (){var statearr_19048 = state_19038;
(statearr_19048[(10)] = inst_19031);

return statearr_19048;
})();
var statearr_19049_19159 = state_19038__$1;
(statearr_19049_19159[(2)] = null);

(statearr_19049_19159[(1)] = (2));


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
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0 = (function (){
var statearr_19050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__);

(statearr_19050[(1)] = (1));

return statearr_19050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1 = (function (state_19038){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19051){var ex__18712__auto__ = e19051;
var statearr_19052_19160 = state_19038;
(statearr_19052_19160[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19038[(4)]))){
var statearr_19053_19161 = state_19038;
(statearr_19053_19161[(1)] = cljs.core.first.call(null,(state_19038[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19162 = state_19038;
state_19038 = G__19162;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = function(state_19038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1.call(this,state_19038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19054 = f__18783__auto__.call(null);
(statearr_19054[(6)] = c__18782__auto___19153);

return statearr_19054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));


var c__18782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19092){
var state_val_19093 = (state_19092[(1)]);
if((state_val_19093 === (7))){
var inst_19088 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19094_19163 = state_19092__$1;
(statearr_19094_19163[(2)] = inst_19088);

(statearr_19094_19163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (20))){
var state_19092__$1 = state_19092;
var statearr_19095_19164 = state_19092__$1;
(statearr_19095_19164[(2)] = null);

(statearr_19095_19164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (1))){
var state_19092__$1 = state_19092;
var statearr_19096_19165 = state_19092__$1;
(statearr_19096_19165[(2)] = null);

(statearr_19096_19165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (4))){
var inst_19057 = (state_19092[(7)]);
var inst_19057__$1 = (state_19092[(2)]);
var inst_19058 = (inst_19057__$1 == null);
var state_19092__$1 = (function (){var statearr_19097 = state_19092;
(statearr_19097[(7)] = inst_19057__$1);

return statearr_19097;
})();
if(cljs.core.truth_(inst_19058)){
var statearr_19098_19166 = state_19092__$1;
(statearr_19098_19166[(1)] = (5));

} else {
var statearr_19099_19167 = state_19092__$1;
(statearr_19099_19167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (15))){
var inst_19070 = (state_19092[(8)]);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19092__$1,(18),to,inst_19070);
} else {
if((state_val_19093 === (21))){
var inst_19083 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19100_19168 = state_19092__$1;
(statearr_19100_19168[(2)] = inst_19083);

(statearr_19100_19168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (13))){
var inst_19085 = (state_19092[(2)]);
var state_19092__$1 = (function (){var statearr_19101 = state_19092;
(statearr_19101[(9)] = inst_19085);

return statearr_19101;
})();
var statearr_19102_19169 = state_19092__$1;
(statearr_19102_19169[(2)] = null);

(statearr_19102_19169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (6))){
var inst_19057 = (state_19092[(7)]);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19092__$1,(11),inst_19057);
} else {
if((state_val_19093 === (17))){
var inst_19078 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
if(cljs.core.truth_(inst_19078)){
var statearr_19103_19170 = state_19092__$1;
(statearr_19103_19170[(1)] = (19));

} else {
var statearr_19104_19171 = state_19092__$1;
(statearr_19104_19171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (3))){
var inst_19090 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19092__$1,inst_19090);
} else {
if((state_val_19093 === (12))){
var inst_19067 = (state_19092[(10)]);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19092__$1,(14),inst_19067);
} else {
if((state_val_19093 === (2))){
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19092__$1,(4),results);
} else {
if((state_val_19093 === (19))){
var state_19092__$1 = state_19092;
var statearr_19105_19172 = state_19092__$1;
(statearr_19105_19172[(2)] = null);

(statearr_19105_19172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (11))){
var inst_19067 = (state_19092[(2)]);
var state_19092__$1 = (function (){var statearr_19106 = state_19092;
(statearr_19106[(10)] = inst_19067);

return statearr_19106;
})();
var statearr_19107_19173 = state_19092__$1;
(statearr_19107_19173[(2)] = null);

(statearr_19107_19173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (9))){
var state_19092__$1 = state_19092;
var statearr_19108_19174 = state_19092__$1;
(statearr_19108_19174[(2)] = null);

(statearr_19108_19174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (5))){
var state_19092__$1 = state_19092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19109_19175 = state_19092__$1;
(statearr_19109_19175[(1)] = (8));

} else {
var statearr_19110_19176 = state_19092__$1;
(statearr_19110_19176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (14))){
var inst_19070 = (state_19092[(8)]);
var inst_19070__$1 = (state_19092[(2)]);
var inst_19071 = (inst_19070__$1 == null);
var inst_19072 = cljs.core.not.call(null,inst_19071);
var state_19092__$1 = (function (){var statearr_19111 = state_19092;
(statearr_19111[(8)] = inst_19070__$1);

return statearr_19111;
})();
if(inst_19072){
var statearr_19112_19177 = state_19092__$1;
(statearr_19112_19177[(1)] = (15));

} else {
var statearr_19113_19178 = state_19092__$1;
(statearr_19113_19178[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (16))){
var state_19092__$1 = state_19092;
var statearr_19114_19179 = state_19092__$1;
(statearr_19114_19179[(2)] = false);

(statearr_19114_19179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (10))){
var inst_19064 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19115_19180 = state_19092__$1;
(statearr_19115_19180[(2)] = inst_19064);

(statearr_19115_19180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (18))){
var inst_19075 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19116_19181 = state_19092__$1;
(statearr_19116_19181[(2)] = inst_19075);

(statearr_19116_19181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (8))){
var inst_19061 = cljs.core.async.close_BANG_.call(null,to);
var state_19092__$1 = state_19092;
var statearr_19117_19182 = state_19092__$1;
(statearr_19117_19182[(2)] = inst_19061);

(statearr_19117_19182[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0 = (function (){
var statearr_19118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__);

(statearr_19118[(1)] = (1));

return statearr_19118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1 = (function (state_19092){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19119){var ex__18712__auto__ = e19119;
var statearr_19120_19183 = state_19092;
(statearr_19120_19183[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19092[(4)]))){
var statearr_19121_19184 = state_19092;
(statearr_19121_19184[(1)] = cljs.core.first.call(null,(state_19092[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19185 = state_19092;
state_19092 = G__19185;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__ = function(state_19092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1.call(this,state_19092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19122 = f__18783__auto__.call(null);
(statearr_19122[(6)] = c__18782__auto__);

return statearr_19122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));

return c__18782__auto__;
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
var G__19187 = arguments.length;
switch (G__19187) {
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
var G__19190 = arguments.length;
switch (G__19190) {
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
var G__19193 = arguments.length;
switch (G__19193) {
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
var c__18782__auto___19243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19219){
var state_val_19220 = (state_19219[(1)]);
if((state_val_19220 === (7))){
var inst_19215 = (state_19219[(2)]);
var state_19219__$1 = state_19219;
var statearr_19221_19244 = state_19219__$1;
(statearr_19221_19244[(2)] = inst_19215);

(statearr_19221_19244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (1))){
var state_19219__$1 = state_19219;
var statearr_19222_19245 = state_19219__$1;
(statearr_19222_19245[(2)] = null);

(statearr_19222_19245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (4))){
var inst_19196 = (state_19219[(7)]);
var inst_19196__$1 = (state_19219[(2)]);
var inst_19197 = (inst_19196__$1 == null);
var state_19219__$1 = (function (){var statearr_19223 = state_19219;
(statearr_19223[(7)] = inst_19196__$1);

return statearr_19223;
})();
if(cljs.core.truth_(inst_19197)){
var statearr_19224_19246 = state_19219__$1;
(statearr_19224_19246[(1)] = (5));

} else {
var statearr_19225_19247 = state_19219__$1;
(statearr_19225_19247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (13))){
var state_19219__$1 = state_19219;
var statearr_19226_19248 = state_19219__$1;
(statearr_19226_19248[(2)] = null);

(statearr_19226_19248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (6))){
var inst_19196 = (state_19219[(7)]);
var inst_19202 = p.call(null,inst_19196);
var state_19219__$1 = state_19219;
if(cljs.core.truth_(inst_19202)){
var statearr_19227_19249 = state_19219__$1;
(statearr_19227_19249[(1)] = (9));

} else {
var statearr_19228_19250 = state_19219__$1;
(statearr_19228_19250[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (3))){
var inst_19217 = (state_19219[(2)]);
var state_19219__$1 = state_19219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19219__$1,inst_19217);
} else {
if((state_val_19220 === (12))){
var state_19219__$1 = state_19219;
var statearr_19229_19251 = state_19219__$1;
(statearr_19229_19251[(2)] = null);

(statearr_19229_19251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (2))){
var state_19219__$1 = state_19219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19219__$1,(4),ch);
} else {
if((state_val_19220 === (11))){
var inst_19196 = (state_19219[(7)]);
var inst_19206 = (state_19219[(2)]);
var state_19219__$1 = state_19219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19219__$1,(8),inst_19206,inst_19196);
} else {
if((state_val_19220 === (9))){
var state_19219__$1 = state_19219;
var statearr_19230_19252 = state_19219__$1;
(statearr_19230_19252[(2)] = tc);

(statearr_19230_19252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (5))){
var inst_19199 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19200 = cljs.core.async.close_BANG_.call(null,fc);
var state_19219__$1 = (function (){var statearr_19231 = state_19219;
(statearr_19231[(8)] = inst_19199);

return statearr_19231;
})();
var statearr_19232_19253 = state_19219__$1;
(statearr_19232_19253[(2)] = inst_19200);

(statearr_19232_19253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (14))){
var inst_19213 = (state_19219[(2)]);
var state_19219__$1 = state_19219;
var statearr_19233_19254 = state_19219__$1;
(statearr_19233_19254[(2)] = inst_19213);

(statearr_19233_19254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (10))){
var state_19219__$1 = state_19219;
var statearr_19234_19255 = state_19219__$1;
(statearr_19234_19255[(2)] = fc);

(statearr_19234_19255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19220 === (8))){
var inst_19208 = (state_19219[(2)]);
var state_19219__$1 = state_19219;
if(cljs.core.truth_(inst_19208)){
var statearr_19235_19256 = state_19219__$1;
(statearr_19235_19256[(1)] = (12));

} else {
var statearr_19236_19257 = state_19219__$1;
(statearr_19236_19257[(1)] = (13));

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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_19237 = [null,null,null,null,null,null,null,null,null];
(statearr_19237[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_19237[(1)] = (1));

return statearr_19237;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_19219){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19238){var ex__18712__auto__ = e19238;
var statearr_19239_19258 = state_19219;
(statearr_19239_19258[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19219[(4)]))){
var statearr_19240_19259 = state_19219;
(statearr_19240_19259[(1)] = cljs.core.first.call(null,(state_19219[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19260 = state_19219;
state_19219 = G__19260;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_19219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_19219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19241 = f__18783__auto__.call(null);
(statearr_19241[(6)] = c__18782__auto___19243);

return statearr_19241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
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
var c__18782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19282){
var state_val_19283 = (state_19282[(1)]);
if((state_val_19283 === (7))){
var inst_19278 = (state_19282[(2)]);
var state_19282__$1 = state_19282;
var statearr_19284_19303 = state_19282__$1;
(statearr_19284_19303[(2)] = inst_19278);

(statearr_19284_19303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19283 === (1))){
var inst_19261 = init;
var inst_19262 = inst_19261;
var state_19282__$1 = (function (){var statearr_19285 = state_19282;
(statearr_19285[(7)] = inst_19262);

return statearr_19285;
})();
var statearr_19286_19304 = state_19282__$1;
(statearr_19286_19304[(2)] = null);

(statearr_19286_19304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19283 === (4))){
var inst_19265 = (state_19282[(8)]);
var inst_19265__$1 = (state_19282[(2)]);
var inst_19266 = (inst_19265__$1 == null);
var state_19282__$1 = (function (){var statearr_19287 = state_19282;
(statearr_19287[(8)] = inst_19265__$1);

return statearr_19287;
})();
if(cljs.core.truth_(inst_19266)){
var statearr_19288_19305 = state_19282__$1;
(statearr_19288_19305[(1)] = (5));

} else {
var statearr_19289_19306 = state_19282__$1;
(statearr_19289_19306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19283 === (6))){
var inst_19269 = (state_19282[(9)]);
var inst_19262 = (state_19282[(7)]);
var inst_19265 = (state_19282[(8)]);
var inst_19269__$1 = f.call(null,inst_19262,inst_19265);
var inst_19270 = cljs.core.reduced_QMARK_.call(null,inst_19269__$1);
var state_19282__$1 = (function (){var statearr_19290 = state_19282;
(statearr_19290[(9)] = inst_19269__$1);

return statearr_19290;
})();
if(inst_19270){
var statearr_19291_19307 = state_19282__$1;
(statearr_19291_19307[(1)] = (8));

} else {
var statearr_19292_19308 = state_19282__$1;
(statearr_19292_19308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19283 === (3))){
var inst_19280 = (state_19282[(2)]);
var state_19282__$1 = state_19282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19282__$1,inst_19280);
} else {
if((state_val_19283 === (2))){
var state_19282__$1 = state_19282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19282__$1,(4),ch);
} else {
if((state_val_19283 === (9))){
var inst_19269 = (state_19282[(9)]);
var inst_19262 = inst_19269;
var state_19282__$1 = (function (){var statearr_19293 = state_19282;
(statearr_19293[(7)] = inst_19262);

return statearr_19293;
})();
var statearr_19294_19309 = state_19282__$1;
(statearr_19294_19309[(2)] = null);

(statearr_19294_19309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19283 === (5))){
var inst_19262 = (state_19282[(7)]);
var state_19282__$1 = state_19282;
var statearr_19295_19310 = state_19282__$1;
(statearr_19295_19310[(2)] = inst_19262);

(statearr_19295_19310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19283 === (10))){
var inst_19276 = (state_19282[(2)]);
var state_19282__$1 = state_19282;
var statearr_19296_19311 = state_19282__$1;
(statearr_19296_19311[(2)] = inst_19276);

(statearr_19296_19311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19283 === (8))){
var inst_19269 = (state_19282[(9)]);
var inst_19272 = cljs.core.deref.call(null,inst_19269);
var state_19282__$1 = state_19282;
var statearr_19297_19312 = state_19282__$1;
(statearr_19297_19312[(2)] = inst_19272);

(statearr_19297_19312[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__18709__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18709__auto____0 = (function (){
var statearr_19298 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19298[(0)] = cljs$core$async$reduce_$_state_machine__18709__auto__);

(statearr_19298[(1)] = (1));

return statearr_19298;
});
var cljs$core$async$reduce_$_state_machine__18709__auto____1 = (function (state_19282){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19299){var ex__18712__auto__ = e19299;
var statearr_19300_19313 = state_19282;
(statearr_19300_19313[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19282[(4)]))){
var statearr_19301_19314 = state_19282;
(statearr_19301_19314[(1)] = cljs.core.first.call(null,(state_19282[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19315 = state_19282;
state_19282 = G__19315;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18709__auto__ = function(state_19282){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18709__auto____1.call(this,state_19282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18709__auto____0;
cljs$core$async$reduce_$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18709__auto____1;
return cljs$core$async$reduce_$_state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19302 = f__18783__auto__.call(null);
(statearr_19302[(6)] = c__18782__auto__);

return statearr_19302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));

return c__18782__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19321){
var state_val_19322 = (state_19321[(1)]);
if((state_val_19322 === (1))){
var inst_19316 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19321__$1,(2),inst_19316);
} else {
if((state_val_19322 === (2))){
var inst_19318 = (state_19321[(2)]);
var inst_19319 = f__$1.call(null,inst_19318);
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19321__$1,inst_19319);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18709__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18709__auto____0 = (function (){
var statearr_19323 = [null,null,null,null,null,null,null];
(statearr_19323[(0)] = cljs$core$async$transduce_$_state_machine__18709__auto__);

(statearr_19323[(1)] = (1));

return statearr_19323;
});
var cljs$core$async$transduce_$_state_machine__18709__auto____1 = (function (state_19321){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19324){var ex__18712__auto__ = e19324;
var statearr_19325_19328 = state_19321;
(statearr_19325_19328[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19321[(4)]))){
var statearr_19326_19329 = state_19321;
(statearr_19326_19329[(1)] = cljs.core.first.call(null,(state_19321[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19330 = state_19321;
state_19321 = G__19330;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18709__auto__ = function(state_19321){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18709__auto____1.call(this,state_19321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18709__auto____0;
cljs$core$async$transduce_$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18709__auto____1;
return cljs$core$async$transduce_$_state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19327 = f__18783__auto__.call(null);
(statearr_19327[(6)] = c__18782__auto__);

return statearr_19327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));

return c__18782__auto__;
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
var G__19332 = arguments.length;
switch (G__19332) {
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
var c__18782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19357){
var state_val_19358 = (state_19357[(1)]);
if((state_val_19358 === (7))){
var inst_19339 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19359_19381 = state_19357__$1;
(statearr_19359_19381[(2)] = inst_19339);

(statearr_19359_19381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (1))){
var inst_19333 = cljs.core.seq.call(null,coll);
var inst_19334 = inst_19333;
var state_19357__$1 = (function (){var statearr_19360 = state_19357;
(statearr_19360[(7)] = inst_19334);

return statearr_19360;
})();
var statearr_19361_19382 = state_19357__$1;
(statearr_19361_19382[(2)] = null);

(statearr_19361_19382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (4))){
var inst_19334 = (state_19357[(7)]);
var inst_19337 = cljs.core.first.call(null,inst_19334);
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19357__$1,(7),ch,inst_19337);
} else {
if((state_val_19358 === (13))){
var inst_19351 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19362_19383 = state_19357__$1;
(statearr_19362_19383[(2)] = inst_19351);

(statearr_19362_19383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (6))){
var inst_19342 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
if(cljs.core.truth_(inst_19342)){
var statearr_19363_19384 = state_19357__$1;
(statearr_19363_19384[(1)] = (8));

} else {
var statearr_19364_19385 = state_19357__$1;
(statearr_19364_19385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (3))){
var inst_19355 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19357__$1,inst_19355);
} else {
if((state_val_19358 === (12))){
var state_19357__$1 = state_19357;
var statearr_19365_19386 = state_19357__$1;
(statearr_19365_19386[(2)] = null);

(statearr_19365_19386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (2))){
var inst_19334 = (state_19357[(7)]);
var state_19357__$1 = state_19357;
if(cljs.core.truth_(inst_19334)){
var statearr_19366_19387 = state_19357__$1;
(statearr_19366_19387[(1)] = (4));

} else {
var statearr_19367_19388 = state_19357__$1;
(statearr_19367_19388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (11))){
var inst_19348 = cljs.core.async.close_BANG_.call(null,ch);
var state_19357__$1 = state_19357;
var statearr_19368_19389 = state_19357__$1;
(statearr_19368_19389[(2)] = inst_19348);

(statearr_19368_19389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (9))){
var state_19357__$1 = state_19357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19369_19390 = state_19357__$1;
(statearr_19369_19390[(1)] = (11));

} else {
var statearr_19370_19391 = state_19357__$1;
(statearr_19370_19391[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (5))){
var inst_19334 = (state_19357[(7)]);
var state_19357__$1 = state_19357;
var statearr_19371_19392 = state_19357__$1;
(statearr_19371_19392[(2)] = inst_19334);

(statearr_19371_19392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (10))){
var inst_19353 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19372_19393 = state_19357__$1;
(statearr_19372_19393[(2)] = inst_19353);

(statearr_19372_19393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (8))){
var inst_19334 = (state_19357[(7)]);
var inst_19344 = cljs.core.next.call(null,inst_19334);
var inst_19334__$1 = inst_19344;
var state_19357__$1 = (function (){var statearr_19373 = state_19357;
(statearr_19373[(7)] = inst_19334__$1);

return statearr_19373;
})();
var statearr_19374_19394 = state_19357__$1;
(statearr_19374_19394[(2)] = null);

(statearr_19374_19394[(1)] = (2));


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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_19375 = [null,null,null,null,null,null,null,null];
(statearr_19375[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_19375[(1)] = (1));

return statearr_19375;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_19357){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19376){var ex__18712__auto__ = e19376;
var statearr_19377_19395 = state_19357;
(statearr_19377_19395[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19357[(4)]))){
var statearr_19378_19396 = state_19357;
(statearr_19378_19396[(1)] = cljs.core.first.call(null,(state_19357[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19397 = state_19357;
state_19357 = G__19397;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_19357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_19357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19379 = f__18783__auto__.call(null);
(statearr_19379[(6)] = c__18782__auto__);

return statearr_19379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));

return c__18782__auto__;
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
var G__19399 = arguments.length;
switch (G__19399) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19401 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19401.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19402 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19402.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19403 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19403.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19404 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19404.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19405 = (function (ch,cs,meta19406){
this.ch = ch;
this.cs = cs;
this.meta19406 = meta19406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19407,meta19406__$1){
var self__ = this;
var _19407__$1 = this;
return (new cljs.core.async.t_cljs$core$async19405(self__.ch,self__.cs,meta19406__$1));
}));

(cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19407){
var self__ = this;
var _19407__$1 = this;
return self__.meta19406;
}));

(cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19406","meta19406",1218431652,null)], null);
}));

(cljs.core.async.t_cljs$core$async19405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19405");

(cljs.core.async.t_cljs$core$async19405.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async19405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19405.
 */
cljs.core.async.__GT_t_cljs$core$async19405 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19405(ch__$1,cs__$1,meta19406){
return (new cljs.core.async.t_cljs$core$async19405(ch__$1,cs__$1,meta19406));
});

}

return (new cljs.core.async.t_cljs$core$async19405(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18782__auto___19624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19540){
var state_val_19541 = (state_19540[(1)]);
if((state_val_19541 === (7))){
var inst_19536 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19542_19625 = state_19540__$1;
(statearr_19542_19625[(2)] = inst_19536);

(statearr_19542_19625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (20))){
var inst_19441 = (state_19540[(7)]);
var inst_19453 = cljs.core.first.call(null,inst_19441);
var inst_19454 = cljs.core.nth.call(null,inst_19453,(0),null);
var inst_19455 = cljs.core.nth.call(null,inst_19453,(1),null);
var state_19540__$1 = (function (){var statearr_19543 = state_19540;
(statearr_19543[(8)] = inst_19454);

return statearr_19543;
})();
if(cljs.core.truth_(inst_19455)){
var statearr_19544_19626 = state_19540__$1;
(statearr_19544_19626[(1)] = (22));

} else {
var statearr_19545_19627 = state_19540__$1;
(statearr_19545_19627[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (27))){
var inst_19410 = (state_19540[(9)]);
var inst_19485 = (state_19540[(10)]);
var inst_19483 = (state_19540[(11)]);
var inst_19490 = (state_19540[(12)]);
var inst_19490__$1 = cljs.core._nth.call(null,inst_19483,inst_19485);
var inst_19491 = cljs.core.async.put_BANG_.call(null,inst_19490__$1,inst_19410,done);
var state_19540__$1 = (function (){var statearr_19546 = state_19540;
(statearr_19546[(12)] = inst_19490__$1);

return statearr_19546;
})();
if(cljs.core.truth_(inst_19491)){
var statearr_19547_19628 = state_19540__$1;
(statearr_19547_19628[(1)] = (30));

} else {
var statearr_19548_19629 = state_19540__$1;
(statearr_19548_19629[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (1))){
var state_19540__$1 = state_19540;
var statearr_19549_19630 = state_19540__$1;
(statearr_19549_19630[(2)] = null);

(statearr_19549_19630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (24))){
var inst_19441 = (state_19540[(7)]);
var inst_19460 = (state_19540[(2)]);
var inst_19461 = cljs.core.next.call(null,inst_19441);
var inst_19419 = inst_19461;
var inst_19420 = null;
var inst_19421 = (0);
var inst_19422 = (0);
var state_19540__$1 = (function (){var statearr_19550 = state_19540;
(statearr_19550[(13)] = inst_19421);

(statearr_19550[(14)] = inst_19419);

(statearr_19550[(15)] = inst_19420);

(statearr_19550[(16)] = inst_19422);

(statearr_19550[(17)] = inst_19460);

return statearr_19550;
})();
var statearr_19551_19631 = state_19540__$1;
(statearr_19551_19631[(2)] = null);

(statearr_19551_19631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (39))){
var state_19540__$1 = state_19540;
var statearr_19555_19632 = state_19540__$1;
(statearr_19555_19632[(2)] = null);

(statearr_19555_19632[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (4))){
var inst_19410 = (state_19540[(9)]);
var inst_19410__$1 = (state_19540[(2)]);
var inst_19411 = (inst_19410__$1 == null);
var state_19540__$1 = (function (){var statearr_19556 = state_19540;
(statearr_19556[(9)] = inst_19410__$1);

return statearr_19556;
})();
if(cljs.core.truth_(inst_19411)){
var statearr_19557_19633 = state_19540__$1;
(statearr_19557_19633[(1)] = (5));

} else {
var statearr_19558_19634 = state_19540__$1;
(statearr_19558_19634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (15))){
var inst_19421 = (state_19540[(13)]);
var inst_19419 = (state_19540[(14)]);
var inst_19420 = (state_19540[(15)]);
var inst_19422 = (state_19540[(16)]);
var inst_19437 = (state_19540[(2)]);
var inst_19438 = (inst_19422 + (1));
var tmp19552 = inst_19421;
var tmp19553 = inst_19419;
var tmp19554 = inst_19420;
var inst_19419__$1 = tmp19553;
var inst_19420__$1 = tmp19554;
var inst_19421__$1 = tmp19552;
var inst_19422__$1 = inst_19438;
var state_19540__$1 = (function (){var statearr_19559 = state_19540;
(statearr_19559[(13)] = inst_19421__$1);

(statearr_19559[(14)] = inst_19419__$1);

(statearr_19559[(15)] = inst_19420__$1);

(statearr_19559[(16)] = inst_19422__$1);

(statearr_19559[(18)] = inst_19437);

return statearr_19559;
})();
var statearr_19560_19635 = state_19540__$1;
(statearr_19560_19635[(2)] = null);

(statearr_19560_19635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (21))){
var inst_19464 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19564_19636 = state_19540__$1;
(statearr_19564_19636[(2)] = inst_19464);

(statearr_19564_19636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (31))){
var inst_19490 = (state_19540[(12)]);
var inst_19494 = cljs.core.async.untap_STAR_.call(null,m,inst_19490);
var state_19540__$1 = state_19540;
var statearr_19565_19637 = state_19540__$1;
(statearr_19565_19637[(2)] = inst_19494);

(statearr_19565_19637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (32))){
var inst_19485 = (state_19540[(10)]);
var inst_19482 = (state_19540[(19)]);
var inst_19483 = (state_19540[(11)]);
var inst_19484 = (state_19540[(20)]);
var inst_19496 = (state_19540[(2)]);
var inst_19497 = (inst_19485 + (1));
var tmp19561 = inst_19482;
var tmp19562 = inst_19483;
var tmp19563 = inst_19484;
var inst_19482__$1 = tmp19561;
var inst_19483__$1 = tmp19562;
var inst_19484__$1 = tmp19563;
var inst_19485__$1 = inst_19497;
var state_19540__$1 = (function (){var statearr_19566 = state_19540;
(statearr_19566[(21)] = inst_19496);

(statearr_19566[(10)] = inst_19485__$1);

(statearr_19566[(19)] = inst_19482__$1);

(statearr_19566[(11)] = inst_19483__$1);

(statearr_19566[(20)] = inst_19484__$1);

return statearr_19566;
})();
var statearr_19567_19638 = state_19540__$1;
(statearr_19567_19638[(2)] = null);

(statearr_19567_19638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (40))){
var inst_19509 = (state_19540[(22)]);
var inst_19513 = cljs.core.async.untap_STAR_.call(null,m,inst_19509);
var state_19540__$1 = state_19540;
var statearr_19568_19639 = state_19540__$1;
(statearr_19568_19639[(2)] = inst_19513);

(statearr_19568_19639[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (33))){
var inst_19500 = (state_19540[(23)]);
var inst_19502 = cljs.core.chunked_seq_QMARK_.call(null,inst_19500);
var state_19540__$1 = state_19540;
if(inst_19502){
var statearr_19569_19640 = state_19540__$1;
(statearr_19569_19640[(1)] = (36));

} else {
var statearr_19570_19641 = state_19540__$1;
(statearr_19570_19641[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (13))){
var inst_19431 = (state_19540[(24)]);
var inst_19434 = cljs.core.async.close_BANG_.call(null,inst_19431);
var state_19540__$1 = state_19540;
var statearr_19571_19642 = state_19540__$1;
(statearr_19571_19642[(2)] = inst_19434);

(statearr_19571_19642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (22))){
var inst_19454 = (state_19540[(8)]);
var inst_19457 = cljs.core.async.close_BANG_.call(null,inst_19454);
var state_19540__$1 = state_19540;
var statearr_19572_19643 = state_19540__$1;
(statearr_19572_19643[(2)] = inst_19457);

(statearr_19572_19643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (36))){
var inst_19500 = (state_19540[(23)]);
var inst_19504 = cljs.core.chunk_first.call(null,inst_19500);
var inst_19505 = cljs.core.chunk_rest.call(null,inst_19500);
var inst_19506 = cljs.core.count.call(null,inst_19504);
var inst_19482 = inst_19505;
var inst_19483 = inst_19504;
var inst_19484 = inst_19506;
var inst_19485 = (0);
var state_19540__$1 = (function (){var statearr_19573 = state_19540;
(statearr_19573[(10)] = inst_19485);

(statearr_19573[(19)] = inst_19482);

(statearr_19573[(11)] = inst_19483);

(statearr_19573[(20)] = inst_19484);

return statearr_19573;
})();
var statearr_19574_19644 = state_19540__$1;
(statearr_19574_19644[(2)] = null);

(statearr_19574_19644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (41))){
var inst_19500 = (state_19540[(23)]);
var inst_19515 = (state_19540[(2)]);
var inst_19516 = cljs.core.next.call(null,inst_19500);
var inst_19482 = inst_19516;
var inst_19483 = null;
var inst_19484 = (0);
var inst_19485 = (0);
var state_19540__$1 = (function (){var statearr_19575 = state_19540;
(statearr_19575[(10)] = inst_19485);

(statearr_19575[(25)] = inst_19515);

(statearr_19575[(19)] = inst_19482);

(statearr_19575[(11)] = inst_19483);

(statearr_19575[(20)] = inst_19484);

return statearr_19575;
})();
var statearr_19576_19645 = state_19540__$1;
(statearr_19576_19645[(2)] = null);

(statearr_19576_19645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (43))){
var state_19540__$1 = state_19540;
var statearr_19577_19646 = state_19540__$1;
(statearr_19577_19646[(2)] = null);

(statearr_19577_19646[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (29))){
var inst_19524 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19578_19647 = state_19540__$1;
(statearr_19578_19647[(2)] = inst_19524);

(statearr_19578_19647[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (44))){
var inst_19533 = (state_19540[(2)]);
var state_19540__$1 = (function (){var statearr_19579 = state_19540;
(statearr_19579[(26)] = inst_19533);

return statearr_19579;
})();
var statearr_19580_19648 = state_19540__$1;
(statearr_19580_19648[(2)] = null);

(statearr_19580_19648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (6))){
var inst_19474 = (state_19540[(27)]);
var inst_19473 = cljs.core.deref.call(null,cs);
var inst_19474__$1 = cljs.core.keys.call(null,inst_19473);
var inst_19475 = cljs.core.count.call(null,inst_19474__$1);
var inst_19476 = cljs.core.reset_BANG_.call(null,dctr,inst_19475);
var inst_19481 = cljs.core.seq.call(null,inst_19474__$1);
var inst_19482 = inst_19481;
var inst_19483 = null;
var inst_19484 = (0);
var inst_19485 = (0);
var state_19540__$1 = (function (){var statearr_19581 = state_19540;
(statearr_19581[(28)] = inst_19476);

(statearr_19581[(10)] = inst_19485);

(statearr_19581[(27)] = inst_19474__$1);

(statearr_19581[(19)] = inst_19482);

(statearr_19581[(11)] = inst_19483);

(statearr_19581[(20)] = inst_19484);

return statearr_19581;
})();
var statearr_19582_19649 = state_19540__$1;
(statearr_19582_19649[(2)] = null);

(statearr_19582_19649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (28))){
var inst_19500 = (state_19540[(23)]);
var inst_19482 = (state_19540[(19)]);
var inst_19500__$1 = cljs.core.seq.call(null,inst_19482);
var state_19540__$1 = (function (){var statearr_19583 = state_19540;
(statearr_19583[(23)] = inst_19500__$1);

return statearr_19583;
})();
if(inst_19500__$1){
var statearr_19584_19650 = state_19540__$1;
(statearr_19584_19650[(1)] = (33));

} else {
var statearr_19585_19651 = state_19540__$1;
(statearr_19585_19651[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (25))){
var inst_19485 = (state_19540[(10)]);
var inst_19484 = (state_19540[(20)]);
var inst_19487 = (inst_19485 < inst_19484);
var inst_19488 = inst_19487;
var state_19540__$1 = state_19540;
if(cljs.core.truth_(inst_19488)){
var statearr_19586_19652 = state_19540__$1;
(statearr_19586_19652[(1)] = (27));

} else {
var statearr_19587_19653 = state_19540__$1;
(statearr_19587_19653[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (34))){
var state_19540__$1 = state_19540;
var statearr_19588_19654 = state_19540__$1;
(statearr_19588_19654[(2)] = null);

(statearr_19588_19654[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (17))){
var state_19540__$1 = state_19540;
var statearr_19589_19655 = state_19540__$1;
(statearr_19589_19655[(2)] = null);

(statearr_19589_19655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (3))){
var inst_19538 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19540__$1,inst_19538);
} else {
if((state_val_19541 === (12))){
var inst_19469 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19590_19656 = state_19540__$1;
(statearr_19590_19656[(2)] = inst_19469);

(statearr_19590_19656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (2))){
var state_19540__$1 = state_19540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19540__$1,(4),ch);
} else {
if((state_val_19541 === (23))){
var state_19540__$1 = state_19540;
var statearr_19591_19657 = state_19540__$1;
(statearr_19591_19657[(2)] = null);

(statearr_19591_19657[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (35))){
var inst_19522 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19592_19658 = state_19540__$1;
(statearr_19592_19658[(2)] = inst_19522);

(statearr_19592_19658[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (19))){
var inst_19441 = (state_19540[(7)]);
var inst_19445 = cljs.core.chunk_first.call(null,inst_19441);
var inst_19446 = cljs.core.chunk_rest.call(null,inst_19441);
var inst_19447 = cljs.core.count.call(null,inst_19445);
var inst_19419 = inst_19446;
var inst_19420 = inst_19445;
var inst_19421 = inst_19447;
var inst_19422 = (0);
var state_19540__$1 = (function (){var statearr_19593 = state_19540;
(statearr_19593[(13)] = inst_19421);

(statearr_19593[(14)] = inst_19419);

(statearr_19593[(15)] = inst_19420);

(statearr_19593[(16)] = inst_19422);

return statearr_19593;
})();
var statearr_19594_19659 = state_19540__$1;
(statearr_19594_19659[(2)] = null);

(statearr_19594_19659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (11))){
var inst_19419 = (state_19540[(14)]);
var inst_19441 = (state_19540[(7)]);
var inst_19441__$1 = cljs.core.seq.call(null,inst_19419);
var state_19540__$1 = (function (){var statearr_19595 = state_19540;
(statearr_19595[(7)] = inst_19441__$1);

return statearr_19595;
})();
if(inst_19441__$1){
var statearr_19596_19660 = state_19540__$1;
(statearr_19596_19660[(1)] = (16));

} else {
var statearr_19597_19661 = state_19540__$1;
(statearr_19597_19661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (9))){
var inst_19471 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19598_19662 = state_19540__$1;
(statearr_19598_19662[(2)] = inst_19471);

(statearr_19598_19662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (5))){
var inst_19417 = cljs.core.deref.call(null,cs);
var inst_19418 = cljs.core.seq.call(null,inst_19417);
var inst_19419 = inst_19418;
var inst_19420 = null;
var inst_19421 = (0);
var inst_19422 = (0);
var state_19540__$1 = (function (){var statearr_19599 = state_19540;
(statearr_19599[(13)] = inst_19421);

(statearr_19599[(14)] = inst_19419);

(statearr_19599[(15)] = inst_19420);

(statearr_19599[(16)] = inst_19422);

return statearr_19599;
})();
var statearr_19600_19663 = state_19540__$1;
(statearr_19600_19663[(2)] = null);

(statearr_19600_19663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (14))){
var state_19540__$1 = state_19540;
var statearr_19601_19664 = state_19540__$1;
(statearr_19601_19664[(2)] = null);

(statearr_19601_19664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (45))){
var inst_19530 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19602_19665 = state_19540__$1;
(statearr_19602_19665[(2)] = inst_19530);

(statearr_19602_19665[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (26))){
var inst_19474 = (state_19540[(27)]);
var inst_19526 = (state_19540[(2)]);
var inst_19527 = cljs.core.seq.call(null,inst_19474);
var state_19540__$1 = (function (){var statearr_19603 = state_19540;
(statearr_19603[(29)] = inst_19526);

return statearr_19603;
})();
if(inst_19527){
var statearr_19604_19666 = state_19540__$1;
(statearr_19604_19666[(1)] = (42));

} else {
var statearr_19605_19667 = state_19540__$1;
(statearr_19605_19667[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (16))){
var inst_19441 = (state_19540[(7)]);
var inst_19443 = cljs.core.chunked_seq_QMARK_.call(null,inst_19441);
var state_19540__$1 = state_19540;
if(inst_19443){
var statearr_19606_19668 = state_19540__$1;
(statearr_19606_19668[(1)] = (19));

} else {
var statearr_19607_19669 = state_19540__$1;
(statearr_19607_19669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (38))){
var inst_19519 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19608_19670 = state_19540__$1;
(statearr_19608_19670[(2)] = inst_19519);

(statearr_19608_19670[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (30))){
var state_19540__$1 = state_19540;
var statearr_19609_19671 = state_19540__$1;
(statearr_19609_19671[(2)] = null);

(statearr_19609_19671[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (10))){
var inst_19420 = (state_19540[(15)]);
var inst_19422 = (state_19540[(16)]);
var inst_19430 = cljs.core._nth.call(null,inst_19420,inst_19422);
var inst_19431 = cljs.core.nth.call(null,inst_19430,(0),null);
var inst_19432 = cljs.core.nth.call(null,inst_19430,(1),null);
var state_19540__$1 = (function (){var statearr_19610 = state_19540;
(statearr_19610[(24)] = inst_19431);

return statearr_19610;
})();
if(cljs.core.truth_(inst_19432)){
var statearr_19611_19672 = state_19540__$1;
(statearr_19611_19672[(1)] = (13));

} else {
var statearr_19612_19673 = state_19540__$1;
(statearr_19612_19673[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (18))){
var inst_19467 = (state_19540[(2)]);
var state_19540__$1 = state_19540;
var statearr_19613_19674 = state_19540__$1;
(statearr_19613_19674[(2)] = inst_19467);

(statearr_19613_19674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (42))){
var state_19540__$1 = state_19540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19540__$1,(45),dchan);
} else {
if((state_val_19541 === (37))){
var inst_19410 = (state_19540[(9)]);
var inst_19509 = (state_19540[(22)]);
var inst_19500 = (state_19540[(23)]);
var inst_19509__$1 = cljs.core.first.call(null,inst_19500);
var inst_19510 = cljs.core.async.put_BANG_.call(null,inst_19509__$1,inst_19410,done);
var state_19540__$1 = (function (){var statearr_19614 = state_19540;
(statearr_19614[(22)] = inst_19509__$1);

return statearr_19614;
})();
if(cljs.core.truth_(inst_19510)){
var statearr_19615_19675 = state_19540__$1;
(statearr_19615_19675[(1)] = (39));

} else {
var statearr_19616_19676 = state_19540__$1;
(statearr_19616_19676[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19541 === (8))){
var inst_19421 = (state_19540[(13)]);
var inst_19422 = (state_19540[(16)]);
var inst_19424 = (inst_19422 < inst_19421);
var inst_19425 = inst_19424;
var state_19540__$1 = state_19540;
if(cljs.core.truth_(inst_19425)){
var statearr_19617_19677 = state_19540__$1;
(statearr_19617_19677[(1)] = (10));

} else {
var statearr_19618_19678 = state_19540__$1;
(statearr_19618_19678[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__18709__auto__ = null;
var cljs$core$async$mult_$_state_machine__18709__auto____0 = (function (){
var statearr_19619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19619[(0)] = cljs$core$async$mult_$_state_machine__18709__auto__);

(statearr_19619[(1)] = (1));

return statearr_19619;
});
var cljs$core$async$mult_$_state_machine__18709__auto____1 = (function (state_19540){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19620){var ex__18712__auto__ = e19620;
var statearr_19621_19679 = state_19540;
(statearr_19621_19679[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19540[(4)]))){
var statearr_19622_19680 = state_19540;
(statearr_19622_19680[(1)] = cljs.core.first.call(null,(state_19540[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19681 = state_19540;
state_19540 = G__19681;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18709__auto__ = function(state_19540){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18709__auto____1.call(this,state_19540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18709__auto____0;
cljs$core$async$mult_$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18709__auto____1;
return cljs$core$async$mult_$_state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19623 = f__18783__auto__.call(null);
(statearr_19623[(6)] = c__18782__auto___19624);

return statearr_19623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
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
var G__19683 = arguments.length;
switch (G__19683) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19685 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19685.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19686 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19686.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19687 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19687.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19688 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19688.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19689 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19689.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___19699 = arguments.length;
var i__4772__auto___19700 = (0);
while(true){
if((i__4772__auto___19700 < len__4771__auto___19699)){
args__4777__auto__.push((arguments[i__4772__auto___19700]));

var G__19701 = (i__4772__auto___19700 + (1));
i__4772__auto___19700 = G__19701;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19694){
var map__19695 = p__19694;
var map__19695__$1 = cljs.core.__destructure_map.call(null,map__19695);
var opts = map__19695__$1;
var statearr_19696_19702 = state;
(statearr_19696_19702[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_19697_19703 = state;
(statearr_19697_19703[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19698_19704 = state;
(statearr_19698_19704[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19690){
var G__19691 = cljs.core.first.call(null,seq19690);
var seq19690__$1 = cljs.core.next.call(null,seq19690);
var G__19692 = cljs.core.first.call(null,seq19690__$1);
var seq19690__$2 = cljs.core.next.call(null,seq19690__$1);
var G__19693 = cljs.core.first.call(null,seq19690__$2);
var seq19690__$3 = cljs.core.next.call(null,seq19690__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19691,G__19692,G__19693,seq19690__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19705 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19706){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19706 = meta19706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19707,meta19706__$1){
var self__ = this;
var _19707__$1 = this;
return (new cljs.core.async.t_cljs$core$async19705(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19706__$1));
}));

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19707){
var self__ = this;
var _19707__$1 = this;
return self__.meta19706;
}));

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19705.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta19706","meta19706",740247550,null)], null);
}));

(cljs.core.async.t_cljs$core$async19705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19705");

(cljs.core.async.t_cljs$core$async19705.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async19705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19705.
 */
cljs.core.async.__GT_t_cljs$core$async19705 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19705(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19706){
return (new cljs.core.async.t_cljs$core$async19705(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19706));
});

}

return (new cljs.core.async.t_cljs$core$async19705(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18782__auto___19805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19769){
var state_val_19770 = (state_19769[(1)]);
if((state_val_19770 === (7))){
var inst_19765 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
var statearr_19771_19806 = state_19769__$1;
(statearr_19771_19806[(2)] = inst_19765);

(statearr_19771_19806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (20))){
var inst_19759 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
var statearr_19772_19807 = state_19769__$1;
(statearr_19772_19807[(2)] = inst_19759);

(statearr_19772_19807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (1))){
var inst_19711 = calc_state.call(null);
var inst_19712 = cljs.core.__destructure_map.call(null,inst_19711);
var inst_19713 = cljs.core.get.call(null,inst_19712,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19714 = cljs.core.get.call(null,inst_19712,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19715 = cljs.core.get.call(null,inst_19712,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19716 = inst_19711;
var state_19769__$1 = (function (){var statearr_19773 = state_19769;
(statearr_19773[(7)] = inst_19713);

(statearr_19773[(8)] = inst_19715);

(statearr_19773[(9)] = inst_19716);

(statearr_19773[(10)] = inst_19714);

return statearr_19773;
})();
var statearr_19774_19808 = state_19769__$1;
(statearr_19774_19808[(2)] = null);

(statearr_19774_19808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (4))){
var inst_19728 = (state_19769[(11)]);
var inst_19729 = (state_19769[(12)]);
var inst_19727 = (state_19769[(2)]);
var inst_19728__$1 = cljs.core.nth.call(null,inst_19727,(0),null);
var inst_19729__$1 = cljs.core.nth.call(null,inst_19727,(1),null);
var inst_19730 = (inst_19728__$1 == null);
var inst_19731 = cljs.core._EQ_.call(null,inst_19729__$1,change);
var inst_19732 = ((inst_19730) || (inst_19731));
var state_19769__$1 = (function (){var statearr_19775 = state_19769;
(statearr_19775[(11)] = inst_19728__$1);

(statearr_19775[(12)] = inst_19729__$1);

return statearr_19775;
})();
if(cljs.core.truth_(inst_19732)){
var statearr_19776_19809 = state_19769__$1;
(statearr_19776_19809[(1)] = (5));

} else {
var statearr_19777_19810 = state_19769__$1;
(statearr_19777_19810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (15))){
var inst_19719 = (state_19769[(13)]);
var inst_19716 = inst_19719;
var state_19769__$1 = (function (){var statearr_19778 = state_19769;
(statearr_19778[(9)] = inst_19716);

return statearr_19778;
})();
var statearr_19779_19811 = state_19769__$1;
(statearr_19779_19811[(2)] = null);

(statearr_19779_19811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (13))){
var inst_19751 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
if(cljs.core.truth_(inst_19751)){
var statearr_19780_19812 = state_19769__$1;
(statearr_19780_19812[(1)] = (14));

} else {
var statearr_19781_19813 = state_19769__$1;
(statearr_19781_19813[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (6))){
var inst_19720 = (state_19769[(14)]);
var inst_19743 = (state_19769[(15)]);
var inst_19729 = (state_19769[(12)]);
var inst_19743__$1 = inst_19720.call(null,inst_19729);
var state_19769__$1 = (function (){var statearr_19782 = state_19769;
(statearr_19782[(15)] = inst_19743__$1);

return statearr_19782;
})();
if(cljs.core.truth_(inst_19743__$1)){
var statearr_19783_19814 = state_19769__$1;
(statearr_19783_19814[(1)] = (11));

} else {
var statearr_19784_19815 = state_19769__$1;
(statearr_19784_19815[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (17))){
var inst_19754 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
if(cljs.core.truth_(inst_19754)){
var statearr_19785_19816 = state_19769__$1;
(statearr_19785_19816[(1)] = (18));

} else {
var statearr_19786_19817 = state_19769__$1;
(statearr_19786_19817[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (3))){
var inst_19767 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19769__$1,inst_19767);
} else {
if((state_val_19770 === (12))){
var inst_19720 = (state_19769[(14)]);
var inst_19721 = (state_19769[(16)]);
var inst_19729 = (state_19769[(12)]);
var inst_19746 = cljs.core.empty_QMARK_.call(null,inst_19720);
var inst_19747 = inst_19721.call(null,inst_19729);
var inst_19748 = cljs.core.not.call(null,inst_19747);
var inst_19749 = ((inst_19746) && (inst_19748));
var state_19769__$1 = state_19769;
var statearr_19787_19818 = state_19769__$1;
(statearr_19787_19818[(2)] = inst_19749);

(statearr_19787_19818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (2))){
var inst_19719 = (state_19769[(13)]);
var inst_19716 = (state_19769[(9)]);
var inst_19719__$1 = cljs.core.__destructure_map.call(null,inst_19716);
var inst_19720 = cljs.core.get.call(null,inst_19719__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19721 = cljs.core.get.call(null,inst_19719__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19722 = cljs.core.get.call(null,inst_19719__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19769__$1 = (function (){var statearr_19788 = state_19769;
(statearr_19788[(13)] = inst_19719__$1);

(statearr_19788[(14)] = inst_19720);

(statearr_19788[(16)] = inst_19721);

return statearr_19788;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19769__$1,(4),inst_19722);
} else {
if((state_val_19770 === (19))){
var state_19769__$1 = state_19769;
var statearr_19789_19819 = state_19769__$1;
(statearr_19789_19819[(2)] = null);

(statearr_19789_19819[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (11))){
var inst_19743 = (state_19769[(15)]);
var state_19769__$1 = state_19769;
var statearr_19790_19820 = state_19769__$1;
(statearr_19790_19820[(2)] = inst_19743);

(statearr_19790_19820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (9))){
var state_19769__$1 = state_19769;
var statearr_19791_19821 = state_19769__$1;
(statearr_19791_19821[(2)] = null);

(statearr_19791_19821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (5))){
var inst_19728 = (state_19769[(11)]);
var inst_19734 = (inst_19728 == null);
var state_19769__$1 = state_19769;
if(cljs.core.truth_(inst_19734)){
var statearr_19792_19822 = state_19769__$1;
(statearr_19792_19822[(1)] = (8));

} else {
var statearr_19793_19823 = state_19769__$1;
(statearr_19793_19823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (14))){
var inst_19728 = (state_19769[(11)]);
var state_19769__$1 = state_19769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19769__$1,(17),out,inst_19728);
} else {
if((state_val_19770 === (16))){
var inst_19763 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
var statearr_19794_19824 = state_19769__$1;
(statearr_19794_19824[(2)] = inst_19763);

(statearr_19794_19824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (10))){
var inst_19739 = (state_19769[(2)]);
var inst_19740 = calc_state.call(null);
var inst_19716 = inst_19740;
var state_19769__$1 = (function (){var statearr_19795 = state_19769;
(statearr_19795[(17)] = inst_19739);

(statearr_19795[(9)] = inst_19716);

return statearr_19795;
})();
var statearr_19796_19825 = state_19769__$1;
(statearr_19796_19825[(2)] = null);

(statearr_19796_19825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (18))){
var inst_19719 = (state_19769[(13)]);
var inst_19716 = inst_19719;
var state_19769__$1 = (function (){var statearr_19797 = state_19769;
(statearr_19797[(9)] = inst_19716);

return statearr_19797;
})();
var statearr_19798_19826 = state_19769__$1;
(statearr_19798_19826[(2)] = null);

(statearr_19798_19826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (8))){
var inst_19729 = (state_19769[(12)]);
var inst_19736 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19729);
var state_19769__$1 = state_19769;
var statearr_19799_19827 = state_19769__$1;
(statearr_19799_19827[(2)] = inst_19736);

(statearr_19799_19827[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__18709__auto__ = null;
var cljs$core$async$mix_$_state_machine__18709__auto____0 = (function (){
var statearr_19800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19800[(0)] = cljs$core$async$mix_$_state_machine__18709__auto__);

(statearr_19800[(1)] = (1));

return statearr_19800;
});
var cljs$core$async$mix_$_state_machine__18709__auto____1 = (function (state_19769){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19801){var ex__18712__auto__ = e19801;
var statearr_19802_19828 = state_19769;
(statearr_19802_19828[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19769[(4)]))){
var statearr_19803_19829 = state_19769;
(statearr_19803_19829[(1)] = cljs.core.first.call(null,(state_19769[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19830 = state_19769;
state_19769 = G__19830;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18709__auto__ = function(state_19769){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18709__auto____1.call(this,state_19769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18709__auto____0;
cljs$core$async$mix_$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18709__auto____1;
return cljs$core$async$mix_$_state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19804 = f__18783__auto__.call(null);
(statearr_19804[(6)] = c__18782__auto___19805);

return statearr_19804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19833 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19833.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19834 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19834.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19835 = (function() {
var G__19836 = null;
var G__19836__1 = (function (p){
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
var G__19836__2 = (function (p,v){
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
G__19836 = function(p,v){
switch(arguments.length){
case 1:
return G__19836__1.call(this,p);
case 2:
return G__19836__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19836.cljs$core$IFn$_invoke$arity$1 = G__19836__1;
G__19836.cljs$core$IFn$_invoke$arity$2 = G__19836__2;
return G__19836;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19832 = arguments.length;
switch (G__19832) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19835.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19835.call(null,p,v);
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
var G__19840 = arguments.length;
switch (G__19840) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__19838_SHARP_){
if(cljs.core.truth_(p1__19838_SHARP_.call(null,topic))){
return p1__19838_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19838_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19841 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19842){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19842 = meta19842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19843,meta19842__$1){
var self__ = this;
var _19843__$1 = this;
return (new cljs.core.async.t_cljs$core$async19841(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19842__$1));
}));

(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19843){
var self__ = this;
var _19843__$1 = this;
return self__.meta19842;
}));

(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19842","meta19842",-562836381,null)], null);
}));

(cljs.core.async.t_cljs$core$async19841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19841");

(cljs.core.async.t_cljs$core$async19841.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async19841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19841.
 */
cljs.core.async.__GT_t_cljs$core$async19841 = (function cljs$core$async$__GT_t_cljs$core$async19841(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19842){
return (new cljs.core.async.t_cljs$core$async19841(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19842));
});

}

return (new cljs.core.async.t_cljs$core$async19841(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18782__auto___19962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_19915){
var state_val_19916 = (state_19915[(1)]);
if((state_val_19916 === (7))){
var inst_19911 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
var statearr_19917_19963 = state_19915__$1;
(statearr_19917_19963[(2)] = inst_19911);

(statearr_19917_19963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (20))){
var state_19915__$1 = state_19915;
var statearr_19918_19964 = state_19915__$1;
(statearr_19918_19964[(2)] = null);

(statearr_19918_19964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (1))){
var state_19915__$1 = state_19915;
var statearr_19919_19965 = state_19915__$1;
(statearr_19919_19965[(2)] = null);

(statearr_19919_19965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (24))){
var inst_19894 = (state_19915[(7)]);
var inst_19903 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19894);
var state_19915__$1 = state_19915;
var statearr_19920_19966 = state_19915__$1;
(statearr_19920_19966[(2)] = inst_19903);

(statearr_19920_19966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (4))){
var inst_19846 = (state_19915[(8)]);
var inst_19846__$1 = (state_19915[(2)]);
var inst_19847 = (inst_19846__$1 == null);
var state_19915__$1 = (function (){var statearr_19921 = state_19915;
(statearr_19921[(8)] = inst_19846__$1);

return statearr_19921;
})();
if(cljs.core.truth_(inst_19847)){
var statearr_19922_19967 = state_19915__$1;
(statearr_19922_19967[(1)] = (5));

} else {
var statearr_19923_19968 = state_19915__$1;
(statearr_19923_19968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (15))){
var inst_19888 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
var statearr_19924_19969 = state_19915__$1;
(statearr_19924_19969[(2)] = inst_19888);

(statearr_19924_19969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (21))){
var inst_19908 = (state_19915[(2)]);
var state_19915__$1 = (function (){var statearr_19925 = state_19915;
(statearr_19925[(9)] = inst_19908);

return statearr_19925;
})();
var statearr_19926_19970 = state_19915__$1;
(statearr_19926_19970[(2)] = null);

(statearr_19926_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (13))){
var inst_19870 = (state_19915[(10)]);
var inst_19872 = cljs.core.chunked_seq_QMARK_.call(null,inst_19870);
var state_19915__$1 = state_19915;
if(inst_19872){
var statearr_19927_19971 = state_19915__$1;
(statearr_19927_19971[(1)] = (16));

} else {
var statearr_19928_19972 = state_19915__$1;
(statearr_19928_19972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (22))){
var inst_19900 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
if(cljs.core.truth_(inst_19900)){
var statearr_19929_19973 = state_19915__$1;
(statearr_19929_19973[(1)] = (23));

} else {
var statearr_19930_19974 = state_19915__$1;
(statearr_19930_19974[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (6))){
var inst_19896 = (state_19915[(11)]);
var inst_19846 = (state_19915[(8)]);
var inst_19894 = (state_19915[(7)]);
var inst_19894__$1 = topic_fn.call(null,inst_19846);
var inst_19895 = cljs.core.deref.call(null,mults);
var inst_19896__$1 = cljs.core.get.call(null,inst_19895,inst_19894__$1);
var state_19915__$1 = (function (){var statearr_19931 = state_19915;
(statearr_19931[(11)] = inst_19896__$1);

(statearr_19931[(7)] = inst_19894__$1);

return statearr_19931;
})();
if(cljs.core.truth_(inst_19896__$1)){
var statearr_19932_19975 = state_19915__$1;
(statearr_19932_19975[(1)] = (19));

} else {
var statearr_19933_19976 = state_19915__$1;
(statearr_19933_19976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (25))){
var inst_19905 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
var statearr_19934_19977 = state_19915__$1;
(statearr_19934_19977[(2)] = inst_19905);

(statearr_19934_19977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (17))){
var inst_19870 = (state_19915[(10)]);
var inst_19879 = cljs.core.first.call(null,inst_19870);
var inst_19880 = cljs.core.async.muxch_STAR_.call(null,inst_19879);
var inst_19881 = cljs.core.async.close_BANG_.call(null,inst_19880);
var inst_19882 = cljs.core.next.call(null,inst_19870);
var inst_19856 = inst_19882;
var inst_19857 = null;
var inst_19858 = (0);
var inst_19859 = (0);
var state_19915__$1 = (function (){var statearr_19935 = state_19915;
(statearr_19935[(12)] = inst_19881);

(statearr_19935[(13)] = inst_19857);

(statearr_19935[(14)] = inst_19859);

(statearr_19935[(15)] = inst_19856);

(statearr_19935[(16)] = inst_19858);

return statearr_19935;
})();
var statearr_19936_19978 = state_19915__$1;
(statearr_19936_19978[(2)] = null);

(statearr_19936_19978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (3))){
var inst_19913 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19915__$1,inst_19913);
} else {
if((state_val_19916 === (12))){
var inst_19890 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
var statearr_19937_19979 = state_19915__$1;
(statearr_19937_19979[(2)] = inst_19890);

(statearr_19937_19979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (2))){
var state_19915__$1 = state_19915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19915__$1,(4),ch);
} else {
if((state_val_19916 === (23))){
var state_19915__$1 = state_19915;
var statearr_19938_19980 = state_19915__$1;
(statearr_19938_19980[(2)] = null);

(statearr_19938_19980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (19))){
var inst_19896 = (state_19915[(11)]);
var inst_19846 = (state_19915[(8)]);
var inst_19898 = cljs.core.async.muxch_STAR_.call(null,inst_19896);
var state_19915__$1 = state_19915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19915__$1,(22),inst_19898,inst_19846);
} else {
if((state_val_19916 === (11))){
var inst_19870 = (state_19915[(10)]);
var inst_19856 = (state_19915[(15)]);
var inst_19870__$1 = cljs.core.seq.call(null,inst_19856);
var state_19915__$1 = (function (){var statearr_19939 = state_19915;
(statearr_19939[(10)] = inst_19870__$1);

return statearr_19939;
})();
if(inst_19870__$1){
var statearr_19940_19981 = state_19915__$1;
(statearr_19940_19981[(1)] = (13));

} else {
var statearr_19941_19982 = state_19915__$1;
(statearr_19941_19982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (9))){
var inst_19892 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
var statearr_19942_19983 = state_19915__$1;
(statearr_19942_19983[(2)] = inst_19892);

(statearr_19942_19983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (5))){
var inst_19853 = cljs.core.deref.call(null,mults);
var inst_19854 = cljs.core.vals.call(null,inst_19853);
var inst_19855 = cljs.core.seq.call(null,inst_19854);
var inst_19856 = inst_19855;
var inst_19857 = null;
var inst_19858 = (0);
var inst_19859 = (0);
var state_19915__$1 = (function (){var statearr_19943 = state_19915;
(statearr_19943[(13)] = inst_19857);

(statearr_19943[(14)] = inst_19859);

(statearr_19943[(15)] = inst_19856);

(statearr_19943[(16)] = inst_19858);

return statearr_19943;
})();
var statearr_19944_19984 = state_19915__$1;
(statearr_19944_19984[(2)] = null);

(statearr_19944_19984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (14))){
var state_19915__$1 = state_19915;
var statearr_19948_19985 = state_19915__$1;
(statearr_19948_19985[(2)] = null);

(statearr_19948_19985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (16))){
var inst_19870 = (state_19915[(10)]);
var inst_19874 = cljs.core.chunk_first.call(null,inst_19870);
var inst_19875 = cljs.core.chunk_rest.call(null,inst_19870);
var inst_19876 = cljs.core.count.call(null,inst_19874);
var inst_19856 = inst_19875;
var inst_19857 = inst_19874;
var inst_19858 = inst_19876;
var inst_19859 = (0);
var state_19915__$1 = (function (){var statearr_19949 = state_19915;
(statearr_19949[(13)] = inst_19857);

(statearr_19949[(14)] = inst_19859);

(statearr_19949[(15)] = inst_19856);

(statearr_19949[(16)] = inst_19858);

return statearr_19949;
})();
var statearr_19950_19986 = state_19915__$1;
(statearr_19950_19986[(2)] = null);

(statearr_19950_19986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (10))){
var inst_19857 = (state_19915[(13)]);
var inst_19859 = (state_19915[(14)]);
var inst_19856 = (state_19915[(15)]);
var inst_19858 = (state_19915[(16)]);
var inst_19864 = cljs.core._nth.call(null,inst_19857,inst_19859);
var inst_19865 = cljs.core.async.muxch_STAR_.call(null,inst_19864);
var inst_19866 = cljs.core.async.close_BANG_.call(null,inst_19865);
var inst_19867 = (inst_19859 + (1));
var tmp19945 = inst_19857;
var tmp19946 = inst_19856;
var tmp19947 = inst_19858;
var inst_19856__$1 = tmp19946;
var inst_19857__$1 = tmp19945;
var inst_19858__$1 = tmp19947;
var inst_19859__$1 = inst_19867;
var state_19915__$1 = (function (){var statearr_19951 = state_19915;
(statearr_19951[(13)] = inst_19857__$1);

(statearr_19951[(14)] = inst_19859__$1);

(statearr_19951[(15)] = inst_19856__$1);

(statearr_19951[(16)] = inst_19858__$1);

(statearr_19951[(17)] = inst_19866);

return statearr_19951;
})();
var statearr_19952_19987 = state_19915__$1;
(statearr_19952_19987[(2)] = null);

(statearr_19952_19987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (18))){
var inst_19885 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
var statearr_19953_19988 = state_19915__$1;
(statearr_19953_19988[(2)] = inst_19885);

(statearr_19953_19988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (8))){
var inst_19859 = (state_19915[(14)]);
var inst_19858 = (state_19915[(16)]);
var inst_19861 = (inst_19859 < inst_19858);
var inst_19862 = inst_19861;
var state_19915__$1 = state_19915;
if(cljs.core.truth_(inst_19862)){
var statearr_19954_19989 = state_19915__$1;
(statearr_19954_19989[(1)] = (10));

} else {
var statearr_19955_19990 = state_19915__$1;
(statearr_19955_19990[(1)] = (11));

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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_19956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19956[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_19956[(1)] = (1));

return statearr_19956;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_19915){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_19915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e19957){var ex__18712__auto__ = e19957;
var statearr_19958_19991 = state_19915;
(statearr_19958_19991[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_19915[(4)]))){
var statearr_19959_19992 = state_19915;
(statearr_19959_19992[(1)] = cljs.core.first.call(null,(state_19915[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19993 = state_19915;
state_19915 = G__19993;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_19915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_19915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_19960 = f__18783__auto__.call(null);
(statearr_19960[(6)] = c__18782__auto___19962);

return statearr_19960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
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
var G__19995 = arguments.length;
switch (G__19995) {
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
var G__19998 = arguments.length;
switch (G__19998) {
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
var G__20001 = arguments.length;
switch (G__20001) {
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
var c__18782__auto___20079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_20044){
var state_val_20045 = (state_20044[(1)]);
if((state_val_20045 === (7))){
var state_20044__$1 = state_20044;
var statearr_20046_20080 = state_20044__$1;
(statearr_20046_20080[(2)] = null);

(statearr_20046_20080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (1))){
var state_20044__$1 = state_20044;
var statearr_20047_20081 = state_20044__$1;
(statearr_20047_20081[(2)] = null);

(statearr_20047_20081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (4))){
var inst_20004 = (state_20044[(7)]);
var inst_20005 = (state_20044[(8)]);
var inst_20007 = (inst_20005 < inst_20004);
var state_20044__$1 = state_20044;
if(cljs.core.truth_(inst_20007)){
var statearr_20048_20082 = state_20044__$1;
(statearr_20048_20082[(1)] = (6));

} else {
var statearr_20049_20083 = state_20044__$1;
(statearr_20049_20083[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (15))){
var inst_20030 = (state_20044[(9)]);
var inst_20035 = cljs.core.apply.call(null,f,inst_20030);
var state_20044__$1 = state_20044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20044__$1,(17),out,inst_20035);
} else {
if((state_val_20045 === (13))){
var inst_20030 = (state_20044[(9)]);
var inst_20030__$1 = (state_20044[(2)]);
var inst_20031 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20030__$1);
var state_20044__$1 = (function (){var statearr_20050 = state_20044;
(statearr_20050[(9)] = inst_20030__$1);

return statearr_20050;
})();
if(cljs.core.truth_(inst_20031)){
var statearr_20051_20084 = state_20044__$1;
(statearr_20051_20084[(1)] = (14));

} else {
var statearr_20052_20085 = state_20044__$1;
(statearr_20052_20085[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (6))){
var state_20044__$1 = state_20044;
var statearr_20053_20086 = state_20044__$1;
(statearr_20053_20086[(2)] = null);

(statearr_20053_20086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (17))){
var inst_20037 = (state_20044[(2)]);
var state_20044__$1 = (function (){var statearr_20055 = state_20044;
(statearr_20055[(10)] = inst_20037);

return statearr_20055;
})();
var statearr_20056_20087 = state_20044__$1;
(statearr_20056_20087[(2)] = null);

(statearr_20056_20087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (3))){
var inst_20042 = (state_20044[(2)]);
var state_20044__$1 = state_20044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20044__$1,inst_20042);
} else {
if((state_val_20045 === (12))){
var _ = (function (){var statearr_20057 = state_20044;
(statearr_20057[(4)] = cljs.core.rest.call(null,(state_20044[(4)])));

return statearr_20057;
})();
var state_20044__$1 = state_20044;
var ex20054 = (state_20044__$1[(2)]);
var statearr_20058_20088 = state_20044__$1;
(statearr_20058_20088[(5)] = ex20054);


if((ex20054 instanceof Object)){
var statearr_20059_20089 = state_20044__$1;
(statearr_20059_20089[(1)] = (11));

(statearr_20059_20089[(5)] = null);

} else {
throw ex20054;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (2))){
var inst_20003 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20004 = cnt;
var inst_20005 = (0);
var state_20044__$1 = (function (){var statearr_20060 = state_20044;
(statearr_20060[(11)] = inst_20003);

(statearr_20060[(7)] = inst_20004);

(statearr_20060[(8)] = inst_20005);

return statearr_20060;
})();
var statearr_20061_20090 = state_20044__$1;
(statearr_20061_20090[(2)] = null);

(statearr_20061_20090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (11))){
var inst_20009 = (state_20044[(2)]);
var inst_20010 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20044__$1 = (function (){var statearr_20062 = state_20044;
(statearr_20062[(12)] = inst_20009);

return statearr_20062;
})();
var statearr_20063_20091 = state_20044__$1;
(statearr_20063_20091[(2)] = inst_20010);

(statearr_20063_20091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (9))){
var inst_20005 = (state_20044[(8)]);
var _ = (function (){var statearr_20064 = state_20044;
(statearr_20064[(4)] = cljs.core.cons.call(null,(12),(state_20044[(4)])));

return statearr_20064;
})();
var inst_20016 = chs__$1.call(null,inst_20005);
var inst_20017 = done.call(null,inst_20005);
var inst_20018 = cljs.core.async.take_BANG_.call(null,inst_20016,inst_20017);
var ___$1 = (function (){var statearr_20065 = state_20044;
(statearr_20065[(4)] = cljs.core.rest.call(null,(state_20044[(4)])));

return statearr_20065;
})();
var state_20044__$1 = state_20044;
var statearr_20066_20092 = state_20044__$1;
(statearr_20066_20092[(2)] = inst_20018);

(statearr_20066_20092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (5))){
var inst_20028 = (state_20044[(2)]);
var state_20044__$1 = (function (){var statearr_20067 = state_20044;
(statearr_20067[(13)] = inst_20028);

return statearr_20067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20044__$1,(13),dchan);
} else {
if((state_val_20045 === (14))){
var inst_20033 = cljs.core.async.close_BANG_.call(null,out);
var state_20044__$1 = state_20044;
var statearr_20068_20093 = state_20044__$1;
(statearr_20068_20093[(2)] = inst_20033);

(statearr_20068_20093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (16))){
var inst_20040 = (state_20044[(2)]);
var state_20044__$1 = state_20044;
var statearr_20069_20094 = state_20044__$1;
(statearr_20069_20094[(2)] = inst_20040);

(statearr_20069_20094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (10))){
var inst_20005 = (state_20044[(8)]);
var inst_20021 = (state_20044[(2)]);
var inst_20022 = (inst_20005 + (1));
var inst_20005__$1 = inst_20022;
var state_20044__$1 = (function (){var statearr_20070 = state_20044;
(statearr_20070[(14)] = inst_20021);

(statearr_20070[(8)] = inst_20005__$1);

return statearr_20070;
})();
var statearr_20071_20095 = state_20044__$1;
(statearr_20071_20095[(2)] = null);

(statearr_20071_20095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20045 === (8))){
var inst_20026 = (state_20044[(2)]);
var state_20044__$1 = state_20044;
var statearr_20072_20096 = state_20044__$1;
(statearr_20072_20096[(2)] = inst_20026);

(statearr_20072_20096[(1)] = (5));


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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_20073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20073[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_20073[(1)] = (1));

return statearr_20073;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_20044){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_20044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e20074){var ex__18712__auto__ = e20074;
var statearr_20075_20097 = state_20044;
(statearr_20075_20097[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_20044[(4)]))){
var statearr_20076_20098 = state_20044;
(statearr_20076_20098[(1)] = cljs.core.first.call(null,(state_20044[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20099 = state_20044;
state_20044 = G__20099;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_20044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_20044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_20077 = f__18783__auto__.call(null);
(statearr_20077[(6)] = c__18782__auto___20079);

return statearr_20077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
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
var G__20102 = arguments.length;
switch (G__20102) {
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
var c__18782__auto___20157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_20134){
var state_val_20135 = (state_20134[(1)]);
if((state_val_20135 === (7))){
var inst_20113 = (state_20134[(7)]);
var inst_20114 = (state_20134[(8)]);
var inst_20113__$1 = (state_20134[(2)]);
var inst_20114__$1 = cljs.core.nth.call(null,inst_20113__$1,(0),null);
var inst_20115 = cljs.core.nth.call(null,inst_20113__$1,(1),null);
var inst_20116 = (inst_20114__$1 == null);
var state_20134__$1 = (function (){var statearr_20136 = state_20134;
(statearr_20136[(9)] = inst_20115);

(statearr_20136[(7)] = inst_20113__$1);

(statearr_20136[(8)] = inst_20114__$1);

return statearr_20136;
})();
if(cljs.core.truth_(inst_20116)){
var statearr_20137_20158 = state_20134__$1;
(statearr_20137_20158[(1)] = (8));

} else {
var statearr_20138_20159 = state_20134__$1;
(statearr_20138_20159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (1))){
var inst_20103 = cljs.core.vec.call(null,chs);
var inst_20104 = inst_20103;
var state_20134__$1 = (function (){var statearr_20139 = state_20134;
(statearr_20139[(10)] = inst_20104);

return statearr_20139;
})();
var statearr_20140_20160 = state_20134__$1;
(statearr_20140_20160[(2)] = null);

(statearr_20140_20160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (4))){
var inst_20104 = (state_20134[(10)]);
var state_20134__$1 = state_20134;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20134__$1,(7),inst_20104);
} else {
if((state_val_20135 === (6))){
var inst_20130 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20141_20161 = state_20134__$1;
(statearr_20141_20161[(2)] = inst_20130);

(statearr_20141_20161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (3))){
var inst_20132 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20134__$1,inst_20132);
} else {
if((state_val_20135 === (2))){
var inst_20104 = (state_20134[(10)]);
var inst_20106 = cljs.core.count.call(null,inst_20104);
var inst_20107 = (inst_20106 > (0));
var state_20134__$1 = state_20134;
if(cljs.core.truth_(inst_20107)){
var statearr_20143_20162 = state_20134__$1;
(statearr_20143_20162[(1)] = (4));

} else {
var statearr_20144_20163 = state_20134__$1;
(statearr_20144_20163[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (11))){
var inst_20104 = (state_20134[(10)]);
var inst_20123 = (state_20134[(2)]);
var tmp20142 = inst_20104;
var inst_20104__$1 = tmp20142;
var state_20134__$1 = (function (){var statearr_20145 = state_20134;
(statearr_20145[(10)] = inst_20104__$1);

(statearr_20145[(11)] = inst_20123);

return statearr_20145;
})();
var statearr_20146_20164 = state_20134__$1;
(statearr_20146_20164[(2)] = null);

(statearr_20146_20164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (9))){
var inst_20114 = (state_20134[(8)]);
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20134__$1,(11),out,inst_20114);
} else {
if((state_val_20135 === (5))){
var inst_20128 = cljs.core.async.close_BANG_.call(null,out);
var state_20134__$1 = state_20134;
var statearr_20147_20165 = state_20134__$1;
(statearr_20147_20165[(2)] = inst_20128);

(statearr_20147_20165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (10))){
var inst_20126 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20148_20166 = state_20134__$1;
(statearr_20148_20166[(2)] = inst_20126);

(statearr_20148_20166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20135 === (8))){
var inst_20115 = (state_20134[(9)]);
var inst_20113 = (state_20134[(7)]);
var inst_20114 = (state_20134[(8)]);
var inst_20104 = (state_20134[(10)]);
var inst_20118 = (function (){var cs = inst_20104;
var vec__20109 = inst_20113;
var v = inst_20114;
var c = inst_20115;
return (function (p1__20100_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20100_SHARP_);
});
})();
var inst_20119 = cljs.core.filterv.call(null,inst_20118,inst_20104);
var inst_20104__$1 = inst_20119;
var state_20134__$1 = (function (){var statearr_20149 = state_20134;
(statearr_20149[(10)] = inst_20104__$1);

return statearr_20149;
})();
var statearr_20150_20167 = state_20134__$1;
(statearr_20150_20167[(2)] = null);

(statearr_20150_20167[(1)] = (2));


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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_20151 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20151[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_20151[(1)] = (1));

return statearr_20151;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_20134){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_20134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e20152){var ex__18712__auto__ = e20152;
var statearr_20153_20168 = state_20134;
(statearr_20153_20168[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_20134[(4)]))){
var statearr_20154_20169 = state_20134;
(statearr_20154_20169[(1)] = cljs.core.first.call(null,(state_20134[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20170 = state_20134;
state_20134 = G__20170;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_20134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_20134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_20155 = f__18783__auto__.call(null);
(statearr_20155[(6)] = c__18782__auto___20157);

return statearr_20155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
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
var G__20172 = arguments.length;
switch (G__20172) {
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
var c__18782__auto___20218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_20196){
var state_val_20197 = (state_20196[(1)]);
if((state_val_20197 === (7))){
var inst_20178 = (state_20196[(7)]);
var inst_20178__$1 = (state_20196[(2)]);
var inst_20179 = (inst_20178__$1 == null);
var inst_20180 = cljs.core.not.call(null,inst_20179);
var state_20196__$1 = (function (){var statearr_20198 = state_20196;
(statearr_20198[(7)] = inst_20178__$1);

return statearr_20198;
})();
if(inst_20180){
var statearr_20199_20219 = state_20196__$1;
(statearr_20199_20219[(1)] = (8));

} else {
var statearr_20200_20220 = state_20196__$1;
(statearr_20200_20220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (1))){
var inst_20173 = (0);
var state_20196__$1 = (function (){var statearr_20201 = state_20196;
(statearr_20201[(8)] = inst_20173);

return statearr_20201;
})();
var statearr_20202_20221 = state_20196__$1;
(statearr_20202_20221[(2)] = null);

(statearr_20202_20221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (4))){
var state_20196__$1 = state_20196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20196__$1,(7),ch);
} else {
if((state_val_20197 === (6))){
var inst_20191 = (state_20196[(2)]);
var state_20196__$1 = state_20196;
var statearr_20203_20222 = state_20196__$1;
(statearr_20203_20222[(2)] = inst_20191);

(statearr_20203_20222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (3))){
var inst_20193 = (state_20196[(2)]);
var inst_20194 = cljs.core.async.close_BANG_.call(null,out);
var state_20196__$1 = (function (){var statearr_20204 = state_20196;
(statearr_20204[(9)] = inst_20193);

return statearr_20204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20196__$1,inst_20194);
} else {
if((state_val_20197 === (2))){
var inst_20173 = (state_20196[(8)]);
var inst_20175 = (inst_20173 < n);
var state_20196__$1 = state_20196;
if(cljs.core.truth_(inst_20175)){
var statearr_20205_20223 = state_20196__$1;
(statearr_20205_20223[(1)] = (4));

} else {
var statearr_20206_20224 = state_20196__$1;
(statearr_20206_20224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (11))){
var inst_20173 = (state_20196[(8)]);
var inst_20183 = (state_20196[(2)]);
var inst_20184 = (inst_20173 + (1));
var inst_20173__$1 = inst_20184;
var state_20196__$1 = (function (){var statearr_20207 = state_20196;
(statearr_20207[(10)] = inst_20183);

(statearr_20207[(8)] = inst_20173__$1);

return statearr_20207;
})();
var statearr_20208_20225 = state_20196__$1;
(statearr_20208_20225[(2)] = null);

(statearr_20208_20225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (9))){
var state_20196__$1 = state_20196;
var statearr_20209_20226 = state_20196__$1;
(statearr_20209_20226[(2)] = null);

(statearr_20209_20226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (5))){
var state_20196__$1 = state_20196;
var statearr_20210_20227 = state_20196__$1;
(statearr_20210_20227[(2)] = null);

(statearr_20210_20227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (10))){
var inst_20188 = (state_20196[(2)]);
var state_20196__$1 = state_20196;
var statearr_20211_20228 = state_20196__$1;
(statearr_20211_20228[(2)] = inst_20188);

(statearr_20211_20228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (8))){
var inst_20178 = (state_20196[(7)]);
var state_20196__$1 = state_20196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20196__$1,(11),out,inst_20178);
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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_20212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20212[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_20212[(1)] = (1));

return statearr_20212;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_20196){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_20196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e20213){var ex__18712__auto__ = e20213;
var statearr_20214_20229 = state_20196;
(statearr_20214_20229[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_20196[(4)]))){
var statearr_20215_20230 = state_20196;
(statearr_20215_20230[(1)] = cljs.core.first.call(null,(state_20196[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20231 = state_20196;
state_20196 = G__20231;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_20196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_20196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_20216 = f__18783__auto__.call(null);
(statearr_20216[(6)] = c__18782__auto___20218);

return statearr_20216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20233 = (function (f,ch,meta20234){
this.f = f;
this.ch = ch;
this.meta20234 = meta20234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20235,meta20234__$1){
var self__ = this;
var _20235__$1 = this;
return (new cljs.core.async.t_cljs$core$async20233(self__.f,self__.ch,meta20234__$1));
}));

(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20235){
var self__ = this;
var _20235__$1 = this;
return self__.meta20234;
}));

(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20236 = (function (f,ch,meta20234,_,fn1,meta20237){
this.f = f;
this.ch = ch;
this.meta20234 = meta20234;
this._ = _;
this.fn1 = fn1;
this.meta20237 = meta20237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20238,meta20237__$1){
var self__ = this;
var _20238__$1 = this;
return (new cljs.core.async.t_cljs$core$async20236(self__.f,self__.ch,self__.meta20234,self__._,self__.fn1,meta20237__$1));
}));

(cljs.core.async.t_cljs$core$async20236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20238){
var self__ = this;
var _20238__$1 = this;
return self__.meta20237;
}));

(cljs.core.async.t_cljs$core$async20236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__20232_SHARP_){
return f1.call(null,(((p1__20232_SHARP_ == null))?null:self__.f.call(null,p1__20232_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async20236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20234","meta20234",-1513520796,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20233","cljs.core.async/t_cljs$core$async20233",-381999244,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20237","meta20237",1533514620,null)], null);
}));

(cljs.core.async.t_cljs$core$async20236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20236");

(cljs.core.async.t_cljs$core$async20236.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async20236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20236.
 */
cljs.core.async.__GT_t_cljs$core$async20236 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20236(f__$1,ch__$1,meta20234__$1,___$2,fn1__$1,meta20237){
return (new cljs.core.async.t_cljs$core$async20236(f__$1,ch__$1,meta20234__$1,___$2,fn1__$1,meta20237));
});

}

return (new cljs.core.async.t_cljs$core$async20236(self__.f,self__.ch,self__.meta20234,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20234","meta20234",-1513520796,null)], null);
}));

(cljs.core.async.t_cljs$core$async20233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20233");

(cljs.core.async.t_cljs$core$async20233.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async20233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20233.
 */
cljs.core.async.__GT_t_cljs$core$async20233 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20233(f__$1,ch__$1,meta20234){
return (new cljs.core.async.t_cljs$core$async20233(f__$1,ch__$1,meta20234));
});

}

return (new cljs.core.async.t_cljs$core$async20233(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20239 = (function (f,ch,meta20240){
this.f = f;
this.ch = ch;
this.meta20240 = meta20240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20241,meta20240__$1){
var self__ = this;
var _20241__$1 = this;
return (new cljs.core.async.t_cljs$core$async20239(self__.f,self__.ch,meta20240__$1));
}));

(cljs.core.async.t_cljs$core$async20239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20241){
var self__ = this;
var _20241__$1 = this;
return self__.meta20240;
}));

(cljs.core.async.t_cljs$core$async20239.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20239.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20239.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async20239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20240","meta20240",480695030,null)], null);
}));

(cljs.core.async.t_cljs$core$async20239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20239");

(cljs.core.async.t_cljs$core$async20239.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async20239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20239.
 */
cljs.core.async.__GT_t_cljs$core$async20239 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20239(f__$1,ch__$1,meta20240){
return (new cljs.core.async.t_cljs$core$async20239(f__$1,ch__$1,meta20240));
});

}

return (new cljs.core.async.t_cljs$core$async20239(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20242 = (function (p,ch,meta20243){
this.p = p;
this.ch = ch;
this.meta20243 = meta20243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20244,meta20243__$1){
var self__ = this;
var _20244__$1 = this;
return (new cljs.core.async.t_cljs$core$async20242(self__.p,self__.ch,meta20243__$1));
}));

(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20244){
var self__ = this;
var _20244__$1 = this;
return self__.meta20243;
}));

(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20243","meta20243",1876326095,null)], null);
}));

(cljs.core.async.t_cljs$core$async20242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20242");

(cljs.core.async.t_cljs$core$async20242.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async20242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20242.
 */
cljs.core.async.__GT_t_cljs$core$async20242 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20242(p__$1,ch__$1,meta20243){
return (new cljs.core.async.t_cljs$core$async20242(p__$1,ch__$1,meta20243));
});

}

return (new cljs.core.async.t_cljs$core$async20242(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20246 = arguments.length;
switch (G__20246) {
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
var c__18782__auto___20287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_20267){
var state_val_20268 = (state_20267[(1)]);
if((state_val_20268 === (7))){
var inst_20263 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
var statearr_20269_20288 = state_20267__$1;
(statearr_20269_20288[(2)] = inst_20263);

(statearr_20269_20288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (1))){
var state_20267__$1 = state_20267;
var statearr_20270_20289 = state_20267__$1;
(statearr_20270_20289[(2)] = null);

(statearr_20270_20289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (4))){
var inst_20249 = (state_20267[(7)]);
var inst_20249__$1 = (state_20267[(2)]);
var inst_20250 = (inst_20249__$1 == null);
var state_20267__$1 = (function (){var statearr_20271 = state_20267;
(statearr_20271[(7)] = inst_20249__$1);

return statearr_20271;
})();
if(cljs.core.truth_(inst_20250)){
var statearr_20272_20290 = state_20267__$1;
(statearr_20272_20290[(1)] = (5));

} else {
var statearr_20273_20291 = state_20267__$1;
(statearr_20273_20291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (6))){
var inst_20249 = (state_20267[(7)]);
var inst_20254 = p.call(null,inst_20249);
var state_20267__$1 = state_20267;
if(cljs.core.truth_(inst_20254)){
var statearr_20274_20292 = state_20267__$1;
(statearr_20274_20292[(1)] = (8));

} else {
var statearr_20275_20293 = state_20267__$1;
(statearr_20275_20293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (3))){
var inst_20265 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20267__$1,inst_20265);
} else {
if((state_val_20268 === (2))){
var state_20267__$1 = state_20267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20267__$1,(4),ch);
} else {
if((state_val_20268 === (11))){
var inst_20257 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
var statearr_20276_20294 = state_20267__$1;
(statearr_20276_20294[(2)] = inst_20257);

(statearr_20276_20294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (9))){
var state_20267__$1 = state_20267;
var statearr_20277_20295 = state_20267__$1;
(statearr_20277_20295[(2)] = null);

(statearr_20277_20295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (5))){
var inst_20252 = cljs.core.async.close_BANG_.call(null,out);
var state_20267__$1 = state_20267;
var statearr_20278_20296 = state_20267__$1;
(statearr_20278_20296[(2)] = inst_20252);

(statearr_20278_20296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (10))){
var inst_20260 = (state_20267[(2)]);
var state_20267__$1 = (function (){var statearr_20279 = state_20267;
(statearr_20279[(8)] = inst_20260);

return statearr_20279;
})();
var statearr_20280_20297 = state_20267__$1;
(statearr_20280_20297[(2)] = null);

(statearr_20280_20297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (8))){
var inst_20249 = (state_20267[(7)]);
var state_20267__$1 = state_20267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20267__$1,(11),out,inst_20249);
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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_20281 = [null,null,null,null,null,null,null,null,null];
(statearr_20281[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_20281[(1)] = (1));

return statearr_20281;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_20267){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_20267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e20282){var ex__18712__auto__ = e20282;
var statearr_20283_20298 = state_20267;
(statearr_20283_20298[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_20267[(4)]))){
var statearr_20284_20299 = state_20267;
(statearr_20284_20299[(1)] = cljs.core.first.call(null,(state_20267[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20300 = state_20267;
state_20267 = G__20300;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_20267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_20267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_20285 = f__18783__auto__.call(null);
(statearr_20285[(6)] = c__18782__auto___20287);

return statearr_20285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20302 = arguments.length;
switch (G__20302) {
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
var c__18782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_20365){
var state_val_20366 = (state_20365[(1)]);
if((state_val_20366 === (7))){
var inst_20361 = (state_20365[(2)]);
var state_20365__$1 = state_20365;
var statearr_20367_20406 = state_20365__$1;
(statearr_20367_20406[(2)] = inst_20361);

(statearr_20367_20406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (20))){
var inst_20331 = (state_20365[(7)]);
var inst_20342 = (state_20365[(2)]);
var inst_20343 = cljs.core.next.call(null,inst_20331);
var inst_20317 = inst_20343;
var inst_20318 = null;
var inst_20319 = (0);
var inst_20320 = (0);
var state_20365__$1 = (function (){var statearr_20368 = state_20365;
(statearr_20368[(8)] = inst_20318);

(statearr_20368[(9)] = inst_20342);

(statearr_20368[(10)] = inst_20317);

(statearr_20368[(11)] = inst_20320);

(statearr_20368[(12)] = inst_20319);

return statearr_20368;
})();
var statearr_20369_20407 = state_20365__$1;
(statearr_20369_20407[(2)] = null);

(statearr_20369_20407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (1))){
var state_20365__$1 = state_20365;
var statearr_20370_20408 = state_20365__$1;
(statearr_20370_20408[(2)] = null);

(statearr_20370_20408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (4))){
var inst_20306 = (state_20365[(13)]);
var inst_20306__$1 = (state_20365[(2)]);
var inst_20307 = (inst_20306__$1 == null);
var state_20365__$1 = (function (){var statearr_20371 = state_20365;
(statearr_20371[(13)] = inst_20306__$1);

return statearr_20371;
})();
if(cljs.core.truth_(inst_20307)){
var statearr_20372_20409 = state_20365__$1;
(statearr_20372_20409[(1)] = (5));

} else {
var statearr_20373_20410 = state_20365__$1;
(statearr_20373_20410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (15))){
var state_20365__$1 = state_20365;
var statearr_20377_20411 = state_20365__$1;
(statearr_20377_20411[(2)] = null);

(statearr_20377_20411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (21))){
var state_20365__$1 = state_20365;
var statearr_20378_20412 = state_20365__$1;
(statearr_20378_20412[(2)] = null);

(statearr_20378_20412[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (13))){
var inst_20318 = (state_20365[(8)]);
var inst_20317 = (state_20365[(10)]);
var inst_20320 = (state_20365[(11)]);
var inst_20319 = (state_20365[(12)]);
var inst_20327 = (state_20365[(2)]);
var inst_20328 = (inst_20320 + (1));
var tmp20374 = inst_20318;
var tmp20375 = inst_20317;
var tmp20376 = inst_20319;
var inst_20317__$1 = tmp20375;
var inst_20318__$1 = tmp20374;
var inst_20319__$1 = tmp20376;
var inst_20320__$1 = inst_20328;
var state_20365__$1 = (function (){var statearr_20379 = state_20365;
(statearr_20379[(8)] = inst_20318__$1);

(statearr_20379[(10)] = inst_20317__$1);

(statearr_20379[(11)] = inst_20320__$1);

(statearr_20379[(12)] = inst_20319__$1);

(statearr_20379[(14)] = inst_20327);

return statearr_20379;
})();
var statearr_20380_20413 = state_20365__$1;
(statearr_20380_20413[(2)] = null);

(statearr_20380_20413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (22))){
var state_20365__$1 = state_20365;
var statearr_20381_20414 = state_20365__$1;
(statearr_20381_20414[(2)] = null);

(statearr_20381_20414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (6))){
var inst_20306 = (state_20365[(13)]);
var inst_20315 = f.call(null,inst_20306);
var inst_20316 = cljs.core.seq.call(null,inst_20315);
var inst_20317 = inst_20316;
var inst_20318 = null;
var inst_20319 = (0);
var inst_20320 = (0);
var state_20365__$1 = (function (){var statearr_20382 = state_20365;
(statearr_20382[(8)] = inst_20318);

(statearr_20382[(10)] = inst_20317);

(statearr_20382[(11)] = inst_20320);

(statearr_20382[(12)] = inst_20319);

return statearr_20382;
})();
var statearr_20383_20415 = state_20365__$1;
(statearr_20383_20415[(2)] = null);

(statearr_20383_20415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (17))){
var inst_20331 = (state_20365[(7)]);
var inst_20335 = cljs.core.chunk_first.call(null,inst_20331);
var inst_20336 = cljs.core.chunk_rest.call(null,inst_20331);
var inst_20337 = cljs.core.count.call(null,inst_20335);
var inst_20317 = inst_20336;
var inst_20318 = inst_20335;
var inst_20319 = inst_20337;
var inst_20320 = (0);
var state_20365__$1 = (function (){var statearr_20384 = state_20365;
(statearr_20384[(8)] = inst_20318);

(statearr_20384[(10)] = inst_20317);

(statearr_20384[(11)] = inst_20320);

(statearr_20384[(12)] = inst_20319);

return statearr_20384;
})();
var statearr_20385_20416 = state_20365__$1;
(statearr_20385_20416[(2)] = null);

(statearr_20385_20416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (3))){
var inst_20363 = (state_20365[(2)]);
var state_20365__$1 = state_20365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20365__$1,inst_20363);
} else {
if((state_val_20366 === (12))){
var inst_20351 = (state_20365[(2)]);
var state_20365__$1 = state_20365;
var statearr_20386_20417 = state_20365__$1;
(statearr_20386_20417[(2)] = inst_20351);

(statearr_20386_20417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (2))){
var state_20365__$1 = state_20365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20365__$1,(4),in$);
} else {
if((state_val_20366 === (23))){
var inst_20359 = (state_20365[(2)]);
var state_20365__$1 = state_20365;
var statearr_20387_20418 = state_20365__$1;
(statearr_20387_20418[(2)] = inst_20359);

(statearr_20387_20418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (19))){
var inst_20346 = (state_20365[(2)]);
var state_20365__$1 = state_20365;
var statearr_20388_20419 = state_20365__$1;
(statearr_20388_20419[(2)] = inst_20346);

(statearr_20388_20419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (11))){
var inst_20331 = (state_20365[(7)]);
var inst_20317 = (state_20365[(10)]);
var inst_20331__$1 = cljs.core.seq.call(null,inst_20317);
var state_20365__$1 = (function (){var statearr_20389 = state_20365;
(statearr_20389[(7)] = inst_20331__$1);

return statearr_20389;
})();
if(inst_20331__$1){
var statearr_20390_20420 = state_20365__$1;
(statearr_20390_20420[(1)] = (14));

} else {
var statearr_20391_20421 = state_20365__$1;
(statearr_20391_20421[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (9))){
var inst_20353 = (state_20365[(2)]);
var inst_20354 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20365__$1 = (function (){var statearr_20392 = state_20365;
(statearr_20392[(15)] = inst_20353);

return statearr_20392;
})();
if(cljs.core.truth_(inst_20354)){
var statearr_20393_20422 = state_20365__$1;
(statearr_20393_20422[(1)] = (21));

} else {
var statearr_20394_20423 = state_20365__$1;
(statearr_20394_20423[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (5))){
var inst_20309 = cljs.core.async.close_BANG_.call(null,out);
var state_20365__$1 = state_20365;
var statearr_20395_20424 = state_20365__$1;
(statearr_20395_20424[(2)] = inst_20309);

(statearr_20395_20424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (14))){
var inst_20331 = (state_20365[(7)]);
var inst_20333 = cljs.core.chunked_seq_QMARK_.call(null,inst_20331);
var state_20365__$1 = state_20365;
if(inst_20333){
var statearr_20396_20425 = state_20365__$1;
(statearr_20396_20425[(1)] = (17));

} else {
var statearr_20397_20426 = state_20365__$1;
(statearr_20397_20426[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (16))){
var inst_20349 = (state_20365[(2)]);
var state_20365__$1 = state_20365;
var statearr_20398_20427 = state_20365__$1;
(statearr_20398_20427[(2)] = inst_20349);

(statearr_20398_20427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20366 === (10))){
var inst_20318 = (state_20365[(8)]);
var inst_20320 = (state_20365[(11)]);
var inst_20325 = cljs.core._nth.call(null,inst_20318,inst_20320);
var state_20365__$1 = state_20365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20365__$1,(13),out,inst_20325);
} else {
if((state_val_20366 === (18))){
var inst_20331 = (state_20365[(7)]);
var inst_20340 = cljs.core.first.call(null,inst_20331);
var state_20365__$1 = state_20365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20365__$1,(20),out,inst_20340);
} else {
if((state_val_20366 === (8))){
var inst_20320 = (state_20365[(11)]);
var inst_20319 = (state_20365[(12)]);
var inst_20322 = (inst_20320 < inst_20319);
var inst_20323 = inst_20322;
var state_20365__$1 = state_20365;
if(cljs.core.truth_(inst_20323)){
var statearr_20399_20428 = state_20365__$1;
(statearr_20399_20428[(1)] = (10));

} else {
var statearr_20400_20429 = state_20365__$1;
(statearr_20400_20429[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__18709__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18709__auto____0 = (function (){
var statearr_20401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20401[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18709__auto__);

(statearr_20401[(1)] = (1));

return statearr_20401;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18709__auto____1 = (function (state_20365){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_20365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e20402){var ex__18712__auto__ = e20402;
var statearr_20403_20430 = state_20365;
(statearr_20403_20430[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_20365[(4)]))){
var statearr_20404_20431 = state_20365;
(statearr_20404_20431[(1)] = cljs.core.first.call(null,(state_20365[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20432 = state_20365;
state_20365 = G__20432;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18709__auto__ = function(state_20365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18709__auto____1.call(this,state_20365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18709__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18709__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_20405 = f__18783__auto__.call(null);
(statearr_20405[(6)] = c__18782__auto__);

return statearr_20405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));

return c__18782__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20434 = arguments.length;
switch (G__20434) {
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
var G__20437 = arguments.length;
switch (G__20437) {
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
var G__20440 = arguments.length;
switch (G__20440) {
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
var c__18782__auto___20488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_20464){
var state_val_20465 = (state_20464[(1)]);
if((state_val_20465 === (7))){
var inst_20459 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
var statearr_20466_20489 = state_20464__$1;
(statearr_20466_20489[(2)] = inst_20459);

(statearr_20466_20489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (1))){
var inst_20441 = null;
var state_20464__$1 = (function (){var statearr_20467 = state_20464;
(statearr_20467[(7)] = inst_20441);

return statearr_20467;
})();
var statearr_20468_20490 = state_20464__$1;
(statearr_20468_20490[(2)] = null);

(statearr_20468_20490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (4))){
var inst_20444 = (state_20464[(8)]);
var inst_20444__$1 = (state_20464[(2)]);
var inst_20445 = (inst_20444__$1 == null);
var inst_20446 = cljs.core.not.call(null,inst_20445);
var state_20464__$1 = (function (){var statearr_20469 = state_20464;
(statearr_20469[(8)] = inst_20444__$1);

return statearr_20469;
})();
if(inst_20446){
var statearr_20470_20491 = state_20464__$1;
(statearr_20470_20491[(1)] = (5));

} else {
var statearr_20471_20492 = state_20464__$1;
(statearr_20471_20492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (6))){
var state_20464__$1 = state_20464;
var statearr_20472_20493 = state_20464__$1;
(statearr_20472_20493[(2)] = null);

(statearr_20472_20493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (3))){
var inst_20461 = (state_20464[(2)]);
var inst_20462 = cljs.core.async.close_BANG_.call(null,out);
var state_20464__$1 = (function (){var statearr_20473 = state_20464;
(statearr_20473[(9)] = inst_20461);

return statearr_20473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20464__$1,inst_20462);
} else {
if((state_val_20465 === (2))){
var state_20464__$1 = state_20464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20464__$1,(4),ch);
} else {
if((state_val_20465 === (11))){
var inst_20444 = (state_20464[(8)]);
var inst_20453 = (state_20464[(2)]);
var inst_20441 = inst_20444;
var state_20464__$1 = (function (){var statearr_20474 = state_20464;
(statearr_20474[(10)] = inst_20453);

(statearr_20474[(7)] = inst_20441);

return statearr_20474;
})();
var statearr_20475_20494 = state_20464__$1;
(statearr_20475_20494[(2)] = null);

(statearr_20475_20494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (9))){
var inst_20444 = (state_20464[(8)]);
var state_20464__$1 = state_20464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20464__$1,(11),out,inst_20444);
} else {
if((state_val_20465 === (5))){
var inst_20444 = (state_20464[(8)]);
var inst_20441 = (state_20464[(7)]);
var inst_20448 = cljs.core._EQ_.call(null,inst_20444,inst_20441);
var state_20464__$1 = state_20464;
if(inst_20448){
var statearr_20477_20495 = state_20464__$1;
(statearr_20477_20495[(1)] = (8));

} else {
var statearr_20478_20496 = state_20464__$1;
(statearr_20478_20496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (10))){
var inst_20456 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
var statearr_20479_20497 = state_20464__$1;
(statearr_20479_20497[(2)] = inst_20456);

(statearr_20479_20497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (8))){
var inst_20441 = (state_20464[(7)]);
var tmp20476 = inst_20441;
var inst_20441__$1 = tmp20476;
var state_20464__$1 = (function (){var statearr_20480 = state_20464;
(statearr_20480[(7)] = inst_20441__$1);

return statearr_20480;
})();
var statearr_20481_20498 = state_20464__$1;
(statearr_20481_20498[(2)] = null);

(statearr_20481_20498[(1)] = (2));


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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_20482 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20482[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_20482[(1)] = (1));

return statearr_20482;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_20464){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_20464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e20483){var ex__18712__auto__ = e20483;
var statearr_20484_20499 = state_20464;
(statearr_20484_20499[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_20464[(4)]))){
var statearr_20485_20500 = state_20464;
(statearr_20485_20500[(1)] = cljs.core.first.call(null,(state_20464[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20501 = state_20464;
state_20464 = G__20501;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_20464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_20464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_20486 = f__18783__auto__.call(null);
(statearr_20486[(6)] = c__18782__auto___20488);

return statearr_20486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20503 = arguments.length;
switch (G__20503) {
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
var c__18782__auto___20570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_20541){
var state_val_20542 = (state_20541[(1)]);
if((state_val_20542 === (7))){
var inst_20537 = (state_20541[(2)]);
var state_20541__$1 = state_20541;
var statearr_20543_20571 = state_20541__$1;
(statearr_20543_20571[(2)] = inst_20537);

(statearr_20543_20571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (1))){
var inst_20504 = (new Array(n));
var inst_20505 = inst_20504;
var inst_20506 = (0);
var state_20541__$1 = (function (){var statearr_20544 = state_20541;
(statearr_20544[(7)] = inst_20506);

(statearr_20544[(8)] = inst_20505);

return statearr_20544;
})();
var statearr_20545_20572 = state_20541__$1;
(statearr_20545_20572[(2)] = null);

(statearr_20545_20572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (4))){
var inst_20509 = (state_20541[(9)]);
var inst_20509__$1 = (state_20541[(2)]);
var inst_20510 = (inst_20509__$1 == null);
var inst_20511 = cljs.core.not.call(null,inst_20510);
var state_20541__$1 = (function (){var statearr_20546 = state_20541;
(statearr_20546[(9)] = inst_20509__$1);

return statearr_20546;
})();
if(inst_20511){
var statearr_20547_20573 = state_20541__$1;
(statearr_20547_20573[(1)] = (5));

} else {
var statearr_20548_20574 = state_20541__$1;
(statearr_20548_20574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (15))){
var inst_20531 = (state_20541[(2)]);
var state_20541__$1 = state_20541;
var statearr_20549_20575 = state_20541__$1;
(statearr_20549_20575[(2)] = inst_20531);

(statearr_20549_20575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (13))){
var state_20541__$1 = state_20541;
var statearr_20550_20576 = state_20541__$1;
(statearr_20550_20576[(2)] = null);

(statearr_20550_20576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (6))){
var inst_20506 = (state_20541[(7)]);
var inst_20527 = (inst_20506 > (0));
var state_20541__$1 = state_20541;
if(cljs.core.truth_(inst_20527)){
var statearr_20551_20577 = state_20541__$1;
(statearr_20551_20577[(1)] = (12));

} else {
var statearr_20552_20578 = state_20541__$1;
(statearr_20552_20578[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (3))){
var inst_20539 = (state_20541[(2)]);
var state_20541__$1 = state_20541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20541__$1,inst_20539);
} else {
if((state_val_20542 === (12))){
var inst_20505 = (state_20541[(8)]);
var inst_20529 = cljs.core.vec.call(null,inst_20505);
var state_20541__$1 = state_20541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20541__$1,(15),out,inst_20529);
} else {
if((state_val_20542 === (2))){
var state_20541__$1 = state_20541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20541__$1,(4),ch);
} else {
if((state_val_20542 === (11))){
var inst_20521 = (state_20541[(2)]);
var inst_20522 = (new Array(n));
var inst_20505 = inst_20522;
var inst_20506 = (0);
var state_20541__$1 = (function (){var statearr_20553 = state_20541;
(statearr_20553[(7)] = inst_20506);

(statearr_20553[(10)] = inst_20521);

(statearr_20553[(8)] = inst_20505);

return statearr_20553;
})();
var statearr_20554_20579 = state_20541__$1;
(statearr_20554_20579[(2)] = null);

(statearr_20554_20579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (9))){
var inst_20505 = (state_20541[(8)]);
var inst_20519 = cljs.core.vec.call(null,inst_20505);
var state_20541__$1 = state_20541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20541__$1,(11),out,inst_20519);
} else {
if((state_val_20542 === (5))){
var inst_20509 = (state_20541[(9)]);
var inst_20514 = (state_20541[(11)]);
var inst_20506 = (state_20541[(7)]);
var inst_20505 = (state_20541[(8)]);
var inst_20513 = (inst_20505[inst_20506] = inst_20509);
var inst_20514__$1 = (inst_20506 + (1));
var inst_20515 = (inst_20514__$1 < n);
var state_20541__$1 = (function (){var statearr_20555 = state_20541;
(statearr_20555[(11)] = inst_20514__$1);

(statearr_20555[(12)] = inst_20513);

return statearr_20555;
})();
if(cljs.core.truth_(inst_20515)){
var statearr_20556_20580 = state_20541__$1;
(statearr_20556_20580[(1)] = (8));

} else {
var statearr_20557_20581 = state_20541__$1;
(statearr_20557_20581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (14))){
var inst_20534 = (state_20541[(2)]);
var inst_20535 = cljs.core.async.close_BANG_.call(null,out);
var state_20541__$1 = (function (){var statearr_20559 = state_20541;
(statearr_20559[(13)] = inst_20534);

return statearr_20559;
})();
var statearr_20560_20582 = state_20541__$1;
(statearr_20560_20582[(2)] = inst_20535);

(statearr_20560_20582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (10))){
var inst_20525 = (state_20541[(2)]);
var state_20541__$1 = state_20541;
var statearr_20561_20583 = state_20541__$1;
(statearr_20561_20583[(2)] = inst_20525);

(statearr_20561_20583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (8))){
var inst_20514 = (state_20541[(11)]);
var inst_20505 = (state_20541[(8)]);
var tmp20558 = inst_20505;
var inst_20505__$1 = tmp20558;
var inst_20506 = inst_20514;
var state_20541__$1 = (function (){var statearr_20562 = state_20541;
(statearr_20562[(7)] = inst_20506);

(statearr_20562[(8)] = inst_20505__$1);

return statearr_20562;
})();
var statearr_20563_20584 = state_20541__$1;
(statearr_20563_20584[(2)] = null);

(statearr_20563_20584[(1)] = (2));


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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_20564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20564[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_20564[(1)] = (1));

return statearr_20564;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_20541){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_20541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e20565){var ex__18712__auto__ = e20565;
var statearr_20566_20585 = state_20541;
(statearr_20566_20585[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_20541[(4)]))){
var statearr_20567_20586 = state_20541;
(statearr_20567_20586[(1)] = cljs.core.first.call(null,(state_20541[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20587 = state_20541;
state_20541 = G__20587;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_20541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_20541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_20568 = f__18783__auto__.call(null);
(statearr_20568[(6)] = c__18782__auto___20570);

return statearr_20568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20589 = arguments.length;
switch (G__20589) {
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
var c__18782__auto___20660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18783__auto__ = (function (){var switch__18708__auto__ = (function (state_20631){
var state_val_20632 = (state_20631[(1)]);
if((state_val_20632 === (7))){
var inst_20627 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20633_20661 = state_20631__$1;
(statearr_20633_20661[(2)] = inst_20627);

(statearr_20633_20661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (1))){
var inst_20590 = [];
var inst_20591 = inst_20590;
var inst_20592 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20631__$1 = (function (){var statearr_20634 = state_20631;
(statearr_20634[(7)] = inst_20592);

(statearr_20634[(8)] = inst_20591);

return statearr_20634;
})();
var statearr_20635_20662 = state_20631__$1;
(statearr_20635_20662[(2)] = null);

(statearr_20635_20662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (4))){
var inst_20595 = (state_20631[(9)]);
var inst_20595__$1 = (state_20631[(2)]);
var inst_20596 = (inst_20595__$1 == null);
var inst_20597 = cljs.core.not.call(null,inst_20596);
var state_20631__$1 = (function (){var statearr_20636 = state_20631;
(statearr_20636[(9)] = inst_20595__$1);

return statearr_20636;
})();
if(inst_20597){
var statearr_20637_20663 = state_20631__$1;
(statearr_20637_20663[(1)] = (5));

} else {
var statearr_20638_20664 = state_20631__$1;
(statearr_20638_20664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (15))){
var inst_20621 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20639_20665 = state_20631__$1;
(statearr_20639_20665[(2)] = inst_20621);

(statearr_20639_20665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (13))){
var state_20631__$1 = state_20631;
var statearr_20640_20666 = state_20631__$1;
(statearr_20640_20666[(2)] = null);

(statearr_20640_20666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (6))){
var inst_20591 = (state_20631[(8)]);
var inst_20616 = inst_20591.length;
var inst_20617 = (inst_20616 > (0));
var state_20631__$1 = state_20631;
if(cljs.core.truth_(inst_20617)){
var statearr_20641_20667 = state_20631__$1;
(statearr_20641_20667[(1)] = (12));

} else {
var statearr_20642_20668 = state_20631__$1;
(statearr_20642_20668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (3))){
var inst_20629 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20631__$1,inst_20629);
} else {
if((state_val_20632 === (12))){
var inst_20591 = (state_20631[(8)]);
var inst_20619 = cljs.core.vec.call(null,inst_20591);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20631__$1,(15),out,inst_20619);
} else {
if((state_val_20632 === (2))){
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20631__$1,(4),ch);
} else {
if((state_val_20632 === (11))){
var inst_20595 = (state_20631[(9)]);
var inst_20599 = (state_20631[(10)]);
var inst_20609 = (state_20631[(2)]);
var inst_20610 = [];
var inst_20611 = inst_20610.push(inst_20595);
var inst_20591 = inst_20610;
var inst_20592 = inst_20599;
var state_20631__$1 = (function (){var statearr_20643 = state_20631;
(statearr_20643[(7)] = inst_20592);

(statearr_20643[(8)] = inst_20591);

(statearr_20643[(11)] = inst_20609);

(statearr_20643[(12)] = inst_20611);

return statearr_20643;
})();
var statearr_20644_20669 = state_20631__$1;
(statearr_20644_20669[(2)] = null);

(statearr_20644_20669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (9))){
var inst_20591 = (state_20631[(8)]);
var inst_20607 = cljs.core.vec.call(null,inst_20591);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20631__$1,(11),out,inst_20607);
} else {
if((state_val_20632 === (5))){
var inst_20592 = (state_20631[(7)]);
var inst_20595 = (state_20631[(9)]);
var inst_20599 = (state_20631[(10)]);
var inst_20599__$1 = f.call(null,inst_20595);
var inst_20600 = cljs.core._EQ_.call(null,inst_20599__$1,inst_20592);
var inst_20601 = cljs.core.keyword_identical_QMARK_.call(null,inst_20592,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20602 = ((inst_20600) || (inst_20601));
var state_20631__$1 = (function (){var statearr_20645 = state_20631;
(statearr_20645[(10)] = inst_20599__$1);

return statearr_20645;
})();
if(cljs.core.truth_(inst_20602)){
var statearr_20646_20670 = state_20631__$1;
(statearr_20646_20670[(1)] = (8));

} else {
var statearr_20647_20671 = state_20631__$1;
(statearr_20647_20671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (14))){
var inst_20624 = (state_20631[(2)]);
var inst_20625 = cljs.core.async.close_BANG_.call(null,out);
var state_20631__$1 = (function (){var statearr_20649 = state_20631;
(statearr_20649[(13)] = inst_20624);

return statearr_20649;
})();
var statearr_20650_20672 = state_20631__$1;
(statearr_20650_20672[(2)] = inst_20625);

(statearr_20650_20672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (10))){
var inst_20614 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20651_20673 = state_20631__$1;
(statearr_20651_20673[(2)] = inst_20614);

(statearr_20651_20673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (8))){
var inst_20595 = (state_20631[(9)]);
var inst_20599 = (state_20631[(10)]);
var inst_20591 = (state_20631[(8)]);
var inst_20604 = inst_20591.push(inst_20595);
var tmp20648 = inst_20591;
var inst_20591__$1 = tmp20648;
var inst_20592 = inst_20599;
var state_20631__$1 = (function (){var statearr_20652 = state_20631;
(statearr_20652[(7)] = inst_20592);

(statearr_20652[(8)] = inst_20591__$1);

(statearr_20652[(14)] = inst_20604);

return statearr_20652;
})();
var statearr_20653_20674 = state_20631__$1;
(statearr_20653_20674[(2)] = null);

(statearr_20653_20674[(1)] = (2));


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
var cljs$core$async$state_machine__18709__auto__ = null;
var cljs$core$async$state_machine__18709__auto____0 = (function (){
var statearr_20654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20654[(0)] = cljs$core$async$state_machine__18709__auto__);

(statearr_20654[(1)] = (1));

return statearr_20654;
});
var cljs$core$async$state_machine__18709__auto____1 = (function (state_20631){
while(true){
var ret_value__18710__auto__ = (function (){try{while(true){
var result__18711__auto__ = switch__18708__auto__.call(null,state_20631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18711__auto__;
}
break;
}
}catch (e20655){var ex__18712__auto__ = e20655;
var statearr_20656_20675 = state_20631;
(statearr_20656_20675[(2)] = ex__18712__auto__);


if(cljs.core.seq.call(null,(state_20631[(4)]))){
var statearr_20657_20676 = state_20631;
(statearr_20657_20676[(1)] = cljs.core.first.call(null,(state_20631[(4)])));

} else {
throw ex__18712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20677 = state_20631;
state_20631 = G__20677;
continue;
} else {
return ret_value__18710__auto__;
}
break;
}
});
cljs$core$async$state_machine__18709__auto__ = function(state_20631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18709__auto____1.call(this,state_20631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18709__auto____0;
cljs$core$async$state_machine__18709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18709__auto____1;
return cljs$core$async$state_machine__18709__auto__;
})()
})();
var state__18784__auto__ = (function (){var statearr_20658 = f__18783__auto__.call(null);
(statearr_20658[(6)] = c__18782__auto___20660);

return statearr_20658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18784__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
