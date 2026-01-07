<template>
  <CollapsibleSection title="Education">
    <div v-for="e in items" :key="e.title">
      <h3>{{ e.title }}</h3>
      <p>{{ e.period }}</p>
    </div>
  </CollapsibleSection>
</template>

<script setup lang="ts">
import type { EducationItem } from "@/data/types";
import CollapsibleSection from "./CollapsibleSection.vue";

defineProps<{ items: EducationItem[] }>();
</script>
