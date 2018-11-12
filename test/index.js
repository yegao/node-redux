const assert = require('assert');
const redux = require('../index.js');

describe("测试redux",function(){
  it('redux具有属性createStore',function(){
    assert.ok(redux.hasOwnProperty('createStore'))
  })
  it('redux的属性createStore是一个Function',function(){
    assert.ok(redux.createStore instanceof Function)
  })
  it(`splitPath("www.xxx.com/bbb/ccc")的结果是['www.xxx.com','bbb','ccc']`,function(){
    assert.deepEqual(redux.splitPath("www.xxx.com/bbb/ccc"),['www.xxx.com','bbb','ccc'])
  })
})