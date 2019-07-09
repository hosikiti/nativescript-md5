import { Utils } from './md5.common';

const CC_MD5_DIGEST_LENGTH = 16;

export class MD5 {

  /**
   * Calculate MD5 hash for input string
   * @param s
   */
  static hashForString(s: string): string {
    if ( !s ) {
      return "";
    }

    // String -> NSString -> Charへ変換
    const nsstring = NSString.alloc().initWithString(s);
    const data = nsstring.cStringUsingEncoding(NSUTF8StringEncoding);
    const charsize = interop.sizeof(interop.types.uint8);
    let buf = interop.alloc(CC_MD5_DIGEST_LENGTH * charsize);
    let len = nsstring.lengthOfBytesUsingEncoding(NSUTF8StringEncoding);
    let hash = "";

    // MD5ハッシュの計算
    CC_MD5(data as any, len, buf as any);

    // uint8のバッファーから1バイトずつ抜き出して16進数に変換
    for ( let i = 0; i < CC_MD5_DIGEST_LENGTH; i++ ){
      // ポインタの参照先の値をuint8として取得
      const uint8 = new interop.Reference(interop.types.uint8, buf);
      hash += Utils.numberToZedoPadHex(uint8.value);
      // ポインターを進める
      buf = buf.add(charsize);
    }

    return hash;
  }

}
