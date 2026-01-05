import supabase  from "./config.js";

let  loginForm = document.getElementById('loginForm')
let lEmail = document.getElementById('loginEmail')
let lPass = document.getElementById('loginPassword')

async function login(e) {
    e.preventDefault();
    try {
        if(!lEmail.value){
            alert("plz enter your email")
            return
        }
        if(!lPass.value){
            alert("plz enter your password")
            return
        }

        // supabase docs > Sign in a user
        const { data, error } = await supabase.auth.signInWithPassword({
            email: lEmail.value,
            password: lPass.value,
        })
        if(error){
            console.log(error);
            return
        }

         // 🔎 Get user role from database
        const { data: userData, error: roleError } = await supabase
            .from("users")
            .select("role")
            .eq("uid", data.user.id)
            .single()

        if (roleError) {
            console.log(roleError);
            return
        }
        
        //Sweet Alert
        Swal.fire({
            title : "login",
            text : "congratulation, you are signed in",
            icon : "success",
        });


            // 🔀 Role-based redirect
        if (userData.role === "admin") {
            location.href = "./dashboard.html"
        } else {
            location.href = "./index.html"
        }
        
    } catch (err) {
        console.log(err);
        
        
    }
}

loginForm && loginForm.addEventListener("submit",login)