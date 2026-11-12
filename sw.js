self.addEventListener("push", e => {
  const d = e.data ? e.data.json() : { titulo: "Memória Ativa", corpo: "Você tem um lembrete." };
  e.waitUntil(self.registration.showNotification(d.titulo, {
    body: d.corpo, icon: "icon-192.png", badge: "icon-192.png",
    vibrate: [300, 150, 300], requireInteraction: true, tag: d.titulo + d.corpo
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window" }).then(l => l.length ? l[0].focus() : clients.openWindow("./")));
});
