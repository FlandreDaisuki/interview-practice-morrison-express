<template>
  <h1>API</h1>
  <h2>Restful API</h2>
  <p>
    最近公司做了一個 CMS 的功能，而 CRUD 分別對應以下 endpoint:
    <ul>
      <li><code>POST /templates</code></li>
      <li><code>GET /templates/{template_id}</code></li>
      <li><code>PUT /templates/{template_id}</code></li>
      <li><code>DELETE /templates/{template_id}</code></li>
    </ul>
    其中值得提的是 <code>POST</code> 及 <code>PUT</code> 的差別。如果只是想要做到更新，可以讓 <code>POST /templates</code>
    多帶個 query 即可（<code>POST /templates?id={template_id}</code>），即類似資料庫的 <code>UPSERT</code> 功能。
    之所以沒有這樣設計是因為 <code>POST</code> 的語意應該是會讓狀態向前。也就是打很多次 <code>POST</code> 後，即使資料長相還是一樣，但狀態已經不一樣了；
    <code>PUT</code> 則是原地更新狀態，並不會造成狀態向前。
  </p>
  <p>
    此外，由於是做 CMS 會讓很多使用者讀取，我們也在 <code>GET</code> 做了快取，所以為了開發時方便，後端也提供了一個清除快取的 API 如下：
    <ul>
      <li><code>GET /templates/{template_id}/clear-cache</code></li>
    </ul>
  </p>
</template>

<script>
export default {
  name: 'API',
};
</script>
