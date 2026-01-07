<template>
  <section>
    <h2>Selected GitHub Projects</h2>

    <p class="api-sub">
      Automatically loaded from GitHub for user <strong>{{ username }}</strong>
    </p>

    <div v-if="loading">Loading projects…</div>

    <div v-else-if="error" role="alert">
      {{ error }}
    </div>

    <ul v-else>
      <li v-for="r in filteredRepos" :key="r.id">
        <a :href="r.html_url" target="_blank" rel="noreferrer">
          {{ r.name }}
        </a>
        <span v-if="r.description"> — {{ r.description }}</span>
      </li>
    </ul>

    <p v-if="!loading && !error && filteredRepos.length === 0">
      No matching repositories found.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
};

const props = defineProps<{
  username: string;
  includeRepos: string[]; // exact repo names to show
  hideForks?: boolean;
}>();

const repos = ref<Repo[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const filteredRepos = computed(() => {
  return repos.value.filter((r) => {
    const allowed = props.includeRepos.includes(r.name);
    const forkOk = props.hideForks ? !r.fork : true;
    return allowed && forkOk;
  });
});

onMounted(async () => {
  try {
    loading.value = true;
    error.value = null;

    const res = await fetch(
      `https://api.github.com/users/yolomonkey/repos`
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    repos.value = (await res.json()) as Repo[];
  } catch (e) {
    error.value =
      e instanceof Error
        ? e.message
        : "Unknown error while loading GitHub repositories.";
  } finally {
    loading.value = false;
  }
});
</script>
