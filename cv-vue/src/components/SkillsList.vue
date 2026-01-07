<template>
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li v-for="s in skills" :key="s">{{ s }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Skill } from "@/data/types";

defineProps<{ skills: Skill[] }>();
</script>
