# User Guide of Magento 2 eBay Connector

Updated 18 June 2026

[Live Demo](https://magento2demo.webkul.in/ebayconnector/?demo=Webkul_Ebaymagentoconnect)

[Magento 2 eBay Connector](https://store.webkul.com/magento2-ebay-connector.html) allows you to integrate your Magento 2 / Adobe Commerce store with your eBay seller account. The admin can import products, categories, and orders from eBay into Magento 2, and export Magento catalog items to eBay with full control over listing, shipping, and pricing rules.

Merchants selling on both Magento 2 and eBay use this extension to keep catalog, inventory, and orders synchronized across both platforms from a single admin interface.

With the help of the [Adobe Commerce Cloud](https://webkul.com/adobe-commerce-cloud/) eBay Connector extension, the admin can automate product export, map categories, apply price rules, and monitor sync jobs through export queue and bulk export task logs.

Check the overview in the video below –

N/A

## **Features of eBay Connector**

- The admin can import eBay products, orders, and categories into Magento 2 with support for mapped-category import limits.
- The admin can export products from Magento 2 to eBay manually, via catalog grid mass action, or through automatic cron-based export.
- The admin can import Simple and Configurable product types from eBay into Magento 2.
- The admin can export Simple, Configurable, Bundle, and Grouped product types to eBay.
- The admin can import products by end listing date range, eBay Item SKU, or listing ID.
- The admin can import only active eBay listings and filter products by stock status and price range.
- The admin can export products using SKU filters and minimum price thresholds.
- The admin can synchronize product conditions, specifications, variations, dimensions, weight, and shipping costs between platforms.
- The admin can auto-map Magento SKU to eBay MPN and Magento Brand to eBay Brand during import and export.
- The admin can set eBay-specific product titles and export eBay-marked product images separately from default store images.
- The admin can enable real-time order and inventory synchronization through eBay webhook events.
- The admin can auto-update shipping and tracking information on eBay when shipments are created in Magento 2.
- The admin can configure return, payment, and shipping business policies for exported listings.
- The admin can create and manage listing templates with mapped product attributes.
- The admin can set default sync category, order status, quantity, website, store view, and inventory source.
- The admin can map Magento categories to eBay categories and eBay store categories.
- The admin can use Category Automation to create Magento category hierarchies from eBay and auto-map leaf categories.
- The admin can configure price rules for imported or exported products with percentage or fixed adjustments.
- The admin can run bulk product export via the eBay Sell Feed API with queue and task monitoring.
- The admin can use Sandbox mode for testing before switching to Production mode.
- The admin can revise eBay listings automatically when Magento products are updated.
- The admin can enable the eBay Product Shipping carrier so customers see product-level shipping rates at checkout.
- The admin can download product images faster using the aria2c tool during import.
- The module supports multiple language translations and open-source customization.

## Installation of eBay Connector

The installation is quite simple just like the standard [Magento 2 extensions](https://store.webkul.com/Magento-2.html).

### #1 Download Module

Firstly, you need to log in to the Webkul Store, go to **My Account** > **My Purchased Products** section, verify, and then download and extract the contents of this zip folder on the system.

### #2 Upload Folder

Once the module zip is extracted, follow path **src > app** and then transfer the **app** folder into the **Adobe Commerce Cloud root** directory on the server as shown below:

![upload-folder](/images/webkul-logo.png)

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

**Note:** If you install via Composer, run `composer require webkul/ebayconnector` before the commands above.

## Multilingual Support

For multilingual support, the admin will navigate through **Store > Configuration > General > Locale Options** and select the locale as German (the language into which the admin wants to translate store content).

![magento2-ebay-connector-locale-setting](/images/webkul-logo.png)

## Translation in eBay Connector

If a user wants to translate the module from English to German, they need to follow the path **app/code/Webkul/Ebaymagentoconnect/i18n** in their unzipped Adobe Commerce eBay Connector folder and will get a CSV file with the name `en_US.csv`.

Now they will rename that CSV as `de_DE.csv` and translate all right-side content after the comma into the German language.

After editing the CSV, save it and upload it to the path **app/code/Webkul/Ebaymagentoconnect/i18n** where Magento 2 is installed on the server.

The module will get translated into the German language. It supports both **RTL** and **LTR** languages.

![ebay-connector-translation-csv-1](/images/webkul-logo.png)

![ebay-connector-translation-csv-2](/images/webkul-logo.png)

The user can edit the CSV like the image below.

![ebay-connector-translation-csv-edit](/images/webkul-logo.png)

## Configuration of eBay Connector

After successful installation, the admin can view the eBay Connector configuration under **Store > Configuration > Webkul > eBay Magento Connect**.

![ebay-connector-admin-configuration](/images/webkul-logo.png)

Before configuring the module, the admin must obtain eBay Developer API credentials from [developer.ebay.com](https://developer.ebay.com). Create an application, generate Sandbox or Production keys (App ID, Cert ID, Dev ID), and obtain a User Authentication Token. Set the **Auth Accepted URL** in the eBay developer portal to:

`https://[your-domain]/ebaymagentoconnect/index/fetchtoken`

![ebay-developer-credentials-setup](/images/webkul-logo.png)

### General Settings

**Enable eBay Magento Connect** – Enables or disables the entire module. If set to **Yes**, the **eBay Magento Connect** admin menu and sync features become available. If set to **No**, the module remains inactive.

**Module License** – Enter and verify the purchase license key from the Webkul store. The remaining configuration fields appear only after successful license verification.

**Attribute Set ID** – Select the default Magento attribute set assigned to products imported from eBay.

**eBay Global Sites** – Select the eBay marketplace region (for example, eBay US, eBay UK, or eBay Motors) that matches your seller account.

**eBay User Id** – Enter the eBay account username used for API authentication.

**eBay Authentication Token** – Enter the eBay user token generated from the eBay developer portal.

**eBay Developer Token** – Enter the eBay Developer ID (Dev ID) from your application key set.

**eBay Application Id** – Enter the eBay App ID from your application key set.

**eBay Certification Id** – Enter the eBay Cert ID from your application key set.

**Application RuName** – Enter the Redirect URL Name (RuName) retrieved from the eBay application token page.

**Mode** – Select **Sandbox** for testing and development. Select **Production** for live eBay store operations.

**Item Country** – Select the country where exported products are located.

**Item Location** – Enter the physical location of items listed on eBay.

**Shop's Postal Code** – Enter the postal or ZIP code of your eBay store location.

### Real Time Information Update

**Information Update On Base Of eBay Events** – Select which eBay events trigger real-time sync to Magento 2 (for example, item sold, created, revised, closed, or fixed-price transactions).

**Sold Item Action** – Select the action performed in Magento 2 when an item sells on eBay. If **Order Creation and Inventory Management** is selected, Magento creates an order and reduces stock. If **Only Inventory Management** is selected, only inventory quantity is updated without creating an order.

![ebay-real-time-information-update](/images/webkul-logo.png)

### Store Settings

**Revise eBay item automatically on ebay store** – If set to **Yes**, Magento product updates automatically revise the corresponding eBay listing. If set to **No**, eBay listings are not updated when Magento products change.

**eBay item import with specification** – If set to **All**, all eBay product specifications are imported. If set to **Required**, only required specification fields marked mandatory by eBay are imported.

![ebay-store-settings](/images/webkul-logo.png)

### Listing Options

**Listing Duration** – Select how long exported products remain listed on eBay (for example, Good Till Canceled, 1, 3, 5, 7, 10, or 30 days).

**Gallery Type** – Select **Normal** for a standard gallery image in search results at no extra cost. Select **Plus** to highlight listings with a large gallery photo in search results (eBay fees may apply).

**Export Only eBay Marked Images** – If set to **Yes**, only product images marked as eBay images are included in the export payload. If set to **No**, default product gallery images are exported.

**Use Templates For Listing** – If set to **Yes**, exported products include additional listing content from a selected template. If set to **No**, template content is not applied during export.

**Select Template** – Choose the listing template used when **Use Templates For Listing** is enabled.

**eBay Price Rule Applicable For** – Select whether configured price rules apply to import products, export products, or none. Price rules act inversely on the unselected direction.

**Product Type For Export** – Select which Magento product types are allowed for export to eBay.

**Add SubTitle On eBay Product** – If set to **Yes**, an additional subtitle keyword is sent with the eBay listing (max 55 characters, no HTML). If set to **No**, no subtitle is added.

**Select Sub Title Attribute** – Choose the Magento product attribute used as the eBay subtitle when subtitles are enabled.

![ebay-listing-options](/images/webkul-logo.png)

### Dispatch Options

**Dispatch Time** – Select the number of business days (1–4) within which exported products will be dispatched on eBay.

![ebay-dispatch-options](/images/webkul-logo.png)

### Payment Options

**Default Category** – Select the Magento category assigned to imported products when no eBay-to-Magento category mapping exists.

**Store Currency** – Select the currency used for your eBay store transactions.

![ebay-payment-options](/images/webkul-logo.png)

### Package Information

**Shipping Package Type** – Select the package type used for exported products (Package/thick envelope, Large envelope, Letter, or Large Package).

**Irregular Package** – If set to **Yes**, eBay is notified that the package requires special handling due to irregular shape or size. If set to **No**, the package is treated as standard.

**Measurement Unit** – Select **English System of Measurement** or **Metric System of Measurement** for weight and dimension values.

**Length Of Package** – Select the Magento product attribute that stores package length.

**Width Of Package** – Select the Magento product attribute that stores package width.

**Depth Of Package** – Select the Magento product attribute that stores package depth.

![ebay-package-information](/images/webkul-logo.png)

### Order Sync Option

**Default store view for order sync** – Select the Magento store view assigned to orders imported from eBay.

**eBay Imported Order Status** – Set the default Magento order status for orders created from eBay imports.

**Default Product Quantity** – Set the quantity sent to eBay when a Magento product has zero stock at export time.

**eBay Import Order** – Select which eBay order statuses are eligible for import into Magento 2.

![ebay-order-sync-option](/images/webkul-logo.png)

### Default Setting For eBay Product Import

**Product imports limitation according to mapped categories** – If set to **Yes**, only products from selected mapped categories are imported. If set to **No**, category-based import limits are not applied.

**Sellect allowed categories** – Select mapped categories whose products are allowed for import. This field appears when category import limitation is enabled.

**default website** – Select the Magento website(s) assigned to all imported eBay products by default.

**Default Source** – Select the inventory source assigned to imported eBay products by default.

**Product Description With HTML** – If set to **Yes**, product descriptions are imported with HTML formatting preserved. If set to **No**, HTML tags may be stripped or ignored during import.

**Default Tax Class** – Select the tax class assigned to all imported eBay products.

**Enable Message Queue** – If set to **Yes**, eBay event notifications and image imports use the Magento message queue for background processing. If set to **No**, processing runs without the message queue.

**Product Import With Images** – If set to **Yes**, product images are imported along with product data. If set to **No**, images are not imported during the product import step.

**Import Out-of-Stock Products** – If set to **Yes**, out-of-stock eBay products are included in import and export operations. If set to **No**, out-of-stock products are excluded.

**Product Price Range From** – Import and export only products with a price greater than or equal to this value.

**Product Price Range To** – Import and export only products with a price less than or equal to this value.

**Enable aria2c tool for downloading product images** – If set to **Yes**, the aria2c command-line tool is used for faster parallel image downloads. If set to **No**, images download through the standard import process. After import, run:

`aria2c -d var/import/images/productimages -i var/import/catalog_product_images_aria2c.txt --allow-overwrite=true`

![ebay-product-import-settings](/images/webkul-logo.png)

### Automatic Product Export To eBay

**Enable Auto Export** – If set to **Yes**, products from mapped categories are automatically queued for export via cron and message queue. If set to **No**, automatic export is disabled and exports must be triggered manually.

**Max Products Per Cron Run** – Maximum number of products published to the export queue in a single cron execution.

**Dry Run Mode** – If set to **Yes**, products are logged as export candidates but are not actually sent to eBay. If set to **No**, products are exported normally.

**Use Bulk Feed API** – If set to **Yes**, products export in bulk via the eBay Sell Feed API (`LMS_ADD_FIXED_PRICE_ITEM`) and the single-product queue cron is disabled. If set to **No**, exports use the single-product message queue.

**Bulk Feed Batch Size** – Number of products per Feed API upload file (eBay recommends a maximum of 10,000 per file).

**Feed Schema Version** – The eBay feed schema version (for example, 1155). Changing this value may affect the export XML structure.

![ebay-auto-export-settings](/images/webkul-logo.png)

### Default Business Policy

**eBay Marketplace** – Select the eBay marketplace for retrieving business policies.

**Payment Policy** – Select the default eBay payment policy retrieved after OAuth sign-in.

**Shipping Policy** – Select the default eBay shipping policy retrieved after OAuth sign-in.

**Return Policy** – Select the default eBay return policy retrieved after OAuth sign-in.

![ebay-default-business-policy](/images/webkul-logo.png)

### eBay Product Shipping Carrier

Configure under **Stores > Configuration > Sales > Delivery Methods > eBay Product Shipping**.

**Enabled** – If set to **Yes**, the eBay Product Shipping carrier is available at Magento checkout. If set to **No**, the carrier is hidden from customers.

**Title** – The carrier title displayed at checkout (default: eBay Product Shipping).

**Method Name** – The shipping method label displayed at checkout (default: eBay Shipping).

**Ship to Applicable Countries** – Restrict the carrier to all allowed countries or specific countries only.

**Ship to Specific Countries** – Select destination countries when shipping is limited to specific regions.

**Sort Order** – Controls the display order of this carrier relative to other shipping methods.

**Displayed Error Message** – Message shown when the shipping method is unavailable for the selected address.

![ebay-product-shipping-carrier-config](/images/webkul-logo.png)

## Map Category

**eBay Magento Connect > Map Category**

After importing eBay categories, the admin maps them to Magento store categories. During mapping, eBay conditions and specifications are created as Magento product attributes, and eBay variations are created as super attributes for configurable products.

![ebay-map-category-list](/images/webkul-logo.png)

To create a new mapping, click **Map Category**. Select one Magento sub-category and one eBay sub-category. Only leaf (sub) categories can be mapped; parent categories are not allowed.

**Magento Category** – Select the Magento store category to map.

**eBay Category** – Select the corresponding eBay category.

**eBay Store Category** – If the admin has custom eBay store categories, select the matching store category for mapping.

**Attribute Set** – Select the attribute set assigned to products in this mapped category.

**Note:** If category mapping is incorrect, products will not synchronize properly between Magento 2 and eBay.

![ebay-map-category-form](/images/webkul-logo.png)

## Category Automation

**eBay Magento Connect > Category Automation**

The Category Automation feature fetches real-time eBay categories, creates the matching Magento category hierarchy, and maps selected leaf categories to eBay in a single workflow.

![ebay-category-automation](/images/webkul-logo.png)

**eBay Parent Category** – Filter the category list by a specific eBay parent category, or choose **All Categories** to browse the full taxonomy.

**Mode** – Choose **Create + Auto Map** to create Magento categories and map them to eBay in one step. Choose **Create Only** to create categories without creating the eBay mapping.

**Attribute Set** – Select the attribute set assigned to categories created during automation.

**Overwrite Existing Mapping** – When checked, replaces any existing eBay-to-Magento category mapping for the selected categories.

**Load Real-Time eBay Categories** – Fetches the latest category list directly from the eBay API based on the selected filters.

**Run for Selected Categories** – Executes automation for the leaf categories selected in the grid below.

Use the search bar to filter by **Category ID / Name / Path**, then select one or more **leaf** categories from the grid. After automation completes, a summary popup displays counts for **Created**, **Reused**, **Mapped**, **Skipped**, and **Conflicts**.

![ebay-category-automation-results](/images/webkul-logo.png)

**Note:** Only leaf eBay categories can be selected for automation, since product listings are assigned to terminal categories in the eBay taxonomy.

## Map Product

**eBay Magento Connect > Map Product**

The admin synchronizes products between Magento 2 and eBay from this section. The **Sync From eBay** dropdown provides import, profiler, export, and migration actions.

![ebay-map-product-sync-options](/images/webkul-logo.png)

### Import Product from eBay

1. Navigate to **eBay Magento Connect > Map Product**.
2. From **Sync From eBay**, select **Import Product From eBay**.
3. In the popup, configure the import filters and click **Import Product From eBay**.

**End Date From** – Earliest date for the end-listing date range filter (must be within 120 days).

**End Date To** – Latest date for the end-listing date range filter. Required when **End Date From** is specified.

**SKUs (comma separated)** – Optional. Enter one or more eBay SKUs (for example, `24-WB04,24-WB06`) to import only those listings. Leave blank to import using pagination logic.

**Import Only eBay Active Products** – When checked, only actively listed eBay products are imported.

![ebay-import-product-popup](/images/webkul-logo.png)

### Run eBay Product Profiler

1. After importing product data, select **Run eBay Product Profiler** from the **Sync From eBay** dropdown.
2. The profiler creates catalog product entries in Magento 2 from the imported database records.
3. Once complete, imported products become visible on the storefront.

![ebay-product-profiler](/images/webkul-logo.png)

### Run eBay Product Image Profiler

1. Select **Run eBay Product Image Profiler** from the **Sync From eBay** dropdown.
2. The profiler downloads and assigns product images to imported catalog products.
3. After completion, product images appear on the Magento storefront.

![ebay-product-image-profiler](/images/webkul-logo.png)

### Export Product to eBay

1. Select **Export to eBay** from the **Sync From eBay** dropdown.
2. In the popup, enter a product **SKU** to export a single product, or leave the field empty to export all visible products.
3. Click **Export Product To eBay**.

**Note:** Visible products are those with visibility set to Catalog, Search, Catalog/Search, or Search only. Products set to **Not Visible Individually** are not exported.

![ebay-export-product-popup](/images/webkul-logo.png)

### Migrate Listing By ID

1. Select **Migrate Listing By ID** from the **Sync From eBay** dropdown.
2. Enter one listing ID or up to five comma-separated listing IDs.
3. Click **Migrate** to submit the bulk migration request via the eBay Sell Inventory API.

**Listing ID(s)** – Enter eBay listing IDs to migrate specific listings without using date-range or SKU-based import.

![ebay-bulk-migrate-listing](/images/webkul-logo.png)

### Export via Catalog Product Grid

1. Navigate to **Catalog > Products**.
2. Select the products to export.
3. From the **Actions** dropdown, choose **Export to eBay**.

![ebay-catalog-grid-export](/images/webkul-logo.png)

### Bulk Assign Categories

1. On the **Map Product** grid, select imported products.
2. From the **Actions** dropdown, choose **Assign To Category**.
3. Select the Magento category to assign in bulk.

![ebay-bulk-assign-category](/images/webkul-logo.png)

## Export Queue Log

**eBay Magento Connect > Export Queue Log**

Monitor the status of each queued product export. Products remain in **Pending** status until the background cron or message queue consumer processes them.

![ebay-export-queue-log](/images/webkul-logo.png)

- **ID** – Unique queue log record ID.
- **Product SKU** – SKU of the product being exported.
- **Product Name** – Name of the product being exported.
- **Status** – Current export status: **Pending**, **Success**, or **Failed**.
- **eBay Item ID** – The eBay listing ID assigned after a successful export.
- **Error Message** – Error details when an export fails.
- **Attempts** – Number of export retry attempts.
- **Bulk Task ID** – Links the queue entry to a bulk export task when exported via the Feed API.
- **Created At / Updated At** – Timestamps for when the export was queued and last updated.

**Mass Actions:**

- **Retry Export** – Re-queues selected failed or pending exports.
- **Delete** – Removes selected log records.

## Bulk Export Tasks

**eBay Magento Connect > Bulk Export Tasks**

When **Use Bulk Feed API** is enabled, products export in batches via the eBay Sell Feed API. Monitor batch job progress from this screen.

![ebay-bulk-export-tasks](/images/webkul-logo.png)

- **ID** – Internal bulk export task ID.
- **eBay Task ID** – Task identifier returned by the eBay Feed API.
- **Feed Type** – The feed operation type (for example, `LMS_ADD_FIXED_PRICE_ITEM`).
- **Status** – Batch processing status: **Created**, **Uploaded**, **In Process**, **Completed**, **Completed With Errors**, or **Failed**.
- **Total Items** – Total number of products in the batch.
- **Success** – Number of products successfully exported.
- **Failures** – Number of products that failed during export.
- **Error Message** – Error details when the batch task fails.
- **Result File** – Download link for the eBay result file after processing completes.

## Listing Templates

**eBay Magento Connect > Listing Templates**

The admin creates reusable HTML or text listing templates for eBay product descriptions. Template variables are mapped to Magento product attributes so exported listings include dynamic product data.

![ebay-listing-templates-list](/images/webkul-logo.png)

To add a template:

1. Click **Add Template**.
2. Enter the template details and save.

**Title** – Name of the listing template.

**Content** – HTML or plain text content for the eBay item description. Use template variables mapped to product attributes.

**Status** – Enable or disable the template.

**Template Variables** – Map Magento product attributes to variables used within the template content.

![ebay-listing-template-form](/images/webkul-logo.png)

After products are exported with a template, the mapped variable values appear in the product description on both Magento and eBay.

![ebay-listing-template-product-description](/images/webkul-logo.png)

## Price Rules

**eBay Magento Connect > Price Rules**

The admin creates price rules that adjust product prices during import or export based on the **eBay Price Rule Applicable For** configuration setting.

![ebay-price-rules-list](/images/webkul-logo.png)

To create a price rule:

1. Click **Add Rule**.
2. Fill in the rule details and save.

**Product price From** – Minimum product price for which the rule applies.

**Product price To** – Maximum product price for which the rule applies.

**Operation Type** – Select **Percentage** or **Fixed Amount** as the adjustment type.

**Operation** – Select **Increase** or **Decrease** to add or subtract from the product price.

**Price** – The amount or percentage applied when the rule matches.

**Status** – Enable or disable the price rule.

![ebay-price-rule-form](/images/webkul-logo.png)

**Note:** When price rules are set for export, the same rule acts inversely during import, and vice versa.

## eBay Specifications and Conditions

At the time of category mapping, eBay product conditions and specifications are created as Magento product attributes. Attribute labels include the eBay category name from which they originated.

The admin can view and edit **eBay Product Conditions** and **eBay Specifications** on the product edit page under the **eBay** section.

![ebay-product-conditions](/images/webkul-logo.png)

![ebay-product-specifications](/images/webkul-logo.png)

**eBay Shipping Cost** – Set or review the flat shipping charge for the product. This value is exported to eBay as Shipping & Handling charges and is used on the Magento storefront when the **eBay Product Shipping** carrier is enabled.

![ebay-shipping-cost-product-form](/images/webkul-logo.png)

## Map eBay Order

**eBay Magento Connect > Map eBay Order**

Before synchronizing orders, ensure all products and categories are synchronized from eBay to Magento 2.

### Import Order from eBay

1. Navigate to **eBay Magento Connect > Map eBay Order**.
2. Click **Import Order from eBay**.
3. Enter the date range and click **Import Order from eBay**.

Only orders matching the configured **eBay Import Order** statuses are imported. If an eBay product is not synced with Magento 2, the system displays an error.

![ebay-import-order-popup](/images/webkul-logo.png)

### Run eBay Order Profiler

1. After importing order data, click **Run eBay Order Profiler**.
2. The profiler creates Magento orders from the imported eBay order records.
3. A summary shows how many orders were imported and how many remain.

![ebay-order-profiler](/images/webkul-logo.png)

**Note:** A cron job automatically imports orders from eBay. When the admin creates shipments in Magento 2, tracking information is synchronized to the corresponding eBay order in real time.

![ebay-mapped-orders-list](/images/webkul-logo.png)

## Real Time Missed Orders

**eBay Magento Connect > Real Time Missed Orders**

This section displays orders that could not be imported in real time, typically due to missing address details or incomplete product mapping.

![ebay-real-time-missed-orders](/images/webkul-logo.png)

The admin can review missed order records, resolve mapping or address issues, and re-import affected orders manually.

## Manage Product and Order Synchronization

**eBay Magento Connect > Map Product** and **eBay Magento Connect > Map eBay Order**

The admin manages all synchronization activity from the Map Product and Map eBay Order grids. Each grid shows imported and exported records with sync status, eBay Item IDs, and Magento entity references.

### Product Sync Statuses

- **Imported** – Product data fetched from eBay and stored in the Magento database.
- **Profiled** – Catalog product created in Magento 2 via the product profiler.
- **Exported** – Product successfully listed on eBay.
- **Failed** – Sync or export failed; check **Export Queue Log** for error details.

### Export Queue Statuses

- **Pending** – Export queued and awaiting background processing.
- **Success** – Product exported successfully with an eBay Item ID.
- **Failed** – Export failed; use **Retry Export** mass action to re-queue.

### Bulk Export Task Statuses

- **Created** – Batch task created and awaiting upload.
- **Uploaded** – Feed file uploaded to eBay.
- **In Process** – eBay is processing the batch.
- **Completed** – All products in the batch exported successfully.
- **Completed With Errors** – Batch completed with some failures; download the result file for details.
- **Failed** – Batch task failed entirely.

### Order Import Workflow

1. Import order data from eBay using a date range.
2. Run the eBay Order Profiler to create Magento orders.
3. Process shipments in Magento 2; tracking syncs to eBay automatically.
4. Review **Real Time Missed Orders** for any orders that failed real-time import.

![ebay-sync-management-overview](/images/webkul-logo.png)

## **eBay Product Shipping at Storefront**

Although eBay Connector is primarily an admin integration module, customers interact with synced shipping data at Magento checkout when the **eBay Product Shipping** carrier is enabled.

### Navigation

**Shopping Cart** and **Checkout** – Shipping method selection step.

### Checkout Workflow

1. The customer adds eBay-imported products (with **eBay Shipping Cost** values) to the cart.
2. On the cart or checkout shipping step, the customer enters a shipping address and requests shipping rates.
3. **eBay Product Shipping – eBay Shipping** appears as an available shipping method with the product-level shipping cost applied.
4. The customer selects the method and completes checkout.
5. On the admin order view page, **Shipping & Handling Information** shows **eBay Product Shipping – eBay Shipping** with the synced cost.

![ebay-product-shipping-cart](/images/webkul-logo.png)

![ebay-product-shipping-checkout](/images/webkul-logo.png)

![ebay-product-shipping-admin-order](/images/webkul-logo.png)

## Guest User Support

**No** – eBay Connector does not provide a separate guest-facing workflow. All import, export, category mapping, and order synchronization is managed from the Magento 2 admin panel. Customers purchase eBay-imported products through the standard Magento storefront checkout without needing eBay account credentials.

## eBay Motors Integration

The module supports [eBay Motors](https://www.ebay.com/rpp/geo-parts-accessories-motors) integration for automotive parts and accessories sellers.

1. Navigate to **Store > Configuration > Webkul > eBay Magento Connect > General Settings** and select **eBay Motors** under **eBay Global Sites**.
2. Import eBay Motors categories from the category import section.
3. Map eBay Motors categories to Magento store categories under **Map Category**.
4. Import and export products using the same **Map Product** workflow described above.

![ebay-motors-configuration](/images/webkul-logo.png)

![ebay-motors-category-mapping](/images/webkul-logo.png)

---

If you still have any issues, feel free to add a ticket and let us know your views to make the module better: [http://webkul.uvdesk.com/](http://webkul.uvdesk.com/)

Current Product Version - 4.0.8

Supported Framework Version - Magento 2.0.x, 2.1.x, 2.2.x, 2.3.x, 2.4.x

![author-thumb](/images/webkul-logo.png)

nirupama shree
