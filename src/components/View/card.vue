<template>
  <div
    :class="['card', cardBorderClass, 'mb-3']"
    style="max-width: 100%"
  >
    <div
      v-if="showHeader && headerText"
      :class="['card-header', headerBgClass, headerBorderClass]"
    >
      <slot name="header">
        {{ headerText }}
      </slot>
    </div>

    <div :class="['card-body', textClass]">
      <slot></slot>
    </div>

    <div
      v-if="showFooter"
      :class="['card-footer', footerBgClass, footerBorderClass]"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardComponent',
  props: {
    border: { type: String, default: 'success' },
    headerBorder: { type: String, default: 'success' },
    footerBorder: { type: String, default: 'success' },
    textColor: { type: String, default: 'success' },
    headerBg: { type: String, default: 'transparent' },
    footerBg: { type: String, default: 'transparent' },
    showHeader: { type: Boolean, default: true },
    showFooter: { type: Boolean, default: true },
    headerText: { type: String, default: null },
  },
  computed: {
    cardBorderClass() {
      return this.border && this.border !== 'none'
        ? `border-${this.border}`
        : ''
    },
    headerBorderClass() {
      return this.headerBorder && this.headerBorder !== 'none'
        ? `border-${this.headerBorder}`
        : ''
    },
    footerBorderClass() {
      return this.footerBorder && this.footerBorder !== 'none'
        ? `border-${this.footerBorder}`
        : ''
    },
    textClass() {
      return this.textColor ? `text-${this.textColor}` : ''
    },
    headerBgClass() {
      return this.headerBg && this.headerBg !== 'none'
        ? `bg-${this.headerBg}`
        : ''
    },
    footerBgClass() {
      return this.footerBg && this.footerBg !== 'none'
        ? `bg-${this.footerBg}`
        : ''
    },
  },
}
</script>

<style scoped>
/* no outer col wrappers here */
</style>
