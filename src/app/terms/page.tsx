import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms of Use - Money₂Time",
  description: "Terms of Use for the Money₂Time iOS app.",
};

export default function TermsOfUse() {
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
          Terms of Use
        </h1>
        <p className="text-foreground-muted text-sm mb-12">
          Last updated: March 25, 2026
        </p>

        <div className="prose-m2t space-y-10 text-foreground-soft text-[15px] leading-relaxed">
          <Section title="Overview">
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the Money₂Time mobile
              application (&ldquo;the App&rdquo;), developed and operated by Nelson Gan
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By downloading or using
              the App, you agree to be bound by these Terms. If you do not agree, do not use the App.
            </p>
          </Section>

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using Money₂Time, you confirm that you are at least 13 years of age
              and have the legal capacity to enter into these Terms. If you are using the App on
              behalf of an organisation, you represent that you have authority to bind that
              organisation to these Terms.
            </p>
          </Section>

          <Section title="2. Description of the App">
            <p>
              Money₂Time is a personal finance app that helps you understand the true cost of your
              spending by converting expenses into the equivalent hours of your time based on your
              hourly wage. Core features include:
            </p>
            <ul>
              <li>Expense and income tracking across multiple accounts</li>
              <li>Money-to-time conversion based on your wage settings</li>
              <li>Recurring transaction rules for bills and subscriptions</li>
              <li>Spending breakdowns, insights, and sentiment tracking</li>
              <li>Local data export and import (JSON and Money Manager formats)</li>
              <li>Customisable notifications for reminders and summaries</li>
            </ul>
          </Section>

          <Section title="3. Free and Pro Plans">
            <p>
              The App is available on a freemium basis. Certain features are limited on the free
              plan and require an active <strong>Pro</strong> subscription to unlock:
            </p>
            <Subsection title="Free Plan">
              <ul>
                <li>Up to 5 accounts</li>
                <li>Up to 9 expense/income categories</li>
                <li>Up to 5 recurring transaction rules</li>
                <li>Up to 5 hourly rate entries</li>
                <li>Unlimited transaction records</li>
              </ul>
            </Subsection>
            <Subsection title="Pro Plan">
              <ul>
                <li>Unlimited accounts, categories, recurring rules, and hourly rate entries</li>
                <li>Available as a monthly subscription, annual subscription, or lifetime purchase</li>
              </ul>
            </Subsection>
            <p>
              We reserve the right to modify free-plan limits or Pro plan features at any time.
              Material changes will be communicated through an app update or on this website.
            </p>
          </Section>

          <Section title="4. In-App Purchases & Subscriptions">
            <p>
              Pro subscriptions and the lifetime purchase are processed through the Apple App Store
              or Google Play Store. By making a purchase you agree to the payment terms of the
              respective store.
            </p>
            <ul>
              <li>
                <strong>Billing.</strong> Subscriptions are billed in advance on a monthly or
                annual cycle. The price displayed at checkout is the price you will be charged.
              </li>
              <li>
                <strong>Auto-renewal.</strong> Subscriptions renew automatically unless cancelled
                at least 24 hours before the end of the current period. Manage or cancel your
                subscription via{" "}
                <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener noreferrer">
                  Apple Subscriptions
                </a>{" "}
                or{" "}
                <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer">
                  Google Play Subscriptions
                </a>.
              </li>
              <li>
                <strong>Refunds.</strong> Refund requests are handled by Apple or Google under
                their respective refund policies. We do not process refunds directly.
              </li>
              <li>
                <strong>Restoring purchases.</strong> You can restore a previous purchase on a new
                device using the &ldquo;Restore Purchases&rdquo; option in the App&apos;s settings.
              </li>
              <li>
                <strong>Lifetime purchase.</strong> A lifetime purchase grants access to Pro
                features for the lifetime of the App. We make no guarantee that the App will
                continue to be available indefinitely.
              </li>
            </ul>
            <p>
              In-app purchases are also subject to Apple&apos;s{" "}
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
                Standard End User Licence Agreement
              </a>.
            </p>
          </Section>

          <Section title="5. Your Data">
            <p>
              All financial data you enter — transactions, accounts, categories, wage settings, and
              preferences — is stored <strong>locally on your device</strong>. We do not have access
              to your financial data and do not store it on any server.
            </p>
            <p>
              You are solely responsible for maintaining backups of your data. Use the built-in
              export feature to create a backup. We are not liable for any data loss resulting from
              app deletion, device failure, or accidental reset.
            </p>
            <p>
              For full details on data handling, see our{" "}
              <Link href="/privacy" className="text-primary font-semibold hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </Section>

          <Section title="6. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>Reverse-engineer, decompile, or disassemble the App</li>
              <li>Attempt to gain unauthorised access to any part of the App or its related systems</li>
              <li>Use the App for any unlawful purpose or in violation of any applicable laws</li>
              <li>Redistribute, resell, or sublicense the App or any part of it</li>
              <li>Use automated means to access or interact with the App</li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The App, including its design, code, graphics, and content, is owned by Nelson Gan
              and protected by copyright and other intellectual property laws. These Terms do not
              grant you any rights to use our trademarks, logos, or brand elements.
            </p>
            <p>
              Your financial data belongs to you. By using the App, you grant us no rights over
              your personal data.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              The App is provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
              <strong>&ldquo;as available&rdquo;</strong> without warranties of any kind, express
              or implied, including but not limited to merchantability, fitness for a particular
              purpose, or non-infringement.
            </p>
            <p>
              Money₂Time is a personal productivity tool and is <strong>not</strong> a financial
              adviser, accountant, or regulated financial service. Nothing in the App constitutes
              financial advice. You should consult a qualified professional for financial decisions.
            </p>
            <p>
              We do not warrant that the App will be error-free, uninterrupted, or free of bugs.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, we shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of, or inability to use, the App — including but not limited to data loss,
              financial decisions made based on App output, or device issues.
            </p>
            <p>
              Our total liability to you for any claim arising from these Terms or your use of
              the App shall not exceed the amount you paid for your current Pro subscription
              period, or $10 USD if you are on the free plan.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              We may suspend or terminate your access to the App at any time, with or without
              cause, and with or without notice. Upon termination, your right to use the App
              ceases immediately. As your data is stored locally, it will remain on your device
              until you uninstall the App or reset it manually.
            </p>
            <p>
              You may stop using the App at any time by uninstalling it.
            </p>
          </Section>

          <Section title="11. Changes to These Terms">
            <p>
              We may update these Terms from time to time. When we do, we will update the
              &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the App
              after changes constitutes your acceptance of the revised Terms. For material changes,
              we will make reasonable efforts to notify you through an app update or notice on
              this website.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of Singapore,
              without regard to its conflict of law provisions. Any disputes arising from these
              Terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>
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
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
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
