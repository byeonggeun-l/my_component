<template>
  <div class="information">
    <hr>
    <p>
      컴포넌트명 : 
      <span class="information__text">[ {{ componentName }} ]</span>
    </p>
    <p>
      위치 : 
      <span class="information__text">[ {{ componentPath }} ]</span><br>
      바로가기 : 
      <router-link :to="componentLink">
        <span class="information__text">[ {{ componentName }} ]</span>
      </router-link>
    </p>
    <p>
      컴포넌트 설명(기능) : 
      <span
        class="information__text"
        v-html="componentDesc"
      /><br>
    </p>
    <p>
      스킬 : 
      <span
        class="information__text"
        v-html="componentSkills"
      /><br>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Information',
  props: {
    componentName: {
      type:String,
      required:true
    },
    componentPath: {
      type:String,
      required:true
    },
    componentLink: {
      type:String,
      required:true
    },
    componentDesc: {
      type:String,
      required:true
    },
    componentSkills: {
      type:String,
      required:true
    },
  },
};
</script>

<style>
.information {
    text-align: left;
}
.information__text{
    font-size: 18pt;
    font-weight: bold;
}
</style>