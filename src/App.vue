<template>
  <div id="app">
    <nav class="navbar navbar-expand" style="padding: 0px;height: 7px;">
      <div class="col-lg-4" style="background:#16a75b;">
        &nbsp;
      </div>
      <div class="col-lg-4" style="background:#ffcf26;">
        &nbsp;
      </div>
      <div class="col-lg-4" style="background:#1d87e4;">
        &nbsp;
      </div>
    </nav>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">SIMANJA</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Data Tutorial</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Tambah</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
}
</script>