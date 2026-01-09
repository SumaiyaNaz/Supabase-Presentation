const testimonials = [
  [
    "Tutor Hunt was very easy to use and we found the perfect tutor for my 15 year old who just needed that extra confidence in her favourite subject. I would recommmend especially after trying other sites and not getting anywhere.",
    "Louise",
    "Source : Google"
  ],
  [
    "Great site. Excellent tutors, great interface and you are able to handle all the transactions through the site which I appreciated. ",
    "Gavin",
    "Source : Google"
  ],
  [
    "I have used used Tutor Hunt twice for my two sons to provide help with maths and architecture. On both occasions i was more than pleased ",
    "Robert",
    "Source : Google"
  ],
  [
    "Tutor hunt was so easy to use - found the right tutor close to home on first hit. I was able to make contact and ask questions before making a final decision. ",
    "Marie",
    "Source : Feedback form"
  ],
  [
    "Such an easy service to use, and to be able to have the confidence that every professional is vetted makes the process so much more convenient. Exactly what I was after, and our tutor is the perfect match for our child.",
    "Emma",
    "Source : Google"
  ],
  [
    "The Tutor I found on this site is fantastic. .",
    "Eileen",
    "Source : Feedback form"
  ],
  [
    "Wonderful tutor. Highly recommend. Although getting some time with him is quite a feat because he is in such high demand! ",
    "Suzanne",
    "Source : Feedback form"
  ],
  [
    "The tutor we have chosen is out of this world, he has built my sons confidence up no end, I will definitely be using tutor hunt and hopefully the same tutor in the future if my other children should need any assistance.",
    "Clare",
    "Source : Google"
  ],
  [
    "Excellent teacher punctual and has helped my granddaughter with her GCSE work ",
    "Helen",
    "Source : Google"
  ],
  [
    "Invaluable website with some great local tutors! Thoroughly recommend as there are some very experienced tutors linked to this website ",
    "Mala",
    "Source : Google"
  ]
];

function changeTestimonial(index){
  document.getElementById("para1").innerText = testimonials[index][0];
  document.getElementById("para2").innerText = testimonials[index][1];
  document.getElementById("para3").innerText = testimonials[index][2];

  let dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
