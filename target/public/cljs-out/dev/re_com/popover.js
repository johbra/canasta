// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.popover');
goog.require('cljs.core');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.close_button');
goog.require('re_com.validate');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.ratom');
re_com.popover.point = (function re_com$popover$point(x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)," "].join('');
});
/**
 * Return the vector of the two keywords formed by splitting another keyword 'kw' on an internal delimiter (usually '-')
 * (split-keyword  :above-left  "-") => [:above :left]
 */
re_com.popover.split_keyword = (function re_com$popover$split_keyword(kw,delimiter){
var keywords = clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw),cljs.core.re_pattern.call(null,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),":]"].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,keywords.call(null,(1))),cljs.core.keyword.call(null,keywords.call(null,(2)))], null);
});
/**
 * Determine values for :left :right :top :bottom CSS styles.
 * - pop-orient    What side of the anchor the popover will be attached to. One of :above :below :left :right
 * - p-width       The px width of the popover after it has been rendered
 * - p-height      The px height of the popover after it has been rendered
 * - pop-offset    The number of pixels the popover is offset from it's natural position in relation to the popover-arrow (ugh, hard to explain)
 * - arrow-length  The px length of the arrow (from the point to middle of arrow base)
 * - arrow-gap     The px distance between the anchor and the arrow tip. Positive numbers push the popover away from the anchor
 *   
 */
re_com.popover.calc_popover_pos = (function re_com$popover$calc_popover_pos(pop_orient,p_width,p_height,pop_offset,arrow_length,arrow_gap){
var total_offset = (arrow_length + arrow_gap);
var popover_left = (function (){var G__22761 = pop_orient;
var G__22761__$1 = (((G__22761 instanceof cljs.core.Keyword))?G__22761.fqn:null);
switch (G__22761__$1) {
case "left":
return "initial";

break;
case "right":
return re_com.util.px.call(null,total_offset);

break;
case "above":
case "below":
return re_com.util.px.call(null,(function (){var or__4160__auto__ = pop_offset;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (p_width / (2));
}
})(),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22761__$1)].join('')));

}
})();
var popover_top = (function (){var G__22762 = pop_orient;
var G__22762__$1 = (((G__22762 instanceof cljs.core.Keyword))?G__22762.fqn:null);
switch (G__22762__$1) {
case "left":
case "right":
return re_com.util.px.call(null,(function (){var or__4160__auto__ = pop_offset;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (p_height / (2));
}
})(),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
case "above":
return "initial";

break;
case "below":
return re_com.util.px.call(null,total_offset);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22762__$1)].join('')));

}
})();
var popover_right = (function (){var G__22763 = pop_orient;
var G__22763__$1 = (((G__22763 instanceof cljs.core.Keyword))?G__22763.fqn:null);
switch (G__22763__$1) {
case "left":
return re_com.util.px.call(null,total_offset);

break;
case "right":
return null;

break;
case "above":
return null;

break;
case "below":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22763__$1)].join('')));

}
})();
var popover_bottom = (function (){var G__22764 = pop_orient;
var G__22764__$1 = (((G__22764 instanceof cljs.core.Keyword))?G__22764.fqn:null);
switch (G__22764__$1) {
case "left":
return null;

break;
case "right":
return null;

break;
case "above":
return re_com.util.px.call(null,total_offset);

break;
case "below":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22764__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),popover_left,new cljs.core.Keyword(null,"top","top",-1856271961),popover_top,new cljs.core.Keyword(null,"right","right",-452581833),popover_right,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),popover_bottom], null);
});
/**
 * Calculate the optimal :position value that results in the least amount of clipping by the screen edges
 *   Taken from: https://github.com/Lambda-X/cljs-repl-web/blob/0.3.1/src/cljs/cljs_repl_web/views/utils.cljs#L52
 *   Thanks to @richiardiandrea and @tomek for this code
 */
re_com.popover.calculate_optimal_position = (function re_com$popover$calculate_optimal_position(p__22769){
var vec__22770 = p__22769;
var x = cljs.core.nth.call(null,vec__22770,(0),null);
var y = cljs.core.nth.call(null,vec__22770,(1),null);
var w = window.innerWidth;
var h = window.innerHeight;
var h_threshold_left = cljs.core.quot.call(null,w,(3));
var h_threshold_cent = ((2) * h_threshold_left);
var h_position = (((x < h_threshold_left))?"right":(((x < h_threshold_cent))?"center":"left"
));
var v_threshold = cljs.core.quot.call(null,h,(2));
var v_position = (((y < v_threshold))?"below":"above");
return cljs.core.keyword.call(null,[v_position,"-",h_position].join(''));
});
/**
 * Given a node reference, calculate the absolute x and y coordinates of the node's midpoint
 */
re_com.popover.calc_element_midpoint = (function re_com$popover$calc_element_midpoint(node){
var bounding_rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((bounding_rect.right + bounding_rect.left) / (2)),((bounding_rect.bottom + bounding_rect.top) / (2))], null);
});
/**
 * Render the triangle which connects the popover to the anchor (using SVG)
 */
re_com.popover.popover_arrow = (function re_com$popover$popover_arrow(orientation,pop_offset,arrow_length,arrow_width,grey_arrow_QMARK_,no_border_QMARK_,popover_color,popover_border_color){
var half_arrow_width = (arrow_width / (2));
var arrow_shape = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),[re_com.popover.point.call(null,(0),(0)),re_com.popover.point.call(null,arrow_length,half_arrow_width),re_com.popover.point.call(null,(0),arrow_width)].join(''),new cljs.core.Keyword(null,"right","right",-452581833),[re_com.popover.point.call(null,arrow_length,(0)),re_com.popover.point.call(null,(0),half_arrow_width),re_com.popover.point.call(null,arrow_length,arrow_width)].join(''),new cljs.core.Keyword(null,"above","above",-1286866470),[re_com.popover.point.call(null,(0),(0)),re_com.popover.point.call(null,half_arrow_width,arrow_length),re_com.popover.point.call(null,arrow_width,(0))].join(''),new cljs.core.Keyword(null,"below","below",-926774883),[re_com.popover.point.call(null,(0),arrow_length),re_com.popover.point.call(null,half_arrow_width,(0)),re_com.popover.point.call(null,arrow_width,arrow_length)].join('')], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"popover-arrow",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",(function (){var G__22773 = orientation;
var G__22773__$1 = (((G__22773 instanceof cljs.core.Keyword))?G__22773.fqn:null);
switch (G__22773__$1) {
case "left":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case "right":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "above":
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018);

break;
case "below":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22773__$1)].join('')));

}
})(),re_com.util.px.call(null,arrow_length,new cljs.core.Keyword(null,"negative","negative",-1562068438)),(function (){var G__22774 = orientation;
var G__22774__$1 = (((G__22774 instanceof cljs.core.Keyword))?G__22774.fqn:null);
switch (G__22774__$1) {
case "left":
case "right":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
case "above":
case "below":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22774__$1)].join('')));

}
})(),(((pop_offset == null))?"50%":re_com.util.px.call(null,pop_offset)),(function (){var G__22775 = orientation;
var G__22775__$1 = (((G__22775 instanceof cljs.core.Keyword))?G__22775.fqn:null);
switch (G__22775__$1) {
case "left":
case "right":
return new cljs.core.Keyword(null,"margin-top","margin-top",392161226);

break;
case "above":
case "below":
return new cljs.core.Keyword(null,"margin-left","margin-left",2015598377);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22775__$1)].join('')));

}
})(),re_com.util.px.call(null,half_arrow_width,new cljs.core.Keyword(null,"negative","negative",-1562068438)),new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px.call(null,(function (){var G__22776 = orientation;
var G__22776__$1 = (((G__22776 instanceof cljs.core.Keyword))?G__22776.fqn:null);
switch (G__22776__$1) {
case "left":
case "right":
return arrow_length;

break;
case "above":
case "below":
return arrow_width;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22776__$1)].join('')));

}
})()),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px.call(null,(function (){var G__22777 = orientation;
var G__22777__$1 = (((G__22777 instanceof cljs.core.Keyword))?G__22777.fqn:null);
switch (G__22777__$1) {
case "left":
case "right":
return arrow_width;

break;
case "above":
case "below":
return arrow_length;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22777__$1)].join('')));

}
})())])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),arrow_shape.call(null,orientation),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(popover_color)?popover_color:(cljs.core.truth_(grey_arrow_QMARK_)?"#f7f7f7":"white")),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (){var or__4160__auto__ = popover_border_color;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.truth_(no_border_QMARK_)){
return null;
} else {
return "rgba(0, 0, 0, .2)";
}
}
})(),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1"], null)], null)], null)], null);
});
re_com.popover.backdrop_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the backdrop is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Renders a backdrop div which fills the entire page and responds to clicks on it. Can also specify how tranparent it should be
 */
re_com.popover.backdrop = (function re_com$popover$backdrop(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22786 = arguments.length;
var i__4772__auto___22787 = (0);
while(true){
if((i__4772__auto___22787 < len__4771__auto___22786)){
args__4777__auto__.push((arguments[i__4772__auto___22787]));

var G__22788 = (i__4772__auto___22787 + (1));
i__4772__auto___22787 = G__22788;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (p__22784){
var map__22785 = p__22784;
var map__22785__$1 = cljs.core.__destructure_map.call(null,map__22785);
var args = map__22785__$1;
var opacity = cljs.core.get.call(null,map__22785__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var on_click = cljs.core.get.call(null,map__22785__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var class$ = cljs.core.get.call(null,map__22785__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.backdrop_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["noselect rc-backdrop ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (){var or__4160__auto____$1 = opacity;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return 0.0;
}
})()], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
on_click.call(null);

return null;
})], null),re_com.debug.__GT_attr.call(null,args))], null);
}
}));

(re_com.popover.backdrop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.backdrop.cljs$lang$applyTo = (function (seq22783){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22783));
}));

re_com.popover.popover_title_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an r/atom. When the value is true, the popover shows."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. Default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-callback","close-callback",651188974),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function which takes no params and returns nothing. Called when the close button is pressed. Not required if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing?"], null)," atom passed in OR ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":close-button?"], null)," is set to false"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Renders a title at the top of a popover with an optional close button on the far right
 */
re_com.popover.popover_title = (function re_com$popover$popover_title(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22792 = arguments.length;
var i__4772__auto___22793 = (0);
while(true){
if((i__4772__auto___22793 < len__4771__auto___22792)){
args__4777__auto__.push((arguments[i__4772__auto___22793]));

var G__22794 = (i__4772__auto___22793 + (1));
i__4772__auto___22793 = G__22794;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__22790){
var map__22791 = p__22790;
var map__22791__$1 = cljs.core.__destructure_map.call(null,map__22791);
var args = map__22791__$1;
var showing_QMARK_ = cljs.core.get.call(null,map__22791__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var title = cljs.core.get.call(null,map__22791__$1,new cljs.core.Keyword(null,"title","title",636505583));
var close_button_QMARK_ = cljs.core.get.call(null,map__22791__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var close_callback = cljs.core.get.call(null,map__22791__$1,new cljs.core.Keyword(null,"close-callback","close-callback",651188974));
var class$ = cljs.core.get.call(null,map__22791__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_title_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var close_button_QMARK___$1 = (((close_button_QMARK_ == null))?true:close_button_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["popover-title rc-popover-title ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null))], null),re_com.debug.__GT_attr.call(null,args)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),189], null)),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,(cljs.core.truth_(close_button_QMARK___$1)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),195], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(close_callback)){
return close_callback.call(null);
} else {
return cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
}
}),new cljs.core.Keyword(null,"div-size","div-size",1661625995),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(26),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),(-1),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(-5)], null):null)], null)], null)], null);
}
}));

(re_com.popover.popover_title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_title.cljs$lang$applyTo = (function (seq22789){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22789));
}));

re_com.popover.next_even_integer = (function re_com$popover$next_even_integer(num){
return ((((num + (1)) / (2)) | (0)) * (2));
});
re_com.popover.calc_pop_offset = (function re_com$popover$calc_pop_offset(arrow_pos,position_offset,p_width,p_height){
var G__22795 = arrow_pos;
var G__22795__$1 = (((G__22795 instanceof cljs.core.Keyword))?G__22795.fqn:null);
switch (G__22795__$1) {
case "center":
return null;

break;
case "right":
return ((20) + position_offset);

break;
case "below":
return ((20) + position_offset);

break;
case "left":
if(cljs.core.truth_(p_width)){
return ((p_width - (25)) - position_offset);
} else {
return p_width;
}

break;
case "above":
if(cljs.core.truth_(p_height)){
return ((p_height - (25)) - position_offset);
} else {
return p_height;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22795__$1)].join('')));

}
});
re_com.popover.popover_clipping = (function re_com$popover$popover_clipping(node){
var viewport_width = window.innerWidth;
var viewport_height = window.innerHeight;
var bounding_rect = node.getBoundingClientRect();
var left = bounding_rect.left;
var right = bounding_rect.right;
var top = bounding_rect.top;
var bottom = bounding_rect.bottom;
var clip_left = (((left < (0)))?(- left):null);
var clip_right = (((right > viewport_width))?(right - viewport_width):null);
var clip_top = (((top < (0)))?(- top):null);
var clip_bottom = (((bottom > viewport_height))?(bottom - viewport_height):null);
return (((!((clip_left == null)))) || ((!((clip_right == null)))) || ((!((clip_top == null)))) || ((!((clip_bottom == null)))));
});
re_com.popover.popover_border_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a vector of component markups"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover width"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"auto",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"color of the popover border, including the arrow"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(-1),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the horiztonal offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the vertical offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | markup",new cljs.core.Keyword(null,"description","description",-1428560544),"describes a title"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_border = (function re_com$popover$popover_border(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22809 = arguments.length;
var i__4772__auto___22810 = (0);
while(true){
if((i__4772__auto___22810 < len__4771__auto___22809)){
args__4777__auto__.push((arguments[i__4772__auto___22810]));

var G__22811 = (i__4772__auto___22810 + (1));
i__4772__auto___22810 = G__22811;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic = (function (p__22798){
var map__22799 = p__22798;
var map__22799__$1 = cljs.core.__destructure_map.call(null,map__22799);
var args = map__22799__$1;
var position = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var position_offset = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var title = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"title","title",636505583));
var src = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_border_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var pop_id = cljs.core.gensym.call(null,"popover-");
var rendered_once = reagent.core.atom.call(null,false);
var ready_to_show_QMARK_ = reagent.core.atom.call(null,false);
var p_width = reagent.core.atom.call(null,(0));
var p_height = reagent.core.atom.call(null,(0));
var pop_offset = reagent.core.atom.call(null,(0));
var found_optimal = reagent.core.atom.call(null,false);
var calc_metrics = (function (pos){
var popover_elem = re_com.util.get_element_by_id.call(null,pop_id);
var vec__22800 = re_com.popover.split_keyword.call(null,pos,"-");
var orientation = cljs.core.nth.call(null,vec__22800,(0),null);
var arrow_pos = cljs.core.nth.call(null,vec__22800,(1),null);
var grey_arrow_QMARK_ = (function (){var and__4149__auto__ = title;
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"below","below",-926774883))) || (cljs.core._EQ_.call(null,arrow_pos,new cljs.core.Keyword(null,"below","below",-926774883))));
} else {
return and__4149__auto__;
}
})();
cljs.core.reset_BANG_.call(null,p_width,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientWidth):(0)));

cljs.core.reset_BANG_.call(null,p_height,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientHeight):(0)));

cljs.core.reset_BANG_.call(null,pop_offset,re_com.popover.calc_pop_offset.call(null,arrow_pos,position_offset,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orientation,grey_arrow_QMARK_], null);
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-border",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return cljs.core.reset_BANG_.call(null,rendered_once,true);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var pop_border_node = reagent.dom.dom_node.call(null,this$);
var clipped_QMARK_ = re_com.popover.popover_clipping.call(null,pop_border_node);
var anchor_node = pop_border_node.parentNode.parentNode.parentNode;
if(((clipped_QMARK_) && (cljs.core.not.call(null,cljs.core.deref.call(null,found_optimal))))){
cljs.core.reset_BANG_.call(null,position,re_com.popover.calculate_optimal_position.call(null,re_com.popover.calc_element_midpoint.call(null,anchor_node)));

cljs.core.reset_BANG_.call(null,found_optimal,true);
} else {
}

calc_metrics.call(null,cljs.core.deref.call(null,position));

return cljs.core.reset_BANG_.call(null,ready_to_show_QMARK_,true);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var re_com$popover$popover_border_render__delegate = function (p__22803){
var map__22804 = p__22803;
var map__22804__$1 = cljs.core.__destructure_map.call(null,map__22804);
var args__$1 = map__22804__$1;
var popover_border_color = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267));
var height = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var children = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var arrow_length = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset__$1 = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var margin_left = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var arrow_width = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var margin_top = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var width = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var src__$1 = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var title__$1 = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"title","title",636505583));
var arrow_gap = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var class$ = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position__$1 = cljs.core.get.call(null,map__22804__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_border_args_desc),args__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var vec__22805 = calc_metrics.call(null,cljs.core.deref.call(null,position__$1));
var orientation = cljs.core.nth.call(null,vec__22805,(0),null);
var grey_arrow_QMARK_ = cljs.core.nth.call(null,vec__22805,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover.fade.in","div.popover.fade.in",-106226512),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-popover-border ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),pop_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.deref.call(null,rendered_once))?(cljs.core.truth_(pop_id)?re_com.popover.calc_popover_pos.call(null,orientation,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height),cljs.core.deref.call(null,pop_offset),arrow_length,arrow_gap):null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"-10000px",new cljs.core.Keyword(null,"left","left",-399115937),"-10000px"], null)),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(popover_color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),popover_color], null):null),(cljs.core.truth_(popover_border_color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),popover_border_color], null):null),(cljs.core.truth_(tooltip_style_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null):null),(function (){var G__22808 = orientation;
var G__22808__$1 = (((G__22808 instanceof cljs.core.Keyword))?G__22808.fqn:null);
switch (G__22808__$1) {
case "left":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-2000px"], null);

break;
case "right":
case "above":
case "below":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22808__$1)].join('')));

}
})(),(cljs.core.truth_(margin_left)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_left], null):null),(cljs.core.truth_(margin_top)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top], null):null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref.call(null,ready_to_show_QMARK_))?"1":"0"),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null))], null),re_com.debug.__GT_attr.call(null,args__$1)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_arrow,orientation,cljs.core.deref.call(null,pop_offset),arrow_length,arrow_width,grey_arrow_QMARK_,tooltip_style_QMARK_,popover_color,popover_border_color], null),(cljs.core.truth_(title__$1)?title__$1:null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover-content","div.popover-content",1045719989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null)], null)], null),children)], null);
}
};
var re_com$popover$popover_border_render = function (var_args){
var p__22803 = null;
if (arguments.length > 0) {
var G__22813__i = 0, G__22813__a = new Array(arguments.length -  0);
while (G__22813__i < G__22813__a.length) {G__22813__a[G__22813__i] = arguments[G__22813__i + 0]; ++G__22813__i;}
  p__22803 = new cljs.core.IndexedSeq(G__22813__a,0,null);
} 
return re_com$popover$popover_border_render__delegate.call(this,p__22803);};
re_com$popover$popover_border_render.cljs$lang$maxFixedArity = 0;
re_com$popover$popover_border_render.cljs$lang$applyTo = (function (arglist__22814){
var p__22803 = cljs.core.seq(arglist__22814);
return re_com$popover$popover_border_render__delegate(p__22803);
});
re_com$popover$popover_border_render.cljs$core$IFn$_invoke$arity$variadic = re_com$popover$popover_border_render__delegate;
return re_com$popover$popover_border_render;
})()
], null));
}
}));

(re_com.popover.popover_border.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_border.cljs$lang$applyTo = (function (seq22797){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22797));
}));

re_com.popover.popover_content_wrapper_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"an atom or value. When the value is true, the popover shows.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"NOTE: "], null),"When used as direct ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":popover"], null)," arg in popover-anchor-wrapper, this arg will be injected automatically by popover-anchor-wrapper. If using your own popover function, you must add this yourself"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-injected","position-injected",205959080),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"NOTE: "], null),"See above NOTE for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing-injected?"], null),". Same applies"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. By passing true for this parameter, re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"indicates the opacity of the backdrop where 0.0=transparent, 1.0=opaque"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. The default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the popover body. Must be a single component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"color of the popover border, including the arrow"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(-1),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"border","border",1444987323),null,new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),null], null), null)),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Abstracts several components to handle the 90% of cases for general popovers and dialog boxes
 */
re_com.popover.popover_content_wrapper = (function re_com$popover$popover_content_wrapper(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22820 = arguments.length;
var i__4772__auto___22821 = (0);
while(true){
if((i__4772__auto___22821 < len__4771__auto___22820)){
args__4777__auto__.push((arguments[i__4772__auto___22821]));

var G__22822 = (i__4772__auto___22821 + (1));
i__4772__auto___22821 = G__22822;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__22816){
var map__22817 = p__22816;
var map__22817__$1 = cljs.core.__destructure_map.call(null,map__22817);
var args = map__22817__$1;
var no_clip_QMARK_ = cljs.core.get.call(null,map__22817__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_content_wrapper_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var left_offset = reagent.core.atom.call(null,(0));
var top_offset = reagent.core.atom.call(null,(0));
var position_no_clip_popover = (function re_com$popover$position_no_clip_popover(this$){
if(cljs.core.truth_(no_clip_QMARK_)){
var node = reagent.dom.dom_node.call(null,this$);
var popover_point_node = node.parentNode;
var bounding_rect = popover_point_node.getBoundingClientRect();
cljs.core.reset_BANG_.call(null,left_offset,bounding_rect.left);

return cljs.core.reset_BANG_.call(null,top_offset,bounding_rect.top);
} else {
return null;
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-content-wrapper",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return position_no_clip_popover.call(null,this$);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return position_no_clip_popover.call(null,this$);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var re_com$popover$popover_content_wrapper_render__delegate = function (p__22818){
var map__22819 = p__22818;
var map__22819__$1 = cljs.core.__destructure_map.call(null,map__22819);
var args__$1 = map__22819__$1;
var body = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var popover_border_color = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267));
var on_cancel = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var showing_injected_QMARK_ = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250));
var height = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var attr = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var popover_color = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var arrow_length = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var backdrop_opacity = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653));
var position_injected = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080));
var no_clip_QMARK___$1 = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
var close_button_QMARK_ = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var arrow_width = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var parts = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var arrow_gap = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var class$ = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_content_wrapper_args_desc),args__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
cljs.core.deref.call(null,position_injected);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["popover-content-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),(cljs.core.truth_(no_clip_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),re_com.util.px.call(null,cljs.core.deref.call(null,left_offset)),new cljs.core.Keyword(null,"top","top",-1856271961),re_com.util.px.call(null,cljs.core.deref.call(null,top_offset))], null):null),style)], null),re_com.debug.__GT_attr.call(null,args__$1),attr),(cljs.core.truth_((function (){var and__4149__auto__ = re_com.util.deref_or_value.call(null,showing_injected_QMARK_);
if(cljs.core.truth_(and__4149__auto__)){
return on_cancel;
} else {
return and__4149__auto__;
}
})())?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.backdrop,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),426], null)),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"class","class",-2030961996)], null),""),new cljs.core.Keyword(null,"opacity","opacity",397153780),backdrop_opacity,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel], null):null),new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_border,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),431], null)),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"class","class",-2030961996)], null),""),new cljs.core.Keyword(null,"position","position",-2011731912),position_injected,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),position_offset,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),tooltip_style_QMARK_,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color,new cljs.core.Keyword(null,"popover-border-color","popover-border-color",2142810267),popover_border_color,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),arrow_length,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),arrow_width,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),arrow_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),445], null)),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"class","class",-2030961996)], null),""),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_injected_QMARK_,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),close_button_QMARK_,new cljs.core.Keyword(null,"close-callback","close-callback",651188974),on_cancel], null):null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body], null)], null)], null);
}
};
var re_com$popover$popover_content_wrapper_render = function (var_args){
var p__22818 = null;
if (arguments.length > 0) {
var G__22823__i = 0, G__22823__a = new Array(arguments.length -  0);
while (G__22823__i < G__22823__a.length) {G__22823__a[G__22823__i] = arguments[G__22823__i + 0]; ++G__22823__i;}
  p__22818 = new cljs.core.IndexedSeq(G__22823__a,0,null);
} 
return re_com$popover$popover_content_wrapper_render__delegate.call(this,p__22818);};
re_com$popover$popover_content_wrapper_render.cljs$lang$maxFixedArity = 0;
re_com$popover$popover_content_wrapper_render.cljs$lang$applyTo = (function (arglist__22824){
var p__22818 = cljs.core.seq(arglist__22824);
return re_com$popover$popover_content_wrapper_render__delegate(p__22818);
});
re_com$popover$popover_content_wrapper_render.cljs$core$IFn$_invoke$arity$variadic = re_com$popover$popover_content_wrapper_render__delegate;
return re_com$popover$popover_content_wrapper_render;
})()
], null));
}
}));

(re_com.popover.popover_content_wrapper.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_content_wrapper.cljs$lang$applyTo = (function (seq22815){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22815));
}));

re_com.popover.popover_anchor_wrapper_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom or value. When the value is true, the popover shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the popover is attached to"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the popover body component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point-wrapper","point-wrapper",2115655364),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null), null)),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_anchor_wrapper = (function re_com$popover$popover_anchor_wrapper(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22835 = arguments.length;
var i__4772__auto___22836 = (0);
while(true){
if((i__4772__auto___22836 < len__4771__auto___22835)){
args__4777__auto__.push((arguments[i__4772__auto___22836]));

var G__22837 = (i__4772__auto___22836 + (1));
i__4772__auto___22836 = G__22837;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__22826){
var map__22827 = p__22826;
var map__22827__$1 = cljs.core.__destructure_map.call(null,map__22827);
var args = map__22827__$1;
var showing_QMARK_ = cljs.core.get.call(null,map__22827__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var position = cljs.core.get.call(null,map__22827__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var src = cljs.core.get.call(null,map__22827__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_anchor_wrapper_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var external_position = reagent.core.atom.call(null,position);
var internal_position = reagent.core.atom.call(null,cljs.core.deref.call(null,external_position));
var reset_on_hide = reagent.ratom.make_reaction.call(null,(function (){
if(cljs.core.truth_(re_com.util.deref_or_value.call(null,showing_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,internal_position,cljs.core.deref.call(null,external_position));
}
}));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-anchor-wrapper",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var re_com$popover$popover_anchor_wrapper_render__delegate = function (p__22828){
var map__22829 = p__22828;
var map__22829__$1 = cljs.core.__destructure_map.call(null,map__22829);
var args__$1 = map__22829__$1;
var showing_QMARK___$1 = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var position__$1 = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var anchor = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var popover = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"popover","popover",-1809582136));
var class$ = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var parts = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_anchor_wrapper_args_desc),args__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
cljs.core.deref.call(null,reset_on_hide);

if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_position),position__$1)){
cljs.core.reset_BANG_.call(null,external_position,position__$1);

cljs.core.reset_BANG_.call(null,internal_position,cljs.core.deref.call(null,external_position));
} else {
}

var vec__22830 = re_com.popover.split_keyword.call(null,cljs.core.deref.call(null,internal_position),"-");
var orientation = cljs.core.nth.call(null,vec__22830,(0),null);
var _arrow_pos = cljs.core.nth.call(null,vec__22830,(1),null);
var place_anchor_before_QMARK_ = (function (){var G__22833 = orientation;
var G__22833__$1 = (((G__22833 instanceof cljs.core.Keyword))?G__22833.fqn:null);
switch (G__22833__$1) {
case "left":
case "above":
return false;

break;
default:
return true;

}
})();
var flex_flow = (function (){var G__22834 = orientation;
var G__22834__$1 = (((G__22834 instanceof cljs.core.Keyword))?G__22834.fqn:null);
switch (G__22834__$1) {
case "left":
case "right":
return "row";

break;
default:
return "column";

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-popover-anchor-wrapper display-inline-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),style)], null),re_com.debug.__GT_attr.call(null,args__$1),attr),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-inline-flex rc-point-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-wrapper","point-wrapper",2115655364),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"auto"),re_com.box.flex_flow_style.call(null,flex_flow),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)))], null),(cljs.core.truth_(place_anchor_before_QMARK_)?anchor:null),(cljs.core.truth_(re_com.util.deref_or_value.call(null,showing_QMARK___$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-inline-flex rc-popover-point ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"auto"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(4)], null))], null),cljs.core.into.call(null,popover,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250),showing_QMARK___$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080),internal_position], null))], null):null),(cljs.core.truth_(place_anchor_before_QMARK_)?null:anchor)], null)], null);
}
};
var re_com$popover$popover_anchor_wrapper_render = function (var_args){
var p__22828 = null;
if (arguments.length > 0) {
var G__22840__i = 0, G__22840__a = new Array(arguments.length -  0);
while (G__22840__i < G__22840__a.length) {G__22840__a[G__22840__i] = arguments[G__22840__i + 0]; ++G__22840__i;}
  p__22828 = new cljs.core.IndexedSeq(G__22840__a,0,null);
} 
return re_com$popover$popover_anchor_wrapper_render__delegate.call(this,p__22828);};
re_com$popover$popover_anchor_wrapper_render.cljs$lang$maxFixedArity = 0;
re_com$popover$popover_anchor_wrapper_render.cljs$lang$applyTo = (function (arglist__22841){
var p__22828 = cljs.core.seq(arglist__22841);
return re_com$popover$popover_anchor_wrapper_render__delegate(p__22828);
});
re_com$popover$popover_anchor_wrapper_render.cljs$core$IFn$_invoke$arity$variadic = re_com$popover$popover_anchor_wrapper_render__delegate;
return re_com$popover$popover_anchor_wrapper_render;
})()
], null));
}
}));

(re_com.popover.popover_anchor_wrapper.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_anchor_wrapper.cljs$lang$applyTo = (function (seq22825){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22825));
}));

re_com.popover.popover_tooltip_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the text (or component) for the tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the tooltip shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.popover_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"controls background color of the tooltip. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for black or one of ",re_com.validate.popover_status_types_list," (although ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":validating"], null)," is only used by the input-text component)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the tooltip is attached to"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"specifies width of the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to popover-anchor-wrapper component)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency (applies to popover-anchor-wrapper component)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to popover-anchor-wrapper component)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),null,new cljs.core.Keyword(null,"close-button-container","close-button-container",838794188),null,new cljs.core.Keyword(null,"v-box","v-box",-1635293073),null], null), null)),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Renders text as a tooltip in Bootstrap popover style
 */
re_com.popover.popover_tooltip = (function re_com$popover$popover_tooltip(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22846 = arguments.length;
var i__4772__auto___22847 = (0);
while(true){
if((i__4772__auto___22847 < len__4771__auto___22846)){
args__4777__auto__.push((arguments[i__4772__auto___22847]));

var G__22848 = (i__4772__auto___22847 + (1));
i__4772__auto___22847 = G__22848;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (p__22843){
var map__22844 = p__22843;
var map__22844__$1 = cljs.core.__destructure_map.call(null,map__22844);
var args = map__22844__$1;
var anchor = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var on_cancel = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var attr = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var no_clip_QMARK_ = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true);
var close_button_QMARK_ = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var parts = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var src = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var showing_QMARK_ = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var style = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var status = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var label = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var position = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_tooltip_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var label__$1 = re_com.util.deref_or_value.call(null,label);
var popover_color = (function (){var G__22845 = status;
var G__22845__$1 = (((G__22845 instanceof cljs.core.Keyword))?G__22845.fqn:null);
switch (G__22845__$1) {
case "warning":
return "#f57c00";

break;
case "error":
return "#d50000";

break;
case "info":
return "#333333";

break;
case "success":
return "#13C200";

break;
default:
return "black";

}
})();
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__4160__auto____$1 = debug_as;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null))),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__4160__auto____$1 = position;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-popover-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),563], null)),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),no_clip_QMARK_,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),on_cancel,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),true,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color,new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 8px",new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(6),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(12),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(4),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),574], null)),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"info","info",-317069002)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px"], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(close_button_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),586], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-popover-tooltip-close-button-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-button-container","close-button-container",838794188),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/popover.cljs",new cljs.core.Keyword(null,"line","line",212345235),590], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-popover-tooltip-close-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(on_cancel)){
return on_cancel.call(null);
} else {
return cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
}
}),new cljs.core.Keyword(null,"div-size","div-size",1661625995),(15),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(5)], null)], null):null),label__$1], null)], null)], null)], null);
}
}));

(re_com.popover.popover_tooltip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.popover.popover_tooltip.cljs$lang$applyTo = (function (seq22842){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22842));
}));


//# sourceMappingURL=popover.js.map
