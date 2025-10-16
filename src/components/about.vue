<template>
  <div class="about">
    <div ref="box" class="box">
      <h1 ref="title" >About Me!</h1>
      <div class="box-times">
        <div class="past-container">
          <div class="past">
            <h2>Past</h2>
            <p>At 14 I discovered my passion for frontend web development. I started experimenting with HTML and CSS, building small pages and simple interactions, and decided to study the field.</p>
          </div>
          <div class="light-glow"></div>
        </div>
        <div class="present-container">
          <div class="present">
            <h2>Present</h2>
            <p>I’m currently studying web development and focusing on Vue.js. I build small apps, practice component design and state management, and work on UI/UX and responsive layouts to get better as a frontend developer.</p>
          </div>
          <div class="light-glow"></div>
        </div>
        <div class="future-container">
          <div class="future">
            <h2>Future</h2>
            <p>I want to work at a company or agency that builds websites for clients, collaborating with designers and backend developers. My goal is to create polished, user-friendly interfaces and keep learning to deliver high-quality solutions.</p>
          </div>
          <div class="light-glow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const title = ref(null)
const box = ref(null)

function checkPosition(){
  if(!title.value)return

  const rect = title.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  if(rect.top < viewportHeight * 0.7){
    box.value.style.transform = "translateX(0)";
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
  color: #ff8000;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  font-size: 4vw;
  margin-top: 1vw;
}

p{
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  color: #dfdfdf;
  font-size: 1.5vw;
  margin-top: 0.5vw;
  margin-bottom: 0;
  word-spacing: 0.2em;
  line-height: 1.5;
}

.about{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
}

.box{
  width: 95%;
  height: auto;
  border-top: 1vw solid #ff8000;
  border-left: 1vw solid #ff8000;
  border-bottom: 1vw solid #ff8000;
  border-top-left-radius: 4vw;
  border-bottom-left-radius: 4vw;
  box-shadow: 0 0 4vw rgb(255, 128, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 2vw;
  transform: translateX(90%);
  transition: transform 0.7s ease-in-out;
  overflow: hidden;
}

.box-times{
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  align-items: start;
  gap: 4vw;
}

.past-container,
.present-container,
.future-container{
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 1vw;
}

.past,
.present,
.future{
  width: 25vw;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 3vw;
}

.light-glow {
  width: 25vw;
  height: 5vw;
  background: radial-gradient(circle, rgb(200, 183, 174) 0%, rgba(255,165,0,0) 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: -1;
}

@media (max-width: 700px), (orientation: portrait){
  h1{
    font-size: 8vw;
  }

  h2{
    font-size: 5vw;
  }

  p{
    font-size: 4vw;
  }

  .about{
    height: auto;
    margin-top: 5vw;
  }

  .box{
    width: 90%;
    transform: translateX(80%);
  }

  .box-times{
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: 3vw;
  }

  .past,
  .present,
  .future{
    width: 70vw;
    height: auto;
    display: flex;
  }

  .light-glow {
    width: 100%;
  }

}


</style>
