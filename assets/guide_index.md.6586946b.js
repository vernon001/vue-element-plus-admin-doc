import{o as n,c as e,a as s}from"./app.044db66b.js";const a='{"title":"开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"环境准备","slug":"环境准备"},{"level":2,"title":"工具配置","slug":"工具配置"},{"level":2,"title":"代码获取","slug":"代码获取"},{"level":3,"title":"从 GitHub 获取代码","slug":"从-github-获取代码"},{"level":3,"title":"从 Gitee 获取代码","slug":"从-gitee-获取代码"},{"level":2,"title":"安装","slug":"安装"},{"level":3,"title":"安装 Node.js","slug":"安装-node-js"},{"level":3,"title":"安装依赖","slug":"安装依赖"},{"level":2,"title":"npm script","slug":"npm-script"}],"relativePath":"guide/index.md","lastUpdated":1663825901255}',t={},o=s('<h1 id="开始"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1><p>本文将快速的帮助你从头运行并启动项目。</p><h2 id="环境准备"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><p>本地环境需要安装 <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">Pnpm</a>、<a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></p><p>为什么使用 <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">Pnpm</a>，而不是用其他包管理器，大家可以搜索一下，这里就不做过多的阐述了。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li><a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> 版本要求<code>14.x</code>以上，这里推荐 <code>16.x</code> 及以上。</li></ul></div><h2 id="工具配置"><a class="header-anchor" href="#工具配置" aria-hidden="true">#</a> 工具配置</h2><p>如果你使用的 IDE 是<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode</a>的话，可以安装以下工具来提高开发效率及代码格式化：</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify" target="_blank" rel="noopener noreferrer">Iconify IntelliSense</a> - Iconify 图标插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense" target="_blank" rel="noopener noreferrer">windicss IntelliSense</a> - windicss 提示插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noopener noreferrer">I18n-ally</a> - i18n 插件</li><li><a href="https://gitee.com/link?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Djohnsoncodehk.volar" target="_blank" rel="noopener noreferrer">Volar</a> - vue 开发必备</li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint</a> - 脚本代码检查</li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier</a> - 代码格式化</li><li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noopener noreferrer">Stylelint</a> - css 格式化</li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noopener noreferrer">DotENV</a> - .env 文件 高亮</li></ul><h2 id="代码获取"><a class="header-anchor" href="#代码获取" aria-hidden="true">#</a> 代码获取</h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。</p></div><h3 id="从-github-获取代码"><a class="header-anchor" href="#从-github-获取代码" aria-hidden="true">#</a> 从 GitHub 获取代码</h3><div class="language-bash"><pre><code><span class="token comment"># clone 代码</span>\n<span class="token function">git</span> clone https://github.com/kailong321200875/vue-element-plus-admin.git\n\n</code></pre></div><h3 id="从-gitee-获取代码"><a class="header-anchor" href="#从-gitee-获取代码" aria-hidden="true">#</a> 从 Gitee 获取代码</h3><div class="language-bash"><pre><code><span class="token function">git</span> clone https://gitee.com/kailong110120130/vue-element-plus-admin.git\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">代码同步</p><p>不用担心 <a href="https://gitee.com/kailong110120130/vue-element-plus-admin" target="_blank" rel="noopener noreferrer">Gitee</a> 代码库和 <a href="https://github.com/kailong321200875/vue-element-plus-admin" target="_blank" rel="noopener noreferrer">Github</a> 代码库不同步，每次版本提交发布，都会及时同步到 <a href="https://gitee.com/kailong110120130/vue-element-plus-admin" target="_blank" rel="noopener noreferrer">Gitee</a> 上。</p></div><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="安装-node-js"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h3><p>如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a>，请安装它，推荐 <code>16.x</code> 及以上</p><p><strong>验证</strong></p><div class="language-bash"><pre><code><span class="token comment"># 验证 npm 是否安装成功</span>\n<span class="token function">npm</span> -v\n\n<span class="token comment"># 验证 node 是否安装成功</span>\nnode -v\n</code></pre></div><p>如果你需要同时存在多个 <code>node</code> 版本，可以使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Nvm</a> 或者其他工具进行 Node.js 进行版本管理。</p><h3 id="安装依赖"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><h4 id="pnpm-安装"><a class="header-anchor" href="#pnpm-安装" aria-hidden="true">#</a> Pnpm 安装</h4><p>推荐使用 <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">Pnpm</a>进行依赖安装（若其他包管理器安装不了需要自行处理）。</p><p>如果未安装 <code>Pnpm</code>，可以用下面命令来进行全局安装</p><div class="language-bash"><pre><code><span class="token comment"># 全局安装 pnpm</span>\n<span class="token function">npm</span> i -g <span class="token function">pnpm</span>\n\n<span class="token comment"># 验证</span>\n<span class="token function">pnpm</span> -v\n</code></pre></div><h4 id="安装依赖-1"><a class="header-anchor" href="#安装依赖-1" aria-hidden="true">#</a> 安装依赖</h4><p>在项目根目录下，打开命令窗口执行，耐心等待安装完成即可</p><div class="language-bash"><pre><code><span class="token comment"># 安装依赖</span>\n<span class="token function">pnpm</span> i\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">安装依赖时 husky 安装失败</p><p>请查看你的源码是否从 <a href="https://github.com/kailong321200875/vue-element-plus-admin" target="_blank" rel="noopener noreferrer">Github</a> 或者 <a href="https://gitee.com/kailong110120130/vue-element-plus-admin" target="_blank" rel="noopener noreferrer">Gitee</a> 直接下载的，直接下载是没有 <code>.git</code> 文件夹的，而 <code>husky</code> 需要依赖 <code>git</code> 才能安装。此时需使用 <code>git init</code> 初始化项目，再尝试重新安装即可。</p></div><p>当依赖安装完成后，执行以下命令即可启动项目：</p><div class="language-bash"><pre><code><span class="token function">pnpm</span> run dev\n</code></pre></div><h2 id="npm-script"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> npm script</h2><div class="language-bash"><pre><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n  <span class="token comment"># 安装依赖</span>\n  <span class="token string">&quot;i&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pnpm install&quot;</span>,\n  <span class="token comment"># 本地开发环境运行</span>\n  <span class="token string">&quot;dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite --mode base&quot;</span>,\n  <span class="token comment"># typeScript 检测</span>\n  <span class="token string">&quot;ts:check&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vue-tsc --noEmit&quot;</span>,\n  <span class="token comment"># 打包生产环境</span>\n  <span class="token string">&quot;build:pro&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite build --mode pro&quot;</span>,\n  <span class="token comment"># 打包开发环境</span>\n  <span class="token string">&quot;build:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run ts:check &amp;&amp; vite build --mode dev&quot;</span>,\n  <span class="token comment"># 打包测试环境</span>\n  <span class="token string">&quot;build:test&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run ts:check &amp;&amp; vite build --mode test&quot;</span>,\n  <span class="token comment"># 本地预览 已打包的生产环境项目包</span>\n  <span class="token string">&quot;serve:pro&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite preview --mode pro&quot;</span>,\n  <span class="token comment"># 本地预览 已打包的开发环境项目包</span>\n  <span class="token string">&quot;serve:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite preview --mode dev&quot;</span>,\n  <span class="token comment"># 本地预览 已打包的测试环境项目包</span>\n  <span class="token string">&quot;serve:test&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite preview --mode test&quot;</span>,\n  <span class="token comment"># 检测可更新依赖</span>\n  <span class="token string">&quot;npm:check&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npx npm-check-updates&quot;</span>,\n  <span class="token comment"># 删除 node_modules</span>\n  <span class="token string">&quot;clean&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npx rimraf node_modules&quot;</span>,\n  <span class="token comment"># 删除 缓存</span>\n  <span class="token string">&quot;clean:cache&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npx rimraf node_modules/.cache&quot;</span>,\n  <span class="token comment"># eslint 检测</span>\n  <span class="token string">&quot;lint:eslint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eslint --fix --ext .js,.ts,.vue ./src&quot;</span>,\n  <span class="token comment"># eslint 格式化</span>\n  <span class="token string">&quot;lint:format&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;prettier --write --loglevel warn <span class="token entity" title="\\&quot;">\\&quot;</span>src/**/*.{js,ts,json,tsx,css,less,vue,html,md}<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>,\n  <span class="token comment"># stylelint 格式化</span>\n  <span class="token string">&quot;lint:style&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stylelint --fix <span class="token entity" title="\\&quot;">\\&quot;</span>**/*.{vue,less,postcss,css,scss}<span class="token entity" title="\\&quot;">\\&quot;</span> --cache --cache-location node_modules/.cache/stylelint/&quot;</span>,\n  <span class="token string">&quot;lint:lint-staged&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;lint-staged -c ./.husky/lintstagedrc.js&quot;</span>,\n  <span class="token string">&quot;lint:pretty&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pretty-quick --staged&quot;</span>,\n  <span class="token string">&quot;postinstall&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;husky install&quot;</span>,\n  <span class="token comment"># 快速生成统一规范的模块</span>\n  <span class="token string">&quot;p&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;plop&quot;</span>\n<span class="token punctuation">}</span>,\n</code></pre></div>',35);t.render=function(s,a,t,l,p,i){return n(),e("div",null,[o])};export default t;export{a as __pageData};
