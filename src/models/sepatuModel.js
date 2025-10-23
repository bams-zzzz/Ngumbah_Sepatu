import { supabase } from "../config/supabaseClient.js";

export const SepatuModel = {
    async getAll(filter = {}) {
        let query = supabase.from("sepatu").select("*");
        if (filter.status) query = query.eq("status", filter.status);
        const { data, error } = await query.order("created_at", { ascending: false });
        if (error) throw error;
        return data;
    },

    async getById(id) {
        const { data, error } = await supabase.from("sepatu").select("*").eq("id", id).single();
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase.from("sepatu").insert([payload]).select().single();
        if (error) throw error;
        return data;
    },

    async update(id, payload) {
        const { data, error } = await supabase
            .from("sepatu")
            .update(payload)
            .eq("id", id)
            .select()
            .single();
        if (error) throw error;
        return data;
    },

    async remove(id) {
        const { error } = await supabase.from("sepatu").delete().eq("id", id);
        if (error) throw error;
        return { success: true };
    }
};
