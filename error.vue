<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold"> {{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooooops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn my-7" my-7 @click="handleErrorClear()"> Go home...</button>
    </div>
</template>

<script setup>
    defineProps(['error']);

    function handleErrorClear() {
        clearError({ redirect: '/' })
    }
</script>

<style scoped>

</style>