randomNumber1=Math.floor(Math.random()*5)+1;
new_link1="C:\\Users\\Tanish\\Desktop\\DICE GAME\\dice"+`${randomNumber1}`+".png"
document.querySelector(".img1 img").setAttribute("src",new_link1)
randomNumber2=Math.floor(Math.random()*5)+1;
new_link2="C:\\Users\\Tanish\\Desktop\\DICE GAME\\dice"+`${randomNumber2}`+".png"
document.querySelector(".img2 img").setAttribute("src",new_link2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 Wins"
}else{
    document.querySelector("h1").textContent="Its a TIE! Refresh again"
}
