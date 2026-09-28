const COLORS=['#ff2da6','#00d9ff','#ffe600','#8d3cff','#ff6a00','#64f000','#246bff','#ff334f'];
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
export function burst(target,{amount=16,colors=COLORS}={}){
  if(reduced()) return;
  const layer=document.createElement('span');layer.className='dk-burst-layer';
  if(getComputedStyle(target).position==='static') target.style.position='relative';
  target.appendChild(layer);
  for(let i=0;i<amount;i++){
    const p=document.createElement('i');p.className='dk-like-confetti'+(i%5===2?' dk-round':'');
    p.style.setProperty('--dk-x',(Math.random()-.5)*120+'px');
    p.style.setProperty('--dk-peak',(-48-Math.random()*72)+'px');
    p.style.setProperty('--dk-fall',(120+Math.random()*92)+'px');
    p.style.setProperty('--dk-rotation',((Math.random()>.5?1:-1)*(320+Math.random()*520))+'deg');
    p.style.setProperty('--dk-scale',String(.58+Math.random()*.78));
    p.style.setProperty('--dk-delay',Math.random()*100+'ms');
    p.style.setProperty('--dk-sway',(7+Math.random()*12)+'px');
    p.style.setProperty('--dk-drift',((Math.random()-.5)*30)+'px');
    p.style.setProperty('--dk-color',colors[i%colors.length]);p.innerHTML='<b></b>';layer.appendChild(p);
  }
  setTimeout(()=>layer.remove(),6200);
}
export function wireCelebrations(selector='[data-delight-burst]'){
  document.querySelectorAll(selector).forEach(el=>el.addEventListener('click',()=>burst(el)));
}