import {createClient} from 'https://esm.sh/@supabase/supabase-js'

const supUrl = 'https://tjpkrneqjuncbnjaffmd.supabase.co'
const supKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqcGtybmVxanVuY2JuamFmZm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2MTYyMTIsImV4cCI6MjA4MzE5MjIxMn0.1i6fbEVVeKGGm01eVV5relyf5XE27ohlnKbgmPXrX-c'
const supabase = createClient(supUrl,supKey)

console.log(supabase);

export default supabase;
