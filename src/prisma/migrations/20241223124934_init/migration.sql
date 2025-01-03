/*
  Warnings:

  - You are about to drop the `Ad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AnalyticsEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Budget` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Campaign` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CartItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Conversion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Currency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmailTemplate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Expense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FAQ` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FileStorage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GiftCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KPI` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lead` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LegalDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoyaltyProgram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoyaltyTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenuItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenuSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessageToCustomer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PageView` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payroll` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PerformanceReview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PositionAssignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PricingRule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductVariant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseOrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Refund` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Return` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shift` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShiftAssignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StockLevel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoreTaxConfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubscriptionPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SupplyShipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaxRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TimeSheet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Translation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPermission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Video` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Warehouse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wishlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WishlistItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ad" DROP CONSTRAINT "Ad_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_customerId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_cartId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_variantId_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Conversion" DROP CONSTRAINT "Conversion_analyticsEventId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_userId_fkey";

-- DropForeignKey
ALTER TABLE "GiftCard" DROP CONSTRAINT "GiftCard_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_fileStorageId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "LoyaltyTransaction" DROP CONSTRAINT "LoyaltyTransaction_customerId_fkey";

-- DropForeignKey
ALTER TABLE "LoyaltyTransaction" DROP CONSTRAINT "LoyaltyTransaction_loyaltyProgramId_fkey";

-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_storeId_fkey";

-- DropForeignKey
ALTER TABLE "MenuItem" DROP CONSTRAINT "MenuItem_menuSectionId_fkey";

-- DropForeignKey
ALTER TABLE "MenuItem" DROP CONSTRAINT "MenuItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "MenuItem" DROP CONSTRAINT "MenuItem_variantId_fkey";

-- DropForeignKey
ALTER TABLE "MenuSection" DROP CONSTRAINT "MenuSection_menuId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- DropForeignKey
ALTER TABLE "MessageToCustomer" DROP CONSTRAINT "MessageToCustomer_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_paymentId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_storeId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_variantId_fkey";

-- DropForeignKey
ALTER TABLE "PageView" DROP CONSTRAINT "PageView_analyticsEventId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "Payroll" DROP CONSTRAINT "Payroll_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PerformanceReview" DROP CONSTRAINT "PerformanceReview_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PositionAssignment" DROP CONSTRAINT "PositionAssignment_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "PositionAssignment" DROP CONSTRAINT "PositionAssignment_positionId_fkey";

-- DropForeignKey
ALTER TABLE "PricingRule" DROP CONSTRAINT "PricingRule_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariant" DROP CONSTRAINT "ProductVariant_productId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseOrder" DROP CONSTRAINT "PurchaseOrder_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseOrderItem" DROP CONSTRAINT "PurchaseOrderItem_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseOrderItem" DROP CONSTRAINT "PurchaseOrderItem_purchaseorderId_fkey";

-- DropForeignKey
ALTER TABLE "Refund" DROP CONSTRAINT "Refund_returnId_fkey";

-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Return" DROP CONSTRAINT "Return_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- DropForeignKey
ALTER TABLE "Shift" DROP CONSTRAINT "Shift_storeId_fkey";

-- DropForeignKey
ALTER TABLE "ShiftAssignment" DROP CONSTRAINT "ShiftAssignment_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "ShiftAssignment" DROP CONSTRAINT "ShiftAssignment_shiftId_fkey";

-- DropForeignKey
ALTER TABLE "StockLevel" DROP CONSTRAINT "StockLevel_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "StockLevel" DROP CONSTRAINT "StockLevel_productId_fkey";

-- DropForeignKey
ALTER TABLE "StockLevel" DROP CONSTRAINT "StockLevel_variantId_fkey";

-- DropForeignKey
ALTER TABLE "StockLevel" DROP CONSTRAINT "StockLevel_warehouseId_fkey";

-- DropForeignKey
ALTER TABLE "StoreTaxConfig" DROP CONSTRAINT "StoreTaxConfig_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_subscriptionPlanId_fkey";

-- DropForeignKey
ALTER TABLE "SupplyShipment" DROP CONSTRAINT "SupplyShipment_purchaseOrderId_fkey";

-- DropForeignKey
ALTER TABLE "SupplyShipment" DROP CONSTRAINT "SupplyShipment_warehouseId_fkey";

-- DropForeignKey
ALTER TABLE "TimeSheet" DROP CONSTRAINT "TimeSheet_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "UserPermission" DROP CONSTRAINT "UserPermission_userId_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_fileStorageId_fkey";

-- DropForeignKey
ALTER TABLE "Warehouse" DROP CONSTRAINT "Warehouse_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_customerId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistItem" DROP CONSTRAINT "WishlistItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistItem" DROP CONSTRAINT "WishlistItem_variantId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistItem" DROP CONSTRAINT "WishlistItem_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "_ProductTags" DROP CONSTRAINT "_ProductTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductTags" DROP CONSTRAINT "_ProductTags_B_fkey";

-- DropTable
DROP TABLE "Ad";

-- DropTable
DROP TABLE "AnalyticsEvent";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "Budget";

-- DropTable
DROP TABLE "Campaign";

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "CartItem";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Conversion";

-- DropTable
DROP TABLE "Country";

-- DropTable
DROP TABLE "Currency";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "EmailTemplate";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "Expense";

-- DropTable
DROP TABLE "FAQ";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "FileStorage";

-- DropTable
DROP TABLE "GiftCard";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "Ingredient";

-- DropTable
DROP TABLE "Invoice";

-- DropTable
DROP TABLE "KPI";

-- DropTable
DROP TABLE "Lead";

-- DropTable
DROP TABLE "LegalDocument";

-- DropTable
DROP TABLE "LoyaltyProgram";

-- DropTable
DROP TABLE "LoyaltyTransaction";

-- DropTable
DROP TABLE "Menu";

-- DropTable
DROP TABLE "MenuItem";

-- DropTable
DROP TABLE "MenuSection";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "MessageToCustomer";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "PageView";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Payroll";

-- DropTable
DROP TABLE "PerformanceReview";

-- DropTable
DROP TABLE "Position";

-- DropTable
DROP TABLE "PositionAssignment";

-- DropTable
DROP TABLE "PricingRule";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductVariant";

-- DropTable
DROP TABLE "PurchaseOrder";

-- DropTable
DROP TABLE "PurchaseOrderItem";

-- DropTable
DROP TABLE "Refund";

-- DropTable
DROP TABLE "Region";

-- DropTable
DROP TABLE "Report";

-- DropTable
DROP TABLE "Return";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "Shift";

-- DropTable
DROP TABLE "ShiftAssignment";

-- DropTable
DROP TABLE "StockLevel";

-- DropTable
DROP TABLE "Store";

-- DropTable
DROP TABLE "StoreTaxConfig";

-- DropTable
DROP TABLE "Subscription";

-- DropTable
DROP TABLE "SubscriptionPlan";

-- DropTable
DROP TABLE "Supplier";

-- DropTable
DROP TABLE "SupplyShipment";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "TaxRecord";

-- DropTable
DROP TABLE "TimeSheet";

-- DropTable
DROP TABLE "Translation";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserPermission";

-- DropTable
DROP TABLE "Video";

-- DropTable
DROP TABLE "Warehouse";

-- DropTable
DROP TABLE "Wishlist";

-- DropTable
DROP TABLE "WishlistItem";

-- DropTable
DROP TABLE "_ProductTags";

-- DropEnum
DROP TYPE "CampaignStatus";

-- DropEnum
DROP TYPE "CurrencyCode";

-- DropEnum
DROP TYPE "LanguageCode";

-- DropEnum
DROP TYPE "NotificationType";

-- DropEnum
DROP TYPE "OrderStatus";

-- DropEnum
DROP TYPE "PaymentStatus";

-- DropEnum
DROP TYPE "PermissionLevel";

-- DropEnum
DROP TYPE "ShiftStatus";

-- DropEnum
DROP TYPE "SubscriptionStatus";

-- DropEnum
DROP TYPE "TaxType";

-- DropEnum
DROP TYPE "UserRole";

-- DropEnum
DROP TYPE "WarehouseType";
