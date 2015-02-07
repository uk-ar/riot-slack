/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var arr=[];
var slice=arr.slice;
var concat=arr.concat;
var push=arr.push;
var indexOf=arr.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var support={};
var document=window.document,version="2.1.1",jQuery=function(selector,context){return new jQuery.fn.init(selector,context)
},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase()
};
jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this)
},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this)
},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
ret.context=this.context;
return ret
},each:function(callback,args){return jQuery.each(this,callback,args)
},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)
}))
},slice:function(){return this.pushStack(slice.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(i){var len=this.length,j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:push,sort:arr.sort,splice:arr.splice};
jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;
if(typeof target==="boolean"){deep=target;
target=arguments[i]||{};
i++
}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}
}if(i===length){target=this;
i--
}for(;
i<length;
i++){if((options=arguments[i])!=null){for(name in options){src=target[name];
copy=options[name];
if(target===copy){continue
}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;
clone=src&&jQuery.isArray(src)?src:[]
}else{clone=src&&jQuery.isPlainObject(src)?src:{}
}target[name]=jQuery.extend(deep,clone,copy)
}else{if(copy!==undefined){target[name]=copy
}}}}}return target
};
jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg)
},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function"
},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window
},isNumeric:function(obj){return !jQuery.isArray(obj)&&obj-parseFloat(obj)>=0
},isPlainObject:function(obj){if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false
}if(obj.constructor&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false
}return true
},isEmptyObject:function(obj){var name;
for(name in obj){return false
}return true
},type:function(obj){if(obj==null){return obj+""
}return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj
},globalEval:function(code){var script,indirect=eval;
code=jQuery.trim(code);
if(code){if(code.indexOf("use strict")===1){script=document.createElement("script");
script.text=code;
document.head.appendChild(script).parentNode.removeChild(script)
}else{indirect(code)
}}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)
},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()
},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);
if(args){if(isArray){for(;
i<length;
i++){value=callback.apply(obj[i],args);
if(value===false){break
}}}else{for(i in obj){value=callback.apply(obj[i],args);
if(value===false){break
}}}}else{if(isArray){for(;
i<length;
i++){value=callback.call(obj[i],i,obj[i]);
if(value===false){break
}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);
if(value===false){break
}}}}return obj
},trim:function(text){return text==null?"":(text+"").replace(rtrim,"")
},makeArray:function(arr,results){var ret=results||[];
if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)
}else{push.call(ret,arr)
}}return ret
},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i)
},merge:function(first,second){var len=+second.length,j=0,i=first.length;
for(;
j<len;
j++){first[i++]=second[j]
}first.length=i;
return first
},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;
for(;
i<length;
i++){callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){matches.push(elems[i])
}}return matches
},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];
if(isArray){for(;
i<length;
i++){value=callback(elems[i],i,arg);
if(value!=null){ret.push(value)
}}}else{for(i in elems){value=callback(elems[i],i,arg);
if(value!=null){ret.push(value)
}}}return concat.apply([],ret)
},guid:1,proxy:function(fn,context){var tmp,args,proxy;
if(typeof context==="string"){tmp=fn[context];
context=fn;
fn=tmp
}if(!jQuery.isFunction(fn)){return undefined
}args=slice.call(arguments,2);
proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy
},now:Date.now,support:support});
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()
});
function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);
if(type==="function"||jQuery.isWindow(obj)){return false
}if(obj.nodeType===1&&length){return true
}return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1) in obj
}var Sizzle=
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+-(new Date()),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true
}return 0
},strundefined=typeof undefined,MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=arr.indexOf||function(elem){var i=0,len=this.length;
for(;
i<len;
i++){if(this[i]===elem){return i
}}return -1
},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|.*)\\)|)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+characterEncoding+")"),CLASS:new RegExp("^\\.("+characterEncoding+")"),TAG:new RegExp("^("+characterEncoding.replace("w","w*")+")"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-65536;
return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,high&1023|56320)
};
try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);
arr[preferredDoc.childNodes.length].nodeType
}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els))
}:function(target,els){var j=target.length,i=0;
while((target[j++]=els[i++])){}target.length=j-1
}}
}function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;
if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context)
}context=context||document;
results=results||[];
if(!selector||typeof selector!=="string"){return results
}if((nodeType=context.nodeType)!==1&&nodeType!==9){return[]
}if(documentIsHTML&&!seed){if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);
if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);
return results
}}else{return results
}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);
return results
}}}else{if(match[2]){push.apply(results,context.getElementsByTagName(selector));
return results
}else{if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));
return results
}}}}if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;
newContext=context;
newSelector=nodeType===9&&selector;
if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);
if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&")
}else{context.setAttribute("id",nid)
}nid="[id='"+nid+"'] ";
i=groups.length;
while(i--){groups[i]=nid+toSelector(groups[i])
}newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;
newSelector=groups.join(",")
}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));
return results
}catch(qsaError){}finally{if(!old){context.removeAttribute("id")
}}}}}return select(selector.replace(rtrim,"$1"),context,results,seed)
}function createCache(){var keys=[];
function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()]
}return(cache[key+" "]=value)
}return cache
}function markFunction(fn){fn[expando]=true;
return fn
}function assert(fn){var div=document.createElement("div");
try{return !!fn(div)
}catch(e){return false
}finally{if(div.parentNode){div.parentNode.removeChild(div)
}div=null
}}function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;
while(i--){Expr.attrHandle[arr[i]]=handler
}}function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);
if(diff){return diff
}if(cur){while((cur=cur.nextSibling)){if(cur===b){return -1
}}}return a?1:-1
}function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type
}
}function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&elem.type===type
}
}function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;
return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;
while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j])
}}})
})
}function testContext(context){return context&&typeof context.getElementsByTagName!==strundefined&&context
}support=Sizzle.support={};
isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false
};
setDocument=Sizzle.setDocument=function(node){var hasCompare,doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView;
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document
}document=doc;
docElem=doc.documentElement;
documentIsHTML=!isXML(doc);
if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener("unload",function(){setDocument()
},false)
}else{if(parent.attachEvent){parent.attachEvent("onunload",function(){setDocument()
})
}}}support.attributes=assert(function(div){div.className="i";
return !div.getAttribute("className")
});
support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));
return !div.getElementsByTagName("*").length
});
support.getElementsByClassName=rnative.test(doc.getElementsByClassName)&&assert(function(div){div.innerHTML="<div class='a'></div><div class='a i'></div>";
div.firstChild.className="i";
return div.getElementsByClassName("i").length===2
});
support.getById=assert(function(div){docElem.appendChild(div).id=expando;
return !doc.getElementsByName||!doc.getElementsByName(expando).length
});
if(support.getById){Expr.find.ID=function(id,context){if(typeof context.getElementById!==strundefined&&documentIsHTML){var m=context.getElementById(id);
return m&&m.parentNode?[m]:[]
}};
Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);
return function(elem){return elem.getAttribute("id")===attrId
}
}
}else{delete Expr.find.ID;
Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);
return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");
return node&&node.value===attrId
}
}
}Expr.find.TAG=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag)
}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);
if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem)
}}return tmp
}return results
};
Expr.find.CLASS=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!==strundefined&&documentIsHTML){return context.getElementsByClassName(className)
}};
rbuggyMatches=[];
rbuggyQSA=[];
if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){div.innerHTML="<select msallowclip=''><option selected=''></option></select>";
if(div.querySelectorAll("[msallowclip^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")
}if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")
}if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")
}});
assert(function(div){var input=doc.createElement("input");
input.setAttribute("type","hidden");
div.appendChild(input).setAttribute("name","D");
if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=")
}if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled")
}div.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:")
})
}if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");
matches.call(div,"[s!='']:x");
rbuggyMatches.push("!=",pseudos)
})
}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));
hasCompare=rnative.test(docElem.compareDocumentPosition);
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))
}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true
}}}return false
};
sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;
return 0
}var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){return compare
}compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;
if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return -1
}if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1
}return sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0
}return compare&4?-1:1
}:function(a,b){if(a===b){hasDuplicate=true;
return 0
}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];
if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0
}else{if(aup===bup){return siblingCheck(a,b)
}}cur=a;
while((cur=cur.parentNode)){ap.unshift(cur)
}cur=b;
while((cur=cur.parentNode)){bp.unshift(cur)
}while(ap[i]===bp[i]){i++
}return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0
};
return doc
};
Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)
};
Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)
}expr=expr.replace(rattributeQuotes,"='$1']");
if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret
}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0
};
Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context)
}return contains(context,elem)
};
Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem)
}var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;
return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null
};
Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)
};
Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;
hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);
results.sort(sortOrder);
if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i)
}}while(j--){results.splice(duplicates[j],1)
}}sortInput=null;
return results
};
getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;
if(!nodeType){while((node=elem[i++])){ret+=getText(node)
}}else{if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent
}else{for(elem=elem.firstChild;
elem;
elem=elem.nextSibling){ret+=getText(elem)
}}}else{if(nodeType===3||nodeType===4){return elem.nodeValue
}}}return ret
};
Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);
if(match[2]==="~="){match[3]=" "+match[3]+" "
}return match.slice(0,4)
},CHILD:function(match){match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])
}match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));
match[5]=+((match[7]+match[8])||match[3]==="odd")
}else{if(match[3]){Sizzle.error(match[0])
}}return match
},PSEUDO:function(match){var excess,unquoted=!match[6]&&match[2];
if(matchExpr.CHILD.test(match[0])){return null
}if(match[3]){match[2]=match[4]||match[5]||""
}else{if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess)
}}return match.slice(0,3)
}},filter:{TAG:function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?function(){return true
}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName
}
},CLASS:function(className){var pattern=classCache[className+" "];
return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"")
})
},ATTR:function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);
if(result==null){return operator==="!="
}if(!operator){return true
}result+="";
return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false
}
},CHILD:function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";
return first===1&&last===0?function(elem){return !!elem.parentNode
}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;
if(parent){if(simple){while(dir){node=elem;
while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false
}}start=dir=type==="only"&&!start&&"nextSibling"
}return true
}start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});
cache=outerCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=cache[0]===dirruns&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];
break
}}}else{if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1]
}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff]
}if(node===elem){break
}}}}}diff-=last;
return diff===first||(diff%first===0&&diff/first>=0)
}}
},PSEUDO:function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);
if(fn[expando]){return fn(argument)
}if(fn.length>1){args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;
while(i--){idx=indexOf.call(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i])
}}):function(elem){return fn(elem,0,args)
}
}return fn
}},pseudos:{not:markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));
return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;
while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem)
}}}):function(elem,context,xml){input[0]=elem;
matcher(input,null,xml,results);
return !results.pop()
}
}),has:markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0
}
}),contains:markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1
}
}),lang:markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang)
}lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){var elemLang;
do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0
}}while((elem=elem.parentNode)&&elem.nodeType===1);
return false
}
}),target:function(elem){var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id
},root:function(elem){return elem===docElem
},focus:function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)
},enabled:function(elem){return elem.disabled===false
},disabled:function(elem){return elem.disabled===true
},checked:function(elem){var nodeName=elem.nodeName.toLowerCase();
return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected)
},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex
}return elem.selected===true
},empty:function(elem){for(elem=elem.firstChild;
elem;
elem=elem.nextSibling){if(elem.nodeType<6){return false
}}return true
},parent:function(elem){return !Expr.pseudos.empty(elem)
},header:function(elem){return rheader.test(elem.nodeName)
},input:function(elem){return rinputs.test(elem.nodeName)
},button:function(elem){var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button"
},text:function(elem){var attr;
return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text")
},first:createPositionalPseudo(function(){return[0]
}),last:createPositionalPseudo(function(matchIndexes,length){return[length-1]
}),eq:createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]
}),even:createPositionalPseudo(function(matchIndexes,length){var i=0;
for(;
i<length;
i+=2){matchIndexes.push(i)
}return matchIndexes
}),odd:createPositionalPseudo(function(matchIndexes,length){var i=1;
for(;
i<length;
i+=2){matchIndexes.push(i)
}return matchIndexes
}),lt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;
for(;
--i>=0;
){matchIndexes.push(i)
}return matchIndexes
}),gt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;
for(;
++i<length;
){matchIndexes.push(i)
}return matchIndexes
})}};
Expr.pseudos.nth=Expr.pseudos.eq;
for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i)
}for(i in {submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i)
}function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];
if(cached){return parseOnly?0:cached.slice(0)
}soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar
}groups.push((tokens=[]))
}matched=false;
if((match=rcombinators.exec(soFar))){matched=match.shift();
tokens.push({value:matched,type:match[0].replace(rtrim," ")});
soFar=soFar.slice(matched.length)
}for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();
tokens.push({value:matched,type:type,matches:match});
soFar=soFar.slice(matched.length)
}}if(!matched){break
}}return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)
};
function toSelector(tokens){var i=0,len=tokens.length,selector="";
for(;
i<len;
i++){selector+=tokens[i].value
}return selector
}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;
return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml)
}}}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];
if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true
}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});
if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2])
}else{outerCache[dir]=newCache;
if((newCache[2]=matcher(elem,context,xml))){return true
}}}}}}
}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;
while(i--){if(!matchers[i](elem,context,xml)){return false
}}return true
}:matchers[0]
}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;
for(;
i<len;
i++){Sizzle(selector,contexts[i],results)
}return results
}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;
for(;
i<len;
i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);
if(mapped){map.push(i)
}}}}return newUnmatched
}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)
}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)
}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;
if(matcher){matcher(matcherIn,matcherOut,context,xml)
}if(postFilter){temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)
}}}if(seed){if(postFinder||preFilter){if(postFinder){temp=[];
i=matcherOut.length;
while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem))
}}postFinder(null,(matcherOut=[]),temp,xml)
}i=matcherOut.length;
while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)
}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);
if(postFinder){postFinder(null,results,matcherOut,xml)
}else{push.apply(results,matcherOut)
}}})
}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext
},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1
},implicitRelative,true),matchers=[function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml))
}];
for(;
i<len;
i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)]
}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){j=++i;
for(;
j<len;
j++){if(Expr.relative[tokens[j].type]){break
}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens))
}matchers.push(matcher)
}}return elementMatcher(matchers)
}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find.TAG("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;
if(outermost){outermostContext=context!==document&&context
}for(;
i!==len&&(elem=elems[i])!=null;
i++){if(byElement&&elem){j=0;
while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);
break
}}if(outermost){dirruns=dirrunsUnique
}}if(bySet){if((elem=!matcher&&elem)){matchedCount--
}if(seed){unmatched.push(elem)
}}}matchedCount+=i;
if(bySet&&i!==matchedCount){j=0;
while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml)
}if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)
}}}setMatched=condense(setMatched)
}push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results)
}}if(outermost){dirruns=dirrunsUnique;
outermostContext=contextBackup
}return unmatched
};
return bySet?markFunction(superMatcher):superMatcher
}compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];
if(!cached){if(!match){match=tokenize(selector)
}i=match.length;
while(i--){cached=matcherFromTokens(match[i]);
if(cached[expando]){setMatchers.push(cached)
}else{elementMatchers.push(cached)
}}cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector
}return cached
};
select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0];
if(!context){return results
}else{if(compiled){context=context.parentNode
}}selector=selector.slice(tokens.shift().value.length)
}i=matchExpr.needsContext.test(selector)?0:tokens.length;
while(i--){token=tokens[i];
if(Expr.relative[(type=token.type)]){break
}if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){push.apply(results,seed);
return results
}break
}}}}(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);
return results
};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;
setDocument();
support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1
});
if(!assert(function(div){div.innerHTML="<a href='#'></a>";
return div.firstChild.getAttribute("href")==="#"
})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2)
}})
}if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";
div.firstChild.setAttribute("value","");
return div.firstChild.getAttribute("value")===""
})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue
}})
}if(!assert(function(div){return div.getAttribute("disabled")==null
})){addHandle(booleans,function(elem,name,isXML){var val;
if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null
}})
}return Sizzle
})(window);
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.pseudos;
jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains;
var rneedsContext=jQuery.expr.match.needsContext;
var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var risSimple=/^.[^:#\[\.,]*$/;
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return !!qualifier.call(elem,i,elem)!==not
})
}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not
})
}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not)
}qualifier=jQuery.filter(qualifier,elements)
}return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>=0)!==not
})
}jQuery.filter=function(expr,elems,not){var elem=elems[0];
if(not){expr=":not("+expr+")"
}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1
}))
};
jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;
if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;
i<len;
i++){if(jQuery.contains(self[i],this)){return true
}}}))
}for(i=0;
i<len;
i++){jQuery.find(selector,self[i],ret)
}ret=this.pushStack(len>1?jQuery.unique(ret):ret);
ret.selector=this.selector?this.selector+" "+selector:selector;
return ret
},filter:function(selector){return this.pushStack(winnow(this,selector||[],false))
},not:function(selector){return this.pushStack(winnow(this,selector||[],true))
},is:function(selector){return !!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length
}});
var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;
if(!selector){return this
}if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null]
}else{match=rquickExpr.exec(selector)
}if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match])
}else{this.attr(match,context[match])
}}}return this
}else{elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){this.length=1;
this[0]=elem
}this.context=document;
this.selector=selector;
return this
}}else{if(!context||context.jquery){return(context||rootjQuery).find(selector)
}else{return this.constructor(context).find(selector)
}}}else{if(selector.nodeType){this.context=this[0]=selector;
this.length=1;
return this
}else{if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery)
}}}if(selector.selector!==undefined){this.selector=selector.selector;
this.context=selector.context
}return jQuery.makeArray(selector,this)
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};
jQuery.extend({dir:function(elem,dir,until){var matched=[],truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break
}matched.push(elem)
}}return matched
},sibling:function(n,elem){var matched=[];
for(;
n;
n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n)
}}return matched
}});
jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;
return this.filter(function(){var i=0;
for(;
i<l;
i++){if(jQuery.contains(this,targets[i])){return true
}}})
},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;
for(;
i<l;
i++){for(cur=this[i];
cur&&cur!==context;
cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);
break
}}}return this.pushStack(matched.length>1?jQuery.unique(matched):matched)
},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0])
}return indexOf.call(this,elem.jquery?elem[0]:elem)
},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))))
},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))
}});
function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur
}jQuery.each({parent:function(elem){var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null
},parents:function(elem){return jQuery.dir(elem,"parentNode")
},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until)
},next:function(elem){return sibling(elem,"nextSibling")
},prev:function(elem){return sibling(elem,"previousSibling")
},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")
},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")
},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)
},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)
},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem)
},children:function(elem){return jQuery.sibling(elem.firstChild)
},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes)
}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){selector=until
}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched)
}if(this.length>1){if(!guaranteedUnique[name]){jQuery.unique(matched)
}if(rparentsprev.test(name)){matched.reverse()
}}return this.pushStack(matched)
}
});
var rnotwhite=(/\S+/g);
var optionsCache={};
function createOptions(options){var object=optionsCache[options]={};
jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true
});
return object
}jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);
var memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;
fired=true;
firingIndex=firingStart||0;
firingStart=0;
firingLength=list.length;
firing=true;
for(;
list&&firingIndex<firingLength;
firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;
break
}}firing=false;
if(list){if(stack){if(stack.length){fire(stack.shift())
}}else{if(memory){list=[]
}else{self.disable()
}}}},self={add:function(){if(list){var start=list.length;
(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);
if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)
}}else{if(arg&&arg.length&&type!=="string"){add(arg)
}}})
})(arguments);
if(firing){firingLength=list.length
}else{if(memory){firingStart=start;
fire(memory)
}}}return this
},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;
while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);
if(firing){if(index<=firingLength){firingLength--
}if(index<=firingIndex){firingIndex--
}}}})
}return this
},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)
},empty:function(){list=[];
firingLength=0;
return this
},disable:function(){list=stack=memory=undefined;
return this
},disabled:function(){return !list
},lock:function(){stack=undefined;
if(!memory){self.disable()
}return this
},locked:function(){return !stack
},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];
args=[context,args.slice?args.slice():args];
if(firing){stack.push(args)
}else{fire(args)
}}return this
},fire:function(){self.fireWith(this,arguments);
return this
},fired:function(){return !!fired
}};
return self
};
jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state
},always:function(){deferred.done(arguments).fail(arguments);
return this
},then:function(){var fns=arguments;
return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)
}})
});
fns=null
}).promise()
},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise
}},deferred={};
promise.pipe=promise.then;
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];
promise[tuple[1]]=list.add;
if(stateString){list.add(function(){state=stateString
},tuples[i^1][2].disable,tuples[2][2].lock)
}deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);
return this
};
deferred[tuple[0]+"With"]=list.fireWith
});
promise.promise(deferred);
if(func){func.call(deferred,deferred)
}return deferred
},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;
values[i]=arguments.length>1?slice.call(arguments):value;
if(values===progressValues){deferred.notifyWith(contexts,values)
}else{if(!(--remaining)){deferred.resolveWith(contexts,values)
}}}
},progressValues,progressContexts,resolveContexts;
if(length>1){progressValues=new Array(length);
progressContexts=new Array(length);
resolveContexts=new Array(length);
for(;
i<length;
i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))
}else{--remaining
}}}if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)
}return deferred.promise()
}});
var readyList;
jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);
return this
};
jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++
}else{jQuery.ready(true)
}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return
}jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){return
}readyList.resolveWith(document,[jQuery]);
if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");
jQuery(document).off("ready")
}}});
function completed(){document.removeEventListener("DOMContentLoaded",completed,false);
window.removeEventListener("load",completed,false);
jQuery.ready()
}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();
if(document.readyState==="complete"){setTimeout(jQuery.ready)
}else{document.addEventListener("DOMContentLoaded",completed,false);
window.addEventListener("load",completed,false)
}}return readyList.promise(obj)
};
jQuery.ready.promise();
var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;
if(jQuery.type(key)==="object"){chainable=true;
for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw)
}}else{if(value!==undefined){chainable=true;
if(!jQuery.isFunction(value)){raw=true
}if(bulk){if(raw){fn.call(elems,value);
fn=null
}else{bulk=fn;
fn=function(elem,key,value){return bulk.call(jQuery(elem),value)
}
}}if(fn){for(;
i<len;
i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))
}}}}return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet
};
jQuery.acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType)
};
function Data(){Object.defineProperty(this.cache={},0,{get:function(){return{}
}});
this.expando=jQuery.expando+Math.random()
}Data.uid=1;
Data.accepts=jQuery.acceptData;
Data.prototype={key:function(owner){if(!Data.accepts(owner)){return 0
}var descriptor={},unlock=owner[this.expando];
if(!unlock){unlock=Data.uid++;
try{descriptor[this.expando]={value:unlock};
Object.defineProperties(owner,descriptor)
}catch(e){descriptor[this.expando]=unlock;
jQuery.extend(owner,descriptor)
}}if(!this.cache[unlock]){this.cache[unlock]={}
}return unlock
},set:function(owner,data,value){var prop,unlock=this.key(owner),cache=this.cache[unlock];
if(typeof data==="string"){cache[data]=value
}else{if(jQuery.isEmptyObject(cache)){jQuery.extend(this.cache[unlock],data)
}else{for(prop in data){cache[prop]=data[prop]
}}}return cache
},get:function(owner,key){var cache=this.cache[this.key(owner)];
return key===undefined?cache:cache[key]
},access:function(owner,key,value){var stored;
if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);
return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key))
}this.set(owner,key,value);
return value!==undefined?value:key
},remove:function(owner,key){var i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];
if(key===undefined){this.cache[unlock]={}
}else{if(jQuery.isArray(key)){name=key.concat(key.map(jQuery.camelCase))
}else{camel=jQuery.camelCase(key);
if(key in cache){name=[key,camel]
}else{name=camel;
name=name in cache?[name]:(name.match(rnotwhite)||[])
}}i=name.length;
while(i--){delete cache[name[i]]
}}},hasData:function(owner){return !jQuery.isEmptyObject(this.cache[owner[this.expando]]||{})
},discard:function(owner){if(owner[this.expando]){delete this.cache[owner[this.expando]]
}}};
var data_priv=new Data();
var data_user=new Data();
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;
function dataAttr(elem,key,data){var name;
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data
}catch(e){}data_user.set(elem,key,data)
}else{data=undefined
}}return data
}jQuery.extend({hasData:function(elem){return data_user.hasData(elem)||data_priv.hasData(elem)
},data:function(elem,name,data){return data_user.access(elem,name,data)
},removeData:function(elem,name){data_user.remove(elem,name)
},_data:function(elem,name,data){return data_priv.access(elem,name,data)
},_removeData:function(elem,name){data_priv.remove(elem,name)
}});
jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;
if(key===undefined){if(this.length){data=data_user.get(elem);
if(elem.nodeType===1&&!data_priv.get(elem,"hasDataAttrs")){i=attrs.length;
while(i--){if(attrs[i]){name=attrs[i].name;
if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name])
}}}data_priv.set(elem,"hasDataAttrs",true)
}}return data
}if(typeof key==="object"){return this.each(function(){data_user.set(this,key)
})
}return access(this,function(value){var data,camelKey=jQuery.camelCase(key);
if(elem&&value===undefined){data=data_user.get(elem,key);
if(data!==undefined){return data
}data=data_user.get(elem,camelKey);
if(data!==undefined){return data
}data=dataAttr(elem,camelKey,undefined);
if(data!==undefined){return data
}return
}this.each(function(){var data=data_user.get(this,camelKey);
data_user.set(this,camelKey,value);
if(key.indexOf("-")!==-1&&data!==undefined){data_user.set(this,key,value)
}})
},null,value,arguments.length>1,null,true)
},removeData:function(key){return this.each(function(){data_user.remove(this,key)
})
}});
jQuery.extend({queue:function(elem,type,data){var queue;
if(elem){type=(type||"fx")+"queue";
queue=data_priv.get(elem,type);
if(data){if(!queue||jQuery.isArray(data)){queue=data_priv.access(elem,type,jQuery.makeArray(data))
}else{queue.push(data)
}}return queue||[]
}},dequeue:function(elem,type){type=type||"fx";
var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)
};
if(fn==="inprogress"){fn=queue.shift();
startLength--
}if(fn){if(type==="fx"){queue.unshift("inprogress")
}delete hooks.stop;
fn.call(elem,next,hooks)
}if(!startLength&&hooks){hooks.empty.fire()
}},_queueHooks:function(elem,type){var key=type+"queueHooks";
return data_priv.get(elem,key)||data_priv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(elem,[type+"queue",key])
})})
}});
jQuery.fn.extend({queue:function(type,data){var setter=2;
if(typeof type!=="string"){data=type;
type="fx";
setter--
}if(arguments.length<setter){return jQuery.queue(this[0],type)
}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);
jQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)
}})
},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)
})
},clearQueue:function(type){return this.queue(type||"fx",[])
},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements])
}};
if(typeof type!=="string"){obj=type;
type=undefined
}type=type||"fx";
while(i--){tmp=data_priv.get(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){count++;
tmp.empty.add(resolve)
}}resolve();
return defer.promise(obj)
}});
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var cssExpand=["Top","Right","Bottom","Left"];
var isHidden=function(elem,el){elem=el||elem;
return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem)
};
var rcheckableType=(/^(?:checkbox|radio)$/i);
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue
})();
var strundefined=typeof undefined;
support.focusinBubbles="onfocusin" in window;
var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;
function returnTrue(){return true
}function returnFalse(){return false
}function safeActiveElement(){try{return document.activeElement
}catch(err){}}jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.get(elem);
if(!elemData){return
}if(handler.handler){handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector
}if(!handler.guid){handler.guid=jQuery.guid++
}if(!(events=elemData.events)){events=elemData.events={}
}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined
}
}types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){continue
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);
if(!(handlers=events[type])){handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)
}}}if(special.add){special.add.call(elem,handleObj);
if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid
}}if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)
}else{handlers.push(handleObj)
}jQuery.event.global[type]=true
}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.hasData(elem)&&data_priv.get(elem);
if(!elemData||!(events=elemData.events)){return
}types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true)
}continue
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);
if(handleObj.selector){handlers.delegateCount--
}if(special.remove){special.remove.call(elem,handleObj)
}}}if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)
}delete events[type]
}}if(jQuery.isEmptyObject(events)){delete elemData.handle;
data_priv.remove(elem,"events")
}},trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){return
}if(rfocusMorph.test(type+jQuery.event.triggered)){return
}if(type.indexOf(".")>=0){namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort()
}ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
event.result=undefined;
if(!event.target){event.target=elem
}data=data==null?[event]:jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return
}if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode
}for(;
cur;
cur=cur.parentNode){eventPath.push(cur);
tmp=cur
}if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)
}}i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;
handle=(data_priv.get(cur,"events")||{})[event.type]&&data_priv.get(cur,"handle");
if(handle){handle.apply(cur,data)
}handle=ontype&&cur[ontype];
if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);
if(event.result===false){event.preventDefault()
}}}event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){tmp=elem[ontype];
if(tmp){elem[ontype]=null
}jQuery.event.triggered=type;
elem[type]();
jQuery.event.triggered=undefined;
if(tmp){elem[ontype]=tmp
}}}}return event.result
},dispatch:function(event){event=jQuery.event.fix(event);
var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(data_priv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};
args[0]=event;
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return
}handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();
event.stopPropagation()
}}}}}if(special.postDispatch){special.postDispatch.call(this,event)
}return event.result
},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;
if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;
cur!==this;
cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){matches=[];
for(i=0;
i<delegateCount;
i++){handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length
}if(matches[sel]){matches.push(handleObj)
}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches})
}}}}if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)})
}return handlerQueue
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode
}return event
}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;
if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;
doc=eventDoc.documentElement;
body=eventDoc.body;
event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)
}if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)))
}return event
}},fix:function(event){if(event[jQuery.expando]){return event
}var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];
if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}
}copy=fixHook.props?this.props.concat(fixHook.props):this.props;
event=new jQuery.Event(originalEvent);
i=copy.length;
while(i--){prop=copy[i];
event[prop]=originalEvent[prop]
}if(!event.target){event.target=document
}if(event.target.nodeType===3){event.target=event.target.parentNode
}return fixHook.filter?fixHook.filter(event,originalEvent):event
},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();
return false
}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();
return false
}},_default:function(event){return jQuery.nodeName(event.target,"a")
}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result
}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});
if(bubble){jQuery.event.trigger(e,null,elem)
}else{jQuery.event.dispatch.call(elem,e)
}if(e.isDefaultPrevented()){event.preventDefault()
}}};
jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)
}};
jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)
}if(src&&src.type){this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse
}else{this.type=src
}if(props){jQuery.extend(this,props)
}this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true
};
jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(e&&e.preventDefault){e.preventDefault()
}},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(e&&e.stopPropagation){e.stopPropagation()
}},stopImmediatePropagation:function(){var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()
}this.stopPropagation()
}};
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix
}return ret
}}
});
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)
};
jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix);
if(!attaches){doc.addEventListener(orig,handler,true)
}data_priv.access(doc,fix,(attaches||0)+1)
},teardown:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix)-1;
if(!attaches){doc.removeEventListener(orig,handler,true);
data_priv.remove(doc,fix)
}else{data_priv.access(doc,fix,attaches)
}}}
})
}jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;
if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;
selector=undefined
}for(type in types){this.on(type,selector,data,types[type],one)
}return this
}if(data==null&&fn==null){fn=selector;
data=selector=undefined
}else{if(fn==null){if(typeof selector==="string"){fn=data;
data=undefined
}else{fn=data;
data=selector;
selector=undefined
}}}if(fn===false){fn=returnFalse
}else{if(!fn){return this
}}if(one===1){origFn=fn;
fn=function(event){jQuery().off(event);
return origFn.apply(this,arguments)
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)
}return this.each(function(){jQuery.event.add(this,types,fn,data,selector)
})
},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1)
},off:function(types,selector,fn){var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;
jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);
return this
}if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])
}return this
}if(selector===false||typeof selector==="function"){fn=selector;
selector=undefined
}if(fn===false){fn=returnFalse
}return this.each(function(){jQuery.event.remove(this,types,fn,selector)
})
},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)
})
},triggerHandler:function(type,data){var elem=this[0];
if(elem){return jQuery.event.trigger(type,data,elem,true)
}}});
var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem
}function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;
return elem
}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);
if(match){elem.type=match[1]
}else{elem.removeAttribute("type")
}return elem
}function setGlobalEval(elems,refElements){var i=0,l=elems.length;
for(;
i<l;
i++){data_priv.set(elems[i],"globalEval",!refElements||data_priv.get(refElements[i],"globalEval"))
}}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;
if(dest.nodeType!==1){return
}if(data_priv.hasData(src)){pdataOld=data_priv.access(src);
pdataCur=data_priv.set(dest,pdataOld);
events=pdataOld.events;
if(events){delete pdataCur.handle;
pdataCur.events={};
for(type in events){for(i=0,l=events[type].length;
i<l;
i++){jQuery.event.add(dest,type,events[type][i])
}}}}if(data_user.hasData(src)){udataOld=data_user.access(src);
udataCur=jQuery.extend({},udataOld);
data_user.set(dest,udataCur)
}}function getAll(context,tag){var ret=context.getElementsByTagName?context.getElementsByTagName(tag||"*"):context.querySelectorAll?context.querySelectorAll(tag||"*"):[];
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret
}function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked
}else{if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue
}}}jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0,l=srcElements.length;
i<l;
i++){fixInput(srcElements[i],destElements[i])
}}if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0,l=srcElements.length;
i<l;
i++){cloneCopyEvent(srcElements[i],destElements[i])
}}else{cloneCopyEvent(elem,clone)
}}destElements=getAll(clone,"script");
if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"))
}return clone
},buildFragment:function(elems,context,scripts,selection){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;
for(;
i<l;
i++){elem=elems[i];
if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem)
}else{if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];
j=wrap[0];
while(j--){tmp=tmp.lastChild
}jQuery.merge(nodes,tmp.childNodes);
tmp=fragment.firstChild;
tmp.textContent=""
}}}}fragment.textContent="";
i=0;
while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue
}contains=jQuery.contains(elem.ownerDocument,elem);
tmp=getAll(fragment.appendChild(elem),"script");
if(contains){setGlobalEval(tmp)
}if(scripts){j=0;
while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem)
}}}}return fragment
},cleanData:function(elems){var data,elem,type,key,special=jQuery.event.special,i=0;
for(;
(elem=elems[i])!==undefined;
i++){if(jQuery.acceptData(elem)){key=elem[data_priv.expando];
if(key&&(data=data_priv.cache[key])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type)
}else{jQuery.removeEvent(elem,type,data.handle)
}}}if(data_priv.cache[key]){delete data_priv.cache[key]
}}}delete data_user.cache[elem[data_user.expando]]
}}});
jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value
}})
},null,value,arguments.length)
},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);
target.appendChild(elem)
}})
},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild)
}})
},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this)
}})
},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling)
}})
},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;
for(;
(elem=elems[i])!=null;
i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem))
}if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"))
}elem.parentNode.removeChild(elem)
}}return this
},empty:function(){var elem,i=0;
for(;
(elem=this[i])!=null;
i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));
elem.textContent=""
}}return this
},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)
})
},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;
if(value===undefined&&elem.nodeType===1){return elem.innerHTML
}if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");
try{for(;
i<l;
i++){elem=this[i]||{};
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));
elem.innerHTML=value
}}elem=0
}catch(e){}}if(elem){this.empty().append(value)
}},null,value,arguments.length)
},replaceWith:function(){var arg=arguments[0];
this.domManip(arguments,function(elem){arg=this.parentNode;
jQuery.cleanData(getAll(this));
if(arg){arg.replaceChild(elem,this)
}});
return arg&&(arg.length||arg.nodeType)?this:this.remove()
},detach:function(selector){return this.remove(selector,true)
},domManip:function(args,callback){args=concat.apply([],args);
var fragment,first,scripts,hasScripts,node,doc,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);
if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);
if(isFunction){args[0]=value.call(this,index,self.html())
}self.domManip(args,callback)
})
}if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);
first=fragment.firstChild;
if(fragment.childNodes.length===1){fragment=first
}if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;
i<l;
i++){node=fragment;
if(i!==iNoClone){node=jQuery.clone(node,true,true);
if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))
}}callback.call(this[i],node,i)
}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;
jQuery.map(scripts,restoreScript);
for(i=0;
i<hasScripts;
i++){node=scripts[i];
if(rscriptType.test(node.type||"")&&!data_priv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src)
}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""))
}}}}}}return this
}});
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;
for(;
i<=last;
i++){elems=i===last?this:this.clone(true);
jQuery(insert[i])[original](elems);
push.apply(ret,elems.get())
}return this.pushStack(ret)
}
});
var iframe,elemdisplay={};
function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))?style.display:jQuery.css(elem[0],"display");
elem.detach();
return display
}function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];
if(!display){display=actualDisplay(nodeName,doc);
if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
doc=iframe[0].contentDocument;
doc.write();
doc.close();
display=actualDisplay(nodeName,doc);
iframe.detach()
}elemdisplay[nodeName]=display
}return display
}var rmargin=(/^margin/);
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var getStyles=function(elem){return elem.ownerDocument.defaultView.getComputedStyle(elem,null)
};
function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;
computed=computed||getStyles(elem);
if(computed){ret=computed.getPropertyValue(name)||computed[name]
}if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)
}if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth
}}return ret!==undefined?ret+"":ret
}function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;
return
}return(this.get=hookFn).apply(this,arguments)
}}
}(function(){var pixelPositionVal,boxSizingReliableVal,docElem=document.documentElement,container=document.createElement("div"),div=document.createElement("div");
if(!div.style){return
}div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
container.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
container.appendChild(div);
function computePixelPositionAndBoxSizingReliable(){div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
div.innerHTML="";
docElem.appendChild(container);
var divStyle=window.getComputedStyle(div,null);
pixelPositionVal=divStyle.top!=="1%";
boxSizingReliableVal=divStyle.width==="4px";
docElem.removeChild(container)
}if(window.getComputedStyle){jQuery.extend(support,{pixelPosition:function(){computePixelPositionAndBoxSizingReliable();
return pixelPositionVal
},boxSizingReliable:function(){if(boxSizingReliableVal==null){computePixelPositionAndBoxSizingReliable()
}return boxSizingReliableVal
},reliableMarginRight:function(){var ret,marginDiv=div.appendChild(document.createElement("div"));
marginDiv.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
marginDiv.style.marginRight=marginDiv.style.width="0";
div.style.width="1px";
docElem.appendChild(container);
ret=!parseFloat(window.getComputedStyle(marginDiv,null).marginRight);
docElem.removeChild(container);
return ret
}})
}})();
jQuery.swap=function(elem,options,callback,args){var ret,name,old={};
for(name in options){old[name]=elem.style[name];
elem.style[name]=options[name]
}ret=callback.apply(elem,args||[]);
for(name in options){elem.style[name]=old[name]
}return ret
};
var rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];
function vendorPropName(style,name){if(name in style){return name
}var capName=name[0].toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;
while(i--){name=cssPrefixes[i]+capName;
if(name in style){return name
}}return origName
}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);
return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value
}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;
for(;
i<4;
i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles)
}if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles)
}if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)
}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)
}}}return val
}function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";
if(val<=0||val==null){val=curCSS(elem,name,styles);
if(val<0||val==null){val=elem.style[name]
}if(rnumnonpx.test(val)){return val
}valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);
val=parseFloat(val)||0
}return(val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px"
}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;
for(;
index<length;
index++){elem=elements[index];
if(!elem.style){continue
}values[index]=data_priv.get(elem,"olddisplay");
display=elem.style.display;
if(show){if(!values[index]&&display==="none"){elem.style.display=""
}if(elem.style.display===""&&isHidden(elem)){values[index]=data_priv.access(elem,"olddisplay",defaultDisplay(elem.nodeName))
}}else{hidden=isHidden(elem);
if(display!=="none"||!hidden){data_priv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"))
}}}for(index=0;
index<length;
index++){elem=elements[index];
if(!elem.style){continue
}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none"
}}return elements
}jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");
return ret===""?"1":ret
}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":"cssFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return
}var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;
name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(value!==undefined){type=typeof value;
if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));
type="number"
}if(value==null||value!==value){return
}if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"
}if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit"
}if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value
}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret
}return style[name]
}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);
name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra)
}if(val===undefined){val=curCSS(elem,name,styles)
}if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]
}if(extra===""||extra){num=parseFloat(val);
return extra===true||jQuery.isNumeric(num)?num||0:val
}return val
}});
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)
}):getWidthOrHeight(elem,name,extra)
}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);
return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0)
}}
});
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{display:"inline-block"},curCSS,[elem,"marginRight"])
}});
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];
for(;
i<4;
i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]
}return expanded
}};
if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber
}});
jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;
if(jQuery.isArray(name)){styles=getStyles(elem);
len=name.length;
for(;
i<len;
i++){map[name[i]]=jQuery.css(elem,name[i],false,styles)
}return map
}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)
},name,value,arguments.length>1)
},show:function(){return showHide(this,true)
},hide:function(){return showHide(this)
},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide()
}return this.each(function(){if(isHidden(this)){jQuery(this).show()
}else{jQuery(this).hide()
}})
}});
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)
}jQuery.Tween=Tween;
Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;
this.prop=prop;
this.easing=easing||"swing";
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(jQuery.cssNumber[prop]?"":"px")
},cur:function(){var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)
},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];
if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration)
}else{this.pos=eased=percent
}this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(hooks&&hooks.set){hooks.set(this)
}else{Tween.propHooks._default.set(this)
}return this
}};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={_default:{get:function(tween){var result;
if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop]
}result=jQuery.css(tween.elem,tween.prop,"");
return !result||result==="auto"?0:result
},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)
}else{if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)
}else{tween.elem[tween.prop]=tween.now
}}}}};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now
}}};
jQuery.easing={linear:function(p){return p
},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2
}};
jQuery.fx=Tween.prototype.init;
jQuery.fx.step={};
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;
if(start&&start[3]!==unit){unit=unit||start[3];
parts=parts||[];
start=+target||1;
do{scale=scale||".5";
start=start/scale;
jQuery.style(tween.elem,prop,start+unit)
}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations)
}if(parts){start=tween.start=+start||+target||0;
tween.unit=unit;
tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2]
}return tween
}]};
function createFxNow(){setTimeout(function(){fxNow=undefined
});
return(fxNow=jQuery.now())
}function genFx(type,includeWidth){var which,i=0,attrs={height:type};
includeWidth=includeWidth?1:0;
for(;
i<4;
i+=2-includeWidth){which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type
}if(includeWidth){attrs.opacity=attrs.width=type
}return attrs
}function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;
for(;
index<length;
index++){if((tween=collection[index].call(animation,prop,value))){return tween
}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=data_priv.get(elem,"fxshow");
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()
}}
}hooks.unqueued++;
anim.always(function(){anim.always(function(){hooks.unqueued--;
if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()
}})
})
}if(elem.nodeType===1&&("height" in props||"width" in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];
display=jQuery.css(elem,"display");
checkDisplay=display==="none"?data_priv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;
if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block"
}}if(opts.overflow){style.overflow="hidden";
anim.always(function(){style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2]
})
}for(prop in props){value=props[prop];
if(rfxtypes.exec(value)){delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true
}else{continue
}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)
}else{display=undefined
}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden
}}else{dataShow=data_priv.access(elem,"fxshow",{})
}if(toggle){dataShow.hidden=!hidden
}if(hidden){jQuery(elem).show()
}else{anim.done(function(){jQuery(elem).hide()
})
}anim.done(function(){var prop;
data_priv.remove(elem,"fxshow");
for(prop in orig){jQuery.style(elem,prop,orig[prop])
}});
for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){dataShow[prop]=tween.start;
if(hidden){tween.end=tween.start;
tween.start=prop==="width"||prop==="height"?1:0
}}}}else{if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display
}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;
for(index in props){name=jQuery.camelCase(index);
easing=specialEasing[name];
value=props[index];
if(jQuery.isArray(value)){easing=value[1];
value=props[index]=value[0]
}if(index!==name){props[name]=value;
delete props[index]
}hooks=jQuery.cssHooks[name];
if(hooks&&"expand" in hooks){value=hooks.expand(value);
delete props[name];
for(index in value){if(!(index in props)){props[index]=value[index];
specialEasing[index]=easing
}}}else{specialEasing[name]=easing
}}}function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem
}),tick=function(){if(stopped){return false
}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;
for(;
index<length;
index++){animation.tweens[index].run(percent)
}deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){return remaining
}else{deferred.resolveWith(elem,[animation]);
return false
}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween
},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;
if(stopped){return this
}stopped=true;
for(;
index<length;
index++){animation.tweens[index].run(1)
}if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])
}else{deferred.rejectWith(elem,[animation,gotoEnd])
}return this
}}),props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;
index<length;
index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);
if(result){return result
}}jQuery.map(props,createTween,animation);
if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)
}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));
return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
}jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;
props=["*"]
}else{props=props.split(" ")
}var prop,index=0,length=props.length;
for(;
index<length;
index++){prop=props[index];
tweeners[prop]=tweeners[prop]||[];
tweeners[prop].unshift(callback)
}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback)
}else{animationPrefilters.push(callback)
}}});
jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};
opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;
if(opt.queue==null||opt.queue===true){opt.queue="fx"
}opt.old=opt.complete;
opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this)
}if(opt.queue){jQuery.dequeue(this,opt.queue)
}};
return opt
};
jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)
},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);
if(empty||data_priv.get(this,"finish")){anim.stop(true)
}};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation)
},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd)
};
if(typeof type!=="string"){gotoEnd=clearQueue;
clearQueue=type;
type=undefined
}if(clearQueue&&type!==false){this.queue(type||"fx",[])
}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=data_priv.get(this);
if(index){if(data[index]&&data[index].stop){stopQueue(data[index])
}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])
}}}for(index=timers.length;
index--;
){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1)
}}if(dequeue||!gotoEnd){jQuery.dequeue(this,type)
}})
},finish:function(type){if(type!==false){type=type||"fx"
}return this.each(function(){var index,data=data_priv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;
data.finish=true;
jQuery.queue(this,type,[]);
if(hooks&&hooks.stop){hooks.stop.call(this,true)
}for(index=timers.length;
index--;
){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);
timers.splice(index,1)
}}for(index=0;
index<length;
index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this)
}}delete data.finish
})
}});
jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];
jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback)
}
});
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)
}
});
jQuery.timers=[];
jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;
fxNow=jQuery.now();
for(;
i<timers.length;
i++){timer=timers[i];
if(!timer()&&timers[i]===timer){timers.splice(i--,1)
}}if(!timers.length){jQuery.fx.stop()
}fxNow=undefined
};
jQuery.fx.timer=function(timer){jQuery.timers.push(timer);
if(timer()){jQuery.fx.start()
}else{jQuery.timers.pop()
}};
jQuery.fx.interval=13;
jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)
}};
jQuery.fx.stop=function(){clearInterval(timerId);
timerId=null
};
jQuery.fx.speeds={slow:600,fast:200,_default:400};
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);
hooks.stop=function(){clearTimeout(timeout)
}
})
};
(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));
input.type="checkbox";
support.checkOn=input.value!=="";
support.optSelected=opt.selected;
select.disabled=true;
support.optDisabled=!opt.disabled;
input=document.createElement("input");
input.value="t";
input.type="radio";
support.radioValue=input.value==="t"
})();
var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle;
jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1)
},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)
})
}});
jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;
if(!elem||nType===3||nType===8||nType===2){return
}if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value)
}if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();
hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook)
}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name)
}else{if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret
}else{elem.setAttribute(name,value+"");
return value
}}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret
}else{ret=jQuery.find.attr(elem,name);
return ret==null?undefined:ret
}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);
if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;
if(jQuery.expr.match.bool.test(name)){elem[propName]=false
}elem.removeAttribute(name)
}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;
elem.setAttribute("type",value);
if(val){elem.value=val
}return value
}}}}});
boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name)
}else{elem.setAttribute(name,name)
}return name
}};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;
attrHandle[name]=function(elem,name,isXML){var ret,handle;
if(!isXML){handle=attrHandle[name];
attrHandle[name]=ret;
ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;
attrHandle[name]=handle
}return ret
}
});
var rfocusable=/^(?:input|select|textarea|button)$/i;
jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1)
},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name]
})
}});
jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;
if(!elem||nType===3||nType===8||nType===2){return
}notxml=nType!==1||!jQuery.isXMLDoc(elem);
if(notxml){name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name]
}if(value!==undefined){return hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value)
}else{return hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name]
}},propHooks:{tabIndex:{get:function(elem){return elem.hasAttribute("tabindex")||rfocusable.test(elem.nodeName)||elem.href?elem.tabIndex:-1
}}}});
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;
if(parent&&parent.parentNode){parent.parentNode.selectedIndex
}return null
}}
}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this
});
var rclass=/[\t\r\n\f]/g;
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=typeof value==="string"&&value,i=0,len=this.length;
if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))
})
}if(proceed){classes=(value||"").match(rnotwhite)||[];
for(;
i<len;
i++){elem=this[i];
cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");
if(cur){j=0;
while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" "
}}finalValue=jQuery.trim(cur);
if(elem.className!==finalValue){elem.className=finalValue
}}}}return this
},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=arguments.length===0||typeof value==="string"&&value,i=0,len=this.length;
if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))
})
}if(proceed){classes=(value||"").match(rnotwhite)||[];
for(;
i<len;
i++){elem=this[i];
cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");
if(cur){j=0;
while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ")
}}finalValue=value?jQuery.trim(cur):"";
if(elem.className!==finalValue){elem.className=finalValue
}}}}return this
},toggleClass:function(value,stateVal){var type=typeof value;
if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value)
}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)
})
}return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];
while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className)
}else{self.addClass(className)
}}}else{if(type===strundefined||type==="boolean"){if(this.className){data_priv.set(this,"__className__",this.className)
}this.className=this.className||value===false?"":data_priv.get(this,"__className__")||""
}}})
},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;
for(;
i<l;
i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true
}}return false
}});
var rreturn=/\r/g;
jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];
if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];
if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret
}ret=elem.value;
return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret
}return
}isFunction=jQuery.isFunction(value);
return this.each(function(i){var val;
if(this.nodeType!==1){return
}if(isFunction){val=value.call(this,i,jQuery(this).val())
}else{val=value
}if(val==null){val=""
}else{if(typeof val==="number"){val+=""
}else{if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""
})
}}}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val
}})
}});
jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");
return val!=null?val:jQuery.trim(jQuery.text(elem))
}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;
for(;
i<max;
i++){option=options[i];
if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();
if(one){return value
}values.push(value)
}}return values
},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;
while(i--){option=options[i];
if((option.selected=jQuery.inArray(option.value,values)>=0)){optionSet=true
}}if(!optionSet){elem.selectedIndex=-1
}return values
}}}});
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0)
}}};
if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value
}
}});
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)
}
});
jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)
},bind:function(types,data,fn){return this.on(types,null,data,fn)
},unbind:function(types,fn){return this.off(types,null,fn)
},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)
},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)
}});
var nonce=jQuery.now();
var rquery=(/\?/);
jQuery.parseJSON=function(data){return JSON.parse(data+"")
};
jQuery.parseXML=function(data){var xml,tmp;
if(!data||typeof data!=="string"){return null
}try{tmp=new DOMParser();
xml=tmp.parseFromString(data,"text/xml")
}catch(e){xml=undefined
}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)
}return xml
};
var ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*");
try{ajaxLocation=location.href
}catch(e){ajaxLocation=document.createElement("a");
ajaxLocation.href="";
ajaxLocation=ajaxLocation.href
}ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;
dataTypeExpression="*"
}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];
if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func)
}else{(structure[dataType]=structure[dataType]||[]).push(func)
}}}}
}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);
function inspect(dataType){var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false
}else{if(seekingTransport){return !(selected=dataTypeOrTransport)
}}});
return selected
}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")
}function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key]
}}if(deep){jQuery.extend(true,target,deep)
}return target
}function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){dataTypes.shift();
if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")
}}if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);
break
}}}if(dataTypes[0] in responses){finalDataType=dataTypes[0]
}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;
break
}if(!firstDataType){firstDataType=type
}}finalDataType=finalDataType||firstDataType
}if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)
}return responses[finalDataType]
}}function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]
}}current=dataTypes.shift();
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response
}if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)
}prev=current;
current=dataTypes.shift();
if(current){if(current==="*"){current=prev
}else{if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){for(conv2 in converters){tmp=conv2.split(" ");
if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];
if(conv){if(conv===true){conv=converters[conv2]
}else{if(converters[conv2]!==true){current=tmp[0];
dataTypes.unshift(tmp[1])
}}break
}}}}if(conv!==true){if(conv&&s["throws"]){response=conv(response)
}else{try{response=conv(response)
}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}
}}}}}}}return{state:"success",data:response}
}jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)
},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;
url=undefined
}options=options||{};
var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;
if(state===2){if(!responseHeaders){responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2]
}}match=responseHeaders[key.toLowerCase()]
}return match==null?null:match
},getAllResponseHeaders:function(){return state===2?responseHeadersString:null
},setRequestHeader:function(name,value){var lname=name.toLowerCase();
if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;
requestHeaders[name]=value
}return this
},overrideMimeType:function(type){if(!state){s.mimeType=type
}return this
},statusCode:function(map){var code;
if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]]
}}else{jqXHR.always(map[jqXHR.status])
}}return this
},abort:function(statusText){var finalText=statusText||strAbort;
if(transport){transport.abort(finalText)
}done(0,finalText);
return this
}};
deferred.promise(jqXHR).complete=completeDeferred.add;
jqXHR.success=jqXHR.done;
jqXHR.error=jqXHR.fail;
s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];
if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))
}if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)
}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(state===2){return jqXHR
}fireGlobals=s.global;
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")
}s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url;
if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);
delete s.data
}if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++
}}if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])
}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])
}}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)
}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])
}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort()
}strAbort="abort";
for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i])
}transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){done(-1,"No Transport")
}else{jqXHR.readyState=1;
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])
}if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")
},s.timeout)
}try{state=1;
transport.send(requestHeaders,done)
}catch(e){if(state<2){done(-1,e)
}else{throw e
}}}function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;
if(state===2){return
}state=2;
if(timeoutTimer){clearTimeout(timeoutTimer)
}transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){response=ajaxHandleResponses(s,jqXHR,responses)
}response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){jQuery.lastModified[cacheURL]=modified
}modified=jqXHR.getResponseHeader("etag");
if(modified){jQuery.etag[cacheURL]=modified
}}if(status===204||s.type==="HEAD"){statusText="nocontent"
}else{if(status===304){statusText="notmodified"
}else{statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error
}}}else{error=statusText;
if(status||!statusText){statusText="error";
if(status<0){status=0
}}}jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])
}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])
}jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])
}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")
}}}return jqXHR
},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")
},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")
}});
jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;
callback=data;
data=undefined
}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback})
}
});
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)
}
});
jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true})
};
jQuery.fn.extend({wrapAll:function(html){var wrap;
if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))
})
}if(this[0]){wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){wrap.insertBefore(this[0])
}wrap.map(function(){var elem=this;
while(elem.firstElementChild){elem=elem.firstElementChild
}return elem
}).append(this)
}return this
},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))
})
}return this.each(function(){var self=jQuery(this),contents=self.contents();
if(contents.length){contents.wrapAll(html)
}else{self.append(html)
}})
},wrap:function(html){var isFunction=jQuery.isFunction(html);
return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)
})
},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)
}}).end()
}});
jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0
};
jQuery.expr.filters.visible=function(elem){return !jQuery.expr.filters.hidden(elem)
};
var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){var name;
if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)
}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)
}})
}else{if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)
}}else{add(prefix,obj)
}}}jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)
};
if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional
}if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value)
})
}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)
}}return s.join("&").replace(r20,"+")
};
jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this
}).filter(function(){var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))
}).map(function(i,elem){var val=jQuery(this).val();
return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}).get()
}});
jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest()
}catch(e){}};
var xhrId=0,xhrCallbacks={},xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();
if(window.ActiveXObject){jQuery(window).on("unload",function(){for(var key in xhrCallbacks){xhrCallbacks[key]()
}})
}support.cors=!!xhrSupported&&("withCredentials" in xhrSupported);
support.ajax=xhrSupported=!!xhrSupported;
jQuery.ajaxTransport(function(options){var callback;
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;
xhr.open(options.type,options.url,options.async,options.username,options.password);
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i]
}}if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType)
}if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"
}for(i in headers){xhr.setRequestHeader(i,headers[i])
}callback=function(type){return function(){if(callback){delete xhrCallbacks[id];
callback=xhr.onload=xhr.onerror=null;
if(type==="abort"){xhr.abort()
}else{if(type==="error"){complete(xhr.status,xhr.statusText)
}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,typeof xhr.responseText==="string"?{text:xhr.responseText}:undefined,xhr.getAllResponseHeaders())
}}}}
};
xhr.onload=callback();
xhr.onerror=callback("error");
callback=xhrCallbacks[id]=callback("abort");
try{xhr.send(options.hasContent&&options.data||null)
}catch(e){if(callback){throw e
}}},abort:function(){if(callback){callback()
}}}
}});
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);
return text
}}});
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false
}if(s.crossDomain){s.type="GET"
}});
jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;
return{send:function(_,complete){script=jQuery("<script>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();
callback=null;
if(evt){complete(evt.type==="error"?404:200,evt.type)
}});
document.head.appendChild(script[0])
},abort:function(){if(callback){callback()
}}}
}});
var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback
}});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");
if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)
}else{if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName
}}s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")
}return responseContainer[0]
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){responseContainer=arguments
};
jqXHR.always(function(){window[callbackName]=overwritten;
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName)
}if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])
}responseContainer=overwritten=undefined
});
return"script"
}});
jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null
}if(typeof context==="boolean"){keepScripts=context;
context=false
}context=context||document;
var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];
if(parsed){return[context.createElement(parsed[1])]
}parsed=jQuery.buildFragment([data],context,scripts);
if(scripts&&scripts.length){jQuery(scripts).remove()
}return jQuery.merge([],parsed.childNodes)
};
var _load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)
}var selector,type,response,self=this,off=url.indexOf(" ");
if(off>=0){selector=jQuery.trim(url.slice(off));
url=url.slice(0,off)
}if(jQuery.isFunction(params)){callback=params;
params=undefined
}else{if(params&&typeof params==="object"){type="POST"
}}if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;
self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)
}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR])
})
}return this
};
jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem
}).length
};
var docElem=window.document.documentElement;
function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView
}jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};
if(position==="static"){elem.style.position="relative"
}curOffset=curElem.offset();
curCSSTop=jQuery.css(elem,"top");
curCSSLeft=jQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;
if(calculatePosition){curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left
}else{curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0
}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)
}if(options.top!=null){props.top=(options.top-curOffset.top)+curTop
}if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft
}if("using" in options){options.using.call(elem,props)
}else{curElem.css(props)
}}};
jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)
})
}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;
if(!doc){return
}docElem=doc.documentElement;
if(!jQuery.contains(docElem,elem)){return box
}if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect()
}win=getWindow(doc);
return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft}
},position:function(){if(!this[0]){return
}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};
if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()
}else{offsetParent=this.offsetParent();
offset=this.offset();
if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset()
}parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);
parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true)
}return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;
while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent
}return offsetParent||docElem
})
}});
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;
jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);
if(val===undefined){return win?win[prop]:elem[method]
}if(win){win.scrollTo(!top?val:window.pageXOffset,top?val:window.pageYOffset)
}else{elem[method]=val
}},method,val,arguments.length,null)
}
});
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed
}})
});
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){var doc;
if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name]
}if(elem.nodeType===9){doc=elem.documentElement;
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])
}return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)
},type,chainable?margin:undefined,chainable,null)
}
})
});
jQuery.fn.size=function(){return this.length
};
jQuery.fn.andSelf=jQuery.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery
})
}var _jQuery=window.jQuery,_$=window.$;
jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$
}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery
}return jQuery
};
if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery
}return jQuery
}));
var FlashDetect=new function(){var a=this;
a.installed=false;
a.raw="";
a.major=-1;
a.minor=-1;
a.revision=-1;
a.revisionStr="";
var b=[{name:"ShockwaveFlash.ShockwaveFlash.7",version:function(h){return d(h)
}},{name:"ShockwaveFlash.ShockwaveFlash.6",version:function(k){var h="6,0,21";
try{k.AllowScriptAccess="always";
h=d(k)
}catch(j){}return h
}},{name:"ShockwaveFlash.ShockwaveFlash",version:function(h){return d(h)
}}];
var d=function(k){var h=-1;
try{h=k.GetVariable("$version")
}catch(j){}return h
};
var g=function(h){var k=-1;
try{k=new ActiveXObject(h)
}catch(j){k={activeXError:true}
}return k
};
var c=function(j){var h=j.split(",");
return{raw:j,major:parseInt(h[0].split(" ")[1],10),minor:parseInt(h[1],10),revision:parseInt(h[2],10),revisionStr:h[2]}
};
var f=function(l){var j=l.split(/ +/);
var k=j[2].split(/\./);
var h=j[3];
return{raw:l,major:parseInt(k[0],10),minor:parseInt(k[1],10),revisionStr:h,revision:e(h)}
};
var e=function(h){return parseInt(h.replace(/[a-zA-Z]/g,""),10)||a.revision
};
a.majorAtLeast=function(h){return a.major>=h
};
a.minorAtLeast=function(h){return a.minor>=h
};
a.revisionAtLeast=function(h){return a.revision>=h
};
a.versionAtLeast=function(j){var k=[a.major,a.minor,a.revision];
var h=Math.min(k.length,arguments.length);
for(i=0;
i<h;
i++){if(k[i]>=arguments[i]){if(i+1<h&&k[i]==arguments[i]){continue
}else{return true
}}else{return false
}}};
a.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var l="application/x-shockwave-flash";
var k=navigator.mimeTypes;
if(k&&k[l]&&k[l].enabledPlugin&&k[l].enabledPlugin.description){var h=k[l].enabledPlugin.description;
var m=f(h);
a.raw=m.raw;
a.major=m.major;
a.minor=m.minor;
a.revisionStr=m.revisionStr;
a.revision=m.revision;
a.installed=true
}}else{if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var h=-1;
for(var j=0;
j<b.length&&h==-1;
j++){var n=g(b[j].name);
if(!n.activeXError){a.installed=true;
h=b[j].version(n);
if(h!=-1){var m=c(h);
a.raw=m.raw;
a.major=m.major;
a.minor=m.minor;
a.revision=m.revision;
a.revisionStr=m.revisionStr
}}}}}}()
};
FlashDetect.JS_RELEASE="1.0.4";
(function(c,d){var b=null;
function a(a0,aj){this.setupOptions={url:(a0||null),flashVersion:8,debugMode:true,debugFlash:false,useConsole:true,consoleOnly:true,waitForWindowLoad:false,bgColor:"#ffffff",useHighPerformance:false,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1000,wmode:null,allowScriptAccess:"always",useFlashBlock:false,useHTML5Audio:true,html5Test:/^(probably|maybe)$/i,preferFlash:true,noSWFCache:false,idPrefix:"sound"};
this.defaultOptions={autoLoad:false,autoPlay:false,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:true,multiShotEvents:false,position:null,pan:0,stream:true,to:null,type:null,usePolicyFile:false,volume:100};
this.flash9Options={isMovieStar:null,usePeakData:false,useWaveformData:false,useEQData:false,onbufferchange:null,ondataerror:null};
this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};
this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:true},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:false},ogg:{type:["audio/ogg; codecs=vorbis"],required:false},opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:false},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:false}};
this.movieID="sm2-container";
this.id=(aj||"sm2movie");
this.debugID="soundmanager-debug";
this.debugURLParam=/([#?&])debug=1/i;
this.versionNumber="V2.97a.20130512";
this.version=null;
this.movieURL=null;
this.altURL=null;
this.swfLoaded=false;
this.enabled=false;
this.oMC=null;
this.sounds={};
this.soundIDs=[];
this.muted=false;
this.didFlashBlock=false;
this.filePattern=null;
this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};
this.features={buffering:false,peakData:false,waveformData:false,eqData:false,movieStar:false};
this.sandbox={type:null,types:{remote:"remote (domain-based) rules",localWithFile:"local with file access (no internet access)",localWithNetwork:"local with network (internet access only, no local access)",localTrusted:"local, trusted (local+internet access)"},description:null,noRemote:null,noLocal:null};
this.html5={usingFlash:null};
this.flash={};
this.html5Only=false;
this.ignoreFlash=false;
var al,ap=this,a8=null,ae=null,aX="soundManager",H=aX+": ",a4="HTML5::",ao,av=navigator.userAgent,z=c.location.href.toString(),ab=document,V,B,aK,bh,x=[],bg=true,O,aq=false,aU=false,ay=false,a1=false,bb=false,X,ax=0,y,a2,a6,a3,aa,aS,u,A,bc,aV,v,e,l,aE,N,bj,r,bf,J,ac,n,F,aI=["log","info","warn","error"],Z=8,Y,t,aA,aL=null,ak=null,be,aB,o,G,aD,C,q,at,K,aR=false,aJ=false,aP,P,af,M=0,bd=null,ad,ar=[],ag,D=null,U,ba,an,aM,g,Q,aO,am,T=Array.prototype.slice,aZ=false,m,au,S,E,j,aG,R,aF,ah=0,aW=av.match(/(ipad|iphone|ipod)/i),aw=av.match(/android/i),a7=av.match(/msie/i),aH=av.match(/webkit/i),aY=(av.match(/safari/i)&&!av.match(/chrome/i)),w=(av.match(/opera/i)),k=(av.match(/firefox/i)),aT=(av.match(/(mobile|pre\/|xoom)/i)||aW||aw),a5=(!z.match(/usehtml5audio/i)&&!z.match(/sm2\-ignorebadua/i)&&aY&&!av.match(/silk/i)&&av.match(/OS X 10_6_([3-7])/i)),L=(c.console!==d&&console.log!==d),aC=(ab.hasFocus!==d?ab.hasFocus():null),a9=(aY&&(ab.hasFocus===d||!ab.hasFocus())),az=!a9,s=/(mp3|mp4|mpa|m4a|m4b)/i,h=1000,p="about:blank",I=(ab.location?ab.location.protocol.match(/http/i):null),aN=(!I?"http://":""),f=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,W=["mpeg4","aac","flv","mov","mp4","m4v","f4v","m4a","m4b","mp4v","3gp","3g2"],ai=new RegExp("\\.("+W.join("|")+")(\\?.*)?$","i");
this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
this.useAltURL=!I;
G={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"};
this.hasHTML5=(function(){try{return(Audio!==d&&(w&&opera!==d&&opera.version()<10?new Audio(null):new Audio()).canPlayType!==d)
}catch(bk){return false
}}());
this.setup=function(bk){var bl=(!ap.url);
if(bk!==d&&ay&&D&&ap.ok()&&(bk.flashVersion!==d||bk.url!==d||bk.html5Test!==d)){at(be("setupLate"))
}a6(bk);
if(bk){if(bl&&r&&bk.url!==d){ap.beginDelayedInit()
}if(!r&&bk.url!==d&&ab.readyState==="complete"){setTimeout(N,1)
}}return ap
};
this.ok=function(){return(D?(ay&&!a1):(ap.useHTML5Audio&&ap.hasHTML5))
};
this.supported=this.ok;
this.getMovie=function(bk){return ao(bk)||ab[bk]||c[bk]
};
this.createSound=function(bm,bo){var bp,bq,bl,bn=null;
bp=aX+".createSound(): ";
bq=bp+be(!ay?"notReady":"notOK");
if(!ay||!ap.ok()){at(bq);
return false
}if(bo!==d){bm={id:bm,url:bo}
}bl=a2(bm);
bl.url=ad(bl.url);
if(bl.id===undefined){bl.id=ap.setupOptions.idPrefix+(ah++)
}if(bl.id.toString().charAt(0).match(/^[0-9]$/)){ap._wD(bp+be("badID",bl.id),2)
}ap._wD(bp+bl.id+(bl.url?" ("+bl.url+")":""),1);
if(K(bl.id,true)){ap._wD(bp+bl.id+" exists",1);
return ap.sounds[bl.id]
}function bk(){bl=C(bl);
ap.sounds[bl.id]=new al(bl);
ap.soundIDs.push(bl.id);
return ap.sounds[bl.id]
}if(ba(bl)){bn=bk();
ap._wD(bl.id+": Using HTML5");
bn._setup_html5(bl)
}else{if(ap.html5Only){ap._wD(bl.id+": No HTML5 support for this sound, and no Flash. Exiting.");
return bk()
}if(ap.html5.usingFlash&&bl.url&&bl.url.match(/data\:/i)){ap._wD(bl.id+": data: URIs not supported via Flash. Exiting.");
return bk()
}if(bh>8){if(bl.isMovieStar===null){bl.isMovieStar=!!(bl.serverURL||(bl.type?bl.type.match(f):false)||(bl.url&&bl.url.match(ai)))
}if(bl.isMovieStar){ap._wD(bp+"using MovieStar handling");
if(bl.loops>1){X("noNSLoop")
}}}bl=q(bl,bp);
bn=bk();
if(bh===8){ae._createSound(bl.id,bl.loops||1,bl.usePolicyFile)
}else{ae._createSound(bl.id,bl.url,bl.usePeakData,bl.useWaveformData,bl.useEQData,bl.isMovieStar,(bl.isMovieStar?bl.bufferTime:false),bl.loops||1,bl.serverURL,bl.duration||null,bl.autoPlay,true,bl.autoLoad,bl.usePolicyFile);
if(!bl.serverURL){bn.connected=true;
if(bl.onconnect){bl.onconnect.apply(bn)
}}}if(!bl.serverURL&&(bl.autoLoad||bl.autoPlay)){bn.load(bl)
}}if(!bl.serverURL&&bl.autoPlay){bn.play()
}return bn
};
this.destroySound=function(bk,bn){if(!K(bk)){return false
}var bm=ap.sounds[bk],bl;
bm._iO={};
bm.stop();
bm.unload();
for(bl=0;
bl<ap.soundIDs.length;
bl++){if(ap.soundIDs[bl]===bk){ap.soundIDs.splice(bl,1);
break
}}if(!bn){bm.destruct(true)
}bm=null;
delete ap.sounds[bk];
return true
};
this.load=function(bk,bl){if(!K(bk)){return false
}return ap.sounds[bk].load(bl)
};
this.unload=function(bk){if(!K(bk)){return false
}return ap.sounds[bk].unload()
};
this.onPosition=function(bn,bm,bl,bk){if(!K(bn)){return false
}return ap.sounds[bn].onposition(bm,bl,bk)
};
this.onposition=this.onPosition;
this.clearOnPosition=function(bm,bl,bk){if(!K(bm)){return false
}return ap.sounds[bm].clearOnPosition(bl,bk)
};
this.play=function(bm,bn){var bk=null,bl=(bn&&!(bn instanceof Object));
if(!ay||!ap.ok()){at(aX+".play(): "+be(!ay?"notReady":"notOK"));
return false
}if(!K(bm,bl)){if(!bl){return false
}if(bl){bn={url:bn}
}if(bn&&bn.url){ap._wD(aX+'.play(): Attempting to create "'+bm+'"',1);
bn.id=bm;
bk=ap.createSound(bn).play()
}}else{if(bl){bn={url:bn}
}}if(bk===null){bk=ap.sounds[bm].play(bn)
}return bk
};
this.start=this.play;
this.setPosition=function(bk,bl){if(!K(bk)){return false
}return ap.sounds[bk].setPosition(bl)
};
this.stop=function(bk){if(!K(bk)){return false
}ap._wD(aX+".stop("+bk+")",1);
return ap.sounds[bk].stop()
};
this.stopAll=function(){var bk;
ap._wD(aX+".stopAll()",1);
for(bk in ap.sounds){if(ap.sounds.hasOwnProperty(bk)){ap.sounds[bk].stop()
}}};
this.pause=function(bk){if(!K(bk)){return false
}return ap.sounds[bk].pause()
};
this.pauseAll=function(){var bk;
for(bk=ap.soundIDs.length-1;
bk>=0;
bk--){ap.sounds[ap.soundIDs[bk]].pause()
}};
this.resume=function(bk){if(!K(bk)){return false
}return ap.sounds[bk].resume()
};
this.resumeAll=function(){var bk;
for(bk=ap.soundIDs.length-1;
bk>=0;
bk--){ap.sounds[ap.soundIDs[bk]].resume()
}};
this.togglePause=function(bk){if(!K(bk)){return false
}return ap.sounds[bk].togglePause()
};
this.setPan=function(bk,bl){if(!K(bk)){return false
}return ap.sounds[bk].setPan(bl)
};
this.setVolume=function(bl,bk){if(!K(bl)){return false
}return ap.sounds[bl].setVolume(bk)
};
this.mute=function(bk){var bl=0;
if(bk instanceof String){bk=null
}if(!bk){ap._wD(aX+".mute(): Muting all sounds");
for(bl=ap.soundIDs.length-1;
bl>=0;
bl--){ap.sounds[ap.soundIDs[bl]].mute()
}ap.muted=true
}else{if(!K(bk)){return false
}ap._wD(aX+'.mute(): Muting "'+bk+'"');
return ap.sounds[bk].mute()
}return true
};
this.muteAll=function(){ap.mute()
};
this.unmute=function(bk){var bl;
if(bk instanceof String){bk=null
}if(!bk){ap._wD(aX+".unmute(): Unmuting all sounds");
for(bl=ap.soundIDs.length-1;
bl>=0;
bl--){ap.sounds[ap.soundIDs[bl]].unmute()
}ap.muted=false
}else{if(!K(bk)){return false
}ap._wD(aX+'.unmute(): Unmuting "'+bk+'"');
return ap.sounds[bk].unmute()
}return true
};
this.unmuteAll=function(){ap.unmute()
};
this.toggleMute=function(bk){if(!K(bk)){return false
}return ap.sounds[bk].toggleMute()
};
this.getMemoryUse=function(){var bk=0;
if(ae&&bh!==8){bk=parseInt(ae._getMemoryUse(),10)
}return bk
};
this.disable=function(bl){var bk;
if(bl===d){bl=false
}if(a1){return false
}a1=true;
X("shutdown",1);
for(bk=ap.soundIDs.length-1;
bk>=0;
bk--){Y(ap.sounds[ap.soundIDs[bk]])
}y(bl);
am.remove(c,"load",u);
return true
};
this.canPlayMIME=function(bl){var bk;
if(ap.hasHTML5){bk=an({type:bl})
}if(!bk&&D){bk=(bl&&ap.ok()?!!((bh>8?bl.match(f):null)||bl.match(ap.mimePattern)):null)
}return bk
};
this.canPlayURL=function(bl){var bk;
if(ap.hasHTML5){bk=an({url:bl})
}if(!bk&&D){bk=(bl&&ap.ok()?!!(bl.match(ap.filePattern)):null)
}return bk
};
this.canPlayLink=function(bk){if(bk.type!==d&&bk.type){if(ap.canPlayMIME(bk.type)){return true
}}return ap.canPlayURL(bk.href)
};
this.getSoundById=function(bl,bm){if(!bl){return null
}var bk=ap.sounds[bl];
if(!bk&&!bm){ap._wD(aX+'.getSoundById(): Sound "'+bl+'" not found.',2)
}return bk
};
this.onready=function(bm,bl){var bn="onready",bk=false;
if(typeof bm==="function"){if(ay){ap._wD(be("queue",bn))
}if(!bl){bl=c
}aa(bn,bm,bl);
aS();
bk=true
}else{throw be("needFunction",bn)
}return bk
};
this.ontimeout=function(bm,bl){var bn="ontimeout",bk=false;
if(typeof bm==="function"){if(ay){ap._wD(be("queue",bn))
}if(!bl){bl=c
}aa(bn,bm,bl);
aS({type:bn});
bk=true
}else{throw be("needFunction",bn)
}return bk
};
this._writeDebug=function(bl,bk){var bo="soundmanager-debug",bn,bm;
if(!ap.debugMode){return false
}if(L&&ap.useConsole){if(bk&&typeof bk==="object"){console.log(bl,bk)
}else{if(aI[bk]!==d){console[aI[bk]](bl)
}else{console.log(bl)
}}if(ap.consoleOnly){return true
}}bn=ao(bo);
if(!bn){return false
}bm=ab.createElement("div");
if(++ax%2===0){bm.className="sm2-alt"
}if(bk===d){bk=0
}else{bk=parseInt(bk,10)
}bm.appendChild(ab.createTextNode(bl));
if(bk){if(bk>=2){bm.style.fontWeight="bold"
}if(bk===3){bm.style.color="#ff3333"
}}bn.insertBefore(bm,bn.firstChild);
bn=null;
return true
};
if(z.indexOf("sm2-debug=alert")!==-1){this._writeDebug=function(bk){c.alert(bk)
}
}this._wD=this._writeDebug;
this._debug=function(){var bl,bk;
X("currentObj",1);
for(bl=0,bk=ap.soundIDs.length;
bl<bk;
bl++){ap.sounds[ap.soundIDs[bl]]._debug()
}};
this.reboot=function(bo,bn){if(ap.soundIDs.length){ap._wD("Destroying "+ap.soundIDs.length+" SMSound object"+(ap.soundIDs.length!==1?"s":"")+"...")
}var bm,bl,bk;
for(bm=ap.soundIDs.length-1;
bm>=0;
bm--){ap.sounds[ap.soundIDs[bm]].destruct()
}if(ae){try{if(a7){ak=ae.innerHTML
}aL=ae.parentNode.removeChild(ae)
}catch(bp){X("badRemove",2)
}}ak=aL=D=ae=null;
ap.enabled=r=ay=aR=aJ=aq=aU=a1=aZ=ap.swfLoaded=false;
ap.soundIDs=[];
ap.sounds={};
ah=0;
if(!bo){for(bm in x){if(x.hasOwnProperty(bm)){for(bl=0,bk=x[bm].length;
bl<bk;
bl++){x[bm][bl].fired=false
}}}}else{x=[]
}if(!bn){ap._wD(aX+": Rebooting...")
}ap.html5={usingFlash:null};
ap.flash={};
ap.html5Only=false;
ap.ignoreFlash=false;
c.setTimeout(function(){aE();
if(!bn){ap.beginDelayedInit()
}},20);
return ap
};
this.reset=function(){X("reset");
return ap.reboot(true,true)
};
this.getMoviePercent=function(){return(ae&&"PercentLoaded" in ae?ae.PercentLoaded():null)
};
this.beginDelayedInit=function(){bb=true;
N();
setTimeout(function(){if(aJ){return false
}J();
l();
aJ=true;
return true
},20);
A()
};
this.destruct=function(){ap._wD(aX+".destruct()");
ap.disable(true)
};
al=function(by){var bz=this,bk,bv,bs,bl,bp,bq,bm=false,bo=[],bw=0,bn,br,bt=null,bu,bx;
bu={duration:null,time:null};
this.id=by.id;
this.sID=this.id;
this.url=by.url;
this.options=a2(by);
this.instanceOptions=this.options;
this._iO=this.instanceOptions;
this.pan=this.options.pan;
this.volume=this.options.volume;
this.isHTML5=false;
this._a=null;
bx=(this.url?false:true);
this.id3={};
this._debug=function(){ap._wD(bz.id+": Merged options:",bz.options)
};
this.load=function(bA){var bB=null,bC;
if(bA!==d){bz._iO=a2(bA,bz.options)
}else{bA=bz.options;
bz._iO=bA;
if(bt&&bt!==bz.url){X("manURL");
bz._iO.url=bz.url;
bz.url=null
}}if(!bz._iO.url){bz._iO.url=bz.url
}bz._iO.url=ad(bz._iO.url);
bz.instanceOptions=bz._iO;
bC=bz._iO;
ap._wD(bz.id+": load ("+bC.url+")");
if(!bC.url&&!bz.url){ap._wD(bz.id+": load(): url is unassigned. Exiting.",2);
return bz
}if(!bz.isHTML5&&bh===8&&!bz.url&&!bC.autoPlay){ap._wD(bz.id+": Flash 8 load() limitation: Wait for onload() before calling play().",1)
}if(bC.url===bz.url&&bz.readyState!==0&&bz.readyState!==2){X("onURL",1);
if(bz.readyState===3&&bC.onload){aF(bz,function(){bC.onload.apply(bz,[(!!bz.duration)])
})
}return bz
}bz.loaded=false;
bz.readyState=1;
bz.playState=0;
bz.id3={};
if(ba(bC)){bB=bz._setup_html5(bC);
if(!bB._called_load){bz._html5_canplay=false;
if(bz.url!==bC.url){ap._wD(X("manURL")+": "+bC.url);
bz._a.src=bC.url;
bz.setPosition(0)
}bz._a.autobuffer="auto";
bz._a.preload="auto";
bz._a._called_load=true;
if(bC.autoPlay){bz.play()
}}else{ap._wD(bz.id+": Ignoring request to load again")
}}else{if(ap.html5Only){ap._wD(bz.id+": No flash support. Exiting.");
return bz
}if(bz._iO.url&&bz._iO.url.match(/data\:/i)){ap._wD(bz.id+": data: URIs not supported via Flash. Exiting.");
return bz
}try{bz.isHTML5=false;
bz._iO=q(C(bC));
bC=bz._iO;
if(bh===8){ae._load(bz.id,bC.url,bC.stream,bC.autoPlay,bC.usePolicyFile)
}else{ae._load(bz.id,bC.url,!!(bC.stream),!!(bC.autoPlay),bC.loops||1,!!(bC.autoLoad),bC.usePolicyFile)
}}catch(bD){X("smError",2);
O("onload",false);
ac({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:true})
}}bz.url=bC.url;
return bz
};
this.unload=function(){if(bz.readyState!==0){ap._wD(bz.id+": unload()");
if(!bz.isHTML5){if(bh===8){ae._unload(bz.id,p)
}else{ae._unload(bz.id)
}}else{bl();
if(bz._a){bz._a.pause();
bt=g(bz._a)
}}bk()
}return bz
};
this.destruct=function(bA){ap._wD(bz.id+": Destruct");
if(!bz.isHTML5){bz._iO.onfailure=null;
ae._destroySound(bz.id)
}else{bl();
if(bz._a){bz._a.pause();
g(bz._a);
if(!aZ){bs()
}bz._a._s=null;
bz._a=null
}}if(!bA){ap.destroySound(bz.id,true)
}};
this.play=function(bG,bC){var bA,bD,bJ,bI,bK,bH,bF,bE=true,bB=null;
bA=bz.id+": play(): ";
bC=(bC===d?true:bC);
if(!bG){bG={}
}if(bz.url){bz._iO.url=bz.url
}bz._iO=a2(bz._iO,bz.options);
bz._iO=a2(bG,bz._iO);
bz._iO.url=ad(bz._iO.url);
bz.instanceOptions=bz._iO;
if(!bz.isHTML5&&bz._iO.serverURL&&!bz.connected){if(!bz.getAutoPlay()){ap._wD(bA+" Netstream not connected yet - setting autoPlay");
bz.setAutoPlay(true)
}return bz
}if(ba(bz._iO)){bz._setup_html5(bz._iO);
bp()
}if(bz.playState===1&&!bz.paused){bD=bz._iO.multiShot;
if(!bD){ap._wD(bA+"Already playing (one-shot)",1);
if(bz.isHTML5){bz.setPosition(bz._iO.position)
}bB=bz
}else{ap._wD(bA+"Already playing (multi-shot)",1)
}}if(bB!==null){return bB
}if(bG.url&&bG.url!==bz.url){if(!bz.readyState&&!bz.isHTML5&&bh===8&&bx){bx=false
}else{bz.load(bz._iO)
}}if(!bz.loaded){if(bz.readyState===0){ap._wD(bA+"Attempting to load");
if(!bz.isHTML5&&!ap.html5Only){bz._iO.autoPlay=true;
bz.load(bz._iO)
}else{if(bz.isHTML5){bz.load(bz._iO)
}else{ap._wD(bA+"Unsupported type. Exiting.");
bB=bz
}}bz.instanceOptions=bz._iO
}else{if(bz.readyState===2){ap._wD(bA+"Could not load - exiting",2);
bB=bz
}else{ap._wD(bA+"Loading - attempting to play...")
}}}else{ap._wD(bA.substr(0,bA.lastIndexOf(":")))
}if(bB!==null){return bB
}if(!bz.isHTML5&&bh===9&&bz.position>0&&bz.position===bz.duration){ap._wD(bA+"Sound at end, resetting to position:0");
bG.position=0
}if(bz.paused&&bz.position>=0&&(!bz._iO.serverURL||bz.position>0)){ap._wD(bA+"Resuming from paused state",1);
bz.resume()
}else{bz._iO=a2(bG,bz._iO);
if(bz._iO.from!==null&&bz._iO.to!==null&&bz.instanceCount===0&&bz.playState===0&&!bz._iO.serverURL){bI=function(){bz._iO=a2(bG,bz._iO);
bz.play(bz._iO)
};
if(bz.isHTML5&&!bz._html5_canplay){ap._wD(bA+"Beginning load for from/to case");
bz.load({oncanplay:bI});
bB=false
}else{if(!bz.isHTML5&&!bz.loaded&&(!bz.readyState||bz.readyState!==2)){ap._wD(bA+"Preloading for from/to case");
bz.load({onload:bI});
bB=false
}}if(bB!==null){return bB
}bz._iO=br()
}if(!bz.instanceCount||bz._iO.multiShotEvents||(bz.isHTML5&&bz._iO.multiShot&&!aZ)||(!bz.isHTML5&&bh>8&&!bz.getAutoPlay())){bz.instanceCount++
}if(bz._iO.onposition&&bz.playState===0){bq(bz)
}bz.playState=1;
bz.paused=false;
bz.position=(bz._iO.position!==d&&!isNaN(bz._iO.position)?bz._iO.position:0);
if(!bz.isHTML5){bz._iO=q(C(bz._iO))
}if(bz._iO.onplay&&bC){bz._iO.onplay.apply(bz);
bm=true
}bz.setVolume(bz._iO.volume,true);
bz.setPan(bz._iO.pan,true);
if(!bz.isHTML5){bE=ae._start(bz.id,bz._iO.loops||1,(bh===9?bz.position:bz.position/h),bz._iO.multiShot||false);
if(bh===9&&!bE){ap._wD(bA+"No sound hardware, or 32-sound ceiling hit",2);
if(bz._iO.onplayerror){bz._iO.onplayerror.apply(bz)
}}}else{if(bz.instanceCount<2){bp();
bJ=bz._setup_html5();
bz.setPosition(bz._iO.position);
bJ.play()
}else{ap._wD(bz.id+": Cloning Audio() for instance #"+bz.instanceCount+"...");
bK=new Audio(bz._iO.url);
bH=function(){am.remove(bK,"onended",bH);
bz._onfinish(bz);
g(bK);
bK=null
};
bF=function(){am.remove(bK,"canplay",bF);
try{bK.currentTime=bz._iO.position/h
}catch(bL){at(bz.id+": multiShot play() failed to apply position of "+(bz._iO.position/h))
}bK.play()
};
am.add(bK,"ended",bH);
if(bz._iO.position){am.add(bK,"canplay",bF)
}else{bK.play()
}}}}return bz
};
this.start=this.play;
this.stop=function(bA){var bC=bz._iO,bB;
if(bz.playState===1){ap._wD(bz.id+": stop()");
bz._onbufferchange(0);
bz._resetOnPosition(0);
bz.paused=false;
if(!bz.isHTML5){bz.playState=0
}bn();
if(bC.to){bz.clearOnPosition(bC.to)
}if(!bz.isHTML5){ae._stop(bz.id,bA);
if(bC.serverURL){bz.unload()
}}else{if(bz._a){bB=bz.position;
bz.setPosition(0);
bz.position=bB;
bz._a.pause();
bz.playState=0;
bz._onTimer();
bl()
}}bz.instanceCount=0;
bz._iO={};
if(bC.onstop){bC.onstop.apply(bz)
}}return bz
};
this.setAutoPlay=function(bA){ap._wD(bz.id+": Autoplay turned "+(bA?"on":"off"));
bz._iO.autoPlay=bA;
if(!bz.isHTML5){ae._setAutoPlay(bz.id,bA);
if(bA){if(!bz.instanceCount&&bz.readyState===1){bz.instanceCount++;
ap._wD(bz.id+": Incremented instance count to "+bz.instanceCount)
}}}};
this.getAutoPlay=function(){return bz._iO.autoPlay
};
this.setPosition=function(bC){if(bC===d){bC=0
}var bA,bB,bE=(bz.isHTML5?Math.max(bC,0):Math.min(bz.duration||bz._iO.duration,Math.max(bC,0)));
bz.position=bE;
bB=bz.position/h;
bz._resetOnPosition(bz.position);
bz._iO.position=bE;
if(!bz.isHTML5){bA=(bh===9?bz.position:bB);
if(bz.readyState&&bz.readyState!==2){ae._setPosition(bz.id,bA,(bz.paused||!bz.playState),bz._iO.multiShot)
}}else{if(bz._a){if(bz._html5_canplay){if(bz._a.currentTime!==bB){ap._wD(bz.id+": setPosition("+bB+")");
try{bz._a.currentTime=bB;
if(bz.playState===0||bz.paused){bz._a.pause()
}}catch(bD){ap._wD(bz.id+": setPosition("+bB+") failed: "+bD.message,2)
}}}else{if(bB){ap._wD(bz.id+": setPosition("+bB+"): Cannot seek yet, sound not ready",2);
return bz
}}if(bz.paused){bz._onTimer(true)
}}}return bz
};
this.pause=function(bA){if(bz.paused||(bz.playState===0&&bz.readyState!==1)){return bz
}ap._wD(bz.id+": pause()");
bz.paused=true;
if(!bz.isHTML5){if(bA||bA===d){ae._pause(bz.id,bz._iO.multiShot)
}}else{bz._setup_html5().pause();
bl()
}if(bz._iO.onpause){bz._iO.onpause.apply(bz)
}return bz
};
this.resume=function(){var bA=bz._iO;
if(!bz.paused){return bz
}ap._wD(bz.id+": resume()");
bz.paused=false;
bz.playState=1;
if(!bz.isHTML5){if(bA.isMovieStar&&!bA.serverURL){bz.setPosition(bz.position)
}ae._pause(bz.id,bA.multiShot)
}else{bz._setup_html5().play();
bp()
}if(!bm&&bA.onplay){bA.onplay.apply(bz);
bm=true
}else{if(bA.onresume){bA.onresume.apply(bz)
}}return bz
};
this.togglePause=function(){ap._wD(bz.id+": togglePause()");
if(bz.playState===0){bz.play({position:(bh===9&&!bz.isHTML5?bz.position:bz.position/h)});
return bz
}if(bz.paused){bz.resume()
}else{bz.pause()
}return bz
};
this.setPan=function(bB,bA){if(bB===d){bB=0
}if(bA===d){bA=false
}if(!bz.isHTML5){ae._setPan(bz.id,bB)
}bz._iO.pan=bB;
if(!bA){bz.pan=bB;
bz.options.pan=bB
}return bz
};
this.setVolume=function(bA,bB){if(bA===d){bA=100
}if(bB===d){bB=false
}if(!bz.isHTML5){ae._setVolume(bz.id,(ap.muted&&!bz.muted)||bz.muted?0:bA)
}else{if(bz._a){bz._a.volume=Math.max(0,Math.min(1,bA/100))
}}bz._iO.volume=bA;
if(!bB){bz.volume=bA;
bz.options.volume=bA
}return bz
};
this.mute=function(){bz.muted=true;
if(!bz.isHTML5){ae._setVolume(bz.id,0)
}else{if(bz._a){bz._a.muted=true
}}return bz
};
this.unmute=function(){bz.muted=false;
var bA=(bz._iO.volume!==d);
if(!bz.isHTML5){ae._setVolume(bz.id,bA?bz._iO.volume:bz.options.volume)
}else{if(bz._a){bz._a.muted=false
}}return bz
};
this.toggleMute=function(){return(bz.muted?bz.unmute():bz.mute())
};
this.onPosition=function(bC,bB,bA){bo.push({position:parseInt(bC,10),method:bB,scope:(bA!==d?bA:bz),fired:false});
return bz
};
this.onposition=this.onPosition;
this.clearOnPosition=function(bB,bA){var bC;
bB=parseInt(bB,10);
if(isNaN(bB)){return false
}for(bC=0;
bC<bo.length;
bC++){if(bB===bo[bC].position){if(!bA||(bA===bo[bC].method)){if(bo[bC].fired){bw--
}bo.splice(bC,1)
}}}};
this._processOnPosition=function(){var bB,bC,bA=bo.length;
if(!bA||!bz.playState||bw>=bA){return false
}for(bB=bA-1;
bB>=0;
bB--){bC=bo[bB];
if(!bC.fired&&bz.position>=bC.position){bC.fired=true;
bw++;
bC.method.apply(bC.scope,[bC.position])
}}return true
};
this._resetOnPosition=function(bA){var bC,bD,bB=bo.length;
if(!bB){return false
}for(bC=bB-1;
bC>=0;
bC--){bD=bo[bC];
if(bD.fired&&bA<=bD.position){bD.fired=false;
bw--
}}return true
};
br=function(){var bD=bz._iO,bC=bD.from,bB=bD.to,bE,bA;
bA=function(){ap._wD(bz.id+': "To" time of '+bB+" reached.");
bz.clearOnPosition(bB,bA);
bz.stop()
};
bE=function(){ap._wD(bz.id+': Playing "from" '+bC);
if(bB!==null&&!isNaN(bB)){bz.onPosition(bB,bA)
}};
if(bC!==null&&!isNaN(bC)){bD.position=bC;
bD.multiShot=false;
bE()
}return bD
};
bq=function(){var bA,bB=bz._iO.onposition;
if(bB){for(bA in bB){if(bB.hasOwnProperty(bA)){bz.onPosition(parseInt(bA,10),bB[bA])
}}}};
bn=function(){var bA,bB=bz._iO.onposition;
if(bB){for(bA in bB){if(bB.hasOwnProperty(bA)){bz.clearOnPosition(parseInt(bA,10))
}}}};
bp=function(){if(bz.isHTML5){aP(bz)
}};
bl=function(){if(bz.isHTML5){P(bz)
}};
bk=function(bA){if(!bA){bo=[];
bw=0
}bm=false;
bz._hasTimer=null;
bz._a=null;
bz._html5_canplay=false;
bz.bytesLoaded=null;
bz.bytesTotal=null;
bz.duration=(bz._iO&&bz._iO.duration?bz._iO.duration:null);
bz.durationEstimate=null;
bz.buffered=[];
bz.eqData=[];
bz.eqData.left=[];
bz.eqData.right=[];
bz.failures=0;
bz.isBuffering=false;
bz.instanceOptions={};
bz.instanceCount=0;
bz.loaded=false;
bz.metadata={};
bz.readyState=0;
bz.muted=false;
bz.paused=false;
bz.peakData={left:0,right:0};
bz.waveformData={left:[],right:[]};
bz.playState=0;
bz.position=null;
bz.id3={}
};
bk();
this._onTimer=function(bC){var bE,bB=false,bD,bA={};
if(bz._hasTimer||bC){if(bz._a&&(bC||((bz.playState>0||bz.readyState===1)&&!bz.paused))){bE=bz._get_html5_duration();
if(bE!==bu.duration){bu.duration=bE;
bz.duration=bE;
bB=true
}bz.durationEstimate=bz.duration;
bD=(bz._a.currentTime*h||0);
if(bD!==bu.time){bu.time=bD;
bB=true
}if(bB||bC){bz._whileplaying(bD,bA,bA,bA,bA)
}}return bB
}};
this._get_html5_duration=function(){var bB=bz._iO,bC=(bz._a&&bz._a.duration?bz._a.duration*h:(bB&&bB.duration?bB.duration:null)),bA=(bC&&!isNaN(bC)&&bC!==Infinity?bC:null);
return bA
};
this._apply_loop=function(bA,bB){if(!bA.loop&&bB>1){ap._wD("Note: Native HTML5 looping is infinite.",1)
}bA.loop=(bB>1?"loop":"")
};
this._setup_html5=function(bB){var bC=a2(bz._iO,bB),bA=aZ?a8:bz._a,bE=decodeURI(bC.url),bD;
if(aZ){if(bE===decodeURI(m)){bD=true
}}else{if(bE===decodeURI(bt)){bD=true
}}if(bA){if(bA._s){if(aZ){if(bA._s&&bA._s.playState&&!bD){bA._s.stop()
}}else{if(!aZ&&bE===decodeURI(bt)){bz._apply_loop(bA,bC.loops);
return bA
}}}if(!bD){bk(false);
bA.src=bC.url;
bz.url=bC.url;
bt=bC.url;
m=bC.url;
bA._called_load=false
}}else{if(bC.autoLoad||bC.autoPlay){bz._a=new Audio(bC.url)
}else{bz._a=(w&&opera.version()<10?new Audio(null):new Audio())
}bA=bz._a;
bA._called_load=false;
if(aZ){a8=bA
}}bz.isHTML5=true;
bz._a=bA;
bA._s=bz;
bv();
bz._apply_loop(bA,bC.loops);
if(bC.autoLoad||bC.autoPlay){bz.load()
}else{bA.autobuffer=false;
bA.preload="auto"
}return bA
};
bv=function(){if(bz._a._added_events){return false
}var bA;
function bB(bD,bC,bE){return bz._a?bz._a.addEventListener(bD,bC,bE||false):null
}bz._a._added_events=true;
for(bA in j){if(j.hasOwnProperty(bA)){bB(bA,j[bA])
}}return true
};
bs=function(){var bB;
function bA(bD,bC,bE){return(bz._a?bz._a.removeEventListener(bD,bC,bE||false):null)
}ap._wD(bz.id+": Removing event listeners");
bz._a._added_events=false;
for(bB in j){if(j.hasOwnProperty(bB)){bA(bB,j[bB])
}}};
this._onload=function(bC){var bA,bB=!!bC||(!bz.isHTML5&&bh===8&&bz.duration);
bA=bz.id+": ";
ap._wD(bA+(bB?"onload()":"Failed to load / invalid sound?"+(!bz.duration?" Zero-length duration reported.":" -")+" ("+bz.url+")"),(bB?1:2));
if(!bB&&!bz.isHTML5){if(ap.sandbox.noRemote===true){ap._wD(bA+be("noNet"),1)
}if(ap.sandbox.noLocal===true){ap._wD(bA+be("noLocal"),1)
}}bz.loaded=bB;
bz.readyState=bB?3:2;
bz._onbufferchange(0);
if(bz._iO.onload){aF(bz,function(){bz._iO.onload.apply(bz,[bB])
})
}return true
};
this._onbufferchange=function(bA){if(bz.playState===0){return false
}if((bA&&bz.isBuffering)||(!bA&&!bz.isBuffering)){return false
}bz.isBuffering=(bA===1);
if(bz._iO.onbufferchange){ap._wD(bz.id+": Buffer state change: "+bA);
bz._iO.onbufferchange.apply(bz)
}return true
};
this._onsuspend=function(){if(bz._iO.onsuspend){ap._wD(bz.id+": Playback suspended");
bz._iO.onsuspend.apply(bz)
}return true
};
this._onfailure=function(bB,bC,bA){bz.failures++;
ap._wD(bz.id+": Failures = "+bz.failures);
if(bz._iO.onfailure&&bz.failures===1){bz._iO.onfailure(bz,bB,bC,bA)
}else{ap._wD(bz.id+": Ignoring failure")
}};
this._onfinish=function(){var bA=bz._iO.onfinish;
bz._onbufferchange(0);
bz._resetOnPosition(0);
if(bz.instanceCount){bz.instanceCount--;
if(!bz.instanceCount){bn();
bz.playState=0;
bz.paused=false;
bz.instanceCount=0;
bz.instanceOptions={};
bz._iO={};
bl();
if(bz.isHTML5){bz.position=0
}}if(!bz.instanceCount||bz._iO.multiShotEvents){if(bA){ap._wD(bz.id+": onfinish()");
aF(bz,function(){bA.apply(bz)
})
}}}};
this._whileloading=function(bA,bB,bE,bD){var bC=bz._iO;
bz.bytesLoaded=bA;
bz.bytesTotal=bB;
bz.duration=Math.floor(bE);
bz.bufferLength=bD;
if(!bz.isHTML5&&!bC.isMovieStar){if(bC.duration){bz.durationEstimate=(bz.duration>bC.duration)?bz.duration:bC.duration
}else{bz.durationEstimate=parseInt((bz.bytesTotal/bz.bytesLoaded)*bz.duration,10)
}}else{bz.durationEstimate=bz.duration
}if(!bz.isHTML5){bz.buffered=[{start:0,end:bz.duration}]
}if((bz.readyState!==3||bz.isHTML5)&&bC.whileloading){bC.whileloading.apply(bz)
}};
this._whileplaying=function(bC,bD,bG,bB,bF){var bE=bz._iO,bA;
if(isNaN(bC)||bC===null){return false
}bz.position=Math.max(0,bC);
bz._processOnPosition();
if(!bz.isHTML5&&bh>8){if(bE.usePeakData&&bD!==d&&bD){bz.peakData={left:bD.leftPeak,right:bD.rightPeak}
}if(bE.useWaveformData&&bG!==d&&bG){bz.waveformData={left:bG.split(","),right:bB.split(",")}
}if(bE.useEQData){if(bF!==d&&bF&&bF.leftEQ){bA=bF.leftEQ.split(",");
bz.eqData=bA;
bz.eqData.left=bA;
if(bF.rightEQ!==d&&bF.rightEQ){bz.eqData.right=bF.rightEQ.split(",")
}}}}if(bz.playState===1){if(!bz.isHTML5&&bh===8&&!bz.position&&bz.isBuffering){bz._onbufferchange(0)
}if(bE.whileplaying){bE.whileplaying.apply(bz)
}}return true
};
this._oncaptiondata=function(bA){ap._wD(bz.id+": Caption data received.");
bz.captiondata=bA;
if(bz._iO.oncaptiondata){bz._iO.oncaptiondata.apply(bz,[bA])
}};
this._onmetadata=function(bD,bA){ap._wD(bz.id+": Metadata received.");
var bE={},bC,bB;
for(bC=0,bB=bD.length;
bC<bB;
bC++){bE[bD[bC]]=bA[bC]
}bz.metadata=bE;
if(bz._iO.onmetadata){bz._iO.onmetadata.apply(bz)
}};
this._onid3=function(bD,bA){ap._wD(bz.id+": ID3 data received.");
var bE=[],bC,bB;
for(bC=0,bB=bD.length;
bC<bB;
bC++){bE[bD[bC]]=bA[bC]
}bz.id3=a2(bz.id3,bE);
if(bz._iO.onid3){bz._iO.onid3.apply(bz)
}};
this._onconnect=function(bA){bA=(bA===1);
ap._wD(bz.id+": "+(bA?"Connected.":"Failed to connect? - "+bz.url),(bA?1:2));
bz.connected=bA;
if(bA){bz.failures=0;
if(K(bz.id)){if(bz.getAutoPlay()){bz.play(d,bz.getAutoPlay())
}else{if(bz._iO.autoLoad){bz.load()
}}}if(bz._iO.onconnect){bz._iO.onconnect.apply(bz,[bA])
}}};
this._ondataerror=function(bA){if(bz.playState>0){ap._wD(bz.id+": Data error: "+bA);
if(bz._iO.ondataerror){bz._iO.ondataerror.apply(bz)
}}};
this._debug()
};
bf=function(){return(ab.body||ab._docElement||ab.getElementsByTagName("div")[0])
};
ao=function(bk){return ab.getElementById(bk)
};
a2=function(bl,bk){var bn=(bl||{}),bm,bo;
bm=(bk===d?ap.defaultOptions:bk);
for(bo in bm){if(bm.hasOwnProperty(bo)&&bn[bo]===d){if(typeof bm[bo]!=="object"||bm[bo]===null){bn[bo]=bm[bo]
}else{bn[bo]=a2(bn[bo],bm[bo])
}}}return bn
};
aF=function(bk,bl){if(!bk.isHTML5&&bh===8){c.setTimeout(bl,0)
}else{bl()
}};
a3={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};
a6=function(bq,bp){var bo,bl=true,bk=(bp!==d),bn=ap.setupOptions,bm=a3;
if(bq===d){bl=[];
for(bo in bn){if(bn.hasOwnProperty(bo)){bl.push(bo)
}}for(bo in bm){if(bm.hasOwnProperty(bo)){if(typeof ap[bo]==="object"){bl.push(bo+": {...}")
}else{if(ap[bo] instanceof Function){bl.push(bo+": function() {...}")
}else{bl.push(bo)
}}}}ap._wD(be("setup",bl.join(", ")));
return false
}for(bo in bq){if(bq.hasOwnProperty(bo)){if(typeof bq[bo]!=="object"||bq[bo]===null||bq[bo] instanceof Array||bq[bo] instanceof RegExp){if(bk&&bm[bp]!==d){ap[bp][bo]=bq[bo]
}else{if(bn[bo]!==d){ap.setupOptions[bo]=bq[bo];
ap[bo]=bq[bo]
}else{if(bm[bo]===d){at(be((ap[bo]===d?"setupUndef":"setupError"),bo),2);
bl=false
}else{if(ap[bo] instanceof Function){ap[bo].apply(ap,(bq[bo] instanceof Array?bq[bo]:[bq[bo]]))
}else{ap[bo]=bq[bo]
}}}}}else{if(bm[bo]===d){at(be((ap[bo]===d?"setupUndef":"setupError"),bo),2);
bl=false
}else{return a6(bq[bo],bo)
}}}}return bl
};
function bi(bk){return(ap.preferFlash&&au&&!ap.ignoreFlash&&(ap.flash[bk]!==d&&ap.flash[bk]))
}am=(function(){var bm=(c.attachEvent),bl={add:(bm?"attachEvent":"addEventListener"),remove:(bm?"detachEvent":"removeEventListener")};
function bo(bs){var br=T.call(bs),bq=br.length;
if(bm){br[1]="on"+br[1];
if(bq>3){br.pop()
}}else{if(bq===3){br.push(false)
}}return br
}function bn(bq,bt){var br=bq.shift(),bs=[bl[bt]];
if(bm){br[bs](bq[0],bq[1])
}else{br[bs].apply(br,bq)
}}function bp(){bn(bo(arguments),"add")
}function bk(){bn(bo(arguments),"remove")
}return{add:bp,remove:bk}
}());
function aQ(bk){return function(bn){var bm=this._s,bl;
if(!bm||!bm._a){if(bm&&bm.id){ap._wD(bm.id+": Ignoring "+bn.type)
}else{ap._wD(a4+"Ignoring "+bn.type)
}bl=null
}else{bl=bk.call(this,bn)
}return bl
}
}j={abort:aQ(function(){ap._wD(this._s.id+": abort")
}),canplay:aQ(function(){var bm=this._s,bl;
if(bm._html5_canplay){return true
}bm._html5_canplay=true;
ap._wD(bm.id+": canplay");
bm._onbufferchange(0);
bl=(bm._iO.position!==d&&!isNaN(bm._iO.position)?bm._iO.position/h:null);
if(bm.position&&this.currentTime!==bl){ap._wD(bm.id+": canplay: Setting position to "+bl);
try{this.currentTime=bl
}catch(bk){ap._wD(bm.id+": canplay: Setting position of "+bl+" failed: "+bk.message,2)
}}if(bm._iO._oncanplay){bm._iO._oncanplay()
}}),canplaythrough:aQ(function(){var bk=this._s;
if(!bk.loaded){bk._onbufferchange(0);
bk._whileloading(bk.bytesLoaded,bk.bytesTotal,bk._get_html5_duration());
bk._onload(true)
}}),ended:aQ(function(){var bk=this._s;
ap._wD(bk.id+": ended");
bk._onfinish()
}),error:aQ(function(){ap._wD(this._s.id+": HTML5 error, code "+this.error.code);
this._s._onload(false)
}),loadeddata:aQ(function(){var bk=this._s;
ap._wD(bk.id+": loadeddata");
if(!bk._loaded&&!aY){bk.duration=bk._get_html5_duration()
}}),loadedmetadata:aQ(function(){ap._wD(this._s.id+": loadedmetadata")
}),loadstart:aQ(function(){ap._wD(this._s.id+": loadstart");
this._s._onbufferchange(1)
}),play:aQ(function(){this._s._onbufferchange(0)
}),playing:aQ(function(){ap._wD(this._s.id+": playing");
this._s._onbufferchange(0)
}),progress:aQ(function(bp){var bt=this._s,bo,bm,bq,bl=0,bs=(bp.type==="progress"),bk=bp.target.buffered,bn=(bp.loaded||0),br=(bp.total||1);
bt.buffered=[];
if(bk&&bk.length){for(bo=0,bm=bk.length;
bo<bm;
bo++){bt.buffered.push({start:bk.start(bo)*h,end:bk.end(bo)*h})
}bl=(bk.end(0)-bk.start(0))*h;
bn=Math.min(1,bl/(bp.target.duration*h));
if(bs&&bk.length>1){bq=[];
bm=bk.length;
for(bo=0;
bo<bm;
bo++){bq.push(bp.target.buffered.start(bo)*h+"-"+bp.target.buffered.end(bo)*h)
}ap._wD(this._s.id+": progress, timeRanges: "+bq.join(", "))
}if(bs&&!isNaN(bn)){ap._wD(this._s.id+": progress, "+Math.floor(bn*100)+"% loaded")
}}if(!isNaN(bn)){bt._onbufferchange(0);
bt._whileloading(bn,br,bt._get_html5_duration());
if(bn&&br&&bn===br){j.canplaythrough.call(this,bp)
}}}),ratechange:aQ(function(){ap._wD(this._s.id+": ratechange")
}),suspend:aQ(function(bl){var bk=this._s;
ap._wD(this._s.id+": suspend");
j.progress.call(this,bl);
bk._onsuspend()
}),stalled:aQ(function(){ap._wD(this._s.id+": stalled")
}),timeupdate:aQ(function(){this._s._onTimer()
}),waiting:aQ(function(){var bk=this._s;
ap._wD(this._s.id+": waiting");
bk._onbufferchange(1)
})};
ba=function(bl){var bk;
if(!bl||(!bl.type&&!bl.url&&!bl.serverURL)){bk=false
}else{if(bl.serverURL||(bl.type&&bi(bl.type))){bk=false
}else{bk=((bl.type?an({type:bl.type}):an({url:bl.url})||ap.html5Only||bl.url.match(/data\:/i)))
}}return bk
};
g=function(bk){var bl;
if(bk){bl=(aY&&!aW?null:(k?p:null));
bk.src=bl;
if(bk._called_unload!==undefined){bk._called_load=false
}}if(aZ){m=null
}return bl
};
an=function(br){if(!ap.useHTML5Audio||!ap.hasHTML5){return false
}var bn=(br.url||null),bp=(br.type||null),bl=ap.audioFormats,bk,bq,bm,bo;
if(bp&&ap.html5[bp]!==d){return(ap.html5[bp]&&!bi(bp))
}if(!aM){aM=[];
for(bo in bl){if(bl.hasOwnProperty(bo)){aM.push(bo);
if(bl[bo].related){aM=aM.concat(bl[bo].related)
}}}aM=new RegExp("\\.("+aM.join("|")+")(\\?.*)?$","i")
}bm=(bn?bn.toLowerCase().match(aM):null);
if(!bm||!bm.length){if(!bp){bk=false
}else{bq=bp.indexOf(";");
bm=(bq!==-1?bp.substr(0,bq):bp).substr(6)
}}else{bm=bm[1]
}if(bm&&ap.html5[bm]!==d){bk=(ap.html5[bm]&&!bi(bm))
}else{bp="audio/"+bm;
bk=ap.html5.canPlayType({type:bp});
ap.html5[bm]=bk;
bk=(bk&&ap.html5[bp]&&!bi(bp))
}return bk
};
aO=function(){if(!ap.useHTML5Audio||!ap.hasHTML5){ap.html5.usingFlash=true;
D=true;
return false
}var bk=(Audio!==d?(w&&opera.version()<10?new Audio(null):new Audio()):null),bo,bq,bn={},bl,bm;
function bp(bt){var bv,bw,bu,bs=false,br=false;
if(!bk||typeof bk.canPlayType!=="function"){return bs
}if(bt instanceof Array){for(bw=0,bu=bt.length;
bw<bu;
bw++){if(ap.html5[bt[bw]]||bk.canPlayType(bt[bw]).match(ap.html5Test)){br=true;
ap.html5[bt[bw]]=true;
ap.flash[bt[bw]]=!!(bt[bw].match(s))
}}bs=br
}else{bv=(bk&&typeof bk.canPlayType==="function"?bk.canPlayType(bt):false);
bs=!!(bv&&(bv.match(ap.html5Test)))
}return bs
}bl=ap.audioFormats;
for(bo in bl){if(bl.hasOwnProperty(bo)){bq="audio/"+bo;
bn[bo]=bp(bl[bo].type);
bn[bq]=bn[bo];
if(bo.match(s)){ap.flash[bo]=true;
ap.flash[bq]=true
}else{ap.flash[bo]=false;
ap.flash[bq]=false
}if(bl[bo]&&bl[bo].related){for(bm=bl[bo].related.length-1;
bm>=0;
bm--){bn["audio/"+bl[bo].related[bm]]=bn[bo];
ap.html5[bl[bo].related[bm]]=bn[bo];
ap.flash[bl[bo].related[bm]]=bn[bo]
}}}}bn.canPlayType=(bk?bp:null);
ap.html5=a2(ap.html5,bn);
ap.html5.usingFlash=U();
D=ap.html5.usingFlash;
return true
};
e={notReady:"Unavailable - wait until onready() has fired.",notOK:"Audio support is not available.",domError:aX+"exception caught while appending SWF to DOM.",spcWmode:"Removing wmode, preventing known SWF loading issue(s)",swf404:H+"Verify that %s is a valid path.",tryDebug:"Try "+aX+".debugFlash = true for more security details (output goes to SWF.)",checkSWF:"See SWF output for more debug info.",localFail:H+"Non-HTTP page ("+ab.location.protocol+" URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",waitFocus:H+"Special case: Waiting for SWF to load with window focus...",waitForever:H+"Waiting indefinitely for Flash (will recover if unblocked)...",waitSWF:H+"Waiting for 100% SWF load...",needFunction:H+"Function object expected for %s",badID:'Sound ID "%s" should be a string, starting with a non-numeric character',currentObj:H+"_debug(): Current sound objects",waitOnload:H+"Waiting for window.onload()",docLoaded:H+"Document already loaded",onload:H+"initComplete(): calling soundManager.onload()",onloadOK:aX+".onload() complete",didInit:H+"init(): Already called?",secNote:"Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",badRemove:H+"Failed to remove Flash node.",shutdown:aX+".disable(): Shutting down",queue:H+"Queueing %s handler",smError:"SMSound.load(): Exception: JS-Flash communication failed, or JS error.",fbTimeout:"No flash response, applying ."+G.swfTimedout+" CSS...",fbLoaded:"Flash loaded",fbHandler:H+"flashBlockHandler()",manURL:"SMSound.load(): Using manually-assigned URL",onURL:aX+".load(): current URL already assigned.",badFV:aX+'.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',as2loop:"Note: Setting stream:false so looping can work (flash 8 limitation)",noNSLoop:"Note: Looping not implemented for MovieStar formats",needfl9:"Note: Switching to flash 9, required for MP4 formats.",mfTimeout:"Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",needFlash:H+"Fatal error: Flash is needed to play some required formats, but is not available.",gotFocus:H+"Got window focus.",policy:"Enabling usePolicyFile for data access",setup:aX+".setup(): allowed parameters: %s",setupError:aX+'.setup(): "%s" cannot be assigned with this method.',setupUndef:aX+'.setup(): Could not find option "%s"',setupLate:aX+".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",noURL:H+"Flash URL required. Call soundManager.setup({url:...}) to get started.",sm2Loaded:"SoundManager 2: Ready.",reset:aX+".reset(): Removing event callbacks",mobileUA:"Mobile UA detected, preferring HTML5 by default.",globalHTML5:"Using singleton HTML5 Audio() pattern for this device."};
be=function(){var bl=T.call(arguments),bo=bl.shift(),bn=(e&&e[bo]?e[bo]:""),bm,bk;
if(bn&&bl&&bl.length){for(bm=0,bk=bl.length;
bm<bk;
bm++){bn=bn.replace("%s",bl[bm])
}}return bn
};
C=function(bk){if(bh===8&&bk.loops>1&&bk.stream){X("as2loop");
bk.stream=false
}return bk
};
q=function(bl,bk){if(bl&&!bl.usePolicyFile&&(bl.onid3||bl.usePeakData||bl.useWaveformData||bl.useEQData)){ap._wD((bk||"")+be("policy"));
bl.usePolicyFile=true
}return bl
};
at=function(bk){if(L&&console.warn!==d){console.warn(bk)
}else{ap._wD(bk)
}};
V=function(){return false
};
Y=function(bl){var bk;
for(bk in bl){if(bl.hasOwnProperty(bk)&&typeof bl[bk]==="function"){bl[bk]=V
}}bk=null
};
t=function(bk){if(bk===d){bk=false
}if(a1||bk){ap.disable(bk)
}};
aA=function(bk){var bl=null,bm;
if(bk){if(bk.match(/\.swf(\?.*)?$/i)){bl=bk.substr(bk.toLowerCase().lastIndexOf(".swf?")+4);
if(bl){return bk
}}else{if(bk.lastIndexOf("/")!==bk.length-1){bk+="/"
}}}bm=(bk&&bk.lastIndexOf("/")!==-1?bk.substr(0,bk.lastIndexOf("/")+1):"./")+ap.movieURL;
if(ap.noSWFCache){bm+=("?ts="+new Date().getTime())
}return bm
};
aV=function(){bh=parseInt(ap.flashVersion,10);
if(bh!==8&&bh!==9){ap._wD(be("badFV",bh,Z));
ap.flashVersion=bh=Z
}var bk=(ap.debugMode||ap.debugFlash?"_debug.swf":".swf");
if(ap.useHTML5Audio&&!ap.html5Only&&ap.audioFormats.mp4.required&&bh<9){ap._wD(be("needfl9"));
ap.flashVersion=bh=9
}ap.version=ap.versionNumber+(ap.html5Only?" (HTML5-only mode)":(bh===9?" (AS3/Flash 9)":" (AS2/Flash 8)"));
if(bh>8){ap.defaultOptions=a2(ap.defaultOptions,ap.flash9Options);
ap.features.buffering=true;
ap.defaultOptions=a2(ap.defaultOptions,ap.movieStarOptions);
ap.filePatterns.flash9=new RegExp("\\.(mp3|"+W.join("|")+")(\\?.*)?$","i");
ap.features.movieStar=true
}else{ap.features.movieStar=false
}ap.filePattern=ap.filePatterns[(bh!==8?"flash9":"flash8")];
ap.movieURL=(bh===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",bk);
ap.features.peakData=ap.features.waveformData=ap.features.eqData=(bh>8)
};
n=function(bk,bl){if(!ae){return false
}ae._setPolling(bk,bl)
};
F=function(){if(ap.debugURLParam.test(z)){ap.debugMode=true
}if(ao(ap.debugID)){return false
}var bp,bo,bk,bm,bl;
if(ap.debugMode&&!ao(ap.debugID)&&(!L||!ap.useConsole||!ap.consoleOnly)){bp=ab.createElement("div");
bp.id=ap.debugID+"-toggle";
bm={position:"fixed",bottom:"0px",right:"0px",width:"1.2em",height:"1.2em",lineHeight:"1.2em",margin:"2px",textAlign:"center",border:"1px solid #999",cursor:"pointer",background:"#fff",color:"#333",zIndex:10001};
bp.appendChild(ab.createTextNode("-"));
bp.onclick=aD;
bp.title="Toggle SM2 debug console";
if(av.match(/msie 6/i)){bp.style.position="absolute";
bp.style.cursor="hand"
}for(bl in bm){if(bm.hasOwnProperty(bl)){bp.style[bl]=bm[bl]
}}bo=ab.createElement("div");
bo.id=ap.debugID;
bo.style.display=(ap.debugMode?"block":"none");
if(ap.debugMode&&!ao(bp.id)){try{bk=bf();
bk.appendChild(bp)
}catch(bn){throw new Error(be("domError")+" \n"+bn.toString())
}bk.appendChild(bo)
}}bk=null
};
K=this.getSoundById;
X=function(bl,bk){return(!bl?"":ap._wD(be(bl),bk))
};
aD=function(){var bl=ao(ap.debugID),bk=ao(ap.debugID+"-toggle");
if(!bl){return false
}if(bg){bk.innerHTML="+";
bl.style.display="none"
}else{bk.innerHTML="-";
bl.style.display="block"
}bg=!bg
};
O=function(bn,bk,bl){if(c.sm2Debugger!==d){try{sm2Debugger.handleEvent(bn,bk,bl)
}catch(bm){return false
}}return true
};
o=function(){var bk=[];
if(ap.debugMode){bk.push(G.sm2Debug)
}if(ap.debugFlash){bk.push(G.flashDebug)
}if(ap.useHighPerformance){bk.push(G.highPerf)
}return bk.join(" ")
};
aB=function(){var bl=be("fbHandler"),bn=ap.getMoviePercent(),bm=G,bk={type:"FLASHBLOCK"};
if(ap.html5Only){return false
}if(!ap.ok()){if(D){ap.oMC.className=o()+" "+bm.swfDefault+" "+(bn===null?bm.swfTimedout:bm.swfError);
ap._wD(bl+": "+be("fbTimeout")+(bn?" ("+be("fbLoaded")+")":""))
}ap.didFlashBlock=true;
aS({type:"ontimeout",ignoreInit:true,error:bk});
ac(bk)
}else{if(ap.didFlashBlock){ap._wD(bl+": Unblocked")
}if(ap.oMC){ap.oMC.className=[o(),bm.swfDefault,bm.swfLoaded+(ap.didFlashBlock?" "+bm.swfUnblocked:"")].join(" ")
}}};
aa=function(bm,bl,bk){if(x[bm]===d){x[bm]=[]
}x[bm].push({method:bl,scope:(bk||null),fired:false})
};
aS=function(bq){if(!bq){bq={type:(ap.ok()?"onready":"ontimeout")}
}if(!ay&&bq&&!bq.ignoreInit){return false
}if(bq.type==="ontimeout"&&(ap.ok()||(a1&&!bq.ignoreInit))){return false
}var bm={success:(bq&&bq.ignoreInit?ap.ok():!a1)},bl=(bq&&bq.type?x[bq.type]||[]:[]),bk=[],br,bp,bo=[bm],bn=(D&&!ap.ok());
if(bq.error){bo[0].error=bq.error
}for(br=0,bp=bl.length;
br<bp;
br++){if(bl[br].fired!==true){bk.push(bl[br])
}}if(bk.length){for(br=0,bp=bk.length;
br<bp;
br++){if(bk[br].scope){bk[br].method.apply(bk[br].scope,bo)
}else{bk[br].method.apply(this,bo)
}if(!bn){bk[br].fired=true
}}}return true
};
u=function(){c.setTimeout(function(){if(ap.useFlashBlock){aB()
}aS();
if(typeof ap.onload==="function"){X("onload",1);
ap.onload.apply(c);
X("onloadOK",1)
}if(ap.waitForWindowLoad){am.add(c,"load",u)
}},1)
};
S=function(){if(au!==d){return au
}var bk=false,br=navigator,bn=br.plugins,bq,bm,bl,bp=c.ActiveXObject;
if(bn&&bn.length){bm="application/x-shockwave-flash";
bl=br.mimeTypes;
if(bl&&bl[bm]&&bl[bm].enabledPlugin&&bl[bm].enabledPlugin.description){bk=true
}}else{if(bp!==d&&!av.match(/MSAppHost/i)){try{bq=new bp("ShockwaveFlash.ShockwaveFlash")
}catch(bo){bq=null
}bk=(!!bq);
bq=null
}}au=bk;
return bk
};
U=function(){var bl,bn,bk=ap.audioFormats,bm=(aW&&!!(av.match(/os (1|2|3_0|3_1)/i)));
if(bm){ap.hasHTML5=false;
ap.html5Only=true;
if(ap.oMC){ap.oMC.style.display="none"
}}else{if(ap.useHTML5Audio){if(!ap.html5||!ap.html5.canPlayType){ap._wD("SoundManager: No HTML5 Audio() support detected.");
ap.hasHTML5=false
}if(a5){ap._wD(H+"Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - "+(!au?" would use flash fallback for MP3/MP4, but none detected.":"will use flash fallback for MP3/MP4, if available"),1)
}}}if(ap.useHTML5Audio&&ap.hasHTML5){ag=true;
for(bn in bk){if(bk.hasOwnProperty(bn)){if(bk[bn].required){if(!ap.html5.canPlayType(bk[bn].type)){ag=false;
bl=true
}else{if(ap.preferFlash&&(ap.flash[bn]||ap.flash[bk[bn].type])){bl=true
}}}}}}if(ap.ignoreFlash){bl=false;
ag=true
}ap.html5Only=(ap.hasHTML5&&ap.useHTML5Audio&&!bl);
return(!ap.html5Only)
};
ad=function(bm){var bo,bl,bn=0,bk;
if(bm instanceof Array){for(bo=0,bl=bm.length;
bo<bl;
bo++){if(bm[bo] instanceof Object){if(ap.canPlayMIME(bm[bo].type)){bn=bo;
break
}}else{if(ap.canPlayURL(bm[bo])){bn=bo;
break
}}}if(bm[bn].url){bm[bn]=bm[bn].url
}bk=bm[bn]
}else{bk=bm
}return bk
};
aP=function(bk){if(!bk._hasTimer){bk._hasTimer=true;
if(!aT&&ap.html5PollingInterval){if(bd===null&&M===0){bd=setInterval(af,ap.html5PollingInterval)
}M++
}}};
P=function(bk){if(bk._hasTimer){bk._hasTimer=false;
if(!aT&&ap.html5PollingInterval){M--
}}};
af=function(){var bk;
if(bd!==null&&!M){clearInterval(bd);
bd=null;
return false
}for(bk=ap.soundIDs.length-1;
bk>=0;
bk--){if(ap.sounds[ap.soundIDs[bk]].isHTML5&&ap.sounds[ap.soundIDs[bk]]._hasTimer){ap.sounds[ap.soundIDs[bk]]._onTimer()
}}};
ac=function(bk){bk=(bk!==d?bk:{});
if(typeof ap.onerror==="function"){ap.onerror.apply(c,[{type:(bk.type!==d?bk.type:null)}])
}if(bk.fatal!==d&&bk.fatal){ap.disable()
}};
E=function(){if(!a5||!S()){return false
}var bk=ap.audioFormats,bl,bm;
for(bm in bk){if(bk.hasOwnProperty(bm)){if(bm==="mp3"||bm==="mp4"){ap._wD(aX+": Using flash fallback for "+bm+" format");
ap.html5[bm]=false;
if(bk[bm]&&bk[bm].related){for(bl=bk[bm].related.length-1;
bl>=0;
bl--){ap.html5[bk[bm].related[bl]]=false
}}}}}};
this._setSandboxType=function(bk){var bl=ap.sandbox;
bl.type=bk;
bl.description=bl.types[(bl.types[bk]!==d?bk:"unknown")];
if(bl.type==="localWithFile"){bl.noRemote=true;
bl.noLocal=false;
X("secNote",2)
}else{if(bl.type==="localWithNetwork"){bl.noRemote=false;
bl.noLocal=true
}else{if(bl.type==="localTrusted"){bl.noRemote=false;
bl.noLocal=false
}}}};
this._externalInterfaceOK=function(bl){if(ap.swfLoaded){return false
}var bm;
O("swf",true);
O("flashtojs",true);
ap.swfLoaded=true;
a9=false;
if(a5){E()
}if(!bl||bl.replace(/\+dev/i,"")!==ap.versionNumber.replace(/\+dev/i,"")){bm=aX+': Fatal: JavaScript file build "'+ap.versionNumber+'" does not match Flash SWF build "'+bl+'" at '+ap.url+". Ensure both are up-to-date.";
setTimeout(function bk(){throw new Error(bm)
},0);
return false
}setTimeout(aK,a7?100:1)
};
J=function(bx,bo){if(aq&&aU){return false
}function bz(){var bF=[],bH,bG=[],bE=" + ";
bH="SoundManager "+ap.version+(!ap.html5Only&&ap.useHTML5Audio?(ap.hasHTML5?" + HTML5 audio":", no HTML5 audio support"):"");
if(!ap.html5Only){if(ap.preferFlash){bF.push("preferFlash")
}if(ap.useHighPerformance){bF.push("useHighPerformance")
}if(ap.flashPollingInterval){bF.push("flashPollingInterval ("+ap.flashPollingInterval+"ms)")
}if(ap.html5PollingInterval){bF.push("html5PollingInterval ("+ap.html5PollingInterval+"ms)")
}if(ap.wmode){bF.push("wmode ("+ap.wmode+")")
}if(ap.debugFlash){bF.push("debugFlash")
}if(ap.useFlashBlock){bF.push("flashBlock")
}}else{if(ap.html5PollingInterval){bF.push("html5PollingInterval ("+ap.html5PollingInterval+"ms)")
}}if(bF.length){bG=bG.concat([bF.join(bE)])
}ap._wD(bH+(bG.length?bE+bG.join(", "):""),1);
aG()
}if(ap.html5Only){aV();
bz();
ap.oMC=ao(ap.movieID);
aK();
aq=true;
aU=true;
return false
}var bw=(bo||ap.url),bs=(ap.altURL||bw),bD="JS/Flash audio component (SoundManager 2)",bv=bf(),bu=o(),bk=null,bn=ab.getElementsByTagName("html")[0],bA,bp,bB,bt,br,bq,bm,bC;
bk=(bn&&bn.dir&&bn.dir.match(/rtl/i));
bx=(bx===d?ap.id:bx);
function bl(bE,bF){return'<param name="'+bE+'" value="'+bF+'" />'
}aV();
ap.url=aA(I?bw:bs);
bo=ap.url;
ap.wmode=(!ap.wmode&&ap.useHighPerformance?"transparent":ap.wmode);
if(ap.wmode!==null&&(av.match(/msie 8/i)||(!a7&&!ap.useHighPerformance))&&navigator.platform.match(/win32|win64/i)){ar.push(e.spcWmode);
ap.wmode=null
}bA={name:bx,id:bx,src:bo,quality:"high",allowScriptAccess:ap.allowScriptAccess,bgcolor:ap.bgColor,pluginspage:aN+"www.macromedia.com/go/getflashplayer",title:bD,type:"application/x-shockwave-flash",wmode:ap.wmode,hasPriority:"true"};
if(ap.debugFlash){bA.FlashVars="debug=1"
}if(!ap.wmode){delete bA.wmode
}if(a7){bp=ab.createElement("div");
bt=['<object id="'+bx+'" data="'+bo+'" type="'+bA.type+'" title="'+bA.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+aN+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',bl("movie",bo),bl("AllowScriptAccess",ap.allowScriptAccess),bl("quality",bA.quality),(ap.wmode?bl("wmode",ap.wmode):""),bl("bgcolor",ap.bgColor),bl("hasPriority","true"),(ap.debugFlash?bl("FlashVars",bA.FlashVars):""),"</object>"].join("")
}else{bp=ab.createElement("embed");
for(bB in bA){if(bA.hasOwnProperty(bB)){bp.setAttribute(bB,bA[bB])
}}}F();
bu=o();
bv=bf();
if(bv){ap.oMC=(ao(ap.movieID)||ab.createElement("div"));
if(!ap.oMC.id){ap.oMC.id=ap.movieID;
ap.oMC.className=G.swfDefault+" "+bu;
bq=null;
br=null;
if(!ap.useFlashBlock){if(ap.useHighPerformance){bq={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}
}else{bq={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"};
if(bk){bq.left=Math.abs(parseInt(bq.left,10))+"px"
}}}if(aH){ap.oMC.style.zIndex=10000
}if(!ap.debugFlash){for(bm in bq){if(bq.hasOwnProperty(bm)){ap.oMC.style[bm]=bq[bm]
}}}try{if(!a7){ap.oMC.appendChild(bp)
}bv.appendChild(ap.oMC);
if(a7){br=ap.oMC.appendChild(ab.createElement("div"));
br.className=G.swfBox;
br.innerHTML=bt
}aU=true
}catch(by){throw new Error(be("domError")+" \n"+by.toString())
}}else{bC=ap.oMC.className;
ap.oMC.className=(bC?bC+" ":G.swfDefault)+(bu?" "+bu:"");
ap.oMC.appendChild(bp);
if(a7){br=ap.oMC.appendChild(ab.createElement("div"));
br.className=G.swfBox;
br.innerHTML=bt
}aU=true
}}aq=true;
bz();
return true
};
l=function(){if(ap.html5Only){J();
return false
}if(ae){return false
}if(!ap.url){X("noURL");
return false
}ae=ap.getMovie(ap.id);
if(!ae){if(!aL){J(ap.id,ap.url)
}else{if(!a7){ap.oMC.appendChild(aL)
}else{ap.oMC.innerHTML=ak
}aL=null;
aq=true
}ae=ap.getMovie(ap.id)
}if(typeof ap.oninitmovie==="function"){setTimeout(ap.oninitmovie,1)
}R();
return true
};
A=function(){setTimeout(bc,1000)
};
bc=function(){var bl,bk=false;
if(!ap.url){return false
}if(aR){return false
}aR=true;
am.remove(c,"load",A);
if(a9&&!aC){X("waitFocus");
return false
}if(!ay){bl=ap.getMoviePercent();
if(bl>0&&bl<100){bk=true
}}setTimeout(function(){bl=ap.getMoviePercent();
if(bk){aR=false;
ap._wD(be("waitSWF"));
c.setTimeout(A,1);
return false
}if(!ay){ap._wD(aX+": No Flash response within expected time. Likely causes: "+(bl===0?"SWF load failed, ":"")+"Flash blocked or JS-Flash security error."+(ap.debugFlash?" "+be("checkSWF"):""),2);
if(!I&&bl){X("localFail",2);
if(!ap.debugFlash){X("tryDebug",2)
}}if(bl===0){ap._wD(be("swf404",ap.url),1)
}O("flashtojs",false,": Timed out"+I?" (Check flash security or flash blockers)":" (No plugin/missing SWF?)")
}if(!ay&&az){if(bl===null){if(ap.useFlashBlock||ap.flashLoadTimeout===0){if(ap.useFlashBlock){aB()
}X("waitForever")
}else{if(!ap.useFlashBlock&&ag){c.setTimeout(function(){at(H+"useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...");
ap.setup({preferFlash:false}).reboot();
ap.didFlashBlock=true;
ap.beginDelayedInit()
},1)
}else{X("waitForever");
aS({type:"ontimeout",ignoreInit:true})
}}}else{if(ap.flashLoadTimeout===0){X("waitForever")
}else{t(true)
}}}},ap.flashLoadTimeout)
};
v=function(){function bk(){am.remove(c,"focus",v)
}if(aC||!a9){bk();
return true
}az=true;
aC=true;
X("gotFocus");
aR=false;
A();
bk();
return true
};
R=function(){if(ar.length){ap._wD("SoundManager 2: "+ar.join(" "),1);
ar=[]
}};
aG=function(){R();
var bl,bk=[];
if(ap.useHTML5Audio&&ap.hasHTML5){for(bl in ap.audioFormats){if(ap.audioFormats.hasOwnProperty(bl)){bk.push(bl+" = "+ap.html5[bl]+(!ap.html5[bl]&&D&&ap.flash[bl]?" (using flash)":(ap.preferFlash&&ap.flash[bl]&&D?" (preferring flash)":(!ap.html5[bl]?" ("+(ap.audioFormats[bl].required?"required, ":"")+"and no flash support)":""))))
}}ap._wD("SoundManager 2 HTML5 support: "+bk.join(", "),1)
}};
y=function(bn){if(ay){return false
}if(ap.html5Only){X("sm2Loaded");
ay=true;
u();
O("onload",true);
return true
}var bl=(ap.useFlashBlock&&ap.flashLoadTimeout&&!ap.getMoviePercent()),bk=true,bm;
if(!bl){ay=true;
if(a1){bm={type:(!au&&D?"NO_FLASH":"INIT_TIMEOUT")}
}}ap._wD("SoundManager 2 "+(a1?"failed to load":"loaded")+" ("+(a1?"Flash security/load error":"OK")+")",a1?2:1);
if(a1||bn){if(ap.useFlashBlock&&ap.oMC){ap.oMC.className=o()+" "+(ap.getMoviePercent()===null?G.swfTimedout:G.swfError)
}aS({type:"ontimeout",error:bm,ignoreInit:true});
O("onload",false);
ac(bm);
bk=false
}else{O("onload",true)
}if(!a1){if(ap.waitForWindowLoad&&!bb){X("waitOnload");
am.add(c,"load",u)
}else{if(ap.waitForWindowLoad&&bb){X("docLoaded")
}u()
}}return bk
};
B=function(){var bk,bl=ap.setupOptions;
for(bk in bl){if(bl.hasOwnProperty(bk)){if(ap[bk]===d){ap[bk]=bl[bk]
}else{if(ap[bk]!==bl[bk]){ap.setupOptions[bk]=ap[bk]
}}}}};
aK=function(){if(ay){X("didInit");
return false
}function bk(){am.remove(c,"load",ap.beginDelayedInit)
}if(ap.html5Only){if(!ay){bk();
ap.enabled=true;
y()
}return true
}l();
try{ae._externalInterfaceTest(false);
n(true,(ap.flashPollingInterval||(ap.useHighPerformance?10:50)));
if(!ap.debugMode){ae._disableDebug()
}ap.enabled=true;
O("jstoflash",true);
if(!ap.html5Only){am.add(c,"unload",V)
}}catch(bl){ap._wD("js/flash exception: "+bl.toString());
O("jstoflash",false);
ac({type:"JS_TO_FLASH_EXCEPTION",fatal:true});
t(true);
y();
return false
}y();
bk();
return true
};
N=function(){if(r){return false
}r=true;
B();
F();
(function(){var bn="sm2-usehtml5audio=",bl="sm2-preferflash=",bk=null,bo=null,bm=z.toLowerCase();
if(bm.indexOf(bn)!==-1){bk=(bm.charAt(bm.indexOf(bn)+bn.length)==="1");
if(L){console.log((bk?"Enabling ":"Disabling ")+"useHTML5Audio via URL parameter")
}ap.setup({useHTML5Audio:bk})
}if(bm.indexOf(bl)!==-1){bo=(bm.charAt(bm.indexOf(bl)+bl.length)==="1");
if(L){console.log((bo?"Enabling ":"Disabling ")+"preferFlash via URL parameter")
}ap.setup({preferFlash:bo})
}}());
if(!au&&ap.hasHTML5){ap._wD("SoundManager: No Flash detected"+(!ap.useHTML5Audio?", enabling HTML5.":". Trying HTML5-only mode."),1);
ap.setup({useHTML5Audio:true,preferFlash:false})
}aO();
if(!au&&D){ar.push(e.needFlash);
ap.setup({flashLoadTimeout:1})
}if(ab.removeEventListener){ab.removeEventListener("DOMContentLoaded",N,false)
}l();
return true
};
Q=function(){if(ab.readyState==="complete"){N();
ab.detachEvent("onreadystatechange",Q)
}return true
};
bj=function(){bb=true;
am.remove(c,"load",bj)
};
aE=function(){if(aT){if(!ap.setupOptions.useHTML5Audio||ap.setupOptions.preferFlash){ar.push(e.mobileUA)
}ap.setupOptions.useHTML5Audio=true;
ap.setupOptions.preferFlash=false;
if(aW||(aw&&!av.match(/android\s2\.3/i))){ar.push(e.globalHTML5);
if(aW){ap.ignoreFlash=true
}aZ=true
}}};
aE();
S();
am.add(c,"focus",v);
am.add(c,"load",A);
am.add(c,"load",bj);
if(ab.addEventListener){ab.addEventListener("DOMContentLoaded",N,false)
}else{if(ab.attachEvent){ab.attachEvent("onreadystatechange",Q)
}else{O("onload",false);
ac({type:"NO_DOM2_EVENTS",fatal:true})
}}}if(c.SM2_DEFER===undefined||!SM2_DEFER){b=new a()
}c.SoundManager=a;
c.soundManager=b
}(window));
/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */
;
!function(a,b){if(typeof module!="undefined"&&module.exports){module.exports.browser=b()
}else{if(typeof define=="function"&&define.amd){define(b)
}else{this[a]=b()
}}}("bowser",function(){var b=true;
function a(e){function j(q){var p=e.match(q);
return(p&&p.length>1&&p[1])||""
}var n=j(/(ipod|iphone|ipad)/i).toLowerCase(),m=/like android/i.test(e),g=!m&&/android/i.test(e),d=j(/version\/(\d+(\.\d+)?)/i),l=/tablet/i.test(e),f=!l&&/[^-]mobi/i.test(e),o;
if(/opera|opr/i.test(e)){o={name:"Opera",opera:b,version:d||j(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}
}else{if(/windows phone/i.test(e)){o={name:"Windows Phone",windowsphone:b,msie:b,version:j(/iemobile\/(\d+(\.\d+)?)/i)}
}else{if(/msie|trident/i.test(e)){o={name:"Internet Explorer",msie:b,version:j(/(?:msie |rv:)(\d+(\.\d+)?)/i)}
}else{if(/chrome|crios|crmo/i.test(e)){o={name:"Chrome",chrome:b,version:j(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}
}else{if(n){o={name:n=="iphone"?"iPhone":n=="ipad"?"iPad":"iPod"};
if(d){o.version=d
}}else{if(/sailfish/i.test(e)){o={name:"Sailfish",sailfish:b,version:j(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}
}else{if(/seamonkey\//i.test(e)){o={name:"SeaMonkey",seamonkey:b,version:j(/seamonkey\/(\d+(\.\d+)?)/i)}
}else{if(/firefox|iceweasel/i.test(e)){o={name:"Firefox",firefox:b,version:j(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)};
if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)){o.firefoxos=b
}}else{if(/silk/i.test(e)){o={name:"Amazon Silk",silk:b,version:j(/silk\/(\d+(\.\d+)?)/i)}
}else{if(g){o={name:"Android",version:d}
}else{if(/phantom/i.test(e)){o={name:"PhantomJS",phantom:b,version:j(/phantomjs\/(\d+(\.\d+)?)/i)}
}else{if(/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)){o={name:"BlackBerry",blackberry:b,version:d||j(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}
}else{if(/(web|hpw)os/i.test(e)){o={name:"WebOS",webos:b,version:d||j(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};
/touchpad\//i.test(e)&&(o.touchpad=b)
}else{if(/bada/i.test(e)){o={name:"Bada",bada:b,version:j(/dolfin\/(\d+(\.\d+)?)/i)}
}else{if(/tizen/i.test(e)){o={name:"Tizen",tizen:b,version:j(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||d}
}else{if(/safari/i.test(e)){o={name:"Safari",safari:b,version:d}
}else{o={}
}}}}}}}}}}}}}}}}if(/(apple)?webkit/i.test(e)){o.name=o.name||"Webkit";
o.webkit=b;
if(!o.version&&d){o.version=d
}}else{if(!o.opera&&/gecko\//i.test(e)){o.name=o.name||"Gecko";
o.gecko=b;
o.version=o.version||j(/gecko\/(\d+(\.\d+)?)/i)
}}if(g||o.silk){o.android=b
}else{if(n){o[n]=b;
o.ios=b
}}var h="";
if(n){h=j(/os (\d+([_\s]\d+)*) like mac os x/i);
h=h.replace(/[_\s]/g,".")
}else{if(g){h=j(/android[ \/-](\d+(\.\d+)*)/i)
}else{if(o.windowsphone){h=j(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i)
}else{if(o.webos){h=j(/(?:web|hpw)os\/(\d+(\.\d+)*)/i)
}else{if(o.blackberry){h=j(/rim\stablet\sos\s(\d+(\.\d+)*)/i)
}else{if(o.bada){h=j(/bada\/(\d+(\.\d+)*)/i)
}else{if(o.tizen){h=j(/tizen[\/\s](\d+(\.\d+)*)/i)
}}}}}}}if(h){o.osversion=h
}var k=h.split(".")[0];
if(l||n=="ipad"||(g&&(k==3||(k==4&&!f)))||o.silk){o.tablet=b
}else{if(f||n=="iphone"||n=="ipod"||g||o.blackberry||o.webos||o.bada){o.mobile=b
}}if((o.msie&&o.version>=10)||(o.chrome&&o.version>=20)||(o.firefox&&o.version>=20)||(o.safari&&o.version>=6)||(o.opera&&o.version>=10)||(o.ios&&o.osversion&&o.osversion.split(".")[0]>=6)||(o.blackberry&&o.version>=10.1)){o.a=b
}else{if((o.msie&&o.version<10)||(o.chrome&&o.version<20)||(o.firefox&&o.version<20)||(o.safari&&o.version<6)||(o.opera&&o.version<10)||(o.ios&&o.osversion&&o.osversion.split(".")[0]<6)){o.c=b
}else{o.x=b
}}return o
}var c=a(typeof navigator!=="undefined"?navigator.userAgent:"");
c._detect=a;
return c
});
(function(e){function c(k,j,g,h,f){this._listener=j;
this._isOnce=g;
this.context=h;
this._signal=k;
this._priority=f||0
}c.prototype={active:true,params:null,execute:function(f){var h,g;
if(this.active&&!!this._listener){g=this.params?this.params.concat(f):f;
h=this._listener.apply(this.context,g);
if(this._isOnce){this.detach()
}}return h
},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null
},isBound:function(){return(!!this._signal&&!!this._listener)
},isOnce:function(){return this._isOnce
},getListener:function(){return this._listener
},getSignal:function(){return this._signal
},_destroy:function(){delete this._signal;
delete this._listener;
delete this.context
},toString:function(){return"[SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"
}};
function a(f,g){if(typeof f!=="function"){throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",g))
}}function d(){this._bindings=[];
this._prevParams=null;
var f=this;
this.dispatch=function(){d.prototype.dispatch.apply(f,arguments)
}
}d.prototype={VERSION:"1.0.0",memorize:false,_shouldPropagate:true,active:true,_registerListener:function(k,h,j,g){var f=this._indexOfListener(k,j),l;
if(f!==-1){l=this._bindings[f];
if(l.isOnce()!==h){throw new Error("You cannot add"+(h?"":"Once")+"() then add"+(!h?"":"Once")+"() the same listener without removing the relationship first.")
}}else{l=new c(this,k,h,j,g);
this._addBinding(l)
}if(this.memorize&&this._prevParams){l.execute(this._prevParams)
}return l
},_addBinding:function(f){var g=this._bindings.length;
do{--g
}while(this._bindings[g]&&f._priority<=this._bindings[g]._priority);
this._bindings.splice(g+1,0,f)
},_indexOfListener:function(g,f){var j=this._bindings.length,h;
while(j--){h=this._bindings[j];
if(h._listener===g&&h.context===f){return j
}}return -1
},has:function(g,f){return this._indexOfListener(g,f)!==-1
},add:function(h,g,f){a(h,"add");
return this._registerListener(h,false,g,f)
},addOnce:function(h,g,f){a(h,"addOnce");
return this._registerListener(h,true,g,f)
},remove:function(h,g){a(h,"remove");
var f=this._indexOfListener(h,g);
if(f!==-1){this._bindings[f]._destroy();
this._bindings.splice(f,1)
}return h
},removeAll:function(){var f=this._bindings.length;
while(f--){this._bindings[f]._destroy()
}this._bindings.length=0
},getNumListeners:function(){return this._bindings.length
},halt:function(){this._shouldPropagate=false
},dispatch:function(g){if(!this.active){return
}var f=Array.prototype.slice.call(arguments),j=this._bindings.length,h;
if(this.memorize){this._prevParams=f
}if(!j){return
}h=this._bindings.slice();
this._shouldPropagate=true;
do{j--
}while(h[j]&&this._shouldPropagate&&h[j].execute(f)!==false)
},forget:function(){this._prevParams=null
},dispose:function(){this.removeAll();
delete this._bindings;
delete this._prevParams
},toString:function(){return"[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"
}};
var b=d;
b.Signal=d;
if(typeof define==="function"&&define.amd){define(function(){return b
})
}else{if(typeof module!=="undefined"&&module.exports){module.exports=b
}else{e.signals=b
}}}(this));
(function(window,True,False,Null,undefined){var document=window.document,documentElement=document.documentElement,windowHistory=window.history||{},windowLocation=window.location,api=!!windowHistory.pushState,initialState=api&&windowHistory.state===undefined,initialFire=windowLocation.href,JSON=window.JSON||{},defineProp=Object.defineProperty,defineGetter=Object.prototype.__defineGetter__,defineSetter=Object.prototype.__defineSetter__,historyPushState=windowHistory.pushState,historyReplaceState=windowHistory.replaceState,sessionStorage=window.sessionStorage,hasOwnProperty=Object.prototype.hasOwnProperty,toString=Object.prototype.toString,msie=+(((window.eval&&eval("/*@cc_on 1;@*/")&&/msie (\d+)/i.exec(navigator.userAgent))||[])[1]||0),libID=(new Date()).getTime(),VBInc=(defineProp||defineGetter)&&(!msie||msie>8)?0:1,iframe=msie<8?document.createElement("iframe"):False,_a,_r,_d,eventPrefix="",addEvent=(_a="addEventListener",window[_a])||(_a="attachEvent",eventPrefix="on",window[_a]),removeEvent=(_r="removeEventListener",window[_r])||(_r="detachEvent",window[_r]),fireEvent=(_d="dispatchEvent",window[_d])||(_d="fireEvent",window[_d]),eventsListPopState=[],eventsListHashChange=[],skipHashChange=0,eventsList={onpopstate:eventsListPopState,popstate:eventsListPopState,onhashchange:eventsListHashChange,hashchange:eventsListHashChange},sets=(function(){var i,m,s,config={basepath:"/",redirect:0,type:"/"},el=document.getElementsByTagName("SCRIPT");
for(i=0;
el[i];
i++){if(m=/(.*)\/(?:history|spike)(?:\.iegte8)?(?:-\d\.\d(?:\.\d)?\w?)?(?:\.min)?.js\?(.*)$/i.exec(el[i].src)||(i===el.length-1&&(m=el[i].src.split("?")).length===2&&(m[2]=m[1])&&m)){for(i=0,s=m[2].split("&");
s[i];
){m=s[i++].split("=");
config[m[0]]=m[1]=="true"?True:m[1]=="false"?False:m[1]||""
}config.basepath=config.basepath||"/";
break
}}return config
})(),normalizeUrl=(function(a){var _href,relative,special,nohash,host,port,pathname;
return function(href,test){var re=new RegExp("^"+sets.basepath,"i");
if(!href){href=windowLocation.href;
if(!api||test){href=windowLocation.protocol+"//"+windowLocation.host+sets.basepath+(href.replace(/^[^#]*/,"")||"#").replace(new RegExp("^#[/]?(?:"+sets.type+")?"),"")
}}else{if(!api||msie){var current=normalizeUrl(),_pathname=current._pathname,_protocol=current._protocol;
href=/^(?:[\w0-9]+\:)?\/\//.test(href)?href.indexOf("/")===0?_protocol+href:href:_protocol+"//"+current._host+(href.indexOf("/")===0?href:href.indexOf("?")===0?_pathname+href:href.indexOf("#")===0?_pathname+current._search+href:_pathname.replace(/[^\/]+$/g,"")+href)
}}if(_href!==href){a.href=_href=href;
port=a.port;
host=a.host;
pathname=a.pathname;
if((a.protocol==="http:"&&port==80)||(a.protocol==="https:"&&port==443)){host=a.hostname;
port=""
}pathname=pathname.indexOf("/")===0?pathname:"/"+pathname;
relative=pathname+a.search+a.hash;
nohash=pathname.replace(re,sets.type)+a.search;
special=nohash+a.hash
}return{_href:a.protocol+"//"+host+relative,_protocol:a.protocol,_host:host,_hostname:a.hostname||windowLocation.hostname,_port:port||windowLocation.port,_pathname:pathname,_search:a.search,_hash:a.hash,_relative:relative,_nohash:nohash,_special:special}
}
})(document.createElement("a")),History=!VBInc?windowHistory:{back:windowHistory.back,forward:windowHistory.forward,go:windowHistory.go,pushState:Null,replaceState:Null,emulate:!api,toString:function(){return"[object History]"
}},HistoryAccessors={state:{get:function(){return iframe&&iframe.storage||historyStorage()[History.location.href]||Null
}},length:{get:function(){return windowHistory.length
}},location:{set:function(val){window.location=val
},get:function(){return api?windowLocation:Location
}}},Location={assign:function(url){windowLocation.assign(api||url.indexOf("#")!==0?url:"#"+normalizeUrl()._nohash+url)
},reload:windowLocation.reload,replace:function(url){windowLocation.replace(api||url.indexOf("#")!==0?url:"#"+normalizeUrl()._nohash+url)
},toString:function(){return this.href
}},LocationAccessors={href:{set:function(val){windowLocation.href=val
},get:function(){return normalizeUrl()._href
}},protocol:{set:function(val){windowLocation.protocol=val
},get:function(){return windowLocation.protocol
}},host:{set:function(val){windowLocation.host=val
},get:function(){return windowLocation.host
}},hostname:{set:function(val){windowLocation.hostname=val
},get:function(){return windowLocation.hostname
}},port:{set:function(val){windowLocation.port=val
},get:function(){return windowLocation.port
}},pathname:{set:function(val){windowLocation.pathname=val
},get:function(){return normalizeUrl()._pathname
}},search:{set:function(val){windowLocation.search=val
},get:function(){return normalizeUrl()._search
}},hash:{set:function(val){var hash=(val.indexOf("#")===0?val:"#"+val),urlObject=normalizeUrl();
if(iframe){if(hash!=urlObject._hash){History.pushState(Null,Null,urlObject._nohash+hash);
hashChanged({oldURL:urlObject._href})
}}else{windowLocation.hash="#"+urlObject._nohash+hash
}},get:function(){return normalizeUrl()._hash
}}},createStaticObject=function(obj,props,novb){var tmp=obj,key,vb=False;
if(defineProp||defineGetter){for(key in props){if(hasOwnProperty.call(props,key)){if(defineGetter){props[key].get&&defineGetter.call(obj,key,props[key].get);
props[key].set&&defineSetter.call(obj,key,props[key].set)
}else{if(defineProp){try{defineProp(obj,key,props[key])
}catch(_e_){if(novb){return False
}vb=True;
break
}}}}}}else{vb=True
}if(vb&&VBInc){var staticClass="StaticClass"+libID+VBInc++,parts=["Class "+staticClass];
if(!("execVB" in window)){execScript("Function execVB(c) ExecuteGlobal(c) End Function","VBScript")
}if(!("VBCVal" in window)){execScript("Function VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function","VBScript")
}for(key in obj){parts[parts.length]="Public ["+key+"]"
}if(hasOwnProperty.call(obj,"toString")){if(!obj.propertyIsEnumerable("toString")){parts[parts.length]="Public [toString]"
}props["(toString)"]={get:function(){return this.toString.call(this)
}}
}for(key in props){if(hasOwnProperty.call(props,key)){if(props[key].get){obj["get "+key]=props[key].get;
parts.push("Public [get "+key+"]","Public "+(key==="(toString)"?"Default ":"")+"Property Get ["+key+"]","Call VBCVal(me.[get "+key+"].call(me),["+key+"])","End Property")
}if(props[key].set){obj["set "+key]=props[key].set;
parts.push("Public [set "+key+"]","Public Property Let ["+key+"](v)","Call me.[set "+key+"].call(me,v)","End Property","Public Property Set ["+key+"](v)","Call me.[set "+key+"].call(me,v)","End Property")
}}}parts.push("End Class","Function "+staticClass+"Factory()","Set "+staticClass+"Factory=New "+staticClass,"End Function");
execVB(parts.join("\n"));
tmp=window[staticClass+"Factory"]();
for(key in obj){tmp[key]=obj[key]
}if(hasOwnProperty.call(obj,"toString")){tmp.toString=obj.toString
}}return tmp
},JSONStringify=JSON.stringify||(function(undefined){function quote(string){var escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}var str=function(value){var isArray,result,k,n=(typeof value).charCodeAt(2);
return n===114?quote(value):n===109?isFinite(value)?String(value):"null":n===111||n===108?String(value):n===106?function(){if(!value){return"null"
}isArray=toString.apply(value)==="[object Array]";
result=isArray?"[":"{";
if(isArray){for(k=0;
k<value.length;
k++){result+=(k==0?"":",")+str(value[k])
}}else{for(k in value){if(hasOwnProperty.call(value,k)&&value[k]!==undefined){result+=(result.length==1?"":",")+quote(k)+":"+str(value[k])
}}}return result+(isArray?"]":"}")
}():undefined
};
return str
})(),JSONParse=(function(){var parse=JSON.parse;
return function(source){return source?parse?parse(source):(new Function("return "+source))():Null
}
})(),historyStorage=function(state){return sessionStorage?state?sessionStorage.setItem("__hitoryapi__",JSONStringify(state)):JSONParse(sessionStorage.getItem("__hitoryapi__"))||{}:{}
},fireStateChange=function(type,oldURL,newURL){var winHndl=type===2?window.onhashchange:window.onpopstate,name=type===2?"hashchange":"popstate",o,list=eventsList[name];
if(document.createEvent){o=document.createEvent("Events");
o.initEvent(name,False,False)
}else{o=document.createEventObject();
o.type=name
}o.state=History.state;
o.oldURL=oldURL;
o.newURL=newURL;
if(winHndl){winHndl.call(window,o)
}for(var i=0,len=list.length;
i<len;
i++){list[i].call(window,o)
}},hashChanged=(function(){var windowPopState=window.onpopstate||Null,windowHashChange=window.onhashchange||Null,popstateFired=0,initialStateHandler=Null,urlObject=normalizeUrl(),oldURL=urlObject._href,oldHash=urlObject._hash.replace(/^#/,""),fireInitialState=function(){if(initialFire&&!(initialFire=0)&&urlObject._relative!==sets.basepath){clearInterval(initialStateHandler);
setTimeout(fireStateChange,10)
}},change=function(e){var urlObject=normalizeUrl();
if(skipHashChange){oldURL=urlObject._href;
return skipHashChange=0
}var oldUrl=e.oldURL||oldURL,newUrl=oldURL=e.newURL||urlObject._href,oldHash=oldUrl.replace(/^.*?(#|$)/,""),newHash=newUrl.replace(/^.*?(#|$)/,"");
if(oldUrl!=newUrl&&!popstateFired){fireStateChange()
}popstateFired=0;
initialFire=0;
if(oldHash!=newHash){fireStateChange(2,oldUrl,newUrl)
}};
addEvent(eventPrefix+"hashchange",change,False);
addEvent(eventPrefix+"popstate",function(){if(initialFire===windowLocation.href){return initialFire=0
}initialFire=0;
fireStateChange(popstateFired=1)
},False);
History.redirect=function(type,basepath){sets.type=type==Null?sets.type:type;
sets.basepath=basepath==Null?sets.basepath:basepath;
if(window.top==window.self){var relative=normalizeUrl(Null,True)._relative,search=windowLocation.search,path=windowLocation.pathname,basepath=sets.basepath;
if(api){if(relative!=basepath&&(new RegExp("^"+basepath+"$","i")).test(path)){windowLocation.href=relative
}if((new RegExp("^"+basepath+"$","i")).test(path+"/")){windowLocation.href=basepath
}else{if(!(new RegExp("^"+basepath,"i")).test(path)){windowLocation.href=path.replace(/^\//,basepath)+search
}}}else{if(path!=basepath){windowLocation.href=basepath+"#"+path.replace(new RegExp("^"+basepath,"i"),sets.type)+search+windowLocation.hash
}}}};
History=createStaticObject(History,VBInc?HistoryAccessors:windowHistory.state===undefined?{state:HistoryAccessors.state,location:HistoryAccessors.location}:{location:HistoryAccessors.location});
Location=createStaticObject(Location,LocationAccessors);
window[_a]=function(event,listener,capture){if(eventsList[event]){eventsList[event].push(listener);
if(!api&&eventsListPopState===eventsList[event]){fireInitialState()
}}else{if(arguments.length>3){addEvent(event,listener,capture,arguments[3])
}else{addEvent(event,listener,capture)
}}};
window[_r]=function(event,listener,capture){var list=eventsList[event];
if(list){for(var i=list.length;
--i;
){if(list[i]===listener){list.splice(i,1);
break
}}}else{removeEvent(event,listener,capture)
}};
window[_d]=function(event,eventObject){var type=event&&event.type||event,list=eventsList[event],winHndl=list===eventsListPopState?window.onpopstate:window.onhashchange;
if(list){eventObject=eventObject||(typeof event=="string"?window.event:event);
try{eventObject&&(eventObject.target=window)
}catch(_e_){try{eventObject.srcElement=window
}catch(_e_){}}if(winHndl){winHndl.call(window,eventObject)
}for(var i=0,len=list.length;
i<len;
i++){list[i].call(window,eventObject)
}return True
}else{return fireEvent(event,eventObject)
}};
if(VBInc){execScript("Public history, onhashchange","VBScript")
}if(((!defineProp&&!defineGetter)||!createStaticObject(window,{onhashchange:{get:function(){return windowHashChange
},set:function(val){windowHashChange=val||Null
}},onpopstate:{get:function(){return windowPopState
},set:function(val){if(windowPopState=(val||Null)){!api&&fireInitialState()
}}}},1))&&!api){initialStateHandler=setInterval(function(){if(window.onpopstate){fireInitialState()
}},100)
}if(sets.redirect){History.redirect()
}if(!api){document[_a](eventPrefix+"click",function(e){var event=e||window.event,target=event.target||event.srcElement,defaultPrevented="defaultPrevented" in event?event.defaultPrevented:event.returnValue===False;
if(target&&target.nodeName==="A"&&!defaultPrevented){e=normalizeUrl(target.getAttribute("href",2),True);
if(e._hash&&e._hash!=="#"&&e._hash===e._href.replace(normalizeUrl()._href.split("#").shift(),"")){history.location.hash=e._hash;
e=e._hash.replace(/^#/,"");
if((target=document.getElementById(e))&&target.id===e&&target.nodeName==="A"){var rect=target.getBoundingClientRect();
window.scrollTo((documentElement.scrollLeft||0),rect.top+(documentElement.scrollTop||0)-(documentElement.clientTop||0))
}if(event.preventDefault){event.preventDefault()
}else{event.returnValue=false
}}}},False)
}return change
})();
History.pushState=function(state,title,url,replace){var stateObject=historyStorage(),currentHref=normalizeUrl()._href,urlObject=url&&normalizeUrl(url);
initialFire=0;
url=urlObject?urlObject._href:currentHref;
if(replace&&stateObject[currentHref]){delete stateObject[currentHref]
}if((!api||initialState)&&sessionStorage&&state){stateObject[url]=state;
historyStorage(stateObject);
state=Null
}if(historyPushState&&historyReplaceState){if(replace){historyReplaceState.call(History,state,title,url)
}else{historyPushState.call(History,state,title,url)
}}else{if(urlObject&&urlObject._relative!=normalizeUrl()._relative){skipHashChange=1;
if(replace){windowLocation.replace("#"+urlObject._special)
}else{windowLocation.hash=urlObject._special
}}}};
History.replaceState=function(state,title,url){History.pushState(state,title,url,1)
};
if(VBInc){window.history=History;
(function(cookie,currentHref){if(!iframe){return
}var pushState,hashCheckerHandler,checker=function(){var href=normalizeUrl()._href;
if(currentHref!=href){hashChanged({oldURL:currentHref,newURL:currentHref=href})
}};
hashCheckerHandler=setInterval(checker,100);
iframe.src="javascript:true;";
iframe=documentElement.firstChild.appendChild(iframe).contentWindow;
History.pushState=pushState=function(state,title,url,replace,lfirst){var i=iframe.document,content=["<script>","lfirst=1;",,"storage="+JSONStringify(state)+";","<\/script>"],urlObject=url&&normalizeUrl(url);
if(!urlObject){iframe.storage=state;
return
}if(!lfirst){clearInterval(hashCheckerHandler)
}if(replace){if(iframe.lfirst){history.back();
pushState(state,title,urlObject._href,0,1)
}else{iframe.storage=state;
windowLocation.replace("#"+urlObject._special)
}}else{if(urlObject._href!=currentHref||lfirst){if(!iframe.lfirst){iframe.lfirst=1;
pushState(iframe.storage,title,currentHref,0,1)
}content[2]='parent.location.hash="'+urlObject._special.replace(/"/g,'\\"')+'";';
i.open();
i.write(content.join(""));
i.close()
}}if(!lfirst){currentHref=normalizeUrl()._href;
hashCheckerHandler=setInterval(checker,100)
}};
addEvent(eventPrefix+"unload",function(){if(iframe.storage){var state={};
state[normalizeUrl()._href]=iframe.storage;
document.cookie="_historyAPI="+escape(JSONStringify(state))
}clearInterval(hashCheckerHandler)
},False);
if(cookie.length>1){cookie=unescape(cookie.pop().split(";").shift());
try{iframe.storage=JSONParse(cookie)[normalizeUrl()._href]
}catch(_e_){}}if(!JSON.parse&&!JSON.stringify){JSON.parse=JSONParse;
JSON.stringify=JSONStringify;
window.JSON=JSON
}})(document.cookie.split("_historyAPI="),normalizeUrl()._href)
}else{window.history.emulate=!api
}})(window,true,false,null);
function createCookie(c,d,e){if(e){var b=new Date();
b.setTime(b.getTime()+(e*24*60*60*1000));
var a="; expires="+b.toGMTString()
}else{var a=""
}document.cookie=c+"="+d+a+"; path=/"
}function readCookie(b){var e=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var f=a[d];
while(f.charAt(0)==" "){f=f.substring(1,f.length)
}if(f.indexOf(e)==0){return f.substring(e.length,f.length)
}}return null
}function eraseCookie(a){createCookie(a,"",-1)
}(function(){function a(){}a.img_path="emoji/";
a.sheet_path="sheet_64.png";
a.use_css_imgs=false;
a.text_mode=false;
a.include_title=false;
a.allow_native=true;
a.use_sheet=false;
a.inits={};
a.map={};
a.replace_emoticons=function(b){a.init_emoticons();
return b.replace(a.rx_emoticons,function(d,c,f){var e=a.map.emoticons[f];
return e?c+a.replacement(e,f):d
})
};
a.replace_emoticons_with_colons=function(b){a.init_emoticons();
return b.replace(a.rx_emoticons,function(d,c,f){var e=a.data[a.map.emoticons[f]][3][0];
return e?c+":"+e+":":d
})
};
a.replace_colons=function(c,b){a.init_colons();
return c.replace(a.rx_colons,function(e){var d=e.substr(1,e.length-2);
var f=a.map.colons[d];
if(f&&b){return b(a.replacement(f,d,":"))
}return f?a.replacement(f,d,":"):e
})
};
a.replace_colons_with_unified=function(b){a.init_colons();
return b.replace(a.rx_colons,function(d){var c=d.substr(1,d.length-2);
var e=a.map.colons[c];
return(e&&a.data[e][0])?a.data[e][0]:d
})
};
a.replace_unified=function(b){a.init_unified();
return b.replace(a.rx_unified,function(c){var d=a.map.unified[c];
return d?a.replacement(d):c
})
};
a.replacement=function(l,m,c){c=c||"";
var f=(m)?c+m+c:a.data[l][6]||c+a.data[l][3][0]+c;
if(a.text_mode){return f
}a.init_env();
if(a.replace_mode=="unified"&&a.allow_native&&a.data[l][0]){return a.data[l][0]
}if(a.replace_mode=="softbank"&&a.allow_native&&a.data[l][1]){return a.data[l][1]
}if(a.replace_mode=="google"&&a.allow_native&&a.data[l][2]){return a.data[l][2]
}var e=a.data[l][7]||a.img_path+l+".png";
var h=a.include_title?' title="'+(m||a.data[l][3][0])+'"':"";
var n=a.include_text?c+(m||a.data[l][3][0])+c:"";
if(a.supports_css){var k=!!a.data[l][8];
var j=a.data[l][4];
var g=a.data[l][5];
if(!k&&a.use_sheet&&j!=null&&g!=null){var d=100/(a.sheet_size-1);
var b="background: url("+a.sheet_path+");background-position:"+(d*j)+"% "+(d*g)+"%;background-size:"+a.sheet_size+"00%";
return'<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="'+b+'"'+h+">"+n+"</span></span>"
}else{if(a.use_css_imgs){return'<span class="emoji emoji-'+l+'"'+h+">"+n+"</span>"
}else{return'<span class="emoji emoji-sizer" style="background-image:url('+e+')"'+h+">"+n+"</span>"
}}}return'<img src="'+e+'" class="emoji" '+h+"/>"
};
a.init_emoticons=function(){if(a.inits.emoticons){return
}a.init_colons();
a.inits.emoticons=1;
var b=[];
a.map.emoticons={};
for(var d in a.emoticons_data){var c=d.replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
if(!a.map.colons[a.emoticons_data[d]]){continue
}a.map.emoticons[c]=a.map.colons[a.emoticons_data[d]];
b.push(a.escape_rx(c))
}a.rx_emoticons=new RegExp(("(^|\\s)("+b.join("|")+")(?=$|[\\s|\\?\\.,!])"),"g")
};
a.init_colons=function(){if(a.inits.colons){return
}a.inits.colons=1;
a.rx_colons=new RegExp(":[a-zA-Z0-9_\\-+]+:","g");
a.map.colons={};
for(var c in a.data){for(var b=0;
b<a.data[c][3].length;
b++){a.map.colons[a.data[c][3][b]]=c
}}};
a.init_unified=function(){if(a.inits.unified){return
}a.inits.unified=1;
var b=[];
for(var c in a.data){b.push(a.data[c][0])
}a.rx_unified=new RegExp("("+b.join("|")+")","g");
a.map.unified={};
for(var c in a.data){a.map.unified[a.data[c][0]]=c
}};
a.init_env=function(){if(a.inits.env){return
}a.inits.env=1;
a.replace_mode="img";
a.supports_css=false;
var c=navigator.userAgent;
if(window.getComputedStyle){var b=window.getComputedStyle(document.body);
if(b["background-size"]||b.backgroundSize){a.supports_css=true
}}if(c.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)){if(c.match(/OS\s+[12345]/i)){a.replace_mode="softbank";
return
}if(c.match(/OS\s+[6789]/i)){a.replace_mode="unified";
return
}}if(c.match(/Mac OS X 10[._ ](?:[789]|1\d)/i)){if(!c.match(/Chrome/i)){a.replace_mode="unified";
return
}}if(c.match(/Windows NT 6.[1-9]/i)){if(!c.match(/Chrome/i)){a.replace_mode="unified";
return
}}if(false&&c.match(/Android/i)){a.replace_mode="google";
return
}if(a.supports_css){a.replace_mode="css"
}};
a.escape_rx=function(b){return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
};
a.sheet_size=30;
a.data={"00a9":["\u00A9","\uE24E","\uDBBA\uDF29",["copyright"],0,0],"00ae":["\u00AE","\uE24F","\uDBBA\uDF2D",["registered"],0,1],"203c":["\u203C","","\uDBBA\uDF06",["bangbang"],0,2],"2049":["\u2049","","\uDBBA\uDF05",["interrobang"],0,3],"2122":["\u2122","\uE537","\uDBBA\uDF2A",["tm"],0,4],"2139":["\u2139","","\uDBBA\uDF47",["information_source"],0,5],"2194":["\u2194","","\uDBBA\uDEF6",["left_right_arrow"],0,6],"2195":["\u2195","","\uDBBA\uDEF7",["arrow_up_down"],0,7],"2196":["\u2196","\uE237","\uDBBA\uDEF2",["arrow_upper_left"],0,8],"2197":["\u2197","\uE236","\uDBBA\uDEF0",["arrow_upper_right"],0,9],"2198":["\u2198","\uE238","\uDBBA\uDEF1",["arrow_lower_right"],0,10],"2199":["\u2199","\uE239","\uDBBA\uDEF3",["arrow_lower_left"],0,11],"21a9":["\u21A9","","\uDBBA\uDF83",["leftwards_arrow_with_hook"],0,12],"21aa":["\u21AA","","\uDBBA\uDF88",["arrow_right_hook"],0,13],"231a":["\u231A","","\uDBB8\uDC1D",["watch"],0,14],"231b":["\u231B","","\uDBB8\uDC1C",["hourglass"],0,15],"23e9":["\u23E9","\uE23C","\uDBBA\uDEFE",["fast_forward"],0,16],"23ea":["\u23EA","\uE23D","\uDBBA\uDEFF",["rewind"],0,17],"23eb":["\u23EB","","\uDBBA\uDF03",["arrow_double_up"],0,18],"23ec":["\u23EC","","\uDBBA\uDF02",["arrow_double_down"],0,19],"23f0":["\u23F0","\uE02D","\uDBB8\uDC2A",["alarm_clock"],0,20],"23f3":["\u23F3","","\uDBB8\uDC1B",["hourglass_flowing_sand"],0,21],"24c2":["\u24C2","\uE434","\uDBB9\uDFE1",["m"],0,22],"25aa":["\u25AA","\uE21A","\uDBBA\uDF6E",["black_small_square"],0,23],"25ab":["\u25AB","\uE21B","\uDBBA\uDF6D",["white_small_square"],0,24],"25b6":["\u25B6","\uE23A","\uDBBA\uDEFC",["arrow_forward"],0,25],"25c0":["\u25C0","\uE23B","\uDBBA\uDEFD",["arrow_backward"],0,26],"25fb":["\u25FB","\uE21B","\uDBBA\uDF71",["white_medium_square"],0,27],"25fc":["\u25FC","\uE21A","\uDBBA\uDF72",["black_medium_square"],0,28],"25fd":["\u25FD","\uE21B","\uDBBA\uDF6F",["white_medium_small_square"],0,29],"25fe":["\u25FE","\uE21A","\uDBBA\uDF70",["black_medium_small_square"],1,0],"2600":["\u2600","\uE04A","\uDBB8\uDC00",["sunny"],1,1],"2601":["\u2601","\uE049","\uDBB8\uDC01",["cloud"],1,2],"260e":["\u260E","\uE009","\uDBB9\uDD23",["phone","telephone"],1,3],"2611":["\u2611","","\uDBBA\uDF8B",["ballot_box_with_check"],1,4],"2614":["\u2614","\uE04B","\uDBB8\uDC02",["umbrella"],1,5],"2615":["\u2615","\uE045","\uDBBA\uDD81",["coffee"],1,6],"261d":["\u261D","\uE00F","\uDBBA\uDF98",["point_up"],1,7],"263a":["\u263A","\uE414","\uDBB8\uDF36",["relaxed"],1,8],"2648":["\u2648","\uE23F","\uDBB8\uDC2B",["aries"],1,9],"2649":["\u2649","\uE240","\uDBB8\uDC2C",["taurus"],1,10],"264a":["\u264A","\uE241","\uDBB8\uDC2D",["gemini"],1,11],"264b":["\u264B","\uE242","\uDBB8\uDC2E",["cancer"],1,12],"264c":["\u264C","\uE243","\uDBB8\uDC2F",["leo"],1,13],"264d":["\u264D","\uE244","\uDBB8\uDC30",["virgo"],1,14],"264e":["\u264E","\uE245","\uDBB8\uDC31",["libra"],1,15],"264f":["\u264F","\uE246","\uDBB8\uDC32",["scorpius"],1,16],"2650":["\u2650","\uE247","\uDBB8\uDC33",["sagittarius"],1,17],"2651":["\u2651","\uE248","\uDBB8\uDC34",["capricorn"],1,18],"2652":["\u2652","\uE249","\uDBB8\uDC35",["aquarius"],1,19],"2653":["\u2653","\uE24A","\uDBB8\uDC36",["pisces"],1,20],"2660":["\u2660","\uE20E","\uDBBA\uDF1B",["spades"],1,21],"2663":["\u2663","\uE20F","\uDBBA\uDF1D",["clubs"],1,22],"2665":["\u2665","\uE20C","\uDBBA\uDF1A",["hearts"],1,23],"2666":["\u2666","\uE20D","\uDBBA\uDF1C",["diamonds"],1,24],"2668":["\u2668","\uE123","\uDBB9\uDFFA",["hotsprings"],1,25],"267b":["\u267B","","\uDBBA\uDF2C",["recycle"],1,26],"267f":["\u267F","\uE20A","\uDBBA\uDF20",["wheelchair"],1,27],"2693":["\u2693","\uE202","\uDBB9\uDCC1",["anchor"],1,28],"26a0":["\u26A0","\uE252","\uDBBA\uDF23",["warning"],1,29],"26a1":["\u26A1","\uE13D","\uDBB8\uDC04",["zap"],2,0],"26aa":["\u26AA","\uE219","\uDBBA\uDF65",["white_circle"],2,1],"26ab":["\u26AB","\uE219","\uDBBA\uDF66",["black_circle"],2,2],"26bd":["\u26BD","\uE018","\uDBB9\uDFD4",["soccer"],2,3],"26be":["\u26BE","\uE016","\uDBB9\uDFD1",["baseball"],2,4],"26c4":["\u26C4","\uE048","\uDBB8\uDC03",["snowman"],2,5],"26c5":["\u26C5","\uE04A\uE049","\uDBB8\uDC0F",["partly_sunny"],2,6],"26ce":["\u26CE","\uE24B","\uDBB8\uDC37",["ophiuchus"],2,7],"26d4":["\u26D4","\uE137","\uDBBA\uDF26",["no_entry"],2,8],"26ea":["\u26EA","\uE037","\uDBB9\uDCBB",["church"],2,9],"26f2":["\u26F2","\uE121","\uDBB9\uDCBC",["fountain"],2,10],"26f3":["\u26F3","\uE014","\uDBB9\uDFD2",["golf"],2,11],"26f5":["\u26F5","\uE01C","\uDBB9\uDFEA",["boat","sailboat"],2,12],"26fa":["\u26FA","\uE122","\uDBB9\uDFFB",["tent"],2,13],"26fd":["\u26FD","\uE03A","\uDBB9\uDFF5",["fuelpump"],2,14],"2702":["\u2702","\uE313","\uDBB9\uDD3E",["scissors"],2,15],"2705":["\u2705","","\uDBBA\uDF4A",["white_check_mark"],2,16],"2708":["\u2708","\uE01D","\uDBB9\uDFE9",["airplane"],2,17],"2709":["\u2709","\uE103","\uDBB9\uDD29",["email","envelope"],2,18],"270a":["\u270A","\uE010","\uDBBA\uDF93",["fist"],2,19],"270b":["\u270B","\uE012","\uDBBA\uDF95",["hand","raised_hand"],2,20],"270c":["\u270C","\uE011","\uDBBA\uDF94",["v"],2,21],"270f":["\u270F","\uE301","\uDBB9\uDD39",["pencil2"],2,22],"2712":["\u2712","","\uDBB9\uDD36",["black_nib"],2,23],"2714":["\u2714","","\uDBBA\uDF49",["heavy_check_mark"],2,24],"2716":["\u2716","\uE333","\uDBBA\uDF53",["heavy_multiplication_x"],2,25],"2728":["\u2728","\uE32E","\uDBBA\uDF60",["sparkles"],2,26],"2733":["\u2733","\uE206","\uDBBA\uDF62",["eight_spoked_asterisk"],2,27],"2734":["\u2734","\uE205","\uDBBA\uDF61",["eight_pointed_black_star"],2,28],"2744":["\u2744","","\uDBB8\uDC0E",["snowflake"],2,29],"2747":["\u2747","\uE32E","\uDBBA\uDF77",["sparkle"],3,0],"274c":["\u274C","\uE333","\uDBBA\uDF45",["x"],3,1],"274e":["\u274E","\uE333","\uDBBA\uDF46",["negative_squared_cross_mark"],3,2],"2753":["\u2753","\uE020","\uDBBA\uDF09",["question"],3,3],"2754":["\u2754","\uE336","\uDBBA\uDF0A",["grey_question"],3,4],"2755":["\u2755","\uE337","\uDBBA\uDF0B",["grey_exclamation"],3,5],"2757":["\u2757","\uE021","\uDBBA\uDF04",["exclamation","heavy_exclamation_mark"],3,6],"2764":["\u2764","\uE022","\uDBBA\uDF0C",["heart"],3,7,"<3"],"2795":["\u2795","","\uDBBA\uDF51",["heavy_plus_sign"],3,8],"2796":["\u2796","","\uDBBA\uDF52",["heavy_minus_sign"],3,9],"2797":["\u2797","","\uDBBA\uDF54",["heavy_division_sign"],3,10],"27a1":["\u27A1","\uE234","\uDBBA\uDEFA",["arrow_right"],3,11],"27b0":["\u27B0","","\uDBBA\uDF08",["curly_loop"],3,12],"27bf":["\u27BF","\uE211","\uDBBA\uDC2B",["loop"],3,13],"2934":["\u2934","\uE236","\uDBBA\uDEF4",["arrow_heading_up"],3,14],"2935":["\u2935","\uE238","\uDBBA\uDEF5",["arrow_heading_down"],3,15],"2b05":["\u2B05","\uE235","\uDBBA\uDEFB",["arrow_left"],3,16],"2b06":["\u2B06","\uE232","\uDBBA\uDEF8",["arrow_up"],3,17],"2b07":["\u2B07","\uE233","\uDBBA\uDEF9",["arrow_down"],3,18],"2b1b":["\u2B1B","\uE21A","\uDBBA\uDF6C",["black_large_square"],3,19],"2b1c":["\u2B1C","\uE21B","\uDBBA\uDF6B",["white_large_square"],3,20],"2b50":["\u2B50","\uE32F","\uDBBA\uDF68",["star"],3,21],"2b55":["\u2B55","\uE332","\uDBBA\uDF44",["o"],3,22],"3030":["\u3030","","\uDBBA\uDF07",["wavy_dash"],3,23],"303d":["\u303D","\uE12C","\uDBBA\uDC1B",["part_alternation_mark"],3,24],"3297":["\u3297","\uE30D","\uDBBA\uDF43",["congratulations"],3,25],"3299":["\u3299","\uE315","\uDBBA\uDF2B",["secret"],3,26],"1f004":["\uD83C\uDC04","\uE12D","\uDBBA\uDC0B",["mahjong"],3,27],"1f0cf":["\uD83C\uDCCF","","\uDBBA\uDC12",["black_joker"],3,28],"1f170":["\uD83C\uDD70","\uE532","\uDBB9\uDD0B",["a"],3,29],"1f171":["\uD83C\uDD71","\uE533","\uDBB9\uDD0C",["b"],4,0],"1f17e":["\uD83C\uDD7E","\uE535","\uDBB9\uDD0E",["o2"],4,1],"1f17f":["\uD83C\uDD7F","\uE14F","\uDBB9\uDFF6",["parking"],4,2],"1f18e":["\uD83C\uDD8E","\uE534","\uDBB9\uDD0D",["ab"],4,3],"1f191":["\uD83C\uDD91","","\uDBBA\uDF84",["cl"],4,4],"1f192":["\uD83C\uDD92","\uE214","\uDBBA\uDF38",["cool"],4,5],"1f193":["\uD83C\uDD93","","\uDBBA\uDF21",["free"],4,6],"1f194":["\uD83C\uDD94","\uE229","\uDBBA\uDF81",["id"],4,7],"1f195":["\uD83C\uDD95","\uE212","\uDBBA\uDF36",["new"],4,8],"1f196":["\uD83C\uDD96","","\uDBBA\uDF28",["ng"],4,9],"1f197":["\uD83C\uDD97","\uE24D","\uDBBA\uDF27",["ok"],4,10],"1f198":["\uD83C\uDD98","","\uDBBA\uDF4F",["sos"],4,11],"1f199":["\uD83C\uDD99","\uE213","\uDBBA\uDF37",["up"],4,12],"1f19a":["\uD83C\uDD9A","\uE12E","\uDBBA\uDF32",["vs"],4,13],"1f201":["\uD83C\uDE01","\uE203","\uDBBA\uDF24",["koko"],4,14],"1f202":["\uD83C\uDE02","\uE228","\uDBBA\uDF3F",["sa"],4,15],"1f21a":["\uD83C\uDE1A","\uE216","\uDBBA\uDF3A",["u7121"],4,16],"1f22f":["\uD83C\uDE2F","\uE22C","\uDBBA\uDF40",["u6307"],4,17],"1f232":["\uD83C\uDE32","","\uDBBA\uDF2E",["u7981"],4,18],"1f233":["\uD83C\uDE33","\uE22B","\uDBBA\uDF2F",["u7a7a"],4,19],"1f234":["\uD83C\uDE34","","\uDBBA\uDF30",["u5408"],4,20],"1f235":["\uD83C\uDE35","\uE22A","\uDBBA\uDF31",["u6e80"],4,21],"1f236":["\uD83C\uDE36","\uE215","\uDBBA\uDF39",["u6709"],4,22],"1f237":["\uD83C\uDE37","\uE217","\uDBBA\uDF3B",["u6708"],4,23],"1f238":["\uD83C\uDE38","\uE218","\uDBBA\uDF3C",["u7533"],4,24],"1f239":["\uD83C\uDE39","\uE227","\uDBBA\uDF3E",["u5272"],4,25],"1f23a":["\uD83C\uDE3A","\uE22D","\uDBBA\uDF41",["u55b6"],4,26],"1f250":["\uD83C\uDE50","\uE226","\uDBBA\uDF3D",["ideograph_advantage"],4,27],"1f251":["\uD83C\uDE51","","\uDBBA\uDF50",["accept"],4,28],"1f300":["\uD83C\uDF00","\uE443","\uDBB8\uDC05",["cyclone"],4,29],"1f301":["\uD83C\uDF01","","\uDBB8\uDC06",["foggy"],5,0],"1f302":["\uD83C\uDF02","\uE43C","\uDBB8\uDC07",["closed_umbrella"],5,1],"1f303":["\uD83C\uDF03","\uE44B","\uDBB8\uDC08",["night_with_stars"],5,2],"1f304":["\uD83C\uDF04","\uE04D","\uDBB8\uDC09",["sunrise_over_mountains"],5,3],"1f305":["\uD83C\uDF05","\uE449","\uDBB8\uDC0A",["sunrise"],5,4],"1f306":["\uD83C\uDF06","\uE146","\uDBB8\uDC0B",["city_sunset"],5,5],"1f307":["\uD83C\uDF07","\uE44A","\uDBB8\uDC0C",["city_sunrise"],5,6],"1f308":["\uD83C\uDF08","\uE44C","\uDBB8\uDC0D",["rainbow"],5,7],"1f309":["\uD83C\uDF09","\uE44B","\uDBB8\uDC10",["bridge_at_night"],5,8],"1f30a":["\uD83C\uDF0A","\uE43E","\uDBB8\uDC38",["ocean"],5,9],"1f30b":["\uD83C\uDF0B","","\uDBB8\uDC3A",["volcano"],5,10],"1f30c":["\uD83C\uDF0C","\uE44B","\uDBB8\uDC3B",["milky_way"],5,11],"1f30d":["\uD83C\uDF0D","","",["earth_africa"],5,12],"1f30e":["\uD83C\uDF0E","","",["earth_americas"],5,13],"1f30f":["\uD83C\uDF0F","","\uDBB8\uDC39",["earth_asia"],5,14],"1f310":["\uD83C\uDF10","","",["globe_with_meridians"],5,15],"1f311":["\uD83C\uDF11","","\uDBB8\uDC11",["new_moon"],5,16],"1f312":["\uD83C\uDF12","","",["waxing_crescent_moon"],5,17],"1f313":["\uD83C\uDF13","\uE04C","\uDBB8\uDC13",["first_quarter_moon"],5,18],"1f314":["\uD83C\uDF14","\uE04C","\uDBB8\uDC12",["moon","waxing_gibbous_moon"],5,19],"1f315":["\uD83C\uDF15","","\uDBB8\uDC15",["full_moon"],5,20],"1f316":["\uD83C\uDF16","","",["waning_gibbous_moon"],5,21],"1f317":["\uD83C\uDF17","","",["last_quarter_moon"],5,22],"1f318":["\uD83C\uDF18","","",["waning_crescent_moon"],5,23],"1f319":["\uD83C\uDF19","\uE04C","\uDBB8\uDC14",["crescent_moon"],5,24],"1f31a":["\uD83C\uDF1A","","",["new_moon_with_face"],5,25],"1f31b":["\uD83C\uDF1B","\uE04C","\uDBB8\uDC16",["first_quarter_moon_with_face"],5,26],"1f31c":["\uD83C\uDF1C","","",["last_quarter_moon_with_face"],5,27],"1f31d":["\uD83C\uDF1D","","",["full_moon_with_face"],5,28],"1f31e":["\uD83C\uDF1E","","",["sun_with_face"],5,29],"1f31f":["\uD83C\uDF1F","\uE335","\uDBBA\uDF69",["star2"],6,0],"1f320":["\uD83C\uDF20","","\uDBBA\uDF6A",["stars"],6,1],"1f330":["\uD83C\uDF30","","\uDBB8\uDC4C",["chestnut"],6,2],"1f331":["\uD83C\uDF31","\uE110","\uDBB8\uDC3E",["seedling"],6,3],"1f332":["\uD83C\uDF32","","",["evergreen_tree"],6,4],"1f333":["\uD83C\uDF33","","",["deciduous_tree"],6,5],"1f334":["\uD83C\uDF34","\uE307","\uDBB8\uDC47",["palm_tree"],6,6],"1f335":["\uD83C\uDF35","\uE308","\uDBB8\uDC48",["cactus"],6,7],"1f337":["\uD83C\uDF37","\uE304","\uDBB8\uDC3D",["tulip"],6,8],"1f338":["\uD83C\uDF38","\uE030","\uDBB8\uDC40",["cherry_blossom"],6,9],"1f339":["\uD83C\uDF39","\uE032","\uDBB8\uDC41",["rose"],6,10],"1f33a":["\uD83C\uDF3A","\uE303","\uDBB8\uDC45",["hibiscus"],6,11],"1f33b":["\uD83C\uDF3B","\uE305","\uDBB8\uDC46",["sunflower"],6,12],"1f33c":["\uD83C\uDF3C","\uE305","\uDBB8\uDC4D",["blossom"],6,13],"1f33d":["\uD83C\uDF3D","","\uDBB8\uDC4A",["corn"],6,14],"1f33e":["\uD83C\uDF3E","\uE444","\uDBB8\uDC49",["ear_of_rice"],6,15],"1f33f":["\uD83C\uDF3F","\uE110","\uDBB8\uDC4E",["herb"],6,16],"1f340":["\uD83C\uDF40","\uE110","\uDBB8\uDC3C",["four_leaf_clover"],6,17],"1f341":["\uD83C\uDF41","\uE118","\uDBB8\uDC3F",["maple_leaf"],6,18],"1f342":["\uD83C\uDF42","\uE119","\uDBB8\uDC42",["fallen_leaf"],6,19],"1f343":["\uD83C\uDF43","\uE447","\uDBB8\uDC43",["leaves"],6,20],"1f344":["\uD83C\uDF44","","\uDBB8\uDC4B",["mushroom"],6,21],"1f345":["\uD83C\uDF45","\uE349","\uDBB8\uDC55",["tomato"],6,22],"1f346":["\uD83C\uDF46","\uE34A","\uDBB8\uDC56",["eggplant"],6,23],"1f347":["\uD83C\uDF47","","\uDBB8\uDC59",["grapes"],6,24],"1f348":["\uD83C\uDF48","","\uDBB8\uDC57",["melon"],6,25],"1f349":["\uD83C\uDF49","\uE348","\uDBB8\uDC54",["watermelon"],6,26],"1f34a":["\uD83C\uDF4A","\uE346","\uDBB8\uDC52",["tangerine"],6,27],"1f34b":["\uD83C\uDF4B","","",["lemon"],6,28],"1f34c":["\uD83C\uDF4C","","\uDBB8\uDC50",["banana"],6,29],"1f34d":["\uD83C\uDF4D","","\uDBB8\uDC58",["pineapple"],7,0],"1f34e":["\uD83C\uDF4E","\uE345","\uDBB8\uDC51",["apple"],7,1],"1f34f":["\uD83C\uDF4F","\uE345","\uDBB8\uDC5B",["green_apple"],7,2],"1f350":["\uD83C\uDF50","","",["pear"],7,3],"1f351":["\uD83C\uDF51","","\uDBB8\uDC5A",["peach"],7,4],"1f352":["\uD83C\uDF52","","\uDBB8\uDC4F",["cherries"],7,5],"1f353":["\uD83C\uDF53","\uE347","\uDBB8\uDC53",["strawberry"],7,6],"1f354":["\uD83C\uDF54","\uE120","\uDBBA\uDD60",["hamburger"],7,7],"1f355":["\uD83C\uDF55","","\uDBBA\uDD75",["pizza"],7,8],"1f356":["\uD83C\uDF56","","\uDBBA\uDD72",["meat_on_bone"],7,9],"1f357":["\uD83C\uDF57","","\uDBBA\uDD76",["poultry_leg"],7,10],"1f358":["\uD83C\uDF58","\uE33D","\uDBBA\uDD69",["rice_cracker"],7,11],"1f359":["\uD83C\uDF59","\uE342","\uDBBA\uDD61",["rice_ball"],7,12],"1f35a":["\uD83C\uDF5A","\uE33E","\uDBBA\uDD6A",["rice"],7,13],"1f35b":["\uD83C\uDF5B","\uE341","\uDBBA\uDD6C",["curry"],7,14],"1f35c":["\uD83C\uDF5C","\uE340","\uDBBA\uDD63",["ramen"],7,15],"1f35d":["\uD83C\uDF5D","\uE33F","\uDBBA\uDD6B",["spaghetti"],7,16],"1f35e":["\uD83C\uDF5E","\uE339","\uDBBA\uDD64",["bread"],7,17],"1f35f":["\uD83C\uDF5F","\uE33B","\uDBBA\uDD67",["fries"],7,18],"1f360":["\uD83C\uDF60","","\uDBBA\uDD74",["sweet_potato"],7,19],"1f361":["\uD83C\uDF61","\uE33C","\uDBBA\uDD68",["dango"],7,20],"1f362":["\uD83C\uDF62","\uE343","\uDBBA\uDD6D",["oden"],7,21],"1f363":["\uD83C\uDF63","\uE344","\uDBBA\uDD6E",["sushi"],7,22],"1f364":["\uD83C\uDF64","","\uDBBA\uDD7F",["fried_shrimp"],7,23],"1f365":["\uD83C\uDF65","","\uDBBA\uDD73",["fish_cake"],7,24],"1f366":["\uD83C\uDF66","\uE33A","\uDBBA\uDD66",["icecream"],7,25],"1f367":["\uD83C\uDF67","\uE43F","\uDBBA\uDD71",["shaved_ice"],7,26],"1f368":["\uD83C\uDF68","","\uDBBA\uDD77",["ice_cream"],7,27],"1f369":["\uD83C\uDF69","","\uDBBA\uDD78",["doughnut"],7,28],"1f36a":["\uD83C\uDF6A","","\uDBBA\uDD79",["cookie"],7,29],"1f36b":["\uD83C\uDF6B","","\uDBBA\uDD7A",["chocolate_bar"],8,0],"1f36c":["\uD83C\uDF6C","","\uDBBA\uDD7B",["candy"],8,1],"1f36d":["\uD83C\uDF6D","","\uDBBA\uDD7C",["lollipop"],8,2],"1f36e":["\uD83C\uDF6E","","\uDBBA\uDD7D",["custard"],8,3],"1f36f":["\uD83C\uDF6F","","\uDBBA\uDD7E",["honey_pot"],8,4],"1f370":["\uD83C\uDF70","\uE046","\uDBBA\uDD62",["cake"],8,5],"1f371":["\uD83C\uDF71","\uE34C","\uDBBA\uDD6F",["bento"],8,6],"1f372":["\uD83C\uDF72","\uE34D","\uDBBA\uDD70",["stew"],8,7],"1f373":["\uD83C\uDF73","\uE147","\uDBBA\uDD65",["egg"],8,8],"1f374":["\uD83C\uDF74","\uE043","\uDBBA\uDD80",["fork_and_knife"],8,9],"1f375":["\uD83C\uDF75","\uE338","\uDBBA\uDD84",["tea"],8,10],"1f376":["\uD83C\uDF76","\uE30B","\uDBBA\uDD85",["sake"],8,11],"1f377":["\uD83C\uDF77","\uE044","\uDBBA\uDD86",["wine_glass"],8,12],"1f378":["\uD83C\uDF78","\uE044","\uDBBA\uDD82",["cocktail"],8,13],"1f379":["\uD83C\uDF79","\uE044","\uDBBA\uDD88",["tropical_drink"],8,14],"1f37a":["\uD83C\uDF7A","\uE047","\uDBBA\uDD83",["beer"],8,15],"1f37b":["\uD83C\uDF7B","\uE30C","\uDBBA\uDD87",["beers"],8,16],"1f37c":["\uD83C\uDF7C","","",["baby_bottle"],8,17],"1f380":["\uD83C\uDF80","\uE314","\uDBB9\uDD0F",["ribbon"],8,18],"1f381":["\uD83C\uDF81","\uE112","\uDBB9\uDD10",["gift"],8,19],"1f382":["\uD83C\uDF82","\uE34B","\uDBB9\uDD11",["birthday"],8,20],"1f383":["\uD83C\uDF83","\uE445","\uDBB9\uDD1F",["jack_o_lantern"],8,21],"1f384":["\uD83C\uDF84","\uE033","\uDBB9\uDD12",["christmas_tree"],8,22],"1f385":["\uD83C\uDF85","\uE448","\uDBB9\uDD13",["santa"],8,23],"1f386":["\uD83C\uDF86","\uE117","\uDBB9\uDD15",["fireworks"],8,24],"1f387":["\uD83C\uDF87","\uE440","\uDBB9\uDD1D",["sparkler"],8,25],"1f388":["\uD83C\uDF88","\uE310","\uDBB9\uDD16",["balloon"],8,26],"1f389":["\uD83C\uDF89","\uE312","\uDBB9\uDD17",["tada"],8,27],"1f38a":["\uD83C\uDF8A","","\uDBB9\uDD20",["confetti_ball"],8,28],"1f38b":["\uD83C\uDF8B","","\uDBB9\uDD21",["tanabata_tree"],8,29],"1f38c":["\uD83C\uDF8C","\uE143","\uDBB9\uDD14",["crossed_flags"],9,0],"1f38d":["\uD83C\uDF8D","\uE436","\uDBB9\uDD18",["bamboo"],9,1],"1f38e":["\uD83C\uDF8E","\uE438","\uDBB9\uDD19",["dolls"],9,2],"1f38f":["\uD83C\uDF8F","\uE43B","\uDBB9\uDD1C",["flags"],9,3],"1f390":["\uD83C\uDF90","\uE442","\uDBB9\uDD1E",["wind_chime"],9,4],"1f391":["\uD83C\uDF91","\uE446","\uDBB8\uDC17",["rice_scene"],9,5],"1f392":["\uD83C\uDF92","\uE43A","\uDBB9\uDD1B",["school_satchel"],9,6],"1f393":["\uD83C\uDF93","\uE439","\uDBB9\uDD1A",["mortar_board"],9,7],"1f3a0":["\uD83C\uDFA0","","\uDBB9\uDFFC",["carousel_horse"],9,8],"1f3a1":["\uD83C\uDFA1","\uE124","\uDBB9\uDFFD",["ferris_wheel"],9,9],"1f3a2":["\uD83C\uDFA2","\uE433","\uDBB9\uDFFE",["roller_coaster"],9,10],"1f3a3":["\uD83C\uDFA3","\uE019","\uDBB9\uDFFF",["fishing_pole_and_fish"],9,11],"1f3a4":["\uD83C\uDFA4","\uE03C","\uDBBA\uDC00",["microphone"],9,12],"1f3a5":["\uD83C\uDFA5","\uE03D","\uDBBA\uDC01",["movie_camera"],9,13],"1f3a6":["\uD83C\uDFA6","\uE507","\uDBBA\uDC02",["cinema"],9,14],"1f3a7":["\uD83C\uDFA7","\uE30A","\uDBBA\uDC03",["headphones"],9,15],"1f3a8":["\uD83C\uDFA8","\uE502","\uDBBA\uDC04",["art"],9,16],"1f3a9":["\uD83C\uDFA9","\uE503","\uDBBA\uDC05",["tophat"],9,17],"1f3aa":["\uD83C\uDFAA","","\uDBBA\uDC06",["circus_tent"],9,18],"1f3ab":["\uD83C\uDFAB","\uE125","\uDBBA\uDC07",["ticket"],9,19],"1f3ac":["\uD83C\uDFAC","\uE324","\uDBBA\uDC08",["clapper"],9,20],"1f3ad":["\uD83C\uDFAD","\uE503","\uDBBA\uDC09",["performing_arts"],9,21],"1f3ae":["\uD83C\uDFAE","","\uDBBA\uDC0A",["video_game"],9,22],"1f3af":["\uD83C\uDFAF","\uE130","\uDBBA\uDC0C",["dart"],9,23],"1f3b0":["\uD83C\uDFB0","\uE133","\uDBBA\uDC0D",["slot_machine"],9,24],"1f3b1":["\uD83C\uDFB1","\uE42C","\uDBBA\uDC0E",["8ball"],9,25],"1f3b2":["\uD83C\uDFB2","","\uDBBA\uDC0F",["game_die"],9,26],"1f3b3":["\uD83C\uDFB3","","\uDBBA\uDC10",["bowling"],9,27],"1f3b4":["\uD83C\uDFB4","","\uDBBA\uDC11",["flower_playing_cards"],9,28],"1f3b5":["\uD83C\uDFB5","\uE03E","\uDBBA\uDC13",["musical_note"],9,29],"1f3b6":["\uD83C\uDFB6","\uE326","\uDBBA\uDC14",["notes"],10,0],"1f3b7":["\uD83C\uDFB7","\uE040","\uDBBA\uDC15",["saxophone"],10,1],"1f3b8":["\uD83C\uDFB8","\uE041","\uDBBA\uDC16",["guitar"],10,2],"1f3b9":["\uD83C\uDFB9","","\uDBBA\uDC17",["musical_keyboard"],10,3],"1f3ba":["\uD83C\uDFBA","\uE042","\uDBBA\uDC18",["trumpet"],10,4],"1f3bb":["\uD83C\uDFBB","","\uDBBA\uDC19",["violin"],10,5],"1f3bc":["\uD83C\uDFBC","\uE326","\uDBBA\uDC1A",["musical_score"],10,6],"1f3bd":["\uD83C\uDFBD","","\uDBB9\uDFD0",["running_shirt_with_sash"],10,7],"1f3be":["\uD83C\uDFBE","\uE015","\uDBB9\uDFD3",["tennis"],10,8],"1f3bf":["\uD83C\uDFBF","\uE013","\uDBB9\uDFD5",["ski"],10,9],"1f3c0":["\uD83C\uDFC0","\uE42A","\uDBB9\uDFD6",["basketball"],10,10],"1f3c1":["\uD83C\uDFC1","\uE132","\uDBB9\uDFD7",["checkered_flag"],10,11],"1f3c2":["\uD83C\uDFC2","","\uDBB9\uDFD8",["snowboarder"],10,12],"1f3c3":["\uD83C\uDFC3","\uE115","\uDBB9\uDFD9",["runner","running"],10,13],"1f3c4":["\uD83C\uDFC4","\uE017","\uDBB9\uDFDA",["surfer"],10,14],"1f3c6":["\uD83C\uDFC6","\uE131","\uDBB9\uDFDB",["trophy"],10,15],"1f3c7":["\uD83C\uDFC7","","",["horse_racing"],10,16],"1f3c8":["\uD83C\uDFC8","\uE42B","\uDBB9\uDFDD",["football"],10,17],"1f3c9":["\uD83C\uDFC9","","",["rugby_football"],10,18],"1f3ca":["\uD83C\uDFCA","\uE42D","\uDBB9\uDFDE",["swimmer"],10,19],"1f3e0":["\uD83C\uDFE0","\uE036","\uDBB9\uDCB0",["house"],10,20],"1f3e1":["\uD83C\uDFE1","\uE036","\uDBB9\uDCB1",["house_with_garden"],10,21],"1f3e2":["\uD83C\uDFE2","\uE038","\uDBB9\uDCB2",["office"],10,22],"1f3e3":["\uD83C\uDFE3","\uE153","\uDBB9\uDCB3",["post_office"],10,23],"1f3e4":["\uD83C\uDFE4","","",["european_post_office"],10,24],"1f3e5":["\uD83C\uDFE5","\uE155","\uDBB9\uDCB4",["hospital"],10,25],"1f3e6":["\uD83C\uDFE6","\uE14D","\uDBB9\uDCB5",["bank"],10,26],"1f3e7":["\uD83C\uDFE7","\uE154","\uDBB9\uDCB6",["atm"],10,27],"1f3e8":["\uD83C\uDFE8","\uE158","\uDBB9\uDCB7",["hotel"],10,28],"1f3e9":["\uD83C\uDFE9","\uE501","\uDBB9\uDCB8",["love_hotel"],10,29],"1f3ea":["\uD83C\uDFEA","\uE156","\uDBB9\uDCB9",["convenience_store"],11,0],"1f3eb":["\uD83C\uDFEB","\uE157","\uDBB9\uDCBA",["school"],11,1],"1f3ec":["\uD83C\uDFEC","\uE504","\uDBB9\uDCBD",["department_store"],11,2],"1f3ed":["\uD83C\uDFED","\uE508","\uDBB9\uDCC0",["factory"],11,3],"1f3ee":["\uD83C\uDFEE","\uE30B","\uDBB9\uDCC2",["izakaya_lantern","lantern"],11,4],"1f3ef":["\uD83C\uDFEF","\uE505","\uDBB9\uDCBE",["japanese_castle"],11,5],"1f3f0":["\uD83C\uDFF0","\uE506","\uDBB9\uDCBF",["european_castle"],11,6],"1f400":["\uD83D\uDC00","","",["rat"],11,7],"1f401":["\uD83D\uDC01","","",["mouse2"],11,8],"1f402":["\uD83D\uDC02","","",["ox"],11,9],"1f403":["\uD83D\uDC03","","",["water_buffalo"],11,10],"1f404":["\uD83D\uDC04","","",["cow2"],11,11],"1f405":["\uD83D\uDC05","","",["tiger2"],11,12],"1f406":["\uD83D\uDC06","","",["leopard"],11,13],"1f407":["\uD83D\uDC07","","",["rabbit2"],11,14],"1f408":["\uD83D\uDC08","","",["cat2"],11,15],"1f409":["\uD83D\uDC09","","",["dragon"],11,16],"1f40a":["\uD83D\uDC0A","","",["crocodile"],11,17],"1f40b":["\uD83D\uDC0B","","",["whale2"],11,18],"1f40c":["\uD83D\uDC0C","","\uDBB8\uDDB9",["snail"],11,19],"1f40d":["\uD83D\uDC0D","\uE52D","\uDBB8\uDDD3",["snake"],11,20],"1f40e":["\uD83D\uDC0E","\uE134","\uDBB9\uDFDC",["racehorse"],11,21],"1f40f":["\uD83D\uDC0F","","",["ram"],11,22],"1f410":["\uD83D\uDC10","","",["goat"],11,23],"1f411":["\uD83D\uDC11","\uE529","\uDBB8\uDDCF",["sheep"],11,24],"1f412":["\uD83D\uDC12","\uE528","\uDBB8\uDDCE",["monkey"],11,25],"1f413":["\uD83D\uDC13","","",["rooster"],11,26],"1f414":["\uD83D\uDC14","\uE52E","\uDBB8\uDDD4",["chicken"],11,27],"1f415":["\uD83D\uDC15","","",["dog2"],11,28],"1f416":["\uD83D\uDC16","","",["pig2"],11,29],"1f417":["\uD83D\uDC17","\uE52F","\uDBB8\uDDD5",["boar"],12,0],"1f418":["\uD83D\uDC18","\uE526","\uDBB8\uDDCC",["elephant"],12,1],"1f419":["\uD83D\uDC19","\uE10A","\uDBB8\uDDC5",["octopus"],12,2],"1f41a":["\uD83D\uDC1A","\uE441","\uDBB8\uDDC6",["shell"],12,3],"1f41b":["\uD83D\uDC1B","\uE525","\uDBB8\uDDCB",["bug"],12,4],"1f41c":["\uD83D\uDC1C","","\uDBB8\uDDDA",["ant"],12,5],"1f41d":["\uD83D\uDC1D","","\uDBB8\uDDE1",["bee","honeybee"],12,6],"1f41e":["\uD83D\uDC1E","","\uDBB8\uDDE2",["beetle"],12,7],"1f41f":["\uD83D\uDC1F","\uE019","\uDBB8\uDDBD",["fish"],12,8],"1f420":["\uD83D\uDC20","\uE522","\uDBB8\uDDC9",["tropical_fish"],12,9],"1f421":["\uD83D\uDC21","\uE019","\uDBB8\uDDD9",["blowfish"],12,10],"1f422":["\uD83D\uDC22","","\uDBB8\uDDDC",["turtle"],12,11],"1f423":["\uD83D\uDC23","\uE523","\uDBB8\uDDDD",["hatching_chick"],12,12],"1f424":["\uD83D\uDC24","\uE523","\uDBB8\uDDBA",["baby_chick"],12,13],"1f425":["\uD83D\uDC25","\uE523","\uDBB8\uDDBB",["hatched_chick"],12,14],"1f426":["\uD83D\uDC26","\uE521","\uDBB8\uDDC8",["bird"],12,15],"1f427":["\uD83D\uDC27","\uE055","\uDBB8\uDDBC",["penguin"],12,16],"1f428":["\uD83D\uDC28","\uE527","\uDBB8\uDDCD",["koala"],12,17],"1f429":["\uD83D\uDC29","\uE052","\uDBB8\uDDD8",["poodle"],12,18],"1f42a":["\uD83D\uDC2A","","",["dromedary_camel"],12,19],"1f42b":["\uD83D\uDC2B","\uE530","\uDBB8\uDDD6",["camel"],12,20],"1f42c":["\uD83D\uDC2C","\uE520","\uDBB8\uDDC7",["dolphin","flipper"],12,21],"1f42d":["\uD83D\uDC2D","\uE053","\uDBB8\uDDC2",["mouse"],12,22],"1f42e":["\uD83D\uDC2E","\uE52B","\uDBB8\uDDD1",["cow"],12,23],"1f42f":["\uD83D\uDC2F","\uE050","\uDBB8\uDDC0",["tiger"],12,24],"1f430":["\uD83D\uDC30","\uE52C","\uDBB8\uDDD2",["rabbit"],12,25],"1f431":["\uD83D\uDC31","\uE04F","\uDBB8\uDDB8",["cat"],12,26],"1f432":["\uD83D\uDC32","","\uDBB8\uDDDE",["dragon_face"],12,27],"1f433":["\uD83D\uDC33","\uE054","\uDBB8\uDDC3",["whale"],12,28],"1f434":["\uD83D\uDC34","\uE01A","\uDBB8\uDDBE",["horse"],12,29],"1f435":["\uD83D\uDC35","\uE109","\uDBB8\uDDC4",["monkey_face"],13,0],"1f436":["\uD83D\uDC36","\uE052","\uDBB8\uDDB7",["dog"],13,1],"1f437":["\uD83D\uDC37","\uE10B","\uDBB8\uDDBF",["pig"],13,2],"1f438":["\uD83D\uDC38","\uE531","\uDBB8\uDDD7",["frog"],13,3],"1f439":["\uD83D\uDC39","\uE524","\uDBB8\uDDCA",["hamster"],13,4],"1f43a":["\uD83D\uDC3A","\uE52A","\uDBB8\uDDD0",["wolf"],13,5],"1f43b":["\uD83D\uDC3B","\uE051","\uDBB8\uDDC1",["bear"],13,6],"1f43c":["\uD83D\uDC3C","","\uDBB8\uDDDF",["panda_face"],13,7],"1f43d":["\uD83D\uDC3D","\uE10B","\uDBB8\uDDE0",["pig_nose"],13,8],"1f43e":["\uD83D\uDC3E","\uE536","\uDBB8\uDDDB",["feet","paw_prints"],13,9],"1f440":["\uD83D\uDC40","\uE419","\uDBB8\uDD90",["eyes"],13,10],"1f442":["\uD83D\uDC42","\uE41B","\uDBB8\uDD91",["ear"],13,11],"1f443":["\uD83D\uDC43","\uE41A","\uDBB8\uDD92",["nose"],13,12],"1f444":["\uD83D\uDC44","\uE41C","\uDBB8\uDD93",["lips"],13,13],"1f445":["\uD83D\uDC45","\uE409","\uDBB8\uDD94",["tongue"],13,14],"1f446":["\uD83D\uDC46","\uE22E","\uDBBA\uDF99",["point_up_2"],13,15],"1f447":["\uD83D\uDC47","\uE22F","\uDBBA\uDF9A",["point_down"],13,16],"1f448":["\uD83D\uDC48","\uE230","\uDBBA\uDF9B",["point_left"],13,17],"1f449":["\uD83D\uDC49","\uE231","\uDBBA\uDF9C",["point_right"],13,18],"1f44a":["\uD83D\uDC4A","\uE00D","\uDBBA\uDF96",["facepunch","punch"],13,19],"1f44b":["\uD83D\uDC4B","\uE41E","\uDBBA\uDF9D",["wave"],13,20],"1f44c":["\uD83D\uDC4C","\uE420","\uDBBA\uDF9F",["ok_hand"],13,21],"1f44d":["\uD83D\uDC4D","\uE00E","\uDBBA\uDF97",["+1","thumbsup"],13,22],"1f44e":["\uD83D\uDC4E","\uE421","\uDBBA\uDFA0",["-1","thumbsdown"],13,23],"1f44f":["\uD83D\uDC4F","\uE41F","\uDBBA\uDF9E",["clap"],13,24],"1f450":["\uD83D\uDC50","\uE422","\uDBBA\uDFA1",["open_hands"],13,25],"1f451":["\uD83D\uDC51","\uE10E","\uDBB9\uDCD1",["crown"],13,26],"1f452":["\uD83D\uDC52","\uE318","\uDBB9\uDCD4",["womans_hat"],13,27],"1f453":["\uD83D\uDC53","","\uDBB9\uDCCE",["eyeglasses"],13,28],"1f454":["\uD83D\uDC54","\uE302","\uDBB9\uDCD3",["necktie"],13,29],"1f455":["\uD83D\uDC55","\uE006","\uDBB9\uDCCF",["shirt","tshirt"],14,0],"1f456":["\uD83D\uDC56","","\uDBB9\uDCD0",["jeans"],14,1],"1f457":["\uD83D\uDC57","\uE319","\uDBB9\uDCD5",["dress"],14,2],"1f458":["\uD83D\uDC58","\uE321","\uDBB9\uDCD9",["kimono"],14,3],"1f459":["\uD83D\uDC59","\uE322","\uDBB9\uDCDA",["bikini"],14,4],"1f45a":["\uD83D\uDC5A","\uE006","\uDBB9\uDCDB",["womans_clothes"],14,5],"1f45b":["\uD83D\uDC5B","","\uDBB9\uDCDC",["purse"],14,6],"1f45c":["\uD83D\uDC5C","\uE323","\uDBB9\uDCF0",["handbag"],14,7],"1f45d":["\uD83D\uDC5D","","\uDBB9\uDCF1",["pouch"],14,8],"1f45e":["\uD83D\uDC5E","\uE007","\uDBB9\uDCCC",["mans_shoe","shoe"],14,9],"1f45f":["\uD83D\uDC5F","\uE007","\uDBB9\uDCCD",["athletic_shoe"],14,10],"1f460":["\uD83D\uDC60","\uE13E","\uDBB9\uDCD6",["high_heel"],14,11],"1f461":["\uD83D\uDC61","\uE31A","\uDBB9\uDCD7",["sandal"],14,12],"1f462":["\uD83D\uDC62","\uE31B","\uDBB9\uDCD8",["boot"],14,13],"1f463":["\uD83D\uDC63","\uE536","\uDBB9\uDD53",["footprints"],14,14],"1f464":["\uD83D\uDC64","","\uDBB8\uDD9A",["bust_in_silhouette"],14,15],"1f465":["\uD83D\uDC65","","",["busts_in_silhouette"],14,16],"1f466":["\uD83D\uDC66","\uE001","\uDBB8\uDD9B",["boy"],14,17],"1f467":["\uD83D\uDC67","\uE002","\uDBB8\uDD9C",["girl"],14,18],"1f468":["\uD83D\uDC68","\uE004","\uDBB8\uDD9D",["man"],14,19],"1f469":["\uD83D\uDC69","\uE005","\uDBB8\uDD9E",["woman"],14,20],"1f46a":["\uD83D\uDC6A","","\uDBB8\uDD9F",["family"],14,21],"1f46b":["\uD83D\uDC6B","\uE428","\uDBB8\uDDA0",["couple"],14,22],"1f46c":["\uD83D\uDC6C","","",["two_men_holding_hands"],14,23],"1f46d":["\uD83D\uDC6D","","",["two_women_holding_hands"],14,24],"1f46e":["\uD83D\uDC6E","\uE152","\uDBB8\uDDA1",["cop"],14,25],"1f46f":["\uD83D\uDC6F","\uE429","\uDBB8\uDDA2",["dancers"],14,26],"1f470":["\uD83D\uDC70","","\uDBB8\uDDA3",["bride_with_veil"],14,27],"1f471":["\uD83D\uDC71","\uE515","\uDBB8\uDDA4",["person_with_blond_hair"],14,28],"1f472":["\uD83D\uDC72","\uE516","\uDBB8\uDDA5",["man_with_gua_pi_mao"],14,29],"1f473":["\uD83D\uDC73","\uE517","\uDBB8\uDDA6",["man_with_turban"],15,0],"1f474":["\uD83D\uDC74","\uE518","\uDBB8\uDDA7",["older_man"],15,1],"1f475":["\uD83D\uDC75","\uE519","\uDBB8\uDDA8",["older_woman"],15,2],"1f476":["\uD83D\uDC76","\uE51A","\uDBB8\uDDA9",["baby"],15,3],"1f477":["\uD83D\uDC77","\uE51B","\uDBB8\uDDAA",["construction_worker"],15,4],"1f478":["\uD83D\uDC78","\uE51C","\uDBB8\uDDAB",["princess"],15,5],"1f479":["\uD83D\uDC79","","\uDBB8\uDDAC",["japanese_ogre"],15,6],"1f47a":["\uD83D\uDC7A","","\uDBB8\uDDAD",["japanese_goblin"],15,7],"1f47b":["\uD83D\uDC7B","\uE11B","\uDBB8\uDDAE",["ghost"],15,8],"1f47c":["\uD83D\uDC7C","\uE04E","\uDBB8\uDDAF",["angel"],15,9],"1f47d":["\uD83D\uDC7D","\uE10C","\uDBB8\uDDB0",["alien"],15,10],"1f47e":["\uD83D\uDC7E","\uE12B","\uDBB8\uDDB1",["space_invader"],15,11],"1f47f":["\uD83D\uDC7F","\uE11A","\uDBB8\uDDB2",["imp"],15,12],"1f480":["\uD83D\uDC80","\uE11C","\uDBB8\uDDB3",["skull"],15,13],"1f481":["\uD83D\uDC81","\uE253","\uDBB8\uDDB4",["information_desk_person"],15,14],"1f482":["\uD83D\uDC82","\uE51E","\uDBB8\uDDB5",["guardsman"],15,15],"1f483":["\uD83D\uDC83","\uE51F","\uDBB8\uDDB6",["dancer"],15,16],"1f484":["\uD83D\uDC84","\uE31C","\uDBB8\uDD95",["lipstick"],15,17],"1f485":["\uD83D\uDC85","\uE31D","\uDBB8\uDD96",["nail_care"],15,18],"1f486":["\uD83D\uDC86","\uE31E","\uDBB8\uDD97",["massage"],15,19],"1f487":["\uD83D\uDC87","\uE31F","\uDBB8\uDD98",["haircut"],15,20],"1f488":["\uD83D\uDC88","\uE320","\uDBB8\uDD99",["barber"],15,21],"1f489":["\uD83D\uDC89","\uE13B","\uDBB9\uDD09",["syringe"],15,22],"1f48a":["\uD83D\uDC8A","\uE30F","\uDBB9\uDD0A",["pill"],15,23],"1f48b":["\uD83D\uDC8B","\uE003","\uDBBA\uDC23",["kiss"],15,24],"1f48c":["\uD83D\uDC8C","\uE103\uE328","\uDBBA\uDC24",["love_letter"],15,25],"1f48d":["\uD83D\uDC8D","\uE034","\uDBBA\uDC25",["ring"],15,26],"1f48e":["\uD83D\uDC8E","\uE035","\uDBBA\uDC26",["gem"],15,27],"1f48f":["\uD83D\uDC8F","\uE111","\uDBBA\uDC27",["couplekiss"],15,28],"1f490":["\uD83D\uDC90","\uE306","\uDBBA\uDC28",["bouquet"],15,29],"1f491":["\uD83D\uDC91","\uE425","\uDBBA\uDC29",["couple_with_heart"],16,0],"1f492":["\uD83D\uDC92","\uE43D","\uDBBA\uDC2A",["wedding"],16,1],"1f493":["\uD83D\uDC93","\uE327","\uDBBA\uDF0D",["heartbeat"],16,2],"1f494":["\uD83D\uDC94","\uE023","\uDBBA\uDF0E",["broken_heart"],16,3,"</3"],"1f495":["\uD83D\uDC95","\uE327","\uDBBA\uDF0F",["two_hearts"],16,4],"1f496":["\uD83D\uDC96","\uE327","\uDBBA\uDF10",["sparkling_heart"],16,5],"1f497":["\uD83D\uDC97","\uE328","\uDBBA\uDF11",["heartpulse"],16,6],"1f498":["\uD83D\uDC98","\uE329","\uDBBA\uDF12",["cupid"],16,7],"1f499":["\uD83D\uDC99","\uE32A","\uDBBA\uDF13",["blue_heart"],16,8,"<3"],"1f49a":["\uD83D\uDC9A","\uE32B","\uDBBA\uDF14",["green_heart"],16,9,"<3"],"1f49b":["\uD83D\uDC9B","\uE32C","\uDBBA\uDF15",["yellow_heart"],16,10,"<3"],"1f49c":["\uD83D\uDC9C","\uE32D","\uDBBA\uDF16",["purple_heart"],16,11,"<3"],"1f49d":["\uD83D\uDC9D","\uE437","\uDBBA\uDF17",["gift_heart"],16,12],"1f49e":["\uD83D\uDC9E","\uE327","\uDBBA\uDF18",["revolving_hearts"],16,13],"1f49f":["\uD83D\uDC9F","\uE204","\uDBBA\uDF19",["heart_decoration"],16,14],"1f4a0":["\uD83D\uDCA0","","\uDBBA\uDF55",["diamond_shape_with_a_dot_inside"],16,15],"1f4a1":["\uD83D\uDCA1","\uE10F","\uDBBA\uDF56",["bulb"],16,16],"1f4a2":["\uD83D\uDCA2","\uE334","\uDBBA\uDF57",["anger"],16,17],"1f4a3":["\uD83D\uDCA3","\uE311","\uDBBA\uDF58",["bomb"],16,18],"1f4a4":["\uD83D\uDCA4","\uE13C","\uDBBA\uDF59",["zzz"],16,19],"1f4a5":["\uD83D\uDCA5","","\uDBBA\uDF5A",["boom","collision"],16,20],"1f4a6":["\uD83D\uDCA6","\uE331","\uDBBA\uDF5B",["sweat_drops"],16,21],"1f4a7":["\uD83D\uDCA7","\uE331","\uDBBA\uDF5C",["droplet"],16,22],"1f4a8":["\uD83D\uDCA8","\uE330","\uDBBA\uDF5D",["dash"],16,23],"1f4a9":["\uD83D\uDCA9","\uE05A","\uDBB9\uDCF4",["hankey","poop","shit"],16,24],"1f4aa":["\uD83D\uDCAA","\uE14C","\uDBBA\uDF5E",["muscle"],16,25],"1f4ab":["\uD83D\uDCAB","\uE407","\uDBBA\uDF5F",["dizzy"],16,26],"1f4ac":["\uD83D\uDCAC","","\uDBB9\uDD32",["speech_balloon"],16,27],"1f4ad":["\uD83D\uDCAD","","",["thought_balloon"],16,28],"1f4ae":["\uD83D\uDCAE","","\uDBBA\uDF7A",["white_flower"],16,29],"1f4af":["\uD83D\uDCAF","","\uDBBA\uDF7B",["100"],17,0],"1f4b0":["\uD83D\uDCB0","\uE12F","\uDBB9\uDCDD",["moneybag"],17,1],"1f4b1":["\uD83D\uDCB1","\uE149","\uDBB9\uDCDE",["currency_exchange"],17,2],"1f4b2":["\uD83D\uDCB2","\uE12F","\uDBB9\uDCE0",["heavy_dollar_sign"],17,3],"1f4b3":["\uD83D\uDCB3","","\uDBB9\uDCE1",["credit_card"],17,4],"1f4b4":["\uD83D\uDCB4","","\uDBB9\uDCE2",["yen"],17,5],"1f4b5":["\uD83D\uDCB5","\uE12F","\uDBB9\uDCE3",["dollar"],17,6],"1f4b6":["\uD83D\uDCB6","","",["euro"],17,7],"1f4b7":["\uD83D\uDCB7","","",["pound"],17,8],"1f4b8":["\uD83D\uDCB8","","\uDBB9\uDCE4",["money_with_wings"],17,9],"1f4b9":["\uD83D\uDCB9","\uE14A","\uDBB9\uDCDF",["chart"],17,10],"1f4ba":["\uD83D\uDCBA","\uE11F","\uDBB9\uDD37",["seat"],17,11],"1f4bb":["\uD83D\uDCBB","\uE00C","\uDBB9\uDD38",["computer"],17,12],"1f4bc":["\uD83D\uDCBC","\uE11E","\uDBB9\uDD3B",["briefcase"],17,13],"1f4bd":["\uD83D\uDCBD","\uE316","\uDBB9\uDD3C",["minidisc"],17,14],"1f4be":["\uD83D\uDCBE","\uE316","\uDBB9\uDD3D",["floppy_disk"],17,15],"1f4bf":["\uD83D\uDCBF","\uE126","\uDBBA\uDC1D",["cd"],17,16],"1f4c0":["\uD83D\uDCC0","\uE127","\uDBBA\uDC1E",["dvd"],17,17],"1f4c1":["\uD83D\uDCC1","","\uDBB9\uDD43",["file_folder"],17,18],"1f4c2":["\uD83D\uDCC2","","\uDBB9\uDD44",["open_file_folder"],17,19],"1f4c3":["\uD83D\uDCC3","\uE301","\uDBB9\uDD40",["page_with_curl"],17,20],"1f4c4":["\uD83D\uDCC4","\uE301","\uDBB9\uDD41",["page_facing_up"],17,21],"1f4c5":["\uD83D\uDCC5","","\uDBB9\uDD42",["date"],17,22],"1f4c6":["\uD83D\uDCC6","","\uDBB9\uDD49",["calendar"],17,23],"1f4c7":["\uD83D\uDCC7","\uE148","\uDBB9\uDD4D",["card_index"],17,24],"1f4c8":["\uD83D\uDCC8","\uE14A","\uDBB9\uDD4B",["chart_with_upwards_trend"],17,25],"1f4c9":["\uD83D\uDCC9","","\uDBB9\uDD4C",["chart_with_downwards_trend"],17,26],"1f4ca":["\uD83D\uDCCA","\uE14A","\uDBB9\uDD4A",["bar_chart"],17,27],"1f4cb":["\uD83D\uDCCB","\uE301","\uDBB9\uDD48",["clipboard"],17,28],"1f4cc":["\uD83D\uDCCC","","\uDBB9\uDD4E",["pushpin"],17,29],"1f4cd":["\uD83D\uDCCD","","\uDBB9\uDD3F",["round_pushpin"],18,0],"1f4ce":["\uD83D\uDCCE","","\uDBB9\uDD3A",["paperclip"],18,1],"1f4cf":["\uD83D\uDCCF","","\uDBB9\uDD50",["straight_ruler"],18,2],"1f4d0":["\uD83D\uDCD0","","\uDBB9\uDD51",["triangular_ruler"],18,3],"1f4d1":["\uD83D\uDCD1","\uE301","\uDBB9\uDD52",["bookmark_tabs"],18,4],"1f4d2":["\uD83D\uDCD2","\uE148","\uDBB9\uDD4F",["ledger"],18,5],"1f4d3":["\uD83D\uDCD3","\uE148","\uDBB9\uDD45",["notebook"],18,6],"1f4d4":["\uD83D\uDCD4","\uE148","\uDBB9\uDD47",["notebook_with_decorative_cover"],18,7],"1f4d5":["\uD83D\uDCD5","\uE148","\uDBB9\uDD02",["closed_book"],18,8],"1f4d6":["\uD83D\uDCD6","\uE148","\uDBB9\uDD46",["book","open_book"],18,9],"1f4d7":["\uD83D\uDCD7","\uE148","\uDBB9\uDCFF",["green_book"],18,10],"1f4d8":["\uD83D\uDCD8","\uE148","\uDBB9\uDD00",["blue_book"],18,11],"1f4d9":["\uD83D\uDCD9","\uE148","\uDBB9\uDD01",["orange_book"],18,12],"1f4da":["\uD83D\uDCDA","\uE148","\uDBB9\uDD03",["books"],18,13],"1f4db":["\uD83D\uDCDB","","\uDBB9\uDD04",["name_badge"],18,14],"1f4dc":["\uD83D\uDCDC","","\uDBB9\uDCFD",["scroll"],18,15],"1f4dd":["\uD83D\uDCDD","\uE301","\uDBB9\uDD27",["memo","pencil"],18,16],"1f4de":["\uD83D\uDCDE","\uE009","\uDBB9\uDD24",["telephone_receiver"],18,17],"1f4df":["\uD83D\uDCDF","","\uDBB9\uDD22",["pager"],18,18],"1f4e0":["\uD83D\uDCE0","\uE00B","\uDBB9\uDD28",["fax"],18,19],"1f4e1":["\uD83D\uDCE1","\uE14B","\uDBB9\uDD31",["satellite"],18,20],"1f4e2":["\uD83D\uDCE2","\uE142","\uDBB9\uDD2F",["loudspeaker"],18,21],"1f4e3":["\uD83D\uDCE3","\uE317","\uDBB9\uDD30",["mega"],18,22],"1f4e4":["\uD83D\uDCE4","","\uDBB9\uDD33",["outbox_tray"],18,23],"1f4e5":["\uD83D\uDCE5","","\uDBB9\uDD34",["inbox_tray"],18,24],"1f4e6":["\uD83D\uDCE6","\uE112","\uDBB9\uDD35",["package"],18,25],"1f4e7":["\uD83D\uDCE7","\uE103","\uDBBA\uDF92",["e-mail"],18,26],"1f4e8":["\uD83D\uDCE8","\uE103","\uDBB9\uDD2A",["incoming_envelope"],18,27],"1f4e9":["\uD83D\uDCE9","\uE103","\uDBB9\uDD2B",["envelope_with_arrow"],18,28],"1f4ea":["\uD83D\uDCEA","\uE101","\uDBB9\uDD2C",["mailbox_closed"],18,29],"1f4eb":["\uD83D\uDCEB","\uE101","\uDBB9\uDD2D",["mailbox"],19,0],"1f4ec":["\uD83D\uDCEC","","",["mailbox_with_mail"],19,1],"1f4ed":["\uD83D\uDCED","","",["mailbox_with_no_mail"],19,2],"1f4ee":["\uD83D\uDCEE","\uE102","\uDBB9\uDD2E",["postbox"],19,3],"1f4ef":["\uD83D\uDCEF","","",["postal_horn"],19,4],"1f4f0":["\uD83D\uDCF0","","\uDBBA\uDC22",["newspaper"],19,5],"1f4f1":["\uD83D\uDCF1","\uE00A","\uDBB9\uDD25",["iphone"],19,6],"1f4f2":["\uD83D\uDCF2","\uE104","\uDBB9\uDD26",["calling"],19,7],"1f4f3":["\uD83D\uDCF3","\uE250","\uDBBA\uDC39",["vibration_mode"],19,8],"1f4f4":["\uD83D\uDCF4","\uE251","\uDBBA\uDC3A",["mobile_phone_off"],19,9],"1f4f5":["\uD83D\uDCF5","","",["no_mobile_phones"],19,10],"1f4f6":["\uD83D\uDCF6","\uE20B","\uDBBA\uDC38",["signal_strength"],19,11],"1f4f7":["\uD83D\uDCF7","\uE008","\uDBB9\uDCEF",["camera"],19,12],"1f4f9":["\uD83D\uDCF9","\uE03D","\uDBB9\uDCF9",["video_camera"],19,13],"1f4fa":["\uD83D\uDCFA","\uE12A","\uDBBA\uDC1C",["tv"],19,14],"1f4fb":["\uD83D\uDCFB","\uE128","\uDBBA\uDC1F",["radio"],19,15],"1f4fc":["\uD83D\uDCFC","\uE129","\uDBBA\uDC20",["vhs"],19,16],"1f500":["\uD83D\uDD00","","",["twisted_rightwards_arrows"],19,17],"1f501":["\uD83D\uDD01","","",["repeat"],19,18],"1f502":["\uD83D\uDD02","","",["repeat_one"],19,19],"1f503":["\uD83D\uDD03","","\uDBBA\uDF91",["arrows_clockwise"],19,20],"1f504":["\uD83D\uDD04","","",["arrows_counterclockwise"],19,21],"1f505":["\uD83D\uDD05","","",["low_brightness"],19,22],"1f506":["\uD83D\uDD06","","",["high_brightness"],19,23],"1f507":["\uD83D\uDD07","","",["mute"],19,24],"1f508":["\uD83D\uDD08","","",["speaker"],19,25],"1f509":["\uD83D\uDD09","","",["sound"],19,26],"1f50a":["\uD83D\uDD0A","\uE141","\uDBBA\uDC21",["loud_sound"],19,27],"1f50b":["\uD83D\uDD0B","","\uDBB9\uDCFC",["battery"],19,28],"1f50c":["\uD83D\uDD0C","","\uDBB9\uDCFE",["electric_plug"],19,29],"1f50d":["\uD83D\uDD0D","\uE114","\uDBBA\uDF85",["mag"],20,0],"1f50e":["\uD83D\uDD0E","\uE114","\uDBBA\uDF8D",["mag_right"],20,1],"1f50f":["\uD83D\uDD0F","\uE144","\uDBBA\uDF90",["lock_with_ink_pen"],20,2],"1f510":["\uD83D\uDD10","\uE144","\uDBBA\uDF8A",["closed_lock_with_key"],20,3],"1f511":["\uD83D\uDD11","\uE03F","\uDBBA\uDF82",["key"],20,4],"1f512":["\uD83D\uDD12","\uE144","\uDBBA\uDF86",["lock"],20,5],"1f513":["\uD83D\uDD13","\uE145","\uDBBA\uDF87",["unlock"],20,6],"1f514":["\uD83D\uDD14","\uE325","\uDBB9\uDCF2",["bell"],20,7],"1f515":["\uD83D\uDD15","","",["no_bell"],20,8],"1f516":["\uD83D\uDD16","","\uDBBA\uDF8F",["bookmark"],20,9],"1f517":["\uD83D\uDD17","","\uDBBA\uDF4B",["link"],20,10],"1f518":["\uD83D\uDD18","","\uDBBA\uDF8C",["radio_button"],20,11],"1f519":["\uD83D\uDD19","\uE235","\uDBBA\uDF8E",["back"],20,12],"1f51a":["\uD83D\uDD1A","","\uDBB8\uDC1A",["end"],20,13],"1f51b":["\uD83D\uDD1B","","\uDBB8\uDC19",["on"],20,14],"1f51c":["\uD83D\uDD1C","","\uDBB8\uDC18",["soon"],20,15],"1f51d":["\uD83D\uDD1D","\uE24C","\uDBBA\uDF42",["top"],20,16],"1f51e":["\uD83D\uDD1E","\uE207","\uDBBA\uDF25",["underage"],20,17],"1f51f":["\uD83D\uDD1F","","\uDBBA\uDC3B",["keycap_ten"],20,18],"1f520":["\uD83D\uDD20","","\uDBBA\uDF7C",["capital_abcd"],20,19],"1f521":["\uD83D\uDD21","","\uDBBA\uDF7D",["abcd"],20,20],"1f522":["\uD83D\uDD22","","\uDBBA\uDF7E",["1234"],20,21],"1f523":["\uD83D\uDD23","","\uDBBA\uDF7F",["symbols"],20,22],"1f524":["\uD83D\uDD24","","\uDBBA\uDF80",["abc"],20,23],"1f525":["\uD83D\uDD25","\uE11D","\uDBB9\uDCF6",["fire"],20,24],"1f526":["\uD83D\uDD26","","\uDBB9\uDCFB",["flashlight"],20,25],"1f527":["\uD83D\uDD27","","\uDBB9\uDCC9",["wrench"],20,26],"1f528":["\uD83D\uDD28","\uE116","\uDBB9\uDCCA",["hammer"],20,27],"1f529":["\uD83D\uDD29","","\uDBB9\uDCCB",["nut_and_bolt"],20,28],"1f52a":["\uD83D\uDD2A","","\uDBB9\uDCFA",["hocho","knife"],20,29],"1f52b":["\uD83D\uDD2B","\uE113","\uDBB9\uDCF5",["gun"],21,0],"1f52c":["\uD83D\uDD2C","","",["microscope"],21,1],"1f52d":["\uD83D\uDD2D","","",["telescope"],21,2],"1f52e":["\uD83D\uDD2E","\uE23E","\uDBB9\uDCF7",["crystal_ball"],21,3],"1f52f":["\uD83D\uDD2F","\uE23E","\uDBB9\uDCF8",["six_pointed_star"],21,4],"1f530":["\uD83D\uDD30","\uE209","\uDBB8\uDC44",["beginner"],21,5],"1f531":["\uD83D\uDD31","\uE031","\uDBB9\uDCD2",["trident"],21,6],"1f532":["\uD83D\uDD32","\uE21A","\uDBBA\uDF64",["black_square_button"],21,7],"1f533":["\uD83D\uDD33","\uE21B","\uDBBA\uDF67",["white_square_button"],21,8],"1f534":["\uD83D\uDD34","\uE219","\uDBBA\uDF63",["red_circle"],21,9],"1f535":["\uD83D\uDD35","\uE21A","\uDBBA\uDF64",["large_blue_circle"],21,10],"1f536":["\uD83D\uDD36","\uE21B","\uDBBA\uDF73",["large_orange_diamond"],21,11],"1f537":["\uD83D\uDD37","\uE21B","\uDBBA\uDF74",["large_blue_diamond"],21,12],"1f538":["\uD83D\uDD38","\uE21B","\uDBBA\uDF75",["small_orange_diamond"],21,13],"1f539":["\uD83D\uDD39","\uE21B","\uDBBA\uDF76",["small_blue_diamond"],21,14],"1f53a":["\uD83D\uDD3A","","\uDBBA\uDF78",["small_red_triangle"],21,15],"1f53b":["\uD83D\uDD3B","","\uDBBA\uDF79",["small_red_triangle_down"],21,16],"1f53c":["\uD83D\uDD3C","","\uDBBA\uDF01",["arrow_up_small"],21,17],"1f53d":["\uD83D\uDD3D","","\uDBBA\uDF00",["arrow_down_small"],21,18],"1f550":["\uD83D\uDD50","\uE024","\uDBB8\uDC1E",["clock1"],21,19],"1f551":["\uD83D\uDD51","\uE025","\uDBB8\uDC1F",["clock2"],21,20],"1f552":["\uD83D\uDD52","\uE026","\uDBB8\uDC20",["clock3"],21,21],"1f553":["\uD83D\uDD53","\uE027","\uDBB8\uDC21",["clock4"],21,22],"1f554":["\uD83D\uDD54","\uE028","\uDBB8\uDC22",["clock5"],21,23],"1f555":["\uD83D\uDD55","\uE029","\uDBB8\uDC23",["clock6"],21,24],"1f556":["\uD83D\uDD56","\uE02A","\uDBB8\uDC24",["clock7"],21,25],"1f557":["\uD83D\uDD57","\uE02B","\uDBB8\uDC25",["clock8"],21,26],"1f558":["\uD83D\uDD58","\uE02C","\uDBB8\uDC26",["clock9"],21,27],"1f559":["\uD83D\uDD59","\uE02D","\uDBB8\uDC27",["clock10"],21,28],"1f55a":["\uD83D\uDD5A","\uE02E","\uDBB8\uDC28",["clock11"],21,29],"1f55b":["\uD83D\uDD5B","\uE02F","\uDBB8\uDC29",["clock12"],22,0],"1f55c":["\uD83D\uDD5C","","",["clock130"],22,1],"1f55d":["\uD83D\uDD5D","","",["clock230"],22,2],"1f55e":["\uD83D\uDD5E","","",["clock330"],22,3],"1f55f":["\uD83D\uDD5F","","",["clock430"],22,4],"1f560":["\uD83D\uDD60","","",["clock530"],22,5],"1f561":["\uD83D\uDD61","","",["clock630"],22,6],"1f562":["\uD83D\uDD62","","",["clock730"],22,7],"1f563":["\uD83D\uDD63","","",["clock830"],22,8],"1f564":["\uD83D\uDD64","","",["clock930"],22,9],"1f565":["\uD83D\uDD65","","",["clock1030"],22,10],"1f566":["\uD83D\uDD66","","",["clock1130"],22,11],"1f567":["\uD83D\uDD67","","",["clock1230"],22,12],"1f5fb":["\uD83D\uDDFB","\uE03B","\uDBB9\uDCC3",["mount_fuji"],22,13],"1f5fc":["\uD83D\uDDFC","\uE509","\uDBB9\uDCC4",["tokyo_tower"],22,14],"1f5fd":["\uD83D\uDDFD","\uE51D","\uDBB9\uDCC6",["statue_of_liberty"],22,15],"1f5fe":["\uD83D\uDDFE","","\uDBB9\uDCC7",["japan"],22,16],"1f5ff":["\uD83D\uDDFF","","\uDBB9\uDCC8",["moyai"],22,17],"1f600":["\uD83D\uDE00","","",["grinning"],22,18,":D"],"1f601":["\uD83D\uDE01","\uE404","\uDBB8\uDF33",["grin"],22,19],"1f602":["\uD83D\uDE02","\uE412","\uDBB8\uDF34",["joy"],22,20],"1f603":["\uD83D\uDE03","\uE057","\uDBB8\uDF30",["smiley"],22,21,":)"],"1f604":["\uD83D\uDE04","\uE415","\uDBB8\uDF38",["smile"],22,22,":)"],"1f605":["\uD83D\uDE05","\uE415\uE331","\uDBB8\uDF31",["sweat_smile"],22,23],"1f606":["\uD83D\uDE06","\uE40A","\uDBB8\uDF32",["laughing","satisfied"],22,24],"1f607":["\uD83D\uDE07","","",["innocent"],22,25],"1f608":["\uD83D\uDE08","","",["smiling_imp"],22,26],"1f609":["\uD83D\uDE09","\uE405","\uDBB8\uDF47",["wink"],22,27,";)"],"1f60a":["\uD83D\uDE0A","\uE056","\uDBB8\uDF35",["blush"],22,28],"1f60b":["\uD83D\uDE0B","\uE056","\uDBB8\uDF2B",["yum"],22,29],"1f60c":["\uD83D\uDE0C","\uE40A","\uDBB8\uDF3E",["relieved"],23,0],"1f60d":["\uD83D\uDE0D","\uE106","\uDBB8\uDF27",["heart_eyes"],23,1],"1f60e":["\uD83D\uDE0E","","",["sunglasses"],23,2],"1f60f":["\uD83D\uDE0F","\uE402","\uDBB8\uDF43",["smirk"],23,3],"1f610":["\uD83D\uDE10","","",["neutral_face"],23,4],"1f611":["\uD83D\uDE11","","",["expressionless"],23,5],"1f612":["\uD83D\uDE12","\uE40E","\uDBB8\uDF26",["unamused"],23,6],"1f613":["\uD83D\uDE13","\uE108","\uDBB8\uDF44",["sweat"],23,7],"1f614":["\uD83D\uDE14","\uE403","\uDBB8\uDF40",["pensive"],23,8],"1f615":["\uD83D\uDE15","","",["confused"],23,9],"1f616":["\uD83D\uDE16","\uE407","\uDBB8\uDF3F",["confounded"],23,10],"1f617":["\uD83D\uDE17","","",["kissing"],23,11],"1f618":["\uD83D\uDE18","\uE418","\uDBB8\uDF2C",["kissing_heart"],23,12],"1f619":["\uD83D\uDE19","","",["kissing_smiling_eyes"],23,13],"1f61a":["\uD83D\uDE1A","\uE417","\uDBB8\uDF2D",["kissing_closed_eyes"],23,14],"1f61b":["\uD83D\uDE1B","","",["stuck_out_tongue"],23,15,":p"],"1f61c":["\uD83D\uDE1C","\uE105","\uDBB8\uDF29",["stuck_out_tongue_winking_eye"],23,16,";p"],"1f61d":["\uD83D\uDE1D","\uE409","\uDBB8\uDF2A",["stuck_out_tongue_closed_eyes"],23,17],"1f61e":["\uD83D\uDE1E","\uE058","\uDBB8\uDF23",["disappointed"],23,18,":("],"1f61f":["\uD83D\uDE1F","","",["worried"],23,19],"1f620":["\uD83D\uDE20","\uE059","\uDBB8\uDF20",["angry"],23,20],"1f621":["\uD83D\uDE21","\uE416","\uDBB8\uDF3D",["rage"],23,21],"1f622":["\uD83D\uDE22","\uE413","\uDBB8\uDF39",["cry"],23,22,":'("],"1f623":["\uD83D\uDE23","\uE406","\uDBB8\uDF3C",["persevere"],23,23],"1f624":["\uD83D\uDE24","\uE404","\uDBB8\uDF28",["triumph"],23,24],"1f625":["\uD83D\uDE25","\uE401","\uDBB8\uDF45",["disappointed_relieved"],23,25],"1f626":["\uD83D\uDE26","","",["frowning"],23,26],"1f627":["\uD83D\uDE27","","",["anguished"],23,27],"1f628":["\uD83D\uDE28","\uE40B","\uDBB8\uDF3B",["fearful"],23,28],"1f629":["\uD83D\uDE29","\uE403","\uDBB8\uDF21",["weary"],23,29],"1f62a":["\uD83D\uDE2A","\uE408","\uDBB8\uDF42",["sleepy"],24,0],"1f62b":["\uD83D\uDE2B","\uE406","\uDBB8\uDF46",["tired_face"],24,1],"1f62c":["\uD83D\uDE2C","","",["grimacing"],24,2],"1f62d":["\uD83D\uDE2D","\uE411","\uDBB8\uDF3A",["sob"],24,3,":'("],"1f62e":["\uD83D\uDE2E","","",["open_mouth"],24,4],"1f62f":["\uD83D\uDE2F","","",["hushed"],24,5],"1f630":["\uD83D\uDE30","\uE40F","\uDBB8\uDF25",["cold_sweat"],24,6],"1f631":["\uD83D\uDE31","\uE107","\uDBB8\uDF41",["scream"],24,7],"1f632":["\uD83D\uDE32","\uE410","\uDBB8\uDF22",["astonished"],24,8],"1f633":["\uD83D\uDE33","\uE40D","\uDBB8\uDF2F",["flushed"],24,9],"1f634":["\uD83D\uDE34","","",["sleeping"],24,10],"1f635":["\uD83D\uDE35","\uE406","\uDBB8\uDF24",["dizzy_face"],24,11],"1f636":["\uD83D\uDE36","","",["no_mouth"],24,12],"1f637":["\uD83D\uDE37","\uE40C","\uDBB8\uDF2E",["mask"],24,13],"1f638":["\uD83D\uDE38","\uE404","\uDBB8\uDF49",["smile_cat"],24,14],"1f639":["\uD83D\uDE39","\uE412","\uDBB8\uDF4A",["joy_cat"],24,15],"1f63a":["\uD83D\uDE3A","\uE057","\uDBB8\uDF48",["smiley_cat"],24,16],"1f63b":["\uD83D\uDE3B","\uE106","\uDBB8\uDF4C",["heart_eyes_cat"],24,17],"1f63c":["\uD83D\uDE3C","\uE404","\uDBB8\uDF4F",["smirk_cat"],24,18],"1f63d":["\uD83D\uDE3D","\uE418","\uDBB8\uDF4B",["kissing_cat"],24,19],"1f63e":["\uD83D\uDE3E","\uE416","\uDBB8\uDF4E",["pouting_cat"],24,20],"1f63f":["\uD83D\uDE3F","\uE413","\uDBB8\uDF4D",["crying_cat_face"],24,21],"1f640":["\uD83D\uDE40","\uE403","\uDBB8\uDF50",["scream_cat"],24,22],"1f645":["\uD83D\uDE45","\uE423","\uDBB8\uDF51",["no_good"],24,23],"1f646":["\uD83D\uDE46","\uE424","\uDBB8\uDF52",["ok_woman"],24,24],"1f647":["\uD83D\uDE47","\uE426","\uDBB8\uDF53",["bow"],24,25],"1f648":["\uD83D\uDE48","","\uDBB8\uDF54",["see_no_evil"],24,26],"1f649":["\uD83D\uDE49","","\uDBB8\uDF56",["hear_no_evil"],24,27],"1f64a":["\uD83D\uDE4A","","\uDBB8\uDF55",["speak_no_evil"],24,28],"1f64b":["\uD83D\uDE4B","\uE012","\uDBB8\uDF57",["raising_hand"],24,29],"1f64c":["\uD83D\uDE4C","\uE427","\uDBB8\uDF58",["raised_hands"],25,0],"1f64d":["\uD83D\uDE4D","\uE403","\uDBB8\uDF59",["person_frowning"],25,1],"1f64e":["\uD83D\uDE4E","\uE416","\uDBB8\uDF5A",["person_with_pouting_face"],25,2],"1f64f":["\uD83D\uDE4F","\uE41D","\uDBB8\uDF5B",["pray"],25,3],"1f680":["\uD83D\uDE80","\uE10D","\uDBB9\uDFED",["rocket"],25,4],"1f681":["\uD83D\uDE81","","",["helicopter"],25,5],"1f682":["\uD83D\uDE82","","",["steam_locomotive"],25,6],"1f683":["\uD83D\uDE83","\uE01E","\uDBB9\uDFDF",["railway_car"],25,7],"1f684":["\uD83D\uDE84","\uE435","\uDBB9\uDFE2",["bullettrain_side"],25,8],"1f685":["\uD83D\uDE85","\uE01F","\uDBB9\uDFE3",["bullettrain_front"],25,9],"1f686":["\uD83D\uDE86","","",["train2"],25,10],"1f687":["\uD83D\uDE87","\uE434","\uDBB9\uDFE0",["metro"],25,11],"1f688":["\uD83D\uDE88","","",["light_rail"],25,12],"1f689":["\uD83D\uDE89","\uE039","\uDBB9\uDFEC",["station"],25,13],"1f68a":["\uD83D\uDE8A","","",["tram"],25,14],"1f68b":["\uD83D\uDE8B","","",["train"],25,15],"1f68c":["\uD83D\uDE8C","\uE159","\uDBB9\uDFE6",["bus"],25,16],"1f68d":["\uD83D\uDE8D","","",["oncoming_bus"],25,17],"1f68e":["\uD83D\uDE8E","","",["trolleybus"],25,18],"1f68f":["\uD83D\uDE8F","\uE150","\uDBB9\uDFE7",["busstop"],25,19],"1f690":["\uD83D\uDE90","","",["minibus"],25,20],"1f691":["\uD83D\uDE91","\uE431","\uDBB9\uDFF3",["ambulance"],25,21],"1f692":["\uD83D\uDE92","\uE430","\uDBB9\uDFF2",["fire_engine"],25,22],"1f693":["\uD83D\uDE93","\uE432","\uDBB9\uDFF4",["police_car"],25,23],"1f694":["\uD83D\uDE94","","",["oncoming_police_car"],25,24],"1f695":["\uD83D\uDE95","\uE15A","\uDBB9\uDFEF",["taxi"],25,25],"1f696":["\uD83D\uDE96","","",["oncoming_taxi"],25,26],"1f697":["\uD83D\uDE97","\uE01B","\uDBB9\uDFE4",["car","red_car"],25,27],"1f698":["\uD83D\uDE98","","",["oncoming_automobile"],25,28],"1f699":["\uD83D\uDE99","\uE42E","\uDBB9\uDFE5",["blue_car"],25,29],"1f69a":["\uD83D\uDE9A","\uE42F","\uDBB9\uDFF1",["truck"],26,0],"1f69b":["\uD83D\uDE9B","","",["articulated_lorry"],26,1],"1f69c":["\uD83D\uDE9C","","",["tractor"],26,2],"1f69d":["\uD83D\uDE9D","","",["monorail"],26,3],"1f69e":["\uD83D\uDE9E","","",["mountain_railway"],26,4],"1f69f":["\uD83D\uDE9F","","",["suspension_railway"],26,5],"1f6a0":["\uD83D\uDEA0","","",["mountain_cableway"],26,6],"1f6a1":["\uD83D\uDEA1","","",["aerial_tramway"],26,7],"1f6a2":["\uD83D\uDEA2","\uE202","\uDBB9\uDFE8",["ship"],26,8],"1f6a3":["\uD83D\uDEA3","","",["rowboat"],26,9],"1f6a4":["\uD83D\uDEA4","\uE135","\uDBB9\uDFEE",["speedboat"],26,10],"1f6a5":["\uD83D\uDEA5","\uE14E","\uDBB9\uDFF7",["traffic_light"],26,11],"1f6a6":["\uD83D\uDEA6","","",["vertical_traffic_light"],26,12],"1f6a7":["\uD83D\uDEA7","\uE137","\uDBB9\uDFF8",["construction"],26,13],"1f6a8":["\uD83D\uDEA8","\uE432","\uDBB9\uDFF9",["rotating_light"],26,14],"1f6a9":["\uD83D\uDEA9","","\uDBBA\uDF22",["triangular_flag_on_post"],26,15],"1f6aa":["\uD83D\uDEAA","","\uDBB9\uDCF3",["door"],26,16],"1f6ab":["\uD83D\uDEAB","","\uDBBA\uDF48",["no_entry_sign"],26,17],"1f6ac":["\uD83D\uDEAC","\uE30E","\uDBBA\uDF1E",["smoking"],26,18],"1f6ad":["\uD83D\uDEAD","\uE208","\uDBBA\uDF1F",["no_smoking"],26,19],"1f6ae":["\uD83D\uDEAE","","",["put_litter_in_its_place"],26,20],"1f6af":["\uD83D\uDEAF","","",["do_not_litter"],26,21],"1f6b0":["\uD83D\uDEB0","","",["potable_water"],26,22],"1f6b1":["\uD83D\uDEB1","","",["non-potable_water"],26,23],"1f6b2":["\uD83D\uDEB2","\uE136","\uDBB9\uDFEB",["bike"],26,24],"1f6b3":["\uD83D\uDEB3","","",["no_bicycles"],26,25],"1f6b4":["\uD83D\uDEB4","","",["bicyclist"],26,26],"1f6b5":["\uD83D\uDEB5","","",["mountain_bicyclist"],26,27],"1f6b6":["\uD83D\uDEB6","\uE201","\uDBB9\uDFF0",["walking"],26,28],"1f6b7":["\uD83D\uDEB7","","",["no_pedestrians"],26,29],"1f6b8":["\uD83D\uDEB8","","",["children_crossing"],27,0],"1f6b9":["\uD83D\uDEB9","\uE138","\uDBBA\uDF33",["mens"],27,1],"1f6ba":["\uD83D\uDEBA","\uE139","\uDBBA\uDF34",["womens"],27,2],"1f6bb":["\uD83D\uDEBB","\uE151","\uDBB9\uDD06",["restroom"],27,3],"1f6bc":["\uD83D\uDEBC","\uE13A","\uDBBA\uDF35",["baby_symbol"],27,4],"1f6bd":["\uD83D\uDEBD","\uE140","\uDBB9\uDD07",["toilet"],27,5],"1f6be":["\uD83D\uDEBE","\uE309","\uDBB9\uDD08",["wc"],27,6],"1f6bf":["\uD83D\uDEBF","","",["shower"],27,7],"1f6c0":["\uD83D\uDEC0","\uE13F","\uDBB9\uDD05",["bath"],27,8],"1f6c1":["\uD83D\uDEC1","","",["bathtub"],27,9],"1f6c2":["\uD83D\uDEC2","","",["passport_control"],27,10],"1f6c3":["\uD83D\uDEC3","","",["customs"],27,11],"1f6c4":["\uD83D\uDEC4","","",["baggage_claim"],27,12],"1f6c5":["\uD83D\uDEC5","","",["left_luggage"],27,13],"0023":["\u0023\u20E3","\uE210","\uDBBA\uDC2C",["hash"],27,14],"0030":["\u0030\u20E3","\uE225","\uDBBA\uDC37",["zero"],27,15],"0031":["\u0031\u20E3","\uE21C","\uDBBA\uDC2E",["one"],27,16],"0032":["\u0032\u20E3","\uE21D","\uDBBA\uDC2F",["two"],27,17],"0033":["\u0033\u20E3","\uE21E","\uDBBA\uDC30",["three"],27,18],"0034":["\u0034\u20E3","\uE21F","\uDBBA\uDC31",["four"],27,19],"0035":["\u0035\u20E3","\uE220","\uDBBA\uDC32",["five"],27,20],"0036":["\u0036\u20E3","\uE221","\uDBBA\uDC33",["six"],27,21],"0037":["\u0037\u20E3","\uE222","\uDBBA\uDC34",["seven"],27,22],"0038":["\u0038\u20E3","\uE223","\uDBBA\uDC35",["eight"],27,23],"0039":["\u0039\u20E3","\uE224","\uDBBA\uDC36",["nine"],27,24],"1f1e8-1f1f3":["\uD83C\uDDE8\uD83C\uDDF3","\uE513","\uDBB9\uDCED",["cn"],27,25],"1f1e9-1f1ea":["\uD83C\uDDE9\uD83C\uDDEA","\uE50E","\uDBB9\uDCE8",["de"],27,26],"1f1ea-1f1f8":["\uD83C\uDDEA\uD83C\uDDF8","\uE511","\uDBB9\uDCEB",["es"],27,27],"1f1eb-1f1f7":["\uD83C\uDDEB\uD83C\uDDF7","\uE50D","\uDBB9\uDCE7",["fr"],27,28],"1f1ec-1f1e7":["\uD83C\uDDEC\uD83C\uDDE7","\uE510","\uDBB9\uDCEA",["gb","uk"],27,29],"1f1ee-1f1f9":["\uD83C\uDDEE\uD83C\uDDF9","\uE50F","\uDBB9\uDCE9",["it"],28,0],"1f1ef-1f1f5":["\uD83C\uDDEF\uD83C\uDDF5","\uE50B","\uDBB9\uDCE5",["jp"],28,1],"1f1f0-1f1f7":["\uD83C\uDDF0\uD83C\uDDF7","\uE514","\uDBB9\uDCEE",["kr"],28,2],"1f1f7-1f1fa":["\uD83C\uDDF7\uD83C\uDDFA","\uE512","\uDBB9\uDCEC",["ru"],28,3],"1f1fa-1f1f8":["\uD83C\uDDFA\uD83C\uDDF8","\uE50C","\uDBB9\uDCE6",["us"],28,4]};
a.emoticons_data={"<3":"heart","</3":"broken_heart",":)":"grinning","(:":"grinning",":-)":"grinning",":D":"smile",":-D":"smile",";)":"wink",";-)":"wink","):":"disappointed",":(":"disappointed",":-(":"disappointed",":'(":"cry","=)":"smiley","=-)":"smiley",":>":"laughing",":->":"laughing","8)":"sunglasses",":\\":"confused",":-\\":"confused",":/":"confused",":-/":"confused",":|":"neutral_face",":-|":"neutral_face",":o":"open_mouth",":-o":"open_mouth",">:(":"angry",">:-(":"angry",":p":"stuck_out_tongue",":-p":"stuck_out_tongue",":P":"stuck_out_tongue",":-P":"stuck_out_tongue",":b":"stuck_out_tongue",":-b":"stuck_out_tongue",";p":"stuck_out_tongue_winking_eye",";-p":"stuck_out_tongue_winking_eye",";b":"stuck_out_tongue_winking_eye",";-b":"stuck_out_tongue_winking_eye",";P":"stuck_out_tongue_winking_eye",";-P":"stuck_out_tongue_winking_eye",":o)":"monkey_face","D:":"anguished"};
if(typeof exports==="object"){module.exports=a
}else{if(typeof define==="function"&&define.amd){define(function(){return a
})
}else{this.emoji=a
}}}).call(function(){return this||(typeof window!=="undefined"?window:global)
}());
(function(){var a;
a=(function(){function b(){this.options_index=0;
this.parsed=[]
}b.prototype.add_node=function(c){if(c.nodeName.toUpperCase()==="OPTGROUP"){return this.add_group(c)
}else{return this.add_option(c)
}};
b.prototype.add_group=function(j){var h,e,g,d,f,c;
h=this.parsed.length;
this.parsed.push({array_index:h,group:true,label:j.label,children:0,disabled:j.disabled});
f=j.childNodes;
c=[];
for(g=0,d=f.length;
g<d;
g++){e=f[g];
c.push(this.add_option(e,h,j.disabled))
}return c
};
b.prototype.add_option=function(d,e,c){if(d.nodeName.toUpperCase()==="OPTION"){if(d.text!==""){if(e!=null){this.parsed[e].children+=1
}this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:d.value,text:d.text,html:d.innerHTML,extra:d.getAttribute("data-additional-search-field"),selected:d.selected,disabled:c===true?c:d.disabled,group_array_index:e,classes:d.className,style:d.style.cssText})
}else{this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:true})
}return this.options_index+=1
}};
return b
})();
a.select_to_array=function(b){var g,f,e,c,d;
f=new a();
d=b.childNodes;
for(e=0,c=d.length;
e<c;
e++){g=d[e];
f.add_node(g)
}return f.parsed
};
this.SelectParser=a
}).call(this);
(function(){var b,a;
a=this;
b=(function(){function c(d,e){this.form_field=d;
this.options=e!=null?e:{};
if(!c.browser_is_supported()){return
}this.is_multiple=this.form_field.multiple;
if(!this.is_multiple){this.options.multiple_always_open=false
}this.set_default_text();
this.set_default_values();
this.setup();
this.set_up_html();
this.register_observers();
this.finish_setup()
}c.prototype.set_default_values=function(){var d=this;
this.click_test_action=function(e){return d.test_active_click(e)
};
this.activate_action=function(e){return d.activate_field(e)
};
this.active_field=false;
this.mouse_on_container=false;
this.results_showing=false;
this.result_highlighted=null;
this.result_single_selected=null;
this.allow_single_deselect=(this.options.allow_single_deselect!=null)&&(this.form_field.options[0]!=null)&&this.form_field.options[0].text===""?this.options.allow_single_deselect:false;
this.disable_search_threshold=this.options.disable_search_threshold||0;
this.disable_search=this.options.disable_search||false;
this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:true;
this.search_contains=this.options.search_contains||false;
this.single_backstroke_delete=this.options.single_backstroke_delete||false;
this.max_selected_options=this.options.max_selected_options||Infinity;
this.optional_prefix=this.options.optional_prefix||null;
return this.inherit_select_classes=this.options.inherit_select_classes||false
};
c.prototype.set_default_text=function(){if(this.form_field.getAttribute("data-placeholder")){this.default_text=this.form_field.getAttribute("data-placeholder")
}else{if(this.is_multiple){this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||c.default_multiple_text
}else{this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||c.default_single_text
}}return this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||c.default_no_result_text
};
c.prototype.mouse_enter=function(){return this.mouse_on_container=true
};
c.prototype.mouse_leave=function(){return this.mouse_on_container=false
};
c.prototype.input_focus=function(d){var e=this;
if(this.is_multiple){if(!this.active_field){return setTimeout((function(){return e.container_mousedown()
}),50)
}}else{if(!this.active_field){return this.activate_field()
}}};
c.prototype.input_blur=function(d){var e=this;
if(!this.mouse_on_container){this.active_field=false;
return setTimeout((function(){return e.blur_test()
}),100)
}};
c.prototype.result_add_option=function(f){var d,e;
f.dom_id=this.container_id+"_o_"+f.array_index;
d=f.selected&&this.is_multiple?[]:["active-result"];
if(!f.disabled){if(f.selected){d.push("result-selected")
}if(f.group_array_index!=null){d.push("group-option")
}if(f.classes!==""){d.push(f.classes)
}e=f.style.cssText!==""?' style="'+f.style+'"':""
}else{d.push("chzn-disabled");
e='disabled="disabled"'
}return'<li id="'+f.dom_id+'" class="'+d.join(" ")+'"'+e+">"+f.html+"</li>"
};
c.prototype.results_update_field=function(){this.set_default_text();
if(!this.is_multiple){this.results_reset_cleanup()
}this.result_clear_highlight();
this.result_single_selected=null;
return this.results_build()
};
c.prototype.results_toggle=function(){if(this.results_showing){return this.results_hide()
}else{return this.results_show()
}};
c.prototype.results_search=function(d){if(this.results_showing){return this.winnow_results()
}else{return this.results_show()
}};
c.prototype.choices_count=function(){var e,g,d,f;
if(this.selected_option_count!=null){return this.selected_option_count
}this.selected_option_count=0;
f=this.form_field.options;
for(g=0,d=f.length;
g<d;
g++){e=f[g];
if(e.selected){this.selected_option_count+=1
}}return this.selected_option_count
};
c.prototype.choices_click=function(d){d.preventDefault();
if(!this.results_showing){return this.results_show()
}};
c.prototype.keyup_checker=function(d){var f,e;
f=(e=d.which)!=null?e:d.keyCode;
this.search_field_scale();
switch(f){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0){return this.keydown_backstroke()
}else{if(!this.pending_backstroke){this.result_clear_highlight();
return this.results_search()
}}break;
case 13:d.preventDefault();
if(this.results_showing){return this.result_select(d)
}break;
case 27:if(this.results_showing){this.results_hide()
}return true;
case 9:case 38:case 40:case 16:case 91:case 17:break;
default:return this.results_search()
}};
c.prototype.generate_field_id=function(){var d;
d=this.generate_random_id();
this.form_field.id=d;
return d
};
c.prototype.generate_random_char=function(){var f,e,d;
f="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
d=Math.floor(Math.random()*f.length);
return e=f.substring(d,d+1)
};
c.prototype.container_width=function(){if(this.options.width!=null){return this.options.width
}else{return""+this.form_field.offsetWidth+"px"
}};
c.browser_is_supported=function(){var d;
if(window.navigator.appName==="Microsoft Internet Explorer"){return(null!==(d=document.documentMode)&&d>=8)
}return true
};
c.default_multiple_text="Select Some Options";
c.default_single_text="Select an Option";
c.default_no_result_text="No results match";
return c
})();
a.AbstractChosen=b
}).call(this);
(function(){var d,e,a,b={}.hasOwnProperty,c=function(j,g){for(var f in g){if(b.call(g,f)){j[f]=g[f]
}}function h(){this.constructor=j
}h.prototype=g.prototype;
j.prototype=new h();
j.__super__=g.prototype;
return j
};
a=this;
d=jQuery;
d.fn.extend({chosen:function(f){if(!AbstractChosen.browser_is_supported()){return this
}return this.each(function(g){var h;
h=d(this);
if(!h.hasClass("chzn-done")){return h.data("chosen",new e(this,f))
}})
}});
e=(function(f){c(g,f);
function g(){return g.__super__.constructor.apply(this,arguments)
}g.prototype.setup=function(){this.form_field_jq=d(this.form_field);
this.current_selectedIndex=this.form_field.selectedIndex;
return this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")
};
g.prototype.finish_setup=function(){if(this.options.multiple_always_open){var h=this;
setTimeout(function(){h.container_mousedown()
},100)
}return this.form_field_jq.addClass("chzn-done")
};
g.prototype.set_up_html=function(){var h,j;
this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id();
this.container_id+="_chzn";
h=["chzn-container"];
h.push("chzn-container-"+(this.is_multiple?"multi":"single"));
if(this.inherit_select_classes&&this.form_field.className){h.push(this.form_field.className)
}if(this.is_rtl){h.push("chzn-rtl")
}j={id:this.container_id,"class":h.join(" "),style:"width: "+(this.container_width())+";",title:this.form_field.title};
this.container=d("<div />",j);
if(this.is_multiple){this.container.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>')
}else{this.container.html('<a class="chzn-single chzn-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>')
}this.form_field_jq.hide().after(this.container);
this.dropdown=this.container.find("div.chzn-drop").first();
this.search_field=this.container.find("input").first();
this.search_results=this.container.find("ul.chzn-results").first();
this.search_field_scale();
this.search_no_results=this.container.find("li.no-results").first();
if(this.is_multiple){this.search_choices=this.container.find("ul.chzn-choices").first();
this.search_container=this.container.find("li.search-field").first()
}else{this.search_container=this.container.find("div.chzn-search").first();
this.selected_item=this.container.find(".chzn-single").first()
}this.results_build();
this.set_tab_index();
this.set_label_behavior();
return this.form_field_jq.trigger("liszt:ready",{chosen:this})
};
g.prototype.register_observers=function(){var h=this;
this.container.mousedown(function(j){h.container_mousedown(j)
});
this.container.mouseup(function(j){h.container_mouseup(j)
});
this.container.mouseenter(function(j){h.mouse_enter(j)
});
this.container.mouseleave(function(j){h.mouse_leave(j)
});
this.search_results.mouseup(function(j){h.search_results_mouseup(j)
});
this.search_results.mouseover(function(j){h.search_results_mouseover(j)
});
this.search_results.mouseout(function(j){h.search_results_mouseout(j)
});
this.search_results.bind("mousewheel DOMMouseScroll",function(j){h.search_results_mousewheel(j)
});
this.form_field_jq.bind("liszt:updated",function(j){h.results_update_field(j)
});
this.form_field_jq.bind("liszt:activate",function(j){h.activate_field(j)
});
this.form_field_jq.bind("liszt:open",function(j){h.container_mousedown(j)
});
this.search_field.blur(function(j){h.input_blur(j)
});
this.search_field.keyup(function(j){h.keyup_checker(j)
});
this.search_field.keydown(function(j){h.keydown_checker(j)
});
this.search_field.focus(function(j){h.input_focus(j)
});
if(this.is_multiple){return this.search_choices.click(function(j){h.choices_click(j)
})
}else{return this.container.click(function(j){j.preventDefault()
})
}};
g.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;
if(this.is_disabled){this.container.addClass("chzn-disabled");
this.search_field[0].disabled=true;
if(!this.is_multiple){this.selected_item.unbind("focus",this.activate_action)
}return this.close_field()
}else{this.container.removeClass("chzn-disabled");
this.search_field[0].disabled=false;
if(!this.is_multiple){return this.selected_item.bind("focus",this.activate_action)
}}};
g.prototype.container_mousedown=function(h){if(!this.is_disabled){if(h&&h.type==="mousedown"&&!this.results_showing){h.preventDefault()
}if(!((h!=null)&&(d(h.target)).hasClass("search-choice-close"))){if(!this.active_field){if(this.is_multiple){this.search_field.val("")
}this.results_show()
}else{if(!this.is_multiple&&h&&((d(h.target)[0]===this.selected_item[0])||d(h.target).parents("a.chzn-single").length)){h.preventDefault();
this.results_toggle()
}}return this.activate_field()
}}};
g.prototype.container_mouseup=function(h){if(h.target.nodeName==="ABBR"&&!this.is_disabled){return this.results_reset(h)
}};
g.prototype.search_results_mousewheel=function(j){var l,k,h;
l=-((k=j.originalEvent)!=null?k.wheelDelta:void 0)||((h=j.originialEvent)!=null?h.detail:void 0);
if(l!=null){j.preventDefault();
if(j.type==="DOMMouseScroll"){l=l*40
}return this.search_results.scrollTop(l+this.search_results.scrollTop())
}};
g.prototype.blur_test=function(h){if(!this.active_field&&this.container.hasClass("chzn-container-active")){return this.close_field()
}};
g.prototype.close_field=function(){d(document).unbind("click",this.click_test_action);
this.active_field=false;
this.results_hide();
this.form_field_jq.trigger("blur");
this.container.removeClass("chzn-container-active");
this.winnow_results_clear();
this.clear_backstroke();
this.show_search_field_default();
return this.search_field_scale()
};
g.prototype.activate_field=function(){this.form_field_jq.trigger("focus");
this.container.addClass("chzn-container-active");
this.active_field=true;
this.search_field.val(this.search_field.val());
return this.search_field.focus()
};
g.prototype.test_active_click=function(h){if(d(h.target).parents("#"+this.container_id).length){return this.active_field=true
}else{return this.close_field()
}};
g.prototype.results_build=function(){var j,m,l,h,k;
this.parsing=true;
this.selected_option_count=null;
this.results_data=a.SelectParser.select_to_array(this.form_field);
if(this.is_multiple&&this.choices_count()>0){this.search_choices.find("li.search-choice").remove()
}else{if(!this.is_multiple){this.selected_item.addClass("chzn-default").find("span").text(this.default_text);
if(this.disable_search||this.form_field.options.length<=this.disable_search_threshold){this.container.addClass("chzn-container-single-nosearch")
}else{this.container.removeClass("chzn-container-single-nosearch")
}}}j="";
k=this.results_data;
for(l=0,h=k.length;
l<h;
l++){m=k[l];
if(m.group){j+=this.result_add_group(m)
}else{if(!m.empty){j+=this.result_add_option(m);
if(m.selected&&this.is_multiple){this.choice_build(m)
}else{if(m.selected&&!this.is_multiple){this.selected_item.removeClass("chzn-default").find("span").text(m.text);
if(this.allow_single_deselect){this.single_deselect_control_build()
}}}}}}this.search_field_disabled();
this.show_search_field_default();
this.search_field_scale();
this.search_results.html(j);
return this.parsing=false
};
g.prototype.result_add_group=function(h){if(!h.disabled){h.dom_id=this.container_id+"_g_"+h.array_index;
return'<li id="'+h.dom_id+'" class="group-result">'+d("<div />").text(h.label).html()+"</li>"
}else{return""
}};
g.prototype.result_do_highlight=function(j){var n,m,k,l,h;
if(j.length){this.result_clear_highlight();
this.result_highlight=j;
this.result_highlight.addClass("highlighted");
k=parseInt(this.search_results.css("maxHeight"),10);
h=this.search_results.scrollTop();
l=k+h;
m=this.result_highlight.position().top+this.search_results.scrollTop();
n=m+this.result_highlight.outerHeight();
if(n>=l){return this.search_results.scrollTop((n-k)>0?n-k:0)
}else{if(m<h){return this.search_results.scrollTop(m)
}}}};
g.prototype.result_clear_highlight=function(){if(this.result_highlight){this.result_highlight.removeClass("highlighted")
}return this.result_highlight=null
};
g.prototype.results_show=function(){if(this.result_single_selected!=null){this.result_do_highlight(this.result_single_selected)
}else{if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("liszt:maxselected",{chosen:this});
return false
}}this.container.addClass("chzn-with-drop");
this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this});
this.results_showing=true;
this.search_field.focus();
this.search_field.val(this.search_field.val());
return this.winnow_results()
};
g.prototype.results_hide=function(){if(this.options.multiple_always_open){return
}this.result_clear_highlight();
this.container.removeClass("chzn-with-drop");
this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this});
return this.results_showing=false
};
g.prototype.set_tab_index=function(j){var h;
if(this.form_field_jq.attr("tabindex")){h=this.form_field_jq.attr("tabindex");
this.form_field_jq.attr("tabindex",-1);
return this.search_field.attr("tabindex",h)
}};
g.prototype.set_label_behavior=function(){var h=this;
this.form_field_label=this.form_field_jq.parents("label");
if(!this.form_field_label.length&&this.form_field.id.length){this.form_field_label=d("label[for="+this.form_field.id+"]")
}if(this.form_field_label.length>0){return this.form_field_label.click(function(j){if(h.is_multiple){return h.container_mousedown(j)
}else{return h.activate_field()
}})
}};
g.prototype.show_search_field_default=function(){if(this.is_multiple&&this.choices_count()<1&&!this.active_field){this.search_field.val(this.default_text);
return this.search_field.addClass("default")
}else{this.search_field.val("");
return this.search_field.removeClass("default")
}};
g.prototype.search_results_mouseup=function(h){var j;
j=d(h.target).hasClass("active-result")?d(h.target):d(h.target).parents(".active-result").first();
if(j.length){this.result_highlight=j;
this.result_select(h);
return this.search_field.focus()
}};
g.prototype.search_results_mouseover=function(h){var j;
j=d(h.target).hasClass("active-result")?d(h.target):d(h.target).parents(".active-result").first();
if(j){return this.result_do_highlight(j)
}};
g.prototype.search_results_mouseout=function(h){if(d(h.target).hasClass("active-result"||d(h.target).parents(".active-result").first())){return this.result_clear_highlight()
}};
g.prototype.choice_build=function(j){var h,k,l=this;
h=d("<li />",{"class":"search-choice"}).html("<span>"+j.html+"</span>");
if(j.disabled){h.addClass("search-choice-disabled")
}else{k=d("<a />",{href:"#","class":"search-choice-close",rel:j.array_index});
k.click(function(m){return l.choice_destroy_link_click(m)
});
h.append(k)
}return this.search_container.before(h)
};
g.prototype.choice_destroy_link_click=function(h){h.preventDefault();
h.stopPropagation();
if(!this.is_disabled){return this.choice_destroy(d(h.target))
}};
g.prototype.choice_destroy=function(h){if(this.result_deselect(h.attr("rel"))){if(!this.options.multiple_always_open){this.show_search_field_default();
if(this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1){this.results_hide()
}}h.parents("li").first().remove();
if(this.options.multiple_always_open){this.search_field.focus()
}return this.search_field_scale()
}};
g.prototype.results_reset=function(){this.form_field.options[0].selected=true;
this.selected_option_count=null;
this.selected_item.find("span").text(this.default_text);
if(!this.is_multiple){this.selected_item.addClass("chzn-default")
}this.show_search_field_default();
this.results_reset_cleanup();
this.form_field_jq.trigger("change");
if(this.active_field){return this.results_hide()
}};
g.prototype.results_reset_cleanup=function(){this.current_selectedIndex=this.form_field.selectedIndex;
return this.selected_item.find("abbr").remove()
};
g.prototype.result_select=function(j){var m,l,k,h;
if(this.result_highlight){m=this.result_highlight;
l=m.attr("id");
this.result_clear_highlight();
if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("liszt:maxselected",{chosen:this});
return false
}if(this.is_multiple){this.result_deactivate(m)
}else{this.search_results.find(".result-selected").removeClass("result-selected");
this.result_single_selected=m;
this.selected_item.removeClass("chzn-default")
}m.addClass("result-selected");
h=l.substr(l.lastIndexOf("_")+1);
k=this.results_data[h];
if(this.form_field.options[k.options_index].disabled){return false
}k.selected=true;
this.form_field.options[k.options_index].selected=true;
this.selected_option_count=null;
if(this.is_multiple){this.choice_build(k)
}else{this.selected_item.find("span").first().text(k.text);
if(this.allow_single_deselect){this.single_deselect_control_build()
}}if(!((j.metaKey||j.ctrlKey)&&this.is_multiple)){this.results_hide()
}if(this.options.multiple_always_open){if(!this.options.multiple_select_maintains_winnow){this.search_field.val("")
}}else{this.search_field.val("")
}if(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex){this.form_field_jq.trigger("change",{selected:this.form_field.options[k.options_index].value})
}this.current_selectedIndex=this.form_field.selectedIndex;
if(this.options.multiple_always_open){this.results_search()
}return this.search_field_scale()
}};
g.prototype.result_activate=function(h){return h.addClass("active-result")
};
g.prototype.result_deactivate=function(h){return h.removeClass("active-result")
};
g.prototype.result_deselect=function(k){var h,j;
j=this.results_data[k];
if(!this.form_field.options[j.options_index].disabled){j.selected=false;
this.form_field.options[j.options_index].selected=false;
this.selected_option_count=null;
h=d("#"+this.container_id+"_o_"+k);
h.removeClass("result-selected").addClass("active-result").show();
this.result_clear_highlight();
this.winnow_results();
this.form_field_jq.trigger("change",{deselected:this.form_field.options[j.options_index].value});
this.search_field_scale();
return true
}else{return false
}};
g.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1){return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
}};
g.prototype.winnow_results=function(){var p,r,v,u,k,s,o,y,t,x,w,q,l,m,j,h,z,A,n;
this.no_results_clear();
t=0;
x=this.search_field.val()===this.default_text?"":d("<div/>").text(d.trim(this.search_field.val())).html();
s=this.search_contains?"":"^";
if(this.optional_prefix){s+=this.optional_prefix+"?"
}k=new RegExp(s+x.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i");
l=new RegExp(x.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i");
n=this.results_data;
for(j=0,z=n.length;
j<z;
j++){r=n[j];
if(!r.empty){if(r.group){d("#"+r.dom_id).css("display","none")
}else{if(!(this.is_multiple&&r.selected)){p=false;
m=false;
y=r.dom_id;
o=d("#"+y);
if(k.test(r.html)||k.test(r.extra)){if(!k.test(r.html)){m=true
}p=true;
t+=1
}else{if(this.enable_split_word_search&&(r.html.indexOf(" ")>=0||r.html.indexOf("[")===0)){u=r.html.replace(/\[|\]/g,"").split(" ");
if(u.length){for(h=0,A=u.length;
h<A;
h++){v=u[h];
if(k.test(v)){p=true;
t+=1
}}}}}if(p){if(x.length&&!m){w=r.html.search(l);
q=r.html.substr(0,w+x.length)+"</em>"+r.html.substr(w+x.length);
q=q.substr(0,w)+"<em>"+q.substr(w)
}else{q=r.html
}o.html(q);
this.result_activate(o);
if(r.group_array_index!=null){d("#"+this.results_data[r.group_array_index].dom_id).css("display","list-item")
}}else{if(this.result_highlight&&y===this.result_highlight.attr("id")){this.result_clear_highlight()
}this.result_deactivate(o)
}}}}}if(t<1&&x.length){return this.no_results(x)
}else{return this.winnow_results_set_highlight()
}};
g.prototype.winnow_results_clear=function(){var h,l,m,k,j;
this.search_field.val("");
l=this.search_results.find("li");
j=[];
for(m=0,k=l.length;
m<k;
m++){h=l[m];
h=d(h);
if(h.hasClass("group-result")){j.push(h.css("display","auto"))
}else{if(!this.is_multiple||!h.hasClass("result-selected")){j.push(this.result_activate(h))
}else{j.push(void 0)
}}}return j
};
g.prototype.winnow_results_set_highlight=function(){var h,j;
if(!this.result_highlight){j=!this.is_multiple?this.search_results.find(".result-selected.active-result"):[];
h=j.length?j.first():this.search_results.find(".active-result").first();
if(h!=null){return this.result_do_highlight(h)
}}};
g.prototype.no_results=function(h){var j;
j=d('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>');
j.find("span").first().html(h);
return this.search_results.append(j)
};
g.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()
};
g.prototype.keydown_arrow=function(){var j,h;
if(!this.result_highlight){j=this.search_results.find("li.active-result").first();
if(j){this.result_do_highlight(d(j))
}}else{if(this.results_showing){h=this.result_highlight.nextAll("li.active-result").first();
if(h){this.result_do_highlight(h)
}}}if(!this.results_showing){return this.results_show()
}};
g.prototype.keyup_arrow=function(){var h;
if(!this.results_showing&&!this.is_multiple){return this.results_show()
}else{if(this.result_highlight){h=this.result_highlight.prevAll("li.active-result");
if(h.length){return this.result_do_highlight(h.first())
}else{if(this.choices_count()>0){this.results_hide()
}return this.result_clear_highlight()
}}}};
g.prototype.keydown_backstroke=function(){var h;
if(this.pending_backstroke){this.choice_destroy(this.pending_backstroke.find("a").first());
return this.clear_backstroke()
}else{h=this.search_container.siblings("li.search-choice").last();
if(h.length&&!h.hasClass("search-choice-disabled")){this.pending_backstroke=h;
if(this.single_backstroke_delete){return this.keydown_backstroke()
}else{return this.pending_backstroke.addClass("search-choice-focus")
}}}};
g.prototype.clear_backstroke=function(){if(this.pending_backstroke){this.pending_backstroke.removeClass("search-choice-focus")
}return this.pending_backstroke=null
};
g.prototype.keydown_checker=function(h){var k,j;
k=(j=h.which)!=null?j:h.keyCode;
this.search_field_scale();
if(k!==8&&this.pending_backstroke){this.clear_backstroke()
}switch(k){case 8:this.backstroke_length=this.search_field.val().length;
break;
case 9:if(this.results_showing&&!this.is_multiple){this.result_select(h)
}this.mouse_on_container=false;
break;
case 13:h.preventDefault();
break;
case 38:h.preventDefault();
this.keyup_arrow();
break;
case 40:this.keydown_arrow();
break
}};
g.prototype.search_field_scale=function(){var q,m,l,o,n,k,p,j;
if(this.is_multiple){m=0;
k=0;
o="position:absolute; left: -1000px; top: -1000px; display:none;";
n=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];
for(p=0,j=n.length;
p<j;
p++){l=n[p];
o+=l+":"+this.search_field.css(l)+";"
}q=d("<div />",{style:o});
q.text(this.search_field.val());
d("body").append(q);
k=q.width()+25;
q.remove();
if(!this.f_width){this.f_width=this.container.outerWidth()
}if(k>this.f_width-10){k=this.f_width-10
}return this.search_field.css({width:k+"px"})
}};
g.prototype.generate_random_id=function(){var h;
h="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();
while(d("#"+h).length>0){h+=this.generate_random_char()
}return h
};
return g
})(AbstractChosen);
a.Chosen=e
}).call(this);
(function(d,b,a,f){var e=d(b);
var c={};
d.fn.lazyload=function(h){var l=this;
var m;
var k={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:(h&&h.skip_invisible!==f?h.skip_invisible:true),appear:null,load:null,placeholder:null};
h=h||{};
h.throttle=(h.throttle||125);
function j(){if(!h.throttle){return n()
}else{TS.utility.throttle.method(n,"jquery_lazyload",h.throttle)
}}function n(){var o=0;
if((!l||!l.each||!l.length)&&g){g();
return false
}if(k.skip_invisible&&m[0]&&m[0]!==b&&!m.is(":visible")){return
}l.each(function(){var p=d(this);
if(k.skip_invisible&&!p.is(":visible")){p=null;
return
}if(d.abovethetop(this,k)||d.leftofbegin(this,k)){}else{if(!d.belowthefold(this,k)&&!d.rightoffold(this,k)){p.trigger("appear");
o=0
}else{if(++o>k.failure_limit){p=null;
return false
}}}p=null
})
}function g(){if(m&&l){m.unbind(k.event+".lazyload");
e.unbind("resize",j);
e.unbind("resize-immediate",n);
l.each(function(){d(this).unbind()
});
m=null;
l=null
}}if(h){if(f!==h.failurelimit){h.failure_limit=h.failurelimit;
delete h.failurelimit
}if(f!==h.effectspeed){h.effect_speed=h.effectspeed;
delete h.effectspeed
}d.extend(k,h)
}m=(k.container===f||k.container===b)?e:d(k.container);
if(0===k.event.indexOf("scroll")){m.bind(k.event+".lazyload",j)
}this.each(function(){var p=this;
var s=d(p);
var r=s.attr("src");
var t=s.attr("data-"+k.data_attribute);
p.loaded=false;
function q(){var u;
s.hide();
if(s.is("img")){s.attr("src",t)
}else{if(t.indexOf("url(")!==-1){s.css("background-image",t)
}else{s.css("background-image","url('"+t+"')")
}}s[k.effect](k.effect_speed);
p.loaded=true;
if(l){u=d.grep(l,function(w){return !w.loaded
});
l=d(u)
}c[t]=true;
if(k.load&&l){var v=l.length;
k.load.call(p,v,k)
}s.trigger("lazyloaded")
}function o(){q();
d(this).remove()
}s.one("appear",function(){if(!this.loaded){if(k.appear){if(l){var u=l.length;
k.appear.call(p,u,k)
}}if(t.indexOf("url(")!==-1){q()
}else{d("<img />").one("load",o).attr("src",t)
}}});
if(r===f||r===false){if(s.is("img")){if(c[t]){s.trigger("appear")
}else{if(k.placeholder){s.attr("src",k.placeholder)
}}}}else{if(c[t]){s.trigger("appear")
}}if(0!==k.event.indexOf("scroll")){s.bind(k.event,function(){if(!p.loaded){s.trigger("appear")
}})
}});
e.bind("resize",j);
e.bind("resize-immediate",n);
if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){e.bind("pageshow",function(o){if(o.originalEvent&&o.originalEvent.persisted){l.each(function(){d(this).trigger("appear")
})
}})
}d(a).ready(n);
this.detachEvents=g;
return this
};
d.belowthefold=function(h,j){var g;
if(j.container===f||j.container===b){g=(b.innerHeight?b.innerHeight:e.height())+e.scrollTop()
}else{g=d(j.container).offset().top+d(j.container).height()
}return g<=d(h).offset().top-j.threshold
};
d.rightoffold=function(h,j){var g;
if(j.container===f||j.container===b){g=e.width()+e.scrollLeft()
}else{g=d(j.container).offset().left+d(j.container).width()
}return g<=d(h).offset().left-j.threshold
};
d.abovethetop=function(h,j){var g;
if(j.container===f||j.container===b){g=e.scrollTop()
}else{g=d(j.container).offset().top
}return g>=d(h).offset().top+j.threshold+d(h).height()
};
d.leftofbegin=function(h,j){var g;
if(j.container===f||j.container===b){g=e.scrollLeft()
}else{g=d(j.container).offset().left
}return g>=d(h).offset().left+j.threshold+d(h).width()
};
d.inviewport=function(g,h){return !d.rightoffold(g,h)&&!d.leftofbegin(g,h)&&!d.belowthefold(g,h)&&!d.abovethetop(g,h)
};
d.extend(d.expr[":"],{"below-the-fold":function(g){return d.belowthefold(g,{threshold:0})
},"above-the-top":function(g){return !d.belowthefold(g,{threshold:0})
},"right-of-screen":function(g){return d.rightoffold(g,{threshold:0})
},"left-of-screen":function(g){return !d.rightoffold(g,{threshold:0})
},"in-viewport":function(g){return d.inviewport(g,{threshold:0})
},"above-the-fold":function(g){return !d.belowthefold(g,{threshold:0})
},"right-of-fold":function(g){return d.rightoffold(g,{threshold:0})
},"left-of-fold":function(g){return !d.rightoffold(g,{threshold:0})
}})
})(jQuery,window,document);
/*!

 handlebars v2.0.0-alpha.2

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
;
this.Handlebars=(function(){var a=(function(){var n;
function o(p){this.string=p
}o.prototype.toString=function(){return""+this.string
};
n=o;
return n
})();
var l=(function(x){var y={};
var r=x;
var z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var n=/[&<>"'`]/g;
var s=/[&<>"'`]/;
function A(B){return z[B]||"&amp;"
}function w(D){for(var C=1;
C<arguments.length;
C++){for(var B in arguments[C]){if(Object.prototype.hasOwnProperty.call(arguments[C],B)){D[B]=arguments[C][B]
}}}return D
}y.extend=w;
var p=Object.prototype.toString;
y.toString=p;
var o=function(B){return typeof B==="function"
};
if(o(/x/)){o=function(B){return typeof B==="function"&&p.call(B)==="[object Function]"
}
}var o;
y.isFunction=o;
var v=Array.isArray||function(B){return(B&&typeof B==="object")?p.call(B)==="[object Array]":false
};
y.isArray=v;
function u(B){if(B instanceof r){return B.toString()
}else{if(!B&&B!==0){return""
}}B=""+B;
if(!s.test(B)){return B
}return B.replace(n,A)
}y.escapeExpression=u;
function t(B){if(!B&&B!==0){return true
}else{if(v(B)&&B.length===0){return true
}else{return false
}}}y.isEmpty=t;
function q(B,C){return(B?B+".":"")+C
}y.appendContextPath=q;
return y
})(a);
var d=(function(){var o;
var p=["description","fileName","lineNumber","message","name","number","stack"];
function n(u,t){var r;
if(t&&t.firstLine){r=t.firstLine;
u+=" - "+r+":"+t.firstColumn
}var s=Error.prototype.constructor.call(this,u);
for(var q=0;
q<p.length;
q++){this[p[q]]=s[p[q]]
}if(r){this.lineNumber=r;
this.column=t.firstColumn
}}n.prototype=new Error();
o=n;
return o
})();
var j=(function(y,B){var A={};
var w=y;
var u=B;
var D="2.0.0-alpha.2";
A.VERSION=D;
var o=5;
A.COMPILER_REVISION=o;
var r={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:">= 2.0.0"};
A.REVISION_CHANGES=r;
var v=w.isArray,q=w.isFunction,p=w.toString,n="[object Object]";
function t(F,E){this.helpers=F||{};
this.partials=E||{};
x(this)
}A.HandlebarsEnvironment=t;
t.prototype={constructor:t,logger:z,log:s,registerHelper:function(F,G,E){if(p.call(F)===n){if(E||G){throw new u("Arg not supported with multiple helpers")
}w.extend(this.helpers,F)
}else{if(E){G.not=E
}this.helpers[F]=G
}},unregisterHelper:function(E){delete this.helpers[E]
},registerPartial:function(E,F){if(p.call(E)===n){w.extend(this.partials,E)
}else{this.partials[E]=F
}},unregisterPartial:function(E){delete this.partials[E]
}};
function x(E){E.registerHelper("helperMissing",function(){if(arguments.length===1){return undefined
}else{throw new u("Missing helper: '"+arguments[arguments.length-1].name+"'")
}});
E.registerHelper("blockHelperMissing",function(H,G){var F=G.inverse||function(){},I=G.fn;
if(q(H)){H=H.call(this)
}if(H===true){return I(this)
}else{if(H===false||H==null){return F(this)
}else{if(v(H)){if(H.length>0){if(G.ids){G.ids=[G.name]
}return E.helpers.each(H,G)
}else{return F(this)
}}else{if(G.data&&G.ids){var J=C(G.data);
J.contextPath=w.appendContextPath(G.data.contextPath,G.name);
G={data:J}
}return I(H,G)
}}}});
E.registerHelper("each",function(F,O){if(!O){O=F;
F=this
}var M=O.fn,I=O.inverse;
var K=0,L="",J;
var G;
if(O.data&&O.ids){G=w.appendContextPath(O.data.contextPath,O.ids[0])+"."
}if(q(F)){F=F.call(this)
}if(O.data){J=C(O.data)
}if(F&&typeof F==="object"){if(v(F)){for(var H=F.length;
K<H;
K++){if(J){J.index=K;
J.first=(K===0);
J.last=(K===(F.length-1));
if(G){J.contextPath=G+K
}}L=L+M(F[K],{data:J})
}}else{for(var N in F){if(F.hasOwnProperty(N)){if(J){J.key=N;
J.index=K;
J.first=(K===0);
if(G){J.contextPath=G+N
}}L=L+M(F[N],{data:J});
K++
}}}}if(K===0){L=I(this)
}return L
});
E.registerHelper("if",function(G,F){if(q(G)){G=G.call(this)
}if((!F.hash.includeZero&&!G)||w.isEmpty(G)){return F.inverse(this)
}else{return F.fn(this)
}});
E.registerHelper("unless",function(G,F){return E.helpers["if"].call(this,G,{fn:F.inverse,inverse:F.fn,hash:F.hash})
});
E.registerHelper("with",function(G,F){if(q(G)){G=G.call(this)
}var H=F.fn;
if(!w.isEmpty(G)){if(F.data&&F.ids){var I=C(F.data);
I.contextPath=w.appendContextPath(F.data.contextPath,F.ids[0]);
F={data:I}
}return H(G,F)
}});
E.registerHelper("log",function(G,F){var H=F.data&&F.data.level!=null?parseInt(F.data.level,10):1;
E.log(H,G)
});
E.registerHelper("lookup",function(H,G,F){return H&&H[G]
})
}var z={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(G,E){if(z.level<=G){var F=z.methodMap[G];
if(typeof console!=="undefined"&&console[F]){console[F].call(console,E)
}}}};
A.logger=z;
function s(F,E){z.log(F,E)
}A.log=s;
var C=function(E){var F=w.extend({},E);
F._parent=E;
return F
};
A.createFrame=C;
return A
})(l,d);
var g=(function(w,B,q){var z={};
var v=w;
var t=B;
var p=q.COMPILER_REVISION;
var s=q.REVISION_CHANGES;
var C=q.createFrame;
function o(F){var E=F&&F[0]||1,H=p;
if(E!==H){if(E<H){var D=s[H],G=s[E];
throw new t("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+D+") or downgrade your runtime to an older version ("+G+").")
}else{throw new t("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+F[1]+").")
}}}z.checkRevision=o;
function y(D,H){if(!H){throw new t("No environment passed to template")
}H.VM.checkRevision(D.compiler);
var G=function(O,I,K,L,J,N,M){if(L){K=v.extend({},K,L)
}var Q=H.VM.invokePartial.call(this,O,I,K,J,N,M);
if(Q!=null){return Q
}if(H.compile){var P={helpers:J,partials:N,data:M};
N[I]=H.compile(O,{data:M!==undefined},H);
return N[I](K,P)
}else{throw new t("The partial "+I+" could not be compiled when running in runtime-only mode")
}};
var E={escapeExpression:v.escapeExpression,invokePartial:G,fn:function(I){return D[I]
},programs:[],program:function(J,L){var I=this.programs[J],K=this.fn(J);
if(L){I=u(this,J,K,L)
}else{if(!I){I=this.programs[J]=u(this,J,K)
}}return I
},programWithDepth:H.VM.programWithDepth,data:function(I,J){while(I&&J--){I=I._parent
}return I
},merge:function(K,J){var I=K||J;
if(K&&J&&(K!==J)){I=v.extend({},J,K)
}return I
},noop:H.VM.noop,compilerInfo:D.compiler};
var F=function(K,I){I=I||{};
var L,J,M=I.data;
F._setup(I);
if(!I.partial&&D.useData){M=x(K,M)
}return D.main.call(E,K,E.helpers,E.partials,M)
};
F._setup=function(I){if(!I.partial){E.helpers=E.merge(I.helpers,H.helpers);
if(D.usePartial){E.partials=E.merge(I.partials,H.partials)
}}else{E.helpers=I.helpers;
E.partials=I.partials
}};
F._child=function(I){return E.programWithDepth(I)
};
return F
}z.template=y;
function r(F,H){var E=Array.prototype.slice.call(arguments,2),D=this,G=D.fn(F);
var I=function(K,J){J=J||{};
return G.apply(D,[K,D.helpers,D.partials,J.data||H].concat(E))
};
I.program=F;
I.depth=E.length;
return I
}z.programWithDepth=r;
function u(D,E,F,G){var H=function(J,I){I=I||{};
return F.call(D,J,D.helpers,D.partials,I.data||G)
};
H.program=E;
H.depth=0;
return H
}z.program=u;
function n(D,F,H,I,G,J){var E={partial:true,helpers:I,partials:G,data:J};
if(D===undefined){throw new t("The partial "+F+" could not be found")
}else{if(D instanceof Function){return D(H,E)
}}}z.invokePartial=n;
function A(){return""
}z.noop=A;
function x(D,E){if(!E||!("root" in E)){E=E?C(E):{};
E.root=D
}return E
}return z
})(l,d,j);
var f=(function(x,z,p,t,w){var y;
var n=x;
var q=z;
var s=p;
var v=t;
var r=w;
var u=function(){var A=new n.HandlebarsEnvironment();
v.extend(A,n);
A.SafeString=q;
A.Exception=s;
A.Utils=v;
A.VM=r;
A.template=function(B){return r.template(B,A)
};
return A
};
var o=u();
o.create=u;
y=o;
return y
})(j,a,d,l,g);
var k=(function(r){var p;
var o=r;
function n(s){s=s||{};
this.firstLine=s.first_line;
this.firstColumn=s.first_column;
this.lastColumn=s.last_column;
this.lastLine=s.last_line
}var q={ProgramNode:function(u,w,t,v){var s,x;
if(arguments.length===3){v=t;
t=null
}else{if(arguments.length===2){v=w;
w=null
}}n.call(this,v);
this.type="program";
this.statements=u;
this.strip={};
if(t){x=t[0];
if(x){s={first_line:x.firstLine,last_line:x.lastLine,last_column:x.lastColumn,first_column:x.firstColumn};
this.inverse=new q.ProgramNode(t,w,s)
}else{this.inverse=new q.ProgramNode(t,w)
}this.strip.right=w.left
}else{if(w){this.strip.left=w.right
}}},MustacheNode:function(x,w,s,u,t){n.call(this,t);
this.type="mustache";
this.strip=u;
if(s!=null&&s.charAt){var v=s.charAt(3)||s.charAt(2);
this.escaped=v!=="{"&&v!=="&"
}else{this.escaped=!!s
}if(x instanceof q.SexprNode){this.sexpr=x
}else{this.sexpr=new q.SexprNode(x,w)
}this.sexpr.isRoot=true;
this.id=this.sexpr.id;
this.params=this.sexpr.params;
this.hash=this.sexpr.hash;
this.eligibleHelper=this.sexpr.eligibleHelper;
this.isHelper=this.sexpr.isHelper
},SexprNode:function(w,t,s){n.call(this,s);
this.type="sexpr";
this.hash=t;
var v=this.id=w[0];
var u=this.params=w.slice(1);
this.isHelper=u.length||t;
this.eligibleHelper=this.isHelper||v.isSimple
},PartialNode:function(s,u,w,v,t){n.call(this,t);
this.type="partial";
this.partialName=s;
this.context=u;
this.hash=w;
this.strip=v
},BlockNode:function(v,t,s,w,u){n.call(this,u);
if(v.sexpr.id.original!==w.path.original){throw new o(v.sexpr.id.original+" doesn't match "+w.path.original,this)
}this.type="block";
this.mustache=v;
this.program=t;
this.inverse=s;
this.strip={left:v.strip.left,right:w.strip.right};
(t||s).strip.left=v.strip.right;
(s||t).strip.right=w.strip.left;
if(s&&!t){this.isInverse=true
}},RawBlockNode:function(u,t,v,s){n.call(this,s);
if(u.sexpr.id.original!==v){throw new o(u.sexpr.id.original+" doesn't match "+v,this)
}t=new q.ContentNode(t,s);
this.type="block";
this.mustache=u;
this.program=new q.ProgramNode([t],s)
},ContentNode:function(s,t){n.call(this,t);
this.type="content";
this.string=s
},HashNode:function(t,s){n.call(this,s);
this.type="hash";
this.pairs=t
},IdNode:function(w,z){n.call(this,z);
this.type="ID";
var u="",A=[],x=0,t="";
for(var y=0,v=w.length;
y<v;
y++){var s=w[y].part;
u+=(w[y].separator||"")+s;
if(s===".."||s==="."||s==="this"){if(A.length>0){throw new o("Invalid path: "+u,this)
}else{if(s===".."){x++;
t+="../"
}else{this.isScoped=true
}}}else{A.push(s)
}}this.original=u;
this.parts=A;
this.string=A.join(".");
this.depth=x;
this.idName=t+this.string;
this.isSimple=w.length===1&&!this.isScoped&&x===0;
this.stringModeValue=this.string
},PartialNameNode:function(s,t){n.call(this,t);
this.type="PARTIAL_NAME";
this.name=s.original
},DataNode:function(t,s){n.call(this,s);
this.type="DATA";
this.id=t;
this.stringModeValue=t.stringModeValue;
this.idName="@"+t.stringModeValue
},StringNode:function(s,t){n.call(this,t);
this.type="STRING";
this.original=this.string=this.stringModeValue=s
},NumberNode:function(t,s){n.call(this,s);
this.type="NUMBER";
this.original=this.number=t;
this.stringModeValue=Number(t)
},BooleanNode:function(s,t){n.call(this,t);
this.type="BOOLEAN";
this.bool=s;
this.stringModeValue=s==="true"
},CommentNode:function(t,s){n.call(this,s);
this.type="comment";
this.comment=t
}};
p=q;
return p
})(d);
var b=(function(){var o;
var n=(function(){var w={trace:function s(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openRawBlock:9,CONTENT:10,END_RAW_BLOCK:11,openInverse:12,closeBlock:13,openBlock:14,mustache:15,partial:16,COMMENT:17,OPEN_RAW_BLOCK:18,sexpr:19,CLOSE_RAW_BLOCK:20,OPEN_BLOCK:21,CLOSE:22,OPEN_INVERSE:23,OPEN_ENDBLOCK:24,path:25,OPEN:26,OPEN_UNESCAPED:27,CLOSE_UNESCAPED:28,OPEN_PARTIAL:29,partialName:30,param:31,partial_option0:32,partial_option1:33,sexpr_repetition0:34,sexpr_option0:35,dataName:36,STRING:37,NUMBER:38,BOOLEAN:39,OPEN_SEXPR:40,CLOSE_SEXPR:41,hash:42,hash_repetition_plus0:43,hashSegment:44,ID:45,EQUALS:46,DATA:47,pathSegments:48,SEP:49,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",10:"CONTENT",11:"END_RAW_BLOCK",17:"COMMENT",18:"OPEN_RAW_BLOCK",20:"CLOSE_RAW_BLOCK",21:"OPEN_BLOCK",22:"CLOSE",23:"OPEN_INVERSE",24:"OPEN_ENDBLOCK",26:"OPEN",27:"OPEN_UNESCAPED",28:"CLOSE_UNESCAPED",29:"OPEN_PARTIAL",37:"STRING",38:"NUMBER",39:"BOOLEAN",40:"OPEN_SEXPR",41:"CLOSE_SEXPR",45:"ID",46:"EQUALS",47:"DATA",49:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[9,3],[14,3],[12,3],[13,3],[15,3],[15,3],[16,5],[16,4],[7,2],[19,3],[19,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[42,1],[44,3],[30,1],[30,1],[30,1],[36,2],[25,1],[48,3],[48,1],[32,0],[32,1],[33,0],[33,1],[34,0],[34,2],[35,0],[35,1],[43,1],[43,2]],performAction:function r(x,A,B,E,D,z,C){var y=z.length-1;
switch(D){case 1:return new E.ProgramNode(z[y-1],this._$);
break;
case 2:return new E.ProgramNode([],this._$);
break;
case 3:this.$=new E.ProgramNode([],z[y-1],z[y],this._$);
break;
case 4:this.$=new E.ProgramNode(z[y-2],z[y-1],z[y],this._$);
break;
case 5:this.$=new E.ProgramNode(z[y-1],z[y],[],this._$);
break;
case 6:this.$=new E.ProgramNode(z[y],this._$);
break;
case 7:this.$=new E.ProgramNode([],this._$);
break;
case 8:this.$=new E.ProgramNode([],this._$);
break;
case 9:this.$=[z[y]];
break;
case 10:z[y-1].push(z[y]);
this.$=z[y-1];
break;
case 11:this.$=new E.RawBlockNode(z[y-2],z[y-1],z[y],this._$);
break;
case 12:this.$=new E.BlockNode(z[y-2],z[y-1].inverse,z[y-1],z[y],this._$);
break;
case 13:this.$=new E.BlockNode(z[y-2],z[y-1],z[y-1].inverse,z[y],this._$);
break;
case 14:this.$=z[y];
break;
case 15:this.$=z[y];
break;
case 16:this.$=new E.ContentNode(z[y],this._$);
break;
case 17:this.$=new E.CommentNode(z[y],this._$);
break;
case 18:this.$=new E.MustacheNode(z[y-1],null,"","",this._$);
break;
case 19:this.$=new E.MustacheNode(z[y-1],null,z[y-2],p(z[y-2],z[y]),this._$);
break;
case 20:this.$=new E.MustacheNode(z[y-1],null,z[y-2],p(z[y-2],z[y]),this._$);
break;
case 21:this.$={path:z[y-1],strip:p(z[y-2],z[y])};
break;
case 22:this.$=new E.MustacheNode(z[y-1],null,z[y-2],p(z[y-2],z[y]),this._$);
break;
case 23:this.$=new E.MustacheNode(z[y-1],null,z[y-2],p(z[y-2],z[y]),this._$);
break;
case 24:this.$=new E.PartialNode(z[y-3],z[y-2],z[y-1],p(z[y-4],z[y]),this._$);
break;
case 25:this.$=new E.PartialNode(z[y-2],undefined,z[y-1],p(z[y-3],z[y]),this._$);
break;
case 26:this.$=p(z[y-1],z[y]);
break;
case 27:this.$=new E.SexprNode([z[y-2]].concat(z[y-1]),z[y],this._$);
break;
case 28:this.$=new E.SexprNode([z[y]],null,this._$);
break;
case 29:this.$=z[y];
break;
case 30:this.$=new E.StringNode(z[y],this._$);
break;
case 31:this.$=new E.NumberNode(z[y],this._$);
break;
case 32:this.$=new E.BooleanNode(z[y],this._$);
break;
case 33:this.$=z[y];
break;
case 34:z[y-1].isHelper=true;
this.$=z[y-1];
break;
case 35:this.$=new E.HashNode(z[y],this._$);
break;
case 36:this.$=[z[y-2],z[y]];
break;
case 37:this.$=new E.PartialNameNode(z[y],this._$);
break;
case 38:this.$=new E.PartialNameNode(new E.StringNode(z[y],this._$),this._$);
break;
case 39:this.$=new E.PartialNameNode(new E.NumberNode(z[y],this._$));
break;
case 40:this.$=new E.DataNode(z[y],this._$);
break;
case 41:this.$=new E.IdNode(z[y],this._$);
break;
case 42:z[y-2].push({part:z[y],separator:z[y-1]});
this.$=z[y-2];
break;
case 43:this.$=[{part:z[y]}];
break;
case 48:this.$=[];
break;
case 49:z[y-1].push(z[y]);
break;
case 52:this.$=[z[y]];
break;
case 53:z[y-1].push(z[y]);
break
}},table:[{3:1,4:2,5:[1,3],8:4,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,13],26:[1,15],27:[1,16],29:[1,17]},{1:[3]},{5:[1,18],8:19,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,13],26:[1,15],27:[1,16],29:[1,17]},{1:[2,2]},{5:[2,9],10:[2,9],17:[2,9],18:[2,9],21:[2,9],23:[2,9],24:[2,9],26:[2,9],27:[2,9],29:[2,9]},{10:[1,20]},{4:23,6:21,7:22,8:4,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,24],24:[2,8],26:[1,15],27:[1,16],29:[1,17]},{4:23,6:25,7:22,8:4,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,24],24:[2,8],26:[1,15],27:[1,16],29:[1,17]},{5:[2,14],10:[2,14],17:[2,14],18:[2,14],21:[2,14],23:[2,14],24:[2,14],26:[2,14],27:[2,14],29:[2,14]},{5:[2,15],10:[2,15],17:[2,15],18:[2,15],21:[2,15],23:[2,15],24:[2,15],26:[2,15],27:[2,15],29:[2,15]},{5:[2,16],10:[2,16],17:[2,16],18:[2,16],21:[2,16],23:[2,16],24:[2,16],26:[2,16],27:[2,16],29:[2,16]},{5:[2,17],10:[2,17],17:[2,17],18:[2,17],21:[2,17],23:[2,17],24:[2,17],26:[2,17],27:[2,17],29:[2,17]},{19:26,25:27,36:28,45:[1,31],47:[1,30],48:29},{19:32,25:27,36:28,45:[1,31],47:[1,30],48:29},{19:33,25:27,36:28,45:[1,31],47:[1,30],48:29},{19:34,25:27,36:28,45:[1,31],47:[1,30],48:29},{19:35,25:27,36:28,45:[1,31],47:[1,30],48:29},{25:37,30:36,37:[1,38],38:[1,39],45:[1,31],48:29},{1:[2,1]},{5:[2,10],10:[2,10],17:[2,10],18:[2,10],21:[2,10],23:[2,10],24:[2,10],26:[2,10],27:[2,10],29:[2,10]},{11:[1,40]},{13:41,24:[1,42]},{4:43,8:4,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,13],24:[2,7],26:[1,15],27:[1,16],29:[1,17]},{7:44,8:19,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,24],24:[2,6],26:[1,15],27:[1,16],29:[1,17]},{19:32,22:[1,45],25:27,36:28,45:[1,31],47:[1,30],48:29},{13:46,24:[1,42]},{20:[1,47]},{20:[2,48],22:[2,48],28:[2,48],34:48,37:[2,48],38:[2,48],39:[2,48],40:[2,48],41:[2,48],45:[2,48],47:[2,48]},{20:[2,28],22:[2,28],28:[2,28],41:[2,28]},{20:[2,41],22:[2,41],28:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],45:[2,41],47:[2,41],49:[1,49]},{25:50,45:[1,31],48:29},{20:[2,43],22:[2,43],28:[2,43],37:[2,43],38:[2,43],39:[2,43],40:[2,43],41:[2,43],45:[2,43],47:[2,43],49:[2,43]},{22:[1,51]},{22:[1,52]},{22:[1,53]},{28:[1,54]},{22:[2,46],25:57,31:55,33:56,36:61,37:[1,58],38:[1,59],39:[1,60],40:[1,62],42:63,43:64,44:66,45:[1,65],47:[1,30],48:29},{22:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],45:[2,37],47:[2,37]},{22:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],45:[2,38],47:[2,38]},{22:[2,39],37:[2,39],38:[2,39],39:[2,39],40:[2,39],45:[2,39],47:[2,39]},{5:[2,11],10:[2,11],17:[2,11],18:[2,11],21:[2,11],23:[2,11],24:[2,11],26:[2,11],27:[2,11],29:[2,11]},{5:[2,12],10:[2,12],17:[2,12],18:[2,12],21:[2,12],23:[2,12],24:[2,12],26:[2,12],27:[2,12],29:[2,12]},{25:67,45:[1,31],48:29},{8:19,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,13],24:[2,3],26:[1,15],27:[1,16],29:[1,17]},{4:68,8:4,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,13],24:[2,5],26:[1,15],27:[1,16],29:[1,17]},{10:[2,26],17:[2,26],18:[2,26],21:[2,26],23:[2,26],24:[2,26],26:[2,26],27:[2,26],29:[2,26]},{5:[2,13],10:[2,13],17:[2,13],18:[2,13],21:[2,13],23:[2,13],24:[2,13],26:[2,13],27:[2,13],29:[2,13]},{10:[2,18]},{20:[2,50],22:[2,50],25:57,28:[2,50],31:70,35:69,36:61,37:[1,58],38:[1,59],39:[1,60],40:[1,62],41:[2,50],42:71,43:64,44:66,45:[1,65],47:[1,30],48:29},{45:[1,72]},{20:[2,40],22:[2,40],28:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],45:[2,40],47:[2,40]},{10:[2,20],17:[2,20],18:[2,20],21:[2,20],23:[2,20],24:[2,20],26:[2,20],27:[2,20],29:[2,20]},{10:[2,19],17:[2,19],18:[2,19],21:[2,19],23:[2,19],24:[2,19],26:[2,19],27:[2,19],29:[2,19]},{5:[2,22],10:[2,22],17:[2,22],18:[2,22],21:[2,22],23:[2,22],24:[2,22],26:[2,22],27:[2,22],29:[2,22]},{5:[2,23],10:[2,23],17:[2,23],18:[2,23],21:[2,23],23:[2,23],24:[2,23],26:[2,23],27:[2,23],29:[2,23]},{22:[2,44],32:73,42:74,43:64,44:66,45:[1,75]},{22:[1,76]},{20:[2,29],22:[2,29],28:[2,29],37:[2,29],38:[2,29],39:[2,29],40:[2,29],41:[2,29],45:[2,29],47:[2,29]},{20:[2,30],22:[2,30],28:[2,30],37:[2,30],38:[2,30],39:[2,30],40:[2,30],41:[2,30],45:[2,30],47:[2,30]},{20:[2,31],22:[2,31],28:[2,31],37:[2,31],38:[2,31],39:[2,31],40:[2,31],41:[2,31],45:[2,31],47:[2,31]},{20:[2,32],22:[2,32],28:[2,32],37:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32],45:[2,32],47:[2,32]},{20:[2,33],22:[2,33],28:[2,33],37:[2,33],38:[2,33],39:[2,33],40:[2,33],41:[2,33],45:[2,33],47:[2,33]},{19:77,25:27,36:28,45:[1,31],47:[1,30],48:29},{22:[2,47]},{20:[2,35],22:[2,35],28:[2,35],41:[2,35],44:78,45:[1,75]},{20:[2,43],22:[2,43],28:[2,43],37:[2,43],38:[2,43],39:[2,43],40:[2,43],41:[2,43],45:[2,43],46:[1,79],47:[2,43],49:[2,43]},{20:[2,52],22:[2,52],28:[2,52],41:[2,52],45:[2,52]},{22:[1,80]},{8:19,9:5,10:[1,10],12:6,14:7,15:8,16:9,17:[1,11],18:[1,12],21:[1,14],23:[1,13],24:[2,4],26:[1,15],27:[1,16],29:[1,17]},{20:[2,27],22:[2,27],28:[2,27],41:[2,27]},{20:[2,49],22:[2,49],28:[2,49],37:[2,49],38:[2,49],39:[2,49],40:[2,49],41:[2,49],45:[2,49],47:[2,49]},{20:[2,51],22:[2,51],28:[2,51],41:[2,51]},{20:[2,42],22:[2,42],28:[2,42],37:[2,42],38:[2,42],39:[2,42],40:[2,42],41:[2,42],45:[2,42],47:[2,42],49:[2,42]},{22:[1,81]},{22:[2,45]},{46:[1,79]},{5:[2,25],10:[2,25],17:[2,25],18:[2,25],21:[2,25],23:[2,25],24:[2,25],26:[2,25],27:[2,25],29:[2,25]},{41:[1,82]},{20:[2,53],22:[2,53],28:[2,53],41:[2,53],45:[2,53]},{25:57,31:83,36:61,37:[1,58],38:[1,59],39:[1,60],40:[1,62],45:[1,31],47:[1,30],48:29},{5:[2,21],10:[2,21],17:[2,21],18:[2,21],21:[2,21],23:[2,21],24:[2,21],26:[2,21],27:[2,21],29:[2,21]},{5:[2,24],10:[2,24],17:[2,24],18:[2,24],21:[2,24],23:[2,24],24:[2,24],26:[2,24],27:[2,24],29:[2,24]},{20:[2,34],22:[2,34],28:[2,34],37:[2,34],38:[2,34],39:[2,34],40:[2,34],41:[2,34],45:[2,34],47:[2,34]},{20:[2,36],22:[2,36],28:[2,36],41:[2,36],45:[2,36]}],defaultActions:{3:[2,2],18:[2,1],47:[2,18],63:[2,47],74:[2,45]},parseError:function t(y,x){throw new Error(y)
},parse:function v(G){var N=this,D=[0],W=[null],I=[],X=this.table,y="",H=0,U=0,A=0,F=2,K=1;
this.lexer.setInput(G);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var z=this.lexer.yylloc;
I.push(z);
var B=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function M(Z){D.length=D.length-2*Z;
W.length=W.length-Z;
I.length=I.length-Z
}function L(){var Z;
Z=N.lexer.lex()||1;
if(typeof Z!=="number"){Z=N.symbols_[Z]||Z
}return Z
}var T,P,C,S,Y,J,R={},O,V,x,E;
while(true){C=D[D.length-1];
if(this.defaultActions[C]){S=this.defaultActions[C]
}else{if(T===null||typeof T=="undefined"){T=L()
}S=X[C]&&X[C][T]
}if(typeof S==="undefined"||!S.length||!S[0]){var Q="";
if(!A){E=[];
for(O in X[C]){if(this.terminals_[O]&&O>2){E.push("'"+this.terminals_[O]+"'")
}}if(this.lexer.showPosition){Q="Parse error on line "+(H+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[T]||T)+"'"
}else{Q="Parse error on line "+(H+1)+": Unexpected "+(T==1?"end of input":"'"+(this.terminals_[T]||T)+"'")
}this.parseError(Q,{text:this.lexer.match,token:this.terminals_[T]||T,line:this.lexer.yylineno,loc:z,expected:E})
}}if(S[0] instanceof Array&&S.length>1){throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+T)
}switch(S[0]){case 1:D.push(T);
W.push(this.lexer.yytext);
I.push(this.lexer.yylloc);
D.push(S[1]);
T=null;
if(!P){U=this.lexer.yyleng;
y=this.lexer.yytext;
H=this.lexer.yylineno;
z=this.lexer.yylloc;
if(A>0){A--
}}else{T=P;
P=null
}break;
case 2:V=this.productions_[S[1]][1];
R.$=W[W.length-V];
R._$={first_line:I[I.length-(V||1)].first_line,last_line:I[I.length-1].last_line,first_column:I[I.length-(V||1)].first_column,last_column:I[I.length-1].last_column};
if(B){R._$.range=[I[I.length-(V||1)].range[0],I[I.length-1].range[1]]
}J=this.performAction.call(R,y,U,H,this.yy,S[1],W,I);
if(typeof J!=="undefined"){return J
}if(V){D=D.slice(0,-1*V*2);
W=W.slice(0,-1*V);
I=I.slice(0,-1*V)
}D.push(this.productions_[S[1]][0]);
W.push(R.$);
I.push(R._$);
x=X[D[D.length-2]][D[D.length-1]];
D.push(x);
break;
case 3:return true
}}return true
}};
function p(x,y){return{left:x.charAt(2)==="~",right:y.charAt(0)==="~"||y.charAt(1)==="~"}
}var q=(function(){var A=({EOF:1,parseError:function C(F,E){if(this.yy.parser){this.yy.parser.parseError(F,E)
}else{throw new Error(F)
}},setInput:function(E){this._input=E;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function(){var F=this._input[0];
this.yytext+=F;
this.yyleng++;
this.offset++;
this.match+=F;
this.matched+=F;
var E=F.match(/(?:\r\n?|\n).*/g);
if(E){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return F
},unput:function(G){var E=G.length;
var F=G.split(/(?:\r\n?|\n)/g);
this._input=G+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-E-1);
this.offset-=E;
var I=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(F.length-1){this.yylineno-=F.length-1
}var H=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:F?(F.length===I.length?this.yylloc.first_column:0)+I[I.length-F.length].length-F[0].length:this.yylloc.first_column-E};
if(this.options.ranges){this.yylloc.range=[H[0],H[0]+this.yyleng-E]
}return this
},more:function(){this._more=true;
return this
},less:function(E){this.unput(this.match.slice(E))
},pastInput:function(){var E=this.matched.substr(0,this.matched.length-this.match.length);
return(E.length>20?"...":"")+E.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var E=this.match;
if(E.length<20){E+=this._input.substr(0,20-E.length)
}return(E.substr(0,20)+(E.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var E=this.pastInput();
var F=new Array(E.length+1).join("-");
return E+this.upcomingInput()+"\n"+F+"^"
},next:function(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var K,I,F,H,G,E;
if(!this._more){this.yytext="";
this.match=""
}var L=this._currentRules();
for(var J=0;
J<L.length;
J++){F=this._input.match(this.rules[L[J]]);
if(F&&(!I||F[0].length>I[0].length)){I=F;
H=J;
if(!this.options.flex){break
}}}if(I){E=I[0].match(/(?:\r\n?|\n).*/g);
if(E){this.yylineno+=E.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:E?E[E.length-1].length-E[E.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+I[0].length};
this.yytext+=I[0];
this.match+=I[0];
this.matches=I;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(I[0].length);
this.matched+=I[0];
K=this.performAction.call(this,this.yy,this,L[H],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(K){return K
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function x(){var E=this.next();
if(typeof E!=="undefined"){return E
}else{return this.lex()
}},begin:function y(E){this.conditionStack.push(E)
},popState:function D(){return this.conditionStack.pop()
},_currentRules:function B(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function y(E){this.begin(E)
}});
A.options={};
A.performAction=function z(J,F,I,E){function G(L,K){return F.yytext=F.yytext.substr(L,F.yyleng-K)
}var H=E;
switch(I){case 0:if(F.yytext.slice(-2)==="\\\\"){G(0,1);
this.begin("mu")
}else{if(F.yytext.slice(-1)==="\\"){G(0,1);
this.begin("emu")
}else{this.begin("mu")
}}if(F.yytext){return 10
}break;
case 1:return 10;
break;
case 2:this.popState();
return 10;
break;
case 3:F.yytext=F.yytext.substr(5,F.yyleng-9);
this.popState();
return 11;
break;
case 4:return 10;
break;
case 5:G(0,4);
this.popState();
return 17;
break;
case 6:return 40;
break;
case 7:return 41;
break;
case 8:return 18;
break;
case 9:this.popState();
this.begin("raw");
return 20;
break;
case 10:F.yytext=F.yytext.substr(4,F.yyleng-8);
this.popState();
return"RAW_BLOCK";
break;
case 11:return 29;
break;
case 12:return 21;
break;
case 13:return 24;
break;
case 14:return 23;
break;
case 15:return 23;
break;
case 16:return 27;
break;
case 17:return 26;
break;
case 18:this.popState();
this.begin("com");
break;
case 19:G(3,5);
this.popState();
return 17;
break;
case 20:return 26;
break;
case 21:return 46;
break;
case 22:return 45;
break;
case 23:return 45;
break;
case 24:return 49;
break;
case 25:break;
case 26:this.popState();
return 28;
break;
case 27:this.popState();
return 22;
break;
case 28:F.yytext=G(1,2).replace(/\\"/g,'"');
return 37;
break;
case 29:F.yytext=G(1,2).replace(/\\'/g,"'");
return 37;
break;
case 30:return 47;
break;
case 31:return 39;
break;
case 32:return 39;
break;
case 33:return 38;
break;
case 34:return 45;
break;
case 35:F.yytext=G(1,2);
return 45;
break;
case 36:return"INVALID";
break;
case 37:return 5;
break
}};
A.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{\{\{[^\x00]*\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
A.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[5],inclusive:false},raw:{rules:[3,4],inclusive:false},INITIAL:{rules:[0,1,37],inclusive:true}};
return A
})();
w.lexer=q;
function u(){this.yy={}
}u.prototype=w;
w.Parser=u;
return new u
})();
o=n;
return o
})();
var m=(function(r,n){var o={};
var s=r;
var p=n;
o.parser=s;
function q(t){if(t.constructor===p.ProgramNode){return t
}s.yy=p;
return s.parse(t)
}o.parse=q;
return o
})(b,k);
var e=(function(s){var r={};
var n=s;
function p(){}r.Compiler=p;
p.prototype={compiler:p,disassemble:function(){var y=this.opcodes,x,v=[],A,z;
for(var w=0,t=y.length;
w<t;
w++){x=y[w];
if(x.opcode==="DECLARE"){v.push("DECLARE "+x.name+"="+x.value)
}else{A=[];
for(var u=0;
u<x.args.length;
u++){z=x.args[u];
if(typeof z==="string"){z='"'+z.replace("\n","\\n")+'"'
}A.push(z)
}v.push(x.opcode+" "+A.join(" "))
}}return v.join("\n")
},equals:function(u){var t=this.opcodes.length;
if(u.opcodes.length!==t){return false
}for(var x=0;
x<t;
x++){var y=this.opcodes[x],v=u.opcodes[x];
if(y.opcode!==v.opcode||y.args.length!==v.args.length){return false
}for(var w=0;
w<y.args.length;
w++){if(y.args[w]!==v.args[w]){return false
}}}t=this.children.length;
if(u.children.length!==t){return false
}for(x=0;
x<t;
x++){if(!this.children[x].equals(u.children[x])){return false
}}return true
},guid:0,compile:function(t,v){this.opcodes=[];
this.children=[];
this.depths={list:[]};
this.options=v;
this.stringParams=v.stringParams;
this.trackIds=v.trackIds;
var w=this.options.knownHelpers;
this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true,lookup:true};
if(w){for(var u in w){this.options.knownHelpers[u]=w[u]
}}return this.accept(t)
},accept:function(v){var u=v.strip||{},t;
if(u.left){this.opcode("strip")
}t=this[v.type](v);
if(u.right){this.opcode("strip")
}return t
},program:function(v){var u=v.statements;
for(var w=0,t=u.length;
w<t;
w++){this.accept(u[w])
}this.isSimple=t===1;
this.depths.list=this.depths.list.sort(function(y,x){return y-x
});
return this
},compileProgram:function(v){var t=new this.compiler().compile(v,this.options);
var w=this.guid++,y;
this.usePartial=this.usePartial||t.usePartial;
this.children[w]=t;
for(var x=0,u=t.depths.list.length;
x<u;
x++){y=t.depths.list[x];
if(y<2){continue
}else{this.addDepth(y-1)
}}return w
},block:function(y){var x=y.mustache,u=y.program,t=y.inverse;
if(u){u=this.compileProgram(u)
}if(t){t=this.compileProgram(t)
}var w=x.sexpr;
var v=this.classifySexpr(w);
if(v==="helper"){this.helperSexpr(w,u,t)
}else{if(v==="simple"){this.simpleSexpr(w);
this.opcode("pushProgram",u);
this.opcode("pushProgram",t);
this.opcode("emptyHash");
this.opcode("blockValue",w.id.original)
}else{this.ambiguousSexpr(w,u,t);
this.opcode("pushProgram",u);
this.opcode("pushProgram",t);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},hash:function(w){var v=w.pairs,u,t;
this.opcode("pushHash");
for(u=0,t=v.length;
u<t;
u++){this.pushParam(v[u][1])
}while(u--){this.opcode("assignToHash",v[u][0])
}this.opcode("popHash")
},partial:function(t){var u=t.partialName;
this.usePartial=true;
if(t.hash){this.accept(t.hash)
}else{this.opcode("push","undefined")
}if(t.context){this.accept(t.context)
}else{this.opcode("push","depth0")
}this.opcode("invokePartial",u.name);
this.opcode("append")
},content:function(t){this.opcode("appendContent",t.string)
},mustache:function(t){this.sexpr(t.sexpr);
if(t.escaped&&!this.options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},ambiguousSexpr:function(x,v,u){var y=x.id,w=y.parts[0],t=v!=null||u!=null;
this.opcode("getContext",y.depth);
this.opcode("pushProgram",v);
this.opcode("pushProgram",u);
this.opcode("invokeAmbiguous",w,t)
},simpleSexpr:function(t){var u=t.id;
if(u.type==="DATA"){this.DATA(u)
}else{if(u.parts.length){this.ID(u)
}else{this.addDepth(u.depth);
this.opcode("getContext",u.depth);
this.opcode("pushContext")
}}this.opcode("resolvePossibleLambda")
},helperSexpr:function(w,u,t){var x=this.setupFullMustacheParams(w,u,t),y=w.id,v=y.parts[0];
if(this.options.knownHelpers[v]){this.opcode("invokeKnownHelper",x.length,v)
}else{if(this.options.knownHelpersOnly){throw new n("You specified knownHelpersOnly, but used the unknown helper "+v,w)
}else{this.ID(y);
this.opcode("invokeHelper",x.length,v,w.isRoot)
}}},sexpr:function(u){var t=this.classifySexpr(u);
if(t==="simple"){this.simpleSexpr(u)
}else{if(t==="helper"){this.helperSexpr(u)
}else{this.ambiguousSexpr(u)
}}},ID:function(w){this.addDepth(w.depth);
this.opcode("getContext",w.depth);
var u=w.parts[0];
if(!u){this.opcode("pushContext")
}else{this.opcode("lookupOnContext",w.parts[0])
}for(var v=1,t=w.parts.length;
v<t;
v++){this.opcode("lookup",w.parts[v])
}},DATA:function(v){this.options.data=true;
this.opcode("lookupData",v.id.depth);
var w=v.id.parts;
for(var u=0,t=w.length;
u<t;
u++){this.opcode("lookup",w[u])
}},STRING:function(t){this.opcode("pushString",t.string)
},NUMBER:function(t){this.opcode("pushLiteral",t.number)
},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)
},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:[].slice.call(arguments,1)})
},declare:function(t,u){this.opcodes.push({opcode:"DECLARE",name:t,value:u})
},addDepth:function(t){if(t===0){return
}if(!this.depths[t]){this.depths[t]=true;
this.depths.list.push(t)
}},classifySexpr:function(w){var v=w.isHelper;
var x=w.eligibleHelper;
var u=this.options;
if(x&&!v){var t=w.id.parts[0];
if(u.knownHelpers[t]){v=true
}else{if(u.knownHelpersOnly){x=false
}}}if(v){return"helper"
}else{if(x){return"ambiguous"
}else{return"simple"
}}},pushParams:function(v){for(var u=0,t=v.length;
u<t;
u++){this.pushParam(v[u])
}},pushParam:function(t){if(this.stringParams){if(t.depth){this.addDepth(t.depth)
}this.opcode("getContext",t.depth||0);
this.opcode("pushStringParam",t.stringModeValue,t.type);
if(t.type==="sexpr"){this.sexpr(t)
}}else{if(this.trackIds){this.opcode("pushId",t.type,t.idName||t.stringModeValue)
}this.accept(t)
}},setupFullMustacheParams:function(v,u,t){var w=v.params;
this.pushParams(w);
this.opcode("pushProgram",u);
this.opcode("pushProgram",t);
if(v.hash){this.hash(v.hash)
}else{this.opcode("emptyHash")
}return w
}};
function o(v,w,x){if(v==null||(typeof v!=="string"&&v.constructor!==x.AST.ProgramNode)){throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+v)
}w=w||{};
if(!("data" in w)){w.data=true
}var u=x.parse(v);
var t=new x.Compiler().compile(u,w);
return new x.JavaScriptCompiler().compile(t,w)
}r.precompile=o;
function q(t,v,w){if(t==null||(typeof t!=="string"&&t.constructor!==w.AST.ProgramNode)){throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t)
}v=v||{};
if(!("data" in v)){v.data=true
}var y;
function x(){var B=w.parse(t);
var A=new w.Compiler().compile(B,v);
var z=new w.JavaScriptCompiler().compile(A,v,undefined,true);
return w.template(z)
}var u=function(A,z){if(!y){y=x()
}return y.call(this,A,z)
};
u.child=function(z){if(!y){y=x()
}return y.child(z)
};
return u
}r.compile=q;
return r
})(d);
var h=(function(v,y){var x;
var n=v.COMPILER_REVISION;
var r=v.REVISION_CHANGES;
var s=v.log;
var t=y;
function p(A){this.value=A
}function z(){}z.prototype={nameLookup:function(D,B){var C,A;
if(D.indexOf("depth")===0){C=true
}if(z.isValidJavaScriptVariableName(B)){A=D+"."+B
}else{A=D+"['"+B+"']"
}if(C){return"("+D+" && "+A+")"
}else{return A
}},compilerInfo:function(){var B=n,A=r[B];
return[B,A]
},appendToBuffer:function(A){if(this.environment.isSimple){return"return "+A+";"
}else{return{appendToBuffer:true,content:A,toString:function(){return"buffer += "+A+";"
}}
}},initializeBuffer:function(){return this.quotedString("")
},namespace:"Handlebars",compile:function(D,K,A,G){this.environment=D;
this.options=K||{};
this.stringParams=this.options.stringParams;
this.trackIds=this.options.trackIds;
this.precompile=!G;
s("debug",this.environment.disassemble()+"\n\n");
this.name=this.environment.name;
this.isChild=!!A;
this.context=A||{programs:[],environments:[]};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.aliases={};
this.registers={list:[]};
this.hashes=[];
this.compileStack=[];
this.inlineStack=[];
this.compileChildren(D,K);
var I=D.opcodes,E,F,C;
for(F=0,C=I.length;
F<C;
F++){E=I[F];
if(E.opcode==="DECLARE"){this[E.name]=E.value
}else{this[E.opcode].apply(this,E.args)
}if(E.opcode!==this.stripNext){this.stripNext=false
}}this.pushSource("");
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new t("Compile completed with content left on stack")
}var J=this.createFunctionContext(G);
if(!this.isChild){var H={compiler:this.compilerInfo(),main:J};
var B=this.context.programs;
for(F=0,C=B.length;
F<C;
F++){if(B[F]){H[F]=B[F]
}}if(this.environment.usePartial){H.usePartial=true
}if(this.options.data){H.useData=true
}if(!G){H.compiler=JSON.stringify(H.compiler);
H=this.objectLiteral(H)
}return H
}else{return J
}},preamble:function(){this.lastContext=0;
this.source=[]
},createFunctionContext:function(D){var G="";
var F=this.stackVars.concat(this.registers.list);
if(F.length>0){G+=", "+F.join(", ")
}for(var C in this.aliases){if(this.aliases.hasOwnProperty(C)){G+=", "+C+"="+this.aliases[C]
}}var H=["depth0","helpers","partials","data"];
for(var B=0,A=this.environment.depths.list.length;
B<A;
B++){H.push("depth"+this.environment.depths.list[B])
}var E=this.mergeSource(G);
if(D){H.push(E);
return Function.apply(this,H)
}else{return"function("+H.join(",")+") {\n  "+E+"}"
}},mergeSource:function(H){var G="",D,E=!this.forceBuffer,B;
for(var F=0,A=this.source.length;
F<A;
F++){var C=this.source[F];
if(C.appendToBuffer){if(D){D=D+"\n    + "+C.content
}else{D=C.content
}}else{if(D){if(!G){B=true;
G=D+";\n  "
}else{G+="buffer += "+D+";\n  "
}D=undefined
}G+=C+"\n  ";
if(!this.environment.isSimple){E=false
}}}if(E){if(D||!G){G+="return "+(D||'""')+";\n"
}}else{H+=", buffer = "+(B?"":this.initializeBuffer());
if(D){G+="return buffer + "+D+";\n"
}else{G+="return buffer;\n"
}}if(H){G="var "+H.substring(2)+(B?"":";\n  ")+G
}return G
},blockValue:function(A){this.aliases.blockHelperMissing="helpers.blockHelperMissing";
var B=["depth0"];
this.setupParams(A,0,B);
this.replaceStack(function(C){B.splice(1,0,C);
return"blockHelperMissing.call("+B.join(", ")+")"
})
},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";
var B=["depth0"];
this.setupParams("",0,B,true);
this.flushInline();
var A=this.topStack();
B.splice(1,0,A);
this.pushSource("if (!"+this.lastHelper+") { "+A+" = blockHelperMissing.call("+B.join(", ")+"); }")
},appendContent:function(A){if(this.pendingContent){A=this.pendingContent+A
}if(this.stripNext){A=A.replace(/^\s+/,"")
}this.pendingContent=A
},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")
}this.stripNext="strip"
},append:function(){this.flushInline();
var A=this.popStack();
this.pushSource("if("+A+" || "+A+" === 0) { "+this.appendToBuffer(A)+" }");
if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")
}},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression";
this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))
},getContext:function(A){if(this.lastContext!==A){this.lastContext=A
}},lookupOnContext:function(A){this.push(this.nameLookup("depth"+this.lastContext,A,"context"))
},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)
},resolvePossibleLambda:function(){this.aliases.functionType='"function"';
this.replaceStack(function(A){return"typeof "+A+" === functionType ? "+A+".apply(depth0) : "+A
})
},lookup:function(A){this.replaceStack(function(B){return B+" == null || "+B+" === false ? "+B+" : "+this.nameLookup(B,A,"context")
})
},lookupData:function(A){if(!A){this.pushStackLiteral("data")
}else{this.pushStackLiteral("this.data(data, "+A+")")
}},pushStringParam:function(A,B){this.pushStackLiteral("depth"+this.lastContext);
this.pushString(B);
if(B!=="sexpr"){if(typeof A==="string"){this.pushString(A)
}else{this.pushStackLiteral(A)
}}},emptyHash:function(){this.pushStackLiteral("{}");
if(this.trackIds){this.push("{}")
}if(this.stringParams){this.push("{}");
this.push("{}")
}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)
}this.hash={values:[],types:[],contexts:[],ids:[]}
},popHash:function(){var A=this.hash;
this.hash=this.hashes.pop();
if(this.trackIds){this.push("{"+A.ids.join(",")+"}")
}if(this.stringParams){this.push("{"+A.contexts.join(",")+"}");
this.push("{"+A.types.join(",")+"}")
}this.push("{\n    "+A.values.join(",\n    ")+"\n  }")
},pushString:function(A){this.pushStackLiteral(this.quotedString(A))
},push:function(A){this.inlineStack.push(A);
return A
},pushLiteral:function(A){this.pushStackLiteral(A)
},pushProgram:function(A){if(A!=null){this.pushStackLiteral(this.programExpression(A))
}else{this.pushStackLiteral(null)
}},invokeHelper:function(E,B,A){this.aliases.helperMissing="helpers.helperMissing";
this.useRegister("helper");
var F=this.popStack();
var C=this.setupHelper(E,B);
var D="helper = "+C.name+" || "+F+" || helperMissing";
if(C.paramsInit){D+=","+C.paramsInit
}this.push("("+D+",helper.call("+C.callParams+"))");
if(!A){this.flushInline()
}},invokeKnownHelper:function(C,A){var B=this.setupHelper(C,A);
this.push(B.name+".call("+B.callParams+")")
},invokeAmbiguous:function(A,D){this.aliases.functionType='"function"';
this.useRegister("helper");
this.emptyHash();
var B=this.setupHelper(0,A,D);
var C=this.lastHelper=this.nameLookup("helpers",A,"helper");
var E=this.nameLookup("depth"+this.lastContext,A,"context");
this.push("((helper = "+C+" || "+E+(B.paramsInit?"),("+B.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+B.callParams+") : helper))")
},invokePartial:function(A){var B=[this.nameLookup("partials",A,"partial"),"'"+A+"'",this.popStack(),this.popStack(),"helpers","partials"];
if(this.options.data){B.push("data")
}this.push("this.invokePartial("+B.join(", ")+")")
},assignToHash:function(B){var D=this.popStack(),A,C,F;
if(this.trackIds){F=this.popStack()
}if(this.stringParams){C=this.popStack();
A=this.popStack()
}var E=this.hash;
if(A){E.contexts.push("'"+B+"': "+A)
}if(C){E.types.push("'"+B+"': "+C)
}if(F){E.ids.push("'"+B+"': "+F)
}E.values.push("'"+B+"': ("+D+")")
},pushId:function(B,A){if(B==="ID"||B==="DATA"){this.pushString(A)
}else{if(B==="sexpr"){this.pushStackLiteral("true")
}else{this.pushStackLiteral("null")
}}},compiler:z,compileChildren:function(A,D){var F=A.children,H,G;
for(var E=0,B=F.length;
E<B;
E++){H=F[E];
G=new this.compiler();
var C=this.matchExistingProgram(H);
if(C==null){this.context.programs.push("");
C=this.context.programs.length;
H.index=C;
H.name="program"+C;
this.context.programs[C]=G.compile(H,D,this.context,!this.precompile);
this.context.environments[C]=H
}else{H.index=C;
H.name="program"+C
}}},matchExistingProgram:function(D){for(var C=0,B=this.context.environments.length;
C<B;
C++){var A=this.context.environments[C];
if(A&&A.equals(D)){return C
}}},programExpression:function(B){if(B==null){return"this.noop"
}var G=this.environment.children[B],F=G.depths.list,E;
var D=[G.index,"data"];
for(var C=0,A=F.length;
C<A;
C++){E=F[C];
D.push("depth"+(E-1))
}return(F.length===0?"this.program(":"this.programWithDepth(")+D.join(", ")+")"
},register:function(A,B){this.useRegister(A);
this.pushSource(A+" = "+B+";")
},useRegister:function(A){if(!this.registers[A]){this.registers[A]=true;
this.registers.list.push(A)
}},pushStackLiteral:function(A){return this.push(new p(A))
},pushSource:function(A){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
this.pendingContent=undefined
}if(A){this.source.push(A)
}},pushStack:function(B){this.flushInline();
var A=this.incrStack();
if(B){this.pushSource(A+" = "+B+";")
}this.compileStack.push(A);
return A
},replaceStack:function(H){var C="",D=this.isInline(),G,B,E;
if(D){var F=this.popStack(true);
if(F instanceof p){G=F.value;
E=true
}else{B=!this.stackSlot;
var A=!B?this.topStackName():this.incrStack();
C="("+this.push(A)+" = "+F+"),";
G=this.topStack()
}}else{G=this.topStack()
}var I=H.call(this,G);
if(D){if(!E){this.popStack()
}if(B){this.stackSlot--
}this.push("("+C+I+")")
}else{if(!/^stack/.test(G)){G=this.nextStack()
}this.pushSource(G+" = ("+C+I+");")
}return G
},nextStack:function(){return this.pushStack()
},incrStack:function(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var C=this.inlineStack;
if(C.length){this.inlineStack=[];
for(var B=0,A=C.length;
B<A;
B++){var D=C[B];
if(D instanceof p){this.compileStack.push(D)
}else{this.pushStack(D)
}}}},isInline:function(){return this.inlineStack.length
},popStack:function(A){var C=this.isInline(),B=(C?this.inlineStack:this.compileStack).pop();
if(!A&&(B instanceof p)){return B.value
}else{if(!C){if(!this.stackSlot){throw new t("Invalid stack pop")
}this.stackSlot--
}return B
}},topStack:function(B){var A=(this.isInline()?this.inlineStack:this.compileStack),C=A[A.length-1];
if(!B&&(C instanceof p)){return C.value
}else{return C
}},quotedString:function(A){return'"'+A.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},objectLiteral:function(C){var B=[];
for(var A in C){if(C.hasOwnProperty(A)){B.push(this.quotedString(A)+":"+C[A])
}}return"{"+B.join(",")+"}"
},setupHelper:function(E,C,B){var D=[],F=this.setupParams(C,E,D,B);
var A=this.nameLookup("helpers",C,"helper");
return{params:D,paramsInit:F,name:A,callParams:["depth0"].concat(D).join(", ")}
},setupOptions:function(B,F,D){var K={},I=[],J=[],A=[],C,E,H;
K.name=this.quotedString(B);
K.hash=this.popStack();
if(this.trackIds){K.hashIds=this.popStack()
}if(this.stringParams){K.hashTypes=this.popStack();
K.hashContexts=this.popStack()
}E=this.popStack();
H=this.popStack();
if(H||E){if(!H){H="this.noop"
}if(!E){E="this.noop"
}K.fn=H;
K.inverse=E
}var G=F;
while(G--){C=this.popStack();
D[G]=C;
if(this.trackIds){A[G]=this.popStack()
}if(this.stringParams){J[G]=this.popStack();
I[G]=this.popStack()
}}if(this.trackIds){K.ids="["+A.join(",")+"]"
}if(this.stringParams){K.types="["+J.join(",")+"]";
K.contexts="["+I.join(",")+"]"
}if(this.options.data){K.data="data"
}return K
},setupParams:function(C,E,D,B){var A=this.objectLiteral(this.setupOptions(C,E,D));
if(B){this.useRegister("options");
D.push("options");
return"options="+A
}else{D.push(A);
return""
}}};
var o=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
var w=z.RESERVED_WORDS={};
for(var u=0,q=o.length;
u<q;
u++){w[o[u]]=true
}z.isValidJavaScriptVariableName=function(A){return !z.RESERVED_WORDS[A]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(A)
};
x=z;
return x
})(j,d);
var c=(function(w,B,o,s,v){var y;
var n=w;
var u=B;
var r=o.parser;
var q=o.parse;
var x=s.Compiler;
var A=s.compile;
var p=s.precompile;
var C=v;
var z=n.create;
var t=function(){var D=z();
D.compile=function(E,F){return A(E,F,D)
};
D.precompile=function(E,F){return p(E,F,D)
};
D.AST=u;
D.Compiler=x;
D.JavaScriptCompiler=C;
D.Parser=r;
D.parse=q;
return D
};
n=t();
n.create=t;
y=n;
return y
})(f,k,m,e,h);
return c
})();
(function(a){if(typeof exports=="object"&&typeof module=="object"){module.exports=a()
}else{if(typeof define=="function"&&define.amd){return define([],a)
}else{this.CodeMirror=a()
}}})(function(){var co=/gecko\/\d/i.test(navigator.userAgent);
var eC=/MSIE \d/.test(navigator.userAgent);
var bI=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
var dB=eC||bI;
var m=dB&&(eC?document.documentMode||6:bI[1]);
var cW=/WebKit\//.test(navigator.userAgent);
var dE=cW&&/Qt\/\d+\.\d+/.test(navigator.userAgent);
var c8=/Chrome\//.test(navigator.userAgent);
var dT=/Opera\//.test(navigator.userAgent);
var aB=/Apple Computer/.test(navigator.vendor);
var a7=/KHTML\//.test(navigator.userAgent);
var c3=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
var fm=/PhantomJS/.test(navigator.userAgent);
var eT=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent);
var d7=eT||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
var b6=eT||/Mac/.test(navigator.platform);
var aM=/win/i.test(navigator.platform);
var aU=dT&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);
if(aU){aU=Number(aU[1])
}if(aU&&aU>=15){dT=false;
cW=true
}var bP=b6&&(dE||dT&&(aU==null||aU<12.11));
var fW=co||(dB&&m>=9);
var fZ=false,a3=false;
function K(f4,f5){if(!(this instanceof K)){return new K(f4,f5)
}this.options=f5=f5?aK(f5):{};
aK(eV,f5,false);
cd(f5);
var f9=f5.value;
if(typeof f9=="string"){f9=new at(f9,f5.mode)
}this.doc=f9;
var f8=this.display=new eA(f4,f9);
f8.wrapper.CodeMirror=this;
d3(this);
cM(this);
if(f5.lineWrapping){this.display.wrapper.className+=" CodeMirror-wrap"
}if(f5.autofocus&&!d7){er(this)
}this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:false,focused:false,suppressEdits:false,pasteIncoming:false,cutIncoming:false,draggingText:false,highlight:new f3(),keySeq:null};
if(dB&&m<11){setTimeout(cv(fg,this,true),20)
}fH(this);
bf();
cG(this);
this.curOp.forceUpdate=true;
d2(this,f9);
if((f5.autofocus&&!d7)||dF()==f8.input){setTimeout(cv(cA,this),20)
}else{aR(this)
}for(var f7 in bb){if(bb.hasOwnProperty(f7)){bb[f7](this,f5[f7],cb)
}}dW(this);
for(var f6=0;
f6<a4.length;
++f6){a4[f6](this)
}am(this)
}function eA(f4,f6){var f7=this;
var f5=f7.input=fO("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
if(cW){f5.style.width="1000px"
}else{f5.setAttribute("wrap","off")
}if(eT){f5.style.border="1px solid black"
}f5.setAttribute("autocorrect","off");
f5.setAttribute("autocapitalize","off");
f5.setAttribute("spellcheck","false");
f7.inputDiv=fO("div",[f5],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");
f7.scrollbarH=fO("div",[fO("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");
f7.scrollbarV=fO("div",[fO("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar");
f7.scrollbarFiller=fO("div",null,"CodeMirror-scrollbar-filler");
f7.gutterFiller=fO("div",null,"CodeMirror-gutter-filler");
f7.lineDiv=fO("div",null,"CodeMirror-code");
f7.selectionDiv=fO("div",null,null,"position: relative; z-index: 1");
f7.cursorDiv=fO("div",null,"CodeMirror-cursors");
f7.measure=fO("div",null,"CodeMirror-measure");
f7.lineMeasure=fO("div",null,"CodeMirror-measure");
f7.lineSpace=fO("div",[f7.measure,f7.lineMeasure,f7.selectionDiv,f7.cursorDiv,f7.lineDiv],null,"position: relative; outline: none");
f7.mover=fO("div",[fO("div",[f7.lineSpace],"CodeMirror-lines")],null,"position: relative");
f7.sizer=fO("div",[f7.mover],"CodeMirror-sizer");
f7.heightForcer=fO("div",null,null,"position: absolute; height: "+bh+"px; width: 1px;");
f7.gutters=fO("div",null,"CodeMirror-gutters");
f7.lineGutter=null;
f7.scroller=fO("div",[f7.sizer,f7.heightForcer,f7.gutters],"CodeMirror-scroll");
f7.scroller.setAttribute("tabIndex","-1");
f7.wrapper=fO("div",[f7.inputDiv,f7.scrollbarH,f7.scrollbarV,f7.scrollbarFiller,f7.gutterFiller,f7.scroller],"CodeMirror");
if(dB&&m<8){f7.gutters.style.zIndex=-1;
f7.scroller.style.paddingRight=0
}if(eT){f5.style.width="0px"
}if(!cW){f7.scroller.draggable=true
}if(a7){f7.inputDiv.style.height="1px";
f7.inputDiv.style.position="absolute"
}if(dB&&m<8){f7.scrollbarH.style.minHeight=f7.scrollbarV.style.minWidth="18px"
}if(f4){if(f4.appendChild){f4.appendChild(f7.wrapper)
}else{f4(f7.wrapper)
}}f7.viewFrom=f7.viewTo=f6.first;
f7.view=[];
f7.externalMeasured=null;
f7.viewOffset=0;
f7.lastWrapHeight=f7.lastWrapWidth=0;
f7.updateLineNumbers=null;
f7.lineNumWidth=f7.lineNumInnerWidth=f7.lineNumChars=null;
f7.prevInput="";
f7.alignWidgets=false;
f7.pollingFast=false;
f7.poll=new f3();
f7.cachedCharWidth=f7.cachedTextHeight=f7.cachedPaddingH=null;
f7.inaccurateSelection=false;
f7.maxLine=null;
f7.maxLineLength=0;
f7.maxLineChanged=false;
f7.wheelDX=f7.wheelDY=f7.wheelStartX=f7.wheelStartY=null;
f7.shift=false;
f7.selForContextMenu=null
}function bq(f4){f4.doc.mode=K.getMode(f4.options,f4.doc.modeOption);
ec(f4)
}function ec(f4){f4.doc.iter(function(f5){if(f5.stateAfter){f5.stateAfter=null
}if(f5.styles){f5.styles=null
}});
f4.doc.frontier=f4.doc.first;
d6(f4,100);
f4.state.modeGen++;
if(f4.curOp){ah(f4)
}}function ey(f4){if(f4.options.lineWrapping){fs(f4.display.wrapper,"CodeMirror-wrap");
f4.display.sizer.style.minWidth=""
}else{f(f4.display.wrapper,"CodeMirror-wrap");
g(f4)
}Z(f4);
ah(f4);
ak(f4);
setTimeout(function(){eQ(f4)
},100)
}function ba(f4){var f6=aT(f4.display),f5=f4.options.lineWrapping;
var f7=f5&&Math.max(5,f4.display.scroller.clientWidth/dv(f4.display)-3);
return function(f9){if(fo(f4.doc,f9)){return 0
}var f8=0;
if(f9.widgets){for(var ga=0;
ga<f9.widgets.length;
ga++){if(f9.widgets[ga].height){f8+=f9.widgets[ga].height
}}}if(f5){return f8+(Math.ceil(f9.text.length/f7)||1)*f6
}else{return f8+f6
}}
}function Z(f4){var f6=f4.doc,f5=ba(f4);
f6.iter(function(f7){var f8=f5(f7);
if(f8!=f7.height){fS(f7,f8)
}})
}function cM(f4){f4.display.wrapper.className=f4.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+f4.options.theme.replace(/(^|\s)\s*/g," cm-s-");
ak(f4)
}function dn(f4){d3(f4);
ah(f4);
setTimeout(function(){ew(f4)
},20)
}function d3(f4){var f5=f4.display.gutters,f9=f4.options.gutters;
dS(f5);
for(var f6=0;
f6<f9.length;
++f6){var f7=f9[f6];
var f8=f5.appendChild(fO("div",null,"CodeMirror-gutter "+f7));
if(f7=="CodeMirror-linenumbers"){f4.display.lineGutter=f8;
f8.style.width=(f4.display.lineNumWidth||1)+"px"
}}f5.style.display=f6?"":"none";
c0(f4)
}function c0(f4){var f5=f4.display.gutters.offsetWidth;
f4.display.sizer.style.marginLeft=f5+"px";
f4.display.scrollbarH.style.left=f4.options.fixedGutter?f5+"px":0
}function ed(f6){if(f6.height==0){return 0
}var f5=f6.text.length,f4,f8=f6;
while(f4=eG(f8)){var f7=f4.find(0,true);
f8=f7.from.line;
f5+=f7.from.ch-f7.to.ch
}f8=f6;
while(f4=em(f8)){var f7=f4.find(0,true);
f5-=f8.text.length-f7.from.ch;
f8=f7.to.line;
f5+=f8.text.length-f7.to.ch
}return f5
}function g(f4){var f6=f4.display,f5=f4.doc;
f6.maxLine=e6(f5,f5.first);
f6.maxLineLength=ed(f6.maxLine);
f6.maxLineChanged=true;
f5.iter(function(f8){var f7=ed(f8);
if(f7>f6.maxLineLength){f6.maxLineLength=f7;
f6.maxLine=f8
}})
}function cd(f4){var f5=dd(f4.gutters,"CodeMirror-linenumbers");
if(f5==-1&&f4.lineNumbers){f4.gutters=f4.gutters.concat(["CodeMirror-linenumbers"])
}else{if(f5>-1&&!f4.lineNumbers){f4.gutters=f4.gutters.slice(0);
f4.gutters.splice(f5,1)
}}}function cO(f4){return f4.display.scroller.clientHeight-f4.display.wrapper.clientHeight<bh-3
}function ds(f5){var f4=f5.display.scroller;
return{clientHeight:f4.clientHeight,barHeight:f5.display.scrollbarV.clientHeight,scrollWidth:f4.scrollWidth,clientWidth:f4.clientWidth,hScrollbarTakesSpace:cO(f5),barWidth:f5.display.scrollbarH.clientWidth,docHeight:Math.round(f5.doc.height+bH(f5.display))}
}function eQ(gb,f4){if(!f4){f4=ds(gb)
}var f8=gb.display,f5=l(f8.measure);
var gc=f4.docHeight+bh;
var f6=f4.scrollWidth>f4.clientWidth;
if(f6&&f4.scrollWidth<=f4.clientWidth+1&&f5>0&&!f4.hScrollbarTakesSpace){f6=false
}var f7=gc>f4.clientHeight;
if(f7){f8.scrollbarV.style.display="block";
f8.scrollbarV.style.bottom=f6?f5+"px":"0";
f8.scrollbarV.firstChild.style.height=Math.max(0,gc-f4.clientHeight+(f4.barHeight||f8.scrollbarV.clientHeight))+"px"
}else{f8.scrollbarV.style.display="";
f8.scrollbarV.firstChild.style.height="0"
}if(f6){f8.scrollbarH.style.display="block";
f8.scrollbarH.style.right=f7?f5+"px":"0";
f8.scrollbarH.firstChild.style.width=(f4.scrollWidth-f4.clientWidth+(f4.barWidth||f8.scrollbarH.clientWidth))+"px"
}else{f8.scrollbarH.style.display="";
f8.scrollbarH.firstChild.style.width="0"
}if(f6&&f7){f8.scrollbarFiller.style.display="block";
f8.scrollbarFiller.style.height=f8.scrollbarFiller.style.width=f5+"px"
}else{f8.scrollbarFiller.style.display=""
}if(f6&&gb.options.coverGutterNextToScrollbar&&gb.options.fixedGutter){f8.gutterFiller.style.display="block";
f8.gutterFiller.style.height=f5+"px";
f8.gutterFiller.style.width=f8.gutters.offsetWidth+"px"
}else{f8.gutterFiller.style.display=""
}if(!gb.state.checkedOverlayScrollbar&&f4.clientHeight>0){if(f5===0){var ga=b6&&!c3?"12px":"18px";
f8.scrollbarV.style.minWidth=f8.scrollbarH.style.minHeight=ga;
var f9=function(gd){if(N(gd)!=f8.scrollbarV&&N(gd)!=f8.scrollbarH){cY(gb,ek)(gd)
}};
bW(f8.scrollbarV,"mousedown",f9);
bW(f8.scrollbarH,"mousedown",f9)
}gb.state.checkedOverlayScrollbar=true
}}function b5(f7,gb,f6){var f8=f6&&f6.top!=null?Math.max(0,f6.top):f7.scroller.scrollTop;
f8=Math.floor(f8-eZ(f7));
var f4=f6&&f6.bottom!=null?f6.bottom:f8+f7.wrapper.clientHeight;
var f9=bF(gb,f8),ga=bF(gb,f4);
if(f6&&f6.ensure){var f5=f6.ensure.from.line,gc=f6.ensure.to.line;
if(f5<f9){return{from:f5,to:bF(gb,bL(e6(gb,f5))+f7.wrapper.clientHeight)}
}if(Math.min(gc,gb.lastLine())>=ga){return{from:bF(gb,bL(e6(gb,gc))-f7.wrapper.clientHeight),to:gc}
}}return{from:f9,to:Math.max(ga,f9+1)}
}function ew(gc){var ga=gc.display,gb=ga.view;
if(!ga.alignWidgets&&(!ga.gutters.firstChild||!gc.options.fixedGutter)){return
}var f8=dO(ga)-ga.scroller.scrollLeft+gc.doc.scrollLeft;
var f4=ga.gutters.offsetWidth,f5=f8+"px";
for(var f7=0;
f7<gb.length;
f7++){if(!gb[f7].hidden){if(gc.options.fixedGutter&&gb[f7].gutter){gb[f7].gutter.style.left=f5
}var f9=gb[f7].alignable;
if(f9){for(var f6=0;
f6<f9.length;
f6++){f9[f6].style.left=f5
}}}}if(gc.options.fixedGutter){ga.gutters.style.left=(f8+f4)+"px"
}}function dW(f4){if(!f4.options.lineNumbers){return false
}var f9=f4.doc,f5=ej(f4.options,f9.first+f9.size-1),f8=f4.display;
if(f5.length!=f8.lineNumChars){var ga=f8.measure.appendChild(fO("div",[fO("div",f5)],"CodeMirror-linenumber CodeMirror-gutter-elt"));
var f6=ga.firstChild.offsetWidth,f7=ga.offsetWidth-f6;
f8.lineGutter.style.width="";
f8.lineNumInnerWidth=Math.max(f6,f8.lineGutter.offsetWidth-f7);
f8.lineNumWidth=f8.lineNumInnerWidth+f7;
f8.lineNumChars=f8.lineNumInnerWidth?f5.length:-1;
f8.lineGutter.style.width=f8.lineNumWidth+"px";
c0(f4);
return true
}return false
}function ej(f4,f5){return String(f4.lineNumberFormatter(f5+f4.firstLineNumber))
}function dO(f4){return f4.scroller.getBoundingClientRect().left-f4.sizer.getBoundingClientRect().left
}function aG(f5,f4,f6){var f7=f5.display;
this.viewport=f4;
this.visible=b5(f7,f5.doc,f4);
this.editorIsHidden=!f7.wrapper.offsetWidth;
this.wrapperHeight=f7.wrapper.clientHeight;
this.wrapperWidth=f7.wrapper.clientWidth;
this.oldViewFrom=f7.viewFrom;
this.oldViewTo=f7.viewTo;
this.oldScrollerWidth=f7.scroller.clientWidth;
this.force=f6;
this.dims=e4(f5)
}function E(gd,f7){var f8=gd.display,gc=gd.doc;
if(f7.editorIsHidden){eo(gd);
return false
}if(!f7.force&&f7.visible.from>=f8.viewFrom&&f7.visible.to<=f8.viewTo&&(f8.updateLineNumbers==null||f8.updateLineNumbers>=f8.viewTo)&&c7(gd)==0){return false
}if(dW(gd)){eo(gd);
f7.dims=e4(gd)
}var f6=gc.first+gc.size;
var ga=Math.max(f7.visible.from-gd.options.viewportMargin,gc.first);
var gb=Math.min(f6,f7.visible.to+gd.options.viewportMargin);
if(f8.viewFrom<ga&&ga-f8.viewFrom<20){ga=Math.max(gc.first,f8.viewFrom)
}if(f8.viewTo>gb&&f8.viewTo-gb<20){gb=Math.min(f6,f8.viewTo)
}if(a3){ga=aS(gd.doc,ga);
gb=dU(gd.doc,gb)
}var f5=ga!=f8.viewFrom||gb!=f8.viewTo||f8.lastWrapHeight!=f7.wrapperHeight||f8.lastWrapWidth!=f7.wrapperWidth;
cP(gd,ga,gb);
f8.viewOffset=bL(e6(gd.doc,f8.viewFrom));
gd.display.mover.style.top=f8.viewOffset+"px";
var f4=c7(gd);
if(!f5&&f4==0&&!f7.force&&(f8.updateLineNumbers==null||f8.updateLineNumbers>=f8.viewTo)){return false
}var f9=dF();
if(f4>4){f8.lineDiv.style.display="none"
}cm(gd,f8.updateLineNumbers,f7.dims);
if(f4>4){f8.lineDiv.style.display=""
}if(f9&&dF()!=f9&&f9.offsetHeight){f9.focus()
}dS(f8.cursorDiv);
dS(f8.selectionDiv);
if(f5){f8.lastWrapHeight=f7.wrapperHeight;
f8.lastWrapWidth=f7.wrapperWidth;
d6(gd,400)
}f8.updateLineNumbers=null;
return true
}function cj(f5,f9){var f7=f9.force,f4=f9.viewport;
for(var f8=true;
;
f8=false){if(f8&&f5.options.lineWrapping&&f9.oldScrollerWidth!=f5.display.scroller.clientWidth){f7=true
}else{f7=false;
if(f4&&f4.top!=null){f4={top:Math.min(f5.doc.height+bH(f5.display)-bh-f5.display.scroller.clientHeight,f4.top)}
}f9.visible=b5(f5.display,f5.doc,f4);
if(f9.visible.from>=f5.display.viewFrom&&f9.visible.to<=f5.display.viewTo){break
}}if(!E(f5,f9)){break
}a5(f5);
var f6=ds(f5);
bB(f5);
dr(f5,f6);
eQ(f5,f6)
}ae(f5,"update",f5);
if(f5.display.viewFrom!=f9.oldViewFrom||f5.display.viewTo!=f9.oldViewTo){ae(f5,"viewportChange",f5,f5.display.viewFrom,f5.display.viewTo)
}}function dK(f5,f4){var f7=new aG(f5,f4);
if(E(f5,f7)){a5(f5);
cj(f5,f7);
var f6=ds(f5);
bB(f5);
dr(f5,f6);
eQ(f5,f6)
}}function dr(f4,f5){f4.display.sizer.style.minHeight=f4.display.heightForcer.style.top=f5.docHeight+"px";
f4.display.gutters.style.height=Math.max(f5.docHeight,f5.clientHeight-bh)+"px"
}function fR(f4,f5){if(f4.display.sizer.offsetWidth+f4.display.gutters.offsetWidth<f4.display.scroller.clientWidth-1){f4.display.sizer.style.minHeight=f4.display.heightForcer.style.top="0px";
f4.display.gutters.style.height=f5.docHeight+"px"
}}function a5(gb){var f9=gb.display;
var f5=f9.lineDiv.offsetTop;
for(var f6=0;
f6<f9.view.length;
f6++){var gc=f9.view[f6],gd;
if(gc.hidden){continue
}if(dB&&m<8){var f8=gc.node.offsetTop+gc.node.offsetHeight;
gd=f8-f5;
f5=f8
}else{var f7=gc.node.getBoundingClientRect();
gd=f7.bottom-f7.top
}var ga=gc.line.height-gd;
if(gd<2){gd=aT(f9)
}if(ga>0.001||ga<-0.001){fS(gc.line,gd);
ca(gc.line);
if(gc.rest){for(var f4=0;
f4<gc.rest.length;
f4++){ca(gc.rest[f4])
}}}}}function ca(f4){if(f4.widgets){for(var f5=0;
f5<f4.widgets.length;
++f5){f4.widgets[f5].height=f4.widgets[f5].node.offsetHeight
}}}function e4(f4){var f9=f4.display,f7={},f6={};
var f8=f9.gutters.clientLeft;
for(var ga=f9.gutters.firstChild,f5=0;
ga;
ga=ga.nextSibling,++f5){f7[f4.options.gutters[f5]]=ga.offsetLeft+ga.clientLeft+f8;
f6[f4.options.gutters[f5]]=ga.clientWidth
}return{fixedPos:dO(f9),gutterTotalWidth:f9.gutters.offsetWidth,gutterLeft:f7,gutterWidth:f6,wrapperWidth:f9.wrapper.clientWidth}
}function cm(gf,f6,ge){var gb=gf.display,gh=gf.options.lineNumbers;
var f4=gb.lineDiv,gg=f4.firstChild;
function ga(gj){var gi=gj.nextSibling;
if(cW&&b6&&gf.display.currentWheelTarget==gj){gj.style.display="none"
}else{gj.parentNode.removeChild(gj)
}return gi
}var gc=gb.view,f9=gb.viewFrom;
for(var f7=0;
f7<gc.length;
f7++){var f8=gc[f7];
if(f8.hidden){}else{if(!f8.node){var f5=aD(gf,f8,f9,ge);
f4.insertBefore(f5,gg)
}else{while(gg!=f8.node){gg=ga(gg)
}var gd=gh&&f6!=null&&f6<=f9&&f8.lineNumber;
if(f8.changes){if(dd(f8.changes,"gutter")>-1){gd=false
}ab(gf,f8,f9,ge)
}if(gd){dS(f8.lineNumber);
f8.lineNumber.appendChild(document.createTextNode(ej(gf.options,f9)))
}gg=f8.node.nextSibling
}}f9+=f8.size
}while(gg){gg=ga(gg)
}}function ab(f4,f6,f8,f9){for(var f5=0;
f5<f6.changes.length;
f5++){var f7=f6.changes[f5];
if(f7=="text"){fc(f4,f6)
}else{if(f7=="gutter"){db(f4,f6,f8,f9)
}else{if(f7=="class"){dy(f6)
}else{if(f7=="widget"){ao(f6,f9)
}}}}}f6.changes=null
}function fA(f4){if(f4.node==f4.text){f4.node=fO("div",null,null,"position: relative");
if(f4.text.parentNode){f4.text.parentNode.replaceChild(f4.node,f4.text)
}f4.node.appendChild(f4.text);
if(dB&&m<8){f4.node.style.zIndex=2
}}return f4.node
}function el(f5){var f4=f5.bgClass?f5.bgClass+" "+(f5.line.bgClass||""):f5.line.bgClass;
if(f4){f4+=" CodeMirror-linebackground"
}if(f5.background){if(f4){f5.background.className=f4
}else{f5.background.parentNode.removeChild(f5.background);
f5.background=null
}}else{if(f4){var f6=fA(f5);
f5.background=f6.insertBefore(fO("div",null,f4),f6.firstChild)
}}}function dM(f4,f5){var f6=f4.display.externalMeasured;
if(f6&&f6.line==f5.line){f4.display.externalMeasured=null;
f5.measure=f6.measure;
return f6.built
}return eJ(f4,f5)
}function fc(f4,f7){var f5=f7.text.className;
var f6=dM(f4,f7);
if(f7.text==f7.node){f7.node=f6.pre
}f7.text.parentNode.replaceChild(f6.pre,f7.text);
f7.text=f6.pre;
if(f6.bgClass!=f7.bgClass||f6.textClass!=f7.textClass){f7.bgClass=f6.bgClass;
f7.textClass=f6.textClass;
dy(f7)
}else{if(f5){f7.text.className=f5
}}}function dy(f5){el(f5);
if(f5.line.wrapClass){fA(f5).className=f5.line.wrapClass
}else{if(f5.node!=f5.text){f5.node.className=""
}}var f4=f5.textClass?f5.textClass+" "+(f5.line.textClass||""):f5.line.textClass;
f5.text.className=f4||""
}function db(gc,ga,f9,gb){if(ga.gutter){ga.node.removeChild(ga.gutter);
ga.gutter=null
}var f7=ga.line.gutterMarkers;
if(gc.options.lineNumbers||f7){var f5=fA(ga);
var f8=ga.gutter=f5.insertBefore(fO("div",null,"CodeMirror-gutter-wrapper","left: "+(gc.options.fixedGutter?gb.fixedPos:-gb.gutterTotalWidth)+"px; width: "+gb.gutterTotalWidth+"px"),ga.text);
if(ga.line.gutterClass){f8.className+=" "+ga.line.gutterClass
}if(gc.options.lineNumbers&&(!f7||!f7["CodeMirror-linenumbers"])){ga.lineNumber=f8.appendChild(fO("div",ej(gc.options,f9),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+gb.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+gc.display.lineNumInnerWidth+"px"))
}if(f7){for(var f6=0;
f6<gc.options.gutters.length;
++f6){var f4=gc.options.gutters[f6],gd=f7.hasOwnProperty(f4)&&f7[f4];
if(gd){f8.appendChild(fO("div",[gd],"CodeMirror-gutter-elt","left: "+gb.gutterLeft[f4]+"px; width: "+gb.gutterWidth[f4]+"px"))
}}}}}function ao(f4,f7){if(f4.alignable){f4.alignable=null
}for(var f6=f4.node.firstChild,f5;
f6;
f6=f5){var f5=f6.nextSibling;
if(f6.className=="CodeMirror-linewidget"){f4.node.removeChild(f6)
}}fl(f4,f7)
}function aD(f4,f6,f7,f8){var f5=dM(f4,f6);
f6.text=f6.node=f5.pre;
if(f5.bgClass){f6.bgClass=f5.bgClass
}if(f5.textClass){f6.textClass=f5.textClass
}dy(f6);
db(f4,f6,f7,f8);
fl(f6,f8);
return f6.node
}function fl(f5,f6){fT(f5.line,f5,f6,true);
if(f5.rest){for(var f4=0;
f4<f5.rest.length;
f4++){fT(f5.rest[f4],f5,f6,false)
}}}function fT(gc,f9,gb,f7){if(!gc.widgets){return
}var f4=fA(f9);
for(var f6=0,ga=gc.widgets;
f6<ga.length;
++f6){var f8=ga[f6],f5=fO("div",[f8.node],"CodeMirror-linewidget");
if(!f8.handleMouseEvents){f5.ignoreEvents=true
}bE(f8,f5,f9,gb);
if(f7&&f8.above){f4.insertBefore(f5,f9.gutter||f9.text)
}else{f4.appendChild(f5)
}ae(f8,"redraw")
}}function bE(f7,f6,f4,f8){if(f7.noHScroll){(f4.alignable||(f4.alignable=[])).push(f6);
var f5=f8.wrapperWidth;
f6.style.left=f8.fixedPos+"px";
if(!f7.coverGutter){f5-=f8.gutterTotalWidth;
f6.style.paddingLeft=f8.gutterTotalWidth+"px"
}f6.style.width=f5+"px"
}if(f7.coverGutter){f6.style.zIndex=5;
f6.style.position="relative";
if(!f7.noHScroll){f6.style.marginLeft=-f8.gutterTotalWidth+"px"
}}}var Y=K.Pos=function(f4,f5){if(!(this instanceof Y)){return new Y(f4,f5)
}this.line=f4;
this.ch=f5
};
var ce=K.cmpPos=function(f5,f4){return f5.line-f4.line||f5.ch-f4.ch
};
function ci(f4){return Y(f4.line,f4.ch)
}function bw(f5,f4){return ce(f5,f4)<0?f4:f5
}function ar(f5,f4){return ce(f5,f4)<0?f5:f4
}function fP(f4,f5){this.ranges=f4;
this.primIndex=f5
}fP.prototype={primary:function(){return this.ranges[this.primIndex]
},equals:function(f4){if(f4==this){return true
}if(f4.primIndex!=this.primIndex||f4.ranges.length!=this.ranges.length){return false
}for(var f6=0;
f6<this.ranges.length;
f6++){var f5=this.ranges[f6],f7=f4.ranges[f6];
if(ce(f5.anchor,f7.anchor)!=0||ce(f5.head,f7.head)!=0){return false
}}return true
},deepCopy:function(){for(var f4=[],f5=0;
f5<this.ranges.length;
f5++){f4[f5]=new dP(ci(this.ranges[f5].anchor),ci(this.ranges[f5].head))
}return new fP(f4,this.primIndex)
},somethingSelected:function(){for(var f4=0;
f4<this.ranges.length;
f4++){if(!this.ranges[f4].empty()){return true
}}return false
},contains:function(f7,f4){if(!f4){f4=f7
}for(var f6=0;
f6<this.ranges.length;
f6++){var f5=this.ranges[f6];
if(ce(f4,f5.from())>=0&&ce(f7,f5.to())<=0){return f6
}}return -1
}};
function dP(f4,f5){this.anchor=f4;
this.head=f5
}dP.prototype={from:function(){return ar(this.anchor,this.head)
},to:function(){return bw(this.anchor,this.head)
},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch
}};
function cw(f4,gb){var f6=f4[gb];
f4.sort(function(ge,gd){return ce(ge.from(),gd.from())
});
gb=dd(f4,f6);
for(var f8=1;
f8<f4.length;
f8++){var gc=f4[f8],f5=f4[f8-1];
if(ce(f5.to(),gc.from())>=0){var f9=ar(f5.from(),gc.from()),ga=bw(f5.to(),gc.to());
var f7=f5.empty()?gc.from()==gc.head:f5.from()==f5.head;
if(f8<=gb){--gb
}f4.splice(--f8,2,new dP(f7?ga:f9,f7?f9:ga))
}}return new fP(f4,gb)
}function eK(f4,f5){return new fP([new dP(f4,f5||f4)],0)
}function c1(f4,f5){return Math.max(f4.first,Math.min(f5,f4.first+f4.size-1))
}function fB(f5,f6){if(f6.line<f5.first){return Y(f5.first,0)
}var f4=f5.first+f5.size-1;
if(f6.line>f4){return Y(f4,e6(f5,f4).text.length)
}return fk(f6,e6(f5,f6.line).text.length)
}function fk(f6,f5){var f4=f6.ch;
if(f4==null||f4>f5){return Y(f6.line,f5)
}else{if(f4<0){return Y(f6.line,0)
}else{return f6
}}}function b8(f5,f4){return f4>=f5.first&&f4<f5.first+f5.size
}function dQ(f6,f7){for(var f4=[],f5=0;
f5<f7.length;
f5++){f4[f5]=fB(f6,f7[f5])
}return f4
}function fn(f9,f5,f8,f4){if(f9.cm&&f9.cm.display.shift||f9.extend){var f7=f5.anchor;
if(f4){var f6=ce(f8,f7)<0;
if(f6!=(ce(f4,f7)<0)){f7=f8;
f8=f4
}else{if(f6!=(ce(f8,f4)<0)){f8=f4
}}}return new dP(f7,f8)
}else{return new dP(f4||f8,f8)
}}function fL(f7,f6,f4,f5){bT(f7,new fP([fn(f7,f7.sel.primary(),f6,f4)],0),f5)
}function aw(f9,f8,f6){for(var f5=[],f7=0;
f7<f9.sel.ranges.length;
f7++){f5[f7]=fn(f9,f9.sel.ranges[f7],f8[f7],null)
}var f4=cw(f5,f9.sel.primIndex);
bT(f9,f4,f6)
}function e(f8,f7,f5,f6){var f4=f8.sel.ranges.slice(0);
f4[f7]=f5;
bT(f8,cw(f4,f8.sel.primIndex),f6)
}function I(f7,f5,f6,f4){bT(f7,eK(f5,f6),f4)
}function c(f6,f4){var f5={ranges:f4.ranges,update:function(f7){this.ranges=[];
for(var f8=0;
f8<f7.length;
f8++){this.ranges[f8]=new dP(fB(f6,f7[f8].anchor),fB(f6,f7[f8].head))
}}};
aC(f6,"beforeSelectionChange",f6,f5);
if(f6.cm){aC(f6.cm,"beforeSelectionChange",f6.cm,f5)
}if(f5.ranges!=f4.ranges){return cw(f5.ranges,f5.ranges.length-1)
}else{return f4
}}function eY(f8,f7,f5){var f4=f8.history.done,f6=fz(f4);
if(f6&&f6.ranges){f4[f4.length-1]=f7;
eg(f8,f7,f5)
}else{bT(f8,f7,f5)
}}function bT(f6,f5,f4){eg(f6,f5,f4);
fY(f6,f6.sel,f6.cm?f6.cm.curOp.id:NaN,f4)
}function eg(f7,f6,f5){if(e9(f7,"beforeSelectionChange")||f7.cm&&e9(f7.cm,"beforeSelectionChange")){f6=c(f7,f6)
}var f4=f5&&f5.bias||(ce(f6.primary().head,f7.sel.primary().head)<0?-1:1);
c5(f7,p(f7,f6,f4,true));
if(!(f5&&f5.scroll===false)&&f7.cm){fy(f7.cm)
}}function c5(f5,f4){if(f4.equals(f5.sel)){return
}f5.sel=f4;
if(f5.cm){f5.cm.curOp.updateInput=f5.cm.curOp.selectionChanged=true;
X(f5.cm)
}ae(f5,"cursorActivity",f5)
}function ep(f4){c5(f4,p(f4,f4.sel,null,false),aa)
}function p(gc,f4,f9,ga){var f6;
for(var f7=0;
f7<f4.ranges.length;
f7++){var f8=f4.ranges[f7];
var gb=bU(gc,f8.anchor,f9,ga);
var f5=bU(gc,f8.head,f9,ga);
if(f6||gb!=f8.anchor||f5!=f8.head){if(!f6){f6=f4.ranges.slice(0,f7)
}f6[f7]=new dP(gb,f5)
}}return f6?cw(f6,f4.primIndex):f4
}function bU(gd,gc,f9,ga){var ge=false,f6=gc;
var f7=f9||1;
gd.cantEdit=false;
search:for(;
;
){var gf=e6(gd,f6.line);
if(gf.markedSpans){for(var f8=0;
f8<gf.markedSpans.length;
++f8){var f4=gf.markedSpans[f8],f5=f4.marker;
if((f4.from==null||(f5.inclusiveLeft?f4.from<=f6.ch:f4.from<f6.ch))&&(f4.to==null||(f5.inclusiveRight?f4.to>=f6.ch:f4.to>f6.ch))){if(ga){aC(f5,"beforeCursorEnter");
if(f5.explicitlyCleared){if(!gf.markedSpans){break
}else{--f8;
continue
}}}if(!f5.atomic){continue
}var gb=f5.find(f7<0?-1:1);
if(ce(gb,f6)==0){gb.ch+=f7;
if(gb.ch<0){if(gb.line>gd.first){gb=fB(gd,Y(gb.line-1))
}else{gb=null
}}else{if(gb.ch>gf.text.length){if(gb.line<gd.first+gd.size-1){gb=Y(gb.line+1,0)
}else{gb=null
}}}if(!gb){if(ge){if(!ga){return bU(gd,gc,f9,true)
}gd.cantEdit=true;
return Y(gd.first,0)
}ge=true;
gb=gc;
f7=-f7
}}f6=gb;
continue search
}}}return f6
}}function bk(ge){var ga=ge.display,gd=ge.doc,gf={};
var gc=gf.cursors=document.createDocumentFragment();
var f6=gf.selection=document.createDocumentFragment();
for(var f8=0;
f8<gd.sel.ranges.length;
f8++){var f9=gd.sel.ranges[f8];
var f7=f9.empty();
if(f7||ge.options.showCursorWhenSelecting){C(ge,f9,gc)
}if(!f7){bC(ge,f9,f6)
}}if(ge.options.moveInputWithCursor){var gb=dL(ge,gd.sel.primary().head,"div");
var f4=ga.wrapper.getBoundingClientRect(),f5=ga.lineDiv.getBoundingClientRect();
gf.teTop=Math.max(0,Math.min(ga.wrapper.clientHeight-10,gb.top+f5.top-f4.top));
gf.teLeft=Math.max(0,Math.min(ga.wrapper.clientWidth-10,gb.left+f5.left-f4.left))
}return gf
}function al(f4,f5){bQ(f4.display.cursorDiv,f5.cursors);
bQ(f4.display.selectionDiv,f5.selection);
if(f5.teTop!=null){f4.display.inputDiv.style.top=f5.teTop+"px";
f4.display.inputDiv.style.left=f5.teLeft+"px"
}}function bB(f4){al(f4,bk(f4))
}function C(f4,f7,f6){var f9=dL(f4,f7.head,"div",null,null,!f4.options.singleCursorHeightPerLine);
var f8=f6.appendChild(fO("div","\u00a0","CodeMirror-cursor"));
f8.style.left=f9.left+"px";
f8.style.top=f9.top+"px";
f8.style.height=Math.max(0,f9.bottom-f9.top)*f4.options.cursorHeight+"px";
if(f9.other){var f5=f6.appendChild(fO("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor"));
f5.style.display="";
f5.style.left=f9.other.left+"px";
f5.style.top=f9.other.top+"px";
f5.style.height=(f9.other.bottom-f9.other.top)*0.85+"px"
}}function bC(f8,ge,f9){var gh=f8.display,gl=f8.doc;
var f4=document.createDocumentFragment();
var gd=eW(f8.display),f7=gd.left,gi=gh.lineSpace.offsetWidth-gd.right;
function gf(gp,go,gn,gm){if(go<0){go=0
}go=Math.round(go);
gm=Math.round(gm);
f4.appendChild(fO("div",null,"CodeMirror-selected","position: absolute; left: "+gp+"px; top: "+go+"px; width: "+(gn==null?gi-gp:gn)+"px; height: "+(gm-go)+"px"))
}function f5(gn,gp,gs){var go=e6(gl,gn);
var gq=go.text.length;
var gt,gm;
function gr(gv,gu){return cH(f8,Y(gn,gv),"div",go,gu)
}dV(a(go),gp||0,gs==null?gq:gs,function(gB,gA,gu){var gx=gr(gB,"left"),gy,gz,gw;
if(gB==gA){gy=gx;
gz=gw=gx.left
}else{gy=gr(gA-1,"right");
if(gu=="rtl"){var gv=gx;
gx=gy;
gy=gv
}gz=gx.left;
gw=gy.right
}if(gp==null&&gB==0){gz=f7
}if(gy.top-gx.top>3){gf(gz,gx.top,null,gx.bottom);
gz=f7;
if(gx.bottom<gy.top){gf(gz,gx.bottom,null,gy.top)
}}if(gs==null&&gA==gq){gw=gi
}if(!gt||gx.top<gt.top||gx.top==gt.top&&gx.left<gt.left){gt=gx
}if(!gm||gy.bottom>gm.bottom||gy.bottom==gm.bottom&&gy.right>gm.right){gm=gy
}if(gz<f7+1){gz=f7
}gf(gz,gy.top,gw-gz,gy.bottom)
});
return{start:gt,end:gm}
}var gk=ge.from(),gj=ge.to();
if(gk.line==gj.line){f5(gk.line,gk.ch,gj.ch)
}else{var f6=e6(gl,gk.line),gb=e6(gl,gj.line);
var ga=A(f6)==A(gb);
var gc=f5(gk.line,gk.ch,ga?f6.text.length+1:null).end;
var gg=f5(gj.line,ga?0:null,gj.ch).start;
if(ga){if(gc.top<gg.top-2){gf(gc.right,gc.top,null,gc.bottom);
gf(f7,gg.top,gg.left,gg.bottom)
}else{gf(gc.right,gc.top,gg.left-gc.right,gc.bottom)
}}if(gc.bottom<gg.top){gf(f7,gc.bottom,null,gg.top)
}}f9.appendChild(f4)
}function q(f4){if(!f4.state.focused){return
}var f6=f4.display;
clearInterval(f6.blinker);
var f5=true;
f6.cursorDiv.style.visibility="";
if(f4.options.cursorBlinkRate>0){f6.blinker=setInterval(function(){f6.cursorDiv.style.visibility=(f5=!f5)?"":"hidden"
},f4.options.cursorBlinkRate)
}else{if(f4.options.cursorBlinkRate<0){f6.cursorDiv.style.visibility="hidden"
}}}function d6(f4,f5){if(f4.doc.mode.startState&&f4.doc.frontier<f4.display.viewTo){f4.state.highlight.set(f5,cv(cN,f4))
}}function cN(f4){var f8=f4.doc;
if(f8.frontier<f8.first){f8.frontier=f8.first
}if(f8.frontier>=f4.display.viewTo){return
}var f6=+new Date+f4.options.workTime;
var f7=b2(f8.mode,dt(f4,f8.frontier));
var f5=[];
f8.iter(f8.frontier,Math.min(f8.first+f8.size,f4.display.viewTo+500),function(f9){if(f8.frontier>=f4.display.viewFrom){var gc=f9.styles;
var ge=fr(f4,f9,f7,true);
f9.styles=ge.styles;
var gb=f9.styleClasses,gd=ge.classes;
if(gd){f9.styleClasses=gd
}else{if(gb){f9.styleClasses=null
}}var gf=!gc||gc.length!=f9.styles.length||gb!=gd&&(!gb||!gd||gb.bgClass!=gd.bgClass||gb.textClass!=gd.textClass);
for(var ga=0;
!gf&&ga<gc.length;
++ga){gf=gc[ga]!=f9.styles[ga]
}if(gf){f5.push(f8.frontier)
}f9.stateAfter=b2(f8.mode,f7)
}else{dp(f4,f9.text,f7);
f9.stateAfter=f8.frontier%5==0?b2(f8.mode,f7):null
}++f8.frontier;
if(+new Date>f6){d6(f4,f4.options.workDelay);
return true
}});
if(f5.length){cK(f4,function(){for(var f9=0;
f9<f5.length;
f9++){T(f4,f5[f9],"text")
}})
}}function cy(ga,f4,f7){var f5,f8,f9=ga.doc;
var f6=f7?-1:f4-(ga.doc.mode.innerMode?1000:100);
for(var gd=f4;
gd>f6;
--gd){if(gd<=f9.first){return f9.first
}var gc=e6(f9,gd-1);
if(gc.stateAfter&&(!f7||gd<=f9.frontier)){return gd
}var gb=bS(gc.text,null,ga.options.tabSize);
if(f8==null||f5>gb){f8=gd-1;
f5=gb
}}return f8
}function dt(f4,ga,f5){var f8=f4.doc,f7=f4.display;
if(!f8.mode.startState){return true
}var f9=cy(f4,ga,f5),f6=f9>f8.first&&e6(f8,f9-1).stateAfter;
if(!f6){f6=bZ(f8.mode)
}else{f6=b2(f8.mode,f6)
}f8.iter(f9,ga,function(gb){dp(f4,gb.text,f6);
var gc=f9==ga-1||f9%5==0||f9>=f7.viewFrom&&f9<f7.viewTo;
gb.stateAfter=gc?b2(f8.mode,f6):null;
++f9
});
if(f5){f8.frontier=f9
}return f6
}function eZ(f4){return f4.lineSpace.offsetTop
}function bH(f4){return f4.mover.offsetHeight-f4.lineSpace.offsetHeight
}function eW(f7){if(f7.cachedPaddingH){return f7.cachedPaddingH
}var f6=bQ(f7.measure,fO("pre","x"));
var f4=window.getComputedStyle?window.getComputedStyle(f6):f6.currentStyle;
var f5={left:parseInt(f4.paddingLeft),right:parseInt(f4.paddingRight)};
if(!isNaN(f5.left)&&!isNaN(f5.right)){f7.cachedPaddingH=f5
}return f5
}function ch(gb,f7,ga){var f6=gb.options.lineWrapping;
var f8=f6&&gb.display.scroller.clientWidth;
if(!f7.measure.heights||f6&&f7.measure.width!=f8){var f9=f7.measure.heights=[];
if(f6){f7.measure.width=f8;
var gd=f7.text.firstChild.getClientRects();
for(var f4=0;
f4<gd.length-1;
f4++){var gc=gd[f4],f5=gd[f4+1];
if(Math.abs(gc.bottom-f5.bottom)>2){f9.push((gc.bottom+f5.top)/2-ga.top)
}}}f9.push(ga.bottom-ga.top)
}}function ct(f6,f4,f7){if(f6.line==f4){return{map:f6.measure.map,cache:f6.measure.cache}
}for(var f5=0;
f5<f6.rest.length;
f5++){if(f6.rest[f5]==f4){return{map:f6.measure.maps[f5],cache:f6.measure.caches[f5]}
}}for(var f5=0;
f5<f6.rest.length;
f5++){if(bM(f6.rest[f5])>f7){return{map:f6.measure.maps[f5],cache:f6.measure.caches[f5],before:true}
}}}function cX(f4,f6){f6=A(f6);
var f8=bM(f6);
var f5=f4.display.externalMeasured=new bu(f4.doc,f6,f8);
f5.lineN=f8;
var f7=f5.built=eJ(f4,f5);
f5.text=f7.pre;
bQ(f4.display.lineMeasure,f7.pre);
return f5
}function d8(f4,f5,f7,f6){return F(f4,a0(f4,f5),f7,f6)
}function e2(f4,f6){if(f6>=f4.display.viewFrom&&f6<f4.display.viewTo){return f4.display.view[dj(f4,f6)]
}var f5=f4.display.externalMeasured;
if(f5&&f6>=f5.lineN&&f6<f5.lineN+f5.size){return f5
}}function a0(f4,f6){var f7=bM(f6);
var f5=e2(f4,f7);
if(f5&&!f5.text){f5=null
}else{if(f5&&f5.changes){ab(f4,f5,f7,e4(f4))
}}if(!f5){f5=cX(f4,f6)
}var f8=ct(f5,f6,f7);
return{line:f6,view:f5,rect:null,map:f8.map,cache:f8.cache,before:f8.before,hasHeights:false}
}function F(f4,ga,f8,f5,f7){if(ga.before){f8=-1
}var f6=f8+(f5||""),f9;
if(ga.cache.hasOwnProperty(f6)){f9=ga.cache[f6]
}else{if(!ga.rect){ga.rect=ga.view.text.getBoundingClientRect()
}if(!ga.hasHeights){ch(f4,ga.view,ga.rect);
ga.hasHeights=true
}f9=k(f4,ga,f8,f5);
if(!f9.bogus){ga.cache[f6]=f9
}}return{left:f9.left,right:f9.right,top:f7?f9.rtop:f9.top,bottom:f7?f9.rbottom:f9.bottom}
}var es={left:0,right:0,top:0,bottom:0};
function k(gb,gl,gd,f9){var gp=gl.map;
var gi,f8,f7,f4;
for(var gk=0;
gk<gp.length;
gk+=3){var gn=gp[gk],gj=gp[gk+1];
if(gd<gn){f8=0;
f7=1;
f4="left"
}else{if(gd<gj){f8=gd-gn;
f7=f8+1
}else{if(gk==gp.length-3||gd==gj&&gp[gk+3]>gd){f7=gj-gn;
f8=f7-1;
if(gd>=gj){f4="right"
}}}}if(f8!=null){gi=gp[gk+2];
if(gn==gj&&f9==(gi.insertLeft?"left":"right")){f4=f9
}if(f9=="left"&&f8==0){while(gk&&gp[gk-2]==gp[gk-3]&&gp[gk-1].insertLeft){gi=gp[(gk-=3)+2];
f4="left"
}}if(f9=="right"&&f8==gj-gn){while(gk<gp.length-3&&gp[gk+3]==gp[gk+4]&&!gp[gk+5].insertLeft){gi=gp[(gk+=3)+2];
f4="right"
}}break
}}var f5;
if(gi.nodeType==3){for(var gk=0;
gk<4;
gk++){while(f8&&fh(gl.line.text.charAt(gn+f8))){--f8
}while(gn+f7<gj&&fh(gl.line.text.charAt(gn+f7))){++f7
}if(dB&&m<9&&f8==0&&f7==gj-gn){f5=gi.parentNode.getBoundingClientRect()
}else{if(dB&&gb.options.lineWrapping){var f6=cl(gi,f8,f7).getClientRects();
if(f6.length){f5=f6[f9=="right"?f6.length-1:0]
}else{f5=es
}}else{f5=cl(gi,f8,f7).getBoundingClientRect()||es
}}if(f5.left||f5.right||f8==0){break
}f7=f8;
f8=f8-1;
f4="right"
}if(dB&&m<11){f5=eF(gb.display.measure,f5)
}}else{if(f8>0){f4=f9="right"
}var f6;
if(gb.options.lineWrapping&&(f6=gi.getClientRects()).length>1){f5=f6[f9=="right"?f6.length-1:0]
}else{f5=gi.getBoundingClientRect()
}}if(dB&&m<9&&!f8&&(!f5||!f5.left&&!f5.right)){var ga=gi.parentNode.getClientRects()[0];
if(ga){f5={left:ga.left,right:ga.left+dv(gb.display),top:ga.top,bottom:ga.bottom}
}else{f5=es
}}var gg=f5.top-gl.rect.top,ge=f5.bottom-gl.rect.top;
var go=(gg+ge)/2;
var gm=gl.view.measure.heights;
for(var gk=0;
gk<gm.length-1;
gk++){if(go<gm[gk]){break
}}var gh=gk?gm[gk-1]:0,gf=gm[gk];
var gc={left:(f4=="right"?f5.right:f5.left)-gl.rect.left,right:(f4=="left"?f5.left:f5.right)-gl.rect.left,top:gh,bottom:gf};
if(!f5.left&&!f5.right){gc.bogus=true
}if(!gb.options.singleCursorHeightPerLine){gc.rtop=gg;
gc.rbottom=ge
}return gc
}function eF(f6,f7){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!aI(f6)){return f7
}var f5=screen.logicalXDPI/screen.deviceXDPI;
var f4=screen.logicalYDPI/screen.deviceYDPI;
return{left:f7.left*f5,right:f7.right*f5,top:f7.top*f4,bottom:f7.bottom*f4}
}function au(f5){if(f5.measure){f5.measure.cache={};
f5.measure.heights=null;
if(f5.rest){for(var f4=0;
f4<f5.rest.length;
f4++){f5.measure.caches[f4]={}
}}}}function aL(f4){f4.display.externalMeasure=null;
dS(f4.display.lineMeasure);
for(var f5=0;
f5<f4.display.view.length;
f5++){au(f4.display.view[f5])
}}function ak(f4){aL(f4);
f4.display.cachedCharWidth=f4.display.cachedTextHeight=f4.display.cachedPaddingH=null;
if(!f4.options.lineWrapping){f4.display.maxLineChanged=true
}f4.display.lineNumChars=null
}function cu(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft
}function cs(){return window.pageYOffset||(document.documentElement||document.body).scrollTop
}function eI(ga,f7,f9,f5){if(f7.widgets){for(var f6=0;
f6<f7.widgets.length;
++f6){if(f7.widgets[f6].above){var gc=cU(f7.widgets[f6]);
f9.top+=gc;
f9.bottom+=gc
}}}if(f5=="line"){return f9
}if(!f5){f5="local"
}var f8=bL(f7);
if(f5=="local"){f8+=eZ(ga.display)
}else{f8-=ga.display.viewOffset
}if(f5=="page"||f5=="window"){var f4=ga.display.lineSpace.getBoundingClientRect();
f8+=f4.top+(f5=="window"?0:cs());
var gb=f4.left+(f5=="window"?0:cu());
f9.left+=gb;
f9.right+=gb
}f9.top+=f8;
f9.bottom+=f8;
return f9
}function f1(f5,f8,f6){if(f6=="div"){return f8
}var ga=f8.left,f9=f8.top;
if(f6=="page"){ga-=cu();
f9-=cs()
}else{if(f6=="local"||!f6){var f7=f5.display.sizer.getBoundingClientRect();
ga+=f7.left;
f9+=f7.top
}}var f4=f5.display.lineSpace.getBoundingClientRect();
return{left:ga-f4.left,top:f9-f4.top}
}function cH(f4,f8,f7,f6,f5){if(!f6){f6=e6(f4.doc,f8.line)
}return eI(f4,f6,d8(f4,f6,f8.ch,f5),f7)
}function dL(gd,gc,f6,ga,gf,gb){ga=ga||e6(gd.doc,gc.line);
if(!gf){gf=a0(gd,ga)
}function f8(gi,gh){var gg=F(gd,gf,gi,gh?"right":"left",gb);
if(gh){gg.left=gg.right
}else{gg.right=gg.left
}return eI(gd,ga,gg,f6)
}function ge(gj,gg){var gh=f9[gg],gi=gh.level%2;
if(gj==dq(gh)&&gg&&gh.level<f9[gg-1].level){gh=f9[--gg];
gj=f0(gh)-(gh.level%2?0:1);
gi=true
}else{if(gj==f0(gh)&&gg<f9.length-1&&gh.level<f9[gg+1].level){gh=f9[++gg];
gj=dq(gh)-gh.level%2;
gi=false
}}if(gi&&gj==gh.to&&gj>gh.from){return f8(gj-1)
}return f8(gj,gi)
}var f9=a(ga),f4=gc.ch;
if(!f9){return f8(f4)
}var f5=aE(f9,f4);
var f7=ge(f4,f5);
if(eU!=null){f7.other=ge(f4,eU)
}return f7
}function dz(f4,f8){var f7=0,f8=fB(f4.doc,f8);
if(!f4.options.lineWrapping){f7=dv(f4.display)*f8.ch
}var f5=e6(f4.doc,f8.line);
var f6=bL(f5)+eZ(f4.display);
return{left:f7,right:f7,top:f6,bottom:f6+f5.height}
}function fN(f4,f5,f6,f8){var f7=Y(f4,f5);
f7.xRel=f8;
if(f6){f7.outside=true
}return f7
}function fG(gb,f8,f7){var ga=gb.doc;
f7+=gb.display.viewOffset;
if(f7<0){return fN(ga.first,0,true,-1)
}var f6=bF(ga,f7),gc=ga.first+ga.size-1;
if(f6>gc){return fN(ga.first+ga.size-1,e6(ga,gc).text.length,true,1)
}if(f8<0){f8=0
}var f5=e6(ga,f6);
for(;
;
){var gd=cV(gb,f5,f6,f8,f7);
var f9=em(f5);
var f4=f9&&f9.find(0,true);
if(f9&&(gd.ch>f4.from.ch||gd.ch==f4.from.ch&&gd.xRel>0)){f6=bM(f5=f4.to.line)
}else{return gd
}}}function cV(ge,f6,gh,gg,gf){var gd=gf-bL(f6);
var ga=false,gn=2*ge.display.wrapper.clientWidth;
var gk=a0(ge,f6);
function gr(gt){var gu=dL(ge,Y(gh,gt),"line",f6,gk);
ga=true;
if(gd>gu.bottom){return gu.left-gn
}else{if(gd<gu.top){return gu.left+gn
}else{ga=false
}}return gu.left
}var gj=a(f6),gm=f6.text.length;
var go=cD(f6),f7=cQ(f6);
var gl=gr(go),f4=ga,f5=gr(f7),f9=ga;
if(gg>f5){return fN(gh,f7,f9,1)
}for(;
;
){if(gj?f7==go||f7==w(f6,go,1):f7-go<=1){var gi=gg<gl||gg-gl<=f5-gg?go:f7;
var gq=gg-(gi==go?gl:f5);
while(fh(f6.text.charAt(gi))){++gi
}var gc=fN(gh,gi,gi==go?f4:f9,gq<-1?-1:gq>1?1:0);
return gc
}var gb=Math.ceil(gm/2),gs=go+gb;
if(gj){gs=go;
for(var gp=0;
gp<gb;
++gp){gs=w(f6,gs,1)
}}var f8=gr(gs);
if(f8>gg){f7=gs;
f5=f8;
if(f9=ga){f5+=1000
}gm=gb
}else{go=gs;
gl=f8;
f4=ga;
gm-=gb
}}}var aF;
function aT(f6){if(f6.cachedTextHeight!=null){return f6.cachedTextHeight
}if(aF==null){aF=fO("pre");
for(var f5=0;
f5<49;
++f5){aF.appendChild(document.createTextNode("x"));
aF.appendChild(fO("br"))
}aF.appendChild(document.createTextNode("x"))
}bQ(f6.measure,aF);
var f4=aF.offsetHeight/50;
if(f4>3){f6.cachedTextHeight=f4
}dS(f6.measure);
return f4||1
}function dv(f8){if(f8.cachedCharWidth!=null){return f8.cachedCharWidth
}var f4=fO("span","xxxxxxxxxx");
var f7=fO("pre",[f4]);
bQ(f8.measure,f7);
var f6=f4.getBoundingClientRect(),f5=(f6.right-f6.left)/10;
if(f5>2){f8.cachedCharWidth=f5
}return f5||10
}var bo=null;
var dZ=0;
function cG(f4){f4.curOp={cm:f4,viewChanged:false,startHeight:f4.doc.height,forceUpdate:false,updateInput:null,typing:false,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:false,updateMaxLine:false,scrollLeft:null,scrollTop:null,scrollToPos:null,id:++dZ};
if(bo){bo.ops.push(f4.curOp)
}else{f4.curOp.ownsGroup=bo={ops:[f4.curOp],delayedCallbacks:[]}
}}function cR(f7){var f6=f7.delayedCallbacks,f5=0;
do{for(;
f5<f6.length;
f5++){f6[f5]()
}for(var f4=0;
f4<f7.ops.length;
f4++){var f8=f7.ops[f4];
if(f8.cursorActivityHandlers){while(f8.cursorActivityCalled<f8.cursorActivityHandlers.length){f8.cursorActivityHandlers[f8.cursorActivityCalled++](f8.cm)
}}}}while(f5<f6.length)
}function am(f4){var f7=f4.curOp,f6=f7.ownsGroup;
if(!f6){return
}try{cR(f6)
}finally{bo=null;
for(var f5=0;
f5<f6.ops.length;
f5++){f6.ops[f5].cm.curOp=null
}cI(f6)
}}function cI(f6){var f5=f6.ops;
for(var f4=0;
f4<f5.length;
f4++){b4(f5[f4])
}for(var f4=0;
f4<f5.length;
f4++){aq(f5[f4])
}for(var f4=0;
f4<f5.length;
f4++){b1(f5[f4])
}for(var f4=0;
f4<f5.length;
f4++){ap(f5[f4])
}for(var f4=0;
f4<f5.length;
f4++){eS(f5[f4])
}}function b4(f6){var f4=f6.cm,f5=f4.display;
if(f6.updateMaxLine){g(f4)
}f6.mustUpdate=f6.viewChanged||f6.forceUpdate||f6.scrollTop!=null||f6.scrollToPos&&(f6.scrollToPos.from.line<f5.viewFrom||f6.scrollToPos.to.line>=f5.viewTo)||f5.maxLineChanged&&f4.options.lineWrapping;
f6.update=f6.mustUpdate&&new aG(f4,f6.mustUpdate&&{top:f6.scrollTop,ensure:f6.scrollToPos},f6.forceUpdate)
}function aq(f4){f4.updatedDisplay=f4.mustUpdate&&E(f4.cm,f4.update)
}function b1(f6){var f4=f6.cm,f5=f4.display;
if(f6.updatedDisplay){a5(f4)
}f6.barMeasure=ds(f4);
if(f5.maxLineChanged&&!f4.options.lineWrapping){f6.adjustWidthTo=d8(f4,f5.maxLine,f5.maxLine.text.length).left+3;
f6.maxScrollLeft=Math.max(0,f5.sizer.offsetLeft+f6.adjustWidthTo+bh-f5.scroller.clientWidth)
}if(f6.updatedDisplay||f6.selectionChanged){f6.newSelectionNodes=bk(f4)
}}function ap(f5){var f4=f5.cm;
if(f5.adjustWidthTo!=null){f4.display.sizer.style.minWidth=f5.adjustWidthTo+"px";
if(f5.maxScrollLeft<f4.doc.scrollLeft){bD(f4,Math.min(f4.display.scroller.scrollLeft,f5.maxScrollLeft),true)
}f4.display.maxLineChanged=false
}if(f5.newSelectionNodes){al(f4,f5.newSelectionNodes)
}if(f5.updatedDisplay){dr(f4,f5.barMeasure)
}if(f5.updatedDisplay||f5.startHeight!=f4.doc.height){eQ(f4,f5.barMeasure)
}if(f5.selectionChanged){q(f4)
}if(f4.state.focused&&f5.updateInput){fg(f4,f5.typing)
}}function eS(f7){var gd=f7.cm,f9=gd.display,gc=gd.doc;
if(f7.adjustWidthTo!=null&&Math.abs(f7.barMeasure.scrollWidth-gd.display.scroller.scrollWidth)>1){eQ(gd)
}if(f7.updatedDisplay){cj(gd,f7.update)
}if(f9.wheelStartX!=null&&(f7.scrollTop!=null||f7.scrollLeft!=null||f7.scrollToPos)){f9.wheelStartX=f9.wheelStartY=null
}if(f7.scrollTop!=null&&(f9.scroller.scrollTop!=f7.scrollTop||f7.forceScroll)){var ga=Math.max(0,Math.min(f9.scroller.scrollHeight-f9.scroller.clientHeight,f7.scrollTop));
f9.scroller.scrollTop=f9.scrollbarV.scrollTop=gc.scrollTop=ga
}if(f7.scrollLeft!=null&&(f9.scroller.scrollLeft!=f7.scrollLeft||f7.forceScroll)){var f5=Math.max(0,Math.min(f9.scroller.scrollWidth-f9.scroller.clientWidth,f7.scrollLeft));
f9.scroller.scrollLeft=f9.scrollbarH.scrollLeft=gc.scrollLeft=f5;
ew(gd)
}if(f7.scrollToPos){var gb=G(gd,fB(gc,f7.scrollToPos.from),fB(gc,f7.scrollToPos.to),f7.scrollToPos.margin);
if(f7.scrollToPos.isCursor&&gd.state.focused){dX(gd,gb)
}}var f8=f7.maybeHiddenMarkers,f4=f7.maybeUnhiddenMarkers;
if(f8){for(var f6=0;
f6<f8.length;
++f6){if(!f8[f6].lines.length){aC(f8[f6],"hide")
}}}if(f4){for(var f6=0;
f6<f4.length;
++f6){if(f4[f6].lines.length){aC(f4[f6],"unhide")
}}}if(f9.wrapper.offsetHeight){gc.scrollTop=gd.display.scroller.scrollTop
}if(f7.updatedDisplay&&cW){if(gd.options.lineWrapping){fR(gd,f7.barMeasure)
}if(f7.barMeasure.scrollWidth>f7.barMeasure.clientWidth&&f7.barMeasure.scrollWidth<f7.barMeasure.clientWidth+1&&!cO(gd)){eQ(gd)
}}if(f7.changeObjs){aC(gd,"changes",gd,f7.changeObjs)
}}function cK(f4,f5){if(f4.curOp){return f5()
}cG(f4);
try{return f5()
}finally{am(f4)
}}function cY(f4,f5){return function(){if(f4.curOp){return f5.apply(f4,arguments)
}cG(f4);
try{return f5.apply(f4,arguments)
}finally{am(f4)
}}
}function c4(f4){return function(){if(this.curOp){return f4.apply(this,arguments)
}cG(this);
try{return f4.apply(this,arguments)
}finally{am(this)
}}
}function cC(f4){return function(){var f5=this.cm;
if(!f5||f5.curOp){return f4.apply(this,arguments)
}cG(f5);
try{return f4.apply(this,arguments)
}finally{am(f5)
}}
}function bu(f6,f4,f5){this.line=f4;
this.rest=h(f4);
this.size=this.rest?bM(fz(this.rest))-f5+1:1;
this.node=this.text=null;
this.hidden=fo(f6,f4)
}function eN(f4,ga,f9){var f8=[],f6;
for(var f7=ga;
f7<f9;
f7=f6){var f5=new bu(f4.doc,e6(f4.doc,f7),f7);
f6=f7+f5.size;
f8.push(f5)
}return f8
}function ah(gb,f9,ga,gc){if(f9==null){f9=gb.doc.first
}if(ga==null){ga=gb.doc.first+gb.doc.size
}if(!gc){gc=0
}var f6=gb.display;
if(gc&&ga<f6.viewTo&&(f6.updateLineNumbers==null||f6.updateLineNumbers>f9)){f6.updateLineNumbers=f9
}gb.curOp.viewChanged=true;
if(f9>=f6.viewTo){if(a3&&aS(gb.doc,f9)<f6.viewTo){eo(gb)
}}else{if(ga<=f6.viewFrom){if(a3&&dU(gb.doc,ga+gc)>f6.viewFrom){eo(gb)
}else{f6.viewFrom+=gc;
f6.viewTo+=gc
}}else{if(f9<=f6.viewFrom&&ga>=f6.viewTo){eo(gb)
}else{if(f9<=f6.viewFrom){var f8=da(gb,ga,ga+gc,1);
if(f8){f6.view=f6.view.slice(f8.index);
f6.viewFrom=f8.lineN;
f6.viewTo+=gc
}else{eo(gb)
}}else{if(ga>=f6.viewTo){var f8=da(gb,f9,f9,-1);
if(f8){f6.view=f6.view.slice(0,f8.index);
f6.viewTo=f8.lineN
}else{eo(gb)
}}else{var f7=da(gb,f9,f9,-1);
var f5=da(gb,ga,ga+gc,1);
if(f7&&f5){f6.view=f6.view.slice(0,f7.index).concat(eN(gb,f7.lineN,f5.lineN)).concat(f6.view.slice(f5.index));
f6.viewTo+=gc
}else{eo(gb)
}}}}}}var f4=f6.externalMeasured;
if(f4){if(ga<f4.lineN){f4.lineN+=gc
}else{if(f9<f4.lineN+f4.size){f6.externalMeasured=null
}}}}function T(f5,f6,f9){f5.curOp.viewChanged=true;
var ga=f5.display,f8=f5.display.externalMeasured;
if(f8&&f6>=f8.lineN&&f6<f8.lineN+f8.size){ga.externalMeasured=null
}if(f6<ga.viewFrom||f6>=ga.viewTo){return
}var f7=ga.view[dj(f5,f6)];
if(f7.node==null){return
}var f4=f7.changes||(f7.changes=[]);
if(dd(f4,f9)==-1){f4.push(f9)
}}function eo(f4){f4.display.viewFrom=f4.display.viewTo=f4.doc.first;
f4.display.view=[];
f4.display.viewOffset=0
}function dj(f4,f7){if(f7>=f4.display.viewTo){return null
}f7-=f4.display.viewFrom;
if(f7<0){return null
}var f5=f4.display.view;
for(var f6=0;
f6<f5.length;
f6++){f7-=f5[f6].size;
if(f7<0){return f6
}}}function da(gc,f6,f8,f5){var f9=dj(gc,f6),gb,ga=gc.display.view;
if(!a3||f8==gc.doc.first+gc.doc.size){return{index:f9,lineN:f8}
}for(var f7=0,f4=gc.display.viewFrom;
f7<f9;
f7++){f4+=ga[f7].size
}if(f4!=f6){if(f5>0){if(f9==ga.length-1){return null
}gb=(f4+ga[f9].size)-f6;
f9++
}else{gb=f4-f6
}f6+=gb;
f8+=gb
}while(aS(gc.doc,f8)!=f8){if(f9==(f5<0?0:ga.length-1)){return null
}f8+=f5*ga[f9-(f5<0?1:0)].size;
f9+=f5
}return{index:f9,lineN:f8}
}function cP(f4,f8,f7){var f6=f4.display,f5=f6.view;
if(f5.length==0||f8>=f6.viewTo||f7<=f6.viewFrom){f6.view=eN(f4,f8,f7);
f6.viewFrom=f8
}else{if(f6.viewFrom>f8){f6.view=eN(f4,f8,f6.viewFrom).concat(f6.view)
}else{if(f6.viewFrom<f8){f6.view=f6.view.slice(dj(f4,f8))
}}f6.viewFrom=f8;
if(f6.viewTo<f7){f6.view=f6.view.concat(eN(f4,f6.viewTo,f7))
}else{if(f6.viewTo>f7){f6.view=f6.view.slice(0,dj(f4,f7))
}}}f6.viewTo=f7
}function c7(f4){var f5=f4.display.view,f8=0;
for(var f7=0;
f7<f5.length;
f7++){var f6=f5[f7];
if(!f6.hidden&&(!f6.node||f6.changes)){++f8
}}return f8
}function bl(f4){if(f4.display.pollingFast){return
}f4.display.poll.set(f4.options.pollInterval,function(){cg(f4);
if(f4.state.focused){bl(f4)
}})
}function D(f4){var f5=false;
f4.display.pollingFast=true;
function f6(){var f7=cg(f4);
if(!f7&&!f5){f5=true;
f4.display.poll.set(60,f6)
}else{f4.display.pollingFast=false;
bl(f4)
}}f4.display.poll.set(20,f6)
}var bj=null;
function cg(f8){var f9=f8.display.input,gc=f8.display.prevInput,gn=f8.doc;
if(!f8.state.focused||(br(f9)&&!gc)||aj(f8)||f8.options.disableInput||f8.state.keySeq){return false
}if(f8.state.pasteIncoming&&f8.state.fakedLastChar){f9.value=f9.value.substring(0,f9.value.length-1);
f8.state.fakedLastChar=false
}var gb=f9.value;
if(gb==gc&&!f8.somethingSelected()){return false
}if(dB&&m>=9&&f8.display.inputHasSelection===gb||b6&&/[\uf700-\uf7ff]/.test(gb)){fg(f8);
return false
}var gj=!f8.curOp;
if(gj){cG(f8)
}f8.display.shift=false;
if(gb.charCodeAt(0)==8203&&gn.sel==f8.display.selForContextMenu&&!gc){gc="\u200b"
}var gi=0,gf=Math.min(gc.length,gb.length);
while(gi<gf&&gc.charCodeAt(gi)==gb.charCodeAt(gi)){++gi
}var f5=gb.slice(gi),gd=aW(f5);
var gm=null;
if(f8.state.pasteIncoming&&gn.sel.ranges.length>1){if(bj&&bj.join("\n")==f5){gm=gn.sel.ranges.length%bj.length==0&&bR(bj,aW)
}else{if(gd.length==gn.sel.ranges.length){gm=bR(gd,function(go){return[go]
})
}}}for(var gk=gn.sel.ranges.length-1;
gk>=0;
gk--){var ge=gn.sel.ranges[gk];
var gg=ge.from(),f4=ge.to();
if(gi<gc.length){gg=Y(gg.line,gg.ch-(gc.length-gi))
}else{if(f8.state.overwrite&&ge.empty()&&!f8.state.pasteIncoming){f4=Y(f4.line,Math.min(e6(gn,f4.line).text.length,f4.ch+fz(gd).length))
}}var f7=f8.curOp.updateInput;
var gl={from:gg,to:f4,text:gm?gm[gk%gm.length]:gd,origin:f8.state.pasteIncoming?"paste":f8.state.cutIncoming?"cut":"+input"};
bc(f8.doc,gl);
ae(f8,"inputRead",f8,gl);
if(f5&&!f8.state.pasteIncoming&&f8.options.electricChars&&f8.options.smartIndent&&ge.head.ch<100&&(!gk||gn.sel.ranges[gk-1].head.line!=ge.head.line)){var ga=f8.getModeAt(ge.head);
var f6=cT(gl);
if(ga.electricChars){for(var gh=0;
gh<ga.electricChars.length;
gh++){if(f5.indexOf(ga.electricChars.charAt(gh))>-1){ad(f8,f6.line,"smart");
break
}}}else{if(ga.electricInput){if(ga.electricInput.test(e6(gn,f6.line).text.slice(0,f6.ch))){ad(f8,f6.line,"smart")
}}}}}fy(f8);
f8.curOp.updateInput=f7;
f8.curOp.typing=true;
if(gb.length>1000||gb.indexOf("\n")>-1){f9.value=f8.display.prevInput=""
}else{f8.display.prevInput=gb
}if(gj){am(f8)
}f8.state.pasteIncoming=f8.state.cutIncoming=false;
return true
}function fg(f4,f8){var f5,f7,ga=f4.doc;
if(f4.somethingSelected()){f4.display.prevInput="";
var f6=ga.sel.primary();
f5=c6&&(f6.to().line-f6.from().line>100||(f7=f4.getSelection()).length>1000);
var f9=f5?"-":f7||f4.getSelection();
f4.display.input.value=f9;
if(f4.state.focused){dC(f4.display.input)
}if(dB&&m>=9){f4.display.inputHasSelection=f9
}}else{if(!f8){f4.display.prevInput=f4.display.input.value="";
if(dB&&m>=9){f4.display.inputHasSelection=null
}}}f4.display.inaccurateSelection=f5
}function er(f4){if(f4.options.readOnly!="nocursor"&&(!d7||dF()!=f4.display.input)){f4.display.input.focus()
}}function t(f4){if(!f4.state.focused){er(f4);
cA(f4)
}}function aj(f4){return f4.options.readOnly||f4.doc.cantEdit
}function fH(f4){var f6=f4.display;
bW(f6.scroller,"mousedown",cY(f4,ek));
if(dB&&m<11){bW(f6.scroller,"dblclick",cY(f4,function(ga){if(aO(f4,ga)){return
}var gb=cn(f4,ga);
if(!gb||n(f4,ga)||a6(f4.display,ga)){return
}cE(ga);
var f9=f4.findWordAt(gb);
fL(f4.doc,f9.anchor,f9.head)
}))
}else{bW(f6.scroller,"dblclick",function(f9){aO(f4,f9)||cE(f9)
})
}bW(f6.lineSpace,"selectstart",function(f9){if(!a6(f6,f9)){cE(f9)
}});
if(!fW){bW(f6.scroller,"contextmenu",function(f9){ay(f4,f9)
})
}bW(f6.scroller,"scroll",function(){if(f6.scroller.clientHeight){P(f4,f6.scroller.scrollTop);
bD(f4,f6.scroller.scrollLeft,true);
aC(f4,"scroll",f4)
}});
bW(f6.scrollbarV,"scroll",function(){if(f6.scroller.clientHeight){P(f4,f6.scrollbarV.scrollTop)
}});
bW(f6.scrollbarH,"scroll",function(){if(f6.scroller.clientHeight){bD(f4,f6.scrollbarH.scrollLeft)
}});
bW(f6.scroller,"mousewheel",function(f9){b(f4,f9)
});
bW(f6.scroller,"DOMMouseScroll",function(f9){b(f4,f9)
});
function f8(){if(f4.state.focused){setTimeout(cv(er,f4),0)
}}bW(f6.scrollbarH,"mousedown",f8);
bW(f6.scrollbarV,"mousedown",f8);
bW(f6.wrapper,"scroll",function(){f6.wrapper.scrollTop=f6.wrapper.scrollLeft=0
});
bW(f6.input,"keyup",function(f9){be.call(f4,f9)
});
bW(f6.input,"input",function(){if(dB&&m>=9&&f4.display.inputHasSelection){f4.display.inputHasSelection=null
}D(f4)
});
bW(f6.input,"keydown",cY(f4,r));
bW(f6.input,"keypress",cY(f4,cx));
bW(f6.input,"focus",cv(cA,f4));
bW(f6.input,"blur",cv(aR,f4));
function f5(f9){if(!aO(f4,f9)){ei(f9)
}}if(f4.options.dragDrop){bW(f6.scroller,"dragstart",function(f9){S(f4,f9)
});
bW(f6.scroller,"dragenter",f5);
bW(f6.scroller,"dragover",f5);
bW(f6.scroller,"drop",cY(f4,bg))
}bW(f6.scroller,"paste",function(f9){if(a6(f6,f9)){return
}f4.state.pasteIncoming=true;
er(f4);
D(f4)
});
bW(f6.input,"paste",function(){if(cW&&!f4.state.fakedLastChar&&!(new Date-f4.state.lastMiddleDown<200)){var ga=f6.input.selectionStart,f9=f6.input.selectionEnd;
f6.input.value+="$";
f6.input.selectionEnd=f9;
f6.input.selectionStart=ga;
f4.state.fakedLastChar=true
}f4.state.pasteIncoming=true;
D(f4)
});
function f7(gd){if(f4.somethingSelected()){bj=f4.getSelections();
if(f6.inaccurateSelection){f6.prevInput="";
f6.inaccurateSelection=false;
f6.input.value=bj.join("\n");
dC(f6.input)
}}else{var ge=[],ga=[];
for(var gb=0;
gb<f4.doc.sel.ranges.length;
gb++){var f9=f4.doc.sel.ranges[gb].head.line;
var gc={anchor:Y(f9,0),head:Y(f9+1,0)};
ga.push(gc);
ge.push(f4.getRange(gc.anchor,gc.head))
}if(gd.type=="cut"){f4.setSelections(ga,null,aa)
}else{f6.prevInput="";
f6.input.value=ge.join("\n");
dC(f6.input)
}bj=ge
}if(gd.type=="cut"){f4.state.cutIncoming=true
}}bW(f6.input,"cut",f7);
bW(f6.input,"copy",f7);
if(a7){bW(f6.sizer,"mouseup",function(){if(dF()==f6.input){f6.input.blur()
}er(f4)
})
}}function aQ(f4){var f5=f4.display;
if(f5.lastWrapHeight==f5.wrapper.clientHeight&&f5.lastWrapWidth==f5.wrapper.clientWidth){return
}f5.cachedCharWidth=f5.cachedTextHeight=f5.cachedPaddingH=null;
f4.setSize()
}function a6(f5,f4){for(var f6=N(f4);
f6!=f5.wrapper;
f6=f6.parentNode){if(!f6||f6.ignoreEvents||f6.parentNode==f5.sizer&&f6!=f5.mover){return true
}}}function cn(ge,f8,f5,f6){var ga=ge.display;
if(!f5){var f9=N(f8);
if(f9==ga.scrollbarH||f9==ga.scrollbarV||f9==ga.scrollbarFiller||f9==ga.gutterFiller){return null
}}var gd,gb,f4=ga.lineSpace.getBoundingClientRect();
try{gd=f8.clientX-f4.left;
gb=f8.clientY-f4.top
}catch(f8){return null
}var gc=fG(ge,gd,gb),gf;
if(f6&&gc.xRel==1&&(gf=e6(ge.doc,gc.line).text).length==gc.ch){var f7=bS(gf,gf.length,ge.options.tabSize)-gf.length;
gc=Y(gc.line,Math.max(0,Math.round((gd-eW(ge.display).left)/dv(ge.display))-f7))
}return gc
}function ek(f6){if(aO(this,f6)){return
}var f4=this,f5=f4.display;
f5.shift=f6.shiftKey;
if(a6(f5,f6)){if(!cW){f5.scroller.draggable=false;
setTimeout(function(){f5.scroller.draggable=true
},100)
}return
}if(n(f4,f6)){return
}var f7=cn(f4,f6);
window.focus();
switch(fF(f6)){case 1:if(f7){ax(f4,f6,f7)
}else{if(N(f6)==f5.scroller){cE(f6)
}}break;
case 2:if(cW){f4.state.lastMiddleDown=+new Date
}if(f7){fL(f4.doc,f7)
}setTimeout(cv(er,f4),20);
cE(f6);
break;
case 3:if(fW){ay(f4,f6)
}break
}}var dg,c9;
function ax(f5,f9,ga){setTimeout(cv(t,f5),0);
var f6=+new Date,f7;
if(c9&&c9.time>f6-400&&ce(c9.pos,ga)==0){f7="triple"
}else{if(dg&&dg.time>f6-400&&ce(dg.pos,ga)==0){f7="double";
c9={time:f6,pos:ga}
}else{f7="single";
dg={time:f6,pos:ga}
}}var f8=f5.doc.sel,f4=b6?f9.metaKey:f9.ctrlKey;
if(f5.options.dragDrop&&eD&&!aj(f5)&&f7=="single"&&f8.contains(ga)>-1&&f8.somethingSelected()){aZ(f5,f9,ga,f4)
}else{o(f5,f9,ga,f7,f4)
}}function aZ(f6,f8,f9,f5){var f7=f6.display;
var f4=cY(f6,function(ga){if(cW){f7.scroller.draggable=false
}f6.state.draggingText=false;
d4(document,"mouseup",f4);
d4(f7.scroller,"drop",f4);
if(Math.abs(f8.clientX-ga.clientX)+Math.abs(f8.clientY-ga.clientY)<10){cE(ga);
if(!f5){fL(f6.doc,f9)
}er(f6);
if(dB&&m==9){setTimeout(function(){document.body.focus();
er(f6)
},20)
}}});
if(cW){f7.scroller.draggable=true
}f6.state.draggingText=f4;
if(f7.scroller.dragDrop){f7.scroller.dragDrop()
}bW(document,"mouseup",f4);
bW(f7.scroller,"drop",f4)
}function o(f7,gl,f6,f4,f9){var gi=f7.display,gn=f7.doc;
cE(gl);
var f5,gm,f8=gn.sel;
if(f9&&!gl.shiftKey){gm=gn.sel.contains(f6);
if(gm>-1){f5=gn.sel.ranges[gm]
}else{f5=new dP(f6,f6)
}}else{f5=gn.sel.primary()
}if(gl.altKey){f4="rect";
if(!f9){f5=new dP(f6,f6)
}f6=cn(f7,gl,true,true);
gm=-1
}else{if(f4=="double"){var gj=f7.findWordAt(f6);
if(f7.display.shift||gn.extend){f5=fn(gn,f5,gj.anchor,gj.head)
}else{f5=gj
}}else{if(f4=="triple"){var gc=new dP(Y(f6.line,0),fB(gn,Y(f6.line+1,0)));
if(f7.display.shift||gn.extend){f5=fn(gn,f5,gc.anchor,gc.head)
}else{f5=gc
}}else{f5=fn(gn,f5,f6)
}}}if(!f9){gm=0;
bT(gn,new fP([f5],0),O);
f8=gn.sel
}else{if(gm>-1){e(gn,gm,f5,O)
}else{gm=gn.sel.ranges.length;
bT(gn,cw(gn.sel.ranges.concat([f5]),gm),{scroll:false,origin:"*mouse"})
}}var gh=f6;
function gg(gy){if(ce(gh,gy)==0){return
}gh=gy;
if(f4=="rect"){var gp=[],gv=f7.options.tabSize;
var go=bS(e6(gn,f6.line).text,f6.ch,gv);
var gB=bS(e6(gn,gy.line).text,gy.ch,gv);
var gq=Math.min(go,gB),gz=Math.max(go,gB);
for(var gC=Math.min(f6.line,gy.line),gs=Math.min(f7.lastLine(),Math.max(f6.line,gy.line));
gC<=gs;
gC++){var gA=e6(gn,gC).text,gr=eh(gA,gq,gv);
if(gq==gz){gp.push(new dP(Y(gC,gr),Y(gC,gr)))
}else{if(gA.length>gr){gp.push(new dP(Y(gC,gr),Y(gC,eh(gA,gz,gv))))
}}}if(!gp.length){gp.push(new dP(f6,f6))
}bT(gn,cw(f8.ranges.slice(0,gm).concat(gp),gm),{origin:"*mouse",scroll:false});
f7.scrollIntoView(gy)
}else{var gw=f5;
var gt=gw.anchor,gx=gy;
if(f4!="single"){if(f4=="double"){var gu=f7.findWordAt(gy)
}else{var gu=new dP(Y(gy.line,0),fB(gn,Y(gy.line+1,0)))
}if(ce(gu.anchor,gt)>0){gx=gu.head;
gt=ar(gw.from(),gu.anchor)
}else{gx=gu.anchor;
gt=bw(gw.to(),gu.head)
}}var gp=f8.ranges.slice(0);
gp[gm]=new dP(fB(gn,gt),gx);
bT(gn,cw(gp,gm),O)
}}var ge=gi.wrapper.getBoundingClientRect();
var ga=0;
function gk(gq){var go=++ga;
var gs=cn(f7,gq,true,f4=="rect");
if(!gs){return
}if(ce(gs,gh)!=0){t(f7);
gg(gs);
var gr=b5(gi,gn);
if(gs.line>=gr.to||gs.line<gr.from){setTimeout(cY(f7,function(){if(ga==go){gk(gq)
}}),150)
}}else{var gp=gq.clientY<ge.top?-20:gq.clientY>ge.bottom?20:0;
if(gp){setTimeout(cY(f7,function(){if(ga!=go){return
}gi.scroller.scrollTop+=gp;
gk(gq)
}),50)
}}}function gd(go){ga=Infinity;
cE(go);
er(f7);
d4(document,"mousemove",gf);
d4(document,"mouseup",gb);
gn.history.lastSelOrigin=null
}var gf=cY(f7,function(go){if(!fF(go)){gd(go)
}else{gk(go)
}});
var gb=cY(f7,gd);
bW(document,"mousemove",gf);
bW(document,"mouseup",gb)
}function f2(gf,gb,gd,ge,f7){try{var f5=gb.clientX,f4=gb.clientY
}catch(gb){return false
}if(f5>=Math.floor(gf.display.gutters.getBoundingClientRect().right)){return false
}if(ge){cE(gb)
}var gc=gf.display;
var ga=gc.lineDiv.getBoundingClientRect();
if(f4>ga.bottom||!e9(gf,gd)){return bK(gb)
}f4-=ga.top-gc.viewOffset;
for(var f8=0;
f8<gf.options.gutters.length;
++f8){var f9=gc.gutters.childNodes[f8];
if(f9&&f9.getBoundingClientRect().right>=f5){var gg=bF(gf.doc,f4);
var f6=gf.options.gutters[f8];
f7(gf,gd,gf,gg,f6,gb);
return bK(gb)
}}}function n(f4,f5){return f2(f4,f5,"gutterClick",true,ae)
}var ag=0;
function bg(ga){var gc=this;
if(aO(gc,ga)||a6(gc.display,ga)){return
}cE(ga);
if(dB){ag=+new Date
}var gb=cn(gc,ga,true),f4=ga.dataTransfer.files;
if(!gb||aj(gc)){return
}if(f4&&f4.length&&window.FileReader&&window.File){var f6=f4.length,gd=Array(f6),f5=0;
var f8=function(gg,gf){var ge=new FileReader;
ge.onload=cY(gc,function(){gd[gf]=ge.result;
if(++f5==f6){gb=fB(gc.doc,gb);
var gh={from:gb,to:gb,text:aW(gd.join("\n")),origin:"paste"};
bc(gc.doc,gh);
eY(gc.doc,eK(gb,cT(gh)))
}});
ge.readAsText(gg)
};
for(var f9=0;
f9<f6;
++f9){f8(f4[f9],f9)
}}else{if(gc.state.draggingText&&gc.doc.sel.contains(gb)>-1){gc.state.draggingText(ga);
setTimeout(cv(er,gc),20);
return
}try{var gd=ga.dataTransfer.getData("Text");
if(gd){if(gc.state.draggingText&&!(b6?ga.metaKey:ga.ctrlKey)){var f7=gc.listSelections()
}eg(gc.doc,eK(gb,gb));
if(f7){for(var f9=0;
f9<f7.length;
++f9){aX(gc.doc,"",f7[f9].anchor,f7[f9].head,"drag")
}}gc.replaceSelection(gd,"around","paste");
er(gc)
}}catch(ga){}}}function S(f4,f6){if(dB&&(!f4.state.draggingText||+new Date-ag<100)){ei(f6);
return
}if(aO(f4,f6)||a6(f4.display,f6)){return
}f6.dataTransfer.setData("Text",f4.getSelection());
if(f6.dataTransfer.setDragImage&&!aB){var f5=fO("img",null,null,"position: fixed; left: 0; top: 0;");
f5.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
if(dT){f5.width=f5.height=1;
f4.display.wrapper.appendChild(f5);
f5._top=f5.offsetTop
}f6.dataTransfer.setDragImage(f5,0,0);
if(dT){f5.parentNode.removeChild(f5)
}}}function P(f4,f5){if(Math.abs(f4.doc.scrollTop-f5)<2){return
}f4.doc.scrollTop=f5;
if(!co){dK(f4,{top:f5})
}if(f4.display.scroller.scrollTop!=f5){f4.display.scroller.scrollTop=f5
}if(f4.display.scrollbarV.scrollTop!=f5){f4.display.scrollbarV.scrollTop=f5
}if(co){dK(f4)
}d6(f4,100)
}function bD(f4,f6,f5){if(f5?f6==f4.doc.scrollLeft:Math.abs(f4.doc.scrollLeft-f6)<2){return
}f6=Math.min(f6,f4.display.scroller.scrollWidth-f4.display.scroller.clientWidth);
f4.doc.scrollLeft=f6;
ew(f4);
if(f4.display.scroller.scrollLeft!=f6){f4.display.scroller.scrollLeft=f6
}if(f4.display.scrollbarH.scrollLeft!=f6){f4.display.scrollbarH.scrollLeft=f6
}}var fd=0,cf=null;
if(dB){cf=-0.53
}else{if(co){cf=15
}else{if(c8){cf=-0.7
}else{if(aB){cf=-1/3
}}}}function b(gc,f6){var gf=f6.wheelDeltaX,ge=f6.wheelDeltaY;
if(gf==null&&f6.detail&&f6.axis==f6.HORIZONTAL_AXIS){gf=f6.detail
}if(ge==null&&f6.detail&&f6.axis==f6.VERTICAL_AXIS){ge=f6.detail
}else{if(ge==null){ge=f6.wheelDelta
}}var f8=gc.display,gb=f8.scroller;
if(!(gf&&gb.scrollWidth>gb.clientWidth||ge&&gb.scrollHeight>gb.clientHeight)){return
}if(ge&&b6&&cW){outer:for(var gd=f6.target,ga=f8.view;
gd!=gb;
gd=gd.parentNode){for(var f5=0;
f5<ga.length;
f5++){if(ga[f5].node==gd){gc.display.currentWheelTarget=gd;
break outer
}}}}if(gf&&!co&&!dT&&cf!=null){if(ge){P(gc,Math.max(0,Math.min(gb.scrollTop+ge*cf,gb.scrollHeight-gb.clientHeight)))
}bD(gc,Math.max(0,Math.min(gb.scrollLeft+gf*cf,gb.scrollWidth-gb.clientWidth)));
cE(f6);
f8.wheelStartX=null;
return
}if(ge&&cf!=null){var f4=ge*cf;
var f9=gc.doc.scrollTop,f7=f9+f8.wrapper.clientHeight;
if(f4<0){f9=Math.max(0,f9+f4-50)
}else{f7=Math.min(gc.doc.height,f7+f4+50)
}dK(gc,{top:f9,bottom:f7})
}if(fd<20){if(f8.wheelStartX==null){f8.wheelStartX=gb.scrollLeft;
f8.wheelStartY=gb.scrollTop;
f8.wheelDX=gf;
f8.wheelDY=ge;
setTimeout(function(){if(f8.wheelStartX==null){return
}var gg=gb.scrollLeft-f8.wheelStartX;
var gi=gb.scrollTop-f8.wheelStartY;
var gh=(gi&&f8.wheelDY&&gi/f8.wheelDY)||(gg&&f8.wheelDX&&gg/f8.wheelDX);
f8.wheelStartX=f8.wheelStartY=null;
if(!gh){return
}cf=(cf*fd+gh)/(fd+1);
++fd
},200)
}else{f8.wheelDX+=gf;
f8.wheelDY+=ge
}}}function fI(f5,f8,f4){if(typeof f8=="string"){f8=ev[f8];
if(!f8){return false
}}if(f5.display.pollingFast&&cg(f5)){f5.display.pollingFast=false
}var f7=f5.display.shift,f6=false;
try{if(aj(f5)){f5.state.suppressEdits=true
}if(f4){f5.display.shift=false
}f6=f8(f5)!=b9
}finally{f5.display.shift=f7;
f5.state.suppressEdits=false
}return f6
}function d1(f5,f6,f8){for(var f7=0;
f7<f5.state.keyMaps.length;
f7++){var f4=j(f6,f5.state.keyMaps[f7],f8);
if(f4){return f4
}}return(f5.options.extraKeys&&j(f6,f5.options.extraKeys,f8))||j(f6,f5.options.keyMap,f8)
}var dD=new f3;
function a9(f5,f7,f9,f8){var f6=f5.state.keySeq;
if(f6){if(eu(f7)){return"handled"
}dD.set(50,function(){if(f5.state.keySeq==f6){f5.state.keySeq=null;
fg(f5)
}});
f7=f6+" "+f7
}var f4=d1(f5,f7,f8);
if(f4=="multi"){f5.state.keySeq=f7
}if(f4=="handled"){ae(f5,"keyHandled",f5,f7,f9)
}if(f4=="handled"||f4=="multi"){cE(f9);
q(f5)
}if(f6&&!f4&&/\'$/.test(f7)){cE(f9);
return true
}return !!f4
}function fa(f4,f6){var f5=fj(f6,true);
if(!f5){return false
}if(f6.shiftKey&&!f4.state.keySeq){return a9(f4,"Shift-"+f5,f6,function(f7){return fI(f4,f7,true)
})||a9(f4,f5,f6,function(f7){if(typeof f7=="string"?/^go[A-Z]/.test(f7):f7.motion){return fI(f4,f7)
}})
}else{return a9(f4,f5,f6,function(f7){return fI(f4,f7)
})
}}function ea(f4,f6,f5){return a9(f4,"'"+f5+"'",f6,function(f7){return fI(f4,f7,true)
})
}var df=null;
function r(f7){var f4=this;
t(f4);
if(aO(f4,f7)){return
}if(dB&&m<11&&f7.keyCode==27){f7.returnValue=false
}var f5=f7.keyCode;
f4.display.shift=f5==16||f7.shiftKey;
var f6=fa(f4,f7);
if(dT){df=f6?f5:null;
if(!f6&&f5==88&&!c6&&(b6?f7.metaKey:f7.ctrlKey)){f4.replaceSelection("",null,"cut")
}}if(f5==18&&!/\bCodeMirror-crosshair\b/.test(f4.display.lineDiv.className)){av(f4)
}}function av(f5){var f6=f5.display.lineDiv;
fs(f6,"CodeMirror-crosshair");
function f4(f7){if(f7.keyCode==18||!f7.altKey){f(f6,"CodeMirror-crosshair");
d4(document,"keyup",f4);
d4(document,"mouseover",f4)
}}bW(document,"keyup",f4);
bW(document,"mouseover",f4)
}function be(f4){if(f4.keyCode==16){this.doc.sel.shift=false
}aO(this,f4)
}function cx(f8){var f4=this;
if(aO(f4,f8)||f8.ctrlKey&&!f8.altKey||b6&&f8.metaKey){return
}var f7=f8.keyCode,f5=f8.charCode;
if(dT&&f7==df){df=null;
cE(f8);
return
}if(((dT&&(!f8.which||f8.which<10))||a7)&&fa(f4,f8)){return
}var f6=String.fromCharCode(f5==null?f7:f5);
if(ea(f4,f8,f6)){return
}if(dB&&m>=9){f4.display.inputHasSelection=null
}D(f4)
}function cA(f4){if(f4.options.readOnly=="nocursor"){return
}if(!f4.state.focused){aC(f4,"focus",f4);
f4.state.focused=true;
fs(f4.display.wrapper,"CodeMirror-focused");
if(!f4.curOp&&f4.display.selForContextMenu!=f4.doc.sel){fg(f4);
if(cW){setTimeout(cv(fg,f4,true),0)
}}}bl(f4);
q(f4)
}function aR(f4){if(f4.state.focused){aC(f4,"blur",f4);
f4.state.focused=false;
f(f4.display.wrapper,"CodeMirror-focused")
}clearInterval(f4.display.blinker);
setTimeout(function(){if(!f4.state.focused){f4.display.shift=false
}},150)
}function ay(gd,f8){if(aO(gd,f8,"contextmenu")){return
}var ga=gd.display;
if(a6(ga,f8)||dc(gd,f8)){return
}var gc=cn(gd,f8),f4=ga.scroller.scrollTop;
if(!gc||dT){return
}var f7=gd.options.resetSelectionOnContextMenu;
if(f7&&gd.doc.sel.contains(gc)==-1){cY(gd,bT)(gd.doc,eK(gc),aa)
}var f9=ga.input.style.cssText;
ga.inputDiv.style.position="absolute";
ga.input.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(f8.clientY-5)+"px; left: "+(f8.clientX-5)+"px; z-index: 1000; background: "+(dB?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
if(cW){var ge=window.scrollY
}er(gd);
if(cW){window.scrollTo(null,ge)
}fg(gd);
if(!gd.somethingSelected()){ga.input.value=ga.prevInput=" "
}ga.selForContextMenu=gd.doc.sel;
clearTimeout(ga.detectingSelectAll);
function f6(){if(ga.input.selectionStart!=null){var gf=gd.somethingSelected();
var gg=ga.input.value="\u200b"+(gf?ga.input.value:"");
ga.prevInput=gf?"":"\u200b";
ga.input.selectionStart=1;
ga.input.selectionEnd=gg.length;
ga.selForContextMenu=gd.doc.sel
}}function gb(){ga.inputDiv.style.position="relative";
ga.input.style.cssText=f9;
if(dB&&m<9){ga.scrollbarV.scrollTop=ga.scroller.scrollTop=f4
}bl(gd);
if(ga.input.selectionStart!=null){if(!dB||(dB&&m<9)){f6()
}var gf=0,gg=function(){if(ga.selForContextMenu==gd.doc.sel&&ga.input.selectionStart==0){cY(gd,ev.selectAll)(gd)
}else{if(gf++<10){ga.detectingSelectAll=setTimeout(gg,500)
}else{fg(gd)
}}};
ga.detectingSelectAll=setTimeout(gg,200)
}}if(dB&&m>=9){f6()
}if(fW){ei(f8);
var f5=function(){d4(window,"mouseup",f5);
setTimeout(gb,20)
};
bW(window,"mouseup",f5)
}else{setTimeout(gb,50)
}}function dc(f4,f5){if(!e9(f4,"gutterContextMenu")){return false
}return f2(f4,f5,"gutterContextMenu",false,aC)
}var cT=K.changeEnd=function(f4){if(!f4.text){return f4.to
}return Y(f4.from.line+f4.text.length-1,fz(f4.text).length+(f4.text.length==1?f4.from.ch:0))
};
function bY(f7,f6){if(ce(f7,f6.from)<0){return f7
}if(ce(f7,f6.to)<=0){return cT(f6)
}var f4=f7.line+f6.text.length-(f6.to.line-f6.from.line)-1,f5=f7.ch;
if(f7.line==f6.to.line){f5+=cT(f6).ch-f6.to.ch
}return Y(f4,f5)
}function fb(f7,f8){var f5=[];
for(var f6=0;
f6<f7.sel.ranges.length;
f6++){var f4=f7.sel.ranges[f6];
f5.push(new dP(bY(f4.anchor,f8),bY(f4.head,f8)))
}return cw(f5,f7.sel.primIndex)
}function bt(f6,f5,f4){if(f6.line==f5.line){return Y(f4.line,f6.ch-f5.ch+f4.ch)
}else{return Y(f4.line+(f6.line-f5.line),f6.ch)
}}function af(ge,gb,f5){var f6=[];
var f4=Y(ge.first,0),gf=f4;
for(var f8=0;
f8<gb.length;
f8++){var ga=gb[f8];
var gd=bt(ga.from,f4,gf);
var gc=bt(cT(ga),f4,gf);
f4=ga.to;
gf=gc;
if(f5=="around"){var f9=ge.sel.ranges[f8],f7=ce(f9.head,f9.anchor)<0;
f6[f8]=new dP(f7?gc:gd,f7?gd:gc)
}else{f6[f8]=new dP(gd,gd)
}}return new fP(f6,ge.sel.primIndex)
}function dI(f5,f7,f6){var f4={canceled:false,from:f7.from,to:f7.to,text:f7.text,origin:f7.origin,cancel:function(){this.canceled=true
}};
if(f6){f4.update=function(gb,ga,f9,f8){if(gb){this.from=fB(f5,gb)
}if(ga){this.to=fB(f5,ga)
}if(f9){this.text=f9
}if(f8!==undefined){this.origin=f8
}}
}aC(f5,"beforeChange",f5,f4);
if(f5.cm){aC(f5.cm,"beforeChange",f5.cm,f4)
}if(f4.canceled){return null
}return{from:f4.from,to:f4.to,text:f4.text,origin:f4.origin}
}function bc(f7,f8,f6){if(f7.cm){if(!f7.cm.curOp){return cY(f7.cm,bc)(f7,f8,f6)
}if(f7.cm.state.suppressEdits){return
}}if(e9(f7,"beforeChange")||f7.cm&&e9(f7.cm,"beforeChange")){f8=dI(f7,f8,true);
if(!f8){return
}}var f5=fZ&&!f6&&cF(f7,f8.from,f8.to);
if(f5){for(var f4=f5.length-1;
f4>=0;
--f4){M(f7,{from:f5[f4].from,to:f5[f4].to,text:f4?[""]:f8.text})
}}else{M(f7,f8)
}}function M(f6,f7){if(f7.text.length==1&&f7.text[0]==""&&ce(f7.from,f7.to)==0){return
}var f5=fb(f6,f7);
fE(f6,f7,f5,f6.cm?f6.cm.curOp.id:NaN);
d5(f6,f7,f5,eb(f6,f7));
var f4=[];
dY(f6,function(f9,f8){if(!f8&&dd(f4,f9.history)==-1){dw(f9.history,f7);
f4.push(f9.history)
}d5(f9,f7,null,eb(f9,f7))
})
}function b7(gf,gd,gh){if(gf.cm&&gf.cm.state.suppressEdits){return
}var gc=gf.history,f6,f8=gf.sel;
var f4=gd=="undo"?gc.done:gc.undone,gg=gd=="undo"?gc.undone:gc.done;
for(var f9=0;
f9<f4.length;
f9++){f6=f4[f9];
if(gh?f6.ranges&&!f6.equals(gf.sel):!f6.ranges){break
}}if(f9==f4.length){return
}gc.lastOrigin=gc.lastSelOrigin=null;
for(;
;
){f6=f4.pop();
if(f6.ranges){cL(f6,gg);
if(gh&&!f6.equals(gf.sel)){bT(gf,f6,{clearRedo:false});
return
}f8=f6
}else{break
}}var gb=[];
cL(f8,gg);
gg.push({changes:gb,generation:gc.generation});
gc.generation=f6.generation||++gc.maxGeneration;
var f7=e9(gf,"beforeChange")||gf.cm&&e9(gf.cm,"beforeChange");
for(var f9=f6.changes.length-1;
f9>=0;
--f9){var ge=f6.changes[f9];
ge.origin=gd;
if(f7&&!dI(gf,ge,false)){f4.length=0;
return
}gb.push(dm(gf,ge));
var f5=f9?fb(gf,ge):fz(f4);
d5(gf,ge,f5,d0(gf,ge));
if(!f9&&gf.cm){gf.cm.scrollIntoView({from:ge.from,to:cT(ge)})
}var ga=[];
dY(gf,function(gj,gi){if(!gi&&dd(ga,gj.history)==-1){dw(gj.history,ge);
ga.push(gj.history)
}d5(gj,ge,null,d0(gj,ge))
})
}}function fe(f5,f7){if(f7==0){return
}f5.first+=f7;
f5.sel=new fP(bR(f5.sel.ranges,function(f8){return new dP(Y(f8.anchor.line+f7,f8.anchor.ch),Y(f8.head.line+f7,f8.head.ch))
}),f5.sel.primIndex);
if(f5.cm){ah(f5.cm,f5.first,f5.first-f7,f7);
for(var f6=f5.cm.display,f4=f6.viewFrom;
f4<f6.viewTo;
f4++){T(f5.cm,f4,"gutter")
}}}function d5(f8,f9,f7,f5){if(f8.cm&&!f8.cm.curOp){return cY(f8.cm,d5)(f8,f9,f7,f5)
}if(f9.to.line<f8.first){fe(f8,f9.text.length-1-(f9.to.line-f9.from.line));
return
}if(f9.from.line>f8.lastLine()){return
}if(f9.from.line<f8.first){var f4=f9.text.length-1-(f8.first-f9.from.line);
fe(f8,f4);
f9={from:Y(f8.first,0),to:Y(f9.to.line+f4,f9.to.ch),text:[fz(f9.text)],origin:f9.origin}
}var f6=f8.lastLine();
if(f9.to.line>f6){f9={from:f9.from,to:Y(f6,e6(f8,f6).text.length),text:[f9.text[0]],origin:f9.origin}
}f9.removed=fQ(f8,f9.from,f9.to);
if(!f7){f7=fb(f8,f9)
}if(f8.cm){aH(f8.cm,f9,f5)
}else{fq(f8,f9,f5)
}eg(f8,f7,aa)
}function aH(gf,gb,f9){var ge=gf.doc,ga=gf.display,gc=gb.from,gd=gb.to;
var f4=false,f8=gc.line;
if(!gf.options.lineWrapping){f8=bM(A(e6(ge,gc.line)));
ge.iter(f8,gd.line+1,function(gh){if(gh==ga.maxLine){f4=true;
return true
}})
}if(ge.sel.contains(gb.from,gb.to)>-1){X(gf)
}fq(ge,gb,f9,ba(gf));
if(!gf.options.lineWrapping){ge.iter(f8,gc.line+gb.text.length,function(gi){var gh=ed(gi);
if(gh>ga.maxLineLength){ga.maxLine=gi;
ga.maxLineLength=gh;
ga.maxLineChanged=true;
f4=false
}});
if(f4){gf.curOp.updateMaxLine=true
}}ge.frontier=Math.min(ge.frontier,gc.line);
d6(gf,400);
var gg=gb.text.length-(gd.line-gc.line)-1;
if(gc.line==gd.line&&gb.text.length==1&&!dJ(gf.doc,gb)){T(gf,gc.line,"text")
}else{ah(gf,gc.line,gd.line+1,gg)
}var f6=e9(gf,"changes"),f7=e9(gf,"change");
if(f7||f6){var f5={from:gc,to:gd,text:gb.text,removed:gb.removed,origin:gb.origin};
if(f7){ae(gf,"change",gf,f5)
}if(f6){(gf.curOp.changeObjs||(gf.curOp.changeObjs=[])).push(f5)
}}gf.display.selForContextMenu=null
}function aX(f7,f6,f9,f8,f4){if(!f8){f8=f9
}if(ce(f8,f9)<0){var f5=f8;
f8=f9;
f9=f5
}if(typeof f6=="string"){f6=aW(f6)
}bc(f7,{from:f9,to:f8,text:f6,origin:f4})
}function dX(f5,f8){if(aO(f5,"scrollCursorIntoView")){return
}var f9=f5.display,f6=f9.sizer.getBoundingClientRect(),f4=null;
if(f8.top+f6.top<0){f4=true
}else{if(f8.bottom+f6.top>(window.innerHeight||document.documentElement.clientHeight)){f4=false
}}if(f4!=null&&!fm){var f7=fO("div","\u200b",null,"position: absolute; top: "+(f8.top-f9.viewOffset-eZ(f5.display))+"px; height: "+(f8.bottom-f8.top+bh)+"px; left: "+f8.left+"px; width: 2px;");
f5.display.lineSpace.appendChild(f7);
f7.scrollIntoView(f4);
f5.display.lineSpace.removeChild(f7)
}}function G(ge,gc,f8,f7){if(f7==null){f7=0
}for(var f9=0;
f9<5;
f9++){var ga=false,gd=dL(ge,gc);
var f4=!f8||f8==gc?gd:dL(ge,f8);
var f6=J(ge,Math.min(gd.left,f4.left),Math.min(gd.top,f4.top)-f7,Math.max(gd.left,f4.left),Math.max(gd.bottom,f4.bottom)+f7);
var gb=ge.doc.scrollTop,f5=ge.doc.scrollLeft;
if(f6.scrollTop!=null){P(ge,f6.scrollTop);
if(Math.abs(ge.doc.scrollTop-gb)>1){ga=true
}}if(f6.scrollLeft!=null){bD(ge,f6.scrollLeft);
if(Math.abs(ge.doc.scrollLeft-f5)>1){ga=true
}}if(!ga){return gd
}}}function H(f4,f6,f8,f5,f7){var f9=J(f4,f6,f8,f5,f7);
if(f9.scrollTop!=null){P(f4,f9.scrollTop)
}if(f9.scrollLeft!=null){bD(f4,f9.scrollLeft)
}}function J(gg,f7,gf,f5,ge){var gc=gg.display,ga=aT(gg.display);
if(gf<0){gf=0
}var f8=gg.curOp&&gg.curOp.scrollTop!=null?gg.curOp.scrollTop:gc.scroller.scrollTop;
var gi=gc.scroller.clientHeight-bh,gk={};
if(ge-gf>gi){ge=gf+gi
}var f6=gg.doc.height+bH(gc);
var f4=gf<ga,gb=ge>f6-ga;
if(gf<f8){gk.scrollTop=f4?0:gf
}else{if(ge>f8+gi){var gd=Math.min(gf,(gb?f6:ge)-gi);
if(gd!=f8){gk.scrollTop=gd
}}}var gj=gg.curOp&&gg.curOp.scrollLeft!=null?gg.curOp.scrollLeft:gc.scroller.scrollLeft;
var gh=gc.scroller.clientWidth-bh-gc.gutters.offsetWidth;
var f9=f5-f7>gh;
if(f9){f5=f7+gh
}if(f7<10){gk.scrollLeft=0
}else{if(f7<gj){gk.scrollLeft=Math.max(0,f7-(f9?0:10))
}else{if(f5>gh+gj-3){gk.scrollLeft=f5+(f9?0:10)-gh
}}}return gk
}function cJ(f4,f6,f5){if(f6!=null||f5!=null){fu(f4)
}if(f6!=null){f4.curOp.scrollLeft=(f4.curOp.scrollLeft==null?f4.doc.scrollLeft:f4.curOp.scrollLeft)+f6
}if(f5!=null){f4.curOp.scrollTop=(f4.curOp.scrollTop==null?f4.doc.scrollTop:f4.curOp.scrollTop)+f5
}}function fy(f4){fu(f4);
var f5=f4.getCursor(),f7=f5,f6=f5;
if(!f4.options.lineWrapping){f7=f5.ch?Y(f5.line,f5.ch-1):f5;
f6=Y(f5.line,f5.ch+1)
}f4.curOp.scrollToPos={from:f7,to:f6,margin:f4.options.cursorScrollMargin,isCursor:true}
}function fu(f4){var f6=f4.curOp.scrollToPos;
if(f6){f4.curOp.scrollToPos=null;
var f8=dz(f4,f6.from),f7=dz(f4,f6.to);
var f5=J(f4,Math.min(f8.left,f7.left),Math.min(f8.top,f7.top)-f6.margin,Math.max(f8.right,f7.right),Math.max(f8.bottom,f7.bottom)+f6.margin);
f4.scrollTo(f5.scrollLeft,f5.scrollTop)
}}function ad(gh,f7,gg,f6){var gf=gh.doc,f5;
if(gg==null){gg="add"
}if(gg=="smart"){if(!gf.mode.indent){gg="prev"
}else{f5=dt(gh,f7)
}}var gb=gh.options.tabSize;
var gi=e6(gf,f7),ga=bS(gi.text,null,gb);
if(gi.stateAfter){gi.stateAfter=null
}var f4=gi.text.match(/^\s*/)[0],gd;
if(!f6&&!/\S/.test(gi.text)){gd=0;
gg="not"
}else{if(gg=="smart"){gd=gf.mode.indent(f5,gi.text.slice(f4.length),gi.text);
if(gd==b9||gd>150){if(!f6){return
}gg="prev"
}}}if(gg=="prev"){if(f7>gf.first){gd=bS(e6(gf,f7-1).text,null,gb)
}else{gd=0
}}else{if(gg=="add"){gd=ga+gh.options.indentUnit
}else{if(gg=="subtract"){gd=ga-gh.options.indentUnit
}else{if(typeof gg=="number"){gd=ga+gg
}}}}gd=Math.max(0,gd);
var ge="",gc=0;
if(gh.options.indentWithTabs){for(var f8=Math.floor(gd/gb);
f8;
--f8){gc+=gb;
ge+="\t"
}}if(gc<gd){ge+=cp(gd-gc)
}if(ge!=f4){aX(gf,ge,Y(f7,0),Y(f7,f4.length),"+input")
}else{for(var f8=0;
f8<gf.sel.ranges.length;
f8++){var f9=gf.sel.ranges[f8];
if(f9.head.line==f7&&f9.head.ch<f4.length){var gc=Y(f7,f4.length);
e(gf,f8,new dP(gc,gc));
break
}}}gi.stateAfter=null
}function eq(f7,f6,f4,f9){var f8=f6,f5=f6;
if(typeof f6=="number"){f5=e6(f7,c1(f7,f6))
}else{f8=bM(f6)
}if(f8==null){return null
}if(f9(f5,f8)&&f7.cm){T(f7.cm,f8,f4)
}return f5
}function eP(f4,ga){var f5=f4.doc.sel.ranges,f8=[];
for(var f7=0;
f7<f5.length;
f7++){var f6=ga(f5[f7]);
while(f8.length&&ce(f6.from,fz(f8).to)<=0){var f9=f8.pop();
if(ce(f9.from,f6.from)<0){f6.from=f9.from;
break
}}f8.push(f6)
}cK(f4,function(){for(var gb=f8.length-1;
gb>=0;
gb--){aX(f4.doc,"",f8[gb].from,f8[gb].to,"+delete")
}fy(f4)
})
}function bv(gm,f8,gg,gf,ga){var gd=f8.line,ge=f8.ch,gl=gg;
var f5=e6(gm,gd);
var gj=true;
function gk(){var gn=gd+gg;
if(gn<gm.first||gn>=gm.first+gm.size){return(gj=false)
}gd=gn;
return f5=e6(gm,gn)
}function gi(go){var gn=(ga?w:ai)(f5,ge,gg,true);
if(gn==null){if(!go&&gk()){if(ga){ge=(gg<0?cQ:cD)(f5)
}else{ge=gg<0?f5.text.length:0
}}else{return(gj=false)
}}else{ge=gn
}return true
}if(gf=="char"){gi()
}else{if(gf=="column"){gi(true)
}else{if(gf=="word"||gf=="group"){var gh=null,gb=gf=="group";
var f4=gm.cm&&gm.cm.getHelper(f8,"wordChars");
for(var f9=true;
;
f9=false){if(gg<0&&!gi(!f9)){break
}var f6=f5.text.charAt(ge)||"\n";
var f7=cz(f6,f4)?"w":gb&&f6=="\n"?"n":!gb||/\s/.test(f6)?null:"p";
if(gb&&!f9&&!f7){f7="s"
}if(gh&&gh!=f7){if(gg<0){gg=1;
gi()
}break
}if(f7){gh=f7
}if(gg>0&&!gi(!f9)){break
}}}}}var gc=bU(gm,Y(gd,ge),gl,true);
if(!gj){gc.hitSide=true
}return gc
}function bp(gc,f7,f4,gb){var ga=gc.doc,f9=f7.left,f8;
if(gb=="page"){var f6=Math.min(gc.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);
f8=f7.top+f4*(f6-(f4<0?1.5:0.5)*aT(gc.display))
}else{if(gb=="line"){f8=f4>0?f7.bottom+3:f7.top-3
}}for(;
;
){var f5=fG(gc,f9,f8);
if(!f5.outside){break
}if(f4<0?f8<=0:f8>=ga.height){f5.hitSide=true;
break
}f8+=f4*5
}return f5
}K.prototype={constructor:K,focus:function(){window.focus();
er(this);
D(this)
},setOption:function(f6,f7){var f5=this.options,f4=f5[f6];
if(f5[f6]==f7&&f6!="mode"){return
}f5[f6]=f7;
if(bb.hasOwnProperty(f6)){cY(this,bb[f6])(this,f7,f4)
}},getOption:function(f4){return this.options[f4]
},getDoc:function(){return this.doc
},addKeyMap:function(f5,f4){this.state.keyMaps[f4?"push":"unshift"](fM(f5))
},removeKeyMap:function(f5){var f6=this.state.keyMaps;
for(var f4=0;
f4<f6.length;
++f4){if(f6[f4]==f5||f6[f4].name==f5){f6.splice(f4,1);
return true
}}},addOverlay:c4(function(f4,f5){var f6=f4.token?f4:K.getMode(this.options,f4);
if(f6.startState){throw new Error("Overlays may not be stateful.")
}this.state.overlays.push({mode:f6,modeSpec:f4,opaque:f5&&f5.opaque});
this.state.modeGen++;
ah(this)
}),removeOverlay:c4(function(f4){var f6=this.state.overlays;
for(var f5=0;
f5<f6.length;
++f5){var f7=f6[f5].modeSpec;
if(f7==f4||typeof f4=="string"&&f7.name==f4){f6.splice(f5,1);
this.state.modeGen++;
ah(this);
return
}}}),indentLine:c4(function(f6,f4,f5){if(typeof f4!="string"&&typeof f4!="number"){if(f4==null){f4=this.options.smartIndent?"smart":"prev"
}else{f4=f4?"add":"subtract"
}}if(b8(this.doc,f6)){ad(this,f6,f4,f5)
}}),indentSelection:c4(function(gd){var f4=this.doc.sel.ranges,f7=-1;
for(var f9=0;
f9<f4.length;
f9++){var ga=f4[f9];
if(!ga.empty()){var gb=ga.from(),gc=ga.to();
var f5=Math.max(f7,gb.line);
f7=Math.min(this.lastLine(),gc.line-(gc.ch?0:1))+1;
for(var f8=f5;
f8<f7;
++f8){ad(this,f8,gd)
}var f6=this.doc.sel.ranges;
if(gb.ch==0&&f4.length==f6.length&&f6[f9].from().ch>0){e(this.doc,f9,new dP(gb,f6[f9].to()),aa)
}}else{if(ga.head.line>f7){ad(this,ga.head.line,gd,true);
f7=ga.head.line;
if(f9==this.doc.sel.primIndex){fy(this)
}}}}}),getTokenAt:function(f5,f4){return cq(this,f5,f4)
},getLineTokens:function(f5,f4){return cq(this,Y(f5),f4,true)
},getTokenTypeAt:function(gb){gb=fB(this.doc,gb);
var f7=c2(this,e6(this.doc,gb.line));
var f9=0,ga=(f7.length-1)/2,f6=gb.ch;
var f5;
if(f6==0){f5=f7[2]
}else{for(;
;
){var f4=(f9+ga)>>1;
if((f4?f7[f4*2-1]:0)>=f6){ga=f4
}else{if(f7[f4*2+1]<f6){f9=f4+1
}else{f5=f7[f4*2+2];
break
}}}}var f8=f5?f5.indexOf("cm-overlay "):-1;
return f8<0?f5:f8==0?null:f5.slice(0,f8-1)
},getModeAt:function(f5){var f4=this.doc.mode;
if(!f4.innerMode){return f4
}return K.innerMode(f4,this.getTokenAt(f5).state).mode
},getHelper:function(f5,f4){return this.getHelpers(f5,f4)[0]
},getHelpers:function(gb,f6){var f7=[];
if(!ff.hasOwnProperty(f6)){return ff
}var f4=ff[f6],ga=this.getModeAt(gb);
if(typeof ga[f6]=="string"){if(f4[ga[f6]]){f7.push(f4[ga[f6]])
}}else{if(ga[f6]){for(var f5=0;
f5<ga[f6].length;
f5++){var f9=f4[ga[f6][f5]];
if(f9){f7.push(f9)
}}}else{if(ga.helperType&&f4[ga.helperType]){f7.push(f4[ga.helperType])
}else{if(f4[ga.name]){f7.push(f4[ga.name])
}}}}for(var f5=0;
f5<f4._global.length;
f5++){var f8=f4._global[f5];
if(f8.pred(ga,this)&&dd(f7,f8.val)==-1){f7.push(f8.val)
}}return f7
},getStateAfter:function(f5,f4){var f6=this.doc;
f5=c1(f6,f5==null?f6.first+f6.size-1:f5);
return dt(this,f5+1,f4)
},cursorCoords:function(f7,f5){var f6,f4=this.doc.sel.primary();
if(f7==null){f6=f4.head
}else{if(typeof f7=="object"){f6=fB(this.doc,f7)
}else{f6=f7?f4.from():f4.to()
}}return dL(this,f6,f5||"page")
},charCoords:function(f5,f4){return cH(this,fB(this.doc,f5),f4||"page")
},coordsChar:function(f4,f5){f4=f1(this,f4,f5||"page");
return fG(this,f4.left,f4.top)
},lineAtHeight:function(f4,f5){f4=f1(this,{top:f4,left:0},f5||"page").top;
return bF(this.doc,f4+this.display.viewOffset)
},heightAtLine:function(f5,f8){var f4=false,f7=this.doc.first+this.doc.size-1;
if(f5<this.doc.first){f5=this.doc.first
}else{if(f5>f7){f5=f7;
f4=true
}}var f6=e6(this.doc,f5);
return eI(this,f6,{top:0,left:0},f8||"page").top+(f4?this.doc.height-bL(f6):0)
},defaultTextHeight:function(){return aT(this.display)
},defaultCharWidth:function(){return dv(this.display)
},setGutterMarker:c4(function(f4,f5,f6){return eq(this.doc,f4,"gutter",function(f7){var f8=f7.gutterMarkers||(f7.gutterMarkers={});
f8[f5]=f6;
if(!f6&&eM(f8)){f7.gutterMarkers=null
}return true
})
}),clearGutter:c4(function(f6){var f4=this,f7=f4.doc,f5=f7.first;
f7.iter(function(f8){if(f8.gutterMarkers&&f8.gutterMarkers[f6]){f8.gutterMarkers[f6]=null;
T(f4,f5,"gutter");
if(eM(f8.gutterMarkers)){f8.gutterMarkers=null
}}++f5
})
}),addLineWidget:c4(function(f6,f5,f4){return bG(this,f6,f5,f4)
}),removeLineWidget:function(f4){f4.clear()
},lineInfo:function(f4){if(typeof f4=="number"){if(!b8(this.doc,f4)){return null
}var f5=f4;
f4=e6(this.doc,f4);
if(!f4){return null
}}else{var f5=bM(f4);
if(f5==null){return null
}}return{line:f5,handle:f4,text:f4.text,gutterMarkers:f4.gutterMarkers,textClass:f4.textClass,bgClass:f4.bgClass,wrapClass:f4.wrapClass,widgets:f4.widgets}
},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}
},addWidget:function(f9,f6,gb,f7,gd){var f8=this.display;
f9=dL(this,fB(this.doc,f9));
var ga=f9.bottom,f5=f9.left;
f6.style.position="absolute";
f8.sizer.appendChild(f6);
if(f7=="over"){ga=f9.top
}else{if(f7=="above"||f7=="near"){var f4=Math.max(f8.wrapper.clientHeight,this.doc.height),gc=Math.max(f8.sizer.clientWidth,f8.lineSpace.clientWidth);
if((f7=="above"||f9.bottom+f6.offsetHeight>f4)&&f9.top>f6.offsetHeight){ga=f9.top-f6.offsetHeight
}else{if(f9.bottom+f6.offsetHeight<=f4){ga=f9.bottom
}}if(f5+f6.offsetWidth>gc){f5=gc-f6.offsetWidth
}}}f6.style.top=ga+"px";
f6.style.left=f6.style.right="";
if(gd=="right"){f5=f8.sizer.clientWidth-f6.offsetWidth;
f6.style.right="0px"
}else{if(gd=="left"){f5=0
}else{if(gd=="middle"){f5=(f8.sizer.clientWidth-f6.offsetWidth)/2
}}f6.style.left=f5+"px"
}if(gb){H(this,f5,ga,f5+f6.offsetWidth,ga+f6.offsetHeight)
}},triggerOnKeyDown:c4(r),triggerOnKeyPress:c4(cx),triggerOnKeyUp:be,execCommand:function(f4){if(ev.hasOwnProperty(f4)){return ev[f4](this)
}},findPosH:function(ga,f7,f8,f5){var f4=1;
if(f7<0){f4=-1;
f7=-f7
}for(var f6=0,f9=fB(this.doc,ga);
f6<f7;
++f6){f9=bv(this.doc,f9,f4,f8,f5);
if(f9.hitSide){break
}}return f9
},moveH:c4(function(f5,f6){var f4=this;
f4.extendSelectionsBy(function(f7){if(f4.display.shift||f4.doc.extend||f7.empty()){return bv(f4.doc,f7.head,f5,f6,f4.options.rtlMoveVisually)
}else{return f5<0?f7.from():f7.to()
}},cS)
}),deleteH:c4(function(f4,f5){var f6=this.doc.sel,f7=this.doc;
if(f6.somethingSelected()){f7.replaceSelection("",null,"+delete")
}else{eP(this,function(f9){var f8=bv(f7,f9.head,f4,f5,false);
return f4<0?{from:f8,to:f9.head}:{from:f9.head,to:f8}
})
}}),findPosV:function(f9,f6,ga,gc){var f4=1,f8=gc;
if(f6<0){f4=-1;
f6=-f6
}for(var f5=0,gb=fB(this.doc,f9);
f5<f6;
++f5){var f7=dL(this,gb,"div");
if(f8==null){f8=f7.left
}else{f7.left=f8
}gb=bp(this,f7,f4,ga);
if(gb.hitSide){break
}}return gb
},moveV:c4(function(f5,f7){var f4=this,f9=this.doc,f8=[];
var ga=!f4.display.shift&&!f9.extend&&f9.sel.somethingSelected();
f9.extendSelectionsBy(function(gb){if(ga){return f5<0?gb.from():gb.to()
}var gd=dL(f4,gb.head,"div");
if(gb.goalColumn!=null){gd.left=gb.goalColumn
}f8.push(gd.left);
var gc=bp(f4,gd,f5,f7);
if(f7=="page"&&gb==f9.sel.primary()){cJ(f4,null,cH(f4,gc,"div").top-gd.top)
}return gc
},cS);
if(f8.length){for(var f6=0;
f6<f9.sel.ranges.length;
f6++){f9.sel.ranges[f6].goalColumn=f8[f6]
}}}),findWordAt:function(gb){var f9=this.doc,f7=e6(f9,gb.line).text;
var ga=gb.ch,f6=gb.ch;
if(f7){var f8=this.getHelper(gb,"wordChars");
if((gb.xRel<0||f6==f7.length)&&ga){--ga
}else{++f6
}var f5=f7.charAt(ga);
var f4=cz(f5,f8)?function(gc){return cz(gc,f8)
}:/\s/.test(f5)?function(gc){return/\s/.test(gc)
}:function(gc){return !/\s/.test(gc)&&!cz(gc)
};
while(ga>0&&f4(f7.charAt(ga-1))){--ga
}while(f6<f7.length&&f4(f7.charAt(f6))){++f6
}}return new dP(Y(gb.line,ga),Y(gb.line,f6))
},toggleOverwrite:function(f4){if(f4!=null&&f4==this.state.overwrite){return
}if(this.state.overwrite=!this.state.overwrite){fs(this.display.cursorDiv,"CodeMirror-overwrite")
}else{f(this.display.cursorDiv,"CodeMirror-overwrite")
}aC(this,"overwriteToggle",this,this.state.overwrite)
},hasFocus:function(){return dF()==this.display.input
},scrollTo:c4(function(f4,f5){if(f4!=null||f5!=null){fu(this)
}if(f4!=null){this.curOp.scrollLeft=f4
}if(f5!=null){this.curOp.scrollTop=f5
}}),getScrollInfo:function(){var f4=this.display.scroller,f5=bh;
return{left:f4.scrollLeft,top:f4.scrollTop,height:f4.scrollHeight-f5,width:f4.scrollWidth-f5,clientHeight:f4.clientHeight-f5,clientWidth:f4.clientWidth-f5}
},scrollIntoView:c4(function(f5,f6){if(f5==null){f5={from:this.doc.sel.primary().head,to:null};
if(f6==null){f6=this.options.cursorScrollMargin
}}else{if(typeof f5=="number"){f5={from:Y(f5,0),to:null}
}else{if(f5.from==null){f5={from:f5,to:null}
}}}if(!f5.to){f5.to=f5.from
}f5.margin=f6||0;
if(f5.from.line!=null){fu(this);
this.curOp.scrollToPos=f5
}else{var f4=J(this,Math.min(f5.from.left,f5.to.left),Math.min(f5.from.top,f5.to.top)-f5.margin,Math.max(f5.from.right,f5.to.right),Math.max(f5.from.bottom,f5.to.bottom)+f5.margin);
this.scrollTo(f4.scrollLeft,f4.scrollTop)
}}),setSize:c4(function(f7,f5){var f4=this;
function f6(f9){return typeof f9=="number"||/^\d+$/.test(String(f9))?f9+"px":f9
}if(f7!=null){f4.display.wrapper.style.width=f6(f7)
}if(f5!=null){f4.display.wrapper.style.height=f6(f5)
}if(f4.options.lineWrapping){aL(this)
}var f8=f4.display.viewFrom;
f4.doc.iter(f8,f4.display.viewTo,function(f9){if(f9.widgets){for(var ga=0;
ga<f9.widgets.length;
ga++){if(f9.widgets[ga].noHScroll){T(f4,f8,"widget");
break
}}}++f8
});
f4.curOp.forceUpdate=true;
aC(f4,"refresh",this)
}),operation:function(f4){return cK(this,f4)
},refresh:c4(function(){var f4=this.display.cachedTextHeight;
ah(this);
this.curOp.forceUpdate=true;
ak(this);
this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop);
c0(this);
if(f4==null||Math.abs(f4-aT(this.display))>0.5){Z(this)
}aC(this,"refresh",this)
}),swapDoc:c4(function(f5){var f4=this.doc;
f4.cm=null;
d2(this,f5);
ak(this);
fg(this);
this.scrollTo(f5.scrollLeft,f5.scrollTop);
this.curOp.forceScroll=true;
ae(this,"swapDoc",this,f4);
return f4
}),getInputField:function(){return this.display.input
},getWrapperElement:function(){return this.display.wrapper
},getScrollerElement:function(){return this.display.scroller
},getGutterElement:function(){return this.display.gutters
}};
bx(K);
var eV=K.defaults={};
var bb=K.optionHandlers={};
function u(f4,f7,f6,f5){K.defaults[f4]=f7;
if(f6){bb[f4]=f5?function(f8,ga,f9){if(f9!=cb){f6(f8,ga,f9)
}}:f6
}}var cb=K.Init={toString:function(){return"CodeMirror.Init"
}};
u("value","",function(f4,f5){f4.setValue(f5)
},true);
u("mode",null,function(f4,f5){f4.doc.modeOption=f5;
bq(f4)
},true);
u("indentUnit",2,bq,true);
u("indentWithTabs",false);
u("smartIndent",true);
u("tabSize",4,function(f4){ec(f4);
ak(f4);
ah(f4)
},true);
u("specialChars",/[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(f4,f5){f4.options.specialChars=new RegExp(f5.source+(f5.test("\t")?"":"|\t"),"g");
f4.refresh()
},true);
u("specialCharPlaceholder",e3,function(f4){f4.refresh()
},true);
u("electricChars",true);
u("rtlMoveVisually",!aM);
u("wholeLineUpdateBefore",true);
u("theme","default",function(f4){cM(f4);
dn(f4)
},true);
u("keyMap","default",function(f4,f8,f5){var f6=fM(f8);
var f7=f5!=K.Init&&fM(f5);
if(f7&&f7.detach){f7.detach(f4,f6)
}if(f6.attach){f6.attach(f4,f7||null)
}});
u("extraKeys",null);
u("lineWrapping",false,ey,true);
u("gutters",[],function(f4){cd(f4.options);
dn(f4)
},true);
u("fixedGutter",true,function(f4,f5){f4.display.gutters.style.left=f5?dO(f4.display)+"px":"0";
f4.refresh()
},true);
u("coverGutterNextToScrollbar",false,eQ,true);
u("lineNumbers",false,function(f4){cd(f4.options);
dn(f4)
},true);
u("firstLineNumber",1,dn,true);
u("lineNumberFormatter",function(f4){return f4
},dn,true);
u("showCursorWhenSelecting",false,bB,true);
u("resetSelectionOnContextMenu",true);
u("readOnly",false,function(f4,f5){if(f5=="nocursor"){aR(f4);
f4.display.input.blur();
f4.display.disabled=true
}else{f4.display.disabled=false;
if(!f5){fg(f4)
}}});
u("disableInput",false,function(f4,f5){if(!f5){fg(f4)
}},true);
u("dragDrop",true);
u("cursorBlinkRate",530);
u("cursorScrollMargin",0);
u("cursorHeight",1,bB,true);
u("singleCursorHeightPerLine",true,bB,true);
u("workTime",100);
u("workDelay",100);
u("flattenSpans",true,ec,true);
u("addModeClass",false,ec,true);
u("pollInterval",100);
u("undoDepth",200,function(f4,f5){f4.doc.history.undoDepth=f5
});
u("historyEventDelay",1250);
u("viewportMargin",10,function(f4){f4.refresh()
},true);
u("maxHighlightLength",10000,ec,true);
u("moveInputWithCursor",true,function(f4,f5){if(!f5){f4.display.inputDiv.style.top=f4.display.inputDiv.style.left=0
}});
u("tabindex",null,function(f4,f5){f4.display.input.tabIndex=f5||""
});
u("autofocus",null);
var dk=K.modes={},aP=K.mimeModes={};
K.defineMode=function(f4,f5){if(!K.defaults.mode&&f4!="null"){K.defaults.mode=f4
}if(arguments.length>2){f5.dependencies=Array.prototype.slice.call(arguments,2)
}dk[f4]=f5
};
K.defineMIME=function(f5,f4){aP[f5]=f4
};
K.resolveMode=function(f4){if(typeof f4=="string"&&aP.hasOwnProperty(f4)){f4=aP[f4]
}else{if(f4&&typeof f4.name=="string"&&aP.hasOwnProperty(f4.name)){var f5=aP[f4.name];
if(typeof f5=="string"){f5={name:f5}
}f4=ck(f5,f4);
f4.name=f5.name
}else{if(typeof f4=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(f4)){return K.resolveMode("application/xml")
}}}if(typeof f4=="string"){return{name:f4}
}else{return f4||{name:"null"}
}};
K.getMode=function(f5,f4){var f4=K.resolveMode(f4);
var f7=dk[f4.name];
if(!f7){return K.getMode(f5,"text/plain")
}var f8=f7(f5,f4);
if(dh.hasOwnProperty(f4.name)){var f6=dh[f4.name];
for(var f9 in f6){if(!f6.hasOwnProperty(f9)){continue
}if(f8.hasOwnProperty(f9)){f8["_"+f9]=f8[f9]
}f8[f9]=f6[f9]
}}f8.name=f4.name;
if(f4.helperType){f8.helperType=f4.helperType
}if(f4.modeProps){for(var f9 in f4.modeProps){f8[f9]=f4.modeProps[f9]
}}return f8
};
K.defineMode("null",function(){return{token:function(f4){f4.skipToEnd()
}}
});
K.defineMIME("text/plain","null");
var dh=K.modeExtensions={};
K.extendMode=function(f6,f5){var f4=dh.hasOwnProperty(f6)?dh[f6]:(dh[f6]={});
aK(f5,f4)
};
K.defineExtension=function(f4,f5){K.prototype[f4]=f5
};
K.defineDocExtension=function(f4,f5){at.prototype[f4]=f5
};
K.defineOption=u;
var a4=[];
K.defineInitHook=function(f4){a4.push(f4)
};
var ff=K.helpers={};
K.registerHelper=function(f5,f4,f6){if(!ff.hasOwnProperty(f5)){ff[f5]=K[f5]={_global:[]}
}ff[f5][f4]=f6
};
K.registerGlobalHelper=function(f6,f5,f4,f7){K.registerHelper(f6,f5,f7);
ff[f6]._global.push({pred:f4,val:f7})
};
var b2=K.copyState=function(f7,f4){if(f4===true){return f4
}if(f7.copyState){return f7.copyState(f4)
}var f6={};
for(var f8 in f4){var f5=f4[f8];
if(f5 instanceof Array){f5=f5.concat([])
}f6[f8]=f5
}return f6
};
var bZ=K.startState=function(f6,f5,f4){return f6.startState?f6.startState(f5,f4):true
};
K.innerMode=function(f6,f4){while(f6.innerMode){var f5=f6.innerMode(f4);
if(!f5||f5.mode==f6){break
}f4=f5.state;
f6=f5.mode
}return f5||{mode:f6,state:f4}
};
var ev=K.commands={selectAll:function(f4){f4.setSelection(Y(f4.firstLine(),0),Y(f4.lastLine()),aa)
},singleSelection:function(f4){f4.setSelection(f4.getCursor("anchor"),f4.getCursor("head"),aa)
},killLine:function(f4){eP(f4,function(f6){if(f6.empty()){var f5=e6(f4.doc,f6.head.line).text.length;
if(f6.head.ch==f5&&f6.head.line<f4.lastLine()){return{from:f6.head,to:Y(f6.head.line+1,0)}
}else{return{from:f6.head,to:Y(f6.head.line,f5)}
}}else{return{from:f6.from(),to:f6.to()}
}})
},deleteLine:function(f4){eP(f4,function(f5){return{from:Y(f5.from().line,0),to:fB(f4.doc,Y(f5.to().line+1,0))}
})
},delLineLeft:function(f4){eP(f4,function(f5){return{from:Y(f5.from().line,0),to:f5.from()}
})
},delWrappedLineLeft:function(f4){eP(f4,function(f5){var f7=f4.charCoords(f5.head,"div").top+5;
var f6=f4.coordsChar({left:0,top:f7},"div");
return{from:f6,to:f5.from()}
})
},delWrappedLineRight:function(f4){eP(f4,function(f5){var f7=f4.charCoords(f5.head,"div").top+5;
var f6=f4.coordsChar({left:f4.display.lineDiv.offsetWidth+100,top:f7},"div");
return{from:f5.from(),to:f6}
})
},undo:function(f4){f4.undo()
},redo:function(f4){f4.redo()
},undoSelection:function(f4){f4.undoSelection()
},redoSelection:function(f4){f4.redoSelection()
},goDocStart:function(f4){f4.extendSelection(Y(f4.firstLine(),0))
},goDocEnd:function(f4){f4.extendSelection(Y(f4.lastLine()))
},goLineStart:function(f4){f4.extendSelectionsBy(function(f5){return bs(f4,f5.head.line)
},{origin:"+move",bias:1})
},goLineStartSmart:function(f4){f4.extendSelectionsBy(function(f5){return dA(f4,f5.head)
},{origin:"+move",bias:1})
},goLineEnd:function(f4){f4.extendSelectionsBy(function(f5){return dG(f4,f5.head.line)
},{origin:"+move",bias:-1})
},goLineRight:function(f4){f4.extendSelectionsBy(function(f5){var f6=f4.charCoords(f5.head,"div").top+5;
return f4.coordsChar({left:f4.display.lineDiv.offsetWidth+100,top:f6},"div")
},cS)
},goLineLeft:function(f4){f4.extendSelectionsBy(function(f5){var f6=f4.charCoords(f5.head,"div").top+5;
return f4.coordsChar({left:0,top:f6},"div")
},cS)
},goLineLeftSmart:function(f4){f4.extendSelectionsBy(function(f5){var f6=f4.charCoords(f5.head,"div").top+5;
var f7=f4.coordsChar({left:0,top:f6},"div");
if(f7.ch<f4.getLine(f7.line).search(/\S/)){return dA(f4,f5.head)
}return f7
},cS)
},goLineUp:function(f4){f4.moveV(-1,"line")
},goLineDown:function(f4){f4.moveV(1,"line")
},goPageUp:function(f4){f4.moveV(-1,"page")
},goPageDown:function(f4){f4.moveV(1,"page")
},goCharLeft:function(f4){f4.moveH(-1,"char")
},goCharRight:function(f4){f4.moveH(1,"char")
},goColumnLeft:function(f4){f4.moveH(-1,"column")
},goColumnRight:function(f4){f4.moveH(1,"column")
},goWordLeft:function(f4){f4.moveH(-1,"word")
},goGroupRight:function(f4){f4.moveH(1,"group")
},goGroupLeft:function(f4){f4.moveH(-1,"group")
},goWordRight:function(f4){f4.moveH(1,"word")
},delCharBefore:function(f4){f4.deleteH(-1,"char")
},delCharAfter:function(f4){f4.deleteH(1,"char")
},delWordBefore:function(f4){f4.deleteH(-1,"word")
},delWordAfter:function(f4){f4.deleteH(1,"word")
},delGroupBefore:function(f4){f4.deleteH(-1,"group")
},delGroupAfter:function(f4){f4.deleteH(1,"group")
},indentAuto:function(f4){f4.indentSelection("smart")
},indentMore:function(f4){f4.indentSelection("add")
},indentLess:function(f4){f4.indentSelection("subtract")
},insertTab:function(f4){f4.replaceSelection("\t")
},insertSoftTab:function(f4){var f6=[],f5=f4.listSelections(),f9=f4.options.tabSize;
for(var f8=0;
f8<f5.length;
f8++){var ga=f5[f8].from();
var f7=bS(f4.getLine(ga.line),ga.ch,f9);
f6.push(new Array(f9-f7%f9+1).join(" "))
}f4.replaceSelections(f6)
},defaultTab:function(f4){if(f4.somethingSelected()){f4.indentSelection("add")
}else{f4.execCommand("insertTab")
}},transposeChars:function(f4){cK(f4,function(){var f7=f4.listSelections(),f6=[];
for(var f8=0;
f8<f7.length;
f8++){var ga=f7[f8].head,f5=e6(f4.doc,ga.line).text;
if(f5){if(ga.ch==f5.length){ga=new Y(ga.line,ga.ch-1)
}if(ga.ch>0){ga=new Y(ga.line,ga.ch+1);
f4.replaceRange(f5.charAt(ga.ch-1)+f5.charAt(ga.ch-2),Y(ga.line,ga.ch-2),ga,"+transpose")
}else{if(ga.line>f4.doc.first){var f9=e6(f4.doc,ga.line-1).text;
if(f9){f4.replaceRange(f5.charAt(0)+"\n"+f9.charAt(f9.length-1),Y(ga.line-1,f9.length-1),Y(ga.line,1),"+transpose")
}}}}f6.push(new dP(ga,ga))
}f4.setSelections(f6)
})
},newlineAndIndent:function(f4){cK(f4,function(){var f5=f4.listSelections().length;
for(var f7=0;
f7<f5;
f7++){var f6=f4.listSelections()[f7];
f4.replaceRange("\n",f6.anchor,f6.head,"+input");
f4.indentLine(f6.from().line+1,null,true);
fy(f4)
}})
},toggleOverwrite:function(f4){f4.toggleOverwrite()
}};
var e1=K.keyMap={};
e1.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"};
e1.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"};
e1.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"};
e1.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]};
e1["default"]=b6?e1.macDefault:e1.pcDefault;
function dl(f5){var gb=f5.split(/-(?!$)/),f5=gb[gb.length-1];
var ga,f9,f4,f8;
for(var f7=0;
f7<gb.length-1;
f7++){var f6=gb[f7];
if(/^(cmd|meta|m)$/i.test(f6)){f8=true
}else{if(/^a(lt)?$/i.test(f6)){ga=true
}else{if(/^(c|ctrl|control)$/i.test(f6)){f9=true
}else{if(/^s(hift)$/i.test(f6)){f4=true
}else{throw new Error("Unrecognized modifier name: "+f6)
}}}}}if(ga){f5="Alt-"+f5
}if(f9){f5="Ctrl-"+f5
}if(f8){f5="Cmd-"+f5
}if(f4){f5="Shift-"+f5
}return f5
}K.normalizeKeyMap=function(gb){var f5={};
for(var ga in gb){if(gb.hasOwnProperty(ga)){var gc=gb[ga];
if(/^(name|fallthrough|(de|at)tach)$/.test(ga)){continue
}if(gc=="..."){delete gb[ga];
continue
}var gd=bR(ga.split(" "),dl);
for(var f9=0;
f9<gd.length;
f9++){var f7,f6;
if(f9==gd.length-1){f6=ga;
f7=gc
}else{f6=gd.slice(0,f9+1).join(" ");
f7="..."
}var f8=f5[f6];
if(!f8){f5[f6]=f7
}else{if(f8!=f7){throw new Error("Inconsistent bindings for "+f6)
}}}delete gb[ga]
}}for(var f4 in f5){gb[f4]=f5[f4]
}return gb
};
var j=K.lookupKey=function(f6,f9,f8){f9=fM(f9);
var f7=f9.call?f9.call(f6):f9[f6];
if(f7===false){return"nothing"
}if(f7==="..."){return"multi"
}if(f7!=null&&f8(f7)){return"handled"
}if(f9.fallthrough){if(Object.prototype.toString.call(f9.fallthrough)!="[object Array]"){return j(f6,f9.fallthrough,f8)
}for(var f5=0;
f5<f9.fallthrough.length;
f5++){var f4=j(f6,f9.fallthrough[f5],f8);
if(f4){return f4
}}}};
var eu=K.isModifierKey=function(f5){var f4=typeof f5=="string"?f5:e7[f5.keyCode];
return f4=="Ctrl"||f4=="Alt"||f4=="Shift"||f4=="Mod"
};
var fj=K.keyName=function(f5,f7){if(dT&&f5.keyCode==34&&f5["char"]){return false
}var f6=e7[f5.keyCode],f4=f6;
if(f4==null||f5.altGraphKey){return false
}if(f5.altKey&&f6!="Alt"){f4="Alt-"+f4
}if((bP?f5.metaKey:f5.ctrlKey)&&f6!="Ctrl"){f4="Ctrl-"+f4
}if((bP?f5.ctrlKey:f5.metaKey)&&f6!="Cmd"){f4="Cmd-"+f4
}if(!f7&&f5.shiftKey&&f6!="Shift"){f4="Shift-"+f4
}return f4
};
function fM(f4){return typeof f4=="string"?e1[f4]:f4
}K.fromTextArea=function(gb,gc){if(!gc){gc={}
}gc.value=gb.value;
if(!gc.tabindex&&gb.tabindex){gc.tabindex=gb.tabindex
}if(!gc.placeholder&&gb.placeholder){gc.placeholder=gb.placeholder
}if(gc.autofocus==null){var f4=dF();
gc.autofocus=f4==gb||gb.getAttribute("autofocus")!=null&&f4==document.body
}function f8(){gb.value=ga.getValue()
}if(gb.form){bW(gb.form,"submit",f8);
if(!gc.leaveSubmitMethodAlone){var f5=gb.form,f9=f5.submit;
try{var f7=f5.submit=function(){f8();
f5.submit=f9;
f5.submit();
f5.submit=f7
}
}catch(f6){}}}gb.style.display="none";
var ga=K(function(gd){gb.parentNode.insertBefore(gd,gb.nextSibling)
},gc);
ga.save=f8;
ga.getTextArea=function(){return gb
};
ga.toTextArea=function(){ga.toTextArea=isNaN;
f8();
gb.parentNode.removeChild(ga.getWrapperElement());
gb.style.display="";
if(gb.form){d4(gb.form,"submit",f8);
if(typeof gb.form.submit=="function"){gb.form.submit=f9
}}};
return ga
};
var eL=K.StringStream=function(f4,f5){this.pos=this.start=0;
this.string=f4;
this.tabSize=f5||8;
this.lastColumnPos=this.lastColumnValue=0;
this.lineStart=0
};
eL.prototype={eol:function(){return this.pos>=this.string.length
},sol:function(){return this.pos==this.lineStart
},peek:function(){return this.string.charAt(this.pos)||undefined
},next:function(){if(this.pos<this.string.length){return this.string.charAt(this.pos++)
}},eat:function(f4){var f6=this.string.charAt(this.pos);
if(typeof f4=="string"){var f5=f6==f4
}else{var f5=f6&&(f4.test?f4.test(f6):f4(f6))
}if(f5){++this.pos;
return f6
}},eatWhile:function(f4){var f5=this.pos;
while(this.eat(f4)){}return this.pos>f5
},eatSpace:function(){var f4=this.pos;
while(/[\s\u00a0]/.test(this.string.charAt(this.pos))){++this.pos
}return this.pos>f4
},skipToEnd:function(){this.pos=this.string.length
},skipTo:function(f4){var f5=this.string.indexOf(f4,this.pos);
if(f5>-1){this.pos=f5;
return true
}},backUp:function(f4){this.pos-=f4
},column:function(){if(this.lastColumnPos<this.start){this.lastColumnValue=bS(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue);
this.lastColumnPos=this.start
}return this.lastColumnValue-(this.lineStart?bS(this.string,this.lineStart,this.tabSize):0)
},indentation:function(){return bS(this.string,null,this.tabSize)-(this.lineStart?bS(this.string,this.lineStart,this.tabSize):0)
},match:function(f8,f5,f4){if(typeof f8=="string"){var f9=function(ga){return f4?ga.toLowerCase():ga
};
var f7=this.string.substr(this.pos,f8.length);
if(f9(f7)==f9(f8)){if(f5!==false){this.pos+=f8.length
}return true
}}else{var f6=this.string.slice(this.pos).match(f8);
if(f6&&f6.index>0){return null
}if(f6&&f5!==false){this.pos+=f6[0].length
}return f6
}},current:function(){return this.string.slice(this.start,this.pos)
},hideFirstChars:function(f5,f4){this.lineStart+=f5;
try{return f4()
}finally{this.lineStart-=f5
}}};
var R=K.TextMarker=function(f5,f4){this.lines=[];
this.type=f4;
this.doc=f5
};
bx(R);
R.prototype.clear=function(){if(this.explicitlyCleared){return
}var gb=this.doc.cm,f5=gb&&!gb.curOp;
if(f5){cG(gb)
}if(e9(this,"clear")){var gc=this.find();
if(gc){ae(this,"clear",gc.from,gc.to)
}}var f6=null,f9=null;
for(var f7=0;
f7<this.lines.length;
++f7){var gd=this.lines[f7];
var ga=e0(gd.markedSpans,this);
if(gb&&!this.collapsed){T(gb,bM(gd),"text")
}else{if(gb){if(ga.to!=null){f9=bM(gd)
}if(ga.from!=null){f6=bM(gd)
}}}gd.markedSpans=ez(gd.markedSpans,ga);
if(ga.from==null&&this.collapsed&&!fo(this.doc,gd)&&gb){fS(gd,aT(gb.display))
}}if(gb&&this.collapsed&&!gb.options.lineWrapping){for(var f7=0;
f7<this.lines.length;
++f7){var f4=A(this.lines[f7]),f8=ed(f4);
if(f8>gb.display.maxLineLength){gb.display.maxLine=f4;
gb.display.maxLineLength=f8;
gb.display.maxLineChanged=true
}}}if(f6!=null&&gb&&this.collapsed){ah(gb,f6,f9+1)
}this.lines.length=0;
this.explicitlyCleared=true;
if(this.atomic&&this.doc.cantEdit){this.doc.cantEdit=false;
if(gb){ep(gb.doc)
}}if(gb){ae(gb,"markerCleared",gb,this)
}if(f5){am(gb)
}if(this.parent){this.parent.clear()
}};
R.prototype.find=function(f7,f5){if(f7==null&&this.type=="bookmark"){f7=1
}var ga,f9;
for(var f6=0;
f6<this.lines.length;
++f6){var f4=this.lines[f6];
var f8=e0(f4.markedSpans,this);
if(f8.from!=null){ga=Y(f5?f4:bM(f4),f8.from);
if(f7==-1){return ga
}}if(f8.to!=null){f9=Y(f5?f4:bM(f4),f8.to);
if(f7==1){return f9
}}}return ga&&{from:ga,to:f9}
};
R.prototype.changed=function(){var f6=this.find(-1,true),f5=this,f4=this.doc.cm;
if(!f6||!f4){return
}cK(f4,function(){var f8=f6.line,f9=bM(f6.line);
var f7=e2(f4,f9);
if(f7){au(f7);
f4.curOp.selectionChanged=f4.curOp.forceUpdate=true
}f4.curOp.updateMaxLine=true;
if(!fo(f5.doc,f8)&&f5.height!=null){var gb=f5.height;
f5.height=null;
var ga=cU(f5)-gb;
if(ga){fS(f8,f8.height+ga)
}}})
};
R.prototype.attachLine=function(f4){if(!this.lines.length&&this.doc.cm){var f5=this.doc.cm.curOp;
if(!f5.maybeHiddenMarkers||dd(f5.maybeHiddenMarkers,this)==-1){(f5.maybeUnhiddenMarkers||(f5.maybeUnhiddenMarkers=[])).push(this)
}}this.lines.push(f4)
};
R.prototype.detachLine=function(f4){this.lines.splice(dd(this.lines,f4),1);
if(!this.lines.length&&this.doc.cm){var f5=this.doc.cm.curOp;
(f5.maybeHiddenMarkers||(f5.maybeHiddenMarkers=[])).push(this)
}};
var a1=0;
function ex(gc,ga,gb,ge,f8){if(ge&&ge.shared){return Q(gc,ga,gb,ge,f8)
}if(gc.cm&&!gc.cm.curOp){return cY(gc.cm,ex)(gc,ga,gb,ge,f8)
}var f7=new R(gc,f8),gd=ce(ga,gb);
if(ge){aK(ge,f7,false)
}if(gd>0||gd==0&&f7.clearWhenEmpty!==false){return f7
}if(f7.replacedWith){f7.collapsed=true;
f7.widgetNode=fO("span",[f7.replacedWith],"CodeMirror-widget");
if(!ge.handleMouseEvents){f7.widgetNode.ignoreEvents=true
}if(ge.insertLeft){f7.widgetNode.insertLeft=true
}}if(f7.collapsed){if(B(gc,ga.line,ga,gb,f7)||ga.line!=gb.line&&B(gc,gb.line,ga,gb,f7)){throw new Error("Inserting collapsed marker partially overlapping an existing one")
}a3=true
}if(f7.addToHistory){fE(gc,{from:ga,to:gb,origin:"markText"},gc.sel,NaN)
}var f5=ga.line,f9=gc.cm,f4;
gc.iter(f5,gb.line+1,function(gf){if(f9&&f7.collapsed&&!f9.options.lineWrapping&&A(gf)==f9.display.maxLine){f4=true
}if(f7.collapsed&&f5!=ga.line){fS(gf,0)
}cc(gf,new d9(f7,f5==ga.line?ga.ch:null,f5==gb.line?gb.ch:null));
++f5
});
if(f7.collapsed){gc.iter(ga.line,gb.line+1,function(gf){if(fo(gc,gf)){fS(gf,0)
}})
}if(f7.clearOnEnter){bW(f7,"beforeCursorEnter",function(){f7.clear()
})
}if(f7.readOnly){fZ=true;
if(gc.history.done.length||gc.history.undone.length){gc.clearHistory()
}}if(f7.collapsed){f7.id=++a1;
f7.atomic=true
}if(f9){if(f4){f9.curOp.updateMaxLine=true
}if(f7.collapsed){ah(f9,ga.line,gb.line+1)
}else{if(f7.className||f7.title||f7.startStyle||f7.endStyle){for(var f6=ga.line;
f6<=gb.line;
f6++){T(f9,f6,"text")
}}}if(f7.atomic){ep(f9.doc)
}ae(f9,"markerAdded",f9,f7)
}return f7
}var z=K.SharedTextMarker=function(f6,f5){this.markers=f6;
this.primary=f5;
for(var f4=0;
f4<f6.length;
++f4){f6[f4].parent=this
}};
bx(z);
z.prototype.clear=function(){if(this.explicitlyCleared){return
}this.explicitlyCleared=true;
for(var f4=0;
f4<this.markers.length;
++f4){this.markers[f4].clear()
}ae(this,"clear")
};
z.prototype.find=function(f5,f4){return this.primary.find(f5,f4)
};
function Q(f8,gb,ga,f4,f6){f4=aK(f4);
f4.shared=false;
var f9=[ex(f8,gb,ga,f4,f6)],f5=f9[0];
var f7=f4.widgetNode;
dY(f8,function(gd){if(f7){f4.widgetNode=f7.cloneNode(true)
}f9.push(ex(gd,fB(gd,gb),fB(gd,ga),f4,f6));
for(var gc=0;
gc<gd.linked.length;
++gc){if(gd.linked[gc].isParent){return
}}f5=fz(f9)
});
return new z(f9,f5)
}function eH(f4){return f4.findMarks(Y(f4.first,0),f4.clipPos(Y(f4.lastLine())),function(f5){return f5.parent
})
}function dx(f9,ga){for(var f7=0;
f7<ga.length;
f7++){var f5=ga[f7],gb=f5.find();
var f4=f9.clipPos(gb.from),f8=f9.clipPos(gb.to);
if(ce(f4,f8)){var f6=ex(f9,f4,f8,f5.primary,f5.primary.type);
f5.markers.push(f6);
f6.parent=f5
}}}function ef(f7){for(var f6=0;
f6<f7.length;
f6++){var f4=f7[f6],f9=[f4.primary.doc];
dY(f4.primary.doc,function(ga){f9.push(ga)
});
for(var f5=0;
f5<f4.markers.length;
f5++){var f8=f4.markers[f5];
if(dd(f9,f8.doc)==-1){f8.parent=null;
f4.markers.splice(f5--,1)
}}}}function d9(f4,f6,f5){this.marker=f4;
this.from=f6;
this.to=f5
}function e0(f6,f4){if(f6){for(var f5=0;
f5<f6.length;
++f5){var f7=f6[f5];
if(f7.marker==f4){return f7
}}}}function ez(f5,f6){for(var f7,f4=0;
f4<f5.length;
++f4){if(f5[f4]!=f6){(f7||(f7=[])).push(f5[f4])
}}return f7
}function cc(f4,f5){f4.markedSpans=f4.markedSpans?f4.markedSpans.concat([f5]):[f5];
f5.marker.attachLine(f4)
}function aN(f5,f6,ga){if(f5){for(var f8=0,gb;
f8<f5.length;
++f8){var gc=f5[f8],f9=gc.marker;
var f4=gc.from==null||(f9.inclusiveLeft?gc.from<=f6:gc.from<f6);
if(f4||gc.from==f6&&f9.type=="bookmark"&&(!ga||!gc.marker.insertLeft)){var f7=gc.to==null||(f9.inclusiveRight?gc.to>=f6:gc.to>f6);
(gb||(gb=[])).push(new d9(f9,gc.from,f7?null:gc.to))
}}}return gb
}function aA(f5,f7,ga){if(f5){for(var f8=0,gb;
f8<f5.length;
++f8){var gc=f5[f8],f9=gc.marker;
var f6=gc.to==null||(f9.inclusiveRight?gc.to>=f7:gc.to>f7);
if(f6||gc.from==f7&&f9.type=="bookmark"&&(!ga||gc.marker.insertLeft)){var f4=gc.from==null||(f9.inclusiveLeft?gc.from<=f7:gc.from<f7);
(gb||(gb=[])).push(new d9(f9,f4?null:gc.from-f7,gc.to==null?null:gc.to-f7))
}}}return gb
}function eb(gg,gd){var gc=b8(gg,gd.from.line)&&e6(gg,gd.from.line).markedSpans;
var gj=b8(gg,gd.to.line)&&e6(gg,gd.to.line).markedSpans;
if(!gc&&!gj){return null
}var f5=gd.from.ch,f8=gd.to.ch,gb=ce(gd.from,gd.to)==0;
var ga=aN(gc,f5,gb);
var gi=aA(gj,f8,gb);
var gh=gd.text.length==1,f6=fz(gd.text).length+(gh?f5:0);
if(ga){for(var f7=0;
f7<ga.length;
++f7){var gf=ga[f7];
if(gf.to==null){var gk=e0(gi,gf.marker);
if(!gk){gf.to=f5
}else{if(gh){gf.to=gk.to==null?null:gk.to+f6
}}}}}if(gi){for(var f7=0;
f7<gi.length;
++f7){var gf=gi[f7];
if(gf.to!=null){gf.to+=f6
}if(gf.from==null){var gk=e0(ga,gf.marker);
if(!gk){gf.from=f6;
if(gh){(ga||(ga=[])).push(gf)
}}}else{gf.from+=f6;
if(gh){(ga||(ga=[])).push(gf)
}}}}if(ga){ga=s(ga)
}if(gi&&gi!=ga){gi=s(gi)
}var f9=[ga];
if(!gh){var ge=gd.text.length-2,f4;
if(ge>0&&ga){for(var f7=0;
f7<ga.length;
++f7){if(ga[f7].to==null){(f4||(f4=[])).push(new d9(ga[f7].marker,null,null))
}}}for(var f7=0;
f7<ge;
++f7){f9.push(f4)
}f9.push(gi)
}return f9
}function s(f5){for(var f4=0;
f4<f5.length;
++f4){var f6=f5[f4];
if(f6.from!=null&&f6.from==f6.to&&f6.marker.clearWhenEmpty!==false){f5.splice(f4--,1)
}}if(!f5.length){return null
}return f5
}function d0(gc,ga){var f4=b3(gc,ga);
var gd=eb(gc,ga);
if(!f4){return gd
}if(!gd){return f4
}for(var f7=0;
f7<f4.length;
++f7){var f8=f4[f7],f9=gd[f7];
if(f8&&f9){spans:for(var f6=0;
f6<f9.length;
++f6){var gb=f9[f6];
for(var f5=0;
f5<f8.length;
++f5){if(f8[f5].marker==gb.marker){continue spans
}}f8.push(gb)
}}else{if(f9){f4[f7]=f9
}}}return f4
}function cF(gg,ge,gf){var f8=null;
gg.iter(ge.line,gf.line+1,function(gh){if(gh.markedSpans){for(var gi=0;
gi<gh.markedSpans.length;
++gi){var gj=gh.markedSpans[gi].marker;
if(gj.readOnly&&(!f8||dd(f8,gj)==-1)){(f8||(f8=[])).push(gj)
}}}});
if(!f8){return null
}var f9=[{from:ge,to:gf}];
for(var ga=0;
ga<f8.length;
++ga){var gb=f8[ga],f6=gb.find(0);
for(var f7=0;
f7<f9.length;
++f7){var f5=f9[f7];
if(ce(f5.to,f6.from)<0||ce(f5.from,f6.to)>0){continue
}var gd=[f7,1],f4=ce(f5.from,f6.from),gc=ce(f5.to,f6.to);
if(f4<0||!gb.inclusiveLeft&&!f4){gd.push({from:f5.from,to:f6.from})
}if(gc>0||!gb.inclusiveRight&&!gc){gd.push({from:f6.to,to:f5.to})
}f9.splice.apply(f9,gd);
f7+=gd.length-1
}}return f9
}function fV(f4){var f6=f4.markedSpans;
if(!f6){return
}for(var f5=0;
f5<f6.length;
++f5){f6[f5].marker.detachLine(f4)
}f4.markedSpans=null
}function cZ(f4,f6){if(!f6){return
}for(var f5=0;
f5<f6.length;
++f5){f6[f5].marker.attachLine(f4)
}f4.markedSpans=f6
}function x(f4){return f4.inclusiveLeft?-1:0
}function bV(f4){return f4.inclusiveRight?1:0
}function dH(f7,f5){var f9=f7.lines.length-f5.lines.length;
if(f9!=0){return f9
}var f6=f7.find(),ga=f5.find();
var f4=ce(f6.from,ga.from)||x(f7)-x(f5);
if(f4){return -f4
}var f8=ce(f6.to,ga.to)||bV(f7)-bV(f5);
if(f8){return f8
}return f5.id-f7.id
}function a2(f5,f9){var f4=a3&&f5.markedSpans,f8;
if(f4){for(var f7,f6=0;
f6<f4.length;
++f6){f7=f4[f6];
if(f7.marker.collapsed&&(f9?f7.from:f7.to)==null&&(!f8||dH(f8,f7.marker)<0)){f8=f7.marker
}}}return f8
}function eG(f4){return a2(f4,true)
}function em(f4){return a2(f4,false)
}function B(gc,f6,ga,gb,f8){var gf=e6(gc,f6);
var f4=a3&&gf.markedSpans;
if(f4){for(var f7=0;
f7<f4.length;
++f7){var f5=f4[f7];
if(!f5.marker.collapsed){continue
}var ge=f5.marker.find(0);
var gd=ce(ge.from,ga)||x(f5.marker)-x(f8);
var f9=ce(ge.to,gb)||bV(f5.marker)-bV(f8);
if(gd>=0&&f9<=0||gd<=0&&f9>=0){continue
}if(gd<=0&&(ce(ge.to,ga)>0||(f5.marker.inclusiveRight&&f8.inclusiveLeft))||gd>=0&&(ce(ge.from,gb)<0||(f5.marker.inclusiveLeft&&f8.inclusiveRight))){return true
}}}}function A(f5){var f4;
while(f4=eG(f5)){f5=f4.find(-1,true).line
}return f5
}function h(f6){var f4,f5;
while(f4=em(f6)){f6=f4.find(1,true).line;
(f5||(f5=[])).push(f6)
}return f5
}function aS(f7,f5){var f4=e6(f7,f5),f6=A(f4);
if(f4==f6){return f5
}return bM(f6)
}function dU(f7,f6){if(f6>f7.lastLine()){return f6
}var f5=e6(f7,f6),f4;
if(!fo(f7,f5)){return f6
}while(f4=em(f5)){f5=f4.find(1,true).line
}return bM(f5)+1
}function fo(f8,f5){var f4=a3&&f5.markedSpans;
if(f4){for(var f7,f6=0;
f6<f4.length;
++f6){f7=f4[f6];
if(!f7.marker.collapsed){continue
}if(f7.from==null){return true
}if(f7.marker.widgetNode){continue
}if(f7.from==0&&f7.marker.inclusiveLeft&&V(f8,f5,f7)){return true
}}}}function V(f9,f5,f7){if(f7.to==null){var f4=f7.marker.find(1,true);
return V(f9,f4.line,e0(f4.line.markedSpans,f7.marker))
}if(f7.marker.inclusiveRight&&f7.to==f5.text.length){return true
}for(var f8,f6=0;
f6<f5.markedSpans.length;
++f6){f8=f5.markedSpans[f6];
if(f8.marker.collapsed&&!f8.marker.widgetNode&&f8.from==f7.to&&(f8.to==null||f8.to!=f7.from)&&(f8.marker.inclusiveLeft||f7.marker.inclusiveRight)&&V(f9,f5,f8)){return true
}}}var du=K.LineWidget=function(f4,f7,f5){if(f5){for(var f6 in f5){if(f5.hasOwnProperty(f6)){this[f6]=f5[f6]
}}}this.cm=f4;
this.node=f7
};
bx(du);
function dR(f4,f5,f6){if(bL(f5)<((f4.curOp&&f4.curOp.scrollTop)||f4.doc.scrollTop)){cJ(f4,null,f6)
}}du.prototype.clear=function(){var f5=this.cm,f7=this.line.widgets,f6=this.line,f9=bM(f6);
if(f9==null||!f7){return
}for(var f8=0;
f8<f7.length;
++f8){if(f7[f8]==this){f7.splice(f8--,1)
}}if(!f7.length){f6.widgets=null
}var f4=cU(this);
cK(f5,function(){dR(f5,f6,-f4);
T(f5,f9,"widget");
fS(f6,Math.max(0,f6.height-f4))
})
};
du.prototype.changed=function(){var f5=this.height,f4=this.cm,f6=this.line;
this.height=null;
var f7=cU(this)-f5;
if(!f7){return
}cK(f4,function(){f4.curOp.forceUpdate=true;
dR(f4,f6,f7);
fS(f6,f6.height+f7)
})
};
function cU(f5){if(f5.height!=null){return f5.height
}if(!fX(document.body,f5.node)){var f4="position: relative;";
if(f5.coverGutter){f4+="margin-left: -"+f5.cm.getGutterElement().offsetWidth+"px;"
}bQ(f5.cm.display.measure,fO("div",[f5.node],null,f4))
}return f5.height=f5.node.offsetHeight
}function bG(f4,f8,f6,f5){var f7=new du(f4,f6,f5);
if(f7.noHScroll){f4.display.alignWidgets=true
}eq(f4.doc,f8,"widget",function(ga){var gb=ga.widgets||(ga.widgets=[]);
if(f7.insertAt==null){gb.push(f7)
}else{gb.splice(Math.min(gb.length-1,Math.max(0,f7.insertAt)),0,f7)
}f7.line=ga;
if(!fo(f4.doc,ga)){var f9=bL(ga)<f4.doc.scrollTop;
fS(ga,ga.height+cU(f7));
if(f9){cJ(f4,null,f7.height)
}f4.curOp.forceUpdate=true
}return true
});
return f7
}var fU=K.Line=function(f6,f5,f4){this.text=f6;
cZ(this,f5);
this.height=f4?f4(this):1
};
bx(fU);
fU.prototype.lineNo=function(){return bM(this)
};
function ee(f5,f8,f6,f4){f5.text=f8;
if(f5.stateAfter){f5.stateAfter=null
}if(f5.styles){f5.styles=null
}if(f5.order!=null){f5.order=null
}fV(f5);
cZ(f5,f6);
var f7=f4?f4(f5):1;
if(f7!=f5.height){fS(f5,f7)
}}function bA(f4){f4.parent=null;
fV(f4)
}function de(f6,f5){if(f6){for(;
;
){var f4=f6.match(/(?:^|\s+)line-(background-)?(\S+)/);
if(!f4){break
}f6=f6.slice(0,f4.index)+f6.slice(f4.index+f4[0].length);
var f7=f4[1]?"bgClass":"textClass";
if(f5[f7]==null){f5[f7]=f4[2]
}else{if(!(new RegExp("(?:^|s)"+f4[2]+"(?:$|s)")).test(f5[f7])){f5[f7]+=" "+f4[2]
}}}}return f6
}function fi(f6,f5){if(f6.blankLine){return f6.blankLine(f5)
}if(!f6.innerMode){return
}var f4=K.innerMode(f6,f5);
if(f4.mode.blankLine){return f4.mode.blankLine(f4.state)
}}function et(f9,f8,f7,f4){for(var f5=0;
f5<10;
f5++){if(f4){f4[0]=K.innerMode(f9,f7).mode
}var f6=f9.token(f8,f7);
if(f8.pos>f8.start){return f6
}}throw new Error("Mode "+f9.name+" failed to advance stream.")
}function cq(gd,gb,f8,f7){function f4(gg){return{start:ge.start,end:ge.pos,string:ge.current(),type:f6||null,state:gg?b2(gc.mode,f5):f5}
}var gc=gd.doc,f9=gc.mode,f6;
gb=fB(gc,gb);
var gf=e6(gc,gb.line),f5=dt(gd,gb.line,f8);
var ge=new eL(gf.text,gd.options.tabSize),ga;
if(f7){ga=[]
}while((f7||ge.pos<gb.ch)&&!ge.eol()){ge.start=ge.pos;
f6=et(f9,ge,f5);
if(f7){ga.push(f4(true))
}}return f7?ga:f4()
}function y(ge,gg,f9,f5,ga,f7,f8){var f6=f9.flattenSpans;
if(f6==null){f6=ge.options.flattenSpans
}var gc=0,gb=null;
var gf=new eL(gg,ge.options.tabSize),f4;
var gi=ge.options.addModeClass&&[null];
if(gg==""){de(fi(f9,f5),f7)
}while(!gf.eol()){if(gf.pos>ge.options.maxHighlightLength){f6=false;
if(f8){dp(ge,gg,f5,gf.pos)
}gf.pos=gg.length;
f4=null
}else{f4=de(et(f9,gf,f5,gi),f7)
}if(gi){var gh=gi[0].name;
if(gh){f4="m-"+(f4?gh+" "+f4:gh)
}}if(!f6||gb!=f4){if(gc<gf.start){ga(gf.start,gb)
}gc=gf.start;
gb=f4
}gf.start=gf.pos
}while(gc<gf.pos){var gd=Math.min(gf.pos,gc+50000);
ga(gd,gb);
gc=gd
}}function fr(gb,gd,f4,f8){var gc=[gb.state.modeGen],f7={};
y(gb,gd.text,gb.doc.mode,f4,function(ge,gf){gc.push(ge,gf)
},f7,f8);
for(var f5=0;
f5<gb.state.overlays.length;
++f5){var f9=gb.state.overlays[f5],ga=1,f6=0;
y(gb,gd.text,f9.mode,true,function(ge,gg){var gi=ga;
while(f6<ge){var gf=gc[ga];
if(gf>ge){gc.splice(ga,1,ge,gc[ga+1],gf)
}ga+=2;
f6=Math.min(ge,gf)
}if(!gg){return
}if(f9.opaque){gc.splice(gi,ga-gi,ge,"cm-overlay "+gg);
ga=gi+2
}else{for(;
gi<ga;
gi+=2){var gh=gc[gi+1];
gc[gi+1]=(gh?gh+" ":"")+"cm-overlay "+gg
}}},f7)
}return{styles:gc,classes:f7.bgClass||f7.textClass?f7:null}
}function c2(f5,f6,f7){if(!f6.styles||f6.styles[0]!=f5.state.modeGen){var f4=fr(f5,f6,f6.stateAfter=dt(f5,bM(f6)));
f6.styles=f4.styles;
if(f4.classes){f6.styleClasses=f4.classes
}else{if(f6.styleClasses){f6.styleClasses=null
}}if(f7===f5.doc.frontier){f5.doc.frontier++
}}return f6.styles
}function dp(f4,f9,f6,f5){var f8=f4.doc.mode;
var f7=new eL(f9,f4.options.tabSize);
f7.start=f7.pos=f5||0;
if(f9==""){fi(f8,f6)
}while(!f7.eol()&&f7.pos<=f4.options.maxHighlightLength){et(f8,f7,f6);
f7.start=f7.pos
}}var dN={},b0={};
function eO(f6,f5){if(!f6||/^\s*$/.test(f6)){return null
}var f4=f5.addModeClass?b0:dN;
return f4[f6]||(f4[f6]=f6.replace(/\S+/g,"cm-$&"))
}function eJ(f5,f9){var ga=fO("span",null,null,cW?"padding-right: .1px":null);
var f7={pre:fO("pre",[ga]),content:ga,col:0,pos:0,cm:f5};
f9.measure={};
for(var f8=0;
f8<=(f9.rest?f9.rest.length:0);
f8++){var f6=f8?f9.rest[f8-1]:f9.line,f4;
f7.pos=0;
f7.addToken=v;
if((dB||cW)&&f5.getOption("lineWrapping")){f7.addToken=fx(f7.addToken)
}if(bN(f5.display.measure)&&(f4=a(f6))){f7.addToken=W(f7.addToken,f4)
}f7.map=[];
var gb=f9!=f5.display.externalMeasured&&bM(f6);
bn(f6,f7,c2(f5,f6,gb));
if(f6.styleClasses){if(f6.styleClasses.bgClass){f7.bgClass=fJ(f6.styleClasses.bgClass,f7.bgClass||"")
}if(f6.styleClasses.textClass){f7.textClass=fJ(f6.styleClasses.textClass,f7.textClass||"")
}}if(f7.map.length==0){f7.map.push(0,0,f7.content.appendChild(bm(f5.display.measure)))
}if(f8==0){f9.measure.map=f7.map;
f9.measure.cache={}
}else{(f9.measure.maps||(f9.measure.maps=[])).push(f7.map);
(f9.measure.caches||(f9.measure.caches=[])).push({})
}}if(cW&&/\bcm-tab\b/.test(f7.content.lastChild.className)){f7.content.className="cm-tab-wrap-hack"
}aC(f5,"renderLine",f5,f9.line,f7.pre);
if(f7.pre.className){f7.textClass=fJ(f7.pre.className,f7.textClass||"")
}return f7
}function e3(f5){var f4=fO("span","\u2022","cm-invalidchar");
f4.title="\\u"+f5.charCodeAt(0).toString(16);
return f4
}function v(f9,gj,f4,f7,gk,gi){if(!gj){return
}var ge=f9.cm.options.specialChars,gd=false;
if(!ge.test(gj)){f9.col+=gj.length;
var gc=document.createTextNode(gj);
f9.map.push(f9.pos,f9.pos+gj.length,gc);
if(dB&&m<9){gd=true
}f9.pos+=gj.length
}else{var gc=document.createDocumentFragment(),gg=0;
while(true){ge.lastIndex=gg;
var f5=ge.exec(gj);
var gb=f5?f5.index-gg:gj.length-gg;
if(gb){var f8=document.createTextNode(gj.slice(gg,gg+gb));
if(dB&&m<9){gc.appendChild(fO("span",[f8]))
}else{gc.appendChild(f8)
}f9.map.push(f9.pos,f9.pos+gb,f8);
f9.col+=gb;
f9.pos+=gb
}if(!f5){break
}gg+=gb+1;
if(f5[0]=="\t"){var ga=f9.cm.options.tabSize,gf=ga-f9.col%ga;
var f8=gc.appendChild(fO("span",cp(gf),"cm-tab"));
f9.col+=gf
}else{var f8=f9.cm.options.specialCharPlaceholder(f5[0]);
if(dB&&m<9){gc.appendChild(fO("span",[f8]))
}else{gc.appendChild(f8)
}f9.col+=1
}f9.map.push(f9.pos,f9.pos+1,f8);
f9.pos++
}}if(f4||f7||gk||gd){var gh=f4||"";
if(f7){gh+=f7
}if(gk){gh+=gk
}var f6=fO("span",[gc],gh);
if(gi){f6.title=gi
}return f9.content.appendChild(f6)
}f9.content.appendChild(gc)
}function fx(f4){function f5(f6){var f7=" ";
for(var f8=0;
f8<f6.length-2;
++f8){f7+=f8%2?" ":"\u00a0"
}f7+=" ";
return f7
}return function(f7,gb,f8,f6,ga,f9){f4(f7,gb.replace(/ {3,}/g,f5),f8,f6,ga,f9)
}
}function W(f5,f4){return function(gc,ge,f6,ga,gf,gd){f6=f6?f6+" cm-force-border":"cm-force-border";
var f7=gc.pos,f9=f7+ge.length;
for(;
;
){for(var gb=0;
gb<f4.length;
gb++){var f8=f4[gb];
if(f8.to>f7&&f8.from<=f7){break
}}if(f8.to>=f9){return f5(gc,ge,f6,ga,gf,gd)
}f5(gc,ge.slice(0,f8.to-f7),f6,ga,null,gd);
ga=null;
ge=ge.slice(f8.to-f7);
f7=f8.to
}}
}function ac(f5,f7,f4,f6){var f8=!f6&&f4.widgetNode;
if(f8){f5.map.push(f5.pos,f5.pos+f7,f8);
f5.content.appendChild(f8)
}f5.pos+=f7
}function bn(gd,gj,gc){var f9=gd.markedSpans,gb=gd.text,gh=0;
if(!f9){for(var gm=1;
gm<gc.length;
gm+=2){gj.addToken(gj,gb.slice(gh,gh=gc[gm]),eO(gc[gm+1],gj.cm.options))
}return
}var gn=gb.length,f8=0,gm=1,gf="",go;
var gq=0,f4,gp,gg,gr,f6;
for(;
;
){if(gq==f8){f4=gp=gg=gr="";
f6=null;
gq=Infinity;
var ga=[];
for(var gk=0;
gk<f9.length;
++gk){var gl=f9[gk],gi=gl.marker;
if(gl.from<=f8&&(gl.to==null||gl.to>f8)){if(gl.to!=null&&gq>gl.to){gq=gl.to;
gp=""
}if(gi.className){f4+=" "+gi.className
}if(gi.startStyle&&gl.from==f8){gg+=" "+gi.startStyle
}if(gi.endStyle&&gl.to==gq){gp+=" "+gi.endStyle
}if(gi.title&&!gr){gr=gi.title
}if(gi.collapsed&&(!f6||dH(f6.marker,gi)<0)){f6=gl
}}else{if(gl.from>f8&&gq>gl.from){gq=gl.from
}}if(gi.type=="bookmark"&&gl.from==f8&&gi.widgetNode){ga.push(gi)
}}if(f6&&(f6.from||0)==f8){ac(gj,(f6.to==null?gn+1:f6.to)-f8,f6.marker,f6.from==null);
if(f6.to==null){return
}}if(!f6&&ga.length){for(var gk=0;
gk<ga.length;
++gk){ac(gj,0,ga[gk])
}}}if(f8>=gn){break
}var ge=Math.min(gn,gq);
while(true){if(gf){var f5=f8+gf.length;
if(!f6){var f7=f5>ge?gf.slice(0,ge-f8):gf;
gj.addToken(gj,f7,go?go+f4:f4,gg,f8+f7.length==gq?gp:"",gr)
}if(f5>=ge){gf=gf.slice(ge-f8);
f8=ge;
break
}f8=f5;
gg=""
}gf=gb.slice(gh,gh=gc[gm++]);
go=eO(gc[gm++],gj.cm.options)
}}}function dJ(f4,f5){return f5.from.ch==0&&f5.to.ch==0&&fz(f5.text)==""&&(!f4.cm||f4.cm.options.wholeLineUpdateBefore)
}function fq(gh,gc,f4,f8){function gi(gk){return f4?f4[gk]:null
}function f5(gk,gm,gl){ee(gk,gm,gl,f8);
ae(gk,"change",gk,gc)
}var gf=gc.from,gg=gc.to,gj=gc.text;
var gd=e6(gh,gf.line),ge=e6(gh,gg.line);
var gb=fz(gj),f7=gi(gj.length-1),ga=gg.line-gf.line;
if(dJ(gh,gc)){for(var f6=0,f9=[];
f6<gj.length-1;
++f6){f9.push(new fU(gj[f6],gi(f6),f8))
}f5(ge,ge.text,f7);
if(ga){gh.remove(gf.line,ga)
}if(f9.length){gh.insert(gf.line,f9)
}}else{if(gd==ge){if(gj.length==1){f5(gd,gd.text.slice(0,gf.ch)+gb+gd.text.slice(gg.ch),f7)
}else{for(var f9=[],f6=1;
f6<gj.length-1;
++f6){f9.push(new fU(gj[f6],gi(f6),f8))
}f9.push(new fU(gb+gd.text.slice(gg.ch),f7,f8));
f5(gd,gd.text.slice(0,gf.ch)+gj[0],gi(0));
gh.insert(gf.line+1,f9)
}}else{if(gj.length==1){f5(gd,gd.text.slice(0,gf.ch)+gj[0]+ge.text.slice(gg.ch),gi(0));
gh.remove(gf.line+1,ga)
}else{f5(gd,gd.text.slice(0,gf.ch)+gj[0],gi(0));
f5(ge,gb+ge.text.slice(gg.ch),f7);
for(var f6=1,f9=[];
f6<gj.length-1;
++f6){f9.push(new fU(gj[f6],gi(f6),f8))
}if(ga>1){gh.remove(gf.line+1,ga-1)
}gh.insert(gf.line+1,f9)
}}}ae(gh,"change",gh,gc)
}function eR(f5){this.lines=f5;
this.parent=null;
for(var f6=0,f4=0;
f6<f5.length;
++f6){f5[f6].parent=this;
f4+=f5[f6].height
}this.height=f4
}eR.prototype={chunkSize:function(){return this.lines.length
},removeInner:function(f4,f8){for(var f6=f4,f7=f4+f8;
f6<f7;
++f6){var f5=this.lines[f6];
this.height-=f5.height;
bA(f5);
ae(f5,"delete")
}this.lines.splice(f4,f8)
},collapse:function(f4){f4.push.apply(f4,this.lines)
},insertInner:function(f5,f6,f4){this.height+=f4;
this.lines=this.lines.slice(0,f5).concat(f6).concat(this.lines.slice(f5));
for(var f7=0;
f7<f6.length;
++f7){f6[f7].parent=this
}},iterN:function(f4,f7,f6){for(var f5=f4+f7;
f4<f5;
++f4){if(f6(this.lines[f4])){return true
}}}};
function fp(f7){this.children=f7;
var f6=0,f4=0;
for(var f5=0;
f5<f7.length;
++f5){var f8=f7[f5];
f6+=f8.chunkSize();
f4+=f8.height;
f8.parent=this
}this.size=f6;
this.height=f4;
this.parent=null
}fp.prototype={chunkSize:function(){return this.size
},removeInner:function(f4,gb){this.size-=gb;
for(var f6=0;
f6<this.children.length;
++f6){var ga=this.children[f6],f8=ga.chunkSize();
if(f4<f8){var f7=Math.min(gb,f8-f4),f9=ga.height;
ga.removeInner(f4,f7);
this.height-=f9-ga.height;
if(f8==f7){this.children.splice(f6--,1);
ga.parent=null
}if((gb-=f7)==0){break
}f4=0
}else{f4-=f8
}}if(this.size-gb<25&&(this.children.length>1||!(this.children[0] instanceof eR))){var f5=[];
this.collapse(f5);
this.children=[new eR(f5)];
this.children[0].parent=this
}},collapse:function(f4){for(var f5=0;
f5<this.children.length;
++f5){this.children[f5].collapse(f4)
}},insertInner:function(f5,f6,f4){this.size+=f6.length;
this.height+=f4;
for(var f9=0;
f9<this.children.length;
++f9){var gb=this.children[f9],ga=gb.chunkSize();
if(f5<=ga){gb.insertInner(f5,f6,f4);
if(gb.lines&&gb.lines.length>50){while(gb.lines.length>50){var f8=gb.lines.splice(gb.lines.length-25,25);
var f7=new eR(f8);
gb.height-=f7.height;
this.children.splice(f9+1,0,f7);
f7.parent=this
}this.maybeSpill()
}break
}f5-=ga
}},maybeSpill:function(){if(this.children.length<=10){return
}var f7=this;
do{var f5=f7.children.splice(f7.children.length-5,5);
var f6=new fp(f5);
if(!f7.parent){var f8=new fp(f7.children);
f8.parent=f7;
f7.children=[f8,f6];
f7=f8
}else{f7.size-=f6.size;
f7.height-=f6.height;
var f4=dd(f7.parent.children,f7);
f7.parent.children.splice(f4+1,0,f6)
}f6.parent=f7.parent
}while(f7.children.length>10);
f7.parent.maybeSpill()
},iterN:function(f4,ga,f9){for(var f5=0;
f5<this.children.length;
++f5){var f8=this.children[f5],f7=f8.chunkSize();
if(f4<f7){var f6=Math.min(ga,f7-f4);
if(f8.iterN(f4,f6,f9)){return true
}if((ga-=f6)==0){break
}f4=0
}else{f4-=f7
}}}};
var cr=0;
var at=K.Doc=function(f6,f5,f4){if(!(this instanceof at)){return new at(f6,f5,f4)
}if(f4==null){f4=0
}fp.call(this,[new eR([new fU("",null)])]);
this.first=f4;
this.scrollTop=this.scrollLeft=0;
this.cantEdit=false;
this.cleanGeneration=1;
this.frontier=f4;
var f7=Y(f4,0);
this.sel=eK(f7);
this.history=new fK(null);
this.id=++cr;
this.modeOption=f5;
if(typeof f6=="string"){f6=aW(f6)
}fq(this,{from:f7,to:f7,text:f6});
bT(this,eK(f7),aa)
};
at.prototype=ck(fp.prototype,{constructor:at,iter:function(f6,f5,f4){if(f4){this.iterN(f6-this.first,f5-f6,f4)
}else{this.iterN(this.first,this.first+this.size,f6)
}},insert:function(f5,f6){var f4=0;
for(var f7=0;
f7<f6.length;
++f7){f4+=f6[f7].height
}this.insertInner(f5-this.first,f6,f4)
},remove:function(f4,f5){this.removeInner(f4-this.first,f5)
},getValue:function(f5){var f4=aY(this,this.first,this.first+this.size);
if(f5===false){return f4
}return f4.join(f5||"\n")
},setValue:cC(function(f5){var f6=Y(this.first,0),f4=this.first+this.size-1;
bc(this,{from:f6,to:Y(f4,e6(this,f4).text.length),text:aW(f5),origin:"setValue"},true);
bT(this,eK(f6))
}),replaceRange:function(f5,f7,f6,f4){f7=fB(this,f7);
f6=f6?fB(this,f6):f7;
aX(this,f5,f7,f6,f4)
},getRange:function(f7,f6,f5){var f4=fQ(this,fB(this,f7),fB(this,f6));
if(f5===false){return f4
}return f4.join(f5||"\n")
},getLine:function(f5){var f4=this.getLineHandle(f5);
return f4&&f4.text
},getLineHandle:function(f4){if(b8(this,f4)){return e6(this,f4)
}},getLineNumber:function(f4){return bM(f4)
},getLineHandleVisualStart:function(f4){if(typeof f4=="number"){f4=e6(this,f4)
}return A(f4)
},lineCount:function(){return this.size
},firstLine:function(){return this.first
},lastLine:function(){return this.first+this.size-1
},clipPos:function(f4){return fB(this,f4)
},getCursor:function(f6){var f4=this.sel.primary(),f5;
if(f6==null||f6=="head"){f5=f4.head
}else{if(f6=="anchor"){f5=f4.anchor
}else{if(f6=="end"||f6=="to"||f6===false){f5=f4.to()
}else{f5=f4.from()
}}}return f5
},listSelections:function(){return this.sel.ranges
},somethingSelected:function(){return this.sel.somethingSelected()
},setCursor:cC(function(f4,f6,f5){I(this,fB(this,typeof f4=="number"?Y(f4,f6||0):f4),null,f5)
}),setSelection:cC(function(f5,f6,f4){I(this,fB(this,f5),fB(this,f6||f5),f4)
}),extendSelection:cC(function(f6,f4,f5){fL(this,fB(this,f6),f4&&fB(this,f4),f5)
}),extendSelections:cC(function(f5,f4){aw(this,dQ(this,f5,f4))
}),extendSelectionsBy:cC(function(f5,f4){aw(this,bR(this.sel.ranges,f5),f4)
}),setSelections:cC(function(f4,f8,f6){if(!f4.length){return
}for(var f7=0,f5=[];
f7<f4.length;
f7++){f5[f7]=new dP(fB(this,f4[f7].anchor),fB(this,f4[f7].head))
}if(f8==null){f8=Math.min(f4.length-1,this.sel.primIndex)
}bT(this,cw(f5,f8),f6)
}),addSelection:cC(function(f6,f7,f5){var f4=this.sel.ranges.slice(0);
f4.push(new dP(fB(this,f6),fB(this,f7||f6)));
bT(this,cw(f4,f4.length-1),f5)
}),getSelection:function(f8){var f5=this.sel.ranges,f4;
for(var f6=0;
f6<f5.length;
f6++){var f7=fQ(this,f5[f6].from(),f5[f6].to());
f4=f4?f4.concat(f7):f7
}if(f8===false){return f4
}else{return f4.join(f8||"\n")
}},getSelections:function(f8){var f7=[],f4=this.sel.ranges;
for(var f5=0;
f5<f4.length;
f5++){var f6=fQ(this,f4[f5].from(),f4[f5].to());
if(f8!==false){f6=f6.join(f8||"\n")
}f7[f5]=f6
}return f7
},replaceSelection:function(f6,f8,f4){var f7=[];
for(var f5=0;
f5<this.sel.ranges.length;
f5++){f7[f5]=f6
}this.replaceSelections(f7,f8,f4||"+input")
},replaceSelections:cC(function(f9,gb,f6){var f8=[],ga=this.sel;
for(var f7=0;
f7<ga.ranges.length;
f7++){var f5=ga.ranges[f7];
f8[f7]={from:f5.from(),to:f5.to(),text:aW(f9[f7]),origin:f6}
}var f4=gb&&gb!="end"&&af(this,f8,gb);
for(var f7=f8.length-1;
f7>=0;
f7--){bc(this,f8[f7])
}if(f4){eY(this,f4)
}else{if(this.cm){fy(this.cm)
}}}),undo:cC(function(){b7(this,"undo")
}),redo:cC(function(){b7(this,"redo")
}),undoSelection:cC(function(){b7(this,"undo",true)
}),redoSelection:cC(function(){b7(this,"redo",true)
}),setExtending:function(f4){this.extend=f4
},getExtending:function(){return this.extend
},historySize:function(){var f7=this.history,f4=0,f6=0;
for(var f5=0;
f5<f7.done.length;
f5++){if(!f7.done[f5].ranges){++f4
}}for(var f5=0;
f5<f7.undone.length;
f5++){if(!f7.undone[f5].ranges){++f6
}}return{undo:f4,redo:f6}
},clearHistory:function(){this.history=new fK(this.history.maxGeneration)
},markClean:function(){this.cleanGeneration=this.changeGeneration(true)
},changeGeneration:function(f4){if(f4){this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null
}return this.history.generation
},isClean:function(f4){return this.history.generation==(f4||this.cleanGeneration)
},getHistory:function(){return{done:bO(this.history.done),undone:bO(this.history.undone)}
},setHistory:function(f5){var f4=this.history=new fK(this.history.maxGeneration);
f4.done=bO(f5.done.slice(0),null,true);
f4.undone=bO(f5.undone.slice(0),null,true)
},addLineClass:cC(function(f6,f5,f4){return eq(this,f6,f5=="gutter"?"gutter":"class",function(f7){var f8=f5=="text"?"textClass":f5=="background"?"bgClass":f5=="gutter"?"gutterClass":"wrapClass";
if(!f7[f8]){f7[f8]=f4
}else{if(U(f4).test(f7[f8])){return false
}else{f7[f8]+=" "+f4
}}return true
})
}),removeLineClass:cC(function(f6,f5,f4){return eq(this,f6,"class",function(f8){var gb=f5=="text"?"textClass":f5=="background"?"bgClass":f5=="gutter"?"gutterClass":"wrapClass";
var ga=f8[gb];
if(!ga){return false
}else{if(f4==null){f8[gb]=null
}else{var f9=ga.match(U(f4));
if(!f9){return false
}var f7=f9.index+f9[0].length;
f8[gb]=ga.slice(0,f9.index)+(!f9.index||f7==ga.length?"":" ")+ga.slice(f7)||null
}}return true
})
}),markText:function(f6,f5,f4){return ex(this,fB(this,f6),fB(this,f5),f4,"range")
},setBookmark:function(f6,f4){var f5={replacedWith:f4&&(f4.nodeType==null?f4.widget:f4),insertLeft:f4&&f4.insertLeft,clearWhenEmpty:false,shared:f4&&f4.shared};
f6=fB(this,f6);
return ex(this,f6,f6,f5,"bookmark")
},findMarksAt:function(f8){f8=fB(this,f8);
var f7=[],f5=e6(this,f8.line).markedSpans;
if(f5){for(var f4=0;
f4<f5.length;
++f4){var f6=f5[f4];
if((f6.from==null||f6.from<=f8.ch)&&(f6.to==null||f6.to>=f8.ch)){f7.push(f6.marker.parent||f6.marker)
}}}return f7
},findMarks:function(f8,f7,f4){f8=fB(this,f8);
f7=fB(this,f7);
var f5=[],f6=f8.line;
this.iter(f8.line,f7.line+1,function(f9){var gb=f9.markedSpans;
if(gb){for(var ga=0;
ga<gb.length;
ga++){var gc=gb[ga];
if(!(f6==f8.line&&f8.ch>gc.to||gc.from==null&&f6!=f8.line||f6==f7.line&&gc.from>f7.ch)&&(!f4||f4(gc.marker))){f5.push(gc.marker.parent||gc.marker)
}}}++f6
});
return f5
},getAllMarks:function(){var f4=[];
this.iter(function(f6){var f5=f6.markedSpans;
if(f5){for(var f7=0;
f7<f5.length;
++f7){if(f5[f7].from!=null){f4.push(f5[f7].marker)
}}}});
return f4
},posFromIndex:function(f5){var f4,f6=this.first;
this.iter(function(f7){var f8=f7.text.length+1;
if(f8>f5){f4=f5;
return true
}f5-=f8;
++f6
});
return fB(this,Y(f6,f4))
},indexFromPos:function(f5){f5=fB(this,f5);
var f4=f5.ch;
if(f5.line<this.first||f5.ch<0){return 0
}this.iter(this.first,f5.line,function(f6){f4+=f6.text.length+1
});
return f4
},copy:function(f4){var f5=new at(aY(this,this.first,this.first+this.size),this.modeOption,this.first);
f5.scrollTop=this.scrollTop;
f5.scrollLeft=this.scrollLeft;
f5.sel=this.sel;
f5.extend=false;
if(f4){f5.history.undoDepth=this.history.undoDepth;
f5.setHistory(this.getHistory())
}return f5
},linkedDoc:function(f4){if(!f4){f4={}
}var f7=this.first,f6=this.first+this.size;
if(f4.from!=null&&f4.from>f7){f7=f4.from
}if(f4.to!=null&&f4.to<f6){f6=f4.to
}var f5=new at(aY(this,f7,f6),f4.mode||this.modeOption,f7);
if(f4.sharedHist){f5.history=this.history
}(this.linked||(this.linked=[])).push({doc:f5,sharedHist:f4.sharedHist});
f5.linked=[{doc:this,isParent:true,sharedHist:f4.sharedHist}];
dx(f5,eH(this));
return f5
},unlinkDoc:function(f5){if(f5 instanceof K){f5=f5.doc
}if(this.linked){for(var f6=0;
f6<this.linked.length;
++f6){var f7=this.linked[f6];
if(f7.doc!=f5){continue
}this.linked.splice(f6,1);
f5.unlinkDoc(this);
ef(eH(this));
break
}}if(f5.history==this.history){var f4=[f5.id];
dY(f5,function(f8){f4.push(f8.id)
},true);
f5.history=new fK(null);
f5.history.done=bO(this.history.done,f4);
f5.history.undone=bO(this.history.undone,f4)
}},iterLinkedDocs:function(f4){dY(this,f4)
},getMode:function(){return this.mode
},getEditor:function(){return this.cm
}});
at.prototype.eachLine=at.prototype.iter;
var d="iter insert remove copy getEditor".split(" ");
for(var bJ in at.prototype){if(at.prototype.hasOwnProperty(bJ)&&dd(d,bJ)<0){K.prototype[bJ]=(function(f4){return function(){return f4.apply(this.doc,arguments)
}
})(at.prototype[bJ])
}}bx(at);
function dY(f7,f6,f5){function f4(gd,gb,f9){if(gd.linked){for(var ga=0;
ga<gd.linked.length;
++ga){var f8=gd.linked[ga];
if(f8.doc==gb){continue
}var gc=f9&&f8.sharedHist;
if(f5&&!gc){continue
}f6(f8.doc,gc);
f4(f8.doc,gd,gc)
}}}f4(f7,null,true)
}function d2(f4,f5){if(f5.cm){throw new Error("This document is already in use.")
}f4.doc=f5;
f5.cm=f4;
Z(f4);
bq(f4);
if(!f4.options.lineWrapping){g(f4)
}f4.options.mode=f5.modeOption;
ah(f4)
}function e6(f7,f9){f9-=f7.first;
if(f9<0||f9>=f7.size){throw new Error("There is no line "+(f9+f7.first)+" in the document.")
}for(var f4=f7;
!f4.lines;
){for(var f5=0;
;
++f5){var f8=f4.children[f5],f6=f8.chunkSize();
if(f9<f6){f4=f8;
break
}f9-=f6
}}return f4.lines[f9]
}function fQ(f6,f8,f4){var f5=[],f7=f8.line;
f6.iter(f8.line,f4.line+1,function(f9){var ga=f9.text;
if(f7==f4.line){ga=ga.slice(0,f4.ch)
}if(f7==f8.line){ga=ga.slice(f8.ch)
}f5.push(ga);
++f7
});
return f5
}function aY(f5,f7,f6){var f4=[];
f5.iter(f7,f6,function(f8){f4.push(f8.text)
});
return f4
}function fS(f5,f4){var f6=f4-f5.height;
if(f6){for(var f7=f5;
f7;
f7=f7.parent){f7.height+=f6
}}}function bM(f4){if(f4.parent==null){return null
}var f8=f4.parent,f7=dd(f8.lines,f4);
for(var f5=f8.parent;
f5;
f8=f5,f5=f5.parent){for(var f6=0;
;
++f6){if(f5.children[f6]==f8){break
}f7+=f5.children[f6].chunkSize()
}}return f7+f8.first
}function bF(f6,f9){var gb=f6.first;
outer:do{for(var f7=0;
f7<f6.children.length;
++f7){var ga=f6.children[f7],f8=ga.height;
if(f9<f8){f6=ga;
continue outer
}f9-=f8;
gb+=ga.chunkSize()
}return gb
}while(!f6.lines);
for(var f7=0;
f7<f6.lines.length;
++f7){var f5=f6.lines[f7],f4=f5.height;
if(f9<f4){break
}f9-=f4
}return gb+f7
}function bL(f6){f6=A(f6);
var f8=0,f5=f6.parent;
for(var f7=0;
f7<f5.lines.length;
++f7){var f4=f5.lines[f7];
if(f4==f6){break
}else{f8+=f4.height
}}for(var f9=f5.parent;
f9;
f5=f9,f9=f5.parent){for(var f7=0;
f7<f9.children.length;
++f7){var ga=f9.children[f7];
if(ga==f5){break
}else{f8+=ga.height
}}}return f8
}function a(f5){var f4=f5.order;
if(f4==null){f4=f5.order=bd(f5.text)
}return f4
}function fK(f4){this.done=[];
this.undone=[];
this.undoDepth=Infinity;
this.lastModTime=this.lastSelTime=0;
this.lastOp=this.lastSelOp=null;
this.lastOrigin=this.lastSelOrigin=null;
this.generation=this.maxGeneration=f4||1
}function dm(f4,f6){var f5={from:ci(f6.from),to:cT(f6),text:fQ(f4,f6.from,f6.to)};
bX(f4,f5,f6.from.line,f6.to.line+1);
dY(f4,function(f7){bX(f7,f5,f6.from.line,f6.to.line+1)
},true);
return f5
}function ft(f5){while(f5.length){var f4=fz(f5);
if(f4.ranges){f5.pop()
}else{break
}}}function eE(f5,f4){if(f4){ft(f5.done);
return fz(f5.done)
}else{if(f5.done.length&&!fz(f5.done).ranges){return fz(f5.done)
}else{if(f5.done.length>1&&!f5.done[f5.done.length-2].ranges){f5.done.pop();
return fz(f5.done)
}}}}function fE(ga,f8,f4,f7){var f6=ga.history;
f6.undone.length=0;
var f5=+new Date,gb;
if((f6.lastOp==f7||f6.lastOrigin==f8.origin&&f8.origin&&((f8.origin.charAt(0)=="+"&&ga.cm&&f6.lastModTime>f5-ga.cm.options.historyEventDelay)||f8.origin.charAt(0)=="*"))&&(gb=eE(f6,f6.lastOp==f7))){var gc=fz(gb.changes);
if(ce(f8.from,f8.to)==0&&ce(f8.from,gc.to)==0){gc.to=cT(f8)
}else{gb.changes.push(dm(ga,f8))
}}else{var f9=fz(f6.done);
if(!f9||!f9.ranges){cL(ga.sel,f6.done)
}gb={changes:[dm(ga,f8)],generation:f6.generation};
f6.done.push(gb);
while(f6.done.length>f6.undoDepth){f6.done.shift();
if(!f6.done[0].ranges){f6.done.shift()
}}}f6.done.push(f4);
f6.generation=++f6.maxGeneration;
f6.lastModTime=f6.lastSelTime=f5;
f6.lastOp=f6.lastSelOp=f7;
f6.lastOrigin=f6.lastSelOrigin=f8.origin;
if(!gc){aC(ga,"historyAdded")
}}function bz(f8,f4,f6,f7){var f5=f4.charAt(0);
return f5=="*"||f5=="+"&&f6.ranges.length==f7.ranges.length&&f6.somethingSelected()==f7.somethingSelected()&&new Date-f8.history.lastSelTime<=(f8.cm?f8.cm.options.historyEventDelay:500)
}function fY(f9,f7,f4,f6){var f8=f9.history,f5=f6&&f6.origin;
if(f4==f8.lastSelOp||(f5&&f8.lastSelOrigin==f5&&(f8.lastModTime==f8.lastSelTime&&f8.lastOrigin==f5||bz(f9,f5,fz(f8.done),f7)))){f8.done[f8.done.length-1]=f7
}else{cL(f7,f8.done)
}f8.lastSelTime=+new Date;
f8.lastSelOrigin=f5;
f8.lastSelOp=f4;
if(f6&&f6.clearRedo!==false){ft(f8.undone)
}}function cL(f5,f4){var f6=fz(f4);
if(!(f6&&f6.ranges&&f6.equals(f5))){f4.push(f5)
}}function bX(f5,f9,f8,f7){var f4=f9["spans_"+f5.id],f6=0;
f5.iter(Math.max(f5.first,f8),Math.min(f5.first+f5.size,f7),function(ga){if(ga.markedSpans){(f4||(f4=f9["spans_"+f5.id]={}))[f6]=ga.markedSpans
}++f6
})
}function bi(f6){if(!f6){return null
}for(var f5=0,f4;
f5<f6.length;
++f5){if(f6[f5].marker.explicitlyCleared){if(!f4){f4=f6.slice(0,f5)
}}else{if(f4){f4.push(f6[f5])
}}}return !f4?f6:f4.length?f4:null
}function b3(f7,f8){var f6=f8["spans_"+f7.id];
if(!f6){return null
}for(var f5=0,f4=[];
f5<f8.text.length;
++f5){f4.push(bi(f6[f5]))
}return f4
}function bO(gf,f7,ge){for(var ga=0,f5=[];
ga<gf.length;
++ga){var f6=gf[ga];
if(f6.ranges){f5.push(ge?fP.prototype.deepCopy.call(f6):f6);
continue
}var gc=f6.changes,gd=[];
f5.push({changes:gd});
for(var f9=0;
f9<gc.length;
++f9){var gb=gc[f9],f8;
gd.push({from:gb.from,to:gb.to,text:gb.text});
if(f7){for(var f4 in gb){if(f8=f4.match(/^spans_(\d+)$/)){if(dd(f7,Number(f8[1]))>-1){fz(gd)[f4]=gb[f4];
delete gb[f4]
}}}}}}return f5
}function L(f7,f6,f5,f4){if(f5<f7.line){f7.line+=f4
}else{if(f6<f7.line){f7.line=f6;
f7.ch=0
}}}function e8(f7,f9,ga,gb){for(var f6=0;
f6<f7.length;
++f6){var f4=f7[f6],f8=true;
if(f4.ranges){if(!f4.copied){f4=f7[f6]=f4.deepCopy();
f4.copied=true
}for(var f5=0;
f5<f4.ranges.length;
f5++){L(f4.ranges[f5].anchor,f9,ga,gb);
L(f4.ranges[f5].head,f9,ga,gb)
}continue
}for(var f5=0;
f5<f4.changes.length;
++f5){var gc=f4.changes[f5];
if(ga<gc.from.line){gc.from=Y(gc.from.line+gb,gc.from.ch);
gc.to=Y(gc.to.line+gb,gc.to.ch)
}else{if(f9<=gc.to.line){f8=false;
break
}}}if(!f8){f7.splice(0,f6+1);
f6=0
}}}function dw(f5,f8){var f7=f8.from.line,f6=f8.to.line,f4=f8.text.length-(f6-f7)-1;
e8(f5.done,f7,f6,f4);
e8(f5.undone,f7,f6,f4)
}var cE=K.e_preventDefault=function(f4){if(f4.preventDefault){f4.preventDefault()
}else{f4.returnValue=false
}};
var di=K.e_stopPropagation=function(f4){if(f4.stopPropagation){f4.stopPropagation()
}else{f4.cancelBubble=true
}};
function bK(f4){return f4.defaultPrevented!=null?f4.defaultPrevented:f4.returnValue==false
}var ei=K.e_stop=function(f4){cE(f4);
di(f4)
};
function N(f4){return f4.target||f4.srcElement
}function fF(f5){var f4=f5.which;
if(f4==null){if(f5.button&1){f4=1
}else{if(f5.button&2){f4=3
}else{if(f5.button&4){f4=2
}}}}if(b6&&f5.ctrlKey&&f4==1){f4=3
}return f4
}var bW=K.on=function(f7,f5,f6){if(f7.addEventListener){f7.addEventListener(f5,f6,false)
}else{if(f7.attachEvent){f7.attachEvent("on"+f5,f6)
}else{var f8=f7._handlers||(f7._handlers={});
var f4=f8[f5]||(f8[f5]=[]);
f4.push(f6)
}}};
var d4=K.off=function(f8,f6,f7){if(f8.removeEventListener){f8.removeEventListener(f6,f7,false)
}else{if(f8.detachEvent){f8.detachEvent("on"+f6,f7)
}else{var f4=f8._handlers&&f8._handlers[f6];
if(!f4){return
}for(var f5=0;
f5<f4.length;
++f5){if(f4[f5]==f7){f4.splice(f5,1);
break
}}}}};
var aC=K.signal=function(f8,f7){var f4=f8._handlers&&f8._handlers[f7];
if(!f4){return
}var f5=Array.prototype.slice.call(arguments,2);
for(var f6=0;
f6<f4.length;
++f6){f4[f6].apply(null,f5)
}};
var by=null;
function ae(ga,f8){var f4=ga._handlers&&ga._handlers[f8];
if(!f4){return
}var f6=Array.prototype.slice.call(arguments,2),f9;
if(bo){f9=bo.delayedCallbacks
}else{if(by){f9=by
}else{f9=by=[];
setTimeout(aJ,0)
}}function f5(gb){return function(){gb.apply(null,f6)
}
}for(var f7=0;
f7<f4.length;
++f7){f9.push(f5(f4[f7]))
}}function aJ(){var f4=by;
by=null;
for(var f5=0;
f5<f4.length;
++f5){f4[f5]()
}}function aO(f4,f6,f5){if(typeof f6=="string"){f6={type:f6,preventDefault:function(){this.defaultPrevented=true
}}
}aC(f4,f5||f6.type,f4,f6);
return bK(f6)||f6.codemirrorIgnore
}function X(f5){var f4=f5._handlers&&f5._handlers.cursorActivity;
if(!f4){return
}var f7=f5.curOp.cursorActivityHandlers||(f5.curOp.cursorActivityHandlers=[]);
for(var f6=0;
f6<f4.length;
++f6){if(dd(f7,f4[f6])==-1){f7.push(f4[f6])
}}}function e9(f6,f5){var f4=f6._handlers&&f6._handlers[f5];
return f4&&f4.length>0
}function bx(f4){f4.prototype.on=function(f5,f6){bW(this,f5,f6)
};
f4.prototype.off=function(f5,f6){d4(this,f5,f6)
}
}var bh=30;
var b9=K.Pass={toString:function(){return"CodeMirror.Pass"
}};
var aa={scroll:false},O={origin:"*mouse"},cS={origin:"+move"};
function f3(){this.id=null
}f3.prototype.set=function(f4,f5){clearTimeout(this.id);
this.id=setTimeout(f5,f4)
};
var bS=K.countColumn=function(f7,f5,f9,ga,f6){if(f5==null){f5=f7.search(/[^\s\u00a0]/);
if(f5==-1){f5=f7.length
}}for(var f8=ga||0,gb=f6||0;
;
){var f4=f7.indexOf("\t",f8);
if(f4<0||f4>=f5){return gb+(f5-f8)
}gb+=f4-f8;
gb+=f9-(gb%f9);
f8=f4+1
}};
function eh(f8,f7,f9){for(var ga=0,f6=0;
;
){var f5=f8.indexOf("\t",ga);
if(f5==-1){f5=f8.length
}var f4=f5-ga;
if(f5==f8.length||f6+f4>=f7){return ga+Math.min(f4,f7-f6)
}f6+=f5-ga;
f6+=f9-(f6%f9);
ga=f5+1;
if(f6>=f7){return ga
}}}var aV=[""];
function cp(f4){while(aV.length<=f4){aV.push(fz(aV)+" ")
}return aV[f4]
}function fz(f4){return f4[f4.length-1]
}var dC=function(f4){f4.select()
};
if(eT){dC=function(f4){f4.selectionStart=0;
f4.selectionEnd=f4.value.length
}
}else{if(dB){dC=function(f5){try{f5.select()
}catch(f4){}}
}}function dd(f6,f4){for(var f5=0;
f5<f6.length;
++f5){if(f6[f5]==f4){return f5
}}return -1
}if([].indexOf){dd=function(f5,f4){return f5.indexOf(f4)
}
}function bR(f7,f6){var f4=[];
for(var f5=0;
f5<f7.length;
f5++){f4[f5]=f6(f7[f5],f5)
}return f4
}if([].map){bR=function(f5,f4){return f5.map(f4)
}
}function ck(f7,f4){var f6;
if(Object.create){f6=Object.create(f7)
}else{var f5=function(){};
f5.prototype=f7;
f6=new f5()
}if(f4){aK(f4,f6)
}return f6
}function aK(f6,f5,f4){if(!f5){f5={}
}for(var f7 in f6){if(f6.hasOwnProperty(f7)&&(f4!==false||!f5.hasOwnProperty(f7))){f5[f7]=f6[f7]
}}return f5
}function cv(f5){var f4=Array.prototype.slice.call(arguments,1);
return function(){return f5.apply(null,f4)
}
}var a8=/[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
var fv=K.isWordChar=function(f4){return/\w/.test(f4)||f4>"\x80"&&(f4.toUpperCase()!=f4.toLowerCase()||a8.test(f4))
};
function cz(f4,f5){if(!f5){return fv(f4)
}if(f5.source.indexOf("\\w")>-1&&fv(f4)){return true
}return f5.test(f4)
}function eM(f4){for(var f5 in f4){if(f4.hasOwnProperty(f5)&&f4[f5]){return false
}}return true
}var eB=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
function fh(f4){return f4.charCodeAt(0)>=768&&eB.test(f4)
}function fO(f4,f8,f7,f6){var f9=document.createElement(f4);
if(f7){f9.className=f7
}if(f6){f9.style.cssText=f6
}if(typeof f8=="string"){f9.appendChild(document.createTextNode(f8))
}else{if(f8){for(var f5=0;
f5<f8.length;
++f5){f9.appendChild(f8[f5])
}}}return f9
}var cl;
if(document.createRange){cl=function(f6,f7,f4){var f5=document.createRange();
f5.setEnd(f6,f4);
f5.setStart(f6,f7);
return f5
}
}else{cl=function(f6,f8,f4){var f5=document.body.createTextRange();
try{f5.moveToElementText(f6.parentNode)
}catch(f7){return f5
}f5.collapse(true);
f5.moveEnd("character",f4);
f5.moveStart("character",f8);
return f5
}
}function dS(f5){for(var f4=f5.childNodes.length;
f4>0;
--f4){f5.removeChild(f5.firstChild)
}return f5
}function bQ(f4,f5){return dS(f4).appendChild(f5)
}function fX(f4,f5){if(f4.contains){return f4.contains(f5)
}while(f5=f5.parentNode){if(f5==f4){return true
}}}function dF(){return document.activeElement
}if(dB&&m<11){dF=function(){try{return document.activeElement
}catch(f4){return document.body
}}
}function U(f4){return new RegExp("(^|\\s)"+f4+"(?:$|\\s)\\s*")
}var f=K.rmClass=function(f6,f4){var f7=f6.className;
var f5=U(f4).exec(f7);
if(f5){var f8=f7.slice(f5.index+f5[0].length);
f6.className=f7.slice(0,f5.index)+(f8?f5[1]+f8:"")
}};
var fs=K.addClass=function(f5,f4){var f6=f5.className;
if(!U(f4).test(f6)){f5.className+=(f6?" ":"")+f4
}};
function fJ(f6,f4){var f5=f6.split(" ");
for(var f7=0;
f7<f5.length;
f7++){if(f5[f7]&&!U(f5[f7]).test(f4)){f4+=" "+f5[f7]
}}return f4
}function az(f7){if(!document.body.getElementsByClassName){return
}var f6=document.body.getElementsByClassName("CodeMirror");
for(var f5=0;
f5<f6.length;
f5++){var f4=f6[f5].CodeMirror;
if(f4){f7(f4)
}}}var cB=false;
function bf(){if(cB){return
}fw();
cB=true
}function fw(){var f4;
bW(window,"resize",function(){if(f4==null){f4=setTimeout(function(){f4=null;
en=null;
az(aQ)
},100)
}});
bW(window,"blur",function(){az(aR)
})
}var eD=function(){if(dB&&m<9){return false
}var f4=fO("div");
return"draggable" in f4||"dragDrop" in f4
}();
var en;
function l(f4){if(en!=null){return en
}var f5=fO("div",null,null,"width: 50px; height: 50px; overflow-x: scroll");
bQ(f4,f5);
if(f5.offsetWidth){en=f5.offsetHeight-f5.clientHeight
}return en||0
}var fD;
function bm(f4){if(fD==null){var f5=fO("span","\u200b");
bQ(f4,fO("span",[f5,document.createTextNode("x")]));
if(f4.firstChild.offsetHeight!=0){fD=f5.offsetWidth<=1&&f5.offsetHeight>2&&!(dB&&m<8)
}}if(fD){return fO("span","\u200b")
}else{return fO("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px")
}}var fC;
function bN(f7){if(fC!=null){return fC
}var f4=bQ(f7,document.createTextNode("A\u062eA"));
var f6=cl(f4,0,1).getBoundingClientRect();
if(!f6||f6.left==f6.right){return false
}var f5=cl(f4,1,2).getBoundingClientRect();
return fC=(f5.right-f6.right<3)
}var aW=K.splitLines="\n\nb".split(/\n/).length!=3?function(f9){var ga=0,f4=[],f8=f9.length;
while(ga<=f8){var f7=f9.indexOf("\n",ga);
if(f7==-1){f7=f9.length
}var f6=f9.slice(ga,f9.charAt(f7-1)=="\r"?f7-1:f7);
var f5=f6.indexOf("\r");
if(f5!=-1){f4.push(f6.slice(0,f5));
ga+=f5+1
}else{f4.push(f6);
ga=f7+1
}}return f4
}:function(f4){return f4.split(/\r\n?|\n/)
};
var br=window.getSelection?function(f5){try{return f5.selectionStart!=f5.selectionEnd
}catch(f4){return false
}}:function(f6){try{var f4=f6.ownerDocument.selection.createRange()
}catch(f5){}if(!f4||f4.parentElement()!=f6){return false
}return f4.compareEndPoints("StartToEnd",f4)!=0
};
var c6=(function(){var f4=fO("div");
if("oncopy" in f4){return true
}f4.setAttribute("oncopy","return;");
return typeof f4.oncopy=="function"
})();
var eX=null;
function aI(f5){if(eX!=null){return eX
}var f6=bQ(f5,fO("span","x"));
var f7=f6.getBoundingClientRect();
var f4=cl(f6,0,1).getBoundingClientRect();
return eX=Math.abs(f7.left-f4.left)>1
}var e7={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};
K.keyNames=e7;
(function(){for(var f4=0;
f4<10;
f4++){e7[f4+48]=e7[f4+96]=String(f4)
}for(var f4=65;
f4<=90;
f4++){e7[f4]=String.fromCharCode(f4)
}for(var f4=1;
f4<=12;
f4++){e7[f4+111]=e7[f4+63235]="F"+f4
}})();
function dV(f4,ga,f9,f8){if(!f4){return f8(ga,f9,"ltr")
}var f7=false;
for(var f6=0;
f6<f4.length;
++f6){var f5=f4[f6];
if(f5.from<f9&&f5.to>ga||ga==f9&&f5.to==ga){f8(Math.max(f5.from,ga),Math.min(f5.to,f9),f5.level==1?"rtl":"ltr");
f7=true
}}if(!f7){f8(ga,f9,"ltr")
}}function dq(f4){return f4.level%2?f4.to:f4.from
}function f0(f4){return f4.level%2?f4.from:f4.to
}function cD(f5){var f4=a(f5);
return f4?dq(f4[0]):0
}function cQ(f5){var f4=a(f5);
if(!f4){return f5.text.length
}return f0(fz(f4))
}function bs(f5,f8){var f6=e6(f5.doc,f8);
var f9=A(f6);
if(f9!=f6){f8=bM(f9)
}var f4=a(f9);
var f7=!f4?0:f4[0].level%2?cQ(f9):cD(f9);
return Y(f8,f7)
}function dG(f6,f9){var f5,f7=e6(f6.doc,f9);
while(f5=em(f7)){f7=f5.find(1,true).line;
f9=null
}var f4=a(f7);
var f8=!f4?f7.text.length:f4[0].level%2?cD(f7):cQ(f7);
return Y(f9==null?bM(f7):f9,f8)
}function dA(f5,ga){var f9=bs(f5,ga.line);
var f6=e6(f5.doc,f9.line);
var f4=a(f6);
if(!f4||f4[0].level==0){var f8=Math.max(0,f6.text.search(/\S/));
var f7=ga.line==f9.line&&ga.ch<=f8&&ga.ch;
return Y(f9.line,f7?0:f8)
}return f9
}function an(f5,f6,f4){var f7=f5[0].level;
if(f6==f7){return true
}if(f4==f7){return false
}return f6<f4
}var eU;
function aE(f4,f8){eU=null;
for(var f5=0,f6;
f5<f4.length;
++f5){var f7=f4[f5];
if(f7.from<f8&&f7.to>f8){return f5
}if((f7.from==f8||f7.to==f8)){if(f6==null){f6=f5
}else{if(an(f4,f7.level,f4[f6].level)){if(f7.from!=f7.to){eU=f6
}return f5
}else{if(f7.from!=f7.to){eU=f5
}return f6
}}}}return f6
}function e5(f4,f7,f5,f6){if(!f6){return f7+f5
}do{f7+=f5
}while(f7>0&&fh(f4.text.charAt(f7)));
return f7
}function w(f4,gb,f6,f7){var f8=a(f4);
if(!f8){return ai(f4,gb,f6,f7)
}var ga=aE(f8,gb),f5=f8[ga];
var f9=e5(f4,gb,f5.level%2?-f6:f6,f7);
for(;
;
){if(f9>f5.from&&f9<f5.to){return f9
}if(f9==f5.from||f9==f5.to){if(aE(f8,f9)==ga){return f9
}f5=f8[ga+=f6];
return(f6>0)==f5.level%2?f5.to:f5.from
}else{f5=f8[ga+=f6];
if(!f5){return null
}if((f6>0)==f5.level%2){f9=e5(f4,f5.to,-1,f7)
}else{f9=e5(f4,f5.from,1,f7)
}}}}function ai(f4,f8,f5,f6){var f7=f8+f5;
if(f6){while(f7>0&&fh(f4.text.charAt(f7))){f7+=f5
}}return f7<0||f7>f4.text.length?null:f7
}var bd=(function(){var ga="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
var f8="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
function f7(ge){if(ge<=247){return ga.charAt(ge)
}else{if(1424<=ge&&ge<=1524){return"R"
}else{if(1536<=ge&&ge<=1773){return f8.charAt(ge-1536)
}else{if(1774<=ge&&ge<=2220){return"r"
}else{if(8192<=ge&&ge<=8203){return"w"
}else{if(ge==8204){return"b"
}else{return"L"
}}}}}}}var f4=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
var gd=/[stwN]/,f6=/[LRr]/,f5=/[Lb1n]/,f9=/[1n]/;
var gc="L";
function gb(gg,gf,ge){this.level=gg;
this.from=gf;
this.to=ge
}return function(go){if(!f4.test(go)){return false
}var gu=go.length,gk=[];
for(var gt=0,gg;
gt<gu;
++gt){gk.push(gg=f7(go.charCodeAt(gt)))
}for(var gt=0,gn=gc;
gt<gu;
++gt){var gg=gk[gt];
if(gg=="m"){gk[gt]=gn
}else{gn=gg
}}for(var gt=0,ge=gc;
gt<gu;
++gt){var gg=gk[gt];
if(gg=="1"&&ge=="r"){gk[gt]="n"
}else{if(f6.test(gg)){ge=gg;
if(gg=="r"){gk[gt]="R"
}}}}for(var gt=1,gn=gk[0];
gt<gu-1;
++gt){var gg=gk[gt];
if(gg=="+"&&gn=="1"&&gk[gt+1]=="1"){gk[gt]="1"
}else{if(gg==","&&gn==gk[gt+1]&&(gn=="1"||gn=="n")){gk[gt]=gn
}}gn=gg
}for(var gt=0;
gt<gu;
++gt){var gg=gk[gt];
if(gg==","){gk[gt]="N"
}else{if(gg=="%"){for(var gh=gt+1;
gh<gu&&gk[gh]=="%";
++gh){}var gv=(gt&&gk[gt-1]=="!")||(gh<gu&&gk[gh]=="1")?"1":"N";
for(var gr=gt;
gr<gh;
++gr){gk[gr]=gv
}gt=gh-1
}}}for(var gt=0,ge=gc;
gt<gu;
++gt){var gg=gk[gt];
if(ge=="L"&&gg=="1"){gk[gt]="L"
}else{if(f6.test(gg)){ge=gg
}}}for(var gt=0;
gt<gu;
++gt){if(gd.test(gk[gt])){for(var gh=gt+1;
gh<gu&&gd.test(gk[gh]);
++gh){}var gl=(gt?gk[gt-1]:gc)=="L";
var gf=(gh<gu?gk[gh]:gc)=="L";
var gv=gl||gf?"L":"R";
for(var gr=gt;
gr<gh;
++gr){gk[gr]=gv
}gt=gh-1
}}var gs=[],gp;
for(var gt=0;
gt<gu;
){if(f5.test(gk[gt])){var gi=gt;
for(++gt;
gt<gu&&f5.test(gk[gt]);
++gt){}gs.push(new gb(0,gi,gt))
}else{var gj=gt,gm=gs.length;
for(++gt;
gt<gu&&gk[gt]!="L";
++gt){}for(var gr=gj;
gr<gt;
){if(f9.test(gk[gr])){if(gj<gr){gs.splice(gm,0,new gb(1,gj,gr))
}var gq=gr;
for(++gr;
gr<gt&&f9.test(gk[gr]);
++gr){}gs.splice(gm,0,new gb(2,gq,gr));
gj=gr
}else{++gr
}}if(gj<gt){gs.splice(gm,0,new gb(1,gj,gt))
}}}if(gs[0].level==1&&(gp=go.match(/^\s+/))){gs[0].from=gp[0].length;
gs.unshift(new gb(0,0,gp[0].length))
}if(fz(gs).level==1&&(gp=go.match(/\s+$/))){fz(gs).to-=gp[0].length;
gs.push(new gb(0,gu-gp[0].length,gu))
}if(gs[0].level!=fz(gs).level){gs.push(new gb(gs[0].level,gu,gu))
}return gs
}
})();
K.version="4.8.0";
return K
});
(function(){CodeMirror.switchSlackMode=function(f,g){var e={php:["php","application/x-httpd-php"],sql:["sql","text/x-sql"],mysql:["sql","text/x-mysql"],html:["htmlmixed","text/html"],javascript:["javascript","text/javascript"],markdown:["markdown","text/x-markdown"],c:["clike","text/x-csrc"],cpp:["clike","text/x-c++src"],csharp:["clike","text/x-csharp"],vb:["vb","text/x-vb"],vbscript:["vbscript","text/vbscript"],java:["clike","text/x-java"],css:["css","text/css"],perl:["perl","text/x-perl"],python:["python","text/x-python"],ruby:["ruby","text/x-ruby"],erlang:["erlang","text/x-erlang"],diff:["diff","text/x-diff"],xml:["xml","text/xml"],coffeescript:["coffeescript","text/x-coffeescript"],clojure:["clojure","text/x-clojure"],scheme:["scheme","text/x-scheme"],haskell:["haskell","text/x-haskell"],scala:["clike","text/x-scala"],shell:["shell","text/x-sh"],go:["go","text/x-go"],groovy:["groovy","text/x-groovy"],yaml:["yaml","text/x-yaml"],lua:["lua","text/x-lua"],matlab:["octave","text/x-octave"],r:["r","text/x-rsrc"],puppet:["puppet","text/x-puppet"],smalltalk:["smalltalk","text/x-stsrc"],latex:["stex","text/x-stex"]};
if(e[g]){f.setOption("mode",e[g][1]);
CodeMirror.autoLoadMode(f,e[g][0])
}else{f.setOption("mode",null)
}};
function c(e){switch(e){case"apl":return cdn_url+"/31541/js/libs_codemirror_apl_1419026209.js";
case"asterisk":return cdn_url+"/31541/js/libs_codemirror_asterisk_1419026149.js";
case"clike":return cdn_url+"/31541/js/libs_codemirror_clike_1419026207.js";
case"clojure":return cdn_url+"/31541/js/libs_codemirror_clojure_1419026240.js";
case"cobol":return cdn_url+"/31541/js/libs_codemirror_cobol_1419026247.js";
case"coffeescript":return cdn_url+"/31541/js/libs_codemirror_coffeescript_1419026142.js";
case"commonlisp":return cdn_url+"/31541/js/libs_codemirror_commonlisp_1419026154.js";
case"css":return cdn_url+"/31541/js/libs_codemirror_css_1419026135.js";
case"cypher":return cdn_url+"/31541/js/libs_codemirror_cypher_1419026228.js";
case"d":return cdn_url+"/31541/js/libs_codemirror_d_1419026215.js";
case"diff":return cdn_url+"/31541/js/libs_codemirror_diff_1419026243.js";
case"django":return cdn_url+"/31541/js/libs_codemirror_django_1419026168.js";
case"dockerfile":return cdn_url+"/31541/js/libs_codemirror_dockerfile_1419026286.js";
case"dtd":return cdn_url+"/31541/js/libs_codemirror_dtd_1419026262.js";
case"dylan":return cdn_url+"/31541/js/libs_codemirror_dylan_1419026278.js";
case"ecl":return cdn_url+"/31541/js/libs_codemirror_ecl_1419026245.js";
case"eiffel":return cdn_url+"/31541/js/libs_codemirror_eiffel_1419026266.js";
case"erlang":return cdn_url+"/31541/js/libs_codemirror_erlang_1419026272.js";
case"fortran":return cdn_url+"/31541/js/libs_codemirror_fortran_1419026232.js";
case"gas":return cdn_url+"/31541/js/libs_codemirror_gas_1419026211.js";
case"gfm":return cdn_url+"/31541/js/libs_codemirror_gfm_1419026101.js";
case"gherkin":return cdn_url+"/31541/js/libs_codemirror_gherkin_1419026191.js";
case"go":return cdn_url+"/31541/js/libs_codemirror_go_1419026160.js";
case"groovy":return cdn_url+"/31541/js/libs_codemirror_groovy_1419026184.js";
case"haml":return cdn_url+"/31541/js/libs_codemirror_haml_1419026203.js";
case"haskell":return cdn_url+"/31541/js/libs_codemirror_haskell_1419026108.js";
case"haxe":return cdn_url+"/31541/js/libs_codemirror_haxe_1419026257.js";
case"htmlembedded":return cdn_url+"/31541/js/libs_codemirror_htmlembedded_1419026253.js";
case"htmlmixed":return cdn_url+"/31541/js/libs_codemirror_htmlmixed_1419026280.js";
case"http":return cdn_url+"/31541/js/libs_codemirror_http_1419026099.js";
case"idl":return cdn_url+"/31541/js/libs_codemirror_idl_1419026238.js";
case"jade":return cdn_url+"/31541/js/libs_codemirror_jade_1419026182.js";
case"javascript":return cdn_url+"/31541/js/libs_codemirror_javascript_1419026186.js";
case"jinja2":return cdn_url+"/31541/js/libs_codemirror_jinja2_1419026236.js";
case"julia":return cdn_url+"/31541/js/libs_codemirror_julia_1419026165.js";
case"kotlin":return cdn_url+"/31541/js/libs_codemirror_kotlin_1419026225.js";
case"livescript":return cdn_url+"/31541/js/libs_codemirror_livescript_1419026106.js";
case"lua":return cdn_url+"/31541/js/libs_codemirror_lua_1419026195.js";
case"markdown":return cdn_url+"/31541/js/libs_codemirror_markdown_1419026217.js";
case"mirc":return cdn_url+"/31541/js/libs_codemirror_mirc_1419026156.js";
case"mllike":return cdn_url+"/31541/js/libs_codemirror_mllike_1419026270.js";
case"modelica":return cdn_url+"/31541/js/libs_codemirror_modelica_1419026189.js";
case"nginx":return cdn_url+"/31541/js/libs_codemirror_nginx_1419026111.js";
case"ntriples":return cdn_url+"/31541/js/libs_codemirror_ntriples_1419026201.js";
case"octave":return cdn_url+"/31541/js/libs_codemirror_octave_1419026158.js";
case"pascal":return cdn_url+"/31541/js/libs_codemirror_pascal_1419026264.js";
case"pegjs":return cdn_url+"/31541/js/libs_codemirror_pegjs_1419026093.js";
case"perl":return cdn_url+"/31541/js/libs_codemirror_perl_1419026249.js";
case"php":return cdn_url+"/31541/js/libs_codemirror_php_1419026255.js";
case"pig":return cdn_url+"/31541/js/libs_codemirror_pig_1419026274.js";
case"properties":return cdn_url+"/31541/js/libs_codemirror_properties_1419026113.js";
case"puppet":return cdn_url+"/31541/js/libs_codemirror_puppet_1419026145.js";
case"python":return cdn_url+"/31541/js/libs_codemirror_python_1419026199.js";
case"q":return cdn_url+"/31541/js/libs_codemirror_q_1419026260.js";
case"r":return cdn_url+"/31541/js/libs_codemirror_r_1419026129.js";
case"rpm":return cdn_url+"/31541/js/libs_codemirror_rpm_1419026117.js";
case"rst":return cdn_url+"/31541/js/libs_codemirror_rst_1419026121.js";
case"ruby":return cdn_url+"/31541/js/libs_codemirror_ruby_1419026268.js";
case"rust":return cdn_url+"/31541/js/libs_codemirror_rust_1419026152.js";
case"sass":return cdn_url+"/31541/js/libs_codemirror_sass_1419026205.js";
case"scheme":return cdn_url+"/31541/js/libs_codemirror_scheme_1419026175.js";
case"shell":return cdn_url+"/31541/js/libs_codemirror_shell_1419026088.js";
case"sieve":return cdn_url+"/31541/js/libs_codemirror_sieve_1419026230.js";
case"slim":return cdn_url+"/31541/js/libs_codemirror_slim_1419026147.js";
case"smalltalk":return cdn_url+"/31541/js/libs_codemirror_smalltalk_1419026193.js";
case"smarty":return cdn_url+"/31541/js/libs_codemirror_smarty_1419026251.js";
case"smartymixed":return cdn_url+"/31541/js/libs_codemirror_smartymixed_1419026197.js";
case"solr":return cdn_url+"/31541/js/libs_codemirror_solr_1419026133.js";
case"sparql":return cdn_url+"/31541/js/libs_codemirror_sparql_1419026172.js";
case"sql":return cdn_url+"/31541/js/libs_codemirror_sql_1419026115.js";
case"stex":return cdn_url+"/31541/js/libs_codemirror_stex_1419026097.js";
case"tcl":return cdn_url+"/31541/js/libs_codemirror_tcl_1419026288.js";
case"textile":return cdn_url+"/31541/js/libs_codemirror_textile_1419026125.js";
case"tiddlywiki":return cdn_url+"/31541/js/libs_codemirror_tiddlywiki_1419026220.js";
case"tiki":return cdn_url+"/31541/js/libs_codemirror_tiki_1419026169.js";
case"toml":return cdn_url+"/31541/js/libs_codemirror_toml_1419026123.js";
case"tornado":return cdn_url+"/31541/js/libs_codemirror_tornado_1419026213.js";
case"turtle":return cdn_url+"/31541/js/libs_codemirror_turtle_1419026276.js";
case"vb":return cdn_url+"/31541/js/libs_codemirror_vb_1419026132.js";
case"vbscript":return cdn_url+"/31541/js/libs_codemirror_vbscript_1419026091.js";
case"velocity":return cdn_url+"/31541/js/libs_codemirror_velocity_1419026138.js";
case"verilog":return cdn_url+"/31541/js/libs_codemirror_verilog_1419026095.js";
case"xml":return cdn_url+"/31541/js/libs_codemirror_xml_1419026119.js";
case"xquery":return cdn_url+"/31541/js/libs_codemirror_xquery_1419026127.js";
case"yaml":return cdn_url+"/31541/js/libs_codemirror_yaml_1419026140.js";
case"z80":return cdn_url+"/31541/js/libs_codemirror_z80_1419026234.js"
}return null
}var d={};
function b(e,g){var f=g;
return function(){if(--f==0){e()
}}
}function a(k,e){var j=CodeMirror.modes[k].dependencies;
if(!j){return e()
}var h=[];
for(var g=0;
g<j.length;
++g){if(!CodeMirror.modes.hasOwnProperty(j[g])){h.push(j[g])
}}if(!h.length){return e()
}var f=b(e,h.length);
for(var g=0;
g<h.length;
++g){CodeMirror.requireMode(h[g],f)
}}CodeMirror.requireMode=function(l,e){if(typeof l!="string"){l=l.name
}if(CodeMirror.modes.hasOwnProperty(l)){return a(l,e)
}if(d.hasOwnProperty(l)){return d[l].push(e)
}var f=document.createElement("script");
f.src=c(l);
var g=document.getElementsByTagName("script")[0];
g.parentNode.insertBefore(f,g);
var j=d[l]=[e];
var h=0,k=setInterval(function(){if(++h>100){return clearInterval(k)
}if(CodeMirror.modes.hasOwnProperty(l)){clearInterval(k);
d[l]=null;
a(l,function(){for(var m=0;
m<j.length;
++m){j[m]()
}})
}},200)
};
CodeMirror.autoLoadMode=function(e,f){if(!CodeMirror.modes.hasOwnProperty(f)){CodeMirror.requireMode(f,function(){e.setOption("mode",e.getOption("mode"))
})
}}
}());
(function(){window.TS={session_ms:new Date().getTime(),modules:{},boot_data:{},qs_args:{},pri:0,dom_ready:false,module_exec_order_index:1,requireds:{view:{clearMessageInput:true,focusMessageInput:true,onMsgsDivClick:true}},logLoad:function(n){TS.log(88,n);
if(!window.logLoad){return
}window.logLoad(n)
},reportLoad:function(o,p){if(!window.load_log||!window.load_log.length){return
}if(!TS.model||!TS.model.team||TS.model.team.domain!="tinyspeck"){return
}TS.dir(88,window.load_log);
if(!TS.client||!TS.ims){return
}p=p||"short";
o=o||window.load_log.length-1;
var q=window.load_log[o]["t"];
var s="total time: "+q+"s (at index "+o+")";
var n;
if(p=="complete"){s+="\n"+JSON.stringify(window.load_log,null,"\t");
s+="\n<javascript:TS.reportLoad("+o+", 'snippet')|share this with eric as a snippet>"
}else{if(p=="short"){s+=" <javascript:TS.reportLoad("+o+", 'complete')|click for details>"
}else{if(p=="snippet"){s+="\n"+navigator.userAgent+"\nversion_ts: "+TS.boot_data.version_ts+"\n";
"version_uid: "+TS.boot_data.version_uid+"\n";
if(TS.storage&&TS.storage.storageAvailable){s+="TS.storage.storageAvailable: "+TS.storage.storageAvailable+"\nTS.storage.storageSize(): "+TS.storage.storageSize()+"\n";
s+="TS.storage.version: "+TS.storage.version+"\nTS.storage._get('storage_version'): "+TS.storage._get("storage_version")+"\nTS.storage.msgs_version: "+TS.storage.msgs_version+"\nTS.storage._get('storage_msgs_version'): "+TS.storage._get("storage_msgs_version")+"\n";
if(TS.model){s+="TS.model.initial_ui_state_str: "+TS.model.initial_ui_state_str+"\n"
}}s+=JSON.stringify(window.load_log,null,"\t");
n=TS.ims.getImByUsername("eric");
TS.files.upload(s,null,null,null,"load times "+TS.utility.date.toDate(TS.utility.date.makeTsStamp()),"javascript",(n)?[n.id]:null,"");
return
}else{alert("type:"+p);
return
}}}var r={type:"message",subtype:"bot_message",username:"loadBot",icons:{emoji:":rocket:"},is_ephemeral:true,ts:TS.utility.date.makeTsStamp(),text:s,no_notifications:true};
n=TS.ims.getImByMemberId("USLACKBOT");
if(n){TS.ims.addMsg(n.id,r)
}},delayed_module_loads:{},registerModule:function(n,o,r){TS.last_registered_module=o;
var u=(typeof window.jasmine!=="undefined")||(TS.boot_data.version_ts=="dev"&&TS.qs_args.export_test);
if(o.test&&!u){delete o.test
}else{if(typeof o.test==="function"){var p=o.test;
Object.defineProperty(o,"test",{get:p})
}}if(TS.dom_ready){TS.error('module "'+n+'" must be registered on before dom ready');
return
}if(TS.modules[n]){TS.error('module "'+n+'" already exists');
return
}var v;
var w;
if(n.indexOf(".")!=-1){var t=n.split(".");
if(t.length>2){TS.error('module "'+n+'" cannot be registered, as we only support a depth of one sub module right now');
return
}v=t[0];
w=t[1];
if(!w){TS.error('module "'+n+'" cannot be registered because of a bad name');
return
}if(!TS.modules[v]){if(r){TS.error('module "'+n+'" cannot be registered after delay; "'+v+'" is not registered')
}else{TS.delayed_module_loads[n]=o
}return
}if(w in TS.modules[v]){TS.error('module "'+n+'" cannot be registered; "'+w+'" already exists on "'+v+'"');
return
}}if(TS.requireds[n]){var q=true;
for(var s in TS.requireds[n]){if(!(s in o)){TS.warn('all mudules registering as "'+n+'" must implement "'+s+'"');
q=false
}}if(!q){TS.error('module "'+n+'" does not implement all requireds');
return
}}if(v){TS[v][w]=o
}else{TS[n]=o
}o._name=n;
TS.modules[n]=o;
if(!o._exec_order){o._exec_order=TS.module_exec_order_index++
}},makeLogDate:function(){if(window.TSMakeLogDate){return TSMakeLogDate()
}return"(TSMakeLogDate not loaded) "
},log:function(p,n){if(!window.console){return
}var o=(TS.pri)?TS.pri.toString().split(","):["0"];
if(p!="0"&&o.indexOf(p.toString())==-1&&o.indexOf("all")==-1){return
}if(typeof n=="object"){console.log(n)
}else{console.log(TS.makeLogDate()+p+" "+n)
}},info:function(n){if(!window.console||!console.info){return
}console.info(TS.makeLogDate()+n)
},warn:function(n){if(!window.console||!console.warn){return
}console.warn(TS.makeLogDate()+n)
},dir:function(o,n){if(!window.console||!console.dir){return
}if(TS.utility&&o){if(!TS.utility.inArray(TS.pri.toString().split(","),o)){return
}}try{var q=TS.utility.clone(n);
console.dir(q)
}catch(p){TS.warn("could not dir ob:"+n+" err:"+p)
}},error:function(n){if(!window.console||!console.error){return
}console.error(TS.makeLogDate()+n)
},logError:function(n,o){if(!window.badtoys||!window.badtoys.log){if(window.console&&console.error){console.error(TS.makeLogDate()+"no window.badtoys.log trying to log e:"+n+" desc:"+o)
}return
}badtoys.log(n,o);
if(window.console&&console.error){console.error(TS.makeLogDate()+"logging e:"+n+" desc:"+o)
}},track:function(n){if(window.track){TS.info("tracking: "+n);
window.track(n)
}else{TS.warn('could not track "'+n+'" because there is no window.track')
}},boot:function(n){TS.logLoad("TS.boot");
TS.boot_data=n;
TS.setQsArgs(location);
TS.pri=(TS.qs_args.pri)?TS.qs_args.pri+",0":TS.pri;
TS.info("booted! pri:"+TS.pri);
$(document).ready(TS.onDOMReady)
},setQsArgs:function(v){var q={};
var t;
var n=v.search.substring(1);
t=n.split("&");
for(var r=0;
r<t.length;
r++){var u=t[r].indexOf("=");
if(u!=-1){var o=t[r].substring(0,u);
var s=t[r].substring(u+1);
q[o]=unescape(s)
}}TS.qs_args=q
},onDOMReady:function(){TS.info("onDOMReady");
if(TS.client&&window.WEB_SOCKET_USING_FLASH_BUT_NO_FLASH){TS.info("WEB_SOCKET_USING_FLASH_BUT_NO_FLASH");
$("#loading_animation").addClass("hidden");
$("#no_ws_and_bad_flash").css("display","inline");
$("#loading_nag").css("display","none");
return
}if(TS.client){TS.info("calling didStartLoading");
TSSSB.call("didStartLoading",30000)
}else{TS.info("no TS.client on page:"+document.location.href)
}TS.logLoad("TS.onDOMReady");
TS.info("soundManager.setup called");
soundManager.setup({url:"/img/sm/",debugMode:false,preferFlash:false,onready:function(){TS.info("soundManager.onready called")
}});
var o=new Date();
var n=(TS.boot_data.version_ts=="dev")?o.getTime():TS.boot_data.version_ts;
var q="/templates.php?cb="+n+TS.appendQSArgsToUrl();
var p=new XMLHttpRequest();
p.onreadystatechange=function(){if(p.readyState!=4){return
}if(p.status!=200){return
}p.onreadystatechange=null;
var r=(new Date().getTime()-o);
TS.logLoad(q+" is loaded (took "+r+"ms), doing $('body').append(req.responseText)");
$("body").append(p.responseText);
TS.onTemplatesLoaded()
};
TS.logLoad("loading "+q);
p.open("GET",q,1);
p.send()
},async_js_loaded:0,onTemplatesLoaded:function(){TS.logLoad("TS.onTemplatesLoaded");
if(TS.client){TSSSB.call("didStartLoading",30000)
}var n=window.async_css_urls||[];
var p=true;
function q(s){var r=n[s]+"?cb="+window.location.hostname;
TS.logLoad("TS loading: "+r);
var u=new Date().getTime();
var t=new XMLHttpRequest();
t.onreadystatechange=function(){if(t.readyState==4){if(t.status==200){t.onreadystatechange=null;
TS.async_css_loaded++;
TS.logLoad("TS loaded ("+(new Date().getTime()-u)+"ms) "+r);
$("head").append('<style type="text/css">'+t.responseText+"<style>");
if(TS.async_css_loaded==n.length){TS.onAsyncCSSLoaded()
}else{if(TS.async_css_loaded>n.length){alert("bad! TS.async_css_loaded > A.length")
}else{if(!p){q(s+1)
}}}}else{}}};
t.open("GET",r,1);
t.send()
}if(n.length){if(p){for(var o=0;
o<n.length;
o++){q(o)
}}else{q(0)
}}else{TS.onAsyncCSSLoaded()
}},async_css_loaded:0,onAsyncCSSLoaded:function(){TS.logLoad("TS.onAsyncCSSLoaded");
if(TS.client){TSSSB.call("didStartLoading",30000)
}var n=window.async_js_urls||[];
var p=true;
function q(s){var r=n[s];
TS.logLoad("TS loading: "+r);
var t=new Date().getTime();
$.ajax({url:r,dataType:"script",cache:true,success:function(v,w,u){TS.async_js_loaded++;
TS.logLoad("TS loaded "+TS.async_js_loaded+" of "+n.length+" ("+(new Date().getTime()-t)+"ms) "+r);
TS.last_registered_module._exec_order=s;
if(TS.async_js_loaded==n.length){TS.onAsyncJSLoaded()
}else{if(TS.async_js_loaded>n.length){alert("bad! TS.async_js_loaded > A.length")
}else{if(!p){q(s+1)
}}}}})
}if(n.length){if(p){for(var o=0;
o<n.length;
o++){q(o)
}}else{q(0)
}}else{TS.onAsyncJSLoaded()
}},onAsyncJSLoaded:function(){TS.logLoad("TS.onAsyncJSLoaded, calling onStarts()");
if(window.load_start_ms){TS.warn((new Date()-window.load_start_ms)+"ms from first html to calling onStarts()")
}emoji.include_title=true;
emoji.allow_native=false;
for(var n in TS.delayed_module_loads){TS.registerModule(n,TS.delayed_module_loads[n],true)
}TS.storage.onStart();
TS.storage.onStart=function(){};
if(TS.boot_data.app=="client"){TS.client.onStart();
TS.client.onStart=function(){}
}else{if(TS.boot_data.app=="web"||TS.boot_data.app=="mobile"||TS.boot_data.app=="space"){TS.web.onStart();
TS.web.onStart=function(){}
}else{if(TS.boot_data.app=="test"){return
}else{TS.error("WTF app? "+TS.boot_data.app);
return
}}}TS.ms.reconnect_requested_sig.add(k);
TS.ds.reconnect_requested_sig.add(a);
TS.ms.connected_sig.add(f);
TS.ms.disconnected_sig.add(b);
TS.ds.disconnected_sig.add(d);
TS.callModuleMethod("onStart",true);
TS.dom_ready=true;
if(TS.client){TSSSB.call("didStartLoading",60000)
}TS.setUpCmds(function(){TS.setUpEmoji(TS.doneWithInititalLoading)
})
},doneWithInititalLoading:function(){if(window.macgap){window.addEventListener("sleep",function(){TS.info("sleep event!");
if(TS.client){TS.sleepMS()
}if(TS.web&&TS.web.space){TS.sleepDS()
}},false);
window.addEventListener("wake",function(){TS.info("wake event!");
if(TS.client){TS.wakeMS()
}if(TS.web){TS.wakeDS()
}},false)
}TS.ui.setUpWindowUnloadHandlers();
if(TS.boot_data.app=="client"){TS.client.gogogo()
}else{if(TS.boot_data.app=="web"||TS.boot_data.app=="mobile"||TS.boot_data.app=="space"){TS.web.gogogo()
}}if(TS.boot_data.login_data){TS.loginMS()
}else{TS.info("running without a user")
}},ingestCustoms:function(n,u){var r=false;
TS.model.all_custom_emoji.length=0;
TS.model.emoji_complex_customs={};
var t;
var o;
var p;
var s=false;
function q(w){var y;
for(var v in emoji.data){y=emoji.data[v][3];
for(var x=0;
x<y.length;
x++){if(w==y[x]){if(s){delete emoji.data[v]
}return false
}}}return true
}for(p in n){if(typeof n[p]=="object"){TS.model.emoji_complex_customs[p]=n[p];
emoji.data[p]=[null,null,null,[p],null,null,null,n[p]["apple"]];
emoji.map.colons[p]=p;
TS.model.all_custom_emoji.push(p);
if(p=="simple_smile"){emoji.emoticons_data[":)"]="simple_smile";
emoji.emoticons_data["(:"]="simple_smile";
emoji.emoticons_data[":-)"]="simple_smile"
}}else{if(n[p].indexOf("alias:")===0){continue
}if(!q(p)){if(s){TS.error("allowing custom emoji :"+p+": to overwrite")
}else{TS.error("can't ingest custom emoji :"+p+": because that already exists");
continue
}}emoji.data[p]=[null,null,null,[p],null,null,null,n[p]];
emoji.map.colons[p]=p;
TS.model.all_custom_emoji.push(p)
}}for(p in n){if(typeof n[p]=="object"||n[p].indexOf("alias:")!==0){continue
}if(!q(p)){if(s){TS.error("allowing custom emoji :"+p+": to overwrite")
}else{TS.error("can't ingest custom emoji :"+p+": because that already exists");
continue
}}t=n[p].replace("alias:","");
o=emoji.data[t];
if(o){o[3].push(p);
emoji.map.colons[p]=t;
if(r){TS.model.all_custom_emoji.push(p)
}continue
}t=emoji.map.colons[t];
o=emoji.data[t];
if(o){o[3].push(p);
emoji.map.colons[p]=t;
if(r){TS.model.all_custom_emoji.push(p)
}continue
}TS.warn('alias for "'+p+'":"'+n[p]+'" not recognized')
}TS.model.all_custom_emoji=TS.model.all_custom_emoji.sort();
if(u){u()
}},setUpCmds:function(n){if(!TS.boot_data.page_needs_custom_cmds){return n?n():null
}TS.api.call("commands.list",{},function(p,q,o){if(!p||!q.commands){if(n){n()
}return
}TS.cmd_handlers.mergeInServerCmds(q.commands);
if(n){n()
}})
},setUpEmoji:function(n){if(!window.emoji){return n()
}emoji.include_text=true;
if(emoji.unaltered_data){emoji.data=TS.utility.clone(emoji.unaltered_data);
emoji.inits={}
}else{emoji.unaltered_data=TS.utility.clone(emoji.data)
}emoji.init_colons();
if(TS.boot_data.emoji_customs){TS.ingestCustoms(TS.boot_data.emoji_customs,n);
TS.boot_data.emoji_customs=null;
return
}if(!TS.boot_data.page_needs_custom_emoji){return n()
}TS.api.call("emoji.list",{include_complex_values:(TS.boot_data.feature_simple_smile?1:0)},function(p,q,o){if(!p||!q.emoji){if(n){n()
}return
}TS.ingestCustoms(q.emoji,n)
})
},makeEmoticonList:function(){TS.model.emoticon_groups=[];
TS.model.emoji_names=[];
var q=[{name:"grinning",emoji_names:["grinning","grin","joy","smiley","smile","sweat_smile","satisfied","innocent","smiling_imp","wink","blush","yum","relieved","heart_eyes","sunglasses","smirk","neutral_face","expressionless","unamused","sweat","pensive","confused","confounded","kissing","kissing_heart","kissing_smiling_eyes","kissing_closed_eyes","stuck_out_tongue","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","disappointed","worried","angry","rage","cry","persevere","triumph","disappointed_relieved","frowning","anguished","fearful","weary","sleepy","tired_face","grimacing","sob","open_mouth","hushed","cold_sweat","scream","astonished","flushed","sleeping","dizzy_face","no_mouth","relaxed","mask","smile_cat","joy_cat","smiley_cat","heart_eyes_cat","smirk_cat","kissing_cat","pouting_cat","crying_cat_face","scream_cat","no_good","ok_woman","bow","see_no_evil","hear_no_evil","speak_no_evil","raising_hand","raised_hands","person_frowning","person_with_pouting_face","bust_in_silhouette","busts_in_silhouette","boy","girl","man","woman","family","couple","two_men_holding_hands","two_women_holding_hands","cop","dancers","bride_with_veil","person_with_blond_hair","man_with_gua_pi_mao","man_with_turban","older_man","older_woman","baby","construction_worker","princess","japanese_ogre","japanese_goblin","ghost","angel","alien","space_invader","imp","skull","information_desk_person","guardsman"]},{name:"rat",emoji_names:["rat","mouse2","ox","water_buffalo","cow2","tiger2","leopard","rabbit2","cat2","dragon","crocodile","whale2","snail","snake","racehorse","ram","goat","sheep","monkey","rooster","chicken","dog2","pig2","boar","elephant","octopus","shell","bug","ant","honeybee","beetle","fish","tropical_fish","blowfish","turtle","hatching_chick","baby_chick","hatched_chick","bird","penguin","koala","poodle","dromedary_camel","camel","flipper","mouse","cow","tiger","rabbit","cat","dragon_face","whale","horse","monkey_face","dog","pig","frog","hamster","wolf","bear","panda_face","pig_nose","paw_prints","eyes","ear","nose","lips","tongue","point_up","fist","raised_hand","v","point_up_2","point_down","point_left","point_right","punch","wave","ok_hand","thumbsup","thumbsdown","clap","open_hands"]},{name:"hamburger",emoji_names:["hamburger","coffee","pizza","meat_on_bone","poultry_leg","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","bread","fries","sweet_potato","dango","oden","sushi","fried_shrimp","fish_cake","icecream","shaved_ice","ice_cream","doughnut","cookie","chocolate_bar","candy","lollipop","custard","honey_pot","cake","bento","stew","egg","fork_and_knife","tea","sake","wine_glass","cocktail","tropical_drink","beer","beers","baby_bottle","mushroom","tomato","eggplant","grapes","melon","watermelon","tangerine","lemon","banana","pineapple","apple","green_apple","pear","peach","cherries","strawberry","chestnut","seedling","evergreen_tree","deciduous_tree","palm_tree","cactus","tulip","cherry_blossom","rose","hibiscus","sunflower","blossom","corn","ear_of_rice","herb","four_leaf_clover","maple_leaf","fallen_leaf","leaves"]},{name:"sunny",emoji_names:["sunny","cloud","telephone","umbrella","spades","clubs","hearts","diamonds","recycle","wheelchair","warning","copyright","registered","tm","zap","soccer","baseball","snowman","partly_sunny","no_entry","golf","sailboat","fuelpump","scissors","ballot_box_with_check","white_check_mark","airplane","envelope","pencil2","black_nib","heavy_check_mark","heavy_multiplication_x","sparkles","snowflake","x","negative_squared_cross_mark","question","heavy_exclamation_mark","bangbang","interrobang","heart","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","star","o","black_joker","cyclone","foggy","closed_umbrella","sunrise","ocean","earth_africa","earth_americas","earth_asia","globe_with_meridians","waxing_crescent_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","full_moon_with_face","sun_with_face","star2","ribbon","gift","birthday","jack_o_lantern","christmas_tree","santa","fireworks","sparkler","balloon","tada","confetti_ball","tanabata_tree","crossed_flags","bamboo","dolls","flags","wind_chime","rice_scene","school_satchel","mortar_board","microphone","movie_camera","cinema","headphones","art","tophat","circus_tent","ticket","clapper","performing_arts","video_game","dart","slot_machine","8ball","game_die","bowling","flower_playing_cards","musical_note","notes","saxophone","guitar","musical_keyboard","trumpet","violin","musical_score","tennis","ski","basketball","checkered_flag","snowboarder","running","surfer","trophy","horse_racing","football","rugby_football","swimmer","dancer","lipstick","nail_care","massage","haircut","barber","syringe","pill"]},{name:"kiss",emoji_names:["kiss","love_letter","ring","gem","couplekiss","bouquet","couple_with_heart","wedding","heartbeat","broken_heart","two_hearts","sparkling_heart","heartpulse","cupid","blue_heart","green_heart","yellow_heart","purple_heart","gift_heart","revolving_hearts","heart_decoration","diamond_shape_with_a_dot_inside","bulb","anger","bomb","zzz","collision","sweat_drops","droplet","dash","shit","muscle","dizzy","speech_balloon","thought_balloon","heavy_dollar_sign","credit_card","yen","dollar","euro","pound","money_with_wings","seat","computer","briefcase","minidisc","floppy_disk","cd","dvd","file_folder","open_file_folder","page_with_curl","page_facing_up","date","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","pushpin","round_pushpin","paperclip","notebook","open_book","books","pencil","telephone_receiver","pager","fax","satellite","loudspeaker","mega","outbox_tray","inbox_tray","package","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","postbox","postal_horn","newspaper","iphone","no_mobile_phones","camera","video_camera","tv","radio","vhs","low_brightness","high_brightness","mute","sound","speaker","battery","electric_plug","mag","mag_right","lock_with_ink_pen","closed_lock_with_key","key","lock","unlock","bell","no_bell","bookmark","link","radio_button","underage","fire","flashlight","wrench","hammer","nut_and_bolt","hocho","gun","microscope","telescope","crystal_ball","clock3","pray"]},{name:"rocket",emoji_names:["rocket","helicopter","steam_locomotive","train","bullettrain_side","bullettrain_front","train2","light_rail","station","tram","bus","oncoming_bus","trolleybus","busstop","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","red_car","oncoming_automobile","blue_car","truck","articulated_lorry","tractor","monorail","mountain_railway","suspension_railway","mountain_cableway","aerial_tramway","ship","rowboat","speedboat","traffic_light","vertical_traffic_light","construction","rotating_light","triangular_flag_on_post","door","house","house_with_garden","european_post_office","convenience_store","school","no_entry_sign","smoking","no_smoking","put_litter_in_its_place","bike","no_bicycles","bicyclist","mountain_bicyclist","walking","no_pedestrians","mens","womens","toilet","shower","bath","bathtub","cn","de","es","fr","uk","it","jp","kr","ru","us"]}];
if(TS.model.all_custom_emoji&&TS.model.all_custom_emoji.length){q.push({name:"slack",emoji_names:TS.model.all_custom_emoji})
}var z;
var E;
var s=[];
for(z=0;
z<q.length;
z++){s=s.concat(q[z].emoji_names)
}var D={};
for(var x in emoji.data){var t=emoji.data[x][3];
for(z=0;
z<t.length;
z++){E=t[z];
TS.model.emoji_names.push(E);
D[E]={emoji:TS.utility.emojiGraphicReplace(":"+E+":"),name:":"+E+":",names:":"+t.join(": :")+":"}
}}for(z=0;
z<s.length;
z++){E=s[z];
if(!D[E]){TS.error(E+" not in emoji map?")
}}var o=function(I,G){var K="emoji_preloader_"+I;
var M="";
for(var F=0;
F<G.length;
F++){M+=G[F].name
}var L=emoji.supports_css;
emoji.supports_css=false;
$("body").append('<div style="position:absolute; width:100px; left:-200px; top:-200%" id="'+K+'">'+TS.utility.emojiGraphicReplace(M,true)+"</div>");
emoji.supports_css=L;
var H=0;
var J=G.length;
$("#"+K).find("IMG").bind("load",function(){H++;
if(H==J){$("#"+K).remove()
}})
};
var B;
for(z=0;
z<q.length;
z++){B=q[z];
var v=[];
var y="";
for(var w=0;
w<B.emoji_names.length;
w++){v.push(D[B.emoji_names[w]]);
if(B.emoji_names[w]==B.name){y=D[B.emoji_names[w]].emoji
}}TS.model.emoticon_groups.push({name:B.name,tab_html:y||v[0].emoji,items:v});
if(B.name=="slack"){(function(G,F){window.setTimeout(function(){o(G,F)
},5000)
}(B.name,v))
}if(!TS.model.prefs.ss_emojis){if(B.name==TS.emoji_menu.default_emoji_group){o(B.name,v)
}}}if(TS.model.prefs.ss_emojis&&emoji.sheet_path){$("body").append('<img style="position:absolute; width:100px; left:-200px; top:-200%; z-index:100" id="emoji_ss_preloader_onchange" src="'+emoji.sheet_path+'">');
$("#emoji_ss_preloader_onchange").bind("load",function(){$("#emoji_ss_preloader_onchange").remove()
})
}TS.model.emoji_names.sort();
var u=TS.model.emoji_names.indexOf("thumbsdown");
var p=TS.model.emoji_names.indexOf("thumbsup");
var A=TS.model.emoji_names.indexOf("thought_balloon");
var r=TS.model.emoji_names.indexOf("three");
TS.model.emoji_names[A]="thumbsup";
TS.model.emoji_names[r]="thumbsdown";
TS.model.emoji_names[u]="thought_balloon";
TS.model.emoji_names[p]="three";
var C=TS.model.emoji_names.indexOf("ok");
var n=TS.model.emoji_names.indexOf("ok_hand");
TS.model.emoji_names[C]="ok_hand";
TS.model.emoji_names[n]="ok"
},setUpModel:function(p){var w=!TS.model.ms_logged_in_once;
TS.model.team=p.team;
TS.model.bots_legacy=p.team.bots;
TS.model.team.url=p.url;
if(!TS.model.last_team_name){TS.model.last_team_name=TS.model.team.name;
TS.model.last_team_domain=TS.model.team.domain
}TS.model.team.activity=[];
if(TS.model.break_token){TS.model.team.url+="f"
}if(TS.model.break_reconnections){TS.model.team.url=TS.model.team.url.replace("websocket","BUSTED")
}if(w){TS.model.bots=[];
TS.model.members=[];
TS.model.channels=[];
TS.model.ims=[];
TS.model.groups=[]
}else{TS.refreshTeams()
}TS.prefs.setPrefs(p.self.prefs);
delete p.self.prefs;
var q;
var o;
if(!p.members){p.members=p.users
}for(q=0;
q<p.members.length;
q++){o=p.members[q];
var n=TS.members.upsertAndSignal(o);
if(o.id==p.self.id){TS.model.user=n.member;
TS.model.user.is_self=true;
TS.members.upsertMember(p.self)
}}var t;
for(q=0;
q<p.bots.length;
q++){t=p.bots[q];
TS.bots.upsertAndSignal(t)
}if(w||true){TS.prefs.setHighlightWords(TS.model.prefs.highlight_words)
}var s=0;
var r;
for(q=0;
q<p.channels.length;
q++){r=p.channels[q];
r.all_read_this_session_once=false;
if(TS.qs_args.just_general=="1"&&!r.is_general){continue
}TS.channels.upsertChannel(r);
if(r.is_member){s++
}}var v;
for(q=0;
q<p.ims.length;
q++){v=p.ims[q];
v.all_read_this_session_once=false;
if(TS.qs_args.just_general=="1"){continue
}TS.ims.upsertIm(v);
if(v.is_open){s++
}}var x;
for(q=0;
q<p.groups.length;
q++){x=p.groups[q];
x.all_read_this_session_once=false;
if(TS.qs_args.just_general=="1"){continue
}TS.groups.upsertGroup(x);
if(x.is_open&&!x.is_archived){s++
}}TS.info("open channels/groups/ims:"+s);
if(!w){}if(TS.qs_args.api_count){TS.model.initial_msgs_cnt=parseInt(TS.qs_args.api_count)||TS.model.initial_msgs_cnt
}else{if(s<10){TS.model.initial_msgs_cnt=200
}else{if(s<20){TS.model.initial_msgs_cnt=180
}else{if(s<30){TS.model.initial_msgs_cnt=160
}else{if(s<40){TS.model.initial_msgs_cnt=140
}else{if(s<50){TS.model.initial_msgs_cnt=120
}else{if(s<60){TS.model.initial_msgs_cnt=100
}else{if(s<70){TS.model.initial_msgs_cnt=80
}else{if(s<80){TS.model.initial_msgs_cnt=60
}else{if(s<90){TS.model.initial_msgs_cnt=50
}else{if(s<100){TS.model.initial_msgs_cnt=40
}else{TS.model.initial_msgs_cnt=30
}}}}}}}}}}}var u=TS.model.hard_msg_limit;
TS.model.subsequent_msgs_cnt=Math.min(u,TS.model.initial_msgs_cnt*2);
TS.model.special_initial_msgs_cnt=Math.min(u,TS.model.initial_msgs_cnt*2);
TS.info("initial_msgs_cnt:"+TS.model.initial_msgs_cnt);
TS.info("subsequent_msgs_cnt:"+TS.model.subsequent_msgs_cnt);
TS.info("special_initial_msgs_cnt:"+TS.model.special_initial_msgs_cnt)
},setThemeClasses:function(n){$("body").removeClass("dense_theme light_theme");
if(TS.model.prefs.theme=="dense"){$("body").addClass("dense_theme")
}else{if(TS.model.prefs.theme=="light"){$("body").addClass("light_theme")
}else{TS.error("no theme?");
return
}}if(TS.model.prefs.avatars){$("body").removeClass("no_avatars")
}else{$("body").addClass("no_avatars")
}if(TS.client&&!n){if(TS.shared.getActiveModelOb()){TS.client.msg_pane.rebuildMsgs()
}}},callModuleMethod:function(r,t){var o;
var q;
var n=[];
for(o in TS.modules){q=TS.modules[o];
q._exec_order=q._exec_order||0;
n.push(q)
}n.sort(function s(v,u){if(v._exec_order<u._exec_order){return -1
}if(v._exec_order>u._exec_order){return 1
}return 0
});
for(var p=0;
p<n.length;
p++){q=n[p];
if(!(r in q)||typeof q[r]!="function"){if(t){TS.error('module:"'+q._name+'" does not have method:"'+r+'"')
}continue
}TS.log(4,'calling "'+r+'" on "'+q._name+'" _exec_order:'+q._exec_order);
q[r]()
}},getAllTeams:function(){if(!TS.boot_data){return null
}if(!TS.model){return null
}if(!TS.model.team){return null
}if(!TS.model.user){return null
}var n=[{id:TS.model.user.id,name:TS.model.user.name,team_id:TS.model.team.id,team_name:TS.model.team.name.replace(/ +/g," "),team_url:TS.boot_data.team_url}];
if(TS.boot_data.other_accounts&&typeof TS.boot_data.other_accounts=="object"&&!TS.boot_data.other_accounts.length){for(var o in TS.boot_data.other_accounts){var p=TS.utility.clone(TS.boot_data.other_accounts[o]);
p.id=o;
p.team_name=p.team_name.replace(/ +/g," ");
n.push(p)
}}TS.info("TS.getAllTeams():");
TS.dir(0,n);
return n
},getOtherAccountsCount:function(){var n=0;
if(!TS.boot_data.other_accounts){return n
}n=Object.keys(TS.boot_data.other_accounts).length;
return n
},refreshTeams:function(){if(!TS.boot_data){return
}if(!TS.model){return
}if(!TS.model.team){return
}if(!TS.model.user){return
}var n="/account-list-api";
var o=new XMLHttpRequest();
o.onreadystatechange=function(){if(o.readyState!=4){return
}if(o.status!=200){return
}o.onreadystatechange=null;
if(o.responseText.indexOf("{")!==0){return
}var r;
try{r=JSON.parse(o.responseText);
if(r.ok){TS.boot_data.other_accounts={};
var s=0;
for(var p in r.accounts){if(p==TS.model.user.id){continue
}TS.boot_data.other_accounts[p]=r.accounts[p];
s++
}if(TSSSB.call("teamsUpdate",TS.getAllTeams())){TS.info("called TSSSB.call('teamsUpdate')")
}TS.warn("c:"+s);
if(TS.view&&!s){TS.info("calling TS.view.updateTitleBarColor");
TS.view.updateTitleBarColor()
}}else{}}catch(q){if(window.console&&console.warn&&console.error){console.warn("unable to do anything with refreshTeams rsp");
console.error(q)
}}};
o.open("POST",n,1);
o.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
o.send("token="+encodeURIComponent(TS.model.api_token))
},qs_url_args:null,appendQSArgsToUrl:function(){if(TS.qs_url_args!==null){return TS.qs_url_args
}TS.qs_url_args="";
for(var n in TS.qs_args){TS.qs_url_args+="&"+n+"="+TS.qs_args[n]
}return TS.qs_url_args
},ssbChromeClicked:function(n){if(n){return
}$("html").trigger("mousedown");
$(".modal-backdrop").trigger("click")
},loginMS:function(){TS.info("logging in with TS.loginMS");
c=TS.utility.date.getTimeStamp();
if(TS.model.ms_logged_in_once){var q=TS.utility.date.getTimeStamp()-TS.ms.last_pong_time;
if(q>1000*60*5){if(TS.storage.cleanOutMsgStorageIfTooOld()){TS.info("going to call TS.reload() after a TS.storage.cleanOutMsgStorageIfTooOld() because since_last_pong_ms > 1000*60*5");
TS.reload(null,"TS.reload() after a TS.storage.cleanOutMsgStorageIfTooOld() because since_last_pong_ms > 1000*60*5")
}}}else{TS.storage.cleanOutMsgStorageIfTooOld()
}if(TS.client&&TS.boot_data.login_data){var p=TS.utility.date.getTimeStamp()-TS.boot_data.start_ms;
var n=25000;
if(p>n){TS.info("forcing a call to rtm.start because the WS url is tool old at this point: "+p+"ms");
delete TS.boot_data.login_data;
TS.warn(JSON.stringify(window.load_log,null,"\t"));
TSSSB.call("didStartLoading",30000)
}}var r={agent:"webapp_"+TS.boot_data.version_uid,login_ms:c};
if(TS.web){r.no_presence=true
}if(TS.boot_data.login_data){TS.ms.logConnectionFlow("login_with_boot_data");
var o=TS.boot_data.login_data;
delete TS.boot_data.login_data;
j(true,o,r)
}else{TS.ms.logConnectionFlow("login");
clearTimeout(h);
h=setTimeout(function(){clearTimeout(h);
TS.ms.logConnectionFlow("last_login_timeout");
TS.ms.onFailure()
},10000);
TS.model.rtm_start_throttler++;
TS.warn("incremented TS.model.rtm_start_throttler:"+TS.model.rtm_start_throttler);
TS.api.callImmediately("rtm.start",r,j)
}},reload:function(o,n){if(o){TS.info("TS.reload called msg:"+o);
TS.generic_dialog.start({title:"Reloading!",body:o,show_cancel_button:false,esc_for_ok:true,on_go:function(){TS.reload()
}});
return
}if(n&&TS.model&&TS.model.team&&TS.model.team.domain=="tinyspeck"){TS.info("TS.reload called msg:"+n);
TS.generic_dialog.start({title:"This would be a silent reload, except you are on the Tiny Speck team so this is to help debug",body:n,show_cancel_button:false,esc_for_ok:true,on_go:function(){TS.reload()
}});
return
}TS.info("TS.reload happening!");
if(TS.client&&TSSSB.call("reload")){setInterval(function(){window.callSlackAPIUnauthed("api.test",{},function(q,r,p){if(q){window.location.reload()
}})
},1000)
}else{window.location.reload()
}},sleepMS:function(){if(TS.model.ms_asleep){return
}if(!TS.model.ms_connected){return
}TS.model.ms_asleep=true;
TS.ms.disconnect()
},wakeMS:function(){if(!TS.model.ms_asleep){return
}TS.model.ms_asleep=false;
TS.ms.startReconnection()
},sleepDS:function(){if(TS.model.ds_asleep){return
}if(!TS.model.ds_connected){return
}TS.model.ds_asleep=true;
TS.ds.disconnect()
},wakeDS:function(){if(!TS.model.ds_asleep){return
}TS.model.ds_asleep=false;
TS.ds.startReconnection()
}};
var h=0;
var c=0;
var k=function(){if(TS.model.ms_asleep){TS.error("NOT reconnecting, we are asleep");
return
}TS.loginMS()
};
var j=function(q,s,p){clearTimeout(h);
if(c!=p.login_ms){TS.warn("ignoring this rsp, as we have issued another login call since this one (_ms_last_login_ms != args.login_ms)");
return
}var r="TS.storage.fetchLastEventTS() is empty #1 C";
if(TS.boot_data.feature_latest_event_ts){if(!TS.model.ms_logged_in_once&&!TS.storage.fetchLastEventTS()&&s.latest_event_ts){TS.ms.storeLastEventTS(s.latest_event_ts)
}r="TS.storage.fetchLastEventTS() is empty #1 D"
}if(TS.client){if(TS.model.ms_logged_in_once&&s.min_version_ts){if(TS.boot_data.version_ts=="dev"){}else{if(parseInt(TS.boot_data.version_ts)<parseInt(s.min_version_ts)){TS.info("calling TS.reload() because parseInt(TS.boot_data.version_ts) < parseInt(data.min_version_ts)");
TS.reload(null,"calling TS.reload() because parseInt(TS.boot_data.version_ts) < parseInt(data.min_version_ts)");
return
}}}if(TS.model.ms_logged_in_once&&s.cache_version){if(s.cache_version!=TS.storage.msgs_version){TS.reload(null,"TS.reload() because data.cache_version "+s.cache_version+" != TS.storage.msgs_version "+TS.storage.msgs_version)
}}}if(!q){if(s&&(s.error=="account_inactive"||s.error=="team_disabled"||s.error=="invalid_auth")){TS.info("calling TS.reload() because data.error: "+s.error);
TS.reload(null,"calling TS.reload() because data.error: "+s.error);
return
}TS.ms.logConnectionFlow("on_login_failure");
TS.info("API rtm.start rsp was no good");
TS.ms.onFailure();
return
}if(!s.self){TS.error("No self?");
return
}if(!s.team){TS.error("No team?");
return
}TS.ms.logConnectionFlow("on_login");
TS.info("setting up model");
TS.setUpModel(s);
TS.setThemeClasses();
if(TS.client){TSSSB.call("setCurrentTeam",TS.model.team.domain);
TS.client.updateTeamIcon()
}if(TS.client&&!TS.model.ms_logged_in_once&&TS.model.prefs.ss_emojis&&emoji.sheet_path){TS.logLoad("TS.client preloading "+emoji.sheet_path);
var n=new Date().getTime();
$("body").append('<img style="position:absolute; width:100px; left:-200px; top:-200%; z-index:100" id="emoji_ss_preloader" src="'+emoji.sheet_path+'">');
$("#emoji_ss_preloader").bind("load",function(){$("#emoji_ss_preloader").remove();
TS.logLoad("TS.client preloaded "+emoji.sheet_path+" (took "+(new Date().getTime()-n)+"ms)");
o()
})
}else{o()
}function o(){if(!TS.model.ms_logged_in_once){if(TS.client){TS.client.onFirstLoginMS(s)
}if(TS.web){TS.web.onFirstLoginMS(s);
if(!TS.boot_data.page_has_ms){if(TS.web.space){l()
}}}}if(TS.client){TS.client.onEveryLoginMS(s)
}if(TS.web){TS.web.onEveryLoginMS(s)
}if(TS.client||(TS.web&&TS.boot_data.page_has_ms)){TS.ms.connect()
}TS.model.ms_logged_in_once=true
}};
var f=function(){if(!TS.boot_data.page_has_ms){return
}if(!TS.web){return
}if(!TS.web.space){return
}a()
};
var b=function(){if(!TS.boot_data.page_has_ms){return
}if(!TS.web){return
}if(!TS.web.space){return
}TS.ds.disconnect()
};
var g=0;
var e=0;
var a=function(){if(TS.model.ds_asleep){TS.error("NOT reconnecting, we are asleep");
return
}if(TS.boot_data.page_has_ms){if(TS.model.ms_connected){l()
}}else{l()
}};
var l=function(){TS.info("_loginDS");
e=TS.utility.date.getTimeStamp();
var o={agent:"webapp_"+TS.boot_data.version_uid,login_ms:e};
if(TS.boot_data.space_login_data){TS.ds.logConnectionFlow("login_with_boot_data");
var n={data:TS.boot_data.space_login_data};
delete TS.boot_data.space_login_data;
m(true,n,o);
return
}TS.ds.logConnectionFlow("_loginDS");
o.file=boot_data.file.id;
clearTimeout(g);
g=setTimeout(function(){clearTimeout(g);
TS.ds.logConnectionFlow("last_login_timeout");
TS.ds.onFailure()
},10000);
TS.model.rtd_start_throttler++;
TS.warn("incremented TS.model.rtd_start_throttler:"+TS.model.rtd_start_throttler);
TS.api.callImmediately("files.documents.connect",o,m)
};
var m=function(o,p,n){clearTimeout(g);
if(e!=n.login_ms){TS.warn("ignoring this rsp, as we have issued another login call since this one (_ds_last_login_ms != args.login_ms)");
return
}if(!o){if(p&&(p.error=="account_inactive"||p.error=="team_disabled"||p.error=="invalid_auth")){alert("_onLoginDS data.error: "+p.error);
return
}TS.ds.logConnectionFlow("on_login_failure");
TS.info("API files.documents.connect rsp was no good: "+(p&&p.error?"data.error:"+p.error:"unspecified error"));
TS.ds.onFailure();
return
}if(!p.data){TS.error("No data.data?");
return
}if(!p.data.ws){alert("serguei, no ws url in response to a documents.connectUser call, calling api again now.");
TS.error("No ws url?");
TS.ds.logConnectionFlow("on_login_missing_ws");
TS.ds.onFailure();
return
}TS.web.space.login_data=p.data;
TS.ds.logConnectionFlow("on_login");
if(!TS.model.ds_logged_in_once){TS.logLoad("_onLoginDS first time");
TS.reportLoad()
}if(!TS.model.ds_logged_in_once){if(window.load_start_ms){TS.warn((new Date()-window.load_start_ms)+"ms from first html to ds_login_sig.dispatch()")
}TS.web.ds_login_sig.dispatch()
}TS.ds.connect();
TS.model.ds_logged_in_once=true
};
var d=function(){if(!TS.boot_data.page_has_ms){return
}TS.ms.disconnect()
}
})();
(function(){TS.registerModule("model",{api_url:"",api_token:"",user:null,team:null,ims:null,channels:null,groups:null,members:null,bots:null,files:[],requested_im_opens:{},requested_group_opens:{},requested_channel_joins:{},created_channels:{},created_groups:{},archives_and_recreated_groups:{},last_team_name:"",last_team_domain:"",unsent_msgs:{},display_unsent_msgs:{},inline_img_byte_limit:2097152,inline_img_pixel_limit:7360*4912,code_wrap_long_lines:true,last_reads_set_by_client:{},ms_asleep:false,ms_connected:false,ms_connecting:false,ms_logged_in_once:false,ds_asleep:false,ds_connected:false,ds_connecting:false,ds_logged_in_once:false,window_unloading:false,active_cid:null,last_active_cid:null,active_group_id:null,active_channel_id:null,active_im_id:null,active_history:[],all_custom_emoji:[],user_hiddens:[],user_colors:null,at_channel_suppressed_channels:null,push_at_channel_suppressed_channels:null,loud_channels:null,never_channels:null,loud_channels_set:null,push_loud_channels:null,push_mention_channels:null,push_loud_channels_set:null,muted_channels:null,highlight_words:null,highlight_words_regex:null,everyone_regex:/<!everyone\b/,channel_regex:/<!channel\b/,group_regex:/<!group\b/,you_regex:null,inline_attachments:{},inline_imgs:{},inline_img_exclude_filetypes:["gdoc","gsheet","gpres","gdraw"],inline_videos:{},inline_others:{},inline_audios:{},inline_emails:{},expandable_state:{},break_token:false,break_reconnections:false,ms_reconnect_ms:0,ms_reconnect_time:0,rtm_start_throttler:0,ds_reconnect_ms:0,ds_reconnect_time:0,rtd_start_throttler:0,initial_msgs_cnt:50,subsequent_msgs_cnt:100,special_initial_msgs_cnt:100,hard_msg_limit:500,input_maxlength:4000,all_unread_cnt:0,all_unread_highlights_cnt:0,c_name_in_url:"",flex_name_in_url:"",flex_extra_in_url:"",flex_names:["activity","files","team","search","stars","mentions","details"],default_flex_name:"files",prefs:null,ui_state:null,input_history:null,input_history_index:-1,last_net_send:0,previewed_file_id:null,last_previewed_file_id:null,previewed_member_name:null,previewed_member_id:null,last_previewed_member_id:null,channel_name_max_length:21,channel_purpose_max_length:250,channel_topic_max_length:250,upload_file_size_limit_bytes:1073741824,msg_activity_interval:5,dialog_is_showing:false,menu_is_showing:false,overlay_is_showing:false,seen_welcome_2_this_session:false,showing_welcome_2:false,cancelled_welcome_2_this_session:false,show_inline_img_size_pref_reminder:false,shown_inline_img_size_pref_reminder_once:false,collapse_trigger_w:30,is_retina:false,group_prefix:"",allow_invite_to_group_from_person:false,ms_conn_log:[],ds_conn_log:[],is_iOS:(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?true:false),is_FF:(navigator.userAgent.match(/(Firefox)/g)?true:false),is_chrome:(navigator.userAgent.match(/(Chrome)/g)?true:false),is_safari_desktop:(navigator.userAgent.match(/(Safari)/g)&&!navigator.userAgent.match(/(Chrome)/g)&&navigator.userAgent.match(/(OS X)/g)&&!navigator.userAgent.match(/(iPhone)/g)&&!navigator.userAgent.match(/(iPad)/g)?true:false),is_apple_webkit_5:false,is_mac:(navigator.userAgent.match(/(OS X)/g)?true:false),is_mac_10_6:(navigator.userAgent.match(/(OS X 10_6)/g)?true:false),is_win:(navigator.appVersion.indexOf("Windows")!==-1),is_lin:(navigator.appVersion.indexOf("Linux")!==-1),is_ms_tablet:(navigator.appVersion.indexOf("Win")!==-1&&navigator.userAgent.match(/arm|touch/i)&&!navigator.userAgent.match(/masejs/i)),is_our_app:(navigator.userAgent.match(/(Slack)/g)?true:false),mac_ssb_version:null,win_ssb_version:null,lin_ssb_version:null,supports_growl_subtitle:false,active_file_list_filter:"all",active_file_list_member_filter:"all",file_list_types:null,shift_key_pressed:false,insert_key_pressed:false,alt_key_pressed:false,file_list_type_map:{all:"All File Types",posts:"Posts",spaces:"Spaces",snippets:"Snippets",emails:"Emails",images:"Images",pdfs:"PDF Files",gdocs:"Google Docs"},marked_reasons:{viewed:"viewed",left:"left",esc:"esc",esc_all:"esc_all",closed:"closed",muted:"muted",back:"back",sent:"sent",clicked:"clicked",deleted:"deleted",none_qualify:"none_qualify"},welcome_model_ob:{},change_channels_when_offline:true,ampersands_are_inconsistent_in_from_urls:true,ui:{cached_msgs_scroller_rect:null,cached_search_scroller_rect:null,cached_archives_scroller_rect:null,cached_channels_scroller_rect:null,is_window_focused:(document.hasFocus&&document.hasFocus()&&window.macgap_is_in_active_space)?true:false,msgs_are_auto_scrolling:false,is_mouse_down:false,last_flex_extra:null,active_tab_id:null,active_tab_ts:null,is_collapsible:false,is_collapsed:false,was_just_collapsed:false,collapse_moves_whole:true,debug_channel_lists:true,collapsible_ms:100,last_top_msg:null},client:{reads:[],last_user_active_timestamp:new Date()},data_urls:{connection_icon_trouble:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAF50lEQVR4AcWXX4icVxnGf+/5zvzbndlkk520sQnV7ppiMUsNFosXRYm2eiPY3kmvihSxJVAVCv65EFF6KbbWgoJ/ciH0qupFvVHSIhpRWq00sW2W3Ro1abKb3c1Mdmfm+877ejJzMDOzi7sRwRd++5xv9sx5nvMe9tvv4/9dwk2WmbkdvmeA3syCuyWLyC7nujSfnfDsXJIIAEAdNqfpFhMI0gPKAIahfoNaexVoA0DTAZb4rzrgbozXpi3P7zez70XORvKIRkLSXuT1yHfN8uNmq3sjREbWGec/mQ+1O/9o1BcjA7/eqll3xayzHHU5abzOV1Oefv3CLL8vwoDtj6//4TblAAUqqH4B574M1HXzn2xc/B3dCz+1sHHKRFdwqcmWNckmPiKVg5+R6oF7cbVbAa4C34Az3wF6cFdaF1KlANube+Ap4IvQpfX2KdrnnrJi4xTOO3HO4cQQCYBgJqgpWmB+4mNMzj0p9cP3AWXSOl8BdGj9bQMIYACq+lg0eYZ8jctnTmpr4YTL/F5cNo04jxOJCoIBYKTj1AItLqG6QWP2Wd33vocdWQMIjwLfB4As+WwNkNIVHwb/AnSbl/70A1t763Hx5VkyV0ZcQChwzkAMAYCUWlDzGB7VDkVvkb1HnrOZo48IlC5C/ingD1BKPuC2mtMAfwJoXl36DesLjyN+FqiglqOqg3ZrJDhCQq9jgpmimmPUkOzdrJ/7HK3zvwW4FUonIhNDR4FjvIriGPBp7ayw8sYzVoQ9YlYlLhoRzCBqom8aSWOVFIIUYoIiTMiVN541660BPFgUm3dHABgOIICytFTF+weAcuud19i48gLIzGBXNmQ+riPjgVpfDbglrvM87Xf+AjDhfe0B7xfLcEYBGQ4A+/fXgaPkLdaWfoZaQ4xyaitptxD+vWtGMUm/48ZxUCUS1/s5VrQBjq6v1ycjAOJHApRKDeADGgo2Vl41qIpZRjDFycBERCKgYltO0DDoG5MwDIdpRa5dec1QFeDYnnJzElgdDgBAzxXVMtymqnTaL5vLDgoqfVNNKcUMEUAEYbQMgWRuSF/pB8jotV8xzAQ43HW9CkCFGp6RMgMMEFUYbHsg5gRnYAKSpsrY3cMAkjEmKEn1OgUGCATASOXH7A0ogJJzNSydtRlI+rb00ySjlAAbVU0/1MAYaJZNk6YXFasYAOOHWLFSBzjvXEa5cVxCCOkcB0GCRg1EBd2GMCDNSeHNIsT1jgniAM5v2rVeZCSAAdDrtYBXnffU9t0tqpumajf+/g1CamnSUWxIDTCHqqKhZ7V984JzAK/UOq4dAbDRAFNTV4CX8HVm3vsQ2Doh5Kj6oZtM0tRi1YSBKWlOCqwZGrpAi5m5BxE/CXCK6en1yJYADoDetZeAC1MHjrD30GOEfGno1iuEQGr39XH6PI1Df0yak/Wvi3yBPYefoH5gDuA8vfbLEQA3HADAAChPnkX5CX6Cg/OPSql6i4XiKmZlIJmNmI+HAFWHWYlQrFKuHbF3zX9WcFWAH1GuvxVJfjAewAF5N+/+EPjj1MF5Dt3zHGaLVuRrBM0wPNY3SMdhREjXDqyMkVHkK8Df7NA9T8fd3wVwutvt/jhSAG7rv+OxKoriE97754HGhbO/tLdPf55e56Jk/jAiZZAMEGTkLhgw6xKKRSoTs3b7vU9z650fF2ANioeAXzNWYpYzWn74ieUR4NtAo33pr/z9zyft8sK3wGYw8SLY2OtFbiIrNOe+xm3zD0u9eYSBOSeAkwA7PRGxdVJxP/hvAh9Eu7QuLXB54UVal1+n6KwgzmMaKNX202i+n+bsJ6k37wBXBjgdO/lV4FcA3o9sDoBdPpJvvifqk5FzEdP8moXuVSs665boX2uxYaneDCF8KX7v9ggDzO30VLxDJ77uut0n7qhUpj4EHAfmxm7lBfDmYLfd30NlETBg/IbNTk/FOwQBlpcbVKtVQNpAPRksd/7RAVqkmpm50wH6v3o3lNRGdoHb7Xtkf9JNluzi7djYZf0LQppd/ul0XC8AAAAASUVORK5CYII=",connection_icon_online:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABmFBMVEUAAAD////////////////////////////////////2+/LR5bKw1Hmfy1KUxz2VyD2izVKz1nnS5rP////A3JuOw0qKwkCNxD+QxT6Sxj6Txz6SxUnC3Jv1+fGXx2GDvkCGwECIwUCLwj+PxD6PxT+JwUCFwECZyGD2+vGSxWF9vEGAvkGDv0CMwz+Wx2GPw2F4ukJ7u0J+vUGBvkGHwUB8u0KSxGG31pp0uEN3uUJ5u0KFv0CCv0B6u0K415p5uU1yt0N/vUF1uEN8u0zG3bFttURwtkR5ukLH3rGWxnlqtERutUR2uUOZx3l6uVZos0VvtkRxt0Nzt0N8ulVisUVlskVns0VzuENmskVfsEVps0VztlZer0VhsEVjsUVstER1t1aOwXhcrkZdr0VgsEaQwnm/2a9YrUZbrka/2rDz+PFhr09XrEZksE6pzplUq0ZVrEZarUaqzpl0tWJRq0dWrEZ1tmJztWJOqUdSq0dxtGJMqEdNqUdQqkdytWKmzJhXrFBKqEdZrU+716+GvXhjr1dIp0hkr1dYtVOVAAAAFHRSTlMAV8/v/wCH+x/n////////////9kvBHZAAAAG7SURBVHgBvdOxjtNAEIDhGe/MZO3sxVaiIJkiSNdQUPJOeQlqXoCCIg/EU9BQHRKg5CT7ErzrHTa+aBOqaxC/tdLK+2kbj+H/hoWhlCmQr0HeyYxyM8mvkWHKoAfBS6cBWEeYugAzf4QGp1SV8DvU/ZjBdN7iud6hdnOTdl+TuALyrUPEwfdu3nc1ipr9AwdIFZPysJylRDfa6cZL2rfgMd9QjO8R0Y+/u7sa4LHZz4wN/MXEyw1hbK1VZdV7PZ1OyufzktsxXADCW5EkXq06Paan02Uoo3kHmAEzJ8HBN6v5qlkqaxTmCdAzQK8Noi6rXwCrJyutepUMAARnXS++3cvm2xvftR0PzAyQAXtwdNChifvFHppBdR003IDCIg6JDOse4DX8WIdo1TwfpaUgqWC9c4eqqg5HF20QZdAMmDlasdHWkrKR03J0A4iIXRTrpba29laiY8YMyOyMKYkXroyROZZuwVTyztAFJPmZKBGq+FxFVBr5BHr7ubd3GICfAM+88qDHHYe/BmbbIAaGKU/Fz10emDxyHxBhgJTg+DGP3O3QbltMBkd92F2H9sWxB772wo9z2z8FfwDHWbdKLDfq1AAAAABJRU5ErkJggg==",connection_icon_offline:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAF30lEQVR42tWXW2xUVRSGT8EihUojBUJvM9POTC+gBg3GF2PUKEQwUaI+CDEkGhIfeDL6LImx+iDEK1BoS8t0KL1RaEtbC4W29CISEEqRB7AYIFp770w77XTmnN9/DWc37WR0SMEHV/LlzD5n7bX+vc7e++zR/ncGYAFZGAnzWcx/mTjmvn3JQ0kcnhT9/fHw+dKmPJ4sv8eTHcLvz54aG3NiYiIJuLU4iuj5JZfgQX/wDQB7yXUSIAbRiZiXdJEvA4HA8wDiZwuZd3IAjwaDwbcAnCVA0I/gyBCmh8jg4AwBtnXPCEybJG5MT6+PIiJq8iXkCxIk8N3pxe3yfFzcst7oTI7V2zVN7yId5HzOcqNn5xb0t9RTUJ8S0otgcGu4iOjJ1bsGviIwfF78XldptGZqRpOmGWcWLEfrokSci1uJ9sWE17bYFWjRlqGZz8+/vtb463y7EuFhBT8Iix915LG6rn8GWmC4D927d+kneLsxIQWnLE40O9agxbkGrZlr0WbSyvZZew6aUx34UXscjRTSW1NhzBLxTlQRyoJ+/5vSyZj04vLuXUY1+9RbnWh05qApIxOnrA40s30mjGabE6ftWWjKXIP6RCvq2K+3rlKJ6JHVEvFVqJtqtqsJd5Ody3mrhqM+6cimCDsarRwhERGnmXQ2TeYz8WnIWova+BTUsBIDly9ATNeRi2vXFkWsgrphLjV4b//GxJpRtSwJxx3Z/G1HHamX4EQJUcwkJiet9CU1jhxUMXT7h1sM3TcO2l3uH5nhVVANNfH2IuDH9SN5KNUoIM2O6nQHjjO5iKglTCBClBjhXtsiyelj+h7n66hKTEYF4wz2/AKxILAtfNDyY6FcJ4eHLbLJ+IeH0LDxCeOotgSVGQxiycAxIiJOKCEmMlJBtWtMH/E9ZrOjkqLKKOBS7kcITnhAKxwYGHhMDXyOANleAQR8Q4M4ulTTS7U4lHMUFWnpqEq7J6JaCYmASlxtChbhFZy0rCSatm7AtGcUtDav17syogDZ1wEYE9zZirm5uGPiUObIQhkFKBGhaqSJEIVdUG15FvKrJNJHBuBmitqN6+EfHQGtkwJW/ZsAXQQUUUAJK1Bq5wgYSESUixAJblI1h/SZ++Xib1JKAS5ZSZueg38sJKDD29cXWYCsU9DGKSCfAoq1xSihAHeqDUcY7KigxCjMhIoy00dESx83XwGriepXnsHUvQp04Z8qEPqkAl6ZA64UzSjUYnGYAVwUUELcEnSOGBuZ+5vPxIei01HCe650Jw4xRcN7r6k50ASPJ1EJiLQJdflHh9GwfSOrEIMimwPFDHSYQWeEKESMEHZPfFyCNQPFyVappnG16BsYUz7Q9uDOnbg5y1D9kMOEfM8Jbp6qxX52LFidhiIGKkq1ojjVRqwSPCKHBfEjRQL3j8IliSh6RNNHbt2AaZtVzohbsXmYmJzo/xPlLyQZ+7VFKOA8KEixoDDFikOCSiDJTFRbnolPocWGApsTexm6I/cTw/BPgnbFNzSUql57RAEA4omb4FbXOexjFfYnrEa+IxP5FJGfbKEYK2GSMESkkJ9mo3+WVBDupzR9+OZ1mLYjfBeMKGKaJxkAvQTd1WXGD3y0j9/8AxlOHLTZmcAqYkIcNAm1OeqD6XYc4LyRkRev0IzbFzpV8rrZ6z/qGTDIkwwAD2Dg6olyQ+bDdyIkYQXyuPTymEQEHUgncmU7L8mCfUsT8S39XE9q+qzk3dPT4+uingXC1QF4n4wR3L30M2q2bxIRCnxP1JVIYiOPtH7+sTF049eZ5OC8Ch/kfYuQkwyAHoLAxDj+6L6Elk93ouLtl+F66WmUvPosXC+uQ9W7G3Cx8GsM996ATDhVdr7OdVGSRxchO6QO5EohQkLGPZgaG8UkdzaFtHWuc9OukB3yzueVPFInOcnIYQLANlJI2kgn6SA/kSayh2xWS03FeOA/J+GzVr7n8kklq7zevlXgVbZXtcNFO4Y/uJDofgvDR/3QhURiPkn/Bo/wqzC0qdolAAAAAElFTkSuQmCC",connection_icon_online_away:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFb0lEQVR42u2Xe0xTVxzH2ZZlWfxvW2YW98f+2OaiidmmZlaglEefvBRE2RwjguJijKJxDpzipjiGL0Kckc2Z4OJmKW15WoRKsSqi+CA+shUqMnUOfJRy21IotOe7323aIGmujG2JW+Iv+eTe3nPu+X1/v3N+556GPbX/hQF4JnB9jVhNHCF+w5iNEBbiIJFATAm+9285foUoIVx4jDHGELBuIod48W8LAfBs4BpJdAd9/MF1otlagp86srC/TYxv2yLwfXsc9NfW4mzPIXBD9/CIGYjXg+NNKmrevF5vFguE1ee8wSqvbEKxORy7T0tQ0hqF0lYx9rX58d/vPSNGCV2NXfsw6LGzQFbuABAJixBOezLhZfCi446RFZtl+KpFjCJzNHaaJSQiKuAwivA79z/beSoa200iHGjLwN2BzuCc9BDTA+M+J+g82Mh3DryES7eNLN/4LgqaJSQgBjtaJPjmpIQcRWEXQU4DjiUoJmFfU1vhyRhsNUXQbzm73W8Bbz741ABeGsuEYOR9UwDsJXDLZsEXRhHLaxJjy4lYbG2OxjZTNApbyJGZhDxCUdA5tVEfEhCLvCYR9rVmM8ewDbx5vZ60CaP3eDwzALjdoxx+OJ/Hcg3zaKBYEhKLzSdi/INrO3ag514n7JwbtgEHHtj78cvv7TjcvoEyNYd37hecb4zGuob3YLZqAIwSaHa5XFPHshA6788TmwlY+i5jZf0stq5Bgs8bZdjYyEcWh3M3jOAcw3g4wPmdj2cAx68fJsHTsckoRX6TlASEY1NTHOMCWRgdHY0J+gwpOZfr3lRe5ZDXhUPnC/Bp3TwaQIrPjiuQa5iGpusaOJwe2EKd++kfcKLX1oefL+7BGsM0Eq6k96Ox6thcdrq7Cj6MgKzQarW+EBQxLv3cMPcWQAF67KR6AcupC8d6gwor6mZgf2s+bvZ1UdoHeWeCDDiGcOFmC1VCKomIxPoGuT+Q8gvbMewdBFmjw+F4ORj4OAEOj+MdAMw+ZENG1Wzf8tpIrDUkIrMmDLrL5RT9cMCRMP2cC7fv9+BA6xZk176JdYZ4rKgVociUjcERB8jOOp3OV8cJCN6MjAzOBcD63TZ8qJ/ty66Jwqp6FVZSBhquaUIECMH3O9JehvSqMH8Ay2pEKGyepIDFutm+zGoxOVdhee1MGK5OTsCP58uQqgvD6mNJyKyej20nQgQITwEvIEU7x7e0Soyc2iQka8NQcbEczr8gwE5TcIumoPRUAZbop9P8J2Cpfj6+NGbDJSAgZBFyw3asqU9hS3SRyK6JR4puFnafzEd3b+eEi5CjRdhmNWFDQyoyqqOQVaOkbM5HWes2oUUYWobuUSdKTxdgQWU4PtbL8UmVCmm6N1B3pRLOx5Uh56Iy7MXBs3tI9NvIqo6n6OMomyJmtOjhZaFlKLgRXb17CfKK91maNpYGUSJdJ0VOjQxmi5HmWHgj0l46TBHPpCpS+knVRmFZtZQqS2AjEtqKXSMcdrXksYSKCCzWykkAjwyZeinKzhSi666Faj64FdvR0XMOxaYNlKkIEqzARzo5vSeFquID1F9Twye8FQt/jG7ct2CRVsySNbE0mAJpWhmWBCEx6eOhZ2PtfP8kjRgbG7KY3S34MZr4c2y2NjGZeh6SNTKkVCqwsFKOVGJRpYwEjbGIoGd8G/VTIpFE09phfBC8+XwCn+OJDiSUOhLRyNK1KigrpEiqUJAYORYIooBcHUNVlIHuB4IHkskfyXoedrEiUz4U6jio1ArEq+VIeIREQkUspEyVnysF5+4XOJL9s0MppfRXHGzbjdz6FeRQCdlRmg5NIrY05uLoxe/wwNEreCh9osfyJ/fH5Kn91+1P0yiqwz6mfpkAAAAASUVORK5CYII=",app_icon_32px_green:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lJREFUeNqMVk1vGkEMndmu4MLmkOWQoCqkh0APqAdUVNpKiXLux/+tFKlSDlEitcm15RI4BBBiucCFjdDUs571eL1L1EEC450d28/P9ujvH7+qbBljFFtaa9SgAN9ij9Xnb/LNdBrKIUn0rNKGKi1vvkpPQqi0syYiIBvlN7lt2kM7C6ErE2gr6BfcpCXO4mg4AURlCg6ZHCIrGuk1Kckp/q20P13u1NknW4E7VMkAreE8ONTLEA0Lpep0jDvgSReZIGRQbkSNuBnT0+ggOowP0X3uB0cC1qvu6453Te8lT3/Qv7i8SLfpbDrDN4efh4MPg91ut1gsMBprqYSEY1EledA1fNo+bcN3kiS0HzVgz7pMwGrJhRBs5glS+EuVQbkDZKIoAmHyOEEP2m/s6WmaJsnKRZ5XoijJkIrAWtKG8sP5dNw6ds46Puhmswni+HFsmclKnZe9M0BmiXD4uFavdbod3ERC713PRZDhA2GhJlkmmBuOj0vkt+EXbhl5BnY6bzvDT0P1f+v25nb0Z8SZ6rikMwO51gcGf8G7xkEDNtRqtfPLc1Be/7zebreYkv77PghXP65g5ypZWT3RP3ufjIWeOb6A7LPNZrNerymfIE/GE4wSKgAZNX2aenIrhwF5jzZCOpg3Ly4jf1bIlozsWF+zpxmxQ+liN81UWBaBMrIjOhpoZwkpBGl0hW0U1vNmvXGFooycHMbHFJY7OO4jwqAB6BOkieMYM9GrW818Oge4CuzUDCIqcW4GDsU00iKm0jrrnqFw/+t+uVxyHhZA9jRlZuAvOg5wgyXI8N3NHb55cnoCxgCxh98P6A1gBR/uIkc7LGQ4xx0WFA4lAEAAwuA76Ph85jR82ogJmje7whD37RBfOGodYYaJ4GgSMKFZW25BHiiVzwMaOx47KLF6DfPpupAxkFioO99Eiye6GhYRFEZYcdi2Wi0sMYCYJwYCek6fOdC+GRt5zQmlC8wSdGNgiG3RxlX46O8ITfojlBHDkuLwzU7cscr1LLqhd5y3hfK8Iogq7lLZ8jZK9zU+9co3KK4P+LnCca9nG8T9RedLXBL8tUUMIGwvojXtc99dthiqLnoWViADNHvvAGL2uROVFtcykZjwhZdFcAJc6TjbwTEM3QAq3lP40VSThRxU3U0rgf0nwADpJQebhAz3/AAAAABJRU5ErkJggg==",app_icon_32px_green_unreads:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JJREFUeNqMVj1MFEEUntlsx1FzQgmXnI13JGA0XIWJmvgTEzAxBhXbw0Rjg4VWamFLIjWGUkwgFoIFNkAhJN5VHGEpMVBz1OPbfW/evJldyc1d9t7Nzrzf7/3o+9fvqmwZY5RYWmvcQQKewZl0396Uh5kb0jFT/K5QhsotJ75on4lYaZIWWMAy8jelbD7DJz3TlYl0SugL1OQV8JLeIAJIZTyFjHVRSppQa95kpeRTacc9PKmzT7YiYqpCA1PB1jjcD000wpQi7mh3JIMeRII9k8eYp4oyUg/pCVix5zJdAFAg+kp98x/f1Mbr3bPu45uPkN3aznd4tndb716+ZT+z7nw3QhTltaMLGa+JGw3gjuzw/JWxGp7s6y+lKiM7Gwp2XWoByLQBUvjLmcEXRqojyK4FArIzvNPea1G8tZZ3WemYzUklaWejxFNtrE7sMgvg05hskMjfLSVSXaY9CQhcJiMGXAYGB4AoD5VxZ2KygRYPWwtGqpVKtQI735ZXgiyhQN67dkdKplAbNf3k4dPmM9XbSjrJ6+evJFIJSzrLA7trI5N5CXXvcW1vbiltPSrSIs0VsCBwnKEkpUjMzb+49eA2EIufPq+v/oBjUzPTaNyXxSXwDOqbL7pUTW0KK1m8JM3uTg4SxG5tnDB6+veUqoBWQT5hqOAZKRNWRFIkMxlSjBGZ7B8i2J3IziGKDDsHwT79G+crOPG9XIG/jnsnwVwr9Zfgi5vloUvwPeokkOEeOrVIWOhoaIvMZ+D1fuFDjxHm+uFSSjg5MlzDtSvUAO3eIXRyfBIEkksnJZos8Sh8ZfkrhBSI2eYsehwAc3RwBMTUzBT6CvDT3mvDmfOzrqxCxu+Asd/EDQOitftHxnNjdb3bPYdLzfk5wv6vrWQ/8Qq1bNS2vsZeERWRAHq4OsxOAEdjhMuDZQuqpKCRcA5bvMZeC/ObbX181CuZWtevjrqq52tNrHMZF8ms81ouVIuhAcYoZjjXD6jbdIUbgHEhlO06LmxhqALwPTleAv9AqcFXP9c20Hs7m9uyqJFOHGqR2Ronu8KZR3g21bZwCAumIzEREPqjoDbJHHH7/3EjR5hfSYy4RPPGN+VyJGh+8qScnaQRqB/PWPA3Cg00xTOAlOFxVDoYyyRS0yBfcDkwzjk3531vBDZezYjxV1nMkY2y//DMI2NQNJsWOvafAAMAxE3MJSrFyPAAAAAASUVORK5CYII=",app_icon_32px_green_mentions:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABExJREFUeNqkVktsG0UYnpl9OF6/4JDYaWirNrFIgTbvNEilByS4FHogQeJQoCcOidQjiF6LBGcEnIs4cABBKZeUQw+IQkUicFDVJo0TJ0gtSW2paWLHr90d/t2ZnZ11TBubie3Mzu7+3//9b3z2xdeQuyilKLhMy6yb8KmVq+VLPT0j0RhqfakgF2MMO/YrlnfOYa098PsFQJjLamBA3SVQdyyrPQCCHdWbMJCx4PtPrdYmA64+osgjIJA4MMKEkFy10iYDLgv5QoWtYA+i4Qc+i+Xy/wJgPBo9QZ0PcWHyprVU3m3LyZJXGQ0B46huExAfiUSmzk2VCg/R3VzrDHCTDGBsYKMQomAyOjH63InnN48e3ia4nSjypLJ48fHYLeDR198XiUY6nk5cteotA/iJxv48T7gWc6yvEGVodCgWi8UT8av37y+36AlVeJgpDtEqwvTUy6e6urtM0zx45NDWw61EIv7C8MB3j7YvVMwwwi07WbiXZcTU22++M/0uXAFAtVI1IkY8kXjjrcnNjc3fF7On/7qD6b4BuPpSPgNG8kCSPQEm0jTNMAxAqtfr8M2nj96s1k4urZJ9FCj8+sQZBiAsQxHnz4w2/f7MK2dfrdVqn3/y2eyPs6ZVP/nSxND4sLq6NvLHrfiTbEXEA9Rb2NszQn3H0uBqILGeW9cUVVXUkfGRzmQnerbv43plfmf7SSZyFRYkRBF1vI0wRCfEKJwAxtrdHPyqSD0+fBxMpev631vbF/P5gXD4vVR3Omw8LorkngPSHbnH0nAJ0tlJdjE7MDYIJx1GONWdKpV29ZD+zKGDncmulbX1mdzqoGGMRaKnE08ldT3gA+hoTFk5n0HWpU8/aqza7rJtm8VVpVIpl3aLpVLhQeHihQ/h3LJNeKBH06KKciQUUjGGa5XLxTzT2GW6P90kHljxUBSnymKiqqquaaFwR2Gz0KGHbGpblgYK5Kn9wLRzZpnFixpoyJ4zvv3qm+xSFjbnp8/3ulb68ovLK0srsJk8N3lidABr+MrX3y/ML0DfLj7a0VTNIUdseMB2Mwl7MtVAlrm2YpeZuT9BASYd1rUrs8ViCV6a/mCGUbn582/Lt5eZQhBaTEvgwaIGds4tTIOZLHkC9r39vWy/cW+juFOETTQWTR1IcbffyTIkpylRN/wwJRD3DIBwk6h+FdozXgyODbHNwnyGnQ+OeydzGT/tRfOgvPo6ogi/RURoikcFiWQPrxYQo8xjon5k5jKiqPDXpXxiZvZ94LewIBuQu3HvMtjnxvVf2K2ffrjGrPfr9RtckNxCvNEBS/UDs8lOToK9eIiPYLTpfNYwi3gFjY8pBAXflPu+f/4fZhSjgrjV0A0DHU0gixdkiXIUyPpSRGUSckfhg08jQdp8BpAxAhIRlj0n93Ze7B7zcgM537h7rO8mqTxp+jZU2X/kxZxcsQPAXq/2WneAVmDUDBr2XwEGADZFpKJDFtSPAAAAAElFTkSuQmCC",app_icon_32px_yellow:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6VJREFUeNp8Vr1PVEEQn3m+Ais+TOQ4TCCeARMxRyESC6EwkUIDpf530kqnJVZqZayMFBI5wpGAYMEdDZzR3Dqzszs7b+9gL7k3b97sfP5mdnH9yUvwyzkHZiGicISg/0yG+XGnFVZtQpdK6behNmBgJfPD+EqUgMFaFoHaGNxpbauMSlZCB1cgE3iNm7oyXTYbgSASXMUhF1PEpMu9VqY6Zf8Bk/ZcEv3PryIohTxANhyDE34eojOhDNMucRe26FklNDNCj4/CdC3pnxjD+mRw3/phM0HrxvydueQaXgmetVX3eqPf60GrLRtxY63/4pn7+w8Oj1CiYUsDmQgoGgoecU2+Lswz/+gEVN5zcL/tXdbEYo6FkmzGAoE8tTO0dpSZ8TEmdnaDgwvz/HrZg6NT3ib67F51ukiNJr9YCV+usO7OsHTrAAMeEKdrrHfnB2uCak9k+SjVrAJO7N0cgaVmwPXjZqjP02XnI+5LxibGiMM5o9S12i7rkliDgdkgSh/eh+erfUi5w8asa8yC0ML3HH59t42ttnE0ZpuI0uAXbXl/HsCbLepzDuXVOou/fV9cXPKueo1AxbY3tyjD8Os3Xlya5mKkpimZIsDUQPytew6drov1xE6XKyw+3hpn/vEJ7h3ITielCc0EaVzQW6mKhxaKaI8f59ESwD51m01STsIkT3Mg6vEsaYtCuzzlR3CFYf89zjtSGQO0XOjns25sFHD5yRFgH1OUTXCRW1kmMU50w2N0YhQJQiJWr3EE9RqujPAm6u3jU9M9Jt2cIm1xa6YxQxBysSK8lhbB5NZzmoIx2P5YUHzqfna6lGn2IqiZ/UPc3GL21CRPoU6XgSguPphzS4sM/A+fCu8NnJ1DVkjbz2WlwjHvtChwHwqDYq/NgJE9j5reg8ixp012gsqnonqIm1ntaSnA8Yk0ecien3pOz1oFSLDHuEpIKSqdbCpBNLVYnQGDFIG4RPi5yYXloa2TMY0A6eEsgsGjVZ3yAKUCQOc88L37VADs/al4nVS7VG3Ba5m7YEpE05gQ8n03jnGAr99YA5lMZQSXHZZqLA277I6lNqiMYRjET+T45y8QnDNDLUQfzw/b2eXgzUejSSAZuK/ZsTh4g7L8wurNBlHiG4Hs/hLPJMwuCenaUmnxeOBko+kq98Nlq4oOPVGEU+QBuivvANnZFzQCZtcywMpMKa/ZnAWXJTd33EjYHJbyhOo9xarWu2WlBsPupkMT+1+AAQCmPwV2bobFnwAAAABJRU5ErkJggg==",app_icon_32px_yellow_unreads:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1hJREFUeNqMVr1PFUEQn9lcIc+ORylHB9gBNpLY+dEISKWhNHYWdhb+FRaa+CeYWJnYKVoJdAiVQMc7Oh90go1vnX2zOzs7dxj2JXfz9mbne36zuLa8AuPlvQe1EJF3mKCn4Qn76aRmFmlMV0LJt04d0FpZfde+EBVg1GY8EB3tk1q38Ahn4Tp4h4HA/5gpy8jS0YgEkeALg3wKUSC9tVo2xSj9BMzSLSeOf+PlolCwDgbFyTnety565UqXdPbb6aSbTEhk2jVWmAJe26EjQasqQoYdBUrExDX/7Kmfnx2dX8DLV47FvX39l54HR/jmHUqcxXY5G6uos3jYNPq6tEjSA8/BITL/3Gzk7PUCH4g3aGuhohMpQcBv6QzJ3fR0FHd4FHnqaZ92MOYbUZ8Vo11uNP6lTIwjFhebLx7QztJiVPnzIJtv+oNXZUKmM3ZrwU9Ohs2pfuReXGDOUX0jSqlrmKmDNV++2i5JOWgVBoflwT14tDIyuVlf9QCFgetjnsEJkoJsaIo2EU7Vb9TMldDvdyDHZWv3B3Do2Expi9Arq7cfarwELgpV+xtP/J3lQLz/4L5vh2P373p27uMnMhzZ3jboxipKLQydiSJaCqY5ifg1l3J+dparw/QTFyc9XXZHyp8NGbtMLSb5PB5E/BKVx01UaSdHLPvwt2ojeJRbh78ia9AgN9f1nu9NRGOpuqb6vmmQOlwHWRwKGaWJxr7o+iVZL56PrphhwQ+pIh1k5wXDMQP1TH31CoLhEE0iBTpzHwjEs/LPmxQT0g3razEHVDDNSThAJcSNTfVDSEc8FxcZVPQEtY2m4XAMk+GYZHhrG8//BJzbeJxqfx8HA3HaFqjgqys6WWWC6Dph3PA0BJpOU3qnUgOSdCNRAL/woBhh5bCdn4PkTdy/OV+CqAZOhodWxznddcXIhWxs08QOZ+wLIHqYZ0YeZJinZpGD9ghjEwYN/Bri6Sns7kUM396hkI6I3tsvQC3aJKlWkaraNx8J6NaOS+5Hnt/nfvObM1OvfYPS+85gk+6RvH9JGKXe5ZOuETvRRLMcMMNPc+q7k0ZGPVF4x1kH/aV3ADP7ZHiYa1meNiYH7cPGORNca7ji0DGs+A3lPaWYP3Ln0Tnoupt2BvafAAMA603M1k3efM4AAAAASUVORK5CYII=",app_icon_32px_yellow_mentions:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBhJREFUeNqkVk1vG0UYfudj/bExbWo3kJLaKRWO3aaooIoKOMCBDwlBI06F/oEeQOIHcIU7N34CEieQekMIkBDtBaEgDk1aRIgdRGiSpqSpN1nvzPDOzuzurO2SxozX69lZz/vM836ThRffhngopSA/IhH1I7zCYD/4eGbmQuUxOPzgKJcQgjNzT0eybmHFEPyjAgCxsgYYqHikqPeFGA+AEn30EQxcLPz+FYZjMrDHBwUJgRTJAgOhlK7s743JwMqCTGiqK5yjaLzhtRQE/wvA8Bi0hNIXjWE2IrEc9MYHsFaN1ZTC6KPjl1K/RBbepJv1u2MBkBERYNjghFHKCD13lj59mv4xtf0PhON4USLV+EuGZ14hh0ad+WVWrNAvg/VDA2SBZj6JJTRMrH1G2ZkWmZjglQq/dmfn9iEtwVon54adx0wuPAfzZ+WpWTh/DqRUeG3dVUti5yI95hF6aIBMdHx74zW4clm256DVNHrT+ntyWvnV/hrsNnePZbo90Ivs8RMMs7NWs4QoBY+TcolVfH7kiDc5Wdid3vt2alXAI2UncumFtwxAqhllOVhrv/eueumi7Efy8y/ghxtRJPrPzIft5r7/d/GVtVNHqXewm7rZTSMlc0Noto4kCOd0fZ16jHPG59terVoIZ8JPdn/76f7OQdk0PnBKIk2iqHNcLpdU46TGYpSs/YlOhRt4q6n6EXge6T4QH213zpfLV6dPNMv+QwAcx09PreU29GOjblZgtUNacwhPSyU1VeO9PVLw6InHRXWS3V7vf7Dy+7O+//xE5eWjk08UCjkbYEUzh3XjuTUHH74vB7N2/F5IJSIVhnI/FMGe7AXR9rb49DN0YilkhEJmPK/C2FPFIicEn7mVS2ykmcfZxih/0ElF64pwncEZJx6XxQK9d0+VCjpOhPCUkhtK3onkShQYf+G5gpwY4+tvoNPFIId3FrQN8M1X10h3TfvD668qjAw0+3ffw81lJoR80FOIhLsk1aRlnDRJIpO7Cc7oyjwu3dIHMNJx/HidoN5x05XLlsrir3R1Fd1B64AzaU6JPIzX4EwLJIrnlOBYAuf1up1vbkEvZuyX4XjNmr3TsZGvi5KK3Y8oin5vAKhVCU+z0HB70W5Bwsaun2lbyOVb2T+z4qFs9tWiqH1FU9dM/5qSOJ5ki27XRni1alduLidbkhrlxpNRc2aDrITl2XS6sLFJtrbg50Wbw6/fwNwlcb74SyLILSFJ6+DmQWI6OzcIhvHAtmBqZH82kOSThGbbFAr5nW5hyNYfosa0VUhfDVTDXEVLkdMNrkTXC9zzKlAuCZvNwGl8Bgmq0T2Ai5GTCMS1nFvbbbL7j80D5DLlDmk/DlK308x0yM0vJD7nZuwcMKicDfK0cq1mXrH/CjAAfjaCPa5V5tYAAAAASUVORK5CYII=",app_icon_32px_red:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2pJREFUeNp8Vr13EzEMly5uQl+nlKnpRrtRNsp7DO1Ilz5W/gZW/iG6MrLCyMhIN9JsKVvDlH7dRdiWLcu6K27fxaeTrY/fT7Lx/dtziIOIQA1EZAlP/NPoBHleqZVlN547mcm3QRvQG8X8kFwmDjBZMxGIjf5KbVt0RLMKHajBMMH/uCnD7KWzkSZ+ClQ5RDlFYUrWaxGKU/oJWHa3mhj/4mjSpmADDIZzcCy3IZIKZWh3jrvRoBskJDM8nzawPyr7745w1iT3tR86E3401XZAg+Txr2fP4NMOHbmy8t2EPu7Aybj4J1mWHPiRWDRIHnaNv/LWyw2IPksWm6AHkli0XHA+Xxkg4F+pDMFu38E0hnr5mDw42grPW4JlF5bxfnqtOO2kCIIlJMFH8+lFzPVVK3zACAYFewFV1NVa/GMDJYNUIbaNcDxOlt6Mk7bPOGtyfnYbOJkE7WXnzZOpklzJvd7AaXm1FWDUXw9c+AdVSlESXr/e4VUEVZiatDAayFLU8P5u6fM6ZMOH8mE7qH+5xXV0ajbCs2j7Yh3w+7PB9UYVV2BqYWOJAEsBhW9/CVatnxLjudrAZcsJx+cR8OsO5i1DRQxNKiYVo39zsrFuXno+jQgHgub+tRcNeMyFHYB1N42iACf4QiPbERMNMK0/jNW7bHNhU6rnm00uFCB7ciTa5xSZDs56p5MUx4EQJnNpFg3MHJ5yKB36dFXsRJUidoGtiRm/qaHQ8dh28uOtpPDtHpctifvmdHGl9yKImUWHF+sg3hvR2SQg7InIfrx05I154n+/T3y7iRQyXUiy7SqEc9798IHHUAIp5h3Ocx29jqEsskTaWGmU9Qno6kOchBC84GAUntctpQLzJhnzjuSs7begkiigpqpkhQSXGOM575JLnj/bmDgqnbG0ACLL19BN9RFWH7aHMT8egFWmMrcKD8Bd7AZV4+QCI3vNcdYFZcl3Y8+QX4+pnfvHz4egsiKVE31GCU2wxsDcscSGh3HeVn3wDvHHAx+uoJtaCiKfH7qyXf/mI9EUOvfua7ot9m9QWt7ofU0jKnKlYO4vmIe5JJRrizmAuL2Y1vSU++mypTqjPlFY0tgA6ck7gDn70o6A5loGul9rDPqLTXAmudZxpaFz6PgX6nuK3lpqssJg6G46mNh/AgwA1LYLPz5hMyUAAAAASUVORK5CYII=",app_icon_32px_red_unreads:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAzFJREFUeNqMVr1zUzEMlxyHtincsdDOyUo6Aytz6Qoz3HVk5y/gr6ATQ2dgBWZYKWvDDAsDaZvmJUZ+smVZ77UXp5e4sqyPn76MR08OoV0hBFALEZnCG/o2PJGeb2pmkcZ7Lzs569UBnVXU99Fl4wGTNuOB6Oje1LqFRzgr1yE4jBu8xUxZRpZGI21oC6EyKGSI4jZYq4UoRulvwCLdcmL7aZdLQsE6GBVn55huXQzKlT7p7LfTQTeREGS6OVaZAkHboZGg5SvIsCdBaTOC8PoeTH2YBzj+mwx/fz8enS3h7RwEZ7Fd7qYs6k0eNo1OH90h6cDimH86TJy7LvKBeIM2FzzpzAEC/pXKkNiNs59nTeIZDxSF442o74rRrhQaf3IkWsTSmoqC1gOikE+KUtWEwcMbyHTEHg/hgYvEvZQKQHLZY/FgPMDJIHr18SqYKskx6CQGw3K0jc93bGxe7ABAqCnx39mKFChDM9q0cSp/k2bOBLZ9w/XtOkHHZkpZxEou5pcCimcnl/DuIjK+GsHTrUg/ucDPi2jjsy1g504vo+FsrzRdVD62dYC2l5lGNvZpTzhwsj/MVv1ZR2mqL5R64lDRtyvuSPpzXrUuj1Q8z5sUIMna81WqLzs5UtrHf323g7Pcia+yhczn4trF+Mdr3+G+oyOc6+pRcEfEaKKxLzp/Sdabu5tGWPqHZJEG2QXp4Vga9WSAm6fQ7zWYQErrLHUgLZ6Vf7gK5DhppsRnlChhfq3ihcPtwIVN+fOziTzzdWkqeoLaQtPtkNaPpo1nBurLAubtpZejnPtLmDWCe9WCClCQ54GMnZKggBJhAoGAptsUXmkbswaMRGn4lQfVCKuH7cEwFU1qmYgHQzCUaoKGquL4yOlpXo1c6haDUBmr+gc1UZkZZZBhmZpVDLojjE0guaeriA+1Gj76ep1K9/sSdFNLNkmoFVK++/IRQElcdj/x/FuHTws0U6/7gtJ0p+WaRlToN8Ao+S5HOkfsRBPNcsEMP82p3066M+qJwhRnHQw3vgHM7JPhYZ5lgNVM8rdcNs4ZcK3hikNj6PkX6neKFl3ePDoGfW/TXmD/CzAAcryyBfjeu1oAAAAASUVORK5CYII=",app_icon_32px_red_mentions:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+pJREFUeNqkVktvHEUQ7q7unp19xAkHJ6BFAhshgeI8pAgpuSAO3OLkCJw5cOEXwBX4F/yAiBMCxA1yyQWUG4kEIsoGoyiWDYg4jsc7091F9XRPT8/YkeNlPLvunUd99X1V1VX8+pV1Vh+IyLqHNrrSdJbFvPhsOr00OcGOf0iyyzmnlf+OR3M9wJoD8M8LwHiw1WOA9RFRnxizGABw5/ohDFIs+jwqywUZBPcZsoZARArAjAPAbL6/IINgi7VGo1a0JtP0ReevRfG/ADyPfiTQnVDDbGvzW7G3OECIai1ThHGu0wdgzPl7Y3i8+89CAPyQCvBsaCEABIeLA/FGJh7uPd6pykWyqLHq86XF87eIw0oGIyEHnH+9vXlsgLbQ/F8TCQdTqy9AnM/ERIolJb/9d+f3Y0YCYoR9CFK5Liu2PsCrOZ9KGAt5Qqo3c/HVo43iOEUne9LHUF/P+ftDx0IjKw1JJJakvDZWW/Py1ubs3elrrbZHMgjuN/Xs31yGQEWQFwBDQSrJk0q9oFSh57c2N55zd+LXLl/1ALGAkQXfvFwfjtg7GVbWfrmLPxSVNtUlVq6xciAHV868siTV0Wma7m4OqVl7QqvS1RqReIighJRCns+z5UFmTPnFg3u3n+wcFYPa4UgibqIUCbo8Yrgi3COE8YdllFSSybNDXmmmOGzMq0//3LgwHH704kuvD0fPDHLMnOg12V2VDoOs+wqZGbaWETzkyE4rXnCeAbyci2Wp71XVx7P7F0ejt8aTt0+eOpNlnRhQR/POpgm6ptgnk0N2bTotokYsjd23hvJ1z5i/KvP5jrHWGkt3cKrURIiVwUByykCUwS4PleZ/roqmrFNffFLVyeDKD7gCyEH8zU2eWYvWGIVot9FuaTvThfdJdhpyE4xv9nFmnEQfDJlX6UbBHhgHsZ7jWemS+fsC71ag0ewaUJKIoQXLaoq1JMGm7FRZrZX/+Yt2BbfSCPXjnD2tHaGs9U/c1vy+pnSQ9JwU1ntJPHzW0MoZ5Nit5CQStH5VhPWWZU/dEsecnYYm7Dq0PNeUsE4/jkB57wEgSCLj7n9wvDinQiTu6EDxnGK9K23ugXPYL5wpCLcgpmZ8NJJYbhjMdMiiuH/cqZpXmh6V1pMXsY1B28K6bMjuDeP0+akMt26WjhPZ+bliwVDaQprRId0HZTqtpDDeXJNd4Zldi9/NOzNHHEb6c1tzHVK7vamivf4MGeOoEG/1umGno0Xk+EJqMc2C1F9kmI45aUcJg0+fIB4+A6QYHYuMp5FLe3s/Bgdf7pHridt3vDNpthpK/581EUt37A4ww04MurQ6o2ZX2P8EGAAu1YEi4TmT9gAAAABJRU5ErkJggg=="},emoticon_groups:[],emoji_names:[],emoji_complex_customs:null,onStart:function(){TS.model.is_retina=TS.utility.isRetina();
TS.model.makeYouReqex();
if(navigator.userAgent.match(/(Slack_SSB)/g)||navigator.userAgent.match(/(Slack_WINSSB)/g)){var h=navigator.userAgent.split("/");
if(TS.model.is_win||navigator.userAgent.match(/(AtomShell)/g)){TS.model.win_ssb_version=parseFloat(h[h.length-1])
}else{if(TS.model.is_mac){TS.model.mac_ssb_version=parseFloat(h[h.length-1])
}else{if(TS.model.is_lin){TS.model.lin_ssb_version=parseFloat(h[h.length-1])
}}}}var f=navigator.userAgent.split("AppleWebKit/");
if(f.length>1){var a=parseFloat(f[1]);
TS.model.is_apple_webkit_5=a<536
}var d=function(){if(!TS.model.mac_ssb_version){return 0
}var k=navigator.userAgent.match(/(?:Mac OS X )([0-9][0-9]_[0-9])(_[0-9])/);
if(!k){return 0
}if(k.length<2){return 0
}var j=parseFloat(k[1].replace("_","."))||0;
return j
}();
TS.model.supports_growl_subtitle=(TS.model.mac_ssb_version&&TS.model.mac_ssb_version>=0.61&&d>10.7);
TS.model.api_url=TS.boot_data.api_url;
TS.model.async_api_url=TS.boot_data.async_api_url;
TS.model.api_token=TS.boot_data.api_token;
TS.model.webhook_url=TS.boot_data.webhook_url;
TS.model.expandable_state=TS.storage.fetchExpandableState();
var e=TS.storage.fetchInlineImgState();
var c=TS.storage.fetchInlineVideoState();
var g=TS.storage.fetchInlineAttachmentState();
var b;
for(b in e){if(!TS.model.expandable_state["img_"+b]){TS.model.expandable_state["img_"+b]=e[b]
}}for(b in c){if(!TS.model.expandable_state["vid_"+b]){TS.model.expandable_state["vid_"+b]=c[b]
}}for(b in g){if(!TS.model.expandable_state["attach_"+b]){TS.model.expandable_state["attach_"+b]=g[b]
}}TS.storage.storeInlineImgState({});
TS.storage.storeInlineVideoState({});
TS.storage.storeInlineAttachmentState({})
},makeYouReqex:function(){var a=(TS.boot_data.login_data)?TS.boot_data.login_data.self:TS.model.user;
if(a){TS.model.you_regex=new RegExp("<@("+a.id+"|"+a.name+")\\b")
}},addProfilingKeyTime:function(b,a){if(!a||!b){return
}if(!TS.model.profiling_key_times){TS.model.profiling_key_times=[]
}TS.model.profiling_key_times.push({name:b,ms:a})
}})
}());
(function(){TS.registerModule("ui",{window_focus_changed_sig:new signals.Signal(),window_unloaded_sig:new signals.Signal(),retina_changed_sig:new signals.Signal(),onStart:function(){$(window).bind("focus",TS.ui.onWindowFocus);
$(window).bind("blur",TS.ui.onWindowBlur);
$("html").bind("mousedown",function(c){TS.ui.onWindowFocus({target:window})
});
var b=(document.hasFocus&&document.hasFocus()&&window.macgap_is_in_active_space)?true:false;
if(b){TS.ui.onWindowFocus({target:window})
}else{TS.ui.onWindowBlur({target:window})
}if(!!window.matchMedia){var a="screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min--moz-device-pixel-ratio: 1.5), screen and (min-device-pixel-ratio: 1.5)";
window.matchMedia(a).addListener(function(){var c=TS.model.is_retina;
TS.model.is_retina=TS.utility.isRetina();
if(TS.model.is_retina===c){return
}TS.info("TS.model.is_retina changed from "+c+" to "+TS.model.is_retina);
TS.ui.retina_changed_sig.dispatch(TS.model.is_retina)
})
}if(TS.model.win_ssb_version){$("body").addClass("winssb")
}},setUpWindowUnloadHandlers:function(){if(window.macgap){window.onbeforeunload=TS.ui.onWindowUnload
}else{if(typeof window.addEventListener!="undefined"){window.addEventListener("beforeunload",TS.ui.onWindowUnload,false)
}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("beforeunload",TS.ui.onWindowUnload,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onbeforeunload",TS.ui.onWindowUnload)
}else{if(typeof window.onbeforeunload=="function"){window.onbeforeunload=function(){TS.ui.onWindowUnload();
return false
}
}else{window.onbeforeunload=TS.ui.onWindowUnload
}}}}}},onWindowUnload:function(){if(TS.client){TS.client.markLastReadsWithAPI()
}TS.model.window_unloading=true;
TS.ui.window_unloaded_sig.dispatch();
return
},maybeTickleMS:function(){if(!TS.client){return
}TS.client.ui.maybeTickleMS()
},handleDraghoverstartFromWinSSB:function(){$(window).trigger("draghoverstart",[null,true])
},handleDraghoverendFromWinSSB:function(){$(window).trigger("draghoverend")
},handleDropFromWinSSB:function(a){TS.info("handleDropFromWinSSB called files:"+a);
$("body").removeClass("drop-target");
if(TS.client.ui.checkForEditing()){return
}if(!a||!a.length){TS.warn("handleDropFromWinSSB called with no files");
return
}TS.client.ui.validateFiles(a,TS.model.shift_key_pressed)
},onMacSpaceChanged:function(a){if(!a){TS.ui.onWindowBlur({target:window})
}else{if(document.hasFocus()){TS.ui.onWindowFocus({target:window})
}}},onWindowFocus:function(a){if(a.target!==window){return
}if(TS.model.ui.is_window_focused){return
}TS.model.shift_key_pressed=false;
TS.model.insert_key_pressed=false;
TS.model.ui.is_window_focused=true;
if(TS.view){TS.view.updateTitleBarColor()
}TS.ui.window_focus_changed_sig.dispatch(true)
},onWindowBlur:function(a){if(a.target!==window){return
}if(!TS.model.ui.is_window_focused){return
}TS.model.shift_key_pressed=false;
TS.model.insert_key_pressed=false;
TS.model.ui.is_window_focused=false;
TS.ui.window_focus_changed_sig.dispatch(false)
},bindFileShareDropdowns:function(){var b=$("#select_share_channels");
var a="60%";
if(TS.web&&TS.web.space){a="100%"
}if(b.length!=1){alert("error: "+b.length+" $('#select_share_channels')s");
return
}b.find('optgroup[label="People"] option').each(function(){var c=$(this).val();
if(c){var d=TS.members.getMemberById(c);
$(this).attr("data-additional-search-field","@"+d.name)
}});
b.on("change",function(){var c,d;
c=$(this).val();
if(c=="ts_null_value"||c===null){$(this)[0].selectedIndex=0;
$(this).trigger("liszt:updated");
return
}else{$("#share_model_ob_id").val(c)
}$("#select_share_groups_note, #select_share_channels_note, #select_share_ims_note").addClass("hidden");
d=c.substring(0,1);
if(d==="C"){$("#select_share_channels_note").removeClass("hidden");
$("#share_context_label").text("in")
}else{if(d==="U"||d==="D"){$("#select_share_ims_note").removeClass("hidden");
$("#share_context_label").text("with")
}else{$("#select_share_groups_note").removeClass("hidden");
$("#share_context_label").text("in")
}}TS.ui.updateAtChannelWarningNote()
}).chosen({search_contains:true,width:a}).each(function(){$(this).addClass("hidden")
});
$("#file_sharing_div").on("keydown",function(c){c.stopPropagation()
})
},bindFileShareShareToggle:function(){$("#share_cb").bind("click.toggle_select_list",function(){if($(this).prop("checked")){$(".file_share_select").prop("disabled",false)
}else{$(".file_share_select").prop("disabled",true)
}TS.ui.updateAtChannelWarningNote()
})
},bindFileShareCommentField:function(){$("#file_comment_textarea").bind("keyup",function(){TS.ui.updateAtChannelWarningNote()
})
},needToShowAtChannelWarning:function(j,g){var b;
var c=TS.format.cleanMsg(g);
var h=TS.model.everyone_regex.test(c);
var a=TS.model.channel_regex.test(c);
var d=TS.model.group_regex.test(c);
var f=!!TS.model.prefs.last_seen_at_channel_warning;
var e=f&&TS.utility.date.sameDay(new Date(TS.model.prefs.last_seen_at_channel_warning),new Date());
if(!TS.boot_data.feature_at_channel_warning){return false
}if(!h&&!a&&!d){return false
}b=TS.shared.getModelObById(j);
if(!b||b.is_im){return false
}if((a||d)&&!TS.members.canUserAtChannelOrAtGroup()){return false
}if(b.is_general&&h&&!TS.members.canUserAtEveryone()){return false
}if(TS.model.team.prefs.warn_before_at_channel==="never"){return false
}if(TS.model.team.prefs.warn_before_at_channel==="once"&&f){return false
}if(TS.model.team.prefs.warn_before_at_channel==="daily"&&e){return false
}return true
},updateAtChannelWarningNote:function(){if(!TS.boot_data.feature_at_channel_warning){return
}var h=$("#file_comment_textarea").val();
var j=$("#select_share_channels").val();
var f=$("#select_share_at_channel_note");
if(TS.ui.needToShowAtChannelWarning(j,h)){var b=TS.format.cleanMsg(h);
var e="";
var g=true;
if(TS.model.everyone_regex.test(b)){e="everyone"
}else{if(TS.model.channel_regex.test(b)){e="channel"
}else{if(TS.model.group_regex.test(b)){e="group"
}}}var a=TS.shared.getModelObById(j);
if(!a||a.is_im){g=false
}var c=a.members.filter(function(l){var m=TS.members.getMemberById(l);
var k=(m&&!m.deleted&&!m.is_bot&&!m.is_slackbot);
return k&&!m.is_self
}).sort(TS.members.memberSorterByName);
if(c.length<1){g=false
}if(g){var d=TS.templates.at_channel_warning_note({keyword:e,member_count:c.length});
f.html(d);
f.removeClass("hidden");
return
}}f.addClass("hidden")
}})
})();
(function(a,b){if(typeof exports=="object"){module.exports=b()
}else{if(typeof define=="function"&&define.amd){define(b)
}else{a.Spinner=b()
}}}(this,function(){var e=["webkit","Moz","ms","O"],q={},p;
function g(r,u){var s=document.createElement(r||"div"),t;
for(t in u){s[t]=u[t]
}return s
}function h(s){for(var r=1,t=arguments.length;
r<t;
r++){s.appendChild(arguments[r])
}return s
}var j=(function(){var r=g("style",{type:"text/css"});
h(document.getElementsByTagName("head")[0],r);
return r.sheet||r.styleSheet
}());
function c(v,r,w,A){var s=["opacity",r,~~(v*100),w,A].join("-"),t=0.01+w/A*100,y=Math.max(1-(1-v)/r*(100-t),v),x=p.substring(0,p.indexOf("Animation")).toLowerCase(),u=x&&"-"+x+"-"||"";
if(!q[s]){j.insertRule("@"+u+"keyframes "+s+"{0%{opacity:"+y+"}"+t+"%{opacity:"+v+"}"+(t+0.01)+"%{opacity:1}"+(t+r)%100+"%{opacity:"+v+"}100%{opacity:"+y+"}}",j.cssRules.length);
q[s]=1
}return s
}function n(v,w){var u=v.style,r,t;
w=w.charAt(0).toUpperCase()+w.slice(1);
for(t=0;
t<e.length;
t++){r=e[t]+w;
if(u[r]!==undefined){return r
}}if(u[w]!==undefined){return w
}}function f(r,t){for(var s in t){r.style[n(r,s)||s]=t[s]
}return r
}function l(t){for(var r=1;
r<arguments.length;
r++){var s=arguments[r];
for(var u in s){if(t[u]===undefined){t[u]=s[u]
}}}return t
}function k(r){var s={x:r.offsetLeft,y:r.offsetTop};
while((r=r.offsetParent)){s.x+=r.offsetLeft,s.y+=r.offsetTop
}return s
}function o(s,r){return typeof s=="string"?s:s[r%s.length]
}var d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto",position:"relative"};
function b(r){if(typeof this=="undefined"){return new b(r)
}this.opts=l(r||{},b.defaults,d)
}b.defaults={};
l(b.prototype,{spin:function(A){this.stop();
var E=this,s=E.opts,t=E.el=f(g(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex}),D=s.radius+s.length+s.width,F,C;
if(A){A.insertBefore(t,A.firstChild||null);
C=k(A);
F=k(t);
f(t,{left:(s.left=="auto"?C.x-F.x+(A.offsetWidth>>1):parseInt(s.left,10)+D)+"px",top:(s.top=="auto"?C.y-F.y+(A.offsetHeight>>1):parseInt(s.top,10)+D)+"px"})
}t.setAttribute("role","progressbar");
E.lines(t,E.opts);
if(!p){var x=0,r=(s.lines-1)*(1-s.direction)/2,w,u=s.fps,z=u/s.speed,y=(1-s.opacity)/(z*s.trail/100),B=z/s.lines;
(function v(){x++;
for(var G=0;
G<s.lines;
G++){w=Math.max(1-(x+(s.lines-G)*B)%z*y,s.opacity);
E.opacity(t,G*s.direction+r,w,s)
}E.timeout=E.el&&setTimeout(v,~~(1000/u))
})()
}return E
},stop:function(){var r=this.el;
if(r){clearTimeout(this.timeout);
if(r.parentNode){r.parentNode.removeChild(r)
}this.el=undefined
}return this
},lines:function(t,v){var s=0,w=(v.lines-1)*(1-v.direction)/2,r;
function u(x,y){return f(g(),{position:"absolute",width:(v.length+v.width)+"px",height:v.width+"px",background:x,boxShadow:y,transformOrigin:"left",transform:"rotate("+~~(360/v.lines*s+v.rotate)+"deg) translate("+v.radius+"px,0)",borderRadius:(v.corners*v.width>>1)+"px"})
}for(;
s<v.lines;
s++){r=f(g(),{position:"absolute",top:1+~(v.width/2)+"px",transform:v.hwaccel?"translate3d(0,0,0)":"",opacity:v.opacity,animation:p&&c(v.opacity,v.trail,w+s*v.direction,v.lines)+" "+1/v.speed+"s linear infinite"});
if(v.shadow){h(r,f(u("#000","0 0 4px #000"),{top:2+"px"}))
}h(t,h(r,u(o(v.color,s),"0 0 1px rgba(0,0,0,.1)")))
}return t
},opacity:function(s,r,t){if(r<s.childNodes.length){s.childNodes[r].style.opacity=t
}}});
function m(){function r(t,s){return g("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',s)
}j.addRule(".spin-vml","behavior:url(#default#VML)");
b.prototype.lines=function(v,u){var t=u.length+u.width,B=2*t;
function A(){return f(r("group",{coordsize:B+" "+B,coordorigin:-t+" "+-t}),{width:B,height:B})
}var w=-(u.width+u.length)*2+"px",z=f(A(),{position:"absolute",top:w,left:w}),y;
function x(C,s,D){h(z,h(f(A(),{rotation:360/u.lines*C+"deg",left:~~s}),h(f(r("roundrect",{arcsize:u.corners}),{width:t,height:u.width,left:u.radius,top:-u.width>>1,filter:D}),r("fill",{color:o(u.color,C),opacity:u.opacity}),r("stroke",{opacity:0}))))
}if(u.shadow){for(y=1;
y<=u.lines;
y++){x(y,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
}}for(y=1;
y<=u.lines;
y++){x(y)
}return h(v,z)
};
b.prototype.opacity=function(t,s,v,u){var w=t.firstChild;
u=u.shadow&&u.lines||0;
if(w&&s+u<w.childNodes.length){w=w.childNodes[s+u];
w=w&&w.firstChild;
w=w&&w.firstChild;
if(w){w.opacity=v
}}}
}var a=f(g("group"),{behavior:"url(#default#VML)"});
if(!n(a,"transform")&&a.adj){m()
}else{p=n(a,"animation")
}return b
}));
/*!
 * Ladda 0.9.0
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
(function(a,b){if(typeof exports==="object"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define(["spin"],b)
}else{a.Ladda=b(a.Spinner)
}}}(this,function(c){var e=[];
function f(l){if(typeof l==="undefined"){console.warn("Ladda button target must be defined.");
return
}if(!l.querySelector(".ladda-label")){l.innerHTML='<span class="ladda-label">'+l.innerHTML+"</span>"
}var n=j(l);
var m=document.createElement("span");
m.className="ladda-spinner";
l.appendChild(m);
var o;
var k={start:function(){l.setAttribute("disabled","");
l.setAttribute("data-loading","");
clearTimeout(o);
n.spin(m);
this.setProgress(0);
return this
},startAfter:function(p){clearTimeout(o);
o=setTimeout(function(){k.start()
},p);
return this
},stop:function(){l.removeAttribute("disabled");
l.removeAttribute("data-loading");
clearTimeout(o);
o=setTimeout(function(){n.stop()
},1000);
return this
},toggle:function(){if(this.isLoading()){this.stop()
}else{this.start()
}return this
},setProgress:function(p){p=Math.max(Math.min(p,1),0);
var q=l.querySelector(".ladda-progress");
if(p===0&&q&&q.parentNode){q.parentNode.removeChild(q)
}else{if(!q){q=document.createElement("div");
q.className="ladda-progress";
l.appendChild(q)
}q.style.width=((p||0)*l.offsetWidth)+"px"
}},enable:function(){this.stop();
return this
},disable:function(){this.stop();
l.setAttribute("disabled","");
return this
},isLoading:function(){return l.hasAttribute("data-loading")
}};
e.push(k);
return k
}function g(l,k){while(l.parentNode&&l.tagName!==k){l=l.parentNode
}return l
}function b(o){var n=["input","textarea"];
var k=[];
for(var m=0;
m<n.length;
m++){var p=o.getElementsByTagName(n[m]);
for(var l=0;
l<p.length;
l++){if(p[l].hasAttribute("required")){k.push(p[l])
}}}return k
}function h(o,m){m=m||{};
var l=[];
if(typeof o==="string"){l=d(document.querySelectorAll(o))
}else{if(typeof o==="object"&&typeof o.nodeName==="string"){l=[o]
}}for(var n=0,k=l.length;
n<k;
n++){(function(){var q=l[n];
if(typeof q.addEventListener==="function"){var p=f(q);
var r=-1;
q.addEventListener("click",function(w){var v=true;
var u=g(q,"FORM");
var s=b(u);
for(var t=0;
t<s.length;
t++){if(s[t].value.replace(/^\s+|\s+$/g,"")===""){v=false
}}if(v){p.startAfter(1);
if(typeof m.timeout==="number"){clearTimeout(r);
r=setTimeout(p.stop,m.timeout)
}if(typeof m.callback==="function"){m.callback.apply(null,[p])
}}},false)
}})()
}}function a(){for(var l=0,k=e.length;
l<k;
l++){e[l].stop()
}}function j(n){var l=n.offsetHeight,q;
if(l>32){l*=0.8
}if(n.hasAttribute("data-spinner-size")){l=parseInt(n.getAttribute("data-spinner-size"),10)
}if(n.hasAttribute("data-spinner-color")){q=n.getAttribute("data-spinner-color")
}var m=12,k=l*0.2,p=k*0.6,o=k<7?2:3;
return new c({color:q||"#fff",lines:m,radius:k,length:p,width:o,zIndex:"auto",top:"auto",left:"auto",className:""})
}function d(l){var k=[];
for(var m=0;
m<l.length;
m++){k.push(l[m])
}return k
}return{bind:h,create:f,stopAll:a}
}));
/*!
 * jQuery scrollintoview() plugin and :scrollable selector filter
 *
 * Version 1.8 (14 Jul 2011)
 * Requires jQuery 1.4 or newer
 *
 * Copyright (c) 2011 Robert Koritnik
 * Licensed under the terms of the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(g){var d={vertical:{x:false,y:true},horizontal:{x:true,y:false},both:{x:true,y:true},x:{x:true,y:false},y:{x:false,y:true}};
var c={duration:"fast",direction:"both",offset:null,px_offset:0};
var f=/^(?:html)$/i;
var h=function(m,l){l=l||(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(m,null):m.currentStyle);
var k=document.defaultView&&document.defaultView.getComputedStyle?true:false;
var j={top:(parseFloat(k?l.borderTopWidth:g.css(m,"borderTopWidth"))||0),left:(parseFloat(k?l.borderLeftWidth:g.css(m,"borderLeftWidth"))||0),bottom:(parseFloat(k?l.borderBottomWidth:g.css(m,"borderBottomWidth"))||0),right:(parseFloat(k?l.borderRightWidth:g.css(m,"borderRightWidth"))||0)};
return{top:j.top,left:j.left,bottom:j.bottom,right:j.right,vertical:j.top+j.bottom,horizontal:j.left+j.right}
};
var e=function(j){var l=g(window);
var k=f.test(j[0].nodeName);
return{border:k?{top:0,left:0,bottom:0,right:0}:h(j[0]),scroll:{top:(k?l:j).scrollTop(),left:(k?l:j).scrollLeft()},scrollbar:{right:k?0:j.innerWidth()-j[0].clientWidth,bottom:k?0:j.innerHeight()-j[0].clientHeight},rect:a(j)}
};
var a=function(j){var k=f.test(j[0].nodeName);
if(!j.___dimensions_rect){j.___dimensions_rect={}
}var m=j.___dimensions_rect;
if(k){m.top=0,m.left=0,m.bottom=j[0].clientHeight,m.right=j[0].clientWidth
}else{var l=j[0].getBoundingClientRect();
m.top=l.top,m.left=l.left,m.bottom=l.bottom,m.right=l.right
}m.height=m.bottom-m.top;
m.width=m.right-m.left;
return m
};
g.fn.extend({dimensions:function(){var j=this.eq(0);
return e(j)
}});
g.fn.extend({dimensions_rect:function(){var j=this.eq(0);
return a(j)
}});
g.fn.extend({scrollintoview:function(s){var l=window.log_scrollintoview;
s=g.extend({},c,s);
s.direction=d[typeof(s.direction)==="string"&&s.direction.toLowerCase()]||d.both;
var o="";
if(s.direction.x===true){o="horizontal"
}if(s.direction.y===true){o=o?"both":"vertical"
}var j=this.eq(0);
var n=j.closest(":scrollable("+o+")");
var p=s.px_offset;
if(n.length>0){n=n.eq(0);
var m={e:e(j),s:e(n)};
var r={top:m.e.rect.top-(m.s.rect.top+m.s.border.top),bottom:m.s.rect.bottom-m.s.border.bottom-m.s.scrollbar.bottom-m.e.rect.bottom,left:m.e.rect.left-(m.s.rect.left+m.s.border.left),right:m.s.rect.right-m.s.border.right-m.s.scrollbar.right-m.e.rect.right};
if(l&&TS){TS.info("scroller id:"+n.attr("id")+" scrollTop():"+n.scrollTop());
TS.info("dim: "+JSON.stringify(m,null,"  "));
TS.info("rel: "+JSON.stringify(r))
}var k={};
if(s.direction.y===true){var q=(s.offset=="center"||s.offset=="center_vertical")?((m.s.rect.height)-(m.e.rect.height))/2:0;
if(r.top<0){if(l&&TS){TS.warn("case rel.top < 0")
}if(s.offset=="bottom"){q=m.s.rect.height-m.e.rect.height
}k.scrollTop=m.s.scroll.top+r.top-q-p
}else{if(r.top>0&&r.bottom<0){if(l&&TS){TS.warn("case rel.top > 0 && rel.bottom < 0")
}if(s.offset=="top"){q=m.s.rect.height-m.e.rect.height
}k.scrollTop=m.s.scroll.top+Math.min(r.top,-r.bottom)+q-p
}else{if(l&&TS){TS.warn("case WTF")
}}}}if(s.direction.x===true){if(r.left<0){k.scrollLeft=m.s.scroll.left+r.left
}else{if(r.left>0&&r.right<0){k.scrollLeft=m.s.scroll.left+Math.min(r.left,-r.right)
}}}if(!g.isEmptyObject(k)){if(f.test(n[0].nodeName)){n=g("html,body")
}if(l&&TS){TS.info("dest:"+k.scrollTop)
}n.animate(k,{progress:function(t,u,v){if(l&&TS){TS.info(100*u+"% "+n.scrollTop())
}},duration:s.duration}).eq(0).queue(function(t){g.isFunction(s.complete)&&s.complete.call(n[0]);
t()
})
}else{g.isFunction(s.complete)&&s.complete.call(n[0])
}}return this
}});
var b={auto:true,scroll:true,visible:false,hidden:false};
g.extend(g.expr[":"],{scrollable:function(m,k,p,j){var o=d[typeof(p[3])==="string"&&p[3].toLowerCase()]||d.both;
var n=(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(m,null):m.currentStyle);
var q={x:b[n.overflowX.toLowerCase()]||false,y:b[n.overflowY.toLowerCase()]||false,isRoot:f.test(m.nodeName)};
if(!q.x&&!q.y&&!q.isRoot){return false
}var l={height:{scroll:m.scrollHeight,client:m.clientHeight},width:{scroll:m.scrollWidth,client:m.clientWidth},scrollableX:function(){return(q.x||q.isRoot)&&this.width.scroll>this.width.client
},scrollableY:function(){return(q.y||q.isRoot)&&this.height.scroll>this.height.client
}};
return o.y&&l.scrollableY()||o.x&&l.scrollableX()
}})
})(jQuery);
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(l){l.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};
var d=document.createElement("div");
var r={};
function b(w){if(w in d.style){return w
}var v=["Moz","Webkit","O","ms"];
var s=w.charAt(0).toUpperCase()+w.substr(1);
if(w in d.style){return w
}for(var u=0;
u<v.length;
++u){var t=v[u]+s;
if(t in d.style){return t
}}}function e(){d.style[r.transform]="";
d.style[r.transform]="rotateY(90deg)";
return d.style[r.transform]!==""
}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;
r.transition=b("transition");
r.transitionDelay=b("transitionDelay");
r.transform=b("transform");
r.transformOrigin=b("transformOrigin");
r.transform3d=e();
var j={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};
var f=r.transitionEnd=j[r.transition]||null;
for(var q in r){if(r.hasOwnProperty(q)&&typeof l.support[q]==="undefined"){l.support[q]=r[q]
}}d=null;
l.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};
l.cssHooks["transit:transform"]={get:function(s){return l(s).data("transform")||new k()
},set:function(t,s){var u=s;
if(!(u instanceof k)){u=new k(u)
}if(r.transform==="WebkitTransform"&&!a){t.style[r.transform]=u.toString(true)
}else{t.style[r.transform]=u.toString()
}l(t).data("transform",u)
}};
l.cssHooks.transform={set:l.cssHooks["transit:transform"].set};
if(l.fn.jquery<"1.8"){l.cssHooks.transformOrigin={get:function(s){return s.style[r.transformOrigin]
},set:function(s,t){s.style[r.transformOrigin]=t
}};
l.cssHooks.transition={get:function(s){return s.style[r.transition]
},set:function(s,t){s.style[r.transition]=t
}}
}o("scale");
o("translate");
o("rotate");
o("rotateX");
o("rotateY");
o("rotate3d");
o("perspective");
o("skewX");
o("skewY");
o("x",true);
o("y",true);
function k(s){if(typeof s==="string"){this.parse(s)
}return this
}k.prototype={setFromString:function(u,t){var s=(typeof t==="string")?t.split(","):(t.constructor===Array)?t:[t];
s.unshift(u);
k.prototype.set.apply(this,s)
},set:function(t){var s=Array.prototype.slice.apply(arguments,[1]);
if(this.setter[t]){this.setter[t].apply(this,s)
}else{this[t]=s.join(",")
}},get:function(s){if(this.getter[s]){return this.getter[s].apply(this)
}else{return this[s]||0
}},setter:{rotate:function(s){this.rotate=p(s,"deg")
},rotateX:function(s){this.rotateX=p(s,"deg")
},rotateY:function(s){this.rotateY=p(s,"deg")
},scale:function(s,t){if(t===undefined){t=s
}this.scale=s+","+t
},skewX:function(s){this.skewX=p(s,"deg")
},skewY:function(s){this.skewY=p(s,"deg")
},perspective:function(s){this.perspective=p(s,"px")
},x:function(s){this.set("translate",s,null)
},y:function(s){this.set("translate",null,s)
},translate:function(s,t){if(this._translateX===undefined){this._translateX=0
}if(this._translateY===undefined){this._translateY=0
}if(s!==null&&s!==undefined){this._translateX=p(s,"px")
}if(t!==null&&t!==undefined){this._translateY=p(t,"px")
}this.translate=this._translateX+","+this._translateY
}},getter:{x:function(){return this._translateX||0
},y:function(){return this._translateY||0
},scale:function(){var t=(this.scale||"1,1").split(",");
if(t[0]){t[0]=parseFloat(t[0])
}if(t[1]){t[1]=parseFloat(t[1])
}return(t[0]===t[1])?t[0]:t
},rotate3d:function(){var u=(this.rotate3d||"0,0,0,0deg").split(",");
for(var t=0;
t<=3;
++t){if(u[t]){u[t]=parseFloat(u[t])
}}if(u[3]){u[3]=p(u[3],"deg")
}return u
}},parse:function(t){var s=this;
t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(u,w,v){s.setFromString(w,v)
})
},toString:function(u){var t=[];
for(var s in this){if(this.hasOwnProperty(s)){if((!r.transform3d)&&((s==="rotateX")||(s==="rotateY")||(s==="perspective")||(s==="transformOrigin"))){continue
}if(s[0]!=="_"){if(u&&(s==="scale")){t.push(s+"3d("+this[s]+",1)")
}else{if(u&&(s==="translate")){t.push(s+"3d("+this[s]+",0)")
}else{t.push(s+"("+this[s]+")")
}}}}}return t.join(" ")
}};
function n(t,s,u){if(s===true){t.queue(u)
}else{if(s){t.queue(s,u)
}else{u()
}}}function h(t){var s=[];
l.each(t,function(u){u=l.camelCase(u);
u=l.transit.propertyMap[u]||l.cssProps[u]||u;
u=c(u);
if(l.inArray(u,s)===-1){s.push(u)
}});
return s
}function g(t,w,y,s){var u=h(t);
if(l.cssEase[y]){y=l.cssEase[y]
}var x=""+m(w)+" "+y;
if(parseInt(s,10)>0){x+=" "+m(s)
}var v=[];
l.each(u,function(A,z){v.push(z+" "+x)
});
return v.join(", ")
}l.fn.transition=l.fn.transit=function(B,u,A,E){var F=this;
var w=0;
var y=true;
var s=jQuery.extend(true,{},B);
if(typeof u==="function"){E=u;
u=undefined
}if(typeof u==="object"){A=u.easing;
w=u.delay||0;
y=u.queue||true;
E=u.complete;
u=u.duration
}if(typeof A==="function"){E=A;
A=undefined
}if(typeof s.easing!=="undefined"){A=s.easing;
delete s.easing
}if(typeof s.duration!=="undefined"){u=s.duration;
delete s.duration
}if(typeof s.complete!=="undefined"){E=s.complete;
delete s.complete
}if(typeof s.queue!=="undefined"){y=s.queue;
delete s.queue
}if(typeof s.delay!=="undefined"){w=s.delay;
delete s.delay
}if(typeof u==="undefined"){u=l.fx.speeds._default
}if(typeof A==="undefined"){A=l.cssEase._default
}u=m(u);
var G=g(s,u,A,w);
var D=l.transit.enabled&&r.transition;
var v=D?(parseInt(u,10)+parseInt(w,10)):0;
if(v===0){var C=function(H){F.css(s);
if(E){E.apply(F)
}if(H){H()
}};
n(F,y,C);
return F
}var z={};
var t=function(J){var I=false;
var H=function(){if(I){F.unbind(f,H)
}if(v>0){F.each(function(){this.style[r.transition]=(z[this]||null)
})
}if(typeof E==="function"){E.apply(F)
}if(typeof J==="function"){J()
}};
if((v>0)&&(f)&&(l.transit.useTransitionEnd)){I=true;
F.bind(f,H)
}else{window.setTimeout(H,v)
}F.each(function(){if(v>0){this.style[r.transition]=G
}l(this).css(B)
})
};
var x=function(H){this.offsetWidth;
t(H)
};
n(F,y,x);
return this
};
function o(t,s){if(!s){l.cssNumber[t]=true
}l.transit.propertyMap[t]=r.transform;
l.cssHooks[t]={get:function(v){var u=l(v).css("transit:transform");
return u.get(t)
},set:function(v,w){var u=l(v).css("transit:transform");
u.setFromString(t,w);
l(v).css({"transit:transform":u})
}}
}function c(s){return s.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()
})
}function p(t,s){if((typeof t==="string")&&(!t.match(/^[\-0-9\.]+$/))){return t
}else{return""+t+s
}}function m(t){var s=t;
if(typeof s==="string"&&(!s.match(/^[\-0-9\.]+/))){s=l.fx.speeds[s]||l.fx.speeds._default
}return p(s,"ms")
}l.transit.getTransitionValue=g
})(jQuery);
(function(e){var d=70;
var b=17;
var a;
var c=function(){if(window.chrome){return b
}var j=e('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>').appendTo("body");
var h=e('<div style="height:100px;"></div>').appendTo(j);
var g=h.innerWidth();
j.css("overflow-y","auto");
var f=h.innerWidth();
j.remove();
return Math.max(g-f,b)
};
e.fn.extend({monkeyScroll:function(f){f=f||{};
return this.each(function(t,J){var j=e(J);
if(j.data("monkeyScroll")){return
}j.addClass("monkey_scroller");
var w=(J.id)?"monkey_scroll_wrapper_for_"+J.id:"";
var n=(f.debug)?"debug":"";
var C=j.wrap('<div class="monkey_scroll_hider '+n+'" />').parent();
var F=C.wrap('<div id="'+w+'" class="monkey_scroll_wrapper '+n+'" />').parent();
var q=F.prepend('<div class="monkey_scroll_bar '+n+'" />').children(".monkey_scroll_bar");
var k=q.prepend(['<div class="monkey_scroll_handle '+n+'">','	<div class="monkey_scroll_handle_inner '+n+'"></div>',"</div>"].join("")).children(".monkey_scroll_handle");
var y=k.find(".monkey_scroll_handle_inner");
var m=Math.max(q.width(),k.width());
var I=parseInt(q.css("margin-top"));
var x=parseInt(q.css("margin-bottom"));
k.css("left",-((k.width()-q.width())/2));
var o=function(){var L=Math.max(Math.min(d,j[0].clientHeight),j[0].clientHeight-(I+x));
return L
};
var z=function(){a=a||c();
return Math.max(m,a)
};
var s="";
var H=function(N){var M=f.bar_colors;
var L,P;
var O="";
if(!M){return
}for(P in M){if(M.hasOwnProperty(P)){if(P<=N&&(!L||P>L)){L=P
}}}if(L){O=M[L]
}if(O!==s){y.css("background",O);
s=O
}};
var B=function(){var R=j.data("monkeyScroll");
if(!R){K();
return null
}var Q=j[0].clientHeight;
var O=j[0].scrollHeight;
var N=j[0].scrollTop;
var L=j.width();
var S=O-Q;
var P=(S)?N/S:1;
var M=Q/O;
R.state_ob.st=N;
R.state_ob.sh=O;
R.state_ob.ch=Q;
R.state_ob.w=L;
R.state_ob.ratio=P;
R.state_ob.perc_visible=M;
return R.state_ob
};
var G=function(){var O=B(j);
if(!O){return
}var N=O.perc_visible<1;
C.css("margin-right",N?z():"");
if(!N){if(f.always_show){k.addClass("hidden")
}else{if(j.css("overflow-y")!="scroll"){C.css("width","100%")
}q.hide();
return
}}else{if(f.always_show){k.removeClass("hidden")
}}q.show();
var M=o();
q.css("height",M);
k.css("height",Math.max(d,M*O.perc_visible));
var L=M-k.height();
k.css("top",L*O.ratio);
if(TS.boot_data.feature_darken_scroll_handle){H(O.ratio)
}};
var u=function(){if(j.is(":hidden")){return
}var L=TS.utility.date.getTimeStamp();
C.css("width","");
C.css("margin-right","");
j.css("width","");
j.width(j.width());
C.width(j.innerWidth()-z());
if(f.bar_on_left){if("bar_on_left_y" in f){q.css("margin-left",f.bar_on_left_y)
}else{q.css("margin-left",(z()-q.width())/2)
}}else{q.css("margin-left",C.width()+((z()-q.width())/2))
}G();
TS.log(389,"update for "+j.attr("id")+" took "+(TS.utility.date.getTimeStamp()-L)+"ms")
};
j.data("monkeyScroll",{bar:q,handle:k,state_ob:{},updateFunc:g});
var D=function(L){if(j.data("disable-scroll")){return
}G()
};
var v=function(Q){Q.preventDefault();
var M=function(V){var U=k.height();
var T=(V-(U/2))/(q.height()-U);
var S=j[0].scrollHeight-j[0].clientHeight;
return S*T
};
var N=e(Q.target);
var R=Q.pageY-N.offset().top;
if(N.hasClass("monkey_scroll_bar")){j.animate({scrollTop:M(R)},200);
return
}var P=R;
var L=function(S){var T=S.pageY-q.offset().top+(k.height()/2)-P;
j.scrollTop(M(T))
};
var O=function(){e("html").unbind("mousemove.monkeyScroll",L);
e("html").unbind("mouseup.monkeyScroll",O)
};
O();
e("html").bind("mousemove.monkeyScroll",L);
e("html").bind("mouseup.monkeyScroll",O)
};
q.bind("mousedown",v);
j.bind("scroll",D);
var A=function(){a=null;
j.css("width","");
g()
};
e(window).bind("resize.monkey",function(){TS.utility.throttle.method(A,"resize_monkey",150)
});
var l;
var E=function(){if(l){return
}l=true;
e("html").bind("mouseup.monkeyScrollOverflowfixer",r)
};
var r=function(){C.scrollLeft(0);
l=false;
e("html").unbind("mouseup.monkeyScrollOverflowfixer",arguments.callee)
};
C.bind("scroll",E);
u();
var h;
function g(M){if(j.data("disable-scroll")){return
}if(j.is(":hidden")){return
}var L=B();
if(!L){return
}if(M||!h||L.sh!=h.sh||L.ch!=h.ch||L.w!=h.w){u();
if(!h){h={}
}h.st=L.st;
h.sh=L.sh;
h.ch=L.ch;
h.w=L.w;
h.ratio=L.ratio;
h.perc_visible=L.perc_visible
}}var p;
if(f.update_on_interval){p=setInterval(g,200)
}var K=function(){e(window).unbind("resize.monkey");
e("html").unbind("mouseup.monkeyScrollOverflowfixer",r);
if(p){clearInterval(p)
}}
})
}})
})(jQuery);
(function(a){a.fn.setCursorPosition=function(b){this.each(function(d,e){if(e.setSelectionRange){e.setSelectionRange(b,b)
}else{if(e.createTextRange){var c=e.createTextRange();
c.collapse(true);
c.moveEnd("character",b);
c.moveStart("character",b);
c.select()
}}});
return this
};
a.fn.getCursorPosition=function(){var c=this.get(0);
if(!c){return
}if("selectionStart" in c){return c.selectionStart
}else{if(document.selection){c.focus();
var d=document.selection.createRange();
var b=document.selection.createRange().text.length;
d.moveStart("character",-c.value.length);
return d.text.length-b
}}};
a.fn.getCursorRange=function(){var b=this.get(0);
if(!b){return
}if("selectionStart" in b){return{s:b.selectionStart,l:b.selectionEnd-b.selectionStart}
}else{if(document.selection){}}};
jQuery.fn.highlight=function(e,c,d,b){b=(b==undefined)?2000:b;
a(this).each(function(){var f=a(this);
var g=false;
if(f.data("highlighted")){return
}f.data("highlighted",true);
if(f.css("position")=="static"){f.css("position","relative");
g=true
}a('<div class="'+c+'" />').width(f.outerWidth()).height(f.outerHeight()).css({position:"absolute",left:0,top:0,"background-color":"#FFF3B8",opacity:".6","z-index":"9999999","pointer-events":"none"}).appendTo(f).delay(b).fadeOut(e).queue(function(){a(this).remove();
f.data("highlighted",false);
if(g){f.css("position","static")
}if(d){d()
}})
})
},jQuery.fn.highlightText=function(e,c,d,b){b=(b==undefined)?2000:b;
a(this).each(function(){var f=a(this);
var g=a(this).css("background-color");
if(f.data("highlighted")){return
}f.data("highlighted",true);
f.css({"background-color":"#FFF3B8",transition:"background-color 0.25s"}).delay(b).queue(function(){f.css({"background-color":g});
f.data("highlighted",false);
if(d){d()
}})
})
},jQuery.fn.hideWithRememberedScrollTop=function(){a(this).each(function(){var b=a(this);
if(b.hasClass("hidden")){return
}b.data("remembered_scrolltop",b.scrollTop());
var c=b.find(":scrollable()");
c.each(function(d,e){a(e).data("remembered_scrolltop",a(e).scrollTop())
});
b.data("remembered_scrollers",c);
b.addClass("hidden")
})
};
jQuery.fn.unhideWithRememberedScrollTop=function(){a(this).each(function(){var c=a(this);
if(!c.hasClass("hidden")){return
}c.removeClass("hidden");
var b=c.data("remembered_scrolltop");
if(b!=undefined){c.scrollTop(b)
}var d=c.data("remembered_scrollers");
if(d){d.each(function(e,f){b=a(f).data("remembered_scrolltop");
if(b!=undefined){a(f).scrollTop(b)
}})
}})
}
})(jQuery);
(function(a){if(!a){return
}a.fn.headroom=function(b){return this.each(function(){var e=a(this),d=e.data("headroom"),c=typeof b==="object"&&b;
c=a.extend(true,{},Headroom.options,c);
if(!d){d=new Headroom(this,c);
d.init();
e.data("headroom",d)
}if(typeof b==="string"){d[b]()
}})
};
a("[data-headroom]").each(function(){var b=a(this);
b.headroom(b.data())
})
}(window.Zepto||window.jQuery));
/*!
 * jQuery TextChange Plugin
 * http://www.zurb.com/playground/jquery-text-change-custom-event
 *
 * Copyright 2010, ZURB
 * Released under the MIT License
 */
(function(a){a.event.special.textchange={setup:function(c,b){a(this).data("textchange_lastvalue",this.contentEditable==="true"?a(this).html():a(this).val());
a(this).bind("keyup.textchange",a.event.special.textchange.handler);
a(this).bind("cut.textchange paste.textchange input.textchange",a.event.special.textchange.delayedHandler)
},teardown:function(b){a(this).unbind(".textchange")
},handler:function(b){a.event.special.textchange.triggerIfChanged(a(this))
},delayedHandler:function(c){var b=a(this);
if(!a.event.special.textchange.timer){a.event.special.textchange.timer=setTimeout(function(){a.event.special.textchange.timer=null;
a.event.special.textchange.triggerIfChanged(b)
},250)
}},triggerIfChanged:function(b){var c=b[0].contentEditable==="true"?b.html():b.val();
if(c!==b.data("textchange_lastvalue")){b.trigger("textchange",[b.data("textchange_lastvalue")]);
b.data("textchange_lastvalue",c)
}},timer:null};
a.event.special.hastext={setup:function(c,b){a(this).bind("textchange",a.event.special.hastext.handler)
},teardown:function(b){a(this).unbind("textchange",a.event.special.hastext.handler)
},handler:function(c,b){if((b==="")&&b!==a(this).val()){a(this).trigger("hastext")
}}};
a.event.special.notext={setup:function(c,b){a(this).bind("textchange",a.event.special.notext.handler)
},teardown:function(b){a(this).unbind("textchange",a.event.special.notext.handler)
},handler:function(c,b){if(a(this).val()===""&&a(this).val()!==b){a(this).trigger("notext")
}}}
})(jQuery);
(function(a){a.fn.autogrow=function(b){return this.filter("textarea").each(function(){var d=this;
var f=a(d);
var e=f.height();
var c=f.hasClass("autogrow-short")?0:parseInt(f.css("lineHeight"))||0;
var h=a("<div></div>").css({position:"absolute",top:-10000,left:-10000,width:f.width(),fontSize:f.css("fontSize"),fontFamily:f.css("fontFamily"),fontWeight:f.css("fontWeight"),lineHeight:f.css("lineHeight"),resize:"none","word-wrap":"break-word"}).appendTo(document.body);
var g=function(k){var j=function(s,v){for(var t=0,u="";
t<v;
t++){u+=s
}return u
};
var l=d.value.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&/g,"&amp;").replace(/\n$/,"<br/>&nbsp;").replace(/\n/g,"<br/>").replace(/ {2,}/g,function(s){return j("&nbsp;",s.length-1)+" "
});
if(k&&k.data&&k.data.event==="keydown"&&k.keyCode===13){l+="<br />"
}var q=f.height();
h.css("width",f.width());
h.html(l+(c===0?"...":""));
f.height(Math.max(h.height()+c,e));
var p=f.getCursorPosition();
var r=f.val().length;
if(r-p<10){if(f.length&&document.activeElement==f[0]){var n=f.closest(".flex_content_scroller");
var o=f.closest(".modal");
if(n.length){var m=f;
if(f.data("el-id-to-keep-in-view")){m=a("#"+f.data("el-id-to-keep-in-view"));
if(!m.length){m=f
}}if(!TS.client.ui.isElInView(m,-50,n.dimensions_rect())){m.scrollintoview({offset:"bottom",px_offset:-50,duration:200})
}if(f.height()!=q){if(n.data("monkeyScroll")){n.data("monkeyScroll").updateFunc()
}}}else{if(o.length==-1){f.scrollintoview({offset:"bottom",px_offset:-50,duration:200})
}}}}};
f.change(g).keyup(g).keydown({event:"keydown"},g);
a(window).resize(g);
g()
})
}
})(jQuery);
(function(a){a.event.special.destroyed={remove:function(b){if(b.handler){b.handler()
}}}
})(jQuery);
$.fn.draghover=function(a){return this.each(function(){var c=$(),b=$(this);
b.on("dragenter",function(d){if(c.size()===0){b.trigger("draghoverstart",d)
}c=c.add(d.target)
});
b.on("dragleave drop",function(d){setTimeout(function(){c=c.not(d.target);
if(c.size()===0){b.trigger("draghoverend")
}},1)
})
})
};
/*!
	Autosize v1.18.9 - 2014-05-27
	Automatically adjust textarea height based on user input.
	(c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(b){var e={className:"autosizejs",id:"autosizejs",append:"\n",callback:false,resizeDelay:200,placeholder:true},f='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',a=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],d,c=b(f).data("autosize",true)[0];
c.style.lineHeight="99px";
if(b(c).css("lineHeight")==="99px"){a.push("lineHeight")
}c.style.lineHeight="";
b.fn.autosize=function(g){if(!this.length){return this
}g=b.extend({},e,g||{});
if(c.parentNode!==document.body){b(document.body).append(c)
}return this.each(function(){var n=this,m=b(n),t,v,l=0,u=b.isFunction(g.callback),o={height:n.style.height,overflow:n.style.overflow,overflowY:n.style.overflowY,wordWrap:n.style.wordWrap,resize:n.style.resize},h=m.width(),k=m.css("resize");
if(m.data("autosize")){return
}m.data("autosize",true);
if(m.css("box-sizing")==="border-box"||m.css("-moz-box-sizing")==="border-box"||m.css("-webkit-box-sizing")==="border-box"){l=m.outerHeight()-m.height()
}l-=(typeof g.boxOffset!=="undefined"?g.boxOffset:0);
v=Math.max(parseInt(m.css("minHeight"),10)-l||0,m.height());
m.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"});
if(k==="vertical"){m.css("resize","none")
}else{if(k==="both"){m.css("resize","horizontal")
}}function p(){var x;
var w=window.getComputedStyle?window.getComputedStyle(n,null):false;
if(w){x=n.getBoundingClientRect().width;
if(x===0||typeof x!=="number"){x=parseInt(w.width,10)
}b.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(y,z){x-=parseInt(w[z],10)
})
}else{x=m.width()
}c.style.width=Math.max(x,0)+"px"
}function s(){var x={};
d=n;
c.className=g.className;
c.id=g.id;
t=parseInt(m.css("maxHeight"),10);
b.each(a,function(z,A){x[A]=m.css(A)
});
b(c).css(x).attr("wrap",m.attr("wrap"));
p();
if(window.chrome){var w=n.style.width;
n.style.width="0px";
var y=n.offsetWidth;
n.style.width=w
}}function r(){var w,x;
if(d!==n){s()
}else{p()
}if(!n.value&&g.placeholder){c.value=(m.attr("placeholder")||"")+g.append
}else{c.value=n.value+g.append
}c.style.overflowY=n.style.overflowY;
x=parseInt(n.style.height,10);
c.scrollTop=0;
c.scrollTop=90000;
w=c.scrollTop;
if(t&&w>t){n.style.overflowY="scroll";
w=t
}else{n.style.overflowY="hidden";
if(w<v){w=v
}}w=parseInt(w,10);
if(x!==w){n.style.height=w+"px";
if(u){g.callback.call(n,n)
}}}function q(){var w=m.width();
if(w!==h){h=w;
r()
}}function j(){TS.utility.throttle.method(q,"autosize_resize",g.resizeDelay)
}if("onpropertychange" in n){if("oninput" in n){m.on("input keyup",r)
}else{m.on("propertychange.autosize",function(){if(event.propertyName==="value"){r()
}})
}}else{m.on("input",r)
}if(g.resizeDelay!==false){b(window).on("resize.autosize",j)
}m.on("autosize.resize",r);
m.on("autosize-resize",r);
m.on("autosize.resizeIncludeStyle",function(){d=null;
r()
});
m.on("autosize.destroy",function(){d=null;
b(window).off("resize",j);
m.off("autosize").off(".autosize").css(o).removeData("autosize")
});
r()
})
}
}(window.jQuery||window.$));
(function(f){function h(l){var o=l.data("TS-tabComplete");
var k=o.cmds=[];
var p=TS.model.input_history;
var n;
for(var m=0;
m<p.length;
m++){n=p[m];
if(n.indexOf("/")==0){k.push(n)
}}return k
}function j(o,r,q){if(TS.model.input_history.length==0){return false
}var m=r.data("TS-tabComplete");
var k=m.cmds||h(r);
var s;
if(m.cmd_matches){s=m.cmd_matches;
if(q.shiftKey){m.cmd_matches_index--;
if(m.cmd_matches_index<0){m.cmd_matches_index=m.cmd_matches.length-1
}}else{m.cmd_matches_index++;
if(m.cmd_matches_index>=m.cmd_matches.length){m.cmd_matches_index=0
}}}else{s=[];
m.cmd_matches_index=0;
var l;
for(var n=0;
n<k.length;
n++){l=k[n];
if(o&&l.toLowerCase().indexOf(o.toLowerCase())!=0){continue
}s.push(l)
}if(!s.length){return false
}if(s.length>1){m.cmd_matches=s
}}var p=s[m.cmd_matches_index];
if(m.onComplete){m.onComplete(p)
}r.setCursorPosition(1000000);
return true
}function b(t,r,z){var C=r.data("TS-tabComplete");
var l=r.getCursorPosition();
if(l==0){return false
}var s=t.substr(0,l);
var u=s.split(" ");
var m=u[u.length-1].toLowerCase();
var w="";
if(!m&&!C.channel_matches){return false
}if(m){var q=false;
if(m.indexOf("#")==0){q=true
}if(C.channel_prefix){if(m.indexOf(C.channel_prefix+"#")==0){q=true
}if(m.indexOf(C.channel_prefix)==0){q=true
}}if(!q){return false
}}var n;
var o;
if(!m){n=C.channel_matches;
if(z.shiftKey){C.channel_matches_index--;
if(C.channel_matches_index<0){C.channel_matches_index=C.channel_matches.length-1
}}else{C.channel_matches_index++;
if(C.channel_matches_index>=C.channel_matches.length){C.channel_matches_index=0
}}o=n[C.channel_matches_index];
var v=u[u.length-2];
if(C.channel_prefix&&v.toLowerCase().indexOf(C.channel_prefix.toLowerCase())==0){w=C.channel_prefix
}u[u.length-2]=w+"#"+o
}else{n=[];
var k=TS.channels.getChannelsForUser();
var D;
var E;
var y=m.replace("#","");
if(C.channel_prefix&&m.toLowerCase().indexOf(C.channel_prefix.toLowerCase())==0){y=y.substr(C.channel_prefix.length);
w=C.channel_prefix
}for(var x=0;
x<k.length;
x++){D=k[x];
if(D.is_archived){continue
}E=D._name_lc;
if(E.indexOf(y)==0||("#"+E).indexOf(y)==0){n.push(D.name)
}}if(!n.length){return false
}g(r,"subsequent name match press");
C.channel_matches_index=0;
if(n.length>1){C.channel_matches=n
}o=n[C.channel_matches_index];
u[u.length-1]=w+"#"+o+" "
}var B=u.join(" ");
var p=B.length;
var A=t.replace(s,B);
if(C.onComplete){C.onComplete(A)
}r.setCursorPosition(p);
return true
}function c(t,r,B){var F=r.data("TS-tabComplete");
var m=r.getCursorPosition();
if(m==0){return false
}var s=t.substr(0,m);
var v=s.split(" ");
var n=v[v.length-1].toLowerCase();
var x="";
if(!n&&!F.member_matches){return false
}var A="";
var u="";
var o;
var p;
if(!n){o=F.member_matches;
if(B.shiftKey){F.member_matches_index--;
if(F.member_matches_index<0){F.member_matches_index=F.member_matches.length-1
}}else{F.member_matches_index++;
if(F.member_matches_index>=F.member_matches.length){F.member_matches_index=0
}}p=o[F.member_matches_index];
var w=v[v.length-2];
if(F.member_prefix&&w.toLowerCase().indexOf(F.member_prefix.toLowerCase())==0){x=F.member_prefix
}if(v.length-2==0&&F.member_colon){A=":"
}if(w.indexOf("@")>-1){u="@"
}v[v.length-2]=x+u+p+A
}else{o=[];
var E=[];
var l=(F.include_self)?TS.members.getActiveMembersWithSelfAndSlackbot():TS.members.getActiveMembersWithSlackbotAndNotSelf();
for(var y=0;
y<l.length;
y++){if(l[y].deleted){continue
}E.push(l[y])
}var k;
var G;
var z=n;
if(F.member_prefix&&n.toLowerCase().indexOf(F.member_prefix.toLowerCase())==0){z=z.substr(F.member_prefix.length);
x=F.member_prefix
}for(var y=0;
y<E.length;
y++){k=E[y];
G=k._name_lc;
if(G.indexOf(z)==0||("@"+G).indexOf(z)==0){o.push(k.name)
}}if(F.complete_member_specials){if(("@everyone").indexOf(z)==0){o.push("everyone")
}if(("@channel").indexOf(z)==0){o.push("channel")
}if(("@group").indexOf(z)==0){o.push("group")
}}if(!o.length){return false
}g(r,"subsequent name match press");
F.member_matches_index=0;
if(o.length>1){F.member_matches=o
}p=o[F.member_matches_index];
if(v.length-1==0&&F.member_colon){A=":"
}if(v[v.length-1].indexOf("@")>-1){u="@"
}v[v.length-1]=x+u+p+A+" "
}var D=v.join(" ");
var q=D.length;
var C=t.replace(s,D);
if(F.onComplete){F.onComplete(C)
}r.setCursorPosition(q);
return true
}function a(t,r,y){var B=r.data("TS-tabComplete");
var m=r.getCursorPosition();
if(m==0){return false
}var s=t.substr(0,m);
var u=s.split(" ");
var n=u[u.length-1].toLowerCase();
if(!n&&!B.emoji_matches){return false
}if(n&&n.indexOf(":")!=0){return false
}var q;
var o;
if(!n){q=B.emoji_matches;
if(y.shiftKey){B.emoji_matches_index--;
if(B.emoji_matches_index<0){B.emoji_matches_index=B.emoji_matches.length-1
}}else{B.emoji_matches_index++;
if(B.emoji_matches_index>=B.emoji_matches.length){B.emoji_matches_index=0
}}o=q[B.emoji_matches_index];
var v=u[u.length-2];
u[u.length-2]=":"+o+":"
}else{q=[];
var l=TS.model.emoji_names;
var C;
var x=n.replace(":","");
var k=new RegExp("(^)"+TS.utility.regexpEscape(x,1000),"i");
for(var w=0;
w<l.length;
w++){C=l[w];
if(!x||C.match(x)){q.push(C)
}}if(!q.length){return false
}g(r,"subsequent emoji match press");
B.emoji_matches_index=0;
if(q.length>1){B.emoji_matches=q
}o=q[B.emoji_matches_index];
u[u.length-1]=":"+o+": "
}var A=u.join(" ");
var p=A.length;
var z=t.replace(s,A);
if(B.onComplete){B.onComplete(z)
}r.setCursorPosition(p);
return true
}function g(k,l){var m=k.data("TS-tabComplete");
m.cmds=null;
m.cmd_matches=null;
m.cmd_matches_index=-1;
m.member_matches=null;
m.member_matches_index=-1;
m.emoji_matches=null;
m.emoji_matches_index=-1;
m.channel_matches=null;
m.channel_matches_index=-1
}function e(l,n){var m=l.data("TS-tabComplete");
var k=(l.val());
if(m.complete_emoji&&a(k,l,n)){}else{if(m.complete_channels&&b(k,l,n)){}else{if(m.complete_members&&c(k,l,n)){}else{if(m.complete_cmds&&(!k||k.indexOf("/")==0)&&j(k,l,n)){}}}}}var d={init:function(k){var l=f.extend({complete_member_specials:false,complete_members:true,member_prefix:"",member_colon:true,complete_cmds:false,complete_emoji:false,complete_channels:false,channel_prefix:"",include_self:false},k);
return this.each(function(){var m=f(this);
if(m.data("TS-tabComplete")){return
}m.data("TS-tabComplete",{cmds:null,cmd_matches:null,cmd_matches_index:-1,member_matches:null,member_matches_index:-1,complete_member_specials:l.complete_member_specials,complete_members:l.complete_members,member_prefix:l.member_prefix,member_colon:l.member_colon,complete_cmds:l.complete_cmds,complete_emoji:l.complete_emoji,complete_channels:l.complete_channels,channel_prefix:l.channel_prefix,include_self:l.include_self,onComplete:l.onComplete});
m.bind("focus",function(n){m.TS_tabComplete("resetMatches","focus")
})
})
},resetMatches:function(k){return this.each(function(){g(f(this),k)
})
},onTabKey:function(k){k.preventDefault();
return this.each(function(){e(f(this),k)
})
}};
f.fn.TS_tabComplete=function(k){if(d[k]){return d[k].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof k==="object"||!k){return d.init.apply(this,arguments)
}else{f.error("Method "+k+" does not exist on jQuery.tooltip")
}}}
})(jQuery);
(function(j){var o=false;
var n="MATCHES_SET";
var e="MATCH_CHANGED";
function h(s,r){if(s>r){return 0
}if(s<0){return r
}return s
}function m(s){var v=s.data("TS-tabComplete");
var r=v.cmds=[];
var w=TS.model.input_history;
var u;
for(var t=0;
t<w.length;
t++){u=w[t];
if(u.indexOf("/")==0){r.push(u)
}}return r
}function p(v,y,x){if(TS.model.input_history.length==0){return false
}var t=y.data("TS-tabComplete");
var r=t.cmds||m(y);
var z;
if(t.cmd_matches){z=t.cmd_matches;
if(x&&x.shiftKey){t.cmd_matches_index--;
if(t.cmd_matches_index<0){t.cmd_matches_index=t.cmd_matches.length-1
}}else{t.cmd_matches_index++;
if(t.cmd_matches_index>=t.cmd_matches.length){t.cmd_matches_index=0
}}}else{z=[];
t.cmd_matches_index=0;
var s;
for(var u=0;
u<r.length;
u++){s=r[u];
if(v&&s.toLowerCase().indexOf(v.toLowerCase())!=0){continue
}z.push(s)
}if(!z.length){return false
}if(z.length>1){t.cmd_matches=z
}}if(!x){return true
}var w=z[t.cmd_matches_index];
if(t.onComplete){t.onComplete(w)
}y.focus().setCursorPosition(1000000);
return true
}function g(B,z,J){var O=z.data("TS-tabComplete");
var u=z.getCursorPosition();
if(u==0){}if(B.indexOf("/")!=0){return false
}var y=B.substr(u);
var M=B.substr(0,u).split("\n");
var A=M.pop();
var C=A.split(" ");
var v=C[C.length-1].toLowerCase();
var s=TS.cmd_handlers;
var D="";
if(!v&&!O.cmd_matches){return false
}if(C.length>1&&C[0] in s){}if(v&&v.indexOf("/")!=0){return false
}var r;
var w;
if(J&&J.chosen_index!=undefined){r=O.cmd_matches;
O.cmd_matches_index=h(J.chosen_index,O.cmd_matches.length-1);
w=r[O.cmd_matches_index]
}else{if(D){TS.dir(0,J);
O.matched_on=D;
O.cmd_matches_index=0;
O.cmd_matches=[D];
return n
}else{if(!v){r=O.cmd_matches;
if(J&&J.shiftKey){O.cmd_matches_index--;
if(O.cmd_matches_index<0){O.cmd_matches_index=O.cmd_matches.length-1
}}else{O.cmd_matches_index++;
if(O.cmd_matches_index>=O.cmd_matches.length){O.cmd_matches_index=0
}}w=r[O.cmd_matches_index]
}else{r=[];
var F;
var I=v;
var t=new RegExp(TS.utility.regexpEscape(I,1000),"i");
var E=TS.shared.getActiveModelOb();
for(var G in s){F=s[G];
if((typeof F.autocomplete==="function"&&!F.autocomplete())||F.autocomplete===false||F.alias_of){continue
}if(G=="/archive"||G=="/unarchive"){if(TS.model.active_group_id&&TS.model.user.is_restricted){continue
}if(TS.model.active_channel_id&&!TS.members.canUserArchiveChannels()){continue
}if(TS.model.active_im_id){continue
}}else{if(G=="/kick"||G=="/remove"){if(E.is_archived){continue
}if(TS.model.active_group_id&&!TS.members.canUserKickFromGroups()){continue
}if(TS.model.active_channel_id&&!TS.members.canUserKickFromChannels()){continue
}if(TS.model.active_im_id){continue
}}else{if(G=="/join"){if(TS.model.user.is_restricted){continue
}}else{if(G=="/feed"){if(TS.model.user.is_restricted){continue
}}else{if(G=="/invite"){if(TS.model.user.is_ultra_restricted){continue
}}else{if(G=="/topic"||G=="/purpose"){if(TS.model.active_im_id){continue
}if(TS.model.user.is_restricted){continue
}if(E.is_general&&!TS.members.canUserPostInGeneral()){continue
}}else{if(G=="/close"){if(TS.model.active_group_id){continue
}}}}}}}}if(TS.model.user.is_restricted&&(F.type=="custom"||F.type=="service")){if(TS.model.user.is_ultra_restricted){continue
}if(TS.model.team.prefs.commands_only_regular){continue
}}name=G;
if(!I||name.match(t)){r.push(name)
}else{if(F.aliases){for(var H=0;
H<F.aliases.length;
H++){if(F.aliases[H].match(t)){r.push(name);
break
}}}}}if(!r.length){return false
}r.sort(function N(Q,P){var R=Q.toLowerCase();
var S=P.toLowerCase();
if(R<S){return -1
}if(R>S){return 1
}return 0
});
O.cmd_matches_index=0;
if(r.length>0){O.cmd_matches=r
}w=r[O.cmd_matches_index]
}}}O.matched_on=v;
if(!v){C[C.length-2]=w
}else{C[C.length-1]=w+" "
}if(!J){return n
}var L=C.join(" ");
var x=L.length;
var K=B.replace(A,L);
if(M.length){x+=M.join("\n").length+1;
K=M.join("\n")+"\n"+L+y
}if(O.onComplete){O.onComplete(K)
}z.focus().setCursorPosition(x);
O.selected_index=O.cmd_matches_index;
return e
}function b(B,z,H){var L=z.data("TS-tabComplete");
var s=z.getCursorPosition();
if(s==0){return false
}var y=B.substr(s);
var K=B.substr(0,s).split("\n");
var A=K.pop();
var C=A.split(" ");
var t=C[C.length-1].toLowerCase();
var E="";
if(!t&&!L.channel_matches){return false
}if(t){var x=false;
if(t.indexOf("#")==0){x=true
}if(L.channel_prefix){if(t.indexOf(L.channel_prefix+"#")==0){x=true
}if(t.indexOf(L.channel_prefix)==0){x=true
}}if(!x){return false
}}var u;
var v;
if(H&&H.chosen_index!=undefined){u=L.channel_matches;
L.channel_matches_index=h(H.chosen_index,L.channel_matches.length-1);
v=u[L.channel_matches_index]
}else{if(!t){u=L.channel_matches;
if(H&&H.shiftKey){L.channel_matches_index--;
if(L.channel_matches_index<0){L.channel_matches_index=L.channel_matches.length-1
}}else{L.channel_matches_index++;
if(L.channel_matches_index>=L.channel_matches.length){L.channel_matches_index=0
}}v=u[L.channel_matches_index]
}else{u=[];
var r=TS.channels.getChannelsForUser();
var M;
var N;
var G=t.replace("#","");
if(L.channel_prefix&&t.toLowerCase().indexOf(L.channel_prefix.toLowerCase())==0){G=G.substr(L.channel_prefix.length);
E=L.channel_prefix
}for(var F=0;
F<r.length;
F++){M=r[F];
if(M.is_archived){continue
}N=M._name_lc;
if(N.indexOf(G)==0||("#"+N).indexOf(G)==0){u.push(M.name)
}}if(!u.length){return false
}L.channel_matches_index=0;
if(u.length>0){L.channel_matches=u
}v=u[L.channel_matches_index]
}}L.matched_on=t;
if(!t){var D=C[C.length-2];
if(L.channel_prefix&&D.toLowerCase().indexOf(L.channel_prefix.toLowerCase())==0){E=L.channel_prefix
}C[C.length-2]=E+"#"+v
}else{C[C.length-1]=E+"#"+v+" "
}if(!H){return n
}var J=C.join(" ");
var w=J.length;
var I=B.replace(A,J);
if(K.length){w+=K.join("\n").length+1;
I=K.join("\n")+"\n"+J+y
}if(L.onComplete){L.onComplete(I)
}z.focus().setCursorPosition(w);
L.selected_index=L.channel_matches_index;
return e
}function d(E,u,ai){var aj=u.data("TS-tabComplete");
var Q=u.getCursorPosition();
if(Q==0){return false
}var G=E.substr(Q);
var af=E.substr(0,Q).split("\n");
var Y=af.pop();
var C=Y.split(" ");
var M=C[C.length-1].toLowerCase();
var aa="";
if(!M&&!aj.member_matches){return false
}var U="";
var y="";
var O;
var B;
if(ai&&ai.chosen_index!=undefined){O=aj.member_matches;
aj.member_matches_index=h(ai.chosen_index,aj.member_matches.length-1);
B=O[aj.member_matches_index]
}else{if(!M){O=aj.member_matches;
if(ai&&ai.shiftKey){aj.member_matches_index--;
if(aj.member_matches_index<0){aj.member_matches_index=aj.member_matches.length-1
}}else{aj.member_matches_index++;
if(aj.member_matches_index>=aj.member_matches.length){aj.member_matches_index=0
}}B=O[aj.member_matches_index]
}else{O=[];
var F=[];
var w=[];
var ab=[];
var T=[];
var X=[];
var ag,ae;
var ah=(aj.include_self)?TS.members.getActiveMembersWithSelfAndSlackbot():TS.members.getActiveMembersWithSlackbotAndNotSelf();
for(ag=0;
ag<ah.length;
ag++){if(ah[ag].deleted){continue
}X.push(ah[ag])
}var ad;
var J;
var R;
var N;
var S;
var H;
var s;
var I;
var Z;
var W;
var t=M;
var ac=TS.shared.getActiveModelOb();
if(aj.member_prefix&&M.toLowerCase().indexOf(aj.member_prefix.toLowerCase())==0){t=t.substr(aj.member_prefix.length);
aa=aj.member_prefix
}var z=new RegExp("\\b"+TS.utility.regexpEscape(t.replace(/^@/,""),1000),"i");
for(ag=0;
ag<X.length;
ag++){ad=X[ag];
J=ad._name_lc;
R=J+":";
N="@"+J;
S="@"+J+":";
H=(ad.profile.first_name)?ad._first_nam_lc:"";
s=(ad.profile.last_name)?ad._last_name_lc:"";
I="@"+H;
Z="@"+s;
W=(ad.profile.real_name_normalized)?ad.profile.real_name_normalized:"";
if(J.indexOf(t)==0){F.push(ad)
}else{if(R.indexOf(t)==0){F.push(ad)
}else{if(N.indexOf(t)==0){F.push(ad)
}else{if(S.indexOf(t)==0){F.push(ad)
}else{if(H&&H.indexOf(t)==0){w.push(ad)
}else{if(s&&s.indexOf(t)==0){ab.push(ad)
}else{if(H&&I.indexOf(t)==0){w.push(ad)
}else{if(s&&Z.indexOf(t)==0){ab.push(ad)
}else{if(W&&z.test(W)){T.push(ad)
}}}}}}}}}}F.sort(function D(al,A){var am=al._name_lc;
var an=A._name_lc;
if(am<an){return -1
}if(am>an){return 1
}return 0
});
w.sort(function D(al,A){var am=al._first_nam_lc;
var an=A._first_nam_lc;
if(am<an){return -1
}if(am>an){return 1
}return 0
});
ab.sort(function D(al,A){var am=al._last_name_lc;
var an=A._last_name_lc;
if(am<an){return -1
}if(am>an){return 1
}return 0
});
T.sort(function D(al,A){var am=al._real_name_normalized_lc;
var an=A._real_name_normalized_lc;
if(am<an){return -1
}if(am>an){return 1
}return 0
});
F=F.concat(w).concat(ab).concat(T);
var V=aj.sort_by_membership&&ac&&!ac.is_im;
if(V){var L=[];
for(ag=0;
ag<F.length;
ag++){ad=F[ag];
if(TS.boot_data.feature_bot_users){if(ad.is_bot||ad.is_slackbot){L.push({sort_by:(ac.members.indexOf(ad.id)==-1?2000000:20000)+ag,name:ad.name})
}else{L.push({sort_by:(ac.members.indexOf(ad.id)==-1?1000000:10000)+ag,name:ad.name})
}}else{L.push({sort_by:(!ad.is_slackbot&&ac.members.indexOf(ad.id)==-1?1000000:10000)+ag,name:ad.name})
}}if(aj.complete_member_specials){if(ac&&ac.is_general&&TS.members.canUserAtEveryone()){if("@everyone".indexOf(t)==0||"@all".indexOf(t)==0){L.push({sort_by:("@everyone"==t||"@all"==t)?1:2000000,name:"everyone"})
}}if(TS.members.canUserAtChannelOrAtGroup()&&ac&&ac.is_channel&&(!ac.is_general||TS.members.canUserAtEveryone())){if(("@channel").indexOf(t)==0){L.push({sort_by:500000,name:"channel"})
}}else{if(TS.members.canUserAtChannelOrAtGroup()&&ac&&ac.is_group){if(("@group").indexOf(t)==0){L.push({sort_by:500000,name:"group"})
}}}}L.sort(function D(al,A){if(al.sort_by<A.sort_by){return -1
}if(al.sort_by>A.sort_by){return 1
}return 0
});
for(ag=0;
ag<L.length;
ag++){O.push(L[ag].name)
}}else{if(TS.boot_data.feature_bot_users){var v,K;
v=[];
K=[];
for(ag=0;
ag<F.length;
ag++){ad=F[ag];
if(ad.is_bot||ad.is_slackbot){K.push(ad.name)
}else{v.push(ad.name)
}}O=v.concat(K)
}else{for(ag=0;
ag<F.length;
ag++){ad=F[ag];
O.push(ad.name)
}}if(aj.complete_member_specials){if(ac&&ac.is_general&&!TS.model.user.is_restricted){if(("@everyone").indexOf(t)==0||("@all").indexOf(t)==0){if("@everyone"==t||"@all"==t){O.unshift("everyone")
}else{O.push("everyone")
}}}if(ac&&ac.is_channel){if(("@channel").indexOf(t)==0){if("@channel"==t){O.unshift("channel")
}else{O.push("channel")
}}}else{if(ac&&ac.is_group){if(("@group").indexOf(t)==0){if("@group"==t){O.unshift("group")
}else{O.push("group")
}}}}}}if(!O.length){return false
}aj.member_matches_index=0;
if(O.length>0){aj.member_matches=O
}B=O[aj.member_matches_index]
}}aj.matched_on=M;
if(!M){var ak=C[C.length-2];
if(aj.member_prefix&&ak.toLowerCase().indexOf(aj.member_prefix.toLowerCase())==0){aa=aj.member_prefix
}if(C.length-2==0&&aj.member_colon){U=":"
}if(ak&&(ak.indexOf("@")>-1||TS.model.team.prefs.require_at_for_mention)){y="@"
}C[C.length-2]=aa+y+B+U
}else{if(C.length-1==0&&aj.member_colon){U=":"
}if(C[C.length-1].indexOf("@")>-1||TS.model.team.prefs.require_at_for_mention){y="@"
}C[C.length-1]=aa+y+B+U+" "
}if(!ai){return n
}var x=C.join(" ");
var P=x.length;
var r=E.replace(Y,x);
if(af.length){P+=af.join("\n").length+1;
r=af.join("\n")+"\n"+x+G
}if(aj.onComplete){aj.onComplete(r)
}u.focus().setCursorPosition(P);
aj.selected_index=aj.member_matches_index;
return e
}function a(B,z,F){var J=z.data("TS-tabComplete");
var t=z.getCursorPosition();
if(t==0){return false
}var y=B.substr(t);
var I=B.substr(0,t).split("\n");
var A=I.pop();
var C=A.split(" ");
var u=C[C.length-1].toLowerCase();
if(!u&&!J.emoji_matches){return false
}if(u&&u.indexOf(":")!=0){return false
}var x;
var v;
if(F&&F.chosen_index!=undefined){x=J.emoji_matches;
J.emoji_matches_index=h(F.chosen_index,J.emoji_matches.length-1);
v=x[J.emoji_matches_index]
}else{if(!u){x=J.emoji_matches;
if(F&&F.shiftKey){J.emoji_matches_index--;
if(J.emoji_matches_index<0){J.emoji_matches_index=J.emoji_matches.length-1
}}else{J.emoji_matches_index++;
if(J.emoji_matches_index>=J.emoji_matches.length){J.emoji_matches_index=0
}}v=x[J.emoji_matches_index]
}else{x=[];
var s=TS.model.emoji_names;
var K;
var E=u.replace(/:/g,"");
var r=new RegExp("(^)"+TS.utility.regexpEscape(E,1000),"i");
for(var D=0;
D<s.length;
D++){K=s[D];
if(!E||K.match(r)){x.push(K)
}}if(!x.length){return false
}J.emoji_matches_index=0;
if(x.length>0){J.emoji_matches=x
}v=x[J.emoji_matches_index]
}}J.matched_on=u;
if(!u){C[C.length-2]=":"+v+":"
}else{C[C.length-1]=":"+v+": "
}if(!F){return n
}var H=C.join(" ");
var w=H.length;
var G=B.replace(A,H);
if(I.length){w+=I.join("\n").length+1;
G=I.join("\n")+"\n"+H+y
}if(J.onComplete){J.onComplete(G)
}z.focus().setCursorPosition(w);
J.selected_index=J.emoji_matches_index;
return e
}function l(r,s){if(o){TS.warn("reset "+s)
}var t=r.data("TS-tabComplete");
var u=k(t);
t.cmds=null;
t.cmd_matches=null;
t.cmd_matches_index=-1;
t.member_matches=null;
t.member_matches_index=-1;
t.emoji_matches=null;
t.emoji_matches_index=-1;
t.channel_matches=null;
t.channel_matches_index=-1;
t.matched_on="";
t.work_on_textchange=true;
t.selected_index=-1;
t.ui_showing=false;
if(u){r.trigger("reset",{w:u+" "+s})
}}function k(r){var s="";
if(r.cmd_matches){s="cmds"
}if(r.member_matches){s="members"
}if(r.emoji_matches){s="emoji"
}if(r.channel_matches){s="channels"
}return s
}function q(y,v,r){var t=y.data("TS-tabComplete");
var u=(y.val());
var w=k(t);
var s=50;
var x=false;
var z={hide_ui:false,delay_ui:false,shown_callback:function(){t.ui_showing=true
}};
t.ui_showing=false;
if(TS.model.prefs.enter_is_special_in_tbt&&TS.utility.isCursorWithinTBTs(y)){z.hide_ui=true
}if(t.complete_emoji){x=a(u,y,v);
if(o){TS.info("completeOnEmoji:"+x)
}z.current_matches=t.emoji_matches||[];
z.w="emoji";
z.matched_on=t.matched_on;
if(x==n){if(o){TS.info("trigger MATCHES_SET matched_on:"+t.matched_on+" emoji_matches: "+t.emoji_matches)
}if(t.matched_on.length<3){z.hide_ui=true
}if(z.current_matches.length===1&&":"+z.current_matches[0]+":"==z.matched_on){z.hide_ui=true
}if(!z.hide_ui){if(TS.model.prefs.tab_ui_return_selects){t.selected_index=t.emoji_matches_index
}}z.i=t.selected_index;
y.trigger("matches_set",z);
return
}else{if(x==e){if(o){TS.info("trigger MATCH_CHANGED "+t.emoji_matches_index)
}z.i=t.emoji_matches_index;
y.trigger("match_changed",z);
return
}else{if(w=="emoji"){l(y,"not acting")
}else{}}}}if(t.complete_channels){x=b(u,y,v);
if(o){TS.info("completeOnChannels:"+x)
}z.current_matches=t.channel_matches||[];
z.w="channels";
z.matched_on=t.matched_on;
if(x==n){if(o){TS.info("trigger MATCHES_SET matched_on:"+t.matched_on+" channel_matches: "+t.channel_matches)
}if(!t.matched_on){z.hide_ui=true
}if(z.current_matches.length>s){z.hide_ui=true
}if(z.current_matches.length===1&&("#"+z.current_matches[0]==z.matched_on||z.current_matches[0]==z.matched_on)){z.hide_ui=true
}if(!z.hide_ui){if(TS.model.prefs.tab_ui_return_selects){t.selected_index=t.channel_matches_index
}}z.i=t.selected_index;
y.trigger("matches_set",z);
return
}else{if(x==e){if(o){TS.info("trigger MATCH_CHANGED "+t.channel_matches_index)
}z.i=t.channel_matches_index;
y.trigger("match_changed",z);
return
}else{if(w=="channels"){l(y,"not acting")
}else{}}}}if(t.new_cmds&&t.complete_cmds){x=g(u,y,v);
if(o){TS.info("completeOnCommandsNew:"+x)
}z.current_matches=t.cmd_matches||[];
z.w="cmds";
z.matched_on=t.matched_on;
if(x==n){if(o){TS.info("trigger MATCHES_SET matched_on:"+t.matched_on+" cmd_matches: "+t.cmd_matches)
}if(t.matched_on.length<1){z.hide_ui=true
}if(!z.hide_ui){if(TS.model.prefs.tab_ui_return_selects){t.selected_index=t.cmd_matches_index
}}z.i=t.selected_index;
y.trigger("matches_set",z);
return
}else{if(x==e){if(o){TS.info("trigger MATCH_CHANGED "+t.cmd_matches_index)
}z.i=t.cmd_matches_index;
y.trigger("match_changed",z);
return
}else{if(w=="cmds"){l(y,"not acting")
}else{}}}}if(t.complete_members){x=d(u,y,v);
if(o){TS.info("completeOnMembers:"+x)
}z.current_matches=t.member_matches||[];
z.w="members";
z.matched_on=t.matched_on;
z.sort_by_membership=t.sort_by_membership;
if(t.matched_on&&t.matched_on.indexOf("@")!=0&&(!v||v.which!=TS.utility.keymap.tab)){z.delay_ui=true
}if(x==n){if(o){TS.info("trigger MATCHES_SET matched_on:"+t.matched_on+" member_matches:"+t.member_matches)
}if(t.matched_on.indexOf("@")!=0&&(t.matched_on.length<3||t.member_prefix_required||TS.model.prefs.require_at)){z.hide_ui=true
}if(t.matched_on=="the"||t.matched_on=="and"){z.hide_ui=true
}if(z.current_matches.length>s){z.hide_ui=true
}if(z.current_matches.length===1&&("@"+z.current_matches[0]==z.matched_on||z.current_matches[0]==z.matched_on)){z.hide_ui=true
}if(!z.hide_ui){if(TS.model.prefs.tab_ui_return_selects){t.selected_index=t.member_matches_index
}}z.i=t.selected_index;
y.trigger("matches_set",z);
return
}else{if(x==e){if(o){TS.info("trigger MATCH_CHANGED "+t.member_matches_index)
}z.i=t.member_matches_index;
y.trigger("match_changed",z);
return
}else{if(w=="members"){l(y,"not acting")
}else{}}}}if(!t.new_cmds&&r&&t.complete_cmds&&(!u||u.indexOf("/")==0)&&p(u,y,v)){return
}}function c(r,s,u){if(o){TS.warn("choose calling work with fake e i:"+s)
}var t=r.data("TS-tabComplete");
t.work_on_textchange=false;
q(r,{chosen_index:s});
t.work_on_textchange=true;
if(u){return
}setTimeout(function(){l(r,"choose "+s)
},1)
}var f={reset:function(r){var s=j(this);
l(s,"method called: "+r)
},choose:function(r){var s=j(this);
c(s,r)
},suspend:function(){var s=j(this);
var r=s.data("TS-tabComplete");
r.suspended=true;
l(s,"suspended")
},unsuspend:function(){var r=j(this).data("TS-tabComplete");
r.suspended=false
},changeoption:function(t,s){var r=j(this).data("TS-tabComplete");
r[t]=s
},init:function(r){var s=j.extend({complete_member_specials:false,complete_members:true,member_prefix:"",member_colon:true,complete_cmds:false,complete_emoji:false,complete_channels:false,channel_prefix:"",no_tab_out:false,member_prefix_required:false,include_self:false,sort_by_membership:false,new_cmds:false},r);
return this.each(function(){var t=j(this);
if(t.data("TS-tabComplete")){return
}if(r.ui_initer){r.ui_initer(t)
}t.data("TS-tabComplete",{channel_prefix:s.channel_prefix,cmd_matches_index:-1,cmd_matches:null,cmds:null,complete_channels:s.complete_channels,complete_cmds:s.complete_cmds,complete_emoji:s.complete_emoji,complete_member_specials:s.complete_member_specials,complete_members:s.complete_members,member_colon:s.member_colon,member_matches_index:-1,member_matches:null,member_prefix:s.member_prefix,onComplete:s.onComplete,selected_index:-1,work_on_textchange:true,matched_on:"",suspended:r.suspended===true,member_prefix_required:s.member_prefix_required,include_self:s.include_self,sort_by_membership:s.sort_by_membership,new_cmds:s.new_cmds});
t.bind("textchange",function(v){var u=t.data("TS-tabComplete");
if(u.suspended){return
}if(u.work_on_textchange){if(o){TS.warn('textchange calling work no e text:"'+j(this).val()+'"')
}q(t,null)
}});
t.bind("paste",function(v){var u=t.data("TS-tabComplete");
l(t,"paste");
u.work_on_textchange=false;
var w=setTimeout(function(){u.work_on_textchange=true
},50);
t.bind("textchange.after_paste",function(x){clearTimeout(w);
u.work_on_textchange=true;
t.unbind("textchange.after_paste")
})
});
t.bind("keydown",function(y){var w=t.data("TS-tabComplete");
if(w.suspended){return
}var x=k(w);
var u=TS.utility.keymap;
if(o){TS.info("keydown:"+y.which+' text:"'+j(this).val()+'" current:'+x+" ---------------------------------------------------------------")
}if(y.which==u.tab&&!(y.metaKey||y.ctrlKey)){w.work_on_textchange=false;
if(o){TS.warn("keydown calling work WITH e")
}q(t,y,true);
if(x||s.no_tab_out){y.preventDefault()
}}else{if(y.which==u.space){if(!w.new_cmds||x!="cmds"){l(t,"space")
}}}if(!w.ui_showing){return
}if(y.which==u.down&&x){y.preventDefault();
c(t,w.selected_index+1,true)
}else{if(y.which==u.up&&x){y.preventDefault();
y.shiftKey=true;
c(t,w.selected_index-1,true)
}else{if(y.which==u.right&&x=="emoji"&&w.emoji_matches.length>1){y.preventDefault();
c(t,w.selected_index+1,true)
}else{if(y.which==u.left&&x=="emoji"&&w.emoji_matches.length>1){y.preventDefault();
y.shiftKey=true;
c(t,w.selected_index-1,true)
}else{if(y.which==u.enter&&!TS.model.prefs.tab_ui_return_selects){l(t,"enter")
}else{if(y.which==u.enter&&w.selected_index!=-1){if(w.new_cmds&&x=="cmds"){c(t,w.selected_index)
}else{c(t,w.selected_index)
}}else{if(y.which==u.enter||y.which==u.tab){var v;
if(x=="members"){v=w.member_matches
}if(x=="channels"){v=w.channel_matches
}if(x=="emoji"){v=w.emoji_matches
}if(w.new_cmds&&x=="cmds"){v=w.cmd_matches
}if(v&&v.length==1){c(t,0)
}}else{if(y.which==u.esc||y.which==u.alt||y.which==u.ctrl||y.which==u.cmd_ff||y.which==u.cmd_other||y.which==u.left||y.which==u.right||y.which==u.end||y.which==u.home){l(t,y.which)
}}}}}}}}});
t.bind("keyup",function(v){var u=t.data("TS-tabComplete");
if(u.suspended){return
}u.work_on_textchange=true
})
})
}};
j.fn.TS_tabComplete2=function(r){if(f[r]){return f[r].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof r==="object"||!r){return f.init.apply(this,arguments)
}else{j.error("Method "+r+" does not exist on jQuery.tooltip")
}}}
})(jQuery);
function printStackTrace(b){b=b||{guess:true};
var c=b.e||null,e=!!b.guess;
var d=new printStackTrace.implementation(),a=d.run(c);
return(e)?d.guessAnonymousFunctions(a):a
}if(typeof module!=="undefined"&&module.exports){module.exports=printStackTrace
}printStackTrace.implementation=function(){};
printStackTrace.implementation.prototype={run:function(a,b){a=a||this.createException();
b=b||this.mode(a);
if(b==="other"){return this.other(arguments.callee)
}else{return this[b](a)
}},createException:function(){try{this.undef()
}catch(a){return a
}},mode:function(a){if(a["arguments"]&&a.stack){return"chrome"
}else{if(a.stack&&a.sourceURL){return"safari"
}else{if(a.stack&&a.number){return"ie"
}else{if(typeof a.message==="string"&&typeof window!=="undefined"&&window.opera){if(!a.stacktrace){return"opera9"
}if(a.message.indexOf("\n")>-1&&a.message.split("\n").length>a.stacktrace.split("\n").length){return"opera9"
}if(!a.stack){return"opera10a"
}if(a.stacktrace.indexOf("called from line")<0){return"opera10b"
}return"opera11"
}else{if(a.stack){return"firefox"
}}}}}return"other"
},instrumentFunction:function(b,d,e){b=b||window;
var a=b[d];
b[d]=function c(){e.call(this,printStackTrace().slice(4));
return b[d]._instrumented.apply(this,arguments)
};
b[d]._instrumented=a
},deinstrumentFunction:function(a,b){if(a[b].constructor===Function&&a[b]._instrumented&&a[b]._instrumented.constructor===Function){a[b]=a[b]._instrumented
}},chrome:function(b){var a=(b.stack+"\n").replace(/^\S[^\(]+?[\n$]/gm,"").replace(/^\s+(at eval )?at\s+/gm,"").replace(/^([^\(]+?)([\n$])/gm,"{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm,"{anonymous}()@$1").split("\n");
a.pop();
return a
},safari:function(a){return a.stack.replace(/\[native code\]\n/m,"").replace(/^(?=\w+Error\:).*$\n/m,"").replace(/^@/gm,"{anonymous}()@").split("\n")
},ie:function(b){var a=/^.*at (\w+) \(([^\)]+)\)$/gm;
return b.stack.replace(/at Anonymous function /gm,"{anonymous}()@").replace(/^(?=\w+Error\:).*$\n/m,"").replace(a,"$1@$2").split("\n")
},firefox:function(a){return a.stack.replace(/(?:\n@:0)?\s+$/m,"").replace(/^[\(@]/gm,"{anonymous}()@").split("\n")
},opera11:function(g){var a="{anonymous}",h=/^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
var k=g.stacktrace.split("\n"),l=[];
for(var c=0,f=k.length;
c<f;
c+=2){var d=h.exec(k[c]);
if(d){var j=d[4]+":"+d[1]+":"+d[2];
var b=d[3]||"global code";
b=b.replace(/<anonymous function: (\S+)>/,"$1").replace(/<anonymous function>/,a);
l.push(b+"@"+j+" -- "+k[c+1].replace(/^\s+/,""))
}}return l
},opera10b:function(h){var g=/^(.*)@(.+):(\d+)$/;
var c=h.stacktrace.split("\n"),b=[];
for(var f=0,a=c.length;
f<a;
f++){var d=g.exec(c[f]);
if(d){var j=d[1]?(d[1]+"()"):"global code";
b.push(j+"@"+d[2]+":"+d[3])
}}return b
},opera10a:function(g){var a="{anonymous}",h=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
var j=g.stacktrace.split("\n"),k=[];
for(var c=0,f=j.length;
c<f;
c+=2){var d=h.exec(j[c]);
if(d){var b=d[3]||a;
k.push(b+"()@"+d[2]+":"+d[1]+" -- "+j[c+1].replace(/^\s+/,""))
}}return k
},opera9:function(j){var d="{anonymous}",h=/Line (\d+).*script (?:in )?(\S+)/i;
var c=j.message.split("\n"),b=[];
for(var g=2,a=c.length;
g<a;
g+=2){var f=h.exec(c[g]);
if(f){b.push(d+"()@"+f[2]+":"+f[1]+" -- "+c[g+1].replace(/^\s+/,""))
}}return b
},other:function(g){var b="{anonymous}",f=/function\s*([\w\-$]+)?\s*\(/i,a=[],d,c,e=10;
while(g&&g["arguments"]&&a.length<e){d=f.test(g.toString())?RegExp.$1||b:b;
c=Array.prototype.slice.call(g["arguments"]||[]);
a[a.length]=d+"("+this.stringifyArguments(c)+")";
g=g.caller
}return a
},stringifyArguments:function(c){var b=[];
var e=Array.prototype.slice;
for(var d=0;
d<c.length;
++d){var a=c[d];
if(a===undefined){b[d]="undefined"
}else{if(a===null){b[d]="null"
}else{if(a.constructor){if(a.constructor===Array){if(a.length<3){b[d]="["+this.stringifyArguments(a)+"]"
}else{b[d]="["+this.stringifyArguments(e.call(a,0,1))+"..."+this.stringifyArguments(e.call(a,-1))+"]"
}}else{if(a.constructor===Object){b[d]="#object"
}else{if(a.constructor===Function){b[d]="#function"
}else{if(a.constructor===String){b[d]='"'+a+'"'
}else{if(a.constructor===Number){b[d]=a
}}}}}}}}}return b.join(",")
},sourceCache:{},ajax:function(a){var b=this.createXMLHTTPObject();
if(b){try{b.open("GET",a,false);
b.send(null);
return b.responseText
}catch(c){}}return""
},createXMLHTTPObject:function(){var c,a=[function(){return new XMLHttpRequest()
},function(){return new ActiveXObject("Msxml2.XMLHTTP")
},function(){return new ActiveXObject("Msxml3.XMLHTTP")
},function(){return new ActiveXObject("Microsoft.XMLHTTP")
}];
for(var b=0;
b<a.length;
b++){try{c=a[b]();
this.createXMLHTTPObject=a[b];
return c
}catch(d){}}},isSameDomain:function(a){return typeof location!=="undefined"&&a.indexOf(location.hostname)!==-1
},getSource:function(a){if(!(a in this.sourceCache)){this.sourceCache[a]=this.ajax(a).split("\n")
}return this.sourceCache[a]
},guessAnonymousFunctions:function(k){for(var g=0;
g<k.length;
++g){var f=/\{anonymous\}\(.*\)@(.*)/,l=/^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,b=k[g],c=f.exec(b);
if(c){var e=l.exec(c[1]);
if(e){var d=e[1],a=e[2],j=e[3]||0;
if(d&&this.isSameDomain(d)&&a){var h=this.guessAnonymousFunction(d,a,j);
k[g]=b.replace("{anonymous}",h)
}}}}return k
},guessAnonymousFunction:function(c,f,a){var b;
try{b=this.findFunctionName(this.getSource(c),f)
}catch(d){b="getSource failed with url: "+c+", exception: "+d.toString()
}return b
},findFunctionName:function(a,e){var g=/function\s+([^(]*?)\s*\(([^)]*)\)/;
var k=/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;
var h=/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;
var b="",l,j=Math.min(e,20),d,c;
for(var f=0;
f<j;
++f){l=a[e-f-1];
c=l.indexOf("//");
if(c>=0){l=l.substr(0,c)
}if(l){b=l+b;
d=k.exec(b);
if(d&&d[1]){return d[1]
}d=g.exec(b);
if(d&&d[1]){return d[1]
}d=h.exec(b);
if(d&&d[1]){return d[1]
}}}return"(?)"
}};
(function(b,c){function a(e,m,k){if(e){e=e.replace(/\@/g,"&#64;")
}var d={},g="",w="...",q=["img","br"],v=[],D=0,x=g,r='([\\w|-]+\\s*=\\s*"[^"]*"\\s*)*',B="\\s*\\/?\\s*",l="\\s*\\/\\s*",t=new RegExp("<\\/?\\w+\\s*"+r+l+">"),n=new RegExp("<\\/?\\w+\\s*"+r+B+">"),y=/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w\-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g,s=new RegExp("<img\\s*"+r+B+">"),h=true,u,o,p,C,f;
function j(H){var G=s.exec(H),F,E;
if(!G){return H
}F=G.index;
E=G[0].length;
return H.substring(0,F)+H.substring(F+E)
}function z(E){var F="";
E.reverse().forEach(function(G,H){if(-1===q.indexOf(G)){F+="</"+G+">"
}});
return F
}function A(F){var E=F.indexOf(" ");
if(-1===E){E=F.indexOf(">");
if(-1===E){throw new Error("HTML tag is not well-formed : "+F)
}}return F.substring(1,E)
}k=k||d;
k.ellipsis=(c!==k.ellipsis)?k.ellipsis:w;
while(h){h=n.exec(e);
if(!h){if(D>=m){break
}h=y.exec(e);
if(!h||h.index>=m){x+=e.substring(0,m-D);
break
}while(h){u=h[0];
o=h.index;
x+=e.substring(0,(o+u.length)-D);
e=e.substring(o+u.length);
h=y.exec(e)
}break
}u=h[0];
o=h.index;
if(D+o>m){x+=(e.substring(0,m-D));
break
}else{D+=o;
x+=e.substring(0,o)
}if("/"===u[1]){v.pop()
}else{f=t.exec(u);
if(!f){C=A(u);
v.push(C)
}}if(f){x+=f[0]
}else{x+=u
}e=e.substring(o+u.length)
}if(e.length>m&&k.ellipsis){x+=k.ellipsis
}x+=z(v);
if(!k.keepImageTag){x=j(x)
}return x
}if("undefined"!==typeof module&&module.exports){module.exports=a
}else{b.truncate=a
}}(this));
/*!	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
	
	EC added this: o.setAttribute("style", "visibility:hidden");
	so that people with flash disabled don't see fucking ugliness
*/
;
var swfobject=function(){var E="undefined",s="object",T="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",r="application/x-shockwave-flash",S="SWFObjectExprInst",y="onreadystatechange",P=window,k=document,u=navigator,U=false,V=[h],p=[],O=[],J=[],m,R,F,C,K=false,a=false,o,H,n=true,N=function(){var ab=typeof k.getElementById!=E&&typeof k.getElementsByTagName!=E&&typeof k.createElement!=E,ai=u.userAgent.toLowerCase(),Z=u.platform.toLowerCase(),af=Z?/win/.test(Z):/win/.test(ai),ad=Z?/mac/.test(Z):/mac/.test(ai),ag=/webkit/.test(ai)?parseFloat(ai.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,Y=!+"\v1",ah=[0,0,0],ac=null;
if(typeof u.plugins!=E&&typeof u.plugins[T]==s){ac=u.plugins[T].description;
if(ac&&!(typeof u.mimeTypes!=E&&u.mimeTypes[r]&&!u.mimeTypes[r].enabledPlugin)){U=true;
Y=false;
ac=ac.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
ah[0]=parseInt(ac.replace(/^(.*)\..*$/,"$1"),10);
ah[1]=parseInt(ac.replace(/^.*\.(.*)\s.*$/,"$1"),10);
ah[2]=/[a-zA-Z]/.test(ac)?parseInt(ac.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0
}}else{if(typeof P.ActiveXObject!=E){try{var ae=new ActiveXObject(X);
if(ae){ac=ae.GetVariable("$version");
if(ac){Y=true;
ac=ac.split(" ")[1].split(",");
ah=[parseInt(ac[0],10),parseInt(ac[1],10),parseInt(ac[2],10)]
}}}catch(aa){}}}return{w3:ab,pv:ah,wk:ag,ie:Y,win:af,mac:ad}
}(),l=function(){if(!N.w3){return
}if((typeof k.readyState!=E&&k.readyState=="complete")||(typeof k.readyState==E&&(k.getElementsByTagName("body")[0]||k.body))){f()
}if(!K){if(typeof k.addEventListener!=E){k.addEventListener("DOMContentLoaded",f,false)
}if(N.ie&&N.win){k.attachEvent(y,function(){if(k.readyState=="complete"){k.detachEvent(y,arguments.callee);
f()
}});
if(P==top){(function(){if(K){return
}try{k.documentElement.doScroll("left")
}catch(Y){setTimeout(arguments.callee,0);
return
}f()
})()
}}if(N.wk){(function(){if(K){return
}if(!/loaded|complete/.test(k.readyState)){setTimeout(arguments.callee,0);
return
}f()
})()
}t(f)
}}();
function f(){if(K){return
}try{var aa=k.getElementsByTagName("body")[0].appendChild(D("span"));
aa.parentNode.removeChild(aa)
}catch(ab){return
}K=true;
var Y=V.length;
for(var Z=0;
Z<Y;
Z++){V[Z]()
}}function L(Y){if(K){Y()
}else{V[V.length]=Y
}}function t(Z){if(typeof P.addEventListener!=E){P.addEventListener("load",Z,false)
}else{if(typeof k.addEventListener!=E){k.addEventListener("load",Z,false)
}else{if(typeof P.attachEvent!=E){j(P,"onload",Z)
}else{if(typeof P.onload=="function"){var Y=P.onload;
P.onload=function(){Y();
Z()
}
}else{P.onload=Z
}}}}}function h(){if(U){W()
}else{I()
}}function W(){var Y=k.getElementsByTagName("body")[0];
var ab=D(s);
ab.setAttribute("type",r);
ab.setAttribute("style","visibility:hidden");
var aa=Y.appendChild(ab);
if(aa){var Z=0;
(function(){if(typeof aa.GetVariable!=E){var ac=aa.GetVariable("$version");
if(ac){ac=ac.split(" ")[1].split(",");
N.pv=[parseInt(ac[0],10),parseInt(ac[1],10),parseInt(ac[2],10)]
}}else{if(Z<10){Z++;
setTimeout(arguments.callee,10);
return
}}Y.removeChild(ab);
aa=null;
I()
})()
}else{I()
}}function I(){var ah=p.length;
if(ah>0){for(var ag=0;
ag<ah;
ag++){var Z=p[ag].id;
var ac=p[ag].callbackFn;
var ab={success:false,id:Z};
if(N.pv[0]>0){var af=c(Z);
if(af){if(G(p[ag].swfVersion)&&!(N.wk&&N.wk<312)){x(Z,true);
if(ac){ab.success=true;
ab.ref=A(Z);
ac(ab)
}}else{if(p[ag].expressInstall&&B()){var aj={};
aj.data=p[ag].expressInstall;
aj.width=af.getAttribute("width")||"0";
aj.height=af.getAttribute("height")||"0";
if(af.getAttribute("class")){aj.styleclass=af.getAttribute("class")
}if(af.getAttribute("align")){aj.align=af.getAttribute("align")
}var ai={};
var Y=af.getElementsByTagName("param");
var ad=Y.length;
for(var ae=0;
ae<ad;
ae++){if(Y[ae].getAttribute("name").toLowerCase()!="movie"){ai[Y[ae].getAttribute("name")]=Y[ae].getAttribute("value")
}}Q(aj,ai,Z,ac)
}else{q(af);
if(ac){ac(ab)
}}}}}else{x(Z,true);
if(ac){var aa=A(Z);
if(aa&&typeof aa.SetVariable!=E){ab.success=true;
ab.ref=aa
}ac(ab)
}}}}}function A(ab){var Y=null;
var Z=c(ab);
if(Z&&Z.nodeName=="OBJECT"){if(typeof Z.SetVariable!=E){Y=Z
}else{var aa=Z.getElementsByTagName(s)[0];
if(aa){Y=aa
}}}return Y
}function B(){return !a&&G("6.0.65")&&(N.win||N.mac)&&!(N.wk&&N.wk<312)
}function Q(ab,ac,Y,aa){a=true;
F=aa||null;
C={success:false,id:Y};
var af=c(Y);
if(af){if(af.nodeName=="OBJECT"){m=g(af);
R=null
}else{m=af;
R=Y
}ab.id=S;
if(typeof ab.width==E||(!/%$/.test(ab.width)&&parseInt(ab.width,10)<310)){ab.width="310"
}if(typeof ab.height==E||(!/%$/.test(ab.height)&&parseInt(ab.height,10)<137)){ab.height="137"
}k.title=k.title.slice(0,47)+" - Flash Player Installation";
var ae=N.ie&&N.win?"ActiveX":"PlugIn",ad="MMredirectURL="+P.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ae+"&MMdoctitle="+k.title;
if(typeof ac.flashvars!=E){ac.flashvars+="&"+ad
}else{ac.flashvars=ad
}if(N.ie&&N.win&&af.readyState!=4){var Z=D("div");
Y+="SWFObjectNew";
Z.setAttribute("id",Y);
af.parentNode.insertBefore(Z,af);
af.style.display="none";
(function(){if(af.readyState==4){af.parentNode.removeChild(af)
}else{setTimeout(arguments.callee,10)
}})()
}v(ab,ac,Y)
}}function q(Z){if(N.ie&&N.win&&Z.readyState!=4){var Y=D("div");
Z.parentNode.insertBefore(Y,Z);
Y.parentNode.replaceChild(g(Z),Y);
Z.style.display="none";
(function(){if(Z.readyState==4){Z.parentNode.removeChild(Z)
}else{setTimeout(arguments.callee,10)
}})()
}else{Z.parentNode.replaceChild(g(Z),Z)
}}function g(ad){var ab=D("div");
if(N.win&&N.ie){ab.innerHTML=ad.innerHTML
}else{var Z=ad.getElementsByTagName(s)[0];
if(Z){var ae=Z.childNodes;
if(ae){var Y=ae.length;
for(var aa=0;
aa<Y;
aa++){if(!(ae[aa].nodeType==1&&ae[aa].nodeName=="PARAM")&&!(ae[aa].nodeType==8)){ab.appendChild(ae[aa].cloneNode(true))
}}}}}return ab
}function v(aj,ah,Z){var Y,ab=c(Z);
if(N.wk&&N.wk<312){return Y
}if(ab){if(typeof aj.id==E){aj.id=Z
}if(N.ie&&N.win){var ai="";
for(var af in aj){if(aj[af]!=Object.prototype[af]){if(af.toLowerCase()=="data"){ah.movie=aj[af]
}else{if(af.toLowerCase()=="styleclass"){ai+=' class="'+aj[af]+'"'
}else{if(af.toLowerCase()!="classid"){ai+=" "+af+'="'+aj[af]+'"'
}}}}}var ag="";
for(var ae in ah){if(ah[ae]!=Object.prototype[ae]){ag+='<param name="'+ae+'" value="'+ah[ae]+'" />'
}}ab.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ai+">"+ag+"</object>";
O[O.length]=aj.id;
Y=c(aj.id)
}else{var aa=D(s);
aa.setAttribute("type",r);
for(var ad in aj){if(aj[ad]!=Object.prototype[ad]){if(ad.toLowerCase()=="styleclass"){aa.setAttribute("class",aj[ad])
}else{if(ad.toLowerCase()!="classid"){aa.setAttribute(ad,aj[ad])
}}}}for(var ac in ah){if(ah[ac]!=Object.prototype[ac]&&ac.toLowerCase()!="movie"){e(aa,ac,ah[ac])
}}ab.parentNode.replaceChild(aa,ab);
Y=aa
}}return Y
}function e(aa,Y,Z){var ab=D("param");
ab.setAttribute("name",Y);
ab.setAttribute("value",Z);
aa.appendChild(ab)
}function z(Z){var Y=c(Z);
if(Y&&Y.nodeName=="OBJECT"){if(N.ie&&N.win){Y.style.display="none";
(function(){if(Y.readyState==4){b(Z)
}else{setTimeout(arguments.callee,10)
}})()
}else{Y.parentNode.removeChild(Y)
}}}function b(aa){var Z=c(aa);
if(Z){for(var Y in Z){if(typeof Z[Y]=="function"){Z[Y]=null
}}Z.parentNode.removeChild(Z)
}}function c(aa){var Y=null;
try{Y=k.getElementById(aa)
}catch(Z){}return Y
}function D(Y){return k.createElement(Y)
}function j(aa,Y,Z){aa.attachEvent(Y,Z);
J[J.length]=[aa,Y,Z]
}function G(aa){var Z=N.pv,Y=aa.split(".");
Y[0]=parseInt(Y[0],10);
Y[1]=parseInt(Y[1],10)||0;
Y[2]=parseInt(Y[2],10)||0;
return(Z[0]>Y[0]||(Z[0]==Y[0]&&Z[1]>Y[1])||(Z[0]==Y[0]&&Z[1]==Y[1]&&Z[2]>=Y[2]))?true:false
}function w(ad,Z,ae,ac){if(N.ie&&N.mac){return
}var ab=k.getElementsByTagName("head")[0];
if(!ab){return
}var Y=(ae&&typeof ae=="string")?ae:"screen";
if(ac){o=null;
H=null
}if(!o||H!=Y){var aa=D("style");
aa.setAttribute("type","text/css");
aa.setAttribute("media",Y);
o=ab.appendChild(aa);
if(N.ie&&N.win&&typeof k.styleSheets!=E&&k.styleSheets.length>0){o=k.styleSheets[k.styleSheets.length-1]
}H=Y
}if(N.ie&&N.win){if(o&&typeof o.addRule==s){o.addRule(ad,Z)
}}else{if(o&&typeof k.createTextNode!=E){o.appendChild(k.createTextNode(ad+" {"+Z+"}"))
}}}function x(aa,Y){if(!n){return
}var Z=Y?"visible":"hidden";
if(K&&c(aa)){c(aa).style.visibility=Z
}else{w("#"+aa,"visibility:"+Z)
}}function M(Z){var aa=/[\\\"<>\.;]/;
var Y=aa.exec(Z)!=null;
return Y&&typeof encodeURIComponent!=E?encodeURIComponent(Z):Z
}var d=function(){if(N.ie&&N.win){window.attachEvent("onunload",function(){var ad=J.length;
for(var ac=0;
ac<ad;
ac++){J[ac][0].detachEvent(J[ac][1],J[ac][2])
}var aa=O.length;
for(var ab=0;
ab<aa;
ab++){z(O[ab])
}for(var Z in N){N[Z]=null
}N=null;
for(var Y in swfobject){swfobject[Y]=null
}swfobject=null
})
}}();
return{registerObject:function(ac,Y,ab,aa){if(N.w3&&ac&&Y){var Z={};
Z.id=ac;
Z.swfVersion=Y;
Z.expressInstall=ab;
Z.callbackFn=aa;
p[p.length]=Z;
x(ac,false)
}else{if(aa){aa({success:false,id:ac})
}}},getObjectById:function(Y){if(N.w3){return A(Y)
}},embedSWF:function(ac,ai,af,ah,Z,ab,aa,ae,ag,ad){var Y={success:false,id:ai};
if(N.w3&&!(N.wk&&N.wk<312)&&ac&&ai&&af&&ah&&Z){x(ai,false);
L(function(){af+="";
ah+="";
var ak={};
if(ag&&typeof ag===s){for(var am in ag){ak[am]=ag[am]
}}ak.data=ac;
ak.width=af;
ak.height=ah;
var an={};
if(ae&&typeof ae===s){for(var al in ae){an[al]=ae[al]
}}if(aa&&typeof aa===s){for(var aj in aa){if(typeof an.flashvars!=E){an.flashvars+="&"+aj+"="+aa[aj]
}else{an.flashvars=aj+"="+aa[aj]
}}}if(G(Z)){var ao=v(ak,an,ai);
if(ak.id==ai){x(ai,true)
}Y.success=true;
Y.ref=ao
}else{if(ab&&B()){ak.data=ab;
Q(ak,an,ai,ad);
return
}else{x(ai,true)
}}if(ad){ad(Y)
}})
}else{if(ad){ad(Y)
}}},switchOffAutoHideShow:function(){n=false
},ua:N,getFlashPlayerVersion:function(){return{major:N.pv[0],minor:N.pv[1],release:N.pv[2]}
},hasFlashPlayerVersion:G,createSWF:function(aa,Z,Y){if(N.w3){return v(aa,Z,Y)
}else{return undefined
}},showExpressInstall:function(aa,ab,Y,Z){if(N.w3&&B()){Q(aa,ab,Y,Z)
}},removeSWF:function(Y){if(N.w3){z(Y)
}},createCSS:function(ab,aa,Z,Y){if(N.w3){w(ab,aa,Z,Y)
}},addDomLoadEvent:L,addLoadEvent:t,getQueryParamValue:function(ab){var aa=k.location.search||k.location.hash;
if(aa){if(/\?/.test(aa)){aa=aa.split("?")[1]
}if(ab==null){return M(aa)
}var Z=aa.split("&");
for(var Y=0;
Y<Z.length;
Y++){if(Z[Y].substring(0,Z[Y].indexOf("="))==ab){return M(Z[Y].substring((Z[Y].indexOf("=")+1)))
}}}return""
},expressInstallCallback:function(){if(a){var Y=c(S);
if(Y&&m){Y.parentNode.replaceChild(m,Y);
if(R){x(R,true);
if(N.ie&&N.win){m.style.display="block"
}}if(F){F(C)
}}a=false
}}}
}();
(function(){var c=function(){var f={};
var j;
var d=window.location.search.substring(1);
j=d.split("&");
for(var g=0;
g<j.length;
g++){var k=j[g].indexOf("=");
if(k!=-1){var e=j[g].substring(0,k);
var h=j[g].substring(k+1);
f[e]=unescape(h)
}}return f
}();
if(c.flash=="1"||c.flash_debug=="1"||c.flash_debug_fail=="1"){window.WEB_SOCKET_FORCE_FLASH=true
}if(c.flash_debug=="1"){window.WEB_SOCKET_DEBUG_FLASH=true
}var b=function(){window.WEB_SOCKET_USING_FLASH=true;
var d;
if(window.WEB_SOCKET_LOGGER){d=WEB_SOCKET_LOGGER
}else{if(window.console&&window.console.log&&window.console.error){d=window.console
}else{d={log:function(){},error:function(){},warn:function(){},info:function(){}}
}}if(window.WEB_SOCKET_FORCE_FLASH){d.warn("FORCED TO USE FLASH SOCKET")
}else{d.warn("USING FLASH SOCKET FOR LACK OF WS SUPPORT")
}if(swfobject.getFlashPlayerVersion().major<10||c.flash_debug_fail=="1"){d.error("Flash Player >= 10.0.0 is required.");
window.WEB_SOCKET_USING_FLASH_BUT_NO_FLASH=true;
if(!window.WEB_SOCKET_FORCE_FLASH){return
}}if(location.protocol=="file:"){d.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://...")
}window.WebSocket=function(g,h,f,k,j){var e=this;
e.__id=WebSocket.__nextId++;
WebSocket.__instances[e.__id]=e;
e.readyState=WebSocket.CONNECTING;
e.bufferedAmount=0;
e.__events={};
if(!h){h=[]
}else{if(typeof h=="string"){h=[h]
}}e.__createTask=setTimeout(function(){WebSocket.__addTask(function(){e.__createTask=null;
WebSocket.__flash.create(e.__id,g,h,f||null,k||0,j||null)
})
},0)
};
WebSocket.prototype.send=function(f){if(this.readyState==WebSocket.CONNECTING){throw"INVALID_STATE_ERR: Web Socket connection has not been established"
}var e=WebSocket.__flash.send(this.__id,encodeURIComponent(f));
if(e<0){return true
}else{this.bufferedAmount+=e;
return false
}};
WebSocket.prototype.close=function(){if(this.__createTask){clearTimeout(this.__createTask);
this.__createTask=null;
this.readyState=WebSocket.CLOSED;
return
}if(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING){return
}this.readyState=WebSocket.CLOSING;
WebSocket.__flash.close(this.__id)
};
WebSocket.prototype.addEventListener=function(f,g,e){if(!(f in this.__events)){this.__events[f]=[]
}this.__events[f].push(g)
};
WebSocket.prototype.removeEventListener=function(h,j,e){if(!(h in this.__events)){return
}var g=this.__events[h];
for(var f=g.length-1;
f>=0;
--f){if(g[f]===j){g.splice(f,1);
break
}}};
WebSocket.prototype.dispatchEvent=function(h){var f=this.__events[h.type]||[];
for(var e=0;
e<f.length;
++e){f[e](h)
}var g=this["on"+h.type];
if(g){g.apply(this,[h])
}};
WebSocket.prototype.__handleEvent=function(g){if("readyState" in g){this.readyState=g.readyState
}if("protocol" in g){this.protocol=g.protocol
}var e;
if(g.type=="open"||g.type=="error"){e=this.__createSimpleEvent(g.type)
}else{if(g.type=="close"){e=this.__createSimpleEvent("close");
e.wasClean=g.wasClean?true:false;
e.code=g.code;
e.reason=g.reason
}else{if(g.type=="message"){var f=decodeURIComponent(g.message);
e=this.__createMessageEvent("message",f)
}else{throw"unknown event type: "+g.type
}}}this.dispatchEvent(e)
};
WebSocket.prototype.__createSimpleEvent=function(e){if(document.createEvent&&window.Event){var f=document.createEvent("Event");
f.initEvent(e,false,false);
return f
}else{return{type:e,bubbles:false,cancelable:false}
}};
WebSocket.prototype.__createMessageEvent=function(e,g){if(document.createEvent&&window.MessageEvent&&!window.opera){var f=document.createEvent("MessageEvent");
f.initMessageEvent("message",false,false,g,null,null,window,null);
return f
}else{return{type:e,data:g,bubbles:false,cancelable:false}
}};
WebSocket.CONNECTING=0;
WebSocket.OPEN=1;
WebSocket.CLOSING=2;
WebSocket.CLOSED=3;
WebSocket.__isFlashImplementation=true;
WebSocket.__initialized=false;
WebSocket.__flash=null;
WebSocket.__instances={};
WebSocket.__tasks=[];
WebSocket.__nextId=0;
WebSocket.loadFlashPolicyFile=function(e){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(e)
})
};
WebSocket.__initialize=function(){if(window.WEB_SOCKET_USING_FLASH_BUT_NO_FLASH){return
}if(WebSocket.__initialized){return
}WebSocket.__initialized=true;
if(WebSocket.__swfLocation){window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation
}if(!window.WEB_SOCKET_SWF_LOCATION){d.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
return
}if(!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR&&!WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/)&&WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)){var g=RegExp.$1;
if(location.host!=g){d.error("[WebSocket] You must host HTML and WebSocketMain.swf in the same host ('"+location.host+"' != '"+g+"'). See also 'How to host HTML file and SWF file in different domains' section in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;")
}}var e=document.createElement("div");
e.id="webSocketContainer";
e.style.position="absolute";
if(WebSocket.__isFlashLite()){e.style.left="0px";
e.style.top="0px"
}else{e.style.left="-100px";
e.style.top="-100px"
}var f=document.createElement("div");
f.id="webSocketFlash";
e.appendChild(f);
document.body.appendChild(e);
swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:true,swliveconnect:true,allowScriptAccess:"always"},null,function(h){if(!h.success){d.error("[WebSocket] swfobject.embedSWF failed")
}})
};
WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash");
WebSocket.__flash.setCallerUrl(location.href);
WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG_FLASH);
for(var e=0;
e<WebSocket.__tasks.length;
++e){WebSocket.__tasks[e]()
}WebSocket.__tasks=[]
},0)
};
WebSocket.__onFlashEvent=function(){setTimeout(function(){try{var g=WebSocket.__flash.receiveEvents();
for(var f=0;
f<g.length;
++f){WebSocket.__instances[g[f].webSocketId].__handleEvent(g[f])
}}catch(h){d.error(h)
}},0);
return true
};
WebSocket.__log=function(e){d.log(decodeURIComponent(e))
};
WebSocket.__error=function(e){d.error(decodeURIComponent(e))
};
WebSocket.__addTask=function(e){if(WebSocket.__flash){e()
}else{WebSocket.__tasks.push(e)
}};
WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes){return false
}var e=window.navigator.mimeTypes["application/x-shockwave-flash"];
if(!e||!e.enabledPlugin||!e.enabledPlugin.filename){return false
}return e.enabledPlugin.filename.match(/flashlite/i)?true:false
};
if(!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION){swfobject.addDomLoadEvent(function(){WebSocket.__initialize()
})
}a()
};
var a=function(){b=function(){if(console&&console.log){console.log("useFlashForWebSockets called, but already using flash, so ignoring")
}}
};
window.fallBackToFlashWebSockets=function(){window.WEB_SOCKET_FORCE_FLASH=true;
b()
};
if(window.WEB_SOCKET_FORCE_FLASH){}else{if(window.WebSocket){return
}else{if(window.MozWebSocket){window.WebSocket=MozWebSocket;
return
}}}b()
})();
/*!
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
;
(function(a,b){var c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
a.fn.imagesLoaded=function(m){var j=this,o=a.isFunction(a.Deferred)?a.Deferred():0,n=a.isFunction(o.notify),f=j.find("img").add(j.filter("img")),g=[],l=[],h=[];
if(a.isPlainObject(m)){a.each(m,function(p,q){if(p==="callback"){m=q
}else{if(o){o[p](q)
}}})
}function k(){var p=a(l),q=a(h);
if(o){if(h.length){o.reject(f,p,q)
}else{o.resolve(f)
}}if(a.isFunction(m)){m.call(j,f,p,q)
}}function e(p){d(p.target,p.type==="error")
}function d(p,q){if(p.src===c||a.inArray(p,g)!==-1){return
}g.push(p);
if(q){h.push(p)
}else{l.push(p)
}a.data(p,"imagesLoaded",{isBroken:q,src:p.src});
if(n){o.notifyWith(a(p),[q,f,a(l),a(h)])
}if(f.length===g.length){setTimeout(k);
f.unbind(".imagesLoaded",e)
}}if(!f.length){k()
}else{f.bind("load.imagesLoaded error.imagesLoaded",e).each(function(p,r){var s=r.src;
var q=a.data(r,"imagesLoaded");
if(q&&q.src===s){d(r,q.isBroken);
return
}if(r.complete&&r.naturalWidth!==b){d(r,r.naturalWidth===0||r.naturalHeight===0);
return
}if(r.readyState||r.complete){r.src=c;
r.src=s
}})
}return o?o.promise(j):j
}
})(jQuery);
/*! jQuery UI - v1.11.1 - 2014-09-24
* http://jqueryui.com
* Includes: widget.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(c){
/*!
 * jQuery UI Widget 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
;
var d=0,a=Array.prototype.slice;
c.cleanData=(function(e){return function(f){var h,j,g;
for(g=0;
(j=f[g])!=null;
g++){try{h=c._data(j,"events");
if(h&&h.remove){c(j).triggerHandler("remove")
}}catch(k){}}e(f)
}
})(c.cleanData);
c.widget=function(e,f,n){var k,l,h,m,g={},j=e.split(".")[0];
e=e.split(".")[1];
k=j+"-"+e;
if(!n){n=f;
f=c.Widget
}c.expr[":"][k.toLowerCase()]=function(o){return !!c.data(o,k)
};
c[j]=c[j]||{};
l=c[j][e];
h=c[j][e]=function(o,p){if(!this._createWidget){return new h(o,p)
}if(arguments.length){this._createWidget(o,p)
}};
c.extend(h,l,{version:n.version,_proto:c.extend({},n),_childConstructors:[]});
m=new f();
m.options=c.widget.extend({},m.options);
c.each(n,function(p,o){if(!c.isFunction(o)){g[p]=o;
return
}g[p]=(function(){var q=function(){return f.prototype[p].apply(this,arguments)
},r=function(s){return f.prototype[p].apply(this,s)
};
return function(){var u=this._super,s=this._superApply,t;
this._super=q;
this._superApply=r;
t=o.apply(this,arguments);
this._super=u;
this._superApply=s;
return t
}
})()
});
h.prototype=c.widget.extend(m,{widgetEventPrefix:l?(m.widgetEventPrefix||e):e},g,{constructor:h,namespace:j,widgetName:e,widgetFullName:k});
if(l){c.each(l._childConstructors,function(p,q){var o=q.prototype;
c.widget(o.namespace+"."+o.widgetName,h,q._proto)
});
delete l._childConstructors
}else{f._childConstructors.push(h)
}c.widget.bridge(e,h);
return h
};
c.widget.extend=function(k){var f=a.call(arguments,1),j=0,e=f.length,g,h;
for(;
j<e;
j++){for(g in f[j]){h=f[j][g];
if(f[j].hasOwnProperty(g)&&h!==undefined){if(c.isPlainObject(h)){k[g]=c.isPlainObject(k[g])?c.widget.extend({},k[g],h):c.widget.extend({},h)
}else{k[g]=h
}}}}return k
};
c.widget.bridge=function(f,e){var g=e.prototype.widgetFullName||f;
c.fn[f]=function(k){var h=typeof k==="string",j=a.call(arguments,1),l=this;
k=!h&&j.length?c.widget.extend.apply(null,[k].concat(j)):k;
if(h){this.each(function(){var n,m=c.data(this,g);
if(k==="instance"){l=m;
return false
}if(!m){return c.error("cannot call methods on "+f+" prior to initialization; attempted to call method '"+k+"'")
}if(!c.isFunction(m[k])||k.charAt(0)==="_"){return c.error("no such method '"+k+"' for "+f+" widget instance")
}n=m[k].apply(m,j);
if(n!==m&&n!==undefined){l=n&&n.jquery?l.pushStack(n.get()):n;
return false
}})
}else{this.each(function(){var m=c.data(this,g);
if(m){m.option(k||{});
if(m._init){m._init()
}}else{c.data(this,g,new e(k,this))
}})
}return l
}
};
c.Widget=function(){};
c.Widget._childConstructors=[];
c.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(e,f){f=c(f||this.defaultElement||this)[0];
this.element=c(f);
this.uuid=d++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=c.widget.extend({},this.options,this._getCreateOptions(),e);
this.bindings=c();
this.hoverable=c();
this.focusable=c();
if(f!==this){c.data(f,this.widgetFullName,this);
this._on(true,this.element,{remove:function(g){if(g.target===f){this.destroy()
}}});
this.document=c(f.style?f.ownerDocument:f.document||f);
this.window=c(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:c.noop,_getCreateEventData:c.noop,_create:c.noop,_init:c.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:c.noop,widget:function(){return this.element
},option:function(h,j){var e=h,k,g,f;
if(arguments.length===0){return c.widget.extend({},this.options)
}if(typeof h==="string"){e={};
k=h.split(".");
h=k.shift();
if(k.length){g=e[h]=c.widget.extend({},this.options[h]);
for(f=0;
f<k.length-1;
f++){g[k[f]]=g[k[f]]||{};
g=g[k[f]]
}h=k.pop();
if(arguments.length===1){return g[h]===undefined?null:g[h]
}g[h]=j
}else{if(arguments.length===1){return this.options[h]===undefined?null:this.options[h]
}e[h]=j
}}this._setOptions(e);
return this
},_setOptions:function(e){var f;
for(f in e){this._setOption(f,e[f])
}return this
},_setOption:function(e,f){this.options[e]=f;
if(e==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!f);
if(f){this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}}return this
},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_on:function(h,g,f){var j,e=this;
if(typeof h!=="boolean"){f=g;
g=h;
h=false
}if(!f){f=g;
g=this.element;
j=this.widget()
}else{g=j=c(g);
this.bindings=this.bindings.add(g)
}c.each(f,function(p,o){function m(){if(!h&&(e.options.disabled===true||c(this).hasClass("ui-state-disabled"))){return
}return(typeof o==="string"?e[o]:o).apply(e,arguments)
}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||c.guid++
}var n=p.match(/^([\w:-]*)\s*(.*)$/),l=n[1]+e.eventNamespace,k=n[2];
if(k){j.delegate(k,l,m)
}else{g.bind(l,m)
}})
},_off:function(f,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
f.unbind(e).undelegate(e)
},_delay:function(h,g){function f(){return(typeof h==="string"?e[h]:h).apply(e,arguments)
}var e=this;
return setTimeout(f,g||0)
},_hoverable:function(e){this.hoverable=this.hoverable.add(e);
this._on(e,{mouseenter:function(f){c(f.currentTarget).addClass("ui-state-hover")
},mouseleave:function(f){c(f.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(e){this.focusable=this.focusable.add(e);
this._on(e,{focusin:function(f){c(f.currentTarget).addClass("ui-state-focus")
},focusout:function(f){c(f.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(e,f,g){var k,j,h=this.options[e];
g=g||{};
f=c.Event(f);
f.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase();
f.target=this.element[0];
j=f.originalEvent;
if(j){for(k in j){if(!(k in f)){f[k]=j[k]
}}}this.element.trigger(f,g);
return !(c.isFunction(h)&&h.apply(this.element[0],[f].concat(g))===false||f.isDefaultPrevented())
}};
c.each({show:"fadeIn",hide:"fadeOut"},function(f,e){c.Widget.prototype["_"+f]=function(j,h,l){if(typeof h==="string"){h={effect:h}
}var k,g=!h?f:h===true||typeof h==="number"?e:h.effect||e;
h=h||{};
if(typeof h==="number"){h={duration:h}
}k=!c.isEmptyObject(h);
h.complete=l;
if(h.delay){j.delay(h.delay)
}if(k&&c.effects&&c.effects.effect[g]){j[f](h)
}else{if(g!==f&&j[g]){j[g](h.duration,h.easing,l)
}else{j.queue(function(m){c(this)[f]();
if(l){l.call(j[0])
}m()
})
}}}
});
var b=c.widget
}));
(function(){$.widget("TS.tab_complete_ui",{_$el:null,_$input:null,_$scroller:null,_$parent_scroller:null,_current_matches:[],_is_showing:false,_was_just_hidden:false,_last_shown_matches:null,_show_delay_tim:0,_show_delay_ms:500,_lazy_load:null,_scroll_raf:null,_date_start:new Date(),_create:function(){this._$input=this.element;
var b=this.options.id;
this._$el=$('<div id="'+b+'" class="tab_complete_ui hidden inactive"> 				<div id="'+b+'_header" class="tab_complete_ui_header"> 					<span class="header_label"></span> 					<span class="header_help"><strong>tab</strong>&nbsp; or &nbsp;<strong>&uarr;</strong> <strong>&darr;</strong>&nbsp; to navigate <strong class="left_margin">↵</strong>&nbsp; to select <strong class="left_margin">esc</strong>&nbsp; to dismiss</span> 				</div> 			</div>');
if(this.options.narrow){this._$el.addClass("narrow")
}this._$scroller=$('<div id="'+b+'_scroller" class="tab_complete_ui_scroller"></div>');
this._$el.append(this._$scroller);
$("body").append(this._$el);
var a=TS.qs_args.debug_scroll=="1";
this._$scroller.monkeyScroll({debug:a});
this._$el.bind("click",this._onElClick.bind(this));
this._$input.bind("matches_set",this._onInputMatchesSet.bind(this));
this._$input.bind("match_changed",this._onInputMatchChanged.bind(this));
this._$input.bind("reset",this._onInputReset.bind(this))
},_destroy:function(){this._$el.remove();
$("html").unbind("mousedown.tabcomplete");
if(this._$parent_scroller){this._$parent_scroller.unbind("scroll.tab_complete_ui")
}},_show_threshold:1000,_show_slow:null,_show:function(a){var f=new Date();
a.shown_callback();
var b=this._$el;
var d=this._$scroller;
var e=a.current_matches.join("");
if(this._last_shown_matches!==e){this._last_shown_matches=e;
this._buildAndInsertHTML(a)
}if(!this._is_showing){b.removeClass("inactive").removeClass("hidden");
d.trigger("resize-immediate")
}this._is_showing=true;
$("html").unbind("mousedown.tabcomplete").bind("mousedown.tabcomplete",this._onMouseDown.bind(this));
this._positionUI();
var c=new Date()-f;
if(a&&a.w&&c>this._show_threshold&&!this._show_slow){if(a.w==="emoji"){TS.logError({message:"tab_complete_ui._show() with emoji > "+this._show_threshold+" ms"}," emoji took "+c+" ms for "+a.current_matches.length+" items. localStorage = "+(TS.model.prefs.ls_disabled?0:1))
}else{if(a.w==="members"){TS.logError({message:"tab_complete_ui._show() with members > "+this._show_threshold+" ms"}," members took "+c+" ms for "+a.current_matches.length+" items. Member images: "+((!TS.model.mac_ssb_version||a.current_matches.length<100)?"included.":"excluded.")+" App open for "+((new Date()-this._date_start)/1000/60).toFixed(2)+" min.")
}}this._show_slow=true
}if(this.options.scroll_with_element){if(this._$parent_scroller){this._$parent_scroller.unbind("scroll.tab_complete_ui")
}this._$parent_scroller=this._$input.parents(":scrollable(vertical):first");
this._$parent_scroller.bind("scroll.tab_complete_ui",this._onScroll.bind(this))
}},_hide:function(){var a=this._$el;
this._is_showing=false;
a.addClass("inactive");
a.addClass("hidden");
this._last_shown_matches=null;
if(this._$parent_scroller){this._$parent_scroller.unbind("scroll.tab_complete_ui")
}this._was_just_hidden=true;
setTimeout(function(){this._was_just_hidden=false
}.bind(this),0)
},_onElClick:function(b){var c=this._$input;
var a=$(b.target).closest(".tab_complete_ui_item");
if(!a.length){return
}c.TS_tabComplete2("choose",a.data("index"))
},_onInputMatchesSet:function(d,a){clearTimeout(this._show_delay_tim);
var b=this._$el;
var f=this._$scroller;
this._current_matches=a.current_matches;
if(a.hide_ui){this._hide()
}else{var c=function(){this._show(a);
f.scrollTop(0);
if(a.i!=-1){b.find('.tab_complete_ui_item[data-index="'+a.i+'"]:not(.just_one)').addClass("active").scrollintoview({duration:10})
}}.bind(this);
if(a.delay_ui){this._show_delay_tim=setTimeout(c,this._show_delay_ms);
f.scrollTop(0);
if(a.i!=-1){b.find('.tab_complete_ui_item[data-index="'+a.i+'"]:not(.just_one)').addClass("active").scrollintoview({duration:10})
}this._positionUI()
}else{c()
}}},_onInputMatchChanged:function(c,a){clearTimeout(this._show_delay_tim);
var b=this._$el;
if(!this._current_matches){this._onInputMatchesSet(c,a);
return
}this._show(a);
b.find(".tab_complete_ui_item").removeClass("active");
b.find('.tab_complete_ui_item[data-index="'+a.i+'"]').addClass("active").scrollintoview({duration:10})
},_onInputReset:function(b,a){clearTimeout(this._show_delay_tim);
$("html").unbind("mousedown.tabcomplete");
this._hide();
this._current_matches=null
},_onMouseDown:function(b){var a=this._$el;
var c=this._$input;
if($(b.target).closest(a).length===0&&$(b.target).closest(c).length===0){c.TS_tabComplete2("reset","mousedown")
}},_onScroll:function(a){TS.utility.cancelRAF(this._scroll_raf);
this._scroll_raf=TS.utility.rAF(this._positionUI.bind(this))
},_positionUI:function(){if(!this._$el||!this._$el.length){return
}var k=this._$el;
var f=this._$input;
var c=f.offset();
var d=f.width();
var b=this.options.min_width||500;
var j=20;
var a;
var g=$(window).width()-c.left-j;
if(g>0&&(g<d||b>g)){a=d=g
}else{a=Math.max(b,d)
}k.css({width:a});
if(c.top<488){this._$scroller.css("max-height",Math.max(100,c.top-32))
}else{this._$scroller.css("max-height","")
}var h=c.left;
var e=c.top-k.outerHeight();
k.css({top:e,left:h});
this._$scroller.data("monkeyScroll").updateFunc()
},positionUI:function(){this._positionUI()
},isShowing:function(){return this._is_showing
},wasJustHidden:function(){return this._was_just_hidden
},_buildItemsHTML:function(j){var g=[];
var e=this._current_matches;
var l="type_"+j.w;
g.push('<ul class="'+l+'">');
var c=false&&e.length==1;
var h=false;
var a={};
for(var f=0;
f<e.length;
f++){if(j.w=="emoji"){g.push('<li class="tab_complete_ui_item" data-index="'+f+'">'+this._buildEmojiHTML(e[f])+"</li>")
}else{if(j.w=="channels"){g.push('<li class="tab_complete_ui_item" data-index="'+f+'">'+this._buildChannelHTML(e[f])+"</li>")
}else{if(j.w=="cmds"){g.push('<li class="tab_complete_ui_item '+(c?"just_one":"")+'" data-index="'+f+'">'+this._buildCmdHTML(e[f],c)+"</li>");
if(h){var b=TS.utility.clone(TS.cmd_handlers[e[f]]);
if(b){a[e[f]]=b;
for(var d in b){if(!b[d]||d=="autocomplete"){delete b[d]
}}}}}else{g.push(this._buildMemberHTML(e,f,j.sort_by_membership))
}}}}if(h){TS.warn(JSON.stringify(a,null,"\t"))
}g.push("</ul>");
g=g.join("");
if(j.w=="emoji"){g=TS.utility.emojiGraphicReplace(g)
}return g
},_buildMemberHTML:function(f,e,c){var h=f[e];
var g;
var l=false;
if(h=="everyone"||h=="channel"||h=="group"){l=c&&e>0&&TS.members.getMemberByName(f[e-1]);
g='<span class="broadcast">@'+h+"</span>";
switch(h){case"everyone":g+=' <span class="broadcast_info">This will notify everyone on your team.</span>';
break;
case"channel":g+=' <span class="broadcast_info">This will notify everyone in this channel.</span>';
break;
case"group":g+=' <span class="broadcast_info">This will notify everyone in this group.</span>';
break;
default:break
}}else{g='<span class="username">'+h+"</span>";
var d=TS.members.getMemberByName(h);
if(!d){g="@"+g
}else{var b=!this.options.no_model_ob&&TS.shared.getActiveModelOb();
var j=b&&!b.is_im&&(b.members.indexOf(d.id)>-1||d.is_slackbot);
if(c&&e>0&&!j&&!b.is_im){var a=TS.members.getMemberByName(f[e-1]);
if(!a||a.is_slackbot||b.members.indexOf(a.id)>-1){l=true
}}if(f.length<100){g=TS.templates.builders.makeMemberImage(d.id,24,true)+" "+g
}if(d.presence){g+=TS.templates.makeMemberPresenceIcon(d)
}g+=' <span class="realname">'+TS.utility.htmlEntities(d.profile.real_name)+"</span>";
if(b&&!d.is_slackbot&&!b.is_im){var k="channel";
if(b.is_group){k="group"
}if(!j){g+=' <span class="not_in_channel">(not in '+k+")</span>"
}}}}g='<li class="tab_complete_ui_item" data-index="'+e+'">'+g+"</li>";
if(l){g='<hr class="small_top_margin small_bottom_margin" />'+g
}return g
},_buildChannelHTML:function(a){var b='<span class="channelname"><span class="hash">#</span>'+a+"</span>";
return b
},_buildCmdHTML:function(g,c){var b=TS.cmd_handlers[g];
var f;
if(b){var a="";
if(b.aliases){a=" (or "+b.aliases.join(", ")+")"
}var h="";
if(b.usage){h=" "+b.usage;
h=h.replace(/</g,'<span class="argname argoptional"%%%% &lt;');
h=h.replace(/\>/g,"&gt;</span>");
h=h.replace(/\%\%\%\%/g,">");
h=h.replace(/\[/g,'<span class="argname"> [');
h=h.replace(/\]/g,"]</span>")
}else{if(b.args){var j;
for(var e=0;
e<b.args.length;
e++){j=b.args[e];
if(j.optional){h+=' <span class="argname argoptional"> ['+j.name+"]</span>"
}else{h+=' <span class="argname"> '+j.name+"</span>"
}}}}var k="";
var d="";
if(b.type=="client"&&b.override){d=" override"
}if(b.type=="service"||b.type=="custom"){k="["+b.type+d+"]"
}f='<div class="cmd-left-td"><span class="cmdname">'+TS.utility.htmlEntities(g)+"</span>"+a+h+'</div><div class="cmd-right-td"><span class="cmddesc"><span class="cmdtype">'+k+"</span> "+TS.utility.htmlEntities(b.desc)+"</span></div>"
}else{f='<div class="cmd-left-td"><span class="cmdname">'+g+"</span></div>"
}if(c){}return f
},_buildEmojiHTML:function(a){var c=true;
var b=":"+a+": ";
if(c){b=":"+a+": &#58;"+a+"&#58"
}return b
},_buildHeaderHTML:function(a){var b="";
if(a.w=="members"){b="People"
}else{if(a.w=="cmds"){b="Commands"
}else{b=TS.utility.capitalize(a.w)
}}if(a.matched_on&&a.matched_on!="@"&&a.matched_on!="#"){b+=" matching <strong>"+TS.utility.htmlEntities(a.matched_on)+"</strong>"
}return b
},_buildAndInsertHTML:function(a){var b=this._$scroller;
this._$el.find(".header_label").html(this._buildHeaderHTML(a));
b.html(this._buildItemsHTML(a));
if(this._lazyload&&this._lazyload.detachEvents){this._lazyload.detachEvents()
}this._lazyload=b.find("img.lazy").lazyload({container:this._$scroller})
}})
})();