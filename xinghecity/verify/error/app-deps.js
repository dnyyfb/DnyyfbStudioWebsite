var trackingId=$("meta[name=ga-tracking-id]").attr("content");void 0!==trackingId&&(!function(e,t,s,a,n,c,r){e.GoogleAnalyticsObject=n,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,c=t.createElement(s),r=t.getElementsByTagName(s)[0],c.async=1,c.src="//www.google-analytics.com/analytics.js",r.parentNode.insertBefore(c,r)}(window,document,"script",0,"ga"),ga("create",trackingId,"auto"),ga("send","pageview"),$(document).on("turbolinks:load",function(){ga("set","location",document.location.href),ga("send","pageview")})),function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.Lang=t()}(this,function(){"use strict";function e(e){return"-Inf"===e?-1/0:"+Inf"===e||"Inf"===e||"*"===e?1/0:parseInt(e,10)}var t=/^({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])$/,s=/({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])/,a="en",n=function(e){e=e||{},this.locale=e.locale||function(){if("undefined"!=typeof document&&document.documentElement)return document.documentElement.lang}()||a,this.fallback=e.fallback,this.messages=e.messages};return n.prototype.setMessages=function(e){this.messages=e},n.prototype.getLocale=function(){return this.locale||this.fallback},n.prototype.setLocale=function(e){this.locale=e},n.prototype.getFallback=function(){return this.fallback},n.prototype.setFallback=function(e){this.fallback=e},n.prototype.has=function(e,t){return!("string"!=typeof e||!this.messages)&&null!==this._getMessage(e,t)},n.prototype.get=function(e,t,s){if(!this.has(e,s))return e;var a=this._getMessage(e,s);return null===a?e:(t&&(a=this._applyReplacements(a,t)),a)},n.prototype.trans=function(e,t){return this.get(e,t)},n.prototype.choice=function(e,t,a,n){(a=void 0!==a?a:{}).count=t;var c=this.get(e,a,n);if(null==c)return c;for(var r=c.split("|"),o=[],i=0;i<r.length;i++)if(r[i]=r[i].trim(),s.test(r[i])){var u=r[i].split(/\s/);o.push(u.shift()),r[i]=u.join(" ")}if(1===r.length)return c;for(var l=0;l<o.length;l++)if(this._testInterval(t,o[l]))return r[l];return r[this._getPluralForm(t)]},n.prototype.transChoice=function(e,t,s){return this.choice(e,t,s)},n.prototype._parseKey=function(e,t){if("string"!=typeof e||"string"!=typeof t)return null;var s=e.split("."),a=s[0].replace(/\//g,".");return{source:t+"."+a,sourceFallback:this.getFallback()+"."+a,entries:s.slice(1)}},n.prototype._getMessage=function(e,t){if(t=t||this.getLocale(),e=this._parseKey(e,t),void 0===this.messages[e.source]&&void 0===this.messages[e.sourceFallback])return null;for(var s=this.messages[e.source],a=e.entries.slice(),n="";a.length&&void 0!==s;){void 0!==s[n=n?n.concat(".",a.shift()):a.shift()]&&(s=s[n],n="")}if("string"!=typeof s&&this.messages[e.sourceFallback])for(s=this.messages[e.sourceFallback],a=e.entries.slice(),n="";a.length&&void 0!==s;){s[n=n?n.concat(".",a.shift()):a.shift()]&&(s=s[n],n="")}return"string"!=typeof s?null:s},n.prototype._findMessageInTree=function(e,t){for(;e.length&&void 0!==t;){var s=e.join(".");if(t[s]){t=t[s];break}t=t[e.shift()]}return t},n.prototype._applyReplacements=function(e,t){for(var s in t)e=e.replace(new RegExp(":"+s,"gi"),function(e){var a=t[s];return e===e.toUpperCase()?a.toUpperCase():e===e.replace(/\w/i,function(e){return e.toUpperCase()})?a.charAt(0).toUpperCase()+a.slice(1):a});return e},n.prototype._testInterval=function(s,a){if("string"!=typeof a)throw"Invalid interval: should be a string.";var n=(a=a.trim()).match(t);if(!n)throw"Invalid interval: "+a;if(!n[2]){var c=(n=n.filter(function(e){return!!e}))[1],r=e(n[2]);r===1/0&&(r=-1/0);var o=e(n[3]),i=n[4];return("["===c?s>=r:s>r)&&("]"===i?s<=o:s<o)}for(var u=n[2].split(","),l=0;l<u.length;l++)if(parseInt(u[l],10)===s)return!0;return!1},n.prototype._getPluralForm=function(e){switch(this.locale){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1==e?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===e||1===e?0:1;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2;case"cs":case"sk":return 1==e?0:e>=2&&e<=4?1:2;case"ga":return 1==e?0:2==e?1:2;case"lt":return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2;case"sl":return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3;case"mk":return e%10==1?0:1;case"mt":return 1==e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3;case"lv":return 0===e?0:e%10==1&&e%100!=11?1:2;case"pl":return 1==e?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:2;case"cy":return 1==e?0:2==e?1:8==e||11==e?2:3;case"ro":return 1==e?0:0===e||e%100>0&&e%100<20?1:2;case"ar":return 0===e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5;default:return 0}},n}),function(){"use strict";"function"==typeof Lang&&(Lang=new Lang,Lang.setMessages({}))}();
