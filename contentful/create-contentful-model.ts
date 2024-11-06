import { contentfulClient } from './client'
import { contentfulEntrySchema } from "./contentful-entry-schema";
import { z } from "zod";

// More in the next article on the create contentful model context
export type CreateContentfulModelContext = object; 

export type FieldsSchemaCreator<TDataIn extends typeof contentfulEntrySchema, TDataOut> = (
    context: CreateContentfulModelContext
) => z.Schema<TDataOut, z.ZodTypeDef, TDataIn>;

export function createContentfulModel<TDataIn extends typeof contentfulEntrySchema, TDataOut>(
    contentType: string,
    fieldsSchemaCreator: FieldsSchemaCreator<TDataIn, TDataOut>
) {
  // Set up an empty context. We'll return to this in the next article.
  const context: CreateContentfulModelContext = {};
  const getContext = () => context

  // Run the fieldsSchemaCreator with the context to get the type of
  // the content's fields.
  const fieldsSchema = fieldsSchemaCreator(context);

  // Using the object entry schema we defined earlier, extend its fields
  // property to define this object type's full entry schema
  const entrySchema = contentfulEntrySchema.extend({ fields: fieldsSchema });

// Create the get all fetcher to fetch all items of the current
    // content type.
    const getAll = async () => {
        // Fetch all items of current content type
        const res = await contentfulClient.getEntries({ content_type: contentType });

        // Parse and validate all items using zod
        const parsed = z.array(entrySchema).safeParse(res.items);

        // Handle failures
        if (!parsed.success) {
            console.error(parsed.error);
            return [];
        }

        // Return validated data with correct types
        return parsed.data;
    }

  // Return schemas
  return {
      fieldsSchema,
      entrySchema,
      getAll,
      getContext,
  }
}