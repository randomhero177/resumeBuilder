<template>
  <div class="text-right">
    <div class="form__elem" v-tooltip.left="$t('changeTplDescr')">{{ $t('changeTpl') }}</div>
    <select @change="onChange($event)" v-model="templateName" class="select" v-tooltip.left="$t('changeTplDescr')">
      <option v-for="tpl in templateList" :key="tpl">
        <router-link :to="'preview-' + tpl">
          {{ tpl }}
        </router-link>
      </option>
    </select>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'ChangePreview',
    computed: {
      ...mapState({
        templateList: state => state.template.templateList,
      }),
      templateName: {
        get() {
          return this.$store.state.template.templateName;
        },
        set(value) {
          this.$store.commit('template/setTemplateName', value)
        }
      }
    },
    methods: {
      ...mapActions({
        setTemplateName: 'template/setTemplateName',
      }),
      onChange(e) {
        this.$router.push('preview-' + e.target.value);
        if(window.dataLayer) {
          window.dataLayer.push({'event': 'change-preview-template'})
        }
      },
    },
    created() {
      const name = this.$router.history.current.path.split('/preview-');
      this.setTemplateName(name[1]);
    }
  }
</script>