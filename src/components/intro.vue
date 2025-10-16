<template>
  <div class="intro">
    <div class="intro-text">
      <p style="color: darkgrey">Hello! I am</p>
      <h1>Maas Essers</h1>
      <h2>Frontend Webdeveloper</h2>
      <p>
        I’m a frontend web developer passionate about creating clean, interactive, and user-friendly websites.
        I specialize in modern web technologies and primarily work with <strong>Vue.js</strong> to build dynamic and scalable frontends.<br><br>
        I enjoy turning complex ideas into intuitive digital experiences, combining functionality with thoughtful design.<br>
        Always curious and eager to learn, I strive to keep up with the latest trends and best practices in web development.
      </p>
      <div class="light-glow"></div>
    </div>
    <div class="photo-container">
      <div class="intro-photo">
          <img class="photo" src="../assets/IMG_3146-min 2.png"/>
      </div>
      <div class="intro-photo-background" style="">
    </div>
    </div>
  </div>

</template>

<script setup>
let resizeTimer;

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
  font-size: 2.3vw;
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

.intro {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 6vw 6vw 5vw 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.intro-text{
  display: flex;
  width: 40vw;
  height: auto;
  flex-direction: column;
}

.light-glow {
  margin-top: 8vw;
  margin-left: -9vw;
  width: 60vw;
  height: 5vw;
  background: radial-gradient(circle, rgb(200, 183, 174) 0%, rgba(255,165,0,0) 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: -1;
}

.photo-container{
  width: 70vw;
  height: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
}

.intro-photo{
  width: 25vw;
  height: 25vw;
  background-color: #000000;
  overflow: hidden;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  border-radius: 1vw;
  border: 0.7vw solid #ff8000;
  box-shadow: 0 0 4vw rgb(255, 128, 0);
  transition: 1s ease;
  z-index: 1;
}

.intro-photo-background{
  position: absolute;
  background-color: #d16901;
  z-index: 0;
  border: 0.7vw solid #d16901;
  box-shadow: 0 0 4vw rgb(209,105,1);
  transition: 0s;
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  border-radius: 1vw;
  margin-left: 8vw;
}

.intro-photo:hover{
  margin-right: 3vw;
}

.zero-transition {
  transition-duration: 0s;
}

.photo{
  width: 25vw;
  height: 30vw;
  transform: rotate(-45deg);
  margin-bottom: -4.5vw;
  margin-left: 3.9vw;
}

@media (max-width: 700px), (orientation: portrait) {
  h1{
    font-size: 8vw;
  }

  h2{
    font-size: 5vw;
  }

  p{
    font-size: 4vw;
  }

  .intro {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .intro-text{
    width: 80vw;
  }

  .photo-container{
    height: 60vw;
  }

  .intro-photo{
    width: 45vw;
    height: 45vw;
  }

  .intro-photo-background{
    width: 45vw;
    height: 45vw;
    margin-left: 12vw;
  }

  .intro-photo:hover {
    animation: hoverFlash 1s forwards;

  }

  @keyframes hoverFlash {
    0% {  }
    50% { margin-right: 12vw; }
    100% {  }
  }

  .photo{
    width: 53vw;
    height: 53vw;
    margin-bottom: -7vw;
    margin-left: 6vw;
  }
}

</style>