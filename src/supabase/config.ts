import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://epsmcbttxepkdceacfkk.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwc21jYnR0eGVwa2RjZWFjZmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTg1MDcsImV4cCI6MTk4Mzc3NDUwN30.z0-cz6GmgavF1GWKJt-A3rQ5kgrmY4SED-asC7QD7AY";

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
