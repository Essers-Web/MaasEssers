<template>
  <div class="menu-block">
    <div class="menu-and-name">
      <h1>Maas Essers</h1>
      <div class="hamburger-menu" @click="toggleMenu" :class="{ open: menuOpen, closed: !menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="container-buttons" :class="{ open: menuOpen, closed: !menuOpen }">
      <button
          v-for="(label, i) in items"
          :key="i"
          ref="buttons"
          class="menu-button"
          :class="{ open: menuOpen, closed: !menuOpen }"
          @click="move(i); closeMenu()"
      >
        {{ label }}
      </button>
      <div
          class="indicator"
          :style="{
        width:  indicatorWidth + 'px',
        left:   indicatorLeft  + 'px'
      }"
      ></div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount, defineEmits } from 'vue'

const emit = defineEmits(["scrollTo"])
const items = ['Intro','About', 'Skills', 'Projects', 'Contact']
const activeIndex = ref(0)
const indicatorWidth = ref(0)
const indicatorLeft = ref(0)
let resizeTimer;
const buttons = ref([])
const menuOpen = ref(false)

const move = async (i) => {
  activeIndex.value = i
  await nextTick()
  const btn = buttons.value[i]
  if (btn) {
    indicatorWidth.value = btn.offsetWidth
    indicatorLeft.value = btn.offsetLeft
  }
  emit("scrollTo", i)
}

const updateIndicator = async () => {
  await nextTick()
  const btn = buttons.value[activeIndex.value]
  if (btn) {
    indicatorWidth.value = btn.offsetWidth
    indicatorLeft.value = btn.offsetLeft
  }
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

window.addEventListener("resize", () => {
  const elements = document.querySelectorAll("*");

  elements.forEach(el => {
    const style = getComputedStyle(el);
    if (style.transitionDuration !== "0s") {
      el.classList.add("zero-transition");
    }
  });

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    elements.forEach(el => el.classList.remove("zero-transition"));
  }, 200);
});

onMounted(() => {
  move(0)
  window.addEventListener('resize', updateIndicator)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIndicator)
})

</script>

<style scoped>

.menu-block{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
  color: #dfdfdf;
  box-shadow: 0 0 20px rgb(255, 128, 0);
  background-color: #121212;
}

.hamburger-menu{
  display: none;
}

h1{
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  font-size: 2.5vw;
  margin-top: 3.5vw;
  margin-left: 2vw;
}

.container-buttons {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  border: 0.5vw #dfdfdf;
  width: 60vw;
  height: 6vw;
  margin-top: 3vw;
  margin-right: 2vw;
  border-radius: 3vw;
  animation: gradientShift 7s ease infinite;
}

.menu-button {
  border: 1vw #dfdfdf;
  width: 15vw;
  height: 3vw;
  border-radius: 3vw;
  font-size: 1.5vw;
  font-family: "Arial Rounded MT Bold", "Trebuchet MS", "Verdana", sans-serif;
  background-color: transparent;
  color: #dfdfdf;
  transition: color 0.6s, background-color 0.6s;
  cursor: pointer;
}

.menu-button:hover {
  background-color: #ff8000;
  color: #181818;
  box-shadow: 0 0 3vw rgb(255, 128, 0);
}

.indicator {
  position: absolute;
  bottom: 0.3vw;
  height: 0.5vw;
  background-color: white;
  transition: left 0.3s ease, width 0.3s ease;
  border-radius: 1vw;
}

.zero-transition {
  transition-duration: 0s;
}

@media (max-width: 700px), (orientation: portrait) {

  h1{
    font-size: 5vw;
    margin-top: 1.5vw;
  }

  .menu-and-name{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 20vw;
    align-items: center;
    box-sizing: border-box;
    padding: 3vw;
    box-shadow: 0 0 20px rgb(0, 0, 0);
  }

  .hamburger-menu {
    width: 6vw;
    height: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: height 0.7s ease, transform 0.7s ease;
  }

  .hamburger-menu.open {
    transform: rotate(90deg);
    height: 8vw;
  }

  .hamburger-menu.closed {
    transform: rotate(0deg);
    height: 5vw;
  }

  .hamburger-menu span {
    display: block;
    height: 0.5vw;
    width: 100%;
    background-color: #fff;
    border-radius: 1vw;
    transition: all 0.3s ease;
  }

  .menu-block {
    flex-direction: column;
    align-items: center;
    padding: 2vw 0;
  }

  .container-buttons {
    height: 0;
    overflow: hidden;
    width: 80vw;
    flex-direction: column;
    gap: 2vw;
    margin-top: 1vw;
    margin-right: 0;
    transition: height 1.5s ease, padding 1s ease;
    box-sizing: border-box;
  }

  .container-buttons.open {
    height: 50vw;
    padding: 2.5vw;
  }

  .container-buttons.closed {
    height: 0;
    padding: 0;
  }

  .menu-button {
    width: 70vw;
    height: 10vw;
    font-size: 4vw;
    border-radius: 6vw;
  }

  .menu-button:hover {
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

  .indicator {
    display: none;
  }
}

</style>
