// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd0MGRWBOUdquWHujQcK3Tr778W2OR97s",
  authDomain: "quiz-app-3ed8b.firebaseapp.com",
  projectId: "quiz-app-3ed8b",
  storageBucket: "quiz-app-3ed8b.appspot.com",
  messagingSenderId: "633027916770",
  appId: "1:633027916770:web:b943ac003a1169655cffbb",
  measurementId: "G-R9T1ED1Z42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var QueArray = [
    {
      CountNo:1,
      Question: "MS word is software of ____",
      CorrectAns: "Microsoft",
      Options: ["Apple", "Android", "Google", "Microsoft"],
    },
    {
      CountNo:1,
      Question: "Which is the word processing software?",
      CorrectAns: "MS word 2007",
      Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    },
    {
      CountNo:1,
      Question: "MS Word is ____ software.    ",
      CorrectAns: "Word processing",
      Options: [
        "Web browser",
        "Word processing",
        "Operating system",
        "Antivirus",
      ],
    },
    {
      CountNo:1,
      Question: "The valid format of MS Word is __",
      CorrectAns: ".doc",
      Options: [".exe", ".doc", ".png", " .jpeg"],
    },
    {
      CountNo:1,
      Question: "What program is used in MS-Word to check the spelling?",
      CorrectAns: "Spelling & Grammar",
      Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    },
    {
      CountNo:1,
      Question: "A word gets selected by clicking it",
      CorrectAns: "Twice",
      Options: [" Once", "Twice", "Three times", "Four times"],
    },
    {
      CountNo:1,
      Question: "The center the selected text, the shortcut key is",
      CorrectAns: "Ctrl + E",
      Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    },
    {
      CountNo:1,
      Question: "Which option is not available in Microsoft office button?",
      CorrectAns: "Bold",
      Options: ["Bold", "New", "Save", "Open"],
    },
    {
      CountNo:1,
      Question:
        "_____ is the change the way text warps around the selected object.",
      CorrectAns: "Text wrapping",
      Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
    },
    {
      CountNo:1,
      Question: "A major step before taking print of the document is",
      CorrectAns: "Both b and c",
      Options: [
        "To save the document",
        "To set paper setting",
        "To see print preview of the document",
        "Both b and c",
      ],
    },
  ];



  window.renderList .function (e);{
    var render = document.getElementById("render");
      render.innerHTML = QueCount + 1
  }


  window.showquestion.function(e);{
  // show question
  var questionsText = document.getElementById('questionsText');
  stop()
  questionsText.innerHTML = QueArray[e].Question;
  
 
// show Options
  var Option = document.getElementsByClassName('option');
  for(var i = 0; i < Option.length; i++){
    Option[i].innerHTML = QueArray[e].Options[i]
  }  
}

var QueCount = 0;
var score = 0;

window.next.function ();{
  QueCount++;
  renderList(QueCount)
  CorrectAns(QueCount);
  showquestion(QueCount);
  removeActive();
  
  // if(active.value.innerHTML == ""){
  //   alert("click on button")
  // }
}

window.putActive.function (e);{
  removeActive()
  e.classList.add("active")
}

window.removeActive.function();{
  var active = document.getElementsByClassName("active");
for(var i = 0; i < active.length; i++){
  active[i].classList.remove("active")
}
}
window.stop.function ();{
  if (QueCount == 9){
    QueCount = -1
    score = -1;
    Percentage = -1;
  }
}


var score = 0;
var Percentage = 0;
window.CorrectAns.function (e);{
  var active = document.getElementsByClassName("active");
  var marks = document.getElementById("marks");
  var Percentage = document.getElementById("Percentage")

  for(var i = 0; i < QueArray.length; i++){
    if(active[0].innerHTML == QueArray[i].CorrectAns){
      marks.innerHTML = (score  = score + 1);
      Percentage.innerHTML = `${(score * 10)}${"%"}`
      
    }
  }

}

