<template>
  <div class="footer-container">
    <div class="footer-content">
      <span>
        Design by: 美国老土
      </span>
      <span>
        <a href="mailto:yaying9610@gmail.com">联系站长</a>
      </span>
      <span>
        <a @click="wechatVisible=true">微信</a>
      </span>
      <span>
        <a
          href="https://github.com/liy9426"
          target="blank"
        >github</a>
      </span>
      <span>
        <a @click="suggestionVisible=true">意见与建议</a>
      </span>
      <span>
        备案号：湘ICP备14011335号-2
      </span>
    </div>

    <el-dialog
      :visible.sync="wechatVisible"
      width="240px"
      :show-close="false"
    >
      <span><img
          src="../../images/wechat.png"
          alt=""
          width="200px"
        ></span>
    </el-dialog>

    <el-dialog
      :visible.sync="suggestionVisible"
      v-if="suggestionVisible"
      width="30%"
      title="建议 / 反馈"
    >
      <el-form
        :model="suggestionForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        width="60%"
      >
        <el-form-item label="反馈类型">
          <el-radio
            v-model="suggestionForm.type"
            label="1"
            border
          >功能建议</el-radio>
          <el-radio
            v-model="suggestionForm.type"
            label="2"
            border
          >BUG反馈</el-radio>
        </el-form-item>
        <el-form-item
          label="标题"
          prop="title"
        >
          <el-input
            v-model="suggestionForm.title"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="内容"
          prop="content"
        >
          <el-input
            v-model="suggestionForm.content"
            type="textarea"
            rows="4"
            placeholder="请输入反馈内容"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="suggestionVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="handleSubmitSuggestion"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'src/utils/fetch';
export default {
    name: '',
    data () {
        return {
            wechatVisible: false,
            suggestionVisible: false,
            suggestionForm: {
                type: '1',
                title: '',
                content: ''
            },
            rules: {
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur' }
                ],
                content: [
                    {
                        required: true,
                        message: '请输入反馈内容',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    components: {},
    methods: {
        handleShowWechat () {
            this.wechatVisible = true;
        },
        handleSubmitSuggestion () {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    axios.post('/suggestion', this.suggestionForm).then(res => {
                        this.$message({
                            message: '提交成功!',
                            type: 'success'
                        });
                    }).catch(err => {
                        console.log(err);
                    });
                    this.suggestionVisible = false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    watch: {
        suggestionVisible (nVal) {
            if (nVal) {
                this.suggestionForm = {
                    type: '1',
                    title: '',
                    content: ''
                };
            }
        }
    }
};
</script>

<style scoped lang="scss">
.footer-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-content {
        span {
            display: inline-block;
            padding: 0 10px;
            font-size: 14px;
            line-height: 50px;
        }
    }
}
</style>
