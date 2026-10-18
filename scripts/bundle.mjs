import fs from 'node:fs';
import vm from 'node:vm';
fs.mkdirSync('dist',{recursive:true});
const core=fs.readFileSync('src/core.mjs','utf8').replaceAll('export function','function');
const translations=JSON.parse(fs.readFileSync('src/translations.json','utf8'));
const i18n=fs.readFileSync('src/i18n.js','utf8').replace('/* TRANSLATIONS */',JSON.stringify(translations));
const app=fs.readFileSync('src/app.js','utf8').replace(/^import .*?;\n/,'');
const code='(()=>{\n'+core+'\n'+i18n+'\n'+app+'\n})();';
new vm.Script(code); // Fail the build on any syntax error in the exact shipped script.
fs.writeFileSync('dist/app.bundle.js',code);
const html=fs.readFileSync('src/index.html','utf8').replace('<!-- APP_BUNDLE -->',()=>'<script>\n'+code.replaceAll('</script','<\\/script')+'\n</script>');
fs.writeFileSync('dist/index.html',html);
for(const name of ['style.css','face-worker.js'])fs.copyFileSync('src/'+name,'dist/'+name);
for(const name of ['vision_bundle.mjs','face_landmarker.task','wasm']){if(!fs.existsSync('public/'+name))throw new Error('Missing model assets. Run npm run setup first.');fs.cpSync('public/'+name,'dist/'+name,{recursive:true});}
console.log('Built dist/ with Arabic and English.');
