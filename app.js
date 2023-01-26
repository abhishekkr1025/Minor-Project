// local reviews data
const reviews = [
    
    {
        id: 1,
        name: "Reshab Kumar",
        job: "2-EEE-19",
        img: "RKS.jpeg",
        text: "He has arranged all the hardware components required for the project.He has also contributed "
    },
    {
        id: 2,
        name: "Abhishek Kumar",
        job: "31-EEE-19",
        img: "Abhishek.jpeg",
        text: "He has done the research work pertaining to project and also made the Project Report."
    },
    {
        id: 3,
        name: "Randhir Yadav",
        job: "34-EEE-19",
        img: "RandhirYa.jpeg",
        text: "He has designed and constructed the whole circuit, from soldering the circuit to testing the circuit."
    },
    {
        id: 4,
        name: "Prakash Pal",
        job: "35-EEE-19",
        img: "Prakash.jpeg",
        text: "He has contributed in various thing like arranging components,designing and circuit simulation."
    }
]
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting Button
let currentItem = 0;

// Load Initial Item

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
})

// show the Person

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show the Previous Person

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show the random Person

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})



