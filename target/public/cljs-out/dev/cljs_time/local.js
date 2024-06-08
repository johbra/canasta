// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs_time.local');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('goog.date.DateTime');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__21523){
var vec__21524 = p__21523;
var k = cljs.core.nth.call(null,vec__21524,(0),null);
var f = cljs.core.nth.call(null,vec__21524,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f)),new cljs.core.Keyword("fmt","formatter","fmt/formatter",-483947944)))?cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(function (p1__21522_SHARP_){
return cljs_time.core.to_default_time_zone.call(null,p1__21522_SHARP_);
})):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now.call(null);
});

/**
 * @interface
 */
cljs_time.local.ILocalCoerce = function(){};

var cljs_time$local$ILocalCoerce$to_local_date_time$dyn_21527 = (function (obj){
var x__4463__auto__ = (((obj == null))?null:obj);
var m__4464__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,obj);
} else {
var m__4461__auto__ = (cljs_time.local.to_local_date_time["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalCoerce.to-local-date-time",obj);
}
}
});
/**
 * convert `obj` to a local goog.date
 *                           DateTime instance retaining time fields.
 */
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 == null)))))){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
return cljs_time$local$ILocalCoerce$to_local_date_time$dyn_21527.call(null,obj);
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first.call(null,(function (){var iter__4564__auto__ = (function cljs_time$local$from_local_string_$_iter__21528(s__21529){
return (new cljs.core.LazySeq(null,(function (){
var s__21529__$1 = s__21529;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21529__$1);
if(temp__5457__auto__){
var s__21529__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21529__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__21529__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__21531 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__21530 = (0);
while(true){
if((i__21530 < size__4563__auto__)){
var f = cljs.core._nth.call(null,c__4562__auto__,i__21530);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e21532){if((e21532 instanceof Error)){
var _ = e21532;
return null;
} else {
throw e21532;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__21531,d);

var G__21534 = (i__21530 + (1));
i__21530 = G__21534;
continue;
} else {
var G__21535 = (i__21530 + (1));
i__21530 = G__21535;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21531),cljs_time$local$from_local_string_$_iter__21528.call(null,cljs.core.chunk_rest.call(null,s__21529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21531),null);
}
} else {
var f = cljs.core.first.call(null,s__21529__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e21533){if((e21533 instanceof Error)){
var _ = e21533;
return null;
} else {
throw e21533;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$local$from_local_string_$_iter__21528.call(null,cljs.core.rest.call(null,s__21529__$2)));
} else {
var G__21536 = cljs.core.rest.call(null,s__21529__$2);
s__21529__$1 = G__21536;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,cljs.core.vals.call(null,cljs_time.local._STAR_local_formatters_STAR_));
})());
});
goog.object.set(cljs_time.local.ILocalCoerce,"null",true);

goog.object.set(cljs_time.local.to_local_date_time,"null",(function (_){
return null;
}));

(Date.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,date__$1));
}));

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,date_time__$1);
}));

goog.object.set(cljs_time.local.ILocalCoerce,"number",true);

goog.object.set(cljs_time.local.to_local_date_time,"number",(function (long$){
return cljs_time.local.as_local_date_time_from_time_zone.call(null,long$);
}));

goog.object.set(cljs_time.local.ILocalCoerce,"string",true);

goog.object.set(cljs_time.local.to_local_date_time,"string",(function (string){
return cljs_time.local.from_local_string.call(null,string);
}));
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__5457__auto__ = cljs_time.local.to_local_date_time.call(null,obj);
if(cljs.core.truth_(temp__5457__auto__)){
var dt = temp__5457__auto__;
var temp__5457__auto____$1 = format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_);
if(cljs.core.truth_(temp__5457__auto____$1)){
var fmt = temp__5457__auto____$1;
return cljs_time.format.unparse.call(null,fmt,dt);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=local.js.map
