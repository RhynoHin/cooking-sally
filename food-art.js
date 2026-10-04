/* Original illustrated food atlases. Coordinates are normalized equal cells. */
window.FoodArt=(()=>{
  const sheets={}, status={ready:false,failed:false};
  const ready=Promise.all(['meals','ingredients','cooking','details'].map(name=>new Promise(resolve=>{
    const img=new Image();sheets[name]=img;img.onload=()=>resolve(true);img.onerror=()=>{status.failed=true;resolve(false)};img.src=`assets/${name}-atlas.png`;
  }))).then(ok=>{status.ready=ok.every(Boolean);return status.ready});
  function sprite(g,sheet,index,x,y,w,h,rotation=0,alpha=1){const img=sheets[sheet];if(!img?.complete||!img.naturalWidth)return false;const cw=img.naturalWidth/4,ch=img.naturalHeight/2;g.save();g.translate(x,y);g.rotate(rotation);g.globalAlpha*=alpha;g.drawImage(img,index%4*cw,Math.floor(index/4)*ch,cw,ch,-w/2,-h/2,w,h);g.restore();return true;}
  return {ready,status,sprite};
})();
