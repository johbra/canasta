;; (ns canasta.core)

;; (js/console.log "Canasta neuer")
(ns ^:figwheel-hooks canasta.core
  (:require
   [re-frame.core :as rf]
   [reagent.dom :as rdom]
   [canasta.views :as cv]
   ;; [canastref.events]
   ))

(defn ^:export main     ;; call this to bootstrap your app
  [] 
  ;; (rf/dispatch-sync [:initialize])
  ;; (rf/dispatch [:spieler-namen])
  ;; (rf/dispatch [:historien])
  ;; (rf/dispatch [:gespeichertes-spiel?]) 
  (rdom/render [cv/main-panel]
               (js/document.getElementById "app")))

;; and this is what figwheel calls after each save
(defn ^:after-load re-render []
  (main))

;; this only gets called once
(defonce start-up (do (main) (js/console.log @re-frame.db/app-db) true)) 
