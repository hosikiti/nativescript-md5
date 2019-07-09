export class Utils {

  /**
   * 数値からゼロ埋めした16進数の文字列に変換
   * Convert number to zero-padded hex string
   * @param n
   */
  static numberToZedoPadHex(n: number): string {
    if ( typeof(n) !== "number" ) {
      return "";
    }
    const hex = n.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

}
