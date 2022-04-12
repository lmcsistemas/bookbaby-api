/*
  Warnings:

  - Added the required column `cpf` to the `criancas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "criancas" ADD COLUMN     "cpf" TEXT NOT NULL;
