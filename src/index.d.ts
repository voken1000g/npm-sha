/// <reference types="node" />
type BinaryLike = string | NodeJS.ArrayBufferView;

export declare function sha1(value: BinaryLike): Buffer;
export declare function sha224(value: BinaryLike): Buffer;
export declare function sha256(value: BinaryLike): Buffer;
export declare function sha384(value: BinaryLike): Buffer;
export declare function sha512(value: BinaryLike): Buffer;
