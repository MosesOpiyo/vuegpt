<template>
    <img alt="Vue logo" src="../../assets/logo.png">
    <div class="container">
        <form>
            <div class="register-texts">
                <h3>REGISTER</h3>
                <h4>Please enter email and password</h4>
            </div>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input class="btn btn-success" routerLink="/Home" type="submit" value="CREATE MY ACCOUNT">
            <p>Have an account? <router-link to="/Login">Login</router-link></p>
            <p style="font-weight: bold;">OR</p>
            <button class="google btn btn-light"><img src="../../assets/google.png" alt="" srcset=""> Continue with Google</button>
        </form>
    </div>
</template>
<script>
export default {
  name: 'SignUpComponent',
}
</script>
<style>
img{
    width: 50px;
}
.container{
    padding-top: 50px;
}
.register-texts{
    color: white;
    text-align: center;

}
h3{
    color: gray;
}
h4 {
    font-weight: 400;
    font-size: 15px;
    color: gray;
    padding-top: 15px;
    padding-right: 10px;
    
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
  }

  input[type="email"],
  input[type="password"] {
    margin-bottom: 15px;
    padding: 10px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  input[type="submit"] {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
button{
    padding: 25px;

}
.google{
    border: 1px solid black;
    background-color: white;
    width: 250px;
}
.google img{
    width: 20px;
}
a{
    text-decoration: none;
    color: black;
}
</style>