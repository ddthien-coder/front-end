<template>
  <div class="normal-case tracking-normal">
    <a href="/#register" @click.prevent="show" class="text-copy-primary uppercase hover:text-gray-600">{{ $t('header.register') }}</a>
    <modal name="modal-register" @opened="opened" :adaptive="true" :height="700" :width="400">
       <div class="px-12 py-8">
         <img class="mx-auto h-12 w-auto" src="@/assets/img/logo_200x200.png" alt="MOA">
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">{{ $t('header.register') }}</h2>
        <form action="#" method="post">
          <div class="form-group mb-4">
            <label for="email" class="block font-normal  tracking-wide text-xs mb-1">{{ $t('reg.email') }} <span style="color: red">*</span></label>
            <input v-model="email" type="email" id="email" required name="email" class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                 ref="email" @keydown.shift.tab.prevent="">
          </div>
          <div class="form-group mb-4">
            <label for="email" class="block font-normal  tracking-wide text-xs mb-1">{{ $t('reg.username') }} <span style="color: red">*</span></label>
            <input  v-model="username" type="username" id="username" required name="username" class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                 ref="username" @keydown.shift.tab.prevent="">
          </div>
          <div class="form-group mb-4">
            <label for="password" class="block font-normal  tracking-wide text-xs mb-1">{{ $t('reg.password') }} <span style="color: red">*</span></label>
            <input v-model="password" type="password" id="password" required name="password" class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
          </div>
          <div class="form-group mb-4">
            <label for="confirm_password" class="block font-normal  tracking-wide text-xs mb-1">{{ $t('reg.Cpass') }}<span style="color: red">*</span></label>
            <input v-model="Cpassword" type="password" id="confirm_password" required name="confirm_password" class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
          </div>
              <div class="flex justify-start">
                <label class="block text-gray-500 font-bold my-4 flex items-center">
                  <input class="leading-loose text-pink-600 top-0" type="checkbox"/>
                   <span class="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                      <a href="#"
                        class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                              Terms and Conditions of the site
                                </a>and
                                <a href="#"
                                  class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                              the information data policy.</a>
                         </span>
                    </label>
                </div>
          <div class="form-group mb-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Register</button>
          </div>
        </form>
        <div class="text-sm font-normal text-center">
          <p>Already have an account? <a href="#" class="text-blue-600 hover:text-blue-800" @click.prevent="showLogin" @keydown.tab.exact.prevent="">Login</a></p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      Cpassword: ''
    }
  },
  methods: {
    show() {
      this.$modal.show('modal-register')
    },
    showLogin() {
      this.$modal.show('modal-login')
      this.$modal.hide('modal-register')
    },
    opened() {
      this.$refs.email.focus()
    },
    hide() {
      this.$modal.hide('modal-register')
    }
  }
}
</script>


