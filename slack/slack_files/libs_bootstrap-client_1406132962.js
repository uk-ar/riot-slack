!function(a){a(function(){a.support.transition=(function(){var b=(function(){var e=document.createElement("bootstrap"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;
for(c in d){if(e.style[c]!==undefined){return d[c]
}}}());
return b&&{end:b}
})()
})
}(window.jQuery);
!function(c){var b=function(e,d){this.options=d;
this.$element=c(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",c.proxy(this.hide,this));
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)
};
b.prototype={constructor:b,toggle:function(){return this[!this.isShown?"show":"hide"]()
},show:function(){var d=this,f=c.Event("show");
this.$element.trigger(f);
if(this.isShown||f.isDefaultPrevented()){return
}this.isShown=true;
this.escape();
this.backdrop(function(){var e=c.support.transition&&d.$element.hasClass("fade");
if(!d.$element.parent().length){d.$element.appendTo(document.body)
}d.$element.show();
if(e){d.$element[0].offsetWidth
}d.$element.addClass("in").attr("aria-hidden",false);
d.enforceFocus();
e?d.$element.one(c.support.transition.end,function(){d.$element.focus().trigger("shown")
}):d.$element.focus().trigger("shown")
})
},hide:function(f){f&&f.preventDefault();
var d=this;
f=c.Event("hide");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
c(document).off("focusin.modal");
this.$element.removeClass("in").attr("aria-hidden",true);
c.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()
},enforceFocus:function(){var d=this;
c(document).on("focusin.modal",function(f){if(d.$element[0]!==f.target&&!d.$element.has(f.target).length){d.$element.focus()
}})
},escape:function(){var d=this;
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(f){f.which==27&&d.hide()
})
}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")
}}},hideWithTransition:function(){var d=this,e=setTimeout(function(){d.$element.off(c.support.transition.end);
d.hideModal()
},500);
this.$element.one(c.support.transition.end,function(){clearTimeout(e);
d.hideModal()
})
},hideModal:function(d){this.$element.hide().trigger("hidden");
this.backdrop()
},removeBackdrop:function(){this.$backdrop.remove();
this.$backdrop=null
},backdrop:function(g){var f=this,e=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var d=c.support.transition&&e;
this.$backdrop=c('<div class="modal-backdrop '+e+'" />').appendTo(document.body);
this.$backdrop.click(this.options.backdrop=="static"?c.proxy(this.$element[0].focus,this.$element[0]):c.proxy(this.hide,this));
if(d){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
d?this.$backdrop.one(c.support.transition.end,g):g()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
c.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(c.support.transition.end,c.proxy(this.removeBackdrop,this)):this.removeBackdrop()
}else{if(g){g()
}}}}};
var a=c.fn.modal;
c.fn.modal=function(d){return this.each(function(){var g=c(this),f=g.data("modal"),e=c.extend({},c.fn.modal.defaults,g.data(),typeof d=="object"&&d);
if(!f){g.data("modal",(f=new b(this,e)))
}if(typeof d=="string"){f[d]()
}else{if(e.show){f.show()
}}})
};
c.fn.modal.defaults={backdrop:true,keyboard:true,show:true};
c.fn.modal.Constructor=b;
c.fn.modal.noConflict=function(){c.fn.modal=a;
return this
};
c(document).on("click.modal.data-api",'[data-toggle="modal"]',function(i){var h=c(this),f=h.attr("href"),d=c(h.attr("data-target")||(f&&f.replace(/.*(?=#[^\s]+$)/,""))),g=d.data("modal")?"toggle":c.extend({remote:!/#/.test(f)&&f},d.data(),h.data());
i.preventDefault();
d.modal(g).one("hide",function(){h.focus()
})
})
}(window.jQuery);
!function(f){var b="[data-toggle=dropdown]",a=function(h){var g=f(h).on("click.dropdown.data-api",this.toggle);
f("html").on("click.dropdown.data-api",function(){g.parent().removeClass("open")
})
};
a.prototype={constructor:a,toggle:function(j){var i=f(this),h,g;
if(i.is(".disabled, :disabled")){return
}h=e(i);
g=h.hasClass("open");
d();
if(!g){h.toggleClass("open")
}i.focus();
return false
},keydown:function(l){var k,m,g,j,i,h;
if(!/(38|40|27)/.test(l.keyCode)){return
}k=f(this);
l.preventDefault();
l.stopPropagation();
if(k.is(".disabled, :disabled")){return
}j=e(k);
i=j.hasClass("open");
if(!i||(i&&l.keyCode==27)){return k.click()
}m=f("[role=menu] li:not(.divider):visible a",j);
if(!m.length){return
}h=m.index(m.filter(":focus"));
if(l.keyCode==38&&h>0){h--
}if(l.keyCode==40&&h<m.length-1){h++
}if(!~h){h=0
}m.eq(h).focus()
}};
function d(){f(b).each(function(){e(f(this)).removeClass("open")
})
}function e(i){var g=i.attr("data-target"),h;
if(!g){g=i.attr("href");
g=g&&/#/.test(g)&&g.replace(/.*(?=#[^\s]*$)/,"")
}h=f(g);
h.length||(h=i.parent());
return h
}var c=f.fn.dropdown;
f.fn.dropdown=function(g){return this.each(function(){var i=f(this),h=i.data("dropdown");
if(!h){i.data("dropdown",(h=new a(this)))
}if(typeof g=="string"){h[g].call(i)
}})
};
f.fn.dropdown.Constructor=a;
f.fn.dropdown.noConflict=function(){f.fn.dropdown=c;
return this
};
f(document).on("click.dropdown.data-api touchstart.dropdown.data-api",d).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(g){g.stopPropagation()
}).on("touchstart.dropdown.data-api",".dropdown-menu",function(g){g.stopPropagation()
}).on("click.dropdown.data-api touchstart.dropdown.data-api",b,a.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",b+", [role=menu]",a.prototype.keydown)
}(window.jQuery);
!function(c){var b=function(d){this.element=c(d)
};
b.prototype={constructor:b,show:function(){var j=this.element,g=j.closest("ul:not(.dropdown-menu)"),f=j.attr("data-target"),h,d,i;
if(!f){f=j.attr("href");
f=f&&f.replace(/.*(?=#[^\s]*$)/,"")
}if(j.parent("li").hasClass("active")){return
}h=g.find(".active:last a")[0];
i=c.Event("show",{relatedTarget:h});
j.trigger(i);
if(i.isDefaultPrevented()){return
}d=c(f);
this.activate(j.parent("li"),g);
this.activate(d,d.parent(),function(){j.trigger({type:"shown",relatedTarget:h})
})
},activate:function(f,e,i){var d=e.find("> .active"),h=i&&c.support.transition&&d.hasClass("fade");
function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
f.addClass("active");
if(h){f[0].offsetWidth;
f.addClass("in")
}else{f.removeClass("fade")
}if(f.parent(".dropdown-menu")){f.closest("li.dropdown").addClass("active")
}i&&i()
}h?d.one(c.support.transition.end,g):g();
d.removeClass("in")
}};
var a=c.fn.tab;
c.fn.tab=function(d){return this.each(function(){var f=c(this),e=f.data("tab");
if(!e){f.data("tab",(e=new b(this)))
}if(typeof d=="string"){e[d]()
}})
};
c.fn.tab.Constructor=b;
c.fn.tab.noConflict=function(){c.fn.tab=a;
return this
};
c(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();
c(this).tab("show")
})
}(window.jQuery);
!function(c){var b=function(e,d){this.$element=c(e);
this.options=c.extend({},c.fn.button.defaults,d)
};
b.prototype.setState=function(g){var i="disabled",e=this.$element,f=e.data(),h=e.is("input")?"val":"html";
g=g+"Text";
f.resetText||e.data("resetText",e[h]());
e[h](f[g]||this.options[g]);
setTimeout(function(){g=="loadingText"?e.addClass(i).attr(i,i):e.removeClass(i).prop(i,false)
},0)
};
b.prototype.toggle=function(){var d=this.$element.closest('[data-toggle="buttons-radio"]');
d&&d.find(".active").removeClass("active");
this.$element.toggleClass("active")
};
var a=c.fn.button;
c.fn.button=function(d){return this.each(function(){var g=c(this),f=g.data("button"),e=typeof d=="object"&&d;
if(!f){g.data("button",(f=new b(this,e)))
}if(d=="toggle"){f.toggle()
}else{if(d){f.setState(d)
}}})
};
c.fn.button.defaults={loadingText:"loading..."};
c.fn.button.Constructor=b;
c.fn.button.noConflict=function(){c.fn.button=a;
return this
};
c(document).on("click.button.data-api","[data-toggle^=button]",function(f){var d=c(f.target);
if(!d.hasClass("btn")){d=d.closest(".btn")
}d.button("toggle")
})
}(window.jQuery);
!function(b){var c=function(e,d){this.$element=b(e);
this.options=b.extend({},b.fn.typeahead.defaults,d);
this.matcher=this.options.matcher||this.matcher;
this.sorter=this.options.sorter||this.sorter;
this.highlighter=this.options.highlighter||this.highlighter;
this.updater=this.options.updater||this.updater;
this.source=this.options.source;
this.$menu=b(this.options.menu);
this.shown=false;
this.listen()
};
c.prototype={constructor:c,select:function(){var d=this.$menu.find(".active").attr("data-value");
this.$element.val(this.updater(d)).change();
return this.hide()
},updater:function(d){return d
},show:function(){var d=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});
this.$menu.insertAfter(this.$element).css({top:d.top+d.height,left:d.left}).show();
this.shown=true;
return this
},hide:function(){this.$menu.hide();
this.shown=false;
return this
},lookup:function(e){var d;
this.query=this.$element.val();
if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this
}d=b.isFunction(this.source)?this.source(this.query,b.proxy(this.process,this)):this.source;
return d?this.process(d):this
},process:function(d){var e=this;
d=b.grep(d,function(f){return e.matcher(f)
});
d=this.sorter(d);
if(!d.length){return this.shown?this.hide():this
}return this.render(d.slice(0,this.options.items)).show()
},matcher:function(d){return ~d.toLowerCase().indexOf(this.query.toLowerCase())
},sorter:function(f){var g=[],e=[],d=[],h;
while(h=f.shift()){if(!h.toLowerCase().indexOf(this.query.toLowerCase())){g.push(h)
}else{if(~h.indexOf(this.query)){e.push(h)
}else{d.push(h)
}}}return g.concat(e,d)
},highlighter:function(d){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
return d.replace(new RegExp("("+e+")","ig"),function(f,g){return"<strong>"+g+"</strong>"
})
},render:function(d){var e=this;
d=b(d).map(function(f,g){f=b(e.options.item).attr("data-value",g);
f.find("a").html(e.highlighter(g));
return f[0]
});
d.first().addClass("active");
this.$menu.html(d);
return this
},next:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.next();
if(!d.length){d=b(this.$menu.find("li")[0])
}d.addClass("active")
},prev:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.prev();
if(!d.length){d=this.$menu.find("li").last()
}d.addClass("active")
},listen:function(){this.$element.on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));
if(this.eventSupported("keydown")){this.$element.on("keydown",b.proxy(this.keydown,this))
}this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this))
},eventSupported:function(d){var e=d in this.$element;
if(!e){this.$element.setAttribute(d,"return;");
e=typeof this.$element[d]==="function"
}return e
},move:function(d){if(!this.shown){return
}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();
break;
case 38:d.preventDefault();
this.prev();
break;
case 40:d.preventDefault();
this.next();
break
}d.stopPropagation()
},keydown:function(d){this.suppressKeyPressRepeat=~b.inArray(d.keyCode,[40,38,9,13,27]);
this.move(d)
},keypress:function(d){if(this.suppressKeyPressRepeat){return
}this.move(d)
},keyup:function(d){switch(d.keyCode){case 40:case 38:case 16:case 17:case 18:break;
case 9:case 13:if(!this.shown){return
}this.select();
break;
case 27:if(!this.shown){return
}this.hide();
break;
default:this.lookup()
}d.stopPropagation();
d.preventDefault()
},blur:function(f){var d=this;
setTimeout(function(){d.hide()
},150)
},click:function(d){d.stopPropagation();
d.preventDefault();
this.select()
},mouseenter:function(d){this.$menu.find(".active").removeClass("active");
b(d.currentTarget).addClass("active")
}};
var a=b.fn.typeahead;
b.fn.typeahead=function(d){return this.each(function(){var g=b(this),f=g.data("typeahead"),e=typeof d=="object"&&d;
if(!f){g.data("typeahead",(f=new c(this,e)))
}if(typeof d=="string"){f[d]()
}})
};
b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};
b.fn.typeahead.Constructor=c;
b.fn.typeahead.noConflict=function(){b.fn.typeahead=a;
return this
};
b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(f){var d=b(this);
if(d.data("typeahead")){return
}f.preventDefault();
d.typeahead(d.data())
})
}(window.jQuery);
!function(c){var b=function(e,d){this.init("tooltip",e,d)
};
b.prototype={constructor:b,init:function(k,h,f){var l,d,j,e,g;
this.type=k;
this.$element=c(h);
this.options=this.getOptions(f);
this.enabled=true;
j=this.options.trigger.split(" ");
for(g=j.length;
g--;
){e=j[g];
if(e=="click"){this.$element.on("click."+this.type,this.options.selector,c.proxy(this.toggle,this))
}else{if(e!="manual"){l=e=="hover"?"mouseenter":"focus";
d=e=="hover"?"mouseleave":"blur";
this.$element.on(l+"."+this.type,this.options.selector,c.proxy(this.enter,this));
this.$element.on(d+"."+this.type,this.options.selector,c.proxy(this.leave,this))
}}}this.options.selector?(this._options=c.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
},getOptions:function(d){d=c.extend({},c.fn[this.type].defaults,this.$element.data(),d);
if(d.delay&&typeof d.delay=="number"){d.delay={show:d.delay,hide:d.delay}
}return d
},enter:function(f){var d=c(f.currentTarget)[this.type](this._options).data(this.type);
if(!d.options.delay||!d.options.delay.show){return d.show()
}clearTimeout(this.timeout);
d.hoverState="in";
this.timeout=setTimeout(function(){if(d.hoverState=="in"){d.show()
}},d.options.delay.show)
},leave:function(f){var d=c(f.currentTarget)[this.type](this._options).data(this.type);
if(this.timeout){clearTimeout(this.timeout)
}if(!d.options.delay||!d.options.delay.hide){return d.hide()
}d.hoverState="out";
this.timeout=setTimeout(function(){if(d.hoverState=="out"){d.hide()
}},d.options.delay.hide)
},show:function(){var i,k,g,j,d,h,f=c.Event("show");
if(this.hasContent()&&this.enabled){this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}i=this.tip();
this.setContent();
if(this.options.animation){i.addClass("fade")
}d=typeof this.options.placement=="function"?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement;
i.detach().css({top:0,left:0,display:"block"});
this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element);
k=this.getPosition();
g=i[0].offsetWidth;
j=i[0].offsetHeight;
switch(d){case"bottom":h={top:k.top+k.height,left:k.left+k.width/2-g/2};
break;
case"top":h={top:k.top-j,left:k.left+k.width/2-g/2};
break;
case"top-left":h={top:k.top-j,left:k.left+20-g/2};
break;
case"left":h={top:k.top+k.height/2-j/2,left:k.left-g};
break;
case"right":h={top:k.top+k.height/2-j/2,left:k.left+k.width};
break
}this.applyPlacement(h,d);
this.$element.trigger("shown")
}},applyPlacement:function(g,h){var i=this.tip(),e=i[0].offsetWidth,l=i[0].offsetHeight,d,j,k,f;
i.offset(g).addClass(h).addClass("in");
d=i[0].offsetWidth;
j=i[0].offsetHeight;
if((h=="top"||h=="top-left")&&j!=l){g.top=g.top+l-j;
f=true
}if(h=="bottom"||h=="top"||h=="top-left"){k=0;
if(g.left<0){k=g.left*-2;
g.left=0;
i.offset(g);
d=i[0].offsetWidth;
j=i[0].offsetHeight
}this.replaceArrow(k-e+d,d,"left")
}else{this.replaceArrow(j-l,j,"top")
}if(f){i.offset(g)
}},replaceArrow:function(f,e,d){this.arrow().css(d,f?(50*(1-f/e)+"%"):"")
},setContent:function(){var e=this.tip(),d=this.getTitle();
e.find(".tooltip-inner")[this.options.html?"html":"text"](d).html(e.find(".tooltip-inner").html().replace(/\r/g,"<br>"));
e.removeClass("fade in top bottom left right top-left")
},hide:function(){var d=this,g=this.tip(),f=c.Event("hide");
this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}g.removeClass("in");
function h(){var e=setTimeout(function(){g.off(c.support.transition.end).detach()
},500);
g.one(c.support.transition.end,function(){clearTimeout(e);
g.detach()
})
}c.support.transition&&this.$tip.hasClass("fade")?h():g.detach();
this.$element.trigger("hidden");
return this
},fixTitle:function(){var d=this.$element;
if(d.attr("title")||typeof(d.attr("data-original-title"))!="string"){d.attr("data-original-title",d.attr("title")||"").attr("title","")
}},hasContent:function(){return this.getTitle()
},getPosition:function(){var d=this.$element[0];
return c.extend({},(typeof d.getBoundingClientRect=="function")?d.getBoundingClientRect():{width:d.offsetWidth,height:d.offsetHeight},this.$element.offset())
},getTitle:function(){var f,d=this.$element,e=this.options;
f=d.attr("data-original-title")||(typeof e.title=="function"?e.title.call(d[0]):e.title);
return f
},tip:function(){return this.$tip=this.$tip||c(this.options.template)
},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},validate:function(){if(!this.$element[0].parentNode){this.hide();
this.$element=null;
this.options=null
}},enable:function(){this.enabled=true
},disable:function(){this.enabled=false
},toggleEnabled:function(){this.enabled=!this.enabled
},toggle:function(f){var d=f?c(f.currentTarget)[this.type](this._options).data(this.type):this;
d.tip().hasClass("in")?d.hide():d.show()
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}};
var a=c.fn.tooltip;
c.fn.tooltip=function(d){return this.each(function(){var g=c(this),f=g.data("tooltip"),e=typeof d=="object"&&d;
if(!f){g.data("tooltip",(f=new b(this,e)))
}if(typeof d=="string"){f[d]()
}})
};
c.fn.tooltip.Constructor=b;
c.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};
c.fn.tooltip.noConflict=function(){c.fn.tooltip=a;
return this
}
}(window.jQuery);