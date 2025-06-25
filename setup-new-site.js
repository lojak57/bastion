#!/usr/bin/env node

/**
 * Setup script for cloning weKnowCO to a new marketing site
 * Run: node setup-new-site.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

console.log('\n🚀 weKnowCO Marketing Site Setup\n');
console.log('This script will help you configure a new marketing site.\n');

async function setup() {
  try {
    // Collect information
    const config = {
      name: await question('Site name (e.g., "PeakDigital"): '),
      tagline: await question('Tagline: '),
      domain: await question('Domain (e.g., "peakdigital.com"): '),
      email: await question('Contact email: '),
      phone: await question('Contact phone: '),
      calendlyUrl: await question('Calendly URL (or press enter to skip): '),
      heroPrice: await question('Hero price (e.g., "$2,999"): '),
      city: await question('City: '),
      state: await question('State: '),
      primaryColor: await question('Primary color name (e.g., "mountain-blue"): '),
      whiteLabelId: '',
    };
    
    // Generate white label ID from name
    config.whiteLabelId = config.name.toLowerCase().replace(/\s+/g, '');
    
    console.log('\n📝 Updating configuration files...\n');
    
    // Update site.config.ts
    let siteConfig = readFileSync('./src/lib/config/site.config.ts', 'utf8');
    siteConfig = siteConfig
      .replace(/name: ".*"/, `name: "${config.name}"`)
      .replace(/tagline: ".*"/, `tagline: "${config.tagline}"`)
      .replace(/domain: ".*"/, `domain: "${config.domain}"`)
      .replace(/email: ".*"/, `email: "${config.email}"`)
      .replace(/phone: ".*"/, `phone: "${config.phone}"`)
      .replace(/calendlyUrl: ".*"/, `calendlyUrl: "${config.calendlyUrl || ''}"`)
      .replace(/heroPrice: ".*"/, `heroPrice: "${config.heroPrice}"`)
      .replace(/city: ".*"/, `city: "${config.city}"`)
      .replace(/state: ".*"/, `state: "${config.state}"`)
      .replace(/whiteLabelId: ".*"/, `whiteLabelId: "${config.whiteLabelId}"`);
    
    writeFileSync('./src/lib/config/site.config.ts', siteConfig);
    
    // Update package.json
    const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));
    packageJson.name = config.whiteLabelId;
    writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
    
    // Update .env.example
    let envExample = readFileSync('./.env.example', 'utf8');
    envExample = envExample
      .replace(/VITE_SITE_URL=.*/, `VITE_SITE_URL=https://${config.domain}`)
      .replace(/VITE_PLAUSIBLE_DOMAIN=.*/, `VITE_PLAUSIBLE_DOMAIN=${config.domain}`);
    writeFileSync('./.env.example', envExample);
    
    console.log('✅ Configuration updated!\n');
    
    // Create .env file
    console.log('📋 Creating .env file from template...');
    execSync('cp .env.example .env');
    console.log('✅ .env file created (remember to add your API keys!)\n');
    
    // Final instructions
    console.log('🎉 Setup complete!\n');
    console.log('Next steps:');
    console.log('1. Update logo files in /static/images/logo/');
    console.log('2. Update brand colors in tailwind.config.js');
    console.log('3. Add your TrueForm API key to .env');
    console.log('4. Update content in page components');
    console.log('5. Run "npm install" and "npm run dev"\n');
    console.log(`Your white label ID for TrueForm: ${config.whiteLabelId}`);
    console.log(`TrueForm will receive leads at: /api/${config.whiteLabelId}-leads\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

setup();