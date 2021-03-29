addEventListener("fetch", (event) => {
  var test = eval("Date()");
  const response = new Response("Hello World! "+ test, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
