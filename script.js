let inputTag=document.querySelector("input");
let  ulTag=document.querySelector("ul")
let delT=document.querySelector('.box')
let delallbt=document.getElementById("vis");
let div=document.querySelector(".list") 
var count=0;
inputTag.addEventListener("keydown",function(e){
    let k=e.key;
    if(k=='Enter'){
   let va=inputTag.value;
   if(va!=""){
    make(inputTag.value);
   inputTag.value="";
    }
}
})
 
function liremove(litag){
    let del=litag.querySelector(".del")
    del.addEventListener("click",function(){
        litag.remove();
        delallbt.style.display="block";
    })
}
delT.addEventListener("click",function(){
      ulTag.remove();
      let u=document.createElement("ul");
      div.appendChild(u);
      ulTag = u;
      delallbt.style.display="none";
})
// let ctag=document.querySelector(".card");
//  ctag.addEventListener("dbclick",function(){
     
//  })
 function make(val){
    let litag=document.createElement("li");
    litag.innerHTML=` <div class="container" id="w${count}">
    <div class="card">
    <span class="c">
${val}
 </span>
           <div class="del">
               <span class="material-symbols-outlined mm">delete_forever</span>                                
           </div>
           <div class="chk"  id=${count}>
                            <span class="material-symbols-outlined chk check" >
                                radio_button_unchecked
                                </span>
                           </div>
       </div>
   </div>
 `;
 delallbt.style.display="block";
    liremove(litag);
    ulTag.appendChild(litag);
    isChecked(count);
    tasks(count);
    count++;
   
 }

 function isChecked(id){
    let checkbtn=document.getElementById(id);
    checkbtn.addEventListener("click",function(){
     var cbt=document.getElementById(id);
        if(cbt.innerText=="radio_button_unchecked"){
            cbt.innerHTML=`  <span class="material-symbols-outlined chk check" >
            task_alt
            </span>`;
            cbt.parentElement.style.background="pink"
        }else{
            cbt.innerHTML=`  <span class="material-symbols-outlined chk check" >
            radio_button_unchecked
            </span>`;//to do
            cbt.parentElement.style.background=`linear-gradient( 135deg, var(--paper-color), 85%, var(--gray-light) )`
        }
    })
}
function tasks(id){
let val=document.getElementById(id);
let comp=document.querySelector(".comp");
let ong=document.querySelector(".ong");
let cp=0;
let cs=0;
let crd=document.getElementById(`w${id}`);
comp.addEventListener("click",function(){
    if(crd.style.display=="none"){
        crd.style.display="flex"
     }
    if(val.innerText=="radio_button_unchecked"){
        val.parentElement.parentElement.style.display="none"
        }
        cp++;
     if(cp>1){
        val.parentElement.parentElement.style.display="flex";
         cp=0;
     }
})
ong.addEventListener("click",function(){
    if(crd.style.display=="none"){
        crd.style.display="flex";
     }
     if(val.innerText=="task_alt"){
        val.parentElement.parentElement.style.display="none";
      
        }
        cs++;
        if(cs>1){
           val.parentElement.parentElement.style.display="flex";
            cs=0;
        }
       
})
}