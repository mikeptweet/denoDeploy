addEventListener("fetch", (event) => {
  //var test = eval("Date()");
  const response = new Response("Hello World!\n"+Object.keys(this).sort().join("\n"}), {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
