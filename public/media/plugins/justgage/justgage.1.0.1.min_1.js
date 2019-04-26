/**
 * JustGage - a handy JavaScript plugin for generating and animating nice & clean dashboard gauges.
 * Copyright (c) 2012 Bojan Djuricic - pindjur(at)gmail(dot)com | http://www.madcog.com
 * Licensed under MIT.
 * Date: 31/07/2012
 * @author Bojan Djuricic  (@Toorshia)
 * @version 1.0
 *
 * http://www.justgage.com
 */
 
JustGage=function(x){if(!x.id){alert("Missing id parameter for gauge!");return false}if(!document.getElementById(x.id)){alert('No element with id: "'+x.id+'" found!');return false}this.config={id:x.id,title:(x.title)?x.title:"Title",titleFontColor:(x.titleFontColor)?x.titleFontColor:"#999999",value:(x.value)?x.value:0,valueFontColor:(x.valueFontColor)?x.valueFontColor:"#010101",min:(x.min)?x.min:0,max:(x.max)?x.max:100,showMinMax:(x.showMinMax!=null)?x.showMinMax:true,gaugeWidthScale:(x.gaugeWidthScale)?x.gaugeWidthScale:1,gaugeColor:(x.gaugeColor)?x.gaugeColor:"#edebeb",label:(x.label)?x.label:"",showInnerShadow:(x.showInnerShadow!=null)?x.showInnerShadow:true,shadowOpacity:(x.shadowOpacity)?x.shadowOpacity:0.2,shadowSize:(x.shadowSize)?x.shadowSize:5,shadowVerticalOffset:(x.shadowVerticalOffset)?x.shadowVerticalOffset:3,levelColors:(x.levelColors)?x.levelColors:percentColors,levelColorsGradient:(x.levelColorsGradient!=null)?x.levelColorsGradient:true,labelFontColor:(x.labelFontColor)?x.labelFontColor:"#b3b3b3",startAnimationTime:(x.startAnimationTime)?x.startAnimationTime:700,startAnimationType:(x.startAnimationType)?x.startAnimationType:">",refreshAnimationTime:(x.refreshAnimationTime)?x.refreshAnimationTime:700,refreshAnimationType:(x.refreshAnimationType)?x.refreshAnimationType:">"};if(x.value>this.config.max){this.config.value=this.config.max}if(x.value<this.config.min){this.config.value=this.config.min}this.originalValue=x.value;this.canvas=Raphael(this.config.id,"100%","100%");var d=getStyle(document.getElementById(this.config.id),"width").slice(0,-2)*1;var q=getStyle(document.getElementById(this.config.id),"height").slice(0,-2)*1;var c,l;if((d/q)>1.25){c=1.25*q;l=q}else{c=d;l=d/1.25}var i=(d-c)/2;var g=(q-l)/2;var s=((l/8)>10)?(l/10):10;var n=i+c/2;var m=g+l/6.5;var k=((l/6.4)>16)?(l/6.4):16;var r=i+c/2;var p=g+l/1.4;var b=((l/16)>10)?(l/16):10;var f=i+c/2;var e=p+k/2+6;var j=((l/16)>10)?(l/16):10;var w=i+(c/10)+(c/6.666666666666667*this.config.gaugeWidthScale)/2;var v=g+l/1.126760563380282;var h=((l/16)>10)?(l/16):10;var u=i+c-(c/10)-(c/6.666666666666667*this.config.gaugeWidthScale)/2;var t=g+l/1.126760563380282;this.params={canvasW:d,canvasH:q,widgetW:c,widgetH:l,dx:i,dy:g,titleFontSize:s,titleX:n,titleY:m,valueFontSize:k,valueX:r,valueY:p,labelFontSize:b,labelX:f,labelY:e,minFontSize:j,minX:w,minY:v,maxFontSize:h,maxX:u,maxY:t};this.canvas.customAttributes.pki=function(K,L,N,E,O,F,D,y){var B=(1-(K-L)/(N-L))*Math.PI,G=E/2-E/10,J=G-E/6.666666666666667*y,C=E/2+F,A=O/1.25+D,H=E/2+F+G*Math.cos(B),P=O-(O-A)+D-G*Math.sin(B),M=E/2+F+J*Math.cos(B),z=O-(O-A)+D-J*Math.sin(B),I;I+="M"+(C-J)+","+A+" ";I+="L"+(C-G)+","+A+" ";I+="A"+G+","+G+" 0 0,1 "+H+","+P+" ";I+="L"+M+","+z+" ";I+="A"+J+","+J+" 0 0,0 "+(C-J)+","+A+" ";I+="z ";return{path:I}};this.gauge=this.canvas.path().attr({stroke:"none",fill:this.config.gaugeColor,pki:[this.config.max,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]});this.gauge.id=this.config.id+"-gauge";this.level=this.canvas.path().attr({stroke:"none",fill:getColorForPercentage((this.config.value-this.config.min)/(this.config.max-this.config.min),this.config.levelColors,this.config.levelColorsGradient),pki:[this.config.min,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]});this.level.id=this.config.id+"-level";this.txtTitle=this.canvas.text(this.params.titleX,this.params.titleY,this.config.title);this.txtTitle.attr({"font-size":this.params.titleFontSize,"font-weight":"bold","font-family":"Arial",fill:this.config.titleFontColor,"fill-opacity":"1"});this.txtTitle.id=this.config.id+"-txttitle";this.txtValue=this.canvas.text(this.params.valueX,this.params.valueY,this.originalValue);this.txtValue.attr({"font-size":this.params.valueFontSize,"font-weight":"600","font-family":"Arial",fill:this.config.valueFontColor,"fill-opacity":"0"});this.txtValue.id=this.config.id+"-txtvalue";this.txtLabel=this.canvas.text(this.params.labelX,this.params.labelY,this.config.label);this.txtLabel.attr({"font-size":this.params.labelFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":"0"});this.txtLabel.id=this.config.id+"-txtlabel";this.txtMin=this.canvas.text(this.params.minX,this.params.minY,this.config.min);this.txtMin.attr({"font-size":this.params.minFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":(this.config.showMinMax==true)?"1":"0"});this.txtMin.id=this.config.id+"-txtmin";this.txtMax=this.canvas.text(this.params.maxX,this.params.maxY,this.config.max);this.txtMax.attr({"font-size":this.params.maxFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":(this.config.showMinMax==true)?"1":"0"});this.txtMax.id=this.config.id+"-txtmax";var a=this.canvas.canvas.childNodes[1];var o="http://www.w3.org/2000/svg";if(ie<9){onCreateElementNsReady(function(){this.generateShadow()})}else{this.generateShadow(o,a)}this.level.animate({pki:[this.config.value,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]},this.config.startAnimationTime,this.config.startAnimationType);this.txtValue.animate({"fill-opacity":"1"},this.config.startAnimationTime,this.config.startAnimationType);this.txtLabel.animate({"fill-opacity":"1"},this.config.startAnimationTime,this.config.startAnimationType)};JustGage.prototype.refresh=function(b){originalVal=b;if(b>this.config.max){b=this.config.max}if(b<this.config.min){b=this.config.min}var a=getColorForPercentage((b-this.config.min)/(this.config.max-this.config.min),this.config.levelColors,this.config.levelColorsGradient);this.canvas.getById(this.config.id+"-txtvalue").attr({text:originalVal});this.canvas.getById(this.config.id+"-level").animate({pki:[b,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale],fill:a},this.config.refreshAnimationTime,this.config.refreshAnimationType)};var percentColors=["#a9d70b","#f9c802","#ff0000"];JustGage.prototype.generateShadow=function(f,e){var h=document.createElementNS(f,"filter");h.setAttribute("id",this.config.id+"-inner-shadow");e.appendChild(h);var i=document.createElementNS(f,"feOffset");i.setAttribute("dx",0);i.setAttribute("dy",this.config.shadowVerticalOffset);h.appendChild(i);var g=document.createElementNS(f,"feGaussianBlur");g.setAttribute("result","offset-blur");g.setAttribute("stdDeviation",this.config.shadowSize);h.appendChild(g);var d=document.createElementNS(f,"feComposite");d.setAttribute("operator","out");d.setAttribute("in","SourceGraphic");d.setAttribute("in2","offset-blur");d.setAttribute("result","inverse");h.appendChild(d);var c=document.createElementNS(f,"feFlood");c.setAttribute("flood-color","black");c.setAttribute("flood-opacity",this.config.shadowOpacity);c.setAttribute("result","color");h.appendChild(c);var b=document.createElementNS(f,"feComposite");b.setAttribute("operator","in");b.setAttribute("in","color");b.setAttribute("in2","inverse");b.setAttribute("result","shadow");h.appendChild(b);var a=document.createElementNS(f,"feComposite");a.setAttribute("operator","over");a.setAttribute("in","shadow");a.setAttribute("in2","SourceGraphic");h.appendChild(a);if(this.config.showInnerShadow==true){this.canvas.canvas.childNodes[2].setAttribute("filter","url(#"+this.config.id+"-inner-shadow)");this.canvas.canvas.childNodes[3].setAttribute("filter","url(#"+this.config.id+"-inner-shadow)")}};var getColorForPercentage=function(b,c,d){var a=c.length;if(a===1){return c[0]}var f=(d)?(1/(a-1)):(1/a);var g=new Array();for(var n=0;n<c.length;n++){var h=(d)?(f*n):(f*(n+1));var r=parseInt((cutHex(c[n])).substring(0,2),16);var e=parseInt((cutHex(c[n])).substring(2,4),16);var k=parseInt((cutHex(c[n])).substring(4,6),16);g[n]={pct:h,color:{r:r,g:e,b:k}}}if(b==0){return"rgb("+[g[0].color.r,g[0].color.g,g[0].color.b].join(",")+")"}for(var n=0;n<g.length;n++){if(b<=g[n].pct){if(d==true){var q=g[n-1];var o=g[n];var j=o.pct-q.pct;var m=(b-q.pct)/j;var s=1-m;var p=m;var l={r:Math.floor(q.color.r*s+o.color.r*p),g:Math.floor(q.color.g*s+o.color.g*p),b:Math.floor(q.color.b*s+o.color.b*p)};return"rgb("+[l.r,l.g,l.b].join(",")+")"}else{return"rgb("+[g[n].color.r,g[n].color.g,g[n].color.b].join(",")+")"}}}};function getRandomInt(b,a){return Math.floor(Math.random()*(a-b+1))+b}function cutHex(a){return(a.charAt(0)=="#")?a.substring(1,7):a}function getStyle(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle){c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}else{if(a.currentStyle){b=b.replace(/\-(\w)/g,function(d,e){return e.toUpperCase()});c=a.currentStyle[b]}}return c}function onCreateElementNsReady(a){if(document.createElementNS!=undefined){a()}else{setTimeout(function(){onCreateElementNsReady(a)},100)}}var ie=(function(){var c,a=3,d=document.createElement("div"),b=d.getElementsByTagName("i");while(d.innerHTML="<!--[if gt IE "+(++a)+"]><i></i><![endif]-->",b[0]){}return a>4?a:c}());