// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18206){
var map__18207 = p__18206;
var map__18207__$1 = cljs.core.__destructure_map.call(null,map__18207);
var m = map__18207__$1;
var n = cljs.core.get.call(null,map__18207__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
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
var seq__18208_18236 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18209_18237 = null;
var count__18210_18238 = (0);
var i__18211_18239 = (0);
while(true){
if((i__18211_18239 < count__18210_18238)){
var f_18240 = cljs.core._nth.call(null,chunk__18209_18237,i__18211_18239);
cljs.core.println.call(null,"  ",f_18240);


var G__18241 = seq__18208_18236;
var G__18242 = chunk__18209_18237;
var G__18243 = count__18210_18238;
var G__18244 = (i__18211_18239 + (1));
seq__18208_18236 = G__18241;
chunk__18209_18237 = G__18242;
count__18210_18238 = G__18243;
i__18211_18239 = G__18244;
continue;
} else {
var temp__5457__auto___18245 = cljs.core.seq.call(null,seq__18208_18236);
if(temp__5457__auto___18245){
var seq__18208_18246__$1 = temp__5457__auto___18245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18208_18246__$1)){
var c__4591__auto___18247 = cljs.core.chunk_first.call(null,seq__18208_18246__$1);
var G__18248 = cljs.core.chunk_rest.call(null,seq__18208_18246__$1);
var G__18249 = c__4591__auto___18247;
var G__18250 = cljs.core.count.call(null,c__4591__auto___18247);
var G__18251 = (0);
seq__18208_18236 = G__18248;
chunk__18209_18237 = G__18249;
count__18210_18238 = G__18250;
i__18211_18239 = G__18251;
continue;
} else {
var f_18252 = cljs.core.first.call(null,seq__18208_18246__$1);
cljs.core.println.call(null,"  ",f_18252);


var G__18253 = cljs.core.next.call(null,seq__18208_18246__$1);
var G__18254 = null;
var G__18255 = (0);
var G__18256 = (0);
seq__18208_18236 = G__18253;
chunk__18209_18237 = G__18254;
count__18210_18238 = G__18255;
i__18211_18239 = G__18256;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18257 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18257);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18257)))?cljs.core.second.call(null,arglists_18257):arglists_18257));
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
var seq__18212_18258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18213_18259 = null;
var count__18214_18260 = (0);
var i__18215_18261 = (0);
while(true){
if((i__18215_18261 < count__18214_18260)){
var vec__18224_18262 = cljs.core._nth.call(null,chunk__18213_18259,i__18215_18261);
var name_18263 = cljs.core.nth.call(null,vec__18224_18262,(0),null);
var map__18227_18264 = cljs.core.nth.call(null,vec__18224_18262,(1),null);
var map__18227_18265__$1 = cljs.core.__destructure_map.call(null,map__18227_18264);
var doc_18266 = cljs.core.get.call(null,map__18227_18265__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18267 = cljs.core.get.call(null,map__18227_18265__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18263);

cljs.core.println.call(null," ",arglists_18267);

if(cljs.core.truth_(doc_18266)){
cljs.core.println.call(null," ",doc_18266);
} else {
}


var G__18268 = seq__18212_18258;
var G__18269 = chunk__18213_18259;
var G__18270 = count__18214_18260;
var G__18271 = (i__18215_18261 + (1));
seq__18212_18258 = G__18268;
chunk__18213_18259 = G__18269;
count__18214_18260 = G__18270;
i__18215_18261 = G__18271;
continue;
} else {
var temp__5457__auto___18272 = cljs.core.seq.call(null,seq__18212_18258);
if(temp__5457__auto___18272){
var seq__18212_18273__$1 = temp__5457__auto___18272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18212_18273__$1)){
var c__4591__auto___18274 = cljs.core.chunk_first.call(null,seq__18212_18273__$1);
var G__18275 = cljs.core.chunk_rest.call(null,seq__18212_18273__$1);
var G__18276 = c__4591__auto___18274;
var G__18277 = cljs.core.count.call(null,c__4591__auto___18274);
var G__18278 = (0);
seq__18212_18258 = G__18275;
chunk__18213_18259 = G__18276;
count__18214_18260 = G__18277;
i__18215_18261 = G__18278;
continue;
} else {
var vec__18228_18279 = cljs.core.first.call(null,seq__18212_18273__$1);
var name_18280 = cljs.core.nth.call(null,vec__18228_18279,(0),null);
var map__18231_18281 = cljs.core.nth.call(null,vec__18228_18279,(1),null);
var map__18231_18282__$1 = cljs.core.__destructure_map.call(null,map__18231_18281);
var doc_18283 = cljs.core.get.call(null,map__18231_18282__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18284 = cljs.core.get.call(null,map__18231_18282__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18280);

cljs.core.println.call(null," ",arglists_18284);

if(cljs.core.truth_(doc_18283)){
cljs.core.println.call(null," ",doc_18283);
} else {
}


var G__18285 = cljs.core.next.call(null,seq__18212_18273__$1);
var G__18286 = null;
var G__18287 = (0);
var G__18288 = (0);
seq__18212_18258 = G__18285;
chunk__18213_18259 = G__18286;
count__18214_18260 = G__18287;
i__18215_18261 = G__18288;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__18232 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18233 = null;
var count__18234 = (0);
var i__18235 = (0);
while(true){
if((i__18235 < count__18234)){
var role = cljs.core._nth.call(null,chunk__18233,i__18235);
var temp__5457__auto___18289__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18289__$1)){
var spec_18290 = temp__5457__auto___18289__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18290));
} else {
}


var G__18291 = seq__18232;
var G__18292 = chunk__18233;
var G__18293 = count__18234;
var G__18294 = (i__18235 + (1));
seq__18232 = G__18291;
chunk__18233 = G__18292;
count__18234 = G__18293;
i__18235 = G__18294;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18232);
if(temp__5457__auto____$1){
var seq__18232__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18232__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__18232__$1);
var G__18295 = cljs.core.chunk_rest.call(null,seq__18232__$1);
var G__18296 = c__4591__auto__;
var G__18297 = cljs.core.count.call(null,c__4591__auto__);
var G__18298 = (0);
seq__18232 = G__18295;
chunk__18233 = G__18296;
count__18234 = G__18297;
i__18235 = G__18298;
continue;
} else {
var role = cljs.core.first.call(null,seq__18232__$1);
var temp__5457__auto___18299__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18299__$2)){
var spec_18300 = temp__5457__auto___18299__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18300));
} else {
}


var G__18301 = cljs.core.next.call(null,seq__18232__$1);
var G__18302 = null;
var G__18303 = (0);
var G__18304 = (0);
seq__18232 = G__18301;
chunk__18233 = G__18302;
count__18234 = G__18303;
i__18235 = G__18304;
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
))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
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
var G__18305 = cljs.core.conj.call(null,via,t);
var G__18306 = cljs.core.ex_cause.call(null,t);
via = G__18305;
t = G__18306;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
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
var map__18309 = datafied_throwable;
var map__18309__$1 = cljs.core.__destructure_map.call(null,map__18309);
var via = cljs.core.get.call(null,map__18309__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18309__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18309__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18310 = cljs.core.last.call(null,via);
var map__18310__$1 = cljs.core.__destructure_map.call(null,map__18310);
var type = cljs.core.get.call(null,map__18310__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18310__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18310__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18311 = data;
var map__18311__$1 = cljs.core.__destructure_map.call(null,map__18311);
var problems = cljs.core.get.call(null,map__18311__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18311__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18311__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18312 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18312__$1 = cljs.core.__destructure_map.call(null,map__18312);
var top_data = map__18312__$1;
var source = cljs.core.get.call(null,map__18312__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18313 = phase;
var G__18313__$1 = (((G__18313 instanceof cljs.core.Keyword))?G__18313.fqn:null);
switch (G__18313__$1) {
case "read-source":
var map__18314 = data;
var map__18314__$1 = cljs.core.__destructure_map.call(null,map__18314);
var line = cljs.core.get.call(null,map__18314__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18314__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18315 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18315__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18315,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18315);
var G__18315__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18315__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18315__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18315__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18316 = top_data;
var G__18316__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18316,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18316);
var G__18316__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18316__$1);
var G__18316__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18316__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18316__$2);
var G__18316__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18316__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18316__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18316__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18316__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18317 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18317,(0),null);
var method = cljs.core.nth.call(null,vec__18317,(1),null);
var file = cljs.core.nth.call(null,vec__18317,(2),null);
var line = cljs.core.nth.call(null,vec__18317,(3),null);
var G__18320 = top_data;
var G__18320__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18320,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18320);
var G__18320__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18320__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18320__$1);
var G__18320__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__18320__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18320__$2);
var G__18320__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18320__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18320__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18320__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18320__$4;
}

break;
case "execution":
var vec__18321 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18321,(0),null);
var method = cljs.core.nth.call(null,vec__18321,(1),null);
var file = cljs.core.nth.call(null,vec__18321,(2),null);
var line = cljs.core.nth.call(null,vec__18321,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__18308_SHARP_){
var or__4160__auto__ = (p1__18308_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18308_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__18324 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18324__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18324,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18324);
var G__18324__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18324__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18324__$1);
var G__18324__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__18324__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18324__$2);
var G__18324__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18324__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18324__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18324__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18324__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18313__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18328){
var map__18329 = p__18328;
var map__18329__$1 = cljs.core.__destructure_map.call(null,map__18329);
var triage_data = map__18329__$1;
var phase = cljs.core.get.call(null,map__18329__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18329__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18329__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18329__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18329__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18329__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18329__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18329__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18330 = phase;
var G__18330__$1 = (((G__18330 instanceof cljs.core.Keyword))?G__18330.fqn:null);
switch (G__18330__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18331_18340 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18332_18341 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18333_18342 = true;
var _STAR_print_fn_STAR__temp_val__18334_18343 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18333_18342);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18334_18343);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18326_SHARP_){
return cljs.core.dissoc.call(null,p1__18326_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18332_18341);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18331_18340);
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
var _STAR_print_newline_STAR__orig_val__18335_18344 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18336_18345 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18337_18346 = true;
var _STAR_print_fn_STAR__temp_val__18338_18347 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18337_18346);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18338_18347);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18327_SHARP_){
return cljs.core.dissoc.call(null,p1__18327_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18336_18345);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18335_18344);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18330__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
