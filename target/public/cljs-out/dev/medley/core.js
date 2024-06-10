// Compiled by ClojureScript 1.10.844 {}
goog.provide('medley.core');
goog.require('cljs.core');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__26344 = arguments.length;
switch (G__26344) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__26346 = null;
var G__26346__0 = (function (){
return rf.call(null);
});
var G__26346__1 = (function (result){
return rf.call(null,result);
});
var G__26346__2 = (function (result,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,rf.call(null,result,x));
} else {
return result;
}
});
G__26346 = function(result,x){
switch(arguments.length){
case 0:
return G__26346__0.call(this);
case 1:
return G__26346__1.call(this,result);
case 2:
return G__26346__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26346.cljs$core$IFn$_invoke$arity$0 = G__26346__0;
G__26346.cljs$core$IFn$_invoke$arity$1 = G__26346__1;
G__26346.cljs$core$IFn$_invoke$arity$2 = G__26346__2;
return G__26346;
})()
});
}));

(medley.core.find_first.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.call(null,(function (_,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.reduced.call(null,x);
} else {
return null;
}
}),null,coll);
}));

(medley.core.find_first.cljs$lang$maxFixedArity = 2);

/**
 * Dissociate a value in a nested associative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(var_args){
var G__26351 = arguments.length;
switch (G__26351) {
case 2:
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26359 = arguments.length;
var i__4772__auto___26360 = (0);
while(true){
if((i__4772__auto___26360 < len__4771__auto___26359)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26360]));

var G__26361 = (i__4772__auto___26360 + (1));
i__4772__auto___26360 = G__26361;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
var temp__5455__auto__ = cljs.core.seq.call(null,ks);
if(temp__5455__auto__){
var vec__26352 = temp__5455__auto__;
var seq__26353 = cljs.core.seq.call(null,vec__26352);
var first__26354 = cljs.core.first.call(null,seq__26353);
var seq__26353__$1 = cljs.core.next.call(null,seq__26353);
var k = first__26354;
var ks__$1 = seq__26353__$1;
if(cljs.core.seq.call(null,ks__$1)){
var v = medley.core.dissoc_in.call(null,cljs.core.get.call(null,m,k),ks__$1);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
}));

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,kss){
while(true){
var temp__5455__auto__ = cljs.core.seq.call(null,kss);
if(temp__5455__auto__){
var vec__26355 = temp__5455__auto__;
var seq__26356 = cljs.core.seq.call(null,vec__26355);
var first__26357 = cljs.core.first.call(null,seq__26356);
var seq__26356__$1 = cljs.core.next.call(null,seq__26356);
var ks_SINGLEQUOTE_ = first__26357;
var kss__$1 = seq__26356__$1;
var G__26362 = medley.core.dissoc_in.call(null,m,ks);
var G__26363 = ks_SINGLEQUOTE_;
var G__26364 = kss__$1;
m = G__26362;
ks = G__26363;
kss = G__26364;
continue;
} else {
return medley.core.dissoc_in.call(null,m,ks);
}
break;
}
}));

/** @this {Function} */
(medley.core.dissoc_in.cljs$lang$applyTo = (function (seq26348){
var G__26349 = cljs.core.first.call(null,seq26348);
var seq26348__$1 = cljs.core.next.call(null,seq26348);
var G__26350 = cljs.core.first.call(null,seq26348__$1);
var seq26348__$2 = cljs.core.next.call(null,seq26348__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26349,G__26350,seq26348__$2);
}));

(medley.core.dissoc_in.cljs$lang$maxFixedArity = (2));

/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__26370 = arguments.length;
switch (G__26370) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26376 = arguments.length;
var i__4772__auto___26377 = (0);
while(true){
if((i__4772__auto___26377 < len__4771__auto___26376)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26377]));

var G__26378 = (i__4772__auto___26377 + (1));
i__4772__auto___26377 = G__26378;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4793__auto__);

}
});

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}));

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.call(null,(function (m__$1,p__26371){
var vec__26372 = p__26371;
var k__$1 = cljs.core.nth.call(null,vec__26372,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__26372,(1),null);
return medley.core.assoc_some.call(null,m__$1,k__$1,v__$1);
}),medley.core.assoc_some.call(null,m,k,v),cljs.core.partition.call(null,(2),kvs));
}));

/** @this {Function} */
(medley.core.assoc_some.cljs$lang$applyTo = (function (seq26366){
var G__26367 = cljs.core.first.call(null,seq26366);
var seq26366__$1 = cljs.core.next.call(null,seq26366);
var G__26368 = cljs.core.first.call(null,seq26366__$1);
var seq26366__$2 = cljs.core.next.call(null,seq26366__$1);
var G__26369 = cljs.core.first.call(null,seq26366__$2);
var seq26366__$3 = cljs.core.next.call(null,seq26366__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26367,G__26368,G__26369,seq26366__$3);
}));

(medley.core.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Updates a value in a map given a key and a function, if and only if the key
 *   exists in the map. See: `clojure.core/update`.
 */
medley.core.update_existing = (function medley$core$update_existing(var_args){
var G__26387 = arguments.length;
switch (G__26387) {
case 3:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26389 = arguments.length;
var i__4772__auto___26390 = (0);
while(true){
if((i__4772__auto___26390 < len__4771__auto___26389)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26390]));

var G__26391 = (i__4772__auto___26390 + (1));
i__4772__auto___26390 = G__26391;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((6)),(0),null));
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4793__auto__);

}
});

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
var temp__5455__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var kv = temp__5455__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.val.call(null,kv)));
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x){
var temp__5455__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var kv = temp__5455__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.val.call(null,kv),x));
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x,y){
var temp__5455__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var kv = temp__5455__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.val.call(null,kv),x,y));
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,x,y,z){
var temp__5455__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var kv = temp__5455__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.val.call(null,kv),x,y,z));
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x,y,z,more){
var temp__5455__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var kv = temp__5455__auto__;
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.val.call(null,kv),x,y,z,more));
} else {
return m;
}
}));

/** @this {Function} */
(medley.core.update_existing.cljs$lang$applyTo = (function (seq26380){
var G__26381 = cljs.core.first.call(null,seq26380);
var seq26380__$1 = cljs.core.next.call(null,seq26380);
var G__26382 = cljs.core.first.call(null,seq26380__$1);
var seq26380__$2 = cljs.core.next.call(null,seq26380__$1);
var G__26383 = cljs.core.first.call(null,seq26380__$2);
var seq26380__$3 = cljs.core.next.call(null,seq26380__$2);
var G__26384 = cljs.core.first.call(null,seq26380__$3);
var seq26380__$4 = cljs.core.next.call(null,seq26380__$3);
var G__26385 = cljs.core.first.call(null,seq26380__$4);
var seq26380__$5 = cljs.core.next.call(null,seq26380__$4);
var G__26386 = cljs.core.first.call(null,seq26380__$5);
var seq26380__$6 = cljs.core.next.call(null,seq26380__$5);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26381,G__26382,G__26383,G__26384,G__26385,G__26386,seq26380__$6);
}));

(medley.core.update_existing.cljs$lang$maxFixedArity = (6));

/**
 * Updates a value in a nested associative structure, if and only if the key
 *   path exists. See: `clojure.core/update-in`.
 */
medley.core.update_existing_in = (function medley$core$update_existing_in(var_args){
var args__4777__auto__ = [];
var len__4771__auto___26399 = arguments.length;
var i__4772__auto___26400 = (0);
while(true){
if((i__4772__auto___26400 < len__4771__auto___26399)){
args__4777__auto__.push((arguments[i__4772__auto___26400]));

var G__26401 = (i__4772__auto___26400 + (1));
i__4772__auto___26400 = G__26401;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var up = (function medley$core$up(m__$1,ks__$1,f__$1,args__$1){
var vec__26396 = ks__$1;
var seq__26397 = cljs.core.seq.call(null,vec__26396);
var first__26398 = cljs.core.first.call(null,seq__26397);
var seq__26397__$1 = cljs.core.next.call(null,seq__26397);
var k = first__26398;
var ks__$2 = seq__26397__$1;
var temp__5455__auto__ = cljs.core.find.call(null,m__$1,k);
if(cljs.core.truth_(temp__5455__auto__)){
var kv = temp__5455__auto__;
if(ks__$2){
return cljs.core.assoc.call(null,m__$1,k,medley$core$up.call(null,cljs.core.val.call(null,kv),ks__$2,f__$1,args__$1));
} else {
return cljs.core.assoc.call(null,m__$1,k,cljs.core.apply.call(null,f__$1,cljs.core.val.call(null,kv),args__$1));
}
} else {
return m__$1;
}
});
return up.call(null,m,ks,f,args);
}));

(medley.core.update_existing_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(medley.core.update_existing_in.cljs$lang$applyTo = (function (seq26392){
var G__26393 = cljs.core.first.call(null,seq26392);
var seq26392__$1 = cljs.core.next.call(null,seq26392);
var G__26394 = cljs.core.first.call(null,seq26392__$1);
var seq26392__$2 = cljs.core.next.call(null,seq26392__$1);
var G__26395 = cljs.core.first.call(null,seq26392__$2);
var seq26392__$3 = cljs.core.next.call(null,seq26392__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26393,G__26394,G__26395,seq26392__$3);
}));

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
var coll_SINGLEQUOTE_ = ((cljs.core.record_QMARK_.call(null,coll))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,coll):coll);
if(medley.core.editable_QMARK_.call(null,coll_SINGLEQUOTE_)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll_SINGLEQUOTE_)),coll_SINGLEQUOTE_));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll_SINGLEQUOTE_),coll_SINGLEQUOTE_);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Maps a function over the key/value pairs of an associative collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
var vec__26403 = f.call(null,k,v);
var k__$1 = cljs.core.nth.call(null,vec__26403,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__26403,(1),null);
return xf.call(null,m,k__$1,v__$1);
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of one or more associative collections.
 *   The function should accept number-of-colls arguments. Any keys which are not
 *   shared among all collections are ignored.
 */
medley.core.map_vals = (function medley$core$map_vals(var_args){
var G__26412 = arguments.length;
switch (G__26412) {
case 2:
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26414 = arguments.length;
var i__4772__auto___26415 = (0);
while(true){
if((i__4772__auto___26415 < len__4771__auto___26414)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26415]));

var G__26416 = (i__4772__auto___26415 + (1));
i__4772__auto___26415 = G__26416;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
}));

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (f,c1,colls){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.every_QMARK_.call(null,(function (p1__26406_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__26406_SHARP_,k);
}),colls)){
return xf.call(null,m,k,cljs.core.apply.call(null,f,v,cljs.core.map.call(null,(function (p1__26407_SHARP_){
return cljs.core.get.call(null,p1__26407_SHARP_,k);
}),colls)));
} else {
return m;
}
});
}),c1);
}));

/** @this {Function} */
(medley.core.map_vals.cljs$lang$applyTo = (function (seq26409){
var G__26410 = cljs.core.first.call(null,seq26409);
var seq26409__$1 = cljs.core.next.call(null,seq26409);
var G__26411 = cljs.core.first.call(null,seq26409__$1);
var seq26409__$2 = cljs.core.next.call(null,seq26409__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26410,G__26411,seq26409__$2);
}));

(medley.core.map_vals.cljs$lang$maxFixedArity = (2));

/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new key.
 */
medley.core.map_kv_keys = (function medley$core$map_kv_keys(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k,v),v);
});
}),coll);
});
/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new value.
 */
medley.core.map_kv_vals = (function medley$core$map_kv_vals(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,k,v));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__26418 = arguments.length;
switch (G__26418) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,medley.core.queue.call(null),coll);
}));

(medley.core.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return ((x === true) || (x === false));
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var G__26424 = arguments.length;
switch (G__26424) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26426 = arguments.length;
var i__4772__auto___26427 = (0);
while(true){
if((i__4772__auto___26427 < len__4771__auto___26426)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26427]));

var G__26428 = (i__4772__auto___26427 + (1));
i__4772__auto___26427 = G__26428;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) < (0))){
return a;
} else {
return b;
}
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.least,medley.core.least.call(null,a,b),more);
}));

/** @this {Function} */
(medley.core.least.cljs$lang$applyTo = (function (seq26421){
var G__26422 = cljs.core.first.call(null,seq26421);
var seq26421__$1 = cljs.core.next.call(null,seq26421);
var G__26423 = cljs.core.first.call(null,seq26421__$1);
var seq26421__$2 = cljs.core.next.call(null,seq26421__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26422,G__26423,seq26421__$2);
}));

(medley.core.least.cljs$lang$maxFixedArity = (2));

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__26433 = arguments.length;
switch (G__26433) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26435 = arguments.length;
var i__4772__auto___26436 = (0);
while(true){
if((i__4772__auto___26436 < len__4771__auto___26435)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26436]));

var G__26437 = (i__4772__auto___26436 + (1));
i__4772__auto___26436 = G__26437;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) > (0))){
return a;
} else {
return b;
}
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.greatest,medley.core.greatest.call(null,a,b),more);
}));

/** @this {Function} */
(medley.core.greatest.cljs$lang$applyTo = (function (seq26430){
var G__26431 = cljs.core.first.call(null,seq26430);
var seq26430__$1 = cljs.core.next.call(null,seq26430);
var G__26432 = cljs.core.first.call(null,seq26430__$1);
var seq26430__$2 = cljs.core.next.call(null,seq26430__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26431,G__26432,seq26430__$2);
}));

(medley.core.greatest.cljs$lang$maxFixedArity = (2));

/**
 * Lazily concatenates a collection of collections into a flat sequence.
 */
medley.core.join = (function medley$core$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5457__auto__ = cljs.core.seq.call(null,colls);
if(temp__5457__auto__){
var s = temp__5457__auto__;
return cljs.core.concat.call(null,cljs.core.first.call(null,s),medley.core.join.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
});
/**
 * Recursively merges maps together. If all the maps supplied have nested maps
 *   under the same keys, these nested maps are merged. Otherwise the value is
 *   overwritten, as in `clojure.core/merge`.
 */
medley.core.deep_merge = (function medley$core$deep_merge(var_args){
var G__26442 = arguments.length;
switch (G__26442) {
case 0:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26444 = arguments.length;
var i__4772__auto___26445 = (0);
while(true){
if((i__4772__auto___26445 < len__4771__auto___26444)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26445]));

var G__26446 = (i__4772__auto___26445 + (1));
i__4772__auto___26445 = G__26446;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_((function (){var or__4160__auto__ = a;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return b;
}
})())){
var merge_entry = (function medley$core$merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v_SINGLEQUOTE_ = cljs.core.val.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.assoc.call(null,m,k,(function (){var v = cljs.core.get.call(null,m,k);
if(((cljs.core.map_QMARK_.call(null,v)) && (cljs.core.map_QMARK_.call(null,v_SINGLEQUOTE_)))){
return medley.core.deep_merge.call(null,v,v_SINGLEQUOTE_);
} else {
return v_SINGLEQUOTE_;
}
})());
} else {
return cljs.core.assoc.call(null,m,k,v_SINGLEQUOTE_);
}
});
return cljs.core.reduce.call(null,merge_entry,(function (){var or__4160__auto__ = a;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,b));
} else {
return null;
}
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.deep_merge,(function (){var or__4160__auto__ = a;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cons.call(null,b,more));
}));

/** @this {Function} */
(medley.core.deep_merge.cljs$lang$applyTo = (function (seq26439){
var G__26440 = cljs.core.first.call(null,seq26439);
var seq26439__$1 = cljs.core.next.call(null,seq26439);
var G__26441 = cljs.core.first.call(null,seq26439__$1);
var seq26439__$2 = cljs.core.next.call(null,seq26439__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26440,G__26441,seq26439__$2);
}));

(medley.core.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__26451 = arguments.length;
switch (G__26451) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26453 = arguments.length;
var i__4772__auto___26454 = (0);
while(true){
if((i__4772__auto___26454 < len__4771__auto___26453)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26454]));

var G__26455 = (i__4772__auto___26454 + (1));
i__4772__auto___26454 = G__26455;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
}));

(medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.call(null,f,a,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
}));

/** @this {Function} */
(medley.core.mapply.cljs$lang$applyTo = (function (seq26448){
var G__26449 = cljs.core.first.call(null,seq26448);
var seq26448__$1 = cljs.core.next.call(null,seq26448);
var G__26450 = cljs.core.first.call(null,seq26448__$1);
var seq26448__$2 = cljs.core.next.call(null,seq26448__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26449,G__26450,seq26448__$2);
}));

(medley.core.mapply.cljs$lang$maxFixedArity = (2));

/**
 * Returns a map of the elements of coll keyed by the result of f on each
 *   element. The value at each key will be the last element in coll associated
 *   with that key. This function is similar to `clojure.core/group-by`, except
 *   that elements with the same key are overwritten, rather than added to a
 *   vector of values.
 */
medley.core.index_by = (function medley$core$index_by(f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__26456_SHARP_,p2__26457_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__26456_SHARP_,f.call(null,p2__26457_SHARP_),p2__26457_SHARP_);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__26462 = arguments.length;
switch (G__26462) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26464 = arguments.length;
var i__4772__auto___26465 = (0);
while(true){
if((i__4772__auto___26465 < len__4771__auto___26464)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26465]));

var G__26466 = (i__4772__auto___26465 + (1));
i__4772__auto___26465 = G__26466;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if(((s1) && (s2))){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),medley.core.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
return ((s1) || (s2));
}
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
if(cljs.core.seq.call(null,ss)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,medley.core.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
}));

/** @this {Function} */
(medley.core.interleave_all.cljs$lang$applyTo = (function (seq26459){
var G__26460 = cljs.core.first.call(null,seq26459);
var seq26459__$1 = cljs.core.next.call(null,seq26459);
var G__26461 = cljs.core.first.call(null,seq26459__$1);
var seq26459__$2 = cljs.core.next.call(null,seq26459__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26460,G__26461,seq26459__$2);
}));

(medley.core.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__26468 = arguments.length;
switch (G__26468) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__26474 = null;
var G__26474__0 = (function (){
return rf.call(null);
});
var G__26474__1 = (function (result){
return rf.call(null,result);
});
var G__26474__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__26474 = function(result,x){
switch(arguments.length){
case 0:
return G__26474__0.call(this);
case 1:
return G__26474__1.call(this,result);
case 2:
return G__26474__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26474.cljs$core$IFn$_invoke$arity$0 = G__26474__0;
G__26474.cljs$core$IFn$_invoke$arity$1 = G__26474__1;
G__26474.cljs$core$IFn$_invoke$arity$2 = G__26474__2;
return G__26474;
})()
});
}));

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__26469,seen__$1){
while(true){
var vec__26470 = p__26469;
var x = cljs.core.nth.call(null,vec__26470,(0),null);
var xs__$1 = vec__26470;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__26475 = cljs.core.rest.call(null,s);
var G__26476 = seen__$1;
p__26469 = G__26475;
seen__$1 = G__26476;
continue;
} else {
return cljs.core.cons.call(null,x,medley$core$step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,fx)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
}));

(medley.core.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__26478 = arguments.length;
switch (G__26478) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return (function() {
var G__26480 = null;
var G__26480__0 = (function (){
return rf.call(null);
});
var G__26480__1 = (function (result){
return rf.call(null,result);
});
var G__26480__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__26480 = function(result,x){
switch(arguments.length){
case 0:
return G__26480__0.call(this);
case 1:
return G__26480__1.call(this,result);
case 2:
return G__26480__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26480.cljs$core$IFn$_invoke$arity$0 = G__26480__0;
G__26480.cljs$core$IFn$_invoke$arity$1 = G__26480__1;
G__26480.cljs$core$IFn$_invoke$arity$2 = G__26480__2;
return G__26480;
})()
});
}));

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,medley.core.dedupe_by.call(null,f),coll);
}));

(medley.core.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__26482 = arguments.length;
switch (G__26482) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__26484 = null;
var G__26484__0 = (function (){
return rf.call(null);
});
var G__26484__1 = (function (result){
return rf.call(null,result);
});
var G__26484__2 = (function (result,x){
var result__$1 = rf.call(null,result,x);
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__26484 = function(result,x){
switch(arguments.length){
case 0:
return G__26484__0.call(this);
case 1:
return G__26484__1.call(this,result);
case 2:
return G__26484__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26484.cljs$core$IFn$_invoke$arity$0 = G__26484__0;
G__26484.cljs$core$IFn$_invoke$arity$1 = G__26484__1;
G__26484.cljs$core$IFn$_invoke$arity$2 = G__26484__2;
return G__26484;
})()
});
}));

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5457__auto__ = cljs.core.seq.call(null,coll);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var x = cljs.core.first.call(null,s);
return cljs.core.cons.call(null,x,((cljs.core.not.call(null,pred.call(null,x)))?medley.core.take_upto.call(null,pred,cljs.core.rest.call(null,s)):null));
} else {
return null;
}
}),null,null));
}));

(medley.core.take_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var G__26486 = arguments.length;
switch (G__26486) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_.call(null,true);
return (function() {
var G__26488 = null;
var G__26488__0 = (function (){
return rf.call(null);
});
var G__26488__1 = (function (result){
return rf.call(null,result);
});
var G__26488__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref.call(null,dv))){
if(cljs.core.truth_(pred.call(null,x))){
cljs.core.vreset_BANG_.call(null,dv,false);
} else {
}

return result;
} else {
return rf.call(null,result,x);
}
});
G__26488 = function(result,x){
switch(arguments.length){
case 0:
return G__26488__0.call(this);
case 1:
return G__26488__1.call(this,result);
case 2:
return G__26488__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26488.cljs$core$IFn$_invoke$arity$0 = G__26488__0;
G__26488.cljs$core$IFn$_invoke$arity$1 = G__26488__1;
G__26488.cljs$core$IFn$_invoke$arity$2 = G__26488__2;
return G__26488;
})()
});
}));

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll));
}));

(medley.core.drop_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__26490 = arguments.length;
switch (G__26490) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return (function() {
var G__26492 = null;
var G__26492__0 = (function (){
return rf.call(null);
});
var G__26492__1 = (function (result){
return rf.call(null,result);
});
var G__26492__2 = (function (result,x){
return rf.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._vreset_BANG_.call(null,i,(cljs.core._deref.call(null,i) + (1))),x], null));
});
G__26492 = function(result,x){
switch(arguments.length){
case 0:
return G__26492__0.call(this);
case 1:
return G__26492__1.call(this,result);
case 2:
return G__26492__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26492.cljs$core$IFn$_invoke$arity$0 = G__26492__0;
G__26492.cljs$core$IFn$_invoke$arity$1 = G__26492__1;
G__26492.cljs$core$IFn$_invoke$arity$2 = G__26492__2;
return G__26492;
})()
});
}));

(medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
}));

(medley.core.indexed.cljs$lang$maxFixedArity = 1);

/**
 * Returns a lazy sequence of the items in coll, with a new item inserted at
 *   the supplied index, followed by all subsequent items of the collection. Runs
 *   in O(n) time.
 */
medley.core.insert_nth = (function medley$core$insert_nth(var_args){
var G__26494 = arguments.length;
switch (G__26494) {
case 2:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_.call(null,(index + (1)));
return (function() {
var G__26496 = null;
var G__26496__0 = (function (){
return rf.call(null);
});
var G__26496__1 = (function (result){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,idx),(1))){
return rf.call(null,rf.call(null,result,item));
} else {
return rf.call(null,result);
}
});
var G__26496__2 = (function (result,x){
if((cljs.core._vreset_BANG_.call(null,idx,(cljs.core._deref.call(null,idx) - (1))) === (0))){
return rf.call(null,rf.call(null,result,item),x);
} else {
return rf.call(null,result,x);
}
});
G__26496 = function(result,x){
switch(arguments.length){
case 0:
return G__26496__0.call(this);
case 1:
return G__26496__1.call(this,result);
case 2:
return G__26496__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26496.cljs$core$IFn$_invoke$arity$0 = G__26496__0;
G__26496.cljs$core$IFn$_invoke$arity$1 = G__26496__1;
G__26496.cljs$core$IFn$_invoke$arity$2 = G__26496__2;
return G__26496;
})()
});
}));

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons.call(null,item,coll);
} else {
if(cljs.core.seq.call(null,coll)){
return cljs.core.cons.call(null,cljs.core.first.call(null,coll),medley.core.insert_nth.call(null,(index - (1)),item,cljs.core.rest.call(null,coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.insert_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll, except for the item at the
 *   supplied index. Runs in O(n) time.
 */
medley.core.remove_nth = (function medley$core$remove_nth(var_args){
var G__26498 = arguments.length;
switch (G__26498) {
case 1:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1 = (function (index){
return (function (rf){
var idx = cljs.core.volatile_BANG_.call(null,(index + (1)));
return (function() {
var G__26500 = null;
var G__26500__0 = (function (){
return rf.call(null);
});
var G__26500__1 = (function (result){
return rf.call(null,result);
});
var G__26500__2 = (function (result,x){
if((cljs.core._vreset_BANG_.call(null,idx,(cljs.core._deref.call(null,idx) - (1))) === (0))){
return result;
} else {
return rf.call(null,result,x);
}
});
G__26500 = function(result,x){
switch(arguments.length){
case 0:
return G__26500__0.call(this);
case 1:
return G__26500__1.call(this,result);
case 2:
return G__26500__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26500.cljs$core$IFn$_invoke$arity$0 = G__26500__0;
G__26500.cljs$core$IFn$_invoke$arity$1 = G__26500__1;
G__26500.cljs$core$IFn$_invoke$arity$2 = G__26500__2;
return G__26500;
})()
});
}));

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.rest.call(null,coll);
} else {
if(cljs.core.seq.call(null,coll)){
return cljs.core.cons.call(null,cljs.core.first.call(null,coll),medley.core.remove_nth.call(null,(index - (1)),cljs.core.rest.call(null,coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.remove_nth.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll, with a new item replacing the
 *   item at the supplied index. Runs in O(n) time.
 */
medley.core.replace_nth = (function medley$core$replace_nth(var_args){
var G__26502 = arguments.length;
switch (G__26502) {
case 2:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_.call(null,(index + (1)));
return (function() {
var G__26504 = null;
var G__26504__0 = (function (){
return rf.call(null);
});
var G__26504__1 = (function (result){
return rf.call(null,result);
});
var G__26504__2 = (function (result,x){
if((cljs.core._vreset_BANG_.call(null,idx,(cljs.core._deref.call(null,idx) - (1))) === (0))){
return rf.call(null,result,item);
} else {
return rf.call(null,result,x);
}
});
G__26504 = function(result,x){
switch(arguments.length){
case 0:
return G__26504__0.call(this);
case 1:
return G__26504__1.call(this,result);
case 2:
return G__26504__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26504.cljs$core$IFn$_invoke$arity$0 = G__26504__0;
G__26504.cljs$core$IFn$_invoke$arity$1 = G__26504__1;
G__26504.cljs$core$IFn$_invoke$arity$2 = G__26504__2;
return G__26504;
})()
});
}));

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons.call(null,item,cljs.core.rest.call(null,coll));
} else {
if(cljs.core.seq.call(null,coll)){
return cljs.core.cons.call(null,cljs.core.first.call(null,coll),medley.core.replace_nth.call(null,(index - (1)),item,cljs.core.rest.call(null,coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.replace_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var G__26510 = arguments.length;
switch (G__26510) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___26512 = arguments.length;
var i__4772__auto___26513 = (0);
while(true){
if((i__4772__auto___26513 < len__4771__auto___26512)){
args_arr__4792__auto__.push((arguments[i__4772__auto___26513]));

var G__26514 = (i__4772__auto___26513 + (1));
i__4772__auto___26513 = G__26514;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref.call(null,atom);
cljs.core.reset_BANG_.call(null,atom,f.call(null,value));

return value;
}));

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.call(null,atom,(function (p1__26505_SHARP_){
return cljs.core.apply.call(null,f,p1__26505_SHARP_,args);
}));
}));

/** @this {Function} */
(medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq26507){
var G__26508 = cljs.core.first.call(null,seq26507);
var seq26507__$1 = cljs.core.next.call(null,seq26507);
var G__26509 = cljs.core.first.call(null,seq26507__$1);
var seq26507__$2 = cljs.core.next.call(null,seq26507__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26508,G__26509,seq26507__$2);
}));

(medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.call(null,atom,cljs.core.constantly.call(null,newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message.call(null,ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-cause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause.call(null,ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid.call(null,s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid.call(null);
});

//# sourceMappingURL=core.js.map
