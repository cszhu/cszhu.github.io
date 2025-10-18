from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto(f"file://{os.getcwd()}/index.html")
    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

import os
with sync_playwright() as playwright:
    run(playwright)
