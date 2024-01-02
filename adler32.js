function adler32(data) {
  const MOD_ADLER = 65521; // Largest prime number smaller than 2^16

  let a = 1;
  let b = 0;

  for (let i = 0; i < data.length; i++) {
    a = (a + data.charCodeAt(i)) % MOD_ADLER;
    b = (b + a) % MOD_ADLER;
  }

  return (b << 16) | a;
}

// Example usage:
const message = "Sample Message";
const checksum = adler32(message);
console.log("Adler-32 Checksum:", checksum);
