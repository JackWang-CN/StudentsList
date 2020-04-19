<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="students" class="el-menu-vertical-demo">
          <el-menu-item index="students">
            <i class="el-icon-s-platform"></i>
            <span slot="title">学生信息</span>
          </el-menu-item>

          <el-menu-item index="teachers">
            <i class="el-icon-user-solid"></i>
            <span slot="title">教师信息</span>
          </el-menu-item>

          <el-menu-item index="school">
            <i class="el-icon-menu"></i>
            <span slot="title">学校主页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <h1>成都市高新区中和中学后台管理</h1>
        </el-header>

        <el-main>
          <!-- 表格区域 -->
          <el-table :data="list" border style="width: 100%">
            <el-table-column fixed prop="serial_number" label="序号" width="100"></el-table-column>
            <el-table-column prop="name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="sex" label="性别" width="100"></el-table-column>
            <el-table-column prop="nation" label="民族" width="100"></el-table-column>
            <el-table-column prop="grade" label="班级" width="120"></el-table-column>
            <el-table-column prop="phone" label="联系电话" width="200"></el-table-column>
            <el-table-column prop="idCard" label="身份证号" width="200"></el-table-column>
            <el-table-column prop="subject" label="专业" width="200"></el-table-column>
            <el-table-column prop="guardian.name" label="监护人" width="200"></el-table-column>
            <el-table-column prop="guardian.phone" label="监护人联系方式" width="200"></el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                <el-button @click="changeInfo(scope.row)" type="text" size="normal">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 按钮 -->
          <el-button type="primary" class="add" @click="addStudent">添加学生</el-button>
          <!-- 模态框（添加学生） -->
          <el-dialog :title="type?'添加学生':'修改信息'" :visible.sync="dialogFormVisible">
            <el-form :model="form" class="form">
              <el-form-item label="姓名" :label-width="labelWidth">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="labelWidth">
                <el-select v-model="form.sex" placeholder="请选择性别">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="民族" :label-width="labelWidth">
                <el-input v-model="form.nation"></el-input>
              </el-form-item>
              <el-form-item label="班级" :label-width="labelWidth">
                <el-input v-model="form.grade"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" :label-width="labelWidth">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="身份证号码" :label-width="labelWidth">
                <el-input v-model="form.idCard"></el-input>
              </el-form-item>
              <el-form-item label="专业" :label-width="labelWidth">
                <el-input v-model="form.subject"></el-input>
              </el-form-item>
              <el-form-item label="监护人" :label-width="labelWidth">
                <el-input v-model="form.guardian.name"></el-input>
              </el-form-item>
              <el-form-item label="监护人号码" :label-width="labelWidth">
                <el-input v-model="form.guardian.phone"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="cancel">取 消</el-button>
              <el-button type="primary" @click="submitInfo(type)">确 定</el-button>
            </div>
          </el-dialog>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      labelWidth: "120px",
      type: true, //控制'新增'or'修改'
      form: {
        name: "",
        sex: "",
        nation: "",
        grade: "",
        phone: "",
        idCard: "",
        subject: "",
        guardian: { name: "", phone: "" }
      }
    };
  },

  computed: {
    list() {
      return this.$store.state.list;
    }
  },

  methods: {
    //进入添加
    addStudent() {
      this.type = true;
      this.dialogFormVisible = true;
    },

    //进入修改
    changeInfo(current) {
      this.type = false;
      this.dialogFormVisible = true;
      this.form = { ...current };
    },

    //取消
    cancel() {
      this.dialogFormVisible = false;
      this.form = {
        name: "",
        sex: "",
        nation: "",
        grade: "",
        phone: "",
        idCard: "",
        subject: "",
        guardian: { name: "", phone: "" }
      };
    },

    //提交修改(新增)
    submitInfo(type) {
      if (type) {
        this.$store.commit("addInfo", this.form);
      } else {
        this.$store.dispatch("updateInfo", this.form);
      }

      this.dialogFormVisible = false;
      this.form = {
        name: "",
        sex: "",
        nation: "",
        grade: "",
        phone: "",
        idCard: "",
        subject: "",
        guardian: { name: "", phone: "" }
      };
    }
  }
};
</script>

<style lang="less">
#home {
  height: 100%;
  .el-container {
    height: 100%;

    .el-menu {
      height: 100%;
    }

    .form {
      input {
        width: 500px;
      }
    }

    .add {
      margin: 1em;
    }
  }
}
</style>