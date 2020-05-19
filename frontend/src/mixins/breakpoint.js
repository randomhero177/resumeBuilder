const breakpoint = {
  data() {
    return {
      clientWidth: 0,
      clientHeight: 0,
    };
  },
  computed: {
    $breakpoint() {
      const xs = this.clientWidth < 576;
      const sm = this.clientWidth < 768 && !xs;
      const md = this.clientWidth < 992 && !(sm || xs);
      const lg = this.clientWidth < 1200 && !(md || sm || xs);
      const xl = this.clientWidth < 1440 && !(lg || md || sm || xs);
      const xxl = this.clientWidth >= 1440 && !(xl || lg || md || sm || xs);
      const xsOnly = xs;
      const smOnly = sm;
      const smAndDown = (xs || sm) && !(md || lg || xl || xxl);
      const smAndUp = !xs && (sm || md || lg || xl || xxl);
      const mdOnly = md;
      const mdAndDown = (xs || sm || md) && !(lg || xl || xxl);
      const mdAndUp = !(xs || sm) && (md || lg || xl || xxl);
      const lgOnly = lg;
      const lgAndDown = (xs || sm || md || lg) && !(xl || xxl);
      const lgAndUp = !(xs || sm || md) && (lg || xl || xxl);
      const xlOnly = xl;
      const xlAndDown = (xs || sm || md || lg || xl) && !xxl;
      const xlAndUp = !(xs || sm || md || lg) && (xl || xxl);
      const xxlOnly = xxl;

      let name;
      switch (true) {
        case (xs):
          name = 'xs';
          break;
        case (sm):
          name = 'sm';
          break;
        case (md):
          name = 'md';
          break;
        case (lg):
          name = 'lg';
          break;
        case (xl):
          name = 'xl';
          break;
        default:
          name = 'xxl';
          break;
      }

      return {
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        name,
        xsOnly,
        smOnly,
        smAndDown,
        smAndUp,
        mdOnly,
        mdAndDown,
        mdAndUp,
        lgOnly,
        lgAndDown,
        lgAndUp,
        xlOnly,
        xlAndDown,
        xlAndUp,
        xxlOnly,
        width: this.clientWidth,
        height: this.clientHeight,
      };
    },
  },
  methods: {
    updateDimensions() {
      this.clientWidth = Math.max(document.documentElement.clientWidth,
        window.innerWidth || 0);
      this.clientHeight = Math.max(document.documentElement.clientHeight,
        window.innerHeight || 0);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions,
        { passive: true });
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.updateDimensions);
  },
};

export default breakpoint;
