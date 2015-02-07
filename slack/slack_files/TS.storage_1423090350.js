(function(){TS.registerModule("storage",{msgs_version:(function(){try{return window.boot_data.login_data.cache_version
}catch(b){return"unknown_version"
}})(),version:"0.81",prefix:window.boot_data.user_id+"_",disabled:false,buffer:{},disable_interval_buffer_write:(function(){var d,g,c,f,e,b;
b=true;
f="slack_ssb/";
e=0.45;
d=navigator.userAgent.toLowerCase();
g=d.indexOf(f);
if(g!==-1){c=parseFloat(d.substr(g+f.length));
if(!isNaN(c)&&c<e){b=false
}}return b
}()),flush_buffer_interv:0,flush_buffer_interv_ms:1000,setDisabled:function(b){if(TS.storage.disabled==b){return
}if(b||!a){TS.storage.disabled=true
}else{TS.storage.disabled=false;
TS.storage.setUp()
}TS.info("TS.storage.disabled:"+TS.storage.disabled)
},onStart:function(){TS.storage.setDisabled(TS.storage.disabled||TS.qs_args.ls_disabled=="1"||!a);
if(!TS.storage.disabled){try{if(TS.boot_data.login_data.self.prefs.ls_disabled){TS.storage.disabled=true
}}catch(b){}}TS.info("TS.storage.disabled:"+TS.storage.disabled);
TS.ui.window_unloaded_sig.add(TS.storage.windowUnloaded);
TS.ui.window_focus_changed_sig.add(TS.storage.windowBlurred);
if(!TS.storage.disabled){TS.storage.setUp()
}},getKeys:function(){var c=[];
if(!a){return c
}var b=a.length;
if(!b){return c
}for(var d=0;
d<b;
d++){c.push(a.key(d))
}return c
},storageAvailable:function(){if(!a){return false
}try{var b="test_to_see_if_we_can_write_to_local_storage";
a.setItem(b,"foo");
a.removeItem(b);
return true
}catch(c){return false
}},storageSize:function(e){var g=0;
if(!a){return g
}var f=TS.storage.getKeys();
var j=0;
var d;
var h;
for(var b=0;
b<f.length;
b++){j++;
d=f[b];
h=a.getItem(d);
if(!h&&h!==""){TS.warn(d+" not measurable value:"+h+" typeof:"+(typeof h))
}else{g+=h.length;
if(e){TS.info(d+"="+((h.length*2)/1024).toFixed(2)+"KB (total="+(g/1024).toFixed(2)+"KB)")
}}}if(e){TS.info("total for "+j+" items is "+(g/1024).toFixed(2)+"KB")
}return g
},setUp:function(){var b=TS.storage._get("storage_msgs_version");
TS.log(488,"TS.storage.msgs_version:"+TS.storage.msgs_version);
TS.log(488,"storage_msgs_version:"+b);
var e=TS.storage._get("storage_version");
TS.log(488,"TS.storage.version:"+TS.storage.version);
TS.log(488,"storage_version:"+e);
TS.info("TS.storage.storageAvailable(): "+TS.storage.storageAvailable());
var f=TS.storage.getKeys();
TS.log(488,f);
var d;
if(!TS.storage.storageAvailable()){TS.warn("TS.storage.storageAvailable() = false so flushing");
a.clear()
}else{if(e!=TS.storage.version||!TS.storage.fetchLastEventTS()){if(e!=TS.storage.version){TS.warn("storage_version:"+e+" does not match TS.storage.version:"+TS.storage.version+" so flushing")
}else{if(e){TS.warn("TS.storage.fetchLastEventTS() is empty so flushing");
TS.logError({message:"TS.storage.fetchLastEventTS() is empty #2 B"},"TS.storage.fetchLastEventTS() is empty but we have a storage_version, so flushing LS from TS.storage")
}}for(var c=0;
c<f.length;
c++){d=f[c];
if(d.indexOf(TS.storage.prefix)!==0){continue
}var g=TS.utility.date.getTimeStamp();
a.removeItem(d);
TS.warn("_ls.removeItem:"+d+" "+(TS.utility.date.getTimeStamp()-g)+"ms")
}TS.storage._set("storage_version",TS.storage.version);
TS.storage._set("storage_msgs_version",TS.storage.msgs_version);
TS.info(TS.storage.getKeys())
}else{if(b!=TS.storage.msgs_version||TS.qs_args.no_ls_msgs=="1"){if(TS.qs_args.no_ls_msgs=="1"){TS.warn("TS.qs_args['no_ls_msgs'] == '1' so flushing channel data")
}else{TS.warn("storage_msgs_version:"+b+" does not match TS.storage.msgs_version:"+TS.storage.msgs_version+" so flushing channel data")
}TS.storage.cleanOutMsgStorage();
TS.storage._set("storage_msgs_version",TS.storage.msgs_version);
TS.warn(TS.storage.getKeys())
}}}if(TS.storage.disable_interval_buffer_write){TS.storage.flushBufferOnIdleTimer()
}},cleanOutMsgStorageIfTooOld:function(){if(TS.storage.isStorageTooOld()){TS.warn("last LS activity too old, we're purging");
TS.storage.cleanOutMsgStorageAndReset();
return true
}return false
},cleanOutMsgStorageAndReset:function(){TS.storage.cleanOutMsgStorage();
TS.storage.storeLastEventTS("",true);
TS.storage.storeLastMsgTS("",true);
TS.storage.flushBuffer(true)
},isStorageTooOld:function(){var e=TS.storage.fetchLastEventTS();
var b=TS.storage.fetchLastMsgTS();
var d=e;
if(!d||b>e){d=b
}if(d){var f=TS.utility.date.toDateObject(d);
var c=TS.utility.date.getTimeStamp()-f;
var g=3*86400000;
if(c>g){return true
}}return false
},cleanOutMsgStorage:function(){var d=TS.storage.getKeys();
TS.log(488,d);
var c;
for(var b=0;
b<d.length;
b++){c=d[b];
if(c.indexOf(TS.storage.prefix)!==0){continue
}if(c.indexOf(TS.storage.msgs_id_part)==-1&&c.indexOf(TS.storage.oldest_ts_part)==-1){continue
}var e=TS.utility.date.getTimeStamp();
a.removeItem(c);
delete TS.storage.buffer[c];
TS.warn("_ls.removeItem:"+c+" "+(TS.utility.date.getTimeStamp()-e)+"ms")
}for(c in TS.storage.buffer){if(c.indexOf(TS.storage.prefix)!==0){continue
}if(c.indexOf(TS.storage.msgs_id_part)==-1&&c.indexOf(TS.storage.oldest_ts_part)==-1){continue
}delete TS.storage.buffer[c];
TS.info("delete TS.storage.buffer:"+c)
}d=TS.storage.getKeys();
TS.log(488,d)
},windowUnloaded:function(){TS.storage._set("last_unload_flushing",new Date().toString(),true);
TS.storage.flushBuffer(true)
},windowBlurred:function(){TS.storage.flushBuffer(true)
},onFlushBufferInterval:function(){TS.storage.flushBuffer(false)
},slow_write:false,slow_all_write:false,slow_write_threshold:1000,flush_all_buffer_interv:null,flush_all_buffer_interv_ms:2000,flush_all_buffer_user_inactive_ms:3000,flushBufferOnIdleTimer:function(){if(TS.storage.flush_all_buffer_interv){window.clearInterval(TS.storage.flush_all_buffer_interv);
TS.storage.flush_all_buffer_interv=null
}TS.storage.flush_all_buffer_interv=window.setInterval(TS.storage.maybeFlushAllBuffer,TS.storage.flush_all_buffer_interv_ms)
},maybeFlushAllBuffer:function(){if(!TS.model){return
}var d=false;
if(!TS.model.ui.is_window_focused){d=true
}else{var c=new Date();
var b=(c-TS.model.client.last_user_active_timestamp);
if(b>=TS.storage.flush_all_buffer_user_inactive_ms){d=true
}}TS.log(488,"TS.storage.maybeFlushAllBuffer ok_to_flush:"+d);
if(d){TS.storage.flushBuffer(true)
}},prepareValForStorage:function(b){return(typeof b=="string"||typeof b=="number"||!b)?b:JSON.stringify(b)
},correctBadValsFromStorage:function(b){if(b=="undefined"){return null
}if(b=="null"){return null
}return b
},flushBuffer:function(o){if(TS.storage.disabled){return
}var d=new Date();
var b=TS.utility.date.getTimeStamp();
var h;
var j=0;
var n=(TS.model&&TS.model.team&&TS.model.team.domain&&TS.model.team.domain==="tinyspeck");
var p;
var m;
var g;
if(!o&&TS.storage.disable_interval_buffer_write){return false
}var c;
for(var f in TS.storage.buffer){c=TS.storage.prepareValForStorage(TS.storage.buffer[f]);
try{a.setItem(f,c)
}catch(e){TS.warn("flushBuffer _ls.setItem failed once, flushing. TS.storage.storageSize():"+TS.storage.storageSize(false));
TS.dir(0,e);
a.clear();
try{a.setItem(f,c)
}catch(l){TS.warn("flushBuffer _ls.setItem failed twice, flushing and bailing. TS.storage.storageSize():"+TS.storage.storageSize());
TS.dir(0,l);
a.clear();
continue
}}j++;
h=TS.utility.date.getTimeStamp()-b;
TS.storage.flush_buffer_interv_ms=TS.utility.clamp(h*3,1000,5000);
if(n){TS.log(488,"onFlushBufferInterval _ls.setItem "+f+": "+(h)+"ms "+(TS.storage.buffer[f]&&TS.storage.buffer[f].toString?TS.storage.buffer[f].toString().substr(0,100):"NULL?"))
}if(!o){p=new Date()-d;
if(!TS.storage.slow_write&&p>TS.storage.slow_write_threshold){TS.storage.slow_write=true;
g=new Date();
try{m=TS.storage.storageSize()
}catch(e){}g=new Date()-g;
TS.logError({message:"TS.storage.flushBuffer > "+TS.storage.slow_write_threshold+" ms"}," took "+p+" ms for "+j+" item (!all case). Key: "+f+". Buffer length: "+(TS.storage.buffer[f]&&TS.storage.buffer[f].toString()?TS.storage.buffer[f].toString().length:"unknown (not a string)")+". localStorage size: "+(m||"unknown")+". Time to read LS size: "+g)
}}delete TS.storage.buffer[f];
if(!o){TS.log(488,"TS.storage.flushBuffer: Wrote one item.");
return
}}if(j&&!TS.storage.slow_all_write){p=new Date()-d;
if(p>TS.storage.slow_write_threshold){TS.storage.slow_all_write=true;
try{m=TS.storage.storageSize()
}catch(e){}TS.logError({message:"TS.storage.flushBuffer (all) > "+TS.storage.slow_write_threshold+" ms"}," took "+p+" ms for "+j+" items. localStorage size: "+m+". App open for "+((new Date()-TS.view.start_time)/1000/60).toFixed(2)+" min.")
}}if(j===0){if(TS.storage.flush_buffer_interv){window.clearInterval(TS.storage.flush_buffer_interv);
TS.storage.flush_buffer_interv=null
}TS.log(488,"TS.storage.flushBuffer: Nothing to save.")
}else{TS.log(488,"TS.storage.flushBuffer: Saved "+j+(j===1?" item":" items"))
}},slow_get_threshold:1000,slow_get:null,_get:function(f,c){var e=TS.storage.prefix+f;
if(TS.storage.disabled){return TS.storage.buffer[e]||c
}if(e in TS.storage.buffer){return TS.storage.buffer[e]||c
}var d=new Date();
var b=TS.storage.correctBadValsFromStorage(a.getItem(e));
var h;
if(b&&typeof b=="string"&&/^[{[]/.test(b)){try{b=JSON.parse(b)
}catch(g){}}b=b||(c||null);
d=new Date()-d;
if(!TS.storage.slow_get&&d>TS.storage.slow_get_threshold){TS.storage.slow_get=true;
try{h=TS.storage.storageSize()
}catch(g){}TS.logError({message:"TS.storage._get > "+TS.storage.slow_get_threshold+" ms"}," took "+d+" ms to read "+e+", length = "+(b&&!isNaN(b.length)?b.length:"unknown")+". Storage size: "+h)
}return b
},slow_set_threshold:1000,slow_set:null,_set:function(b,i,d){var j=new Date();
var h;
var f=TS.storage.prefix+b;
TS.storage.buffer[f]=i;
var g=false;
if(d){if(!TS.storage.disabled){var c=TS.storage.prepareValForStorage(i);
try{a.setItem(f,c)
}catch(e){TS.warn("_set _ls.setItem failed, flushing. TS.storage.storageSize():"+TS.storage.storageSize(false));
g=true;
a.clear()
}}if(!g){delete TS.storage.buffer[f];
j=new Date()-j;
if(j>TS.storage.slow_set_threshold){TS.warn("TS.storage._set immediately "+b+": "+(j)+"ms "+(i&&i.toString?i.toString().substr(0,100):"NULL?"));
if(!TS.storage.slow_set){TS.storage.slow_set=true;
try{h=TS.storage.storageSize()
}catch(e){}TS.logError({message:"TS.storage._set (immediate) > "+TS.storage.slow_set_threshold+" ms"}," took "+j+" ms to write "+f+", length = "+(i&&!isNaN(i.length)?i.length:"unknown")+". Storage length: "+h)
}}else{TS.log(488,"TS.storage._set immediately "+b+": "+(j)+"ms "+(i&&i.toString?i.toString().substr(0,100):"NULL?"))
}return
}}if(!TS.storage.disabled){if(!TS.storage.flush_buffer_interv){TS.storage.flush_buffer_interv=setInterval(TS.storage.onFlushBufferInterval,TS.storage.flush_buffer_interv_ms)
}}},msgs_id_part:"channel_msgs_",_makeMsgsId:function(b){return TS.storage.msgs_id_part+b
},fetchMsgsRaw:function(b){return TS.storage._get(TS.storage._makeMsgsId(b),[])||[]
},fetchMsgs:function(f){var e=JSON.parse(JSON.stringify(TS.storage._get(TS.storage._makeMsgsId(f),[])||[]));
var b=[];
var c;
for(var d=0;
d<e.length;
d++){if(TS.qs_args.not_all_ls_msgs&&d<5){continue
}c=e[d];
if(!c.ts){continue
}if(TS.utility.msgs.isTempMsg(c)){continue
}if(c.is_ephemeral){continue
}b.push(TS.utility.msgs.processImsg(c))
}return b
},storeMsgs:function(d,c){TS.storage._set(TS.storage._makeMsgsId(d),c);
if(c&&c.length){var b=TS.storage.fetchLastMsgTS();
if(c[0].ts>b){TS.storage.storeLastMsgTS(c[0].ts)
}}},_makeMsgInputId:function(b){return"msg_input_"+b
},fetchLastMsgInput:function(b){return TS.storage._get(TS.storage._makeMsgInputId(b),null)
},storeLastMsgInput:function(c,b){TS.storage._set(TS.storage._makeMsgInputId(c),b)
},_makeCommentInputId:function(b){return"comment_input_"+b
},fetchLastCommentInput:function(b){return TS.storage._get(TS.storage._makeCommentInputId(b),null)
},storeLastCommentInput:function(c,b){TS.storage._set(TS.storage._makeCommentInputId(c),b)
},oldest_ts_part:"oldest_ts_",_makeOldestTsId:function(b){return TS.storage.oldest_ts_part+b
},fetchOldestTs:function(b){return TS.storage._get(TS.storage._makeOldestTsId(b),null)
},storeOldestTs:function(c,b){TS.storage._set(TS.storage._makeOldestTsId(c),b)
},fetchActiveHistory:function(){return TS.storage._get("active_history",[])||[]
},storeActiveHistory:function(b){TS.storage._set("active_history",b,true)
},fetchLastEventTS:function(){return TS.storage._get("last_event_ts","")||""
},storeLastEventTS:function(c,b){TS.storage._set("last_event_ts",c,b)
},fetchLastMsgTS:function(){return TS.storage._get("last_msg_ts","")||""
},storeLastMsgTS:function(c,b){TS.storage._set("last_msg_ts",c,b)
},fetchUIState:function(){return TS.storage._get("ui_state",{})||{}
},storeUIState:function(b){TS.storage._set("ui_state",b)
},fetchInlineImgState:function(){return TS.storage._get("inline_img_state",{})||{}
},storeInlineImgState:function(b){TS.storage._set("inline_img_state",b)
},fetchInlineVideoState:function(){return TS.storage._get("inline_video_state",{})||{}
},storeInlineVideoState:function(b){TS.storage._set("inline_video_state",b)
},fetchInlineAttachmentState:function(){return TS.storage._get("inline_attachment_state",{})||{}
},storeInlineAttachmentState:function(b){TS.storage._set("inline_attachment_state",b)
},fetchExpandableState:function(){return TS.storage._get("expandable_state",{})||{}
},storeExpandableState:function(b){TS.storage._set("expandable_state",b)
},fetchInputHistory:function(){var c=TS.storage._get("input_history",[])||[];
var b=300;
if(c.length>b){c.length=b
}return c
},storeInputHistory:function(b){TS.storage._set("input_history",b)
}});
var a=(window.macgap&&macgap.ls)?macgap.ls:window.localStorage
})();