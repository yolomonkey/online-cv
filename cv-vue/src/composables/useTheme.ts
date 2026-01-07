import { onMounted, ref } from 'vue';

export function useTheme() {
    const isDark = ref(false);

    function applyTheme(dark:boolean) {
        const root = document.documentElement; // <html>
        root.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        isDark.value = dark;
    }

    function toggleTheme() {
        applyTheme(!isDark.value);
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme');
        applyTheme(savedTheme === 'dark');
    });

    return { isDark, toggleTheme };
}