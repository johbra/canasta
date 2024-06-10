// Compiled by ClojureScript 1.10.844 {}
goog.provide('canasta.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('canasta.subs');
goog.require('canasta.events');
goog.require('canasta.spiel');
goog.require('canasta.spieler');
goog.require('re_com.core');
goog.require('cljs_time.local');
goog.require('cljs_time.core');
canasta.views.spielerbreite = (85);
canasta.views.monatsnamen = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","M\u00E4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"], null);
canasta.views.gewonnene_spiele = (function canasta$views$gewonnene_spiele(historie,monatshistorie){
var monat = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monat","monat",-186829909)], null)));
var jahr = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jahr","jahr",1260355162)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Gewonnene Spiele: "], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),canasta.views.monatsnamen.call(null,(monat - (1)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,monatshistorie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,monatshistorie)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.second.call(null,monatshistorie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.second.call(null,monatshistorie)))].join('')], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),jahr], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,historie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,historie)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.second.call(null,historie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.second.call(null,historie)))].join('')], null)], null)], null)], null)], null)], null)], null);
});
canasta.views.monatsbilanz_tabelle = (function canasta$views$monatsbilanz_tabelle(){
var monate = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12pt"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"70px",new cljs.core.Keyword(null,"child","child",623967545),"Monat"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"70px",new cljs.core.Keyword(null,"child","child",623967545),"Sieger"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4564__auto__ = (function canasta$views$monatsbilanz_tabelle_$_iter__26577(s__26578){
return (new cljs.core.LazySeq(null,(function (){
var s__26578__$1 = s__26578;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26578__$1);
if(temp__5457__auto__){
var s__26578__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26578__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__26578__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__26580 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__26579 = (0);
while(true){
if((i__26579 < size__4563__auto__)){
var m = cljs.core._nth.call(null,c__4562__auto__,i__26579);
cljs.core.chunk_append.call(null,b__26580,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"70px",new cljs.core.Keyword(null,"child","child",623967545),canasta.views.monatsnamen.call(null,(cljs.core.key.call(null,m) - (1)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"70px",new cljs.core.Keyword(null,"child","child",623967545),cljs.core.val.call(null,m)], null)], null)], null));

var G__26581 = (i__26579 + (1));
i__26579 = G__26581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26580),canasta$views$monatsbilanz_tabelle_$_iter__26577.call(null,cljs.core.chunk_rest.call(null,s__26578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26580),null);
}
} else {
var m = cljs.core.first.call(null,s__26578__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"70px",new cljs.core.Keyword(null,"child","child",623967545),canasta.views.monatsnamen.call(null,(cljs.core.key.call(null,m) - (1)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"70px",new cljs.core.Keyword(null,"child","child",623967545),cljs.core.val.call(null,m)], null)], null)], null),canasta$views$monatsbilanz_tabelle_$_iter__26577.call(null,cljs.core.rest.call(null,s__26578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,monate);
})())], null)], null)], null);
});
canasta.views.menue = (function canasta$views$menue(){
var gespeichertes_spiel_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"label","label",1718410804),"Neues Spiel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"neues-spiel","neues-spiel",287296109)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"label","label",1718410804),"Begonnenes Spiel fortsetzen",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"welt","welt",-1673248721)], null));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not.call(null,gespeichertes_spiel_QMARK_)], null)], null)], null);
});
canasta.views.fehlende_dateien_anzeigen = (function canasta$views$fehlende_dateien_anzeigen(historie,spieler_namen){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,spieler_namen))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"body","body",-2049205669),"keine Spielernamen angegeben"], null):null),((cljs.core.not.call(null,historie))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"body","body",-2049205669),"Historie fehlt"], null):null)], null)], null);
});
canasta.views.sum_strich = (function canasta$views$sum_strich(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),canasta.views.spielerbreite], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"20",new cljs.core.Keyword(null,"y1","y1",589123466),"0",new cljs.core.Keyword(null,"x2","x2",-1362513475),canasta.views.spielerbreite,new cljs.core.Keyword(null,"y2","y2",-718691301),"0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null)], null)], null);
});
canasta.views.ergebnis_fuer = (function canasta$views$ergebnis_fuer(teilnehmer,runde){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(runde)], null),cljs.core.doall.call(null,cljs.core.mapv.call(null,(function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canasta.views.spielerbreite),"px"].join(''),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(canasta.spiel.resultat_in_runde.call(null,tln,(runde - (1))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tln], null));
}),teilnehmer)));
});
canasta.views.zwischensumme = (function canasta$views$zwischensumme(spiel,runde){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"3px",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"child","child",623967545),""], null),cljs.core.repeat.call(null,canasta.spiel.anzahl_teilnehmer.call(null,spiel),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canasta.views.sum_strich], null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"child","child",623967545),""], null),cljs.core.doall.call(null,cljs.core.mapv.call(null,(function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canasta.views.spielerbreite),"px"].join(''),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(canasta.spieler.zwischen_summe.call(null,canasta.spieler.resultate.call(null,tln),runde))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tln], null));
}),canasta.spiel.teilnehmer.call(null,spiel))))], null)], null);
});
canasta.views.korrektur_knopf = (function canasta$views$korrektur_knopf(runde,alle_runden){
if(cljs.core._EQ_.call(null,runde,alle_runden)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"korrigiere",new cljs.core.Keyword(null,"class","class",-2030961996),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrigiere-ergebnis","korrigiere-ergebnis",-721888138)], null));
})], null)], null);
} else {
return null;
}
});
canasta.views.ergebnis_tabelle = (function canasta$views$ergebnis_tabelle(spiel){
return cljs.core.doall.call(null,cljs.core.mapv.call(null,(function (r){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.call(null,canasta.views.ergebnis_fuer.call(null,canasta.spiel.teilnehmer.call(null,spiel),r),canasta.views.korrektur_knopf.call(null,r,canasta.spiel.runde.call(null,spiel)))], null),(((r > (1)))?canasta.views.zwischensumme.call(null,spiel,r):null))], null);
}),cljs.core.range.call(null,(1),(canasta.spiel.runde.call(null,spiel) + (1)))));
});
canasta.views.geber_anzeige = (function canasta$views$geber_anzeige(spiel,namen){
if(cljs.core.not.call(null,canasta.spiel.spiel_beendet_QMARK_.call(null,spiel))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),namen.call(null,canasta.spiel.geber.call(null,spiel))], null)," muss geben."], null)], null)], null);
} else {
return null;
}
});
canasta.views.kopfzeile = (function canasta$views$kopfzeile(namen){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rTableHead",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"child","child",623967545),"Rde."], null),cljs.core.doall.call(null,cljs.core.mapv.call(null,(function (s){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rTableHead",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canasta.views.spielerbreite),"px"].join(''),new cljs.core.Keyword(null,"child","child",623967545),s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null));
}),namen)))], null);
});
canasta.views.ergebnis_eingabe = (function canasta$views$ergebnis_eingabe(spiel){
var runde = canasta.spiel.runde.call(null,spiel);
var alle_teilnehmer = canasta.spiel.teilnehmer.call(null,spiel);
return cljs.core.doall.call(null,cljs.core.mapv.call(null,(function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.get.call(null,canasta.spieler.resultate.call(null,tln),runde))?cljs.core.get.call(null,canasta.spieler.resultate.call(null,tln),runde):"")),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26582_SHARP_){
var v = parseInt(p1__26582_SHARP_);
var index = alle_teilnehmer.indexOf(tln);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resultat","resultat",1627423071),canasta.spieler.neues_resultat.call(null,tln,v,runde),index,runde], null));
}),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361),/^[-+]?[0-9]*$/,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canasta.views.spielerbreite),"px"].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"beige"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tln], null));
}),alle_teilnehmer));
});
canasta.views.naechste_runde = (function canasta$views$naechste_runde(namen,spiel){
var runde = canasta.spiel.runde.call(null,spiel);
var _ = ((cljs.core.not.call(null,canasta.spiel.spiel_beendet_QMARK_.call(null,spiel)))?re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speichere-welt","speichere-welt",-66606649)], null)):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"12px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),cljs.core.str.cljs$core$IFn$_invoke$arity$1((runde + (1)))], null)], null),canasta.views.ergebnis_eingabe.call(null,spiel),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"speichern",new cljs.core.Keyword(null,"class","class",-2030961996),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schliesse-runde-ab","schliesse-runde-ab",-2019928989)], null));
})], null)], null),canasta.views.geber_anzeige.call(null,spiel,namen))], null);
});
canasta.views.geber_auswahl = (function canasta$views$geber_auswahl(namen){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"12px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Geber festegen!"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"6em",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null),new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"?",new cljs.core.Keyword(null,"label","label",1718410804),"?"], null),cljs.core.mapv.call(null,(function (n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),n,new cljs.core.Keyword(null,"label","label",1718410804),n], null);
}),namen)),new cljs.core.Keyword(null,"model","model",331153215),"?",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26583_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geber","geber",604746862),namen.indexOf(p1__26583_SHARP_)], null));
})], null)], null)], null);
});
canasta.views.spielablauf = (function canasta$views$spielablauf(namen,historie,monatshistorie,monatsbilanz){
var spiel = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206)], null)));
var _ = (cljs.core.truth_(canasta.spiel.spiel_beendet_QMARK_.call(null,spiel))?re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel-beendet","spiel-beendet",939572612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [historie,monatshistorie,monatsbilanz], null)], null)):null);
var jahressieg = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jahressieg","jahressieg",885034826)], null)));
if(cljs.core.truth_(spiel)){
if(cljs.core.truth_(jahressieg)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"gewinner",new cljs.core.Keyword(null,"child","child",623967545),["Jahressieg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cljs.core.first.call(null,cljs.core.frequencies.call(null,cljs.core.vals.call(null,monatsbilanz)))))].join('')], null);
} else {
if((!(canasta.spiel.geber_festgelegt_QMARK_.call(null,spiel)))){
return canasta.views.geber_auswahl.call(null,cljs.core.vec.call(null,namen));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"35px"], null),canasta.views.kopfzeile.call(null,namen),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"height","height",1025178622),"700px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"800px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.call(null,canasta.views.ergebnis_tabelle.call(null,spiel),((cljs.core.not.call(null,canasta.spiel.spiel_beendet_QMARK_.call(null,spiel)))?canasta.views.naechste_runde.call(null,namen,spiel):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"gewinner",new cljs.core.Keyword(null,"child","child",623967545),["Gewonnen hat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(canasta.spieler.spieler_name.call(null,canasta.spiel.sieger.call(null,spiel)))].join('')], null)))], null)], null)], null)], null);
}
}
} else {
return null;
}
});
canasta.views.main_panel = (function canasta$views$main_panel(){
var historie = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"historie","historie",893875268)], null)));
var monatshistorie = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214)], null)));
var monatsbilanz = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633)], null)));
var spieler_namen = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911)], null)));
if(cljs.core.truth_((function (){var and__4149__auto__ = historie;
if(cljs.core.truth_(and__4149__auto__)){
return spieler_namen;
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Canasta",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canasta.views.menue], null)], null),canasta.views.gewonnene_spiele.call(null,historie,monatshistorie),canasta.views.monatsbilanz_tabelle.call(null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [canasta.views.spielablauf,spieler_namen,historie,monatshistorie,monatsbilanz], null)], null)], null);
} else {
return canasta.views.fehlende_dateien_anzeigen.call(null,historie,spieler_namen);
}
});

//# sourceMappingURL=views.js.map
