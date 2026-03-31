# 🕌 تطبيق مواقيت الصلاة مع الإشعارات
## دليل الرفع على GitHub Pages خطوة بخطوة

---

## 📁 الملفات المطلوبة
```
prayer-app/
├── index.html                  ← التطبيق الرئيسي
├── firebase-messaging-sw.js    ← Service Worker للإشعارات
├── manifest.json               ← إعدادات PWA
├── icon-192.png                ← أيقونة التطبيق (192x192)
└── icon-512.png                ← أيقونة التطبيق (512x512)
```

---

## 🖼️ الخطوة 1: إنشاء الأيقونات

1. افتح ملف `generate-icons.html` في المتصفح
2. اضغط على رابط تحميل `icon-192.png`
3. اضغط على رابط تحميل `icon-512.png`
4. احفظ الملفين في نفس مجلد التطبيق

---

## 🐙 الخطوة 2: رفع الملفات على GitHub

1. اذهب إلى [github.com](https://github.com) وسجّل دخول
2. اضغط **"New repository"** (المستودع الجديد)
3. اسم المستودع: `prayer-app` (أو أي اسم تريده)
4. اجعله **Public** (عام)
5. اضغط **"Create repository"**
6. اضغط **"uploading an existing file"**
7. ارفع جميع الملفات الأربعة:
   - `index.html`
   - `firebase-messaging-sw.js`
   - `manifest.json`
   - `icon-192.png`
   - `icon-512.png`
8. اضغط **"Commit changes"**

---

## 🌐 الخطوة 3: تفعيل GitHub Pages

1. في صفحة المستودع → اضغط **"Settings"**
2. من القائمة الجانبية → **"Pages"**
3. تحت **"Source"** → اختر **"Deploy from a branch"**
4. Branch: **main** ، Folder: **/ (root)**
5. اضغط **"Save"**
6. انتظر دقيقة ثم ستظهر رسالة:
   ```
   Your site is live at: https://USERNAME.github.io/prayer-app/
   ```

---

## 🔔 الخطوة 4: تفعيل Firebase للإشعارات

### تفعيل Realtime Database:
1. اذهب إلى [console.firebase.google.com](https://console.firebase.google.com)
2. افتح مشروعك **salat-b7cbd**
3. من القائمة → **Build** → **Realtime Database**
4. اضغط **"Create Database"**
5. اختر منطقة **europe-west1**
6. اختر **"Start in test mode"**
7. اضغط **"Enable"**

### إضافة النطاق المسموح به:
1. من القائمة → **Build** → **Authentication**
2. تبويب **"Settings"** → **"Authorized domains"**
3. اضغط **"Add domain"**
4. أضف: `USERNAME.github.io` (استبدل USERNAME باسمك)

---

## 📱 الخطوة 5: اختبار التطبيق

1. افتح الرابط على هاتف Android:
   `https://USERNAME.github.io/prayer-app/`
2. اضغط على **"فعّل إشعارات الصلاة"**
3. اسمح بالإشعارات عند الطلب
4. **أغلق التطبيق** تماماً
5. انتظر وقت الصلاة التالية → ستصلك إشعار! ✓

---

## 📲 الخطوة 6: استخدام مع appcreator24

1. اذهب إلى [appcreator24.com](https://appcreator24.com)
2. أنشئ تطبيق جديد → **WebView App**
3. ضع الرابط: `https://USERNAME.github.io/prayer-app/`
4. اسم التطبيق: مواقيت الصلاة
5. ارفع `icon-512.png` كأيقونة
6. **مهم**: في إعدادات الأذونات، فعّل:
   - ✅ Location (الموقع)
   - ✅ Notifications (الإشعارات)
   - ✅ Internet (الإنترنت)
7. ابنِ التطبيق وحمّله

---

## ⚙️ كيف يعمل النظام؟

```
المستخدم يفتح التطبيق
         ↓
يسمح بالإشعارات
         ↓
Firebase يحفظ Token الجهاز + الموقع
         ↓
JavaScript يضبط منبهات محلية للصلوات
         ↓
عند وقت الصلاة → Service Worker يرسل الإشعار
         ↓
الإشعار يصل حتى لو التطبيق مغلق ✓
```

---

## ❓ مشاكل شائعة

| المشكلة | الحل |
|---------|------|
| الإشعارات لا تصل | تأكد من السماح بالإشعارات في إعدادات الهاتف |
| لا يعمل على iOS | iOS يحتاج إضافة للشاشة الرئيسية أولاً |
| الموقع غير دقيق | اضغط "موقعي" واسمح بالموقع الدقيق |
| الصفحة لا تفتح | انتظر 2-3 دقائق بعد تفعيل GitHub Pages |
