<template>
  <a
    :href="link"
    class="border rounded-lg cursor-pointer flex flex-col
     bg-gray-100 border-gray-200 
     py-8 
     px-4 
     transition
      no-underline
     items-center justify-center 
     dark:bg-gray-800 dark:border-gray-700
      hover:bg-gray-200 hover:border-gray-300 
     hover:dark:border-gray-600 hover:dark:border-gray-400  "
    target="_blank"
  >
    <img class="w-16" layout="responsive" :src="logo" :alt="title" />
    <h4 class="text-center text-normal px-4">{{ title }}</h4>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    logo: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
a {
  @apply no-underline;
}
</style>
