module.exports = ['/Users/jasperdemoor/Documents/GitHub/parcel/lib/test/source/index.html',
    {
        name: 'test',
        version: '1.0.0',
        description: '',
        main: 'index.js',
        scripts:
            {
                start: 'node ../../bin/cli ./source/index.html --no-cache',
                build: 'node ../../bin/cli build ./source/index.html --no-cache --public-url ./'
            },
        keywords: [],
        author: '',
        license: 'ISC',
        dependencies: {},
        devDependencies: { 'parcel-bundler': '^1.4.1' },
        pkgfile: '/Users/jasperdemoor/Documents/GitHub/parcel/lib/test/package.json'
    },
    {
        outDir: '/Users/jasperdemoor/Documents/GitHub/parcel/lib/test/dist',
        publicURL: '/dist',
        watch: true,
        cache: false,
        cacheDir: '/Users/jasperdemoor/Documents/GitHub/parcel/lib/test/.cache',
        killWorkers: true,
        minify: false,
        hmr: true,
        logLevel: 3,
        mainFile: '/Users/jasperdemoor/Documents/GitHub/parcel/lib/test/source/index.html',
        hmrPort: 56653,
        extensions:
            {
                '.js': './assets/JSAsset',
                '.jsx': './assets/JSAsset',
                '.es6': './assets/JSAsset',
                '.jsm': './assets/JSAsset',
                '.mjs': './assets/JSAsset',
                '.ml': './assets/ReasonAsset',
                '.re': './assets/ReasonAsset',
                '.ts': './assets/TypeScriptAsset',
                '.tsx': './assets/TypeScriptAsset',
                '.coffee': './assets/CoffeeScriptAsset',
                '.json': './assets/JSONAsset',
                '.yaml': './assets/YAMLAsset',
                '.yml': './assets/YAMLAsset',
                '.gql': './assets/GraphqlAsset',
                '.graphql': './assets/GraphqlAsset',
                '.css': './assets/CSSAsset',
                '.pcss': './assets/CSSAsset',
                '.styl': './assets/StylusAsset',
                '.less': './assets/LESSAsset',
                '.sass': './assets/SASSAsset',
                '.scss': './assets/SASSAsset',
                '.html': './assets/HTMLAsset'
            },
        parser: {
            extensions: {
                '.js': './assets/JSAsset',
                '.jsx': './assets/JSAsset',
                '.es6': './assets/JSAsset',
                '.jsm': './assets/JSAsset',
                '.mjs': './assets/JSAsset',
                '.ml': './assets/ReasonAsset',
                '.re': './assets/ReasonAsset',
                '.ts': './assets/TypeScriptAsset',
                '.tsx': './assets/TypeScriptAsset',
                '.coffee': './assets/CoffeeScriptAsset',
                '.json': './assets/JSONAsset',
                '.yaml': './assets/YAMLAsset',
                '.yml': './assets/YAMLAsset',
                '.gql': './assets/GraphqlAsset',
                '.graphql': './assets/GraphqlAsset',
                '.css': './assets/CSSAsset',
                '.pcss': './assets/CSSAsset',
                '.styl': './assets/StylusAsset',
                '.less': './assets/LESSAsset',
                '.sass': './assets/SASSAsset',
                '.scss': './assets/SASSAsset',
                '.html': './assets/HTMLAsset'
            }
        }
    }];