<template>
  <section class="collapsible">
    <h2>
      <button
        class="section-toggle"
        :aria-expanded="open"
        @click="open = !open"
      >
        {{ title }}
      </button>
    </h2>

    <transition name="fade">
      <div v-show="open" class="section-content">
        <slot />
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ title: string }>();
const open = ref(false);
</script>

<style scoped>
/* Optional: you already have keyframes fadeIn in your CSS;
   this makes <transition> smooth too. */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
