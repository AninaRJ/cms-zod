import { z } from "zod";
import { createContentfulModel } from "./create-contentful-model";
export const componentSongModel = createContentfulModel("componentSong", () => z.object({
    songId: z.string(),
    songName: z.string().optional(),
    singers: z.string(),
    songDuration: z.string(),
}));
