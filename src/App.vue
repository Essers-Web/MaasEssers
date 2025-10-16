<template>
  <header class="menu">
    <menuBlock @scrollTo="scrollToSection"></menuBlock>
  </header>
  <section ref="sections">
    <div id="intro"></div>
    <intro></intro>
  </section>
  <section ref="sections">
    <div id="about"></div>
    <about></about>
  </section>
  <section ref="sections">
    <div id="skills"></div>
    <skills></skills>
  </section>
  <section ref="sections">
    <div id="projects"></div>
    <projects></projects>
  </section>
  <section ref="sections">
    <div id="contact"></div>
    <contact></contact>
  </section>
</template>

<script setup>
import { ref } from "vue"
import MenuBlock from "./components/menuBlock.vue";
import Intro from "./components/intro.vue";
import About from "./components/about.vue";
import Skills from "./components/skills.vue";
import Projects from "./components/projects.vue";
import Contact from "./components/contact.vue";

const sections = ref([])
const ids = ["intro","about", "skills", "projects", "contact"]

const scrollToSection = (i) => {
  const isPortrait = window.matchMedia("(max-width: 700px), (orientation: portrait)").matches;

  if(isPortrait){
    document.getElementById(ids[i]).scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }
  else {
    document.getElementById(ids[i]).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
};
</script>

<style scoped>
section {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.menu{
  position: sticky;
  top: 0;
  z-index: 100;
}

</style>


