// Compiled by ClojureScript 1.10.844 {}
goog.provide('canastref.drop_file_stream');
goog.require('cljs.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
canastref.drop_file_stream.ajax_request_delete_file_from_dropbox = (function canastref$drop_file_stream$ajax_request_delete_file_from_dropbox(filename,db_key){
var path = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"uri","uri",-774711847)],[ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"post","post",269697687),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-deleted","process-deleted",-1653007737),db_key], null),new cljs.core.PersistentArrayMap(null, 1, ["Authorization","Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"], null),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-resp","bad-resp",-1733432202),db_key], null),"https://api.dropboxapi.com/2/files/delete"]);
});
canastref.drop_file_stream.ajax_request_file_exists_on_dropbox = (function canastref$drop_file_stream$ajax_request_file_exists_on_dropbox(filename,db_key){
var path = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"uri","uri",-774711847)],[ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"post","post",269697687),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-exists","process-exists",-1809363622),db_key], null),new cljs.core.PersistentArrayMap(null, 2, ["Authorization","Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp","Content-Type","text/plain; charset=utf-8"], null),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-resp","bad-resp",-1733432202),db_key], null),"https://api.dropboxapi.com/2/files/get_metadata"]);
});
canastref.drop_file_stream.ajax_request_read_edn_from_dropbox = (function canastref$drop_file_stream$ajax_request_read_edn_from_dropbox(filename,db_key){
var path = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),"\"}"].join('');
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://content.dropboxapi.com/2/files/download",new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, ["Authorization","Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp","Dropbox-API-Arg",path,"Content-Type","text/plain; charset=utf-8"], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.text_response_format.call(null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-resp","process-resp",1829942856),db_key], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-resp","bad-resp",-1733432202),db_key], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
canastref.drop_file_stream.ajax_request_write_edn_to_dropbox = (function canastref$drop_file_stream$ajax_request_write_edn_to_dropbox(content,filename,db_key){
var path = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://content.dropboxapi.com/2/files/upload",new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, ["Authorization","Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp","Dropbox-API-Arg",path,"Content-Type","application/octet-stream"], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.text_response_format.call(null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-written","process-written",-1697339618),db_key], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-resp","bad-resp",-1733432202),db_key], null),new cljs.core.Keyword(null,"body","body",-2049205669),content], null);
});

//# sourceMappingURL=drop_file_stream.js.map
