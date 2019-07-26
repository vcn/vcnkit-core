// Material-UI's approach seems to be good here, using that.

const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const basePath = path.resolve(__dirname, '../');
const sourcePath = path.resolve(basePath, './src');
const distPath = path.resolve(basePath, './dist');

/**
 * Copies a list of files from source to the dist folder.
 * 
 * @param string[] files
 */
async function copyFiles(files) {
    console.info(`Copying files to ${ distPath }...`);

    files.map(
        async file => {
            const source = path.resolve(basePath, file);
            const target = path.resolve(distPath, path.basename(file));

            await fse.copy(source, target);

            console.info(`[COPY] ${ source } --> ${ target }`);
        }
    );
}

/**
 * Creates the main package.json file
 */
async function createMainPackage() {
    const packageData = JSON.parse(
        await fse.readFile(
            path.resolve(basePath, './package.json'),
            'utf8',
        )
    );

    const targetPath = path.resolve(distPath, './package.json');
    await fse.writeFile(
        targetPath,
        JSON.stringify(
            {
                ...packageData,
                main:   './index.js',
                module: './es/index.js',
            },
            null,
            2
        ),
        'utf8'
    );

    console.info(`[PACKAGE-JSON] Created ${ targetPath }`);
}

/**
 * Creates a package.json in every component folder to enable prettier imports.
 */
async function createComponentPackages() {
    const componentsDirs = glob
        .sync('*/index.js', { cwd: sourcePath })
        .map(path.dirname);

    await Promise.all(
        componentsDirs.map(
            async componentDir => {
                const packageData = {
                    sideEffects: false,
                    module:      path.join('../es', componentDir, 'index.js'),
                };

                const packagePath = path.join(
                    distPath,
                    componentDir,
                    'package.json',
                );

                console.info(`[PACKAGE-JSON] ${ packagePath }...`);
                fse.writeFile(packagePath, JSON.stringify(packageData, null, 2), 'utf8');

                return packagePath;
            }
        )
    );
}

async function execute() {
    await copyFiles([
        'LICENSE',
        'README.md',
    ]);

    await createMainPackage();
    await createComponentPackages();
}

execute();