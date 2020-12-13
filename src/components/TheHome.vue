<template>
<div>

    <div class="fixed-top container">
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">

            <nav class="navbar navbar-dark bg-dark">
            <h6 class="navbar-brand ">Usuario: {{user.name}}</h6>
            <h6 class="navbar-brand ">Correo: {{user.email}}</h6>
            <form class="form-inline">
                <button 
                class="btn btn-primary my-2 my-sm-0" 
                type="submit"
                @click.prevent="logOut"
                >Salir</button>
            </form>
            </nav>
      
        </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
    </div>

  

</div>

</template>


<script>
export default {
    data(){
        return{
            user:{}
        }
    },
    methods:{
        //para traer los datos de interes del usuario e imprimirlos en el home
        getUserDetails(){
            // primero creamos y traemos los datos que necesitamos, user y token (jwt)
            let user = localStorage.getItem('user');
            let token = localStorage.getItem('jwt');
            
            if(token){
                //se formatea el dato con JSON.parse
                //this.user es el que esta en el return del data(), el otro user es el local del if
               this.user = JSON.parse(user);
            }


        },
        //Método LogOut y que nos regrese a login inicia
        logOut(){
            //Se debe eliminar el Tken(jwt) y el user que estan el local storage
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            //Mensaje de salida
            swal(" Bien!", "Saliste de la sesión correctamente", "success");
            //Push al home, para volver a la ventana del logIn inicial
            this.$router.push('/');

        }
    },
    //Etapa de los ciclos de vida (una de ellas)
    // En este momento llamamos le metodo que es el momento en el que se crea
    created(){
        this.getUserDetails();
    }
}
</script>