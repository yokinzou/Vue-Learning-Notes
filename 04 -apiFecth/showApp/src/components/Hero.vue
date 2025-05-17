<script setup>
import { ref } from 'vue'

const {isBreakingBad} = defineProps([
        'isBreakingBad'
    ])

// 声明可发出的事件 (一个可以发出 selectShow 的扩音器)
const emit = defineEmits(['selectShow'])

// 点击时通知外部（父组件）切换 （发生的动作）
const changePageStatus =() =>{
    emit('selectShow')
}

// const isBreakingBad =ref(true)

// 以下函数在传参情况下，不支持修改父组件的参数值，要改成发射状态的形式
// const changePageStatus = () => {
//     isBreakingBad.value=!isBreakingBad.value
// }

</script>


<template>
<div class="hero"> 
    <h2>{{ isBreakingBad ? "Breaking Bad" : "Ricky and Morty" }}</h2>
    <p @click="changePageStatus">{{ isBreakingBad ? "Ricky and Morty":"Breaking Bad" }}</p>

</div>
</template>


<style scoped>
.hero {
    height : 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column
}
.hero img {
    position: absolute;
    height: 700px;
    opacity: 0.1;
}
.hero h1 {
    font-size: 100px;
    font-weight: bold;
}
.hero p {
    cursor: pointer;
}
</style>