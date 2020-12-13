<template>

    <div class="col-sm-8 main-section " style="width: 400px">
            
   <form class="border border-secondary mt-5" >
  
       <div class="col-12 user-img">
      <img src="data:image/jpeg;base64,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" class="icono-sesion" alt="icono usuario">

  </div>
  <div class="container" style="width: 350px">
 
  <div class="form-group ">
    <label for="exampleInputEmail1">Correo electrónico</label>
    <input 
    v-model="login.email" 
    type="email" class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    
    <input 
    v-model="login.password" 
    type="password" 
    class="form-control" 
    id="exampleInputPassword1">
  </div>

  </div>

  

  <button 
  @click.prevent="loginUser"
  type="submit" 
  class="btn btn-primary">Ingresar</button>
</form> 

    </div>
</template>

<script>

import swal from 'sweetalert';

export default {
    name: 'TheLogin',
    data(){
        return{
            login:{
                email:'',
                password:''
            }

        }

    },
    methods:{
        async loginUser(){
            try{
                let response = await this.$http.post('/api/auth/signin', this.login);
                // console.log(response.data)
                let token = response.data.accessToken;
                let user = response.data.user

                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));
                if(token){
                    swal(" Éxito!!", "Login correcto", "success")
                    this.$router.push('/home');
                }
            }
            catch(e){
                swal(" Oops !", "Algo salió mal", "error")
                console.log(err.response)

            }
        }

    }

}

</script>
