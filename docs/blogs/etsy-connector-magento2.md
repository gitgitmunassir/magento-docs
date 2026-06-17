# User Guide for Etsy Connector for Magento 2

Updated 21 July 2025

[Live Demo](https://magento-demo.webkul.in/etsy-connector/?demo=Webkul_EtsyMagentoConnect)

[**Magento 2 Etsy Connector **](https://store.webkul.com/magento2-etsy-integration.html)extension integrates Adobe Commerce store with Etsy store.

Store owner can sync hundreds of products, categories, and orders from Etsy store to Adobe Commerce store.

It also allows exporting of products from Magento 2 to Etsy store as well.

### Features

- Connect multiple Etsy seller accounts.
- The admin will decide whether to use Etsy credentials Globally or uniquely for each Etsy account created.
- Import Etsy products – active and expired.
- Select the default order status for Etsy orders.
- Import Etsy orders according to selected dates.
- Select Attribute Set ID for each Etsy account.
- Assign imported products to the correct Adobe Commerce category.
- Export all or selected Magento 2 products to Etsy listing.
- Supports mapping of products with variations and options.
- Map Etsy categories with Adobe Commerce categories.
- Mention Etsy variation and specification in products.
- Select default web-site for importing products.
- View mapping process result after execution.
- Delete record entries from the product and order sync list.
- Set default shipping template for exporting products.
- There is mapped order tracking information sync between Adobe Commerce and Etsy

### Installation

Please note that you need to install/enable the following libraries on your Adobe Commerce server[!\[webkul-magento2-oauth-support\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/Screenshot_1-5.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/Screenshot_1-5.png)

To install Magento 2 Etsy Connector extension, please follow each and every step carefully as follows:

### Step 1:

After extracting the downloaded zip file and you will get the **src** folder.

Inside **src** folder, you will find the **app** folder, copy the **app** folder to the Adobe Commerce root directory. Please view the below screenshot.

![Magento2 Admin Buyer Chat Installation](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/02/2017-02-28_12-22-45.png)

### Step 2:

After the successful installation of the Adobe Commerce Etsy Connector  module, you have to run these commands in the Adobe Commerce root directory.

```
composer require html2text/html2text
```

```
php bin/magento setup:upgrade
```

```
php bin/magento setup:di:compile
```

```
php bin/magento setup:static-content:deploy
```

Afterward running the commands, you need to flush the cache and reindex all from the Adobe Commerce admin panel.

Navigate through **System>Cache Management**.

Click **Flush Adobe Commerce Cache** button as shown below:

![Magento2 Cache Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/02/2017-02-28_12-09-25.png)

### How to Get Etsy Credentials

Now follow the below steps to get the required credentials:

### Step 1:

Moreover, navigate to [etsy.com/developers](https://www.etsy.com/developers/) and click on the **Register** link as shown in the snapshot below.  
[!\[etsy developer account register\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/register1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/register1.png)

### Step 2:

Now on the pop-up, you can choose to **register** using your **social account** or enter your **first name**, **email address**, **password**, reenter the entered **password.**

Lastly click the **register** button to register.  
[!\[etsy developer account register\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/register2.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/register2.png)

### Step 3:

After registering in the previous step, click the **Register as a Developer **menu link.

Here, you will have to verify the **email address** that you entered.

While **registering** and **enable** the **Two-Factor authentication** before creating the **API key**.  
[!\[etsy developer account register\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/create-app-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/create-app-1.png)

**Enabling Two-factor Authentication**:

**Step 1**: Click the **Two-Factor Authentication** link as shown below in the snapshot.

[!\[Magento 2 Marketplace Etsy connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/enable-authentication-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/enable-authentication-1.png)

**Step 2**: Then, this brings up the **Security Settings **section. Here, click the **Enable** button to enable two-factor authentication.

[!\[Magento 2 Marketplace Etsy connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/enable-authentication.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/enable-authentication.png)

**Step 3**:

Now, enter your **mobile phone number** with the correct **country code.**

Select your **Confirmation type** as **SMS/Text Message** or **Phone Call** based on your preference.

Then, click the **Confirm Phone Number** button.

[!\[Magento 2 Marketplace Etsy connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/confirm-number-twofactor-authentication.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/confirm-number-twofactor-authentication.png)

**Step 4**: This brings up a popup to enter the **two-factor code**, enter the code and click the **Confirm** button.

[!\[Opencart etsy connector Two-Factor Authentication\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/Confirm-Number.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/Confirm-Number.png)

You will also be able to **backup** codes(to sign in) that can be used to login **in case** you don’t have the **mobile phone along**.  
![
backup codes](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/backup-codes.webp)

You can see the **Two-Factor Authentication** is now enabled.  
[!\[Magento 2 Marketplace Etsy connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/twofactor-enable.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/twofactor-enable.png)

Afterward **verifying** the **email address** and setting up the **Two-Factor Authentication** now you can go back to the **Register as Developer** section.

Here, enter all the related information on the page to **create the app**. Now, click the **Read Terms and Create App**button.  
[!\[Magento 2 Marketplace Etsy connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/Register3.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/Register3.png)

Therefore, this brings a popup to accept the API agreement. Here check the **agree to the terms and conditions** checkbox and click the **Create App** button.

[!\[Magento 2 Marketplace Etsy connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/create-app1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/create-app1.png)

thereafter,this creates the **app **and you get the **Consumer Key**(Key String) and the **Secret Key**(Shared secret).  
[!\[Magento 2 Marketplace Etsy connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/keys.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/keys.png)

lastly, you need to have a **Shop name**(required for module configuration). To create one go to the **Shop Settings** menu link and create one. Here, you can see the shop name as WebkulShop.

[!\[Magento 2 Marketplace Etsy connector\](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/etsyShop.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/04/etsyShop.png)

### Module Configuration

Afterward the installation of the Adobe Commerce 2 Etsy Connector module.

Admin needs to manage configuration for the Etsy Connector by navigating **Stores > Configuration > Webkul > Etsy Magento Connect**.

![webkul-magento2-etsy-connector-admin-configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/webkul-magento2-etsy-connector-admin-configuration.png)

#### **General Settings**

- Use Etsy Global App Details For All Etsy Account: If this is set to “Yes” then all the Etsy accounts created will be authenticated by single Etsy application.
- OAuth Consumer Key – This will be visible only if the above field is set to Yes. Moreover, enter the consumer key generated from the new app.
- OAuth Consumer Secret – This will be visible only if the above field is set to Yes. Moreover, enter the consumer secret generated from the app.

#### Default Settings For Import Etsy Orders

- Default store view for order import: select store view for order importing the orders.
- Etsy Imported Order Status: Set default status for orders imported from the Etsy store. The selected order status here will become the Etsy order status in Magento.
- Available status is Pending, Processisng., Suspected Fraud, Complete, Closed, Canceled, and On hold.

#### Default Settings For Etsy Product

- Default Website: Select the default Magento 2 website where all Etsy products will be assigned.
- Import Products With All Images: If this field is set to Yes then all the images will get to import.
- Product Revision On Etsy: If set ‘Yes’, then the product details will revise on Etsy whenever any update is done in mapped products with Etsy on Magento.
- Product Automatic Renewals: If set ‘Yes’, the listing will renew as it expires for $0.20 USD each time (recommended).
- Default Source: The admin will select the default source for importing the products and orders.
- Magento Product Delete On Etsy Map Record Delete: If set ‘Yes’, the product will get removed from Magento whenever you delete mapped products record with Etsy on Magento.

### Manage Etsy Accounts

#### **Etsy Account List**

Thereafter configuring the Adobe Commerce Etsy Connector module, the admin needs to add new Etsy seller account details.

Please go to **Etsy Magento Connect > Etsy Account Manager**.

The following page will appear, click **Add Etsy Seller Account** to enter new account details.

**Actions** – To delete an account please use the Actions menu.

**Edit** – Click Edit to manage the Etsy account and do synchronization of products and orders.

![webkul-magento2-etsy-connector-admin-account-list](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/webkul-magento2-etsy-connector-admin-account-list.png)

**New Etsy Account**

Furthermore, the field to be filled will depend on one of the aspects of the general setting as shown in the images below:

- Use Etsy Global App Details For All Etsy Account: “Yes”

Further, if this field is set to **Yes**, then all the Etsy shops/ accounts will have Global/ single Etsy applications and that will be added once for all accounts.

![webkul-magento2-etsy-connector-admin-configuration-field-yes](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/webkul-magento2-etsy-connector-admin-configuration-field-yes.png)

Thereafter clicking the **Add Etsy Seller Account **button, the following page will appear. Now, the admin needs to provide the following details.

![webkul-magento2-newt-etsy-account](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/new-account.png)

**Etsy Store Name** – Enter the store name of Etsy.

**Attribute Set** – Select the default attribute set for the Etsy product import.

- Use Etsy Global App Details For All Etsy Account: “No”

Even if this field is set to **No**, then all the Etsy shops/ accounts will have different Etsy applications and their servers and secret key will be added uniquely for each account.

![webkul-magento2-etsy-connector-admin-configuration-field-no](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/webkul-magento2-etsy-connector-admin-configuration-field-no.png)

Afterward clicking the **Add Etsy Seller Account **button, the following page will appear. Now, the admin needs to provide the following details.

![webkul-magento2-etsy-connector-admin-new-etsy-account](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/webkul-magento2-etsy-connector-admin-new-etsy-account.png)

- OAuth Consumer Key – Moreover, enter the consumer key generated from the new app.
- OAuth Consumer Secret – Moreover, enter the consumer secret generated from the app.
- Etsy Store Name – Enter the store name of Etsy.
- Attribute Set – Select the default attribute set for the Etsy product import.

####  

#### **Authenticate**

Thereafter, when the admin enters the credentials in the Adobe Commerce Etsy Connector module configuration, it needs to authenticate its account information.

Please go to **Etsy Magento Connect>Etsy Account Manager>Edit**.

In the **Etsy Account Info** section, click the **Authenticate** button.

The page will be redirected to the Etsy Seller website where the admin needs to validate its login credentials.

Afterward successful validation, the details will appear as visible in the screenshot.

**Default Shipping Template** – Then, select the shipping template for the Adobe Commerce exporting products.

- Etsy Account Information will be visible as shown below when the Use Etsy Global App Details For All Etsy Account is set to Yes in the module configuration.

![webkul-magento2-etsy-connector-admin-edit-etsy-account-not-autyhenticated](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/webkul-magento2-etsy-connector-admin-edit-etsy-account-not-autyhenticated.png)

- Etsy Account Information will appear as shown below when the Use Etsy Global App Details For All Etsy Account is set to No in the module configuration

![webkul-magento2-etsy-connector-admin-edit-etsy-account-not-autyhenticated-credentials](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/webkul-magento2-etsy-connector-admin-edit-etsy-account-not-autyhenticated-credentials.png)

Afterward, the authentication, the account edit page will be visible as shown in the image below:

![webkul-magento2-etsy-connector-admin-edit-etsy-account-authentiocated](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/webkul-magento2-etsy-connector-admin-edit-etsy-account-authentiocated.png)

### Map Categories

Thereafter entering the Etsy seller account details, the admin needs to map the correct Etsy category with the Adobe Commerce category.

So that after importing the products from Etsy, they’ll be added to the correct Adobe Commerce category.

**Etsy Category Map Record**

Moreover, to map the categories please go to **Etsy Magento Connect>Map Category**.

The following page will appear showing all the mapped category records.

**Map New Category** – Now, click this button to do mapping of the new Etsy category with Adobe Commerce.

[!\[webkul-magento2-etsy-category -map\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/category-map-list.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/category-map-list.png)

#### **New Category Map Record**

First, select the **Adobe Commerce Category** and then select the **Etsy Category**. Moreover, please note that you need to map the sub-category of Etsy with a sub-category of Adobe Commerce.

Now, click ** Save Map Record** to save your changes.

[!\[etsy category mapping with magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/etsy-category-mapping-with-magento.jpg)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/etsy-category-mapping-with-magento.jpg)

Therefore, here is an example where we have mapped the following categories:  
**Magento Category** – Women>Tops>**Jackets**  
**Etsy Category** – Clothing>Women>**Jacket**[!\[category mapped\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/category-mapped.jpg)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/category-mapped.jpg)

### Inventory Synchronization Between Etsy and Adobe Commerce

- When the order is placed on Magento at the same time stock quantity will get updated on Etsy.
- Also, when any order is placed on Etsy and the order is imported to the Adobe Commerce store through cron. At the same time stock quantity will get updated on the Adobe Commerce end.

### Product Sync

**Import Products from Etsy**

For importing products from Etsy listings to Adobe Commerce store, please go to **Etsy Magento Connect > Etsy Account Manager > Edit>Product Sync**.

Further, the following page will appear, showing all the synchronized product information of the stores.

It will show both imported as well as exported products.

**Notes:-**

1. All the basic information about the products such as name, price, images, description, stock, tax, weight, etc will be imported as well as exported with the products.
1. Etsy product variations will be converted into custom options in Adobe Commerce store.
1. “Create Imported Product In Store” button is only visible when the product are imported from the Etsy account.

![webkul-magento2-edit-etsy-account](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/import-products.png)

#### **Importing Products from Etsy: – **

**Step 1 – Etsy Product Status** – Select the type of Etsy products to import –** Active **or ** Expired**.

**Step 2 – Import Product From Etsy** – Click this button and a small pop-up window will appear after importing products from Etsy, click OK.

Then, run profiler for adding Etsy imported products to Adobe Commerce catalog.

[!\[Etsy Connector For Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/import-products-attention.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/import-products-attention.png)

**Step 3 – Create Imported Products in Store** – Click this button to run profiler and create imported product entries to the catalog.

The execution process will show the progress of product creation.

[!\[Etsy Connector For Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/import-run-profile.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/import-run-profile.png)

**Actions** – Use this option to Assign imported products to the category. Use the **Delete** option to remove the mapped record entries from the list.

#### **Delete Mapped Product Entries**

First, select the products from the list and then go to **Actions** drop-down menu and select the **Delete** option. Click **Submit** to delete the selected products from the list.

[!\[Etsy Connector For Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/delete.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/delete.png)

#### **Assign Category**

If the imported products are appearing in the wrong Adobe Commerce category, the admin can assign those products to the correct category using this option.

First, select the products from the list and then go to **Actions >Assign to Category**.

Then, select the correct Magento 2 category from **Assign to category** option and click **Submit** button.

[!\[Etsy Connector For Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/assign-category.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/assign-category.png)

### Order Sync

#### **Import Orders from Etsy**

Further, for importing orders from Etsy, please go to **Etsy Magento Connect>Etsy Account Manager>Edit>Order Sync. **The following page will appear showing all the imported orders from the Etsy store.

**Note –**

- A cron is set which automatically imports all the orders from Etsy to Adobe Commerce.
- “Create Imported Order In Store” button is only visible when the orders are imported from the Etsy account.

![webkul-magento2-edit-etsy-account](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/import-orders.png)

**Step 1-** Click **Import Order from Etsy** button, then a pop-up window will appear for selecting the order date range.

Otherwise, tick the option **Import Store All Orders** for gettings all Etsy orders.

After that click **Import **button and go to Step 2.

[!\[etsy order import\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/etsy-order-import.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/etsy-order-import.png)

**Step 2 –** Click **Create Imported Order** button, the order profiler process will run showing the importing process result. All the order information will be imported to [Adobe Commerce](https://webkul.com/adobe-commerce-cloud/) store.

[!\[Etsy Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/2017-06-21_15-45-08.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/2017-06-21_15-45-08.png)

After importing the orders from Etsy, they’ll be added to Adobe Commerce orders. To view Etsy orders please go to **Sales>Orders**. Please view the below sample order imported from Etsy store.

[!\[Etsy Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/etsy-order-sample.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/etsy-order-sample.png)

**Delete** – To remove the imported order entries from the list, first select the orders, then go to **Actions>Delete** and click **Submit** button.

![webkul-magento2-edit-etsy-account-delete](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/import-orders.png)

### Export to Etsy

#### **Export Products to Etsy**

For exporting products from Adobe Commerce store to Etsy store.

Please go to **Etsy Magento Connect>Etsy Account Manager>Edit>Export to Etsy.**

Here all the Adobe Commerce store products will appear on the list.

[!\[webkul-magento2-export-etsy-action\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/export-to-etsy.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/export-to-etsy.png)

**Step 1 –** First, select the products to export using the check box option.

**Step 2 –** go to **Actions**>**Export to Etsy** and click **Submit**.

[!\[Etsy Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/export-and-select-products.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/export-and-select-products.png)

The profiler will run showing the product export execution progress. After exporting the products, they will appear in the Product Sync list.

![new_change](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/01/new_change.png)

Hence, that’s all about Etsy Connector for Adobe Commerce. Thank you for viewing this blog. Moreover, if you have any queries or need more information, please visit [webkul.uvdesk.com](http://webkul.uvdesk.com)

Current Product Version - 4.0.2-p1

Supported Framework Version - Magento 2.0.x, 2.1.x, 2.2.x,2.3.x, 2.4.x

![author-thumb](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/rohit-kashyap.webp)

[Rohit Kashyap 7 Badges](https://webkul.com/blog/author/rohit-kashyap971/)

Rohit Kashyap drives global promotion of digital commerce services through client success documentation, social media management, and video podcast sessions, enhancing the visibility and market reach.

- 21 Jul, 2025 Updated by - Kuldeep Singh
- 29 Jan, 2025 Updated by - Vaibhav Arora

View More
