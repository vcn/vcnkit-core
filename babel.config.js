module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                modules: ['cjs', 'test'].includes(process.env.BABEL_ENV) ? 'commonjs' : false,
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
        [
            '@babel/plugin-proposal-private-methods',
            {
                loose: true,
            },
        ],
        [
            '@babel/plugin-proposal-private-property-in-object',
            {
                loose: true,
            }
        ],
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-object-assign',
    ],
    env: {
        cjs: {
            ignore: [
                '**/__tests__',
                '**/*.test.js',
                '**/*.spec.js',
            ],
        },
        es: {
            ignore: [
                '**/__tests__',
                '**/*.test.js',
                '**/*.spec.js',
            ],
        },
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
    }
}
