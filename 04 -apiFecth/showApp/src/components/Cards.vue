<script setup> 

 const props =  defineProps(
    ['image'
    ,'name']
 )

</script>


<template>
  <NCard >
    <template #cover>
      <img :src="image">
    </template>
    <h3> {{name}}</h3>
    <slot> </slot>
        <!-- <div class="jobs">  
            <p v-for="(job,index) in occupation" :key="job">
            {{job}} <span v-if="index <occupation.length -1"> ,&nbsp;  </span>
            </p>
        </div> -->
  </NCard>
</template>

<style scoped>
.n-card {
    width: 200px;
    margin:10px 20px;
    /* height: 400px; */

}
.n-card img {
    height: 250px 
   
}

p {
    font-size: 10px;
}

.jobs {
    display: flex;
    flex-wrap: wrap;
}
</style>