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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"historien","historien",-1658302391),(function (p__29963,_){
var map__29964 = p__29963;
var map__29964__$1 = cljs.core.__destructure_map.call(null,map__29964);
var db = cljs.core.get.call(null,map__29964__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-hist.edn",new cljs.core.Keyword(null,"historien","historien",-1658302391))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911),(function (p__29965,_){
var map__29966 = p__29965;
var map__29966__$1 = cljs.core.__destructure_map.call(null,map__29966);
var db = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-namen.edn",new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"welt","welt",-1673248721),(function (p__29967,_){
var map__29968 = p__29967;
var map__29968__$1 = cljs.core.__destructure_map.call(null,map__29968);
var db = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"welt","welt",-1673248721))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"speichere-welt","speichere-welt",-66606649),(function (p__29969,_){
var map__29970 = p__29969;
var map__29970__$1 = cljs.core.__destructure_map.call(null,map__29970);
var db = cljs.core.get.call(null,map__29970__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_write_edn_to_dropbox.call(null,db,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"speichere-historien","speichere-historien",315157896),(function (p__29971,p__29972){
var map__29973 = p__29971;
var map__29973__$1 = cljs.core.__destructure_map.call(null,map__29973);
var db = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29974 = p__29972;
var _ = cljs.core.nth.call(null,vec__29974,(0),null);
var historien = cljs.core.nth.call(null,vec__29974,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_write_edn_to_dropbox.call(null,historien,"r-hist.edn",new cljs.core.Keyword(null,"historie-gespeichert?","historie-gespeichert?",576306150))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),(function (p__29977,_){
var map__29978 = p__29977;
var map__29978__$1 = cljs.core.__destructure_map.call(null,map__29978);
var db = cljs.core.get.call(null,map__29978__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_file_exists_on_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"spiel-beendet","spiel-beendet",939572612),(function (p__29979,p__29980){
var map__29981 = p__29979;
var map__29981__$1 = cljs.core.__destructure_map.call(null,map__29981);
var db = cljs.core.get.call(null,map__29981__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29982 = p__29980;
var _ = cljs.core.nth.call(null,vec__29982,(0),null);
var historien = cljs.core.nth.call(null,vec__29982,(1),null);
var ___$1 = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speichere-historien","speichere-historien",315157896),historien], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canasta.drop_file_stream.ajax_request_delete_file_from_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-exists","process-exists",-1809363622),(function (db,p__29985){
var vec__29986 = p__29985;
var _ = cljs.core.nth.call(null,vec__29986,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29986,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__29986,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-deleted","process-deleted",-1653007737),(function (db,p__29989){
var vec__29990 = p__29989;
var _ = cljs.core.nth.call(null,vec__29990,(0),null);
var db_key = cljs.core.nth.call(null,vec__29990,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29990,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-written","process-written",-1697339618),(function (db,p__29993){
var vec__29994 = p__29993;
var _ = cljs.core.nth.call(null,vec__29994,(0),null);
var db_key = cljs.core.nth.call(null,vec__29994,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__29994,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-resp","process-resp",1829942856),(function (db,p__29997){
var vec__29998 = p__29997;
var _ = cljs.core.nth.call(null,vec__29998,(0),null);
var db_key = cljs.core.nth.call(null,vec__29998,(1),null);
var item = cljs.core.nth.call(null,vec__29998,(2),null);
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-resp","bad-resp",-1733432202),(function (db,p__30001){
var vec__30002 = p__30001;
var _ = cljs.core.nth.call(null,vec__30002,(0),null);
var db_key = cljs.core.nth.call(null,vec__30002,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__30002,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"resultat","resultat",1627423071),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__30005){
var vec__30006 = p__30005;
var _ = cljs.core.nth.call(null,vec__30006,(0),null);
var tln = cljs.core.nth.call(null,vec__30006,(1),null);
var index = cljs.core.nth.call(null,vec__30006,(2),null);
var runde = cljs.core.nth.call(null,vec__30006,(3),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),index], null),tln),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),index,new cljs.core.Keyword(null,"summe","summe",-650249817)], null),canasta.spieler.zwischen_summe.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(tln),(runde + (1))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"schliesse-runde-ab","schliesse-runde-ab",-2019928989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
var spiel = canasta.spiel.schliesse_runde_ab.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"spiel","spiel",-831112206),spiel,new cljs.core.Keyword(null,"historie","historie",893875268),canasta.spiel.registriere_sieger.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db),canasta.spiel.sieger.call(null,spiel)),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),canasta.spiel.registriere_sieger.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db),canasta.spiel.sieger.call(null,spiel)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"korrigiere-ergebnis","korrigiere-ergebnis",-721888138),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"historie","historie",893875268),canasta.spiel.eliminiere_sieger.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),canasta.spiel.eliminiere_sieger.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"spiel","spiel",-831112206),canasta.spiel.korrigiere.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"geber","geber",604746862),(function (db,p__30009){
var vec__30010 = p__30009;
var _ = cljs.core.nth.call(null,vec__30010,(0),null);
var geber = cljs.core.nth.call(null,vec__30010,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"geber","geber",604746862)], null),geber);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"neues-spiel","neues-spiel",287296109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__30013){
var vec__30014 = p__30013;
var _ = cljs.core.nth.call(null,vec__30014,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30014,(1),null);
var laufender_monat = cljs_time.core.month.call(null,cljs_time.local.local_now.call(null));
var neuer_monat_QMARK_ = (laufender_monat > (cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db))) + (1)));
var monatsbilanz = ((neuer_monat_QMARK_)?cljs.core.assoc.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db),(laufender_monat - (1)),canasta.spiel.fuehrende.call(null,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db))):new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633).cljs$core$IFn$_invoke$arity$1(db));
var monatshistorie = ((neuer_monat_QMARK_)?medley.core.map_vals.call(null,(function (){
return (0);
}),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db)):new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"monat","monat",-186829909),laufender_monat,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),monatsbilanz,new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),monatshistorie,new cljs.core.Keyword(null,"spiel","spiel",-831112206),canasta.spiel.neues_spiel.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911)], null)))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__30017){
var vec__30018 = p__30017;
var _ = cljs.core.nth.call(null,vec__30018,(0),null);
var bilanz = cljs.core.nth.call(null,vec__30018,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),bilanz);
}));

//# sourceMappingURL=events.js.map
