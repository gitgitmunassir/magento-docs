# Guide for Magento 2 WhatsApp Login

Updated 15 July 2024

[Live Demo](https://magento2demo.webkul.in/modules-demo4/?demo=Webkul_WhatsAppLogin)

[Magento 2 WhatsApp Login](https://store.webkul.com/magento2-whatsapp-login.html) extension allows users to register and log in to their Magento 2 store accounts with their Whatsapp numbers.

The guest users can register as a customer using their registered WhatsApp number and create an account within the Magento 2 website.

The customers will also be able to change their WhatsApp number as required under their account panel.

Check the below mentioned video for an overview about the the extension and its working:

4143_00CBac

### Features

- The admin can enable/disable the module from the admin panel.
- Customer can register their account with their Whatsapp number.
- Already registered customers can log in to their accounts with the same Whatsapp number.
- Customer can change their Whatsapp number.
- If customers register with their mobile number then the default email and password will generate.
- Customers can change their Email ID and password after registering with a WhatsApp number.

### Installation

### #1 Download Module

Firstly, you need to log in to Webkul Store, go to **My Account**>**My Purchased Products** section, verify and then download and extract the contents of this zip folder on the system.

### #2 Upload Folder

Once the module zip is extracted, follow path **src>app** and then copy the **app** folder into the **Adobe Commerce root** directory on the server as shown below:

![M2-installation-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/M2-installation-1-1200x451.png)

### #3 Run Commands

After uploading the module folder, you need to run the following commands in the Magento 2 root directory:

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

### Language Translation

For translating the module language, navigate through **src/app/code/Webkul/****WhatsAppLogin****/i18n** and edit the en_US.csv file.

Thereafter, rename the CSV as “en_SA.csv” and translate all right side content after the comma in the Arabic language. After editing the CSV, save it.

![Magento 2 opencart connector language translation](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/03/i18folder-1200x293.png)

Now, upload it to the path **src/app/code/Webkul/WhatsAppLogin/i18n** where the installation of Magento 2 is on the server.

The module gets translated into the Arabic Language. It supports both RTL and LTR languages.

The user can edit the CSV like the image below.

![Magento 2 OpenCart Connector language translation](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_from_2023_05_17_12_48_02.png)

### How to Get API Credentials – Magento 2 WhatsApp Login 

The user has to first create a [Facebook Meta account](https://developers.facebook.com/apps/) and log in to the Meta dashboard and click to Create App as shown in the screenshot.

![developers.facebook.com_apps_](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/developers.facebook.com_apps_-1200x801.png)

Now, the admin needs to select the Other option and click on the Next button.

![developers.facebook.com_apps_creation_](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/developers.facebook.com_apps_creation_-1200x748.png)

Then click on the Business option to proceed further and click on the Next button.

![developers.facebook.com_apps_create_](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/developers.facebook.com_apps_create_-1200x971.png)

Here the admin need to enter an app name and click on Create app button.

![developers.facebook.com_apps_create_-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/developers.facebook.com_apps_create_-1-1200x870.png)

The admin needs to click on the Set up button for **WhatsApp**.

![developers.facebook.com_apps_611378094080357_add_](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/developers.facebook.com_apps_611378094080357_add_-1200x827.png)

Now admin needs to click on **WhatsApp> API Setup**. And copy the access token and Phone number. ID.

![Webkul-Login-WhatsApp-Meta-for-Developers](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/Webkul-Login-WhatsApp-Meta-for-Developers-1200x692.png)

After verifying your number through WhatsApp, Admin needs to click on App Dashboard from the header and select WhatsApp Manager.

![developers.facebook.com_apps_611378094080357_whatsapp-business_wa-dev-console__business_id788057972889019](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/developers.facebook.com_apps_611378094080357_whatsapp-business_wa-dev-console__business_id788057972889019-1200x744.png)

A new page will open then go to **Overview>Message templates.**

![business.facebook.com_wa_manage_home__business_id788057972889019waba_id107676682348471global_scope_id788057972889019](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/business.facebook.com_wa_manage_home__business_id788057972889019waba_id107676682348471global_scope_id788057972889019-1200x919.png)

Click on Create Template button to create a new template.

![business.facebook.com_wa_manage_message-templates](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/business.facebook.com_wa_manage_message-templates-1200x692.png)

Now select the category, enter the template name and select the language then click to continue.

![WhatsApp-Manager](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/WhatsApp-Manager-1200x637.png)

After that select the Header that is optional, enter the Body and Footer then click to submit button.

![business.facebook.com_wa_manage_message-templates__business](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/business.facebook.com_wa_manage_message-templates__business-1200x789.png)

Here admin needs to confirm the language.

![business.facebook.com_wa_manage_message-templates__business_id](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/business.facebook.com_wa_manage_message-templates__business_id-1200x831.png)

Now the template will be added to the Message template list.

![business.facebook.com_](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/business.facebook.com_-1200x833.png)

### Admin Configuration 

The admin will navigate through **Stores>Configuration>WhatsApp Login** to make a general configuration.

![10-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/10-1.png)

Here, the admin will –

- Enable the module functionality by choosing a YES option else disable the same by choosing a No.
- Enter the Access token received via the Facebook Meta account.
- Enter the phone number ID received from the Facebook Meta account.
- Enter the template name that was created at the Facebook Meta Account.

Lastly, the admin will save the configuration by tapping the Save Config button at the top right-hand corner.

You can also check the [Magento 2 Firebase OTP login](https://webkul.com/blog/magento2-firebase-otp-login-documentation/) extension, which allows you to verify the customers before signing in or Signing up using Firebase OTP within your Magento 2 store.

### New Sign-Up – Using the WhatsApp Number

On the Magento 2 storefront, the user if not already registered will tap the Create an Account link in the header of the website, and that brings up the Create an Account section.

![1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/1-1.png)

Here, the users will see the option to register on the Magento 2 store using WhatsApp. Tapping the Register with WhatsApp button brings up the pop-up to enter the details for the registration process.

![1-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/1-2.png)

Here, the user will choose his country code and enter the phone number on which WhatsApp is registered. After that, the user needs to tap on the send OTP button.

**Note**: The phone number that the user enters should be registered on WhatsApp to receive the OTP for validation.

![1-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/1-3.png)

The OTP will be received on the user’s WhatsApp number. The user needs to enter the OTP and tap on the Verify OTP and Proceed button after that. If the OTP is not received the user can tap on the Resend OTP link.

![1.png](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/1.png.png)

Now the user registers on the Magento 2 store as a customer. The email id registers using the mobile number and the initial password will be the phone number with the country code.

![5-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/5-1.png)

After registering, the user can edit his email address, password, and user name by editing the respective information under the account information section. Here, the user can also change his WhatsApp number as required.

**Note**: The default first name would be WhatsApp and the last name of the customer as Customer.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_customer_account_edit_asd](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_customer_account_edit_asd.png)

If the customer now wants to change his WhatsApp number, enter the new WhatsApp number and get an OPT to register the same with your account.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_customer_account_edit_asd-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_customer_account_edit_asd-1.png)

### Sign In With WhatsApp

On the login page, the users will see the Signin With WhatsApp button.

![1-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/1-3-1200x543.png)

Tapping on the Sign In With WhatsApp brings up the below section. Here, enter your registered WhatsApp number using which you had registered previously.

![2-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/2-1-1200x513.png)

Then tap the send OTP button to receive the OPT for authentication.

![3-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/3-1-1200x522.png)

Enter the received OTP and tap Verify OTP and Proceed button to log in to your Magento 2 customer account panel.

![4-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/4-1-1200x541.png)

### Using WhatsApp at Checkout – If not Logged In 

If the user is not Signed in and tries to checkout, then the user will find the option to sign in to his account using WhatsApp at the checkout page.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd.png)

Tapping on Sign in With WhatsApp brings up the pop-up as shown below in the snapshot. Tap Send OTP to receive the OTP to login in if you already have created the account using your WhatsApp number.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd-1.png)

Now, enter the OTP and verify to proceed further to place the order.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd-2.png)

Thereafter the customer can see the checkout page to proceed further.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd-3.png)

Also, if the user is not registered within the store using the WhatsApp number, then the user can register at the checkout time as well. After that, the user can proceed further to place the order.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd-2-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_checkout_asd-2-1.png)

### WhatsApp OTP Validation on Order Place

After adding the products to the cart, the customer can navigate to checkout.

![192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_webkul.htmlasd](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_webkul.htmlasd.png)

The customer will tap the Proceed to Checkout button to go to the checkout page. On the checkout page, the customer will check his shipping address and select the shipping method and tap the next button.

![192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_asd-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_asd-4-839x1024.png)

After tapping the next button, the customer will tap the place order button. This brings up a pop-up where the customer needs to enter the OTP received on his WhatsApp number.

![192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_asd-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_asd-1-1.png)

After entering the OTP tap Verify OTP and Proceed.

![192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_asd-2-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_asd-2-1.png)

After verifying the OTP you can see the details like shown In the image below.

![192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_asd-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_asd-3.png)

Lastly, the order will get placed after WhatsApp OTP verification & Validation.

![192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_onepage_success_asd](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_checkout_onepage_success_asd.png)

### Admin – View Customer WhatsApp Number

The admin can navigate to the customer’s section in the default Magento 2 backend. Navigate through Customers->All Customers.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_admin_customer_index_index_key_22d286b28e4d5e3735c6ad3d63091f75ab4966c3c945b0e98cd0dcb22453127c_asd](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_admin_customer_index_index_key_22d286b28e4d5e3735c6ad3d63091f75ab4966c3c945b0e98cd0dcb22453127c_asd.png)

Apart from that, if the admin edits a customer and goes to his Account Information section, there as well the admin can see the customer’s WhatsApp number.

![192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_admin_customer_index_edit_id_10_key_e45b6b9481b4fd96e5c629623cf5502b3f096e670c9da22a336d9077e0089c26_asd](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/06/192.168.30.128_MAGENTO2-2.3_CommunityEdition_Default-addons_m2_WA_Login_pub_admin_customer_index_edit_id_10_key_e45b6b9481b4fd96e5c629623cf5502b3f096e670c9da22a336d9077e0089c26_asd.png)

### WhatsApp Notification to Customer On – WhatsApp Number Change by Admin

When the admin changes the WhatsApp number of the customer, then the customer will receive a notification on their already registered WhatsApp number.

After navigating to the customers section, for the respective customer navigate to the Account information section in the admin backend.

![192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_admin_customer_index_edit_id_2_key_e0bc518c53e6acc929f3252f67d7d9b3935b81c9496589326db228640199a852_asd-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/192.168.30.128_MAGENTO2-2.3_EnterprizeEdition_Default-addons_WA_Login_pub_admin_customer_index_edit_id_2_key_e0bc518c53e6acc929f3252f67d7d9b3935b81c9496589326db228640199a852_asd-1.png)

Here, after changing the WhatsApp number and saving the same the customer will receive a notification regarding the same.

![11-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/11-1-459x1024.jpg)

### Support

That is all about the **Magento 2 WhatsApp Login** extension. If you have any queries regarding the plugin, please contact us at [Webkul Support System](https://webkul.uvdesk.com/en/customer/create-ticket/)**.**

If you’re looking to create a custom e-commerce website, it’s a great idea to [hire Magento developers](https://webkul.com/hire-magento-developers/) who can help you build a powerful and scalable online store.

You can also check our complete [Magento 2 extensions](https://store.webkul.com/Magento-2.html).

Current Product Version - 5.0.1

Supported Framework Version - Magento 2.0.x, 2.1.x, 2.2.x,2.3.x, 2.4.x

![author-thumb](https://webkul.com/blog/wp-content/themes/webkul-blog-bolt/avatars/ivy.jpg)

[Shivani Chaudhary 3 Badges](https://webkul.com/blog/author/shivanichaudhary-bd908/)

- 15 Jul, 2024 Updated by - Nishad Bhan
- 30 Nov, 2023 Updated by - Nishad Bhan

View More
