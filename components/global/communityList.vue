<template>
  <a
    :href="link"
    class="cursor-pointer flex
     py-4
     px-8
     transition
      no-underline
     items-center
     dark:bg-gray-800  hover:bg-gray-100  "
    target="_blank"
  >
    <img class=" w-6" layout="responsive" :src="logo" :alt="title" />
    <span
      class="font-semibold mt-0 text-center text-normal ml-4 text-gray-700"
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
