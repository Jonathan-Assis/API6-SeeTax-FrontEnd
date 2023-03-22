
<template>  

    <Sidebar/>
      <!--Main Navigation-->
  
  <!--Main layout-->
  <main style="margin-top: 5px;">

    <Ranking/>
     <TableStructure />

  </main>
  <!--Main layout-->
  
</template>


<script lang="ts"> 
  import TableStructure from  './components/TableStructure.vue'
  import Sidebar from './components/Sidebar.vue'
  import Ranking from './components/Ranking.vue'
 

  export default {
    name: 'app',
    components: {
      TableStructure,
      Sidebar,
      Ranking,
    }
  }
</script>

