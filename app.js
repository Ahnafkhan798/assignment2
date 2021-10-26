var quotes = [
    '\"All our dreams can come true, if we have the courage to pursue them.\"\n\n-Walt Disney',
    '\"The secret of getting ahead is getting started.\"\n-Mark Twain',
    '\"I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.\"\n-Michael Jordan',
    '\"Everything you can imagine is real.\"\n\n-Pablo Picasso',
    '\"Things may come to those who wait, but only the things left by those who hustle.\"\n\n-Abraham Lincoln',
    '\"How you look at it is pretty much how you will see it\"\n-Steve Jobs',
    '\"Everything comes to him who hustles while he waits.\"\n-Thomas Edison',
    '\"We are what we repeatedly do. Excellence, then, is not an act, but a habit.\"\n-Aristotle',
    '\"Some people want it to happen, some wish it would happen, others make it happen.\"\n-Michael Jordan',
    '\"The miracle is not that we do this work, but that we are happy to do it.\"\n-Mother Teresa',
    
]



function QuoteBox() {
    let randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum];


}


function ChangeRed() {
    document.getElementById('quote').style.fontSize = "bold";
    document.getElementById('quote').style.background = "red";
    document.getElementById('quote').style.fontFamily = "Lucida Handwriting";
    document.getElementById('quote').style.color = "white";

}

function ChangeBlue() {
    document.getElementById('quote').style.fontSize = "bold";
    document.getElementById('quote').style.background = "blue";
    document.getElementById('quote').style.fontFamily = 'Lucida Handwriting';
    document.getElementById('quote').style.color = "white";

}

function ChangeYellow() {
    document.getElementById('quote').style.fontSize = "bold";
    document.getElementById('quote').style.background = "yellow";
    document.getElementById('quote').style.fontFamily = 'Lucida Handwriting';
    document.getElementById('quote').style.color = "red";

}

function ChangePink() {
    document.getElementById('quote').style.fontSize = "bold";
    document.getElementById('quote').style.background = "pink";
    document.getElementById('quote').style.fontFamily = 'Lucida Handwriting';
    document.getElementById('quote').style.color = "white";

}

QuoteBox()





function converter() {
    var output = 0;

    document.getElementById("bn").addEventListener("change", function () {
        const option = document.getElementById("bn").value;
        if (option == "pound to kg") {
            let input = document.getElementById("input").value;
            output = (input / 2.2046).toFixed(4) + " kilograms";
        }
        else if (option == "kg to pound") {
            let input = document.getElementById("input").value;
            output = (input * 2.2046).toFixed(4) + " pounds";
        }
    });


    document.getElementById("get").addEventListener("click", function () {
        document.getElementById("output").value = output;
    })
}



function solution() {
    var values = document.getElementById('part1').value.split(/,/g);
    var sum = values.reduce(function (a, b) { return parseInt(a) + parseInt(b); });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = sum / values.length;
    document.querySelector('#reverse').innerHTML = values.reverse().join(',');
}

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};




const inputarea1 = document.querySelector('#clear');
var textarea = document.querySelector('#txt');

inputarea1.addEventListener('click', function () {
    textarea.value = '';
}, false);



function capital() {
    document.getElementById("txt").style.textTransform = "uppercase";
}


const inputarea2 = document.querySelector('#sort');
inputarea2.addEventListener('click', function () {
    textarea.value = textarea.value.split('').sort().join('').trim();
}, false);


const inputarea3 = document.querySelector('#reverse');
inputarea3.addEventListener('click', function () {
    textarea.value = textarea.value.split(' ').reverse().join(' ');
}, false);


const inputarea4 = document.querySelector('#stripBlank');
inputarea4.addEventListener('click', function () {
    textarea.value = textarea.value.replace(/(\r\n|\n|\r)/gm, "");
}, false);



const inputarea5 = document.querySelector('#addNumbers');
inputarea5.addEventListener('click', function () {
    textarea.value = textarea.value.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
}, false);


const inputarea6 = document.querySelector('#shuffle');
inputarea6.addEventListener('click', function () {
    textarea.value = textarea.value.split('').sort(function () { return 0.5 - Math.random() }).join('');
}, false);