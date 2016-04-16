
* 首先安装express，npm install --save express
* 创建.gitignore文本文件，写入node_modules
* 创建mealowlark.js，先写404和500页面，用来兜底
* 在404前面给所有页面添加路由
* 安装Eric Ferraiuolo的express3-handlebars包npm install --save express-handlebars
* 在主程序中添加视图引擎，配置母版页
  视图架构views/layouts/main.handlebars
          views/home.handlebars,views/about.handlebars,......
* 创建母版视图和其他视图
* 新路由代替旧路由，用render()代替原来的一坨
* Express靠中间件来处理视图和静态文件
* 创建public文件夹，把static中间件放在所有路由之前，相当于给静态文件创建了一个路由。
* 在public文件夹下创建img文件夹，加入logo.jpg
* 修改布局文件views/layouts/main.handlebars，加入logo
* /about加入动态内容
* 在meadowlark.js中加入幸运饼干原始数据
* 修改views/about.handlebars，显示抽取到的幸运饼干
* 在meadowlark.js中修改路由/about
* OK,基本的网站结构完成。
* meadowlark
├── meadowlark.js
├── node_modules
│?? ├── express
│?? └── express3-handlebars
├── package.json
├── public
│?? └── img
└── views
    ├── 404.handlebars
    ├── 500.handlebars
    ├── about.handlebars
    ├── home.handlebars
    └── layouts

* 视图与静态资源（图片 css）的区别：它不一定是静态的,HTML可以动态构建，为每个请求提供定制的页面。
* Express与Jade都出自TJ Holowaychuk之手。
* 大部分前端不喜欢他们主要的标记语言被抽象化处理。
* Express

细节

* app.VERB做了很多工作，它默认忽略了大小写或反斜杠，并且在进行匹配时也不考虑查询字符串。针对/about、//about、/about/、/about?foo=bar、about/?foo=bar都适用。
* 不推荐直接使用Node的res.writeHead,res.end，推荐使用express库扩展后的res方法。还有req.url等很多。

系统

* 安全组
* centos看端口vi /etc/sysconfig/iptables 
* tree -L 2 meadowlark
* q! 放弃修改，强制退出
* swp片段文件只要不处理就总存在

git配置ccommit

*  git config --global user.email "you@example.com"
*  git config --global user.name "Your Name"

git配置ssh

* $ ssh-keygen -t rsa -C "youremail@example.com"
* 在Github创建SSH Key，粘贴id_rsa.pub文件内容
  
git操作

*  echo "# meadowlark123" >> README.md
*  git init
*  git add README.md
*  git commit -m "first commit"
*  git remote add origin git@github.com:liuzenghui2007/meadowlark123.git
*  git push -u origin master


