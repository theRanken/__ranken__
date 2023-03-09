<template>
    <img class=""/>
      <NavBar />
      <IndicatorDots />
      <div class="body"> 
        <slot />
      </div>
      <FooterComp />
</template>


<script setup>
import NavBar from '../components/NavBar'
import FooterComp from '../components/FooterComp'
import IndicatorDots from '../components/IndicatorDots'

</script>

<style>
.body{
  position:relative;
}
</style>