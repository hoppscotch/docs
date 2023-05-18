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
  <p style="margin: var(--prose-li-margin)">
    <img
      v-if="!colorMode.unknown"
      :src="`/images/${src}-${colorMode.value}.${extension}`"
      :alt="alt"
      class="image-zoomable"
    >
  </p>
</template>

<style>
.image-zoomable {
  border: 1px solid var(--elements-border-primary-static);
  border-radius: var(--radii-md);
}

.medium-zoom-overlay {
  background-color: var(--docus-body-backgroundColor) !important;
  z-index: 999;
}

.medium-zoom-image--opened {
  border-radius: var(--radii-xs) !important;
  z-index: 1000;
}
</style>
