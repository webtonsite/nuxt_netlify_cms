<template>
  <!--/ Section Portfolio Star /-->
  <section id="work" class="portfolio-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Darbai
            </h3>
            <p class="subtitle-a">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="item in $store.state.blogPosts" class="col-md-4">
          <div class="work-box">
            <a :href="item.description" data-lightbox="gallery-mf">
              <div class="work-img">
                <img :src="item.description" alt="" class="img-fluid">
              </div>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">{{ item.title }}</h2>
                    <div class="w-more">
                      <span class="w-date">{{ item.year }}</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <span class="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <!--/ Section Portfolio End /-->
</template>