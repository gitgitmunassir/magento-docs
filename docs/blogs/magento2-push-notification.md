# User Guide of Magento 2 Push Notification

**Updated On – 25 May 2026**

[Live Demo](https://magento2demo.webkul.in/modules-demo/?demo=Webkul_PushNotification)

Magento 2 Push Notification by [Webkul](https://store.webkul.com/magento2-push-notification.html) helps Adobe Commerce and Magento Open Source merchants send instant browser and mobile push alerts to shoppers who opt in. Store owners can promote flash sales, new products, restock updates, and important announcements without relying on email alone.

The extension integrates with **Firebase Cloud Messaging (FCM HTTP v1)** so notifications reach subscribed visitors on Chrome, Firefox, Edge, and other supported browsers, as well as native Android and iOS apps through GraphQL token registration. There is no monthly subscription fee for sending messages, and there is no cap on the number of subscribers you can register.

After you configure Firebase credentials in the admin, you can create reusable notification templates, send messages to selected or all registered users, and schedule automatic sends using cron-based rules. The module is designed for **HTTPS stores only** and works across Magento 2.0.x through 2.4.x, including recent Adobe Commerce releases.

Check the overview in the video below –  
N/A

---

## **Features of Magento 2 Push Notification**

- The admin can enable or disable the entire push notification module from store configuration.
- The admin can connect Firebase / FCM credentials including Web API Key, Project Id, Auth Domain, and service account JSON file.
- The admin can create, edit, and delete notification templates with title, message, redirect URL, tags, and custom logo icon.
- The admin can upload a template logo image or choose an image from the Magento media gallery (Select From Gallery).
- The admin can view all subscribed users in a searchable, filterable admin grid.
- The admin can filter registered users by subscriber name, browser, and subscription date.
- The admin can send push notifications to one user, multiple selected users, or all users via mass action.
- The admin can choose a notification template while sending from the Registered Users grid.
- The admin can delete registered subscribers who should no longer receive notifications.
- The admin can configure automatic push notification rules with hour, minute, and template selection.
- The admin can enable scheduled cron-based notification delivery that runs every minute.
- The admin can scope notification delivery to **Web**, **User Device**, or **Both** channels.
- The admin can enable an asynchronous message queue for bulk admin sends to improve performance on large subscriber lists.
- Customers can opt in to browser push notifications through the native browser permission prompt on the storefront.
- Customers receive clickable notifications with title, message, logo, and redirect URL when the admin sends a campaign.
- Guest visitors can subscribe without logging in; their token is stored with the name **guest**.
- Logged-in customers are linked to their Magento customer account when they subscribe.
- Mobile and headless apps can register and unregister FCM tokens via GraphQL (`registerPushToken` / `unregisterPushToken`).
- The module deploys a Firebase service worker automatically when push notification configuration is saved.
- The module supports multilingual storefronts through standard Magento locale and CSV translation files.
- The module is compatible with Magento Open Source and Adobe Commerce (on-premise and cloud) from 2.0.x through 2.4.x.
- The module uses FCM HTTP v1 API for reliable, modern push delivery with no per-message vendor fees.

---

## Installation of Magento 2 Push Notification

### #1 Download Module

1. Log in to the [Webkul Store](https://store.webkul.com/magento2-push-notification.html).
2. Go to **My Account > My Purchased Products**.
3. Download the **Magento 2 Push Notification** extension package.
4. Extract the ZIP archive on your computer.

### #2 Upload Folder

1. Inside the extracted package, open the **`src`** folder.
2. Copy the **`app`** folder from `src`.
3. Upload and merge it into your Adobe Commerce / Magento root directory so the module path is:

   `app/code/Webkul/PushNotification/`

![upload-folder](/images/webkul-logo.png)

**Note:** Before running setup commands, install the PHP dependency declared by the module:

```
composer require google/auth
```

---

## #3 Run Commands

Run the following commands from your Magento root directory:

```
php bin/magento setup:upgrade
```

```
php bin/magento setup:di:compile
```

```
php bin/magento setup:static-content:deploy
```

```
php bin/magento indexer:reindex
```

```
php bin/magento cache:flush
```

After the commands complete, log in to the admin panel. Enable the module under **Store > Configuration > Webkul > Push Notification** (see Configuration section below). The **Push Notification** admin menu appears only when the module is enabled.

---

## Multilingual Support

Magento 2 Push Notification works with Magento’s built-in locale system. To display the storefront and admin in another language:

1. In the admin panel, go to **Stores > Configuration > General > General > Locale Options**.
2. Select the desired **Locale** (for example, `German (Germany)` or `French (France)`).
3. Click **Save Config**.
4. Flush the cache if prompted.

![locale-options-configuration](/images/webkul-logo.png)

**Note:** Firebase browser prompts and OS-level notification UI are controlled by the visitor’s browser and operating system language, not Magento locale alone.

---

## Translation

Admin labels, grid columns, and translatable frontend strings can be localized using the module CSV dictionary.

1. On the server, navigate to:

   `app/code/Webkul/PushNotification/i18n/`

2. Copy `en_US.csv` and rename the copy to match your target locale, for example:
   - `de_DE.csv` for German (Germany)
   - `fr_FR.csv` for French (France)
   - `ar_SA.csv` for Arabic (Saudi Arabia)

3. Open the new CSV file. Each row contains two columns:
   - **Left column** – original English string (do not change)
   - **Right column** – translated text for your language

4. Translate only the right-side values. Save the file.

5. In the admin, set **Stores > Configuration > General > Locale Options > Locale** to the matching locale code.

6. Run:

   ```
   php bin/magento cache:flush
   ```

![translation-csv-file-path](/images/webkul-logo.png)

![translation-csv-sample-rows](/images/webkul-logo.png)

![translated-admin-menu](/images/webkul-logo.png)

**Note:** Magento supports both LTR and RTL locales. RTL storefront themes render translated strings correctly when your theme supports RTL layout. Test notification opt-in and display on RTL storefronts before go-live.

---

## Configuration

**Path:** **Stores > Configuration > Webkul > Push Notification**

![push-notification-configuration-page](/images/webkul-logo.png)

Configure Firebase credentials first in the [Firebase Console](https://console.firebase.google.com/), then enter the values below. Save configuration after uploading the JSON key file so the service worker is copied to `pub/firebase-messaging-sw.js`.

### General

**Enabled** – Master switch for the extension. If **Yes**, the Push Notification admin menu, storefront Firebase scripts, and token registration endpoints are active. If **No**, the module is hidden from the admin menu and no push scripts load on the frontend.

**Web API Key** – Firebase Web API Key from your Firebase project settings. Required for browser token generation on the storefront.

**FCM Auth Domain** – Firebase authentication domain (for example, `your-project.firebaseapp.com`). Required for Firebase initialization.

**FCM Auth Domain File** – Upload the Firebase service account **JSON** key file used for FCM HTTP v1 server sends. The file is stored under `pub/media/pushnotification/jsonfile/`. Required for admin-initiated and cron sends.

**FCM Project Id** – Your Firebase project ID. Must match the uploaded JSON credentials.

**FCM Storage Bucket** – Firebase storage bucket name from project settings.

**Messaging Sender Id** – Firebase Cloud Messaging sender ID. Required for client-side messaging setup.

**FCM App Id** – Firebase application ID for your web app registration.

**Public Key** – Web Push VAPID public key pair used when requesting browser notification permission.

**Measurement Id** – Optional Google Analytics measurement ID associated with the Firebase web app.

**Notification Delivery Target** – Controls which registered tokens receive sends from cron and bulk actions.
- **Web** – only tokens registered with the web channel receive notifications.
- **User Device** – only mobile/native device tokens receive notifications.
- **Both** – web and device tokens are eligible.

**Enable Message Queue For Bulk Send** – Controls how mass sends from **Registered Users** are processed. If **Yes**, each selected user is published as an individual DB queue message on topic `webkul.pushnotification.bulk_send`; you must run the consumer: `bin/magento queue:consumers:start webkul.pushnotification.bulk_send`. If **No**, notifications are sent synchronously during the admin request (simpler setup, slower for very large selections).

### Push Notification Rule

**Enable** – Turns automatic scheduled notifications on or off. If **Yes**, the cron job evaluates rules every minute. If **No**, only manual admin sends are performed.

**Rule** – Dynamic grid to add one or more schedule rows. Each row contains:
- **Hour** – hour of day (store timezone) when the rule should fire
- **Minute** – minute within that hour
- **Template** – notification template to send when the rule matches

Click **Add New Rule** to create additional schedule entries. Multiple rules can point to different templates at different times.

![push-notification-rule-configuration](/images/webkul-logo.png)

**Note:** Push notifications require **HTTPS**. They will not work on plain HTTP storefronts. Ensure your SSL certificate is valid before testing opt-in.

---

## Notification Templates

**Admin navigation:** **Push Notification > Notification Templates**

The Notification Templates section is where the admin creates reusable message layouts. Each template stores the title, body text, redirect link, tags, and logo shown to subscribers when a notification is delivered.

![notification-templates-grid](/images/webkul-logo.png)

### View Template List

The grid displays:

- **Id** – unique template identifier
- **Template Title** – internal/admin title
- **Template Message** – notification body text
- **Redirect Url** – landing page when the user clicks the notification
- **Logo** – thumbnail of the uploaded icon
- **Tags** – searchable labels for organization
- **Created At** – template creation timestamp

Use grid filters and column controls to search templates. Select rows and use **Actions > Delete** to remove unused templates.

### Create a New Template

1. Go to **Push Notification > Notification Templates**.
2. Click **Create New**.
3. Fill in the template form fields (documented below).
4. Click **Save**.

![create-new-notification-template](/images/webkul-logo.png)

**Template Title** – Short headline shown as the notification title on the subscriber’s device or browser.

**Template Message** – Main body text of the push alert. Keep it concise for best display on mobile and desktop.

**Redirect Url** – Full HTTPS URL opened when the subscriber clicks the notification (for example, `https://www.example.com/sale`).

**Template Tags** – Comma-friendly labels used for filtering and organization in the admin grid.

**Template Logo** – Image icon for the notification. Supported formats: JPG, JPEG, PNG, GIF, SVG. Maximum file size: 2 MB. Upload a new file or use **Select From Gallery** to pick an existing image from Magento media.

![template-logo-upload](/images/webkul-logo.png)

### Edit or Delete a Template

1. In the templates grid, click **Edit** in the **Actions** column for the desired row.
2. Update fields as needed and click **Save**, or click **Delete** to remove the template permanently.
3. To delete multiple templates, select checkboxes, open **Actions**, choose **Delete**, and confirm.

![edit-notification-template](/images/webkul-logo.png)

---

## Registered Users

**Admin navigation:** **Push Notification > Registered Users**

The Registered Users grid lists every browser or app token that opted in to receive push messages. From here the admin sends campaigns and removes inactive subscribers.

![registered-users-grid](/images/webkul-logo.png)

### Grid Columns

- **Id** – token record identifier
- **Subscriber Name** – customer name when logged in, or **guest** for anonymous visitors
- **Subscribed From** – browser label (Chrome, Firefox, Edge, Safari, etc.)
- **Subscribed At** – date and time the token was registered

Filter by name, browser, or subscription date using the grid toolbar.

### Send Notification to Selected Users

1. Go to **Push Notification > Registered Users**.
2. Select one or more subscribers using the row checkboxes.
3. Open **Actions** and choose **Send Notification**.
4. Select the desired **Template** from the submenu.
5. Confirm the action. The module sends the notification to each eligible subscriber based on **Notification Delivery Target** settings.

![send-notification-mass-action](/images/webkul-logo.png)

**Note:** If **Enable Message Queue For Bulk Send** is **Yes**, messages are queued per user. Ensure the queue consumer is running before expecting delivery.

### Delete Registered Users

1. Select subscribers to remove.
2. Choose **Actions > Delete**.
3. Confirm deletion. Removed tokens will no longer receive notifications until the visitor opts in again.

![delete-registered-users](/images/webkul-logo.png)

---

## Automatic Push Notification Rules (Cron)

**Admin navigation:** **Stores > Configuration > Webkul > Push Notification > Push Notification Rule**

When automatic rules are enabled, Magento’s cron job (`notification_cron_job`) runs every minute and compares the current store hour and minute against configured rules. Matching subscribers receive the linked template once per rule cycle.

### Configure Automatic Sends

1. Go to **Stores > Configuration > Webkul > Push Notification**.
2. Expand **Push Notification Rule**.
3. Set **Enable** to **Yes**.
4. In **Rule**, click **Add New Rule**.
5. For each row, set **Hour**, **Minute**, and **Template**.
6. Click **Save Config**.

![automatic-push-notification-rules](/images/webkul-logo.png)

**Note:** Cron must be configured correctly on your server (`bin/magento cron:run` or system crontab). Automatic sends do not run if Magento cron is disabled.

---

## Configuration Setting (Admin Shortcut)

**Admin navigation:** **Push Notification > Configuration Setting**

This menu item opens **Stores > Configuration > Webkul > Push Notification** directly for quick access to Firebase and rule settings.

![configuration-setting-shortcut](/images/webkul-logo.png)

---

## Support Menu

**Admin navigation:** **Push Notification > Support**

The Support submenu provides quick links to Webkul resources:

| Menu Item | Description |
|-----------|-------------|
| **User Guide** | Opens Webkul documentation for this extension |
| **Store Extension** | Link to the product page on Webkul Store |
| **Ticket/Customisations** | Raise support or customization requests |
| **Services** | Webkul professional services |
| **Reviews** | Leave a product review on Webkul Store |

---

## **Subscribe to Push Notifications (Storefront)**

Storefront subscription does not require a dedicated **My Account** page. When the module is enabled, Firebase scripts load on every storefront page and handle browser permission and token registration automatically.

### Registered Customer Flow

1. The customer visits any page on your HTTPS storefront.
2. The browser displays a native notification permission prompt (Chrome, Firefox, Edge) or waits for a user click (Safari).
3. The customer clicks **Allow** (or interacts with the page on Safari, then allows notifications).
4. The module registers the Firebase Cloud Messaging token and POSTs it to `/pushnotification/users/save`.
5. If the customer is logged in, their Magento **customer name** and **customer ID** are stored with the token.
6. The customer begins receiving push notifications when the admin sends a template or a cron rule fires.

![browser-notification-permission-prompt](/images/webkul-logo.png)

### View Received Notifications

1. When the admin sends a notification, the subscriber sees a system/browser alert with **title**, **message**, and **logo**.
2. The customer clicks the notification.
3. The browser opens the **Redirect Url** defined in the template.

![customer-received-push-notification](/images/webkul-logo.png)

**Note:** If the customer previously clicked **Block** on the permission prompt, they must re-enable notifications manually in browser site settings before subscribing again.

### Unsubscribe / Block Notifications

1. The customer opens browser settings for your store domain.
2. The customer disables notifications for the site.
3. Optionally, the admin can delete the token row from **Push Notification > Registered Users**.

![browser-block-notifications](/images/webkul-logo.png)

---

## Guest User Support

**Guest user support: Yes**

Guest visitors follow the same opt-in flow as registered customers. No login or **My Account** navigation is required.

1. A guest opens your HTTPS storefront.
2. The browser permission prompt appears (or Safari waits for a click).
3. The guest allows notifications.
4. The token is saved with subscriber name **guest** and no `customer_id`.
5. The guest receives the same notifications as logged-in users when selected in admin sends or cron rules.

![guest-user-push-subscription](/images/webkul-logo.png)

**Note:** To target only logged-in customers, filter the Registered Users grid by **Subscriber Name** and exclude rows labeled **guest** before sending.

---

## Mobile App and Headless Integration (GraphQL)

For Android, iOS, or PWA headless frontends, register tokens through Magento GraphQL when `Magento_GraphQl` is enabled.

### Register Token

**Mutation:** `registerPushToken`

**Required inputs:**
- `token` – FCM device token
- `platform` – `WEB`, `ANDROID`, or `IOS`
- `channel` – `WEB`, `DEVICE`, or `BOTH`

**Optional inputs:** `device_id` (required when channel is not WEB), `app_version`, `browser`, `name`

When the GraphQL context is an authenticated customer, `customer_id` is attached automatically.

### Unregister Token

**Mutation:** `unregisterPushToken`

Provide `token`, `platform`, and `channel` (and `device_id` when applicable) to set `is_active = 0` on the matching record.

![graphql-register-push-token](/images/webkul-logo.png)

**Note:** Mobile apps should read click URLs from FCM **data** payload fields (`url`, `click_action`) in addition to the notification object, per platform handler requirements.

---

## Admin Management of Subscribers and Campaigns

**Admin navigation:** **Push Notification > Registered Users**

This section is the operational hub for day-to-day notification management.

### Manage All Subscribers

1. Open **Push Notification > Registered Users**.
2. Review subscriber ID, name, browser, and subscription date.
3. Use filters to find Chrome subscribers, recent opt-ins, or guest tokens.
4. Delete stale or test tokens to keep the list accurate.

![manage-all-subscribers](/images/webkul-logo.png)

### Send Manual Campaign

1. Filter or select target subscribers.
2. Use **Actions > Send Notification > [Template Name]**.
3. Wait for success messages (sync mode) or confirm queue processing (async mode).
4. Verify delivery on a test browser or device.

![admin-send-manual-campaign](/images/webkul-logo.png)

### Monitor Automatic (Cron) Sends

1. Confirm **Push Notification Rule > Enable** is **Yes**.
2. Verify server cron is running.
3. Check `var/log` and the module log channel for send results.
4. Adjust hour/minute/template rows if sends occur at the wrong store time.

![monitor-cron-notification-sends](/images/webkul-logo.png)

### Delivery Target Reference

Use **Notification Delivery Target** to align sends with your audience:

| Target | Receives notifications |
|--------|-------------------------|
| **Web** | Storefront browser tokens (`channel = web`) |
| **User Device** | Mobile app tokens (`channel = device`) |
| **Both** | All active tokens regardless of channel |

![delivery-target-settings](/images/webkul-logo.png)

---

## Troubleshooting Tips

- **Menu not visible** – Set **Enabled** to **Yes** and flush cache.
- **No permission prompt** – Confirm HTTPS, valid Firebase keys, and that the customer has not blocked notifications.
- **Sends fail** – Re-upload the FCM JSON file; verify **FCM Project Id** matches the JSON key.
- **Bulk send slow or pending** – Enable queue mode and start consumer `webkul.pushnotification.bulk_send`.
- **Safari issues** – Safari requires a user gesture; the customer must click the page before permission is requested.

![troubleshooting-push-notification](/images/webkul-logo.png)

---

## Support

For module-specific issues, customization requests, or bug reports, create a support ticket at:

**http://webkul.uvdesk.com/**

---

**Current Product Version** – 5.0.6

**Supported Framework Version** – Magento 2.0.x, 2.1.x, 2.2.x, 2.3.x, 2.4.x (Magento Open Source and Adobe Commerce)

---

**Author**

![author-image](/images/webkul-logo.png)

**M**  
Webkul Software Pvt. Ltd.
