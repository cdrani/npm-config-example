const url = 'https://github.com/cdrainxv/'

const pwd = () => {
  const path = process.env.PWD.split('/')
  return path[path.length - 1]
}

module.exports = {
  name: prompt('name', `${pwd()}`, name => `${name}`),
  version: prompt('version', '0.0.1', version => `${version}`),
  main: prompt('main file', 'index', main => `${main}.js`),
  description: prompt('desc', 'verbal diarrhea', desc => `${desc}`),
  scripts: {
    clean: 'rimraf dist',
    build: 'npm run clean && webpack',
    serve: 'webpack-dev-server'
  },
  keywords: prompt('keywords', 'node, webpack, react'),
  dependencies: {
    'prop-types': '^15.5.10',
    react: '^15.6.1',
    'react-dom': '^15.6.1'
  },
  devDependencies: {
    'babel-core': '^6.26.0',
    'babel-loader': '^7.1.2',
    'babel-preset-env': '^1.6.0',
    'babel-preset-react': '^6.24.1',
    'css-loader': '^0.28.7',
    'extract-text-webpack-plugin': '^3.0.0',
    'html-webpack-plugin': '^2.30.1',
    'postcss-loader': '^2.0.6',
    'postcss-nested': '^2.1.2',
    rimraf: '^2.6.2',
    'style-loader': '^0.18.2',
    webpack: '^3.6.0',
    'webpack-dev-server': '^2.8.2'
  },
  repository: {
    type: prompt('source control', 'git', type => `${type}`),
    url: prompt('repo url', `${pwd()}`, repo => `${url}${repo}.git`)
  },
  author: prompt('author', `cdrainxv`, author => `${author}`),
  license: prompt('MIT | ISC | BSD', 'MIT', license => `${license}`),
  bugs: prompt('bugs', `${pwd()}`, issue => `${url}${issue}/issues`),
  homepage: prompt('link', `${url}${pwd()}`, link => `${link}`)
}
