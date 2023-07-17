<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur quo molestiae dicta voluptate itaque, ad inventore quibusdam eum facere.</p>
        <div>{{  data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/ninja?name=mario', {
        method: 'POST',
        body: { age: 25 }
    });
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>