<template>
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img src="img/ramunas.jpg" class="img-fluid rounded b-shadow-a" alt="">
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">

                        <div v-for="item in $store.state.profile">
                          <span class="title-s">{{ item.name }}:</span> 
                            {{ item.title }}
                          </div>
                        </div>

                        <div>
                          <span class="title-s">Vardas: </span> 
                          <!-- EDITABLE -->
                          <span>RR Apdaila</span>
                        </div>
                        <div>
                          <span class="title-s">Profile: </span> 
                          <!-- EDITABLE -->
                          <span>Apdaila</span>
                        </div>
                        <div>
                          <span class="title-s">El. Paštas: </span> 
                          <!-- EDITABLE -->
                          <span>skucas.ramunas@gmail.com</span>
                        </div>
                        <div>
                          <span class="title-s">Telefonas: </span> 
                          <!-- EDITABLE -->
                          <span>860851955</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="skill-mf">
                    <p class="title-s">Patirtis</p>

                    <span>Gipso kartono montavimas</span> <span class="pull-right">85%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>Sienų, lubų lyginimas</span> <span class="pull-right">75%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>Glaistymas, dažymas</span> <span class="pull-right">50%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>Parketo, laminato klojimas</span> <span class="pull-right">90%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>Plytelių klijavimas;</span> <span class="pull-right">90%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>Elektros instaliacija;</span> <span class="pull-right">90%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>Santechnikos darbai.</span> <span class="pull-right">90%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        Apie mus
                      </h5>
                    </div>
                    <p class="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor
                      at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt.
                    </p>
                    <p class="lead">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                    </p>
                    <p class="lead">
                      Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      Nulla porttitor accumsan
                      tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>