<template>
  <div class="normal-case tracking-normal">
    <a href="/#login" @click.prevent="show" class="text-copy-primary uppercase hover:text-gray-600">{{ $t('header.login') }}</a>
    <modal name="modal-login" @opened="opened" :adaptive="true" :height="630" :width="400">
      <div class="px-12 py-8">
         <img class="mx-auto h-12 w-auto" src="@/assets/img/logo_200x200.png" alt="MOA">
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">{{ $t('header.login') }}</h2>
        <form action="#" method="post">
          <div class="form-group mb-4">
            <label for="email" class="block font-normal uppercase tracking-wide text-xs mb-1">Email</label>
            <input type="email" id="email" name="email" required class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" 
                ref="email" @keydown.shift.tab.prevent="" v-model="username">
          </div>
          <div class="form-group mb-4">
            <label for="password" class="block font-normal uppercase tracking-wide text-xs mb-1">Password</label>
            <input type="password" id="password" required name="password" class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                 v-model="password">
          </div>
           <div class="w-full flex items-center justify-between px-3 mb-3 ">
            <label for="remember" class="flex items-center w-1/2">
               <input type="checkbox" name="" id="" class="mr-1 bg-white shadow">
               <span class="text-sm text-gray-700 pt-1">Remember me</span>
            </label>
            <div class="w-1/2 text-right">
               <a href="#" class="text-blue-500 text-sm tracking-tight">Forgot Password?</a>
            </div>
         </div>
          <div class="form-group mb-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Login</button>
          </div>
        </form>
        <div class="text-sm font-normal text-center mb-6">
          <p>Don't have an account? <a href="#" class="text-blue-600 hover:text-blue-800" @click.prevent="showRegister" @keydown.tab.exact.prevent="">Register</a></p>
        </div>
        <div class="grid sm:grid-cols-3 gap-0 mb-6">
                        <hr class="mt-3 hidden sm:block border-gray-400">
                        <span class="text-center bg-white text-sm text-gray-700 font-normal">Or continue with</span>
                        <hr class="mt-3 hidden sm:block border-gray-400">
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <button type="button" class="relative border-solid border shadow-sm border-gray-400
                        font-semibold text-gray-600 text-sm py-1 text-center rounded text-center w-full
                        focus:outline-none hover:border-indigo-600 transition-all duration-200">
                            <i class="fab fa-google text-lg" style="line-height: 28px;"></i>
                        </button>
                        <button type="button" class="relative border-solid border shadow-sm border-gray-400
                        font-semibold text-gray-600 text-sm py-1 px-0 rounded text-center w-full
                        focus:outline-none hover:border-indigo-600 transition-all duration-200">
                            <i class="fab fa-twitter text-lg" style="line-height: 28px;"></i>
                        </button>
                        <button type="button" class="relative border-solid border shadow-sm border-gray-400
                        font-semibold text-gray-600 text-sm py-1 px-0 rounded text-center w-full
                        focus:outline-none hover:border-indigo-600 transition-all duration-200">
                            <i class="fab fa-github text-lg" style="line-height: 28px;"></i>
                        </button>
        </div>
      </div>
            <div class="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
           <span>By <a class="text-blue-500" href="https://facebook.com/Meocacahaha">@dinhducthien</a></span>
          </div>
    </modal>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username: "",
      password: ""
    }
  },
  methods: {
    show() {
      this.$modal.show('modal-login')
    },
    showRegister() {
      this.$modal.show('modal-register')
      this.$modal.hide('modal-login')
    },
    opened() {

    },
    hide() {
      this.$modal.hide('modal-login')
    }
  }
}
</script>

