<template>
  <!--/ Section Services Star /-->
  <section id="service" class="services-mf route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Paslaugos
            </h3>
            <p class="subtitle-a">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in $store.state.services" class="col-md-4">
          <div class="service-box">
            <div class="service-ico">
              <span class="ico-circle"><i :class="item.photo"></i></span>
            </div>
            <div class="service-content">
              <h2 class="s-title">{{item.title}}</h2>
              <p class="s-description text-center">
                {{item.body}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ Section Services End /-->
</template>