# NativeScript MD5  ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

A plugin for calculating MD5 hash string in "Native" way.

## Supported Platform

Both iOS and Android.

## Installation

```bash
tns plugin add nativescript-md5
```

## Usage 

To use the MD5 module you need to import the module.

### TypeScript 	

```typescript
import { MD5 } from 'nativescript-md5';

const hash = MD5.hashForString("hello");
console.log(hash); // => 5d41402abc4b2a76b9719d911017c592
```
    
## License

Apache License Version 2.0, January 2004
