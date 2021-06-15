
<template>
  <div class="base-table">
    <el-container>
      <el-header class="header">
        <el-button
          v-for="item in tableButton"
          :key="item.name"
          :size="item.size"
          :type="item.type"
          v-text="item.name"
          @click="handleTableButton(item.methods)"
        >
        </el-button>
      </el-header>
      <el-main>
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          :border="border"
          :stripe="stripe"
          @selection-change="handleSelectionChange"
        >
          <slot></slot>
          <el-table-column
            v-for="item in tableLabel"
            :key="item.label"
            :prop="item.param"
            :label="item.label"
            :width="item.width"
            v-show="item.show"
            :align="item.align"
          >
            <template slot-scope="scope">
              <div v-if="item.type === 'input'">
                <el-input
                  v-model="scope.row[item.param]"
                  clearable
                  @blur="handleInputBlur(scope.row)"
                  @change="handleInputChange(scope.row)"
                  @input="handleInput(scope.row)"
                  @focus="handleInputFocus(scope.row)"
                  @clear="handleInputClear(scope.row)"
                ></el-input>
              </div>
              <div v-else-if="item.type === 'html'">
                <p
                  v-html="item.html(scope.row)"
                  @click="handleHtml(scope.row)"
                ></p>
              </div>
              <div v-else-if="item.type === 'switch'">
                <el-switch
                  v-model="scope.row[item.param]"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :active-value="subjoin.active_value"
                  :inactive-value="subjoin.inactive_value"
                  @change="handleSwitchChange(scope.row)"
                >
                </el-switch>
              </div>
              <div v-else :class="item.class">
                <span>{{ scope.row[item.param] }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            v-if="tableOptions.label"
            :label="tableOptions.label"
            :width="tableOptions.width"
          >
            <template slot-scope="scope">
              <div v-for="item in tableOptions.opts" :key="item.name">
                <div v-if="item.type === 'text'">
                  <p @click="handleSize(item.methods, scope.row)">
                    {{ item.name }}
                  </p>
                </div>
                <div v-if="item.type === 'button'">
                  <el-button
                    :type="item.button_type"
                    :size="item.size"
                    @click="handleButton(item.methods, scope.row)"
                    >{{ item.name }}</el-button
                  >
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="current_page"
          :page-sizes="page_size_array"
          :page-size="page_size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
/**
 * @description
 * @param   {Array}     tableButton   列表头部操作按钮
 * @param   {Array}     tableData     列表数据
 * @param   {Array}     tableLabel    列表表头
 * @param   {Boolean}   border        列表边框
 * @param   {Boolean}   stripe        列表斑马纹
 * @param   {Object}    subjoin       列表额外参数
 * @param   {Object}    tableOptions  列表操作栏
 * @return  {*}
 */
export default {
  name: "BaseTable",
  props: {
    tableButton: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    tableLabel: {
      type: Array,
      default: () => [],
    },
    border: {
      type: Boolean,
      default: true,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    subjoin: {
      type: Object,
      default: () => {
        return {
          // switch打开默认值
          active_value: 1,
          // switch关闭默认值
          inactive_value: 2,
        };
      },
    },
    tableOptions: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      current_page: 1,
      page_size: 10,
      total: null,
      page_size_array: [5, 10, 15, 20],
    };
  },
  methods: {
    // 列表头部按钮触发
    handleTableButton(methods) {
      this.$emit("handleTableButton", methods);
    },
    // className
    tableRowClassName({ row, rowIndex }) {
      this.$emit("tableRowClassName", { row, rowIndex });
    },
    // 列表操作按钮
    handleButton(methods, row) {
      this.$emit("handleButton", { methods, row });
    },
    // 列表操作文字
    handleSize(methods, row) {
      this.$emit("handleSize", { methods, row });
    },
    // html操作
    handleHtml(row) {
      this.$emit("handleHtml", row);
    },
    // input值输入
    handleInput(row) {
      this.$emit("handleInput", row);
    },
    // input失去焦点
    handleInputBlur(row) {
      this.$emit("handleInputBlur", row);
    },
    // input值发生改变
    handleInputChange(row) {
      this.$emit("handleInputChange", row);
    },
    // input获得焦点
    handleInputFocus(row) {
      this.$emit("handleInputFocus", row);
    },
    // input清空
    handleInputClear(row) {
      this.$emit("handleInputClear", row);
    },
    // switch值改变
    handleSwitchChange(row) {
      this.$emit("handleSwitchChange", row);
    },
    // 每页条数
    handleSizeChange(val) {
      this.page_size = val;
      this.$emit("update");
    },
    // 当前页
    handleCurrentChange(val) {
      this.current_page = val;
      this.$emit("update");
    },
    // 获取页码
    getCurrentPage() {
      const totalPage = Math.ceil((this.total - 1) / this.page_size);
      this.current_page =
        this.current_page > totalPage ? totalPage : this.current_page;
      this.current_page = this.current_page < 1 ? 1 : this.current_page;
    },
    // 列表选中按钮
    handleSelectionChange(value) {
      this.$emit("handleSelectionChange", value);
    },
  },
};
</script>

<style lang="scss">
.base-table {
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .header {
    text-align: right;
  }
}
</style>