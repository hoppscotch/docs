<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  extension: {
    type: String,
    required: true,
  },
})

const colorMode = useColorMode()
</script>

<template>
  <p style="margin: var(--prose-li-margin);">
    <img
      v-if="!colorMode.unknown"
      :src="`${src}-${colorMode.value}.${extension}`"
      :alt="alt"
      style="
      border: 1px solid var(--elements-border-primary-static);
      border-radius: var(--radii-md);
    "
    >
  </p>
</template>
