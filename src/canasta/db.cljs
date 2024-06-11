(ns canasta.db
  (:require [cljs-time.core :as t]
            [cljs-time.local :as l]))

#_(def default-db
    (let [datum (t/date-time 2024 1 1) #_(l/local-now)]
      {:hist-aus-datei nil
       :historie nil
       :monatshistorie nil
       :monatsbilanz {1 "Meike"} 
       :monat (t/month datum)
       :jahr (t/year datum)
       :loading false
       :spieler-namen nil
       :spiel nil
       }))

(def default-db
  {:hist-aus-datei nil
   :historie nil
   :monatshistorie nil
   :monatsbilanz {1 "Meike"}
   :monat (t/month (l/local-now))
   :loading false
   :spieler-namen nil
   :spiel nil
   })
