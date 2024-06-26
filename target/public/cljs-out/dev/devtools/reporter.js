// Compiled by ClojureScript 1.10.844 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
goog.require('devtools.context');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29007 = arguments.length;
var i__4772__auto___29008 = (0);
while(true){
if((i__4772__auto___29008 < len__4771__auto___29007)){
args__4777__auto__.push((arguments[i__4772__auto___29008]));

var G__29009 = (i__4772__auto___29008 + (1));
i__4772__auto___29008 = G__29009;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__29002){
var vec__29003 = p__29002;
var context = cljs.core.nth.call(null,vec__29003,(0),null);
var footer = cljs.core.nth.call(null,vec__29003,(1),null);
var console = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__4160__auto__ = e.message;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info.call(null),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console["groupCollapsed"]);
var log = (console["log"]);
var group_end = (console["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console,header);

log.apply(console,details);

return group_end.call(console);
}catch (e29006){var e__$1 = e29006;
return console.error("FATAL: report-internal-error! failed",e__$1);
}}));

(devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq29000){
var G__29001 = cljs.core.first.call(null,seq29000);
var seq29000__$1 = cljs.core.next.call(null,seq29000);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29001,seq29000__$1);
}));


//# sourceMappingURL=reporter.js.map
