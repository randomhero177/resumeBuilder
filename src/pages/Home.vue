<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2"></div>
        <div class="col">
          <Navigation />
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <section class="home__screen home__main row justify-content-center align-items-center">
        <div class="col-8">
          <div class="row">
            <div class="col-8">
              <div class="home__heading">
                <h4 class="home__title">Создайте ваше резюме!</h4>
                <h5 class="home__subtitle">Просто и бесплатно</h5>
              </div>
              <div class="home__text">
                <p>Проект <i>build-resume</i> появился на свет после того, как я в очередной раз столкнулся с необходимостью регистрации и смс для того, чтобы скачать уже заполненное резюме.</p>
                <p>Устав расходовать собственное время и нервы в пустую, я решил написать сервис для личных целей.</p>
                <p>После первого созданного и отправленного через это веб-приложение резюме, пришло осознание, что было бы не плохо поделиться разработкой с миром.</p>
              </div>
              <div class="home__buttons"><router-link to="/choose-template" class="home__button btn button-home"> Создать резюме </router-link></div>
            </div>
            <div class="col-4">
              <img src="/template.png" alt="">
            </div>
          </div>
          
        </div>
      </section>
      <section class="home__screen home__works row justify-content-center align-items-center text-center">
        <div class="col-8">
          <div class="home__heading">
            <h4 class="home__title">Как это работает?</h4>
            <h5 class="home__subtitle">Всего 3 простых шага:</h5>
          </div>
          <div class="home__text">
            <ul class="home__works-list">
              <li class="home__works-item">
                <div class="home__works-icon"><font-awesome-icon icon="solar-panel"/></div>
                Выбираете шаблон резюме. <br />
                Впоследствие его можно будет изменить перед скачиванием или в любой другой момент времени
                <div class="home__works-button">
                  <router-link to="/choose-template" class="home__button btn button-home">Выбрать шаблон</router-link>
                </div>
              </li>
              <li class="home__works-item">
                <div class="home__works-icon"><font-awesome-icon icon="file-alt"/></div>
                Заполняете ты пункты,<br/> которые вам необходимы
                <div class="home__works-italic"><small><i>* Не заполненные поля не отобразятся в конечном документе</i></small></div>
                <div class="home__works-button">
                  <router-link to="/choose-template" class="home__button btn button-home">Заполнить</router-link>
                </div>
              </li>
              <li class="home__works-item">
                <div class="home__works-icon"><font-awesome-icon icon="download"/></div>
                Похоже, что все готово.<br/> Проверьте правильность данных&nbsp;и&nbsp;вперед
                <div class="home__works-button">
                  <router-link to="/choose-template" class="home__button btn button-home">Скачать</router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="home__screen home__safe row justify-content-center align-items-center">
        <div class="col-8">
          <div class="home__heading">
            <h4 class="home__title">Безопасность</h4>
            <h5 class="home__subtitle">Нельзя своровать, то чего нет.</h5>
          </div>
          <div class="home__text">
            <p>У сервис build-resume нет базы данных, мы не используем cookie и никаким образом не сохраняем ваши данные на своей стороне. Вся заполненная в браузере информация остается только в вашем браузере.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: "home",
    data() {
      return {
        showModal: false,
      };
    },
    components: {
      Navigation, Footer,
    },
  }
</script>

<style lang="stylus" scoped>
  .create
    padding-bottom 45px
  .home
    &__screen
      height 100vh
      position relative
      border-bottom 1px solid #ddd
      border-top 1px solid #d4d3d3
      &:before, &:after
        content ''
        display block
        position absolute
        width 100%
        left 0
        z-index -1
        opacity .2
      &:before
        height 100%
        top 0
      &:after
        content ''
        display block
        position absolute
        background url("/shadow.png") center center
        height 100px
        bottom 0
    &__main
      &:before
        background url("/IMGP6384.JPG") center center
    &__works
      &:before
        background url("/DSC_0674.JPG") center center
      &-list
        display flex
        justify-content space-around
      &-item
        width 30%
        border 1px solid #333
        background rgba(255, 255, 255, .5)
        padding 15px 30px
        border-radius 2.5px
        font-size 1rem
        display flex
        flex-direction column
        justify-content space-between
      &-button
        margin-top 30px
      &-italic
        line-height 100%
        margin-top 15px
        color #e27e7e
      &-icon
        font-size 60px
        color #2e74b5
        margin-bottom 15px
    &__safe
      &:before
        background url("/works.JPG") center center
    &__heading
      margin-bottom 60px
      text-transform uppercase
    &__title
      font-size 2.75rem
      margin-bottom 5px
    &__subtitle
      font-size 1.75rem
    &__buttons
      margin-top 30px
    &__button
      font-size 1.25rem
    &__text
      font-size 1.25rem
      & p
        margin-bottom 10px
      ul, ol
        list-style none
        padding 0
</style>