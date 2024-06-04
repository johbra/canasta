// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

var cljs$spec$alpha$Spec$conform_STAR_$dyn_12620 = (function (spec,x){
var x__4463__auto__ = (((spec == null))?null:spec);
var m__4464__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,spec,x);
} else {
var m__4461__auto__ = (cljs.spec.alpha.conform_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
});
cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
return cljs$spec$alpha$Spec$conform_STAR_$dyn_12620.call(null,spec,x);
}
});

var cljs$spec$alpha$Spec$unform_STAR_$dyn_12621 = (function (spec,y){
var x__4463__auto__ = (((spec == null))?null:spec);
var m__4464__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,spec,y);
} else {
var m__4461__auto__ = (cljs.spec.alpha.unform_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
});
cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
return cljs$spec$alpha$Spec$unform_STAR_$dyn_12621.call(null,spec,y);
}
});

var cljs$spec$alpha$Spec$explain_STAR_$dyn_12622 = (function (spec,path,via,in$,x){
var x__4463__auto__ = (((spec == null))?null:spec);
var m__4464__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,spec,path,via,in$,x);
} else {
var m__4461__auto__ = (cljs.spec.alpha.explain_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
});
cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
return cljs$spec$alpha$Spec$explain_STAR_$dyn_12622.call(null,spec,path,via,in$,x);
}
});

var cljs$spec$alpha$Spec$gen_STAR_$dyn_12623 = (function (spec,overrides,path,rmap){
var x__4463__auto__ = (((spec == null))?null:spec);
var m__4464__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__4461__auto__ = (cljs.spec.alpha.gen_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
});
cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
return cljs$spec$alpha$Spec$gen_STAR_$dyn_12623.call(null,spec,overrides,path,rmap);
}
});

var cljs$spec$alpha$Spec$with_gen_STAR_$dyn_12624 = (function (spec,gfn){
var x__4463__auto__ = (((spec == null))?null:spec);
var m__4464__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,spec,gfn);
} else {
var m__4461__auto__ = (cljs.spec.alpha.with_gen_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
});
cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
return cljs$spec$alpha$Spec$with_gen_STAR_$dyn_12624.call(null,spec,gfn);
}
});

var cljs$spec$alpha$Spec$describe_STAR_$dyn_12625 = (function (spec){
var x__4463__auto__ = (((spec == null))?null:spec);
var m__4464__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,spec);
} else {
var m__4461__auto__ = (cljs.spec.alpha.describe_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
});
cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
return cljs$spec$alpha$Spec$describe_STAR_$dyn_12625.call(null,spec);
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__12626 = cljs.core.get.call(null,reg,spec);
spec = G__12626;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if((!(cljs.core.ident_QMARK_.call(null,spec)))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__4160__auto__ = cljs.spec.alpha.reg_resolve.call(null,k);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__4149__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4149__auto__)){
return x;
} else {
return and__4149__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__4160__auto__ = ((cljs.core.ident_QMARK_.call(null,spec_or_k))?cljs.spec.alpha.reg_resolve.call(null,spec_or_k):false);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = cljs.spec.alpha.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var or__4160__auto____$2 = cljs.spec.alpha.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,s))){
return cljs.spec.alpha.with_name.call(null,cljs.spec.alpha.regex_spec_impl.call(null,s,null),cljs.spec.alpha.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__4160__auto__ = cljs.spec.alpha.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.alpha.fn_sym = (function cljs$spec$alpha$fn_sym(f_n){
if(clojure.string.blank_QMARK_.call(null,f_n)){
return null;
} else {
var xs = cljs.core.map.call(null,cljs.core.demunge,clojure.string.split.call(null,f_n,"$"));
if(((((2) <= cljs.core.count.call(null,xs))) && (cljs.core.every_QMARK_.call(null,(function (p1__12630_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__12630_SHARP_)));
}),xs)))){
var vec__12631 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.last).call(null,xs);
var xs__$1 = cljs.core.nth.call(null,vec__12631,(0),null);
var y = cljs.core.nth.call(null,vec__12631,(1),null);
return cljs.core.symbol.call(null,[clojure.string.join.call(null,".",xs__$1),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

var cljs$spec$alpha$Specize$specize_STAR_$dyn_12636 = (function() {
var G__12637 = null;
var G__12637__1 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,_);
} else {
var m__4461__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
});
var G__12637__2 = (function (_,form){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,_,form);
} else {
var m__4461__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
});
G__12637 = function(_,form){
switch(arguments.length){
case 1:
return G__12637__1.call(this,_);
case 2:
return G__12637__2.call(this,_,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12637.cljs$core$IFn$_invoke$arity$1 = G__12637__1;
G__12637.cljs$core$IFn$_invoke$arity$2 = G__12637__2;
return G__12637;
})()
;
cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__12635 = arguments.length;
switch (G__12635) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
return cljs$spec$alpha$Specize$specize_STAR_$dyn_12636.call(null,_);
}
}));

(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
return cljs$spec$alpha$Specize$specize_STAR_$dyn_12636.call(null,_,form);
}
}));

(cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2);


(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
}));

(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
}));

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
}));

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
}));

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
}));

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
}));

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
}));

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
}));

goog.object.set(cljs.spec.alpha.Specize,"_",true);

goog.object.set(cljs.spec.alpha.specize_STAR_,"_",(function() {
var G__12639 = null;
var G__12639__1 = (function (o){
var temp__5733__auto__ = ((cljs.core.fn_QMARK_.call(null,o))?cljs.spec.alpha.fn_sym.call(null,o.name):false);
if(cljs.core.truth_(temp__5733__auto__)){
var f_n = temp__5733__auto__;
return cljs.spec.alpha.spec_impl.call(null,f_n,o,null,null);
} else {
return cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
}
});
var G__12639__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__12639 = function(o,form){
switch(arguments.length){
case 1:
return G__12639__1.call(this,o);
case 2:
return G__12639__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12639.cljs$core$IFn$_invoke$arity$1 = G__12639__1;
G__12639.cljs$core$IFn$_invoke$arity$2 = G__12639__2;
return G__12639;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__12641 = arguments.length;
switch (G__12641) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__4160__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s);
}
}));

(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__4160__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s,form);
}
}));

(cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2);

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((((form__$1 instanceof cljs.core.Symbol))?cljs.core.namespace.call(null,form__$1):false))){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1))))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((((form instanceof cljs.core.Symbol))?cljs.core.namespace.call(null,form):false))){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev.call(null,cljs.spec.alpha.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5735__auto__ = cljs.spec.alpha.explain_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__5735__auto__)){
var probs = temp__5735__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,spec);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.call(null,(function (p1__12644_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__12644_SHARP_)));
}),cljs.core.sort_by.call(null,(function (p1__12643_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__12643_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.call(null,(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12645_12721 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12646_12722 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12647_12723 = true;
var _STAR_print_fn_STAR__temp_val__12648_12724 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12647_12723);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12648_12724);

try{var seq__12649_12725 = cljs.core.seq.call(null,problems);
var chunk__12650_12726 = null;
var count__12651_12727 = (0);
var i__12652_12728 = (0);
while(true){
if((i__12652_12728 < count__12651_12727)){
var map__12687_12729 = cljs.core._nth.call(null,chunk__12650_12726,i__12652_12728);
var map__12687_12730__$1 = cljs.core.__destructure_map.call(null,map__12687_12729);
var prob_12731 = map__12687_12730__$1;
var path_12732 = cljs.core.get.call(null,map__12687_12730__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_12733 = cljs.core.get.call(null,map__12687_12730__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_12734 = cljs.core.get.call(null,map__12687_12730__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_12735 = cljs.core.get.call(null,map__12687_12730__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_12736 = cljs.core.get.call(null,map__12687_12730__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_12737 = cljs.core.get.call(null,map__12687_12730__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_12734);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_12735)){
cljs.core.print.call(null,reason_12735);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_12733));
}

if(cljs.core.empty_QMARK_.call(null,in_12737)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.pr_str.call(null,in_12737)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_12732)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.pr_str.call(null,path_12732)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_12736)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_12736))].join(''));
}

var seq__12688_12738 = cljs.core.seq.call(null,prob_12731);
var chunk__12689_12739 = null;
var count__12690_12740 = (0);
var i__12691_12741 = (0);
while(true){
if((i__12691_12741 < count__12690_12740)){
var vec__12698_12742 = cljs.core._nth.call(null,chunk__12689_12739,i__12691_12741);
var k_12743 = cljs.core.nth.call(null,vec__12698_12742,(0),null);
var v_12744 = cljs.core.nth.call(null,vec__12698_12742,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12743))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12743)," ");

cljs.core.pr.call(null,v_12744);
}


var G__12745 = seq__12688_12738;
var G__12746 = chunk__12689_12739;
var G__12747 = count__12690_12740;
var G__12748 = (i__12691_12741 + (1));
seq__12688_12738 = G__12745;
chunk__12689_12739 = G__12746;
count__12690_12740 = G__12747;
i__12691_12741 = G__12748;
continue;
} else {
var temp__5735__auto___12749 = cljs.core.seq.call(null,seq__12688_12738);
if(temp__5735__auto___12749){
var seq__12688_12750__$1 = temp__5735__auto___12749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12688_12750__$1)){
var c__4591__auto___12751 = cljs.core.chunk_first.call(null,seq__12688_12750__$1);
var G__12752 = cljs.core.chunk_rest.call(null,seq__12688_12750__$1);
var G__12753 = c__4591__auto___12751;
var G__12754 = cljs.core.count.call(null,c__4591__auto___12751);
var G__12755 = (0);
seq__12688_12738 = G__12752;
chunk__12689_12739 = G__12753;
count__12690_12740 = G__12754;
i__12691_12741 = G__12755;
continue;
} else {
var vec__12701_12756 = cljs.core.first.call(null,seq__12688_12750__$1);
var k_12757 = cljs.core.nth.call(null,vec__12701_12756,(0),null);
var v_12758 = cljs.core.nth.call(null,vec__12701_12756,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12757))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12757)," ");

cljs.core.pr.call(null,v_12758);
}


var G__12759 = cljs.core.next.call(null,seq__12688_12750__$1);
var G__12760 = null;
var G__12761 = (0);
var G__12762 = (0);
seq__12688_12738 = G__12759;
chunk__12689_12739 = G__12760;
count__12690_12740 = G__12761;
i__12691_12741 = G__12762;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__12763 = seq__12649_12725;
var G__12764 = chunk__12650_12726;
var G__12765 = count__12651_12727;
var G__12766 = (i__12652_12728 + (1));
seq__12649_12725 = G__12763;
chunk__12650_12726 = G__12764;
count__12651_12727 = G__12765;
i__12652_12728 = G__12766;
continue;
} else {
var temp__5735__auto___12767 = cljs.core.seq.call(null,seq__12649_12725);
if(temp__5735__auto___12767){
var seq__12649_12768__$1 = temp__5735__auto___12767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12649_12768__$1)){
var c__4591__auto___12769 = cljs.core.chunk_first.call(null,seq__12649_12768__$1);
var G__12770 = cljs.core.chunk_rest.call(null,seq__12649_12768__$1);
var G__12771 = c__4591__auto___12769;
var G__12772 = cljs.core.count.call(null,c__4591__auto___12769);
var G__12773 = (0);
seq__12649_12725 = G__12770;
chunk__12650_12726 = G__12771;
count__12651_12727 = G__12772;
i__12652_12728 = G__12773;
continue;
} else {
var map__12704_12774 = cljs.core.first.call(null,seq__12649_12768__$1);
var map__12704_12775__$1 = cljs.core.__destructure_map.call(null,map__12704_12774);
var prob_12776 = map__12704_12775__$1;
var path_12777 = cljs.core.get.call(null,map__12704_12775__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_12778 = cljs.core.get.call(null,map__12704_12775__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_12779 = cljs.core.get.call(null,map__12704_12775__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_12780 = cljs.core.get.call(null,map__12704_12775__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_12781 = cljs.core.get.call(null,map__12704_12775__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_12782 = cljs.core.get.call(null,map__12704_12775__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_12779);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_12780)){
cljs.core.print.call(null,reason_12780);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_12778));
}

if(cljs.core.empty_QMARK_.call(null,in_12782)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.pr_str.call(null,in_12782)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_12777)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.pr_str.call(null,path_12777)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_12781)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_12781))].join(''));
}

var seq__12705_12783 = cljs.core.seq.call(null,prob_12776);
var chunk__12706_12784 = null;
var count__12707_12785 = (0);
var i__12708_12786 = (0);
while(true){
if((i__12708_12786 < count__12707_12785)){
var vec__12715_12787 = cljs.core._nth.call(null,chunk__12706_12784,i__12708_12786);
var k_12788 = cljs.core.nth.call(null,vec__12715_12787,(0),null);
var v_12789 = cljs.core.nth.call(null,vec__12715_12787,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12788))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12788)," ");

cljs.core.pr.call(null,v_12789);
}


var G__12790 = seq__12705_12783;
var G__12791 = chunk__12706_12784;
var G__12792 = count__12707_12785;
var G__12793 = (i__12708_12786 + (1));
seq__12705_12783 = G__12790;
chunk__12706_12784 = G__12791;
count__12707_12785 = G__12792;
i__12708_12786 = G__12793;
continue;
} else {
var temp__5735__auto___12794__$1 = cljs.core.seq.call(null,seq__12705_12783);
if(temp__5735__auto___12794__$1){
var seq__12705_12795__$1 = temp__5735__auto___12794__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12705_12795__$1)){
var c__4591__auto___12796 = cljs.core.chunk_first.call(null,seq__12705_12795__$1);
var G__12797 = cljs.core.chunk_rest.call(null,seq__12705_12795__$1);
var G__12798 = c__4591__auto___12796;
var G__12799 = cljs.core.count.call(null,c__4591__auto___12796);
var G__12800 = (0);
seq__12705_12783 = G__12797;
chunk__12706_12784 = G__12798;
count__12707_12785 = G__12799;
i__12708_12786 = G__12800;
continue;
} else {
var vec__12718_12801 = cljs.core.first.call(null,seq__12705_12795__$1);
var k_12802 = cljs.core.nth.call(null,vec__12718_12801,(0),null);
var v_12803 = cljs.core.nth.call(null,vec__12718_12801,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12802))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12802)," ");

cljs.core.pr.call(null,v_12803);
}


var G__12804 = cljs.core.next.call(null,seq__12705_12795__$1);
var G__12805 = null;
var G__12806 = (0);
var G__12807 = (0);
seq__12705_12783 = G__12804;
chunk__12706_12784 = G__12805;
count__12707_12785 = G__12806;
i__12708_12786 = G__12807;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__12808 = cljs.core.next.call(null,seq__12649_12768__$1);
var G__12809 = null;
var G__12810 = (0);
var G__12811 = (0);
seq__12649_12725 = G__12808;
chunk__12650_12726 = G__12809;
count__12651_12727 = G__12810;
i__12652_12728 = G__12811;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12646_12722);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12645_12721);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out.call(null,cljs.spec.alpha.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12812_12816 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12813_12817 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12814_12818 = true;
var _STAR_print_fn_STAR__temp_val__12815_12819 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12814_12818);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12815_12819);

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12813_12817);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12812_12816);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
var temp__5733__auto__ = (function (){var or__4160__auto__ = (function (){var temp__5735__auto__ = (function (){var or__4160__auto__ = cljs.core.get.call(null,overrides,(function (){var or__4160__auto__ = cljs.spec.alpha.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var gfn = temp__5735__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.spec.alpha.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var g = temp__5733__auto__;
return cljs.spec.gen.alpha.such_that.call(null,(function (p1__12820_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__12820_SHARP_);
}),g,(100));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__12822 = arguments.length;
switch (G__12822) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.call(null,spec,null);
}));

(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
}));

(cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2);

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_(((cljs.core.ident_QMARK_.call(null,k))?cljs.core.namespace.call(null,k):false))){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

if((spec == null)){
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.dissoc,k);
} else {
var spec_12824__$1 = (cljs.core.truth_((function (){var or__4160__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec_12824__$1,k));
}

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.call(null,cljs.spec.alpha.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym.call(null,k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec.call(null,v);
var temp__5735__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5735__auto__)){
var arg_spec = temp__5735__auto__;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,arg_spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw cljs.core.ex_info.call(null,["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym.call(null,v))," did not conform to spec."].join(''),ed);
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k)));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__4160__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__12826 = arguments.length;
switch (G__12826) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.call(null,pred,x,form,null);
}));

(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5733__auto__ = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
return cljs.spec.alpha.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.pr_str.call(null,form)," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
}));

(cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4);

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__12829 = arguments.length;
switch (G__12829) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
}));

(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec,form);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
}));

(cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__12832 = arguments.length;
switch (G__12832) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818)))));
}));

(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,form))));
}));

(cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.alpha.explain_STAR_.call(null,pred__$1,path,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

/**
 * returns a generator for form f, which can be a keyword or a list
 *   starting with 'or or 'and.
 */
cljs.spec.alpha.k_gen = (function cljs$spec$alpha$k_gen(f){
if((f instanceof cljs.core.Keyword)){
return cljs.spec.gen.alpha.return$.call(null,f);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.first.call(null,f))){
return cljs.spec.alpha.or_k_gen.call(null,(1),cljs.core.rest.call(null,f));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,f))){
return cljs.spec.alpha.and_k_gen.call(null,cljs.core.rest.call(null,f));
} else {
return null;
}
}
}
});
/**
 * returns a tuple generator made up of generators for a random subset
 *   of min-count (default 0) to all elements in s.
 */
cljs.spec.alpha.or_k_gen = (function cljs$spec$alpha$or_k_gen(var_args){
var G__12835 = arguments.length;
switch (G__12835) {
case 1:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.spec.alpha.or_k_gen.call(null,(0),s);
}));

(cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2 = (function (min_count,s){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.gen.alpha.choose.call(null,min_count,cljs.core.count.call(null,s)),cljs.spec.gen.alpha.shuffle.call(null,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s))),(function (p__12836){
var vec__12837 = p__12836;
var n = cljs.core.nth.call(null,vec__12837,(0),null);
var gens = cljs.core.nth.call(null,vec__12837,(1),null);
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.take.call(null,n,gens));
}));
}));

(cljs.spec.alpha.or_k_gen.cljs$lang$maxFixedArity = 2);

/**
 * returns a tuple generator made up of generators for every element
 *   in s.
 */
cljs.spec.alpha.and_k_gen = (function cljs$spec$alpha$and_k_gen(s){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s));
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__12844){
var map__12845 = p__12844;
var map__12845__$1 = cljs.core.__destructure_map.call(null,map__12845);
var argm = map__12845__$1;
var opt = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__12845__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = (function (p1__12841_SHARP_){
var or__4160__auto__ = k__GT_s.call(null,p1__12841_SHARP_);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return p1__12841_SHARP_;
}
});
var id = cljs.core.random_uuid.call(null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha12846 = (function (keys__GT_specnames,opt,req_un,opt_un,p__12844,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,map__12845,id,req_keys,opt_specs,k__GT_s,pred_forms,meta12847){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.p__12844 = p__12844;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.map__12845 = map__12845;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta12847 = meta12847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12848,meta12847__$1){
var self__ = this;
var _12848__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12846(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.p__12844,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.map__12845,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta12847__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12848){
var self__ = this;
var _12848__$1 = this;
return self__.meta12847;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__12855 = m;
var vec__12856 = G__12855;
var seq__12857 = cljs.core.seq.call(null,vec__12856);
var first__12858 = cljs.core.first.call(null,seq__12857);
var seq__12857__$1 = cljs.core.next.call(null,seq__12857);
var vec__12859 = first__12858;
var k = cljs.core.nth.call(null,vec__12859,(0),null);
var v = cljs.core.nth.call(null,vec__12859,(1),null);
var ks = seq__12857__$1;
var keys = vec__12856;
var ret__$1 = ret;
var G__12855__$1 = G__12855;
while(true){
var ret__$2 = ret__$1;
var vec__12862 = G__12855__$1;
var seq__12863 = cljs.core.seq.call(null,vec__12862);
var first__12864 = cljs.core.first.call(null,seq__12863);
var seq__12863__$1 = cljs.core.next.call(null,seq__12863);
var vec__12865 = first__12864;
var k__$1 = cljs.core.nth.call(null,vec__12865,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__12865,(1),null);
var ks__$1 = seq__12863__$1;
var keys__$1 = vec__12862;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__5733__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__12890 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__12891 = ks__$1;
ret__$1 = G__12890;
G__12855__$1 = G__12891;
continue;
}
} else {
var G__12892 = ret__$2;
var G__12893 = ks__$1;
ret__$1 = G__12892;
G__12855__$1 = G__12893;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__12871 = cljs.core.keys.call(null,m);
var vec__12872 = G__12871;
var seq__12873 = cljs.core.seq.call(null,vec__12872);
var first__12874 = cljs.core.first.call(null,seq__12873);
var seq__12873__$1 = cljs.core.next.call(null,seq__12873);
var k = first__12874;
var ks = seq__12873__$1;
var keys = vec__12872;
var ret__$1 = ret;
var G__12871__$1 = G__12871;
while(true){
var ret__$2 = ret__$1;
var vec__12878 = G__12871__$1;
var seq__12879 = cljs.core.seq.call(null,vec__12878);
var first__12880 = cljs.core.first.call(null,seq__12879);
var seq__12879__$1 = cljs.core.next.call(null,seq__12879);
var k__$1 = first__12880;
var ks__$1 = seq__12879__$1;
var keys__$1 = vec__12878;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__12894 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__12895 = ks__$1;
ret__$1 = G__12894;
G__12871__$1 = G__12895;
continue;
} else {
var G__12896 = ret__$2;
var G__12897 = ks__$1;
ret__$1 = G__12896;
G__12871__$1 = G__12897;
continue;
}
} else {
return ret__$2;
}
break;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5735__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,(function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
}),self__.pred_exprs,self__.pred_forms)));
if(temp__5735__auto__){
var probs = temp__5735__auto__;
return cljs.core.map.call(null,(function (p1__12842_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__12842_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}),probs);
} else {
return null;
}
})(),cljs.core.map.call(null,(function (p__12881){
var vec__12882 = p__12881;
var k = cljs.core.nth.call(null,vec__12882,(0),null);
var v = cljs.core.nth.call(null,vec__12882,(1),null);
if((((!(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k))))) || (cljs.spec.alpha.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k)))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
}),cljs.core.seq.call(null,x)));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
var rgen = (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k)], null);
});
var ogen = (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
}),null)))], null);
}
});
var reqs = cljs.core.map.call(null,rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.second,reqs),cljs.core.map.call(null,cljs.core.second,opts)))){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.alpha.and_k_gen.call(null,self__.req),cljs.spec.alpha.or_k_gen.call(null,self__.opt),cljs.spec.alpha.and_k_gen.call(null,self__.req_un),cljs.spec.alpha.or_k_gen.call(null,self__.opt_un)),(function (p__12885){
var vec__12886 = p__12885;
var req_ks = cljs.core.nth.call(null,vec__12886,(0),null);
var opt_ks = cljs.core.nth.call(null,vec__12886,(1),null);
var req_un_ks = cljs.core.nth.call(null,vec__12886,(2),null);
var opt_un_ks = cljs.core.nth.call(null,vec__12886,(3),null);
var qks = cljs.core.flatten.call(null,cljs.core.concat.call(null,req_ks,opt_ks));
var unqks = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.name),cljs.core.flatten.call(null,cljs.core.concat.call(null,req_un_ks,opt_un_ks)));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__12843_SHARP_){
return cljs.core.set.call(null,cljs.core.concat.call(null,qks,unqks)).call(null,cljs.core.first.call(null,p1__12843_SHARP_));
}),cljs.core.into.call(null,reqs,opts))));
}));
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__12889 = cljs.core.PersistentVector.EMPTY;
var G__12889__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__12889,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__12889);
var G__12889__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__12889__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__12889__$1);
var G__12889__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__12889__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__12889__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__12889__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__12889__$3;
}
})());
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"p__12844","p__12844",692479048,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"map__12845","map__12845",-224628711,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta12847","meta12847",1069675829,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12846.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha12846.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12846");

(cljs.spec.alpha.t_cljs$spec$alpha12846.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12846");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12846.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12846 = (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha12846(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,p__12844__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,map__12845__$2,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta12847){
return (new cljs.spec.alpha.t_cljs$spec$alpha12846(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,p__12844__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,map__12845__$2,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta12847));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha12846(keys__GT_specnames,opt,req_un,opt_un,p__12844,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,map__12845__$1,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__12899 = arguments.length;
switch (G__12899) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
}));

(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred))){
var G__12900 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__12900,gfn);
} else {
return G__12900;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__12901 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__12901,gfn);
} else {
return G__12901;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha12902 = (function (form,pred,gfn,cpred_QMARK_,unc,meta12903){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta12903 = meta12903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12904,meta12903__$1){
var self__ = this;
var _12904__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12902(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta12903__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12904){
var self__ = this;
var _12904__$1 = this;
return self__.meta12903;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta12903","meta12903",-887702216,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12902.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha12902.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12902");

(cljs.spec.alpha.t_cljs$spec$alpha12902.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12902");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12902.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12902 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha12902(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta12903){
return (new cljs.spec.alpha.t_cljs$spec$alpha12902(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta12903));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha12902(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
}));

(cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5);

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__12912 = arguments.length;
switch (G__12912) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.call(null,form,mmvar,retag,null);
}));

(cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = (function (p1__12906_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__4149__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__12906_SHARP_));
if(cljs.core.truth_(and__4149__auto__)){
return mm.call(null,p1__12906_SHARP_);
} else {
return and__4149__auto__;
}
});
var dval = (function (p1__12907_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__12907_SHARP_);
});
var tag = (((retag instanceof cljs.core.Keyword))?(function (p1__12908_SHARP_,p2__12909_SHARP_){
return cljs.core.assoc.call(null,p1__12908_SHARP_,retag,p2__12909_SHARP_);
}):retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha12913 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta12914){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta12914 = meta12914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12915,meta12914__$1){
var self__ = this;
var _12915__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12913(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta12914__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12915){
var self__ = this;
var _12915__$1 = this;
return self__.meta12914;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.unform.call(null,pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = (function (p__12916){
var vec__12917 = p__12916;
var k = cljs.core.nth.call(null,vec__12917,(0),null);
var f = cljs.core.nth.call(null,vec__12917,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__12910_SHARP_){
return self__.tag.call(null,p1__12910_SHARP_,k);
}),cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
}),null)));
}
});
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,(function (p__12920){
var vec__12921 = p__12920;
var k = cljs.core.nth.call(null,vec__12921,(0),null);
return cljs.spec.alpha.invalid_QMARK_.call(null,k);
}),cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.call(null,gs);
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),(new cljs.core.List(null,self__.retag,null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta12914","meta12914",-993371084,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12913.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha12913.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12913");

(cljs.spec.alpha.t_cljs$spec$alpha12913.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12913");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12913.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12913 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha12913(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta12914){
return (new cljs.spec.alpha.t_cljs$spec$alpha12913(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta12914));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha12913(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4);

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__12926 = arguments.length;
switch (G__12926) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.call(null,forms,preds,null);
}));

(cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha12927 = (function (forms,preds,gfn,specs,cnt,meta12928){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta12928 = meta12928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12929,meta12928__$1){
var self__ = this;
var _12929__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12927(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta12928__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12929){
var self__ = this;
var _12929__$1 = this;
return self__.meta12928;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if((!(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__12931 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__12932 = (i + (1));
ret = G__12931;
i = G__12932;
continue;
}
}
break;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.alpha.unform.call(null,self__.preds.call(null,i),cv);
var G__12933 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__12934 = (i + (1));
ret = G__12933;
i = G__12934;
continue;
}
break;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.vector_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,self__.preds),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (i,form,pred){
var v = x.call(null,i);
if(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,v)){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
}),cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = (function (i,p,f){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta12928","meta12928",-1054017104,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12927.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha12927.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12927");

(cljs.spec.alpha.t_cljs$spec$alpha12927.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12927");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12927.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12927 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha12927(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta12928){
return (new cljs.spec.alpha.t_cljs$spec$alpha12927(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta12928));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha12927(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__12935 = cljs.core.count.call(null,preds);
switch (G__12935) {
case (2):
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});

break;
case (3):
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
var ret__$2 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$2)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(2)),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});

break;
default:
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var G__12944 = (i + (1));
i = G__12944;
continue;
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,i),ret);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha12936 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta12937){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta12937 = meta12937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12938,meta12937__$1){
var self__ = this;
var _12938__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12936(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta12937__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12938){
var self__ = this;
var _12938__$1 = this;
return self__.meta12937;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,p__12939){
var self__ = this;
var vec__12940 = p__12939;
var k = cljs.core.nth.call(null,vec__12940,(0),null);
var x = cljs.core.nth.call(null,vec__12940,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.spec.alpha.pvalid_QMARK_.call(null,this$__$1,x)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (k,form,pred){
if(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x)){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
}),self__.keys,self__.forms,self__.preds));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
}),null)));
}
});
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gs);
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,(1),null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12937","meta12937",-2144400777,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12936.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha12936.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12936");

(cljs.spec.alpha.t_cljs$spec$alpha12936.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12936");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12936.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12936 = (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha12936(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta12937){
return (new cljs.spec.alpha.t_cljs$spec$alpha12936(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta12937));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha12936(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__12951 = preds;
var vec__12953 = G__12951;
var seq__12954 = cljs.core.seq.call(null,vec__12953);
var first__12955 = cljs.core.first.call(null,seq__12954);
var seq__12954__$1 = cljs.core.next.call(null,seq__12954);
var pred = first__12955;
var preds__$1 = seq__12954__$1;
var G__12952 = forms;
var vec__12956 = G__12952;
var seq__12957 = cljs.core.seq.call(null,vec__12956);
var first__12958 = cljs.core.first.call(null,seq__12957);
var seq__12957__$1 = cljs.core.next.call(null,seq__12957);
var form = first__12958;
var forms__$1 = seq__12957__$1;
var ret__$1 = ret;
var G__12951__$1 = G__12951;
var G__12952__$1 = G__12952;
while(true){
var ret__$2 = ret__$1;
var vec__12959 = G__12951__$1;
var seq__12960 = cljs.core.seq.call(null,vec__12959);
var first__12961 = cljs.core.first.call(null,seq__12960);
var seq__12960__$1 = cljs.core.next.call(null,seq__12960);
var pred__$1 = first__12961;
var preds__$2 = seq__12960__$1;
var vec__12962 = G__12952__$1;
var seq__12963 = cljs.core.seq.call(null,vec__12962);
var first__12964 = cljs.core.first.call(null,seq__12963);
var seq__12963__$1 = cljs.core.next.call(null,seq__12963);
var form__$1 = first__12964;
var forms__$2 = seq__12963__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__12965 = nret;
var G__12966 = preds__$2;
var G__12967 = forms__$2;
ret__$1 = G__12965;
G__12951__$1 = G__12966;
G__12952__$1 = G__12967;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__12974 = forms;
var vec__12976 = G__12974;
var seq__12977 = cljs.core.seq.call(null,vec__12976);
var first__12978 = cljs.core.first.call(null,seq__12977);
var seq__12977__$1 = cljs.core.next.call(null,seq__12977);
var form = first__12978;
var forms__$1 = seq__12977__$1;
var G__12975 = preds;
var vec__12979 = G__12975;
var seq__12980 = cljs.core.seq.call(null,vec__12979);
var first__12981 = cljs.core.first.call(null,seq__12980);
var seq__12980__$1 = cljs.core.next.call(null,seq__12980);
var pred = first__12981;
var preds__$1 = seq__12980__$1;
var ret__$1 = ret;
var G__12974__$1 = G__12974;
var G__12975__$1 = G__12975;
while(true){
var ret__$2 = ret__$1;
var vec__12982 = G__12974__$1;
var seq__12983 = cljs.core.seq.call(null,vec__12982);
var first__12984 = cljs.core.first.call(null,seq__12983);
var seq__12983__$1 = cljs.core.next.call(null,seq__12983);
var form__$1 = first__12984;
var forms__$2 = seq__12983__$1;
var vec__12985 = G__12975__$1;
var seq__12986 = cljs.core.seq.call(null,vec__12985);
var first__12987 = cljs.core.first.call(null,seq__12986);
var seq__12986__$1 = cljs.core.next.call(null,seq__12986);
var pred__$1 = first__12987;
var preds__$2 = seq__12986__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__12988 = nret;
var G__12989 = forms__$2;
var G__12990 = preds__$2;
ret__$1 = G__12988;
G__12974__$1 = G__12989;
G__12975__$1 = G__12990;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__12993 = cljs.core.count.call(null,preds);
switch (G__12993) {
case (2):
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});

break;
case (3):
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});

break;
default:
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__12998 = nret;
var G__12999 = (i + (1));
ret = G__12998;
i = G__12999;
continue;
}
} else {
return ret;
}
break;
}
});

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha12994 = (function (forms,preds,gfn,specs,cform,meta12995){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta12995 = meta12995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12996,meta12995__$1){
var self__ = this;
var _12996__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12994(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta12995__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12996){
var self__ = this;
var _12996__$1 = this;
return self__.meta12995;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,(function (p1__12992_SHARP_,p2__12991_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__12991_SHARP_,p1__12992_SHARP_);
}),x,cljs.core.reverse.call(null,self__.preds));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12995","meta12995",-326401199,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha12994.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha12994.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12994");

(cljs.spec.alpha.t_cljs$spec$alpha12994.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12994");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12994.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12994 = (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha12994(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12995){
return (new cljs.spec.alpha.t_cljs$spec$alpha12994(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12995));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha12994(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__4160__auto__ = kfn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__4160__auto__ = kform;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if((!(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x)))){
return cljs.spec.alpha.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = count;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = (function (){var or__4160__auto__ = min_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__4149__auto__)){
return (!(((((function (){var or__4160__auto__ = min_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__4160__auto__ = max_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (9007199254740991);
}
})())))));
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(function (){var or__4160__auto__ = min_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__4160__auto__ = max_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = distinct;
if(cljs.core.truth_(and__4149__auto__)){
return (((!(cljs.core.empty_QMARK_.call(null,x)))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x))));
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha13008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha13008 = (function (forms,preds,gfn,meta13009){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta13009 = meta13009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13010,meta13009__$1){
var self__ = this;
var _13010__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha13008(self__.forms,self__.preds,self__.gfn,meta13009__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13010){
var self__ = this;
var _13010__$1 = this;
return self__.meta13009;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,(function (p1__13000_SHARP_,p2__13001_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__13000_SHARP_,x,p2__13001_SHARP_);
}),self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__13002_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__13002_SHARP_,x);
}),cljs.core.reverse.call(null,self__.preds)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__13003_SHARP_,p2__13004_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__13003_SHARP_,p2__13004_SHARP_,path,via,in$,x);
}),self__.forms,self__.preds));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13005_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__13005_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,(function (p1__13006_SHARP_,p2__13007_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__13006_SHARP_,overrides,path,rmap,p2__13007_SHARP_);
}),self__.preds,self__.forms)));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta13009","meta13009",1189898109,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13008.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha13008.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha13008");

(cljs.spec.alpha.t_cljs$spec$alpha13008.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha13008");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha13008.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha13008 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha13008(forms__$1,preds__$1,gfn__$1,meta13009){
return (new cljs.spec.alpha.t_cljs$spec$alpha13008(forms__$1,preds__$1,gfn__$1,meta13009));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha13008(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__13016 = arguments.length;
switch (G__13016) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.call(null,form,pred,opts,null);
}));

(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__13017,gfn){
var map__13018 = p__13017;
var map__13018__$1 = cljs.core.__destructure_map.call(null,map__13018);
var opts = map__13018__$1;
var max_count = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var count = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = cljs.core.get.call(null,map__13018__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty.call(null,conform_into):cljs.core.get.call(null,cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,pred);
}),null));
var check_QMARK_ = (function (p1__13011_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__13011_SHARP_);
});
var kfn__$1 = (function (){var or__4160__auto__ = kfn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (function (i,v){
return i;
});
}
})();
var addcv = (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});
var cfns = (function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,(function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
}),cljs.core.identity], null);
} else {
if(cljs.core.truth_(((cljs.core.map_QMARK_.call(null,x))?(function (){var or__4160__auto__ = (function (){var and__4149__auto__ = kind;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,conform_into);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
})():false))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),(function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not.call(null,conform_keys)))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
}),cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || (((cljs.core.not.call(null,conform_into)) && (((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x)))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__13012_SHARP_){
return cljs.core.empty.call(null,(function (){var or__4160__auto__ = conform_into;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return p1__13012_SHARP_;
}
})());
}),addcv,cljs.core.identity], null);

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha13019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha13019 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,map__13018,distinct,spec,kfn,gen_into,count,p__13017,min_count,opts,kind,conform_all,conform_into,meta13020){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.map__13018 = map__13018;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.p__13017 = p__13017;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta13020 = meta13020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13021,meta13020__$1){
var self__ = this;
var _13021__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha13019(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.map__13018,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.p__13017,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta13020__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13021){
var self__ = this;
var _13021__$1 = this;
return self__.meta13020;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__13022 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__13022,(0),null);
var add = cljs.core.nth.call(null,vec__13022,(1),null);
var complete = cljs.core.nth.call(null,vec__13022,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__13028 = cljs.core.seq.call(null,x);
var vec__13029 = G__13028;
var seq__13030 = cljs.core.seq.call(null,vec__13029);
var first__13031 = cljs.core.first.call(null,seq__13030);
var seq__13030__$1 = cljs.core.next.call(null,seq__13030);
var v = first__13031;
var vs = seq__13030__$1;
var vseq = vec__13029;
var ret__$1 = ret;
var i__$1 = i;
var G__13028__$1 = G__13028;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__13032 = G__13028__$1;
var seq__13033 = cljs.core.seq.call(null,vec__13032);
var first__13034 = cljs.core.first.call(null,seq__13033);
var seq__13033__$1 = cljs.core.next.call(null,seq__13033);
var v__$1 = first__13034;
var vs__$1 = seq__13033__$1;
var vseq__$1 = vec__13032;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__13059 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__13060 = (i__$2 + (1));
var G__13061 = vs__$1;
ret__$1 = G__13059;
i__$1 = G__13060;
G__13028__$1 = G__13061;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__4249__auto__ = (1);
var y__4250__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i))){
var G__13062 = (i + step);
i = G__13062;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__13038 = cljs.core.seq.call(null,x);
var vec__13039 = G__13038;
var seq__13040 = cljs.core.seq.call(null,vec__13039);
var first__13041 = cljs.core.first.call(null,seq__13040);
var seq__13040__$1 = cljs.core.next.call(null,seq__13040);
var v = first__13041;
var vs = seq__13040__$1;
var vseq = vec__13039;
var i__$1 = i;
var G__13038__$1 = G__13038;
while(true){
var i__$2 = i__$1;
var vec__13042 = G__13038__$1;
var seq__13043 = cljs.core.seq.call(null,vec__13042);
var first__13044 = cljs.core.first.call(null,seq__13043);
var seq__13043__$1 = cljs.core.next.call(null,seq__13043);
var v__$1 = first__13044;
var vs__$1 = seq__13043__$1;
var vseq__$1 = vec__13042;
if((((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit)))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1)){
var G__13063 = (i__$2 + (1));
var G__13064 = vs__$1;
i__$1 = G__13063;
G__13038__$1 = G__13064;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
var vec__13045 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__13045,(0),null);
var add = cljs.core.nth.call(null,vec__13045,(1),null);
var complete = cljs.core.nth.call(null,vec__13045,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__13051 = cljs.core.seq.call(null,x);
var vec__13052 = G__13051;
var seq__13053 = cljs.core.seq.call(null,vec__13052);
var first__13054 = cljs.core.first.call(null,seq__13053);
var seq__13053__$1 = cljs.core.next.call(null,seq__13053);
var v = first__13054;
var vs = seq__13053__$1;
var vseq = vec__13052;
var ret__$1 = ret;
var i__$1 = i;
var G__13051__$1 = G__13051;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__13055 = G__13051__$1;
var seq__13056 = cljs.core.seq.call(null,vec__13055);
var first__13057 = cljs.core.first.call(null,seq__13056);
var seq__13056__$1 = cljs.core.next.call(null,seq__13056);
var v__$1 = first__13057;
var vs__$1 = seq__13056__$1;
var vseq__$1 = vec__13055;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__13065 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__13066 = (i__$2 + (1));
var G__13067 = vs__$1;
ret__$1 = G__13065;
i__$1 = G__13066;
G__13051__$1 = G__13067;
continue;
}
break;
}
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4160__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,(function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
}),cljs.core.range.call(null),x))));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,self__.gen_into):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,(function (p1__13013_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__13013_SHARP_)){
return p1__13013_SHARP_;
} else {
return cljs.core.empty.call(null,p1__13013_SHARP_);
}
}),cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),(function (init){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13014_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__13014_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__13014_SHARP_);
}
}),(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__4160__auto__ = self__.min_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__4160__auto__ = self__.max_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var x__4249__auto__ = self__.gen_max;
var y__4250__auto__ = ((2) * (function (){var or__4160__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return (0);
}
})());
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__4160__auto__ = self__.min_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.call(null,pgen,(function (){var or__4160__auto__ = self__.min_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})(),(function (){var or__4160__auto__ = self__.max_count;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var x__4249__auto__ = self__.gen_max;
var y__4250__auto__ = ((2) * (function (){var or__4160__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return (0);
}
})());
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
}
})()):cljs.spec.gen.alpha.vector.call(null,pgen,(0),self__.gen_max)
))));
}));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4160__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"map__13018","map__13018",-1953648523,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p__13017","p__13017",-1605473796,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta13020","meta13020",-1764628072,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13019.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha13019.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha13019");

(cljs.spec.alpha.t_cljs$spec$alpha13019.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha13019");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha13019.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha13019 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha13019(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,map__13018__$2,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,p__13017__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta13020){
return (new cljs.spec.alpha.t_cljs$spec$alpha13019(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,map__13018__$2,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,p__13017__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta13020));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha13019(form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,map__13018__$1,distinct,spec,kfn__$1,gen_into,count,p__13017,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4);

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__13068){
var map__13069 = p__13068;
var map__13069__$1 = cljs.core.__destructure_map.call(null,map__13069);
var op = cljs.core.get.call(null,map__13069__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__13070){
var map__13071 = p__13070;
var map__13071__$1 = cljs.core.__destructure_map.call(null,map__13071);
var vec__13072 = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__13073 = cljs.core.seq.call(null,vec__13072);
var first__13074 = cljs.core.first.call(null,seq__13073);
var seq__13073__$1 = cljs.core.next.call(null,seq__13073);
var p1 = first__13074;
var pr = seq__13073__$1;
var ps = vec__13072;
var vec__13075 = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__13076 = cljs.core.seq.call(null,vec__13075);
var first__13077 = cljs.core.first.call(null,seq__13076);
var seq__13076__$1 = cljs.core.next.call(null,seq__13076);
var k1 = first__13077;
var kr = seq__13076__$1;
var ks = vec__13075;
var vec__13078 = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__13079 = cljs.core.seq.call(null,vec__13078);
var first__13080 = cljs.core.first.call(null,seq__13079);
var seq__13079__$1 = cljs.core.next.call(null,seq__13079);
var f1 = first__13080;
var fr = seq__13079__$1;
var forms = vec__13078;
var ret = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__4777__auto__ = [];
var len__4771__auto___13082 = arguments.length;
var i__4772__auto___13083 = (0);
while(true){
if((i__4772__auto___13083 < len__4771__auto___13082)){
args__4777__auto__.push((arguments[i__4772__auto___13083]));

var G__13084 = (i__4772__auto___13083 + (1));
i__4772__auto___13083 = G__13084;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
}));

(cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq13081){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13081));
}));

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,re_form,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"amp","amp",271690571),re_form,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__4160__auto__ = ks;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__13085_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__13085_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4160__auto__ = cljs.core.seq.call(null,ks);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4160__auto__ = cljs.core.seq.call(null,forms);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__13086_SHARP_){
return cljs.core.nth.call(null,p1__13086_SHARP_,(2));
}),pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__13087 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__13090 = cljs.core.nth.call(null,vec__13087,(0),null);
var seq__13091 = cljs.core.seq.call(null,vec__13090);
var first__13092 = cljs.core.first.call(null,seq__13091);
var seq__13091__$1 = cljs.core.next.call(null,seq__13091);
var p1 = first__13092;
var pr = seq__13091__$1;
var ps__$1 = vec__13090;
var vec__13093 = cljs.core.nth.call(null,vec__13087,(1),null);
var k1 = cljs.core.nth.call(null,vec__13093,(0),null);
var ks__$1 = vec__13093;
var forms__$1 = cljs.core.nth.call(null,vec__13087,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.spec.alpha.accept.call(null,cljs.spec.alpha.tagged_ret.call(null,k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__4777__auto__ = [];
var len__4771__auto___13097 = arguments.length;
var i__4772__auto___13098 = (0);
while(true){
if((i__4772__auto___13098 < len__4771__auto___13097)){
args__4777__auto__.push((arguments[i__4772__auto___13098]));

var G__13099 = (i__4772__auto___13098 + (1));
i__4772__auto___13098 = G__13099;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_.call(null,ps,null,null);
}));

(cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq13096){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13096));
}));

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__4149__auto__ = p1;
if(cljs.core.truth_(and__4149__auto__)){
return p2;
} else {
return and__4149__auto__;
}
})())){
return cljs.spec.alpha.alts.call(null,p1,p2);
} else {
var or__4160__auto__ = p1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept.call(null,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__4160__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__4160__auto__){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = (function (){var and__4149__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null).call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__13100 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__13100__$1 = cljs.core.__destructure_map.call(null,map__13100);
var p__$1 = map__13100__$1;
var op = cljs.core.get.call(null,map__13100__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__13100__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__13100__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__13100__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__13100__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__13101 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__13101)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__13101)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__13101)){
var and__4149__auto__ = cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__4149__auto__)){
var ret = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,ret)));
} else {
return and__4149__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__13101)){
var or__4160__auto__ = (p1 === p2);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__13101)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__13101)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13101)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__13102 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__13102__$1 = cljs.core.__destructure_map.call(null,map__13102);
var p__$1 = map__13102__$1;
var vec__13103 = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__13104 = cljs.core.seq.call(null,vec__13103);
var first__13105 = cljs.core.first.call(null,seq__13104);
var seq__13104__$1 = cljs.core.next.call(null,seq__13104);
var p0 = first__13105;
var pr = seq__13104__$1;
var ps = vec__13103;
var vec__13106 = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__13106,(0),null);
var ks = vec__13106;
var op = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__13109 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__13109)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__13109)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__13109)){
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__13109)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__13109)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__13109)){
var vec__13110 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__13113 = cljs.core.nth.call(null,vec__13110,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__13113,(0),null);
var vec__13116 = cljs.core.nth.call(null,vec__13110,(1),null);
var k0 = cljs.core.nth.call(null,vec__13116,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13109)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__13123 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__13123__$1 = cljs.core.__destructure_map.call(null,map__13123);
var p__$1 = map__13123__$1;
var vec__13124 = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__13125 = cljs.core.seq.call(null,vec__13124);
var first__13126 = cljs.core.first.call(null,seq__13125);
var seq__13125__$1 = cljs.core.next.call(null,seq__13125);
var p0 = first__13126;
var pr = seq__13125__$1;
var ps = vec__13124;
var vec__13127 = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__13127,(0),null);
var ks = vec__13127;
var op = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__13123__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__13130 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__13130)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__13130)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__13130)){
var px = cljs.core.reduce.call(null,(function (p1__13120_SHARP_,p2__13119_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__13119_SHARP_,p1__13120_SHARP_);
}),x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__13130)){
return cljs.core.mapcat.call(null,(function (p1__13121_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__13121_SHARP_);
}),x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__13130)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,(function (p1__13122_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__13122_SHARP_);
}),x);
} else {
return cljs.core.mapcat.call(null,(function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
}),ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__13130)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__13131 = x;
var k__$1 = cljs.core.nth.call(null,vec__13131,(0),null);
var v = cljs.core.nth.call(null,vec__13131,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13130)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__13134 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__13134__$1 = cljs.core.__destructure_map.call(null,map__13134);
var p__$1 = map__13134__$1;
var op = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});
var G__13135 = op;
if(cljs.core._EQ_.call(null,null,G__13135)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__13135)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__13135)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__13135)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__13135)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__13135)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13135)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__13137 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__13137__$1 = cljs.core.__destructure_map.call(null,map__13137);
var p__$1 = map__13137__$1;
var forms = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var vec__13138 = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__13139 = cljs.core.seq.call(null,vec__13138);
var first__13140 = cljs.core.first.call(null,seq__13139);
var seq__13139__$1 = cljs.core.next.call(null,seq__13139);
var p0 = first__13140;
var pr = seq__13139__$1;
var ps = vec__13138;
var ret = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var op = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var vec__13141 = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__13142 = cljs.core.seq.call(null,vec__13141);
var first__13143 = cljs.core.first.call(null,seq__13142);
var seq__13142__$1 = cljs.core.next.call(null,seq__13142);
var k0 = first__13143;
var kr = seq__13142__$1;
var ks = vec__13141;
var amp = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__13144 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__13144)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__13144)){
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__13144)){
var temp__5735__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5735__auto__)){
var p1__$1 = temp__5735__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl.call(null,p1__$1,amp,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__13144)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__13144)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,(function (p1__13136_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__13136_SHARP_,x);
}),ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__13144)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13144)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__13145 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__13145__$1 = cljs.core.__destructure_map.call(null,map__13145);
var p__$1 = map__13145__$1;
var ps = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var op = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var maybe = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var amp = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__13146 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__13146)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__13146)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__13146)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),amp,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__13146)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__4160__auto__ = cljs.core.seq.call(null,ks);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__13146)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__13146)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13146)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__13147 = input;
var x = cljs.core.nth.call(null,vec__13147,(0),null);
var input__$1 = vec__13147;
var map__13150 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__13150__$1 = cljs.core.__destructure_map.call(null,map__13150);
var p__$1 = map__13150__$1;
var op = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});
if(cljs.core.truth_(p__$1)){
var G__13151 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__13151)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__13151)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__13151)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1));
} else {
return insufficient.call(null,path,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1));
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5733__auto__)){
var p1__$1 = temp__5733__auto__;
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1__$1));
} else {
return cljs.spec.alpha.op_explain.call(null,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__13151)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4160__auto__ = cljs.core.seq.call(null,ks);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4160__auto__ = cljs.core.seq.call(null,forms);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__13152 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,(function (p__13155){
var vec__13156 = p__13155;
var p__$2 = cljs.core.nth.call(null,vec__13156,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
}),pkfs)));
var pred = cljs.core.nth.call(null,vec__13152,(0),null);
var k = cljs.core.nth.call(null,vec__13152,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__13152,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__4160__auto__ = form__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})();
if(((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred)))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__13151)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__4160__auto__ = form__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
}),(function (){var or__4160__auto__ = cljs.core.seq.call(null,ks);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4160__auto__ = cljs.core.seq.call(null,forms);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__13151)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13151)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var origp = p;
var map__13160 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__13160__$1 = cljs.core.__destructure_map.call(null,map__13160);
var p__$1 = map__13160__$1;
var ps = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = (function (ps__$1,ks__$1,forms__$1){
var gen = (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__4149__auto__ = rmap__$1;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = id;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = k;
if(cljs.core.truth_(and__4149__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4160__auto__ = f__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return p__$2;
}
})());
}),null)));
} else {
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4160__auto__ = f__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return p__$2;
}
})());
}
}
});
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__4160__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4160__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});
var or__4160__auto__ = (function (){var temp__5735__auto__ = (function (){var or__4160__auto__ = cljs.core.get.call(null,overrides,cljs.spec.alpha.spec_name.call(null,origp));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = cljs.core.get.call(null,overrides,cljs.spec.alpha.spec_name.call(null,p__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.get.call(null,overrides,path);
}
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var gfn__$1 = temp__5735__auto__;
var G__13162 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__13162)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,gfn__$1.call(null));
} else {
if(cljs.core._EQ_.call(null,null,G__13162)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,gfn__$1.call(null));
} else {
return gfn__$1.call(null);

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__13163 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__13163)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__13163)){
var temp__5735__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__13163)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__13163)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__13163)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__13163)){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__5735__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13159_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13159_SHARP_);
}),cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13163)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__13164){
while(true){
var vec__13165 = p__13164;
var seq__13166 = cljs.core.seq.call(null,vec__13165);
var first__13167 = cljs.core.first.call(null,seq__13166);
var seq__13166__$1 = cljs.core.next.call(null,seq__13166);
var x = first__13167;
var xs = seq__13166__$1;
var data = vec__13165;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.alpha.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p,x);
if(cljs.core.truth_(temp__5733__auto__)){
var dp = temp__5733__auto__;
var G__13168 = dp;
var G__13169 = xs;
p = G__13168;
p__13164 = G__13169;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__13173 = input;
var vec__13174 = G__13173;
var seq__13175 = cljs.core.seq.call(null,vec__13174);
var first__13176 = cljs.core.first.call(null,seq__13175);
var seq__13175__$1 = cljs.core.next.call(null,seq__13175);
var x = first__13176;
var xs = seq__13175__$1;
var data = vec__13174;
var i = (0);
var p__$1 = p;
var G__13173__$1 = G__13173;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__13177 = G__13173__$1;
var seq__13178 = cljs.core.seq.call(null,vec__13177);
var first__13179 = cljs.core.first.call(null,seq__13178);
var seq__13178__$1 = cljs.core.next.call(null,seq__13178);
var x__$1 = first__13179;
var xs__$1 = seq__13178__$1;
var data__$1 = vec__13177;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var dp = temp__5733__auto__;
var G__13180 = dp;
var G__13181 = xs__$1;
var G__13182 = (i__$2 + (1));
p__$1 = G__13180;
G__13173__$1 = G__13181;
i__$1 = G__13182;
continue;
} else {
if(cljs.spec.alpha.accept_QMARK_.call(null,p__$2)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__4160__auto__ = cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha13183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha13183 = (function (re,gfn,meta13184){
this.re = re;
this.gfn = gfn;
this.meta13184 = meta13184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13185,meta13184__$1){
var self__ = this;
var _13185__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha13183(self__.re,self__.gfn,meta13184__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13185){
var self__ = this;
var _13185__$1 = this;
return self__.meta13184;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta13184","meta13184",-884054077,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13183.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha13183.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha13183");

(cljs.spec.alpha.t_cljs$spec$alpha13183.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha13183");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha13183.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha13183 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha13183(re__$1,gfn__$1,meta13184){
return (new cljs.spec.alpha.t_cljs$spec$alpha13183(re__$1,gfn__$1,meta13184));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha13183(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cargs)){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
if((!(cljs.spec.alpha.invalid_QMARK_.call(null,cret)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return false;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),(function (p1__13186_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__13186_SHARP_);
}));
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__5733__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__13187 = temp__5733__auto__;
var smallest = cljs.core.nth.call(null,vec__13187,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha13190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha13190 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta13191){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta13191 = meta13191;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13192,meta13191__$1){
var self__ = this;
var _13192__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha13190(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta13191__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13192){
var self__ = this;
var _13192__$1 = this;
return self__.meta13191;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.alpha.validate_fn.call(null,f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e13193){if((e13193 instanceof Error)){
var t = e13193;
return t;
} else {
throw e13193;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cret)){
return cljs.spec.alpha.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform.call(null,self__.argspec,args);
return cljs.spec.alpha.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,(function() { 
var G__13202__delegate = function (args){
if(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args)){
} else {
throw (new Error(["Assert failed: ",(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13198_13203 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13199_13204 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13200_13205 = true;
var _STAR_print_fn_STAR__temp_val__13201_13206 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13200_13205);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13201_13206);

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13199_13204);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13198_13203);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})(),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
var G__13202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13207__i = 0, G__13207__a = new Array(arguments.length -  0);
while (G__13207__i < G__13207__a.length) {G__13207__a[G__13207__i] = arguments[G__13207__i + 0]; ++G__13207__i;}
  args = new cljs.core.IndexedSeq(G__13207__a,0,null);
} 
return G__13202__delegate.call(this,args);};
G__13202.cljs$lang$maxFixedArity = 0;
G__13202.cljs$lang$applyTo = (function (arglist__13208){
var args = cljs.core.seq(arglist__13208);
return G__13202__delegate(args);
});
G__13202.cljs$core$IFn$_invoke$arity$variadic = G__13202__delegate;
return G__13202;
})()
);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta13191","meta13191",224095498,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13190.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha13190.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha13190");

(cljs.spec.alpha.t_cljs$spec$alpha13190.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha13190");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha13190.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha13190 = (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha13190(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13191){
return (new cljs.spec.alpha.t_cljs$spec$alpha13190(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13191));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha13190(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13209#","p1__13209#",1562647764,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__13209#","p1__13209#",1562647764,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__13209#","p1__13209#",1562647764,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13210#","p1__13210#",-927769069,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__13210#","p1__13210#",-927769069,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__13209_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__13209_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__13209_SHARP_));
}),null,true,(function (p1__13210_SHARP_){
return cljs.core.map.call(null,(function (p__13211){
var vec__13212 = p__13211;
var k = cljs.core.nth.call(null,vec__13212,(0),null);
var v = cljs.core.nth.call(null,vec__13212,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__13210_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,spec);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha13215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha13215 = (function (spec,meta13216){
this.spec = spec;
this.meta13216 = meta13216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13217,meta13216__$1){
var self__ = this;
var _13217__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha13215(self__.spec,meta13216__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13217){
var self__ = this;
var _13217__$1 = this;
return self__.meta13216;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,cljs.core.deref.call(null,self__.spec),path,via,in$,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),overrides,path,rmap);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),gfn));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_.call(null,cljs.core.deref.call(null,self__.spec)),null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta13216","meta13216",-501243119,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13215.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha13215.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha13215");

(cljs.spec.alpha.t_cljs$spec$alpha13215.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha13215");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha13215.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha13215 = (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha13215(spec__$2,meta13216){
return (new cljs.spec.alpha.t_cljs$spec$alpha13215(spec__$2,meta13216));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha13215(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,pred,form);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha13218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha13218 = (function (form,pred,gfn,spec,meta13219){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta13219 = meta13219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13220,meta13219__$1){
var self__ = this;
var _13220__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha13218(self__.form,self__.pred,self__.gfn,self__.spec,meta13219__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13220){
var self__ = this;
var _13220__$1 = this;
return self__.meta13219;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((cljs.spec.alpha.pvalid_QMARK_.call(null,cljs.core.deref.call(null,self__.spec),x)) || ((x == null)))){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.gen.alpha.return$.call(null,null);
}),null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
}),null)))], null)], null));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta13219","meta13219",-2067219844,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha13218.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha13218.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha13218");

(cljs.spec.alpha.t_cljs$spec$alpha13218.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.spec.alpha/t_cljs$spec$alpha13218");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha13218.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha13218 = (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha13218(form__$1,pred__$1,gfn__$1,spec__$1,meta13219){
return (new cljs.spec.alpha.t_cljs$spec$alpha13218(form__$1,pred__$1,gfn__$1,spec__$1,meta13219));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha13218(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__13223 = arguments.length;
switch (G__13223) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.call(null,spec,(10));
}));

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.call(null,spec,n,null);
}));

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__13221_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13221_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__13221_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec,overrides),n));
}));

(cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3);

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
if(cljs.core.inst_QMARK_.call(null,inst)){
var t = cljs.core.inst_ms.call(null,inst);
return (((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end))));
} else {
return false;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof goog.math.Long)){
var and__4149__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4149__auto__)){
return val.lessThan(end);
} else {
return and__4149__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__4149__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4149__auto__)){
return val.lessThan(end);
} else {
return and__4149__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return (cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag);
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.spec.alpha.valid_QMARK_.call(null,spec,x)){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error(["Spec assertion failed\n",(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13229_13233 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13230_13234 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13231_13235 = true;
var _STAR_print_fn_STAR__temp_val__13232_13236 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13231_13235);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13232_13236);

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13230_13234);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13229_13233);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})()].join('')));
}
});

//# sourceMappingURL=alpha.js.map
