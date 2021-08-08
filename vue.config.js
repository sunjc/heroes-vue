module.exports = {
    runtimeCompiler: true,
    /*pages: {
        index: {
            entry: 'src/main.ts',
            title: 'Tour of Heroes'
        }
    },*/
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Tour of Heroes";
                return args;
            })
    },
    devServer: {
        proxy: {
            '/api': {
                target: `http://localhost:8080`,
                changeOrigin: true,
            }
        }
    }
}
