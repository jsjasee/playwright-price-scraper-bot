# Telegram FairPrice Price Tracker - Project Resource Document

## V1 Goal

Build a minimal scheduled price checker that:

- Opens one hardcoded FairPrice product URL
- Scrapes the price using Playwright
- Compares it against one hardcoded threshold
- Sends me a Telegram message only if the price is below the threshold
- Runs once daily using GitHub Actions

## V1 Stack

- Node.js
- TypeScript
- Playwright
- grammY
- tsx
- GitHub Actions

Optional for local development:

- dotenv

## V1 Non-Goals

Do not build these yet:

- Database
- Prisma
- Supabase
- Neon
- Appwrite
- Telegram Mini App
- /add
- /list
- /remove
- /check
- Webhook server
- Render deployment
- Vercel deployment
- Multi-product tracking
- Multi-merchant tracking

---

## Feature List

### Feature 1 - Project Setup

#### Goal

Create the smallest possible TypeScript project that can run one script.

#### Tasks

- Create project folder
- Initialise npm project
- Install TypeScript
- Install tsx
- Install Playwright
- Install grammY
- Add .gitignore
- Add one main script file
- Confirm the script can run locally

#### Done When

- The project can run one TypeScript script from the terminal

---

### Feature 2 - Hardcoded Product Config

#### Goal

Define the fixed values needed for V1.

#### Tasks

- Choose one FairPrice product URL
- Choose one price threshold
- Choose one price selector
- Hardcode the product URL
- Hardcode the price threshold
- Hardcode the price selector

#### Done When

- The script has one fixed URL, one fixed threshold, and one fixed selector

---

### Feature 3 - Local Playwright Scrape

#### Goal

Use Playwright locally to open the FairPrice product page and extract the price.

#### Tasks

- Launch Chromium in headless mode
- Open the hardcoded FairPrice product URL
- Wait for the page to load
- Locate the price element
- Extract the price text
- Print the raw price text

#### Done When

- Running the script locally prints the correct product price

---

### Feature 4 - Price Parsing

#### Goal

Convert the scraped price text into a number.

#### Tasks

- Remove currency symbols
- Remove spaces
- Convert the remaining value into a number
- Fail if the price is missing
- Fail if the price cannot be parsed
- Do not treat failed parsing as zero

#### Done When

- The script produces a valid numeric price
- Broken or missing price text causes the script to fail clearly

---

### Feature 5 - Threshold Comparison

#### Goal

Check whether the current price is below the hardcoded target price.

#### Tasks

- Compare current price against threshold
- Print current price
- Print threshold
- Print whether alert condition is true or false

#### Done When

- The script correctly detects when price is below threshold
- The script correctly does nothing when price is above threshold

---

### Feature 6 - Telegram Bot Setup

#### Goal

Create a Telegram bot that can send messages to me.

#### Tasks

- Create bot using BotFather
- Save bot token locally for testing
- Find my Telegram chat ID
- Add bot token to environment variable
- Add chat ID to environment variable
- Send one test message using grammY

#### Done When

- I receive a test message from the Telegram bot

---

### Feature 7 - Price Alert Message

#### Goal

Send a Telegram message only when the price is below the threshold.

#### Tasks

- Connect the threshold check to Telegram sending
- Include product name
- Include current price
- Include threshold price
- Include product URL
- Send nothing if price is above threshold

#### Done When

- Below-threshold price sends a Telegram alert
- Above-threshold price exits silently

---

### Feature 8 - GitHub Repository Setup

#### Goal

Put the project into GitHub so GitHub Actions can run it.

#### Tasks

- Create GitHub repository
- Commit project files
- Push project to GitHub
- Add TELEGRAM_BOT_TOKEN to GitHub Actions Secrets
- Add TELEGRAM_CHAT_ID to GitHub Actions Secrets

#### Done When

- The repo is on GitHub
- Required secrets are stored in GitHub Actions Secrets

---

### Feature 9 - GitHub Actions Manual Run

#### Goal

Run the script manually inside GitHub Actions.

#### Tasks

- Create GitHub Actions workflow
- Add manual trigger
- Install npm dependencies in workflow
- Install Playwright browser dependencies in workflow
- Run the TypeScript script
- Check workflow logs

#### Done When

- GitHub Actions can run the script manually
- Playwright launches successfully in GitHub Actions
- The scraped price appears in the workflow logs

---

### Feature 10 - GitHub Actions Telegram Alert

#### Goal

Confirm Telegram alert works from GitHub Actions.

#### Tasks

- Use GitHub Actions Secrets for bot token
- Use GitHub Actions Secrets for chat ID
- Force threshold high enough to trigger test alert
- Run workflow manually
- Confirm Telegram message is received
- Restore real threshold after testing

#### Done When

- GitHub Actions can send a Telegram alert successfully

---

### Feature 11 - Daily Schedule

#### Goal

Run the price checker once daily.

#### Tasks

- Add scheduled GitHub Actions trigger
- Set schedule to 1 a.m. UTC
- Confirm this equals 9 a.m. Singapore time
- Keep manual trigger available for testing

#### Done When

- Workflow is scheduled to run daily
- Manual workflow trigger still works

---

### Feature 12 - Final V1 Verification

#### Goal

Confirm the complete V1 loop works.

#### Tasks

- Run workflow manually
- Confirm Playwright opens FairPrice page
- Confirm price is scraped
- Confirm price is parsed
- Confirm threshold comparison works
- Confirm Telegram alert sends only when condition is true
- Confirm workflow exits successfully

#### Done When

- One hardcoded product is checked successfully
- Alert only sends when price is below threshold
- Daily schedule is active
- No database or web server is required

---

## Minimal File Structure

Use this structure for V1:

- check-price.ts
- package.json
- package-lock.json
- .gitignore
- .github/workflows/check-price.yml
- PRD.md

Avoid extra folders until the single script becomes hard to read.

---

## Environment Variables

### Local Development

Use local environment variables for:

- TELEGRAM_BOT_TOKEN
- TELEGRAM_CHAT_ID

Optional:

- Use .env only for local convenience
- Do not commit .env

### GitHub Actions

Use GitHub Actions Secrets for:

- TELEGRAM_BOT_TOKEN
- TELEGRAM_CHAT_ID

---

## Install List

Required packages:

- playwright
- grammy
- tsx
- typescript

Optional package:

- dotenv

Do not install these for V1:

- Express
- Fastify
- Next.js
- Prisma
- Supabase client
- Neon client
- Appwrite SDK
- Telegraf
- React
- Vite

---

## Definition of Done

V1 is complete when:

- The project runs locally
- Playwright scrapes the hardcoded FairPrice price locally
- The price is parsed into a number
- The threshold comparison works
- Telegram test message works locally
- GitHub Actions manual run works
- GitHub Actions can launch Playwright
- GitHub Actions can send Telegram message
- Daily GitHub Actions schedule is active
- No web server is needed
- No database is needed

---

## Stop Rules

Stop and ship V1 when the daily hardcoded price check works.

Do not add commands before V1 works.

Do not add a database before V1 works.

Do not add multiple products before V1 works.

Do not add multiple merchants before V1 works.

Do not add a Mini App before V1 works.

Do not deploy to Render or Vercel before V1 works.
