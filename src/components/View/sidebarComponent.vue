<template>
  <div
    class="bg-dark text-white p-3 d-flex flex-column"
    style="width: 250px; height: 100%;"
  >
    <!-- Collapse Button -->
    <button
      class="btn btn-sm btn-outline-light align-self-end mb-3"
      @click="$emit('toggle')"
    >
      ✖
    </button>

    <h4 class="mb-4">Menu</h4>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link text-white" href="#">🏠 Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">📦 Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">📊 Reports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">⚙ Settings</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style scoped>
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

