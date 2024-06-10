// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20425__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20426__i = 0, G__20426__a = new Array(arguments.length -  0);
while (G__20426__i < G__20426__a.length) {G__20426__a[G__20426__i] = arguments[G__20426__i + 0]; ++G__20426__i;}
  args = new cljs.core.IndexedSeq(G__20426__a,0,null);
} 
return G__20425__delegate.call(this,args);};
G__20425.cljs$lang$maxFixedArity = 0;
G__20425.cljs$lang$applyTo = (function (arglist__20427){
var args = cljs.core.seq(arglist__20427);
return G__20425__delegate(args);
});
G__20425.cljs$core$IFn$_invoke$arity$variadic = G__20425__delegate;
return G__20425;
})()
);

(o.error = (function() { 
var G__20428__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20429__i = 0, G__20429__a = new Array(arguments.length -  0);
while (G__20429__i < G__20429__a.length) {G__20429__a[G__20429__i] = arguments[G__20429__i + 0]; ++G__20429__i;}
  args = new cljs.core.IndexedSeq(G__20429__a,0,null);
} 
return G__20428__delegate.call(this,args);};
G__20428.cljs$lang$maxFixedArity = 0;
G__20428.cljs$lang$applyTo = (function (arglist__20430){
var args = cljs.core.seq(arglist__20430);
return G__20428__delegate(args);
});
G__20428.cljs$core$IFn$_invoke$arity$variadic = G__20428__delegate;
return G__20428;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
