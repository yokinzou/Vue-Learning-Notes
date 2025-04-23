<script setup>

import { ref ,computed} from "vue";
import q from "../data/quizes.json"
import { useRoute } from "vue-router";
import QuizHeader from "@/components/QuizHeader.vue";
import Question from "@/components/Question.vue";
import Result from "@/components/Result.vue";

const route=useRoute() //使用路由，把路由参数传进来
const quizes=ref(q)
const currentQuestionIndex = ref(0)
const score=ref(0)


const currentQuiz =computed( function() {
    //1. 从路由参数获取 id 并转换为数字
    const quizId =parseInt(route.params.id)

    //2. 在测验数组中查找匹配的测验  
    for (let quiz of quizes.value) {
        if (quiz.id === quizId) {
            return quiz
        }
    }
})

// 正确
const currentQuestionLength = computed(() => {
    return currentQuiz.value.questions.length 
})

const currentQuestion = computed(() => {
    return currentQuiz.value.questions[currentQuestionIndex.value]
})

const barPercentage =computed (() => {
    return `${(currentQuestionIndex.value+1)/currentQuestionLength.value *100}%`
})

const questionStatus=computed(
    ()=> `${currentQuestionIndex.value+1}/${currentQuestionLength.value}`
)

const showResult=ref(false)

//点击事件处理函数
const handleOptionClick = (selectedOption) => {
    //check whether question is correct
    if (selectedOption.isCorrect) {
        score.value++
    }

    // check whether it is the last question


    if (currentQuestionIndex.value<currentQuiz.value.questions.length-1) {
        currentQuestionIndex.value ++
    } else {
        showResult.value=true
    }
}


</script>

<template>

<div>  
    <QuizHeader 
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
    />
    
    <!-- 答题页面 -->
    <div v-if="!showResult">
        <Question
        :currentQuestion="currentQuestion"
        :handleOptionClick="handleOptionClick"
        />
    </div>

    <!-- 结果页面 -->
     <div v-else >
      <Result 
       :score="score"
       :questionLength="currentQuestionLength"
       />
     </div>
</div>

</template>

