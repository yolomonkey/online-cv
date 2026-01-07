<template>
  <section id="experience">
    <h2>Experience</h2>

    <article class="job" v-for="job in jobs" :key="job.id">
      <header>
        <h3>{{ job.title }}</h3>
        <p>{{ job.period }}</p>
        <button class="job-toggle" @click="toggle(job.id)">
          {{ open[job.id] ? "Hide details" : "Show details" }}
        </button>
      </header>

      <transition name="fade">
        <div v-show="open[job.id]" class="job-details">
          <ul>
            <li v-for="d in job.details" :key="d">{{ d }}</li>
          </ul>
        </div>
      </transition>
    </article>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { Job } from "@/data/types";

const props = defineProps<{ jobs: Job[] }>();

const open = reactive<Record<string, boolean>>(
  Object.fromEntries(props.jobs.map((j) => [j.id, false]))
);

function toggle(id: string) {
  open[id] = !open[id];
}
</script>

<style scoped>
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
