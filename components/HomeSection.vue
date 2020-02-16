<template>
    <!--/ Intro Skew Star /-->
    <div id="home" class="intro route bg-image" style="background-image: url(img/intro-bg1.jpg)">
      <div class="overlay-itro"></div>
      <div class="intro-content display-table">
        <div class="table-cell">
          <div class="container">
            <h1 class="intro-title mb-4">Vidaus apdaila, remontas Vilniuje</h1>

            <!--
            <p class="intro-subtitle">
              <span class="text-slider-items">Atsakingi,Be žalingų įpročių!,Siūlome aukščiausią kokybę už konkurencingą kainą</span><strong class="text-slider"></strong>
            </p>
            -->

            <div class="intro-subtitle">
            <vue-typed-js 
              :strings="['Atsakingi', 'Be žalingų įpročių!', 'Siūlome aukščiausią kokybę už konkurencingą kainą']"
              :typeSpeed="80"
              :loop="true"
              :backDelay="1100"
              :backSpeed="30"
            >
              <strong class="typing text-slider"></strong>
            </vue-typed-js>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!--/ Intro Skew End /-->
</template>
