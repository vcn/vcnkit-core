module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                modules: process.env.BABEL_ENV === 'cjs' ? 'commonjs' : false,
            },
        ],
    ],
    plugins: [
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: true,
            },
        ],
        [
            '@babel/plugin-proposal-object-rest-spread',
            {
                loose: true,
            },
        ],
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-object-assign',
    ],
    env: {
        cjs: {},
        es: {},
        development: {
            plugins: [
                [
                    'babel-plugin-module-resolver',
                    {
                        alias: {
                            '@vcnkit/core': './src',
                        },
                    },
                ],
            ],
        },
        test: {
            sourceMaps: 'both',
        },
    }
}