const ADLER32 = require("adler-32");
const CRC32 = require("crc-32");

var checksum = ADLER32.str("Hello");
console.log(checksum);

var checksum = CRC32.str("Your String Here");

console.log(checksum);
