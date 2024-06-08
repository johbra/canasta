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
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__15843){
var map__15844 = p__15843;
var map__15844__$1 = cljs.core.__destructure_map.call(null,map__15844);
var args = map__15844__$1;
var src = cljs.core.get.call(null,map__15844__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.call(null,map__15844__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
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
var map__15845 = src;
var map__15845__$1 = cljs.core.__destructure_map.call(null,map__15845);
var file = cljs.core.get.call(null,map__15845__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__15845__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__15846 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__15846,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__15846;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__15848 = arguments.length;
switch (G__15848) {
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

var seq__15852_15872 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (p1__15851_SHARP_,p2__15850_SHARP_){
return cljs.core.assoc.call(null,p2__15850_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__15851_SHARP_ + (1)));
}),stack));
var chunk__15853_15873 = null;
var count__15854_15874 = (0);
var i__15855_15875 = (0);
while(true){
if((i__15855_15875 < count__15854_15874)){
var map__15864_15876 = cljs.core._nth.call(null,chunk__15853_15873,i__15855_15875);
var map__15864_15877__$1 = cljs.core.__destructure_map.call(null,map__15864_15876);
var i_15878 = cljs.core.get.call(null,map__15864_15877__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_15879 = cljs.core.get.call(null,map__15864_15877__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_15880 = cljs.core.get.call(null,map__15864_15877__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_15881 = cljs.core.get.call(null,map__15864_15877__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_15882 = cljs.core.get.call(null,map__15864_15877__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_15880)){
if(cljs.core.truth_(src_15881)){
var vec__15865_15883 = clojure.string.split.call(null,src_15881,/:/);
var file_15884 = cljs.core.nth.call(null,vec__15865_15883,(0),null);
var line_15885 = cljs.core.nth.call(null,vec__15865_15883,(1),null);
if(cljs.core.truth_(args_15882)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_15878),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_15880)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15884),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15885),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_15882,el_15879);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_15878),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_15880)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15884),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15885),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_15879);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_15878),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_15880)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_15882,el_15879);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_15878),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_15879);
}


var G__15886 = seq__15852_15872;
var G__15887 = chunk__15853_15873;
var G__15888 = count__15854_15874;
var G__15889 = (i__15855_15875 + (1));
seq__15852_15872 = G__15886;
chunk__15853_15873 = G__15887;
count__15854_15874 = G__15888;
i__15855_15875 = G__15889;
continue;
} else {
var temp__5457__auto___15890 = cljs.core.seq.call(null,seq__15852_15872);
if(temp__5457__auto___15890){
var seq__15852_15891__$1 = temp__5457__auto___15890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15852_15891__$1)){
var c__4591__auto___15892 = cljs.core.chunk_first.call(null,seq__15852_15891__$1);
var G__15893 = cljs.core.chunk_rest.call(null,seq__15852_15891__$1);
var G__15894 = c__4591__auto___15892;
var G__15895 = cljs.core.count.call(null,c__4591__auto___15892);
var G__15896 = (0);
seq__15852_15872 = G__15893;
chunk__15853_15873 = G__15894;
count__15854_15874 = G__15895;
i__15855_15875 = G__15896;
continue;
} else {
var map__15868_15897 = cljs.core.first.call(null,seq__15852_15891__$1);
var map__15868_15898__$1 = cljs.core.__destructure_map.call(null,map__15868_15897);
var i_15899 = cljs.core.get.call(null,map__15868_15898__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_15900 = cljs.core.get.call(null,map__15868_15898__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_15901 = cljs.core.get.call(null,map__15868_15898__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_15902 = cljs.core.get.call(null,map__15868_15898__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_15903 = cljs.core.get.call(null,map__15868_15898__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_15901)){
if(cljs.core.truth_(src_15902)){
var vec__15869_15904 = clojure.string.split.call(null,src_15902,/:/);
var file_15905 = cljs.core.nth.call(null,vec__15869_15904,(0),null);
var line_15906 = cljs.core.nth.call(null,vec__15869_15904,(1),null);
if(cljs.core.truth_(args_15903)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_15899),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_15901)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15905),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15906),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_15903,el_15900);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_15899),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_15901)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15905),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15906),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_15900);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_15899),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_15901)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_15903,el_15900);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_15899),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_15900);
}


var G__15907 = cljs.core.next.call(null,seq__15852_15891__$1);
var G__15908 = null;
var G__15909 = (0);
var G__15910 = (0);
seq__15852_15872 = G__15907;
chunk__15853_15873 = G__15908;
count__15854_15874 = G__15909;
i__15855_15875 = G__15910;
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
var seq__15911 = cljs.core.seq.call(null,problems);
var chunk__15912 = null;
var count__15913 = (0);
var i__15914 = (0);
while(true){
if((i__15914 < count__15913)){
var map__15919 = cljs.core._nth.call(null,chunk__15912,i__15914);
var map__15919__$1 = cljs.core.__destructure_map.call(null,map__15919);
var problem = cljs.core.get.call(null,map__15919__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__15919__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__15919__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__15919__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__15919__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__15920_15923 = problem;
var G__15920_15924__$1 = (((G__15920_15923 instanceof cljs.core.Keyword))?G__15920_15923.fqn:null);
switch (G__15920_15924__$1) {
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


var G__15926 = seq__15911;
var G__15927 = chunk__15912;
var G__15928 = count__15913;
var G__15929 = (i__15914 + (1));
seq__15911 = G__15926;
chunk__15912 = G__15927;
count__15913 = G__15928;
i__15914 = G__15929;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15911);
if(temp__5457__auto__){
var seq__15911__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15911__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__15911__$1);
var G__15930 = cljs.core.chunk_rest.call(null,seq__15911__$1);
var G__15931 = c__4591__auto__;
var G__15932 = cljs.core.count.call(null,c__4591__auto__);
var G__15933 = (0);
seq__15911 = G__15930;
chunk__15912 = G__15931;
count__15913 = G__15932;
i__15914 = G__15933;
continue;
} else {
var map__15921 = cljs.core.first.call(null,seq__15911__$1);
var map__15921__$1 = cljs.core.__destructure_map.call(null,map__15921);
var problem = cljs.core.get.call(null,map__15921__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__15921__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__15921__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__15921__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__15921__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__15922_15934 = problem;
var G__15922_15935__$1 = (((G__15922_15934 instanceof cljs.core.Keyword))?G__15922_15934.fqn:null);
switch (G__15922_15935__$1) {
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


var G__15937 = cljs.core.next.call(null,seq__15911__$1);
var G__15938 = null;
var G__15939 = (0);
var G__15940 = (0);
seq__15911 = G__15937;
chunk__15912 = G__15938;
count__15913 = G__15939;
i__15914 = G__15940;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__15941){
var map__15942 = p__15941;
var map__15942__$1 = cljs.core.__destructure_map.call(null,map__15942);
var src = map__15942__$1;
var file = cljs.core.get.call(null,map__15942__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__15942__$1,new cljs.core.Keyword(null,"line","line",212345235));
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
var len__4771__auto___15948 = arguments.length;
var i__4772__auto___15949 = (0);
while(true){
if((i__4772__auto___15949 < len__4771__auto___15948)){
args__4777__auto__.push((arguments[i__4772__auto___15949]));

var G__15950 = (i__4772__auto___15949 + (1));
i__4772__auto___15949 = G__15950;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__15944){
var map__15945 = p__15944;
var map__15945__$1 = cljs.core.__destructure_map.call(null,map__15945);
var problems = cljs.core.get.call(null,map__15945__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.call(null,map__15945__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.call(null,map__15945__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var G__15951__delegate = function (p__15946){
var map__15947 = p__15946;
var map__15947__$1 = cljs.core.__destructure_map.call(null,map__15947);
var problems__$1 = cljs.core.get.call(null,map__15947__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.call(null,map__15947__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.call(null,map__15947__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_.call(null,internal_problems,problems__$1);

cljs.core.reset_BANG_.call(null,internal_component,component__$1);

cljs.core.reset_BANG_.call(null,internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style.call(null)], null)),re_com.debug.collision_icon], null);
};
var G__15951 = function (var_args){
var p__15946 = null;
if (arguments.length > 0) {
var G__15952__i = 0, G__15952__a = new Array(arguments.length -  0);
while (G__15952__i < G__15952__a.length) {G__15952__a[G__15952__i] = arguments[G__15952__i + 0]; ++G__15952__i;}
  p__15946 = new cljs.core.IndexedSeq(G__15952__a,0,null);
} 
return G__15951__delegate.call(this,p__15946);};
G__15951.cljs$lang$maxFixedArity = 0;
G__15951.cljs$lang$applyTo = (function (arglist__15953){
var p__15946 = cljs.core.seq(arglist__15953);
return G__15951__delegate(p__15946);
});
G__15951.cljs$core$IFn$_invoke$arity$variadic = G__15951__delegate;
return G__15951;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq15943){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15943));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15959 = arguments.length;
var i__4772__auto___15960 = (0);
while(true){
if((i__4772__auto___15960 < len__4771__auto___15959)){
args__4777__auto__.push((arguments[i__4772__auto___15960]));

var G__15961 = (i__4772__auto___15960 + (1));
i__4772__auto___15960 = G__15961;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__15955){
var map__15956 = p__15955;
var map__15956__$1 = cljs.core.__destructure_map.call(null,map__15956);
var component = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.call(null,map__15956__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
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
var G__15962__delegate = function (p__15957){
var map__15958 = p__15957;
var map__15958__$1 = cljs.core.__destructure_map.call(null,map__15958);
var component__$1 = cljs.core.get.call(null,map__15958__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.call(null,map__15958__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__15962 = function (var_args){
var p__15957 = null;
if (arguments.length > 0) {
var G__15963__i = 0, G__15963__a = new Array(arguments.length -  0);
while (G__15963__i < G__15963__a.length) {G__15963__a[G__15963__i] = arguments[G__15963__i + 0]; ++G__15963__i;}
  p__15957 = new cljs.core.IndexedSeq(G__15963__a,0,null);
} 
return G__15962__delegate.call(this,p__15957);};
G__15962.cljs$lang$maxFixedArity = 0;
G__15962.cljs$lang$applyTo = (function (arglist__15964){
var p__15957 = cljs.core.seq(arglist__15964);
return G__15962__delegate(p__15957);
});
G__15962.cljs$core$IFn$_invoke$arity$variadic = G__15962__delegate;
return G__15962;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq15954){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15954));
}));


//# sourceMappingURL=debug.js.map
