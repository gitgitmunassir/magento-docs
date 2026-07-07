# Guide for Magento 2 Recurring Plans for Discount

Updated 19 June 2026

[Live Demo](https://magento2demo.webkul.in/recurring-plans-discount/) [Buy Now](https://store.webkul.com/magento2-recurring-plans-for-discount.html)

The Magento 2 Recurring Plans for Discount extension lets store owners sell subscription-based discount plans to registered customers. Customers pay a recurring fee on a weekly, monthly, or yearly cycle and receive an automatic percentage discount on their store orders for as long as the subscription remains active.

The admin can create and manage multiple discount plans, configure PayPal Express Checkout and Stripe as recurring payment methods, and track every customer subscription from the admin panel. Renewal reminders and purchase confirmation emails keep customers informed throughout the subscription lifecycle.

The extension is compatible with Adobe Commerce and Magento Open Source 2.4.x and integrates with the standard checkout flow, customer account area, and Webkul admin configuration panel.

### Features

- The admin can enable or disable the recurring discount functionality for the entire store from the configuration panel.
- The admin can create recurring discount plans with a name, price, discount percentage, billing cycle, description, and status.
- The admin can enable, disable, or delete multiple discount plans at once using mass actions on the plans grid.
- The admin can view all customer subscriptions in a dedicated grid with plan details, order references, payment identifiers, and renewal dates.
- The admin can configure PayPal Express Checkout as a recurring payment method with sandbox support and country restrictions.
- The admin can configure Stripe as a recurring payment method with API keys, sandbox mode, and one-click webhook generation.
- The admin can choose email templates for subscription renewal reminders and plan purchase confirmation messages.
- Customer can browse available discount plans from **My Account > Discount Plans > Current Discount Plans**.
- Customer can subscribe to a plan, complete checkout using PayPal or Stripe, and activate recurring billing.
- Customer can view active and inactive subscriptions along with the next order date from **My Account > Discount Plans > My Subscribed Plans**.
- Customer can cancel an active subscription from the subscribed plans page; the subscription cycle is closed upon confirmation.
- The store owner can offer weekly, monthly, or yearly billing cycles for each discount plan.
- Customer receives an automatic cart discount on store orders based on the percentage defined in their active subscription plan.
- The store owner can restrict recurring PayPal and Stripe payments to specific countries when required.

### Installation

### #1 Download Module

Firstly, you need to log in to Webkul Store, go to **My Account** > **My Purchased Products**
section, verify and then download and extract the contents of this zip folder on the system.

### #2 Upload Folder

Once the module zip is extracted, follow path **src > app** and then copy the **app** folder
into the **Adobe Commerce root** directory on the server as shown below:

![magento2-recurringplanfordiscount-installation-upload-folder](/images/webkul-logo.png)

### #3 Run Commands

After uploading the module folder, you need to run the following commands in the
Magento 2 root directory:

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

For translating the module language, navigate through
**src/app/code/Webkul/RecurringPlanForDiscount/i18n** and edit the `en_US.csv` file.

Thereafter, rename the CSV as `de_DE.csv` (replace with your target locale code) and
translate all right-side content after the comma into the target language.
After editing the CSV, save it.

![magento2-recurringplanfordiscount-i18n-folder](/images/webkul-logo.png)

Now upload the renamed CSV back to the path
**src/app/code/Webkul/RecurringPlanForDiscount/i18n** on the server.

The module will now render in the target language. It supports both RTL and LTR languages.

![magento2-recurringplanfordiscount-csv-translation-example](/images/webkul-logo.png)

### Recurring Discount Settings Configuration

The admin will navigate through **Stores > Configuration > Recurring Discount Settings** to make a general configuration.

![magento2-recurringplanfordiscount-admin-configuration](/images/webkul-logo.png)

**Enable Recurring Discounts** – When set to **Yes**, the recurring discount module is active on the storefront and in the customer account area. When set to **No**, discount plan pages, subscription management, and related frontend navigation are hidden from customers.

**Renewal Reminder Email Template** – Select the transactional email template used to notify customers before their subscription renewal date. Choose a template from the Magento email template list that matches your store branding and renewal messaging.

**Plan Purchase Confirmation Email Template** – Select the email template sent to the customer after they successfully purchase a discount plan. This confirms subscription activation and plan details.

The admin will also configure payment methods under **Stores > Configuration > Sales > Payment Methods**.

**Enable this Solution** (PayPal) – When set to **Yes**, the Webkul Recurring Discount PayPal Express Checkout payment method appears at checkout for subscription plan orders. When set to **No**, customers cannot pay for plans using PayPal.

**Sandbox Mode** (PayPal) – When set to **Yes**, PayPal transactions are processed in the sandbox environment for testing. When set to **No**, live PayPal credentials are used for real payments.

**Title** (PayPal) – Enter the label displayed to customers for the PayPal payment option during checkout.

**PayPal Client Id** – Enter the PayPal REST API Client ID from your PayPal developer account. This is required when the PayPal payment method is enabled.

**PayPal Secret Key** – Enter the PayPal REST API Secret Key paired with the Client ID. The value is stored encrypted in Magento configuration.

**Payment from Applicable Countries** (PayPal) – Choose **All Allowed Countries** to accept PayPal payments from any country allowed by your store, or **Specific Countries** to restrict availability.

**Payment from Specific Countries** (PayPal) – When **Payment from Applicable Countries** is set to **Specific Countries**, select one or more countries from which PayPal recurring payments are accepted.

**Sort Order** (PayPal) – Enter a numeric value to control the display order of the PayPal payment method relative to other payment options at checkout.

**Enable this Solution** (Stripe) – When set to **Yes**, the Webkul Recurring Discount Stripe payment method is available at checkout for subscription orders. When set to **No**, Stripe is hidden as a payment option.

**Title** (Stripe) – Enter the label shown to customers for the Stripe payment method during checkout.

**Sandbox Mode** (Stripe) – When set to **Yes**, Stripe test API keys and the test environment are used. When set to **No**, live Stripe credentials process real transactions.

**API Publishable Key** (Stripe) – Enter the Stripe publishable API key for the selected mode (test or live). This key is used on the frontend during payment authorization.

**API Secret Key** (Stripe) – Enter the Stripe secret API key for server-side subscription and webhook operations. The value is stored encrypted in Magento configuration.

**Payment from Applicable Countries** (Stripe) – Choose **All Allowed Countries** or **Specific Countries** to control where the Stripe payment method is offered.

**Payment from Specific Countries** (Stripe) – When country restriction is enabled, select the countries from which Stripe recurring payments are accepted.

**Sort Order** (Stripe) – Enter a numeric value to set the display position of the Stripe payment method among other checkout options.

**Generate Webhooks** (Stripe) – Click this button after saving valid Stripe API credentials to automatically register the required Stripe webhook endpoints with your store. Webhooks keep subscription status in sync when payments succeed, fail, or are cancelled in Stripe.

Lastly, the admin will save the configuration by tapping the **Save Config** button
at the top right-hand corner.

### Manage Recurring Discount Plans

The admin can navigate to **Recurring Plan For Discount > Manage Recurring Discount Plans** to create, edit, and manage all discount subscription plans.

![magento2-recurringplanfordiscount-manage-plans-grid](/images/webkul-logo.png)

The plans grid displays the following columns: **ID**, **Plan Code**, **Plan Name**, **Discount (%)**, **Price**, and **Status**. Filters are available above the grid for each column. Row actions include **Edit**. The **Add New Plan** button at the top opens the plan creation form. Mass actions in the **Actions** dropdown allow the admin to **Enable**, **Disable**, or **Delete** selected plans in bulk, each with a confirmation prompt.

When the admin opens a plan for creation or editing, the **Plan Details** form is displayed with fields for defining the subscription offering.

![magento2-recurringplanfordiscount-manage-plans-detail](/images/webkul-logo.png)

**Plan Name** – Enter the display name of the discount plan shown to customers on the storefront.

**Plan Price** – Enter the recurring subscription fee charged to the customer each billing cycle. This must be a numeric value.

**Discount (%)** – Enter the percentage discount applied to the customer's cart on regular store orders while the subscription is active.

**Cycle Type** – Select the billing frequency for the plan. Available options are **Weekly**, **Monthly**, and **Yearly**.

**Description** – Enter a rich-text description of the plan benefits and terms using the WYSIWYG editor. This content appears on the plan detail page.

**Status** – Set the plan to **Enabled** to make it available for customer subscription, or **Disabled** to hide it from the storefront while retaining the record in admin.

The form includes **Save Plan**, **Delete Plan**, and **Back** buttons. Saving a plan automatically creates or updates the associated catalog product used for checkout.

**Note:** A customer can subscribe to only one plan at a time, and a subscription plan cannot be added to the cart alongside other store products.

### Manage Recurring Discount Subscriptions

The admin can navigate to **Recurring Plan For Discount > Manage Recurring Discount Subscriptions** to monitor all customer subscription records.

![magento2-recurringplanfordiscount-manage-subscriptions-grid](/images/webkul-logo.png)

The subscriptions grid lists every customer subscription with the following columns: **ID**, **Customer Name**, **Plan Name**, **Order Increment ID**, **Status**, **Discount Percent**, **Frequency**, **Next Order Date**, **Updated At**, **Reference Profile ID**, **Stripe Customer ID**, **Subscription Item ID**, and **Payment Code**. Filter fields are available above the grid for text, select, and date-range filtering on each column. Pagination controls allow browsing large subscription lists.

This view is read-only and serves as the central place for the admin to verify active subscriptions, upcoming renewal dates, payment gateway references, and subscription status across PayPal and Stripe customers.

**Note:** Customers cancel subscriptions from the storefront; cancelled subscriptions appear with an inactive status in this grid.

### Subscribe to Discount Plans – Magento 2 Recurring Plans for Discount

On the Magento 2 storefront, the customer will navigate to **My Account > Discount Plans > Current Discount Plans** to access this feature.

1. Log in to the customer account and open **My Account > Discount Plans > Current Discount Plans**. The page displays all enabled plans as cards showing the plan name, discount percentage, billing cycle, and price.

![magento2-recurringplanfordiscount-customer-plans-list](/images/webkul-logo.png)

2. Click a plan card to open its detail page, or tap **Subscribe Now** directly from the listing. The detail page shows the plan code, discount, billing cycle, price, and full description.

![magento2-recurringplanfordiscount-customer-plan-detail](/images/webkul-logo.png)

3. Tap **Subscribe Now** to add the plan to the cart. The customer is redirected to the checkout page. Only one subscription plan can be in the cart at a time, and no other products can be added with it.

![magento2-recurringplanfordiscount-customer-checkout](/images/webkul-logo.png)

4. Select **Webkul Recurring Discount PayPal Express Checkout Payment Method** or **Webkul Recurring Discount Stripe Payment Method** as the payment option, complete billing details, and tap **Place Order**. For PayPal, the customer is redirected to PayPal to authorize recurring billing before returning to the store.

![magento2-recurringplanfordiscount-customer-payment](/images/webkul-logo.png)

5. After successful payment, the subscription is activated and the configured purchase confirmation email is sent to the customer. The plan discount is automatically applied to subsequent store orders while the subscription remains active.

![magento2-recurringplanfordiscount-customer-order-confirmation](/images/webkul-logo.png)

#### My Subscribed Plans

On the Magento 2 storefront, the customer will navigate to **My Account > Discount Plans > My Subscribed Plans** to view and manage active subscriptions.

![magento2-recurringplanfordiscount-customer-subscriptions-list](/images/webkul-logo.png)

The subscribed plans table shows **Plan Code**, **Plan Name**, **Discount (%)**, **Frequency**, **Next Order Date**, **Status**, **Created At**, and **Actions**. Active subscriptions display an **Unsubscription** link in the Actions column.

1. Open **My Account > Discount Plans > My Subscribed Plans** to review all current and past subscriptions.

2. To cancel an active subscription, click **Unsubscription** in the Actions column. A confirmation dialog asks whether to proceed; confirming closes the subscription cycle and updates the status to cancelled.

![magento2-recurringplanfordiscount-customer-cancel-subscription](/images/webkul-logo.png)

**Note:** If the customer has no subscriptions, the page displays a message indicating that no active subscriptions exist yet.

### Manage Subscriptions – Admin

The admin can navigate to **Recurring Plan For Discount > Manage Recurring Discount Subscriptions** to view, filter, and audit all subscription records submitted by customers.

Use the grid filters to locate subscriptions by customer name, plan name, order ID, status, frequency, next order date, or payment gateway reference. Review the **Next Order Date** column to identify upcoming renewals, and cross-reference **Payment Code**, **Reference Profile ID**, and **Stripe Customer ID** when troubleshooting payment issues with PayPal or Stripe.

Subscription renewals and recurring order creation are handled automatically by the module's scheduled tasks once a customer completes the initial subscription purchase.

### Support

That is all about the **Magento 2 Recurring Plans for Discount** extension. If you have any queries
regarding the plugin, please contact us at
[Webkul Support System](https://webkul.uvdesk.com/en/customer/create-ticket/).

You can also check our complete [Magento 2 extensions](https://store.webkul.com/Magento-2.html).

Current Product Version – 4.0.0

Supported Framework Version – Magento 2.4.6, Magento 2.4.7, Magento 2.4.8

[![author-thumb](/images/webkul-logo.png)](https://webkul.com/about/)

Webkul
