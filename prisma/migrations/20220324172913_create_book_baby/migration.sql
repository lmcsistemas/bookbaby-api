/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "criancas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dtnascimento" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "criancas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usersCriancas" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "criancaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "usersCriancas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usersCriancas" ADD CONSTRAINT "usersCriancas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersCriancas" ADD CONSTRAINT "usersCriancas_criancaId_fkey" FOREIGN KEY ("criancaId") REFERENCES "criancas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
