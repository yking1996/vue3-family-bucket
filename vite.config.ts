import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	//开发或生产环境服务的公共基础路径
	base: '/demo/',
	//作为静态资源服务的文件夹。并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。
	publicDir: "public",
	server: {
		port: 9099,
		host: '0.0.0.0',
		proxy: {
			'/music': {
				target: 'http://101.34.166.157:3000/', // 接口基地址
				changeOrigin: true,
				rewrite: path => {
					return path.replace(/^\/music/, '');
				}
			}
		}
	},
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue'],
			dts: 'src/auto-import.d.ts'
		})
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, '.', 'src'), // 设置 @ 指向 src
			'@img': resolve(__dirname, '.', 'src/assets/img'),
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "@/assets/css/theme.scss" as *;'
			}
		}
	},
	build: {
		//传递给 Terser 的更多 minify 选项。 生产环境去除 console debugger
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		outDir: "dist",
	}
})
