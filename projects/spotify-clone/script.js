
// initialized the variable

let songIndex = 1;

let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");

let progressbar= document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let footname = document.getElementById("footname");



// total duration of song 

let songs = [

    {songName: "attitude" , filePath: "songs/1.mp3" , coverPath: "covers/10.jpg" , duration:"03:50"},
    {songName: "Cio" , filePath: "songs/2.mp3" , coverPath: "covers/8.jpg" , duration:"02:33"},
    {songName: "Alone" , filePath: "songs/3.mp3" , coverPath: "covers/9.jpg" , duration:"04:33"},
    {songName: "alan walker" , filePath: "songs/4.mp3" , coverPath: "covers/7.jpg" , duration:"04:27"},
    {songName: "dark world" , filePath: "songs/5.mp3" , coverPath: "covers/6.jpg" , duration:"03:28"},
    {songName: "blue eyes" , filePath: "songs/6.mp3" , coverPath: "covers/5.jpg" , duration:"03:28"},
    {songName: "shut up " , filePath: "songs/7.mp3" , coverPath: "covers/4.jpg" , duration:"04:33"},
    {songName: "crash me" , filePath: "songs/8.mp3" , coverPath: "covers/3.jpg" , duration:"03:50"},

]

// ######## generate songs ###########

function generateList(){

    const songList = document.querySelector(".song-items");
    count = 1;
    songs.forEach((detail)=>{

        // ### create div ####
        const div = document.createElement("div");
        div.classList.add("song-item");

        // ### create img  ###
        const img = document.createElement("img");
        img.setAttribute("src", detail.coverPath);
        img.setAttribute("alt", songs.indexOf(detail));
        div.appendChild(img);

        // create span
        const span = document.createElement("span");
        const name = document.createTextNode(detail.songName);
        span.appendChild(name);
        div.appendChild(span);

        // // parent span

        const pspan = document.createElement("span");
        pspan.classList.add("songlistplay");

        // // child span 

        const cspan = document.createElement("span");
        cspan.classList.add("timestamp");

        const time = document.createTextNode(detail.duration);
        const i = document.createElement("i");
        i.classList.add("fa-regular");
        i.classList.add("fa-circle-play");
        i.classList.add("uniqi");
        i.setAttribute('id',count);
        count++;
       
        cspan.appendChild(time);
        cspan.appendChild(i);

        pspan.appendChild(cspan);

        div.appendChild(pspan);

        songList.append(div);
        console.log(songList);


    })
   

}
window.addEventListener("load", generateList); 





// ##### makeAllPlays play pause in song #### 

const makeAllPlays = ()=>{

        const qq = document.querySelectorAll(".uniqi");
        qq.forEach( (q) =>{
            q.classList.add("fa-circle-play");
            q.classList.remove("fa-circle-pause");
        } );
    
}





// ##### play pause in song #### 

window.addEventListener("load",()=>{

ielements=document.getElementsByClassName('uniqi')
Array.from(ielements).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        if(audioElement.paused || audioElement.currentTime <=0){
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            gif.style.opacity = 1
            footname.style.opacity = 1;
            footname.innerText=songs[songIndex-1].songName;
            audioElement.src=`songs/${songIndex}.mp3`
            audioElement.play();
        }else{
            e.target.classList.add("fa-circle-play");
            e.target.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");
            masterPlay.classList.remove("fa-circle-pause");
            gif.style.opacity = 0
            footname.style.opacity = 0;
            audioElement.pause();
        }

    })
})

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>ielements.length){
        songIndex=0;
    }else{
        songIndex+=1;
        
    }
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1
    footname.style.opacity = 1;
    footname.innerText=songs[songIndex-1].songName;
    audioElement.src=`songs/${songIndex}.mp3`
    audioElement.play();
    
})
document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
        
    }
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1
    footname.style.opacity = 1;
    footname.innerText=songs[songIndex-1].songName;
    audioElement.src=`songs/${songIndex}.mp3`
    audioElement.play();
    
})

})


// ######## masterplay play pause #/

function playPause(){
    const aa = document.querySelectorAll(".uniqi");
    if(audioElement.paused || audioElement.currentTime <=0){

        audioElement.play()
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1
        footname.style.opacity = 1;
        footname.innerText=songs[songIndex-1].songName;
        audioElement.src=`songs/${songIndex}.mp3`
        audioElement.play();
    }else{ 
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        gif.style.opacity = 0
        footname.style.opacity = 0;
    }
}





masterPlay.addEventListener('click',()=>{
    playPause();
})
// listen to events

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value= progress; 
})

progressbar.addEventListener('change',()=>{

    audioElement.currentTime = parseInt((progressbar.value * audioElement.duration)/100);

})




