# NativeScript MD5

A plugin for calculating MD5 hash string in "Native" way.

## Supported Platform

Both iOS and Android

## Installation

Describe your plugin installation steps. Ideally it would be something like:

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
