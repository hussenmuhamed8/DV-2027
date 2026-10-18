// Arabic source strings are translation keys; longest phrases match first.
const EN = /* TRANSLATIONS */;
const translationKeys=Object.keys(EN).sort((a,b)=>b.length-a.length);
const translationPattern=new RegExp(translationKeys.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
let language='ar';try{if(localStorage.getItem('dv-frame-language')==='en')language='en';}catch{}
const textStates=new Map(),staticTexts=[],staticAttributes=[];
function tr(value){const text=String(value);return language==='ar'?text:text.replace(translationPattern,key=>EN[key]);}
function put(id,value){textStates.set(id,String(value));document.getElementById(id).textContent=tr(value);}
function collectStaticTranslations(){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode()){if(!['SCRIPT','STYLE'].includes(node.parentElement?.tagName)&&/[\u0600-\u06ff]/.test(node.nodeValue))staticTexts.push([node,node.nodeValue]);}document.querySelectorAll('[aria-label]').forEach(el=>staticAttributes.push([el,el.getAttribute('aria-label')]));}
function renderLanguage(){document.documentElement.lang=language;document.documentElement.dir=language==='ar'?'rtl':'ltr';document.title=language==='ar'?'DV Frame — صورتك، بالقياس الصحيح':'DV Frame — Your photo, framed correctly';for(const [node,original] of staticTexts)node.nodeValue=tr(original);for(const [el,original] of staticAttributes)el.setAttribute('aria-label',tr(original));for(const [id,original] of textStates)document.getElementById(id).textContent=tr(original);const button=document.getElementById('language');button.textContent=language==='ar'?'English':'العربية';button.setAttribute('aria-label',language==='ar'?'Switch to English':'التبديل إلى العربية');}
collectStaticTranslations();
