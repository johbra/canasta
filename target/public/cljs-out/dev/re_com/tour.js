// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.tour');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.box');
goog.require('re_com.buttons');
/**
 * Returns a map containing
 *   - A reagent atom for each tour step controlling popover show/hide (boolean)
 *   - A standard atom holding the current step (integer)
 *   - A copy of the steps parameter passed in, to determine the order for prev/next functions
 *   It sets the first step atom to true so that it will be initially shown
 *   Sample return value:
 *   {:steps [:step1 :step2 :step3]
 *   :current-step (atom 0)
 *   :step1 (reagent/atom true)
 *   :step2 (reagent/atom false)
 *   :step3 (reagent/atom false)}
 */
re_com.tour.make_tour = (function re_com$tour$make_tour(tour_spec){
var tour_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-step","current-step",-2023410137),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"steps","steps",-128433302),tour_spec], null);
return cljs.core.reduce.call(null,(function (p1__25597_SHARP_,p2__25598_SHARP_){
return cljs.core.assoc.call(null,p1__25597_SHARP_,p2__25598_SHARP_,reagent.core.atom.call(null,false));
}),tour_map,tour_spec);
});
/**
 * Resets all poover atoms to false
 */
re_com.tour.initialise_tour = (function re_com$tour$initialise_tour(tour){
return cljs.core.doall.call(null,(function (){var iter__4564__auto__ = (function re_com$tour$initialise_tour_$_iter__25599(s__25600){
return (new cljs.core.LazySeq(null,(function (){
var s__25600__$1 = s__25600;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25600__$1);
if(temp__5457__auto__){
var s__25600__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25600__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__25600__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__25602 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__25601 = (0);
while(true){
if((i__25601 < size__4563__auto__)){
var step = cljs.core._nth.call(null,c__4562__auto__,i__25601);
cljs.core.chunk_append.call(null,b__25602,cljs.core.reset_BANG_.call(null,step.call(null,tour),false));

var G__25603 = (i__25601 + (1));
i__25601 = G__25603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25602),re_com$tour$initialise_tour_$_iter__25599.call(null,cljs.core.chunk_rest.call(null,s__25600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25602),null);
}
} else {
var step = cljs.core.first.call(null,s__25600__$2);
return cljs.core.cons.call(null,cljs.core.reset_BANG_.call(null,step.call(null,tour),false),re_com$tour$initialise_tour_$_iter__25599.call(null,cljs.core.rest.call(null,s__25600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour));
})());
});
/**
 * Sets the first popover atom in the tour to true
 */
re_com.tour.start_tour = (function re_com$tour$start_tour(tour){
re_com.tour.initialise_tour.call(null,tour);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour),(0));

return cljs.core.reset_BANG_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour)).call(null,tour),true);
});
/**
 * Closes all tour popovers
 */
re_com.tour.finish_tour = (function re_com$tour$finish_tour(tour){
return re_com.tour.initialise_tour.call(null,tour);
});
re_com.tour.next_tour_step = (function re_com$tour$next_tour_step(tour){
var steps = new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour);
var old_step = cljs.core.deref.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour));
var new_step = (old_step + (1));
if((new_step < cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour)))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour),new_step);

cljs.core.reset_BANG_.call(null,cljs.core.nth.call(null,steps,old_step).call(null,tour),false);

return cljs.core.reset_BANG_.call(null,cljs.core.nth.call(null,steps,new_step).call(null,tour),true);
} else {
return null;
}
});
re_com.tour.prev_tour_step = (function re_com$tour$prev_tour_step(tour){
var steps = new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour);
var old_step = cljs.core.deref.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour));
var new_step = (old_step - (1));
if((new_step >= (0))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour),new_step);

cljs.core.reset_BANG_.call(null,cljs.core.nth.call(null,steps,old_step).call(null,tour),false);

return cljs.core.reset_BANG_.call(null,cljs.core.nth.call(null,steps,new_step).call(null,tour),true);
} else {
return null;
}
});
/**
 * Generate the hr and previous/next buttons markup.
 *   If first button in tour, don't generate a Previous button.
 *   If last button in tour, change Next button to a Finish button
 */
re_com.tour.make_tour_nav = (function re_com$tour$make_tour_nav(tour){
var on_first_button = cljs.core._EQ_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour)),(0));
var on_last_button = cljs.core._EQ_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"current-step","current-step",-2023410137).cljs$core$IFn$_invoke$arity$1(tour)),(cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(tour)) - (1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0px 10px"], null))], null)], null),((on_first_button)?null:new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/tour.cljs",new cljs.core.Keyword(null,"line","line",212345235),88], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
re_com.tour.prev_tour_step.call(null,tour);

return null;
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"15px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default rc-tour-btn-previous"], null)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/canasta/target/public/cljs-out/dev/re_com/tour.cljs",new cljs.core.Keyword(null,"line","line",212345235),94], null)),new cljs.core.Keyword(null,"label","label",1718410804),((on_last_button)?"Finish":"Next"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(on_last_button){
re_com.tour.finish_tour.call(null,tour);
} else {
re_com.tour.next_tour_step.call(null,tour);
}

return null;
}),new cljs.core.Keyword(null,"class","class",-2030961996),["btn-default ",((on_last_button)?"rc-tour-btn-finish":"rc-tour-btn-next")].join('')], null)], null);
});

//# sourceMappingURL=tour.js.map
