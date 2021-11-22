<template>
  <div class="container">
    <h1 class="titulo">Itens de Avaliação</h1>
  </div>
  <div class="form">
    <main class="pergunta1">
      <section class="right-1">
        <div class="pg1">
          <h1>1. Limpeza e conservação da sala de aula e da oficina</h1>
          <h6 id="txUm">Nível de importância:</h6>
          <div class="rbt_importancia" id="v-model-radiobutton">
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">Alta</label>
            <br />
            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Media</label>
            <br />
            <input type="radio" id="three" value="Three" v-model="picked" />
            <label for="three">Baixa</label>
          </div>
        </div>
      </section>

      <section class="left-1">
        <div class="pg1">
          <h6 id="txdois">Nível de satisfação:</h6>
          <div class="rbt_satis" id="v-model-radiobutton">
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">Otimo</label>
            <br />
            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Bom</label>
            <br />
            <input type="radio" id="three" value="Three" v-model="picked" />
            <label for="three">Não se aplica</label>
            <br />
          </div>
        </div>
      </section>

      <section class="left-2">
        <br/>
        <input type="radio" id="three" value="Three" v-model="picked" />
        <label for="three">Regular</label>
        <br />
        <input type="radio" id="three" value="Three" v-model="picked" />
        <label for="three">Ruim</label>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      picked: "",
    };
  },
};
</script>

<style lang="scss">
@import "./scss/home.scss";
</style>
