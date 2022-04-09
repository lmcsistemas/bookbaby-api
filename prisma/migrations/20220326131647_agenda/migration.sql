-- CreateTable
CREATE TABLE "agendas" (
    "id" TEXT NOT NULL,
    "almoco" TEXT NOT NULL,
    "lanche" TEXT NOT NULL,
    "janta" TEXT NOT NULL,
    "informacoes" TEXT NOT NULL,
    "precisa" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "criancaId" TEXT NOT NULL,

    CONSTRAINT "agendas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "agendas" ADD CONSTRAINT "agendas_criancaId_fkey" FOREIGN KEY ("criancaId") REFERENCES "criancas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
