<template>
  <div class="px-8 sm:px-20 xl:py-5 py-3 navbar-outermost-wrapper">
    <div class="navbar-wrapper flex justify-between items-center">
      <div class="flex-none w-16 text-3xl">Rankencorp</div>

      <nav>
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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item{
    display:flex;
    flex-direction: column;
    position: relative;
}

.active-indicator{
    background: var(--blue-gradient);
    position: absolute;
    height: 3px;
    width:100%;
    left: 0;
    bottom: -10px;
    border-radius: 10px;
}
.navbar-outermost-wrapper{
  border-bottom: var(--border);
}
</style>
