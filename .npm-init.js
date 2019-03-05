const url = 'https://github.com/cdrani/'

const pwd = () => {
  const path = process.env.PWD.split('/')
  return path[path.length - 1]
}

module.exports = {
  name: prompt('name', `${pwd()}`, name => `${name}`),
  version: prompt('version', '0.1.0', version => `${version}`),
  main: prompt('main file', 'index.js', main => `${main}.js`),
  description: prompt('description', 'awesome project', desc => `${desc}`),
  scripts: {
    'clean': 'rimraf dist',
    'build': 'npm run clean && webpack',
    'serve': 'webpack-dev-server'
  },
  keywords: prompt('keywords', 'node, webpack, react', list => list.split(' ')),
  dependencies: {
    'prop-types': '^15.7.2',
    'react': '^16.8.3',
    'react-dom': '^16.8.3'
  },
  devDependencies: {
    'rimraf': '^2.6.3',
    'webpack': '^4.29.6',
    'webpack-dev-server': '^3.2.1'
  },
  repository: {
    type: prompt('source control', 'git', type => `${type}`),
    url: prompt('repo url', `${pwd()}`, repo => `${url}${repo}.git`)
  },
  author: prompt('author', 'cdrani', author => `${author}`),
  license: prompt('MIT | ISC | BSD', 'MIT', license => `${license}`),
  bugs: prompt('bugs', `${pwd()}`, repo => `${url}${repo}/issues`),
  homepage: prompt('homepage url', `${url}${pwd()}`, link => `${link}`)
}
