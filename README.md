powerfans源码说明
============

此处开源的是用react实现的powerfans DAPP源代码，按照以下说明操作，将在您的设备上构建热加载的开发模式服务端，或是生成生产环境用于部署到服务器。

powerfans同时也是一个连接 Seer区块链 API 的手机轻钱包。

这个钱包*将所有的密钥存储在本地浏览器上*，*不会把你的密钥暴露给任何人*，因为它会先在本地对交易签名，再传输到 API 服务器上，由服务器广播至区块链网络。钱包由用户选择的密码加密并储存在浏览器数据库中。

## 项目依赖

币比 依赖于 Node.js v6 以上版本。

在 Linux 和 macOS 上，安装 Node 最简单的方式是用 [NVM](https://github.com/creationix/nvm)。

将以下命令复制到终端中执行即可安装 NVM。

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
nvm install v6
nvm use v6
```

Node 安装完成后，获取项目的源代码：

```
git clone https://github.com/wangc2019/pf.git
cd pf
```

在启动之前，需要先安装 npm 软件包：

```
npm install
```

## 运行开发服务器

开发服务器使用 Express 和 Webpack。

所有软件包安装好后，可以使用以下命令启动开发服务器：

```
npm start
```

编译完成后，即可通过浏览器访问 `localhost:3000` 或 `127.0.0.1:3000` 打开钱包。服务器启用了热加载功能，在编辑源文件后，浏览器中的内容会实时更新。

## 生产环境

如果你想自己部署基于PF源码的钱包，你应该进行生产环境构建，并使用 NGINX 或 Apache 托管。只需要运行以下命令构建生产环境应用包：

```
npm run build
```

应用包会创建在 `build/dist` 目录下，可以使用网站服务器进行托管。

## powerfans资源

PF页面资源在 app/src 目录下，您可以自行修改。
