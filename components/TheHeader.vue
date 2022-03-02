<!-- Please remove this file from your project -->
<template>
  <div class="header">
    <PokemonLogo />
    <input
      type="text"
      placeholder="Search..."
    >
    <!-- <PokeballIcon /> -->
    <button>Team</button>
  </div>
</template>

<script>
export default {
  name: "PokeHeader",
};
</script>

<style scoped>
.header {
  z-index: 999;
  position: fixed;
  display: flex;
  gap: 10px;
  align-items: center;
  top: 0;
  height: 70px;
  width: 100vw;
  background-color: rgba(193, 31, 37, 1);
  padding: 0px 20px 0px 20px;
}

input {
  width: 250px;
  height: 40px;
  border-radius: 10px;
  padding: 0px 20px 0px 20px;
  border: none;
}

input:focus {
  outline-width: 0;
}

.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 10px;
  min-width: 40px;
}

.input-field {
  width: 100%;
  padding: 10px;
  text-align: center;
}
</style>