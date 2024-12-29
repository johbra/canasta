// Compiled by ClojureScript 1.10.844 {}
goog.provide('canasta.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('canasta.views');
goog.require('canasta.events');
canasta.core.main = (function canasta$core$main(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"historien","historien",-1658302391)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637)], null));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canasta.views.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('canasta.core.main', canasta.core.main);
canasta.core.re_render = (function canasta$core$re_render(){
return canasta.core.main.call(null);
});
if((typeof canasta !== 'undefined') && (typeof canasta.core !== 'undefined') && (typeof canasta.core.start_up !== 'undefined')){
} else {
canasta.core.start_up = (function (){
canasta.core.main.call(null);

console.log(cljs.core.deref.call(null,re_frame.db.app_db));

return true;
})()
;
}

//# sourceMappingURL=core.js.map
