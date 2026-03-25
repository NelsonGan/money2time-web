import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy - Money₂Time",
  description: "Privacy Policy for the Money₂Time iOS app.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/icon.png" alt="Money2Time" width={36} height={36} className="rounded-lg" />
            <span className="font-black text-lg tracking-[-0.9px] flex items-baseline">
              <span style={{ color: "#F37D57" }}>Money</span>
              <sub className="text-[11px] font-black ml-[1px]" style={{ color: "#F6B750" }}>2</sub>
              <span className="ml-[-1px]" style={{ color: "#B65F48" }}>Time</span>
            </span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-foreground-muted text-sm mb-12">
          Last updated: March 23, 2026
        </p>

        <div className="prose-m2t space-y-10 text-foreground-soft text-[15px] leading-relaxed">
          <Section title="Overview">
            <p>
              Money₂Time (&ldquo;the App&rdquo;) is a personal finance app that converts your
              spending into time equivalents based on your hourly wage. Your privacy is important
              to us. This policy explains what data the App collects, how it is used, and your
              rights regarding that data.
            </p>
          </Section>

          <Section title="1. Data Storage & Local-First Design">
            <p>
              All your financial data — including transactions, accounts, categories, recurring
              rules, and wage settings — is stored <strong>locally on your device</strong> using
              an on-device database (SQLite). We do not operate servers that store your personal
              financial information. Your data is never uploaded to, synced with, or backed up to
              any cloud service by the App.
            </p>
            <p>
              If you uninstall the App, all locally stored data is permanently deleted.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <Subsection title="Financial Data (Stored Locally Only)">
              <ul>
                <li>Transaction amounts, dates, categories, notes, and sentiment tags</li>
                <li>Account names, types, and balances</li>
                <li>Wage and hourly rate information</li>
                <li>Recurring transaction rules</li>
                <li>Category names and organization</li>
              </ul>
              <p>
                This data never leaves your device unless you explicitly choose to export it.
              </p>
            </Subsection>

            <Subsection title="Anonymous Device Identifier">
              <p>
                On first launch, the App generates a random unique identifier (e.g.,{" "}
                <code>m2t_abc123</code>) that is not linked to your name, email, Apple ID, or any
                personal identity. This identifier is used solely for analytics aggregation and
                subscription management.
              </p>
            </Subsection>

            <Subsection title="Usage Analytics">
              <p>
                We use <strong>Mixpanel</strong> to collect anonymous usage data to help us
                understand how the App is used and improve the experience. This includes:
              </p>
              <ul>
                <li>Screen views and feature usage (e.g., which tabs are visited)</li>
                <li>App events (e.g., transaction created, settings changed)</li>
                <li>General preferences (currency, locale, theme, display mode)</li>
                <li>Platform (iOS or Android)</li>
              </ul>
              <p>
                Analytics data does <strong>not</strong> include your financial amounts,
                transaction details, account balances, or any personally identifiable information.
              </p>
            </Subsection>
          </Section>

          <Section title="3. In-App Purchases & Subscriptions">
            <p>
              The App offers an optional premium subscription (&ldquo;Pro&rdquo;) managed through{" "}
              <strong>RevenueCat</strong>. When you make a purchase:
            </p>
            <ul>
              <li>
                Payment is processed entirely by Apple (App Store) or Google (Play Store). We
                never receive or store your payment information, credit card details, or Apple
                ID/Google Account credentials.
              </li>
              <li>
                RevenueCat receives your subscription status, product identifier, and expiration
                date to manage your entitlements. This is linked to the anonymous device
                identifier, not your personal identity.
              </li>
            </ul>
            <p>
              For details on how RevenueCat handles data, see the{" "}
              <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
                RevenueCat Privacy Policy
              </a>.
            </p>
          </Section>

          <Section title="4. Notifications">
            <p>
              The App may request permission to send notifications. All notifications are{" "}
              <strong>scheduled locally</strong> on your device:
            </p>
            <ul>
              <li>Daily check-in reminders (user-configurable time)</li>
              <li>Weekly spending summaries (user-configurable day and time)</li>
              <li>Recurring transaction alerts</li>
            </ul>
            <p>
              No push notifications are sent from external servers. You can deny notification
              permission or disable notifications at any time in your device Settings.
            </p>
          </Section>

          <Section title="5. Device Permissions">
            <p>The App requests only the following permissions:</p>
            <ul>
              <li>
                <strong>Notifications</strong> — to schedule local reminders and summaries
              </li>
            </ul>
            <p>The App does <strong>not</strong> access your:</p>
            <ul>
              <li>Camera, microphone, or photo library</li>
              <li>Contacts, calendar, or messages</li>
              <li>Location or GPS</li>
              <li>Health or fitness data</li>
              <li>Other apps or browsing history</li>
            </ul>
          </Section>

          <Section title="6. Data Export & Import">
            <p>
              You can export all your financial data as a JSON file at any time via the App&apos;s
              Settings. The exported file is shared using your device&apos;s native sharing
              functionality (e.g., save to Files, send via email). We do not receive or process
              your exported data.
            </p>
            <p>
              You can also import data from a previous Money₂Time backup or migrate from the
              Money Manager app. Importing replaces all existing data on your device.
            </p>
          </Section>

          <Section title="7. Data Deletion">
            <p>You have full control over your data at all times:</p>
            <ul>
              <li>
                <strong>Reset All Data</strong> — permanently deletes all transactions, accounts,
                categories, recurring rules, and wage settings from your device
              </li>
              <li>
                <strong>Reset Transactions Only</strong> — clears your transaction history while
                preserving accounts and categories
              </li>
              <li>
                <strong>Uninstall the App</strong> — removes the local database and all stored
                data entirely
              </li>
            </ul>
            <p>
              Note: Resetting data within the App does not delete your subscription status held
              by Apple/Google or analytics data previously sent to Mixpanel. To request deletion
              of analytics data, contact us at the email below.
            </p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>The App uses the following third-party services:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Service</th>
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Purpose</th>
                    <th className="text-left py-2 font-semibold text-foreground">Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/40">
                    <td className="py-2 pr-4">Mixpanel</td>
                    <td className="py-2 pr-4">Anonymous usage analytics</td>
                    <td className="py-2">Anonymous ID, feature usage events, preferences</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 pr-4">RevenueCat</td>
                    <td className="py-2 pr-4">Subscription management</td>
                    <td className="py-2">Anonymous ID, subscription status</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Apple App Store / Google Play</td>
                    <td className="py-2 pr-4">Payment processing</td>
                    <td className="py-2">Handled by Apple/Google directly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              The App does <strong>not</strong> display advertisements or use advertising SDKs.
            </p>
          </Section>

          <Section title="9. Data Security">
            <p>
              Your financial data is stored in an unencrypted local database protected by your
              device&apos;s built-in security (passcode, Face ID, Touch ID). The App does not
              implement additional encryption as it does not transmit financial data over any
              network. The App has declared that it does not use non-exempt encryption.
            </p>
          </Section>

          <Section title="10. Children&apos;s Privacy">
            <p>
              The App is not directed at children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you believe a child has
              provided data through the App, please contact us and we will take steps to remove
              such information.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be reflected on
              this page with an updated &ldquo;Last updated&rdquo; date. Continued use of the App
              after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, need support, or want to
              request deletion of analytics data, please contact us at:
            </p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              You can also use the{" "}
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                contact form
              </Link>
              {" "}on this site.
            </p>
          </Section>
        </div>
      </main>

      <footer className="py-12 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-1.5">
              <Image src="/icon.png" alt="Money2Time" width={28} height={28} className="rounded-md" />
              <span className="font-black text-sm tracking-[-0.9px] flex items-baseline">
                <span style={{ color: "#F37D57" }}>Money</span>
                <sub className="text-[9px] font-black ml-[1px]" style={{ color: "#F6B750" }}>2</sub>
                <span className="ml-[-1px]" style={{ color: "#B65F48" }}>Time</span>
              </span>
            </Link>
            <div className="flex items-center gap-6 text-sm text-foreground-muted">
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Use
              </Link>
            </div>
            <p className="text-foreground-muted text-sm">
              &copy; {new Date().getFullYear()} Money₂Time. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4">
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
