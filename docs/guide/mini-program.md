# mini-program(uniapp)

## 1. 使用page-meta解决小程序弹窗穿透问题

```vue
<template>
  <page-meta :page-style="{ overflow:  showPopup ? 'hidden' : 'visible' }" />
  <!-- code -->
</template>
```
