function Aa(a,b,c,d){var e=j;if(a===b)return j;else if(N(b)&&E(a))return s(b).test(a);else if(L(b))return b.apply(c,d);else if(ja(b)&&ka(a)){y(b,function(g){Aa(a[g],b[g],c,[a[g],a])||(e=m)});return o.keys(b).length>0&&e}else return I(a)===I(b)}function T(a,b,c,d){return G(b)?a:L(b)?b.apply(c,d||[]):L(a[b])?a[b].call(a):a[b]}
function U(a,b,c,d,e){var g,f;if(c<0)c=a.length+c;f=isNaN(c)?0:c;for(c=d===j?a.length+f:a.length;f<c;){g=f%a.length;if(!(g in a)&&e===j)return Ba(a,b,f,d);else if(b.call(a,a[g],g,a)===m)break;f++}}function Ba(a,b,c){var d=[],e;for(e in a)e in a&&e>>>0==e&&e!=4294967295&&e>=c&&d.push(parseInt(e));d.sort().each(function(g){return b.call(a,a[g],g,a)});return a}function Ca(a,b,c,d,e){var g,f;U(a,function(i,h,l){if(Aa(i,b,l,[i,h,l])){g=i;f=h;return m}},c,d);return e?f:g}
function Fa(a,b){var c=[],d={},e,g;U(a,function(f,i){g=b?T(f,b,a,[f,i,a]):f;e=I(g);if(!(e in d&&(typeof f!=="function"||f===d[e]))){d[e]=g;c.push(f)}});return c}function Ga(a,b,c){var d=[],e={};b.each(function(g){e[I(g)]=g});a.each(function(g){var f=I(g);if((f in e&&(typeof g!=="function"||g===e[f]))!=c){delete e[f];d.push(g)}});return d}function Ha(a,b,c){b=b||Infinity;c=c||0;var d=[];U(a,function(e){if(pa(e)&&c<b)d=d.concat(Ha(e,b,c+1));else d.push(e)});return d}
function Ia(a){var b=[];A(a,function(c){b=b.concat(c)});return b}function Ja(a,b,c,d){var e=c==="max",g=c==="min",f=e?-Infinity:Infinity,i=[];y(a,function(h){var l=a[h];h=T(l,b,a,d?[l,parseInt(h),a]:[]);if(h===f)i.push(l);else if(e&&h>f||g&&h<f){i=[l];f=h}});return i}function Ka(a){if(r[La])a=a.toLowerCase();return a.replace(r[Ma],"")}function Na(a,b){var c=a.charAt(b);return(r[Oa]||{})[c]||c}function Pa(a){var b=r[Qa];return a?b.indexOf(a):k}
var Qa="AlphanumericSortOrder",Ma="AlphanumericSortIgnore",La="AlphanumericSortIgnoreCase",Oa="AlphanumericSortEquivalents";x(r,m,m,{create:function(){var a=[];A(arguments,function(b){if(b&&b.callee)b=A(b);a=a.concat(b)});return a}});
x(r,j,m,{find:function(a,b,c){return Ca(this,a,b,c)},findAll:function(a,b,c){var d=[];U(this,function(e,g,f){Aa(e,a,f,[e,g,f])&&d.push(e)},b,c);return d},findIndex:function(a,b,c){a=Ca(this,a,b,c,j);return G(a)?-1:a},count:function(a){if(G(a))return this.length;return this.findAll(a).length},removeAt:function(a,b){if(G(a))return this;if(G(b))b=a;for(var c=0;c<=b-a;c++)this.splice(a,1);return this},include:function(a,b){return this.clone().add(a,b)},exclude:function(){return r.prototype.remove.apply(this.clone(),
arguments)},clone:function(){return oa([],this)},unique:function(a){return Fa(this,a)},flatten:function(a){return Ha(this,a)},union:function(){return Fa(this.concat(Ia(arguments)))},intersect:function(){return Ga(this,Ia(arguments),m)},subtract:function(){return Ga(this,Ia(arguments),j)},at:function(){return ga(this,arguments)},first:function(a){if(G(a))return this[0];if(a<0)a=0;return this.slice(0,a)},last:function(a){if(G(a))return this[this.length-1];return this.slice(this.length-a<0?0:this.length-
a)},from:function(a){return this.slice(a)},to:function(a){if(G(a))a=this.length;return this.slice(0,a)},min:function(a){return Fa(Ja(this,a,"min",j))},max:function(a){return Fa(Ja(this,a,"max",j))},least:function(){var a=Ha(Ja(this.groupBy.apply(this,arguments),"length","min"));return a.length===this.length?[]:Fa(a)},most:function(){var a=Ha(Ja(this.groupBy.apply(this,arguments),"length","max"));return a.length===this.length?[]:Fa(a)},sum:function(a){a=a?this.map(a):this;return a.length>0?a.reduce(function(b,
c){return b+c}):0},average:function(a){a=a?this.map(a):this;return a.length>0?a.sum()/a.length:0},inGroups:function(a,b){var c=arguments.length>1,d=this,e=[],g=P(this.length/a,void 0,"ceil");O(0,a-1,function(f){f=f*g;var i=d.slice(f,f+g);c&&i.length<g&&O(1,g-i.length,function(){i=i.add(b)});e.push(i)});return e},inGroupsOf:function(a,b){var c=[],d=this.length,e=this,g;if(d===0||a===0)return e;if(G(a))a=1;if(G(b))b=k;O(0,P(d/a,void 0,"ceil")-1,function(f){for(g=e.slice(a*f,a*f+a);g.length<a;)g.push(b);
c.push(g)});return c},isEmpty:function(){return this.compact().length==0},sortBy:function(a,b){var c=this.clone();c.sort(function(d,e){var g,f;g=T(d,a,c,[d]);f=T(e,a,c,[e]);if(E(g)&&E(f)){g=g;f=f;var i,h,l,n,p=0,q=0;g=Ka(g);f=Ka(f);do{l=Na(g,p);n=Na(f,p);i=Pa(l);h=Pa(n);if(i===-1||h===-1){i=g.charCodeAt(p)||k;h=f.charCodeAt(p)||k}l=l!==g.charAt(p);n=n!==f.charAt(p);if(l!==n&&q===0)q=l-n;p+=1}while(i!=k&&h!=k&&i===h);g=i===h?q:i<h?-1:1}else g=g<f?-1:g>f?1:0;return g*(b?-1:1)});return c},randomize:function(){for(var a=
this.concat(),b,c,d=a.length;d;b=parseInt(w.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a},zip:function(){var a=A(arguments);return this.map(function(b,c){return[b].concat(a.map(function(d){return c in d?d[c]:k}))})},sample:function(a){var b=[],c=this.clone(),d;for(a>0||(a=1);b.length<a;){d=Q(w.random()*(c.length-1));b.push(c[d]);c.removeAt(d);if(c.length==0)break}return arguments.length>0?b:b[0]},each:function(a,b,c){U(this,a,b,c,j);return this},add:function(a,b){if(!M(v(b))||isNaN(b)||b==-1)b=
this.length;else if(b<-1)b+=1;r.prototype.splice.apply(this,[b,0].concat(a));return this},remove:function(){var a,b=this;A(arguments,function(c){for(a=0;a<b.length;)if(Aa(b[a],c,b,[b[a],a,b]))b.splice(a,1);else a++});return b},compact:function(a){var b=[];U(this,function(c){if(pa(c))b.push(c.compact());else if(a&&c)b.push(c);else!a&&c!=k&&c.valueOf()===c.valueOf()&&b.push(c)});return b},groupBy:function(a,b){var c=this,d={},e;U(c,function(g,f){e=T(g,a,c,[g,f,c]);d[e]||(d[e]=[]);d[e].push(g)});b&&
y(d,b);return d},none:function(){return!this.any.apply(this,arguments)}});x(r,j,m,{all:r.prototype.every,any:r.prototype.some,insert:r.prototype.add});function Ra(a,b){D(o,m,m,a,function(c,d){c[d]=function(e,g){var f;f=r.prototype[d].call(o.keys(e),function(i){return b?T(e[i],g,e,[i,e[i],e]):Aa(e[i],g,e,[i,e[i],e])});if(pa(f))f=f.reduce(function(i,h){i[h]=e[h];return i},{});return f}});ma(a,V)}
x(o,m,m,{map:function(a,b){return o.keys(a).reduce(function(c,d){c[d]=T(a[d],b,a,[d,a[d],a]);return c},{})},reduce:function(a){var b=o.keys(a).map(function(c){return a[c]});return b.reduce.apply(b,A(arguments).slice(1))}});(function(){D(r,j,function(){var a=arguments;return a.length>0&&!L(a[0])},"map,every,all,some,any,none,filter",function(a,b){a[b]=function(c){return this[b](function(d,e){return b==="map"?T(d,c,this,[d,e,this]):Aa(d,c,this,[d,e,this])})}})})();
(function(){r[Qa]="A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function(b){return b+b.toLowerCase()}).join("");var a={};na("A\u00c1\u00c0\u00c2\u00c3\u00c4,C\u00c7,E\u00c9\u00c8\u00ca\u00cb,I\u00cd\u00cc\u0130\u00ce\u00cf,O\u00d3\u00d2\u00d4\u00d5\u00d6,S\u00df,U\u00da\u00d9\u00db\u00dc",
function(b){var c=b.charAt(0);U(b.slice(1).split(""),function(d){a[d]=c;a[d.toLowerCase()]=c.toLowerCase()})});r[La]=j;r[Oa]=a})();Ra("any,all,none,count,find,findAll");Ra("sum,average,min,max,least,most",j);ma("map,reduce",V);