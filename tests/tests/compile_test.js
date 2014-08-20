var assert = require('assert');
var compiler = require('../../index.js');
var fs = require('fs');

describe('angular-template-inline-js', function(){
  var basePath = __dirname + '/../samples/';

  it('should compile a simple template', function(){
    var compiled = compiler.compile(
      fs.readFileSync(basePath + '/simple.js', 'utf8'),
      { basePath: basePath }
    );

    assert.equal(compiled, "{ template: 'simple contents' }");
  });

  it('should compile a template with quotes', function(){
    var compiled = compiler.compile(
      fs.readFileSync(basePath + '/quote.js', 'utf8'),
      { basePath: basePath }
    );

    assert.equal(compiled, "{ \"template\": 'quote contents' }");
  });

  it('should compile a template using a specified key name', function(){
    var compiled = compiler.compile(
      fs.readFileSync(basePath + '/named.js', 'utf8'),
      { key: 'inlineTemplate', basePath: basePath }
    );

    assert.equal(compiled, "{ template: 'named contents' }");
  });

  it('should escape template contents', function(){
    var compiled = compiler.compile(
      fs.readFileSync(basePath + '/escape.js', 'utf8'),
      { basePath: basePath }
    );

    assert.equal(compiled, "{ template: 'escape\\ncontents\\n\\'\\n\\\\' }");
  });
});