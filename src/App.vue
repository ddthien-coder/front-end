<template>
  <div id="app" class="font-sans text-gray-800 ">
    <header class="border border-blue-700 bg-white z-10 absolute w-full shadow-md">
      <nav class="container mx-auto px-2 flex flex-wrap justify-between items-center py-3">
        <div class="mb-0 lg:mb-6 mx-auto xl:mb-0">
          <router-link :to="`/${$i18n.locale}`" class="font-bold text-xl flex items-center">
            <img src="@/assets/img/logo_200x200.png" alt="logo" class="w-10">
            <span>MOA</span>
          </router-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggleMenu" class="flex items-center px-2 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="menuOpen ? 'block': 'hidden'"
        >
           <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/`" class="text-copy-primary hover:text-gray-600">{{ $t('header.home') }}</router-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/about`" class="text-copy-primary hover:text-gray-600">{{ $t('header.about') }}</router-link>
          </li>
           <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/product`" class="text-copy-primary hover:text-gray-600">{{ $t('header.product') }}</router-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/contact`" class="text-copy-primary hover:text-gray-600">{{ $t('header.contact') }}</router-link>
          </li>
           <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/blog`" class="text-copy-primary hover:text-gray-600">{{ $t('header.blog') }}</router-link>
          </li>
           <li class="mr-8 mb-6 lg:mb-0">
             <router-link :to="`/${$i18n.locale}/service`" class="text-copy-primary hover:text-gray-600"><Servicemenu />{{ $t('header.service') }}</router-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <modal-login /> 
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <modal-register /> 
          </li>
          <li class="mb-4 lg:mb-0 lg:mr-8">
            <language-switcher />
          </li>
          <li class="mb-4 lg:mb-0 lg:mr-8">
            <dropdown-menu />
          </li>
        </ul>
      </nav>
    </header>
    <div class="bg-gray-100 min-h-screen pt-15 text-lg">
      <router-view/>
    </div>
     <div class="mx-auto">
        <modal-footer/>
      </div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/client/Dropmenu/DropdownMenu.vue'
import LanguageSwitcher from '@/components/client/Switcher/LanguageSwitcher.vue'
import Servicemenu from '@/components/client/Menu/Servicemenu.vue'
import ModalLogin from '@/components/client/User/Login.vue'
import ModalRegister from '@/components/client/User/Register.vue'
import ModalFooter from '@/components/client/Footer/Footer'

export default {
  name: 'app',
  components: {
    DropdownMenu,
    Servicemenu,
    ModalLogin,
    ModalRegister,
    LanguageSwitcher,
    ModalFooter
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style src="@/assets/css/tailwind.css" />


