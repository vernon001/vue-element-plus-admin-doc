import{o as n,c as s,a}from"./app.044db66b.js";const e='{"title":"项目配置项","description":"","frontmatter":{},"headers":[{"level":2,"title":"环境变量配置","slug":"环境变量配置"},{"level":3,"title":"配置项说明","slug":"配置项说明"},{"level":3,"title":".env.base","slug":"env-base"},{"level":3,"title":".env.dev","slug":"env-dev"},{"level":3,"title":".env.test","slug":"env-test"},{"level":3,"title":".env.pro","slug":"env-pro"},{"level":2,"title":"项目及主题配置","slug":"项目及主题配置"},{"level":3,"title":"配置文件路径","slug":"配置文件路径"},{"level":3,"title":"说明","slug":"说明"},{"level":3,"title":"如何添加新属性","slug":"如何添加新属性"},{"level":2,"title":"缓存配置","slug":"缓存配置"},{"level":3,"title":"说明","slug":"说明-1"},{"level":2,"title":"多语言配置","slug":"多语言配置"},{"level":2,"title":"样式配置","slug":"样式配置"},{"level":3,"title":"css 前缀设置","slug":"css-前缀设置"},{"level":3,"title":"前缀使用","slug":"前缀使用"}],"relativePath":"guide/settings.md","lastUpdated":1663825901255}',p={},o=a('<h1 id="项目配置项"><a class="header-anchor" href="#项目配置项" aria-hidden="true">#</a> 项目配置项</h1><p>本文将介绍一些常用的项目配置，方便开发者可以根据需求进行定制化改造。</p><h2 id="环境变量配置"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h2><p>项目的环境变量配置位于项目根目录下的，这里主要配置四个个环境变量，分别为：</p><ul><li><a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/.env.base" target="_blank" rel="noopener noreferrer">本地开发环境</a></li><li><a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/.env.dev" target="_blank" rel="noopener noreferrer">开发环境</a></li><li><a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/.env.test" target="_blank" rel="noopener noreferrer">测试环境</a></li><li><a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/.env.pro" target="_blank" rel="noopener noreferrer">生产环境</a></li></ul><p>在开发调试的时候，会读取 <code>.env.base</code> 里面的数据。其他环境亦是如此，根据打包命令的不同，来读取不同的环境变量。</p><p>也许你会疑惑，为什么会有多个环境变量？</p><p>以 <code>生产环境</code> 为例，当我们执行 <code>pnpm run build:pro</code> 时，输出的包是用于线上环境的，所以代码都应该是压缩，我们需要删除掉代码中的 <code>console.log</code> 和 <code>degubber</code>，保证打包后代码的整洁度和不可见性。而其他环境，所以应该保留 <code>console.log</code> 和 <code>degubber</code> 用于调试，这样才能快速定位到问题所在。</p><p>所以环境变量的作用就是为了，在不同环境下有不同的表现。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>只有以 <code>VITE_ </code> 开头的变量会被嵌入到项目中，你可以项目代码中这样访问它们：</li></ul><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_TITLE</span><span class="token punctuation">)</span>\n</code></pre></div></div><h3 id="配置项说明"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h3><h3 id="env-base"><a class="header-anchor" href="#env-base" aria-hidden="true">#</a> .env.base</h3><p>本地开发环境适用</p><div class="language-bash"><pre><code><span class="token comment"># 环境</span>\nNODE_ENV <span class="token operator">=</span> development\n\n<span class="token comment"># 接口前缀</span>\nVITE_API_BASEPATH <span class="token operator">=</span> base\n\n<span class="token comment"># 打包路径</span>\nVITE_BASE_PATH <span class="token operator">=</span> /\n\n<span class="token comment"># 标题</span>\nVITE_APP_TITLE <span class="token operator">=</span> ElementAdmin\n</code></pre></div><h3 id="env-dev"><a class="header-anchor" href="#env-dev" aria-hidden="true">#</a> .env.dev</h3><p>开发环境适用</p><div class="language-bash"><pre><code><span class="token comment"># 环境</span>\nNODE_ENV <span class="token operator">=</span> production\n\n<span class="token comment"># 接口前缀</span>\nVITE_API_BASEPATH <span class="token operator">=</span> dev\n\n<span class="token comment"># 打包路径</span>\nVITE_BASE_PATH <span class="token operator">=</span> /dist-dev/\n\n<span class="token comment"># 是否删除debugger</span>\nVITE_DROP_DEBUGGER <span class="token operator">=</span> <span class="token boolean">false</span>\n\n<span class="token comment"># 是否删除console.log</span>\nVITE_DROP_CONSOLE <span class="token operator">=</span> <span class="token boolean">false</span>\n\n<span class="token comment"># 是否sourcemap</span>\nVITE_SOURCEMAP <span class="token operator">=</span> <span class="token boolean">true</span>\n\n<span class="token comment"># 输出路径</span>\nVITE_OUT_DIR <span class="token operator">=</span> dist-dev\n\n<span class="token comment"># 标题</span>\nVITE_APP_TITLE <span class="token operator">=</span> ElementAdmin\n\n</code></pre></div><h3 id="env-test"><a class="header-anchor" href="#env-test" aria-hidden="true">#</a> .env.test</h3><p>测试环境适用</p><div class="language-bash"><pre><code><span class="token comment"># 环境</span>\nNODE_ENV <span class="token operator">=</span> production\n\n<span class="token comment"># 接口前缀</span>\nVITE_API_BASEPATH <span class="token operator">=</span> <span class="token builtin class-name">test</span>\n\n<span class="token comment"># 打包路径</span>\nVITE_BASE_PATH <span class="token operator">=</span> /dist-test/\n\n<span class="token comment"># 是否删除debugger</span>\nVITE_DROP_DEBUGGER <span class="token operator">=</span> <span class="token boolean">false</span>\n\n<span class="token comment"># 是否删除console.log</span>\nVITE_DROP_CONSOLE <span class="token operator">=</span> <span class="token boolean">false</span>\n\n<span class="token comment"># 是否sourcemap</span>\nVITE_SOURCEMAP <span class="token operator">=</span> <span class="token boolean">true</span>\n\n<span class="token comment"># 输出路径</span>\nVITE_OUT_DIR <span class="token operator">=</span> dist-test\n\n</code></pre></div><h3 id="env-pro"><a class="header-anchor" href="#env-pro" aria-hidden="true">#</a> .env.pro</h3><p>生产环境适用</p><div class="language-bash"><pre><code><span class="token comment"># 环境</span>\nNODE_ENV <span class="token operator">=</span> production\n\n<span class="token comment"># 接口前缀</span>\nVITE_API_BASEPATH <span class="token operator">=</span> pro\n\n<span class="token comment"># 打包路径</span>\nVITE_BASE_PATH <span class="token operator">=</span> /\n\n<span class="token comment"># 是否删除debugger</span>\nVITE_DROP_DEBUGGER <span class="token operator">=</span> <span class="token boolean">true</span>\n\n<span class="token comment"># 是否删除console.log</span>\nVITE_DROP_CONSOLE <span class="token operator">=</span> <span class="token boolean">true</span>\n\n<span class="token comment"># 是否sourcemap</span>\nVITE_SOURCEMAP <span class="token operator">=</span> <span class="token boolean">false</span>\n\n<span class="token comment"># 输出路径</span>\nVITE_OUT_DIR <span class="token operator">=</span> dist-pro\n\n<span class="token comment"># 标题</span>\nVITE_APP_TITLE <span class="token operator">=</span> ElementAdmin\n\n</code></pre></div><h2 id="项目及主题配置"><a class="header-anchor" href="#项目及主题配置" aria-hidden="true">#</a> 项目及主题配置</h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>项目配置文件用于配置项目内展示的内容、布局、主题色等效果。</p></div><h3 id="配置文件路径"><a class="header-anchor" href="#配置文件路径" aria-hidden="true">#</a> 配置文件路径</h3><p><a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/config/app.ts" target="_blank" rel="noopener noreferrer">src/config/app.ts</a></p><h3 id="说明"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3><p>修改完之后，会添加到全局的状态管理中，方便其他地方使用。</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> appModules<span class="token operator">:</span> AppState <span class="token operator">=</span> <span class="token punctuation">{</span>\n  userInfo<span class="token operator">:</span> <span class="token string">&#39;userInfo&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 登录信息存储字段-建议每个项目换一个字段，避免与其他项目冲突</span>\n  sizeMap<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;large&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  mobile<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否是移动端</span>\n  title<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_TITLE</span> <span class="token keyword">as</span> string<span class="token punctuation">,</span> <span class="token comment">// 标题</span>\n  pageLoading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 路由跳转loading</span>\n\n  breadcrumb<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 面包屑</span>\n  breadcrumbIcon<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 面包屑图标</span>\n  collapse<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 折叠菜单</span>\n  hamburger<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 折叠图标</span>\n  screenfull<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 全屏图标</span>\n  size<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 尺寸图标</span>\n  locale<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 多语言图标</span>\n  tagsView<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 标签页</span>\n  logo<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// logo</span>\n  fixedHeader<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 固定toolheader</span>\n  footer<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示页脚</span>\n  greyMode<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否开始灰色模式，用于特殊悼念日</span>\n\n  layout<span class="token operator">:</span> wsCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;layout&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;classic&#39;</span><span class="token punctuation">,</span> <span class="token comment">// layout布局</span>\n  isDark<span class="token operator">:</span> wsCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;isDark&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否是暗黑模式</span>\n  currentSize<span class="token operator">:</span> wsCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 组件尺寸</span>\n  theme<span class="token operator">:</span> wsCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;theme&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 主题色</span>\n    elColorPrimary<span class="token operator">:</span> <span class="token string">&#39;#409eff&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 左侧菜单边框颜色</span>\n    leftMenuBorderColor<span class="token operator">:</span> <span class="token string">&#39;inherit&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 左侧菜单背景颜色</span>\n    leftMenuBgColor<span class="token operator">:</span> <span class="token string">&#39;#001529&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 左侧菜单浅色背景颜色</span>\n    leftMenuBgLightColor<span class="token operator">:</span> <span class="token string">&#39;#0f2438&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 左侧菜单选中背景颜色</span>\n    leftMenuBgActiveColor<span class="token operator">:</span> <span class="token string">&#39;var(--el-color-primary)&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 左侧菜单收起选中背景颜色</span>\n    leftMenuCollapseBgActiveColor<span class="token operator">:</span> <span class="token string">&#39;var(--el-color-primary)&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 左侧菜单字体颜色</span>\n    leftMenuTextColor<span class="token operator">:</span> <span class="token string">&#39;#bfcbd9&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 左侧菜单选中字体颜色</span>\n    leftMenuTextActiveColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// logo字体颜色</span>\n    logoTitleTextColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// logo边框颜色</span>\n    logoBorderColor<span class="token operator">:</span> <span class="token string">&#39;inherit&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 头部背景颜色</span>\n    topHeaderBgColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 头部字体颜色</span>\n    topHeaderTextColor<span class="token operator">:</span> <span class="token string">&#39;inherit&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 头部悬停颜色</span>\n    topHeaderHoverColor<span class="token operator">:</span> <span class="token string">&#39;#f6f6f6&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 头部边框颜色</span>\n    topToolBorderColor<span class="token operator">:</span> <span class="token string">&#39;#eee&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="如何添加新属性"><a class="header-anchor" href="#如何添加新属性" aria-hidden="true">#</a> 如何添加新属性</h3><p>如果想要添加新的全局配置属性，需要在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/config/app.ts" target="_blank" rel="noopener noreferrer">src/config/app.ts</a> 中 <code>AppState</code> 添加对应的类型，并在 <code>appModules</code> 对象中，赋予新属性的默认值。</p><h2 id="缓存配置"><a class="header-anchor" href="#缓存配置" aria-hidden="true">#</a> 缓存配置</h2><p>统一项目中的写法。</p><h3 id="说明-1"><a class="header-anchor" href="#说明-1" aria-hidden="true">#</a> 说明</h3><p>在项目中，你可以看到很多地方都使用了 <code>wsCache.set</code> 或者 <code>wsCache.get</code>，这是基于 <a href="https://github.com/wuchangming/web-storage-cache" target="_blank" rel="noopener noreferrer">web-storage-cache</a> 进行封装，采用 <code>hook</code> 的形式。</p><p>该插件对HTML5 <code>localStorage</code> 和 <code>sessionStorage</code> 进行了扩展，添加了超时时间，序列化方法。可以直接存储 <code>json</code> 对象，同时可以非常简单的进行超时时间的设置。</p><p>本项目默认是采用 <code>sessionStorage</code> 的存储方式，如果更改，可以直接在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/hooks/web/useCache.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useCache.ts</a> 中把 <code>type: CacheType = &#39;sessionStorage&#39;</code> 改为 <code>type: CacheType = &#39;localStorage&#39;</code>，这样项目中的所有用到的地方，都会变成该方式进行数据存储。</p><p>如果只想单个更改，可以传入存储类型 <code>const { wsCache } = useCache(&#39;localStorage&#39;)</code>，既可只适用当前存储对象。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>更改完默认存储方式后，需要清除浏览器缓存并重新登录，以免造成不可描述的问题。</p></div><h2 id="多语言配置"><a class="header-anchor" href="#多语言配置" aria-hidden="true">#</a> 多语言配置</h2><p>用于配置多语言信息</p><p>在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/config/locale.ts" target="_blank" rel="noopener noreferrer">src/config/locale.ts</a> 内配置</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useCache&#39;</span>\n<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/en&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> wsCache <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> elLocaleMap <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">&#39;zh-CN&#39;</span><span class="token operator">:</span> zhCn<span class="token punctuation">,</span>\n  en<span class="token operator">:</span> en\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">LocaleState</span> <span class="token punctuation">{</span>\n  currentLocale<span class="token operator">:</span> LocaleDropdownType\n  localeMap<span class="token operator">:</span> LocaleDropdownType<span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> localeModules<span class="token operator">:</span> LocaleState <span class="token operator">=</span> <span class="token punctuation">{</span>\n  currentLocale<span class="token operator">:</span> <span class="token punctuation">{</span>\n    lang<span class="token operator">:</span> wsCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;lang&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>\n    elLocale<span class="token operator">:</span> elLocaleMap<span class="token punctuation">[</span>wsCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;lang&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 多语言</span>\n  localeMap<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      lang<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h2 id="样式配置"><a class="header-anchor" href="#样式配置" aria-hidden="true">#</a> 样式配置</h2><h3 id="css-前缀设置"><a class="header-anchor" href="#css-前缀设置" aria-hidden="true">#</a> css 前缀设置</h3><p>用于修改项目内组件及 <code>element-plus</code> 组件的 <code>class</code> 前缀。</p><p>由于 <code>element-plus</code> 的组件还没有全部采用动态配置前缀，所以目前还是使用 <code>el</code> 前缀。</p><ul><li>在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/styles/variables.module.less" target="_blank" rel="noopener noreferrer">src/styles/variables.module.less</a> 内配置</li></ul><div class="language-less"><pre><code><span class="token comment">// 命名空间</span>\n<span class="token variable">@namespace<span class="token punctuation">:</span></span> v<span class="token punctuation">;</span>\n<span class="token comment">// el命名空间</span>\n<span class="token variable">@elNamespace<span class="token punctuation">:</span></span> el<span class="token punctuation">;</span>\n\n<span class="token comment">// 导出变量</span>\n<span class="token selector">:export</span> <span class="token punctuation">{</span>\n  <span class="token property">namespace</span><span class="token punctuation">:</span> <span class="token variable">@namespace</span><span class="token punctuation">;</span>\n  <span class="token property">elNamespace</span><span class="token punctuation">:</span> <span class="token variable">@elNamespace</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h3 id="前缀使用"><a class="header-anchor" href="#前缀使用" aria-hidden="true">#</a> 前缀使用</h3><p><strong>在 css 内</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token comment">/* namespace已经全局注入，不需要额外在引入 */</span>\n  <span class="token atrule"><span class="token rule">@prefix-cls</span><span class="token punctuation">:</span> ~&#39;@</span><span class="token punctuation">{</span>namespace<span class="token punctuation">}</span>-app&#39;<span class="token punctuation">;</span>\n\n  <span class="token selector">.@</span><span class="token punctuation">{</span>prefix-cls<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><strong>在 vue/ts 内</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDesign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useDesign&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> prefixCls <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDesign</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// prefixCls =&gt; v-app</span>\n</code></pre></div>',55);p.render=function(a,e,p,t,c,l){return n(),s("div",null,[o])};export default p;export{e as __pageData};
