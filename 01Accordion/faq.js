const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];


faqData.forEach((faqD)=>{
  const faqItemElement = createFaq(faqD.id, faqD.question, faqD.answer);
  accordianBody.appendChild(faqItemElement)
});

function createFaq(id, question, answer) {
  // faq container
  const faq = document.createElement("div");
  faq.setAttribute("data-id", id);
  faq.classList.add("faq");

  // faq text
  const faqHeaderContainer = document.createElement("div")
  faqHeaderContainer.classList.add("faq_header");
  const faqHeader = document.createElement("h3")
  faqHeader.innerText = question;
  faqHeaderContainer.appendChild(faqHeader);

  const expandIcon = document.createElement("span");
  expandIcon.classList.add("material-symbols-outlined");
  expandIcon.classList.add("show_btn");
  expandIcon.innerText = "expand_circle_down";
  expandIcon.addEventListener('click', function(){
    showFaq(id);
  });

  faqHeaderContainer.appendChild(expandIcon);
  faq.appendChild(faqHeaderContainer);

  // faq content
  const faqContent = document.createElement("p");
  faqContent.classList.add("hidden");
  faqContent.innerText = answer;
  faq.appendChild(faqContent);

  return faq;
}

function showFaq(id) {
  const faqContainer = document.querySelector(`div[data-id='${id}']`);
  const faqAnswer = faqContainer.querySelector("p");
  const expandIcon = faqContainer.querySelector(".material-symbols-outlined");
  
  if(faqAnswer.classList.contains("hidden")) {
    faqAnswer.classList.remove("hidden");
    faqAnswer.style.display = "block";

    // change the icon
    expandIcon.innerText = "expand_less";
  } else {
    faqAnswer.classList.add("hidden");
    faqAnswer.style.display = "none";

    // change the icon
    expandIcon.innerText = "expand_circle_down";
  }
}


function btnStatusUpdate() {
  
}


