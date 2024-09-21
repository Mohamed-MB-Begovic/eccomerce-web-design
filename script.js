 const category=document.querySelector('.category')
 const main=document.querySelector('.main');

 const opsCalback=function(entries,observe){
    entries.forEach(entry=>{
        console.log(entry)
    })
 }
const options={
    root:null,
    threshold:0.99
}
const observer=new IntersectionObserver(opsCalback,options)
observer.observe(category)