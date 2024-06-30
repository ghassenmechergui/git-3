let date =document.querySelector(".date")
let bt = document.querySelector("button")
let pays = "Tunisie"
function ad() {
fetch(`https://dailyprayer.abdulrcs.repl.co/api/${pays}`)

.then((response) => {
  if(response.ok){
    return response.json()
  }
})

.then( response => {
  
  date.innerHTML = response.city+" " + response.date
  let i = 1
  for ( s in response.today){
    
    document.querySelector(`.d${i}`).innerHTML = 
        `
        <div>${s}</div>
        <div>${response.today[s]}</div>
        
        `
       i++
       
    
  }
 
}
)

}
ad()
bt.onclick = function (){
  pays = document.querySelector("input").value
  ad()
}