import supabase from "./config.js";

let logBtn = document.getElementById("logbtn")

async function logout(e) {
    e.preventDefault()
    try {

        // supabase docs > js > sigout a user
        const { error } = await supabase.auth.signOut()

        if(!error){
            alert("Logout successfully!!")
            location.href="./login.html"
        }
    } catch (error) {
        console.log(error);
        
    }
}

logBtn && logBtn.addEventListener("click", logout)