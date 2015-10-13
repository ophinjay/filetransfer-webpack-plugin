## File Transfer Webpack Plugin

Transfer single file to the build directory

### Getting started

Install the plugin:

```
npm install --save-dev filetransfer-webpack-plugin
```


### API
```javascript
new FileTransferPlugin(pattern: object, [basePath: string])
```

* `pattern` – `{ src: 'path', dest: 'abs_path_of_dest_file' }`, `src` – relative to `basePath` or to `context` of your config (if `basePath` is not exists), 
`dest` – absolute path
* `basePath` (optional) – directory to be resolved to `src` parameter

### Usage

```javascript
var FileTransferPlugin = require('filetransfer-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'app'),
    plugins: [
        new FileTransferPlugin({ 
            src: 'cred_dev.js', 
            dest: path.join(__dirname, 'cred.js') 
        })
    ]
};

module.exports = {
    plugins: [
        new FileTransferPlugin({ 
            src: 'cred_dev.js', 
            dest: path.join(somePath, 'cred.js') 
        }, path.join(__dirname, 'app'))
    ]
};
```
