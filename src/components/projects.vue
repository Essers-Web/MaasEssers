<template>
  <div class="projects">
    <h1 class="title-component">Projects</h1>
    <div class="project" v-for="project in projects" :key="project.id">
      <div class="line"></div>
      <div class="project-box">
        <div class="image-container">
            <img class="image" :src="project.picture" :alt="project.title"/>
        </div>
        <div class="text">
          <h1 class="title">{{project.title}} </h1>
          <button class="button" @click="openLink(project.link)">
            View on GitHub
          </button>
          <p class="description">{{project.description}}</p>
        </div>
      </div>
    </div>
    <div class="line"></div>

  </div>

</template>

<script setup>
import {ref} from "vue";
import CalendarNoteImg from "../assets/CalendarNote.png"
import ComponentsWebsiteImg from "../assets/ComponentsWebsite.png"

const projects = ref([
  {
    id: 1,
    title: "Calendar/Note Planner (Vue.js)",
    description: "I created a Vue application that lets users write notes and connect them to specific calendar dates. This way, tasks and reminders are organized directly in the agenda. The app features a clean and responsive layout, simple note management, and a component-based structure that makes it easy to expand with new features.",
    picture: CalendarNoteImg,
    link:"https://github.com/Essers-Web/portfolioMaasEssers/tree/main/vue-calendar-note-app"
  },
  {
    id: 2,
    title: "Website components (Vue.js)",
    description: "This project features a collection of custom Vue.js components developed to create a smooth and modern web experience. It includes elements such as a loader, image scroller, sliding menu, and login page. Each component is designed with responsiveness, clean styling, and subtle animations to enhance usability and visual appeal. The goal was to build reusable, well-structured UI elements that can be easily integrated into different web projects.",
    picture: ComponentsWebsiteImg,
    link:"https://github.com/Essers-Web/portfolioMaasEssers/tree/main/vue-website-components"
  },

])

const openLink = (url) => {
  if (url) window.open(url, '_blank')
}

</script>

<style scoped>
.title-component{
  color: #dfdfdf;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  font-size: 6vw;
  margin-top: 5vw;
}

h1{
  color: #dfdfdf;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  font-size: 4vw;
  margin: 0;
}

h2{
  color: #ff8000;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  font-size: 1.5vw;
  margin-top: 1vw;
  cursor: pointer;
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

a {
  text-decoration: underline;
  text-decoration-color: #dfdfdf;
}

.projects{
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2vw;
  gap: 9vw
}

.project{
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw;
  justify-content: space-between;
}

.project-box{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.text{
  width: 45%;
  height: auto;
}

.button{
  width: auto;
  height: auto;
  font-size: 3vw;
  padding: 2vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  border-radius: 5vw;
  border: none;
  background-color: #ff8000;
  box-shadow: 0 0 2vw rgb(255, 128, 0);
  transition: 0.4s;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
}

.button:hover{
  padding: 3vw;
  color: #dfdfdf;
}

.image-container{
  width: 48%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image{
  max-width: 40vw;
  max-height: 40vw;
  border-radius: 3vw;
  box-shadow: 0 0 0.8vw rgb(255, 128, 0);
}

.line{
  width: 90vw;
  height: 0.5vw;
  background-color: #FF8000FF;
  box-shadow: 0 0 4vw rgb(255, 128, 0);
  border-radius: 1vw;
  margin-bottom: 5vw;
}

@media (max-width: 700px), (orientation: portrait) {
  .title-component{
    font-size: 8vw;
    margin-top: 15vw;
  }

  h1 {
    font-size: 8vw;
  }

  h2 {
    font-size: 5vw;
  }

  p {
    font-size: 4vw;
  }

  .project{
    flex-direction: column;
  }

  .project-box{
    flex-direction: column;
    gap: 9vw;
  }

  .title{
    font-size: 7vw;
  }

  .text{
    width: 95%;
  }

  .button{
    font-size: 6vw;
    padding: 3vw;
    border-radius: 8vw;

  }

  .button:hover{
    animation: hoverFlash 1s forwards;
  }

  @keyframes hoverFlash {
    0% {  }
    50% { padding: 4vw; color: #dfdfdf; }
    100% {  }
  }

  .image-container{
    width: 95%;
  }

  .image{
    max-height:80vw;
    max-width: 80vw;

  }

  .line{
    width: 85vw;
    height: 1vw;
    background-color: #FF8000FF;
    box-shadow: 0 0 4vw rgb(255, 128, 0);
    margin-bottom: 5vw;
  }

}

</style>