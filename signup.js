import supabase from "./config.js"

let form = document.getElementById('signupForm')
let sEmail = document.getElementById('userEmail')
let sName = document.getElementById('userName')
let sContact = document.getElementById('userContact')
let sPassword = document.getElementById('userPassword')


async function signUp(e) {
    e.preventDefault();
    try{
        if(!sEmail.value){
            alert("plz enter your email")
            return
        }
        if(!sPassword.value){
            alert('plz enter your password')
            return
        }

        // supabase docs > create a new user
        const { data, error } = await supabase.auth.signUp({
            email: sEmail.value,
            password: sPassword.value,
            options:{
                data:{
                    phone: sContact.value,
                    Name: sName.value,
                    role: 'user',
                }
            }
        })
        if(data){
            console.log(data);
            const {id,user_metadata} = data.user


            // supabase docs > insert data
            const{ error: dberr} = await supabase
            .from('users')
            .insert({
                uid:id,
                username: user_metadata.Name,
                email: user_metadata.email,
                role:user_metadata.role
            })
            if(dberr){
                console.log(dberr);  
                
            }
            else{
                alert('signup successfully')
                location.href = './login.html'
            }

        }
        else{
            console.log(error); 
        }
    }
    catch(err){
        console.log(err);  
        
    }

}

form && form.addEventListener("submit",signUp)




