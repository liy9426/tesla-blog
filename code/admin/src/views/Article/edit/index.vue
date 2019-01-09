<template>
    <el-dialog title="文章编辑" :visible.sync="dialogTableVisible" class="edit-wrapper" @close="close" width="70%" top="5vh">
        <el-form :model="info" :rules="rules" ref="form" label-width="100px" class="form">
            <el-form-item label="博客类型" prop="type">
                <el-select v-model="info.type" placeholder="请选择博客类型" class="block" @change="handleTypeChange">
                    <el-option v-for="item in blogTypes" :key="item.name" :label="item.name" :value="item.name">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="博客子类型" prop="subtypes">
                <el-select v-model="info.subtypes" multiple clearable placeholder="请选择博客子类型" class="block">
                    <el-option v-for="(item,index) in subtypes" :key="index" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="文章标题" prop="title">
                <el-input type="text" v-model="info.title"></el-input>
            </el-form-item>
            <el-form-item label="文章描述" prop="desc">
                <el-input type="textarea" v-model="info.desc"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <Markdown v-model="info.html"></Markdown>
            </el-form-item>
            <el-form-item label="来源" prop="source">
                <el-select v-model="info.source" placeholder="请选择来源" class="block">
                    <el-option v-for="item in sources" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="来源url" prop="url">
                <el-input type="text" v-model="info.url"></el-input>
            </el-form-item>
            <el-form-item label="发布时间" prop="releaseTime">
                <el-date-picker class="block" v-model="info.releaseTime" type="date" placeholder="选择发布日期"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')" :loading="loading">更新</el-button>
            </el-form-item>

        </el-form>
    </el-dialog>
</template>


<script>
    import { mapGetters } from 'vuex';
    import Markdown from 'components/Markdown';
    export default {
        components: { Markdown },
        props: ['info'],
        data () {
            return {
                dialogTableVisible: true,
                loading: false,
                rules: {
                    subtypes: [
                        { required: true, message: '请选择至少选择一个子类型', trigger: 'change', type: 'array' }
                    ],
                    title: [
                        { required: true, message: '请填写文章标题', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请填写文章描述', trigger: 'blur' }
                    ],
                    releaseTime: [
                        { required: true, message: '请选择文章的发布时间', trigger: 'change', type: 'date' }
                    ]
                },
                subtypes: []
            };
        },
        created () {
            this.subtypes = this.blogTypes.find(item => item.name === this.info.type).subtypes;
        },
        methods: {
            close () {
                this.$emit('close');
            },
            handleTypeChange (nVal) {
                this.info.subtypes = [];
                this.subtypes = this.blogTypes.find(item => item.name === nVal).subtypes;
            },
            submitForm (formName) {
                this.loading = true;
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        try {
                            console.log('this.info.html', this.info.html);
                            await this.$store.dispatch('updateBlog', this.info);
                            this.loading = false;
                            this.close();
                            this.$message({
                                message: '更新成功!',
                                type: 'success'
                            });
                        } catch (e) {
                            this.loading = false;
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }

        },
        computed: {
            ...mapGetters([
                'blogTypes',
                'sources'
            ])
        }
    };
</script>


<style lang="less" scoped>
    .edit-wrapper {
        .block {
            width: 100%;
            display: block;
        }
        .form {
            // width: 400px;
        }
        .submit {
            width: 100px;
        }
    }
</style>