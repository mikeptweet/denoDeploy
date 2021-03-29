addEventListener("fetch", (event) => {
  //var test = eval("Date()");
  const response = new Response("Hello World!"+Date(), {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
