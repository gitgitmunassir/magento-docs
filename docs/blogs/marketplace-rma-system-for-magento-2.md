# User Guide of Marketplace RMA System for Magento 2

Updated 7 July 2026

[Buy Now](https://store.webkul.com/magento2-marketplace-rma-system.html)

[Blog Overview](https://webkul.com/blog/magento2-marketplace-rma-system/)

The **Webkul Marketplace RMA System** (`Webkul_MpRmaSystem`) extends multi-vendor returns for Magento 2. Customers, guests, sellers, and admins can create and manage Return Merchandise Authorization (RMA) requests per seller on marketplace orders.

This guide covers the **new advanced features** ported from the single-store RMA module, adapted for marketplace multiseller workflows.

## Introduction

### Who Uses What

| Actor | Capabilities |
| ----- | ------------ |
| **Admin** | Global configuration, analytics dashboard, RMA grid, fraud badges, wallet refunds |
| **Seller** | Seller-scoped RMA list, analytics, optional custom workflow/fraud rules |
| **Customer** | Create RMA from account, order history popup, wallet resolution option |
| **Guest** | Create RMA with order reference and email verification |

### Admin Menu Structure

After enabling the module, open **Marketplace → RMA System**:

| Menu Item | Path | Purpose |
| --------- | ---- | ------- |
| Manage RMA Reasons | `mprmasystem/reasons` | CRUD for return reasons |
| RMA Configuration | `mprmasystem/configuration/index` | General, Workflow, Fraud, and Wallet tabs |
| RMA Analytics | `mprmasystem/analytics/index` | Dashboard charts **and** full RMA management grid |

**Note:** The RMA management grid has been moved from **Manage RMA** to the **RMA Analytics** page. The legacy URL `mprmasystem/rma/index` redirects automatically.

### Module Dependencies

- Requires **Webkul_Marketplace** (`webkul/module-marketplace`)
- **Wallet refunds** require **Webkul_MpWalletSystem** (or Walletsystem) when using Refund to Wallet

## Features of Marketplace RMA System

The following advanced features have been added to **Webkul_MpRmaSystem**, ported from the single-store RMA module and adapted for multi-vendor marketplace workflows.

### Feature Summary

| Feature | Admin | Seller | Customer | Status |
| ------- | ----- | ------ | -------- | ------ |
| Automated Workflow Rules | ✓ | Optional override | — | Available |
| Fraud Detection & Risk Scoring | ✓ | View badge | — | Available |
| Analytics Dashboard | ✓ Global | ✓ Scoped | — | Available |
| RMA Grid on Analytics Page | ✓ | — | — | Available |
| Wallet Credit Refunds | ✓ | ✓ | ✓ | Requires MpWalletSystem |
| Seller Workflow/Fraud Config | Enable toggle | ✓ | — | Available |
| Quick Order Cancellation Popup | — | — | ✓ | Available |
| REST & GraphQL API Parity | Planned | Planned | Planned | Roadmap |

### Automated Workflow Rules Engine

Automatically evaluate new RMA requests against configurable rules:

- **Auto-approve** when order age, reason, resolution type, customer group, and price range match
- **Auto-decline** or route to manual review when rules fail
- **Pending RMA alerts** — hourly cron emails admin and seller when RMAs exceed configured hours
- **Fraud bypass** — high-risk customers skip auto-approve when manual review is enabled
- Sets `rma_pending_notification` flag for seller navigation badge

**Admin path:** Marketplace → RMA System → RMA Configuration → **Workflow** tab

### Fraud Detection & Risk Scoring

Customer return frequency is scored across all sellers (customer-global):

- Rolling window count against configurable limit and period
- `risk_level` and `risk_score` stored on each RMA record
- Color-coded **Risk Level** column on admin RMA grid
- Read-only risk badge on seller RMA list
- Optional admin email alert on high-risk submission

### Analytics & Reporting Dashboard

**Admin:** Global statistics with interactive charts, stat cards, and the full **Manage RMA** grid on one page.

**Seller:** Seller-scoped analytics filtered by `seller_id` — same metrics but only for the logged-in seller's RMAs.

### Wallet Credit Refunds

Integrates with **Webkul MpWalletSystem** for marketplace wallet refunds:

- New resolution type: **Refund to Wallet**
- Admin **Wallet** configuration tab with enable, customer groups, auto-credit rules
- **Refund In Wallet** button for admin and seller
- Auto-credit on workflow approval when configured
- Standard offline refund remains available when configured

### Seller-Level Configuration

When enabled by admin, sellers can customize workflow and fraud rules per account. Settings persist in dedicated seller config tables with a `use_custom_config` toggle.

### Quick Order Cancellation Popup

Customers can initiate returns from **My Account → My Orders** and the **Order View** page. The modal supports item selection, quantities, reasons, resolution types, and **multi-seller** orders.

### Notification Count Management

Seller notification badge uses dedicated `rma_pending_notification` column instead of deriving count from RMA `status`, matching the Marketplace feedback notification pattern.

### Marketplace-Specific Rules

1. **One RMA per seller** per request on multi-seller orders
2. **Fraud scoring** is customer-global across all sellers
3. **Analytics** admin = global; seller = filtered by `seller_id`
4. **Wallet credit** uses MpWalletSystem credit memo observer for seller payout handling

## Installation of Marketplace RMA System

Customers receive a **zip folder**. Extract it on your system — the archive contains an **app** folder with the module at `app/code/Webkul/MpRmaSystem`.

Transfer the **app** folder into your Magento 2 root directory so the module path is:

```
app/code/Webkul/MpRmaSystem/
```

### Prerequisites

- Magento 2.4.x (Open Source or Adobe Commerce)
- **Webkul Marketplace** module installed and enabled
- PHP 8.1+ (per your Magento version requirements)

### Install Commands

Run from the Magento root directory:

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento indexer:reindex
php bin/magento cache:flush
```

### Verify Installation

1. Log in to **Magento Admin**.
2. Confirm **Marketplace → RMA System** appears in the left menu.
3. Open **Stores → Configuration** and locate **Marketplace RMA System** section.
4. Set **Enable** to **Yes** and save.

For Adobe Commerce / Enterprise, use the mirrored module at `app/code/Webkul/Enterprise/MpRmaSystem/`.

For support policy visit [Webkul Support](https://store.webkul.com/support.html/).

## Quick Start — Marketplace RMA in 10 Minutes

### The Big Picture

| Step | Task |
| ---- | ---- |
| 1 | Install & enable module |
| 2 | Configure general RMA settings |
| 3 | Set up workflow rules |
| 4 | Enable fraud detection |
| 5 | Review analytics & manage RMAs |

### Step 1 — Install the Module

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento indexer:reindex
php bin/magento cache:flush
```

Confirm **Marketplace → RMA System** appears in the admin menu.

### Step 2 — Enable RMA & General Settings

1. Go to **Stores → Configuration → Marketplace RMA System** (or **Marketplace → RMA System → RMA Configuration**).
2. Enable the module and set return window days, allowed product types, and email templates.
3. Save configuration.

![General settings](/images/mprmasystem/general_settings_configuration.png)

### Step 3 — Configure Automated Workflow

1. Open **Marketplace → RMA System → RMA Configuration**.
2. Select the **Workflow** tab.
3. Enable the workflow engine, set auto-approve rules, and configure pending alert hours.
4. Save.

![Workflow configuration](/images/mprmasystem/automated_workflow_configuration.png)

### Step 4 — Enable Fraud Detection

1. On the same configuration page, open the **Fraud** tab.
2. Enable fraud detection, set return limit and rolling period.
3. Configure manual review bypass and admin notifications.
4. Save.

![Fraud detection configuration](/images/mprmasystem/rma_fraud_detection_configuration.png)

### Step 5 — Open Analytics & Manage RMAs

1. Go to **Marketplace → RMA System → RMA Analytics**.
2. Review refund, pending, and declined stat cards.
3. Scroll down to the **Manage RMA** grid to view, filter, and edit RMA requests.

![Admin analytics and RMA grid](/images/mprmasystem/rma_analytics_adminend.png)

### Optional — Wallet Refunds

If **Webkul MpWalletSystem** is installed:

1. Open the **Wallet** tab under RMA Configuration.
2. Enable wallet refunds and configure auto-credit rules.
3. Customers can select **Refund to Wallet** when creating an RMA.

![Wallet configuration](/images/mprmasystem/rma_wallet_configuration.png)

### Validation Checklist

- Customer can create RMA from **My Account → My Returns**
- Seller sees RMA in marketplace seller panel with risk badge when applicable
- Auto-approve fires when workflow rules match
- Analytics dashboard loads charts and RMA grid on one page
- High-risk customer RMA shows fraud badge on admin grid

## General Settings Configuration

Configure core RMA behavior from the admin panel before enabling advanced workflow and fraud features.

### Access

**Marketplace → RMA System → RMA Configuration** → **General Settings** tab

Or: **Stores → Configuration → Marketplace RMA System**

![General settings configuration](/images/mprmasystem/general_settings_configuration.png)

### Key Settings

| Setting | Description |
| ------- | ----------- |
| **Enable RMA** | Master switch for the marketplace RMA module |
| **Return Window (Days)** | Number of days after order delivery customers can request returns |
| **Allowed Product Types** | Product types eligible for RMA (simple, configurable, etc.) |
| **Email Templates** | Templates for new RMA, updates, messages, and alerts |
| **Allow Seller Workflow Config** | Let sellers override global workflow rules |
| **Allow Seller Fraud Config** | Let sellers override global fraud detection rules |

### Configuration Tabs

| Tab | Purpose |
| --- | ------- |
| General Settings | Core module enablement and return policies |
| Workflow | Automated approve/decline rules and pending alerts |
| Fraud | Risk scoring and high-return customer detection |
| Wallet | Refund to Wallet rules (visible when wallet module installed) |

## Automated Workflow Configuration

The workflow rules engine evaluates each new RMA against admin-defined criteria and can auto-approve, route to manual review, or trigger pending alerts.

### Access

**Marketplace → RMA System → RMA Configuration** → **Workflow** tab

![Automated workflow configuration](/images/mprmasystem/automated_workflow_configuration.png)

### Configuration Options

| Option | Description |
| ------ | ----------- |
| **Enable Workflow Engine** | Master switch for automated workflow processing |
| **Auto Approve** | Automatically approve RMAs matching all configured rules |
| **Order Age (Days)** | Maximum order age for auto-approval eligibility |
| **Allowed Reasons** | RMA reasons that qualify for auto-approve |
| **Allowed Resolution Types** | Refund, Replace, Cancel Items, or Wallet |
| **Customer Groups** | Groups eligible for auto-approve |
| **Price Range** | Min/max order value for auto-approve |
| **Pending Alert Hours** | Hours before pending RMA triggers alert email |
| **Enable Pending Alert** | Send alert emails to admin and seller |

### How It Works

1. Customer or guest submits RMA → workflow processor runs after save.
2. **Fraud detection** runs first — high-risk customers may bypass auto-approve.
3. If rules match → status and `seller_status` update; `rma_pending_notification = 1` for seller badge.
4. Notification emails sent to customer, seller, and admin.
5. **Cron job** (`mprmasystem_pending_rma_alert`) runs hourly for overdue pending RMAs.

### Email Templates

| Template | Trigger |
| -------- | ------- |
| `mprmasystem_workflow_auto_action` | Auto-approve or auto-decline action |
| `mprmasystem_workflow_alert` | Pending RMA exceeds alert threshold |

When **Allow Seller Workflow Config** is enabled, sellers can define custom workflow rules from their dashboard.

## Fraud Detection Configuration

Fraud detection scores customers by return frequency and flags high-risk RMAs for manual review and admin notification.

### Access

**Marketplace → RMA System → RMA Configuration** → **Fraud** tab

![Fraud detection configuration](/images/mprmasystem/rma_fraud_detection_configuration.png)

### Configuration Options

| Option | Description |
| ------ | ----------- |
| **Enable Fraud Detection** | Master switch for risk scoring |
| **Return Limit** | Number of returns in the period that triggers high risk |
| **Period (Days)** | Rolling window for counting customer returns |
| **Exclude Statuses** | RMA statuses excluded from the return count |
| **Manual Review for High Risk** | Skip auto-approve when customer is high risk |
| **Notify Admin** | Send email alert when high-risk RMA is submitted |

### Risk Scoring Behavior

- Counts are **customer-global** across all sellers (by `customer_id`)
- When count ≥ limit within the rolling period → `risk_level = high`, `risk_score` populated
- Risk badges appear on admin RMA grid (**RMA Analytics** page) and seller RMA list (read-only)

![Seller RMA list with risk score](/images/mprmasystem/seller/rma_list_with_score.png)

Fraud detection runs **before** auto-approve. When **Manual Review for High Risk** is enabled, high-risk customers never receive auto-approval even if other workflow rules match.

Admin alert template: `mprmasystem_fraud_detection_admin_alert`

## Wallet Configuration

Refund to Wallet allows customers to receive marketplace wallet credit instead of a standard payment refund when **Webkul MpWalletSystem** is installed and configured.

### Prerequisites

- **Webkul_MpWalletSystem** (or Walletsystem) installed and enabled
- Wallet module configured with payment methods and seller payout rules

The Wallet tab appears when the wallet module is detected. If wallet is not installed, the tab shows an installation notice with a link to [MpWalletSystem on Webkul Store](https://store.webkul.com/magento2-multi-vendor-wallet.html).

### Access

**Marketplace → RMA System → RMA Configuration** → **Wallet** tab

![Wallet configuration](/images/mprmasystem/rma_wallet_configuration.png)

### Configuration Options

| Option | Description |
| ------ | ----------- |
| **Enable Wallet Refunds** | Allow Refund to Wallet resolution type |
| **Customer Groups** | Groups that can select wallet refund |
| **Auto Credit on Approve** | Automatically credit wallet when RMA is approved/solved |
| **Allow Standard Refund** | Keep offline/payment refund available alongside wallet |
| **Minimum/Maximum Amount** | Optional limits for wallet refund amounts |

### Refund Flows

**Manual Refund In Wallet:** Admin or seller clicks **Refund In Wallet** on the RMA detail page. A credit memo is created and MpWalletSystem credits the customer wallet.

**Auto Credit:** When **Auto Credit on Approve** is enabled, workflow auto-approve or seller solved status triggers wallet credit automatically.

## Analytics Dashboard & RMA Management

The admin **RMA Analytics** page combines the analytics dashboard and the full RMA management grid on a single screen.

### Access

**Marketplace → RMA System → RMA Analytics**

Legacy URL `mprmasystem/rma/index` redirects here automatically.

![Admin analytics dashboard with RMA grid](/images/mprmasystem/rma_analytics_adminend.png)

### Dashboard Sections

**Stat cards:** Total Refund Given, Total Pending, Declined / Canceled — each with value and RMA count.

**Charts:** Return rate trend (last 6 months), resolution type distribution, top return reasons, top returned products and categories.

### Manage RMA Grid

Below the dashboard, the **Manage RMA** section displays the full admin RMA grid:

- Filter and sort all marketplace RMAs
- View **Risk Level** fraud badges
- Open RMA detail for status updates, refunds, and conversation
- Mass actions where configured

Admins can review analytics trends and take action on specific RMAs without switching pages.

| Actor | Data Filter |
| ----- | ----------- |
| Admin | All RMAs across all sellers |
| Seller | `WHERE seller_id = current_seller` |

## Seller Configuration

Marketplace sellers can customize **Workflow** and **Fraud Detection** rules when the admin enables seller-level configuration in general settings.

### Access

**Seller Dashboard → RMA Configuration**

Navigation link appears in the seller account menu when RMA is enabled and seller customization is allowed by admin.

### Workflow Tab

![Seller workflow configuration](/images/mprmasystem/seller/rma_automated_workflow_seller_end.png)

| Setting | Description |
| ------- | ----------- |
| **Use Custom Config** | When off, global admin workflow rules apply |
| **Auto Approve Rules** | Same criteria as admin: order age, reasons, resolution, groups, price |
| **Pending Alert** | Seller-specific pending alert hours and enable toggle |

Settings persist in `marketplace_rma_seller_workflow_config`.

### Fraud Tab

![Seller fraud configuration](/images/mprmasystem/seller/rma_fraud_configuration_seller_end.png)

| Setting | Description |
| ------- | ----------- |
| **Use Custom Config** | When off, global admin fraud rules apply |
| **Manual Review** | Block auto-approve for high-risk customers on this seller's RMAs |
| **Notify Admin** | Alert admin on high-risk submissions for this seller |

Return frequency scoring remains **customer-global** across all sellers. Seller fraud config controls how high-risk RMAs are handled for that seller's requests.

### Admin Prerequisites

Admin must enable in **Stores → Configuration → Marketplace RMA System**:

- **Allow Seller Workflow Config** = Yes
- **Allow Seller Fraud Config** = Yes

## Seller Analytics Dashboard

Sellers view RMA analytics scoped to their own marketplace account — the same metrics as the admin dashboard but filtered by `seller_id`.

### Access

**Seller Dashboard → RMA Analytics**

![Seller analytics dashboard](/images/mprmasystem/seller/rma_analytics_seller_end.png)

### Available Metrics

| Metric | Description |
| ------ | ----------- |
| Total Refund Given | Sum and count of refunds for seller's RMAs |
| Total Pending | Open/pending RMA value and count |
| Declined / Canceled | Declined or canceled RMA totals |
| Return Rate Trend | Monthly return rate over 6 months |
| Resolution Distribution | Breakdown by refund, replace, cancel, wallet |
| Top Reasons | Most common return reasons |
| Top Products & Categories | Highest return volume items |

Seller sees **only** RMAs where `marketplace_rma_details.seller_id` matches their seller account.

## Seller RMA Management

Sellers manage return requests assigned to their marketplace account from the seller dashboard RMA list and detail pages.

### RMA List

**Seller Dashboard → Manage RMA** (or RMA List)

![Seller RMA list with risk score](/images/mprmasystem/seller/rma_list_with_score.png)

| Column | Description |
| ------ | ----------- |
| RMA ID | Unique return request identifier |
| Order Ref | Related order increment ID |
| Customer | Customer name and email |
| Status | Current RMA workflow status |
| Risk Level | Fraud risk badge (read-only) |
| Created Date | Submission timestamp |

### RMA Detail View

![Seller RMA detail view](/images/mprmasystem/seller/view_rma_seller_end.png)

| Action | Description |
| ------ | ----------- |
| **Update Status** | Change seller status (pending, received, dispatched, solved, declined) |
| **Send Message** | Reply in RMA conversation thread |
| **Refund** | Process standard refund when applicable |
| **Refund In Wallet** | Credit customer wallet (when wallet module enabled) |
| **Print RMA** | Generate printable RMA PDF |

The seller navigation shows a pending notification count from `rma_pending_notification = 1`, independent of RMA business status.

Each seller only sees RMAs for their portion of a multi-seller order. Customers create separate RMA requests per seller when returning items from different vendors.
