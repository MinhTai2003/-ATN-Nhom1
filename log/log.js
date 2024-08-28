// showpassword
const eyeIcons = document.querySelectorAll(".showpassword");
   
eyeIcons.forEach((eyeIcon)=>{
    eyeIcon.addEventListener("click",()=>{
        const pInput = eyeIcon.parentElement.querySelector("input");
        if(pInput.type==="password"){
            eyeIcon.classList.replace("fa-eye-slash","fa-eye");
            return(pInput.type="text");
        }
        eyeIcon.classList.replace("fa-eye","fa-eye-slash");
        pInput.type="password";
    });
});
