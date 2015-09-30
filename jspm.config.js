System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "blacklist": [],
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "generated/index.js": [
      "index.js",
      "npm:express@4.13.3",
      "npm:express-ws@1.0.0-rc.1",
      "npm:babel-runtime@5.8.25/helpers/sliced-to-array",
      "npm:express@4.13.3/index",
      "npm:babel-runtime@5.8.25/core-js/is-iterable",
      "npm:babel-runtime@5.8.25/core-js/get-iterator",
      "npm:babel-runtime@5.8.25/core-js/map",
      "npm:express-ws@1.0.0-rc.1/index",
      "npm:express@4.13.3/lib/express",
      "github:jspm/nodelibs-url@0.1.0",
      "npm:url-join@0.0.1",
      "npm:core-js@1.2.0/library/fn/get-iterator",
      "npm:core-js@1.2.0/library/fn/is-iterable",
      "npm:core-js@1.2.0/library/fn/map",
      "github:jspm/nodelibs-events@0.1.1",
      "github:jspm/nodelibs-http@1.7.1",
      "npm:ws@0.4.32",
      "npm:serve-static@1.10.0",
      "npm:merge-descriptors@1.0.0",
      "npm:express@4.13.3/lib/application",
      "npm:express@4.13.3/lib/response",
      "npm:express@4.13.3/lib/router/index",
      "npm:express@4.13.3/lib/router/route",
      "npm:express@4.13.3/lib/middleware/query",
      "npm:express@4.13.3/lib/request",
      "github:jspm/nodelibs-url@0.1.0/index",
      "npm:url-join@0.0.1/lib/url-join",
      "npm:core-js@1.2.0/library/modules/web.dom.iterable",
      "npm:core-js@1.2.0/library/modules/core.is-iterable",
      "npm:core-js@1.2.0/library/modules/core.get-iterator",
      "npm:core-js@1.2.0/library/modules/es6.string.iterator",
      "npm:core-js@1.2.0/library/modules/es6.object.to-string",
      "npm:core-js@1.2.0/library/modules/$.core",
      "npm:core-js@1.2.0/library/modules/es6.map",
      "github:jspm/nodelibs-events@0.1.1/index",
      "npm:core-js@1.2.0/library/modules/es7.map.to-json",
      "github:jspm/nodelibs-http@1.7.1/index",
      "npm:ws@0.4.32/lib/browser",
      "npm:merge-descriptors@1.0.0/index",
      "npm:serve-static@1.10.0/index",
      "npm:depd@1.0.1",
      "npm:debug@2.2.0",
      "npm:methods@1.1.1",
      "npm:finalhandler@0.4.0",
      "github:jspm/nodelibs-path@0.1.0",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:array-flatten@1.1.1",
      "npm:express@4.13.3/lib/view",
      "npm:express@4.13.3/lib/utils",
      "npm:express@4.13.3/lib/middleware/init",
      "npm:utils-merge@1.0.0",
      "npm:content-disposition@0.5.0",
      "npm:cookie-signature@1.0.6",
      "npm:escape-html@1.0.2",
      "npm:vary@1.0.1",
      "npm:send@0.13.0",
      "npm:cookie@0.1.3",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:parseurl@1.3.0",
      "npm:on-finished@2.3.0",
      "npm:express@4.13.3/lib/router/layer",
      "npm:accepts@1.2.13",
      "github:jspm/nodelibs-net@0.1.2",
      "npm:qs@4.0.0",
      "npm:type-is@1.6.9",
      "npm:url@0.10.3",
      "npm:fresh@0.3.0",
      "npm:range-parser@1.0.2",
      "npm:proxy-addr@1.0.8",
      "npm:core-js@1.2.0/library/modules/$.iterators",
      "npm:core-js@1.2.0/library/modules/$.classof",
      "npm:core-js@1.2.0/library/modules/$.wks",
      "npm:core-js@1.2.0/library/modules/es6.array.iterator",
      "npm:core-js@1.2.0/library/modules/$.string-at",
      "npm:core-js@1.2.0/library/modules/$.an-object",
      "npm:core-js@1.2.0/library/modules/core.get-iterator-method",
      "npm:events@1.0.2",
      "npm:core-js@1.2.0/library/modules/$.collection-strong",
      "npm:core-js@1.2.0/library/modules/$.collection-to-json",
      "npm:core-js@1.2.0/library/modules/$.collection",
      "npm:core-js@1.2.0/library/modules/$.def",
      "npm:core-js@1.2.0/library/modules/$.iter-define",
      "github:jspm/nodelibs-http@1.7.1/lib/request",
      "npm:methods@1.1.1/index",
      "github:jspm/nodelibs-path@0.1.0/index",
      "npm:debug@2.2.0/browser",
      "npm:finalhandler@0.4.0/index",
      "github:jspm/nodelibs-fs@0.1.2",
      "npm:depd@1.0.1/index",
      "npm:content-type@1.0.1",
      "npm:etag@1.7.0",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:array-flatten@1.1.1/array-flatten",
      "github:jspm/nodelibs-querystring@0.1.0",
      "npm:utils-merge@1.0.0/index",
      "npm:escape-html@1.0.2/index",
      "npm:content-disposition@0.5.0/index",
      "npm:cookie-signature@1.0.6/index",
      "npm:vary@1.0.1/index",
      "npm:cookie@0.1.3/index",
      "npm:send@0.13.0/index",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:parseurl@1.3.0/index",
      "npm:path-to-regexp@0.1.7",
      "npm:on-finished@2.3.0/index",
      "npm:qs@4.0.0/lib/index",
      "npm:accepts@1.2.13/index",
      "github:jspm/nodelibs-net@0.1.2/index",
      "npm:url@0.10.3/url",
      "npm:range-parser@1.0.2/index",
      "npm:fresh@0.3.0/index",
      "npm:type-is@1.6.9/index",
      "npm:core-js@1.2.0/library/modules/$.cof",
      "npm:core-js@1.2.0/library/modules/$.shared",
      "npm:proxy-addr@1.0.8/index",
      "npm:core-js@1.2.0/library/modules/$.global",
      "npm:core-js@1.2.0/library/modules/$.uid",
      "npm:core-js@1.2.0/library/modules/$.unscope",
      "npm:core-js@1.2.0/library/modules/$.iter-step",
      "npm:core-js@1.2.0/library/modules/$.to-iobject",
      "npm:core-js@1.2.0/library/modules/$.defined",
      "npm:core-js@1.2.0/library/modules/$.is-object",
      "npm:core-js@1.2.0/library/modules/$",
      "npm:core-js@1.2.0/library/modules/$.hide",
      "npm:core-js@1.2.0/library/modules/$.ctx",
      "npm:core-js@1.2.0/library/modules/$.to-integer",
      "npm:core-js@1.2.0/library/modules/$.strict-new",
      "npm:core-js@1.2.0/library/modules/$.species",
      "npm:core-js@1.2.0/library/modules/$.has",
      "npm:events@1.0.2/events",
      "npm:core-js@1.2.0/library/modules/$.for-of",
      "npm:core-js@1.2.0/library/modules/$.mix",
      "npm:core-js@1.2.0/library/modules/$.tag",
      "npm:core-js@1.2.0/library/modules/$.support-desc",
      "npm:core-js@1.2.0/library/modules/$.redef",
      "npm:core-js@1.2.0/library/modules/$.library",
      "github:jspm/nodelibs-stream@0.1.0",
      "npm:core-js@1.2.0/library/modules/$.fails",
      "npm:core-js@1.2.0/library/modules/$.iter-create",
      "github:jspm/nodelibs-http@1.7.1/lib/response",
      "npm:Base64@0.2.1",
      "npm:inherits@2.0.1",
      "npm:path-browserify@0.0.0",
      "npm:unpipe@1.0.0",
      "npm:debug@2.2.0/debug",
      "github:jspm/nodelibs-fs@0.1.2/index",
      "npm:process@0.10.1",
      "npm:content-type@1.0.1/index",
      "npm:etag@1.7.0/index",
      "npm:depd@1.0.1/lib/compat/index",
      "github:jspm/nodelibs-querystring@0.1.0/index",
      "github:jspm/nodelibs-crypto@0.1.0",
      "npm:destroy@1.0.3",
      "npm:mime@1.3.4",
      "npm:http-errors@1.3.1",
      "npm:ms@0.7.1",
      "npm:buffer@3.5.0",
      "npm:ee-first@1.1.1",
      "npm:statuses@1.2.1",
      "npm:negotiator@0.5.3",
      "npm:mime-types@2.1.7",
      "npm:path-to-regexp@0.1.7/index",
      "github:jspm/nodelibs-util@0.1.0",
      "npm:qs@4.0.0/lib/stringify",
      "npm:qs@4.0.0/lib/parse",
      "npm:punycode@1.3.2",
      "npm:querystring@0.2.0",
      "npm:media-typer@0.3.0",
      "npm:ipaddr.js@1.0.1",
      "github:jspm/nodelibs-timers@0.1.0",
      "npm:forwarded@0.1.0",
      "npm:core-js@1.2.0/library/modules/$.iobject",
      "npm:core-js@1.2.0/library/modules/$.is-array-iter",
      "npm:core-js@1.2.0/library/modules/$.property-desc",
      "npm:core-js@1.2.0/library/modules/$.to-length",
      "npm:core-js@1.2.0/library/modules/$.a-function",
      "npm:core-js@1.2.0/library/modules/$.iter-call",
      "github:jspm/nodelibs-stream@0.1.0/index",
      "npm:inherits@2.0.1/inherits_browser",
      "npm:unpipe@1.0.0/index",
      "npm:Base64@0.2.1/base64",
      "npm:depd@1.0.1/lib/compat/buffer-concat",
      "npm:depd@1.0.1/lib/compat/callsite-tostring",
      "npm:path-browserify@0.0.0/index",
      "github:jspm/nodelibs-crypto@0.1.0/index",
      "npm:process@0.10.1/browser",
      "npm:http-errors@1.3.1/index",
      "npm:destroy@1.0.3/index",
      "npm:mime@1.3.4/mime",
      "npm:ms@0.7.1/index",
      "npm:statuses@1.2.1/index",
      "npm:negotiator@0.5.3/index",
      "npm:ee-first@1.1.1/index",
      "npm:buffer@3.5.0/index",
      "npm:mime-types@2.1.7/index",
      "npm:qs@4.0.0/lib/utils",
      "github:jspm/nodelibs-util@0.1.0/index",
      "npm:media-typer@0.3.0/index",
      "npm:punycode@1.3.2/punycode",
      "npm:querystring@0.2.0/index",
      "npm:stream-browserify@1.0.0",
      "github:jspm/nodelibs-timers@0.1.0/index",
      "npm:ipaddr.js@1.0.1/lib/ipaddr",
      "npm:crypto-browserify@3.10.0",
      "npm:negotiator@0.5.3/lib/charset",
      "npm:negotiator@0.5.3/lib/encoding",
      "npm:base64-js@0.0.8",
      "npm:negotiator@0.5.3/lib/language",
      "npm:negotiator@0.5.3/lib/mediaType",
      "npm:is-array@1.0.1",
      "npm:util@0.10.3",
      "npm:mime-db@1.19.0",
      "npm:ieee754@1.1.6",
      "npm:querystring@0.2.0/decode",
      "npm:querystring@0.2.0/encode",
      "npm:forwarded@0.1.0/index",
      "npm:timers-browserify@1.4.1",
      "npm:stream-browserify@1.0.0/index",
      "npm:is-array@1.0.1/index",
      "npm:crypto-browserify@3.10.0/index",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:util@0.10.3/util",
      "npm:mime-db@1.19.0/index",
      "npm:ieee754@1.1.6/index",
      "npm:readable-stream@1.1.13/readable",
      "npm:readable-stream@1.1.13/writable",
      "npm:readable-stream@1.1.13/duplex",
      "npm:timers-browserify@1.4.1/main",
      "npm:readable-stream@1.1.13/passthrough",
      "npm:readable-stream@1.1.13/transform",
      "npm:mime@1.3.4/types.json!github:systemjs/plugin-json@0.1.0",
      "npm:statuses@1.2.1/codes.json!github:systemjs/plugin-json@0.1.0",
      "npm:pbkdf2@3.0.4",
      "npm:randombytes@2.0.1",
      "npm:create-hmac@1.1.4",
      "npm:create-hash@1.1.2",
      "npm:browserify-cipher@1.0.0",
      "npm:create-ecdh@2.0.1",
      "npm:diffie-hellman@3.0.2",
      "npm:browserify-sign@3.0.8",
      "npm:public-encrypt@2.0.1",
      "npm:util@0.10.3/support/isBufferBrowser",
      "npm:browserify-sign@3.0.8/algos",
      "npm:readable-stream@1.1.13/lib/_stream_readable",
      "npm:readable-stream@1.1.13/lib/_stream_passthrough",
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "npm:readable-stream@1.1.13/lib/_stream_transform",
      "npm:readable-stream@1.1.13/lib/_stream_writable",
      "npm:process@0.11.2",
      "npm:randombytes@2.0.1/browser",
      "npm:pbkdf2@3.0.4/browser",
      "npm:process@0.11.2/browser",
      "npm:create-hash@1.1.2/browser",
      "npm:create-hmac@1.1.4/browser",
      "npm:create-ecdh@2.0.1/index",
      "npm:mime-db@1.19.0/db.json!github:systemjs/plugin-json@0.1.0",
      "npm:browserify-sign@3.0.8/browser",
      "npm:browserify-cipher@1.0.0/browser",
      "npm:isarray@0.0.1",
      "npm:core-util-is@1.0.1",
      "npm:diffie-hellman@3.0.2/browser",
      "npm:string_decoder@0.10.31",
      "npm:public-encrypt@2.0.1/browser",
      "npm:cipher-base@1.0.1",
      "npm:sha.js@2.4.4",
      "npm:ripemd160@1.0.1",
      "npm:create-hash@1.1.2/md5",
      "npm:create-ecdh@2.0.1/browser",
      "npm:browserify-sign@3.0.8/verify",
      "npm:browserify-des@1.0.0",
      "npm:browserify-sign@3.0.8/sign",
      "npm:evp_bytestokey@1.0.0",
      "npm:browserify-des@1.0.0/modes",
      "npm:isarray@0.0.1/index",
      "npm:browserify-aes@1.0.5/modes",
      "npm:browserify-aes@1.0.5/browser",
      "npm:diffie-hellman@3.0.2/lib/generatePrime",
      "npm:diffie-hellman@3.0.2/lib/primes.json!github:systemjs/plugin-json@0.1.0",
      "npm:core-util-is@1.0.1/lib/util",
      "npm:diffie-hellman@3.0.2/lib/dh",
      "npm:public-encrypt@2.0.1/privateDecrypt",
      "npm:public-encrypt@2.0.1/publicEncrypt",
      "npm:cipher-base@1.0.1/index",
      "npm:sha.js@2.4.4/index",
      "npm:string_decoder@0.10.31/index",
      "npm:elliptic@3.1.0",
      "npm:bn.js@2.2.0",
      "npm:create-hash@1.1.2/helpers",
      "npm:ripemd160@1.0.1/lib/ripemd160",
      "npm:parse-asn1@3.0.2",
      "npm:browserify-sign@3.0.8/curves",
      "npm:browserify-des@1.0.0/index",
      "npm:browserify-aes@1.0.5/encrypter",
      "npm:browserify-aes@1.0.5/decrypter",
      "npm:browserify-rsa@2.0.1",
      "npm:miller-rabin@2.0.1",
      "npm:public-encrypt@2.0.1/mgf",
      "npm:evp_bytestokey@1.0.0/index",
      "npm:public-encrypt@2.0.1/withPublic",
      "npm:public-encrypt@2.0.1/xor",
      "github:jspm/nodelibs-string_decoder@0.1.0",
      "npm:sha.js@2.4.4/sha224",
      "npm:sha.js@2.4.4/sha256",
      "npm:sha.js@2.4.4/sha1",
      "npm:sha.js@2.4.4/sha384",
      "npm:sha.js@2.4.4/sha512",
      "npm:sha.js@2.4.4/sha",
      "npm:elliptic@3.1.0/lib/elliptic",
      "npm:parse-asn1@3.0.2/index",
      "npm:browserify-aes@1.0.5/aes",
      "npm:des.js@1.0.0",
      "npm:browserify-aes@1.0.5/modes/ecb",
      "npm:browserify-aes@1.0.5/authCipher",
      "npm:browserify-aes@1.0.5/streamCipher",
      "npm:browserify-aes@1.0.5/modes/cbc",
      "npm:browserify-aes@1.0.5/modes/cfb8",
      "npm:browserify-aes@1.0.5/modes/ofb",
      "npm:bn.js@2.2.0/lib/bn",
      "npm:browserify-aes@1.0.5/modes/cfb",
      "npm:browserify-aes@1.0.5/modes/ctr",
      "npm:browserify-aes@1.0.5/modes/cfb1",
      "npm:browserify-rsa@2.0.1/index",
      "npm:sha.js@2.4.4/hash",
      "github:jspm/nodelibs-string_decoder@0.1.0/index",
      "npm:miller-rabin@2.0.1/lib/mr",
      "npm:brorand@1.0.5",
      "npm:elliptic@3.1.0/lib/elliptic/curve/index",
      "npm:elliptic@3.1.0/lib/elliptic/curves",
      "npm:elliptic@3.1.0/lib/elliptic/utils",
      "npm:elliptic@3.1.0/lib/elliptic/hmac-drbg",
      "npm:elliptic@3.1.0/lib/elliptic/ec/index",
      "npm:browserify-aes@1.0.5",
      "npm:parse-asn1@3.0.2/aesid.json!github:systemjs/plugin-json@0.1.0",
      "npm:elliptic@3.1.0/package.json!github:systemjs/plugin-json@0.1.0",
      "npm:parse-asn1@3.0.2/asn1",
      "npm:parse-asn1@3.0.2/fixProc",
      "npm:buffer-xor@1.0.3",
      "npm:brorand@1.0.5/index",
      "npm:des.js@1.0.0/lib/des",
      "npm:elliptic@3.1.0/lib/elliptic/curve/short",
      "npm:hash.js@1.0.3",
      "npm:elliptic@3.1.0/lib/elliptic/curve/mont",
      "npm:elliptic@3.1.0/lib/elliptic/ec/signature",
      "npm:elliptic@3.1.0/lib/elliptic/curve/edwards",
      "npm:elliptic@3.1.0/lib/elliptic/curve/base",
      "npm:elliptic@3.1.0/lib/elliptic/ec/key",
      "npm:browserify-aes@1.0.5/ghash",
      "npm:elliptic@3.1.0/lib/elliptic/precomputed/secp256k1",
      "npm:asn1.js@2.2.1",
      "npm:buffer-xor@1.0.3/index",
      "npm:des.js@1.0.0/lib/des/cipher",
      "npm:des.js@1.0.0/lib/des/cbc",
      "npm:des.js@1.0.0/lib/des/des",
      "npm:des.js@1.0.0/lib/des/utils",
      "npm:des.js@1.0.0/lib/des/ede",
      "npm:hash.js@1.0.3/lib/hash",
      "npm:minimalistic-assert@1.0.0",
      "npm:asn1.js@2.2.1/lib/asn1",
      "npm:hash.js@1.0.3/lib/hash/common",
      "npm:hash.js@1.0.3/lib/hash/utils",
      "npm:hash.js@1.0.3/lib/hash/ripemd",
      "npm:hash.js@1.0.3/lib/hash/sha",
      "npm:minimalistic-assert@1.0.0/index",
      "npm:hash.js@1.0.3/lib/hash/hmac",
      "npm:asn1.js@2.2.1/lib/asn1/decoders/index",
      "npm:asn1.js@2.2.1/lib/asn1/base/index",
      "npm:asn1.js@2.2.1/lib/asn1/constants/index",
      "npm:asn1.js@2.2.1/lib/asn1/encoders/index",
      "npm:asn1.js@2.2.1/lib/asn1/api",
      "npm:asn1.js@2.2.1/lib/asn1/decoders/der",
      "npm:asn1.js@2.2.1/lib/asn1/decoders/pem",
      "npm:asn1.js@2.2.1/lib/asn1/base/buffer",
      "npm:asn1.js@2.2.1/lib/asn1/base/reporter",
      "npm:asn1.js@2.2.1/lib/asn1/base/node",
      "npm:asn1.js@2.2.1/lib/asn1/constants/der",
      "npm:asn1.js@2.2.1/lib/asn1/encoders/der",
      "github:jspm/nodelibs-vm@0.1.0",
      "npm:asn1.js@2.2.1/lib/asn1/encoders/pem",
      "github:jspm/nodelibs-vm@0.1.0/index",
      "npm:vm-browserify@0.0.4",
      "npm:vm-browserify@0.0.4/index",
      "npm:indexof@0.0.1",
      "npm:indexof@0.0.1/index"
    ]
  },

  map: {
    "@cycle/core": "npm:@cycle/core@2.0.1",
    "@cycle/dom": "npm:@cycle/dom@4.0.1",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "core-js": "npm:core-js@1.2.0",
    "es6-module-loader": "npm:es6-module-loader@0.17.8",
    "es6-shim": "github:es-shims/es6-shim@0.33.6",
    "express": "npm:express@4.13.3",
    "express-ws": "npm:express-ws@1.0.0-rc.1",
    "immutable": "npm:immutable@3.7.4",
    "rx": "npm:rx@3.1.2",
    "rx-dom": "npm:rx-dom@6.0.0",
    "ws": "npm:ws@0.8.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.10.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:@cycle/core@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rx": "npm:rx@2.5.3"
    },
    "npm:@cycle/dom@4.0.1": {
      "@cycle/core": "npm:@cycle/core@2.0.1",
      "es6-map": "npm:es6-map@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "vdom-parser": "npm:vdom-parser@1.2.1",
      "vdom-to-html": "npm:vdom-to-html@2.1.1",
      "virtual-dom": "npm:virtual-dom@2.1.1",
      "x-is-array": "npm:x-is-array@0.1.0"
    },
    "npm:accepts@1.2.13": {
      "mime-types": "npm:mime-types@2.1.7",
      "negotiator": "npm:negotiator@0.5.3"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.1",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.7",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:bufferutil@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.0.8"
    },
    "npm:cipher-base@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:commander@2.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:content-disposition@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.10.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:error@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelize": "npm:camelize@1.0.0",
      "string-template": "npm:string-template@0.2.1",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:es5-ext@0.10.7": {
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:es6-iterator@0.1.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-symbol": "npm:es6-symbol@2.0.1"
    },
    "npm:es6-map@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-set": "npm:es6-set@0.1.1",
      "es6-symbol": "npm:es6-symbol@0.1.1",
      "event-emitter": "npm:event-emitter@0.3.3"
    },
    "npm:es6-module-loader@0.17.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "when": "npm:when@3.7.3"
    },
    "npm:es6-set@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@0.1.1",
      "event-emitter": "npm:event-emitter@0.3.3"
    },
    "npm:es6-symbol@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:es6-symbol@2.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:ev-store@7.0.0": {
      "individual": "npm:individual@3.0.0"
    },
    "npm:event-emitter@0.3.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:express-ws@1.0.0-rc.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "url-join": "npm:url-join@0.0.1",
      "ws": "npm:ws@0.4.32"
    },
    "npm:express@4.13.3": {
      "accepts": "npm:accepts@1.2.13",
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "content-disposition": "npm:content-disposition@0.5.0",
      "content-type": "npm:content-type@1.0.1",
      "cookie": "npm:cookie@0.1.3",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "escape-html": "npm:escape-html@1.0.2",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.4.0",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "merge-descriptors": "npm:merge-descriptors@1.0.0",
      "methods": "npm:methods@1.1.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-to-regexp": "npm:path-to-regexp@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "proxy-addr": "npm:proxy-addr@1.0.8",
      "qs": "npm:qs@4.0.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.0.2",
      "send": "npm:send@0.13.0",
      "serve-static": "npm:serve-static@1.10.0",
      "type-is": "npm:type-is@1.6.9",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vary": "npm:vary@1.0.1"
    },
    "npm:finalhandler@0.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:http-errors@1.3.1": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.19.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.7": {
      "mime-db": "npm:mime-db@1.19.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:nan@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:nan@2.0.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:next-tick@0.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:pako@0.2.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:param-case@1.1.1": {
      "sentence-case": "npm:sentence-case@1.1.2"
    },
    "npm:parse-asn1@3.0.2": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parseurl@1.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:proxy-addr@1.0.8": {
      "forwarded": "npm:forwarded@0.1.0",
      "ipaddr.js": "npm:ipaddr.js@1.0.1"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rx-dom@6.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rx": "npm:rx@3.1.2"
    },
    "npm:rx@2.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rx@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:send@0.13.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "destroy": "npm:destroy@1.0.3",
      "escape-html": "npm:escape-html@1.0.2",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.3.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.2",
      "statuses": "npm:statuses@1.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:sentence-case@1.1.2": {
      "lower-case": "npm:lower-case@1.1.2"
    },
    "npm:serve-static@1.10.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "escape-html": "npm:escape-html@1.0.2",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.13.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:statuses@1.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:type-is@1.6.9": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.7"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:utf-8-validate@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.0.8"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vdom-parser@1.2.1": {
      "virtual-dom": "npm:virtual-dom@2.1.1"
    },
    "npm:vdom-to-html@2.1.1": {
      "escape-html": "npm:escape-html@1.0.2",
      "param-case": "npm:param-case@1.1.1",
      "virtual-dom": "npm:virtual-dom@2.1.1",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:virtual-dom@2.1.1": {
      "browser-split": "npm:browser-split@0.0.1",
      "error": "npm:error@4.4.0",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "is-object": "npm:is-object@1.0.1",
      "next-tick": "npm:next-tick@0.2.2",
      "x-is-array": "npm:x-is-array@0.1.0",
      "x-is-string": "npm:x-is-string@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:when@3.7.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ws@0.4.32": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "nan": "npm:nan@1.0.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tinycolor": "npm:tinycolor@0.0.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ws@0.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    }
  }
});
