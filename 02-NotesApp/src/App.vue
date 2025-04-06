
<script setup>
import { ref } from 'vue'; 
import { errorMessages } from 'vue/compiler-sfc';

const showModal=ref(false)
const newNote=ref("")
const notes =ref([])
const errorMessage=ref("")

function getRandomColor() {
  const color="hsl("+ Math.random()*360+ ",100%,75%)";
  return color;
}

function closeModal() {
  showModal.value=false;
  newNote.value = "";
  errorMessage.value="";
}

const addNote =() => {
  if (newNote.value.length<10) {
    return errorMessage.value ="Note needs to be 10 characters or more"
  }

  
  notes.value.push({
    id:Math.floor(Math.random()),
    text:newNote.value,
    color: getRandomColor(),
    date:new Date()
  })
  showModal.value=false;
  newNote.value=""
  errorMessage=""
}
</script>



<template>
  <main>
   <div v-show="showModal" class="overlay">
      <div class="modal">
        
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10" > </textarea>
        <p v-if="errorMessage"> {{ errorMessage }}</p>
        <button @click="addNote"> Add Note</button>
        <button class="close" @click="closeModal"> Close</button>
      </div>
    </div>


 <div class="container">
  <header>
    <h1>Notes </h1>
    <button @click="showModal=true">+</button>
  </header>
   <div class="cards-container">
    <!-- 不带冒号的style="color:red" = 静态样式，直接写CSS值 -->
    <!-- 带冒号的:style="{color:变量}" = 动态样式，值来自JavaScript变量或表达式 -->
    <div 
        v-for="note in notes" 
        class="card" 
        :style="{backgroundColor:note.color}" 
    > 
       <p class="main-text"> {{ note.text }} </p>
       <p class="date"> {{ note.date.toLocaleDateString("en-US") }}</p>
    </div> 
   </div>
 </div>
  </main>
</template>


<style scoped>

main {
  height: 100vh;
  width: 100vw;
}

/* 在 css 中要选中一个 class,得用.class 的格式 */
.container {
  max-width: 1000px;
  /* 限定内容到边框的距离 */
  padding: 10px;   
  /* 上下边距为 0，左右自动均等(对齐); 上 下 左 右 */
  margin: 0 auto;
}

header {
  /* 把标题区域的元素变成横排显示 */
  display: flex;  
  /* 沿着主轴方向对齐元素，一个靠左，一个靠右 */
  justify-content: space-between;
  /* 垂直方向居中对齐 （让标题和按钮上下对齐） */
  align-items: center;
}

h1 {
  font-weight: bold;
  /* 给标题下面的内容空一些距离 */
  margin-bottom: 25px;
  font-size: 75px;
}

/* 表示选中 header 标签内的所有button进行样式设置 */
header button {
  /* 线条的宽度 */
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  /* cursor 用于改变鼠标指针悬停在元素上时的形状 */
  cursor: pointer;
  background-color: rgb(21,20,20);
  border-radius: 100%;
  color: white;
  font-size: 20px;

}

.card {
width:225px ;
height: 225px;
background-color: rgb(237,182,44);
padding: 10px;
border-radius: 15px;
/* 改变主轴方向为垂直方向 */
flex-direction: column;
justify-content: space-between;
margin-right: 20px;
margin-bottom: 20px;
display: flex;

}

.date {
  font-size: 12.5px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  /* 上下内边距 左右内边距 */
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  /* 元素上方与其他元素之间的空间 */
  margin-top: 15px;
}

 .modal .close {
  background-color: rgb(193,15,15);
  margin-top:7px;
 
}

</style>