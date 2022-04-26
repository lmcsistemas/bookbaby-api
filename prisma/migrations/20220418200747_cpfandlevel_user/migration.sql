/*
  Warnings:

  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "nivel" TEXT NOT NULL DEFAULT E'Pais';
