<template>
  <div
    ref="refFadeInEl"
    class="fade-in"
  >
    <img
      v-if="elTagName === 'img'"
      :src="require(`@/assets/${imgTagSrc}`)"
      :alt="imgTagAlt"
      :class="classList"
    >
    <a 
      v-else-if="elTagName === 'a'"
      href="javascript:void(0)"
      :class="classList"
    >
      {{ aTagInnerText }}
    </a>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: 'Fadeelements',
  props: {
    elTagName: {
      type: String,
      required: true
    },
    fadeSec: {
      type: Number,
      required: true
    },
    classList: {
      type: String,
      required: false,
      default: "",
    },
    imgTagSrc:{
      type: String,
      required: false,
      default: "",
    },
    imgTagAlt:{
      type: String,
      required: false,
      default: "",
    },
    aTagInnerText:{
      type: String,
      required: false,
      default: "",
    }
  },
  mounted() {
    const fadeEl = this.$refs.refFadeInEl;
    gsap.to(fadeEl, 1, 
      {
        delay: this.fadeSec * .8,
        opacity : 1
      }
    );
  },
}
</script>

<style>

</style>