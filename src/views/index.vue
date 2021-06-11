<template>
  <el-container class="index">
    <el-header class="header">Header</el-header>
    <el-main class="main">
      <base-table
        :table-button="tableButton"
        :table-data="tableData"
        :table-label="tableLabel"
        border
        @handleSelectionChange="handleSelectionChange"
      >
        <template>
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            type="index"
            width="55"
            label="序号"
            align="center"
          ></el-table-column>
        </template>
      </base-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableButton: [
        {
          name: "查询",
          size: "samll",
          type: "primary",
        },
        {
          name: "重置",
          size: "samll",
          type: "success",
        },
      ],
      tableData: [
        {
          name: "王晓燕",
          age: 18,
          class: "高三3班",
          sex: "女",
          another_name: "王欻欻",
        },
        {
          name: "张晓明",
          age: 17,
          class: "高三3班",
          sex: "女",
          another_name: "小明",
        },
        {
          name: "张鹏",
          age: 18,
          class: "高三3班",
          sex: "男",
          another_name: "大棚子",
        },
      ],
      tableLabel: [
        {
          label: "姓名",
          param: "name",
          show: true,
          class: "p-center",
          align: "center",
        },
        {
          label: "年龄",
          param: "age",
          show: true,
          class: "p-center",
          align: "center",
        },
        {
          label: "班级",
          param: "class",
          show: true,
          class: "p-center",
          align: "center",
        },
        {
          label: "性别",
          param: "sex",
          show: true,
          class: "p-center",
          align: "center",
        },
        {
          label: "别称",
          param: "another_name",
          show: true,
          class: "p-center",
          align: "center",
        },
      ],
    };
  },
  methods: {
    handleSelectionChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  .header {
  }
  .main {
  }
}
</style>