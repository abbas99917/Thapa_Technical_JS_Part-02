let container = document.querySelector(".faq-container")

const getAnswer = (e) =>{

    if(e.target.classList.contains("faq-question")){
        let answer = e.target.nextElementSibling;
        answer.classList.toggle("show")
        e.target.classList.toggle("active")
    }
      

}
container.addEventListener("click",getAnswer)