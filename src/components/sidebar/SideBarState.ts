import { ref, computed } from 'vue'

const collapsed = ref(false)
const toggleSidebar = () => (collapsed.value = !collapsed.value)

const SIDEBAR_WIDTH = 260
const SIDEBAR_WIDTH_COLLAPSED = 40
const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)

export {
  collapsed,
  toggleSidebar,
  sidebarWidth
}