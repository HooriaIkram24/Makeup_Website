var signUp=document.querySelector("#sign");
var eblushh = document.querySelector("#eblush1");
var lglosss=document.querySelector("#lgloss1");
var blenderr=document.querySelector("#blender1");
var cblushh=document.querySelector("#cblush1");
var foundationn=document.querySelector("#foundation1");
var lfoundationn=document.querySelector("#lfoundation1");
var highlighterr=document.querySelector("#Highlighter1");
var tgloss=document.querySelector("#gloss1");
var lstickk=document.querySelector("#lipstick1");
var broww=document.querySelector("#brow1");
var linerr=document.querySelector("#liner1");
var mirrorr=document.querySelector("#mirror1");

let total = 0;
let count = 0;

// ONLY target "Add to Cart" buttons
let buttons = document.querySelectorAll(".card .btn");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {

        e.preventDefault(); // stop page refresh

        let card = this.closest(".card");

        // get price from that card
        let priceText = card.querySelector(".card-text").innerText;

        let price = parseInt(priceText.replace("RS:", "").trim());

        if (isNaN(price)) return;

        total += price;
        count++;

        document.getElementById("total").innerText = "Rs. " + total;
        document.querySelector(".checkout-btn").innerText = "Check Out(" + count + ")";
    });
});









var signUp = document.querySelector("#sign"); 

function sign() {
    // 1. Get values directly
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // 2. Create the user object
    let user = {
        "Name": name,
        "Email": email,
        "Password": password
    };
    
    // 3. Save to localStorage
    var Userinfo = JSON.stringify(user);
    localStorage.setItem("user_infor", Userinfo);
    
    alert("Information saved! ✨");
}

// 4. Connect the button to the function
signUp.addEventListener("click", sign);






function card1() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    eblushh.innerText = "Already Added!";
    eblushh.style.color = "black";
    eblushh.style.backgroundColor = "pink";


    var head = document.querySelector("#card1-eblush").innerText;
    var para = document.querySelector("#eblush-rs").innerText;

    localStorage.setItem("card1_head", head);
    localStorage.setItem("card1_price", para);


    
    alert("Added to cart successfully! ✅");
}

eblushh.addEventListener("click", card1);

function card2() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    lglosss.innerText = "Already Added!";
    lglosss.style.color = "black";
    lglosss.style.backgroundColor = "pink";


    var head = document.querySelector("#card2-lgloss").innerText;
    var para = document.querySelector("#lgloss-rs").innerText;

    localStorage.setItem("card2_head", head);
    localStorage.setItem("card2_price", para);
    
    
    alert("Added to cart successfully! ✅");
}

lglosss.addEventListener("click", card2);

function card3() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    blenderr.innerText = "Already Added!";
    blenderr.style.color = "black";
    blenderr.style.backgroundColor = "pink";


    var head = document.querySelector("#card3-BB").innerText;
    var para = document.querySelector("#BB-rs").innerText;

    localStorage.setItem("card3_head", head);
    localStorage.setItem("card3_price", para);
 
    
    alert("Added to cart successfully! ✅");
}

blenderr.addEventListener("click", card3);

function card4() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    cblushh.innerText = "Already Added!";
    cblushh.style.color = "black";
    cblushh.style.backgroundColor = "pink";


    var head = document.querySelector("#card4-CB").innerText;
    var para = document.querySelector("#CB-rs").innerText;
    

    localStorage.setItem("card4_head", head);
    localStorage.setItem("card4_price", para);
   
    
    alert("Added to cart successfully! ✅");
}

cblushh.addEventListener("click", card4);

function card5() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    foundationn.innerText = "Already Added!";
    foundationn.style.color = "black";
    foundationn.style.backgroundColor = "pink";


    var head = document.querySelector("#card5-foun").innerText;
    var para = document.querySelector("#foun-rs").innerText;

    localStorage.setItem("card5_head", head);
    localStorage.setItem("card5_price", para);
 
    
    alert("Added to cart successfully! ✅");
}

foundationn.addEventListener("click", card5);

function card6() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    lfoundationn.innerText = "Already Added!";
    lfoundationn.style.color = "black";
    lfoundationn.style.backgroundColor = "pink";


    var head = document.querySelector("#card6-lfoun").innerText;
    var para = document.querySelector("#lfoun-rs").innerText;

    localStorage.setItem("card6_head", head);
    localStorage.setItem("card6_price", para);
    
    
    alert("Added to cart successfully! ✅");
}

lfoundationn.addEventListener("click", card6);

function card7() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    highlighterr.innerText = "Already Added!";
    highlighterr.style.color = "black";
    highlighterr.style.backgroundColor = "pink";


    var head = document.querySelector("#card7-high").innerText;
    var para = document.querySelector("#high-rs").innerText;

    localStorage.setItem("card7_head", head);
    localStorage.setItem("card7_price", para);
    
    
    alert("Added to cart successfully! ✅");
}

highlighterr.addEventListener("click", card7);

function card8() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    tgloss.innerText = "Already Added!";
    tgloss.style.color = "black";
    tgloss.style.backgroundColor = "pink";


    var head = document.querySelector("#card8-tgloss").innerText;
    var para = document.querySelector("#tgloss-rs").innerText;

    localStorage.setItem("card8_head", head);
    localStorage.setItem("card8_price", para);
   
    
    alert("Added to cart successfully! ✅");
}

tgloss.addEventListener("click", card8);

function card9() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    lstickk.innerText = "Already Added!";
    lstickk.style.color = "black";
    lstickk.style.backgroundColor = "pink";


    var head = document.querySelector("#card9-LS").innerText;
    var para = document.querySelector("#LS-rs").innerText;

    localStorage.setItem("card9_head", head);
    localStorage.setItem("card9_price", para);
   
    
    alert("Added to cart successfully! ✅");
}

lstickk.addEventListener("click", card9);

function card10() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    broww.innerText = "Already Added!";
    broww.style.color = "black";
    broww.style.backgroundColor = "pink";


    var head = document.querySelector("#card10-BS").innerText;
    var para = document.querySelector("#BS-rs").innerText;

    localStorage.setItem("card10_head", head);
    localStorage.setItem("card10_price", para);

    
    alert("Added to cart successfully! ✅");
}

broww.addEventListener("click", card10);

function card11() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    linerr.innerText = "Already Added!";
    linerr.style.color = "black";
    linerr.style.backgroundColor = "pink";


    var head = document.querySelector("#card11-lin").innerText;
    var para = document.querySelector("#lin-rs").innerText;

    localStorage.setItem("card11_head", head);
    localStorage.setItem("card11_price", para);

    
    alert("Added to cart successfully! ✅");
}

linerr.addEventListener("click", card11);

function card12() {
    // 1. Check: Is there any user info in LocalStorage?
    var savedUser = localStorage.getItem("user_infor");

    // 2. If NO user is found, show alert and STOP the function
    if (savedUser === null) {
        alert("Wait! You haven't signed up yet. Please sign up to buy! 🛑");
        return; // This line kills the function so the code below NEVER runs
    }

    // 3. If YES (user exists), continue to add to cart
    mirrorr.innerText = "Already Added!";
    mirrorr.style.color = "black";
    mirrorr.style.backgroundColor = "pink";


    var head = document.querySelector("#card12-mir").innerText;
    var para = document.querySelector("#mir-rs").innerText;

    localStorage.setItem("card12_head", head);
    localStorage.setItem("card12_price", para);
    
    alert("Added to cart successfully! ✅");
}

mirrorr.addEventListener("click", card12);

