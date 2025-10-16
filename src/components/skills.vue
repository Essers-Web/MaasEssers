<template>
  <div class="skills">
    <h1 ref="title">skills</h1>
    <div class="skill-box">
      <div class="line"></div>
      <h2>Frontend Development:</h2>
      <div ref="FrontEndBox" class="skills-layout">
        <div class="skills-layout-item"  v-for="(skill, index) in FrontEnd" :key="index">
            <p>{{skill}}</p>
        </div>
      </div>
      <div class="line"></div>
      <h2>Developer Tools:</h2>
      <div ref="DevToolsBox" class="skills-layout">
        <div class="skills-layout-item"  v-for="(skill, index) in DevTools" :key="index">
          <p>{{skill}}</p>
        </div>
      </div>
      <div class="line"></div>
      <h2>Communication Skills:</h2>
      <div ref="LanguagesBox" class="skills-layout">
        <div class="skills-layout-item"  v-for="(skill, index) in Languages" :key="index">
          <p>{{skill}}</p>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const FrontEnd =["HTML", "CSS", "Javascript", "Vue.js", "Vite", "API's (small)"];
const DevTools =["GitHub", "WebStorm", "Figma"]
const Languages =["Dutch", "English", "Cambridge: B2"];
const title = ref(null)
const FrontEndBox = ref(null);
const DevToolsBox = ref(null);
const LanguagesBox = ref(null);

function checkPosition(){
  if(!title.value) return;
  const rect = title.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if(rect.top < viewportHeight * 0.7){
    FrontEndBox.value.style.transform = "translateX(0)";
    DevToolsBox.value.style.transform = "translateX(0)";
    LanguagesBox.value.style.transform = "translateX(0)";


  }
}

onMounted(() => {
  window.addEventListener("scroll", checkPosition)
  window.addEventListener("resize", checkPosition)
  checkPosition()
})

onUnmounted(() => {
  window.removeEventListener("scroll", checkPosition)
  window.removeEventListener("resize", checkPosition)
})



</script>

<style scoped>
h1{
  color: #dfdfdf;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  font-size: 4vw;
  margin: 0;
}

h2{
  color: #dfdfdf;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  font-size: 2.5vw;
  margin-top: 1vw;
}

p{
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  color: #ff8000;
  font-size: 2vw;
  margin-top: 0.5vw;
  margin-bottom: 0;
  word-spacing: 0.2em;
  line-height: 1.5;
}

.skills {
  width: 100%;
  box-sizing: border-box;
  padding-top: 13vw;
  padding-left: 5vw;
}

.skill-box{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  flex-direction: column;
}

.skills-layout{
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1vw;
  transform: translateX(-100%);
  transition: transform 1s ease-in-out;
}

.skills-layout-item{
  width: auto;
  height: auto;
  margin: 1vw;
  background-color: #272727;
  padding: 1.5vw;
  border-radius: 1vw;
  box-shadow: 0 0 0.5vw rgb(255, 128, 0);
}

.skills-layout-item:hover{
  animation: shake-rotate 0.5s ease-in-out;
}

@keyframes shake-rotate {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(5deg); }
  50%  { transform: rotate(-5deg); }
  75%  { transform: rotate(4deg); }
  100% { transform: rotate(0deg); }
}

.line{
  width: 80%;
  height: 0.3vw;
  background-color: #FF8000FF;
  box-shadow: 0 0 4vw rgb(255, 128, 0);
  border-radius: 1vw;
  margin: 2vw 0 2vw 0;
}

@media (max-width: 700px), (orientation: portrait) {
  h1 {
    font-size: 8vw;
  }

  h2 {
    font-size: 5vw;
  }

  p {
    font-size: 4vw;
  }

  .line{
    height: 0.6vw;
  }
}

</style>