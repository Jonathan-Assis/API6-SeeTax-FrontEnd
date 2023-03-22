
<template>  

    <Sidebar/>
      <!--Main Navigation-->
  
  <!--Main layout-->
  <main style="margin-top: 5px;">
    <div class="container-fluid"></div>

     <TableStructure />

  </main>
  <!--Main layout-->
  
</template>


<script> 
  import TableStructure from  './components/TableStructure.vue'
  import Sidebar from './components/Sidebar.vue'
 

  export default {
    name: 'app',
    components: {
      TableStructure,
      Sidebar
    }
  }
</script>

