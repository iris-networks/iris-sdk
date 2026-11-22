<!-- Start SDK Example Usage [usage] -->
```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.config.get();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->