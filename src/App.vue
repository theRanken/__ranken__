<template>
  <LayoutComponent>
    <main class="w-7/12 md:w-9/12 mx-auto">
      <section class="" id="Home">
        <div class="flex justify-center items-center flex-wrap">
          <div class="">
            <p class="text-6xl my-4">Hi, I'm Agwegiokhe Oshiobugie</p>
            <p class="text-4xl mb-4">I build software solutions!</p>
          </div>
          <div class=""> Image</div>
        </div>
        <div id="scroll-trigger"></div>
      </section>
      <section id="About">
        <div class="flex justify-center items-center flex-wrap">
          <div class="flex-1">
            <h2>About Me</h2>
            <p class="text-6xl my-4">Hi, I'm Agwegiokhe Oshiobugie</p>
            <p class="text-4xl mb-4">I build solutions!</p>
          </div>
          <div class=" flex-1"> Image</div>
        </div>
        <div id="scroll-trigger"></div>
      </section>

      <div class="tools">
        <h3 class="text-center text-2xl mb-12">My Toolbox</h3>
        <div class="flex flex-wrap gap-5 justify-evenly">
          <div class="tool">
            <img class="tool-image" src="./assets/icons/sass.png">
          </div>
          <div class="tool ">
            <img class="tool-image" src="./assets/icons/php.svg">
          </div>
          <div class="tool">
            <img class="tool-image" src="./assets/icons/react.svg">
          </div>
          <div class="tool">
            <img class="tool-image" src="./assets/icons/js.png">
          </div>
          <div class="tool">
            <img class="tool-image" src="./assets/icons/python.png">
          </div>
          <div class="tool">
            <img class="tool-image" src="./assets/icons/django.svg">
          </div>
          <div class="tool">
            <img class="tool-image" src="./assets/icons/flask.svg">
          </div>
        </div>
      </div>

      <section id="Projects">
        <div class="flex justify-center items-center flex-wrap">
          <div class="flex-1">
            <h2 class="text-6xl">A little about what i've done so far </h2>
            <p class="text-xl my-4">Why don't you send me a message?</p>
            <p class="text-xl mb-4">Your friendly neighborhood web designer</p>
          </div>
          <div class=" flex-1"> Image</div>
        </div>
        <div id="scroll-trigger"></div>
      </section>

      <section id="Contact">
        <div class="flex justify-center items-center flex-wrap">
          <div class="flex-1">
            <h2>Like what you see? </h2>
            <p class="text-6xl my-4">Why don't you send me a message?</p>
            <p class="text-4xl mb-4">Your friendly neighborhood web designer</p>
          </div>
          <div class=" flex-1"> Image</div>
        </div>
        <div id="scroll-trigger"></div>
      </section>
    </main>
  </LayoutComponent>
</template>

<script setup>
import LayoutComponent from './layouts/LayoutComponent';

</script>

<style>
.tool{
  width: 4em;
  height: 4em;
}
.tool-image{
  width:100%;
  height:100%;
  object-fit:contain;
}

</style>
