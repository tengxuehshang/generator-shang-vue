/* 
  此文件作为 Generator 的核心入口
  需要导出一个继承自 Yeoman Generator 的类型
  Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
  我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入
  prompting() {} 交互询问
  writing() {}   生成写入文件
*/
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    // Yeoman 在询问用户环节会自动调用此方法
    // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // appname 为项目生成目录名称
      }
    ])
      .then(answers => {
        // answers => { name: 'user input value' }
        this.answers = answers
      })
  }
  // Yeoman 自动在生成文件阶段调用此writing方法
  writing() {
    // 往项目目录中写入文件，调用父类的fs模块去自动写入，与node中的fs不一样，这是个高度封装的饿file system 模块
    // this.fs.write( // 有两个参数
    //   this.destinationPath('temp.txt'),// this.destinationPath()方法获取当前文件的绝对路径，写入文件
    //   Math.random().toString() // 生成一个随机数代替内容
    // )
    // -------------------------------------------------------

    // // 通过模板方式写入文件到目标目录
    // const tmpl = this.templatePath('foo.txt')  // 模板文件路径  获取方法 this.templatePath()
    // const output = this.destinationPath('foo.txt') //  输出目标路径 this.destinationPath（）
    // const context = { title: 'Hello zce~', success: false } // // 模板数据上下文
    // this.fs.copyTpl(tmpl, output, context) // 通过该方法传入三个参数，会将模板文件映射到输出文件上
    // -------------------------------------------------------

    // 模板文件路径
    // const tmpl = this.templatePath('bar.html')
    // 输出目标路径
    // const output = this.destinationPath('bar.html')
    // 模板数据上下文
    // const context = this.answers
    // this.fs.copyTpl(tmpl, output, context)
    // -------------------------------------------------------

    // 把每一个文件都通过模板转换到目标路径
    const templates = [
      '.browserslistrc',
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.env.testing',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'README.md',
      'vue.config.js',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/router.js',
      'src/api/index.js',
      'src/assets/image/404.png',
      'src/assets/styles/index.scss',
      'src/components/Pagination.vue',
      'src/components/404.vue',
      'src/views/Home.vue',
      'src/views/Layout.vue',
      'src/store/index.js',
      'src/utils/auth.js',
      'src/utils/permission.js',
      'src/utils/request.js',
      'src/utils/resize.js',
      'src/utils/scroll-to.js',
    ]

    templates.forEach(item => {
      // item => 每个文件路径
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}