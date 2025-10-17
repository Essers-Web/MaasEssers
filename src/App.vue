<template>
  <header class="menu">
    <menuBlock @scrollTo="scrollToSection"></menuBlock>
  </header>
  <div id="intro"></div>
  <section ref="sections">
    <intro></intro>
  </section>
  <div id="about"></div>
  <section ref="sections">
    <about></about>
  </section>
  <div id="skills"></div>
  <section ref="sections">
    <skills></skills>
  </section>
  <div id="projects"></div>
  <section ref="sections">
    <projects></projects>
  </section>
  <div id="contact"></div>
  <section ref="sections">
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
  const element = document.getElementById(ids[i]);
  const isPortrait = window.matchMedia("(max-width: 700px), (orientation: portrait)").matches;

  let yOffset;

  if (isPortrait) {
    yOffset = window.innerWidth * 0.75;
  } else {
    yOffset = window.innerWidth * 0.10;
  }

  const y = element.getBoundingClientRect().top + window.window.scrollY - yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

</script>

<style scoped>
section {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  overflow-x: hidden;
  overflow-y: visible;
}


.menu{
  position: sticky;
  top: 0;
  z-index: 100;
}

</style>


