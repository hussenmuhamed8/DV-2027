import test from 'node:test';
import assert from 'node:assert/strict';
import {cropBox,measurements,pixelChecks} from '../src/core.mjs';
test('portrait and landscape square crops remain inside original at every slider extreme',()=>{for(const [w,h] of [[1200,1800],[1800,1200],[600,600]])for(const z of [1,1.5,3])for(const x of [0,.5,1])for(const y of [0,.5,1]){const b=cropBox(w,h,z,x,y);assert(b.x>=0&&b.y>=0);assert(b.x+b.size<=w+.001&&b.y+b.size<=h+.001);assert.equal(b.size,Math.min(w,h)/z);}});
test('eye height is measured from bottom; valid composition passes',()=>{const m=measurements({top:{x:.5,y:.15},eye:{x:.5,y:.38},chin:{x:.5,y:.75}});assert.equal(m.eye,.62);assert(m.headOK&&m.eyeOK&&m.centerOK&&m.validOrder);});
test('wrong eye position and inverted points are rejected',()=>{const m=measurements({top:{x:.5,y:.8},eye:{x:.8,y:.6},chin:{x:.5,y:.2}});assert(!m.validOrder&&!m.headOK&&!m.eyeOK&&!m.centerOK);assert.equal(measurements({}),null);});
test('background samples distinguish plain white from dark or patterned walls',()=>{for(const kind of ['white','dark','pattern']){const w=120,h=120,d=new Uint8ClampedArray(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){let v=kind==='white'?230:kind==='dark'?50:(Math.floor(y/7)%2?250:100);const i=(y*w+x)*4;d.set([v,v,v,255],i);}assert.equal(pixelChecks(d,w,h).backgroundOK,kind==='white');}});
