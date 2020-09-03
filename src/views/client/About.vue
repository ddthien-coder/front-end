<template>
<main class="font-sans bg-white">
    <div class="py-7 mx-auto pt-6">
        <section class="bg-white mt-20">
            <div class="max-w-2xl px-6 text-center mx-auto">
                <h2 class="text-3xl font-semibold text-gray-800">{{ $t('about.title') }} <span class="bg-indigo-600 text-white rounded px-1">{{ $t('about.name') }}</span> {{ $t('about.mess') }}</h2>
                <p class="text-gray-600 mt-4">{{ $t('about.sologan') }}</p>

                <div class="flex items-end justify-center mt-16">
                    <img src="@/assets/img/product_ss.svg"/>
                </div>
            </div>
        </section>

        <section class="bg-gray-800 pattern py-20">
            <div class="max-w-5xl px-5 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-white">{{ $t('about.text') }}</h2>

                <p class="text-gray-400 mt-4">{{ $t('about.intro') }}</p>
            </div>
        </section>
    </div>
</main>
</template>

<script>
export default {
    data() {
        return{

        }
    },
}
</script>

<style>

</style>