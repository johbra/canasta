// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.debug');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.impl.component');
goog.require('re_com.config');
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.last.call(null,clojure.string.split.call(null,component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_.call(null,args)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.call(null,args,new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__21310){
var map__21311 = p__21310;
var map__21311__$1 = cljs.core.__destructure_map.call(null,map__21311);
var args = map__21311__$1;
var src = cljs.core.get.call(null,map__21311__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.call(null,map__21311__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null)));
}
})();
var rc_args = re_com.debug.loggable_args.call(null,(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
goog.object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5457__auto__ = cljs.core.get_in.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var user_ref_fn = temp__5457__auto__;
if(cljs.core.fn_QMARK_.call(null,user_ref_fn)){
return user_ref_fn.call(null,el);
} else {
return null;
}
} else {
return null;
}
});
var map__21312 = src;
var map__21312__$1 = cljs.core.__destructure_map.call(null,map__21312);
var file = cljs.core.get.call(null,map__21312__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__21312__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__21313 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__21313,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__21313;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__21315 = arguments.length;
switch (G__21315) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.call(null,cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not.call(null,el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.call(null,((cljs.core._EQ_.call(null,"stack-spy",component))?stack:cljs.core.conj.call(null,stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__21319_21339 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (p1__21318_SHARP_,p2__21317_SHARP_){
return cljs.core.assoc.call(null,p2__21317_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__21318_SHARP_ + (1)));
}),stack));
var chunk__21320_21340 = null;
var count__21321_21341 = (0);
var i__21322_21342 = (0);
while(true){
if((i__21322_21342 < count__21321_21341)){
var map__21331_21343 = cljs.core._nth.call(null,chunk__21320_21340,i__21322_21342);
var map__21331_21344__$1 = cljs.core.__destructure_map.call(null,map__21331_21343);
var i_21345 = cljs.core.get.call(null,map__21331_21344__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_21346 = cljs.core.get.call(null,map__21331_21344__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_21347 = cljs.core.get.call(null,map__21331_21344__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_21348 = cljs.core.get.call(null,map__21331_21344__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_21349 = cljs.core.get.call(null,map__21331_21344__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_21347)){
if(cljs.core.truth_(src_21348)){
var vec__21332_21350 = clojure.string.split.call(null,src_21348,/:/);
var file_21351 = cljs.core.nth.call(null,vec__21332_21350,(0),null);
var line_21352 = cljs.core.nth.call(null,vec__21332_21350,(1),null);
if(cljs.core.truth_(args_21349)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_21345),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_21347)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_21351),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21352),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_21349,el_21346);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_21345),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_21347)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_21351),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21352),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_21346);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_21345),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_21347)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_21349,el_21346);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_21345),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_21346);
}


var G__21353 = seq__21319_21339;
var G__21354 = chunk__21320_21340;
var G__21355 = count__21321_21341;
var G__21356 = (i__21322_21342 + (1));
seq__21319_21339 = G__21353;
chunk__21320_21340 = G__21354;
count__21321_21341 = G__21355;
i__21322_21342 = G__21356;
continue;
} else {
var temp__5457__auto___21357 = cljs.core.seq.call(null,seq__21319_21339);
if(temp__5457__auto___21357){
var seq__21319_21358__$1 = temp__5457__auto___21357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21319_21358__$1)){
var c__4591__auto___21359 = cljs.core.chunk_first.call(null,seq__21319_21358__$1);
var G__21360 = cljs.core.chunk_rest.call(null,seq__21319_21358__$1);
var G__21361 = c__4591__auto___21359;
var G__21362 = cljs.core.count.call(null,c__4591__auto___21359);
var G__21363 = (0);
seq__21319_21339 = G__21360;
chunk__21320_21340 = G__21361;
count__21321_21341 = G__21362;
i__21322_21342 = G__21363;
continue;
} else {
var map__21335_21364 = cljs.core.first.call(null,seq__21319_21358__$1);
var map__21335_21365__$1 = cljs.core.__destructure_map.call(null,map__21335_21364);
var i_21366 = cljs.core.get.call(null,map__21335_21365__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_21367 = cljs.core.get.call(null,map__21335_21365__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_21368 = cljs.core.get.call(null,map__21335_21365__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_21369 = cljs.core.get.call(null,map__21335_21365__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_21370 = cljs.core.get.call(null,map__21335_21365__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_21368)){
if(cljs.core.truth_(src_21369)){
var vec__21336_21371 = clojure.string.split.call(null,src_21369,/:/);
var file_21372 = cljs.core.nth.call(null,vec__21336_21371,(0),null);
var line_21373 = cljs.core.nth.call(null,vec__21336_21371,(1),null);
if(cljs.core.truth_(args_21370)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_21366),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_21368)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_21372),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21373),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_21370,el_21367);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_21366),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_21368)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_21372),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21373),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_21367);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_21366),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_21368)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_21370,el_21367);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_21366),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_21367);
}


var G__21374 = cljs.core.next.call(null,seq__21319_21358__$1);
var G__21375 = null;
var G__21376 = (0);
var G__21377 = (0);
seq__21319_21339 = G__21374;
chunk__21320_21340 = G__21375;
count__21321_21341 = G__21376;
i__21322_21342 = G__21377;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__21378 = cljs.core.seq.call(null,problems);
var chunk__21379 = null;
var count__21380 = (0);
var i__21381 = (0);
while(true){
if((i__21381 < count__21380)){
var map__21386 = cljs.core._nth.call(null,chunk__21379,i__21381);
var map__21386__$1 = cljs.core.__destructure_map.call(null,map__21386);
var problem = cljs.core.get.call(null,map__21386__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__21386__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__21386__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__21386__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__21386__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__21387_21390 = problem;
var G__21387_21391__$1 = (((G__21387_21390 instanceof cljs.core.Keyword))?G__21387_21390.fqn:null);
switch (G__21387_21391__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__21393 = seq__21378;
var G__21394 = chunk__21379;
var G__21395 = count__21380;
var G__21396 = (i__21381 + (1));
seq__21378 = G__21393;
chunk__21379 = G__21394;
count__21380 = G__21395;
i__21381 = G__21396;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__21378);
if(temp__5457__auto__){
var seq__21378__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21378__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__21378__$1);
var G__21397 = cljs.core.chunk_rest.call(null,seq__21378__$1);
var G__21398 = c__4591__auto__;
var G__21399 = cljs.core.count.call(null,c__4591__auto__);
var G__21400 = (0);
seq__21378 = G__21397;
chunk__21379 = G__21398;
count__21380 = G__21399;
i__21381 = G__21400;
continue;
} else {
var map__21388 = cljs.core.first.call(null,seq__21378__$1);
var map__21388__$1 = cljs.core.__destructure_map.call(null,map__21388);
var problem = cljs.core.get.call(null,map__21388__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__21388__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__21388__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__21388__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__21388__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__21389_21401 = problem;
var G__21389_21402__$1 = (((G__21389_21401 instanceof cljs.core.Keyword))?G__21389_21401.fqn:null);
switch (G__21389_21402__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__21404 = cljs.core.next.call(null,seq__21378__$1);
var G__21405 = null;
var G__21406 = (0);
var G__21407 = (0);
seq__21378 = G__21404;
chunk__21379 = G__21405;
count__21380 = G__21406;
i__21381 = G__21407;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__21408){
var map__21409 = p__21408;
var map__21409__$1 = cljs.core.__destructure_map.call(null,map__21409);
var src = map__21409__$1;
var file = cljs.core.get.call(null,map__21409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__21409__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_.call(null,re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems.call(null,problems);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,cljs.core.deref.call(null,element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4777__auto__ = [];
var len__4771__auto___21415 = arguments.length;
var i__4772__auto___21416 = (0);
while(true){
if((i__4772__auto___21416 < len__4771__auto___21415)){
args__4777__auto__.push((arguments[i__4772__auto___21416]));

var G__21417 = (i__4772__auto___21416 + (1));
i__4772__auto___21416 = G__21417;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__21411){
var map__21412 = p__21411;
var map__21412__$1 = cljs.core.__destructure_map.call(null,map__21412);
var problems = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.call(null,problems);
var internal_component = cljs.core.atom.call(null,component);
var internal_args = cljs.core.atom.call(null,args);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__21418__delegate = function (p__21413){
var map__21414 = p__21413;
var map__21414__$1 = cljs.core.__destructure_map.call(null,map__21414);
var problems__$1 = cljs.core.get.call(null,map__21414__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.call(null,map__21414__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.call(null,map__21414__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_.call(null,internal_problems,problems__$1);

cljs.core.reset_BANG_.call(null,internal_component,component__$1);

cljs.core.reset_BANG_.call(null,internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style.call(null)], null)),re_com.debug.collision_icon], null);
};
var G__21418 = function (var_args){
var p__21413 = null;
if (arguments.length > 0) {
var G__21419__i = 0, G__21419__a = new Array(arguments.length -  0);
while (G__21419__i < G__21419__a.length) {G__21419__a[G__21419__i] = arguments[G__21419__i + 0]; ++G__21419__i;}
  p__21413 = new cljs.core.IndexedSeq(G__21419__a,0,null);
} 
return G__21418__delegate.call(this,p__21413);};
G__21418.cljs$lang$maxFixedArity = 0;
G__21418.cljs$lang$applyTo = (function (arglist__21420){
var p__21413 = cljs.core.seq(arglist__21420);
return G__21418__delegate(p__21413);
});
G__21418.cljs$core$IFn$_invoke$arity$variadic = G__21418__delegate;
return G__21418;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq21410){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21410));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4777__auto__ = [];
var len__4771__auto___21426 = arguments.length;
var i__4772__auto___21427 = (0);
while(true){
if((i__4772__auto___21427 < len__4771__auto___21426)){
args__4777__auto__.push((arguments[i__4772__auto___21427]));

var G__21428 = (i__4772__auto___21427 + (1));
i__4772__auto___21427 = G__21428;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__21422){
var map__21423 = p__21422;
var map__21423__$1 = cljs.core.__destructure_map.call(null,map__21423);
var component = cljs.core.get.call(null,map__21423__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.call(null,map__21423__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref.call(null,element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first.call(null,el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__21429__delegate = function (p__21424){
var map__21425 = p__21424;
var map__21425__$1 = cljs.core.__destructure_map.call(null,map__21425);
var component__$1 = cljs.core.get.call(null,map__21425__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.call(null,map__21425__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__21429 = function (var_args){
var p__21424 = null;
if (arguments.length > 0) {
var G__21430__i = 0, G__21430__a = new Array(arguments.length -  0);
while (G__21430__i < G__21430__a.length) {G__21430__a[G__21430__i] = arguments[G__21430__i + 0]; ++G__21430__i;}
  p__21424 = new cljs.core.IndexedSeq(G__21430__a,0,null);
} 
return G__21429__delegate.call(this,p__21424);};
G__21429.cljs$lang$maxFixedArity = 0;
G__21429.cljs$lang$applyTo = (function (arglist__21431){
var p__21424 = cljs.core.seq(arglist__21431);
return G__21429__delegate(p__21424);
});
G__21429.cljs$core$IFn$_invoke$arity$variadic = G__21429__delegate;
return G__21429;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq21421){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21421));
}));


//# sourceMappingURL=debug.js.map
