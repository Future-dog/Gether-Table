// stores/theme.js
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // Состояние
  const isDark = ref(false)
  
  // Инициализация темы из localStorage
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark'
    applyTheme()
  }
  
  // Применение темы к DOM
  const applyTheme = () => {
    const theme = isDark.value ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
  
  // Переключение темы
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }
  
  // Установка конкретной темы
  const setTheme = (theme) => {
    isDark.value = theme === 'dark'
    applyTheme()
  }
  
  // Автоматическое применение при изменении
  watch(isDark, () => {
    applyTheme()
  })
  
  return {
    isDark,
    toggleTheme,
    setTheme,
    initTheme
  }
})