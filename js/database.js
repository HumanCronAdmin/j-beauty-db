(async()=>{
const grid=document.getElementById("grid");
const noResults=document.getElementById("no-results");
const countEl=document.getElementById("result-count");
const fCat=document.getElementById("f-cat");
const fSkin=document.getElementById("f-skin");
const fTex=document.getElementById("f-texture");
const fSort=document.getElementById("f-sort");
const fSearch=document.getElementById("f-search");
const fFF=document.getElementById("f-ff");

let products=[];
try{
  const r=await fetch("data/products.json");
  products=await r.json();
}catch(e){grid.innerHTML="<p>Failed to load products.</p>";return}

const cats=[...new Set(products.map(p=>p.category))].sort();
const skins=[...new Set(products.flatMap(p=>p.skin_type))].sort();
const textures=[...new Set(products.map(p=>p.texture))].sort();

cats.forEach(c=>{const o=document.createElement("option");o.value=c;o.textContent=c.replace(/-/g," ");fCat.appendChild(o)});
skins.forEach(s=>{const o=document.createElement("option");o.value=s;o.textContent=s;fSkin.appendChild(o)});
textures.forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;fTex.appendChild(o)});

function render(){
  const cat=fCat.value;
  const skin=fSkin.value;
  const tex=fTex.value;
  const sort=fSort.value;
  const q=fSearch.value.toLowerCase().trim();
  const ff=fFF.checked;

  let list=products.filter(p=>{
    if(cat&&p.category!==cat)return false;
    if(skin&&!p.skin_type.includes(skin))return false;
    if(tex&&p.texture!==tex)return false;
    if(ff&&!p.fragrance_free)return false;
    if(q){
      const haystack=(p.name+" "+p.brand+" "+p.key_ingredients.join(" ")+" "+p.best_for+" "+p.description).toLowerCase();
      if(!haystack.includes(q))return false;
    }
    return true;
  });

  if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
  else if(sort==="price")list.sort((a,b)=>a.price_usd-b.price_usd);
  else if(sort==="price_desc")list.sort((a,b)=>b.price_usd-a.price_usd);
  else if(sort==="price_per_ml")list.sort((a,b)=>a.price_per_ml-b.price_per_ml);

  countEl.textContent=list.length+" product"+(list.length!==1?"s":"")+" found";

  if(!list.length){grid.innerHTML="";noResults.style.display="block";return}
  noResults.style.display="none";

  grid.innerHTML=list.map(p=>`
<div class="product-card">
  <div class="card-top">
    <h3>${esc(p.name)}</h3>
    <span class="badge">${esc(p.category.replace(/-/g," "))}</span>
  </div>
  <div class="tags">${p.skin_type.map(s=>`<span class="tag">${esc(s)}</span>`).join("")}</div>
  <div class="product-meta">
    <span><strong>$${p.price_usd.toFixed(2)}</strong></span>
    <span>${p.size_ml}ml</span>
    <span>$${p.price_per_ml.toFixed(2)}/ml</span>
    <span>${esc(p.texture)}</span>
  </div>
  <div class="ingredients">${p.key_ingredients.map(i=>`<span>${esc(i)}</span>`).join("")}</div>
  <div class="icons-row">
    ${p.fragrance_free?'<span class="yes">&#10003; fragrance-free</span>':""}
    ${p.cruelty_free?'<span class="yes">&#10003; cruelty-free</span>':""}
  </div>
  <p class="best-for">Best for: ${esc(p.best_for)}</p>
  <div class="buy-chips">${p.where_to_buy.map(w=>`<span>${esc(w)}</span>`).join("")}</div>
</div>`).join("");
}

function esc(s){const d=document.createElement("div");d.textContent=s;return d.innerHTML}

[fCat,fSkin,fTex,fSort].forEach(el=>el.addEventListener("change",render));
fSearch.addEventListener("input",render);
fFF.addEventListener("change",render);
render();
})();
