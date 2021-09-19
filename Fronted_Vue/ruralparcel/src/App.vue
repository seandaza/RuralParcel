
<!-- Componente PADRE -->

<template>

  <div id="app">
    <div id="nav">
      <div>
        <b-navbar toggleable="lg" type="light" style="background: #DEC0C0">
          <b-container>
            <b-navbar-brand to="/" class="tituloRuralParcel">RuralParcel</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse">

            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/about">Registrar Terreno</b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-form-input placeholder="Buscar nuevos terrenos"></b-form-input>
                </b-nav-form>
                <b-button size="sm" class="my-2 my-sm-0" type="submit" style="margin: 3%">Buscar</b-button>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>
      </div>
    </div>
    <router-view/>
  </div>

</template>

<style scoped>
  .tituloRuralParcel {
    font-weight: bold; 
    font-size: 30px; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
