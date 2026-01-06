-- Create a table to track user subscriptions
create table if not exists public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade references auth.users(id), -- Optional: Link to auth.users if they exist
  stripe_customer_id text,
  stripe_subscription_id text unique,
  email text not null,
  status text check (status in ('active', 'trialing', 'past_due', 'canceled', 'incomplete', 'incomplete_expired', 'unpaid')),
  plan_interval text check (plan_interval in ('month', 'year')),
  plan_amount integer,
  currency text default 'eur',
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.subscriptions enable row level security;

-- Allow users to read their own subscription
create policy "Users can read own subscription" on public.subscriptions
  for select using (auth.uid() = user_id OR email = auth.jwt() ->> 'email');

-- Create an index on email for faster lookups
create index if not exists idx_subscriptions_email on public.subscriptions(email);
create index if not exists idx_subscriptions_stripe_sub_id on public.subscriptions(stripe_subscription_id);
