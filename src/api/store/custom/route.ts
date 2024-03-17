import { IdempotencyKey, MedusaRequest, MedusaResponse } from "@medusajs/medusa";

import { IdempotencyKeyService } from "@medusajs/medusa"

export const POST = async (
  req: MedusaRequest, 
  res: MedusaResponse
) => {
  // ...
  const idempotencyKeyService = req.scope.resolve<
    IdempotencyKeyService
  >("idempotencyKeyService")
  const headerKey = req.get("Idempotency-Key") || ""

  const idempotencyKey = await idempotencyKeyService
    .initializeRequest(
      headerKey,
      req.method,
      req.params,
      req.path
    )
  // ...
}

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.sendStatus(200);
}
