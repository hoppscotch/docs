import { defineNuxtPlugin } from "#app"
import mediumZoom, { Zoom } from "medium-zoom"

export default defineNuxtPlugin((nuxtApp) => {
  const selector = ".image-zoomable"

  const zoom: Zoom = mediumZoom(selector, {
    margin: 8,
    scrollOffset: 0,
  })

  // (re-)init for newly rendered page, also to work in SPA mode (client-side routing)
  nuxtApp.hook("page:finish", () => {
    zoom.detach(selector).attach(selector)
  })

  // make available as helper to NuxtApp
  nuxtApp.provide("mediumZoom", zoom)
})
