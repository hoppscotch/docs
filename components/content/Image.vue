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
    default: "",
  },
  zoomable: {
    type: Boolean,
    required: false,
    default: true,
  },
  mode: {
    type: Boolean,
    required: false,
    default: true,
  },
})

const colorMode = useColorMode()
</script>

<template>
  <p style="margin: var(--prose-li-margin)">
    <img
      v-if="!colorMode.unknown"
      :src="`/images/${
        mode ? `${src}-${colorMode.value}.${extension}` : `${src}.${extension}`
      }`"
      :alt="alt"
      :class="{ 'image-zoomable': zoomable }"
      :style="styles"
    >
  </p>
</template>

<style>
.image-zoomable {
  border: 1px solid var(--elements-border-secondary-static) !important;
  border-radius: var(--radii-xs) !important;
}

.medium-zoom-overlay {
  background-color: var(--docus-body-backgroundColor) !important;
  z-index: 999 !important;
}

.medium-zoom-image--opened {
  z-index: 1000 !important;
}
</style>
