<template>
<!--  所有元素不能直接在根节点下  -->
  <div>
    <h1>用户信息</h1>
<!--  {{$route.params.id}}-->
<!--    因为在router中设置了props: true，只需要在导出中加入prps可以直接用id展示数据-->
  {{id}}
  </div>

</template>

<script>
    export default {
      props: ['id'],
        name: "UserProfile"
    }
</script>

<style scoped>

</style>
