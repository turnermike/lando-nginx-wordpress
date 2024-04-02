"use strict";(self.webpackJSONPwpmdb=self.webpackJSONPwpmdb||[]).push([[605],{79605:function(e,t,i){i.r(t),i.d(t,{MSBlurb:function(){return K},MSContent:function(){return Q},default:function(){return $}});var a,s,l,n,r,o,c=i(29890),u=i(4665),p=i(12544),m=i.n(p),d=i(62295),b=i(75338),h=i(42233),_=i(40795),w=i(88368),g=i(27056),v=i(65730),f=i(76687),E=e=>{var t=e.action,i=e.subsites,a=e.value,s=e.type,l="wpmdb-".concat(s,"-multisite-selector"),n=(0,d.I0)();return u.createElement("div",null,u.createElement("select",{onChange:e=>{if("0"!==e.target.value){n({type:t,payload:e.target.value});var a=(0,f.wn)(e.target.value,i);if(!a.subsiteName)return!1;n((0,g.wg)({selectedSubsite:a.subsiteName,selectedSubsiteID:e.target.value,type:s}))}},value:a,id:l,"aria-label":"".concat(s," multisite")},u.createElement("option",{value:"0"},"-- ",(0,h.__)("Select a subsite","wp-migrate-db")," --"),Object.keys(i).map(((e,t)=>u.createElement("option",{value:e,key:t},Object.values(i)[t])))))},y=i(69479),k=e=>{var t=(0,d.v9)((e=>e.migrations)),i=(0,d.v9)((e=>e.multisite_tools)),a=t.current_migration.intent,s=(0,d.I0)(),l=e.newPrefix;return"savefile"===a&&(l=u.createElement(u.Fragment,null,u.createElement("input",{type:"text",className:"new-prefix-input",value:i.new_prefix,onChange:e=>{var t=e.target.value;s({type:v.GH,payload:t})}}))),u.createElement("div",{className:"new-prefix".concat("savefile"===a?" has-form":"")},u.createElement("span",null,(0,h.__)("Exported table prefix: ")),l)},N=i(70659),M=i.n(N),S=i(29214),R=e=>{var t=(e=>{var t=[],i=M()(e,{name:"MST_NO_SUBSITE"}),a=M()(e,{name:"MST_NO_DESTINATION"}),s=M()(e,{name:"MST_EMPTY_PREFIX"}),l=M()(e,{name:"MST_INVALID_PREFIX"});return(s||l)&&t.push(u.createElement("p",null,(0,h.__)("Please enter a valid prefix. Letters, numbers and underscores (_) are allowed.","wp-migrate-db"))),i&&t.push(u.createElement("p",null,(0,h.__)("Please select a subsite.","wp-migrate-db"))),a&&t.push(u.createElement("p",null,(0,h.__)("Please select a destination subsite.","wp-migrate-db"))),t})(e.status);return 0===t.length?null:u.createElement(S.Z,{type:"danger",className:"mst-errors"},t.map(((e,t)=>u.createElement(u.Fragment,{key:t},e))))},O=e=>{var t=e.hasTablePrefix,i=(0,d.v9)((e=>e.migrations)),a=(0,d.v9)((e=>e.multisite_tools)),s=i.current_migration,l=s.status,n=s.twoMultisites,r=(0,f.G2)(i),o=r.sourceSite,c=r.destinationSite,p=n?"subsite-to-subsite":"subsite-to-single",m="false"===o.site_details.is_multisite?c:o;return u.createElement("div",{className:"subsites-row ".concat(p)},u.createElement("div",{className:"subsites-selects"},u.createElement(E,{type:"source",subsites:m.site_details.subsites,action:v.YW,value:a.selected_subsite}),n&&u.createElement(u.Fragment,null,u.createElement("div",{className:"subsite-arrow"},u.createElement(y.r,null)),u.createElement(E,{type:"destination",subsites:c.site_details.subsites,action:v.w0,value:a.destination_subsite}))),t&&u.createElement(k,null),u.createElement(R,{status:l}))},L=(0,h.gB)((0,h.__)('This option requires manually <a href="%s" target="_blank" rel="noreferrer noopener">updating the destination\'s wp-config.php</a> to work as a multisite install.',"wp-migrate-db"),"https://deliciousbrains.com/wp-migrate-db-pro/doc/multisite-tools-addon/#replace-single-site-multisite"),P=(0,h.gB)((0,h.__)('This option requires manually <a href="%s" target="_blank" rel="noreferrer noopener">updating the destination\'s wp-config.php</a> to work as a single site.',"wp-migrate-db"),"https://deliciousbrains.com/wp-migrate-db-pro/doc/multisite-tools-addon/#replace-multisite-single-site"),D={subSub:{push:{1:{description:(0,h.__)("Push network to network"),postDescription:(0,h.__)("Replaces the entire multisite network with the other network","wp-migrate-db"),value:!1},2:{description:(0,h.__)("Push subsite to subsite"),postDescription:(0,h.__)("Replaces the subsite of one multisite network with the subsite of the other network","wp-migrate-db"),value:!0}},pull:{1:{description:(0,h.__)("Pull network to network"),postDescription:(0,h.__)("Replaces the entire multisite network with the other network","wp-migrate-db"),value:!1},2:{description:(0,h.__)("Pull subsite to subsite","wp-migrate-db"),postDescription:(0,h.__)("Replaces the subsite of one multisite network with the subsite of the other network","wp-migrate-db"),value:!0}}},subSingle:{push:{1:{description:(0,h.__)("Push subsite to single site","wp-migrate-db"),postDescription:(0,h.__)("Replaces the single site with the selected subsite of the multisite network","wp-migrate-db"),value:!0},2:{description:(0,h.__)("Push network and replace single site","wp-migrate-db"),postDescription:(0,h.__)("Replaces the single site with the entire multisite network","wp-migrate-db"),value:!1,warning:L}},pull:{1:{description:(0,h.__)("Pull subsite to single site","wp-migrate-db"),postDescription:(0,h.__)("Replaces the single site with the selected subsite of the multisite network","wp-migrate-db"),value:!0},2:{description:(0,h.__)("Pull network and replace single site","wp-migrate-db"),postDescription:(0,h.__)("Replaces the single site with the entire multisite network","wp-migrate-db"),value:!1,warning:L}}},singleSub:{push:{1:{description:(0,h.__)("Push single site to subsite","wp-migrate-db"),postDescription:(0,h.__)("Replaces the selected subsite of the multisite network with the single site","wp-migrate-db"),value:!0},2:{description:(0,h.__)("Push single site and replace network","wp-migrate-db"),postDescription:(0,h.__)("Replaces the entire multisite network with the single site","wp-migrate-db"),value:!1,warning:P}},pull:{1:{description:(0,h.__)("Pull single site to subsite","wp-migrate-db"),postDescription:(0,h.__)("Replaces the selected subsite of the multisite network with the single site","wp-migrate-db"),value:!0},2:{description:(0,h.__)("Pull single site and replace network","wp-migrate-db"),postDescription:(0,h.__)("Replaces the entire multisite network with the single site","wp-migrate-db"),value:!1,warning:P}}},savefile:{savefile:{1:{description:(0,h.__)("Export network","wp-migrate-db"),postDescription:(0,h.__)("Export the entire multisite network","wp-migrate-db"),value:!1},2:{description:(0,h.__)("Export subsite","wp-migrate-db"),postDescription:(0,h.__)("Export a subsite of the multisite network","wp-migrate-db"),value:!0}}},find_replace:{find_replace:{1:{description:(0,h.__)("Find & Replace across network","wp-migrate-db"),postDescription:(0,h.__)("Run Find & Replace across the entire multisite network","wp-migrate-db"),value:!1},2:{description:(0,h.__)("Find & Replace within subsite","wp-migrate-db"),postDescription:(0,h.__)("Run Find & Replace within the subsite of the multisite network","wp-migrate-db"),value:!0}}}},Z=e=>{var t=e.selected,i=e.labelledby;return u.createElement("div",null,u.createElement("input",{readOnly:!0,className:"option-radio",type:"radio",name:"multisite-option",checked:t,"aria-labelledby":i}))},x=e=>{var t=e.description,i=e.currentOption,a=e.intent,s=e.optionName,l=e.postDescription,n=e.warning,r=e.className,o=(0,d.I0)(),c="multisite-".concat(s),p="savefile"===a&&s,m=s===i;return u.createElement("div",{onClick:()=>{(e=>{if(i===e)return null;o((0,g.xL)())})(s)},className:"option ".concat(r||"")},u.createElement(Z,{labelledby:c,selected:m}),u.createElement("div",null,u.createElement("div",{id:c,className:"label"},t),u.createElement("div",{className:"option-description"},l)),s&&m&&u.createElement(O,{hasTablePrefix:p}),n&&m&&u.createElement("div",{className:"migration-warning"},u.createElement(S.Z,{type:"warning"},(0,b.ZP)(n))))},T=e=>{var t=e.enabled,i=e.intent,a=e.migrationType;return u.createElement("fieldset",{className:"boxed-options"},Object.entries(D[a][i]).map((e=>{var a=(0,w.Z)(e,2),s=a[0],l=a[1];return u.createElement(x,{key:"multisite-option-".concat(s),description:l.description,currentOption:t,intent:i,optionName:l.value,postDescription:l.postDescription,warning:l.warning,className:"multisite-selection"})})))};function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},j.apply(this,arguments)}var I,F,B=function(e){return u.createElement("svg",j({width:25,height:21,viewBox:"0 0 25 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=u.createElement("path",{d:"m1.24 14.308 4.618-3.74a.244.244 0 0 1 .311 0l4.618 3.737a.748.748 0 0 0 1.036-.095c0-.01.006-.016.01-.02a.756.756 0 0 0-.112-1.06L7.103 9.39a1.755 1.755 0 0 0-2.206 0L.28 13.125a.745.745 0 0 0-.112 1.054.8.8 0 0 0 1.072.13Z",fill:"#666",fillOpacity:.3})),s||(s=u.createElement("path",{d:"M11.264 20.006v-3.495a1.106 1.106 0 0 0-.379-.794L6.65 12.22a1.005 1.005 0 0 0-1.275 0l-4.236 3.496c-.235.2-.368.484-.378.789V20H.755c-.01.545.439.989.995.999h2.746a.5.5 0 0 0 .495-.5v-2.746a.493.493 0 0 1 .495-.5h.995c.276 0 .5.225.495.5v2.747a.5.5 0 0 0 .495.499h2.746c.556-.01 1.052-.45 1.047-.994Z",fill:"#666",fillOpacity:.3})),l||(l=u.createElement("path",{d:"m14.24 14.308 4.618-3.74a.244.244 0 0 1 .311 0l4.618 3.737a.748.748 0 0 0 1.037-.095c0-.01.005-.016.01-.02a.756.756 0 0 0-.113-1.06l-4.618-3.74a1.755 1.755 0 0 0-2.206 0l-4.617 3.735a.745.745 0 0 0-.112 1.054.8.8 0 0 0 1.072.13Z",fill:"#666"})),n||(n=u.createElement("path",{d:"M24.264 20.006v-3.495a1.106 1.106 0 0 0-.379-.794L19.65 12.22a1.005 1.005 0 0 0-1.276 0l-4.235 3.496c-.235.2-.368.484-.378.789V20a.993.993 0 0 0 .99.999h2.746a.5.5 0 0 0 .495-.5v-2.746a.493.493 0 0 1 .495-.5h.995c.276 0 .5.225.495.5v2.747a.5.5 0 0 0 .495.499h2.746c.556-.01 1.052-.45 1.047-.994Z",fill:"#666"})),r||(r=u.createElement("path",{d:"m7.74 5.308 4.618-3.74a.244.244 0 0 1 .311 0l4.618 3.737a.748.748 0 0 0 1.037-.096c0-.01.005-.014.01-.02a.756.756 0 0 0-.113-1.058L13.603.39a1.755 1.755 0 0 0-2.206 0L6.78 4.125a.745.745 0 0 0-.112 1.054.8.8 0 0 0 1.072.13l-.026-.02.026.02Z",fill:"#666",fillOpacity:.3})),o||(o=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.375 6.717c.223.193.36.47.377.765h.002V7.51h-.002a1.106 1.106 0 0 1-.377.765L13.14 11.77a1.005 1.005 0 0 1-1.275 0L7.628 8.276a1.075 1.075 0 0 1-.377-.77H7.25v-.02c.016-.297.148-.574.378-.77l4.236-3.495a1.005 1.005 0 0 1 1.275 0l4.236 3.496ZM12 7a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 13 7h-1Z",fill:"#666",fillOpacity:.3})))};i.p;function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},U.apply(this,arguments)}var V,H,A,C,G=function(e){return u.createElement("svg",U({width:14,height:21,viewBox:"0 0 14 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),I||(I=u.createElement("path",{d:"M1.446 9.193 6.834 4.83a.284.284 0 0 1 .363 0l5.388 4.36a.872.872 0 0 0 1.209-.111c0-.012.006-.018.012-.024a.881.881 0 0 0-.131-1.235L8.286 3.454a2.048 2.048 0 0 0-2.572 0L.327 7.813a.869.869 0 0 0-.131 1.23.933.933 0 0 0 1.25.15Z",fill:"#666"})),F||(F=u.createElement("path",{d:"M13.14 15.84v-4.078a1.29 1.29 0 0 0-.44-.926L7.758 6.758a1.172 1.172 0 0 0-1.489 0l-4.942 4.078a1.255 1.255 0 0 0-.44.92v4.079c-.012.635.506 1.153 1.155 1.165h3.203a.583.583 0 0 0 .578-.583v-3.204a.575.575 0 0 1 .577-.582h1.161c.322 0 .584.262.578.582v3.204a.583.583 0 0 0 .577.583h3.204c.649-.012 1.227-.524 1.22-1.16Z",fill:"#666"})))};i.p;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},q.apply(this,arguments)}var z=function(e){return u.createElement("svg",q({width:25,height:21,viewBox:"0 0 25 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),V||(V=u.createElement("path",{d:"m1.24 14.308 4.618-3.74a.244.244 0 0 1 .311 0l4.618 3.737a.748.748 0 0 0 1.036-.095c0-.01.006-.016.01-.02a.756.756 0 0 0-.112-1.06L7.103 9.39a1.755 1.755 0 0 0-2.206 0L.28 13.125a.745.745 0 0 0-.112 1.054.8.8 0 0 0 1.072.13Z",fill:"#666"})),H||(H=u.createElement("path",{d:"M11.264 20.006v-3.495a1.106 1.106 0 0 0-.379-.794L6.65 12.22a1.005 1.005 0 0 0-1.275 0l-4.236 3.496c-.235.2-.368.484-.378.789V20H.755c-.01.545.439.989.995.999h2.746a.5.5 0 0 0 .495-.5v-2.746a.493.493 0 0 1 .495-.5h.995c.276 0 .5.225.495.5v2.747a.5.5 0 0 0 .495.499h2.746c.556-.01 1.052-.45 1.047-.994ZM14.24 14.308l4.618-3.74a.244.244 0 0 1 .311 0l4.618 3.737a.748.748 0 0 0 1.037-.095c0-.01.005-.016.01-.02a.756.756 0 0 0-.113-1.06l-4.618-3.74a1.755 1.755 0 0 0-2.206 0l-4.617 3.735a.745.745 0 0 0-.112 1.054.8.8 0 0 0 1.072.13Z",fill:"#666"})),A||(A=u.createElement("path",{d:"M24.264 20.006v-3.495a1.106 1.106 0 0 0-.379-.794L19.65 12.22a1.005 1.005 0 0 0-1.276 0l-4.235 3.496c-.235.2-.368.484-.378.789V20a.993.993 0 0 0 .99.999h2.746a.5.5 0 0 0 .495-.5v-2.746a.493.493 0 0 1 .495-.5h.995c.276 0 .5.225.495.5v2.747a.5.5 0 0 0 .495.499h2.746c.556-.01 1.052-.45 1.047-.994ZM7.74 5.308l4.618-3.74a.244.244 0 0 1 .311 0l4.618 3.737a.748.748 0 0 0 1.037-.096c0-.01.005-.014.01-.02a.756.756 0 0 0-.113-1.058L13.603.39a1.755 1.755 0 0 0-2.206 0L6.78 4.125a.745.745 0 0 0-.112 1.054.8.8 0 0 0 1.072.13l-.026-.02.026.02Z",fill:"#666"})),C||(C=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.375 6.717c.223.193.36.47.377.765h.002V7.51h-.002a1.106 1.106 0 0 1-.377.765L13.14 11.77a1.005 1.005 0 0 1-1.275 0L7.628 8.276a1.075 1.075 0 0 1-.377-.77H7.25v-.02c.016-.297.148-.574.378-.77l4.236-3.495a1.005 1.005 0 0 1 1.275 0l4.236 3.496ZM12 7a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 13 7h-1Z",fill:"#666"})))},J=(i.p,e=>{var t=e.isMultisite,i=e.enabled;return"false"===t?u.createElement(G,{"aria-label":(0,h.__)("Single site","wp-migrate-db")}):i?u.createElement(B,{"aria-label":(0,h.__)("Subsite","wp-migrate-db")}):u.createElement(z,{"aria-label":(0,h.__)("Multisite","wp-migrate-db")})}),X=()=>{var e=(0,d.v9)((e=>e)),t=e.multisite_tools,i=e.migrations,a=e.panels.panelsOpen,s=i.current_migration,l=(0,f.G2)(i),n=l.sourceSite,r=l.destinationSite,o=s.intent,c=s.twoMultisites;if(m()(a,"multisite_tools"))return null;if(!m()(["push","pull"],o)){var p=t.enabled?(0,f.ty)(t.selected_subsite,n):n.url;return u.createElement("div",{className:"mst-site-summary"},u.createElement(J,{isMultisite:n.is_multisite,enabled:t.enabled}),u.createElement("span",{className:"source-site"},p))}var b=n.url,h=r.url;if(t.enabled){var _="false"===n.site_details.is_multisite?t.destination_subsite:t.selected_subsite,w=c||"true"!==r.site_details.is_multisite?t.destination_subsite:t.selected_subsite;b=(0,f.ty)(_,n),h=(0,f.ty)(w,r)}return u.createElement("div",{className:"mst-site-summary"},u.createElement(J,{isMultisite:n.site_details.is_multisite,enabled:t.enabled}),u.createElement("span",{className:"source-site"},b),u.createElement(y.r,{"aria-label":"migrating to"}),u.createElement(J,{isMultisite:r.site_details.is_multisite,enabled:t.enabled}),u.createElement("span",{className:"destination-site"},h))},Y=(i(90794),i(29942)),W=["localURL","remoteURL","localIsMultisite","localSource","twoMultisites","migrationType"],K=e=>{var t=e.localURL,i=e.remoteURL,a=(e.localIsMultisite,e.localSource),s=(e.twoMultisites,e.migrationType),l=(0,c.Z)(e,W),n="";switch(s){case"subSub":n=(0,h.__)("The source <b>(%s)</b> and destination <b>(%s)</b> are both multisite installs.","wp-migrate-db");break;case"singleSub":n=(0,h.__)("The source <b>(%s)</b> is a single-site install, but the destination <b>(%s)</b> is a multisite install.","wp-migrate-db");break;case"subSingle":n=(0,h.__)("The source <b>(%s)</b> is a multisite install, but the destination <b>(%s)</b> is a single-site install.","wp-migrate-db")}var r=a?t:i,o=a?i:t,p=(0,h.gB)(n,(0,Y.zj)(r),(0,Y.zj)(o));return u.createElement("p",{className:l.className},(0,b.ZP)(p))},Q=()=>{var e=(0,d.v9)((e=>e.migrations)),t=(0,d.v9)((e=>e.multisite_tools)),i=e.current_migration,a=e.local_site,s=e.remote_site,l=i.intent,n=i.twoMultisites,r=i.localSource,o=()=>{var e=r?a:s;return m()(["push","pull"],l)?n?"subSub":"true"===e.site_details.is_multisite?"subSingle":"singleSub":l};return u.createElement(u.Fragment,null,["push","pull"].includes(l)&&u.createElement(K,{localURL:a.this_url,remoteURL:s.site_details.home_url,localIsMultisite:"true"===a.is_multisite,twoMultisites:n,localSource:r,migrationType:o(),className:"mst-blurb"}),u.createElement(T,{enabled:t.enabled,intent:l,migrationType:o()}))},$=()=>{var e=!1;return(0,d.v9)((e=>e.panels.panelsOpen)).includes("multisite_tools")||(e=!0),u.createElement(_.Z,{title:(0,h.__)("Multisite","wp-migrate-db"),className:"mst",forceDivider:e,panelName:"multisite_tools",disabled:false,panelSummary:u.createElement(X,{disabled:false})},u.createElement(Q,null))}}}]);