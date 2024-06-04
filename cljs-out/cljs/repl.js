// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13239){
var map__13240 = p__13239;
var map__13240__$1 = cljs.core.__destructure_map.call(null,map__13240);
var m = map__13240__$1;
var n = cljs.core.get.call(null,map__13240__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13240__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13241_13269 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13242_13270 = null;
var count__13243_13271 = (0);
var i__13244_13272 = (0);
while(true){
if((i__13244_13272 < count__13243_13271)){
var f_13273 = cljs.core._nth.call(null,chunk__13242_13270,i__13244_13272);
cljs.core.println.call(null,"  ",f_13273);


var G__13274 = seq__13241_13269;
var G__13275 = chunk__13242_13270;
var G__13276 = count__13243_13271;
var G__13277 = (i__13244_13272 + (1));
seq__13241_13269 = G__13274;
chunk__13242_13270 = G__13275;
count__13243_13271 = G__13276;
i__13244_13272 = G__13277;
continue;
} else {
var temp__5735__auto___13278 = cljs.core.seq.call(null,seq__13241_13269);
if(temp__5735__auto___13278){
var seq__13241_13279__$1 = temp__5735__auto___13278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13241_13279__$1)){
var c__4591__auto___13280 = cljs.core.chunk_first.call(null,seq__13241_13279__$1);
var G__13281 = cljs.core.chunk_rest.call(null,seq__13241_13279__$1);
var G__13282 = c__4591__auto___13280;
var G__13283 = cljs.core.count.call(null,c__4591__auto___13280);
var G__13284 = (0);
seq__13241_13269 = G__13281;
chunk__13242_13270 = G__13282;
count__13243_13271 = G__13283;
i__13244_13272 = G__13284;
continue;
} else {
var f_13285 = cljs.core.first.call(null,seq__13241_13279__$1);
cljs.core.println.call(null,"  ",f_13285);


var G__13286 = cljs.core.next.call(null,seq__13241_13279__$1);
var G__13287 = null;
var G__13288 = (0);
var G__13289 = (0);
seq__13241_13269 = G__13286;
chunk__13242_13270 = G__13287;
count__13243_13271 = G__13288;
i__13244_13272 = G__13289;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13290 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13290);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13290)))?cljs.core.second.call(null,arglists_13290):arglists_13290));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13245_13291 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13246_13292 = null;
var count__13247_13293 = (0);
var i__13248_13294 = (0);
while(true){
if((i__13248_13294 < count__13247_13293)){
var vec__13257_13295 = cljs.core._nth.call(null,chunk__13246_13292,i__13248_13294);
var name_13296 = cljs.core.nth.call(null,vec__13257_13295,(0),null);
var map__13260_13297 = cljs.core.nth.call(null,vec__13257_13295,(1),null);
var map__13260_13298__$1 = cljs.core.__destructure_map.call(null,map__13260_13297);
var doc_13299 = cljs.core.get.call(null,map__13260_13298__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13300 = cljs.core.get.call(null,map__13260_13298__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13296);

cljs.core.println.call(null," ",arglists_13300);

if(cljs.core.truth_(doc_13299)){
cljs.core.println.call(null," ",doc_13299);
} else {
}


var G__13301 = seq__13245_13291;
var G__13302 = chunk__13246_13292;
var G__13303 = count__13247_13293;
var G__13304 = (i__13248_13294 + (1));
seq__13245_13291 = G__13301;
chunk__13246_13292 = G__13302;
count__13247_13293 = G__13303;
i__13248_13294 = G__13304;
continue;
} else {
var temp__5735__auto___13305 = cljs.core.seq.call(null,seq__13245_13291);
if(temp__5735__auto___13305){
var seq__13245_13306__$1 = temp__5735__auto___13305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13245_13306__$1)){
var c__4591__auto___13307 = cljs.core.chunk_first.call(null,seq__13245_13306__$1);
var G__13308 = cljs.core.chunk_rest.call(null,seq__13245_13306__$1);
var G__13309 = c__4591__auto___13307;
var G__13310 = cljs.core.count.call(null,c__4591__auto___13307);
var G__13311 = (0);
seq__13245_13291 = G__13308;
chunk__13246_13292 = G__13309;
count__13247_13293 = G__13310;
i__13248_13294 = G__13311;
continue;
} else {
var vec__13261_13312 = cljs.core.first.call(null,seq__13245_13306__$1);
var name_13313 = cljs.core.nth.call(null,vec__13261_13312,(0),null);
var map__13264_13314 = cljs.core.nth.call(null,vec__13261_13312,(1),null);
var map__13264_13315__$1 = cljs.core.__destructure_map.call(null,map__13264_13314);
var doc_13316 = cljs.core.get.call(null,map__13264_13315__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13317 = cljs.core.get.call(null,map__13264_13315__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13313);

cljs.core.println.call(null," ",arglists_13317);

if(cljs.core.truth_(doc_13316)){
cljs.core.println.call(null," ",doc_13316);
} else {
}


var G__13318 = cljs.core.next.call(null,seq__13245_13306__$1);
var G__13319 = null;
var G__13320 = (0);
var G__13321 = (0);
seq__13245_13291 = G__13318;
chunk__13246_13292 = G__13319;
count__13247_13293 = G__13320;
i__13248_13294 = G__13321;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__13265 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13266 = null;
var count__13267 = (0);
var i__13268 = (0);
while(true){
if((i__13268 < count__13267)){
var role = cljs.core._nth.call(null,chunk__13266,i__13268);
var temp__5735__auto___13322__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13322__$1)){
var spec_13323 = temp__5735__auto___13322__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13323));
} else {
}


var G__13324 = seq__13265;
var G__13325 = chunk__13266;
var G__13326 = count__13267;
var G__13327 = (i__13268 + (1));
seq__13265 = G__13324;
chunk__13266 = G__13325;
count__13267 = G__13326;
i__13268 = G__13327;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__13265);
if(temp__5735__auto____$1){
var seq__13265__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13265__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__13265__$1);
var G__13328 = cljs.core.chunk_rest.call(null,seq__13265__$1);
var G__13329 = c__4591__auto__;
var G__13330 = cljs.core.count.call(null,c__4591__auto__);
var G__13331 = (0);
seq__13265 = G__13328;
chunk__13266 = G__13329;
count__13267 = G__13330;
i__13268 = G__13331;
continue;
} else {
var role = cljs.core.first.call(null,seq__13265__$1);
var temp__5735__auto___13332__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13332__$2)){
var spec_13333 = temp__5735__auto___13332__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13333));
} else {
}


var G__13334 = cljs.core.next.call(null,seq__13265__$1);
var G__13335 = null;
var G__13336 = (0);
var G__13337 = (0);
seq__13265 = G__13334;
chunk__13266 = G__13335;
count__13267 = G__13336;
i__13268 = G__13337;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__13338 = cljs.core.conj.call(null,via,t);
var G__13339 = cljs.core.ex_cause.call(null,t);
via = G__13338;
t = G__13339;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__13342 = datafied_throwable;
var map__13342__$1 = cljs.core.__destructure_map.call(null,map__13342);
var via = cljs.core.get.call(null,map__13342__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__13342__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__13342__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__13343 = cljs.core.last.call(null,via);
var map__13343__$1 = cljs.core.__destructure_map.call(null,map__13343);
var type = cljs.core.get.call(null,map__13343__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__13343__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__13343__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__13344 = data;
var map__13344__$1 = cljs.core.__destructure_map.call(null,map__13344);
var problems = cljs.core.get.call(null,map__13344__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__13344__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__13344__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__13345 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__13345__$1 = cljs.core.__destructure_map.call(null,map__13345);
var top_data = map__13345__$1;
var source = cljs.core.get.call(null,map__13345__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__13346 = phase;
var G__13346__$1 = (((G__13346 instanceof cljs.core.Keyword))?G__13346.fqn:null);
switch (G__13346__$1) {
case "read-source":
var map__13347 = data;
var map__13347__$1 = cljs.core.__destructure_map.call(null,map__13347);
var line = cljs.core.get.call(null,map__13347__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13347__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__13348 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__13348__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13348,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13348);
var G__13348__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13348__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13348__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13348__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__13349 = top_data;
var G__13349__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13349,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13349);
var G__13349__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13349__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13349__$1);
var G__13349__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13349__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13349__$2);
var G__13349__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13349__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13349__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13349__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13349__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__13350 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13350,(0),null);
var method = cljs.core.nth.call(null,vec__13350,(1),null);
var file = cljs.core.nth.call(null,vec__13350,(2),null);
var line = cljs.core.nth.call(null,vec__13350,(3),null);
var G__13353 = top_data;
var G__13353__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__13353,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__13353);
var G__13353__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__13353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__13353__$1);
var G__13353__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__13353__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__13353__$2);
var G__13353__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13353__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13353__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13353__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13353__$4;
}

break;
case "execution":
var vec__13354 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13354,(0),null);
var method = cljs.core.nth.call(null,vec__13354,(1),null);
var file = cljs.core.nth.call(null,vec__13354,(2),null);
var line = cljs.core.nth.call(null,vec__13354,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__13341_SHARP_){
var or__4160__auto__ = (p1__13341_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__13341_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__13357 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__13357__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__13357,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__13357);
var G__13357__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13357__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13357__$1);
var G__13357__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.call(null,G__13357__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__13357__$2);
var G__13357__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__13357__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__13357__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13357__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13357__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13346__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__13361){
var map__13362 = p__13361;
var map__13362__$1 = cljs.core.__destructure_map.call(null,map__13362);
var triage_data = map__13362__$1;
var phase = cljs.core.get.call(null,map__13362__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__13362__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__13362__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13362__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__13362__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__13362__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__13362__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__13362__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__13363 = phase;
var G__13363__$1 = (((G__13363 instanceof cljs.core.Keyword))?G__13363.fqn:null);
switch (G__13363__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13364_13373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13365_13374 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13366_13375 = true;
var _STAR_print_fn_STAR__temp_val__13367_13376 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13366_13375);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13367_13376);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13359_SHARP_){
return cljs.core.dissoc.call(null,p1__13359_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13365_13374);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13364_13373);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13368_13377 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13369_13378 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13370_13379 = true;
var _STAR_print_fn_STAR__temp_val__13371_13380 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13370_13379);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13371_13380);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13360_SHARP_){
return cljs.core.dissoc.call(null,p1__13360_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13369_13378);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13368_13377);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13363__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
