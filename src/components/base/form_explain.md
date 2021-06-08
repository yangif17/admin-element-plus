<!-- form表单参数说明 -->
    * 必填
    formLabel: [
        {
            <!-- 标签文本（*） -->
            label: "名称",
            <!-- 显示标签（*） -->
            mold: "input",
            <!-- 标签类型（*） -->
            type: "input",
            <!-- 是否禁用 -->
            disabled: true,
            <!-- 提示 -->
            placeholder: "请输入名称",
            <!-- 清除按钮 -->
            clearable: false,
            <!-- textarea行数 -->
            rows: 2,
            <!-- input前icon -->
            frontIcon: "",
            <!-- input后icon -->
            behindIcon: "",
            <!-- select搜索 -->
            filterable: true,
            <!--  激活时的文本颜色 -->
            textColor: "#FFFFFF",
            <!-- 大小 -->
            size: "mini",
            <!-- 激活时的填充色和边框色	 -->
            fillcolor: "#FFFFFF",
            <!-- 最小值 -->
            min: 1,
            <!-- 最大值 -->
            max: 2,
            <!-- 打开的值 -->
            trueValue: "1",
            <!-- 关闭的值 -->
            falseValue: "2",
            <!-- 子项 -->
            options: [
                {
                    <!-- 标签文本（*） -->
                    label: "小张",
                    <!-- 值（*） -->
                    value: "0",
                    <!-- 边框 -->
                    border: true,
                    disabled: true,
                    <!-- 大小 -->
                    size: "mini",
                    textColor: "#FFFFFF",
                    fillcolor: "#FFFFFF",
                    trueValue: "1",
                    falseValue: "2"
                }
            ]
        }
    ]