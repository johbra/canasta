(ns canasta.events 
  (:require [re-frame.core :as rf] 
            [canasta.db :as db]
            [canasta.spiel :as sp]
            [canasta.spieler :as s]
            [canasta.drop-file-stream :as df]
            [medley.core :as m]
            [cljs-time.core :as t]
            [cljs-time.local :as l]))

(rf/reg-event-db
 :initialize
 (fn [_]
   (reset! re-frame.db/app-db db/default-db)))


(rf/reg-event-fx
 :historien
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-read-edn-from-dropbox
                 "r-hist.edn" :historien)}))

(rf/reg-event-fx
 :spieler-namen
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-read-edn-from-dropbox
                 "r-namen.edn" :spieler-namen)}))

(rf/reg-event-fx
 :welt
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-read-edn-from-dropbox
                 "r-welt.edn" :welt)}))

(rf/reg-event-fx
 :speichere-welt
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-write-edn-to-dropbox
                 db "r-welt.edn" :gespeichertes-spiel?)}))

(rf/reg-event-fx
 :speichere-historien
 (fn [{:keys [db]} [_ historien]] 
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-write-edn-to-dropbox
                 historien "r-hist.edn" :historie-gespeichert?)}))

(rf/reg-event-fx
 :gespeichertes-spiel?
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-file-exists-on-dropbox
                 "r-welt.edn" :gespeichertes-spiel?)}))

(rf/reg-event-fx
 :spiel-beendet
 (fn [{:keys [db]} [_ historien]]
   (let [_ (rf/dispatch [:speichere-historien historien])]
     {:db         (assoc db :loading true)  
      :http-xhrio (df/ajax-request-delete-file-from-dropbox
                   "r-welt.edn" :gespeichertes-spiel?)})))

(rf/reg-event-db
 :process-exists
 (fn [db [_ _ _]]
   (-> db
       (assoc :loading false)
       (assoc :gespeichertes-spiel? true))))

(rf/reg-event-db
 :process-deleted
 (fn [db [_ db-key _]]
   (-> db
       (assoc :loading false)
       (assoc db-key false))))

(rf/reg-event-db
 :process-written
 (fn [db [_ db-key _]]
   (-> db
       (assoc :loading false)
       (assoc db-key true))))

(rf/reg-event-db
 :process-resp
 (fn [db [_ db-key item]]
   (let [data (cljs.reader/read-string item)]
     (cond
       (= db-key :welt) (reset! re-frame.db/app-db data)
       (= db-key :historien)
       (assoc db
              :hist-aus-datei data
              :historie       (data 0)
              :monatshistorie (data 1)
              :monatsbilanz   (data 2)
              :loading false)
       :else (assoc db
                    db-key data 
                    :loading false)))))

(rf/reg-event-db
 :bad-resp
 (fn [db [_ db-key _ ]] 
   (-> db
       (assoc :loading false )
       (assoc db-key nil))))

(rf/reg-event-db
 :resultat
 [re-frame.core/debug]
 (fn [db [_ tln index runde]]
   (-> db
       (assoc-in [:spiel :teilnehmer index] tln)
       (assoc-in [:spiel :teilnehmer index :summe]
                 (s/zwischen-summe (:resultate tln) (inc runde))))))

(rf/reg-event-db
 :schliesse-runde-ab
 [re-frame.core/debug]
 (fn [db]
   (let [spiel (sp/schliesse-runde-ab (:spiel db))] 
     (assoc db
            :spiel spiel
            :historie (sp/registriere-sieger (:historie db) (sp/sieger spiel))
            :monatshistorie
            (sp/registriere-sieger (:monatshistorie db) (sp/sieger spiel))))))

(rf/reg-event-db
 :korrigiere-ergebnis
 [re-frame.core/debug]
 (fn [db]
   (assoc db
          :historie (sp/eliminiere-sieger (:historie db) (:sieger (:spiel db)))
          :monatshistorie
          (sp/eliminiere-sieger (:monatshistorie db) (:sieger (:spiel db)))
          :spiel (sp/korrigiere (:spiel db)))))

(rf/reg-event-db
 :geber
 (fn [db [_  geber]] 
   (assoc-in db [:spiel :geber] geber)))

(rf/reg-event-db
 :neues-spiel
 [re-frame.core/debug]
 (fn [db [_ _]]
   (let [laufender-monat (:monat db)
         neuer-monat?  (or
                        (> laufender-monat (inc (apply max (keys (:monatsbilanz db)))))
                        (= laufender-monat 2))
         neues-jahr? (and (= (inc (apply max (keys (:monatsbilanz db)))) 12)
                          (= laufender-monat 1)) 
         monatsbilanz (cond neues-jahr? #_{1 ""}
                            (assoc (:monatsbilanz db)
                                   12
                                   (sp/fuehrende (:monatshistorie db)))
                            neuer-monat?
                            (assoc (:monatsbilanz db)
                                   (dec laufender-monat)
                                   (sp/fuehrende (:monatshistorie db)))
                            (= laufender-monat 1) {1 ""}
                            :else (:monatsbilanz db))
         monatshistorie (cond neues-jahr?  (m/map-vals (fn [] 0) (:monatshistorie db))
                              neuer-monat?
                              (m/map-vals (fn [] 0) (:monatshistorie db))
                              :else (:monatshistorie db))
         historie (if neues-jahr? (m/map-vals (fn [] 0) (:historie db))
                      (:historie db))]
     (assoc db
            :monat laufender-monat
            :monatsbilanz monatsbilanz
            :monatshistorie monatshistorie
            :historie historie
            :spiel (sp/neues-spiel @(rf/subscribe [:spieler-namen]))
            :jahressieg neues-jahr? ))))

(rf/reg-event-db
 :monatsbilanz
 [re-frame.core/debug]
 (fn [db [_ bilanz]]
   (assoc db :monatsbilanz bilanz))) 
