<template>
  <div class="about">
    <div ref="box" class="box">
      <h1 ref="title" >Contact Me!</h1>
      <div class="box-contacts">
        <div class="connect-container">
          <div class="connect">
            <h2>connect</h2>
            <p>
              Whether you’re a designer, developer, or entrepreneur — I enjoy connecting with creative minds.
              Reach out, share your ideas, or just say hello. I’m always up for a good chat about code and design.            </p>
          </div>
          <div class="light-glow"></div>
        </div>
        <div class="offer-container">
          <div class="offer-job">
            <h2>offer job</h2>
            <p>
              I’m open to new opportunities, whether it’s freelance projects or exciting web development collaborations.
              Using Vue.js and modern frontend tools, I create responsive, user-friendly, and high-performance websites that bring ideas to life.
              If you have a project in mind, let’s make it happen.            </p>
          </div>
          <div class="light-glow"></div>
        </div>
        <div class="website-container">
          <div class="website">
            <h2>website?</h2>
            <p>
              I design and develop responsive, high-performance websites tailored to your brand and goals.
              From concept to deployment, I’ll help you bring your vision to life with clean code and elegant interfaces.
            </p>
          </div>
          <div class="light-glow"></div>
        </div>
      </div>
      <div class="line"></div>
      <div class="button-box">
        <a href="mailto:maas.website@hotmail.com">
          <button class="button" >Email</button>
        </a>
        <a href="https://www.linkedin.com/in/maas-essers-52901333b/" target="_blank">
          <button class="button">LinkedIn</button>
        </a>
        <a href="https://github.com/Essers-Web/portfolioMaasEssers" target="_blank">
        <button class="button">Github</button>
        </a>
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
  font-size: 2vw;
  margin-top: 0.5vw;
  margin-bottom: 0;
  word-spacing: 0.2em;
  line-height: 1.5;
}

.about{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: transparent;
}

.box{
  width: 100%;
  height: auto;
  box-shadow: 0 0 4vw rgb(255, 128, 0);
  border-radius: 5vw 5vw 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2vw;
  transform: translateX(-90%);
  transition: transform 0.7s ease-in-out;
  overflow: hidden;
}

.box-contacts{
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  align-items: start;
  gap: 4vw;
}

.offer-container,
.connect-container,
.website-container{
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 1vw;

}

.connect,
.offer-job,
.website{
  width: 30vw;
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

.line{
  width: 85vw;
  height: 0.5vw;
  background-color: #FF8000FF;
  box-shadow: 0 0 4vw rgb(255, 128, 0);
  border-radius: 1vw;
  margin-top: 5vw;
  margin-bottom: 1vw;
}

.button-box{
  display: flex;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 1vw;
  justify-content: space-around;
}

.button{
  width: 15vw;
  height: auto;
  padding: 1vw;
  color: white;
  background-color: transparent;
  font-size: 3vw;
  border: none;
  border-radius: 4vw;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  transition: color 0.6s, background-color 0.6s;
  cursor: pointer;
}

.button:hover{
  background-color: #ff8000;
  color: #181818;
  box-shadow: 0 0 3vw rgb(255, 128, 0);
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
    width: 100%;
    transform: translateX(-80%);
  }

  .box-contacts{
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: 3vw;
  }

  .connect,
  .offer-job,
  .website{
    width: 70vw;
    height: auto;
    display: flex;
  }

  .light-glow {
    width: 100%;
  }

  .line{
    width: 85vw;
    height: 1vw;
    background-color: #FF8000FF;
    box-shadow: 0 0 4vw rgb(255, 128, 0);
  }

  .button-box{
    gap: 1vw;
    margin-top: 2vw;
    margin-bottom: 4vw;
    align-content: center;
    justify-content: center;
  }

  .button{
    width: 32vw;
    padding-top: 4.5vw;
    padding-bottom: 4.5vw;
    border-radius: 10vw;
    font-size: 5vw;
  }

  .button:hover {
    animation: hoverFlash 1s forwards;
    background-color: transparent;
    color: #dfdfdf;
    box-shadow: none;
  }

  @keyframes hoverFlash {
    0% {  }
    50% { background-color: #ff8000; color: #181818; box-shadow: 0 0 3vw rgb(255, 128, 0); }
    100% {  }
  }

}


</style>
