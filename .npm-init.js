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
  keywords: prompt('keywords', 'node webpack react', list => list.split(' ')),
  repository: {
    type: prompt('source control', 'git', type => `${type}`),
    url: prompt('repo url', `${pwd()}`, repo => `${url}${repo}.git`)
  },
  author: prompt('author', 'cdrani', author => `${author}`),
  license: prompt('MIT | ISC | BSD', 'MIT', license => `${license}`),
  bugs: prompt('bugs', `${pwd()}`, repo => `${url}${repo}/issues`),
  homepage: prompt('homepage url', `${url}${pwd()}`, link => `${link}`)
}
