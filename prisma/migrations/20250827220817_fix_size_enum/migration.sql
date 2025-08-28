/*
  Warnings:

  - The values [SX] on the enum `Size` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Size_new" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');
ALTER TABLE "public"."Product" ALTER COLUMN "sizes" DROP DEFAULT;
ALTER TABLE "public"."Product" ALTER COLUMN "sizes" TYPE "public"."Size_new"[] USING ("sizes"::text::"public"."Size_new"[]);
ALTER TYPE "public"."Size" RENAME TO "Size_old";
ALTER TYPE "public"."Size_new" RENAME TO "Size";
DROP TYPE "public"."Size_old";
ALTER TABLE "public"."Product" ALTER COLUMN "sizes" SET DEFAULT ARRAY[]::"public"."Size"[];
COMMIT;
