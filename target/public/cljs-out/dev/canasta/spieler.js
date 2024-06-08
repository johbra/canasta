// Compiled by ClojureScript 1.10.844 {}
goog.provide('canasta.spieler');
goog.require('cljs.core');
canasta.spieler.__GT_Spieler = (function canasta$spieler$__GT_Spieler(name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"resultate","resultate",-649999987),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"summe","summe",-650249817),(0)], null);
});
canasta.spieler.resultate = (function canasta$spieler$resultate(sp){
return new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(sp);
});
canasta.spieler.summe = (function canasta$spieler$summe(sp){
return new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sp);
});
canasta.spieler.spieler_name = (function canasta$spieler$spieler_name(sp){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(sp);
});
canasta.spieler.zwischen_summe = (function canasta$spieler$zwischen_summe(resultate,runde){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.take.call(null,runde,resultate));
});
canasta.spieler.neues_resultat = (function canasta$spieler$neues_resultat(sp,v,runde){
return cljs.core.assoc_in.call(null,sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resultate","resultate",-649999987),runde], null),v);
});
canasta.spieler.null_resultat = (function canasta$spieler$null_resultat(runde,sp){
return cljs.core.assoc_in.call(null,sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resultate","resultate",-649999987),runde], null),(0));
});

//# sourceMappingURL=spieler.js.map
