-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "AccessType" AS ENUM ('PUBLIC', 'PRIVATE', 'RESTRICTED');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('AIP', 'SUPPLEMENT', 'NOTAM', 'CHART', 'OTHER');

-- CreateEnum
CREATE TYPE "ConnectorStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'FAILED', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "WatchStatus" AS ENUM ('WATCHING', 'PAUSED', 'STOPPED');

-- CreateEnum
CREATE TYPE "RunStatus" AS ENUM ('PENDING', 'RUNNING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "regions" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" UUID NOT NULL,
    "regionId" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "airac_cycles" (
    "id" UUID NOT NULL,
    "cycle" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "airac_cycles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connectors" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "status" "ConnectorStatus" NOT NULL DEFAULT 'ACTIVE',
    "access" "AccessType" NOT NULL DEFAULT 'PUBLIC',
    "baseUrl" TEXT,
    "config" JSONB,
    "lastSeenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "connectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connector_health" (
    "id" UUID NOT NULL,
    "connectorId" UUID NOT NULL,
    "status" "ConnectorStatus" NOT NULL,
    "message" TEXT,
    "checkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "connector_health_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connector_runs" (
    "id" UUID NOT NULL,
    "connectorId" UUID NOT NULL,
    "status" "RunStatus" NOT NULL DEFAULT 'PENDING',
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),
    "recordsFound" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "connector_runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" UUID NOT NULL,
    "connectorId" UUID,
    "regionId" UUID,
    "stateId" UUID,
    "airacCycleId" UUID,
    "type" "DocumentType" NOT NULL,
    "identifier" TEXT NOT NULL,
    "title" TEXT,
    "url" TEXT,
    "checksum" TEXT,
    "publishedAt" TIMESTAMP(3),
    "retrievedAt" TIMESTAMP(3),
    "watchStatus" "WatchStatus" NOT NULL DEFAULT 'WATCHING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "source_histories" (
    "id" UUID NOT NULL,
    "documentId" UUID NOT NULL,
    "connectorId" UUID,
    "observedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rawUrl" TEXT,
    "checksum" TEXT,
    "metadata" JSONB,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "source_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anomalies" (
    "id" UUID NOT NULL,
    "documentId" UUID,
    "connectorId" UUID,
    "kind" TEXT NOT NULL,
    "severity" TEXT,
    "description" TEXT,
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "anomalies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scrape_logs" (
    "id" UUID NOT NULL,
    "connectorRunId" UUID NOT NULL,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "meta" JSONB,
    "loggedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scrape_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_config" (
    "id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "system_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "regions_code_key" ON "regions"("code");

-- CreateIndex
CREATE INDEX "states_regionId_idx" ON "states"("regionId");

-- CreateIndex
CREATE UNIQUE INDEX "states_regionId_code_key" ON "states"("regionId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "airac_cycles_cycle_key" ON "airac_cycles"("cycle");

-- CreateIndex
CREATE UNIQUE INDEX "connectors_name_key" ON "connectors"("name");

-- CreateIndex
CREATE INDEX "connector_health_connectorId_idx" ON "connector_health"("connectorId");

-- CreateIndex
CREATE INDEX "connector_runs_connectorId_startedAt_idx" ON "connector_runs"("connectorId", "startedAt");

-- CreateIndex
CREATE INDEX "documents_type_idx" ON "documents"("type");

-- CreateIndex
CREATE INDEX "documents_regionId_idx" ON "documents"("regionId");

-- CreateIndex
CREATE INDEX "documents_stateId_idx" ON "documents"("stateId");

-- CreateIndex
CREATE INDEX "documents_airacCycleId_idx" ON "documents"("airacCycleId");

-- CreateIndex
CREATE UNIQUE INDEX "documents_connectorId_identifier_key" ON "documents"("connectorId", "identifier");

-- CreateIndex
CREATE INDEX "source_histories_documentId_idx" ON "source_histories"("documentId");

-- CreateIndex
CREATE INDEX "source_histories_connectorId_idx" ON "source_histories"("connectorId");

-- CreateIndex
CREATE INDEX "anomalies_documentId_idx" ON "anomalies"("documentId");

-- CreateIndex
CREATE INDEX "anomalies_connectorId_idx" ON "anomalies"("connectorId");

-- CreateIndex
CREATE INDEX "scrape_logs_connectorRunId_idx" ON "scrape_logs"("connectorRunId");

-- CreateIndex
CREATE UNIQUE INDEX "system_config_key_key" ON "system_config"("key");

-- AddForeignKey
ALTER TABLE "states" ADD CONSTRAINT "states_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connector_health" ADD CONSTRAINT "connector_health_connectorId_fkey" FOREIGN KEY ("connectorId") REFERENCES "connectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connector_runs" ADD CONSTRAINT "connector_runs_connectorId_fkey" FOREIGN KEY ("connectorId") REFERENCES "connectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_connectorId_fkey" FOREIGN KEY ("connectorId") REFERENCES "connectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "regions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_airacCycleId_fkey" FOREIGN KEY ("airacCycleId") REFERENCES "airac_cycles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "source_histories" ADD CONSTRAINT "source_histories_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "source_histories" ADD CONSTRAINT "source_histories_connectorId_fkey" FOREIGN KEY ("connectorId") REFERENCES "connectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anomalies" ADD CONSTRAINT "anomalies_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anomalies" ADD CONSTRAINT "anomalies_connectorId_fkey" FOREIGN KEY ("connectorId") REFERENCES "connectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scrape_logs" ADD CONSTRAINT "scrape_logs_connectorRunId_fkey" FOREIGN KEY ("connectorRunId") REFERENCES "connector_runs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

