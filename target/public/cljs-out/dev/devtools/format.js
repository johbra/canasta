// Compiled by ClojureScript 1.10.844 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_15390 = (function (value){
var x__4463__auto__ = (((value == null))?null:value);
var m__4464__auto__ = (devtools.format._header[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,value);
} else {
var m__4461__auto__ = (devtools.format._header["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_15390.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_15391 = (function (value){
var x__4463__auto__ = (((value == null))?null:value);
var m__4464__auto__ = (devtools.format._has_body[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,value);
} else {
var m__4461__auto__ = (devtools.format._has_body["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_15391.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_15392 = (function (value){
var x__4463__auto__ = (((value == null))?null:value);
var m__4464__auto__ = (devtools.format._body[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,value);
} else {
var m__4461__auto__ = (devtools.format._body["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_15392.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o15393 = temp__5455__auto__;
var temp__5455__auto____$1 = (o15393["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o15394 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o15394["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o15395 = temp__5455__auto____$2;
return (o15395["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o15396 = temp__5455__auto__;
var temp__5455__auto____$1 = (o15396["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o15397 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o15397["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o15398 = temp__5455__auto____$2;
return (o15398["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o15399 = temp__5455__auto__;
var temp__5455__auto____$1 = (o15399["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o15400 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o15400["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o15401 = temp__5455__auto____$2;
return (o15401["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o15402 = temp__5455__auto__;
var temp__5455__auto____$1 = (o15402["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o15403 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o15403["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o15404 = temp__5455__auto____$2;
return (o15404["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o15405 = temp__5455__auto__;
var temp__5455__auto____$1 = (o15405["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o15406 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o15406["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o15407 = temp__5455__auto____$2;
return (o15407["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o15408 = temp__5455__auto__;
var temp__5455__auto____$1 = (o15408["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o15409 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o15409["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o15410 = temp__5455__auto____$2;
return (o15410["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o15411 = temp__5455__auto__;
var temp__5455__auto____$1 = (o15411["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o15412 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o15412["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o15413 = temp__5455__auto____$2;
return (o15413["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15415 = arguments.length;
var i__4772__auto___15416 = (0);
while(true){
if((i__4772__auto___15416 < len__4771__auto___15415)){
args__4777__auto__.push((arguments[i__4772__auto___15416]));

var G__15417 = (i__4772__auto___15416 + (1));
i__4772__auto___15416 = G__15417;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq15414){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15414));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15419 = arguments.length;
var i__4772__auto___15420 = (0);
while(true){
if((i__4772__auto___15420 < len__4771__auto___15419)){
args__4777__auto__.push((arguments[i__4772__auto___15420]));

var G__15421 = (i__4772__auto___15420 + (1));
i__4772__auto___15420 = G__15421;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq15418){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15418));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15423 = arguments.length;
var i__4772__auto___15424 = (0);
while(true){
if((i__4772__auto___15424 < len__4771__auto___15423)){
args__4777__auto__.push((arguments[i__4772__auto___15424]));

var G__15425 = (i__4772__auto___15424 + (1));
i__4772__auto___15424 = G__15425;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq15422){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15422));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15427 = arguments.length;
var i__4772__auto___15428 = (0);
while(true){
if((i__4772__auto___15428 < len__4771__auto___15427)){
args__4777__auto__.push((arguments[i__4772__auto___15428]));

var G__15429 = (i__4772__auto___15428 + (1));
i__4772__auto___15428 = G__15429;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq15426){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15426));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15431 = arguments.length;
var i__4772__auto___15432 = (0);
while(true){
if((i__4772__auto___15432 < len__4771__auto___15431)){
args__4777__auto__.push((arguments[i__4772__auto___15432]));

var G__15433 = (i__4772__auto___15432 + (1));
i__4772__auto___15432 = G__15433;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq15430){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15430));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15435 = arguments.length;
var i__4772__auto___15436 = (0);
while(true){
if((i__4772__auto___15436 < len__4771__auto___15435)){
args__4777__auto__.push((arguments[i__4772__auto___15436]));

var G__15437 = (i__4772__auto___15436 + (1));
i__4772__auto___15436 = G__15437;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq15434){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15434));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15439 = arguments.length;
var i__4772__auto___15440 = (0);
while(true){
if((i__4772__auto___15440 < len__4771__auto___15439)){
args__4777__auto__.push((arguments[i__4772__auto___15440]));

var G__15441 = (i__4772__auto___15440 + (1));
i__4772__auto___15440 = G__15441;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq15438){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15438));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15449 = arguments.length;
var i__4772__auto___15450 = (0);
while(true){
if((i__4772__auto___15450 < len__4771__auto___15449)){
args__4777__auto__.push((arguments[i__4772__auto___15450]));

var G__15451 = (i__4772__auto___15450 + (1));
i__4772__auto___15450 = G__15451;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__15445){
var vec__15446 = p__15445;
var state_override = cljs.core.nth.call(null,vec__15446,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__15442_SHARP_){
return cljs.core.merge.call(null,p1__15442_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq15443){
var G__15444 = cljs.core.first.call(null,seq15443);
var seq15443__$1 = cljs.core.next.call(null,seq15443);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15444,seq15443__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15453 = arguments.length;
var i__4772__auto___15454 = (0);
while(true){
if((i__4772__auto___15454 < len__4771__auto___15453)){
args__4777__auto__.push((arguments[i__4772__auto___15454]));

var G__15455 = (i__4772__auto___15454 + (1));
i__4772__auto___15454 = G__15455;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq15452){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15452));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15458 = arguments.length;
var i__4772__auto___15459 = (0);
while(true){
if((i__4772__auto___15459 < len__4771__auto___15458)){
args__4777__auto__.push((arguments[i__4772__auto___15459]));

var G__15460 = (i__4772__auto___15459 + (1));
i__4772__auto___15459 = G__15460;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq15456){
var G__15457 = cljs.core.first.call(null,seq15456);
var seq15456__$1 = cljs.core.next.call(null,seq15456);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15457,seq15456__$1);
}));


//# sourceMappingURL=format.js.map
