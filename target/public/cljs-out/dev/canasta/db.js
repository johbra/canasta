// Compiled by ClojureScript 1.10.844 {}
goog.provide('canasta.db');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.local');
canasta.db.default_db = (function (){var datum = cljs_time.core.date_time.call(null,(2024),(1),(1));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"historie","historie",893875268),new cljs.core.Keyword(null,"monatsbilanz","monatsbilanz",-863544633),new cljs.core.Keyword(null,"hist-aus-datei","hist-aus-datei",-756700344),new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911),new cljs.core.Keyword(null,"monat","monat",-186829909),new cljs.core.Keyword(null,"monatshistorie","monatshistorie",-354951214),new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"jahr","jahr",1260355162)],[null,new cljs.core.PersistentArrayMap(null, 1, [(1),"Meike"], null),null,null,cljs_time.core.month.call(null,datum),null,null,false,cljs_time.core.year.call(null,datum)]);
})();

//# sourceMappingURL=db.js.map
