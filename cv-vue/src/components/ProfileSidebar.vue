<template>
  <aside>
    <section class="profile">
      <img
        v-if="profile.imageUrl"
        :src="profile.imageUrl"
        alt="Profile photo"
        width="120"
      />
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.role }}</p>
      <p><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></p>
      <p>Tel: {{ profile.phone }}</p>

      <button id="theme-toggle" :aria-pressed="isDark" @click="toggleTheme">
        {{ isDark ? "☀️ Light Mode" : "🌙 Dark Mode" }}
      </button>
    </section>

    <SkillsList :skills="skills" />
  </aside>
</template>

<script setup lang="ts">
import type { Profile, Skill } from "@/data/types";
import SkillsList from "./SkillsList.vue";

defineProps<{
  profile: Profile;
  skills: Skill[];
  isDark: boolean;
}>();

const emit = defineEmits<{
  (e: "toggleTheme"): void;
}>();

function toggleTheme() {
  emit("toggleTheme");
}
</script>
