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
        <p>N/A</p>
        <p>N/A</p>
    </div>
</template>

<style scoped>
h1 {
    position: absolute;
}

h2{ 
    text-align: center;
}
.grid-container {
  margin:20px;
  border: solid black 5px;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
p {
    display:inline;
    background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
