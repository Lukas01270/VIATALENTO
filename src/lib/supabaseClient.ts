import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vepyaslhwwhmzobncbkb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcHlhc2xod3dobXpvYm5jYmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzODEzNjcsImV4cCI6MjA4NDk1NzM2N30.enJxZ_U7npv2YzgA0UC3nR45ZF75ChfG7-wlkD9OxOg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)