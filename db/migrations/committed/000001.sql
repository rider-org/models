--! Previous: -
--! Hash: sha1:5c4d697ef909ddc56147fa8125067ae896e4b59a

-- Enter migration here

CREATE TABLE IF NOT EXISTS "User" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
)
