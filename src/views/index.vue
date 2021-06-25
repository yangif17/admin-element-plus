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
      <base-form :form-label="formLabel" :form-object="formObject"></base-form>
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
          size: "small",
          type: "primary",
        },
        {
          name: "重置",
          size: "small",
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
      formLabel: [
        {
          label: "姓名",
          mold: "input",
          prop: "name",
        },
        {
          label: "备注",
          mold: "input",
          prop: "note",
          type: "textarea",
          rows: "3",
          disabled: true,
        },
        {
          label: "年龄",
          mold: "select",
          prop: "age",
          filterable: true,
          options: [
            {
              value: 1,
              label: "18",
            },
            {
              value: 2,
              label: "19",
            },
            {
              value: 3,
              label: "20",
            },
          ],
        },
        {
          label: "性别",
          mold: "radio",
          type: "radio",
          prop: "sex",
          size: "small",
          options: [
            {
              value: 1,
              label: "男",
              border: true,
              size: "small",
            },
            {
              value: 2,
              label: "女",
              border: true,
              size: "small",
            },
          ],
        },
        {
          label: "班级",
          mold: "radio",
          type: "radioButton",
          prop: "class",
          size: "small",
          options: [
            {
              value: 1,
              label: "1班",
              border: true,
              size: "small",
            },
            {
              value: 2,
              label: "2班",
              border: true,
              size: "small",
            },
            {
              value: 3,
              label: "3班",
              border: true,
              size: "small",
            },
          ],
        },
        {
          label: "爱好",
          mold: "checkbox",
          type: "checkbox",
          prop: "hobby",
          size: "small",
          options: [
            {
              value: 1,
              label: "篮球",
            },
            {
              value: 2,
              label: "足球",
            },
            {
              value: 3,
              label: "排球",
            },
          ],
        },
        {
          label: "兴趣",
          mold: "checkbox",
          type: "checkboxButton",
          prop: "interest",
          size: "small",
          options: [
            {
              value: 1,
              label: "篮球",
            },
            {
              value: 2,
              label: "足球",
            },
            {
              value: 3,
              label: "排球",
            },
          ],
        },
        {
          label: "时间段",
          mold: "datePicker",
          type: "datetimerange",
          prop: "time",
          separator: "-",
          startText: "开始时间",
          endText: "结束时间",
        },
        {
          label: "创建时间",
          mold: "datePicker",
          type: "datetime",
          prop: "time2",
        },
      ],
      formObject: {
        name: "",
        note: "",
        age: 1,
        sex: 1,
        class: 3,
        hobby: [1],
        interest: [1, 2],
        time: [],
        time2:""
      },
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