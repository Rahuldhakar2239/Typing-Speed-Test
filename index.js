const sentence = document.getElementById('line');
const txt = document.getElementById("typing");
const btn = document.getElementById("butn");

const arr = [
    "The fastest typing speed ever, 216 words per minute, was achieved by Stella Pajunas-Garnand from Chicago in 1946 in one minute on an IBM electric. As of 2005, writer Barbara Blackburn was the fastest English language typist in the world, according to The Guinness Book of World Records. Using the Dvorak Simplified Keyboard, she had maintained 150 wpm for 50 minutes, and 170 wpm for shorter periods, with a peak speed of 212 wpm.",
    " Blackburn, who failed her QWERTY typing class in high school, first encountered the Dvorak keyboard in 1938, quickly learned to achieve very high speeds, and occasionally toured giving speed-typing demonstrations during her secretarial career. She appeared on Late Night with David Letterman on January 24, 1985, but felt that Letterman made a spectacle of her. Blackburn died in April 2008.",
    "Two members of the 1984 class of Jefferson High School are chairing a group of 18 to look for a resort for the 20-year class reunion. A lovely place 78 miles from the city turns out to be the best. It has 254 rooms and a banquet hall to seat 378. It has been open 365 days per year since opening on May 30, 1926.",
     "They will need 450 to reserve the resort. Debbie Holmes was put in charge of buying 2,847 office machines for the entire firm. Debbie visited more than 109 companies in 35 states in 6 months. She will report to the board today in Room 2784 at 5 p.m.",
    "The board will consider her report about those 109 firms and recommend the top 2 or 3 brands to purchase. Debbie must decide before August 16. Lynn Greene said work started on the project March 27, 2003. The 246 blueprints were mailed to the office 18 days ago.",
              
];

let StartTime,endTime;
txt.disabled = true;

btn.addEventListener("click",()=>{
    if(btn.innerText == "Start"){
        txt.disabled = false;
        StartTyping();
    }
    else if(btn.innerText == "Done"){
        txt.disabled = true;
        btn.innerText = "Start";
        completeTyping();
        
    }
}
)

const StartTyping = ()=>{
  let randomIndex = Math.floor(Math.random()*arr.length);
  sentence.innerText = arr[randomIndex];
  let date = new Date();
  StartTime = date.getTime();
  btn.innerText = "Done";
}

const completeTyping = ()=>{
    let date = new Date();
  endTime = date.getTime();
  let totalTime =((endTime-StartTime)/1000);


let typingWords = txt.value;
let wordCount = typingWords.split(" ").length;
let speed = Math.round((wordCount/totalTime)*60);
let result = "Your typing speed is " + speed + " words/min, ";
result += compareWords(sentence.innerText,typingWords);
sentence.innerText = result;
txt.value = "";
}

const compareWords=(str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let correctWords = 0;
    words1.forEach(myfunction);
    function myfunction(element,index){
        if(element == words2[index]){
            correctWords++;
        }
    }

    let errorWords = words1.length - correctWords;
    return (correctWords+ " correct out of "+words1.length+" and " + errorWords + " are wrong.");
    }
   