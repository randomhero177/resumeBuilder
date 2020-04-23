<template>
  <component :is="layout" />
</template>

<script>
export default {
  name: 'LayoutDynamic',
  props: {
    path: {
      type: String,
      default: 'layouts',
    },
  },
  data() {
    return {
      layoutName: 'LayoutDefault',
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        const newLayout = to.meta.layout;
        if (!newLayout && !this.$route.name) { this.layoutName = this.loading; return; }
        if (!newLayout) { this.layoutName = 'LayoutDefault'; return; }
        this.layoutName = newLayout;
      },
    },
  },
  computed: {
    layout() {
      if (!this.layoutName) return;
      const ln = this.layoutName;
      // eslint-disable-next-line
      return () => import(/* webpackChunkName: "layout-[request]" */ `@/${this.path}/${ln}.vue`);
    },
  },
};
</script>
