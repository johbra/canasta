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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"historien","historien",-1658302391),(function (p__26517,_){
var map__26518 = p__26517;
var map__26518__$1 = cljs.core.__destructure_map.call(null,map__26518);
var db = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-hist.edn",new cljs.core.Keyword(null,"historien","historien",-1658302391))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911),(function (p__26519,_){
var map__26520 = p__26519;
var map__26520__$1 = cljs.core.__destructure_map.call(null,map__26520);
var db = cljs.core.get.call(null,map__26520__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-namen.edn",new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"welt","welt",-1673248721),(function (p__26521,_){
var map__26522 = p__26521;
var map__26522__$1 = cljs.core.__destructure_map.call(null,map__26522);
var db = cljs.core.get.call(null,map__26522__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"welt","welt",-1673248721))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"speichere-welt","speichere-welt",-66606649),(function (p__26523,_){
var map__26524 = p__26523;
var map__26524__$1 = cljs.core.__destructure_map.call(null,map__26524);
var db = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_write_edn_to_dropbox.call(null,db,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"speichere-historien","speichere-historien",315157896),(function (p__26525,p__26526){
var map__26527 = p__26525;
var map__26527__$1 = cljs.core.__destructure_map.call(null,map__26527);
var db = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26528 = p__26526;
var _ = cljs.core.nth.call(null,vec__26528,(0),null);
var historien = cljs.core.nth.call(null,vec__26528,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_write_edn_to_dropbox.call(null,historien,"r-hist.edn",new cljs.core.Keyword(null,"historie-gespeichert?","historie-gespeichert?",576306150))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),(function (p__26531,_){
var map__26532 = p__26531;
var map__26532__$1 = cljs.core.__destructure_map.call(null,map__26532);
var db = cljs.core.get.call(null,map__26532__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_file_exists_on_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"spiel-beendet","spiel-beendet",939572612),(function (p__26533,p__26534){
var map__26535 = p__26533;
var map__26535__$1 = cljs.core.__destructure_map.call(null,map__26535);
var db = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26536 = p__26534;
var _ = cljs.core.nth.call(null,vec__26536,(0),null);
var historien = cljs.core.nth.call(null,vec__26536,(1),null);
var ___$1 = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speichere-historien","speichere-historien",315157896),historien], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_delete_file_from_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-exists","process-exists",-1809363622),(function (db,p__26539){
var vec__26540 = p__26539;
var _ = cljs.core.nth.call(null,vec__26540,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26540,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__26540,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-deleted","process-deleted",-1653007737),(function (db,p__26543){
var vec__26544 = p__26543;
var _ = cljs.core.nth.call(null,vec__26544,(0),null);
var db_key = cljs.core.nth.call(null,vec__26544,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__26544,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-written","process-written",-1697339618),(function (db,p__26547){
var vec__26548 = p__26547;
var _ = cljs.core.nth.call(null,vec__26548,(0),null);
var db_key = cljs.core.nth.call(null,vec__26548,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__26548,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-resp","process-resp",1829942856),(function (db,p__26551){
var vec__26552 = p__26551;
var _ = cljs.core.nth.call(null,vec__26552,(0),null);
var db_key = cljs.core.nth.call(null,vec__26552,(1),null);
var item = cljs.core.nth.call(null,vec__26552,(2),null);
var data = cljs.reader.read_string.call(null,item);
if(cljs.core._EQ_.call(null,db_key,new cljs.core.Keyword(null,"welt","welt",-1673248721))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,data);
} else {
if(cljs.core._EQ_.call(null,db_key,new cljs.core.Keyword(null,"historien","historien",-1658302391))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"hist-aus-datei","hist-aus-datei",-756700344),data,new cljs.core.Keyword(null,"historie","historie",893875268),data.call(null,(0)),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),data.call(null,(1)),new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),data.call(null,(2)),new cljs.core.Keyword(null,"loading","loading",-737050189),false);
} else {
return cljs.core.assoc.call(null,db,db_key,data,new cljs.core.Keyword(null,"loading","loading",-737050189),false);

}
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-resp","bad-resp",-1733432202),(function (db,p__26555){
var vec__26556 = p__26555;
var _ = cljs.core.nth.call(null,vec__26556,(0),null);
var db_key = cljs.core.nth.call(null,vec__26556,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__26556,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"resultat","resultat",1627423071),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__26559){
var vec__26560 = p__26559;
var _ = cljs.core.nth.call(null,vec__26560,(0),null);
var tln = cljs.core.nth.call(null,vec__26560,(1),null);
var index = cljs.core.nth.call(null,vec__26560,(2),null);
var runde = cljs.core.nth.call(null,vec__26560,(3),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),index], null),tln),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),index,new cljs.core.Keyword(null,"summe","summe",-650249817)], null),canasta.spieler.zwischen_summe.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(tln),(runde + (1))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"schliesse-runde-ab","schliesse-runde-ab",-2019928989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
var spiel = canasta.spiel.schliesse_runde_ab.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"spiel","spiel",-831112206),spiel,new cljs.core.Keyword(null,"historie","historie",893875268),canasta.spiel.registriere_sieger.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db),canasta.spiel.sieger.call(null,spiel)),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),canasta.spiel.registriere_sieger.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db),canasta.spiel.sieger.call(null,spiel)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"korrigiere-ergebnis","korrigiere-ergebnis",-721888138),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"historie","historie",893875268),canasta.spiel.eliminiere_sieger.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),canasta.spiel.eliminiere_sieger.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"spiel","spiel",-831112206),canasta.spiel.korrigiere.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"geber","geber",604746862),(function (db,p__26563){
var vec__26564 = p__26563;
var _ = cljs.core.nth.call(null,vec__26564,(0),null);
var geber = cljs.core.nth.call(null,vec__26564,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"geber","geber",604746862)], null),geber);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"neues-spiel","neues-spiel",287296109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__26567){
var vec__26568 = p__26567;
var _ = cljs.core.nth.call(null,vec__26568,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26568,(1),null);
var laufender_monat = new cljs.core.Keyword(null,"monat","monat",-186829909).cljs$core$IFn$_invoke$arity$1(db);
var neuer_monat_QMARK_ = (((laufender_monat > (cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db))) + (1)))) || (cljs.core._EQ_.call(null,laufender_monat,(2))));
var neues_jahr_QMARK_ = ((cljs.core._EQ_.call(null,(cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db))) + (1)),(12))) && (cljs.core._EQ_.call(null,laufender_monat,(1))));
var monatsbilanz = ((neues_jahr_QMARK_)?cljs.core.assoc.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db),(12),canasta.spiel.fuehrende.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db))):((neuer_monat_QMARK_)?cljs.core.assoc.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db),(laufender_monat - (1)),canasta.spiel.fuehrende.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db))):((cljs.core._EQ_.call(null,laufender_monat,(1)))?new cljs.core.PersistentArrayMap(null, 1, [(1),""], null):new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db)
)));
var monatshistorie = ((neues_jahr_QMARK_)?medley.core.map_vals.call(null,(function (){
return (0);
}),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db)):((neuer_monat_QMARK_)?medley.core.map_vals.call(null,(function (){
return (0);
}),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db)):new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db)
));
var historie = ((neues_jahr_QMARK_)?medley.core.map_vals.call(null,(function (){
return (0);
}),new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db)):new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"monat","monat",-186829909),laufender_monat,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),monatsbilanz,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),monatshistorie,new cljs.core.Keyword(null,"historie","historie",893875268),historie,new cljs.core.Keyword(null,"spiel","spiel",-831112206),canasta.spiel.neues_spiel.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911)], null)))),new cljs.core.Keyword(null,"jahressieg","jahressieg",885034826),neues_jahr_QMARK_);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__26571){
var vec__26572 = p__26571;
var _ = cljs.core.nth.call(null,vec__26572,(0),null);
var bilanz = cljs.core.nth.call(null,vec__26572,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),bilanz);
}));

//# sourceMappingURL=events.js.map
