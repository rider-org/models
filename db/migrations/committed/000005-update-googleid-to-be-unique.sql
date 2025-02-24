--! Previous: sha1:311a8f18b562c54a10b33d0d13cd683a7e6cda63
--! Hash: sha1:2ce6776422b0bb84728fbe55dfb3f8b04961d053
--! Message: Update googleId to be unique

-- Enter migration here

ALTER TABLE "User"
ADD CONSTRAINT unique_google_id UNIQUE ("googleId");
