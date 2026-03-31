// ============================================
// Service Worker - إشعارات الصلاة في الخلفية
// ============================================
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB6EXzEGhlmgcuom1AYa9HoDiLBq5rD8ro",
  authDomain: "salat-b7cbd.firebaseapp.com",
  databaseURL: "https://salat-b7cbd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "salat-b7cbd",
  storageBucket: "salat-b7cbd.firebasestorage.app",
  messagingSenderId: "196396908340",
  appId: "1:196396908340:web:3cbc0a078a515af4572f61"
});

const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: icon || '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [500, 200, 500],
    dir: 'rtl',
    lang: 'ar',
    tag: 'prayer-notification',
    renotify: true,
    requireInteraction: true,
    actions: [
      { action: 'open', title: '🕌 فتح التطبيق' },
      { action: 'close', title: 'إغلاق' }
    ]
  });
});

// عند الضغط على الإشعار
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then((clientList) => {
        for (const client of clientList) {
          if (client.url && 'focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow('/');
      })
    );
  }
});

// تفعيل Service Worker فوراً
self.addEventListener('install', (event) => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));
