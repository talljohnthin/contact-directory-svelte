<script lang="ts">
  import AddDirectory from './components/AddDirectory.svelte';
  import DirectoryList from './components/DirectoryList.svelte';
  import Sidebar from './components/Sidebar.svelte';
</script>

<main>
    <Sidebar>
        <AddDirectory />
    </Sidebar>
    <DirectoryList />
</main> 
