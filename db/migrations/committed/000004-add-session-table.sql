--! Previous: sha1:1559ae8e4fd61d0a20555f72ffb54e214eff6953
--! Hash: sha1:311a8f18b562c54a10b33d0d13cd683a7e6cda63
--! Message: Add session table

-- Enter migration here

CREATE TABLE "Session" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    "expiresAt" TIMESTAMP WITH TIME ZONE NOT NULL,
    
    "userId" UUID NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE ON UPDATE CASCADE
);
