<template>
   <div class="fixer-container">
       <div class="fixer-item">
           <div class="item-content">
               <i class="el-icon-arrow-up" style="font-size: 1.5em;"></i>
           </div>
       </div>
       <div class="fixer-item">
           <div class="item-content" @click="suggestionVisible=true">
               <i class="el-icon-edit-outline" style="font-size: 1.5em;"></i>
           </div>
       </div>
       <div class="fixer-item">
           <div class="item-content">
               <icon-svg name="weixin"></icon-svg>
           </div>
       </div>
       <!-- <div class="fixer-item">
           <icon-svg name="github"></icon-svg>
       </div> -->


    <el-dialog
      :visible.sync="suggestionVisible"
      v-if="suggestionVisible"
      :modalAppendToBody="false"
      width="600px"
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
import IconSvg from 'src/components/Icon-svg';
import axios from 'src/utils/fetch';
export default {
    name: '',
    data () {
        return {
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
    components: {
        IconSvg
    },
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
.fixer-container {
    display: flex;
    flex-direction: column;
    border-radius: 4px;

    .fixer-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: white;
        cursor: pointer;

        &:not(:last-child) {
            border-bottom: 1px solid #ebeef5;
        }
    }
}
</style>
