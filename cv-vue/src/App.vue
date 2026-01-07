<template>
  <div class="layout">
    <ProfileSidebar
      :profile="profile"
      :skills="skills"
      :isDark="isDark"
      @toggleTheme="toggleTheme"
    />

    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>{{ aboutMe }}</p>
      </section>

      <ExperienceSection :jobs="jobs" />

      <EducationSection :items="education" />

      <!-- API requirement -->
      <ApiShowcase username="yolomonkey" />
    </main>
  </div>

  <footer>
    <p>© 2025 Zan Molnar</p>
  </footer>
</template>

<script setup lang="ts">
import ProfileSidebar from "@/components/ProfileSidebar.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ApiShowcase from "@/components/ApiShowcase.vue";

import { useTheme } from "@/composables/useTheme";
import { aboutMe, education, jobs, profile, skills } from "@/data/cv";

const { isDark, toggleTheme } = useTheme();
</script>
