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
  styles: {
    type: String,
    required: false,
    default: '',
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
      :style="styles"
    >
  </p>
</template>

<style>
.image-zoomable {
  border: 1px solid var(--elements-border-primary-static) !important;
  border-radius: var(--radii-md) !important;
}

.medium-zoom-overlay {
  background-color: var(--docus-body-backgroundColor) !important;
  z-index: 999 !important;
}

.medium-zoom-image--opened {
  border-radius: var(--radii-xs) !important;
  z-index: 1000 !important;
}
</style>
