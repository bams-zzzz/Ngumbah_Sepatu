import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Validasi dan log jika variabel belum diisi
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Gagal: SUPABASE_URL atau SUPABASE_KEY belum diisi di file .env");
} else {
    console.log("✅ Variabel environment Supabase terbaca");
    console.log("Supabase URL:", supabaseUrl);
}

export const supabase = createClient(supabaseUrl, supabaseKey);
