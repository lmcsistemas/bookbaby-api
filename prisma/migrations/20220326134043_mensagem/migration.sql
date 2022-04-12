-- CreateTable
CREATE TABLE "mensagens" (
    "id" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "criancaId" TEXT NOT NULL,

    CONSTRAINT "mensagens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_criancaId_fkey" FOREIGN KEY ("criancaId") REFERENCES "criancas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
