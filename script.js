let inputTag=document.querySelector("input");
let  ulTag=document.querySelector("ul")
let delT=document.querySelector('.box')
let div=document.querySelector(".list")
let imgTag;         
inputTag.addEventListener("keydown",function(e){
    let k=e.key;
    if(k=='Enter'){
   let va=inputTag.value;
   if(va=!""){
    let val=inputTag.value;
   inputTag.value="";
   let litag=document.createElement("li");
   litag.innerHTML=` <div class="container">
   <div class="card">
       <div class="c">
           ${val}
          </div>
          <div class="del">
              <span class="material-symbols-outlined">delete_forever</span>                                
          </div>
      </div>
  </div>
`;
/* <p class="name"></p> */

   liremove(litag);
   ulTag.appendChild(litag);
   
    }
}
})
function liremove(litag){
    let del=litag.querySelector(".del")
    del.addEventListener("click",function(){
        litag.remove();
    })
}
// function liremoveAll(litag){
//     delT.addEventListener("click",function(){
//         litag.removeAll();
//     })
// }
delT.addEventListener("click",function(){
      ulTag.remove();
      let u=document.createElement("ul")
      div.appendChild(u);
})
 