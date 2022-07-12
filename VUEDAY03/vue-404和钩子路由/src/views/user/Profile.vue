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
      name: "UserProfile",
      beforeRouteEnter: (to, from, next) => {
        console.log("准备进入个人信息页");
        next(vm => {
          //进入路由之前执行getData方法
          vm.getData()
        });
      },
      beforeRouteLeave: (to, from, next) => {
        console.log("准备离开个人信息页");
        next();
      },
      methods: {
        getData: function () {
          this.axios({
            method: 'get',
            // url: 'http://localhost:8081/static/mock/data.json'
            url: 'http://localhost:8080/getShowInfoForVue'
          }).then(function (response) {
            console.log(response)
          })
        }
      }
    }
</script>

<style scoped>

</style>
