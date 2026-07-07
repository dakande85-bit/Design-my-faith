# Manual Fulfilment Workflow

## Overview

Mission Merch Studio starts as a manual-fulfilment platform. Customers submit designs and orders. The platform owner reviews artwork, manages production, and updates delivery status.

No automated fulfilment provider is used in the MVP.

## Customer flow

1. Customer chooses product.
2. Customer uploads artwork/logo.
3. Customer adds text/scripture.
4. Customer previews design.
5. Customer submits order.
6. Customer pays later via Stripe Checkout.
7. Order enters artwork review.
8. Admin approves artwork or requests changes.
9. Admin moves order into production.
10. Admin adds shipping/tracking.
11. Customer receives status updates.

## Admin flow

### 1. New order received

Status: `Paid` or `Awaiting Payment`

Admin checks:

- Product
- Quantity
- Size/colour
- Required date
- Delivery address
- Customer notes
- Artwork files

### 2. Artwork review

Status: `Awaiting Artwork Review`

Admin checks:

- File quality
- Image resolution
- Transparent background
- Safe print area
- Text readability
- Spelling
- Scripture reference accuracy if applicable
- Colour contrast
- Whether artwork needs background removal or vectorisation

Possible outcomes:

- `Artwork Approved`
- `Needs Customer Changes`

### 3. Production

Status: `In Production`

Admin records:

- Supplier/printer
- Production cost
- Expected completion date
- Internal notes
- Any issue with print files

### 4. Ready to ship

Status: `Ready to Ship`

Admin checks:

- Item count
- Sizes
- Print quality
- Packaging
- Delivery address

### 5. Shipped

Status: `Shipped`

Admin records:

- Courier
- Tracking number
- Shipped date

### 6. Completed

Status: `Completed`

Order is complete once delivered or confirmed received.

## Status list

- Draft
- Awaiting Payment
- Paid
- Awaiting Artwork Review
- Artwork Approved
- Needs Customer Changes
- In Production
- Ready to Ship
- Shipped
- Completed
- Cancelled
- Refunded

## Admin dashboard columns

Recommended kanban columns:

1. Paid / New
2. Artwork Review
3. Needs Changes
4. In Production
5. Ready to Ship
6. Shipped
7. Completed

## Print quality checklist

Each design should show:

- Image uploaded
- Background checked
- Artwork inside safe area
- Resolution acceptable
- Text readable
- Colour contrast acceptable
- Admin approval status

## Notes

The manual process is deliberate. It lets the business validate demand, pricing, product quality, and customer behaviour before investing in fulfilment automation.
