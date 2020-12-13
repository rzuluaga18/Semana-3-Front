import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Services from '../views/Services.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    
    //para bloquear que accesan al home sin estar logeado
    //meta: es un metadato puede ser toda la info referente a la data que nos interesa
    meta: {
      requiresAuth: true
    }

  },

  // {
  //   path: '/services',
  //   name: 'Services',
  //   // SOLO SE USA ESTE SI TENEMOS QUE CARGAR ESTA SECCION DESDE EL INICIO Y SE USA CON EL IMPORT AL INICIO
  //   // component: Services
  //   //ESTE LO USAMOS PARA QUE LA PAGINA CARGE SOLO CUANDO SE VAYA A USAR, PARA AHORRAR RECURSOS
  //   component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue'),
    
  //   // children se usa para enlaces internos desnto de la misma pagina
  //   // children:[
  //   //   {
  //   //     path: 'asesoria',
  //   //     name: 'Asesoria',
  //   //     component: () => import(/* webpackChunkName: "asesoria" */ '../views/Asesoria.vue'),
  //   //   }

  //   // ]
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//Se llama al ciclo de vida del router, para verificar dentro de este, recibe tres parámetros to, from, next
//=> arrow funtion (investigar)
router.beforeEach((to, from, next) => {
  //si to conicide con cualquier ruta existente, entonces verifique si eso requiere autenticación(record.meta.requiresAuth)
  if(to.matched.some(record => record.meta.requiresAuth)){
    //si es verdad entonces:
    //mirar si en el localStorage.getItem existe un token (jwp)
    if(localStorage.getItem('jwt') === null){
     //Si Token es null, nos lleva el metodo home
      next({
        path: '/'
      })
      //Sino, pasar, siga sin problema
    }else{
      next();
    }
    //en el if externo si la reta no requiere autenticación le damos pasar
  }else{
    next();
  }

})

export default router
