const BE_URL='http://localhost:8000';

const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

// links.forEach(link => {
//     link.addEventListener("click", e => {
//        e.preventDefault(); //preventing form submit
//        forms.classList.toggle("show-signup");
//     })
// })

let signupForm = document.getElementById("signupForm");
let loginForm = document.getElementById("loginForm");

// signupForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   let email = document.getElementById("email");
//   let password = document.getElementById("password");
// let confirmPassword = document.getElementById("confirm-password");

//   if (email.value == "" || password.value == "") {
//     alert("Ensure you input a value in both fields!");
//   } else if(password.value!==confirmPassword.value){
//     alert("Password and confirm password mustbe same.");
//   }else {

//     const data={
//         email:email.value,
//         password:password.value
//     }

//     console.log('data',data)
//     try {
//         const response = await fetch(`${BE_URL}/api/user/signup`, {
//   method: "POST",
//   body: JSON.stringify({
//     email: email.value,
//     password: password.value,
    
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// });
    
//         const result = await response.json();
//         console.log("Success:", result);
//       } catch (error) {
//         console.error("Error:", error);
//       }

//     // username.value = "";
//     // password.value = "";
//   }
// });


loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
console.log('hereere')
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    const data={
        email:email.value,
        password:password.value
    }

    console.log('data',data)
    try {
        const response = await fetch(`${BE_URL}/api/user/login`, {
  method: "POST",
  body: JSON.stringify({
    email: email.value,
    password: password.value,
    
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
    
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }

    // username.value = "";
    // password.value = "";
  }
});


