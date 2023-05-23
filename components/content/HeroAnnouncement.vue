<script setup>
defineProps({
  to: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <NuxtLink :to="to" class="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full link">
    <Icon name="lucide:megaphone" class="w-4 h-4 mr-3" />
    <span class="text-sm font-medium">{{ label }}</span>
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
  '.link': {
    color: '{color.primary.900}',
    backgroundColor: '{color.primary.100}',
    borderColor: '{color.primary.400}',
    borderWidth: '{borderWidth.sm}',
    borderStyle: 'solid',

    '@dark': {
      color: '{color.primary.100}',
      backgroundColor: 'transparent',
      borderColor: '{color.primary.700}'
    },

    '&:hover': {
      backgroundColor: '{color.primary.200}',
      '@dark': {
        backgroundColor: '{color.primary.900}'
      },
    }
  }
})
</style>
