<template>
  <div>
    <codemirror
      :options="cmOptions"
      v-model="ansibleOutput"
    />
  </div>
</template>

<script>
import VueCodeMirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css'; // 引入 CodeMirror 的样式文件
import './ansible-playbook.css'; // 引入自定义主题 CSS 文件
import './ansible-playbook.js'; // 引入自定义 CodeMirror 模式

export default {
  components: {
    codemirror: VueCodeMirror,
  },
  data() {
    return {
      ansibleOutput: '', // Ansible 输出将在这里显示
      cmOptions: {
        mode: 'ansible-playbook', // 使用自定义模式
        theme: 'ansible-playbook', // 使用自定义主题
        lineNumbers: true,
        readOnly: true, // 只读模式
      },
    };
  },
  created() {
    // 获取 Ansible 输出并将其设置给 this.ansibleOutput
    this.fetchAnsibleOutput();
  },
  methods: {
    fetchAnsibleOutput() {
      // 获取 Ansible 输出内容
      // 将其设置给 this.ansibleOutput
    },
  },
};
</script>
