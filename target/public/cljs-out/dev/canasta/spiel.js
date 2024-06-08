// Compiled by ClojureScript 1.10.844 {}
goog.provide('canasta.spiel');
goog.require('cljs.core');
goog.require('canasta.spieler');
canasta.spiel.__GT_Spiel = (function canasta$spiel$__GT_Spiel(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"runde","runde",-1618531444),(0),new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),false,new cljs.core.Keyword(null,"sieger","sieger",-247971207),null,new cljs.core.Keyword(null,"geber","geber",604746862),null], null);
});
canasta.spiel.geber = (function canasta$spiel$geber(spiel){
return new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel);
});
canasta.spiel.runde = (function canasta$spiel$runde(spiel){
return new cljs.core.Keyword(null,"runde","runde",-1618531444).cljs$core$IFn$_invoke$arity$1(spiel);
});
canasta.spiel.teilnehmer = (function canasta$spiel$teilnehmer(spiel){
return new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel);
});
canasta.spiel.spiel_beendet_QMARK_ = (function canasta$spiel$spiel_beendet_QMARK_(spiel){
return new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863).cljs$core$IFn$_invoke$arity$1(spiel);
});
canasta.spiel.sieger = (function canasta$spiel$sieger(spiel){
return new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(spiel);
});
canasta.spiel.anzahl_teilnehmer = (function canasta$spiel$anzahl_teilnehmer(spiel){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel));
});
canasta.spiel.geber_festgelegt_QMARK_ = (function canasta$spiel$geber_festgelegt_QMARK_(spiel){
return (!((new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel) == null)));
});
canasta.spiel.neues_spiel = (function canasta$spiel$neues_spiel(sp_namen){
return cljs.core.assoc.call(null,canasta.spiel.__GT_Spiel.call(null),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.mapv.call(null,(function (p1__19605_SHARP_){
return canasta.spieler.__GT_Spieler.call(null,p1__19605_SHARP_);
}),sp_namen));
});
canasta.spiel.naechster_geber = (function canasta$spiel$naechster_geber(index,anzahl_spieler){
return cljs.core.mod.call(null,(index + (1)),anzahl_spieler);
});
canasta.spiel.vorheriger_geber = (function canasta$spiel$vorheriger_geber(index,anzahl_spieler){
if(cljs.core._EQ_.call(null,index,(0))){
return (anzahl_spieler - (1));
} else {
return (index - (1));
}
});
canasta.spiel.ergaenze_standard_werte_in_resultaten = (function canasta$spiel$ergaenze_standard_werte_in_resultaten(teilnehmer,runde){
return cljs.core.mapv.call(null,(function (p1__19606_SHARP_){
if((cljs.core.get.call(null,canasta.spieler.resultate.call(null,p1__19606_SHARP_),runde) == null)){
return canasta.spieler.null_resultat.call(null,runde,p1__19606_SHARP_);
} else {
return p1__19606_SHARP_;
}
}),teilnehmer);
});
canasta.spiel.schliesse_runde_ab = (function canasta$spiel$schliesse_runde_ab(spiel){
var teiln = canasta.spiel.ergaenze_standard_werte_in_resultaten.call(null,canasta.spiel.teilnehmer.call(null,spiel),canasta.spiel.runde.call(null,spiel));
var sieger = cljs.core.last.call(null,cljs.core.sort_by.call(null,(function (p1__19607_SHARP_){
return canasta.spieler.summe.call(null,p1__19607_SHARP_);
}),teiln));
var geber = canasta.spiel.naechster_geber.call(null,canasta.spiel.geber.call(null,spiel),cljs.core.count.call(null,teiln));
return cljs.core.assoc.call(null,spiel,new cljs.core.Keyword(null,"runde","runde",-1618531444),(canasta.spiel.runde.call(null,spiel) + (1)),new cljs.core.Keyword(null,"geber","geber",604746862),geber,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),teiln,new cljs.core.Keyword(null,"sieger","sieger",-247971207),(((canasta.spieler.summe.call(null,sieger) >= (5000)))?sieger:null),new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),(canasta.spieler.summe.call(null,sieger) >= (5000)));
});
canasta.spiel.registriere_sieger = (function canasta$spiel$registriere_sieger(historie,sieger){
if(cljs.core.truth_(sieger)){
return cljs.core.update.call(null,historie,canasta.spieler.spieler_name.call(null,sieger),cljs.core.inc);
} else {
return historie;
}
});
canasta.spiel.eliminiere_sieger = (function canasta$spiel$eliminiere_sieger(historie,sieger){
if(cljs.core.truth_(sieger)){
return cljs.core.update.call(null,historie,canasta.spieler.spieler_name.call(null,sieger),cljs.core.dec);
} else {
return historie;
}
});
canasta.spiel.korrigiere = (function canasta$spiel$korrigiere(spiel){
return cljs.core.assoc.call(null,cljs.core.update.call(null,spiel,new cljs.core.Keyword(null,"runde","runde",-1618531444),cljs.core.dec),new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),false,new cljs.core.Keyword(null,"sieger","sieger",-247971207),null,new cljs.core.Keyword(null,"geber","geber",604746862),canasta.spiel.vorheriger_geber.call(null,canasta.spiel.geber.call(null,spiel),cljs.core.count.call(null,canasta.spiel.teilnehmer.call(null,spiel))));
});
canasta.spiel.resultat_in_runde = (function canasta$spiel$resultat_in_runde(tln,runde){
var resultate = new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(tln);
if((runde >= cljs.core.count.call(null,resultate))){
return (0);
} else {
return resultate.call(null,runde);
}
});
canasta.spiel.fuehrende = (function canasta$spiel$fuehrende(monatshistorie){
if(cljs.core.empty_QMARK_.call(null,monatshistorie)){
return "";
} else {
return cljs.core.key.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.val,monatshistorie));
}
});

//# sourceMappingURL=spiel.js.map
