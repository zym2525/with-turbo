<template>
  <div>App</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'App',
});

type Props = {
  AA?: string;
};

const props = withDefaults(defineProps<Props>(), {});
</script>

<!-- <style lang="scss" scoped>
@use '@/style/common.scss' as *;

</style> -->
