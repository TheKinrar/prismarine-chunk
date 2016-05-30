var Chunk = require('./')("pe_0.14");
var Vec3 = require("vec3");

var chunk=new Chunk();

for (var x = 0; x < Chunk.width;x++) {
  for (var z = 0; z < Chunk.length; z++) {
    chunk.setBlockType(new Vec3(x, 50, z), 2);
    for (var y = 0; y < Chunk.height; y++) {
      chunk.setSkyLight(new Vec3(x, y, z), 15);
    }
  }
}

console.log(JSON.stringify(chunk.getBlock(new Vec3(3,50,3)),null,2));