--! Previous: sha1:5c4d697ef909ddc56147fa8125067ae896e4b59a
--! Hash: sha1:573a28f9eeb87456bafeccb47b4d4562090bd26c
--! Message: Add googleId to user table

-- Enter migration here

ALTER TABLE "User"
ADD COLUMN IF NOT EXISTS "googleId" TEXT NULL;
