!function(){var t,e={5530:function(t,e,o){"use strict";o(9554),o(4747),o(6992),o(1539),o(3948);var r=o(1122),n=(o(4916),o(5306),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.tabHeaderSelector,o=t.tabSelector,r=t.contentSelector,n=t.activeClassSelector,s=t.display,i=document.querySelector(e),u=document.querySelectorAll(o),a=document.querySelectorAll(r);function c(t){return t.replace(/\./,"")}var f=function(){a.forEach((function(t){t.classList.remove("show"),t.classList.add("hide"),t.style.display="none"})),u.forEach((function(t){return t.classList.remove(c(n))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;a[t].classList.remove("hide"),a[t].classList.add("show"),a[t].style.display=s,u[t].classList.add(c(n))},d=function(t){t.preventDefault();var e=t.target.closest(o);u.forEach((function(o,r){t.target&&e&&t.target===o&&(f(),l(r))}))},g=function(){u.forEach((function(t){return t.classList.remove(c(n))})),a.forEach((function(t){return t.style.display="grid"}))};return f(),l(),i.addEventListener("click",d),{resetTabs:g}}),s=function(t){var e=t.accordionHeaderSelector,o=t.accordionSelector,r=t.contentSelector,n=t.activeClassSelector,s=document.querySelector(e),i=document.querySelectorAll(o),u=document.querySelectorAll(r);function a(t){return t.replace(/\./,"")}var c=function(t){u.forEach((function(e,o){o!==t&&(e.classList.remove("show"),i[o].classList.remove(a(n)))}))};function f(t){this.classList.toggle(a(n)),u[t].classList.toggle("show")}s.addEventListener("click",(function(t){var e=t.target.closest(o);i.forEach((function(t,o){e===t&&(c.call(t,o),f.call(t,o))}))})),window.addEventListener("click",(function(t){t.target.closest(o)||(u.forEach((function(t){return t.classList.remove("show")})),i.forEach((function(t){return t.classList.remove(a(n))})))}))},i=(o(2564),{parentSelector:".work__list",targetSelector:".work__button",overlaySelector:".popup",closeBtnSelector:".popup__close",display:"flex"}),u={accordionHeaderSelector:".work__list",accordionSelector:".work__button",contentSelector:".work__item-text",activeClassSelector:".active"},a=function(){return function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.parentSelector,r=e.targetSelector,n=e.overlaySelector,s=e.closeBtnSelector,i=e.display,u=document.querySelectorAll(o),a=document.querySelector(n),c=function(e){e.preventDefault();var o=e.target.closest(r);t=o,e.target&&o&&(a.classList.add("show"),document.body.classList.add("overflowed"),a.style.display=i,a.tabIndex="-1",a.focus(),setTimeout((function(){return a.classList.remove("show")}),500))},f=function(e){function o(t){return t.replace(/\./,"")}var r=o(n),i=o(s);(e.target.classList.contains(r)||e.target.classList.contains(i))&&(a.classList.add("hide"),document.body.classList.remove("overflowed"),t.focus(),setTimeout((function(){a.style.display="none",a.classList.remove("hide")}),500))};u.forEach((function(t){return t.addEventListener("click",c)})),document.addEventListener("click",f)}(i)},c=function(){window.matchMedia("(min-width: 768px)").matches?a():s(u)};window.addEventListener("DOMContentLoaded",(function(){var t,e,o,s,i;t=document.querySelector(".burger"),e=document.querySelector(".nav__list"),t.addEventListener("click",(function(){e.classList.toggle("open")})),o=document.querySelector(".header__content-callback-btn"),s=document.querySelector(".cases__headline"),(i=function(){window.matchMedia("(min-width: 768px)").matches?(o.textContent="Выйти на связь",s.textContent="Кейсы говорят сами за себя"):(o.textContent="Заказать звонок",s.textContent="Наши кейсы")})(),window.addEventListener("resize",i),c(),function(){var t={tabHeaderSelector:".features__tabs",tabSelector:".features__tabs-item",contentSelector:".features__block",activeClassSelector:".active",display:"grid"},e=function(){window.matchMedia("(min-width: 768px)").matches?n(t):n(t).resetTabs()};e(),window.addEventListener("resize",e)}(),new r.Z(".glide",{type:"carousel",startAt:0,perView:4,gap:0,breakpoints:{1600:{perView:3},1200:{perView:2},850:{perView:1}}}).mount()})),[o(9513),o(6028),o(3922)].forEach((function(t){t.keys().forEach((function(e){t(e)}))}))},7235:function(t,e,o){"use strict";o.r(e),e.default="../images/1c.png"},5785:function(t,e,o){"use strict";o.r(e),e.default="../images/77f73b87ae9099f99fe2a5f550b9cd76.png"},6210:function(t,e,o){"use strict";o.r(e),e.default="../images/Cursor.png"},9534:function(t,e,o){"use strict";o.r(e),e.default="../images/GeometryPattrn.png"},9143:function(t,e,o){"use strict";o.r(e),e.default="../images/Logo-copy.png"},818:function(t,e,o){"use strict";o.r(e),e.default="../images/Path.svg"},3929:function(t,e,o){"use strict";o.r(e),e.default="../images/Union.svg"},9834:function(t,e,o){"use strict";o.r(e),e.default="../images/Yandex.png"},9551:function(t,e,o){"use strict";o.r(e),e.default="../images/ales-krivec-4176-unsplash.jpg"},4043:function(t,e,o){"use strict";o.r(e),e.default="../images/ales-krivec-4176-unsplash.png"},8853:function(t,e,o){"use strict";o.r(e),e.default="../images/captcha.png"},2005:function(t,e,o){"use strict";o.r(e),e.default="../images/case-section.png"},9570:function(t,e,o){"use strict";o.r(e),e.default="../images/check.svg"},6449:function(t,e,o){"use strict";o.r(e),e.default="../images/clients-section.png"},2754:function(t,e,o){"use strict";o.r(e),e.default="../images/code-fade.png"},9061:function(t,e,o){"use strict";o.r(e),e.default="../images/contact-section.png"},6231:function(t,e,o){"use strict";o.r(e),e.default="../images/crm-sm.png"},6406:function(t,e,o){"use strict";o.r(e),e.default="../images/crm.png"},2782:function(t,e,o){"use strict";o.r(e),e.default="../images/e-commerce.png"},8693:function(t,e,o){"use strict";o.r(e),e.default="../images/features-section.png"},5918:function(t,e,o){"use strict";o.r(e),e.default="../images/findus-arrow.svg"},6931:function(t,e,o){"use strict";o.r(e),e.default="../images/gabor-juhasz-68424-unsplash.jpg"},3254:function(t,e,o){"use strict";o.r(e),e.default="../images/gabor-juhasz-68424-unsplash.png"},7306:function(t,e,o){"use strict";o.r(e),e.default="../images/header.png"},2411:function(t,e,o){"use strict";o.r(e),e.default="../images/italy-logo.png"},2967:function(t,e,o){"use strict";o.r(e),e.default="../images/logo-robokassa.png"},6153:function(t,e,o){"use strict";o.r(e),e.default="../images/logo.png"},5505:function(t,e,o){"use strict";o.r(e),e.default="../images/logo.svg"},6108:function(t,e,o){"use strict";o.r(e),e.default="../images/love.svg"},6866:function(t,e,o){"use strict";o.r(e),e.default="../images/map.png"},6864:function(t,e,o){"use strict";o.r(e),e.default="../images/mobile-header-sm.png"},4441:function(t,e,o){"use strict";o.r(e),e.default="../images/mobile-header.png"},75:function(t,e,o){"use strict";o.r(e),e.default="../images/novaya-apteka.png"},4197:function(t,e,o){"use strict";o.r(e),e.default="../images/rYPlmArkZL8.png"},3074:function(t,e,o){"use strict";o.r(e),e.default="../images/russ-ward-485776-unsplash.jpg"},4107:function(t,e,o){"use strict";o.r(e),e.default="../images/russ-ward-485776-unsplash.png"},2807:function(t,e,o){"use strict";o.r(e),e.default="../images/sberbank.png"},1944:function(t,e,o){"use strict";o.r(e),e.default="../images/secure-sm.png"},7190:function(t,e,o){"use strict";o.r(e),e.default="../images/secure.png"},6247:function(t,e,o){"use strict";o.r(e),e.default="../images/secure1.png"},2830:function(t,e,o){"use strict";o.r(e),e.default="../images/secure2.png"},6852:function(t,e,o){"use strict";o.r(e),e.default="../images/sharon-mccutcheon-535694-unsplash.jpg"},941:function(t,e,o){"use strict";o.r(e),e.default="../images/sharon-mccutcheon-535694-unsplash.png"},2389:function(t,e,o){"use strict";o.r(e),e.default="../images/shopping-cart.svg"},4081:function(t,e,o){"use strict";o.r(e),e.default="../images/sprite.svg"},2405:function(t,e,o){"use strict";o.r(e),e.default="../images/webpay-sm.png"},5525:function(t,e,o){"use strict";o.r(e),e.default="../images/webpay.png"},4601:function(t,e,o){"use strict";o.r(e),e.default="../images/work-list.svg"},1115:function(t,e,o){"use strict";o.r(e),e.default="../images/work-section.png"},224:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratBold/MontserratBold.eot"},8439:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratBold/MontserratBold.ttf"},4985:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratBold/MontserratBold.woff"},9161:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratBold/MontserratBold.woff2"},3882:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratLight/MontserratLight.eot"},1440:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratLight/MontserratLight.ttf"},3060:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratLight/MontserratLight.woff"},3603:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratLight/MontserratLight.woff2"},391:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratMedium/MontserratMedium.eot"},5793:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratMedium/MontserratMedium.ttf"},747:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratMedium/MontserratMedium.woff"},8934:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratMedium/MontserratMedium.woff2"},5159:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratRegular/MontserratRegular.eot"},3746:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratRegular/MontserratRegular.ttf"},4421:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratRegular/MontserratRegular.woff"},44:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratRegular/MontserratRegular.woff2"},8557:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratSemiBold/MontserratSemiBold.eot"},2962:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratSemiBold/MontserratSemiBold.ttf"},3344:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratSemiBold/MontserratSemiBold.woff"},6099:function(t,e,o){"use strict";o.r(e),e.default="../fonts/MontserratSemiBold/MontserratSemiBold.woff2"},8279:function(t,e,o){"use strict";o.r(e),e.default="../fonts/RobotoLight/RobotoLight.eot"},2163:function(t,e,o){"use strict";o.r(e),e.default="../fonts/RobotoLight/RobotoLight.ttf"},3682:function(t,e,o){"use strict";o.r(e),e.default="../fonts/RobotoLight/RobotoLight.woff"},8921:function(t,e,o){"use strict";o.r(e),e.default="../fonts/RobotoLight/RobotoLight.woff2"},1377:function(t,e,o){"use strict";o.r(e),e.default="../fonts/RobotoMedium/RobotoMedium.eot"},1460:function(t,e,o){"use strict";o.r(e),e.default="../fonts/RobotoMedium/RobotoMedium.ttf"},8848:function(t,e,o){"use strict";o.r(e),e.default="../fonts/RobotoMedium/RobotoMedium.woff"},9524:function(t,e,o){"use strict";o.r(e),e.default="../fonts/RobotoMedium/RobotoMedium.woff2"},6929:function(t,e,o){"use strict";o.r(e),e.default="../fonts/SourceSansProLight/SourceSansProLight.eot"},6771:function(t,e,o){"use strict";o.r(e),e.default="../fonts/SourceSansProLight/SourceSansProLight.ttf"},9638:function(t,e,o){"use strict";o.r(e),e.default="../fonts/SourceSansProLight/SourceSansProLight.woff"},215:function(t,e,o){"use strict";o.r(e),e.default="../fonts/SourceSansProLight/SourceSansProLight.woff2"},645:function(t,e,o){"use strict";o.r(e),e.default="../fonts/TTNormsMedium/TTNormsMedium.eot"},2470:function(t,e,o){"use strict";o.r(e),e.default="../fonts/TTNormsMedium/TTNormsMedium.ttf"},5029:function(t,e,o){"use strict";o.r(e),e.default="../fonts/TTNormsMedium/TTNormsMedium.woff"},2329:function(t,e,o){"use strict";o.r(e),e.default="../fonts/TTNormsMedium/TTNormsMedium.woff2"},6028:function(t,e,o){var r={"./MontserratBold/MontserratBold.eot":224,"./MontserratBold/MontserratBold.ttf":8439,"./MontserratBold/MontserratBold.woff":4985,"./MontserratBold/MontserratBold.woff2":9161,"./MontserratLight/MontserratLight.eot":3882,"./MontserratLight/MontserratLight.ttf":1440,"./MontserratLight/MontserratLight.woff":3060,"./MontserratLight/MontserratLight.woff2":3603,"./MontserratMedium/MontserratMedium.eot":391,"./MontserratMedium/MontserratMedium.ttf":5793,"./MontserratMedium/MontserratMedium.woff":747,"./MontserratMedium/MontserratMedium.woff2":8934,"./MontserratRegular/MontserratRegular.eot":5159,"./MontserratRegular/MontserratRegular.ttf":3746,"./MontserratRegular/MontserratRegular.woff":4421,"./MontserratRegular/MontserratRegular.woff2":44,"./MontserratSemiBold/MontserratSemiBold.eot":8557,"./MontserratSemiBold/MontserratSemiBold.ttf":2962,"./MontserratSemiBold/MontserratSemiBold.woff":3344,"./MontserratSemiBold/MontserratSemiBold.woff2":6099,"./RobotoLight/RobotoLight.eot":8279,"./RobotoLight/RobotoLight.ttf":2163,"./RobotoLight/RobotoLight.woff":3682,"./RobotoLight/RobotoLight.woff2":8921,"./RobotoMedium/RobotoMedium.eot":1377,"./RobotoMedium/RobotoMedium.ttf":1460,"./RobotoMedium/RobotoMedium.woff":8848,"./RobotoMedium/RobotoMedium.woff2":9524,"./SourceSansProLight/SourceSansProLight.eot":6929,"./SourceSansProLight/SourceSansProLight.ttf":6771,"./SourceSansProLight/SourceSansProLight.woff":9638,"./SourceSansProLight/SourceSansProLight.woff2":215,"./TTNormsMedium/TTNormsMedium.eot":645,"./TTNormsMedium/TTNormsMedium.ttf":2470,"./TTNormsMedium/TTNormsMedium.woff":5029,"./TTNormsMedium/TTNormsMedium.woff2":2329};function n(t){var e=s(t);return o(e)}function s(t){if(!o.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id=6028},9513:function(t,e,o){var r={"./1c.png":7235,"./77f73b87ae9099f99fe2a5f550b9cd76.png":5785,"./Cursor.png":6210,"./GeometryPattrn.png":9534,"./Logo-copy.png":9143,"./Path.svg":818,"./Union.svg":3929,"./Yandex.png":9834,"./ales-krivec-4176-unsplash.jpg":9551,"./ales-krivec-4176-unsplash.png":4043,"./captcha.png":8853,"./case-section.png":2005,"./check.svg":9570,"./clients-section.png":6449,"./code-fade.png":2754,"./contact-section.png":9061,"./crm-sm.png":6231,"./crm.png":6406,"./e-commerce.png":2782,"./features-section.png":8693,"./findus-arrow.svg":5918,"./gabor-juhasz-68424-unsplash.jpg":6931,"./gabor-juhasz-68424-unsplash.png":3254,"./header.png":7306,"./italy-logo.png":2411,"./logo-robokassa.png":2967,"./logo.png":6153,"./logo.svg":5505,"./love.svg":6108,"./map.png":6866,"./mobile-header-sm.png":6864,"./mobile-header.png":4441,"./novaya-apteka.png":75,"./rYPlmArkZL8.png":4197,"./russ-ward-485776-unsplash.jpg":3074,"./russ-ward-485776-unsplash.png":4107,"./sberbank.png":2807,"./secure-sm.png":1944,"./secure.png":7190,"./secure1.png":6247,"./secure2.png":2830,"./sharon-mccutcheon-535694-unsplash.jpg":6852,"./sharon-mccutcheon-535694-unsplash.png":941,"./shopping-cart.svg":2389,"./sprite.svg":4081,"./webpay-sm.png":2405,"./webpay.png":5525,"./work-list.svg":4601,"./work-section.png":1115};function n(t){var e=s(t);return o(e)}function s(t){if(!o.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id=9513},2852:function(){},94:function(){},5654:function(){},3922:function(t,e,o){var r={"./favicon.ico":2852,"./robots.txt":94,"./sitemap.xml":5654};function n(t){var e=s(t);return o(e)}function s(t){if(!o.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id=3922}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.m=e,t=[],r.O=function(e,o,n,s){if(!o){var i=1/0;for(c=0;c<t.length;c++){o=t[c][0],n=t[c][1],s=t[c][2];for(var u=!0,a=0;a<o.length;a++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](o[a])}))?o.splice(a--,1):(u=!1,s<i&&(i=s));u&&(t.splice(c--,1),e=n())}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,n,s]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,i=o[0],u=o[1],a=o[2],c=0;for(n in u)r.o(u,n)&&(r.m[n]=u[n]);if(a)var f=a(r);for(e&&e(o);c<i.length;c++)s=i[c],r.o(t,s)&&t[s]&&t[s][0](),t[i[c]]=0;return r.O(f)},o=self.webpackChunknew_project=self.webpackChunknew_project||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var n=r.O(void 0,[216],(function(){return r(5530)}));n=r.O(n)}();