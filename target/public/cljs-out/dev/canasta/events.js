// Compiled by ClojureScript 1.10.844 {}
goog.provide('canasta.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('canasta.db');
goog.require('canasta.spiel');
goog.require('canasta.spieler');
goog.require('canasta.drop_file_stream');
goog.require('medley.core');
goog.require('cljs_time.core');
goog.require('cljs_time.local');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,canasta.db.default_db);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"historien","historien",-1658302391),(function (p__23279,_){
var map__23280 = p__23279;
var map__23280__$1 = cljs.core.__destructure_map.call(null,map__23280);
var db = cljs.core.get.call(null,map__23280__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-hist.edn",new cljs.core.Keyword(null,"historien","historien",-1658302391))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911),(function (p__23281,_){
var map__23282 = p__23281;
var map__23282__$1 = cljs.core.__destructure_map.call(null,map__23282);
var db = cljs.core.get.call(null,map__23282__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-namen.edn",new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"welt","welt",-1673248721),(function (p__23283,_){
var map__23284 = p__23283;
var map__23284__$1 = cljs.core.__destructure_map.call(null,map__23284);
var db = cljs.core.get.call(null,map__23284__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"welt","welt",-1673248721))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"speichere-welt","speichere-welt",-66606649),(function (p__23285,_){
var map__23286 = p__23285;
var map__23286__$1 = cljs.core.__destructure_map.call(null,map__23286);
var db = cljs.core.get.call(null,map__23286__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_write_edn_to_dropbox.call(null,db,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"speichere-historien","speichere-historien",315157896),(function (p__23287,p__23288){
var map__23289 = p__23287;
var map__23289__$1 = cljs.core.__destructure_map.call(null,map__23289);
var db = cljs.core.get.call(null,map__23289__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23290 = p__23288;
var _ = cljs.core.nth.call(null,vec__23290,(0),null);
var historien = cljs.core.nth.call(null,vec__23290,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_write_edn_to_dropbox.call(null,historien,"r-hist.edn",new cljs.core.Keyword(null,"historie-gespeichert?","historie-gespeichert?",576306150))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),(function (p__23293,_){
var map__23294 = p__23293;
var map__23294__$1 = cljs.core.__destructure_map.call(null,map__23294);
var db = cljs.core.get.call(null,map__23294__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_file_exists_on_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"spiel-beendet","spiel-beendet",939572612),(function (p__23295,p__23296){
var map__23297 = p__23295;
var map__23297__$1 = cljs.core.__destructure_map.call(null,map__23297);
var db = cljs.core.get.call(null,map__23297__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23298 = p__23296;
var _ = cljs.core.nth.call(null,vec__23298,(0),null);
var historien = cljs.core.nth.call(null,vec__23298,(1),null);
var ___$1 = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speichere-historien","speichere-historien",315157896),historien], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_delete_file_from_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-exists","process-exists",-1809363622),(function (db,p__23301){
var vec__23302 = p__23301;
var _ = cljs.core.nth.call(null,vec__23302,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23302,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__23302,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-deleted","process-deleted",-1653007737),(function (db,p__23305){
var vec__23306 = p__23305;
var _ = cljs.core.nth.call(null,vec__23306,(0),null);
var db_key = cljs.core.nth.call(null,vec__23306,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__23306,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-written","process-written",-1697339618),(function (db,p__23309){
var vec__23310 = p__23309;
var _ = cljs.core.nth.call(null,vec__23310,(0),null);
var db_key = cljs.core.nth.call(null,vec__23310,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__23310,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-resp","process-resp",1829942856),(function (db,p__23313){
var vec__23314 = p__23313;
var _ = cljs.core.nth.call(null,vec__23314,(0),null);
var db_key = cljs.core.nth.call(null,vec__23314,(1),null);
var item = cljs.core.nth.call(null,vec__23314,(2),null);
var data = cljs.reader.read_string.call(null,item);
if(cljs.core._EQ_.call(null,db_key,new cljs.core.Keyword(null,"welt","welt",-1673248721))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,data);
} else {
if(cljs.core._EQ_.call(null,db_key,new cljs.core.Keyword(null,"historien","historien",-1658302391))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"hist-aus-datei","hist-aus-datei",-756700344),data,new cljs.core.Keyword(null,"historie","historie",893875268),data.call(null,(0)),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),data.call(null,(1)),new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),data.call(null,(2)),new cljs.core.Keyword(null,"monat","monat",-186829909),data.call(null,(3)),new cljs.core.Keyword(null,"jahr","jahr",1260355162),data.call(null,(4)),new cljs.core.Keyword(null,"loading","loading",-737050189),false);
} else {
return cljs.core.assoc.call(null,db,db_key,data,new cljs.core.Keyword(null,"loading","loading",-737050189),false);

}
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-resp","bad-resp",-1733432202),(function (db,p__23317){
var vec__23318 = p__23317;
var _ = cljs.core.nth.call(null,vec__23318,(0),null);
var db_key = cljs.core.nth.call(null,vec__23318,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__23318,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"resultat","resultat",1627423071),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__23321){
var vec__23322 = p__23321;
var _ = cljs.core.nth.call(null,vec__23322,(0),null);
var tln = cljs.core.nth.call(null,vec__23322,(1),null);
var index = cljs.core.nth.call(null,vec__23322,(2),null);
var runde = cljs.core.nth.call(null,vec__23322,(3),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),index], null),tln),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),index,new cljs.core.Keyword(null,"summe","summe",-650249817)], null),canasta.spieler.zwischen_summe.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(tln),(runde + (1))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"schliesse-runde-ab","schliesse-runde-ab",-2019928989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
var spiel = canasta.spiel.schliesse_runde_ab.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"spiel","spiel",-831112206),spiel,new cljs.core.Keyword(null,"historie","historie",893875268),canasta.spiel.registriere_sieger.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db),canasta.spiel.sieger.call(null,spiel)),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),canasta.spiel.registriere_sieger.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db),canasta.spiel.sieger.call(null,spiel)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"korrigiere-ergebnis","korrigiere-ergebnis",-721888138),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"historie","historie",893875268),canasta.spiel.eliminiere_sieger.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),canasta.spiel.eliminiere_sieger.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"spiel","spiel",-831112206),canasta.spiel.korrigiere.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"geber","geber",604746862),(function (db,p__23325){
var vec__23326 = p__23325;
var _ = cljs.core.nth.call(null,vec__23326,(0),null);
var geber = cljs.core.nth.call(null,vec__23326,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"geber","geber",604746862)], null),geber);
}));
canasta.events.voriger_Monat = (function canasta$events$voriger_Monat(monat){
if(cljs.core._EQ_.call(null,monat,(1))){
return (12);
} else {
return (monat - (1));
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"neues-spiel","neues-spiel",287296109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__23329){
var vec__23330 = p__23329;
var _ = cljs.core.nth.call(null,vec__23330,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23330,(1),null);
var laufender_monat = cljs_time.core.month.call(null,cljs_time.local.local_now.call(null));
var neuer_monat_QMARK_ = (!(cljs.core._EQ_.call(null,laufender_monat,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monat","monat",-186829909)], null))))));
var monatsbilanz = ((neuer_monat_QMARK_)?cljs.core.assoc.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db),canasta.events.voriger_Monat.call(null,laufender_monat),canasta.spiel.fuehrende.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db))):new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db));
var monatshistorie = ((neuer_monat_QMARK_)?medley.core.map_vals.call(null,(function (){
return (0);
}),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db)):new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"monat","monat",-186829909),laufender_monat,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),monatsbilanz,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),monatshistorie,new cljs.core.Keyword(null,"spiel","spiel",-831112206),canasta.spiel.neues_spiel.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911)], null)))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__23333){
var vec__23334 = p__23333;
var _ = cljs.core.nth.call(null,vec__23334,(0),null);
var bilanz = cljs.core.nth.call(null,vec__23334,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),bilanz);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"neues-jahr","neues-jahr",772090049),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__23337){
var vec__23338 = p__23337;
var _ = cljs.core.nth.call(null,vec__23338,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"historie","historie",893875268),new cljs.core.PersistentArrayMap(null, 2, ["Hannes",(0),"Meike",(0)], null),new cljs.core.Keyword(null,"jahr","jahr",1260355162),cljs_time.core.year.call(null,cljs_time.local.local_now.call(null)),new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),cljs.core.PersistentArrayMap.EMPTY);
}));

//# sourceMappingURL=events.js.map
