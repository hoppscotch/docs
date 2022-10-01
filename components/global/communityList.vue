<template>
  <a
    :href="link"
    class="flex items-center px-8 py-4 no-underline transition cursor-pointer dark:bg-gray-800 hover:bg-gray-100"
    target="_blank"
  >
    <img class="w-6" layout="responsive" :src="logo" :alt="title" />
    <span
      class="mt-0 ml-4 font-semibold text-center text-gray-700 text-normal"
      >{{ title }}</span
    >
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
