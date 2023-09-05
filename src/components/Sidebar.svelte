<script lang="ts">
  import { twMerge } from "tailwind-merge";
</script>

<div class={twMerge("fixed top-0 right-0 z-10 w-[500px] bg-white h-screen p-10 shadow-xl shadow-blue-100 transition-transform", $sidebar ? "translate-x-0" : "translate-x-[100%]")}>
    <slot></slot>
</div>