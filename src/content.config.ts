// src/content.config.ts
import { defineCollection } from 'astro:content';
import { airtableLoader } from "@ascorbic/airtable-loader";

const plantInventory = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "Plant Inventory",
    token: import.meta.env.AIRTABLE_TOKEN
  }),
});

export const collections = { plantInventory };
