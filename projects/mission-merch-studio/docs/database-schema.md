# Database Schema Draft

This schema is designed for Supabase/PostgreSQL.

## organisations

```sql
create table organisations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null check (type in ('church', 'missionary', 'charity', 'ministry', 'event')),
  logo_url text,
  website text,
  contact_name text,
  contact_email text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'suspended')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

## profiles

```sql
create table profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  organisation_id uuid references organisations(id) on delete set null,
  role text not null default 'customer' check (role in ('customer', 'owner', 'designer', 'admin')),
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

## products

```sql
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  description text,
  base_price numeric(10,2),
  retail_price numeric(10,2),
  production_cost numeric(10,2),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

## product_variants

```sql
create table product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  size text,
  colour text,
  sku text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
```

## assets

```sql
create table assets (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete cascade,
  uploaded_by uuid,
  original_url text not null,
  background_removed_url text,
  vector_url text,
  file_type text,
  status text not null default 'uploaded' check (status in ('uploaded', 'processing', 'ready', 'failed')),
  created_at timestamptz not null default now()
);
```

## designs

```sql
create table designs (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  name text not null,
  editor_json jsonb,
  preview_url text,
  print_file_url text,
  status text not null default 'draft' check (status in ('draft', 'submitted', 'needs_changes', 'approved', 'ordered')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

## orders

```sql
create table orders (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete set null,
  customer_name text not null,
  customer_email text not null,
  status text not null default 'draft',
  stripe_session_id text,
  total_amount numeric(10,2),
  production_cost numeric(10,2),
  platform_profit numeric(10,2),
  delivery_address jsonb,
  required_date date,
  customer_notes text,
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

## order_items

```sql
create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  variant_id uuid references product_variants(id) on delete set null,
  design_id uuid references designs(id) on delete set null,
  quantity integer not null default 1,
  size text,
  colour text,
  unit_price numeric(10,2),
  print_file_url text,
  created_at timestamptz not null default now()
);
```

## shipments

```sql
create table shipments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  courier text,
  tracking_number text,
  shipped_at timestamptz,
  delivered_at timestamptz,
  created_at timestamptz not null default now()
);
```

## campaigns

```sql
create table campaigns (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid references organisations(id) on delete cascade,
  title text not null,
  description text,
  slug text unique not null,
  goal_amount numeric(10,2),
  amount_raised numeric(10,2) not null default 0,
  status text not null default 'draft' check (status in ('draft', 'pending_review', 'approved', 'live', 'paused', 'completed', 'rejected')),
  hero_image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

## campaign_products

```sql
create table campaign_products (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references campaigns(id) on delete cascade,
  design_id uuid references designs(id) on delete set null,
  retail_price numeric(10,2),
  organisation_profit numeric(10,2),
  platform_profit numeric(10,2),
  active boolean not null default true,
  created_at timestamptz not null default now()
);
```
