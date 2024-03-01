// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`6400100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020200000000000202020202020000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020000000000000000000002020202000000000000000000000000000000010000000000000002020202020000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202000000000000000000000000000000000000010101000000000000000000000000000000000000000002020200000000000000000000000000000000020202000000000000000202020200000000000000020000000000000000000000000000000000000000000000000000000000000000000000000001010002020202000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000202000000000000000000000000000000000000000000000000000000000000000000000001010101000000000000000000000000000000000000000000000000000002020202000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000002020200000000000000000000000000000000000000000000000000000000000000000000000000020000020202000000000000000000000000000000000000000002020200000000000000000000000000020202000000000000000000000000000000000000000000000002020202020000000000000202020202000000000000000000000000000000000000000000020000000000000000000000000202000000000000000002020000000000000000000000000000000000000000000000000202000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000002020200000000000000000002020000000000000000000000000000000000000002020202000404020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000020204040000000000000000000000000000000000000000000000000000000000000002020202000000000000000202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020000000000000002020200000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000202000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020200000000000000000000000200000000000202000003030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
....................................................................................................
.............................................................................................22.....
222222................222...................................................................2.......
......................................................................2222..........2222............
...........22222........2........................................................222................
.........................222................222.......2222.......2..................................
......2222.................................2.....................22.................................
................................2222......................................2.................222.....
................................2..222....................222.............222.......................
22222......22222.....................2............22........22........................22........2...
.................................................2.................................222.........22...
................2222...22222.......................................................2................
...................22.................................2222.......222................................
..............................2222.......222........................22.....................22....2..
...........................................................................2222...........2.....22..
....................................................................................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
