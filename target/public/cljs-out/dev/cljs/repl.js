// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18790){
var map__18791 = p__18790;
var map__18791__$1 = cljs.core.__destructure_map.call(null,map__18791);
var m = map__18791__$1;
var n = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18792_18820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18793_18821 = null;
var count__18794_18822 = (0);
var i__18795_18823 = (0);
while(true){
if((i__18795_18823 < count__18794_18822)){
var f_18824 = cljs.core._nth.call(null,chunk__18793_18821,i__18795_18823);
cljs.core.println.call(null,"  ",f_18824);


var G__18825 = seq__18792_18820;
var G__18826 = chunk__18793_18821;
var G__18827 = count__18794_18822;
var G__18828 = (i__18795_18823 + (1));
seq__18792_18820 = G__18825;
chunk__18793_18821 = G__18826;
count__18794_18822 = G__18827;
i__18795_18823 = G__18828;
continue;
} else {
var temp__5457__auto___18829 = cljs.core.seq.call(null,seq__18792_18820);
if(temp__5457__auto___18829){
var seq__18792_18830__$1 = temp__5457__auto___18829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18792_18830__$1)){
var c__4591__auto___18831 = cljs.core.chunk_first.call(null,seq__18792_18830__$1);
var G__18832 = cljs.core.chunk_rest.call(null,seq__18792_18830__$1);
var G__18833 = c__4591__auto___18831;
var G__18834 = cljs.core.count.call(null,c__4591__auto___18831);
var G__18835 = (0);
seq__18792_18820 = G__18832;
chunk__18793_18821 = G__18833;
count__18794_18822 = G__18834;
i__18795_18823 = G__18835;
continue;
} else {
var f_18836 = cljs.core.first.call(null,seq__18792_18830__$1);
cljs.core.println.call(null,"  ",f_18836);


var G__18837 = cljs.core.next.call(null,seq__18792_18830__$1);
var G__18838 = null;
var G__18839 = (0);
var G__18840 = (0);
seq__18792_18820 = G__18837;
chunk__18793_18821 = G__18838;
count__18794_18822 = G__18839;
i__18795_18823 = G__18840;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18841 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18841);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18841)))?cljs.core.second.call(null,arglists_18841):arglists_18841));
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
var seq__18796_18842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18797_18843 = null;
var count__18798_18844 = (0);
var i__18799_18845 = (0);
while(true){
if((i__18799_18845 < count__18798_18844)){
var vec__18808_18846 = cljs.core._nth.call(null,chunk__18797_18843,i__18799_18845);
var name_18847 = cljs.core.nth.call(null,vec__18808_18846,(0),null);
var map__18811_18848 = cljs.core.nth.call(null,vec__18808_18846,(1),null);
var map__18811_18849__$1 = cljs.core.__destructure_map.call(null,map__18811_18848);
var doc_18850 = cljs.core.get.call(null,map__18811_18849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18851 = cljs.core.get.call(null,map__18811_18849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18847);

cljs.core.println.call(null," ",arglists_18851);

if(cljs.core.truth_(doc_18850)){
cljs.core.println.call(null," ",doc_18850);
} else {
}


var G__18852 = seq__18796_18842;
var G__18853 = chunk__18797_18843;
var G__18854 = count__18798_18844;
var G__18855 = (i__18799_18845 + (1));
seq__18796_18842 = G__18852;
chunk__18797_18843 = G__18853;
count__18798_18844 = G__18854;
i__18799_18845 = G__18855;
continue;
} else {
var temp__5457__auto___18856 = cljs.core.seq.call(null,seq__18796_18842);
if(temp__5457__auto___18856){
var seq__18796_18857__$1 = temp__5457__auto___18856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18796_18857__$1)){
var c__4591__auto___18858 = cljs.core.chunk_first.call(null,seq__18796_18857__$1);
var G__18859 = cljs.core.chunk_rest.call(null,seq__18796_18857__$1);
var G__18860 = c__4591__auto___18858;
var G__18861 = cljs.core.count.call(null,c__4591__auto___18858);
var G__18862 = (0);
seq__18796_18842 = G__18859;
chunk__18797_18843 = G__18860;
count__18798_18844 = G__18861;
i__18799_18845 = G__18862;
continue;
} else {
var vec__18812_18863 = cljs.core.first.call(null,seq__18796_18857__$1);
var name_18864 = cljs.core.nth.call(null,vec__18812_18863,(0),null);
var map__18815_18865 = cljs.core.nth.call(null,vec__18812_18863,(1),null);
var map__18815_18866__$1 = cljs.core.__destructure_map.call(null,map__18815_18865);
var doc_18867 = cljs.core.get.call(null,map__18815_18866__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18868 = cljs.core.get.call(null,map__18815_18866__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18864);

cljs.core.println.call(null," ",arglists_18868);

if(cljs.core.truth_(doc_18867)){
cljs.core.println.call(null," ",doc_18867);
} else {
}


var G__18869 = cljs.core.next.call(null,seq__18796_18857__$1);
var G__18870 = null;
var G__18871 = (0);
var G__18872 = (0);
seq__18796_18842 = G__18869;
chunk__18797_18843 = G__18870;
count__18798_18844 = G__18871;
i__18799_18845 = G__18872;
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

var seq__18816 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18817 = null;
var count__18818 = (0);
var i__18819 = (0);
while(true){
if((i__18819 < count__18818)){
var role = cljs.core._nth.call(null,chunk__18817,i__18819);
var temp__5457__auto___18873__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18873__$1)){
var spec_18874 = temp__5457__auto___18873__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18874));
} else {
}


var G__18875 = seq__18816;
var G__18876 = chunk__18817;
var G__18877 = count__18818;
var G__18878 = (i__18819 + (1));
seq__18816 = G__18875;
chunk__18817 = G__18876;
count__18818 = G__18877;
i__18819 = G__18878;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18816);
if(temp__5457__auto____$1){
var seq__18816__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18816__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__18816__$1);
var G__18879 = cljs.core.chunk_rest.call(null,seq__18816__$1);
var G__18880 = c__4591__auto__;
var G__18881 = cljs.core.count.call(null,c__4591__auto__);
var G__18882 = (0);
seq__18816 = G__18879;
chunk__18817 = G__18880;
count__18818 = G__18881;
i__18819 = G__18882;
continue;
} else {
var role = cljs.core.first.call(null,seq__18816__$1);
var temp__5457__auto___18883__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18883__$2)){
var spec_18884 = temp__5457__auto___18883__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18884));
} else {
}


var G__18885 = cljs.core.next.call(null,seq__18816__$1);
var G__18886 = null;
var G__18887 = (0);
var G__18888 = (0);
seq__18816 = G__18885;
chunk__18817 = G__18886;
count__18818 = G__18887;
i__18819 = G__18888;
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
var G__18889 = cljs.core.conj.call(null,via,t);
var G__18890 = cljs.core.ex_cause.call(null,t);
via = G__18889;
t = G__18890;
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
var map__18893 = datafied_throwable;
var map__18893__$1 = cljs.core.__destructure_map.call(null,map__18893);
var via = cljs.core.get.call(null,map__18893__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18893__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18893__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18894 = cljs.core.last.call(null,via);
var map__18894__$1 = cljs.core.__destructure_map.call(null,map__18894);
var type = cljs.core.get.call(null,map__18894__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18894__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18894__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18895 = data;
var map__18895__$1 = cljs.core.__destructure_map.call(null,map__18895);
var problems = cljs.core.get.call(null,map__18895__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18895__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18895__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18896 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18896__$1 = cljs.core.__destructure_map.call(null,map__18896);
var top_data = map__18896__$1;
var source = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18897 = phase;
var G__18897__$1 = (((G__18897 instanceof cljs.core.Keyword))?G__18897.fqn:null);
switch (G__18897__$1) {
case "read-source":
var map__18898 = data;
var map__18898__$1 = cljs.core.__destructure_map.call(null,map__18898);
var line = cljs.core.get.call(null,map__18898__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18898__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18899 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18899__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18899,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18899);
var G__18899__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18899__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18899__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18899__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18899__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18900 = top_data;
var G__18900__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18900,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18900);
var G__18900__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18900__$1);
var G__18900__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18900__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18900__$2);
var G__18900__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18900__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18900__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18900__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18900__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18901 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18901,(0),null);
var method = cljs.core.nth.call(null,vec__18901,(1),null);
var file = cljs.core.nth.call(null,vec__18901,(2),null);
var line = cljs.core.nth.call(null,vec__18901,(3),null);
var G__18904 = top_data;
var G__18904__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18904,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18904);
var G__18904__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18904__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18904__$1);
var G__18904__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__18904__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18904__$2);
var G__18904__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18904__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18904__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18904__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18904__$4;
}

break;
case "execution":
var vec__18905 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18905,(0),null);
var method = cljs.core.nth.call(null,vec__18905,(1),null);
var file = cljs.core.nth.call(null,vec__18905,(2),null);
var line = cljs.core.nth.call(null,vec__18905,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__18892_SHARP_){
var or__4160__auto__ = (p1__18892_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18892_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__18908 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18908__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18908,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18908);
var G__18908__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18908__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18908__$1);
var G__18908__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__18908__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18908__$2);
var G__18908__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18908__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18908__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18908__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18908__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18897__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18912){
var map__18913 = p__18912;
var map__18913__$1 = cljs.core.__destructure_map.call(null,map__18913);
var triage_data = map__18913__$1;
var phase = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18914 = phase;
var G__18914__$1 = (((G__18914 instanceof cljs.core.Keyword))?G__18914.fqn:null);
switch (G__18914__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18915_18924 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18916_18925 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18917_18926 = true;
var _STAR_print_fn_STAR__temp_val__18918_18927 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18917_18926);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18918_18927);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18910_SHARP_){
return cljs.core.dissoc.call(null,p1__18910_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18916_18925);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18915_18924);
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
var _STAR_print_newline_STAR__orig_val__18919_18928 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18920_18929 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18921_18930 = true;
var _STAR_print_fn_STAR__temp_val__18922_18931 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18921_18930);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18922_18931);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18911_SHARP_){
return cljs.core.dissoc.call(null,p1__18911_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18920_18929);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18919_18928);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18914__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
