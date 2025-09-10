<template>
  <div :class="['tabsComponent', sizeClass, borderClass, colorClass]">
    <ul class="nav nav-tabs" role="tablist">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.key || index"
        class="nav-item"
        role="presentation"
      >
        <a
          :class="[
            'nav-link',
            { active: activeIndex === index, disabled: tab.disabled },
          ]"
          href="#"
          role="tab"
          :aria-selected="activeIndex === index ? 'true' : 'false'"
          @click.prevent="selectTab(index)"
          :tabindex="tab.disabled ? -1 : 0"
        >
          <slot :name="'tab-' + index">
            {{ tab.title }}
          </slot>
        </a>
      </li>
    </ul>

    <div class="tab-content mt-3">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.key || index"
        :class="[
          'tab-pane',
          'fade',
          { show: activeIndex === index, active: activeIndex === index },
        ]"
        role="tabpanel"
      >
        <slot :name="'pane-' + index">
          <!-- default fallback content -->
          <p>{{ tab.content || "No content provided." }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsComponent",
  props: {
    tabs: {
      type: Array,
      required: true,
      /*
      Example:
      [
        { title: 'Active', content: 'Content for active tab', disabled: false, key: 'a' },
        { title: 'Link 1', content: 'Content for link 1' },
        { title: 'Link 2', disabled: true },
      ]
      */
    },
    initialActiveIndex: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      default: "", // '', 'sm', 'lg'
      validator: (v) => ["", "sm", "lg"].includes(v),
    },
    border: {
      type: String,
      default: "border-bottom", // or '' to disable border, or other bootstrap border classes like 'border-top'
    },
    color: {
      type: String,
      default: "primary", // bootstrap color like 'primary', 'success', 'danger', etc.
    },
  },
  data() {
    return {
      activeIndex: this.initialActiveIndex,
    };
  },
  computed: {
    sizeClass() {
      if (this.size === "sm") return "nav-tabs-sm";
      if (this.size === "lg") return "nav-tabs-lg";
      return "";
    },
    borderClass() {
      return this.border ? this.border : "";
    },
    colorClass() {
      return this.color ? `border-${this.color}` : "";
    },
  },
  methods: {
    selectTab(index) {
      // TODO: check for testing...
      if (this.tabs[index].disabled) return;
      this.activeIndex = index;
      this.$emit("update:activeIndex", index);
      this.$emit("tab-changed", this.tabs[index]);
    },
  },
};
</script>

<style scoped>
/* Custom sizes */
.nav-tabs-sm .nav-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.nav-tabs-lg .nav-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}

/* Remove blue underline from active tab */
.nav-tabs .nav-link.active {
  border-bottom: none;
}

/* Optional: soften the border below tabs */
.nav-tabs {
  border-bottom: 1px solid #ddd;
}

/* Disabled tab styling */
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}
.tabsComponent .tab-content {
  margin-top: 0;
  padding-top: 0;
}
</style>
