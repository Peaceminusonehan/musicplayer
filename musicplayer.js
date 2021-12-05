const pretag =document.getElementsByClassName("fas fa-backward lay")[0];
const playtag =document.getElementsByClassName("far fa-play-circle lay")[0];
const nextag =document.getElementsByClassName("fas fa-forward lay lay")[0];
const menu = document.getElementsByClassName("fas fa-bars bar")[0];
const newdivs =document.getElementsByClassName("newdiv")[0]
const audiotag =document.getElementsByClassName("audio")[0];
const backtag =document.getElementsByClassName("fas fa-arrow-circle-left back")[0];
const imgtag =document.getElementsByClassName("img")[0]
const titletag =document.getElementsByClassName("title")[0]
const pausetag =document.getElementsByClassName("far fa-pause-circle lay pause")[0]
const durationtag =document.getElementsByClassName('second')[0]
const progress =document.getElementsByClassName("prog")[0]

const imgs=["fdsf.png","crooked.png","download.png"]

const songs =[
    {title:"../music/test1.mp3",sonname:"See You Again"},
    {title:"../music/test2.mp3",sonname:"G-DRAGON(CROOKED)"},
    {title:"../music/test3.mp3",sonname:"Korea Drama Ost"},
]



let duration;
let durationtext;
audiotag.addEventListener("loadeddata",() => {
  duration=Math.floor(audiotag.duration);
  durationtext =updatetime(duration);
})

audiotag.addEventListener("timeupdate",()=> {
    let currentTime =Math.floor(audiotag.currentTime);
    let currenttext =updatetime(currentTime)
    let cutanddu =currenttext+" / "+durationtext
    durationtag.textContent = cutanddu;
    progressic(currentTime);
    
})


const progressic =(currentTime) => {
   const toshowpro =(300/duration) * currentTime
   progress.style.width =toshowpro.toString()+"px"
} 


   


const updatetime =(totalsecond) => {
    let minute =Math.floor(totalsecond/60)
    let second =totalsecond % 60
    let minutext =minute<10? "0"+minute.toString():minute
    let secontext =second<10? "0"+second.toString():second
    return minutext+":"+secontext
}

let currenti =0
let isplaying =false
playtag.addEventListener("click", () => {
    let currentTime =Math.floor(audiotag.currentTime);
    if (currentTime === 0) {
        isplaying =true;
        audiotag.src=songs[currenti].title
        audiotag.play();
        imgtag.src =imgs[currenti]
        busechang();
        titletag.innerText=songs[currenti].sonname
        
        
    }
   audiotag.play()
   busechang();
})

pausetag.addEventListener("click", () => {
    isplaying =false
    audiotag.pause();
    busechang();
})

pretag.addEventListener("click", () => {
    if ( currenti === 0) {
      return;    
    }
    currenti -=1
    audiotag.src=songs[currenti].title
    audiotag.play()
    isplaying=true
    busechang();
    imgtag.src =imgs[currenti]
    titletag.innerText=songs[currenti].sonname
})

nextag.addEventListener("click", () => {
    if (currenti === songs.length) {
     return;
    }
   currenti++
   audiotag.src=songs[currenti].title
   isplaying =true;
   audiotag.play()
   busechang();
   imgtag.src =imgs[currenti]
   titletag.innerText=songs[currenti].sonname
  

})   


const busechang =() => {
   if (isplaying === true) {
       playtag.style.display="none";
       pausetag.classList.add("display")
   } else if (isplaying === false) {
    playtag.style.display="inline";
    pausetag.classList.remove("display")
   }
   
  
   
  

}



    for (let i = 0; i < songs.length; i++) {
        const divs =document.createElement("div")
        divs.classList.add("divtag")
        divs.id = i;
        divs.append(songs[i].sonname)
        newdivs.append(divs)
        const toshow =(1+i).toString()+".  "+songs[i].sonname
        divs.textContent=toshow
        divs.addEventListener("click", () => {
          document.getElementById(i)
            audiotag.src = songs[i].title
            audiotag.play();
            isplaying =true;
            newdivs.classList.remove("tran")
            imgtag.src =imgs[i]
            titletag.innerText=songs[i].sonname
           
            busechang();
            
        })
       
       }
       

menu.addEventListener("click", () => {
   
        newdivs.classList.add("tran")
})

backtag.addEventListener("click", () => {
    newdivs.classList.remove("tran")
})
