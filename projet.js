//projet password
function genererPass(){
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891234567890!@#$%^&*_-.,";
    const nbr = 12
    let passWord = "";



    
    for(let i = 0; i < nbr ; i++){
         passValue = Math.floor(Math.random() * caracteres.length);
         passWord += caracteres[passValue];
         document.getElementById("password").value  = passWord;

         document.getElementById("password").style.color = "red";

    }
    return passWord;

    
}
genererPass()
function copyPass() {
    var pass = document.getElementById("password");
    pass.select();
    document.execCommand("copy");
    alert("Mot de passe copied!")
    
}
copyPass()







