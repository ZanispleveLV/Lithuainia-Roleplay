const btn1 = document.querySelector(".display"),
    icon = document.querySelector(".display a i"),
    body = document.querySelector("body"),
    optionMenu = document.querySelector(".edit"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text"),
    selectBtn2 = optionMenu.querySelector(".select-btn2"),
    options2 = optionMenu.querySelectorAll(".option2"),
    sBtn_text2 = optionMenu.querySelector(".sBtn-text2");


      btn1.addEventListener('click', () =>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
          icon.className = "bx bx-sun icon";
      }else{
          icon.className = "bx bx-moon icon";  
      }
      });

      
      selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});


selectBtn2.addEventListener("click", () => optionMenu.classList.toggle("active2"));       

options2.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text2.innerText = selectedOption;

        optionMenu.classList.remove("active2");
    });
});