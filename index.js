const imgs= document.querySelectorAll("img");
const body= document.querySelector("body")
const result= document.querySelector(".res")
const arr=[];


imgs.forEach((img)=>{
    arr.push(img);
})

const messages = [
    "The Empress: You have a beautiful heart that cares deeply for others. Even when life feels heavy, your kindness and warmth make the world better just by you being in it.",
    
    "Wheel of Fortune: Life moves in cycles, and difficult moments never last forever. Good things are already turning their way toward you keep believing in your path.",
    
    "The Lovers: Your heart is strong and capable of incredible love. You deserve the same love, support, and care that you give to others every day.",
    
    "The Moon: It's okay to feel lost sometimes. Your emotions and sensitivity are not weaknesses they are part of what makes you uniquely beautiful.",
    
    "The Star: Even in dark moments, you are still a light. Your dreams, your strength, and your courage will guide you forward.",
    
    "The Sun: You bring warmth, laughter, and brightness into the lives of people who love you. The world is genuinely better with you in it."
];

const empty=document.querySelector("empty")

arr.forEach((img,i)=>{
img.addEventListener("click", function(){
    result.innerHTML=""
const h1=document.createElement("h1");
h1.textContent=messages[i];
result.append(h1);

})


})

console.log(result);