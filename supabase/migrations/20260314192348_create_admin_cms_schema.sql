/*
  # Create Admin CMS Schema
  
  1. New Tables
    - `hero_content`
      - `id` (uuid, primary key)
      - `title` (text) - Main hero title
      - `subtitle` (text) - Hero subtitle
      - `cta_text` (text) - Call to action button text
      - `cta_link` (text) - CTA button link
      - `background_image` (text) - Hero background image URL
      - `is_visible` (boolean) - Show/hide hero section
      - `updated_at` (timestamptz)
      
    - `presentation_content`
      - `id` (uuid, primary key)
      - `title` (text) - Presentation section title
      - `description` (text) - Main description
      - `image_url` (text) - Presentation image
      - `is_visible` (boolean)
      - `updated_at` (timestamptz)
      
    - `services`
      - `id` (uuid, primary key)
      - `title` (text) - Service title
      - `description` (text) - Service description
      - `icon` (text) - Lucide icon name
      - `color` (text) - Service color theme
      - `order_index` (integer) - Display order
      - `is_visible` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `portfolio_projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `image_url` (text) - Project image
      - `category` (text) - Project category
      - `link` (text) - External project link
      - `technologies` (text[]) - Array of technologies used
      - `order_index` (integer)
      - `is_visible` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `pricing_plans`
      - `id` (uuid, primary key)
      - `name` (text) - Plan name
      - `price` (numeric) - Price amount
      - `currency` (text) - Currency symbol
      - `description` (text) - Plan description
      - `features` (jsonb) - Array of features
      - `is_featured` (boolean) - Highlight this plan
      - `order_index` (integer)
      - `is_visible` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `faq_items`
      - `id` (uuid, primary key)
      - `question` (text) - FAQ question
      - `answer` (text) - FAQ answer
      - `category` (text) - FAQ category
      - `order_index` (integer)
      - `is_visible` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `contact_settings`
      - `id` (uuid, primary key)
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `address` (text) - Contact address
      - `social_links` (jsonb) - Social media links
      - `business_hours` (text) - Business hours text
      - `updated_at` (timestamptz)
      
    - `site_settings`
      - `id` (uuid, primary key)
      - `site_name` (text) - Site name
      - `site_tagline` (text) - Site tagline
      - `logo_url` (text) - Logo image URL
      - `favicon_url` (text) - Favicon URL
      - `primary_color` (text) - Primary brand color
      - `secondary_color` (text) - Secondary brand color
      - `updated_at` (timestamptz)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin users to manage all content
    - Add policies for public read access to visible content
    
  3. Important Notes
    - Only one row per settings table (hero_content, presentation_content, contact_settings, site_settings)
    - Services, portfolio, pricing, and FAQ support multiple entries
    - All content is readable by public but only writable by authenticated users
    - Images are stored via URLs (Supabase Storage integration)
*/

-- Create hero_content table
CREATE TABLE IF NOT EXISTS hero_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT 'Créateur de sites web modernes',
  subtitle text NOT NULL DEFAULT 'Design • Développement • Performance',
  cta_text text NOT NULL DEFAULT 'Voir mes réalisations',
  cta_link text NOT NULL DEFAULT '/portfolio',
  background_image text,
  is_visible boolean DEFAULT true,
  updated_at timestamptz DEFAULT now()
);

-- Create presentation_content table
CREATE TABLE IF NOT EXISTS presentation_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT 'À propos',
  description text NOT NULL DEFAULT 'Je crée des expériences web uniques',
  image_url text,
  is_visible boolean DEFAULT true,
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL DEFAULT 'Code',
  color text NOT NULL DEFAULT 'from-blue-500 to-cyan-500',
  order_index integer NOT NULL DEFAULT 0,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create portfolio_projects table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL DEFAULT 'Web',
  link text,
  technologies text[] DEFAULT '{}',
  order_index integer NOT NULL DEFAULT 0,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create pricing_plans table
CREATE TABLE IF NOT EXISTS pricing_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  currency text NOT NULL DEFAULT '€',
  description text NOT NULL,
  features jsonb NOT NULL DEFAULT '[]',
  is_featured boolean DEFAULT false,
  order_index integer NOT NULL DEFAULT 0,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create faq_items table
CREATE TABLE IF NOT EXISTS faq_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text NOT NULL DEFAULT 'Général',
  order_index integer NOT NULL DEFAULT 0,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_settings table
CREATE TABLE IF NOT EXISTS contact_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL DEFAULT 'contact@example.com',
  phone text NOT NULL DEFAULT '+33 6 00 00 00 00',
  address text,
  social_links jsonb DEFAULT '{}',
  business_hours text,
  updated_at timestamptz DEFAULT now()
);

-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_name text NOT NULL DEFAULT 'Portfolio',
  site_tagline text NOT NULL DEFAULT 'Créateur de sites web',
  logo_url text,
  favicon_url text,
  primary_color text NOT NULL DEFAULT '#FF6B6B',
  secondary_color text NOT NULL DEFAULT '#4ECDC4',
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE presentation_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies for visible content
CREATE POLICY "Public can read visible hero content"
  ON hero_content FOR SELECT
  TO anon
  USING (is_visible = true);

CREATE POLICY "Public can read visible presentation content"
  ON presentation_content FOR SELECT
  TO anon
  USING (is_visible = true);

CREATE POLICY "Public can read visible services"
  ON services FOR SELECT
  TO anon
  USING (is_visible = true);

CREATE POLICY "Public can read visible portfolio projects"
  ON portfolio_projects FOR SELECT
  TO anon
  USING (is_visible = true);

CREATE POLICY "Public can read visible pricing plans"
  ON pricing_plans FOR SELECT
  TO anon
  USING (is_visible = true);

CREATE POLICY "Public can read visible FAQ items"
  ON faq_items FOR SELECT
  TO anon
  USING (is_visible = true);

CREATE POLICY "Public can read contact settings"
  ON contact_settings FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can read site settings"
  ON site_settings FOR SELECT
  TO anon
  USING (true);

-- Authenticated users can read all content (including hidden)
CREATE POLICY "Authenticated users can read all hero content"
  ON hero_content FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read all presentation content"
  ON presentation_content FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read all services"
  ON services FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read all portfolio projects"
  ON portfolio_projects FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read all pricing plans"
  ON pricing_plans FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read all FAQ items"
  ON faq_items FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read all contact settings"
  ON contact_settings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read all site settings"
  ON site_settings FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can manage all content
CREATE POLICY "Authenticated users can insert hero content"
  ON hero_content FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update hero content"
  ON hero_content FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete hero content"
  ON hero_content FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert presentation content"
  ON presentation_content FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update presentation content"
  ON presentation_content FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete presentation content"
  ON presentation_content FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert portfolio projects"
  ON portfolio_projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update portfolio projects"
  ON portfolio_projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete portfolio projects"
  ON portfolio_projects FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert pricing plans"
  ON pricing_plans FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update pricing plans"
  ON pricing_plans FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete pricing plans"
  ON pricing_plans FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert FAQ items"
  ON faq_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update FAQ items"
  ON faq_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete FAQ items"
  ON faq_items FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert contact settings"
  ON contact_settings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update contact settings"
  ON contact_settings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contact settings"
  ON contact_settings FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert site settings"
  ON site_settings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update site settings"
  ON site_settings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete site settings"
  ON site_settings FOR DELETE
  TO authenticated
  USING (true);

-- Insert default data
INSERT INTO hero_content (title, subtitle, cta_text, cta_link, is_visible)
VALUES (
  'Créateur de sites web modernes',
  'Design • Développement • Performance',
  'Voir mes réalisations',
  '/portfolio',
  true
) ON CONFLICT DO NOTHING;

INSERT INTO presentation_content (title, description, is_visible)
VALUES (
  'À propos de moi',
  'Je crée des expériences web uniques qui allient design moderne et performance technique. Passionné par le développement frontend, je transforme vos idées en sites web professionnels et optimisés.',
  true
) ON CONFLICT DO NOTHING;

INSERT INTO contact_settings (email, phone, social_links)
VALUES (
  'contact@example.com',
  '+33 6 00 00 00 00',
  '{"linkedin": "", "github": "", "twitter": ""}'::jsonb
) ON CONFLICT DO NOTHING;

INSERT INTO site_settings (site_name, site_tagline, primary_color, secondary_color)
VALUES (
  'Portfolio',
  'Créateur de sites web modernes',
  '#FF6B6B',
  '#4ECDC4'
) ON CONFLICT DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_services_order ON services(order_index);
CREATE INDEX IF NOT EXISTS idx_services_visible ON services(is_visible);
CREATE INDEX IF NOT EXISTS idx_portfolio_order ON portfolio_projects(order_index);
CREATE INDEX IF NOT EXISTS idx_portfolio_visible ON portfolio_projects(is_visible);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_projects(category);
CREATE INDEX IF NOT EXISTS idx_pricing_order ON pricing_plans(order_index);
CREATE INDEX IF NOT EXISTS idx_pricing_visible ON pricing_plans(is_visible);
CREATE INDEX IF NOT EXISTS idx_faq_order ON faq_items(order_index);
CREATE INDEX IF NOT EXISTS idx_faq_visible ON faq_items(is_visible);
CREATE INDEX IF NOT EXISTS idx_faq_category ON faq_items(category);
