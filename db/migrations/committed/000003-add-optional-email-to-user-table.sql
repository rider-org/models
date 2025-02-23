--! Previous: sha1:573a28f9eeb87456bafeccb47b4d4562090bd26c
--! Hash: sha1:1559ae8e4fd61d0a20555f72ffb54e214eff6953
--! Message: Add optional email to user table

-- Enter migration here

ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS email VARCHAR(240) NULL;
