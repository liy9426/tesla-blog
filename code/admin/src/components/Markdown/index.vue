<template>
  <div class="quill-wrap">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      style="height: 400px; margin-bottom: 50px;"
    >
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor, Quill } from 'vue-quill-editor';
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

Quill.register('modules/ImageExtend', ImageExtend);
export default {
    props: ['value'],
    components: { quillEditor },
    created () {
        this.content = this.value;
    },
    data () {
        return {
            // 富文本框参数设置
            content: '',
            editorOption: {
                modules: {
                    ImageExtend: {
                        loading: true,
                        name: 'img',
                        action: '/admin_demo_api/markdown_upload_img',
                        response: res => {
                            return res.data.img;
                        }
                    },
                    toolbar: {
                        container: container,
                        handlers: {
                            image: function () {
                                QuillWatch.emit(this.quill.id);
                            }
                        }
                    }
                }
            }
        };
    },
    watch: {
        content (nVal) {
            this.$emit('input', nVal);
        }
    }
};
</script>