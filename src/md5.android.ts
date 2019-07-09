import { Utils } from './md5.common';

export class MD5 {

  /**
   * Calculate MD5 hash for input string
   * @param s
   */
  static hashForString(s: string): string {
    let hash = "";
    try {
      // ハッシュの作成
      const digest = java.security.MessageDigest.getInstance("MD5");
      const javaString = new java.lang.String(s);
      digest.update(javaString.getBytes());
      const messageDigest = digest.digest();

      // 16進数に変換
      for ( let i = 0; i < messageDigest.length; i++ ){
        // Javaでは127(0x7f)より大きいbyteをintに変換するとsigned intとなりマイナス値になってしまう
        // signed intからunsigned intに変換するため0xFFの論理積を取る
        // ref) http://unageanu.hatenablog.com/entry/20081225/1230205682
        const hex = Utils.numberToZedoPadHex(0xFF & messageDigest[i]);
        hash += hex;
      }
      return hash;
    } catch ( err ) {
      console.error("failed to create hash. ", err);
      return "";
    }
  }
}
