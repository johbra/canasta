// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('re_com.config');
goog.require('re_com.validate');
goog.require('cljs_time.predicates');
goog.require('cljs_time.format');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('clojure.string');
goog.require('goog.i18n.DateTimeFormat');
re_com.datepicker.month_format = cljs_time.format.formatter.call(null,"MMMM yyyy");
re_com.datepicker.week_format = cljs_time.format.formatter.call(null,"ww");
re_com.datepicker.date_format_str = "yyyy MMM dd";
re_com.datepicker.date_format = cljs_time.format.formatter.call(null,"yyyy MMM dd");
re_com.datepicker.iso8601__GT_date = (function re_com$datepicker$iso8601__GT_date(iso8601){
if(cljs.core.seq.call(null,iso8601)){
return cljs_time.format.parse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date","basic-date",1566551506)),iso8601);
} else {
return null;
}
});
re_com.datepicker.month_label = (function re_com$datepicker$month_label(date_time,p__25425){
var map__25426 = p__25425;
var map__25426__$1 = cljs.core.__destructure_map.call(null,map__25426);
var i18n = map__25426__$1;
var months = cljs.core.get.call(null,map__25426__$1,new cljs.core.Keyword(null,"months","months",-45571637));
if(cljs.core.truth_(months)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,months,(cljs_time.core.month.call(null,date_time) - (1))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy"),date_time))].join('');
} else {
return cljs_time.format.unparse.call(null,re_com.datepicker.month_format,date_time);
}
});
re_com.datepicker.dec_year = (function re_com$datepicker$dec_year(date_time){
return cljs_time.core.minus.call(null,date_time,cljs_time.core.years.call(null,(1)));
});
re_com.datepicker.dec_month = (function re_com$datepicker$dec_month(date_time){
return cljs_time.core.minus.call(null,date_time,cljs_time.core.months.call(null,(1)));
});
re_com.datepicker.inc_month = (function re_com$datepicker$inc_month(date_time){
return cljs_time.core.plus.call(null,date_time,cljs_time.core.months.call(null,(1)));
});
re_com.datepicker.inc_year = (function re_com$datepicker$inc_year(date_time){
return cljs_time.core.plus.call(null,date_time,cljs_time.core.years.call(null,(1)));
});
re_com.datepicker.inc_date = (function re_com$datepicker$inc_date(date_time,n){
return cljs_time.core.plus.call(null,date_time,cljs_time.core.days.call(null,n));
});
/**
 * If date fails pred, subtract period until true, otherwise answer date
 */
re_com.datepicker.previous = (function re_com$datepicker$previous(var_args){
var G__25428 = arguments.length;
switch (G__25428) {
case 1:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return re_com.datepicker.previous.call(null,pred,re_com.util.now__GT_utc.call(null));
}));

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2 = (function (pred,date){
return re_com.datepicker.previous.call(null,pred,date,cljs_time.core.days.call(null,(1)));
}));

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3 = (function (pred,date,period){
while(true){
if(cljs.core.truth_(pred.call(null,date))){
return date;
} else {
var G__25430 = pred;
var G__25431 = cljs_time.core.minus.call(null,date,period);
var G__25432 = period;
pred = G__25430;
date = G__25431;
period = G__25432;
continue;
}
break;
}
}));

(re_com.datepicker.previous.cljs$lang$maxFixedArity = 3);

re_com.datepicker._EQ_date = (function re_com$datepicker$_EQ_date(date1,date2){
return ((cljs.core._EQ_.call(null,cljs_time.core.year.call(null,date1),cljs_time.core.year.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.month.call(null,date1),cljs_time.core.month.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.day.call(null,date1),cljs_time.core.day.call(null,date2))));
});
re_com.datepicker._LT__EQ_date = (function re_com$datepicker$_LT__EQ_date(date1,date2){
var or__4160__auto__ = re_com.datepicker._EQ_date.call(null,date1,date2);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs_time.core.before_QMARK_.call(null,date1,date2);
}
});
re_com.datepicker._GT__EQ_date = (function re_com$datepicker$_GT__EQ_date(date1,date2){
var or__4160__auto__ = re_com.datepicker._EQ_date.call(null,date1,date2);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs_time.core.after_QMARK_.call(null,date1,date2);
}
});
re_com.datepicker.log_formatter = cljs_time.format.formatter.call(null,"E dd MMM Y HH:mm:ss");
re_com.datepicker.leap_year_QMARK_ = (function re_com$datepicker$leap_year_QMARK_(year){
return (!(((((year & (3)) > (0))) || (((((year & (15)) > (0))) && (cljs.core.not.call(null,cljs.core.mod.call(null,(25),year))))))));
});
re_com.datepicker.first_weekday_of_year = (function re_com$datepicker$first_weekday_of_year(week_day_at_start_of_week,year){
if(typeof week_day_at_start_of_week === 'number'){
} else {
throw (new Error("Assert failed: (number? week-day-at-start-of-week)"));
}

if(typeof year === 'number'){
} else {
throw (new Error("Assert failed: (number? year)"));
}

var jan_1_date_time = cljs_time.core.at_midnight.call(null,cljs_time.core.date_time.call(null,year,(1),(1)));
var jan_1_day_of_week = (cljs_time.core.day_of_week.call(null,jan_1_date_time) - (1));
var week_day_delta = (jan_1_day_of_week - week_day_at_start_of_week);
var days_to_add = (((week_day_delta > (0)))?((7) - week_day_delta):Math.abs(week_day_delta));
return cljs_time.core.plus.call(null,jan_1_date_time,cljs_time.core.days.call(null,days_to_add));
});
re_com.datepicker.week_of_year = (function re_com$datepicker$week_of_year(week_day_at_start_of_week,start_of_week_date_time){
var end_of_week_date_time = cljs_time.core.at_midnight.call(null,cljs_time.core.plus.call(null,start_of_week_date_time,cljs_time.core.days.call(null,(6))));
var year_at_end_of_week = cljs_time.core.year.call(null,end_of_week_date_time);
var _first_weekday_of_year = re_com.datepicker.first_weekday_of_year.call(null,week_day_at_start_of_week,year_at_end_of_week);
var last_week_of_previous_year_QMARK_ = cljs_time.core.before_QMARK_.call(null,start_of_week_date_time,_first_weekday_of_year);
if(cljs.core.truth_(last_week_of_previous_year_QMARK_)){
var previous_year = (year_at_end_of_week - (1));
var previous_year_is_leap_year_QMARK_ = re_com.datepicker.leap_year_QMARK_.call(null,previous_year);
if(previous_year_is_leap_year_QMARK_){
return (53);
} else {
return (52);
}
} else {
var ordinal_day = start_of_week_date_time.getDayOfYear();
var first_weekday_ordinal_day = _first_weekday_of_year.getDayOfYear();
var difference_in_days = (ordinal_day - first_weekday_ordinal_day);
var difference_in_weeks = Math.ceil((difference_in_days / (7)));
return (difference_in_weeks + (1));
}
});
re_com.datepicker.days_vector = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Mo","Mo",706762113),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"M",new cljs.core.Keyword(null,"name","name",1843675177),"MON"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Tu","Tu",-1088052995),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"TUE"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"We","We",-705480743),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"W",new cljs.core.Keyword(null,"name","name",1843675177),"WED"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Th","Th",1409372402),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"THU"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Fr","Fr",1051514106),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"F",new cljs.core.Keyword(null,"name","name",1843675177),"FRI"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Sa","Sa",1909936819),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SAT"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Su","Su",1604604633),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SUN"], null)], null);
re_com.datepicker.to_days_vector = (function re_com$datepicker$to_days_vector(xs){
return cljs.core.mapv.call(null,(function (x,m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"name","name",1843675177),x);
}),xs,re_com.datepicker.days_vector);
});
re_com.datepicker.rotate = (function re_com$datepicker$rotate(n,coll){
var c = cljs.core.count.call(null,coll);
return cljs.core.take.call(null,c,cljs.core.drop.call(null,cljs.core.mod.call(null,n,c),cljs.core.cycle.call(null,coll)));
});
re_com.datepicker.is_day_pred = (function re_com$datepicker$is_day_pred(d){
return (function (p1__25433_SHARP_){
return cljs.core._EQ_.call(null,cljs_time.core.day_of_week.call(null,p1__25433_SHARP_),(d + (1)));
});
});
re_com.datepicker.main_div_with = (function re_com$datepicker$main_div_with(table_div,hide_border_QMARK_,class$,style,attr,parts,src,debug_as){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-wrapper",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),173], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-border ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"radius","radius",-2073122258),"4px",new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK_)?"none":null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["datepicker noselect rc-datepicker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"position","position",-2011731912),"static"], null),style)], null),attr),table_div], null)], null)], null)], null);
});
re_com.datepicker.prev_year_icon = (function re_com$datepicker$prev_year_icon(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25437 = arguments.length;
var i__4772__auto___25438 = (0);
while(true){
if((i__4772__auto___25438 < len__4771__auto___25437)){
args__4777__auto__.push((arguments[i__4772__auto___25438]));

var G__25439 = (i__4772__auto___25438 + (1));
i__4772__auto___25438 = G__25439;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.prev_year_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.prev_year_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__25435){
var map__25436 = p__25435;
var map__25436__$1 = cljs.core.__destructure_map.call(null,map__25436);
var parts = cljs.core.get.call(null,map__25436__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-prev-year-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-year-icon","prev-year-icon",207023957),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-year-icon","prev-year-icon",207023957),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"width","width",-384071477),"24"], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-year-icon","prev-year-icon",207023957),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(1.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 16.793529,7.4382353 -1.41,-1.41 -5.9999996,5.9999997 5.9999996,6 1.41,-1.41 -4.58,-4.59 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 10.862647,7.4429412 -1.4100003,-1.41 -6,5.9999998 6,6 1.4100003,-1.41 -4.5800003,-4.59 z"], null)], null)], null)], null);
}));

(re_com.datepicker.prev_year_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.prev_year_icon.cljs$lang$applyTo = (function (seq25434){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25434));
}));

re_com.datepicker.prev_month_icon = (function re_com$datepicker$prev_month_icon(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25443 = arguments.length;
var i__4772__auto___25444 = (0);
while(true){
if((i__4772__auto___25444 < len__4771__auto___25443)){
args__4777__auto__.push((arguments[i__4772__auto___25444]));

var G__25445 = (i__4772__auto___25444 + (1));
i__4772__auto___25444 = G__25445;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.prev_month_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.prev_month_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__25441){
var map__25442 = p__25441;
var map__25442__$1 = cljs.core.__destructure_map.call(null,map__25442);
var parts = cljs.core.get.call(null,map__25442__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-prev-month-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-month-icon","prev-month-icon",73976335),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-month-icon","prev-month-icon",73976335),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"width","width",-384071477),"24"], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-month-icon","prev-month-icon",73976335),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"], null)], null)], null);
}));

(re_com.datepicker.prev_month_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.prev_month_icon.cljs$lang$applyTo = (function (seq25440){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25440));
}));

re_com.datepicker.next_month_icon = (function re_com$datepicker$next_month_icon(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25449 = arguments.length;
var i__4772__auto___25450 = (0);
while(true){
if((i__4772__auto___25450 < len__4771__auto___25449)){
args__4777__auto__.push((arguments[i__4772__auto___25450]));

var G__25451 = (i__4772__auto___25450 + (1));
i__4772__auto___25450 = G__25451;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.next_month_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.next_month_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__25447){
var map__25448 = p__25447;
var map__25448__$1 = cljs.core.__destructure_map.call(null,map__25448);
var parts = cljs.core.get.call(null,map__25448__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-next-month-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-month-icon","next-month-icon",71555745),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-month-icon","next-month-icon",71555745),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"width","width",-384071477),"24"], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-month-icon","next-month-icon",71555745),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"], null)], null)], null);
}));

(re_com.datepicker.next_month_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.next_month_icon.cljs$lang$applyTo = (function (seq25446){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25446));
}));

re_com.datepicker.next_year_icon = (function re_com$datepicker$next_year_icon(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25455 = arguments.length;
var i__4772__auto___25456 = (0);
while(true){
if((i__4772__auto___25456 < len__4771__auto___25455)){
args__4777__auto__.push((arguments[i__4772__auto___25456]));

var G__25457 = (i__4772__auto___25456 + (1));
i__4772__auto___25456 = G__25457;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.next_year_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.next_year_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__25453){
var map__25454 = p__25453;
var map__25454__$1 = cljs.core.__destructure_map.call(null,map__25454);
var parts = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-next-year-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-year-icon","next-year-icon",1330330371),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-year-icon","next-year-icon",1330330371),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"width","width",-384071477),"24"], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-year-icon","next-year-icon",1330330371),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-1.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 8.5882353,6 -1.41,1.41 4.5799997,4.59 -4.5799997,4.59 1.41,1.41 5.9999997,-6 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 14.547353,5.9623529 -1.41,1.41 4.58,4.5900001 -4.58,4.59 1.41,1.41 6,-6 z"], null)], null)], null)], null);
}));

(re_com.datepicker.next_year_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.next_year_icon.cljs$lang$applyTo = (function (seq25452){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25452));
}));

re_com.datepicker.prev_year_nav = (function re_com$datepicker$prev_year_nav(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25461 = arguments.length;
var i__4772__auto___25462 = (0);
while(true){
if((i__4772__auto___25462 < len__4771__auto___25461)){
args__4777__auto__.push((arguments[i__4772__auto___25462]));

var G__25463 = (i__4772__auto___25462 + (1));
i__4772__auto___25462 = G__25463;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.prev_year_nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.prev_year_nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__25459){
var map__25460 = p__25459;
var map__25460__$1 = cljs.core.__destructure_map.call(null,map__25460);
var display_month = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"display-month","display-month",501229355));
var minimum = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var disabled_QMARK_ = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var parts = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var prev_year_date_time = re_com.datepicker.dec_year.call(null,cljs.core.deref.call(null,display_month));
var prev_year_enabled_QMARK_ = (cljs.core.truth_(minimum)?cljs_time.core.after_QMARK_.call(null,prev_year_date_time,re_com.datepicker.dec_month.call(null,minimum)):true);
if(cljs.core.not.call(null,disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),248], null)),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(prev_year_enabled_QMARK_)?"rc-datepicker-selectable ":"rc-datepicker-disabled "),"rc-datepicker-prev-year ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-year","prev-year",707761911),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-year","prev-year",707761911),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(prev_year_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,display_month,prev_year_date_time);
} else {
}

return null;
})], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-year","prev-year",707761911),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.prev_year_icon,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),260], null))], null)], null);
} else {
return null;
}
}));

(re_com.datepicker.prev_year_nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.prev_year_nav.cljs$lang$applyTo = (function (seq25458){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25458));
}));

re_com.datepicker.prev_month_nav = (function re_com$datepicker$prev_month_nav(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25467 = arguments.length;
var i__4772__auto___25468 = (0);
while(true){
if((i__4772__auto___25468 < len__4771__auto___25467)){
args__4777__auto__.push((arguments[i__4772__auto___25468]));

var G__25469 = (i__4772__auto___25468 + (1));
i__4772__auto___25468 = G__25469;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.prev_month_nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.prev_month_nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__25465){
var map__25466 = p__25465;
var map__25466__$1 = cljs.core.__destructure_map.call(null,map__25466);
var display_month = cljs.core.get.call(null,map__25466__$1,new cljs.core.Keyword(null,"display-month","display-month",501229355));
var minimum = cljs.core.get.call(null,map__25466__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var disabled_QMARK_ = cljs.core.get.call(null,map__25466__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var parts = cljs.core.get.call(null,map__25466__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var prev_month_date_time = re_com.datepicker.dec_month.call(null,cljs.core.deref.call(null,display_month));
var prev_month_enabled_QMARK_ = (cljs.core.truth_(minimum)?cljs_time.core.after_QMARK_.call(null,prev_month_date_time,re_com.datepicker.dec_month.call(null,minimum)):true);
if(cljs.core.not.call(null,disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),269], null)),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(prev_month_enabled_QMARK_)?"rc-datepicker-selectable ":"rc-datepicker-disabled "),"rc-datepicker-prev-month ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-month","prev-month",1275314015),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-month","prev-month",1275314015),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(prev_month_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,display_month,prev_month_date_time);
} else {
}

return null;
})], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-month","prev-month",1275314015),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.prev_month_icon,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),281], null))], null)], null);
} else {
return null;
}
}));

(re_com.datepicker.prev_month_nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.prev_month_nav.cljs$lang$applyTo = (function (seq25464){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25464));
}));

re_com.datepicker.next_month_nav = (function re_com$datepicker$next_month_nav(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25473 = arguments.length;
var i__4772__auto___25474 = (0);
while(true){
if((i__4772__auto___25474 < len__4771__auto___25473)){
args__4777__auto__.push((arguments[i__4772__auto___25474]));

var G__25475 = (i__4772__auto___25474 + (1));
i__4772__auto___25474 = G__25475;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.next_month_nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.next_month_nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__25471){
var map__25472 = p__25471;
var map__25472__$1 = cljs.core.__destructure_map.call(null,map__25472);
var display_month = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"display-month","display-month",501229355));
var maximum = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var disabled_QMARK_ = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var parts = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var next_month_date_time = re_com.datepicker.inc_month.call(null,cljs.core.deref.call(null,display_month));
var next_month_enabled_QMARK_ = (cljs.core.truth_(maximum)?cljs_time.core.before_QMARK_.call(null,next_month_date_time,maximum):true);
if(cljs.core.not.call(null,disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),290], null))], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),292], null)),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(next_month_enabled_QMARK_)?"rc-datepicker-selectable ":"rc-datepicker-disabled "),"rc-datepicker-next-month ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-month","next-month",1823833970),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-month","next-month",1823833970),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(next_month_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,display_month,next_month_date_time);
} else {
}

return null;
})], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-month","next-month",1823833970),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.next_month_icon,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null)], null)], null);
} else {
return null;
}
}));

(re_com.datepicker.next_month_nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.next_month_nav.cljs$lang$applyTo = (function (seq25470){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25470));
}));

re_com.datepicker.next_year_nav = (function re_com$datepicker$next_year_nav(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25479 = arguments.length;
var i__4772__auto___25480 = (0);
while(true){
if((i__4772__auto___25480 < len__4771__auto___25479)){
args__4777__auto__.push((arguments[i__4772__auto___25480]));

var G__25481 = (i__4772__auto___25480 + (1));
i__4772__auto___25480 = G__25481;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.next_year_nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.next_year_nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__25477){
var map__25478 = p__25477;
var map__25478__$1 = cljs.core.__destructure_map.call(null,map__25478);
var display_month = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"display-month","display-month",501229355));
var maximum = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var disabled_QMARK_ = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var parts = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var next_year_date_time = re_com.datepicker.inc_year.call(null,cljs.core.deref.call(null,display_month));
var next_year_enabled_QMARK_ = (cljs.core.truth_(maximum)?cljs_time.core.before_QMARK_.call(null,next_year_date_time,maximum):true);
if(cljs.core.not.call(null,disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),311], null))], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),313], null)),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(next_year_enabled_QMARK_)?"rc-datepicker-selectable ":"rc-datepicker-disabled "),"rc-datepicker-next-year ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-year","next-year",-1541587170),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-year","next-year",-1541587170),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(next_year_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,display_month,next_year_date_time);
} else {
}

return null;
})], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-year","next-year",-1541587170),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.next_year_icon,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null)], null)], null);
} else {
return null;
}
}));

(re_com.datepicker.next_year_nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.next_year_nav.cljs$lang$applyTo = (function (seq25476){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25476));
}));

re_com.datepicker.nav = (function re_com$datepicker$nav(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25485 = arguments.length;
var i__4772__auto___25486 = (0);
while(true){
if((i__4772__auto___25486 < len__4771__auto___25485)){
args__4777__auto__.push((arguments[i__4772__auto___25486]));

var G__25487 = (i__4772__auto___25486 + (1));
i__4772__auto___25486 = G__25487;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__25483){
var map__25484 = p__25483;
var map__25484__$1 = cljs.core.__destructure_map.call(null,map__25484);
var display_month = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"display-month","display-month",501229355));
var minimum = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var disabled_QMARK_ = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var i18n = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
var parts = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var minimum__$1 = re_com.util.deref_or_value.call(null,minimum);
var maximum__$1 = re_com.util.deref_or_value.call(null,maximum);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),"7",new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-nav ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"style","style",-496642736)], null)))], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),336], null)),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.prev_year_nav,new cljs.core.Keyword(null,"display-month","display-month",501229355),display_month,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),minimum__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.prev_month_nav,new cljs.core.Keyword(null,"display-month","display-month",501229355),display_month,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),minimum__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),349], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-month ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),re_com.datepicker.month_label.call(null,cljs.core.deref.call(null,display_month),i18n)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.next_month_nav,new cljs.core.Keyword(null,"display-month","display-month",501229355),display_month,new cljs.core.Keyword(null,"maximum","maximum",573880714),maximum__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.next_year_nav,new cljs.core.Keyword(null,"display-month","display-month",501229355),display_month,new cljs.core.Keyword(null,"maximum","maximum",573880714),maximum__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null)], null)], null)], null);
}));

(re_com.datepicker.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.nav.cljs$lang$applyTo = (function (seq25482){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25482));
}));

re_com.datepicker.week_days = (function re_com$datepicker$week_days(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25496 = arguments.length;
var i__4772__auto___25497 = (0);
while(true){
if((i__4772__auto___25497 < len__4771__auto___25496)){
args__4777__auto__.push((arguments[i__4772__auto___25497]));

var G__25498 = (i__4772__auto___25497 + (1));
i__4772__auto___25497 = G__25498;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.week_days.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.week_days.cljs$core$IFn$_invoke$arity$variadic = (function (p__25489){
var map__25490 = p__25489;
var map__25490__$1 = cljs.core.__destructure_map.call(null,map__25490);
var start_of_week = cljs.core.get.call(null,map__25490__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824));
var i18n = cljs.core.get.call(null,map__25490__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
var parts = cljs.core.get.call(null,map__25490__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var map__25491 = i18n;
var map__25491__$1 = cljs.core.__destructure_map.call(null,map__25491);
var days = cljs.core.get.call(null,map__25491__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__4564__auto__ = (function re_com$datepicker$iter__25492(s__25493){
return (new cljs.core.LazySeq(null,(function (){
var s__25493__$1 = s__25493;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25493__$1);
if(temp__5457__auto__){
var s__25493__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25493__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__25493__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__25495 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__25494 = (0);
while(true){
if((i__25494 < size__4563__auto__)){
var day = cljs.core._nth.call(null,c__4562__auto__,i__25494);
cljs.core.chunk_append.call(null,b__25495,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-day rc-datepicker-day-",clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null));

var G__25499 = (i__25494 + (1));
i__25494 = G__25499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25495),re_com$datepicker$iter__25492.call(null,cljs.core.chunk_rest.call(null,s__25493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25495),null);
}
} else {
var day = cljs.core.first.call(null,s__25493__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-day rc-datepicker-day-",clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),re_com$datepicker$iter__25492.call(null,cljs.core.rest.call(null,s__25493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,re_com.datepicker.rotate.call(null,start_of_week,(function (){var or__4160__auto__ = (cljs.core.truth_(days)?re_com.datepicker.to_days_vector.call(null,days):null);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.datepicker.days_vector;
}
})()));
})());
}));

(re_com.datepicker.week_days.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.week_days.cljs$lang$applyTo = (function (seq25488){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25488));
}));

/**
 * Answer 2 x rows showing month with nav buttons and days
 */
re_com.datepicker.table_thead = (function re_com$datepicker$table_thead(display_month,p__25500,disabled_QMARK_,parts){
var map__25501 = p__25500;
var map__25501__$1 = cljs.core.__destructure_map.call(null,map__25501);
var show_weeks_QMARK_ = cljs.core.get.call(null,map__25501__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var minimum = cljs.core.get.call(null,map__25501__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__25501__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var start_of_week = cljs.core.get.call(null,map__25501__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824));
var i18n = cljs.core.get.call(null,map__25501__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
var template_row = (cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-header ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),cljs.core.conj.call(null,template_row,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.nav,new cljs.core.Keyword(null,"display-month","display-month",501229355),display_month,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),minimum,new cljs.core.Keyword(null,"maximum","maximum",573880714),maximum,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"i18n","i18n",-563422499),i18n,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null)),cljs.core.conj.call(null,template_row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.week_days,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),start_of_week,new cljs.core.Keyword(null,"i18n","i18n",-563422499),i18n,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null))], null);
});
re_com.datepicker.selection_changed = (function re_com$datepicker$selection_changed(selection,change_callback){
return change_callback.call(null,selection);
});
re_com.datepicker.table_td = (function re_com$datepicker$table_td(date,focus_month,selected,today,p__25502,disabled_QMARK_,on_change,parts){
var map__25503 = p__25502;
var map__25503__$1 = cljs.core.__destructure_map.call(null,map__25503);
var attributes = map__25503__$1;
var minimum = cljs.core.get.call(null,map__25503__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__25503__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var selectable_fn = cljs.core.get.call(null,map__25503__$1,new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738));
var minimum__$1 = re_com.util.deref_or_value.call(null,minimum);
var maximum__$1 = re_com.util.deref_or_value.call(null,maximum);
var enabled_min = (cljs.core.truth_(minimum__$1)?re_com.datepicker._GT__EQ_date.call(null,date,minimum__$1):true);
var enabled_max = (cljs.core.truth_(maximum__$1)?re_com.datepicker._LT__EQ_date.call(null,date,maximum__$1):true);
var enabled_day = (function (){var and__4149__auto__ = enabled_min;
if(cljs.core.truth_(and__4149__auto__)){
return enabled_max;
} else {
return and__4149__auto__;
}
})();
var unselectable_day_QMARK_ = (cljs.core.truth_(enabled_day)?cljs.core.not.call(null,selectable_fn.call(null,date)):true);
var classes = (cljs.core.truth_(disabled_QMARK_)?"rc-datepicker-disabled":((unselectable_day_QMARK_)?"rc-datepicker-unselectable":((cljs.core._EQ_.call(null,focus_month,cljs_time.core.month.call(null,date)))?"rc-datepicker-selectable":"rc-datepicker-selectable rc-datepicker-out-of-focus"
)));
var classes__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = selected;
if(cljs.core.truth_(and__4149__auto__)){
return re_com.datepicker._EQ_date.call(null,selected,date);
} else {
return and__4149__auto__;
}
})())?[classes," rc-datepicker-selected start-date end-date "].join(''):(cljs.core.truth_((function (){var and__4149__auto__ = today;
if(cljs.core.truth_(and__4149__auto__)){
return ((re_com.datepicker._EQ_date.call(null,date,today)) && (cljs.core.not.call(null,disabled_QMARK_)));
} else {
return and__4149__auto__;
}
})())?[classes," rc-datepicker-today "].join(''):[classes," "].join('')
));
var on_click = (function (){
if(cljs.core.truth_((function (){var or__4160__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return unselectable_day_QMARK_;
}
})())){
return null;
} else {
return re_com.datepicker.selection_changed.call(null,date,on_change);
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[classes__$1,"rc-datepicker-date ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
on_click.call(null);

return null;
})], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),cljs_time.core.day.call(null,date)], null);
});
re_com.datepicker.week_td = (function re_com$datepicker$week_td(start_of_week,date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"week"], null),re_com.datepicker.week_of_year.call(null,start_of_week,date)], null);
});
/**
 * Return 7 columns of date cells from date inclusive
 */
re_com.datepicker.table_tr = (function re_com$datepicker$table_tr(date,start_of_week,focus_month,selected,attributes,disabled_QMARK_,on_change,parts){
var table_row = (cljs.core.truth_(new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221).cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),re_com.datepicker.week_td.call(null,start_of_week,date)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
var row_dates = cljs.core.map.call(null,(function (p1__25504_SHARP_){
return re_com.datepicker.inc_date.call(null,date,p1__25504_SHARP_);
}),cljs.core.range.call(null,(7)));
var today = (cljs.core.truth_(new cljs.core.Keyword(null,"show-today?","show-today?",513056415).cljs$core$IFn$_invoke$arity$1(attributes))?re_com.util.now__GT_utc.call(null):null);
return cljs.core.into.call(null,table_row,cljs.core.map.call(null,(function (p1__25505_SHARP_){
return re_com.datepicker.table_td.call(null,p1__25505_SHARP_,focus_month,selected,today,attributes,disabled_QMARK_,on_change,parts);
}),row_dates));
});
/**
 * Return matrix of 6 rows x 7 cols table cells representing 41 days from start-date inclusive
 */
re_com.datepicker.table_tbody = (function re_com$datepicker$table_tbody(display_month,selected,attributes,disabled_QMARK_,on_change,parts){
var start_of_week = new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824).cljs$core$IFn$_invoke$arity$1(attributes);
var current_start = re_com.datepicker.previous.call(null,re_com.datepicker.is_day_pred.call(null,start_of_week),display_month);
var focus_month = cljs_time.core.month.call(null,display_month);
var row_start_dates = cljs.core.map.call(null,(function (p1__25506_SHARP_){
return re_com.datepicker.inc_date.call(null,current_start,((7) * p1__25506_SHARP_));
}),cljs.core.range.call(null,(6)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker-dates ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dates","dates",-1600154075),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dates","dates",-1600154075),new cljs.core.Keyword(null,"style","style",-496642736)], null))], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dates","dates",-1600154075),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)))], null),cljs.core.map.call(null,(function (p1__25507_SHARP_){
return re_com.datepicker.table_tr.call(null,p1__25507_SHARP_,start_of_week,focus_month,selected,attributes,disabled_QMARK_,on_change,parts);
}),row_start_dates));
});
/**
 * Augment passed attributes with extra info/defaults
 */
re_com.datepicker.configure = (function re_com$datepicker$configure(attributes){
var selectable_fn = ((cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes)))?new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes):cljs.core.constantly.call(null,true));
return cljs.core.merge.call(null,attributes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),selectable_fn], null));
});
re_com.datepicker.datepicker_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-wrapper",new cljs.core.Keyword(null,"impl","impl",1677848700),"[datepicker]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper of the datepicker."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-border",new cljs.core.Keyword(null,"impl","impl",1677848700),"[border]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker border."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker container."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-table",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:table]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker table."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"level","level",1290497552),(4),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-header",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:thead]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker header."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(5),new cljs.core.Keyword(null,"impl","impl",1677848700),"[:tr]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker month row.",new cljs.core.Keyword(null,"name-label","name-label",1051389241),"-"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-nav",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:th]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker navigation."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(7),new cljs.core.Keyword(null,"impl","impl",1677848700),"[h-box]",new cljs.core.Keyword(null,"name-label","name-label",1051389241),"-"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"prev-year","prev-year",707761911),new cljs.core.Keyword(null,"level","level",1290497552),(8),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-prev-year",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker previous year button."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"prev-year-icon","prev-year-icon",207023957),new cljs.core.Keyword(null,"level","level",1290497552),(9),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-prev-year-icon",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:svg]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker previous year button icon."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"prev-month","prev-month",1275314015),new cljs.core.Keyword(null,"level","level",1290497552),(8),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-prev-month",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker previous month button."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"prev-month-icon","prev-month-icon",73976335),new cljs.core.Keyword(null,"level","level",1290497552),(9),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-prev-month-icon",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:svg]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker previous month button icon."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"level","level",1290497552),(8),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-month",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker month label."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"next-month","next-month",1823833970),new cljs.core.Keyword(null,"level","level",1290497552),(8),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-next-month",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker next month button."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"next-month-icon","next-month-icon",71555745),new cljs.core.Keyword(null,"level","level",1290497552),(9),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-next-month-icon",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:svg]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker next month button icon."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"next-year","next-year",-1541587170),new cljs.core.Keyword(null,"level","level",1290497552),(8),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-next-year",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker next year button."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"next-year-icon","next-year-icon",1330330371),new cljs.core.Keyword(null,"level","level",1290497552),(9),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-next-year-icon",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:svg]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker next year button icon."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(5),new cljs.core.Keyword(null,"impl","impl",1677848700),"[:tr]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The datepicker weekday row.",new cljs.core.Keyword(null,"name-label","name-label",1051389241),"-"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-day-mon",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:th]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Monday. WARNING: First weekday of week depends on arguments."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-day-tue",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:th]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Tuesday."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-day-wed",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:th]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Wednesday."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-day-thu",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:th]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Thursday."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-day-fri",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:th]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Friday."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-day-sat",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:th]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Saturday."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-day-sun",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:th]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Sunday."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dates","dates",-1600154075),new cljs.core.Keyword(null,"level","level",1290497552),(4),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-dates",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:tbody]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The table body containing the dates."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(5),new cljs.core.Keyword(null,"impl","impl",1677848700),"[:tr]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"A date row. Repeats 6 times.",new cljs.core.Keyword(null,"name-label","name-label",1051389241),"-"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-date",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:td]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"A date cell. Repeats 7 times per date row."], null)], null):null);
re_com.datepicker.datepicker_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),re_com.datepicker.datepicker_parts_desc)):null);
re_com.datepicker.datepicker_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the selected date. If provided, should pass pred ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":selectable-fn"], null),". If not provided, (now->utc) will be used and the returned date will be a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"goog.date.UtcDateTime"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when a new selection is made. Returned type is the same as model (unless model is nil, in which case it will be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"goog.date.UtcDateTime"], null),")"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the user can't select dates but can navigate"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"(fn [date] true)",new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"This predicate function is called with one argument, the date. If it answers false, day will be shown disabled and can't be selected."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, week numbers are shown to the left"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-today?","show-today?",513056415),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, today's date is highlighted"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation before this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation after this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(6),new cljs.core.Keyword(null,"type","type",1174270348),"int",new cljs.core.Keyword(null,"description","description",-1428560544),"first day of week (Monday = 0 ... Sunday = 6)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the border is not displayed"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"i18n","i18n",-563422499),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"internationalization map with optional keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":days"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":months"], null)," (both vectors of strings)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer border div, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the outer border div, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," allowed (applies to the outer border div, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,re_com.datepicker.datepicker_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
re_com.datepicker.datepicker = (function re_com$datepicker$datepicker(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25513 = arguments.length;
var i__4772__auto___25514 = (0);
while(true){
if((i__4772__auto___25514 < len__4771__auto___25513)){
args__4777__auto__.push((arguments[i__4772__auto___25514]));

var G__25515 = (i__4772__auto___25514 + (1));
i__4772__auto___25514 = G__25515;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic = (function (p__25509){
var map__25510 = p__25509;
var map__25510__$1 = cljs.core.__destructure_map.call(null,map__25510);
var args = map__25510__$1;
var model = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"model","model",331153215));
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var external_model = reagent.core.atom.call(null,re_com.util.deref_or_value.call(null,model));
var internal_model = reagent.core.atom.call(null,cljs.core.deref.call(null,external_model));
var display_month = reagent.core.atom.call(null,cljs_time.core.first_day_of_the_month.call(null,(function (){var or__4160__auto____$1 = cljs.core.deref.call(null,internal_model);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return re_com.util.now__GT_utc.call(null);
}
})()));
return (function() { 
var re_com$datepicker$datepicker_render__delegate = function (p__25511){
var map__25512 = p__25511;
var map__25512__$1 = cljs.core.__destructure_map.call(null,map__25512);
var args__$1 = map__25512__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model__$1 = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var hide_border_QMARK_ = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var parts = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var start_of_week = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),(6));
var style = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_args_desc),args__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var latest_ext_model = re_com.util.deref_or_value.call(null,model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var props_with_defaults = cljs.core.merge.call(null,args__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),start_of_week], null));
var configuration = re_com.datepicker.configure.call(null,props_with_defaults);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_model),latest_ext_model)){
cljs.core.reset_BANG_.call(null,external_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,internal_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,display_month,cljs_time.core.first_day_of_the_month.call(null,(function (){var or__4160__auto____$2 = cljs.core.deref.call(null,internal_model);
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return re_com.util.now__GT_utc.call(null);
}
})()));
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.main_div_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["table-condensed rc-datepicker-table ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"style","style",-496642736)], null))], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_thead,display_month,configuration,disabled_QMARK___$1,parts], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_tbody,cljs.core.deref.call(null,display_month),cljs.core.deref.call(null,internal_model),configuration,disabled_QMARK___$1,on_change,parts], null)], null),hide_border_QMARK_,class$,style,attr,parts,src,(function (){var or__4160__auto____$2 = debug_as;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null))),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})()], null);
}
};
var re_com$datepicker$datepicker_render = function (var_args){
var p__25511 = null;
if (arguments.length > 0) {
var G__25516__i = 0, G__25516__a = new Array(arguments.length -  0);
while (G__25516__i < G__25516__a.length) {G__25516__a[G__25516__i] = arguments[G__25516__i + 0]; ++G__25516__i;}
  p__25511 = new cljs.core.IndexedSeq(G__25516__a,0,null);
} 
return re_com$datepicker$datepicker_render__delegate.call(this,p__25511);};
re_com$datepicker$datepicker_render.cljs$lang$maxFixedArity = 0;
re_com$datepicker$datepicker_render.cljs$lang$applyTo = (function (arglist__25517){
var p__25511 = cljs.core.seq(arglist__25517);
return re_com$datepicker$datepicker_render__delegate(p__25511);
});
re_com$datepicker$datepicker_render.cljs$core$IFn$_invoke$arity$variadic = re_com$datepicker$datepicker_render__delegate;
return re_com$datepicker$datepicker_render;
})()
;
}
}));

(re_com.datepicker.datepicker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.datepicker.cljs$lang$applyTo = (function (seq25508){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25508));
}));

/**
 * Provide clickable field with current date label and dropdown button e.g. [ 2014 Sep 17 | # ]
 */
re_com.datepicker.anchor_button = (function re_com$datepicker$anchor_button(shown_QMARK_,model,format,goog_QMARK_,placeholder,width,disabled_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-dropdown-anchor input-group display-flex noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.not.call(null,re_com.util.deref_or_value.call(null,disabled_QMARK_))){
cljs.core.swap_BANG_.call(null,shown_QMARK_,cljs.core.not);
} else {
}

return null;
})], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(cljs.core.truth_(width)?null:"10em"),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(cljs.core.truth_(width)?null:"10em"),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),re_com.util.deref_or_value.call(null,disabled_QMARK_),new cljs.core.Keyword(null,"class","class",-2030961996),["form-control dropdown-button",(cljs.core.truth_(re_com.util.deref_or_value.call(null,disabled_QMARK_))?" dropdown-button-disabled":null)].join('')], null),(((!(re_com.validate.date_like_QMARK_.call(null,re_com.util.deref_or_value.call(null,model)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),placeholder], null):(cljs.core.truth_(goog_QMARK_)?(new goog.i18n.DateTimeFormat(((cljs.core.seq.call(null,format))?format:"yyyy MMM dd"))).format(re_com.util.deref_or_value.call(null,model)):cljs_time.format.unparse.call(null,((cljs.core.seq.call(null,format))?cljs_time.format.formatter.call(null,format):re_com.datepicker.date_format),re_com.util.deref_or_value.call(null,model))
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-button activator input-group-addon",(cljs.core.truth_(re_com.util.deref_or_value.call(null,disabled_QMARK_))?" dropdown-button-disabled":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 0px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-apps","i.zmdi.zmdi-apps",-641069407),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)], null)], null)], null);
});
re_com.datepicker.datepicker_dropdown_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.call(null,re_com.datepicker.datepicker_args_desc,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"yyyy MMM dd",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] a representation of a date format. See cljs_time.format"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"goog?","goog?",316370704),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[datepicker-dropdown only] use ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"goog.i18n.DateTimeFormat"], null)," instead of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"cljs_time.format"], null)," for applying ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":format"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] placeholder text for when a date is not selected."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] a CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] px horizontal offset of the popup"], null)):null);
re_com.datepicker.datepicker_dropdown = (function re_com$datepicker$datepicker_dropdown(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25523 = arguments.length;
var i__4772__auto___25524 = (0);
while(true){
if((i__4772__auto___25524 < len__4771__auto___25523)){
args__4777__auto__.push((arguments[i__4772__auto___25524]));

var G__25525 = (i__4772__auto___25524 + (1));
i__4772__auto___25524 = G__25525;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__25519){
var map__25520 = p__25519;
var map__25520__$1 = cljs.core.__destructure_map.call(null,map__25520);
var args = map__25520__$1;
var src = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_dropdown_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var shown_QMARK_ = reagent.core.atom.call(null,false);
var cancel_popover = (function (){
return cljs.core.reset_BANG_.call(null,shown_QMARK_,false);
});
var position = new cljs.core.Keyword(null,"below-left","below-left",1233934732);
return (function() { 
var re_com$datepicker$datepicker_dropdown_render__delegate = function (p__25521){
var map__25522 = p__25521;
var map__25522__$1 = cljs.core.__destructure_map.call(null,map__25522);
var passthrough_args = map__25522__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"model","model",331153215));
var format = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var position_offset = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),(0));
var placeholder = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var no_clip_QMARK_ = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true);
var show_weeks_QMARK_ = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var width = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var src__$1 = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var goog_QMARK_ = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"goog?","goog?",316370704));
var debug_as = cljs.core.get.call(null,map__25522__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_dropdown_args_desc),passthrough_args));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var collapse_on_select = (function (new_model){
cljs.core.reset_BANG_.call(null,shown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return on_change.call(null,new_model);
} else {
return null;
}
});
var passthrough_args__$1 = cljs.core.flatten.call(null,cljs.core.vec.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,passthrough_args,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"goog?","goog?",316370704),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),collapse_on_select),new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),621], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true], null))));
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__4160__auto____$2 = debug_as;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null))),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-dropdown-wrapper",new cljs.core.Keyword(null,"showing?","showing?",2094921488),shown_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.anchor_button,shown_QMARK_,model,format,goog_QMARK_,placeholder,width,disabled_QMARK_], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/datepicker.cljs",new cljs.core.Keyword(null,"line","line",212345235),633], null)),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),((cljs.core.truth_(show_weeks_QMARK_)?(43):(44)) + position_offset),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),no_clip_QMARK_,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(0),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(0),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(3),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),cancel_popover,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.datepicker], null),passthrough_args__$1)], null)], null);
}
};
var re_com$datepicker$datepicker_dropdown_render = function (var_args){
var p__25521 = null;
if (arguments.length > 0) {
var G__25526__i = 0, G__25526__a = new Array(arguments.length -  0);
while (G__25526__i < G__25526__a.length) {G__25526__a[G__25526__i] = arguments[G__25526__i + 0]; ++G__25526__i;}
  p__25521 = new cljs.core.IndexedSeq(G__25526__a,0,null);
} 
return re_com$datepicker$datepicker_dropdown_render__delegate.call(this,p__25521);};
re_com$datepicker$datepicker_dropdown_render.cljs$lang$maxFixedArity = 0;
re_com$datepicker$datepicker_dropdown_render.cljs$lang$applyTo = (function (arglist__25527){
var p__25521 = cljs.core.seq(arglist__25527);
return re_com$datepicker$datepicker_dropdown_render__delegate(p__25521);
});
re_com$datepicker$datepicker_dropdown_render.cljs$core$IFn$_invoke$arity$variadic = re_com$datepicker$datepicker_dropdown_render__delegate;
return re_com$datepicker$datepicker_dropdown_render;
})()
;
}
}));

(re_com.datepicker.datepicker_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.datepicker_dropdown.cljs$lang$applyTo = (function (seq25518){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25518));
}));


//# sourceMappingURL=datepicker.js.map
