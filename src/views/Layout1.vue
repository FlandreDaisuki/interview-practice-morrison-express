<template>
  <main>
    <header>Layout Problem 1: directly calcuate height & width</header>
    <section>
      <aside>Side</aside>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ornare cursus lacus, sit amet condimentum odio ornare sed. Proin
          vestibulum cursus libero, id posuere augue dictum vel. Nullam suscipit
          vehicula nunc, vitae rhoncus est pharetra et. Sed mattis convallis
          viverra. Sed mollis, justo a sodales gravida, odio enim blandit nisl,
          quis fringilla magna eros non diam. Vestibulum vehicula feugiat
          ultrices. Nulla facilisi. Donec pharetra eros ligula, et rhoncus augue
          elementum eget.
        </p>
        <p>
          Nunc sagittis purus nisi, sit amet ultricies purus fringilla et.
          Mauris et ante non nunc faucibus lobortis. Cras tellus mauris, luctus
          in libero quis, ornare iaculis augue. Vestibulum finibus ipsum metus,
          at maximus eros molestie sit amet. Aliquam commodo ac urna vel
          commodo. Mauris iaculis dapibus arcu at fringilla. Morbi vehicula enim
          scelerisque nunc blandit sollicitudin. Morbi neque mi, tempus nec
          lorem id, hendrerit rhoncus ipsum. Praesent malesuada maximus
          tincidunt.
        </p>
        <p>
          Duis vitae erat posuere, consequat tortor nec, vestibulum lorem. Sed
          tempor felis nisi, sed imperdiet ante fringilla eget. Nulla facilisi.
          Etiam sed dapibus urna. Etiam pellentesque vehicula diam, in faucibus
          lacus congue id. Aliquam porta ultricies massa. Fusce turpis metus,
          lobortis gravida ex at, lacinia aliquet tortor. Vivamus a ipsum sit
          amet velit congue auctor. In suscipit ultrices accumsan.
        </p>
        <p>
          Praesent justo urna, tincidunt at augue eget, bibendum blandit justo.
          Etiam sagittis tempus augue, bibendum scelerisque tortor faucibus ac.
          Morbi non tellus commodo, varius nibh ullamcorper, placerat enim.
          Maecenas dictum sem nisl, at imperdiet nisl dictum ut. Pellentesque
          condimentum sit amet tortor nec semper. Morbi laoreet tempus nisi, nec
          convallis purus ornare a. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla quis sem ac libero consequat fermentum.
          Pellentesque fringilla hendrerit fermentum. Nulla facilisi.
        </p>
        <p>
          Duis id metus ac orci blandit gravida vel quis ligula. Integer gravida
          lorem in ipsum rhoncus consequat. Proin vitae quam sit amet augue
          varius luctus. Nullam non tempor ex. Nullam finibus hendrerit tempus.
          Nullam vestibulum turpis sit amet luctus tristique. Curabitur luctus
          tincidunt dui. Ut ultricies vehicula nisl, sed porttitor sapien
          egestas sed. Etiam porta felis eu metus tempor, vel lobortis nulla
          rhoncus. Sed ac massa nisi. Fusce congue nisl sed felis porta, et
          pretium mi laoreet. Praesent luctus in est sit amet cursus. Fusce id
          tortor ut ante elementum lobortis quis quis ex.
        </p>
        <p>
          Integer non ex purus. Curabitur tempor, quam vitae consectetur
          vehicula, justo sapien lobortis arcu, ac interdum ipsum turpis non
          ipsum. Integer elementum dictum orci. Curabitur ultricies tellus eget
          nulla pellentesque, at euismod nibh lacinia. Nullam placerat magna vel
          nibh commodo porttitor. Curabitur consequat luctus tempor. Nam id
          eleifend purus. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Proin semper sit amet magna
          tincidunt aliquet. Phasellus vitae odio a urna luctus facilisis. Nam
          auctor, mi ut mattis cursus, massa lorem facilisis leo, sit amet
          semper turpis lorem consectetur mauris. Vivamus pulvinar, elit in
          rutrum hendrerit, tortor tellus venenatis augue, accumsan rutrum enim
          risus a turpis. Duis egestas felis sed tempor interdum. Vivamus id
          nisl at justo ornare consectetur. Integer nec enim luctus elit feugiat
          egestas. Morbi neque ipsum, molestie a eros ut, fringilla semper
          velit.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
          iaculis luctus faucibus. Proin dapibus tristique nisi, non
          sollicitudin justo malesuada quis. Vestibulum a eros a libero
          condimentum vulputate. Quisque blandit nulla ante, sit amet auctor
          augue rutrum a. Aliquam molestie elementum odio at lacinia. Donec
          pellentesque, orci eu malesuada venenatis, leo erat euismod lorem, id
          pharetra urna libero non enim. Vivamus finibus massa in arcu ornare
          tempor. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Etiam in sem non elit sollicitudin
          blandit eu eu arcu. Sed ligula lorem, congue eget volutpat non,
          placerat a lectus.
        </p>
      </article>
    </section>
    <footer>Footer</footer>
  </main>
</template>

<script>
export default {
  name: 'Layout1',
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
main {
  height: 100%;
  color: lightgoldenrodyellow;
}

header {
  height: 30px;
  background-color: darkred;
}
footer {
  height: 30px;
  background-color: blueviolet;
}
section {
  height: calc(100% - 30px * 2);
  position: relative;
}
aside,
article {
  height: 100%;
  position: absolute;
}
aside {
  width: 60px;
  background-color: darkcyan;
}
article {
  left: 60px;
  width: calc(100% - 60px);
  background-color: darkslategray;
  overflow-y: scroll;
}
article > p:first-child {
  margin-top: 0;
}
</style>
