importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// المعلومات الخاصة بمشروعك mbarek-84c23 من Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoruiRI56JGr6Kye8DUd6y2if9zqCxLrQ", 
  projectId: "mbarek-84c23",
  messagingSenderId: "860470868100",
  appId: "1:860470868100:web:3cf242746843db59532ad1"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// هاد الجزء كيخلي الإشعار يبان فاش يكون التطبيق مسدود
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' 
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
