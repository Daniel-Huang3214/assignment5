<script setup>
</script>

<template>
  <div class="grid-container">
    <div></div>
    <h2>Company Info</h2>
    <div></div>
    <p>CEO: Elon Bezos</p>
    <p>Company Address: ICS4UI</p>
    <p>Email: Amongnuts@gmail.com</p>
    <p>Phone Number: 4161770130</p>
    <p>Lang: English</p>
    <p>Goal: Money</p>
  </div>
</template>

<style scoped>
h2 {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  font-size: 30px;
  text-align: center;
}

.grid-container {
  background-color: #e9ceac;
  margin: 20px;
  border: solid black 3px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}

p {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  display: inline;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 15px;
  text-align: center;
  color: black;
}
</style>
