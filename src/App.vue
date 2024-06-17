<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheCalc from './components/TheCalc.vue';
import TheTime from './components/TheTime.vue';
import TheConvert from './components/TheConvert.vue';
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#clac">Calc</a>
          <a class="nav-link" href="#time">Time</a>
          <a class="nav-link" href="#convert">Convert</a>
        </div>
      </div>
    </div>
  </nav>

  <main class="container mt-5">
    <HelloWorld id="clac" class="pt-5" msg="Calculator" />
    <TheCalc  class="mt-1"/>
    <HelloWorld id="time" class="pt-5" msg="The Time" />
    <TheTime  class="mt-5"/>
    <HelloWorld id="convert" class="pt-5" msg="The Convertor" />
    <TheConvert  class="mt-5"/>
  </main>
</template>

<style scoped></style>
