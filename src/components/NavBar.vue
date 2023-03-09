<template>
  <div class="px-8 sm:px-20 xl:py-5 py-3 navbar-outermost-wrapper">
    <div class="navbar-wrapper flex justify-between items-center">
      <div class="flex-none w-16 text-3xl font-bold" id="brand">Rankencorp</div>
      <div id="toggle" v-if="mobile" @click="hidden = !hidden">
        <i class="ri-menu-4-fill text-4xl"></i>
      </div>
      <nav class="nav" :class="{ hide: hidden }">
        <ul class="navigation">
          <li class="nav-item">
            <a href="/#Home" class="nav-link">Home</a>
            <div class="active-indicator"></div>
          </li>
          <li class="nav-item">
            <a href="/#About" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="/#Contact" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a href="/projects" class="nav-link">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
const hidden = ref(window.innerWidth < 1000)
const mobile = ref(window.innerWidth < 1000)


const handleResize = () => {
  if (window.innerWidth < 1000) {
    mobile.value = true;
    hidden.value = true;
  } else {
    mobile.value = false;
    hidden.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  display: flex;
  gap: 2.5rem;

}

.hide {
  display: none;
  opacity: 0;
  transition: opacity .3s ease;
}

.navbar-outermost-wrapper {
  z-index: 9999;
}

.nav-item {
  display: flex;
  flex-direction: column;
  position: relative;
}

.hide {}

.active-indicator {
  background: var(--black-gradient);
  position: absolute;
  height: 5px;
  width: 100%;
  left: 0;
  bottom: -10px;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.3)
}

#brand {
  position: relative;
}

#brand:before {
  content: "Rankencorp";
  font-weight: 700;
  position: absolute;
  left: -3%;
  bottom: -6%;
  color: rgba(66, 66, 66, 0.6);
}

#brand:after {
  content: "Rankencorp";
  font-weight: 700;
  position: absolute;
  left: 2%;
  bottom: 6%;
  color: rgba(74, 74, 74, 0.6);
}</style>
