<template>
  <a
    :href="link"
    class="border rounded-lg cursor-pointer flex flex-col py-8 px-4 transition no-underline items-center justify-center dark:border-gray-800 hover:bg-gray-100 "
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
